// === Module 8813: useSecureFramesUserVerifiedKeysCount ===

// Module 8813 (useSecureFramesUserVerifiedKeysCount)
import _mod8785 from "module_8785" /* 8785 */;
import noop from "module_19" /* 19 */;
import VerifiedKeyStore from "VerifiedKeyStore" /* 8784 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/hooks/useSecureFramesUserVerifiedKeysCount.tsx");

export const useSecureFramesUserVerifiedKeysCount = ReactCompilerGating.isReactCompilerEnabled() ? (function useSecureFramesUserVerifiedKeysCount(userId) {
  const cResult = userId(576).c(7);
  userId = userId.userId;
  const keyToOmit = userId.keyToOmit;
  if (null == keyToOmit) {
    dependencyMap = null;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [VerifiedKeyStore];
      cResult[2] = items;
      let tmp14 = items;
    } else {
      tmp14 = cResult[2];
    }
    if (cResult[3] === null) {
      if (cResult[4] === userId) {
        let tmp16 = cResult[5];
        let tmp17 = cResult[6];
      }
      return tmp(504).useStateFromStores(tmp14, tmp16, tmp17);
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
    const items1 = [null, userId];
    cResult[3] = null;
    cResult[4] = userId;
    cResult[5] = fn;
    cResult[6] = items1;
    tmp17 = items1;
    tmp16 = fn;
  } else if (cResult[0] !== keyToOmit) {
    const _Uint8Array = Uint8Array;
    const uint8Array = new Uint8Array(keyToOmit);
    const serializeKeyResult = tmp(8785).serializeKey(uint8Array);
    cResult[0] = keyToOmit;
    cResult[1] = serializeKeyResult;
    const tmpResult2 = tmp(8785);
  }
  const obj = userId(576);
}) : (function useSecureFramesUserVerifiedKeysCount(userId) {
  userId = userId.userId;
  const keyToOmit = userId.keyToOmit;
  let memo;
  const items = [keyToOmit];
  memo = memo.useMemo(() => {
    if (null == keyToOmit) {
      return null;
    } else {
      const _Uint8Array = Uint8Array;
      const uint8Array = new Uint8Array(keyToOmit);
      return _mod8785.serializeKey(uint8Array);
    }
  }, items);
  const items1 = [VerifiedKeyStore];
  const items2 = [memo, userId];
  return userId(keyToOmit[5]).useStateFromStores(items1, () => {
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