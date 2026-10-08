// discord_app/modules/age_assurance/getAgeVerificationGetStartedSteps.tsx
import Constants from "../../Constants.tsx";
import HelpdeskUtilsDefault from "../../utils/HelpdeskUtils.tsx";
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils.tsx";
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators.native.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const HelpdeskArticles = Constants.HelpdeskArticles;
let result = size.fileFinishedImporting("modules/age_assurance/getAgeVerificationGetStartedSteps.tsx");

export const getAgeVerificationGetStartedSteps = function getAgeVerificationGetStartedSteps(modalSessionId) {
  _require = modalSessionId;
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
