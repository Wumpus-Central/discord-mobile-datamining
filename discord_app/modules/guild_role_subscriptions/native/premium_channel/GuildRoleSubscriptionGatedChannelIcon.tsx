// === Module 16451: GuildRoleSubscriptionGatedChannelIcon ===

// Module 16451 (GuildRoleSubscriptionGatedChannelIcon)
import native from "native" /* 1177 */;
import _modDef10559 from "module_10559" /* 10559 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/premium_channel/GuildRoleSubscriptionGatedChannelIcon.tsx");

export default function SubscriptionGatedChannelIcon(arg0) {
  ({ locked, isInMainTabsExperiment } = arg0);
  const obj = { source: _modDef10559, size: null, disableColor: null };
  const Sizes = native.Icon.Sizes;
  obj.size = isInMainTabsExperiment ? Sizes.EXTRA_SMALL_10 : Sizes.SMALL;
  obj.disableColor = false !== locked;
  return jsx(native.Icon, { source: _modDef10559, size: null, disableColor: null });
};