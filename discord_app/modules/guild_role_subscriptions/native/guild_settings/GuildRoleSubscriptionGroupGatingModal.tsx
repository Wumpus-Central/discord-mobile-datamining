// === Module 17779: GuildRoleSubscriptionGroupGatingModal ===

// Module 17779 (GuildRoleSubscriptionGroupGatingModal)
import util from "util" /* 1114 */;
import FormGuildGatingModeSelectorDefault from "FormGuildGatingModeSelector" /* 17759 */;
import GuildRoleSubscriptionTierEditStepDefault from "GuildRoleSubscriptionTierEditStep" /* 17769 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import RoleTierEditStore from "RoleTierEditStore" /* 17765 */;

require = fn;
const constants = fn(15237).GuildRoleSubscriptionsTierScenes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildRoleSubscriptionGroupGatingModal.tsx");

export default function GuildRoleSubscriptionGroupGatingModal(arg0) {
  [tmp2, tmp3] = _slicedToArray(RoleTierEditStore.useGroupIsFullGateState(), 2);
  const obj = { title: null, description: null, canProceedToNextStep: true, nextStep: null };
  const tmp = _slicedToArray(RoleTierEditStore.useGroupIsFullGateState(), 2);
  const intl = util.intl;
  obj.title = intl.string(util.t.N38nNP);
  const intl2 = util.intl;
  obj.description = intl2.string(util.t.csJWVI);
  obj.nextStep = constants.GROUP;
  const merged = Object.assign(arg0);
  obj.children = jsx(FormGuildGatingModeSelectorDefault, { isFullServerGating: tmp2, onChange: tmp3 });
  return jsx(GuildRoleSubscriptionTierEditStepDefault, { title: null, description: null, canProceedToNextStep: true, nextStep: null });
};