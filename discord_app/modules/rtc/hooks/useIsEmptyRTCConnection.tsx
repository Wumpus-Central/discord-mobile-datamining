// discord_app/modules/rtc/hooks/useIsEmptyRTCConnection.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import closure_2 from "../../../stores/AuthenticationStore.tsx";
import closure_3 from "../../../stores/RTCConnectionStore.tsx";
import closure_4 from "../../../stores/StreamRTCConnectionStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/rtc/hooks/useIsEmptyRTCConnection.tsx");

export const useIsStreamRTCConnectionEmpty = function useIsStreamRTCConnectionEmpty(stateFromStores4) {
  const _require = stateFromStores4;
  const items = [closure_4, closure_2];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    if (null == closure_0) {
      return true;
    } else {
      const userIds = closure_1_4.getUserIds(tmp);
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
  const items = [closure_3, closure_2];
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
