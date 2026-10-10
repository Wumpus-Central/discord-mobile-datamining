// === Module 12926: PlayStationLinkError ===

// Module 12926 (PlayStationLinkError)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import useNavigation from "useNavigation" /* 1503 */;
import useConnectRetry from "useConnectRetry" /* 12912 */;
import TwoWayLinkError from "TwoWayLinkError" /* 12913 */;
import noop from "module_19" /* 19 */;

require = fn;
const constants = fn(12918).PlayStationLinkModalScenes;
const AbortCodes = fn(1085).AbortCodes;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkError.tsx");

export const PlayStationLinkError = ReactCompilerGating.isReactCompilerEnabled() ? (function PlayStationLinkError(arg0) {
  const cResult = c.c(7);
  ({ onClose, errorCode } = arg0);
  const navigation = useNavigation.useNavigation();
  const connectRetry = useConnectRetry.useConnectRetry(navigation, constants.PRE_CONNECT);
  if (cResult[0] !== errorCode) {
    if (errorCode === AbortCodes.UNDER_MINIMUM_AGE) {
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t["3dIn2A"]);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t.qE9nqE);
    }
    cResult[0] = errorCode;
    cResult[1] = stringResult;
  } else {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = util.intl;
      const stringResult1 = intl3.string(util.t.eY3qHd);
      cResult[2] = stringResult1;
      let tmp11 = stringResult1;
    } else {
      tmp11 = cResult[2];
    }
    if (cResult[3] === cResult[1]) {
      if (cResult[4] === onClose) {
        if (cResult[5] === connectRetry) {
          let tmp13 = cResult[6];
        }
        return tmp13;
      }
    }
    const obj4 = { title: tmp11, body: cResult[1], onClose, onRetry: connectRetry };
    const tmp15 = jsx(TwoWayLinkError.TwoWayLinkError, { title: tmp11, body: cResult[1], onClose, onRetry: connectRetry });
    cResult[3] = cResult[1];
    cResult[4] = onClose;
    cResult[5] = connectRetry;
    cResult[6] = tmp15;
    tmp13 = tmp15;
  }
}) : (function PlayStationLinkError(arg0) {
  ({ onClose, errorCode } = arg0);
  const navigation = useNavigation.useNavigation();
  const connectRetry = useConnectRetry.useConnectRetry(navigation, constants.PRE_CONNECT);
  if (errorCode === AbortCodes.UNDER_MINIMUM_AGE) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t["3dIn2A"]);
  } else {
    const intl = util.intl;
    stringResult = intl.string(util.t.qE9nqE);
  }
  const obj3 = { title: null, body: null, onClose: null, onRetry: null };
  const intl3 = util.intl;
  obj3.title = intl3.string(util.t.eY3qHd);
  obj3.body = stringResult;
  obj3.onClose = onClose;
  obj3.onRetry = connectRetry;
  return jsx(TwoWayLinkError.TwoWayLinkError, { title: null, body: null, onClose: null, onRetry: null });
});