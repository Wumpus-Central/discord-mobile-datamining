// === Module 14760: ConnectionsSettingScreen ===

// Module 14760 (ConnectionsSettingScreen)
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import noop from "module_19" /* 19 */;

require = fn;
function onPress() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14761, dependencyMap.paths), "AddConnection");
}
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/ConnectionsSettingScreen.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = stackNavigation(576).c(5);
  let obj = stackNavigation(576);
  const tmp = stackNavigation;
  stackNavigation = stackNavigation(1490).useStackNavigation();
  const obj2 = stackNavigation(1490);
  const params = stackNavigation(6490).useSettingNavigationRoute().params;
  let selectedPlatformType;
  if (params != null) {
    selectedPlatformType = params.selectedPlatformType;
  }
  if (cResult[0] !== stackNavigation) {
    const fn = function s() {
      stackNavigation.setOptions({
        headerRight(arg0) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.onPress = onPress;
          const intl = stackNavigation(1126).intl;
          obj.label = intl.string(stackNavigation(1126).t.OYkgVk);
          return closure_1_4(stackNavigation(7498).HeaderTextButton, obj);
        }
      });
    };
    const items = [stackNavigation];
    cResult[0] = stackNavigation;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp7 = items;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const layoutEffect = noop.useLayoutEffect(tmp6, tmp7);
  if (cResult[3] !== selectedPlatformType) {
    const obj4 = { selectedPlatformType };
    const tmp11 = jsx(tmp(14762).UserSettingsConnections, { selectedPlatformType });
    cResult[3] = selectedPlatformType;
    cResult[4] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[4];
  }
  return tmp9;
}) : (() => {
  stackNavigation = stackNavigation(1490).useStackNavigation();
  let obj = stackNavigation(1490);
  const tmp = stackNavigation;
  const params = stackNavigation(6490).useSettingNavigationRoute().params;
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
        const intl = stackNavigation(1126).intl;
        obj.label = intl.string(stackNavigation(1126).t.OYkgVk);
        return closure_1_4(stackNavigation(7498).HeaderTextButton, obj);
      }
    });
  }, items);
  return jsx(tmp(14762).UserSettingsConnections, { selectedPlatformType });
}));