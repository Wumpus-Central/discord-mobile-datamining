// === Module 7990: AgeVerificationQuestUnsupportedAlertModal ===

// Module 7990 (AgeVerificationQuestUnsupportedAlertModal)
import util from "util" /* 1113 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import _modDef3096 from "module_3096" /* 3096 */;
import AlertModal from "AlertModal" /* 5964 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationQuestUnsupportedAlertModal.tsx");

export default function AgeVerificationQuestUnsupportedAlertModal() {
  const obj = { title: null, content: null, actions: null, trackingProps: null };
  const intl = util.intl;
  obj.title = intl.string(_modDef3096.gUqXQN);
  const intl2 = util.intl;
  obj.content = intl2.string(_modDef3096.yBHwMy);
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