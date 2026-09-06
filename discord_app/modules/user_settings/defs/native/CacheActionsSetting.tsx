// discord_app/modules/user_settings/defs/native/CacheActionsSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import ActionSheetRow from "../../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import FileUpIcon from "../../../../design/components/Icon/native/redesign/generated/FileUpIcon.tsx";
import CacheActionCreators from "../../../cache/CacheActionCreators.tsx";
import FileWarningIcon from "../../../../design/components/Icon/native/redesign/generated/FileWarningIcon.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import GatewayConnectionStore from "../../../gateway/GatewayConnectionStore.tsx";

require = fn;
function handleCacheActionPress(key) {
  const obj = {
    key,
    icon() {
      return closure_1_5(closure_1_0(dependencyMap[5]).CircleInformationIcon, {});
    },
    content: key,
  };
  obj.open(obj);
  ActionSheetActionCreatorsDefault.hideActionSheet(CacheActionsActionSheet);
}
function CacheActionsActionSheet() {
  let obj = { header: null, children: null };
  obj = { title: null };
  let intl = util.intl;
  obj.title = intl.string(util.t.ZVZVwR);
  obj.header = hasOwnProperty(BottomSheetTitleHeader.BottomSheetTitleHeader, obj);
  obj = { hasIcons: true, children: null };
  let obj1 = { icon: hasOwnProperty(FileUpIcon.FileUpIcon, {}), label: null, onPress: null };
  const intl2 = util.intl;
  obj1.label = intl2.string(util.t["/GUaXh"]);
  obj1.onPress = asyncGeneratorStep(async () => {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = tmp2;
            let obj1 = CacheActionCreators;
            c1 = 1;
            c2 = 1;
            obj1 = { value: null, done: false };
            obj1.value = obj1.writeCaches();
            return obj1;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
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
  const items = [hasOwnProperty(ActionSheetRow.ActionSheetRow, obj1)];
  let obj2 = {
    variant: "danger",
    icon: hasOwnProperty(FileWarningIcon.FileWarningIcon, { color: "text-feedback-critical" }),
    label: null,
    onPress: null,
  };
  const intl3 = util.intl;
  obj2.label = intl3.string(util.t.tgwiMO);
  obj2.onPress = function onPress() {
    let obj = CacheActionCreators;
    obj.clearCaches();
    const intl = util.intl;
    const stringResult = intl.string(util.t["23xR5w"]);
    obj = {
      key: stringResult,
      icon() {
        return closure_1_5(closure_1_0(dependencyMap[5]).CircleInformationIcon, {});
      },
      content: stringResult,
    };
    ToastActionCreatorsDefault.open(obj);
    ActionSheetActionCreatorsDefault.hideActionSheet(CacheActionsActionSheet);
  };
  items[1] = hasOwnProperty(ActionSheetRow.ActionSheetRow, obj2);
  obj.children = items;
  obj.children = timestampProducer(ActionSheetRow.ActionSheetRow.Group, obj);
  return hasOwnProperty(ActionSheet.ActionSheet, obj);
}
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
CacheActionsActionSheet = "CacheActionsActionSheet";
fn(11468);
let SettingBuilders = {
  useTitle: function useCacheActionsTitle() {
    const intl = util.intl;
    return intl.string(util.t.ZVZVwR);
  },
  parent: null,
  IconComponent: fn(15571).FileWarningIcon,
  onPress: function handleCacheActionsPress() {
    const obj = { default: CacheActionsActionSheet };
    obj.openLazy(Promise.resolve(obj), CacheActionsActionSheet);
  },
  usePredicate: function useCacheActionsPredicate() {
    const items = [GatewayConnectionStore];
    const stateFromStores = initialize.useStateFromStores(items, () => connected.isConnected());
    const DeveloperMode = UserSettings.DeveloperMode;
    return DeveloperMode.useSetting() && stateFromStores;
  },
  withArrow: true,
};
SettingBuilders = SettingBuilders.createPressable(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/CacheActionsSetting.tsx");

export default SettingBuilders;
