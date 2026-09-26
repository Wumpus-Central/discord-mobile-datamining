// === Module 8567: PlayStationLinkDiscordConsent ===

// Module 8567 (PlayStationLinkDiscordConsent)
import noop from "module_19" /* 19 */;

const require = fn;
let closure_3 = fn(8562).PlayStationLinkModalScenes;
const PlatformTypes = fn(1074).PlatformTypes;
const PLAYSTATION_CLIENT_SCOPES = fn(8545).PLAYSTATION_CLIENT_SCOPES;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkDiscordConsent.tsx");

export const PlayStationLinkDiscordConsent = function PlayStationLinkDiscordConsent(platformType) {
  platformType = platformType.platformType;
  let navigation;
  ({ callbackCode, callbackState } = platformType);
  navigation = navigation(1485).useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = noop.useCallback(() => {
    navigation.push(constants.SUCCESS);
  }, items);
  const callback1 = noop.useCallback((errorCode) => {
    navigation.push(constants.ERROR, { errorCode });
  }, items1);
  if (platformType === PlatformTypes.PLAYSTATION_STAGING) {
    let PLAYSTATION_APPLICATION_ID = tmp(8547).ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID;
  } else {
    PLAYSTATION_APPLICATION_ID = tmp(8547).ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID;
  }
  if (platformType === PlatformTypes.PLAYSTATION_STAGING) {
    let PLAYSTATION = tmp(8568).ConsoleAuthorizationRedirectURIs.PLAYSTATION_STAGING;
  } else {
    PLAYSTATION = tmp(8568).ConsoleAuthorizationRedirectURIs.PLAYSTATION;
  }
  return jsx(navigation(8546).TwoWayLinkDiscordConsent, { platformType, callbackCode, callbackState, clientId: PLAYSTATION_APPLICATION_ID, scopes: PLAYSTATION_CLIENT_SCOPES, onNext: callback, onError: callback1, redirectUri: PLAYSTATION });
};