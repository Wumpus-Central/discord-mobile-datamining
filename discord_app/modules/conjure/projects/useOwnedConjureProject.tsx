// discord_app/modules/conjure/projects/useOwnedConjureProject.tsx
import useIsOwnedConjureApplicationDefault from "useIsOwnedConjureApplication.tsx";
import ConjureProjectStore from "ConjureProjectStore.tsx";

const require = globalThis.__r;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/useOwnedConjureProject.tsx");

export default function useOwnedConjureProject(arg0, arg1) {
  _require = arg0;
  const tmp = useIsOwnedConjureApplicationDefault(arg0, arg1);
  importDefault = tmp;
  const items = [ConjureProjectStore];
  const items1 = [tmp, arg0];
  const obj = require("initialize");
  return {
    isOwned: tmp,
    project: require("initialize").useStateFromStores(
      items,
      () => {
        let result = null;
        if (true === closure_1) {
          result = null;
          if (null != closure_0) {
            result = ConjureProjectStore.findProjectByApplicationId(tmp2);
          }
        }
        return result;
      },
      items1,
    ),
  };
}
