import reset from "reset";
import upsertRelationship from "upsertRelationship";
import { RelationshipTypes } from "ME";

const require = arg1;
function getDiscoverableApplicationStream(arg0) {
  let obj;
  let obj2;
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [reset, upsertRelationship];
    tmp = items;
  }
  [obj, obj2] = tmp;
  if (null != arg0) {
    let NONE = obj2.getRelationshipType(arg0);
  } else {
    NONE = RelationshipTypes.NONE;
  }
  let anyDiscoverableStreamForUser = null;
  if (null != arg0) {
    anyDiscoverableStreamForUser = obj.getAnyDiscoverableStreamForUser(arg0);
  }
  let tmp6 = null;
  if (NONE !== RelationshipTypes.BLOCKED) {
    tmp6 = null;
    if (null != arg0) {
      tmp6 = anyDiscoverableStreamForUser;
    }
  }
  return tmp6;
}
const result = require("ME").fileFinishedImporting("modules/blocking/useDiscoverableApplicationStream.tsx");

export default function useDiscoverableApplicationStream(arg0) {
  const _require = arg0;
  let items = [reset, upsertRelationship];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => {
    const items = [outer1_2, outer1_3];
    return outer1_5(closure_0, items);
  }, items1);
};
export { getDiscoverableApplicationStream };