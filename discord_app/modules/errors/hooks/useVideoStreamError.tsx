// === Module 9129: useVideoStreamError ===

// Module 9129 (useVideoStreamError)
import Constants from "Constants" /* 4921 */;
import AVError from "AVError" /* 9131 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AVErrorStore from "AVErrorStore" /* 9130 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, arraySpreadResult1, arraySpreadResult2, arraySpreadResult3, arraySpreadResult4, dependencyMap, num, num2, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp18, tmp19, tmp20, tmp21, tmp23, tmp26, tmp27, tmp28, tmp29, tmp3, tmp4, tmp5;

const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  let first;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AVErrorStore, AuthenticationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    let tmp7;
    if (cResult[2] === arg1) {
      tmp7 = cResult[3];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(first, tmp7);
  }
  class T {
    constructor() {
      if (closure_2.getId() === closure_1) {
        tmp10 = closure_0;
        tmp11 = MediaEngineContextTypes;
        if (closure_0 === MediaEngineContextTypes.STREAM) {
          tmp12 = closure_3;
          tmp13 = closure_0;
          tmp14 = closure_1;
          activeErrorsOfType = closure_3.getActiveErrorsOfType(closure_0(closure_1[5]).AVError.SCREENSHARE_OS_ERROR);
        } else {
          activeErrorsOfType = [];
        }
        items = [];
        num2 = 0;
        tmp15 = items;
        tmp16 = activeErrorsOfType;
        tmp18 = closure_3;
        tmp19 = closure_0;
        tmp20 = closure_1;
        arraySpreadResult = HermesBuiltin.arraySpread(items, activeErrorsOfType, 0);
        tmp21 = items;
        arraySpreadResult1 = HermesBuiltin.arraySpread(items, closure_3.getActiveErrorsOfType(closure_0(closure_1[5]).AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT), arraySpreadResult);
        tmp23 = items;
        arraySpreadResult2 = HermesBuiltin.arraySpread(items, closure_3.getActiveErrorsOfType(closure_0(closure_1[5]).AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM), arraySpreadResult1);
        tmp9 = items;
      } else {
        tmp2 = closure_3;
        tmp3 = closure_0;
        tmp4 = closure_1;
        items1 = [];
        num = 0;
        tmp5 = items1;
        arraySpreadResult3 = HermesBuiltin.arraySpread(items1, closure_3.getActiveErrorsOfType(closure_0(closure_1[5]).AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT), 0);
        tmp7 = items1;
        arraySpreadResult4 = HermesBuiltin.arraySpread(items1, closure_3.getActiveErrorsOfType(closure_0(closure_1[5]).AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM), arraySpreadResult3);
        tmp9 = items1;
      }
      for (const item10067 of tmp9) {
        tmp26 = closure_0;
        if (item10067.mediaContext !== closure_0) {
        } else {
          tmp27 = item10067;
          tmp28 = closure_1;
          if (tmp25.userId === closure_1) {
            tmp29 = obj;
            obj.return();
            return item10067;
          }
        }
        continue;
      }
      return;
    }
  }
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = T;
  tmp7 = T;
}) : ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("get initialized");
  let items = [AVErrorStore, AuthenticationStore];
  return obj.useStateFromStores(items, () => {
    if (AuthenticationStore.getId() === closure_1) {
      let activeErrorsOfType;
      if (closure_0 === MediaEngineContextTypes.STREAM) {
        activeErrorsOfType = AVErrorStore.getActiveErrorsOfType(AVError.AVError.SCREENSHARE_OS_ERROR);
      } else {
        activeErrorsOfType = [];
      }
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(items, activeErrorsOfType, 0);
      const arraySpreadResult5 = HermesBuiltin.arraySpread(items, AVErrorStore.getActiveErrorsOfType(AVError.AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT), arraySpreadResult);
      HermesBuiltin.arraySpread(items, AVErrorStore.getActiveErrorsOfType(AVError.AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM), arraySpreadResult5);
      let tmp9 = items;
    } else {
      const items1 = [];
      const arraySpreadResult7 = HermesBuiltin.arraySpread(items1, AVErrorStore.getActiveErrorsOfType(AVError.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT), 0);
      HermesBuiltin.arraySpread(items1, AVErrorStore.getActiveErrorsOfType(AVError.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM), arraySpreadResult7);
      tmp9 = items1;
    }
    for (const item10067 of tmp9) {
      if (item10067.mediaContext === closure_0) {
        if (tmp25.userId === closure_1) {
          obj.return();
          return item10067;
        }
      }
      continue;
    }
  });
});
let closure_5 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
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