// === Module 5427: set ===

// Module 5427 (set)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import combinedDefault from "combined" /* 1993 */;
import messagesProxyDefault from "messagesProxy" /* 2853 */;
import AgeVerificationModalEntryPoint from "AgeVerificationModalEntryPoint" /* 5254 */;
import openIncodeAgeVerificationModalDefault from "openIncodeAgeVerificationModal" /* 5428 */;

const HelpdeskArticles = ME.HelpdeskArticles;
let items = [AgeVerificationModalEntryPoint.AgeVerificationModalEntryPoint.NSFW_GUILD];
let obj = { title: messagesProxyDefault["2yLvkS"], description: messagesProxyDefault.eJmat5 };
obj[obj.FACIAL_AGE_ESTIMATION] = obj;
const set = new Set(items);
obj[obj.ID_VERIFICATION] = { title: messagesProxyDefault.dwkwo0, description: messagesProxyDefault.ZdmRwW };
obj[obj.GOOGLE_WALLET] = { title: messagesProxyDefault.Y9sLpR, description: messagesProxyDefault.dah4bF };
let result = obj132.fileFinishedImporting("modules/age_assurance/AgeVerificationConstants.tsx");

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
      const obj = openIncodeAgeVerificationModalDefault;
      obj.openUrl(combinedDefault.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_SYSTEM_DMS));
      const result = callback(dependencyMap[1]).trackAgeVerificationModalClicked(callback, callback(dependencyMap[1]).AgeVerificationModalVersion.PRIMARY, callback(dependencyMap[1]).AgeVerificationModalCta.SYSTEM_DMS_LEARN_MORE);
    }
  });
  items[2] = obj;
  return items;
};
export const AGE_VERIFICATION_MODAL_KEY = "AGE_VERIFICATION_MODAL_KEY";
export const AGE_VERIFICATION_GET_STARTED_MODAL_KEY = "AGE_VERIFICATION_GET_STARTED_MODAL_KEY";
export const AGE_VERIFICATION_QUEST_UNSUPPORTED_ALERT_KEY = "AGE_VERIFICATION_QUEST_UNSUPPORTED_ALERT_KEY";
export const VerificationVendorName = { K_ID: "K_ID", GOOGLE_WALLET: "GOOGLE_WALLET", INCODE: "INCODE" };
export const VerificationMethod = obj;
export const VERIFICATION_METHOD_TITLE_MAP = obj;