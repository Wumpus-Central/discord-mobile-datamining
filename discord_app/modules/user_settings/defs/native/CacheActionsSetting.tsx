// === Module 15657: CacheActionsSetting ===

// Module 15657 (CacheActionsSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4335 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7252 */;
import ActionSheet from "ActionSheet" /* 7300 */;
import ActionSheetRow from "ActionSheetRow" /* 7302 */;
import FileUpIcon from "FileUpIcon" /* 15626 */;
import CacheActionCreators from "CacheActionCreators" /* 15658 */;
import FileWarningIcon from "FileWarningIcon" /* 15659 */;
import DiskUsageManagerDefault from "DiskUsageManager" /* 15661 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5358 */;

require = fn;
function handleCacheActionPress(key) {
  ToastActionCreatorsDefault.open({
    key,
    icon() {
      return closure_1_5(closure_1_0(dependencyMap[5]).CircleInformationIcon, {});
    },
    content: key
  });
  const obj2 = {
    key,
    icon() {
      return closure_1_5(closure_1_0(dependencyMap[5]).CircleInformationIcon, {});
    },
    content: key
  };
  ActionSheetActionCreatorsDefault.hideActionSheet(CacheActionsActionSheet);
}
function CacheActionsActionSheet() {
  let obj = { header: null, children: null };
  let obj2 = { title: null };
  let intl = util.intl;
  obj2.title = intl.string(util.t.ZVZVwR);
  obj.header = hasOwnProperty(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
  let obj3 = { hasIcons: true, children: null };
  let obj4 = { icon: hasOwnProperty(FileUpIcon.FileUpIcon, {}), label: null, onPress: null };
  const intl2 = util.intl;
  obj4.label = intl2.string(util.t["/GUaXh"]);
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
  const items = [hasOwnProperty(ActionSheetRow.ActionSheetRow, obj4), ];
  let obj5 = { variant: "danger", icon: hasOwnProperty(FileWarningIcon.FileWarningIcon, { color: "text-feedback-critical" }), label: null, onPress: null };
  const intl3 = util.intl;
  obj5.label = intl3.string(util.t.tgwiMO);
  obj5.onPress = function onPress() {
    DiskUsageManagerDefault.clearCaches();
    CacheActionCreators.clearCaches();
    const intl = util.intl;
    const stringResult = intl.string(util.t["23xR5w"]);
    ToastActionCreatorsDefault.open({
      key: stringResult,
      icon() {
        return closure_1_5(closure_1_0(dependencyMap[5]).CircleInformationIcon, {});
      },
      content: stringResult
    });
    const obj4 = {
      key: stringResult,
      icon() {
        return closure_1_5(closure_1_0(dependencyMap[5]).CircleInformationIcon, {});
      },
      content: stringResult
    };
    ActionSheetActionCreatorsDefault.hideActionSheet(CacheActionsActionSheet);
  };
  items[1] = hasOwnProperty(ActionSheetRow.ActionSheetRow, obj5);
  obj3.children = items;
  obj.children = timestampProducer(ActionSheetRow.ActionSheetRow.Group, obj3);
  return hasOwnProperty(ActionSheet.ActionSheet, obj);
}
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
CacheActionsActionSheet = "CacheActionsActionSheet";
const SettingBuilders = fn(11602);
const pressable = SettingBuilders.createPressable({
  useTitle: function useCacheActionsTitle() {
    const intl = util.intl;
    return intl.string(util.t.ZVZVwR);
  },
  parent: null,
  IconComponent: fn(15659).FileWarningIcon,
  onPress: function handleCacheActionsPress() {
    ActionSheetActionCreatorsDefault.openLazy(Promise.resolve({ default: CacheActionsActionSheet }), CacheActionsActionSheet);
  },
  usePredicate: function useCacheActionsPredicate() {
    const items = [GatewayConnectionStore];
    const stateFromStores = initialize.useStateFromStores(items, () => connected.isConnected());
    const DeveloperMode = UserSettings.DeveloperMode;
    return DeveloperMode.useSetting() && stateFromStores;
  },
  withArrow: true
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/CacheActionsSetting.tsx");

export default pressable;