// === Module 8085: AgeVerificationConstants ===

// Module 8085 (AgeVerificationConstants)
import Constants from "Constants" /* 1085 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import _modDef3045 from "module_3045" /* 3045 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8084 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8086 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const HelpdeskArticles = Constants.HelpdeskArticles;
let items = [AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.NSFW_GUILD];
let obj = { FACIAL_AGE_ESTIMATION: 1, [1]: "FACIAL_AGE_ESTIMATION", ID_VERIFICATION: 2, [2]: "ID_VERIFICATION", MODULAR: 3, [3]: "MODULAR", GOOGLE_WALLET: 9, [9]: "GOOGLE_WALLET" };
let obj2 = {};
const set = new Set(items);
let obj3 = { title: _modDef3045["2yLvkS"], description: _modDef3045.eJmat5 };
obj2[obj.FACIAL_AGE_ESTIMATION] = obj3;
let obj4 = { title: _modDef3045.dwkwo0, description: _modDef3045.ZdmRwW };
obj2[obj.ID_VERIFICATION] = obj4;
obj2[obj.GOOGLE_WALLET] = { title: _modDef3045.Y9sLpR, description: _modDef3045.dah4bF };
({ title: _modDef3045.Y9sLpR, description: _modDef3045.dah4bF });
let result = size.fileFinishedImporting("modules/age_assurance/AgeVerificationConstants.tsx");

export const FULLSCREEN_AGE_VERIFICATION_ENTRY_POINTS = set;
export const getAgeVerificationGetStartedSteps = function getAgeVerificationGetStartedSteps(arg0) {
  let closure_0;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let obj4;
  _require = arg0;
  let obj = { title: intl.string(require("intl").t.HphYKp), description: intl2.string(require("intl").t["GCZC+9"]) };
  intl = require("intl").intl;
  intl2 = require("intl").intl;
  const items = [obj, , ];
  const obj2 = { title: intl3.string(require("intl").t.nkO4L3), description: intl4.string(require("intl").t.rHZFsH) };
  intl3 = require("intl").intl;
  intl4 = require("intl").intl;
  items[1] = obj2;
  const obj3 = { title: intl5.string(require("intl").t.aVwLfn), description: intl6.format(require("intl").t.n5vd1E, obj4) };
  intl5 = require("intl").intl;
  intl6 = require("intl").intl;
  obj4 = {
    handleOnHelpUrlHook() {
      const openUrl = AgeVerificationActionCreatorsDefault.openUrl;
      AgeVerificationActionCreatorsDefault;
      const obj = HelpdeskUtilsDefault;
      openUrl(obj.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_SYSTEM_DMS));
      const trackAgeVerificationModalClicked = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked;
      AgeVerificationAnalyticsUtils;
      const result = trackAgeVerificationModalClicked(closure_0, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.SYSTEM_DMS_LEARN_MORE);
    }
  };
  items[2] = obj3;
  return items;
};
export const TRUSTED_PROVIDERS_URL = "https://discord.com/safety/age-assurance-on-discord-vendors-methods-and-your-data";
export const FALLBACK_TEEN_AGE_RANGE = "13-17";
export const AGE_VERIFICATION_MODAL_KEY = "AGE_VERIFICATION_MODAL_KEY";
export const AGE_VERIFICATION_GET_STARTED_MODAL_KEY = "AGE_VERIFICATION_GET_STARTED_MODAL_KEY";
export const AGE_VERIFICATION_QUEST_UNSUPPORTED_ALERT_KEY = "AGE_VERIFICATION_QUEST_UNSUPPORTED_ALERT_KEY";
export const MANUAL_REVIEW_DECIDED_TEEN_ALERT_KEY = "MANUAL_REVIEW_DECIDED_TEEN_ALERT_KEY";
export const MANUAL_REVIEW_FALLBACK_ALERT_KEY = "MANUAL_REVIEW_FALLBACK_ALERT_KEY";
export const MANUAL_REVIEW_PENDING_ALERT_KEY = "MANUAL_REVIEW_PENDING_ALERT_KEY";
export const VerificationVendorName = { K_ID: "K_ID", GOOGLE_WALLET: "GOOGLE_WALLET", INCODE: "INCODE" };
export const VerificationMethod = obj;
export const VERIFICATION_METHOD_TITLE_MAP = obj2;