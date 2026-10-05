// discord_app/modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkDiscordConsent.tsx
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../../../../Constants.tsx";
import CrunchyrollLinkConstants from "CrunchyrollLinkConstants.tsx";
import react from "../../../../../../../_runtime/00019_react.js";
import CrunchyrollConnectionConstants from "../../../../../connections/CrunchyrollConnectionConstants.tsx";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let navigation;

let hasOwnProperty;
let metroRequire;
const constants = CrunchyrollLinkConstants.CrunchyrollLinkModalScenes;
const PlatformTypes = Constants.PlatformTypes;
({ CRUNCHYROLL_CLIENT_ID: hasOwnProperty, CRUNCHYROLL_CLIENT_SCOPES: metroRequire } = CrunchyrollConnectionConstants);
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let callbackCode;
      let callbackState;
      let tmp5;
      const obj = navigation(576);
      const cResult = obj.c(9);
      ({ callbackCode, callbackState } = arg0);
      const obj2 = navigation(1490);
      navigation = obj2.useNavigation();
      if (cResult[0] !== navigation) {
        const fn = function c() {
          navigation.push(constants.SUCCESS);
        };
        cResult[0] = navigation;
        cResult[1] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== navigation) {
        class L {
          constructor() {
            navigation.push(constants.ERROR);
          }
        }
        cResult[2] = navigation;
        cResult[3] = L;
      } else {
        class L {
          constructor() {
            navigation.push(constants.ERROR);
          }
        }
      }
      if (cResult[4] === callbackCode) {
        class L {
          constructor() {
            navigation.push(constants.ERROR);
          }
        }
      }
      cResult[4] = callbackCode;
      cResult[5] = callbackState;
      cResult[6] = L;
      cResult[7] = tmp5;
      cResult[8] = jsx(navigation(8750).TwoWayLinkDiscordConsent, {
        platformType: PlatformTypes.CRUNCHYROLL,
        callbackCode,
        callbackState,
        clientId,
        scopes,
        onNext: tmp5,
        onError: L,
      });
      jsx(navigation(8750).TwoWayLinkDiscordConsent, {
        platformType: PlatformTypes.CRUNCHYROLL,
        callbackCode,
        callbackState,
        clientId,
        scopes,
        onNext: tmp5,
        onError: L,
      });
    }
  : (arg0) => {
      let callbackCode;
      let callbackState;
      navigation = undefined;
      ({ callbackCode, callbackState } = arg0);
      const obj = navigation(1490);
      navigation = obj.useNavigation();
      const items = [navigation];
      const items1 = [navigation];
      const callback = react.useCallback(() => {
        navigation.push(constants.SUCCESS);
      }, items);
      const callback1 = react.useCallback(() => {
        navigation.push(constants.ERROR);
      }, items1);
      return jsx(navigation(8750).TwoWayLinkDiscordConsent, {
        platformType: PlatformTypes.CRUNCHYROLL,
        callbackCode,
        callbackState,
        clientId,
        scopes,
        onNext: callback,
        onError: callback1,
      });
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkDiscordConsent.tsx",
);

export default tmp3;
