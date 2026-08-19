// === Module 9792: PlayStationLinkError ===

// Module 9792 (PlayStationLinkError)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useNavigation from "useNavigation" /* 1500 */;
import useConnectRetry from "useConnectRetry" /* 9793 */;
import TwoWayLinkError from "TwoWayLinkError" /* 9794 */;
import { PlayStationLinkModalScenes as closure_2 } from "PlayStationLinkModalScenes" /* 9782 */;
import { AbortCodes } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkError.tsx");

export const PlayStationLinkError = function PlayStationLinkError(arg0) {
  ({ onClose, errorCode } = arg0);
  let obj = useNavigation;
  const navigation = obj.useNavigation();
  const connectRetry = useConnectRetry.useConnectRetry(navigation, constants.PRE_CONNECT);
  if (errorCode === AbortCodes.UNDER_MINIMUM_AGE) {
    const intl2 = getSystemLocale.intl;
    let stringResult = intl2.string(getSystemLocale.t["3dIn2A"]);
  } else {
    const intl = getSystemLocale.intl;
    stringResult = intl.string(getSystemLocale.t.qE9nqE);
  }
  obj = { title: null, body: null, onClose: null, onRetry: null };
  const intl3 = getSystemLocale.intl;
  obj[0] = intl3.string(getSystemLocale.t.eY3qHd);
  obj[1] = stringResult;
  obj[2] = onClose;
  obj[3] = connectRetry;
  return jsx(TwoWayLinkError.TwoWayLinkError, { title: null, body: null, onClose: null, onRetry: null });
};