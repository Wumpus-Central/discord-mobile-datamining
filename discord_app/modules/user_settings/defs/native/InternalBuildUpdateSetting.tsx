// === Module 15637: InternalBuildUpdateSetting ===

// Module 15637 (InternalBuildUpdateSetting)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import _modDef4467 from "module_4467" /* 4467 */;
import DownloadIcon from "DownloadIcon" /* 4851 */;
import MobileNativeUpdateUtilsAll from "MobileNativeUpdateUtils" /* 13737 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 14666 */;
import RefreshIcon2 from "RefreshIcon" /* 14794 */;
import MobileNativeUpdateStore from "MobileNativeUpdateStore" /* 14176 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11142 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let str;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  const obj = react;
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MobileNativeUpdateStore];
    const fn = function l() {
      const newBuild = MobileNativeUpdateStore.latestFetchedBuild().newBuild;
      let build;
      if (newBuild != null) {
        build = newBuild.build;
      }
      return build;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [MobileNativeUpdateStore];
    const fn2 = function o() {
      return MobileNativeUpdateStore.latestFetchedBuild().lastCheck;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp9 = fn2;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult2 = get_initialized;
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp9);
  if (null != stateFromStores) {
    const _HermesInternal2 = HermesInternal;
    str = "Open build " + stateFromStores + " installer in a browser";
  } else {
    str = "Never refreshed";
    if (null != stateFromStores1) {
      let tmp12;
      if (cResult[4] !== stateFromStores1) {
        const obj4 = _modDef4467(stateFromStores1);
        const fromNowResult = obj4.fromNow();
        cResult[4] = stateFromStores1;
        cResult[5] = fromNowResult;
        tmp12 = fromNowResult;
      } else {
        tmp12 = cResult[5];
      }
      const _HermesInternal = HermesInternal;
      str = "Last refreshed " + tmp12;
    }
  }
  return str;
}) : (() => {
  let str;
  const items = [MobileNativeUpdateStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => {
    const newBuild = MobileNativeUpdateStore.latestFetchedBuild().newBuild;
    let build;
    if (newBuild != null) {
      build = newBuild.build;
    }
    return build;
  });
  const items1 = [MobileNativeUpdateStore];
  const obj2 = get_initialized;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => MobileNativeUpdateStore.latestFetchedBuild().lastCheck);
  if (null != stateFromStores) {
    const _HermesInternal2 = HermesInternal;
    str = "Open build " + stateFromStores + " installer in a browser";
  } else {
    str = "Never refreshed";
    if (null != stateFromStores1) {
      const _HermesInternal = HermesInternal;
      const obj3 = _modDef4467(stateFromStores1);
      str = "Last refreshed " + obj3.fromNow();
    }
  }
  return str;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = useIsStaffOrDeveloperSettingPredicate;
  const tmp = MobileNativeUpdateStore.hasUpdatesConfigured && obj.useStaffOrDeveloperSettingPredicate();
  return tmp;
}) : (() => {
  const obj = useIsStaffOrDeveloperSettingPredicate;
  const tmp = MobileNativeUpdateStore.hasUpdatesConfigured && obj.useStaffOrDeveloperSettingPredicate();
  return tmp;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = react;
  const cResult = obj.c(4);
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
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    if (stateFromStores) {
      let RefreshIcon = DownloadIcon.DownloadIcon;
    } else {
      RefreshIcon = RefreshIcon2.RefreshIcon;
    }
    const tmp9Result = <RefreshIcon />;
    cResult[2] = stateFromStores;
    cResult[3] = tmp9Result;
    tmp8 = tmp9Result;
  } else {
    tmp8 = cResult[3];
  }
  return tmp8;
}) : (() => {
  const items = [MobileNativeUpdateStore];
  const obj = get_initialized;
  if (obj.useStateFromStores(items, () => null !== MobileNativeUpdateStore.latestFetchedBuild().newBuild)) {
    let RefreshIcon = DownloadIcon.DownloadIcon;
  } else {
    RefreshIcon = RefreshIcon2.RefreshIcon;
  }
  return <RefreshIcon />;
});
let obj = {
  useTitle() {
    return "Internal Build Update";
  },
  parent: null,
  IconComponent: tmp4,
  useDescription: tmp2,
  usePredicate: tmp3,
  onPress: function handleInstallNativeUpdateSettingPress() {
    const newBuild = MobileNativeUpdateStore.latestFetchedBuild().newBuild;
    if (null !== newBuild) {
      const obj2 = MobileNativeUpdateUtilsAll;
      obj2.openBuildInstaller(newBuild);
    } else {
      MobileNativeUpdateStore.checkForNewerBuild();
    }
  },
  withArrow: true
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InternalBuildUpdateSetting.tsx");

export default pressable;