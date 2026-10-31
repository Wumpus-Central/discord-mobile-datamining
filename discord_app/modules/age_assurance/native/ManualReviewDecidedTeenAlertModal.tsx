// discord_app/modules/age_assurance/native/ManualReviewDecidedTeenAlertModal.tsx
import util from "../../../intl/index.native.tsx";
import discord_common_AnalyticsUtils from "../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import _modDef3192 from "../ManualReview.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AlertModal from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import ManualReviewInconclusiveCopyExperiment from "../ManualReviewInconclusiveCopyExperiment.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const FALLBACK_TEEN_AGE_RANGE = fn(6728).FALLBACK_TEEN_AGE_RANGE;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/ManualReviewDecidedTeenAlertModal.tsx");

export default function ManualReviewDecidedTeenAlertModal(teenAgeRange) {
  teenAgeRange = teenAgeRange.teenAgeRange;
  function contentAndSettingsHook(children, key) {
    return jsx(
      Text_Text.Text,
      {
        variant: "text-md/normal",
        color: "text-link",
        onPress() {
          const obj = closure_1_1(7955);
          const intl = closure_1_0(1113).intl;
          return obj.openUrl(closure_1_1(2061).getArticleURL(intl.string(closure_1_1(3192).agiNYw)));
        },
        children,
      },
      key,
    );
  }
  const isManualReviewInconclusiveCopyEnabled =
    ManualReviewInconclusiveCopyExperiment.useIsManualReviewInconclusiveCopyEnabled("manual_review_decided_teen_modal");
  const obj2 = { title: null, content: null, actions: null, trackingProps: null };
  let intl = util.intl;
  obj2.title = intl.string(_modDef3192.AA3xYb);
  const intl2 = util.intl;
  const format = intl2.format;
  const tmp5 = _modDef3192;
  if (isManualReviewInconclusiveCopyEnabled) {
    const obj3 = { contentAndSettingsHook };
    let formatResult = format(tmp5.UIbYzl, obj3);
  } else {
    if (teenAgeRange == null) {
      teenAgeRange = FALLBACK_TEEN_AGE_RANGE;
    }
    const obj4 = { teenAgeRange, contentAndSettingsHook };
    formatResult = format(tmp5["2+f8w1"], obj4);
  }
  obj2.content = formatResult;
  const obj5 = { children: null };
  const obj6 = { text: null };
  const intl3 = util.intl;
  obj6.text = intl3.string(util.t["NX+WJN"]);
  obj5.children = jsx(AlertModal.AlertActionButton, { text: null }, "got-it");
  obj2.actions = jsx(AlertModal.AlertActions, { children: null });
  const obj7 = { impression: null };
  obj7.impression = {
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_VERIFICATION_MANUAL_REVIEW_DECIDED_TEEN,
  };
  obj2.trackingProps = obj7;
  return jsx(AlertModal.AlertModal, { title: null, content: null, actions: null, trackingProps: null });
}
