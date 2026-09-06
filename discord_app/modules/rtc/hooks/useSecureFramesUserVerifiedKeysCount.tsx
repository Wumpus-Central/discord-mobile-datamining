// discord_app/modules/rtc/hooks/useSecureFramesUserVerifiedKeysCount.tsx
import _mod9135 from "../../../../discord_common/js/packages/libdave/index.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import VerifiedKeyStore from "../VerifiedKeyStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/hooks/useSecureFramesUserVerifiedKeysCount.tsx");

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
      return _mod9135.serializeKey(uint8Array);
    }
  }, items);
  const items1 = [VerifiedKeyStore];
  const items2 = [memo, userId];
  return userId(keyToOmit[3]).useStateFromStores(
    items1,
    () => {
      const userVerifiedKeys = VerifiedKeyStore.getUserVerifiedKeys(userId);
      let num = 0;
      if (null != userVerifiedKeys) {
        const _Object = Object;
        const keys = Object.keys(userVerifiedKeys);
        num = keys.filter((item) => item !== memo).length;
      }
      return num;
    },
    items2,
  );
};
