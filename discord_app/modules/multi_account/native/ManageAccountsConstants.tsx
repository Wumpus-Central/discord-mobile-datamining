// discord_app/modules/multi_account/native/ManageAccountsConstants.tsx
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const AuthStates = Constants.AuthStates;
const LOGIN = AuthStates.LOGIN;
const ACCOUNT_DISABLED_OR_DELETION_SCHEDULED = AuthStates.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED;
const MFA = AuthStates.MFA;
const result = size.fileFinishedImporting("modules/multi_account/native/ManageAccountsConstants.tsx");

export const ManageAccountsScreens = {
  MANAGE_ACCOUNTS: "MANAGE_ACCOUNTS",
  LOGIN,
  [LOGIN]: "LOGIN",
  ACCOUNT_DISABLED_OR_DELETION_SCHEDULED,
  [ACCOUNT_DISABLED_OR_DELETION_SCHEDULED]: "ACCOUNT_DISABLED_OR_DELETION_SCHEDULED",
  MFA,
  [MFA]: "MFA",
};
