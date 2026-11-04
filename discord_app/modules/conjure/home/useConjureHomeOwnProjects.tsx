// discord_app/modules/conjure/home/useConjureHomeOwnProjects.tsx
import conjureHomeProjectOrder from "conjureHomeProjectOrder.tsx";
import ConjureChatStore from "../chat/ConjureChatStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/home/useConjureHomeOwnProjects.tsx");

export default function useConjureHomeOwnProjects() {
  const f104311 = () => ownedProjects.getOwnedProjects();
  items = [ConjureProjectStore, ConjureChatStore];
  return f104311(504).useStateFromStoresArray(items, () => {
    const obj = conjureHomeProjectOrder;
    return obj.sortConjureProjectsByActivity(
      f104312().map((id) => {
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
      }),
    );
  }, []);
}
export function useConjureProjectsByActivity(arg0) {
  _require = arg0;
  if (items === undefined) {
    items = [];
  }
  const items1 = [ConjureProjectStore, ConjureChatStore];
  return require("initialize").useStateFromStoresArray(
    items1,
    () => {
      const obj = conjureHomeProjectOrder;
      return obj.sortConjureProjectsByActivity(
        f104312().map((id) => {
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
        }),
      );
    },
    items,
  );
}
export function useConjureSharedWithMeProjects() {
  const f104312 = () => sharedWithMeProjects.getSharedWithMeProjects();
  items = [ConjureProjectStore, ConjureChatStore];
  return f104312(504).useStateFromStoresArray(items, () => {
    const obj = conjureHomeProjectOrder;
    return obj.sortConjureProjectsByActivity(
      f104312().map((id) => {
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
      }),
    );
  }, []);
}
