// discord_app/modules/blocking/useDiscoverableApplicationStream.tsx
import closure_2 from "reset" /* 4652 */;
import closure_3 from "markAllUserIdListsStale" /* 4030 */;
import { RelationshipTypes } from "ME" /* 676 */;
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
function getDiscoverableApplicationStream(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [closure_2, closure_3];
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
const result = require("set").fileFinishedImporting("modules/blocking/useDiscoverableApplicationStream.tsx");

export default function useDiscoverableApplicationStream(arg0) {
  const _require = arg0;
  let items = [closure_2, closure_3];
  const items1 = [arg0];
  return _initialize.useStateFromStores(items, () => {
    const items = [closure_1_2, closure_1_3];
    return closure_1_5(closure_0, items);
  }, items1);
};
export { getDiscoverableApplicationStream };