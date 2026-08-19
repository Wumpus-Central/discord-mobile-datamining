// discord_app/modules/guild_role_subscriptions/native/components/GuildPremiumRoleSubscribeButton.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import CreatorRevenueButton from "CreatorRevenueButton.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = fn;
noopAll;
let closure_3 = createCacheKey.createStyles({ crButton: { marginVertical: 16 } });
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildPremiumRoleSubscribeButton.tsx");

export const GuildPremiumRoleSubscribeButton = function GuildPremiumRoleSubscribeButton(onPress) {
  const obj = { text: null, onPress: null, style: null, disabled: true };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.BEeXib);
  obj[1] = onPress.onPress;
  obj[2] = callback().crButton;
  return jsx(CreatorRevenueButton.CreatorRevenueButton, { text: null, onPress: null, style: null, disabled: true });
};