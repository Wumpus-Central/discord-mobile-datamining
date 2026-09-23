// === Module 16120: InternalBuildUpdateSetting ===

// Module 16120 (InternalBuildUpdateSetting)
import initialize from "initialize" /* 504 */;
import _modDef4414 from "module_4414" /* 4414 */;
import DownloadIcon from "DownloadIcon" /* 4775 */;
import MobileNativeUpdateUtilsAll from "MobileNativeUpdateUtils" /* 14264 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 15179 */;
import RefreshIcon2 from "RefreshIcon" /* 15485 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 14760 */;

require = fn;
const jsx = fn(21).jsx;
const SettingBuilders = fn(11805);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    return "Internal Build Update";
  },
  parent: null,
  IconComponent: function InstallNativeUpdateIcon() {
    const items = [MobileNativeUpdateStore];
    if (obj.useStateFromStores(items, () => null !== MobileNativeUpdateStore.latestFetchedBuild().newBuild)) {
      let RefreshIcon = DownloadIcon.DownloadIcon;
    } else {
      RefreshIcon = RefreshIcon2.RefreshIcon;
    }
    return <RefreshIcon />;
  },
  useDescription: function useInternalBuildUpdateDescription() {
    const items = [MobileNativeUpdateStore];
    const stateFromStores = initialize.useStateFromStores(items, () => {
      const newBuild = MobileNativeUpdateStore.latestFetchedBuild().newBuild;
      let build;
      if (newBuild != null) {
        build = newBuild.build;
      }
      return build;
    });
    const items1 = [MobileNativeUpdateStore];
    const stateFromStores1 = initialize.useStateFromStores(items1, () => MobileNativeUpdateStore.latestFetchedBuild().lastCheck);
    if (null != stateFromStores) {
      const _HermesInternal2 = HermesInternal;
      let str = "Open build " + stateFromStores + " installer in a browser";
    } else {
      str = "Never refreshed";
      if (null != stateFromStores1) {
        const _HermesInternal = HermesInternal;
        str = "Last refreshed " + _modDef4414(stateFromStores1).fromNow();
        const obj3 = _modDef4414(stateFromStores1);
      }
    }
    return str;
  },
  usePredicate: function useHasInternalBuildUpdateSetting() {
    return MobileNativeUpdateStore.hasUpdatesConfigured && useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
  },
  onPress: function handleInstallNativeUpdateSettingPress() {
    const newBuild = MobileNativeUpdateStore.latestFetchedBuild().newBuild;
    if (null !== newBuild) {
      MobileNativeUpdateUtilsAll.openBuildInstaller(newBuild);
    } else {
      MobileNativeUpdateStore.checkForNewerBuild();
    }
  },
  withArrow: true
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InternalBuildUpdateSetting.tsx");

export default pressable;