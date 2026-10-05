// === Module 9378: useSecureFramesUserVerifiedKeysCount ===

// Module 9378 (useSecureFramesUserVerifiedKeysCount)
import _mod9349 from "module_9349" /* 9349 */;
import react from "react" /* 19 */;
import VerifiedKeyStore from "VerifiedKeyStore" /* 9348 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function(userId) {
  let closure_1;
  let tmp11;
  const obj = userId(576);
  const cResult = obj.c(7);
  userId = userId.userId;
  const keyToOmit = userId.keyToOmit;
  let tmp4 = null;
  if (null != keyToOmit) {
    let tmp5;
    if (cResult[0] !== keyToOmit) {
      const _Uint8Array = Uint8Array;
      const self = this;
      const self2 = this;
      const uint8Array = new Uint8Array(keyToOmit);
      const tmpResult = userId(9349);
      const serializeKeyResult = tmpResult.serializeKey(uint8Array);
      let num = 0;
      cResult[0] = keyToOmit;
      cResult[1] = serializeKeyResult;
      tmp5 = serializeKeyResult;
    } else {
      tmp5 = cResult[1];
    }
    tmp4 = tmp5;
  }
  dependencyMap = tmp4;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VerifiedKeyStore];
    cResult[2] = items;
    tmp11 = items;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] === tmp4) {
    let tmp13;
    let tmp14;
    if (cResult[4] === userId) {
      tmp13 = cResult[5];
      tmp14 = cResult[6];
    }
    const tmpResult2 = userId(504);
    return tmpResult2.useStateFromStores(tmp11, tmp13, tmp14);
  }
  const fn = function v() {
    const userVerifiedKeys = VerifiedKeyStore.getUserVerifiedKeys(userId);
    let num = 0;
    if (null != userVerifiedKeys) {
      const _Object = Object;
      const keys = Object.keys(userVerifiedKeys);
      num = keys.filter((item) => item !== closure_1_1).length;
    }
    return num;
  };
  const items1 = [tmp4, userId];
  cResult[3] = tmp4;
  cResult[4] = userId;
  cResult[5] = fn;
  cResult[6] = items1;
  tmp14 = items1;
  tmp13 = fn;
}) : ((userId) => {
  userId = userId.userId;
  const keyToOmit = userId.keyToOmit;
  let memo;
  const items = [keyToOmit];
  memo = memo.useMemo(function() {
    if (null == keyToOmit) {
      return null;
    } else {
      const _Uint8Array = Uint8Array;
      const self = this;
      const self2 = this;
      const uint8Array = new Uint8Array(keyToOmit);
      const obj = _mod9349;
      return obj.serializeKey(uint8Array);
    }
  }, items);
  let obj = userId(keyToOmit[5]);
  const items1 = [VerifiedKeyStore];
  const items2 = [memo, userId];
  return obj.useStateFromStores(items1, () => {
    const userVerifiedKeys = VerifiedKeyStore.getUserVerifiedKeys(userId);
    let num = 0;
    if (null != userVerifiedKeys) {
      const _Object = Object;
      const keys = Object.keys(userVerifiedKeys);
      num = keys.filter((item) => item !== memo).length;
    }
    return num;
  }, items2);
});
const result = size.fileFinishedImporting("modules/rtc/hooks/useSecureFramesUserVerifiedKeysCount.tsx");

export const useSecureFramesUserVerifiedKeysCount = tmp2;