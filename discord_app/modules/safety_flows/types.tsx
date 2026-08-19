// === Module 17084: TaskType ===

// Module 17084 (TaskType)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2597 */;

let obj = { EMAIL_VERIFICATION: "email_verification", PHONE_VERIFICATION: "phone_verification", GENERIC_CALL_TO_ACTION: "generic_call_to_action", REFRESH_APP: "refresh_app", AGE_VERIFICATION: "age_verification", PARENTAL_CONSENT_CONNECTION: "parental_consent_connection" };
const items = [obj.PARENTAL_CONSENT_CONNECTION];
const set = new Set(Object.values(obj));
obj = { OVERVIEW: "OVERVIEW", ENTER_EMAIL: "ENTER_EMAIL", VERIFY_EMAIL: "VERIFY_EMAIL", UPDATE_APP: "UPDATE_APP", AGE_VERIFICATION: "AGE_VERIFICATION", PARENTAL_CONSENT_CONNECTION: "PARENTAL_CONSENT_CONNECTION", ERROR: "ERROR" };
const items1 = [, ];
({ ENTER_EMAIL: arr2[0], VERIFY_EMAIL: arr2[1] } = obj);
const items2 = [obj.AGE_VERIFICATION];
const items3 = [obj.PARENTAL_CONSENT_CONNECTION];
const obj1 = {};
const intl = getSystemLocale.intl;
obj1[obj.EMAIL_VERIFICATION] = intl.string(messagesProxyDefault["Qm6K/s"]);
const intl2 = getSystemLocale.intl;
obj1[obj.AGE_VERIFICATION] = intl2.string(messagesProxyDefault["dSkE/A"]);
const intl3 = getSystemLocale.intl;
obj1[obj.PARENTAL_CONSENT_CONNECTION] = intl3.string(messagesProxyDefault.dMMSA0);
const set1 = new Set(items);
const result = obj132.fileFinishedImporting("modules/safety_flows/types.tsx");

export const TaskType = obj;
export const SafetyFlowComponentType = obj;
export const SUPPORTED_SAFETY_FLOW_COMPONENT_TYPES = set;
export const OWN_MODAL_TASK_TYPES = set1;
export const SafetyFlowScreens = obj;
export const TASK_TYPE_TO_SCREENS = { [obj.EMAIL_VERIFICATION]: items1, [obj.AGE_VERIFICATION]: items2, [obj.PARENTAL_CONSENT_CONNECTION]: items3 };
export const TASK_TYPE_TO_TITLE = obj1;
export const TaskInputType = { Empty: "empty", VerificationCode: "verification_code" };