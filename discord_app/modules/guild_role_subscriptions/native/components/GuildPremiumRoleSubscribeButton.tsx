// === Module 17861: GuildPremiumRoleSubscribeButton ===

// Module 17861 (GuildPremiumRoleSubscribeButton)
import util from "util" /* 1114 */;
import CreatorRevenueButton from "CreatorRevenueButton" /* 10370 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4605);
let closure_3 = createStyles.createStyles({ crButton: { marginVertical: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildPremiumRoleSubscribeButton.tsx");

export const GuildPremiumRoleSubscribeButton = function GuildPremiumRoleSubscribeButton(onPress) {
  const obj = { text: null, onPress: null, style: null, disabled: true };
  const intl = util.intl;
  obj.text = intl.string(util.t.BEeXib);
  obj.onPress = onPress.onPress;
  obj.style = closure_3().crButton;
  return jsx(CreatorRevenueButton.CreatorRevenueButton, { text: null, onPress: null, style: null, disabled: true });
};