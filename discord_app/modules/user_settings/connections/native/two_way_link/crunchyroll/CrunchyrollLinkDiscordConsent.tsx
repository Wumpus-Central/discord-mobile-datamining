// === Module 8782: CrunchyrollLinkDiscordConsent ===

// Module 8782 (CrunchyrollLinkDiscordConsent)
import noop from "module_19" /* 19 */;

const require = fn;
const constants = fn(8777).CrunchyrollLinkModalScenes;
const PlatformTypes = fn(1085).PlatformTypes;
const CrunchyrollConnectionConstants = fn(8014);
({ CRUNCHYROLL_CLIENT_ID: hasOwnProperty, CRUNCHYROLL_CLIENT_SCOPES: metroRequire } = CrunchyrollConnectionConstants);
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkDiscordConsent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = navigation(576).c(9);
  ({ callbackCode, callbackState } = arg0);
  const obj = navigation(576);
  const tmp = navigation;
  navigation = navigation(1490).useNavigation();
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
    class L {
      constructor() {
        arr = closure_0.push(closure_3.ERROR);
        return;
      }
    }
    cResult[2] = navigation;
    cResult[3] = L;
  } else {
    class L {
      constructor() {
        arr = closure_0.push(closure_3.ERROR);
        return;
      }
    }
  }
  if (cResult[4] === callbackCode) {
    class L {
      constructor() {
        arr = closure_0.push(closure_3.ERROR);
        return;
      }
    }
  }
  const obj2 = navigation(1490);
  const obj3 = { platformType: PlatformTypes.CRUNCHYROLL, callbackCode, callbackState, clientId, scopes, onNext: tmp5, onError: L };
  cResult[4] = callbackCode;
  cResult[5] = callbackState;
  cResult[6] = L;
  cResult[7] = tmp5;
  cResult[8] = jsx(tmp(8750).TwoWayLinkDiscordConsent, { platformType: PlatformTypes.CRUNCHYROLL, callbackCode, callbackState, clientId, scopes, onNext: tmp5, onError: L });
  const tmp7 = jsx(tmp(8750).TwoWayLinkDiscordConsent, { platformType: PlatformTypes.CRUNCHYROLL, callbackCode, callbackState, clientId, scopes, onNext: tmp5, onError: L });
}) : ((arg0) => {
  let navigation;
  ({ callbackCode, callbackState } = arg0);
  navigation = navigation(1490).useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = noop.useCallback(() => {
    navigation.push(constants.SUCCESS);
  }, items);
  const callback1 = noop.useCallback(() => {
    navigation.push(constants.ERROR);
  }, items1);
  return jsx(navigation(8750).TwoWayLinkDiscordConsent, { platformType: PlatformTypes.CRUNCHYROLL, callbackCode, callbackState, clientId, scopes, onNext: callback, onError: callback1 });
});