// discord_app/modules/rtc/hooks/useIsSecureFramesKeyInconsistent.tsx
import noop from "../../../../_runtime/00019_noop.js";
import createRTCConnection from "../../../stores/RTCConnectionStore.tsx";
import initialize from "../../../stores/StreamRTCConnectionStore.tsx";

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/rtc/hooks/useIsSecureFramesKeyInconsistent.tsx");

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
  const userId = channelId.userId;
  const nickname = channelId.nickname;
  const onAlertOpen = channelId.onAlertOpen;
  let stateFromStores;
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
        ref.current = setTimeout(() => {
          callback();
          current(userId[4]);
          const obj = { userId: closure_1, channelId: current, nickname: closure_2 };
          const result = obj.showSecureFramesKeyInconsistentAlert(obj);
        }, 1000);
        let tmp3 = ref;
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