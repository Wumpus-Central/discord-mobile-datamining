// === Module 12937: CrunchyrollLinkError ===

// Module 12937 (CrunchyrollLinkError)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import useNavigation from "useNavigation" /* 1503 */;
import useConnectRetry from "useConnectRetry" /* 12912 */;
import TwoWayLinkError from "TwoWayLinkError" /* 12913 */;
import noop from "module_19" /* 19 */;

require = fn;
const constants = fn(12929).CrunchyrollLinkModalScenes;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkError.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CrunchyrollLinkDiscordError(onClose) {
  const cResult = c.c(5);
  onClose = onClose.onClose;
  const navigation = useNavigation.useNavigation();
  const connectRetry = useConnectRetry.useConnectRetry(navigation, constants.PRE_CONNECT);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["8YK70c"]);
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t.moyYLf);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp6 = stringResult;
    tmp7 = stringResult1;
  } else {
    [tmp6, tmp7] = cResult;
  }
  if (cResult[2] === onClose) {
    if (cResult[3] === connectRetry) {
      let tmp10 = cResult[4];
    }
    return tmp10;
  }
  const tmp11 = jsx(TwoWayLinkError.TwoWayLinkError, { title: tmp6, body: tmp7, onClose, onRetry: connectRetry });
  cResult[2] = onClose;
  cResult[3] = connectRetry;
  cResult[4] = tmp11;
  tmp10 = tmp11;
}) : (function CrunchyrollLinkDiscordError(onClose) {
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
});