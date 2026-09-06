// discord_app/modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkDiscordConsent.tsx
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = fn;
let closure_3 = fn(9272).CrunchyrollLinkModalScenes;
const PlatformTypes = fn(1074).PlatformTypes;
const CrunchyrollConnectionConstants = fn(8338);
({ CRUNCHYROLL_CLIENT_ID: hasOwnProperty, CRUNCHYROLL_CLIENT_SCOPES: metroRequire } = CrunchyrollConnectionConstants);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkDiscordConsent.tsx",
);

export default function CrunchyrollLinkDiscordConsent(arg0) {
  let navigation;
  ({ callbackCode, callbackState } = arg0);
  let obj = navigation(1483);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = noop.useCallback(() => {
    navigation.push(constants.SUCCESS);
  }, items);
  const callback1 = noop.useCallback(() => {
    navigation.push(constants.ERROR);
  }, items1);
  obj = {
    platformType: PlatformTypes.CRUNCHYROLL,
    callbackCode,
    callbackState,
    clientId,
    scopes,
    onNext: callback,
    onError: callback1,
  };
  return jsx(navigation(9234).TwoWayLinkDiscordConsent, {
    platformType: PlatformTypes.CRUNCHYROLL,
    callbackCode,
    callbackState,
    clientId,
    scopes,
    onNext: callback,
    onError: callback1,
  });
}
