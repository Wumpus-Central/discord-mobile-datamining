// === Module 14748: AuthorizedAppScreen ===

// Module 14748 (AuthorizedAppScreen)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useNavigation from "useNavigation" /* 1490 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 6490 */;
import UserSettingsAuthedAppDefault from "UserSettingsAuthedApp" /* 14749 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let obj = react2;
  const cResult = obj.c(6);
  const obj2 = useSettingNavigationRoute;
  const settingNavigationRoute = obj2.useSettingNavigationRoute();
  const obj3 = useNavigation;
  const stackNavigation = obj3.useStackNavigation();
  if (cResult[0] === stackNavigation) {
    let tmp5;
    let tmp6;
    let tmp9;
    if (cResult[1] === settingNavigationRoute.params.oauth2Token.application.name) {
      tmp5 = cResult[2];
      tmp6 = cResult[3];
    }
    const layoutEffect = react.useLayoutEffect(tmp5, tmp6);
    if (cResult[4] !== settingNavigationRoute.params.oauth2Token) {
      const tmp12 = jsx(UserSettingsAuthedAppDefault, { oauth2Token: settingNavigationRoute.params.oauth2Token });
      cResult[4] = settingNavigationRoute.params.oauth2Token;
      cResult[5] = tmp12;
      tmp9 = tmp12;
    } else {
      tmp9 = cResult[5];
    }
    return tmp9;
  }
  const fn = function n() {
    const obj = { title: settingNavigationRoute.params.oauth2Token.application.name, headerShown: true };
    stackNavigation.setOptions(obj);
  };
  const items = [stackNavigation, settingNavigationRoute.params.oauth2Token.application.name];
  cResult[0] = stackNavigation;
  cResult[1] = settingNavigationRoute.params.oauth2Token.application.name;
  cResult[2] = fn;
  cResult[3] = items;
  tmp6 = items;
  tmp5 = fn;
}) : (() => {
  let obj = useSettingNavigationRoute;
  const settingNavigationRoute = obj.useSettingNavigationRoute();
  const obj2 = useNavigation;
  const stackNavigation = obj2.useStackNavigation();
  const items = [stackNavigation, settingNavigationRoute.params.oauth2Token.application.name];
  const layoutEffect = react.useLayoutEffect(() => {
    const obj = { title: settingNavigationRoute.params.oauth2Token.application.name, headerShown: true };
    stackNavigation.setOptions(obj);
  }, items);
  return jsx(UserSettingsAuthedAppDefault, { oauth2Token: settingNavigationRoute.params.oauth2Token });
});
const result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/AuthorizedAppScreen.tsx");

export default tmp2;