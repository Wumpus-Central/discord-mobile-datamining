// === Module 9265: PlayStationLinkError ===

// Module 9265 (PlayStationLinkError)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import useNavigation from "useNavigation" /* 1483 */;
import useConnectRetry from "useConnectRetry" /* 9266 */;
import TwoWayLinkError from "TwoWayLinkError" /* 9267 */;
import { PlayStationLinkModalScenes as closure_2 } from "PlayStationLinkModalScenes" /* 9255 */;
import { AbortCodes } from "ME" /* 1074 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkError.tsx");

export const PlayStationLinkError = function PlayStationLinkError(arg0) {
  ({ onClose, errorCode } = arg0);
  let obj = useNavigation;
  const navigation = obj.useNavigation();
  const connectRetry = useConnectRetry.useConnectRetry(navigation, constants.PRE_CONNECT);
  if (errorCode === AbortCodes.UNDER_MINIMUM_AGE) {
    const intl2 = tmp(1114).intl;
    let stringResult = intl2.string(tmp(1114).t["3dIn2A"]);
  } else {
    const intl = tmp(1114).intl;
    stringResult = intl.string(tmp(1114).t.qE9nqE);
  }
  obj = { title: null, body: null, onClose: null, onRetry: null };
  const intl3 = tmp(1114).intl;
  obj[0] = intl3.string(getSystemLocale.t.eY3qHd);
  obj[1] = stringResult;
  obj[2] = onClose;
  obj[3] = connectRetry;
  return jsx(TwoWayLinkError.TwoWayLinkError, { title: null, body: null, onClose: null, onRetry: null });
};