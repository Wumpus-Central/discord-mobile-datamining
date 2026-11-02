// === Module 12987: useConjureOtherOwnProjects ===

// Module 12987 (useConjureOtherOwnProjects)
import ConjureProjectStore from "ConjureProjectStore" /* 6844 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/home/useConjureOtherOwnProjects.tsx");

export default function useConjureOtherOwnProjects(arg0) {
  _require = arg0;
  const items = [ConjureProjectStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresArray(items, () => {
    const ownedProjects = ConjureProjectStore.getOwnedProjects();
    return ownedProjects.filter((item) => !closure_0(dependencyMap[2]).conjureProjectPointsAtGuild(item, closure_1_0));
  }, items1);
};