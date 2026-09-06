// === Module 9280: CrunchyrollLinkError ===

// Module 9280 (CrunchyrollLinkError)
import util from "util" /* 1114 */;
import useNavigation from "useNavigation" /* 1483 */;
import useConnectRetry from "useConnectRetry" /* 9266 */;
import TwoWayLinkError from "TwoWayLinkError" /* 9267 */;
import noop from "module_19" /* 19 */;

require = fn;
const constants = fn(9272).CrunchyrollLinkModalScenes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkError.tsx");

export default function CrunchyrollLinkDiscordError(onClose) {
  let obj = useNavigation;
  const navigation = obj.useNavigation();
  const connectRetry = useConnectRetry.useConnectRetry(navigation, constants.PRE_CONNECT);
  obj = { title: null, body: null, onClose: null, onRetry: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["8YK70c"]);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t.moyYLf);
  obj.onClose = onClose.onClose;
  obj.onRetry = connectRetry;
  return jsx(TwoWayLinkError.TwoWayLinkError, { title: null, body: null, onClose: null, onRetry: null });
};