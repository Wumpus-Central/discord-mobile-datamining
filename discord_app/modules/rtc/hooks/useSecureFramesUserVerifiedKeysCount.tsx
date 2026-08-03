import noop from "noop";
import initialize from "initialize";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/rtc/hooks/useSecureFramesUserVerifiedKeysCount.tsx");

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
      const uint8Array = new Uint8Array(tmp);
      return userId(keyToOmit[2]).serializeKey(uint8Array);
    }
  }, items);
  const items1 = [initialize];
  const items2 = [memo, userId];
  return userId(keyToOmit[3]).useStateFromStores(items1, () => {
    const userVerifiedKeys = outer1_3.getUserVerifiedKeys(userId);
    let num = 0;
    if (null != userVerifiedKeys) {
      const _Object = Object;
      const keys = Object.keys(userVerifiedKeys);
      num = keys.filter((arg0) => arg0 !== noop).length;
    }
    return num;
  }, items2);
};