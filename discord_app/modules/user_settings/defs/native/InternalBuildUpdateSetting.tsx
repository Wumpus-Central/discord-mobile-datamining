// discord_app/modules/user_settings/defs/native/InternalBuildUpdateSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import tDefault from "../../../../../_runtime/03975_t.js";
import DownloadIcon from "../../../../design/components/Icon/native/redesign/generated/DownloadIcon.tsx";
import _checkForNewerBuildAll from "../../../mobile_native_updater/MobileNativeUpdateUtils.tsx";
import RefreshIcon2 from "../../../../design/components/Icon/native/redesign/generated/RefreshIcon.tsx";
import useStaffOrDeveloperSettingPredicate from "../../dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx";
import checkForNewerBuild from "../../../mobile_native_updater/MobileNativeUpdateStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import "createToggle";

require = fn;
let createToggle = {
  useTitle() {
    return "Internal Build Update";
  },
  parent: null,
  IconComponent: function InstallNativeUpdateIcon() {
    const items = [closure_4];
    if (obj.useStateFromStores(items, () => null !== closure_4.latestFetchedBuild().newBuild)) {
      let RefreshIcon = DownloadIcon.DownloadIcon;
    } else {
      RefreshIcon = RefreshIcon2.RefreshIcon;
    }
    return <RefreshIcon />;
  },
  useDescription: function useInternalBuildUpdateDescription() {
    const items = [closure_4];
    const stateFromStores = initialize.useStateFromStores(items, () => {
      const newBuild = closure_4.latestFetchedBuild().newBuild;
      let build;
      if (newBuild != null) {
        build = newBuild.build;
      }
      return build;
    });
    const items1 = [closure_4];
    const stateFromStores1 = initialize.useStateFromStores(items1, () => closure_4.latestFetchedBuild().lastCheck);
    if (null != stateFromStores) {
      const _HermesInternal2 = HermesInternal;
      let str = "Open build " + stateFromStores + " installer in a browser";
    } else {
      str = "Never refreshed";
      if (null != stateFromStores1) {
        const _HermesInternal = HermesInternal;
        str = "Last refreshed " + tDefault(stateFromStores1).fromNow();
        const obj3 = tDefault(stateFromStores1);
      }
    }
    return str;
  },
  usePredicate: function useHasInternalBuildUpdateSetting() {
    return closure_4.hasUpdatesConfigured && useStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
  },
  onPress: function handleInstallNativeUpdateSettingPress() {
    const newBuild = closure_4.latestFetchedBuild().newBuild;
    if (null !== newBuild) {
      _checkForNewerBuildAll.openBuildInstaller(newBuild);
    } else {
      closure_4.checkForNewerBuild();
    }
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/InternalBuildUpdateSetting.tsx");

export default createToggle;