// discord_app/modules/rtc/hooks/useIsSecureFramesKeyInconsistent.tsx
import noop from "noop";
import createRTCConnection from "createRTCConnection";
import initialize from "initialize";

const require = arg1;
let result = require("initialize").fileFinishedImporting("modules/rtc/hooks/useIsSecureFramesKeyInconsistent.tsx");

export const useIsSecureFramesKeyInconsistent = function useIsSecureFramesKeyInconsistent(userId) {
  userId = userId.userId;
  const items = [createRTCConnection, initialize];
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
  let closure_5;
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
          let obj = current(outer1_1[4]);
          obj = { userId: closure_1, channelId: current, nickname: noop };
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