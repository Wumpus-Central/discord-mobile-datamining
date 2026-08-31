// === Module 17411: TaskType ===

// Module 17411 (TaskType)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2633 */;
import set from "set" /* 2 */;

let obj = { REFRESH_APP: -1, [-1]: "REFRESH_APP", EMAIL_VERIFICATION: 3, [3]: "EMAIL_VERIFICATION", AGE_VERIFICATION: 9, [9]: "AGE_VERIFICATION", PARENTAL_CONSENT_CONNECTION: 10, [10]: "PARENTAL_CONSENT_CONNECTION", APP_STORE_PARENTAL_REVOCATION: 11, [11]: "APP_STORE_PARENTAL_REVOCATION" };
obj = { EMAIL_VERIFICATION: "email_verification", PHONE_VERIFICATION: "phone_verification", GENERIC_CALL_TO_ACTION: "generic_call_to_action", REFRESH_APP: "refresh_app", AGE_VERIFICATION: "age_verification", PARENTAL_CONSENT_CONNECTION: "parental_consent_connection", APP_STORE_PARENTAL_REVOCATION: "app_store_parental_revocation" };
let set = new Set(Object.values(obj));
const items = [obj.PARENTAL_CONSENT_CONNECTION];
const items1 = [obj.APP_STORE_PARENTAL_REVOCATION];
const set1 = new Set(items);
obj = { OVERVIEW: "OVERVIEW", ENTER_EMAIL: "ENTER_EMAIL", VERIFY_EMAIL: "VERIFY_EMAIL", UPDATE_APP: "UPDATE_APP", AGE_VERIFICATION: "AGE_VERIFICATION", PARENTAL_CONSENT_CONNECTION: "PARENTAL_CONSENT_CONNECTION", APP_STORE_PARENTAL_REVOCATION: "APP_STORE_PARENTAL_REVOCATION", ERROR: "ERROR" };
const items2 = [, ];
({ ENTER_EMAIL: arr3[0], VERIFY_EMAIL: arr3[1] } = obj);
const items3 = [obj.AGE_VERIFICATION];
const items4 = [obj.PARENTAL_CONSENT_CONNECTION];
const items5 = [obj.APP_STORE_PARENTAL_REVOCATION];
const obj1 = {};
const intl = getSystemLocale.intl;
obj1[obj.EMAIL_VERIFICATION] = intl.string(messagesProxyDefault["Qm6K/s"]);
const intl2 = getSystemLocale.intl;
obj1[obj.AGE_VERIFICATION] = intl2.string(messagesProxyDefault["dSkE/A"]);
const intl3 = getSystemLocale.intl;
obj1[obj.PARENTAL_CONSENT_CONNECTION] = intl3.string(messagesProxyDefault.dMMSA0);
const intl4 = getSystemLocale.intl;
obj1[obj.APP_STORE_PARENTAL_REVOCATION] = intl4.string(messagesProxyDefault.Z87TFb);
const result = set.fileFinishedImporting("modules/safety_flows/types.tsx");

export const TaskType = obj;
export const SafetyFlowComponentType = obj;
export const SUPPORTED_SAFETY_FLOW_COMPONENT_TYPES = set;
export const OWN_MODAL_TASK_TYPES = set1;
export const HIDE_SIDEBAR_STEP_LIST_TASK_TYPES = new Set(items1);
export const SafetyFlowScreens = obj;
export const TASK_TYPE_TO_SCREENS = { [obj.EMAIL_VERIFICATION]: items2, [obj.AGE_VERIFICATION]: items3, [obj.PARENTAL_CONSENT_CONNECTION]: items4, [obj.APP_STORE_PARENTAL_REVOCATION]: items5 };
export const TASK_TYPE_TO_TITLE = obj1;
export const TaskInputType = { Empty: "empty", VerificationCode: "verification_code" };