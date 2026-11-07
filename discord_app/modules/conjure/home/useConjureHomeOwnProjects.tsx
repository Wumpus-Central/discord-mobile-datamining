// === Module 13200: useConjureHomeOwnProjects ===

// Module 13200 (useConjureHomeOwnProjects)
import conjureHomeProjectOrder from "conjureHomeProjectOrder" /* 13201 */;
import ConjureChatStore from "ConjureChatStore" /* 10970 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6899 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/home/useConjureHomeOwnProjects.tsx");

export default function useConjureHomeOwnProjects() {
  const f105060 = () => ownedProjects.getOwnedProjects();
  items = [ConjureProjectStore, ConjureChatStore];
  return f105060(504).useStateFromStoresArray(items, () => {
    const obj = conjureHomeProjectOrder;
    return obj.sortConjureProjectsByActivity(f105060().map((id) => {
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
    return obj.sortConjureProjectsByActivity(f105060().map((id) => {
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