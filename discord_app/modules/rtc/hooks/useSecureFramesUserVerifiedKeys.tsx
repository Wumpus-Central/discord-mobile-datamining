// === Module 18209: useSecureFramesUserVerifiedKeys ===

// Module 18209 (useSecureFramesUserVerifiedKeys)
import applyDefault from "apply" /* 12 */;
import VerifiedKeyStore from "VerifiedKeyStore" /* 9329 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/hooks/useSecureFramesUserVerifiedKeys.tsx");

export function useSecureFramesUserVerifiedKeys(userId) {
  _require = userId;
  items = [VerifiedKeyStore];
  return require("initialize").useStateFromStoresArray(items, () => {
    const entries = applyDefault(VerifiedKeyStore.getUserVerifiedKeys(closure_0)).entries();
    const mapped = entries.map((item) => {
      [tmp, tmp2] = item;
      return { verifiedKey, timestamp };
    });
    const tmpResult = applyDefault(VerifiedKeyStore.getUserVerifiedKeys(closure_0));
    return mapped.sortBy((timestamp) => -1 * timestamp.timestamp).value();
  });
}