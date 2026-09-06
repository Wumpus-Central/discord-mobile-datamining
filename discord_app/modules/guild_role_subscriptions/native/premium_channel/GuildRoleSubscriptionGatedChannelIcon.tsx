// discord_app/modules/guild_role_subscriptions/native/premium_channel/GuildRoleSubscriptionGatedChannelIcon.tsx
import native from "../../../../design/void/native.tsx";
import _modDef10302 from "../../../../../_runtime/metro/10302__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/premium_channel/GuildRoleSubscriptionGatedChannelIcon.tsx",
);

export default function SubscriptionGatedChannelIcon(arg0) {
  ({ locked, isInMainTabsExperiment } = arg0);
  const obj = { source: _modDef10302, size: null, disableColor: null };
  const Sizes = native.Icon.Sizes;
  obj.size = isInMainTabsExperiment ? Sizes.EXTRA_SMALL_10 : Sizes.SMALL;
  obj.disableColor = false !== locked;
  return jsx(native.Icon, { source: _modDef10302, size: null, disableColor: null });
}
