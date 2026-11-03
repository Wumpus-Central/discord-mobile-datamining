// discord_app/modules/conjure/home/useConjureOtherOwnProjects.tsx
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/home/useConjureOtherOwnProjects.tsx");

export default function useConjureOtherOwnProjects(arg0) {
  _require = arg0;
  items = [ConjureProjectStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresArray(
    items,
    () => {
      const ownedProjects = ConjureProjectStore.getOwnedProjects();
      return ownedProjects.filter(
        (item) => !closure_0(dependencyMap[2]).conjureProjectPointsAtGuild(item, closure_1_0),
      );
    },
    items1,
  );
}
