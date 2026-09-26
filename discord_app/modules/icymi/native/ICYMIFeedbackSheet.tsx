// === Module 16118: ICYMIFeedbackSheet ===

// Module 16118 (ICYMIFeedbackSheet)
import util from "util" /* 1115 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 7799 */;
import ICYMIAnalytics2 from "ICYMIAnalytics" /* 7807 */;
import FeedbackActionSheetDefault from "FeedbackActionSheet" /* 11142 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/ICYMIFeedbackSheet.tsx");

export default function ICYMIFeedbackSheet() {
  const obj = { headerLabel: null, showHeaderCloseButton: true, hideDontShowAgainCheckbox: true, ratingsBodyLabel: null, reasonsHeaderLabel: null, reasons: null, otherKey: "other", trackOpen: null, feedbackReasons: null, trackReport: null };
  const intl = util.intl;
  obj.headerLabel = intl.string(util.t["ppfH9+"]);
  const intl2 = util.intl;
  obj.ratingsBodyLabel = intl2.string(util.t["ePk/Cf"]);
  const intl3 = util.intl;
  obj.reasonsHeaderLabel = intl3.string(util.t.sBOuOf);
  let obj2 = { label: null, value: "irrelevant_content" };
  const intl4 = util.intl;
  obj2.label = intl4.string(util.t.F6TmZA);
  let items = [obj2, , , , ];
  const obj3 = { label: null, value: "not_enough_content" };
  const intl5 = util.intl;
  obj3.label = intl5.string(util.t.voWAzi);
  items[1] = obj3;
  const obj4 = { label: null, value: "too_much_content" };
  const intl6 = util.intl;
  obj4.label = intl6.string(util.t.Ay8iwx);
  items[2] = obj4;
  const obj5 = { label: null, value: "laggy" };
  const intl7 = util.intl;
  obj5.label = intl7.string(util.t["Yu+52W"]);
  items[3] = obj5;
  items[4] = { label: "Other", value: "other" };
  obj.reasons = items;
  obj.trackOpen = ICYMIAnalytics2.ICYMIAnalytics.trackFeedFeedbackPromptViewed;
  obj.feedbackReasons = ["other"];
  obj.trackReport = function trackReport(reason) {
    ICYMIActionCreatorsDefault.giveFeedback();
    const ICYMIAnalytics = ICYMIAnalytics2.ICYMIAnalytics;
    let tmp2;
    if (null != reason.reason) {
      const items = [reason.reason.value];
      tmp2 = items;
    }
    const obj2 = { reason_descriptions: tmp2, rating: null, user_feedback: reason.feedback };
    const rating = reason.rating;
    obj2.rating = rating;
    const result = ICYMIAnalytics.trackFeedFeedbackSubmitted(obj2);
  };
  return jsx(FeedbackActionSheetDefault, { headerLabel: null, showHeaderCloseButton: true, hideDontShowAgainCheckbox: true, ratingsBodyLabel: null, reasonsHeaderLabel: null, reasons: null, otherKey: "other", trackOpen: null, feedbackReasons: null, trackReport: null });
};