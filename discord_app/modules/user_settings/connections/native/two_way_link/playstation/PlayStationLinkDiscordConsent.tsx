// discord_app/modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkDiscordConsent.tsx
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = fn;
const constants = fn(8766).PlayStationLinkModalScenes;
const PlatformTypes = fn(1085).PlatformTypes;
const PLAYSTATION_CLIENT_SCOPES = fn(8749).PLAYSTATION_CLIENT_SCOPES;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkDiscordConsent.tsx",
);

export const PlayStationLinkDiscordConsent = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = navigation(576).c(12);
      ({ callbackCode, callbackState, platformType } = arg0);
      const obj = navigation(576);
      const tmp = navigation;
      navigation = navigation(1490).useNavigation();
      if (cResult[0] !== navigation) {
        const fn = function s() {
          navigation.push(constants.SUCCESS);
        };
        cResult[0] = navigation;
        cResult[1] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== navigation) {
        class N {
          constructor(arg0) {
            obj = { errorCode: arg0 };
            arr = closure_0.push(closure_3.ERROR, obj);
            return;
          }
        }
        cResult[2] = navigation;
        cResult[3] = N;
      } else {
        class N {
          constructor(arg0) {
            obj = { errorCode: arg0 };
            arr = closure_0.push(closure_3.ERROR, obj);
            return;
          }
        }
      }
      if (platformType === PlatformTypes.PLAYSTATION_STAGING) {
        class N {
          constructor(arg0) {
            obj = { errorCode: arg0 };
            arr = closure_0.push(closure_3.ERROR, obj);
            return;
          }
        }
      } else {
        class N {
          constructor(arg0) {
            obj = { errorCode: arg0 };
            arr = closure_0.push(closure_3.ERROR, obj);
            return;
          }
        }
      }
      if (platformType === PlatformTypes.PLAYSTATION_STAGING) {
        class N {
          constructor(arg0) {
            obj = { errorCode: arg0 };
            arr = closure_0.push(closure_3.ERROR, obj);
            return;
          }
        }
      } else {
        class N {
          constructor(arg0) {
            obj = { errorCode: arg0 };
            arr = closure_0.push(closure_3.ERROR, obj);
            return;
          }
        }
      }
      if (cResult[4] === callbackCode) {
        class N {
          constructor(arg0) {
            obj = { errorCode: arg0 };
            arr = closure_0.push(closure_3.ERROR, obj);
            return;
          }
        }
      }
      const obj2 = navigation(1490);
      const obj3 = {
        platformType,
        callbackCode,
        callbackState,
        clientId: tmp8,
        scopes: PLAYSTATION_CLIENT_SCOPES,
        onNext: tmp5,
        onError: N,
        redirectUri: tmp9,
      };
      cResult[4] = callbackCode;
      cResult[5] = callbackState;
      cResult[6] = tmp8;
      cResult[7] = N;
      cResult[8] = tmp5;
      cResult[9] = platformType;
      cResult[10] = tmp9;
      cResult[11] = jsx(tmp(8750).TwoWayLinkDiscordConsent, {
        platformType,
        callbackCode,
        callbackState,
        clientId: tmp8,
        scopes: PLAYSTATION_CLIENT_SCOPES,
        onNext: tmp5,
        onError: N,
        redirectUri: tmp9,
      });
      const tmp10 = jsx(tmp(8750).TwoWayLinkDiscordConsent, {
        platformType,
        callbackCode,
        callbackState,
        clientId: tmp8,
        scopes: PLAYSTATION_CLIENT_SCOPES,
        onNext: tmp5,
        onError: N,
        redirectUri: tmp9,
      });
    }
  : (platformType) => {
      platformType = platformType.platformType;
      let navigation;
      ({ callbackCode, callbackState } = platformType);
      navigation = navigation(1490).useNavigation();
      const items = [navigation];
      const items1 = [navigation];
      const callback = noop.useCallback(() => {
        navigation.push(constants.SUCCESS);
      }, items);
      const callback1 = noop.useCallback((errorCode) => {
        navigation.push(constants.ERROR, { errorCode });
      }, items1);
      if (platformType === PlatformTypes.PLAYSTATION_STAGING) {
        let PLAYSTATION_APPLICATION_ID = tmp(8751).ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID;
      } else {
        PLAYSTATION_APPLICATION_ID = tmp(8751).ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID;
      }
      if (platformType === PlatformTypes.PLAYSTATION_STAGING) {
        let PLAYSTATION = tmp(8772).ConsoleAuthorizationRedirectURIs.PLAYSTATION_STAGING;
      } else {
        PLAYSTATION = tmp(8772).ConsoleAuthorizationRedirectURIs.PLAYSTATION;
      }
      return jsx(navigation(8750).TwoWayLinkDiscordConsent, {
        platformType,
        callbackCode,
        callbackState,
        clientId: PLAYSTATION_APPLICATION_ID,
        scopes: PLAYSTATION_CLIENT_SCOPES,
        onNext: callback,
        onError: callback1,
        redirectUri: PLAYSTATION,
      });
    };
