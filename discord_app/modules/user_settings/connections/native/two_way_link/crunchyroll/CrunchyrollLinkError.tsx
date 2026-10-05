// === Module 8785: CrunchyrollLinkError ===

// Module 8785 (CrunchyrollLinkError)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import useNavigation from "useNavigation" /* 1490 */;
import useConnectRetry from "useConnectRetry" /* 8760 */;
import TwoWayLinkError2 from "TwoWayLinkError" /* 8761 */;
import CrunchyrollLinkConstants from "CrunchyrollLinkConstants" /* 8777 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation, onClose;

const constants = CrunchyrollLinkConstants.CrunchyrollLinkModalScenes;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((onClose) => {
  let tmp6;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(5);
  onClose = onClose.onClose;
  const obj2 = useNavigation;
  navigation = obj2.useNavigation();
  const obj3 = useConnectRetry;
  const connectRetry = obj3.useConnectRetry(navigation, constants.PRE_CONNECT);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl3.intl;
    const stringResult = intl.string(intl3.t["8YK70c"]);
    const intl2 = intl3.intl;
    const stringResult1 = intl2.string(intl3.t.moyYLf);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp6 = stringResult;
    tmp7 = stringResult1;
  } else {
    [tmp6, tmp7] = cResult;
  }
  if (cResult[2] === onClose) {
    let tmp10;
    if (cResult[3] === connectRetry) {
      tmp10 = cResult[4];
    }
    return tmp10;
  }
  const tmp11 = jsx(TwoWayLinkError2.TwoWayLinkError, { title: tmp6, body: tmp7, onClose, onRetry: connectRetry });
  cResult[2] = onClose;
  cResult[3] = connectRetry;
  cResult[4] = tmp11;
  tmp10 = tmp11;
}) : ((onClose) => {
  onClose = onClose.onClose;
  const obj = useNavigation;
  navigation = obj.useNavigation();
  const obj2 = useConnectRetry;
  const connectRetry = obj2.useConnectRetry(navigation, constants.PRE_CONNECT);
  const TwoWayLinkError = TwoWayLinkError2.TwoWayLinkError;
  const intl = intl3.intl;
  const intl2 = intl3.intl;
  return <TwoWayLinkError title={intl.string(intl3.t["8YK70c"])} body={intl2.string(intl3.t.moyYLf)} onClose={onClose} onRetry={connectRetry} />;
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkError.tsx");

export default tmp3;