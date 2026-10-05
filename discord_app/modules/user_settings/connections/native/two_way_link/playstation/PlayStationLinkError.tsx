// === Module 8774: PlayStationLinkError ===

// Module 8774 (PlayStationLinkError)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import useNavigation from "useNavigation" /* 1490 */;
import useConnectRetry from "useConnectRetry" /* 8760 */;
import TwoWayLinkError2 from "TwoWayLinkError" /* 8761 */;
import PlayStationLinkConstants from "PlayStationLinkConstants" /* 8766 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

const constants = PlayStationLinkConstants.PlayStationLinkModalScenes;
const AbortCodes = Constants.AbortCodes;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let errorCode;
  let onClose;
  let tmp6;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(7);
  ({ onClose, errorCode } = arg0);
  const obj2 = useNavigation;
  navigation = obj2.useNavigation();
  const obj3 = useConnectRetry;
  const connectRetry = obj3.useConnectRetry(navigation, constants.PRE_CONNECT);
  if (cResult[0] !== errorCode) {
    let stringResult;
    if (errorCode === AbortCodes.UNDER_MINIMUM_AGE) {
      const intl2 = intl4.intl;
      stringResult = intl2.string(intl4.t["3dIn2A"]);
    } else {
      const intl = intl4.intl;
      stringResult = intl.string(intl4.t.qE9nqE);
    }
    cResult[0] = errorCode;
    cResult[1] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = intl4.intl;
    const stringResult1 = intl3.string(intl4.t.eY3qHd);
    cResult[2] = stringResult1;
    tmp9 = stringResult1;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === tmp6) {
    if (cResult[4] === onClose) {
      let tmp11;
      if (cResult[5] === connectRetry) {
        tmp11 = cResult[6];
      }
      return tmp11;
    }
  }
  const tmp12 = jsx(TwoWayLinkError2.TwoWayLinkError, { title: tmp9, body: tmp6, onClose, onRetry: connectRetry });
  cResult[3] = tmp6;
  cResult[4] = onClose;
  cResult[5] = connectRetry;
  cResult[6] = tmp12;
  tmp11 = tmp12;
}) : ((arg0) => {
  let errorCode;
  let onClose;
  let stringResult;
  ({ onClose, errorCode } = arg0);
  const obj = useNavigation;
  navigation = obj.useNavigation();
  const obj2 = useConnectRetry;
  const connectRetry = obj2.useConnectRetry(navigation, constants.PRE_CONNECT);
  if (errorCode === AbortCodes.UNDER_MINIMUM_AGE) {
    const intl2 = intl4.intl;
    stringResult = intl2.string(intl4.t["3dIn2A"]);
  } else {
    const intl = intl4.intl;
    stringResult = intl.string(intl4.t.qE9nqE);
  }
  const TwoWayLinkError = TwoWayLinkError2.TwoWayLinkError;
  const intl3 = intl4.intl;
  return <TwoWayLinkError title={intl3.string(intl4.t.eY3qHd)} body={stringResult} onClose={onClose} onRetry={connectRetry} />;
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkError.tsx");

export const PlayStationLinkError = tmp3;