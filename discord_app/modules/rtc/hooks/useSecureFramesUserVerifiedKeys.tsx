// === Module 18130: useSecureFramesUserVerifiedKeys ===

// Module 18130 (useSecureFramesUserVerifiedKeys)
import _modDef12 from "module_12" /* 12 */;
import VerifiedKeyStore from "VerifiedKeyStore" /* 9394 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/hooks/useSecureFramesUserVerifiedKeys.tsx");

export function useSecureFramesUserVerifiedKeys(userId) {
  _require = userId;
  items = [VerifiedKeyStore];
  return require("initialize").useStateFromStoresArray(items, () => {
    const entries = _modDef12(VerifiedKeyStore.getUserVerifiedKeys(closure_0)).entries();
    const mapped = entries.map((item) => {
      [tmp, tmp2] = item;
      return { verifiedKey, timestamp };
    });
    const tmpResult = _modDef12(VerifiedKeyStore.getUserVerifiedKeys(closure_0));
    return mapped.sortBy((timestamp) => -1 * timestamp.timestamp).value();
  });
}