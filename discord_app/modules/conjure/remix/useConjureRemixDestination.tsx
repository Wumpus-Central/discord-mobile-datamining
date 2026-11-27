// discord_app/modules/conjure/remix/useConjureRemixDestination.tsx
import ConjureUtils from "../shared/ConjureUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import SortedGuildStore from "../../../stores/SortedGuildStore.tsx";

const require = globalThis.__r;

require = fn;
const library = "library";
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/remix/useConjureRemixDestination.tsx");

export default function useConjureRemixDestination(install_scope, arg1, arg2) {
  _require = arg1;
  dependencyMap = arg2;
  const tmp = first(noop.useState(null), 2);
  first = tmp[0];
  items = [SortedGuildStore, GuildStore, PermissionStore, require("ApexExperiment").ApexExperimentStore];
  const items1 = [arg2];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(
    items,
    () => {
      items = [];
      const flattenedGuildIds = SortedGuildStore.getFlattenedGuildIds();
      while (tmp2 !== undefined) {
        guild = GuildStore.getGuild(tmp3);
        let tmp6 = guild;
        let result = null != guild;
        if (result) {
          let obj = ConjureUtils;
          result = obj.canStartConjureProject(tmp6, closure_1);
        }
        if (result) {
          let arr = items.push(tmp6);
        }
        continue;
      }
      return items;
    },
    items1,
  );
  if (null != first) {
    let found = stateFromStoresArray.find((id) => id.id === first);
  }
  let tmp6 = null;
  if ("guild" === install_scope.install_scope) {
    let found1 = stateFromStoresArray.find((id) => id.id === closure_0);
    if (found1 == null) {
      found1 = stateFromStoresArray[0];
    }
    if (found1 == null) {
      found1 = null;
    }
    tmp6 = found1;
  }
  let tmp9 = null;
  if (first !== library) {
    if (found == null) {
      found = tmp6;
    }
    tmp9 = found;
  }
  let id;
  if (tmp9 != null) {
    id = tmp9.id;
  }
  if (id == null) {
    id = null;
  }
  const obj2 = {
    guilds: stateFromStoresArray,
    destination: null,
    destinationGuild: null,
    changesType: null,
    setDestination: null,
  };
  let tmp11 = id;
  if (id == null) {
    tmp11 = library;
  }
  obj2.destination = tmp11;
  obj2.destinationGuild = tmp9;
  let obj = require("initialize");
  obj2.changesType = require("ConjureRemix").conjureCopyChangesType(install_scope, id);
  obj2.setDestination = tmp[1];
  return obj2;
}
export const CONJURE_REMIX_LIBRARY = "library";
