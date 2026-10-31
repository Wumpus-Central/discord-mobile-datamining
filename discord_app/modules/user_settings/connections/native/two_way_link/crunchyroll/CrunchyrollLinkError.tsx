// === Module 14643: CrunchyrollLinkError ===

// Module 14643 (CrunchyrollLinkError)
import util from "util" /* 1113 */;
import useNavigation from "useNavigation" /* 1497 */;
import useConnectRetry from "useConnectRetry" /* 14618 */;
import TwoWayLinkError from "TwoWayLinkError" /* 14619 */;
import noop from "module_19" /* 19 */;

require = fn;
const constants = fn(14635).CrunchyrollLinkModalScenes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkError.tsx");

export default function CrunchyrollLinkDiscordError(onClose) {
  const navigation = useNavigation.useNavigation();
  const connectRetry = useConnectRetry.useConnectRetry(navigation, constants.PRE_CONNECT);
  const obj3 = { title: null, body: null, onClose: null, onRetry: null };
  const intl = util.intl;
  obj3.title = intl.string(util.t["8YK70c"]);
  const intl2 = util.intl;
  obj3.body = intl2.string(util.t.moyYLf);
  obj3.onClose = onClose.onClose;
  obj3.onRetry = connectRetry;
  return jsx(TwoWayLinkError.TwoWayLinkError, { title: null, body: null, onClose: null, onRetry: null });
};