// discord_app/modules/user_settings/defs/native/CacheActionsSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ActivityIndicator_ActivityIndicator from "../../../../design/components/ActivityIndicator/native/ActivityIndicator.native.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import FileIcon from "../../../../design/components/Icon/native/redesign/generated/FileIcon.tsx";
import FileUpIcon from "../../../../design/components/Icon/native/redesign/generated/FileUpIcon.tsx";
import CacheActionsDiskUsageSection from "CacheActionsDiskUsageSection.tsx";
import DiskUsageManagerDefault from "../../../install/native/DiskUsageManager.android.tsx";
import CacheActionCreators from "../../../cache/CacheActionCreators.tsx";
import FileWarningIcon from "../../../../design/components/Icon/native/redesign/generated/FileWarningIcon.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import GatewayConnectionStore from "../../../gateway/GatewayConnectionStore.tsx";

const CacheActionsDiskUsageSectionDefault = CacheActionsDiskUsageSection;

require = fn;
function handleCacheActionPress(key) {
  ToastActionCreatorsDefault.open({
    key,
    icon() {
      return closure_1_5(closure_1_0(dependencyMap[5]).CircleInformationIcon, {});
    },
    content: key,
  });
  const obj2 = {
    key,
    icon() {
      return closure_1_5(closure_1_0(dependencyMap[5]).CircleInformationIcon, {});
    },
    content: key,
  };
  ActionSheetActionCreatorsDefault.hideActionSheet(CacheActionsActionSheet);
}
function CacheActionsActionSheet() {
  const diskUsageMeasurement = CacheActionsDiskUsageSection.useDiskUsageMeasurement();
  ({ diskUsageState, isCalculating } = diskUsageMeasurement);
  let obj2 = { header: null, dismissAccessibilityLabel: null, children: null };
  let obj3 = { title: null };
  let intl = util.intl;
  obj3.title = intl.string(util.t.ZVZVwR);
  obj2.header = hasOwnProperty(BottomSheetTitleHeader.BottomSheetTitleHeader, obj3);
  const intl2 = util.intl;
  obj2.dismissAccessibilityLabel = intl2.string(util.t.AVZpFH);
  let obj4 = { icon: hasOwnProperty(FileUpIcon.FileUpIcon, {}), label: null, disabled: null, onPress: null };
  const intl3 = util.intl;
  obj4.label = intl3.string(util.t["/GUaXh"]);
  obj4.disabled = isCalculating;
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
        return { value: "HermesInternal", done: null };
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
            const obj5 = { value: CacheActionCreators.writeCaches(), done: false };
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
          const intl = closure_128_0(closure_128_2[6]).intl;
          closure_128_8(intl.string(closure_128_0(closure_128_2[6]).t.GgUIfl));
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp15) {
        c2 = tmp;
        throw tmp15;
      }
    }
  });
  const items = [hasOwnProperty(TableRow.TableRow, obj4), ,];
  let tmp5Result3 = null != DiskUsageManagerDefault.calculateSize;
  if (tmp5Result3) {
    let obj5 = {
      icon: hasOwnProperty(FileIcon.FileIcon, {}),
      label: null,
      trailing: null,
      disabled: null,
      accessibilityState: null,
      onPress: null,
    };
    const intl4 = util.intl;
    const t = util.t;
    obj5.label = intl4.string(isCalculating ? t.Ynmbie : t.iAFGRu);
    let tmp5Result = null;
    if (isCalculating) {
      tmp5Result = hasOwnProperty(ActivityIndicator_ActivityIndicator.ActivityIndicator, {
        size: "small",
        accessible: false,
      });
    }
    obj5.trailing = tmp5Result;
    obj5.disabled = isCalculating;
    const obj6 = { busy: isCalculating, disabled: isCalculating };
    obj5.accessibilityState = obj6;
    obj5.onPress = diskUsageMeasurement.handleCalculateSize;
    tmp5Result3 = hasOwnProperty(TableRow.TableRow, obj5);
  }
  const obj7 = { hasIcons: true, children: null };
  items[1] = tmp5Result3;
  const obj8 = {
    variant: "danger",
    icon: hasOwnProperty(FileWarningIcon.FileWarningIcon, { color: "text-feedback-critical" }),
    label: null,
    disabled: null,
    onPress: null,
  };
  const intl5 = util.intl;
  obj8.label = intl5.string(util.t.tgwiMO);
  obj8.disabled = isCalculating;
  obj8.onPress = function onPress() {
    DiskUsageManagerDefault.clearCaches();
    CacheActionCreators.clearCaches();
    const intl = util.intl;
    const stringResult = intl.string(util.t["23xR5w"]);
    ToastActionCreatorsDefault.open({
      key: stringResult,
      icon() {
        return closure_1_5(closure_1_0(dependencyMap[5]).CircleInformationIcon, {});
      },
      content: stringResult,
    });
    const obj4 = {
      key: stringResult,
      icon() {
        return closure_1_5(closure_1_0(dependencyMap[5]).CircleInformationIcon, {});
      },
      content: stringResult,
    };
    ActionSheetActionCreatorsDefault.hideActionSheet(CacheActionsActionSheet);
  };
  items[2] = hasOwnProperty(TableRow.TableRow, obj8);
  obj7.children = items;
  const items1 = [timestampProducer(TableRowGroup.TableRowGroup, obj7)];
  let tmp5Result4 = null != diskUsageState;
  if (tmp5Result4) {
    const obj9 = { state: diskUsageState };
    tmp5Result4 = hasOwnProperty(CacheActionsDiskUsageSectionDefault, obj9);
  }
  items1[1] = tmp5Result4;
  obj2.children = items1;
  return timestampProducer(ActionSheet.ActionSheet, obj2);
}
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
CacheActionsActionSheet = "CacheActionsActionSheet";
const SettingBuilders = fn(11606);
const pressable = SettingBuilders.createPressable({
  useTitle: function useCacheActionsTitle() {
    const intl = util.intl;
    return intl.string(util.t.ZVZVwR);
  },
  parent: null,
  IconComponent: fn(15671).FileWarningIcon,
  onPress: function handleCacheActionsPress() {
    ActionSheetActionCreatorsDefault.openLazy(
      Promise.resolve({ default: CacheActionsActionSheet }),
      CacheActionsActionSheet,
    );
  },
  usePredicate: function useCacheActionsPredicate() {
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
