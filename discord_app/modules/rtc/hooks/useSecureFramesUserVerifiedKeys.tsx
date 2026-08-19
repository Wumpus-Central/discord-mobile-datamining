// discord_app/modules/rtc/hooks/useSecureFramesUserVerifiedKeys.tsx
import applyDefault from "../../../../_runtime/00012_apply.js";
import initialize from "../VerifiedKeyStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/rtc/hooks/useSecureFramesUserVerifiedKeys.tsx");

export const useSecureFramesUserVerifiedKeys = function useSecureFramesUserVerifiedKeys(userId) {
  const _require = userId;
  const items = [closure_3];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStoresArray(items, () => {
    const entries = applyDefault(closure_1_3.getUserVerifiedKeys(closure_0)).entries();
    const mapped = entries.map((item, index) => {
      [tmp, tmp2] = item;
      return { verifiedKey, timestamp };
    });
    const tmpResult = applyDefault(closure_1_3.getUserVerifiedKeys(closure_0));
    return mapped.sortBy((timestamp) => -1 * timestamp.timestamp).value();
  });
};