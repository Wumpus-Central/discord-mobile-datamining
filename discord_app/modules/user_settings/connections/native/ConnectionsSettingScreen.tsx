// === Module 14313: onPress ===

// Module 14313 (onPress)
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
function onPress() {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(14314, dependencyMap.paths), "AddConnection");
}
let c3 = importAllResult;
const memoResult = importAllResult.memo(function ConnectionsSettingScreen() {
  stackNavigation = stackNavigation(1500).useStackNavigation();
  let obj = stackNavigation(1500);
  const tmp = stackNavigation;
  const params = stackNavigation(7385).useSettingNavigationRoute().params;
  let selectedPlatformType;
  if (params != null) {
    selectedPlatformType = params.selectedPlatformType;
  }
  const items = [stackNavigation];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    stackNavigation.setOptions({
      headerRight(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.onPress = closure_5;
        const intl = callback(1236).intl;
        obj.label = intl.string(callback(1236).t.OYkgVk);
        return callback2(callback(8492).HeaderTextButton, obj);
      }
    });
  }, items);
  return jsx(tmp(14315).UserSettingsConnections, { selectedPlatformType });
});
const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/ConnectionsSettingScreen.tsx");

export default memoResult;