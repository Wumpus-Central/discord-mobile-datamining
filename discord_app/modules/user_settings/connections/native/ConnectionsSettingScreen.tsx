// === Module 14780: ConnectionsSettingScreen ===

// Module 14780 (ConnectionsSettingScreen)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function onPress() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14781, dependencyMap.paths), "AddConnection");
}
const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let stackNavigation;
  let tmp6;
  let tmp7;
  let tmp9;
  let obj = stackNavigation(576);
  const cResult = obj.c(5);
  const obj2 = stackNavigation(1490);
  const tmp = stackNavigation;
  stackNavigation = obj2.useStackNavigation();
  const obj3 = stackNavigation(6497);
  const params = obj3.useSettingNavigationRoute().params;
  let selectedPlatformType;
  if (params != null) {
    selectedPlatformType = params.selectedPlatformType;
  }
  if (cResult[0] !== stackNavigation) {
    const fn = function s() {
      let obj = {
        headerRight(arg0) {
          let intl;
          const obj = { onPress, label: intl.string(stackNavigation(closure_1_2[10]).t.OYkgVk) };
          const HeaderTextButton = stackNavigation(closure_1_2[9]).HeaderTextButton;
          const merged = Object.assign(arg0);
          intl = stackNavigation(closure_1_2[10]).intl;
          return closure_1_4(HeaderTextButton, obj);
        }
      };
      stackNavigation.setOptions(obj);
    };
    const items = [stackNavigation];
    cResult[0] = stackNavigation;
    cResult[1] = fn;
    cResult[2] = items;
    tmp7 = items;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const layoutEffect = react.useLayoutEffect(tmp6, tmp7);
  if (cResult[3] !== selectedPlatformType) {
    const tmp11 = jsx(tmp(14782).UserSettingsConnections, { selectedPlatformType });
    cResult[3] = selectedPlatformType;
    cResult[4] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[4];
  }
  return tmp9;
}) : (() => {
  let stackNavigation;
  let obj = stackNavigation(1490);
  const tmp = stackNavigation;
  stackNavigation = obj.useStackNavigation();
  const obj2 = stackNavigation(6497);
  const params = obj2.useSettingNavigationRoute().params;
  let selectedPlatformType;
  if (params != null) {
    selectedPlatformType = params.selectedPlatformType;
  }
  const items = [stackNavigation];
  const layoutEffect = react.useLayoutEffect(() => {
    let obj = {
      headerRight(arg0) {
        let intl;
        const obj = { onPress, label: intl.string(stackNavigation(closure_1_2[10]).t.OYkgVk) };
        const HeaderTextButton = stackNavigation(closure_1_2[9]).HeaderTextButton;
        const merged = Object.assign(arg0);
        intl = stackNavigation(closure_1_2[10]).intl;
        return closure_1_4(HeaderTextButton, obj);
      }
    };
    stackNavigation.setOptions(obj);
  }, items);
  return jsx(tmp(14782).UserSettingsConnections, { selectedPlatformType });
}));
const result = size.fileFinishedImporting("modules/user_settings/connections/native/ConnectionsSettingScreen.tsx");

export default memoResult;