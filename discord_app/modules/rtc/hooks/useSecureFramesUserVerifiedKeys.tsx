// discord_app/modules/rtc/hooks/useSecureFramesUserVerifiedKeys.tsx
import closure_3 from "../VerifiedKeyStore.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/rtc/hooks/useSecureFramesUserVerifiedKeys.tsx");

export const useSecureFramesUserVerifiedKeys = function useSecureFramesUserVerifiedKeys(userId) {
  const _require = userId;
  const items = [closure_3];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStoresArray(items, () => {
    const tmp = closure_1_1(closure_1_2[2]);
    const entries = closure_1_1(closure_1_2[2])(closure_1_3.getUserVerifiedKeys(closure_0)).entries();
    const mapped = entries.map((arg0) => {
      [tmp, tmp2] = arg0;
      return { verifiedKey, timestamp };
    });
    const tmpResult = closure_1_1(closure_1_2[2])(closure_1_3.getUserVerifiedKeys(closure_0));
    return mapped.sortBy((timestamp) => -1 * timestamp.timestamp).value();
  });
};