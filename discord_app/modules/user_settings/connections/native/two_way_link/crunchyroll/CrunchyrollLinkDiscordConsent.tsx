// discord_app/modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkDiscordConsent.tsx
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = fn;
let closure_3 = fn(9167).CrunchyrollLinkModalScenes;
const PlatformTypes = fn(1085).PlatformTypes;
const CrunchyrollConnectionConstants = fn(8432);
({ CRUNCHYROLL_CLIENT_ID: hasOwnProperty, CRUNCHYROLL_CLIENT_SCOPES: metroRequire } = CrunchyrollConnectionConstants);
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkDiscordConsent.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CrunchyrollLinkDiscordConsent(arg0) {
      const cResult = navigation(576).c(9);
      ({ callbackCode, callbackState } = arg0);
      const obj = navigation(576);
      const tmp = navigation;
      navigation = navigation(1502).useNavigation();
      if (cResult[0] !== navigation) {
        const fn = function c() {
          navigation.push(constants.SUCCESS);
        };
        cResult[0] = navigation;
        cResult[1] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== navigation) {
        const fn2 = function p() {
          navigation.push(constants.ERROR);
        };
        cResult[2] = navigation;
        cResult[3] = fn2;
        let tmp6 = fn2;
      } else {
        tmp6 = cResult[3];
      }
      if (cResult[4] === callbackCode) {
        if (cResult[5] === callbackState) {
          if (cResult[6] === tmp6) {
            if (cResult[7] === tmp5) {
              let tmp7 = cResult[8];
            }
            return tmp7;
          }
        }
      }
      const tmp8 = jsx(tmp(9128).TwoWayLinkDiscordConsent, {
        platformType: PlatformTypes.CRUNCHYROLL,
        callbackCode,
        callbackState,
        clientId,
        scopes,
        onNext: tmp5,
        onError: tmp6,
      });
      cResult[4] = callbackCode;
      cResult[5] = callbackState;
      cResult[6] = tmp6;
      cResult[7] = tmp5;
      cResult[8] = tmp8;
      tmp7 = tmp8;
      const obj2 = navigation(1502);
      const obj3 = {
        platformType: PlatformTypes.CRUNCHYROLL,
        callbackCode,
        callbackState,
        clientId,
        scopes,
        onNext: tmp5,
        onError: tmp6,
      };
    }
  : function CrunchyrollLinkDiscordConsent(arg0) {
      let navigation;
      ({ callbackCode, callbackState } = arg0);
      navigation = navigation(1502).useNavigation();
      const items = [navigation];
      const items1 = [navigation];
      const callback = noop.useCallback(() => {
        navigation.push(constants.SUCCESS);
      }, items);
      const callback1 = noop.useCallback(() => {
        navigation.push(constants.ERROR);
      }, items1);
      return jsx(navigation(9128).TwoWayLinkDiscordConsent, {
        platformType: PlatformTypes.CRUNCHYROLL,
        callbackCode,
        callbackState,
        clientId,
        scopes,
        onNext: callback,
        onError: callback1,
      });
    };
