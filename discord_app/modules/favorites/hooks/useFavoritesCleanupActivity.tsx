// === Module 17566: useFavoritesCleanupActivity ===

// Module 17566 (useFavoritesCleanupActivity)
import DurationsDefault from "Durations" /* 1104 */;
import _modDef3412 from "module_3412" /* 3412 */;
import getThreadAutoArchiveTimeOnce from "getThreadAutoArchiveTimeOnce" /* 6822 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 6771 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesCleanupActivity.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useFavoritesCleanupActivity(threadMetadata) {
  _require = threadMetadata;
  const cResult = require("c").c(8);
  const first = _slicedToArray(noop.useState(Date.now), 1)[0];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore];
    cResult[0] = items;
    let first1 = items;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== threadMetadata) {
    const fn = function u() {
      return getThreadAutoArchiveTimeOnce.getThreadLastActivityTime(closure_0);
    };
    const items1 = [threadMetadata];
    cResult[1] = threadMetadata;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first1, tmp7, tmp8);
  threadMetadata = threadMetadata.threadMetadata;
  let archived;
  if (threadMetadata != null) {
    archived = threadMetadata.archived;
  }
  if (cResult[4] === archived) {
    if (cResult[5] === stateFromStores) {
      if (cResult[6] === first) {
        let tmp11 = cResult[7];
      }
      return tmp11;
    }
  }
  if (Number.isFinite(stateFromStores)) {
    if (stateFromStores > 0) {
      const intl2 = tmp(1128).intl;
      const obj2 = { days: null };
      const _Math = Math;
      const _Math2 = Math;
      const diff = first - stateFromStores;
      obj2.days = Math.max(0, Math.floor(diff / DurationsDefault.Millis.DAY));
      let formatToPlainStringResult = intl2.formatToPlainString(_modDef3412.IzxPdG, obj2);
    }
    const threadMetadata2 = threadMetadata.threadMetadata;
    let archived1;
    if (threadMetadata2 != null) {
      archived1 = threadMetadata2.archived;
    }
    let formatToPlainStringResult1 = formatToPlainStringResult;
    if (archived1) {
      const intl3 = tmp(1128).intl;
      const obj3 = { activity: formatToPlainStringResult };
      formatToPlainStringResult1 = intl3.formatToPlainString(_modDef3412.Dr1FWM, obj3);
    }
    const threadMetadata3 = threadMetadata.threadMetadata;
    let archived2;
    if (threadMetadata3 != null) {
      archived2 = threadMetadata3.archived;
    }
    cResult[4] = archived2;
    cResult[5] = stateFromStores;
    cResult[6] = first;
    cResult[7] = formatToPlainStringResult1;
    tmp11 = formatToPlainStringResult1;
  }
  const intl = tmp(1128).intl;
  formatToPlainStringResult = intl.string(_modDef3412.rYws6y);
  const tmpResult = require("initialize");
}) : (function useFavoritesCleanupActivity(threadMetadata) {
  _require = threadMetadata;
  const items = [ReadStateStore];
  const items1 = [threadMetadata];
  const stateFromStores = require("initialize").useStateFromStores(items, () => getThreadAutoArchiveTimeOnce.getThreadLastActivityTime(closure_0), items1);
  if (Number.isFinite(stateFromStores)) {
    if (stateFromStores > 0) {
      const intl2 = tmp(1128).intl;
      const obj2 = { days: null };
      const _Math = Math;
      const _Math2 = Math;
      const diff = _slicedToArray(noop.useState(Date.now), 1)[0] - stateFromStores;
      obj2.days = Math.max(0, Math.floor(diff / DurationsDefault.Millis.DAY));
      let formatToPlainStringResult = intl2.formatToPlainString(_modDef3412.IzxPdG, obj2);
    }
    threadMetadata = threadMetadata.threadMetadata;
    let archived;
    if (threadMetadata != null) {
      archived = threadMetadata.archived;
    }
    let formatToPlainStringResult1 = formatToPlainStringResult;
    if (archived) {
      const intl3 = tmp(1128).intl;
      const obj3 = { activity: formatToPlainStringResult };
      formatToPlainStringResult1 = intl3.formatToPlainString(_modDef3412.Dr1FWM, obj3);
    }
    return formatToPlainStringResult1;
  }
  const intl = tmp(1128).intl;
  formatToPlainStringResult = intl.string(_modDef3412.rYws6y);
  const obj = require("initialize");
});