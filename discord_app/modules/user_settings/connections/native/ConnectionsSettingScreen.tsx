// discord_app/modules/user_settings/connections/native/ConnectionsSettingScreen.tsx
import importAllResult from "noop";
import { jsx } from "jsxProd";
import { asyncRequireImpl } from "../../../../../_runtime/02007_asyncRequireImpl.js";
import { ACTION_SHEET_HEIGHT_HALF } from "../../../action_sheet/native/ActionSheetActionCreators.tsx";

const require = arg1;
function onPress() {
  ACTION_SHEET_HEIGHT_HALF.openLazy(asyncRequireImpl(14282, dependencyMap.paths), "AddConnection");
}
let c3 = importAllResult;
const memoResult = importAllResult.memo(function ConnectionsSettingScreen() {
  stackNavigation = stackNavigation(1499).useStackNavigation();
  let obj = stackNavigation(1499);
  const tmp = stackNavigation;
  const params = stackNavigation(6946).useSettingNavigationRoute().params;
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
        return callback2(callback(8453).HeaderTextButton, obj);
      }
    });
  }, items);
  return jsx(tmp(14283).UserSettingsConnections, { selectedPlatformType });
});
const result = require("ACTION_SHEET_HEIGHT_HALF").fileFinishedImporting("modules/user_settings/connections/native/ConnectionsSettingScreen.tsx");

export default memoResult;