// === Module 9118: useCanSpeakInChannel ===

// Module 9118 (useCanSpeakInChannel)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 5043 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const useAudienceRequestToSpeakStateDefault = useAudienceRequestToSpeakState;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let id;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    const fn = function o() {
      return id.getId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const tmp8 = useAudienceRequestToSpeakStateDefault(stateFromStores, arg0);
  return tmp8 === useAudienceRequestToSpeakState.RequestToSpeakStates.ON_STAGE;
}) : ((arg0) => {
  let id;
  const items = [AuthenticationStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  const tmp2 = useAudienceRequestToSpeakStateDefault(stateFromStores, arg0);
  return tmp2 === useAudienceRequestToSpeakState.RequestToSpeakStates.ON_STAGE;
});
const result = size.fileFinishedImporting("modules/stage_channels/useCanSpeakInChannel.tsx");

export default tmp2;