// discord_app/modules/user_settings/connections/native/ConnectionsSettingScreen.tsx
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
function onPress() {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(14957, dependencyMap.paths), "AddConnection");
}
let c3 = importAllResult;
const memoResult = importAllResult.memo(function ConnectionsSettingScreen() {
  stackNavigation = stackNavigation(1483).useStackNavigation();
  let obj = stackNavigation(1483);
  const tmp = stackNavigation;
  const params = stackNavigation(6994).useSettingNavigationRoute().params;
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
        const intl = callback(1114).intl;
        obj.label = intl.string(callback(1114).t.OYkgVk);
        return callback2(callback(7863).HeaderTextButton, obj);
      },
    });
  }, items);
  return jsx(tmp(14958).UserSettingsConnections, { selectedPlatformType });
});
const result = require("set").fileFinishedImporting(
  "modules/user_settings/connections/native/ConnectionsSettingScreen.tsx",
);

export default memoResult;
