// === Module 9288: CrunchyrollLinkDiscordError ===

// Module 9288 (CrunchyrollLinkDiscordError)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useNavigation from "useNavigation" /* 1500 */;
import useConnectRetry from "useConnectRetry" /* 9263 */;
import TwoWayLinkError from "TwoWayLinkError" /* 9264 */;
import { CrunchyrollLinkModalScenes as closure_2 } from "CrunchyrollLinkModalScenes" /* 9280 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkError.tsx");

export default function CrunchyrollLinkDiscordError(onClose) {
  let obj = useNavigation;
  const navigation = obj.useNavigation();
  const connectRetry = useConnectRetry.useConnectRetry(navigation, constants.PRE_CONNECT);
  obj = { title: null, body: null, onClose: null, onRetry: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["8YK70c"]);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.moyYLf);
  obj[2] = onClose.onClose;
  obj[3] = connectRetry;
  return jsx(TwoWayLinkError.TwoWayLinkError, { title: null, body: null, onClose: null, onRetry: null });
};