import { ResponseCode } from '../api';
import { BaseException } from './base.exeception';

export class FamilyMemberException extends BaseException {
  constructor(responseCode: ResponseCode) {
    super(responseCode);
  }
}