// discord_app/modules/user_settings/connections/native/two_way_link/xbox/XboxLinkDiscordConsent.tsx
import noop from "noop";
import { XboxLinkModalScenes } from "XboxLinkModalScenes";
import { PlatformTypes } from "ME";
import { XBOX_CLIENT_SCOPES } from "XBOX_URL_BASE";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkDiscordConsent.tsx");

export default function XboxLinkDiscordConsent(arg0) {
  let callbackCode;
  let callbackState;
  let navigation;
  ({ callbackCode, callbackState } = arg0);
  let obj = navigation(1499);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = React.useCallback(() => {
    navigation.push(outer1_3.SUCCESS);
  }, items);
  const callback1 = React.useCallback(() => {
    navigation.push(outer1_3.ERROR);
  }, items1);
  obj = { platformType: PlatformTypes.XBOX, callbackCode, callbackState, clientId: null, scopes: null, onNext: null, onError: null };
  obj[3] = navigation(10505).ConsoleOAuthApplications.XBOX_APPLICATION_ID;
  obj[4] = XBOX_CLIENT_SCOPES;
  obj[5] = callback;
  obj[6] = callback1;
  return jsx(navigation(10467).TwoWayLinkDiscordConsent, { platformType: PlatformTypes.XBOX, callbackCode, callbackState, clientId: null, scopes: null, onNext: null, onError: null });
};