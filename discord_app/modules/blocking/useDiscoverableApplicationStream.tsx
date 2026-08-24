// discord_app/modules/blocking/useDiscoverableApplicationStream.tsx
import closure_2 from "../../stores/ApplicationStreamingStore.tsx";
import closure_3 from "../../stores/RelationshipStore.tsx";
import { RelationshipTypes } from "../../Constants.tsx";

const require = arg1;
function getDiscoverableApplicationStream(id, items) {
  let tmp = items;
  if (items === undefined) {
    items = [closure_2, closure_3];
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
const result = require("set").fileFinishedImporting("modules/blocking/useDiscoverableApplicationStream.tsx");

export default function useDiscoverableApplicationStream(arg0) {
  const _require = arg0;
  let items = [closure_2, closure_3];
  const items1 = [arg0];
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const items = [closure_1_2, closure_1_3];
    return closure_1_5(closure_0, items);
  }, items1);
};
export { getDiscoverableApplicationStream };