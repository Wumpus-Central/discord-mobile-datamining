// === Module 13121: useConjureHomeOwnProjects ===

// Module 13121 (useConjureHomeOwnProjects)
import conjureHomeProjectOrder from "conjureHomeProjectOrder" /* 13122 */;
import ConjureChatStore from "ConjureChatStore" /* 10981 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6964 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/home/useConjureHomeOwnProjects.tsx");

export default function useConjureHomeOwnProjects() {
  const f103443 = () => ownedProjects.getOwnedProjects();
  items = [ConjureProjectStore, ConjureChatStore];
  return f103443(504).useStateFromStoresArray(items, () => {
    const obj = conjureHomeProjectOrder;
    return obj.sortConjureProjectsByActivity(f103444().map((id) => {
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
export function useConjureProjectsByActivity(arg0) {
  _require = arg0;
  if (items === undefined) {
    items = [];
  }
  const items1 = [ConjureProjectStore, ConjureChatStore];
  return require("initialize").useStateFromStoresArray(items1, () => {
    const obj = conjureHomeProjectOrder;
    return obj.sortConjureProjectsByActivity(f103444().map((id) => {
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
export function useConjureSharedWithMeProjects() {
  const f103444 = () => sharedWithMeProjects.getSharedWithMeProjects();
  items = [ConjureProjectStore, ConjureChatStore];
  return f103444(504).useStateFromStoresArray(items, () => {
    const obj = conjureHomeProjectOrder;
    return obj.sortConjureProjectsByActivity(f103444().map((id) => {
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
}