import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { CreatorRevenueButton } from "CreatorRevenueButton.tsx";
// discord_app/modules/guild_role_subscriptions/native/components/GuildPremiumRoleSubscribeButton.tsx
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_3 = createCacheKey.createStyles({ crButton: { marginVertical: 16 } });
const result = require("createCacheKey").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildPremiumRoleSubscribeButton.tsx");

export const GuildPremiumRoleSubscribeButton = function GuildPremiumRoleSubscribeButton(onPress) {
  const obj = { text: null, onPress: null, style: null, disabled: true };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t.BEeXib);
  obj[1] = onPress.onPress;
  obj[2] = callback().crButton;
  return jsx(CreatorRevenueButton /* CreatorRevenueButton */.CreatorRevenueButton, { text: null, onPress: null, style: null, disabled: true });
};