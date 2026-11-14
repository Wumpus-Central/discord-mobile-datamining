// === Module 10533: useConjureProjectGroups ===

// Module 10533 (useConjureProjectGroups)
import conjureProjectGroups from "conjureProjectGroups" /* 10534 */;
import filterConjureProjectsByName from "filterConjureProjectsByName" /* 10535 */;
import noop from "module_19" /* 19 */;
import SortedGuildStore from "SortedGuildStore" /* 6956 */;
import UserStore from "UserStore" /* 1388 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7017 */;

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
  conjureProjectsByActivity = require("useConjureHomeOwnProjects").useConjureProjectsByActivity(getListedConjureProjects);
  let obj = require("useConjureHomeOwnProjects");
  items = [stateFromStores];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => stateFromStores.getFlattenedGuildIds());
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
    const merged = Object.assign(obj2.groupConjureProjects(filterConjureProjectsByName.filterConjureProjectsByName(conjureProjectsByActivity, closure_0), stateFromStoresArray, stateFromStores));
    obj.hasProjects = conjureProjectsByActivity.length > 0;
    return obj;
  }, items2);
};
export { getListedConjureProjects };