// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildRoleSubscriptionGroupGatingModal.tsx
import _slicedToArray from "_slicedToArray";
import "noop";
import usePriceTiers from "usePriceTiers";
import { GuildRoleSubscriptionsTierScenes as closure_5 } from "MAX_SUBSCRIPTION_TIERS";
import { jsx } from "jsxProd";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { FormGuildGatingModeSelector } from "../components/FormGuildGatingModeSelector.tsx";
import { Header } from "../components/GuildRoleSubscriptionTierEditStep.tsx";

const require = arg1;
const result = require("usePriceTiers").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildRoleSubscriptionGroupGatingModal.tsx");

export default function GuildRoleSubscriptionGroupGatingModal(arg0) {
  let tmp2;
  let tmp3;
  [tmp2, tmp3] = callback(usePriceTiers.useGroupIsFullGateState(), 2);
  const obj = { title: null, description: null, canProceedToNextStep: true, nextStep: null };
  const tmp = callback(usePriceTiers.useGroupIsFullGateState(), 2);
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t.N38nNP);
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl2.string(getSystemLocale /* getSystemLocale */.t.csJWVI);
  obj[3] = constants.GROUP;
  const merged = Object.assign(arg0);
  obj.children = jsx(FormGuildGatingModeSelector, { isFullServerGating: tmp2, onChange: tmp3 });
  return jsx(Header, { title: null, description: null, canProceedToNextStep: true, nextStep: null });
};