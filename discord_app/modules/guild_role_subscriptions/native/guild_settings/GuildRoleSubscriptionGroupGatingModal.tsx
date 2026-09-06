// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildRoleSubscriptionGroupGatingModal.tsx
import util from "../../../../intl/index.native.tsx";
import FormGuildGatingModeSelectorDefault from "../components/FormGuildGatingModeSelector.tsx";
import GuildRoleSubscriptionTierEditStepDefault from "../components/GuildRoleSubscriptionTierEditStep.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import RoleTierEditStore from "../RoleTierEditStore.tsx";

require = fn;
const constants = fn(15205).GuildRoleSubscriptionsTierScenes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/GuildRoleSubscriptionGroupGatingModal.tsx",
);

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
  return jsx(GuildRoleSubscriptionTierEditStepDefault, {
    title: null,
    description: null,
    canProceedToNextStep: true,
    nextStep: null,
  });
}
