// discord_app/modules/rtc/hooks/useIsSecureFramesKeyInconsistent.tsx
import SecureFramesUtils from "../SecureFramesUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";
import StreamRTCConnectionStore from "../../../stores/StreamRTCConnectionStore.tsx";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/rtc/hooks/useIsSecureFramesKeyInconsistent.tsx");

export const useIsSecureFramesKeyInconsistent = function useIsSecureFramesKeyInconsistent(userId) {
  userId = userId.userId;
  const items = [RTCConnectionStore, StreamRTCConnectionStore];
  return userId(504).useStateFromStores(items, () => {
    const items = [RTCConnectionStore, StreamRTCConnectionStore];
    return SecureFramesUtils.getIsSecureFramesKeyInconsistent(channelId, items);
  });
};
export const useAlertIfSecureFramesKeyInconsistent = function useAlertIfSecureFramesKeyInconsistent(channelId) {
  channelId = channelId.channelId;
  const userId = channelId.userId;
  const nickname = channelId.nickname;
  const onAlertOpen = channelId.onAlertOpen;
  let stateFromStores;
  closure_129_0 = userId;
  let items = [onAlertOpen, stateFromStores];
  stateFromStores = channelId(userId[3]).useStateFromStores(items, () => {
    const items = [RTCConnectionStore, StreamRTCConnectionStore];
    return SecureFramesUtils.getIsSecureFramesKeyInconsistent(channelId, items);
  });
  nickname.useRef(null);
  const items1 = [channelId, stateFromStores, nickname, onAlertOpen, userId];
  const effect = nickname.useEffect(() => {
    if (stateFromStores) {
      if (null == ref.current) {
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          onAlertOpen();
          channelId(userId[4]);
          const obj = { userId, channelId: current, nickname };
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
