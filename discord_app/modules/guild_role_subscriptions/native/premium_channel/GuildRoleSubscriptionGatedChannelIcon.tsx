// === Module 16056: GuildRoleSubscriptionGatedChannelIcon ===

// Module 16056 (GuildRoleSubscriptionGatedChannelIcon)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import native from "native" /* 1188 */;
import AssetRegistryDefault from "AssetRegistry" /* 9904 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let isInMainTabsExperiment;
  let locked;
  const obj = react2;
  const cResult = obj.c(3);
  ({ locked, isInMainTabsExperiment } = arg0);
  const Sizes = native.Icon.Sizes;
  const tmp4 = isInMainTabsExperiment ? Sizes.EXTRA_SMALL_10 : Sizes.SMALL;
  if (cResult[0] === tmp4) {
    let tmp6;
    if (cResult[1] === false !== locked) {
      tmp6 = cResult[2];
    }
    return tmp6;
  }
  const Icon = native.Icon;
  const tmp7 = <Icon source={AssetRegistryDefault} size={tmp4} disableColor={false !== locked} />;
  cResult[0] = tmp4;
  cResult[1] = false !== locked;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : ((arg0) => {
  let isInMainTabsExperiment;
  let locked;
  ({ locked, isInMainTabsExperiment } = arg0);
  const Icon = native.Icon;
  const Sizes = native.Icon.Sizes;
  return <Icon source={AssetRegistryDefault} size={isInMainTabsExperiment ? Sizes.EXTRA_SMALL_10 : Sizes.SMALL} disableColor={false !== locked} />;
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/premium_channel/GuildRoleSubscriptionGatedChannelIcon.tsx");

export default tmp3;