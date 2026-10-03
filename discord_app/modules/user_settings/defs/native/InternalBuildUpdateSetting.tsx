// discord_app/modules/user_settings/defs/native/InternalBuildUpdateSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import _modDef4461 from "../../../../../_runtime/metro/04461__.js";
import DownloadIcon from "../../../../design/components/Icon/native/redesign/generated/DownloadIcon.tsx";
import MobileNativeUpdateUtilsAll from "../../../mobile_native_updater/MobileNativeUpdateUtils.tsx";
import useIsStaffOrDeveloperSettingPredicate from "../../dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx";
import RefreshIcon2 from "../../../../design/components/Icon/native/redesign/generated/RefreshIcon.tsx";
import MobileNativeUpdateStore from "../../../mobile_native_updater/MobileNativeUpdateStore.tsx";

require = fn;
const jsx = fn(21).jsx;
fn(558);
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let concat = c.c(6);
      if (concat[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MobileNativeUpdateStore];
        const fn = function l() {
          const newBuild = MobileNativeUpdateStore.latestFetchedBuild().newBuild;
          let build;
          if (newBuild != null) {
            build = newBuild.build;
          }
          return build;
        };
        concat[0] = items;
        concat[1] = fn;
        tmp2 = items;
        tmp3 = fn;
      } else {
        [tmp2, tmp3] = concat;
      }
      const stateFromStores = initialize.useStateFromStores(tmp2, tmp3);
      if (concat[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [MobileNativeUpdateStore];
        const fn2 = function o() {
          return MobileNativeUpdateStore.latestFetchedBuild().lastCheck;
        };
        concat[2] = items1;
        concat[3] = fn2;
        let tmp7 = fn2;
        let tmp6 = items1;
      } else {
        tmp6 = concat[2];
        tmp7 = concat[3];
      }
      const tmpResult = initialize;
      const stateFromStores1 = initialize.useStateFromStores(tmp6, tmp7);
      if (null != stateFromStores) {
        const _HermesInternal2 = HermesInternal;
        let str2 = "Open build " + stateFromStores + " installer in a browser";
      } else {
        str2 = "Never refreshed";
        if (null != stateFromStores1) {
          if (concat[4] !== stateFromStores1) {
            const fromNowResult = _modDef4461(stateFromStores1).fromNow();
            concat[4] = stateFromStores1;
            concat[5] = fromNowResult;
            let tmp10 = fromNowResult;
            const obj4 = _modDef4461(stateFromStores1);
          } else {
            tmp10 = concat[5];
          }
          const _HermesInternal = HermesInternal;
          concat = HermesInternal.concat;
          const combined = concat(tmp10);
        }
      }
      return str2;
    }
  : () => {
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
          str = "Last refreshed " + _modDef4461(stateFromStores1).fromNow();
          const obj3 = _modDef4461(stateFromStores1);
        }
      }
      return str;
    };
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () =>
      MobileNativeUpdateStore.hasUpdatesConfigured &&
      useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate()
  : () =>
      MobileNativeUpdateStore.hasUpdatesConfigured &&
      useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
const SettingBuilders = fn(11129);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp8Result = dependencyMap;
      const cResult = c.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MobileNativeUpdateStore];
        const fn = function s() {
          return null !== MobileNativeUpdateStore.latestFetchedBuild().newBuild;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      if (cResult[2] !== stateFromStores) {
        if (stateFromStores) {
          let RefreshIcon = DownloadIcon.DownloadIcon;
        } else {
          RefreshIcon = RefreshIcon2.RefreshIcon;
        }
        tmp8Result = <RefreshIcon />;
        cResult[2] = stateFromStores;
        cResult[3] = tmp8Result;
      } else {
        return cResult[3];
      }
      const tmpResult = initialize;
    }
  : () => {
      const items = [MobileNativeUpdateStore];
      if (obj.useStateFromStores(items, () => null !== MobileNativeUpdateStore.latestFetchedBuild().newBuild)) {
        let RefreshIcon = DownloadIcon.DownloadIcon;
      } else {
        RefreshIcon = RefreshIcon2.RefreshIcon;
      }
      return <RefreshIcon />;
    };
const pressable = SettingBuilders.createPressable({
  useTitle() {
    return "Internal Build Update";
  },
  parent: null,
  IconComponent: ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let tmp8Result = dependencyMap;
        const cResult = c.c(4);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [MobileNativeUpdateStore];
          const fn = function s() {
            return null !== MobileNativeUpdateStore.latestFetchedBuild().newBuild;
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp4 = items;
          tmp5 = fn;
        } else {
          [tmp4, tmp5] = cResult;
        }
        const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
        if (cResult[2] !== stateFromStores) {
          if (stateFromStores) {
            let RefreshIcon = DownloadIcon.DownloadIcon;
          } else {
            RefreshIcon = RefreshIcon2.RefreshIcon;
          }
          tmp8Result = <RefreshIcon />;
          cResult[2] = stateFromStores;
          cResult[3] = tmp8Result;
        } else {
          return cResult[3];
        }
        const tmpResult = initialize;
      }
    : () => {
        const items = [MobileNativeUpdateStore];
        if (obj.useStateFromStores(items, () => null !== MobileNativeUpdateStore.latestFetchedBuild().newBuild)) {
          let RefreshIcon = DownloadIcon.DownloadIcon;
        } else {
          RefreshIcon = RefreshIcon2.RefreshIcon;
        }
        return <RefreshIcon />;
      },
  useDescription: tmp2,
  usePredicate: tmp3,
  onPress: function handleInstallNativeUpdateSettingPress() {
    const newBuild = MobileNativeUpdateStore.latestFetchedBuild().newBuild;
    if (null !== newBuild) {
      MobileNativeUpdateUtilsAll.openBuildInstaller(newBuild);
    } else {
      MobileNativeUpdateStore.checkForNewerBuild();
    }
  },
  withArrow: true,
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InternalBuildUpdateSetting.tsx");

export default pressable;
