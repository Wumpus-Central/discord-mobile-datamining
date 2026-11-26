// === Module 11451: useConjureRemixDestination ===

// Module 11451 (useConjureRemixDestination)
import ConjureUtils from "ConjureUtils" /* 7602 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4914 */;
import SortedGuildStore from "SortedGuildStore" /* 6164 */;

const require = globalThis.__r;

require = fn;
const library = "library";
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/remix/useConjureRemixDestination.tsx");

export default function useConjureRemixDestination(arg0, arg1) {
  _require = arg1;
  [first, obj2.setDestination] = noop.useState(arg0);
  items = [SortedGuildStore, GuildStore];
  const items1 = [arg1];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => {
    items = [];
    const flattenedGuildIds = SortedGuildStore.getFlattenedGuildIds();
    while (tmp2 !== undefined) {
      guild = GuildStore.getGuild(tmp3);
      let tmp6 = guild;
      let result = null != guild;
      if (result) {
        let obj = ConjureUtils;
        result = obj.isConjureGuildEligible(tmp6, closure_0);
      }
      if (result) {
        let arr = items.push(tmp6);
      }
      continue;
    }
    return items;
  }, items1);
  let tmp4 = null;
  if (first !== library) {
    let found = stateFromStoresArray.find((id) => id.id === first);
    if (found == null) {
      found = stateFromStoresArray[0];
    }
    if (found == null) {
      found = null;
    }
    tmp4 = found;
  }
  const obj2 = { guilds: stateFromStoresArray, destination: null, destinationGuild: null, setDestination: null };
  let id;
  if (tmp4 != null) {
    id = tmp4.id;
  }
  if (id == null) {
    id = library;
  }
  obj2.destination = id;
  obj2.destinationGuild = tmp4;
  return obj2;
};
export const CONJURE_REMIX_LIBRARY = "library";