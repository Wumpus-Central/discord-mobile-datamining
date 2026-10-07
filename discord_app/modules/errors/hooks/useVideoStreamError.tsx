// === Module 9129: useVideoStreamError ===

// Module 9129 (useVideoStreamError)
import AVError from "AVError" /* 9131 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AVErrorStore from "AVErrorStore" /* 9130 */;

require = fn;
const MediaEngineContextTypes = fn(4921).MediaEngineContextTypes;
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AVErrorStore, AuthenticationStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === arg1) {
      let tmp7 = cResult[3];
    }
    return tmp(504).useStateFromStores(first, tmp7);
  }
  class T {
    constructor() {
      if (closure_2.getId() !== closure_1) {
        tmp = closure_3;
        tmp2 = closure_0;
        tmp3 = closure_1;
        items = [];
        num = 0;
        tmp4 = items;
        arraySpreadResult = HermesBuiltin.arraySpread(closure_3.getActiveErrorsOfType(closure_0(closure_1[5]).AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT), 0);
        tmp6 = items;
        arraySpreadResult1 = HermesBuiltin.arraySpread(closure_3.getActiveErrorsOfType(closure_0(closure_1[5]).AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM), arraySpreadResult);
        tmp11 = items;
        tmp12 = items[Symbol.iterator]();
      }
      if (closure_0 === MediaEngineContextTypes.STREAM) {
        tmp8 = closure_3;
        tmp9 = closure_0;
        tmp10 = closure_1;
        activeErrorsOfType = closure_3.getActiveErrorsOfType(closure_0(closure_1[5]).AVError.SCREENSHARE_OS_ERROR);
      } else {
        activeErrorsOfType = [];
      }
      ({ getActiveErrorsOfType, getActiveErrorsOfType: getActiveErrorsOfType2 } = closure_3);
      return;
    }
  }
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = T;
  tmp7 = T;
  const obj = require("c");
  tmp = _require;
}) : ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  let items = [AVErrorStore, AuthenticationStore];
  return require("initialize").useStateFromStores(items, () => {
    if (AuthenticationStore.getId() !== closure_1) {
      const items = [];
      HermesBuiltin.arraySpread(AVErrorStore.getActiveErrorsOfType(AVError.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM), HermesBuiltin.arraySpread(AVErrorStore.getActiveErrorsOfType(AVError.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT), 0));
      items[Symbol.iterator]();
      const arraySpreadResult = HermesBuiltin.arraySpread(AVErrorStore.getActiveErrorsOfType(AVError.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT), 0);
    }
    if (closure_0 === MediaEngineContextTypes.STREAM) {
      let activeErrorsOfType = AVErrorStore.getActiveErrorsOfType(AVError.AVError.SCREENSHARE_OS_ERROR);
    } else {
      activeErrorsOfType = [];
    }
    ({ getActiveErrorsOfType, getActiveErrorsOfType: getActiveErrorsOfType2 } = AVErrorStore);
  });
});
let closure_5 = tmp2;
ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/errors/hooks/useVideoStreamError.tsx");

export default (arg0, arg1) => {
  const tmp = closure_5(arg0, arg1);
  let type;
  if (tmp != null) {
    type = tmp.type;
  }
  return type;
};
export const useVideoStreamErrorContext = tmp2;