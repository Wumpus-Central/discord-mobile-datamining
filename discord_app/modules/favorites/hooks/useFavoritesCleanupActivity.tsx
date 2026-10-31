// === Module 18189: useFavoritesCleanupActivity ===

// Module 18189 (useFavoritesCleanupActivity)
import DurationsDefault from "Durations" /* 1089 */;
import _modDef3450 from "module_3450" /* 3450 */;
import getThreadAutoArchiveTimeOnce from "getThreadAutoArchiveTimeOnce" /* 6894 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 6842 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesCleanupActivity.tsx");

export default function useFavoritesCleanupActivity(threadMetadata) {
  _require = threadMetadata;
  const items = [ReadStateStore];
  const items1 = [threadMetadata];
  const stateFromStores = require("initialize").useStateFromStores(items, () => getThreadAutoArchiveTimeOnce.getThreadLastActivityTime(closure_0), items1);
  if (Number.isFinite(stateFromStores)) {
    if (stateFromStores > 0) {
      const intl2 = tmp(1113).intl;
      const obj2 = { days: null };
      const _Math = Math;
      const _Math2 = Math;
      const diff = _slicedToArray(noop.useState(Date.now), 1)[0] - stateFromStores;
      obj2.days = Math.max(0, Math.floor(diff / DurationsDefault.Millis.DAY));
      let formatToPlainStringResult = intl2.formatToPlainString(_modDef3450.IzxPdG, obj2);
    }
    threadMetadata = threadMetadata.threadMetadata;
    let archived;
    if (threadMetadata != null) {
      archived = threadMetadata.archived;
    }
    let formatToPlainStringResult1 = formatToPlainStringResult;
    if (archived) {
      const intl3 = tmp(1113).intl;
      const obj3 = { activity: formatToPlainStringResult };
      formatToPlainStringResult1 = intl3.formatToPlainString(_modDef3450.Dr1FWM, obj3);
    }
    return formatToPlainStringResult1;
  }
  const intl = tmp(1113).intl;
  formatToPlainStringResult = intl.string(_modDef3450.rYws6y);
  const obj = require("initialize");
};