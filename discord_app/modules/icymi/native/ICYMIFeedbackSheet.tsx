// discord_app/modules/icymi/native/ICYMIFeedbackSheet.tsx
import util from "../../../intl/index.native.tsx";
import ICYMIActionCreatorsDefault from "../ICYMIActionCreators.tsx";
import ICYMIAnalytics2 from "../ICYMIAnalytics.tsx";
import FeedbackActionSheetDefault from "../../feedback/native/FeedbackActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIFeedbackSheet.tsx");

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
  const intl = util.intl;
  obj.headerLabel = intl.string(util.t["ppfH9+"]);
  const intl2 = util.intl;
  obj.ratingsBodyLabel = intl2.string(util.t["ePk/Cf"]);
  const intl3 = util.intl;
  obj.reasonsHeaderLabel = intl3.string(util.t.sBOuOf);
  obj = { label: null, value: "irrelevant_content" };
  const intl4 = util.intl;
  obj.label = intl4.string(util.t.F6TmZA);
  let items = [obj, , , ,];
  obj = { label: null, value: "not_enough_content" };
  const intl5 = util.intl;
  obj.label = intl5.string(util.t.voWAzi);
  items[1] = obj;
  const obj1 = { label: null, value: "too_much_content" };
  const intl6 = util.intl;
  obj1.label = intl6.string(util.t.Ay8iwx);
  items[2] = obj1;
  const obj2 = { label: null, value: "laggy" };
  const intl7 = util.intl;
  obj2.label = intl7.string(util.t["Yu+52W"]);
  items[3] = obj2;
  items[4] = { label: "Other", value: "other" };
  obj.reasons = items;
  obj.trackOpen = ICYMIAnalytics2.ICYMIAnalytics.trackFeedFeedbackPromptViewed;
  obj.feedbackReasons = ["other"];
  obj.trackReport = function trackReport(reason) {
    let obj = ICYMIActionCreatorsDefault;
    obj.giveFeedback();
    const ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
    let tmp2;
    if (null != reason.reason) {
      const items = [reason.reason.value];
      tmp2 = items;
    }
    obj = { reason_descriptions: tmp2, rating: null, user_feedback: reason.feedback };
    const rating = reason.rating;
    obj.rating = rating;
    const result = ICYMIAnalytics.trackFeedFeedbackSubmitted(obj);
  };
  return jsx(FeedbackActionSheetDefault, { label: null, value: "not_enough_content" });
}
