// discord_app/modules/rtc/hooks/useIsEmptyRTCConnection.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";
import StreamRTCConnectionStore from "../../../stores/StreamRTCConnectionStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/hooks/useIsEmptyRTCConnection.tsx");

export const useIsStreamRTCConnectionEmpty = function useIsStreamRTCConnectionEmpty(stateFromStores4) {
  _require = stateFromStores4;
  const items = [StreamRTCConnectionStore, AuthenticationStore];
  return require("initialize").useStateFromStores(items, () => {
    if (null == closure_0) {
      return true;
    } else {
      const userIds = StreamRTCConnectionStore.getUserIds(tmp);
      let tmp3 = null == userIds;
      if (!tmp3) {
        let tmp6 = 0 === userIds.size;
        if (!tmp6) {
          tmp6 = 1 === userIds.size && userIds.has(tmp5);
          const tmp7 = 1 === userIds.size && userIds.has(tmp5);
        }
        tmp3 = tmp6;
      }
      return tmp3;
    }
  });
};
export const useIsCallRTCConnectionEmpty = function useIsCallRTCConnectionEmpty() {
  const items = [RTCConnectionStore, AuthenticationStore];
  return initialize.useStateFromStores(items, () => {
    userIds = userIds.getUserIds();
    let tmp = null == userIds;
    if (!tmp) {
      let tmp4 = 0 === userIds.size;
      if (!tmp4) {
        tmp4 = 1 === userIds.size && userIds.has(tmp3);
        const tmp5 = 1 === userIds.size && userIds.has(tmp3);
      }
      tmp = tmp4;
    }
    return tmp;
  });
};
