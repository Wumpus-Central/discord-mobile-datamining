// discord_app/modules/user_settings/defs/native/CacheActionsSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import CircleInformationIcon from "../../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import BrowserManager from "../../../links/native/BrowserManager.tsx";
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
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import GatewayConnectionStore from "../../../gateway/GatewayConnectionStore.tsx";

const CacheActionsDiskUsageSectionDefault = CacheActionsDiskUsageSection;

require = fn;
function handleCacheActionPress(key) {
  ToastActionCreatorsDefault.open({
    key,
    icon() {
      return closure_1_7(CircleInformationIcon.CircleInformationIcon, {});
    },
    content: key,
  });
  const obj2 = {
    key,
    icon() {
      return closure_1_7(CircleInformationIcon.CircleInformationIcon, {});
    },
    content: key,
  };
  ActionSheetActionCreatorsDefault.hideActionSheet(CacheActionsActionSheet);
}
function CacheActionsActionSheet() {
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
          const intl = closure_128_0(closure_128_2[8]).intl;
          closure_128_10(intl.string(closure_128_0(closure_128_2[8]).t.GgUIfl));
          c2 = 3;
          return { value: "HermesInternal", done: null };
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
      tmp7Result = React5(ActivityIndicator_ActivityIndicator.ActivityIndicator, { size: "small", accessible: false });
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
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_0 = tmp2;
            DiskUsageManagerDefault.clearCaches();
            CacheActionCreators.clearCaches();
            c1 = 1;
            c2 = 1;
            const obj7 = { value: BrowserManager.browserManagerClearWebsiteData(), done: false };
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
          const intl = closure_128_0(closure_128_2[8]).intl;
          closure_128_10(intl.string(closure_128_0(closure_128_2[8]).t["23xR5w"]));
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp21) {
        c2 = tmp;
        throw tmp21;
      }
    }
  });
  items[2] = React5(TableRow.TableRow, obj8);
  obj7.children = items;
  const items1 = [React6(TableRowGroup.TableRowGroup, obj7)];
  let tmp7Result4 = null != diskUsageState;
  if (tmp7Result4) {
    const obj9 = { state: diskUsageState, onDiagnosticsBusyChange: tmp4[1] };
    tmp7Result4 = React5(CacheActionsDiskUsageSectionDefault, obj9);
  }
  items1[1] = tmp7Result4;
  obj2.children = items1;
  return React6(ActionSheet.ActionSheet, obj2);
}
const useState = fn(19).useState;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
CacheActionsActionSheet = "CacheActionsActionSheet";
const SettingBuilders = fn(10993);
const pressable = SettingBuilders.createPressable({
  useTitle: function useCacheActionsTitle() {
    const intl = util.intl;
    return intl.string(util.t.ZVZVwR);
  },
  parent: null,
  IconComponent: fn(15101).FileWarningIcon,
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
