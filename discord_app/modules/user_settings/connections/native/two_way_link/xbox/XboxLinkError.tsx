// === Module 9446: XboxLinkError ===

// Module 9446 (XboxLinkError)
import util from "util" /* 1114 */;
import useNavigation from "useNavigation" /* 1483 */;
import useConnectRetry from "useConnectRetry" /* 9266 */;
import TwoWayLinkError from "TwoWayLinkError" /* 9267 */;
import noop from "module_19" /* 19 */;

require = fn;
const XboxLinkModalScenes = fn(9219).XboxLinkModalScenes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkError.tsx");

export default function XboxLinkDiscordError(onClose) {
  let obj = useNavigation;
  const navigation = obj.useNavigation();
  const connectRetry = useConnectRetry.useConnectRetry(navigation, XboxLinkModalScenes.PRE_CONNECT);
  obj = { title: null, body: null, onClose: null, onRetry: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.INwPCV);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t.GyXRRz);
  obj.onClose = onClose.onClose;
  obj.onRetry = connectRetry;
  return jsx(TwoWayLinkError.TwoWayLinkError, { title: null, body: null, onClose: null, onRetry: null });
};