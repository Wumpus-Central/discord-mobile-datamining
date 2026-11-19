// === Module 13680: useConjureHomeOwnProjects ===

// Module 13680 (useConjureHomeOwnProjects)
import conjureHomeProjectOrder from "conjureHomeProjectOrder" /* 13681 */;
import ConjureChatStore from "ConjureChatStore" /* 6806 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6500 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/home/useConjureHomeOwnProjects.tsx");

export default function useConjureHomeOwnProjects() {
  const f106144 = () => ownedProjects.getOwnedProjects();
  items = [ConjureProjectStore, ConjureChatStore];
  return f106144(504).useStateFromStoresArray(items, () => {
    const obj = conjureHomeProjectOrder;
    return obj.sortConjureProjectsByActivity(f106144().map((id) => {
      const findOpenTurnResult = closure_1_0(dependencyMap[4]).findOpenTurn(messages.getMessages(id.id));
      const obj3 = { project: id, turnStartedAt: null, finishedAt: null };
      let conjureTurnStartedAtResult = null;
      if (null != findOpenTurnResult) {
        conjureTurnStartedAtResult = closure_1_0(dependencyMap[5]).conjureTurnStartedAt(findOpenTurnResult);
        const tmpResult = closure_1_0(dependencyMap[5]);
      }
      obj3.turnStartedAt = conjureTurnStartedAtResult;
      obj3.finishedAt = messages.getFinishedAt(id.id);
      return obj3;
    }));
  }, []);
};
export function useConjureProjectsByActivity(getListedConjureProjects) {
  _require = getListedConjureProjects;
  if (items === undefined) {
    items = [];
  }
  const items1 = [ConjureProjectStore, ConjureChatStore];
  return require("initialize").useStateFromStoresArray(items1, () => {
    const obj = conjureHomeProjectOrder;
    return obj.sortConjureProjectsByActivity(f106144().map((id) => {
      const findOpenTurnResult = closure_1_0(dependencyMap[4]).findOpenTurn(messages.getMessages(id.id));
      const obj3 = { project: id, turnStartedAt: null, finishedAt: null };
      let conjureTurnStartedAtResult = null;
      if (null != findOpenTurnResult) {
        conjureTurnStartedAtResult = closure_1_0(dependencyMap[5]).conjureTurnStartedAt(findOpenTurnResult);
        const tmpResult = closure_1_0(dependencyMap[5]);
      }
      obj3.turnStartedAt = conjureTurnStartedAtResult;
      obj3.finishedAt = messages.getFinishedAt(id.id);
      return obj3;
    }));
  }, items);
}