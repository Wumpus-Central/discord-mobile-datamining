// discord_app/modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkDiscordConsent.tsx
import noop from "noop";
import { PlayStationLinkModalScenes as closure_3 } from "PlayStationLinkModalScenes";
import { PlatformTypes } from "ME";
import { PLAYSTATION_CLIENT_SCOPES } from "XBOX_URL_BASE";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkDiscordConsent.tsx");

export const PlayStationLinkDiscordConsent = function PlayStationLinkDiscordConsent(platformType) {
  let callbackCode;
  let callbackState;
  platformType = platformType.platformType;
  let navigation;
  ({ callbackCode, callbackState } = platformType);
  let obj = navigation(1480);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = React.useCallback(() => {
    navigation.push(outer1_3.SUCCESS);
  }, items);
  const callback1 = React.useCallback((errorCode) => {
    navigation.push(outer1_3.ERROR, { errorCode });
  }, items1);
  if (platformType === PlatformTypes.PLAYSTATION_STAGING) {
    let PLAYSTATION_APPLICATION_ID = tmp(10462).ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID;
  } else {
    PLAYSTATION_APPLICATION_ID = tmp(10462).ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID;
  }
  if (platformType === PlatformTypes.PLAYSTATION_STAGING) {
    let PLAYSTATION = tmp(10483).ConsoleAuthorizationRedirectURIs.PLAYSTATION_STAGING;
  } else {
    PLAYSTATION = tmp(10483).ConsoleAuthorizationRedirectURIs.PLAYSTATION;
  }
  obj = { platformType, callbackCode, callbackState, clientId: PLAYSTATION_APPLICATION_ID, scopes: PLAYSTATION_CLIENT_SCOPES, onNext: callback, onError: callback1, redirectUri: PLAYSTATION };
  return jsx(navigation(10424).TwoWayLinkDiscordConsent, { platformType, callbackCode, callbackState, clientId: PLAYSTATION_APPLICATION_ID, scopes: PLAYSTATION_CLIENT_SCOPES, onNext: callback, onError: callback1, redirectUri: PLAYSTATION });
};