// === Module 9720: useSecureFramesUserVerifiedKeysCount ===

// Module 9720 (useSecureFramesUserVerifiedKeysCount)
import noop from "noop" /* 19 */;
import initialize from "initialize" /* 9692 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/rtc/hooks/useSecureFramesUserVerifiedKeysCount.tsx");

export const useSecureFramesUserVerifiedKeysCount = function useSecureFramesUserVerifiedKeysCount(userId) {
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
      return userId(keyToOmit[2]).serializeKey(uint8Array);
    }
  }, items);
  const items1 = [closure_3];
  const items2 = [memo, userId];
  return userId(keyToOmit[3]).useStateFromStores(items1, () => {
    const userVerifiedKeys = closure_1_3.getUserVerifiedKeys(userId);
    let num = 0;
    if (null != userVerifiedKeys) {
      const _Object = Object;
      const keys = Object.keys(userVerifiedKeys);
      num = keys.filter((item, index) => item !== closure_2).length;
    }
    return num;
  }, items2);
};