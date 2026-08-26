// === Module 9436: useIsSecureFramesKeyInconsistent ===

// Module 9436 (useIsSecureFramesKeyInconsistent)
import closure_2 from "noop" /* 19 */;
import closure_3 from "createRTCConnection" /* 4518 */;
import closure_4 from "initialize" /* 4532 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/rtc/hooks/useIsSecureFramesKeyInconsistent.tsx");

export const useIsSecureFramesKeyInconsistent = function useIsSecureFramesKeyInconsistent(userId) {
  userId = userId.userId;
  const items = [closure_3, closure_4];
  return userId(589).useStateFromStores(items, () => {
    const items = [onAlertOpen, stateFromStores];
    return userId(userId[4]).getIsSecureFramesKeyInconsistent(userId, items);
  });
};
export const useAlertIfSecureFramesKeyInconsistent = function useAlertIfSecureFramesKeyInconsistent(channelId) {
  channelId = channelId.channelId;
  let userId = channelId;
  userId = channelId.userId;
  const nickname = channelId.nickname;
  const onAlertOpen = channelId.onAlertOpen;
  let stateFromStores;
  closure_5 = undefined;
  let items = [onAlertOpen, stateFromStores];
  stateFromStores = userId(userId[3]).useStateFromStores(items, () => {
    const items = [onAlertOpen, stateFromStores];
    return userId(userId[4]).getIsSecureFramesKeyInconsistent(userId, items);
  });
  closure_5 = nickname.useRef(null);
  const items1 = [channelId, stateFromStores, nickname, onAlertOpen, userId];
  const effect = nickname.useEffect(() => {
    if (stateFromStores) {
      if (null == ref.current) {
        const _setTimeout = setTimeout;
        tmp.current = setTimeout(() => {
          callback();
          let obj = current(closure_1_1[4]);
          obj = { userId: closure_1, channelId: current, nickname: closure_2 };
          const result = obj.showSecureFramesKeyInconsistentAlert(obj);
        }, 1000);
        let tmp3 = tmp;
      }
      const current = tmp3.current;
      return () => {
        clearTimeout(current);
      };
    }
    tmp3 = ref;
    clearTimeout(ref.current);
    ref.current = null;
  }, items1);
};