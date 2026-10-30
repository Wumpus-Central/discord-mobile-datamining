// === Module 7982: AgeVerificationQuestUnsupportedAlertModal ===

// Module 7982 (AgeVerificationQuestUnsupportedAlertModal)
import util from "util" /* 1114 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1261 */;
import _modDef3093 from "module_3093" /* 3093 */;
import AlertModal from "AlertModal" /* 5959 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationQuestUnsupportedAlertModal.tsx");

export default function AgeVerificationQuestUnsupportedAlertModal() {
  const obj = { title: null, content: null, actions: null, trackingProps: null };
  const intl = util.intl;
  obj.title = intl.string(_modDef3093.gUqXQN);
  const intl2 = util.intl;
  obj.content = intl2.string(_modDef3093.yBHwMy);
  const obj2 = { children: null };
  const obj3 = { text: null };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t["NX+WJN"]);
  obj2.children = jsx(AlertModal.AlertActionButton, { text: null }, "got-it");
  obj.actions = jsx(AlertModal.AlertActions, { children: null });
  const obj4 = { impression: { impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_VERIFICATION_QUEST_UNSUPPORTED } };
  obj.trackingProps = obj4;
  return jsx(AlertModal.AlertModal, { title: null, content: null, actions: null, trackingProps: null });
};