// discord_app/modules/age_assurance/native/ManualReviewDecidedTeenAlertModal.tsx
import util from "../../../intl/index.native.tsx";
import discord_common_AnalyticsUtils from "../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import _modDef3348 from "../ManualReview.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AlertModal from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const FALLBACK_TEEN_AGE_RANGE = fn(6808).FALLBACK_TEEN_AGE_RANGE;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/ManualReviewDecidedTeenAlertModal.tsx");

export default function ManualReviewDecidedTeenAlertModal(teenAgeRange) {
  teenAgeRange = teenAgeRange.teenAgeRange;
  function contentAndSettingsHook(children, key) {
    return jsx(
      Text_Text.Text,
      {
        variant: "body-md/normal",
        color: "text-link",
        onPress() {
          const obj = closure_1_1(8046);
          const intl = closure_1_0(1113).intl;
          return obj.openUrl(closure_1_1(2185).getArticleURL(intl.string(closure_1_1(3348).agiNYw)));
        },
        children,
      },
      key,
    );
  }
  let obj = { title: null, content: null, actions: null, trackingProps: null };
  let intl = util.intl;
  obj.title = intl.string(_modDef3348.AA3xYb);
  const intl2 = util.intl;
  const format = intl2.format;
  const tmp4 = _modDef3348;
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
  const obj6 = {
    impression: {
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_VERIFICATION_MANUAL_REVIEW_DECIDED_TEEN,
    },
  };
  obj.trackingProps = obj6;
  return jsx(AlertModal.AlertModal, { title: null, content: null, actions: null, trackingProps: null });
}
