// discord_app/modules/icymi/native/ICYMIFeedbackSheet.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../intl/index.native.tsx";
import DEFAULT_UX_VARIATION from "../ICYMIAnalytics.tsx";
import closeActionSheetDefault from "../../feedback/native/FeedbackActionSheet.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
let result = require("set").fileFinishedImporting("modules/icymi/native/ICYMIFeedbackSheet.tsx");

export default function ICYMIFeedbackSheet() {
  let obj = {
    headerLabel: null,
    showHeaderCloseButton: true,
    hideDontShowAgainCheckbox: true,
    ratingsBodyLabel: null,
    reasonsHeaderLabel: null,
    reasons: null,
    otherKey: "other",
    trackOpen: null,
    feedbackReasons: null,
    trackReport: null,
  };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["ppfH9+"]);
  const intl2 = getSystemLocale.intl;
  obj[3] = intl2.string(getSystemLocale.t["ePk/Cf"]);
  const intl3 = getSystemLocale.intl;
  obj[4] = intl3.string(getSystemLocale.t.sBOuOf);
  obj = { label: null, value: "irrelevant_content" };
  const intl4 = getSystemLocale.intl;
  obj[0] = intl4.string(getSystemLocale.t.F6TmZA);
  let items = [obj, , , ,];
  obj = { label: null, value: "not_enough_content" };
  const intl5 = getSystemLocale.intl;
  obj[0] = intl5.string(getSystemLocale.t.voWAzi);
  items[1] = obj;
  obj1 = { label: null, value: "too_much_content" };
  const intl6 = getSystemLocale.intl;
  obj1[0] = intl6.string(getSystemLocale.t.Ay8iwx);
  items[2] = obj1;
  const obj2 = { label: null, value: "laggy" };
  const intl7 = getSystemLocale.intl;
  obj2[0] = intl7.string(getSystemLocale.t["Yu+52W"]);
  items[3] = obj2;
  items[4] = { label: "Other", value: "other" };
  obj[5] = items;
  obj[7] = DEFAULT_UX_VARIATION.ICYMIAnalytics.trackFeedFeedbackPromptViewed;
  obj[8] = ["other"];
  obj[9] = function trackReport(reason) {
    let obj = callback2(8641);
    obj.giveFeedback();
    const ICYMIAnalytics = callback(8649).ICYMIAnalytics;
    let tmp2;
    if (null != reason.reason) {
      const items = [reason.reason.value];
      tmp2 = items;
    }
    obj = { reason_descriptions: tmp2, rating, user_feedback: reason.feedback };
    rating = reason.rating;
    const result = ICYMIAnalytics.trackFeedFeedbackSubmitted(obj);
  };
  return jsx(closeActionSheetDefault, { label: null, value: "not_enough_content" });
}
