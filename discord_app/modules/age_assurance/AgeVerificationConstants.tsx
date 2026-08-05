import { getSystemLocale } from "../../intl/index.native.tsx";
// discord_app/modules/age_assurance/AgeVerificationConstants.tsx
import { HelpdeskArticles } from "ME";
import set from "getSystemLocale";

let items = [require("AgeVerificationModalEntryPoint").AgeVerificationModalEntryPoint.NSFW_GUILD];
let set = new Set(items);
let obj = { FACIAL_AGE_ESTIMATION: 1, [1]: "FACIAL_AGE_ESTIMATION", ID_VERIFICATION: 2, [2]: "ID_VERIFICATION", MODULAR: 3, [3]: "MODULAR", GOOGLE_WALLET: 9, [9]: "GOOGLE_WALLET" };
obj = {};
obj = { title: require("messagesProxy")["2yLvkS"], description: require("messagesProxy").eJmat5 };
obj[obj.FACIAL_AGE_ESTIMATION] = obj;
obj[obj.ID_VERIFICATION] = { title: require("messagesProxy").dwkwo0, description: require("messagesProxy").ZdmRwW };
const obj1 = { title: require("messagesProxy").dwkwo0, description: require("messagesProxy").ZdmRwW };
obj[obj.GOOGLE_WALLET] = { title: require("messagesProxy").Y9sLpR, description: require("messagesProxy").dah4bF };
let result = set.fileFinishedImporting("modules/age_assurance/AgeVerificationConstants.tsx");

export const FULLSCREEN_AGE_VERIFICATION_ENTRY_POINTS = set;
export const getAgeVerificationGetStartedSteps = function getAgeVerificationGetStartedSteps(arg0) {
  const _require = arg0;
  let obj = { title: null, description: null };
  const intl = _getSystemLocale.intl;
  obj[0] = intl.string(_getSystemLocale.t.HphYKp);
  const intl2 = _getSystemLocale.intl;
  obj[1] = intl2.string(_getSystemLocale.t["GCZC+9"]);
  const items = [obj, , ];
  obj = { title: null, description: null };
  const intl3 = _getSystemLocale.intl;
  obj[0] = intl3.string(_getSystemLocale.t.nkO4L3);
  const intl4 = _getSystemLocale.intl;
  obj[1] = intl4.string(_getSystemLocale.t.rHZFsH);
  items[1] = obj;
  obj = { title: null, description: null };
  const intl5 = _getSystemLocale.intl;
  obj[0] = intl5.string(_getSystemLocale.t.aVwLfn);
  const intl6 = _getSystemLocale.intl;
  obj[1] = intl6.format(_getSystemLocale.t.n5vd1E, {
    handleOnHelpUrlHook() {
      const obj = outer1_1(outer1_2[3]);
      obj.openUrl(outer1_1(outer1_2[4]).getArticleURL(outer1_3.TIGGER_PAWTECT_SYSTEM_DMS));
      const obj2 = outer1_1(outer1_2[4]);
      const result = callback(outer1_2[1]).trackAgeVerificationModalClicked(callback, callback(outer1_2[1]).AgeVerificationModalVersion.PRIMARY, callback(outer1_2[1]).AgeVerificationModalCta.SYSTEM_DMS_LEARN_MORE);
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