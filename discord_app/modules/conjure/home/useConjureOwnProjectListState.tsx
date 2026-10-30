// === Module 14675: useConjureOwnProjectListState ===

// Module 14675 (useConjureOwnProjectListState)
import useConjureHomeOwnProjectsDefault from "useConjureHomeOwnProjects" /* 14662 */;
import noop from "module_19" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/home/useConjureOwnProjectListState.tsx");

export default function useConjureOwnProjectListState(str) {
  const arr = useConjureHomeOwnProjectsDefault();
  const items = [ConjureProjectStore];
  const stateFromStores = arr(504).useStateFromStores(items, () => ownedProjectsFetchState.getOwnedProjectsFetchState());
  const trimmed = str.trim();
  const toLocaleLowerCaseResult = trimmed.toLocaleLowerCase();
  importDefault = toLocaleLowerCaseResult;
  const items1 = [arr, toLocaleLowerCaseResult];
  const memo = noop.useMemo(() => {
    if ("" === toLocaleLowerCaseResult) {
      let found = arr;
    } else {
      found = arr.filter((name) => {
        name = name.name;
        return name.toLocaleLowerCase().includes(closure_1_1);
      });
    }
    return found;
  }, items1);
  if (memo.length > 0) {
    const obj2 = { kind: "projects", projects: memo };
    let obj3 = obj2;
  } else if (arr.length > 0) {
    obj3 = { kind: "no_match" };
  } else if ("error" === stateFromStores) {
    obj3 = { kind: "error" };
  } else {
    obj3 = "success" !== stateFromStores ? { kind: "loading" } : { kind: "empty" };
  }
  return obj3;
};