import {
  BadGatewayException,
  BadRequestException,
  Injectable,
} from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello() {
    throw new BadGatewayException();
    return 'Hello World!';
  }
}
