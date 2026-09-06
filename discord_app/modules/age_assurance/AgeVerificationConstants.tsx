// === Module 8412: AgeVerificationConstants ===

// Module 8412 (AgeVerificationConstants)
import Constants from "Constants" /* 1074 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import _modDef2946 from "module_2946" /* 2946 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8411 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8413 */;
import size from "module_2" /* 2 */;

const HelpdeskArticles = Constants.HelpdeskArticles;
let items = [AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.NSFW_GUILD];
let obj = { FACIAL_AGE_ESTIMATION: 1, [1]: "FACIAL_AGE_ESTIMATION", ID_VERIFICATION: 2, [2]: "ID_VERIFICATION", MODULAR: 3, [3]: "MODULAR", GOOGLE_WALLET: 9, [9]: "GOOGLE_WALLET" };
obj = {};
obj = { title: _modDef2946["2yLvkS"], description: _modDef2946.eJmat5 };
obj[obj.FACIAL_AGE_ESTIMATION] = obj;
const set = new Set(items);
obj[obj.ID_VERIFICATION] = { title: _modDef2946.dwkwo0, description: _modDef2946.ZdmRwW };
const obj1 = { title: _modDef2946.dwkwo0, description: _modDef2946.ZdmRwW };
obj[obj.GOOGLE_WALLET] = { title: _modDef2946.Y9sLpR, description: _modDef2946.dah4bF };
let result = size.fileFinishedImporting("modules/age_assurance/AgeVerificationConstants.tsx");

export const FULLSCREEN_AGE_VERIFICATION_ENTRY_POINTS = set;
export const getAgeVerificationGetStartedSteps = function getAgeVerificationGetStartedSteps(arg0) {
  _require = arg0;
  let obj = { title: null, description: null };
  const intl = require("util").intl;
  obj.title = intl.string(require("util").t.HphYKp);
  const intl2 = require("util").intl;
  obj.description = intl2.string(require("util").t["GCZC+9"]);
  const items = [obj, , ];
  obj = { title: null, description: null };
  const intl3 = require("util").intl;
  obj.title = intl3.string(require("util").t.nkO4L3);
  const intl4 = require("util").intl;
  obj.description = intl4.string(require("util").t.rHZFsH);
  items[1] = obj;
  obj = { title: null, description: null };
  const intl5 = require("util").intl;
  obj.title = intl5.string(require("util").t.aVwLfn);
  const intl6 = require("util").intl;
  obj.description = intl6.format(require("util").t.n5vd1E, {
    handleOnHelpUrlHook() {
      const obj = AgeVerificationActionCreatorsDefault;
      obj.openUrl(HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_SYSTEM_DMS));
      const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(closure_0, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.SYSTEM_DMS_LEARN_MORE);
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