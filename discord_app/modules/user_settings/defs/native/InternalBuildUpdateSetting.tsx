// === Module 15861: InternalBuildUpdateSetting ===

// Module 15861 (InternalBuildUpdateSetting)
import initialize from "initialize" /* 504 */;
import _modDef4229 from "module_4229" /* 4229 */;
import DownloadIcon from "DownloadIcon" /* 4586 */;
import MobileNativeUpdateUtilsAll from "MobileNativeUpdateUtils" /* 14012 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 14958 */;
import RefreshIcon2 from "RefreshIcon" /* 15265 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 14510 */;

require = fn;
const jsx = fn(21).jsx;
const SettingBuilders = fn(11614);
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
        str = "Last refreshed " + _modDef4229(stateFromStores1).fromNow();
        const obj3 = _modDef4229(stateFromStores1);
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