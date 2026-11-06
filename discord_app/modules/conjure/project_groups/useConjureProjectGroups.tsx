// discord_app/modules/conjure/project_groups/useConjureProjectGroups.tsx
import conjureProjectGroups from "conjureProjectGroups.tsx";
import filterConjureProjectsByName from "../projects/filterConjureProjectsByName.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import SortedGuildStore from "../../../stores/SortedGuildStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

const require = globalThis.__r;

require = fn;
function getListedConjureProjects() {
  const railProjects = ConjureProjectStore.getRailProjects();
  const sharedWithMeProjects = ConjureProjectStore.getSharedWithMeProjects();
  for (const item10019 of sharedWithMeProjects) {
    if (!set.has(item10019.id)) {
      let arr = railProjects.push(item10019);
    }
    continue;
  }
  return railProjects;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/project_groups/useConjureProjectGroups.tsx");

export default function useConjureProjectGroups(arg0) {
  _require = arg0;
  conjureProjectsByActivity =
    require("useConjureHomeOwnProjects").useConjureProjectsByActivity(getListedConjureProjects);
  let obj = require("useConjureHomeOwnProjects");
  items = [stateFromStores];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () =>
    stateFromStores.getFlattenedGuildIds(),
  );
  let obj2 = require("initialize");
  const items1 = [UserStore];
  stateFromStores = require("initialize").useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const items2 = [conjureProjectsByActivity, stateFromStoresArray, stateFromStores, arg0];
  return stateFromStoresArray.useMemo(() => {
    const obj = {};
    const obj2 = conjureProjectGroups;
    const merged = Object.assign(
      obj2.groupConjureProjects(
        filterConjureProjectsByName.filterConjureProjectsByName(conjureProjectsByActivity, closure_0),
        stateFromStoresArray,
        stateFromStores,
      ),
    );
    obj.hasProjects = conjureProjectsByActivity.length > 0;
    return obj;
  }, items2);
}
export { getListedConjureProjects };
