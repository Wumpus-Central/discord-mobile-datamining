// === Module 18690: useConjureServerProjects ===

// Module 18690 (useConjureServerProjects)
import conjureServerProject from "conjureServerProject" /* 7449 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6808 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/home/useConjureServerProjects.tsx");

export default function useConjureServerProjects(arg0) {
  _require = arg0;
  const obj = { participating: null, shared: null, fetchState: null };
  items = [arg0];
  obj.participating = require("useConjureHomeOwnProjects").useConjureProjectsByActivity(() => {
    const conjureServerProjects = conjureServerProject.getConjureServerProjects(closure_0);
    return conjureServerProjects.filter((item) => railProject.isRailProject(item));
  }, items);
  const obj2 = require("useConjureHomeOwnProjects");
  const items1 = [arg0];
  obj.shared = require("useConjureHomeOwnProjects").useConjureProjectsByActivity(() => {
    const conjureServerProjects = conjureServerProject.getConjureServerProjects(closure_0);
    return conjureServerProjects.filter((item) => !railProject.isRailProject(item));
  }, items1);
  const obj3 = require("useConjureHomeOwnProjects");
  const items2 = [ConjureProjectStore];
  const items3 = [arg0];
  obj.fetchState = require("initialize").useStateFromStores(items2, () => ConjureProjectStore.getGuildProjectsFetchState(closure_0), items3);
  return obj;
};