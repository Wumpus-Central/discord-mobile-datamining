// discord_app/modules/user_settings/connections/native/ConnectionsSettingScreen.tsx
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function onPress() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14957, dependencyMap.paths), "AddConnection");
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/ConnectionsSettingScreen.tsx");

export default noop.memo(function ConnectionsSettingScreen() {
  stackNavigation = stackNavigation(1483).useStackNavigation();
  let obj = stackNavigation(1483);
  const tmp = stackNavigation;
  const params = stackNavigation(6994).useSettingNavigationRoute().params;
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
        const intl = stackNavigation(1114).intl;
        obj.label = intl.string(stackNavigation(1114).t.OYkgVk);
        return closure_1_4(stackNavigation(7863).HeaderTextButton, obj);
      },
    });
  }, items);
  return jsx(tmp(14958).UserSettingsConnections, { selectedPlatformType });
});
