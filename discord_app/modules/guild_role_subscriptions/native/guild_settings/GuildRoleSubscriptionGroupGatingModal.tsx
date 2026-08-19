// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildRoleSubscriptionGroupGatingModal.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import FormGuildGatingModeSelectorDefault from "../components/FormGuildGatingModeSelector.tsx";
import HeaderDefault from "../components/GuildRoleSubscriptionTierEditStep.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import usePriceTiers from "../RoleTierEditStore.tsx";
import { GuildRoleSubscriptionsTierScenes as closure_5 } from "../../GuildRoleSubscriptionsConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildRoleSubscriptionGroupGatingModal.tsx");

export default function GuildRoleSubscriptionGroupGatingModal(arg0) {
  [tmp2, tmp3] = callback(closure_4.useGroupIsFullGateState(), 2);
  const obj = { title: null, description: null, canProceedToNextStep: true, nextStep: null };
  const tmp = callback(closure_4.useGroupIsFullGateState(), 2);
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.N38nNP);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.csJWVI);
  obj[3] = constants.GROUP;
  const merged = Object.assign(arg0);
  obj.children = jsx(FormGuildGatingModeSelectorDefault, { isFullServerGating: tmp2, onChange: tmp3 });
  return jsx(HeaderDefault, { title: null, description: null, canProceedToNextStep: true, nextStep: null });
};