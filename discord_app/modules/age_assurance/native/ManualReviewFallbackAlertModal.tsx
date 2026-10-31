// discord_app/modules/age_assurance/native/ManualReviewFallbackAlertModal.tsx
import util from "../../../intl/index.native.tsx";
import discord_common_AnalyticsUtils from "../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import _modDef3192 from "../ManualReview.messages.js";
import AlertModal from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import ManualReviewActionCreators from "../ManualReviewActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/ManualReviewFallbackAlertModal.tsx");

export default function ManualReviewFallbackAlertModal() {
  const obj = { title: null, content: null, actions: null, trackingProps: null };
  const intl = util.intl;
  obj.title = intl.string(_modDef3192["+c5sxg"]);
  const intl2 = util.intl;
  obj.content = intl2.string(_modDef3192["RFLH++"]);
  const obj2 = { children: null };
  const obj3 = { text: null };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t["NX+WJN"]);
  const items = [React3(AlertModal.AlertActionButton, obj3, "got-it")];
  const obj4 = { variant: "secondary", text: null, onPress: null };
  const intl4 = util.intl;
  obj4.text = intl4.string(_modDef3192.Z61nkt);
  obj4.onPress = function onPress() {
    return ManualReviewActionCreators.handleManualReviewCta();
  };
  items[1] = React3(AlertModal.AlertActionButton, obj4, "request-manual-review");
  obj2.children = items;
  obj.actions = React4(AlertModal.AlertActions, obj2);
  const obj5 = {
    impression: {
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_VERIFICATION_MANUAL_REVIEW_FALLBACK,
    },
  };
  obj.trackingProps = obj5;
  return React3(AlertModal.AlertModal, obj);
}
