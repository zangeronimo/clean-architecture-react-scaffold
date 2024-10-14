import AccountModel from './models/account-model';

type Credential = {
  email: string;
  password: string;
};

export default interface Authentication {
  auth(credential: Credential): Promise<AccountModel>;
}
