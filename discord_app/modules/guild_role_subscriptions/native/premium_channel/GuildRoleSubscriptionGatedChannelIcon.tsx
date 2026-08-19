// === Module 15380: SubscriptionGatedChannelIcon ===

// Module 15380 (SubscriptionGatedChannelIcon)
import noopAll from "noop" /* 19 */;
import Button from "Button" /* 1297 */;
import registerAssetDefault from "registerAsset" /* 9355 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/premium_channel/GuildRoleSubscriptionGatedChannelIcon.tsx");

export default function SubscriptionGatedChannelIcon(arg0) {
  ({ locked, isInMainTabsExperiment } = arg0);
  const obj = { source: registerAssetDefault, size: null, disableColor: null };
  const Sizes = Button.Icon.Sizes;
  obj[1] = isInMainTabsExperiment ? Sizes.EXTRA_SMALL_10 : Sizes.SMALL;
  obj[2] = false !== locked;
  return jsx(Button.Icon, { source: registerAssetDefault, size: null, disableColor: null });
};