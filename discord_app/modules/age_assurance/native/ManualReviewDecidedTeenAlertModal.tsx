// === Module 8334: ManualReviewDecidedTeenAlertModal ===

// Module 8334 (ManualReviewDecidedTeenAlertModal)
import util from "util" /* 1113 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import _modDef3369 from "module_3369" /* 3369 */;
import Text_Text from "Text/Text" /* 5866 */;
import AlertModal from "AlertModal" /* 6211 */;
import noop from "module_19" /* 19 */;

require = fn;
const FALLBACK_TEEN_AGE_RANGE = fn(6769).FALLBACK_TEEN_AGE_RANGE;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/ManualReviewDecidedTeenAlertModal.tsx");

export default function ManualReviewDecidedTeenAlertModal(teenAgeRange) {
  teenAgeRange = teenAgeRange.teenAgeRange;
  function contentAndSettingsHook(children, key) {
    return jsx(Text_Text.Text, {
      variant: "body-md/normal",
      color: "text-link",
      onPress() {
        const obj = closure_1_1(8124);
        const intl = closure_1_0(1113).intl;
        return obj.openUrl(closure_1_1(2185).getArticleURL(intl.string(closure_1_1(3369).agiNYw)));
      },
      children
    }, key);
  }
  let obj = { title: null, content: null, actions: null, trackingProps: null };
  let intl = util.intl;
  obj.title = intl.string(_modDef3369.AA3xYb);
  const intl2 = util.intl;
  const format = intl2.format;
  const tmp4 = _modDef3369;
  if (teenAgeRange.decidedPassed) {
    if (teenAgeRange == null) {
      teenAgeRange = FALLBACK_TEEN_AGE_RANGE;
    }
    const obj2 = { teenAgeRange, contentAndSettingsHook };
    let formatResult = format(tmp4["2+f8w1"], obj2);
  } else {
    const obj3 = { contentAndSettingsHook };
    formatResult = format(tmp4.UIbYzl, obj3);
  }
  obj.content = formatResult;
  const obj4 = { children: null };
  const obj5 = { text: null };
  const intl3 = util.intl;
  obj5.text = intl3.string(util.t["NX+WJN"]);
  obj4.children = jsx(AlertModal.AlertActionButton, { text: null }, "got-it");
  obj.actions = jsx(AlertModal.AlertActions, { children: null });
  const obj6 = { impression: { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_VERIFICATION_MANUAL_REVIEW_DECIDED_TEEN } };
  obj.trackingProps = obj6;
  return jsx(AlertModal.AlertModal, { title: null, content: null, actions: null, trackingProps: null });
};