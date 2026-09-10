// === Module 9301: XboxLinkDiscordConsent ===

// Module 9301 (XboxLinkDiscordConsent)
import noop from "module_19" /* 19 */;

const require = fn;
const XboxLinkModalScenes = fn(9288).XboxLinkModalScenes;
const PlatformTypes = fn(1074).PlatformTypes;
const XBOX_CLIENT_SCOPES = fn(9302).XBOX_CLIENT_SCOPES;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkDiscordConsent.tsx");

export default function XboxLinkDiscordConsent(arg0) {
  let navigation;
  ({ callbackCode, callbackState } = arg0);
  let obj = navigation(1483);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = noop.useCallback(() => {
    navigation.push(XboxLinkModalScenes.SUCCESS);
  }, items);
  const callback1 = noop.useCallback(() => {
    navigation.push(XboxLinkModalScenes.ERROR);
  }, items1);
  obj = { platformType: PlatformTypes.XBOX, callbackCode, callbackState, clientId: navigation(9330).ConsoleOAuthApplications.XBOX_APPLICATION_ID, scopes: XBOX_CLIENT_SCOPES, onNext: callback, onError: callback1 };
  return jsx(navigation(9303).TwoWayLinkDiscordConsent, { platformType: PlatformTypes.XBOX, callbackCode, callbackState, clientId: navigation(9330).ConsoleOAuthApplications.XBOX_APPLICATION_ID, scopes: XBOX_CLIENT_SCOPES, onNext: callback, onError: callback1 });
};