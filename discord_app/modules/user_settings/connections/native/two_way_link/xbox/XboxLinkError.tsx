// === Module 14617: XboxLinkError ===

// Module 14617 (XboxLinkError)
import util from "util" /* 1113 */;
import useNavigation from "useNavigation" /* 1497 */;
import useConnectRetry from "useConnectRetry" /* 14618 */;
import TwoWayLinkError from "TwoWayLinkError" /* 14619 */;
import noop from "module_19" /* 19 */;

require = fn;
const XboxLinkModalScenes = fn(9723).XboxLinkModalScenes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkError.tsx");

export default function XboxLinkDiscordError(onClose) {
  const navigation = useNavigation.useNavigation();
  const connectRetry = useConnectRetry.useConnectRetry(navigation, XboxLinkModalScenes.PRE_CONNECT);
  const obj3 = { title: null, body: null, onClose: null, onRetry: null };
  const intl = util.intl;
  obj3.title = intl.string(util.t.INwPCV);
  const intl2 = util.intl;
  obj3.body = intl2.string(util.t.GyXRRz);
  obj3.onClose = onClose.onClose;
  obj3.onRetry = connectRetry;
  return jsx(TwoWayLinkError.TwoWayLinkError, { title: null, body: null, onClose: null, onRetry: null });
};