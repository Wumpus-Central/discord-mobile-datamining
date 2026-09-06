// discord_app/modules/user_settings/defs/native/InternalBuildUpdateSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import _modDef4153 from "../../../../../_runtime/metro/04153__.js";
import DownloadIcon from "../../../../design/components/Icon/native/redesign/generated/DownloadIcon.tsx";
import MobileNativeUpdateUtilsAll from "../../../mobile_native_updater/MobileNativeUpdateUtils.tsx";
import useIsStaffOrDeveloperSettingPredicate from "../../dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx";
import RefreshIcon2 from "../../../../design/components/Icon/native/redesign/generated/RefreshIcon.tsx";
import MobileNativeUpdateStore from "../../../mobile_native_updater/MobileNativeUpdateStore.tsx";

require = fn;
const jsx = fn(21).jsx;
fn(11468);
let SettingBuilders = {
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
    const stateFromStores1 = initialize.useStateFromStores(
      items1,
      () => MobileNativeUpdateStore.latestFetchedBuild().lastCheck,
    );
    if (null != stateFromStores) {
      const _HermesInternal2 = HermesInternal;
      let str = "Open build " + stateFromStores + " installer in a browser";
    } else {
      str = "Never refreshed";
      if (null != stateFromStores1) {
        const _HermesInternal = HermesInternal;
        str = "Last refreshed " + _modDef4153(stateFromStores1).fromNow();
        const obj3 = _modDef4153(stateFromStores1);
      }
    }
    return str;
  },
  usePredicate: function useHasInternalBuildUpdateSetting() {
    return (
      MobileNativeUpdateStore.hasUpdatesConfigured &&
      useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate()
    );
  },
  onPress: function handleInstallNativeUpdateSettingPress() {
    const newBuild = MobileNativeUpdateStore.latestFetchedBuild().newBuild;
    if (null !== newBuild) {
      MobileNativeUpdateUtilsAll.openBuildInstaller(newBuild);
    } else {
      MobileNativeUpdateStore.checkForNewerBuild();
    }
  },
  withArrow: true,
};
SettingBuilders = SettingBuilders.createPressable(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InternalBuildUpdateSetting.tsx");

export default SettingBuilders;
