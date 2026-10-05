// discord_app/modules/user_settings/defs/native/CacheActionsSetting.tsx
import react from "../../../../../_runtime/00019_react.js";
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import intl6 from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import DesignSystemsNotificationComponentsExperiment from "../../../design/DesignSystemsNotificationComponentsExperiment.tsx";
import CircleInformationIcon from "../../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ActivityIndicator_ActivityIndicator from "../../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import TableRow4 from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup2 from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import BottomSheetTitleHeader2 from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet2 from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import FileIcon from "../../../../design/components/Icon/native/redesign/generated/FileIcon.tsx";
import FileUpIcon from "../../../../design/components/Icon/native/redesign/generated/FileUpIcon.tsx";
import CacheActionsDiskUsageSection from "CacheActionsDiskUsageSection.tsx";
import DiskUsageManagerDefault from "../../../install/native/DiskUsageManager.android.tsx";
import FileWarningIcon from "../../../../design/components/Icon/native/redesign/generated/FileWarningIcon.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import GatewayConnectionStore from "../../../gateway/GatewayConnectionStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const CacheActionsDiskUsageSectionDefault = CacheActionsDiskUsageSection;
let _require, c1, c2;

let metroImportAll;
let metroImportDefault;
function handleCacheActionPress(text) {
  let tmp6;
  const obj = DesignSystemsNotificationComponentsExperiment;
  const designSystemsNotificationComponents = obj.getDesignSystemsNotificationComponents("CacheActionsSetting");
  const obj2 = ToastActionCreatorsDefault;
  if (designSystemsNotificationComponents) {
    const openMana = obj2.openMana;
    const obj3 = { text, icon: CircleInformationIcon.CircleInformationIcon };
    openMana(text, obj3);
    tmp6 = importDefault;
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
  const tmp6Result = tmp6(4854);
  tmp6Result.hideActionSheet(CacheActionsActionSheet);
}
const useState = react.useState;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const CacheActionsActionSheet = "CacheActionsActionSheet";
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let connected;
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(2);
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      const DeveloperMode = UserSettings.DeveloperMode;
      const tmp8 = DeveloperMode.useSetting() && stateFromStores;
      return tmp8;
    }
  : () => {
      let connected;
      const items = [GatewayConnectionStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => connected.isConnected());
      const DeveloperMode = UserSettings.DeveloperMode;
      const tmp2 = DeveloperMode.useSetting() && stateFromStores;
      return tmp2;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_0;
      let diskUsageState;
      let handleCalculateSize;
      let intl;
      let isCalculating;
      let items;
      let items1;
      let obj10;
      let string;
      let t;
      let tmp13;
      let tmp14;
      let tmp18;
      let tmp20;
      let tmp25Result;
      let tmp8;
      let tmp9;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(25);
      let obj2 = require("CacheActionsDiskUsageSection");
      const diskUsageMeasurement = obj2.useDiskUsageMeasurement();
      ({ diskUsageState, isCalculating, handleCalculateSize } = diskUsageMeasurement);
      const tmp5 = _slicedToArray(useState(false), 2);
      let first = isCalculating;
      const tmp6 = tmp5[1];
      if (!isCalculating) {
        first = tmp5[0];
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj3 = { title: intl.string(tmp(1126).t.ZVZVwR) };
        const BottomSheetTitleHeader = tmp(6644).BottomSheetTitleHeader;
        intl = tmp(1126).intl;
        const tmp11 = closure_7(BottomSheetTitleHeader, obj3);
        const intl2 = tmp(1126).intl;
        const stringResult = intl2.string(tmp(1126).t.AVZpFH);
        cResult[0] = tmp11;
        cResult[1] = stringResult;
        tmp8 = tmp11;
        tmp9 = stringResult;
      } else {
        [tmp8, tmp9] = cResult;
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp16 = closure_7(tmp(15365).FileUpIcon, {});
        const intl3 = tmp(1126).intl;
        const stringResult1 = intl3.string(tmp(1126).t["/GUaXh"]);
        cResult[2] = tmp16;
        cResult[3] = stringResult1;
        tmp14 = stringResult1;
        tmp13 = tmp16;
      } else {
        tmp13 = cResult[2];
        tmp14 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        _require = _asyncToGenerator(async () => {
          if (c2 === 2) {
            c2 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
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
                  c1 = 1;
                  const obj2 = tmp(c2[17]);
                  c2 = 1;
                  const obj5 = { value: obj2.writeCaches(), done: false };
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
                const intl = tmp(c2[9]).intl;
                handleCacheActionPress(intl.string(tmp(c2[9]).t.GgUIfl));
                c2 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp14) {
              c2 = 3;
              throw tmp14;
            }
          }
        });
        const fn = function () {
          return closure_0(...arguments);
        };
        cResult[4] = fn;
        tmp18 = fn;
      } else {
        tmp18 = cResult[4];
      }
      if (cResult[5] !== first) {
        let obj4 = { icon: tmp13, label: tmp14, disabled: first, onPress: tmp18 };
        const tmp22 = closure_7(tmp(5993).TableRow, obj4);
        cResult[5] = first;
        cResult[6] = tmp22;
        tmp20 = tmp22;
      } else {
        tmp20 = cResult[6];
      }
      if (cResult[7] === handleCalculateSize) {
        if (cResult[8] === first) {
          let tmp23;
          let tmp28;
          let tmp27;
          let tmp32;
          let tmp34;
          if (cResult[9] === isCalculating) {
            tmp23 = cResult[10];
          }
          const _Symbol = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp30 = closure_7(tmp(15401).FileWarningIcon, { color: "text-feedback-critical" });
            const intl5 = tmp(1126).intl;
            const stringResult2 = intl5.string(tmp(1126).t.tgwiMO);
            cResult[11] = tmp30;
            cResult[12] = stringResult2;
            tmp28 = stringResult2;
            tmp27 = tmp30;
          } else {
            tmp27 = cResult[11];
            tmp28 = cResult[12];
          }
          const _Symbol2 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            _require = _asyncToGenerator(async () => {
              let v1;
              if (c2 === 2) {
                c2 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
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
                  c2 = 2;
                  if (0 === v1) {
                    if (arg0 === 1) {
                      c2 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c2 = 3;
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      const obj5 = v1(c2[19]);
                      obj5.clearCaches();
                      const obj6 = tmp(c2[17]);
                      obj6.clearCaches();
                      v1 = 1;
                      const obj7 = tmp(c2[23]);
                      c2 = 1;
                      const obj4 = { value: obj7.browserManagerClearWebsiteData(), done: false };
                      return obj4;
                    }
                  } else if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    const obj = { value, done: true };
                    return obj;
                  } else {
                    const intl = tmp(c2[9]).intl;
                    closure_1_10(intl.string(tmp(c2[9]).t["23xR5w"]));
                    c2 = 3;
                    return { value: "IconComponent", done: null };
                  }
                } catch (tmp12) {
                  c2 = 3;
                  throw tmp12;
                }
              }
            });
            const fn2 = function () {
              return closure_0(...arguments);
            };
            cResult[13] = fn2;
            tmp32 = fn2;
          } else {
            tmp32 = cResult[13];
          }
          if (cResult[14] !== first) {
            let obj5 = { variant: "danger", icon: tmp27, label: tmp28, disabled: first, onPress: tmp32 };
            const tmp36 = closure_7(tmp(5993).TableRow, obj5);
            cResult[14] = first;
            cResult[15] = tmp36;
            tmp34 = tmp36;
          } else {
            tmp34 = cResult[15];
          }
          if (cResult[16] === tmp34) {
            if (cResult[17] === tmp20) {
              let tmp37;
              let tmp40;
              if (cResult[18] === tmp23) {
                tmp37 = cResult[19];
              }
              if (cResult[20] !== diskUsageState) {
                let tmp42 = null != diskUsageState;
                if (tmp42) {
                  let obj6 = { state: diskUsageState, onDiagnosticsBusyChange: tmp6 };
                  tmp42 = closure_7(CacheActionsDiskUsageSectionDefault, obj6);
                }
                cResult[20] = diskUsageState;
                cResult[21] = tmp42;
                tmp40 = tmp42;
              } else {
                tmp40 = cResult[21];
              }
              if (cResult[22] === tmp37) {
                let tmp45;
                if (cResult[23] === tmp40) {
                  tmp45 = cResult[24];
                }
                return tmp45;
              }
              let obj7 = { header: tmp8, dismissAccessibilityLabel: tmp9, children: items };
              items = [tmp37, tmp40];
              const tmp47 = closure_8(tmp(6701).ActionSheet, obj7);
              cResult[22] = tmp37;
              cResult[23] = tmp40;
              cResult[24] = tmp47;
              tmp45 = tmp47;
            }
          }
          const obj8 = { hasIcons: true, children: items1 };
          items1 = [tmp20, tmp23, tmp34];
          const tmp39 = closure_8(tmp(6074).TableRowGroup, obj8);
          cResult[16] = tmp34;
          cResult[17] = tmp20;
          cResult[18] = tmp23;
          cResult[19] = tmp39;
          tmp37 = tmp39;
        }
      }
      let tmp25Result2 = null != DiskUsageManagerDefault.calculateSize;
      if (tmp25Result2) {
        const obj9 = {
          icon: closure_7(tmp(11800).FileIcon, {}),
          label: string(isCalculating ? t.Ynmbie : t.iAFGRu),
          trailing: tmp25Result,
          disabled: first,
          accessibilityState: obj10,
          onPress: handleCalculateSize,
        };
        const TableRow = tmp(5993).TableRow;
        const intl4 = tmp(1126).intl;
        string = intl4.string;
        t = tmp(1126).t;
        tmp25Result = null;
        if (isCalculating) {
          tmp25Result = closure_7(tmp(5968).ActivityIndicator, { size: "small", accessible: false });
        }
        obj10 = { busy: isCalculating, disabled: first };
        tmp25Result2 = closure_7(TableRow, obj9);
      }
      cResult[7] = handleCalculateSize;
      cResult[8] = first;
      cResult[9] = isCalculating;
      cResult[10] = tmp25Result2;
      tmp23 = tmp25Result2;
    }
  : () => {
      let BottomSheetTitleHeader;
      let diskUsageState;
      let intl;
      let intl2;
      let intl3;
      let intl5;
      let isCalculating;
      let items1;
      let obj3;
      let obj6;
      let string;
      let t;
      let tmp8Result;
      let obj = CacheActionsDiskUsageSection;
      const diskUsageMeasurement = obj.useDiskUsageMeasurement();
      ({ diskUsageState, isCalculating } = diskUsageMeasurement);
      const handleCalculateSize = diskUsageMeasurement.handleCalculateSize;
      const tmp4 = _slicedToArray(useState(false), 2);
      let first = isCalculating;
      const tmp5 = tmp4[1];
      if (!isCalculating) {
        first = tmp4[0];
      }
      let obj2 = {
        header: metroImportDefault(BottomSheetTitleHeader, obj3),
        dismissAccessibilityLabel: intl2.string(intl6.t.AVZpFH),
        children: items1,
      };
      const ActionSheet = ActionSheet2.ActionSheet;
      obj3 = { title: intl.string(intl6.t.ZVZVwR) };
      BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
      intl = intl6.intl;
      intl2 = intl6.intl;
      const TableRowGroup = TableRowGroup2.TableRowGroup;
      let obj4 = {
        icon: metroImportDefault(FileUpIcon.FileUpIcon, {}),
        label: intl3.string(intl6.t["/GUaXh"]),
        disabled: first,
        onPress: _asyncToGenerator(async () => {
          let obj2;
          if (c2 === 2) {
            c2 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
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
                  let closure_0 = tmp;
                  c1 = 1;
                  c2 = 1;
                  const obj5 = { value: obj2.writeCaches(), done: false };
                  obj2 = require("CacheActionCreators");
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
            } catch (tmp14) {
              c2 = 3;
              throw tmp14;
            }
          }
        }),
      };
      const TableRow = TableRow4.TableRow;
      intl3 = intl6.intl;
      const items = [metroImportDefault(TableRow, obj4), ,];
      let tmp8Result3 = null != DiskUsageManagerDefault.calculateSize;
      if (tmp8Result3) {
        let obj5 = {
          icon: metroImportDefault(FileIcon.FileIcon, {}),
          label: string(isCalculating ? t.Ynmbie : t.iAFGRu),
          trailing: tmp8Result,
          disabled: first,
          accessibilityState: obj6,
          onPress: handleCalculateSize,
        };
        const TableRow2 = TableRow4.TableRow;
        const intl4 = intl6.intl;
        string = intl4.string;
        t = intl6.t;
        tmp8Result = null;
        if (isCalculating) {
          tmp8Result = metroImportDefault(ActivityIndicator_ActivityIndicator.ActivityIndicator, {
            size: "small",
            accessible: false,
          });
        }
        obj6 = { busy: isCalculating, disabled: first };
        tmp8Result3 = metroImportDefault(TableRow2, obj5);
      }
      let obj7 = { hasIcons: true, children: items };
      items[1] = tmp8Result3;
      const obj8 = {
        variant: "danger",
        icon: metroImportDefault(FileWarningIcon.FileWarningIcon, { color: "text-feedback-critical" }),
        label: intl5.string(intl6.t.tgwiMO),
        disabled: first,
        onPress: _asyncToGenerator(async () => {
          let obj4;
          if (c2 === 2) {
            c2 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
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
                  let closure_0 = tmp;
                  const obj2 = DiskUsageManagerDefault;
                  obj2.clearCaches();
                  const obj3 = require("CacheActionCreators");
                  obj3.clearCaches();
                  c1 = 1;
                  c2 = 1;
                  const obj7 = { value: obj4.browserManagerClearWebsiteData(), done: false };
                  obj4 = require("BrowserManager");
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
            } catch (tmp20) {
              c2 = 3;
              throw tmp20;
            }
          }
        }),
      };
      const TableRow3 = TableRow4.TableRow;
      intl5 = intl6.intl;
      items[2] = metroImportDefault(TableRow3, obj8);
      items1 = [metroImportAll(TableRowGroup, obj7)];
      let tmp8Result4 = null != diskUsageState;
      if (tmp8Result4) {
        const obj9 = { state: diskUsageState, onDiagnosticsBusyChange: tmp5 };
        tmp8Result4 = metroImportDefault(CacheActionsDiskUsageSectionDefault, obj9);
      }
      items1[1] = tmp8Result4;
      return metroImportAll(ActionSheet, obj2);
    };
let obj = {
  useTitle: function useCacheActionsTitle() {
    const intl = intl6.intl;
    return intl.string(intl6.t.ZVZVwR);
  },
  parent: null,
  IconComponent: FileWarningIcon.FileWarningIcon,
  onPress: function handleCacheActionsPress() {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { default: closure_11 };
    obj.openLazy(Promise.resolve(obj2), CacheActionsActionSheet);
  },
  usePredicate: tmp3,
  withArrow: true,
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/CacheActionsSetting.tsx");

export default pressable;
