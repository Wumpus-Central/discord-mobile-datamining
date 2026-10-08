// === Module 16887: useConjurePublishedChannelId ===

// Module 16887 (useConjurePublishedChannelId)
import ConjureUtils from "ConjureUtils" /* 6932 */;
import GuildChannelStore from "GuildChannelStore" /* 4705 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishedChannelId.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePublishedChannelId(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === arg0) {
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
    }
    return tmp(504).useStateFromStores(first, tmp6, tmp7);
  }
  const fn = function t() {
    let findConjureChannelIdResult = null;
    if (null != closure_1) {
      findConjureChannelIdResult = ConjureUtils.findConjureChannelId(closure_0, tmp);
    }
    return findConjureChannelIdResult;
  };
  const items1 = [arg0, arg1];
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn;
  let obj = require("c");
  tmp = _require;
}) : (function useConjurePublishedChannelId(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const items = [GuildChannelStore];
  const items1 = [arg0, arg1];
  return require("initialize").useStateFromStores(items, () => {
    let findConjureChannelIdResult = null;
    if (null != closure_1) {
      findConjureChannelIdResult = ConjureUtils.findConjureChannelId(closure_0, tmp);
    }
    return findConjureChannelIdResult;
  }, items1);
});