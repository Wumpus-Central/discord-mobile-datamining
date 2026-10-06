// discord_app/modules/guild_role_subscriptions/native/premium_channel/GuildRoleSubscriptionGatedChannelIcon.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import native from "../../../../design/void/native.tsx";
import AssetRegistryDefault from "../../../../../_runtime/09917_AssetRegistry.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let isInMainTabsExperiment;
      let locked;
      const obj = react2;
      const cResult = obj.c(3);
      ({ locked, isInMainTabsExperiment } = arg0);
      const Sizes = native.Icon.Sizes;
      const tmp4 = isInMainTabsExperiment ? Sizes.EXTRA_SMALL_10 : Sizes.SMALL;
      if (cResult[0] === tmp4) {
        let tmp6;
        if ((cResult[1] === false) !== locked) {
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
    }
  : (arg0) => {
      let isInMainTabsExperiment;
      let locked;
      ({ locked, isInMainTabsExperiment } = arg0);
      const Icon = native.Icon;
      const Sizes = native.Icon.Sizes;
      return (
        <Icon
          source={AssetRegistryDefault}
          size={isInMainTabsExperiment ? Sizes.EXTRA_SMALL_10 : Sizes.SMALL}
          disableColor={false !== locked}
        />
      );
    };
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/premium_channel/GuildRoleSubscriptionGatedChannelIcon.tsx",
);

export default tmp3;
