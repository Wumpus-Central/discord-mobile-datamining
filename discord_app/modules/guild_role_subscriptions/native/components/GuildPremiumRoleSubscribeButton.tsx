// === Module 17263: GuildPremiumRoleSubscribeButton ===

// Module 17263 (GuildPremiumRoleSubscribeButton)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import CreatorRevenueButton from "CreatorRevenueButton" /* 9058 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
noopAll;
let closure_3 = createCacheKey.createStyles({ crButton: { marginVertical: 16 } });
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildPremiumRoleSubscribeButton.tsx");

export const GuildPremiumRoleSubscribeButton = function GuildPremiumRoleSubscribeButton(onPress) {
  const obj = { text: null, onPress: null, style: null, disabled: true };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.BEeXib);
  obj[1] = onPress.onPress;
  obj[2] = callback().crButton;
  return jsx(CreatorRevenueButton.CreatorRevenueButton, { text: null, onPress: null, style: null, disabled: true });
};