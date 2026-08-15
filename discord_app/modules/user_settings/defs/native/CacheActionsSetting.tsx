// discord_app/modules/user_settings/defs/native/CacheActionsSetting.tsx
import CircleInformationIcon from "CircleInformationIcon";
import _handleConnectionOpen from "_handleConnectionOpen";
import jsxProd from "jsxProd";
import createToggle from "createToggle";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { FileUpIcon } from "../../../../design/components/Icon/native/redesign/generated/FileUpIcon.tsx";
import { FileWarningIcon } from "../../../../design/components/Icon/native/redesign/generated/FileWarningIcon.tsx";
import { ActionSheet } from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import { ActionSheetRowIcon } from "../../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import { RedesignBottomSheetTitleHeaderBase } from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { ACTION_SHEET_HEIGHT_HALF } from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import { dispatcher } from "../../../toast/native/ToastActionCreators.tsx";
import { explicitContentFromProto } from "../../UserSettings.tsx";

let c5;
let closure_6;
const require = arg1;
function handleCacheActionPress(key) {
  let obj = dispatcher;
  obj = {
    key,
    icon() {
      return callback2(callback(table[5]).CircleInformationIcon, {});
    },
    content: key
  };
  obj.open(obj);
  ACTION_SHEET_HEIGHT_HALF.hideActionSheet(CacheActionsActionSheet);
}
function CacheActionsActionSheet() {
  let obj = { header: null, children: null };
  obj = { title: null };
  let intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.ZVZVwR);
  obj[0] = callback2(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj);
  obj = { hasIcons: true, children: null };
  let obj1 = { icon: null, label: null, onPress: null };
  obj1[0] = callback2(FileUpIcon.FileUpIcon, {});
  const intl2 = getSystemLocale.intl;
  obj1[1] = intl2.string(getSystemLocale.t["/GUaXh"]);
  obj1[2] = callback(function*() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = tmp2;
            let obj1 = outer1_0(14878);
            c1 = 1;
            dependencyMap = 1;
            obj1 = { value: null, done: false };
            obj1[0] = obj1.writeCaches();
            return obj1;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw arg1;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          const intl = callback(1236).intl;
          callback2(intl.string(callback(1236).t.GgUIfl));
          dependencyMap = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp15) {
        dependencyMap = tmp;
        throw tmp15;
      }
    }
  });
  const items = [callback2(ActionSheetRowIcon.ActionSheetRow, obj1), ];
  let obj2 = { variant: "danger", icon: null, label: null, onPress: null };
  obj2[1] = callback2(FileWarningIcon.FileWarningIcon, { color: "text-feedback-critical" });
  const intl3 = getSystemLocale.intl;
  obj2[2] = intl3.string(getSystemLocale.t.tgwiMO);
  obj2[3] = function onPress() {
    let obj = callback(14878);
    obj.clearCaches();
    const intl = callback(1236).intl;
    const stringResult = intl.string(callback(1236).t["23xR5w"]);
    obj = {
      key: stringResult,
      icon() {
        return callback2(callback(table[5]).CircleInformationIcon, {});
      },
      content: stringResult
    };
    callback2(4094).open(obj);
    const obj2 = callback2(4094);
    callback2(4342).hideActionSheet(closure_7);
  };
  items[1] = callback2(ActionSheetRowIcon.ActionSheetRow, obj2);
  obj[1] = items;
  obj[1] = callback3(ActionSheetRowIcon.ActionSheetRow.Group, obj);
  return callback2(ActionSheet.ActionSheet, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
CacheActionsActionSheet = "CacheActionsActionSheet";
createToggle = {
  useTitle: function useCacheActionsTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.ZVZVwR);
  },
  parent: null,
  IconComponent: require("FileWarningIcon").FileWarningIcon,
  onPress: function handleCacheActionsPress() {
    let obj = ACTION_SHEET_HEIGHT_HALF;
    obj = { default: CacheActionsActionSheet };
    obj.openLazy(Promise.resolve(obj), CacheActionsActionSheet);
  },
  usePredicate: function useCacheActionsPredicate() {
    const items = [_handleConnectionOpen];
    const stateFromStores = initialize.useStateFromStores(items, () => connected.isConnected());
    const DeveloperMode = explicitContentFromProto.DeveloperMode;
    const obj = initialize;
    return DeveloperMode.useSetting() && stateFromStores;
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/defs/native/CacheActionsSetting.tsx");

export default createToggle;