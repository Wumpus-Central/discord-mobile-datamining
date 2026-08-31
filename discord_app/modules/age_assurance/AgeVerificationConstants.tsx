// === Module 8651: set ===

// Module 8651 (set)
import ME from "ME" /* 676 */;
import messagesProxyDefault from "messagesProxy" /* 2889 */;
import AgeVerificationModalEntryPoint from "AgeVerificationModalEntryPoint" /* 8652 */;
import set from "set" /* 2 */;

const HelpdeskArticles = ME.HelpdeskArticles;
let items = [AgeVerificationModalEntryPoint.AgeVerificationModalEntryPoint.NSFW_GUILD];
let set = new Set(items);
let obj = { FACIAL_AGE_ESTIMATION: 1, [1]: "FACIAL_AGE_ESTIMATION", ID_VERIFICATION: 2, [2]: "ID_VERIFICATION", MODULAR: 3, [3]: "MODULAR", GOOGLE_WALLET: 9, [9]: "GOOGLE_WALLET" };
obj = {};
obj = { title: messagesProxyDefault["2yLvkS"], description: messagesProxyDefault.eJmat5 };
obj[obj.FACIAL_AGE_ESTIMATION] = obj;
obj[obj.ID_VERIFICATION] = { title: messagesProxyDefault.dwkwo0, description: messagesProxyDefault.ZdmRwW };
const obj1 = { title: messagesProxyDefault.dwkwo0, description: messagesProxyDefault.ZdmRwW };
obj[obj.GOOGLE_WALLET] = { title: messagesProxyDefault.Y9sLpR, description: messagesProxyDefault.dah4bF };
let result = set.fileFinishedImporting("modules/age_assurance/AgeVerificationConstants.tsx");

export const FULLSCREEN_AGE_VERIFICATION_ENTRY_POINTS = set;
export const getAgeVerificationGetStartedSteps = function getAgeVerificationGetStartedSteps(arg0) {
  const _require = arg0;
  let obj = { title: null, description: null };
  const intl = _require(1236).intl;
  obj[0] = intl.string(_require(1236).t.HphYKp);
  const intl2 = _require(1236).intl;
  obj[1] = intl2.string(_require(1236).t["GCZC+9"]);
  const items = [obj, , ];
  obj = { title: null, description: null };
  const intl3 = _require(1236).intl;
  obj[0] = intl3.string(_require(1236).t.nkO4L3);
  const intl4 = _require(1236).intl;
  obj[1] = intl4.string(_require(1236).t.rHZFsH);
  items[1] = obj;
  obj = { title: null, description: null };
  const intl5 = _require(1236).intl;
  obj[0] = intl5.string(_require(1236).t.aVwLfn);
  const intl6 = _require(1236).intl;
  obj[1] = intl6.format(_require(1236).t.n5vd1E, {
    handleOnHelpUrlHook() {
      const obj = closure_1_1(closure_1_2[3]);
      obj.openUrl(closure_1_1(closure_1_2[4]).getArticleURL(closure_1_3.TIGGER_PAWTECT_SYSTEM_DMS));
      const obj2 = closure_1_1(closure_1_2[4]);
      const result = callback(closure_1_2[1]).trackAgeVerificationModalClicked(callback, callback(closure_1_2[1]).AgeVerificationModalVersion.PRIMARY, callback(closure_1_2[1]).AgeVerificationModalCta.SYSTEM_DMS_LEARN_MORE);
    }
  });
  items[2] = obj;
  return items;
};
export const TRUSTED_PROVIDERS_URL = "https://discord.com/safety/age-assurance-on-discord-vendors-methods-and-your-data";
export const AGE_VERIFICATION_MODAL_KEY = "AGE_VERIFICATION_MODAL_KEY";
export const AGE_VERIFICATION_GET_STARTED_MODAL_KEY = "AGE_VERIFICATION_GET_STARTED_MODAL_KEY";
export const AGE_VERIFICATION_QUEST_UNSUPPORTED_ALERT_KEY = "AGE_VERIFICATION_QUEST_UNSUPPORTED_ALERT_KEY";
export const MANUAL_REVIEW_DECIDED_TEEN_ALERT_KEY = "MANUAL_REVIEW_DECIDED_TEEN_ALERT_KEY";
export const VerificationVendorName = { K_ID: "K_ID", GOOGLE_WALLET: "GOOGLE_WALLET", INCODE: "INCODE" };
export const VerificationMethod = obj;
export const VERIFICATION_METHOD_TITLE_MAP = obj;