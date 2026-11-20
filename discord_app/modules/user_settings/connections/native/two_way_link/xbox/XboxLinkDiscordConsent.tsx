// === Module 6952: XboxLinkDiscordConsent ===

// Module 6952 (XboxLinkDiscordConsent)
import noop from "module_19" /* 19 */;

const require = fn;
const XboxLinkModalScenes = fn(6908).XboxLinkModalScenes;
const PlatformTypes = fn(1071).PlatformTypes;
const XBOX_CLIENT_SCOPES = fn(6953).XBOX_CLIENT_SCOPES;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkDiscordConsent.tsx");

export default function XboxLinkDiscordConsent(arg0) {
  let navigation;
  ({ callbackCode, callbackState } = arg0);
  navigation = navigation(1500).useNavigation();
  items = [navigation];
  const items1 = [navigation];
  const callback = noop.useCallback(() => {
    navigation.push(XboxLinkModalScenes.SUCCESS);
  }, items);
  const callback1 = noop.useCallback(() => {
    navigation.push(XboxLinkModalScenes.ERROR);
  }, items1);
  const obj = navigation(1500);
  return jsx(navigation(6955).TwoWayLinkDiscordConsent, { platformType: PlatformTypes.XBOX, callbackCode, callbackState, clientId: navigation(6959).ConsoleOAuthApplications.XBOX_APPLICATION_ID, scopes: XBOX_CLIENT_SCOPES, onNext: callback, onError: callback1 });
};