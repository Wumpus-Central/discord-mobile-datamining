// === Module 16054: useSecureFramesUserVerifiedKeys ===

// Module 16054 (useSecureFramesUserVerifiedKeys)
import _modDef12 from "module_12" /* 12 */;
import _slicedToArray from "module_32" /* 32 */;
import VerifiedKeyStore from "VerifiedKeyStore" /* 8784 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/hooks/useSecureFramesUserVerifiedKeys.tsx");

export const useSecureFramesUserVerifiedKeys = ReactCompilerGating.isReactCompilerEnabled() ? (function useSecureFramesUserVerifiedKeys(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VerifiedKeyStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      const entries = _modDef12(VerifiedKeyStore.getUserVerifiedKeys(closure_0)).entries();
      const mapped = entries.map((item) => {
        const tmp = closure_1_3(item, 2);
        return { verifiedKey: tmp[0], timestamp: tmp[1] };
      });
      const tmpResult = _modDef12(VerifiedKeyStore.getUserVerifiedKeys(closure_0));
      return mapped.sortBy((timestamp) => -1 * timestamp.timestamp).value();
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStoresArray(first, tmp6);
}) : (function useSecureFramesUserVerifiedKeys(arg0) {
  _require = arg0;
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
});