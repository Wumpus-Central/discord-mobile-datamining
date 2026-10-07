// discord_app/modules/user_settings/defs/native/CacheActionsSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import DesignSystemsNotificationComponentsExperiment from "../../../design/DesignSystemsNotificationComponentsExperiment.tsx";
import CircleInformationIcon from "../../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ActivityIndicator_ActivityIndicator from "../../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import FileIcon from "../../../../design/components/Icon/native/redesign/generated/FileIcon.tsx";
import FileUpIcon from "../../../../design/components/Icon/native/redesign/generated/FileUpIcon.tsx";
import CacheActionsDiskUsageSection from "CacheActionsDiskUsageSection.tsx";
import DiskUsageManagerDefault from "../../../install/native/DiskUsageManager.native.tsx";
import FileWarningIcon from "../../../../design/components/Icon/native/redesign/generated/FileWarningIcon.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import GatewayConnectionStore from "../../../gateway/GatewayConnectionStore.tsx";

const CacheActionsDiskUsageSectionDefault = CacheActionsDiskUsageSection;

require = fn;
function handleCacheActionPress(text) {
  const designSystemsNotificationComponents =
    DesignSystemsNotificationComponentsExperiment.getDesignSystemsNotificationComponents("CacheActionsSetting");
  const obj2 = ToastActionCreatorsDefault;
  if (designSystemsNotificationComponents) {
    const obj3 = { text, icon: CircleInformationIcon.CircleInformationIcon };
    obj2.openMana(text, obj3);
    let tmp6 = importDefault;
  } else {
    const obj4 = {
      key: text,
      icon() {
        return closure_1_7(require("CircleInformationIcon").CircleInformationIcon, {});
      },
      content: text,
    };
    obj2.open(obj4);
    tmp6 = importDefault;
  }
  tmp6(4860).hideActionSheet(CacheActionsActionSheet);
  const tmp6Result = tmp6(4860);
}
const useState = fn(19).useState;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const CacheActionsActionSheet = "CacheActionsActionSheet";
fn(558);
const ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = require("c").c(25);
      let obj = require("c");
      const diskUsageMeasurement = require("CacheActionsDiskUsageSection").useDiskUsageMeasurement();
      ({ diskUsageState, isCalculating, handleCalculateSize } = diskUsageMeasurement);
      const tmp5 = _slicedToArray(useState(false), 2);
      let first = isCalculating;
      if (!isCalculating) {
        first = tmp5[0];
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj3 = { title: null };
        let intl = tmp(1126).intl;
        obj3.title = intl.string(tmp(1126).t.ZVZVwR);
        const tmp10 = closure_7(tmp(6651).BottomSheetTitleHeader, obj3);
        const intl2 = tmp(1126).intl;
        const stringResult = intl2.string(tmp(1126).t.AVZpFH);
        cResult[0] = tmp10;
        cResult[1] = stringResult;
        tmp7 = tmp10;
        tmp8 = stringResult;
      } else {
        [tmp7, tmp8] = cResult;
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp15 = closure_7(tmp(15380).FileUpIcon, {});
        const intl3 = tmp(1126).intl;
        const stringResult1 = intl3.string(tmp(1126).t["/GUaXh"]);
        cResult[2] = tmp15;
        cResult[3] = stringResult1;
        let tmp13 = stringResult1;
        let tmp12 = tmp15;
      } else {
        tmp12 = cResult[2];
        tmp13 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        _require = asyncGeneratorStep(async () => {
          if (dependencyMap === 2) {
            dependencyMap = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              dependencyMap = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  dependencyMap = 3;
                  throw value;
                } else if (arg0 === 2) {
                  dependencyMap = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  c1 = 1;
                  dependencyMap = 1;
                  const obj5 = { value: tmp2(15416).writeCaches(), done: false };
                  return obj5;
                }
              } else if (arg0 === 1) {
                dependencyMap = 3;
                throw value;
              } else if (arg0 === 2) {
                dependencyMap = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                const intl = tmp2(1126).intl;
                handleCacheActionPress(intl.string(tmp2(1126).t.GgUIfl));
                dependencyMap = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp15) {
              dependencyMap = tmp;
              throw tmp15;
            }
          }
        });
        const fn = function () {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        };
        cResult[4] = fn;
        let tmp17 = fn;
      } else {
        tmp17 = cResult[4];
      }
      if (cResult[5] !== first) {
        let obj4 = { icon: tmp12, label: tmp13, disabled: first, onPress: tmp17 };
        const tmp21 = closure_7(tmp(6000).TableRow, obj4);
        cResult[5] = first;
        cResult[6] = tmp21;
        let tmp19 = tmp21;
      } else {
        tmp19 = cResult[6];
      }
      if (cResult[7] === handleCalculateSize) {
        if (cResult[8] === first) {
          if (cResult[9] === isCalculating) {
            let tmp22 = cResult[10];
          }
          const _Symbol = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp29 = closure_7(tmp(15417).FileWarningIcon, { color: "text-feedback-critical" });
            const intl5 = tmp(1126).intl;
            const stringResult2 = intl5.string(tmp(1126).t.tgwiMO);
            cResult[11] = tmp29;
            cResult[12] = stringResult2;
            let tmp27 = stringResult2;
            let tmp26 = tmp29;
          } else {
            tmp26 = cResult[11];
            tmp27 = cResult[12];
          }
          const _Symbol2 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            closure_129_0 = asyncGeneratorStep(async () => {
              if (dependencyMap === 2) {
                dependencyMap = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp4 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj2 = { value, done: true };
                  return obj2;
                } else {
                  return { value: "IconComponent", done: null };
                }
              } else {
                try {
                  dependencyMap = 2;
                  if (0 === v1) {
                    if (arg0 === 1) {
                      dependencyMap = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      dependencyMap = 3;
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      v1(15413).clearCaches();
                      const obj5 = v1(15413);
                      tmp2(15416).clearCaches();
                      const obj6 = tmp2(15416);
                      v1 = 1;
                      dependencyMap = 1;
                      const obj4 = { value: tmp2(4857).browserManagerClearWebsiteData(), done: false };
                      return obj4;
                    }
                  } else if (arg0 === 1) {
                    dependencyMap = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    dependencyMap = 3;
                    const obj = { value, done: true };
                    return obj;
                  } else {
                    const intl = tmp2(1126).intl;
                    handleCacheActionPress(intl.string(tmp2(1126).t["23xR5w"]));
                    dependencyMap = 3;
                    return { value: "IconComponent", done: null };
                  }
                } catch (tmp13) {
                  dependencyMap = tmp;
                  throw tmp13;
                }
              }
            });
            const fn2 = function () {
              const self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
            cResult[13] = fn2;
            let tmp31 = fn2;
          } else {
            tmp31 = cResult[13];
          }
          if (cResult[14] !== first) {
            let obj5 = { variant: "danger", icon: tmp26, label: tmp27, disabled: first, onPress: tmp31 };
            const tmp35 = closure_7(tmp(6000).TableRow, obj5);
            cResult[14] = first;
            cResult[15] = tmp35;
            let tmp33 = tmp35;
          } else {
            tmp33 = cResult[15];
          }
          if (cResult[16] === tmp33) {
            if (cResult[17] === tmp19) {
              if (cResult[18] === tmp22) {
                let tmp36 = cResult[19];
              }
              if (cResult[20] !== diskUsageState) {
                let tmp41 = null != diskUsageState;
                if (tmp41) {
                  let obj6 = { state: diskUsageState, onDiagnosticsBusyChange: tmp5[1] };
                  tmp41 = closure_7(CacheActionsDiskUsageSectionDefault, obj6);
                }
                cResult[20] = diskUsageState;
                cResult[21] = tmp41;
                let tmp39 = tmp41;
              } else {
                tmp39 = cResult[21];
              }
              if (cResult[22] === tmp36) {
                if (cResult[23] === tmp39) {
                  let tmp44 = cResult[24];
                }
                return tmp44;
              }
              const obj7 = { header: tmp7, dismissAccessibilityLabel: tmp8, children: null };
              const items = [tmp36, tmp39];
              obj7.children = items;
              const tmp46 = closure_8(tmp(6708).ActionSheet, obj7);
              cResult[22] = tmp36;
              cResult[23] = tmp39;
              cResult[24] = tmp46;
              tmp44 = tmp46;
            }
          }
          const obj8 = { hasIcons: true, children: null };
          const items1 = [tmp19, tmp22, tmp33];
          obj8.children = items1;
          const tmp38 = closure_8(tmp(6081).TableRowGroup, obj8);
          cResult[16] = tmp33;
          cResult[17] = tmp19;
          cResult[18] = tmp22;
          cResult[19] = tmp38;
          tmp36 = tmp38;
        }
      }
      let tmp24Result2 = null != DiskUsageManagerDefault.calculateSize;
      if (tmp24Result2) {
        const obj9 = {
          icon: closure_7(tmp(11814).FileIcon, {}),
          label: null,
          trailing: null,
          disabled: null,
          accessibilityState: null,
          onPress: null,
        };
        const intl4 = tmp(1126).intl;
        const t = tmp(1126).t;
        obj9.label = intl4.string(isCalculating ? t.Ynmbie : t.iAFGRu);
        let tmp24Result = null;
        if (isCalculating) {
          tmp24Result = closure_7(tmp(5975).ActivityIndicator, { size: "small", accessible: false });
        }
        obj9.trailing = tmp24Result;
        obj9.disabled = first;
        const obj10 = { busy: isCalculating, disabled: first };
        obj9.accessibilityState = obj10;
        obj9.onPress = handleCalculateSize;
        tmp24Result2 = closure_7(tmp(6000).TableRow, obj9);
      }
      cResult[7] = handleCalculateSize;
      cResult[8] = first;
      cResult[9] = isCalculating;
      cResult[10] = tmp24Result2;
      tmp22 = tmp24Result2;
      let obj2 = require("CacheActionsDiskUsageSection");
    }
  : () => {
      const diskUsageMeasurement = CacheActionsDiskUsageSection.useDiskUsageMeasurement();
      ({ diskUsageState, isCalculating } = diskUsageMeasurement);
      const tmp4 = _slicedToArray(useState(false), 2);
      let first = isCalculating;
      if (!isCalculating) {
        first = tmp4[0];
      }
      let obj2 = { header: null, dismissAccessibilityLabel: null, children: null };
      let obj3 = { title: null };
      let intl = util.intl;
      obj3.title = intl.string(util.t.ZVZVwR);
      obj2.header = React5(BottomSheetTitleHeader.BottomSheetTitleHeader, obj3);
      const intl2 = util.intl;
      obj2.dismissAccessibilityLabel = intl2.string(util.t.AVZpFH);
      let obj4 = { icon: React5(FileUpIcon.FileUpIcon, {}), label: null, disabled: null, onPress: null };
      const intl3 = util.intl;
      obj4.label = intl3.string(util.t["/GUaXh"]);
      obj4.disabled = first;
      obj4.onPress = asyncGeneratorStep(async () => {
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c2 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_0 = tmp2;
                c1 = 1;
                c2 = 1;
                const obj5 = { value: require("CacheActionCreators").writeCaches(), done: false };
                return obj5;
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              const intl = closure_128_0(closure_128_2[9]).intl;
              closure_128_10(intl.string(closure_128_0(closure_128_2[9]).t.GgUIfl));
              c2 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp15) {
            c2 = tmp;
            throw tmp15;
          }
        }
      });
      const items = [React5(TableRow.TableRow, obj4), ,];
      let tmp7Result3 = null != DiskUsageManagerDefault.calculateSize;
      if (tmp7Result3) {
        let obj5 = {
          icon: React5(FileIcon.FileIcon, {}),
          label: null,
          trailing: null,
          disabled: null,
          accessibilityState: null,
          onPress: null,
        };
        const intl4 = util.intl;
        const t = util.t;
        obj5.label = intl4.string(isCalculating ? t.Ynmbie : t.iAFGRu);
        let tmp7Result = null;
        if (isCalculating) {
          tmp7Result = React5(ActivityIndicator_ActivityIndicator.ActivityIndicator, {
            size: "small",
            accessible: false,
          });
        }
        obj5.trailing = tmp7Result;
        obj5.disabled = first;
        let obj6 = { busy: isCalculating, disabled: first };
        obj5.accessibilityState = obj6;
        obj5.onPress = diskUsageMeasurement.handleCalculateSize;
        tmp7Result3 = React5(TableRow.TableRow, obj5);
      }
      let obj7 = { hasIcons: true, children: null };
      items[1] = tmp7Result3;
      const obj8 = {
        variant: "danger",
        icon: React5(FileWarningIcon.FileWarningIcon, { color: "text-feedback-critical" }),
        label: null,
        disabled: null,
        onPress: null,
      };
      const intl5 = util.intl;
      obj8.label = intl5.string(util.t.tgwiMO);
      obj8.disabled = first;
      obj8.onPress = asyncGeneratorStep(async () => {
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj5 = { value, done: true };
            return obj5;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c2 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                closure_0 = tmp2;
                DiskUsageManagerDefault.clearCaches();
                require("CacheActionCreators").clearCaches();
                const obj3 = require("CacheActionCreators");
                c1 = 1;
                c2 = 1;
                const obj7 = { value: require("BrowserManager").browserManagerClearWebsiteData(), done: false };
                return obj7;
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              const intl = closure_128_0(closure_128_2[9]).intl;
              closure_128_10(intl.string(closure_128_0(closure_128_2[9]).t["23xR5w"]));
              c2 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp21) {
            c2 = tmp;
            throw tmp21;
          }
        }
      });
      items[2] = React5(TableRow.TableRow, obj8);
      obj7.children = items;
      const items1 = [closure_1_8(TableRowGroup.TableRowGroup, obj7)];
      let tmp7Result4 = null != diskUsageState;
      if (tmp7Result4) {
        const obj9 = { state: diskUsageState, onDiagnosticsBusyChange: tmp4[1] };
        tmp7Result4 = React5(CacheActionsDiskUsageSectionDefault, obj9);
      }
      items1[1] = tmp7Result4;
      obj2.children = items1;
      return closure_1_8(ActionSheet.ActionSheet, obj2);
    };
