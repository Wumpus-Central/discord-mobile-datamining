// === Module 14659: UserSettingsWebAuthn ===

// Module 14659 (UserSettingsWebAuthn)
import Navigator from "Navigator" /* 7000 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14660 */;
import noop from "module_19" /* 19 */;

require = fn;
const WebAuthnScreens = fn(14657).WebAuthnScreens;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/UserSettingsWebAuthn.tsx");

export default function UserSettingsWebAuthn(showNav) {
  ({ navigation: require, initialRouteName } = showNav);
  if (initialRouteName === undefined) {
    initialRouteName = WebAuthnScreens.INIT;
  }
  let flag = showNav.showNav;
  if (flag === undefined) {
    flag = false;
  }
  let obj = WebAuthnScreens2;
  const screens = obj.getScreens({ isModal: false });
  const layoutEffect = noop.useLayoutEffect(() => {
    options.setOptions({ headerShown: flag });
  });
  obj = { screens, initialRouteName, initialRouteStack: null, useContainer: false };
  const items = [{ name: initialRouteName }];
  obj.initialRouteStack = items;
  return jsx(Navigator.Navigator, { screens, initialRouteName, initialRouteStack: null, useContainer: false });
};