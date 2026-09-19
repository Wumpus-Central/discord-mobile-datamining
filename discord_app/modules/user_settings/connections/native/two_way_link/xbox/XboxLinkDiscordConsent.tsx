// discord_app/modules/user_settings/connections/native/two_way_link/xbox/XboxLinkDiscordConsent.tsx
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = fn;
const XboxLinkModalScenes = fn(9343).XboxLinkModalScenes;
const PlatformTypes = fn(1074).PlatformTypes;
const XBOX_CLIENT_SCOPES = fn(9357).XBOX_CLIENT_SCOPES;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/xbox/XboxLinkDiscordConsent.tsx",
);

export default function XboxLinkDiscordConsent(arg0) {
  let navigation;
  ({ callbackCode, callbackState } = arg0);
  navigation = navigation(1484).useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = noop.useCallback(() => {
    navigation.push(XboxLinkModalScenes.SUCCESS);
  }, items);
  const callback1 = noop.useCallback(() => {
    navigation.push(XboxLinkModalScenes.ERROR);
  }, items1);
  const obj = navigation(1484);
  return jsx(navigation(9358).TwoWayLinkDiscordConsent, {
    platformType: PlatformTypes.XBOX,
    callbackCode,
    callbackState,
    clientId: navigation(9359).ConsoleOAuthApplications.XBOX_APPLICATION_ID,
    scopes: XBOX_CLIENT_SCOPES,
    onNext: callback,
    onError: callback1,
  });
}
