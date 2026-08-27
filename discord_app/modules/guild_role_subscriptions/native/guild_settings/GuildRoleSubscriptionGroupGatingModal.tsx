// === Module 17240: GuildRoleSubscriptionGroupGatingModal ===

// Module 17240 (GuildRoleSubscriptionGroupGatingModal)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import FormGuildGatingModeSelectorDefault from "FormGuildGatingModeSelector" /* 17220 */;
import HeaderDefault from "Header" /* 17230 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "usePriceTiers" /* 17226 */;
import { GuildRoleSubscriptionsTierScenes as closure_5 } from "MAX_SUBSCRIPTION_TIERS" /* 14749 */;
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