const SettingBuilders = fn(11142);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GatewayConnectionStore];
        const fn = function n() {
          return connected.isConnected();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      const DeveloperMode = UserSettings.DeveloperMode;
      const tmpResult = initialize;
      return DeveloperMode.useSetting() && stateFromStores;
    }
  : () => {
      const items = [GatewayConnectionStore];
      const stateFromStores = initialize.useStateFromStores(items, () => connected.isConnected());
      const DeveloperMode = UserSettings.DeveloperMode;
      return DeveloperMode.useSetting() && stateFromStores;
    };
const pressable = SettingBuilders.createPressable({
  useTitle: function useCacheActionsTitle() {
    const intl = util.intl;
    return intl.string(util.t.ZVZVwR);
  },
  parent: null,
  IconComponent: fn(15417).FileWarningIcon,
  onPress: function handleCacheActionsPress() {
    ActionSheetActionCreatorsDefault.openLazy(Promise.resolve({ default: closure_11 }), CacheActionsActionSheet);
  },
  usePredicate: ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = c.c(2);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [GatewayConnectionStore];
          const fn = function n() {
            return connected.isConnected();
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp4 = items;
          tmp5 = fn;
        } else {
          [tmp4, tmp5] = cResult;
        }
        const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
        const DeveloperMode = UserSettings.DeveloperMode;
        const tmpResult = initialize;
        return DeveloperMode.useSetting() && stateFromStores;
      }
    : () => {
        const items = [GatewayConnectionStore];
        const stateFromStores = initialize.useStateFromStores(items, () => connected.isConnected());
        const DeveloperMode = UserSettings.DeveloperMode;
        return DeveloperMode.useSetting() && stateFromStores;
      },
  withArrow: true,
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/CacheActionsSetting.tsx");

export default pressable;
