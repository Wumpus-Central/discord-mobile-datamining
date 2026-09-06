// === Module 10878: useDiscoverableApplicationStream ===

// Module 10878 (useDiscoverableApplicationStream)
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4582 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;

const require = fn;
function getDiscoverableApplicationStream(id, items) {
  let tmp = items;
  if (items === undefined) {
    items = [ApplicationStreamingStore, RelationshipStore];
    tmp = items;
  }
  [obj, obj2] = tmp;
  if (null != id) {
    let NONE = obj2.getRelationshipType(id);
  } else {
    NONE = RelationshipTypes.NONE;
  }
  let anyDiscoverableStreamForUser = null;
  if (null != id) {
    anyDiscoverableStreamForUser = obj.getAnyDiscoverableStreamForUser(id);
  }
  let tmp6 = null;
  if (NONE !== RelationshipTypes.BLOCKED) {
    tmp6 = null;
    if (null != id) {
      tmp6 = anyDiscoverableStreamForUser;
    }
  }
  return tmp6;
}
const RelationshipTypes = fn(1074).RelationshipTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/blocking/useDiscoverableApplicationStream.tsx");

export default function useDiscoverableApplicationStream(arg0) {
  _require = arg0;
  let items = [ApplicationStreamingStore, RelationshipStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    const items = [ApplicationStreamingStore, RelationshipStore];
    return getDiscoverableApplicationStream(closure_0, items);
  }, items1);
};
export { getDiscoverableApplicationStream };