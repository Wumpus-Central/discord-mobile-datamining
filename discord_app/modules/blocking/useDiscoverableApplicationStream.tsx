// === Module 9895: getDiscoverableApplicationStream ===

// Module 9895 (getDiscoverableApplicationStream)
import reset from "reset" /* 4652 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import { RelationshipTypes } from "ME" /* 676 */;

const require = fn;
function getDiscoverableApplicationStream(closure_0, items) {
  let tmp = items;
  if (items === undefined) {
    items = [closure_2, closure_3];
    tmp = items;
  }
  [obj, obj2] = tmp;
  if (null != closure_0) {
    let NONE = obj2.getRelationshipType(closure_0);
  } else {
    NONE = RelationshipTypes.NONE;
  }
  let anyDiscoverableStreamForUser = null;
  if (null != closure_0) {
    anyDiscoverableStreamForUser = obj.getAnyDiscoverableStreamForUser(closure_0);
  }
  let tmp6 = null;
  if (NONE !== RelationshipTypes.BLOCKED) {
    tmp6 = null;
    if (null != closure_0) {
      tmp6 = anyDiscoverableStreamForUser;
    }
  }
  return tmp6;
}
const result = require("obj132").fileFinishedImporting("modules/blocking/useDiscoverableApplicationStream.tsx");

export default function useDiscoverableApplicationStream(arg0) {
  const _require = arg0;
  let items = [closure_2, closure_3];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => {
    const items = [closure_1_2, closure_1_3];
    return getDiscoverableApplicationStream(closure_0, items);
  }, items1);
};
export { getDiscoverableApplicationStream };