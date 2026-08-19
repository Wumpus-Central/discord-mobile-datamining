// === Module 9762: XboxLinkDiscordConsent ===

// Module 9762 (XboxLinkDiscordConsent)
import noop from "noop" /* 19 */;
import { XboxLinkModalScenes } from "XboxLinkModalScenes" /* 9752 */;
import { PlatformTypes } from "ME" /* 676 */;
import { XBOX_CLIENT_SCOPES } from "XBOX_URL_BASE" /* 9763 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkDiscordConsent.tsx");

export default function XboxLinkDiscordConsent(arg0) {
  let navigation;
  ({ callbackCode, callbackState } = arg0);
  let obj = navigation(1500);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = React.useCallback(() => {
    navigation.push(XboxLinkModalScenes.SUCCESS);
  }, items);
  const callback1 = React.useCallback(() => {
    navigation.push(XboxLinkModalScenes.ERROR);
  }, items1);
  obj = { platformType: PlatformTypes.XBOX, callbackCode, callbackState, clientId: navigation(9788).ConsoleOAuthApplications.XBOX_APPLICATION_ID, scopes: XBOX_CLIENT_SCOPES, onNext: callback, onError: callback1 };
  return jsx(navigation(9764).TwoWayLinkDiscordConsent, { platformType: PlatformTypes.XBOX, callbackCode, callbackState, clientId: navigation(9788).ConsoleOAuthApplications.XBOX_APPLICATION_ID, scopes: XBOX_CLIENT_SCOPES, onNext: callback, onError: callback1 });
};