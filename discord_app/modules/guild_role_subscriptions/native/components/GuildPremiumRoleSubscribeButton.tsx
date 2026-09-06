// discord_app/modules/guild_role_subscriptions/native/components/GuildPremiumRoleSubscribeButton.tsx
import util from "../../../../intl/index.native.tsx";
import CreatorRevenueButton from "CreatorRevenueButton.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_3 = createStyles.createStyles({ crButton: { marginVertical: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/GuildPremiumRoleSubscribeButton.tsx",
);

export const GuildPremiumRoleSubscribeButton = function GuildPremiumRoleSubscribeButton(onPress) {
  const obj = { text: null, onPress: null, style: null, disabled: true };
  const intl = util.intl;
  obj.text = intl.string(util.t.BEeXib);
  obj.onPress = onPress.onPress;
  obj.style = closure_3().crButton;
  return jsx(CreatorRevenueButton.CreatorRevenueButton, { text: null, onPress: null, style: null, disabled: true });
};
