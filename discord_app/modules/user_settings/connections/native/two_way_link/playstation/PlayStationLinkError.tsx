// === Module 14632: PlayStationLinkError ===

// Module 14632 (PlayStationLinkError)
import util from "util" /* 1113 */;
import useNavigation from "useNavigation" /* 1497 */;
import useConnectRetry from "useConnectRetry" /* 14618 */;
import TwoWayLinkError from "TwoWayLinkError" /* 14619 */;
import noop from "module_19" /* 19 */;

require = fn;
const constants = fn(14624).PlayStationLinkModalScenes;
const AbortCodes = fn(1072).AbortCodes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkError.tsx");

export function PlayStationLinkError(arg0) {
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
}