class EnvironmentVariables {
  public env = process.env.NODE_ENV || process.env.ENVIRONMENT || 'production';

  get isDev(): boolean {
    return !this.isProd;
  }
  get isProd(): boolean {
    return this.env === 'production' || this.env === 'Prod';
  }

  get LoggerDebugLevel(): string {
    return process.env.LoggerDebugLevel || 'debug';
  }

  get IS_OFFLINE(): boolean {
    return (
      process.env.IS_OFFLINE === 'true' || process.env.ENVIRONMENT === 'Local'
    );
  }

  get morganConfig(): string {
    return process.env.NODE_ENV === 'production' ? 'tiny' : 'combined';
  }

  get adminRoleSecret(): string {
    return process.env.ADMIN_ROLE_SECRET;
  }

  get redis_host(): string {
    return process.env.REDISHOST;
  }

  get redis_port(): string {
    return process.env.REDISPORT;
  }

  get redis_password(): string {
    return process.env.REDISPASSWORD;
  }

  get s3_images_bucket(): string {
    return process.env.S3ImagesBucket;
  }
}

export default new EnvironmentVariables();
