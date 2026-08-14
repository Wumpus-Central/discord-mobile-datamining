// discord_app/modules/guild_role_subscriptions/native/premium_channel/GuildRoleSubscriptionGatedChannelIcon.tsx
import "noop";
import { jsx } from "jsxProd";
import { registerAsset } from "../../../../../_runtime/08751_registerAsset.js";
import { Button } from "../../../../design/void/native.tsx";

const require = arg1;
const result = require("Button").fileFinishedImporting("modules/guild_role_subscriptions/native/premium_channel/GuildRoleSubscriptionGatedChannelIcon.tsx");

export default function SubscriptionGatedChannelIcon(arg0) {
  let isInMainTabsExperiment;
  let locked;
  ({ locked, isInMainTabsExperiment } = arg0);
  const obj = { source: null, size: null, disableColor: null };
  obj[0] = registerAsset;
  const Sizes = Button.Icon.Sizes;
  obj[1] = isInMainTabsExperiment ? Sizes.EXTRA_SMALL_10 : Sizes.SMALL;
  obj[2] = false !== locked;
  return jsx(Button.Icon, { source: null, size: null, disableColor: null });
};