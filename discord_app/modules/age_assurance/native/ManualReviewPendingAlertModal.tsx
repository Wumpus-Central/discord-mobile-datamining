// === Module 8081: ManualReviewPendingAlertModal ===

// Module 8081 (ManualReviewPendingAlertModal)
import util from "util" /* 1112 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1264 */;
import _modDef3595 from "module_3595" /* 3595 */;
import AlertModal from "AlertModal" /* 6052 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/ManualReviewPendingAlertModal.tsx");

export default function ManualReviewPendingAlertModal() {
  const obj = { title: null, content: null, actions: null, trackingProps: null };
  const intl = util.intl;
  obj.title = intl.string(_modDef3595.CNm4w6);
  const intl2 = util.intl;
  obj.content = intl2.string(_modDef3595["14Fje3"]);
  const obj2 = { children: null };
  const obj3 = { text: null };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t["NX+WJN"]);
  obj2.children = jsx(AlertModal.AlertActionButton, { text: null }, "got-it");
  obj.actions = jsx(AlertModal.AlertActions, { children: null });
  const obj4 = { impression: { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_VERIFICATION_MANUAL_REVIEW_PENDING } };
  obj.trackingProps = obj4;
  return jsx(AlertModal.AlertModal, { title: null, content: null, actions: null, trackingProps: null });
};