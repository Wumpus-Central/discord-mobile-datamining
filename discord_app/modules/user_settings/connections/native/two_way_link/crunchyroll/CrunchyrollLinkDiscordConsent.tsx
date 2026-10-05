// === Module 8782: CrunchyrollLinkDiscordConsent ===

// Module 8782 (CrunchyrollLinkDiscordConsent)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import CrunchyrollLinkConstants from "CrunchyrollLinkConstants" /* 8777 */;
import react from "react" /* 19 */;
import CrunchyrollConnectionConstants from "CrunchyrollConnectionConstants" /* 8014 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

let hasOwnProperty;
let metroRequire;
const constants = CrunchyrollLinkConstants.CrunchyrollLinkModalScenes;
const PlatformTypes = Constants.PlatformTypes;
({ CRUNCHYROLL_CLIENT_ID: hasOwnProperty, CRUNCHYROLL_CLIENT_SCOPES: metroRequire } = CrunchyrollConnectionConstants);
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
  cResult[8] = jsx(navigation(8750).TwoWayLinkDiscordConsent, { platformType: PlatformTypes.CRUNCHYROLL, callbackCode, callbackState, clientId, scopes, onNext: tmp5, onError: L });
  jsx(navigation(8750).TwoWayLinkDiscordConsent, { platformType: PlatformTypes.CRUNCHYROLL, callbackCode, callbackState, clientId, scopes, onNext: tmp5, onError: L });
}) : ((arg0) => {
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
  return jsx(navigation(8750).TwoWayLinkDiscordConsent, { platformType: PlatformTypes.CRUNCHYROLL, callbackCode, callbackState, clientId, scopes, onNext: callback, onError: callback1 });
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkDiscordConsent.tsx");

export default tmp3;