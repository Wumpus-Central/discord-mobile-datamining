// === Module 10222: useDiscoverableApplicationStream ===

// Module 10222 (useDiscoverableApplicationStream)
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 5893 */;
import RelationshipStore from "RelationshipStore" /* 4717 */;

const require = globalThis.__r;

const require = fn;
function getDiscoverableApplicationStream(userId) {
  let tmp = items;
  if (items === undefined) {
    items = [ApplicationStreamingStore, RelationshipStore];
    tmp = items;
  }
  [obj, obj2] = tmp;
  if (null != userId) {
    let NONE = obj2.getRelationshipType(userId);
  } else {
    NONE = RelationshipTypes.NONE;
  }
  let anyDiscoverableStreamForUser = null;
  if (null != userId) {
    anyDiscoverableStreamForUser = obj.getAnyDiscoverableStreamForUser(userId);
  }
  let tmp6 = null;
  if (NONE !== RelationshipTypes.BLOCKED) {
    tmp6 = null;
    if (null != userId) {
      tmp6 = anyDiscoverableStreamForUser;
    }
  }
  return tmp6;
}
const RelationshipTypes = fn(1085).RelationshipTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/blocking/useDiscoverableApplicationStream.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useDiscoverableApplicationStream(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ApplicationStreamingStore, RelationshipStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      const items = [ApplicationStreamingStore, RelationshipStore];
      return getDiscoverableApplicationStream(closure_0, items);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7, tmp8);
}) : (function useDiscoverableApplicationStream(arg0) {
  _require = arg0;
  let items = [ApplicationStreamingStore, RelationshipStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    const items = [ApplicationStreamingStore, RelationshipStore];
    return getDiscoverableApplicationStream(closure_0, items);
  }, items1);
});
export { getDiscoverableApplicationStream };