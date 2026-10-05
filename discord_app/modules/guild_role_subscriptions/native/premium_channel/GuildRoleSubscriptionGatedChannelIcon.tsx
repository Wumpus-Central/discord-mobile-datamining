// === Module 16056: GuildRoleSubscriptionGatedChannelIcon ===

// Module 16056 (GuildRoleSubscriptionGatedChannelIcon)
import c from "c" /* 576 */;
import native from "native" /* 1188 */;
import _modDef9904 from "module_9904" /* 9904 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/premium_channel/GuildRoleSubscriptionGatedChannelIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(3);
  ({ locked, isInMainTabsExperiment } = arg0);
  const Sizes = native.Icon.Sizes;
  const tmp4 = isInMainTabsExperiment ? Sizes.EXTRA_SMALL_10 : Sizes.SMALL;
  if (cResult[0] === tmp4) {
    if (cResult[1] === tmp5) {
      let tmp6 = cResult[2];
    }
    return tmp6;
  }
  const tmp7 = jsx(native.Icon, { source: _modDef9904, size: tmp4, disableColor: false !== locked });
  cResult[0] = tmp4;
  cResult[1] = false !== locked;
  cResult[2] = tmp7;
  tmp6 = tmp7;
  const obj2 = { source: _modDef9904, size: tmp4, disableColor: false !== locked };
}) : ((arg0) => {
  ({ locked, isInMainTabsExperiment } = arg0);
  const obj = { source: _modDef9904, size: null, disableColor: null };
  const Sizes = native.Icon.Sizes;
  obj.size = isInMainTabsExperiment ? Sizes.EXTRA_SMALL_10 : Sizes.SMALL;
  obj.disableColor = false !== locked;
  return jsx(native.Icon, { source: _modDef9904, size: null, disableColor: null });
});