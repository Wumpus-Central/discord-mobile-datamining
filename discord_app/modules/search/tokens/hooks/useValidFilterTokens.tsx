// === Module 17248: useValidFilterTokens ===

// Module 17248 (useValidFilterTokens)
import SearchTokenStreamerModeUtils from "SearchTokenStreamerModeUtils" /* 12003 */;
import StreamerModeStore from "StreamerModeStore" /* 4924 */;

const require = globalThis.__r;

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useValidOrderedFilterTokens(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [StreamerModeStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      const items = [StreamerModeStore];
      return SearchTokenStreamerModeUtils.getValidOrderedFilterTokens(closure_0, items);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStoresArray(first, tmp6);
}) : (function useValidOrderedFilterTokens(arg0) {
  _require = arg0;
  let items = [StreamerModeStore];
  return require("initialize").useStateFromStoresArray(items, () => {
    const items = [StreamerModeStore];
    return SearchTokenStreamerModeUtils.getValidOrderedFilterTokens(closure_0, items);
  });
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/tokens/hooks/useValidFilterTokens.tsx");

export const useValidOrderedFilterTokens = tmp2;
export const useValidFilterTokens = ReactCompilerGating.isReactCompilerEnabled() ? (function useValidFilterTokens(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [StreamerModeStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      const items = [StreamerModeStore];
      return SearchTokenStreamerModeUtils.getValidFilterTokens(closure_0, items);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6, tmp7, require("SetUtils").areSetsEqual);
}) : (function useValidFilterTokens(arg0) {
  _require = arg0;
  let items = [StreamerModeStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    const items = [StreamerModeStore];
    return SearchTokenStreamerModeUtils.getValidFilterTokens(closure_0, items);
  }, items1, require("SetUtils").areSetsEqual);
});