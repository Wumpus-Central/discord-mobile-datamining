// discord_app/modules/user_settings/defs/native/CacheActionsSetting.tsx
import CircleInformationIcon from "CircleInformationIcon";
import _handleConnectionOpen from "_handleConnectionOpen";
import jsxProd from "jsxProd";
import createToggle from "createToggle";

let c5;
let closure_6;
const require = arg1;
function handleCacheActionPress(key) {
  let obj = require("../../../toast/native/ToastActionCreators.tsx");
  obj = {
    key,
    icon() {
      return callback2(callback(table[5]).CircleInformationIcon, {});
    },
    content: key
  };
  obj.open(obj);
  require("../../../action_sheet/native/ActionSheetActionCreators.tsx").hideActionSheet(CacheActionsActionSheet);
}
function CacheActionsActionSheet() {
  let obj = { header: null, children: null };
  obj = { title: null };
  let intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.ZVZVwR);
  obj[0] = callback2(require("../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx") /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj);
  obj = { hasIcons: true, children: null };
  let obj1 = { icon: null, label: null, onPress: null };
  obj1[0] = callback2(require("../../../../design/components/Icon/native/redesign/generated/FileUpIcon.tsx") /* FileUpIcon */.FileUpIcon, {});
  const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj1[1] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["/GUaXh"]);
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
            let obj1 = outer1_0(14650);
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
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp15) {
        dependencyMap = tmp;
        throw tmp15;
      }
    }
  });
  const items = [callback2(require("../../../../design/components/Sheet/native/ActionSheetRow.native.tsx") /* ActionSheetRowIcon */.ActionSheetRow, obj1), ];
  let obj2 = { variant: "danger", icon: null, label: null, onPress: null };
  obj2[1] = callback2(require("../../../../design/components/Icon/native/redesign/generated/FileWarningIcon.tsx") /* FileWarningIcon */.FileWarningIcon, { color: "text-feedback-critical" });
  const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj2[2] = intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.tgwiMO);
  obj2[3] = function onPress() {
    let obj = callback(14650);
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
    callback2(3986).open(obj);
    const obj2 = callback2(3986);
    callback2(4253).hideActionSheet(closure_7);
  };
  items[1] = callback2(require("../../../../design/components/Sheet/native/ActionSheetRow.native.tsx") /* ActionSheetRowIcon */.ActionSheetRow, obj2);
  obj[1] = items;
  obj[1] = callback3(require("../../../../design/components/Sheet/native/ActionSheetRow.native.tsx") /* ActionSheetRowIcon */.ActionSheetRow.Group, obj);
  return callback2(require("../../../../design/components/Sheet/native/ActionSheet.native.tsx") /* ActionSheet */.ActionSheet, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
CacheActionsActionSheet = "CacheActionsActionSheet";
createToggle = {
  useTitle: function useCacheActionsTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.ZVZVwR);
  },
  parent: null,
  IconComponent: require("FileWarningIcon").FileWarningIcon,
  onPress: function handleCacheActionsPress() {
    let obj = require("../../../action_sheet/native/ActionSheetActionCreators.tsx");
    obj = { default: CacheActionsActionSheet };
    obj.openLazy(Promise.resolve(obj), CacheActionsActionSheet);
  },
  usePredicate: function useCacheActionsPredicate() {
    const items = [_handleConnectionOpen];
    const stateFromStores = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => connected.isConnected());
    const DeveloperMode = require("../../UserSettings.tsx") /* explicitContentFromProto */.DeveloperMode;
    const obj = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
    return DeveloperMode.useSetting() && stateFromStores;
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/defs/native/CacheActionsSetting.tsx");

export default createToggle;