// === Module 14877: handleCacheActionPress ===

// Module 14877 (handleCacheActionPress)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;
import dispatcherDefault from "dispatcher" /* 4094 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import RedesignBottomSheetTitleHeaderBase from "RedesignBottomSheetTitleHeaderBase" /* 6949 */;
import ActionSheet from "ActionSheet" /* 7175 */;
import ActionSheetRowIcon from "ActionSheetRowIcon" /* 7177 */;
import FileUpIcon from "FileUpIcon" /* 13987 */;
import FileWarningIcon from "FileWarningIcon" /* 14879 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _handleConnectionOpen from "_handleConnectionOpen" /* 4495 */;
import jsxProd from "jsxProd" /* 21 */;
import "createToggle";

require = fn;
function handleCacheActionPress(key) {
  const obj = {
    key,
    icon() {
      return callback2(callback(table[5]).CircleInformationIcon, {});
    },
    content: key
  };
  obj.open(obj);
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet(CacheActionsActionSheet);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const CacheActionsActionSheet = "CacheActionsActionSheet";
let createToggle = {
  useTitle: function useCacheActionsTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.ZVZVwR);
  },
  parent: null,
  IconComponent: require("FileWarningIcon").FileWarningIcon,
  onPress: function handleCacheActionsPress() {
    const obj = { default: CacheActionsActionSheet };
    obj.openLazy(Promise.resolve(obj), CacheActionsActionSheet);
  },
  usePredicate: function useCacheActionsPredicate() {
    const items = [closure_4];
    const stateFromStores = initialize.useStateFromStores(items, () => connected.isConnected());
    const DeveloperMode = explicitContentFromProto.DeveloperMode;
    return DeveloperMode.useSetting() && stateFromStores;
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/CacheActionsSetting.tsx");

export default createToggle;