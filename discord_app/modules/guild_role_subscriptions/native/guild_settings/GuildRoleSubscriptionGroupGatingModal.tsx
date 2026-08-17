// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildRoleSubscriptionGroupGatingModal.tsx
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import FormGuildGatingModeSelectorDefault from "FormGuildGatingModeSelector" /* 16944 */;
import HeaderDefault from "Header" /* 16954 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "usePriceTiers" /* 16950 */;
import { GuildRoleSubscriptionsTierScenes as closure_5 } from "MAX_SUBSCRIPTION_TIERS" /* 14551 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildRoleSubscriptionGroupGatingModal.tsx");

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