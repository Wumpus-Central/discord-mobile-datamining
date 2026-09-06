// === Module 16376: ManageAccountsScreens ===

// Module 16376 (ManageAccountsScreens)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;

const AuthStates = ME.AuthStates;
const LOGIN = AuthStates.LOGIN;
const ACCOUNT_DISABLED_OR_DELETION_SCHEDULED = AuthStates.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED;
const MFA = AuthStates.MFA;
const result = set.fileFinishedImporting("modules/multi_account/native/ManageAccountsConstants.tsx");

export const ManageAccountsScreens = { MANAGE_ACCOUNTS: "MANAGE_ACCOUNTS", LOGIN, [LOGIN]: "LOGIN", ACCOUNT_DISABLED_OR_DELETION_SCHEDULED, [ACCOUNT_DISABLED_OR_DELETION_SCHEDULED]: "ACCOUNT_DISABLED_OR_DELETION_SCHEDULED", MFA, [MFA]: "MFA" };