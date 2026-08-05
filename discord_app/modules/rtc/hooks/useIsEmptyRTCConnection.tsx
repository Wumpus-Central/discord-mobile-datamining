// discord_app/modules/rtc/hooks/useIsEmptyRTCConnection.tsx
import fetchFingerprint from "fetchFingerprint";
import createRTCConnection from "createRTCConnection";
import initialize from "initialize";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/rtc/hooks/useIsEmptyRTCConnection.tsx");

export const useIsStreamRTCConnectionEmpty = function useIsStreamRTCConnectionEmpty(stateFromStores4) {
  const _require = stateFromStores4;
  const items = [initialize, fetchFingerprint];
  return _initialize.useStateFromStores(items, () => {
    if (null == closure_0) {
      return true;
    } else {
      const userIds = outer1_4.getUserIds(tmp);
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
  const items = [createRTCConnection, fetchFingerprint];
  return initialize /* initialize */.useStateFromStores(items, () => {
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