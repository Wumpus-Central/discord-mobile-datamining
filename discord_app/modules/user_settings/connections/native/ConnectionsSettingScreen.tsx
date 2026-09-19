// === Module 15228: ConnectionsSettingScreen ===

// Module 15228 (ConnectionsSettingScreen)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import noop from "module_19" /* 19 */;

require = fn;
function onPress() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15229, dependencyMap.paths), "AddConnection");
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/ConnectionsSettingScreen.tsx");

export default noop.memo(function ConnectionsSettingScreen() {
  stackNavigation = stackNavigation(1484).useStackNavigation();
  let obj = stackNavigation(1484);
  const tmp = stackNavigation;
  const params = stackNavigation(7234).useSettingNavigationRoute().params;
  let selectedPlatformType;
  if (params != null) {
    selectedPlatformType = params.selectedPlatformType;
  }
  const items = [stackNavigation];
  const layoutEffect = noop.useLayoutEffect(() => {
    stackNavigation.setOptions({
      headerRight(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.onPress = onPress;
        const intl = stackNavigation(1115).intl;
        obj.label = intl.string(stackNavigation(1115).t.OYkgVk);
        return closure_1_4(stackNavigation(8105).HeaderTextButton, obj);
      }
    });
  }, items);
  return jsx(tmp(15230).UserSettingsConnections, { selectedPlatformType });
});