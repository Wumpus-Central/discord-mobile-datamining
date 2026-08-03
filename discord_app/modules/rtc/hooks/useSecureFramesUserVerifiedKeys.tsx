import initialize from "initialize";

const require = arg1;
const result = require("apply").fileFinishedImporting("modules/rtc/hooks/useSecureFramesUserVerifiedKeys.tsx");

export const useSecureFramesUserVerifiedKeys = function useSecureFramesUserVerifiedKeys(userId) {
  const _require = userId;
  const items = [initialize];
  return _require(589).useStateFromStoresArray(items, () => {
    const tmp = outer1_1(outer1_2[2]);
    const entries = outer1_1(outer1_2[2])(outer1_3.getUserVerifiedKeys(closure_0)).entries();
    const mapped = entries.map((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      return { verifiedKey, timestamp };
    });
    const tmpResult = outer1_1(outer1_2[2])(outer1_3.getUserVerifiedKeys(closure_0));
    return mapped.sortBy((timestamp) => -1 * timestamp.timestamp).value();
  });
};