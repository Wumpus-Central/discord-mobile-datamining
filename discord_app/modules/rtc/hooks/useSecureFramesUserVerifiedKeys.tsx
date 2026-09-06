// discord_app/modules/rtc/hooks/useSecureFramesUserVerifiedKeys.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import VerifiedKeyStore from "../VerifiedKeyStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/hooks/useSecureFramesUserVerifiedKeys.tsx");

export const useSecureFramesUserVerifiedKeys = function useSecureFramesUserVerifiedKeys(userId) {
  _require = userId;
  const items = [VerifiedKeyStore];
  return require("initialize").useStateFromStoresArray(items, () => {
    const entries = _modDef12(VerifiedKeyStore.getUserVerifiedKeys(closure_0)).entries();
    const mapped = entries.map((item) => {
      [tmp, tmp2] = item;
      return { verifiedKey, timestamp };
    });
    const tmpResult = _modDef12(VerifiedKeyStore.getUserVerifiedKeys(closure_0));
    return mapped.sortBy((timestamp) => -1 * timestamp.timestamp).value();
  });
};
