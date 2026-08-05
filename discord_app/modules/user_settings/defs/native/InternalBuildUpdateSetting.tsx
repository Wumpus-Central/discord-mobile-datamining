// discord_app/modules/user_settings/defs/native/InternalBuildUpdateSetting.tsx
import checkForNewerBuild from "checkForNewerBuild";
import { jsx } from "jsxProd";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    return "Internal Build Update";
  },
  parent: null,
  IconComponent: function InstallNativeUpdateIcon() {
    const items = [checkForNewerBuild];
    if (obj.useStateFromStores(items, () => null !== checkForNewerBuild.latestFetchedBuild().newBuild)) {
      let RefreshIcon = tmp(4235).DownloadIcon;
    } else {
      RefreshIcon = tmp(13754).RefreshIcon;
    }
    return <RefreshIcon />;
  },
  useDescription: function useInternalBuildUpdateDescription() {
    const items = [checkForNewerBuild];
    const stateFromStores = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => {
      const newBuild = checkForNewerBuild.latestFetchedBuild().newBuild;
      let build;
      if (newBuild != null) {
        build = newBuild.build;
      }
      return build;
    });
    const obj = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
    const items1 = [checkForNewerBuild];
    const stateFromStores1 = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items1, () => checkForNewerBuild.latestFetchedBuild().lastCheck);
    if (null != stateFromStores) {
      const _HermesInternal2 = HermesInternal;
      let str = "Open build " + stateFromStores + " installer in a browser";
    } else {
      str = "Never refreshed";
      if (null != stateFromStores1) {
        const _HermesInternal = HermesInternal;
        str = "Last refreshed " + require("../../../../../_runtime/03867_t.js")(stateFromStores1).fromNow();
        const obj3 = require("../../../../../_runtime/03867_t.js")(stateFromStores1);
      }
    }
    return str;
  },
  usePredicate: function useHasInternalBuildUpdateSetting() {
    const obj = require("../../dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx") /* useStaffOrDeveloperSettingPredicate */;
    return checkForNewerBuild.hasUpdatesConfigured && require("../../dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx") /* useStaffOrDeveloperSettingPredicate */.useStaffOrDeveloperSettingPredicate();
  },
  onPress: function handleInstallNativeUpdateSettingPress() {
    const newBuild = checkForNewerBuild.latestFetchedBuild().newBuild;
    if (null !== newBuild) {
      importAll(13160).openBuildInstaller(newBuild);
      const obj2 = importAll(13160);
    } else {
      checkForNewerBuild.checkForNewerBuild();
    }
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("_checkForNewerBuild").fileFinishedImporting("modules/user_settings/defs/native/InternalBuildUpdateSetting.tsx");

export default createToggle;