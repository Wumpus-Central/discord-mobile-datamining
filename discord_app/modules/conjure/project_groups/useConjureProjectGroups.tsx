// === Module 14287: useConjureProjectGroups ===

// Module 14287 (useConjureProjectGroups)
import conjureProjectGroups from "conjureProjectGroups" /* 14288 */;
import filterConjureProjectsByName from "filterConjureProjectsByName" /* 14289 */;
import noop from "module_19" /* 19 */;
import SortedGuildStore from "SortedGuildStore" /* 6164 */;
import UserStore from "UserStore" /* 1387 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6934 */;

const require = globalThis.__r;

require = fn;
function getListedConjureProjects() {
  return ConjureProjectStore.getRailProjects();
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