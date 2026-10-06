// discord_app/modules/safety_flows/types.tsx
import intl5 from "../../intl/index.native.tsx";
import _modDef2815 from "SafetyFlows.messages.js";
import size from "../../../_runtime/metro/00002__.js";

const obj = {
  REFRESH_APP: -1,
  [-1]: "REFRESH_APP",
  EMAIL_VERIFICATION: 3,
  [3]: "EMAIL_VERIFICATION",
  AGE_VERIFICATION: 9,
  [9]: "AGE_VERIFICATION",
  PARENTAL_CONSENT_CONNECTION: 10,
  [10]: "PARENTAL_CONSENT_CONNECTION",
  APP_STORE_PARENTAL_REVOCATION: 11,
  [11]: "APP_STORE_PARENTAL_REVOCATION",
};
const obj2 = {
  EMAIL_VERIFICATION: "email_verification",
  PHONE_VERIFICATION: "phone_verification",
  GENERIC_CALL_TO_ACTION: "generic_call_to_action",
  REFRESH_APP: "refresh_app",
  AGE_VERIFICATION: "age_verification",
  PARENTAL_CONSENT_CONNECTION: "parental_consent_connection",
  APP_STORE_PARENTAL_REVOCATION: "app_store_parental_revocation",
};
const items = [obj.PARENTAL_CONSENT_CONNECTION];
const items1 = [obj.APP_STORE_PARENTAL_REVOCATION];
const set = new Set(Object.values(obj2));
const obj3 = {
  OVERVIEW: "OVERVIEW",
  ENTER_EMAIL: "ENTER_EMAIL",
  VERIFY_EMAIL: "VERIFY_EMAIL",
  UPDATE_APP: "UPDATE_APP",
  AGE_VERIFICATION: "AGE_VERIFICATION",
  PARENTAL_CONSENT_CONNECTION: "PARENTAL_CONSENT_CONNECTION",
  APP_STORE_PARENTAL_REVOCATION: "APP_STORE_PARENTAL_REVOCATION",
  ERROR: "ERROR",
};
const items2 = [,];
({ ENTER_EMAIL: arr3[0], VERIFY_EMAIL: arr3[1] } = obj3);
const items3 = [obj3.AGE_VERIFICATION];
const items4 = [obj3.PARENTAL_CONSENT_CONNECTION];
const items5 = [obj3.APP_STORE_PARENTAL_REVOCATION];
const obj4 = {};
const EMAIL_VERIFICATION = obj.EMAIL_VERIFICATION;
const set1 = new Set(items);
const set2 = new Set(items1);
const intl = intl5.intl;
obj4[EMAIL_VERIFICATION] = intl.string(_modDef2815["Qm6K/s"]);
const AGE_VERIFICATION = obj.AGE_VERIFICATION;
const intl2 = intl5.intl;
obj4[AGE_VERIFICATION] = intl2.string(_modDef2815["dSkE/A"]);
const PARENTAL_CONSENT_CONNECTION = obj.PARENTAL_CONSENT_CONNECTION;
const intl3 = intl5.intl;
obj4[PARENTAL_CONSENT_CONNECTION] = intl3.string(_modDef2815.dMMSA0);
const APP_STORE_PARENTAL_REVOCATION = obj.APP_STORE_PARENTAL_REVOCATION;
const intl4 = intl5.intl;
obj4[APP_STORE_PARENTAL_REVOCATION] = intl4.string(_modDef2815.Z87TFb);
const result = size.fileFinishedImporting("modules/safety_flows/types.tsx");

export const TaskType = obj;
export const SafetyFlowComponentType = obj2;
export const SUPPORTED_SAFETY_FLOW_COMPONENT_TYPES = set;
export const OWN_MODAL_TASK_TYPES = set1;
export const HIDE_SIDEBAR_STEP_LIST_TASK_TYPES = set2;
export const SafetyFlowScreens = obj3;
export const TASK_TYPE_TO_SCREENS = {
  [obj.EMAIL_VERIFICATION]: items2,
  [obj.AGE_VERIFICATION]: items3,
  [obj.PARENTAL_CONSENT_CONNECTION]: items4,
  [obj.APP_STORE_PARENTAL_REVOCATION]: items5,
};
export const TASK_TYPE_TO_TITLE = obj4;
export const TaskInputType = { Empty: "empty", VerificationCode: "verification_code" };
