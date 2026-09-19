// discord_app/modules/age_assurance/AgeVerificationConstants.tsx
import Constants from "../../Constants.tsx";
import HelpdeskUtilsDefault from "../../utils/HelpdeskUtils.tsx";
import _modDef3034 from "AgeAssurance.messages.js";
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators.native.tsx";
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const HelpdeskArticles = Constants.HelpdeskArticles;
let items = [AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.NSFW_GUILD];
let obj = {
  FACIAL_AGE_ESTIMATION: 1,
  [1]: "FACIAL_AGE_ESTIMATION",
  ID_VERIFICATION: 2,
  [2]: "ID_VERIFICATION",
  MODULAR: 3,
  [3]: "MODULAR",
  GOOGLE_WALLET: 9,
  [9]: "GOOGLE_WALLET",
};
let obj2 = {};
const set = new Set(items);
obj2[obj.FACIAL_AGE_ESTIMATION] = { title: _modDef3034["2yLvkS"], description: _modDef3034.eJmat5 };
let obj3 = { title: _modDef3034["2yLvkS"], description: _modDef3034.eJmat5 };
obj2[obj.ID_VERIFICATION] = { title: _modDef3034.dwkwo0, description: _modDef3034.ZdmRwW };
const obj4 = { title: _modDef3034.dwkwo0, description: _modDef3034.ZdmRwW };
obj2[obj.GOOGLE_WALLET] = { title: _modDef3034.Y9sLpR, description: _modDef3034.dah4bF };
let result = size.fileFinishedImporting("modules/age_assurance/AgeVerificationConstants.tsx");

export const FULLSCREEN_AGE_VERIFICATION_ENTRY_POINTS = set;
export const getAgeVerificationGetStartedSteps = function getAgeVerificationGetStartedSteps(arg0) {
  _require = arg0;
  let obj = { title: null, description: null };
  const intl = require("util").intl;
  obj.title = intl.string(require("util").t.HphYKp);
  const intl2 = require("util").intl;
  obj.description = intl2.string(require("util").t["GCZC+9"]);
  const items = [obj, ,];
  let obj2 = { title: null, description: null };
  const intl3 = require("util").intl;
  obj2.title = intl3.string(require("util").t.nkO4L3);
  const intl4 = require("util").intl;
  obj2.description = intl4.string(require("util").t.rHZFsH);
  items[1] = obj2;
  const obj3 = { title: null, description: null };
  const intl5 = require("util").intl;
  obj3.title = intl5.string(require("util").t.aVwLfn);
  const intl6 = require("util").intl;
  obj3.description = intl6.format(require("util").t.n5vd1E, {
    handleOnHelpUrlHook() {
      const obj = AgeVerificationActionCreatorsDefault;
      obj.openUrl(HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.TIGGER_PAWTECT_SYSTEM_DMS));
      const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(
        closure_0,
        AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.PRIMARY,
        AgeVerificationAnalyticsUtils.AgeVerificationModalCta.SYSTEM_DMS_LEARN_MORE,
      );
    },
  });
  items[2] = obj3;
  return items;
};
export const TRUSTED_PROVIDERS_URL =
  "https://discord.com/safety/age-assurance-on-discord-vendors-methods-and-your-data";
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
