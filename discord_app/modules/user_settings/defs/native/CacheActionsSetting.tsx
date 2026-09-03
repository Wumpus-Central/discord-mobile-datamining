// === Module 15411: handleCacheActionPress ===

// Module 15411 (handleCacheActionPress)
import initialize from "initialize" /* 586 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import dispatcherDefault from "dispatcher" /* 4194 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;
import RedesignBottomSheetTitleHeaderBase from "RedesignBottomSheetTitleHeaderBase" /* 5630 */;
import ActionSheet from "ActionSheet" /* 5998 */;
import ActionSheetRowIcon from "ActionSheetRowIcon" /* 6000 */;
import FileUpIcon from "FileUpIcon" /* 15380 */;
import FileWarningIcon from "FileWarningIcon" /* 15413 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_handleConnectionOpen" /* 5230 */;
import jsxProd from "jsxProd" /* 21 */;
import createToggle from "createToggle" /* 11292 */;

require = arg1;
function handleCacheActionPress(key) {
  let obj = dispatcherDefault;
  obj = {
    key,
    icon() {
      return callback2(callback(table[5]).CircleInformationIcon, {});
    },
    content: key
  };
  obj.open(obj);
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet(CacheActionsActionSheet);
}
function CacheActionsActionSheet() {
  let obj = { header: null, children: null };
  obj = { title: null };
  let intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.ZVZVwR);
  obj[0] = callback2(RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj);
  obj = { hasIcons: true, children: null };
  obj1 = { icon: callback2(FileUpIcon.FileUpIcon, {}), label: null, onPress: null };
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
        return { value: "HermesInternal", done: null };
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
            obj1 = closure_1_0(15412);
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
          const intl = callback(1233).intl;
          callback2(intl.string(callback(1233).t.GgUIfl));
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp15) {
        dependencyMap = tmp;
        throw tmp15;
      }
    }
  });
  const items = [callback2(ActionSheetRowIcon.ActionSheetRow, obj1), ];
  let obj2 = { variant: "danger", icon: callback2(FileWarningIcon.FileWarningIcon, { color: "text-feedback-critical" }), label: null, onPress: null };
  const intl3 = getSystemLocale.intl;
  obj2[2] = intl3.string(getSystemLocale.t.tgwiMO);
  obj2[3] = function onPress() {
    let obj = callback(15412);
    obj.clearCaches();
    const intl = callback(1233).intl;
    const stringResult = intl.string(callback(1233).t["23xR5w"]);
    obj = {
      key: stringResult,
      icon() {
        return callback2(callback(table[5]).CircleInformationIcon, {});
      },
      content: stringResult
    };
    callback2(4194).open(obj);
    const obj2 = callback2(4194);
    callback2(4445).hideActionSheet(closure_7);
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
    let obj = ACTION_SHEET_HEIGHT_HALFDefault;
    obj = { default: CacheActionsActionSheet };
    obj.openLazy(Promise.resolve(obj), CacheActionsActionSheet);
  },
  usePredicate: function useCacheActionsPredicate() {
    const items = [closure_4];
    const stateFromStores = initialize.useStateFromStores(items, () => connected.isConnected());
    const DeveloperMode = explicitContentFromProto.DeveloperMode;
    const obj = initialize;
    return DeveloperMode.useSetting() && stateFromStores;
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/CacheActionsSetting.tsx");

export default createToggle;