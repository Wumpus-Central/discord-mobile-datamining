// === Module 14662: useConjureHomeOwnProjects ===

// Module 14662 (useConjureHomeOwnProjects)
import conjureHomeProjectOrder from "conjureHomeProjectOrder" /* 14663 */;
import ConjureChatStore from "ConjureChatStore" /* 10831 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/home/useConjureHomeOwnProjects.tsx");

export default function useConjureHomeOwnProjects(arg0) {
  _require = arg0;
  let items = [ConjureProjectStore, ConjureChatStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresArray(items, () => {
    if (null != closure_0) {
      const items = [];
      HermesBuiltin.arraySpread(ConjureProjectStore.getSharedProjects(tmp), HermesBuiltin.arraySpread(ConjureProjectStore.getOwnedProjects(), 0));
      let found = items.filter((guild_id) => guild_id.guild_id === closure_1_0 || guild_id.preview_guild_id === tmp);
      const arraySpreadResult = HermesBuiltin.arraySpread(ConjureProjectStore.getOwnedProjects(), 0);
    } else {
      found = ConjureProjectStore.getOwnedProjects();
    }
    return conjureHomeProjectOrder.sortConjureProjectsByActivity(found.map((id) => {
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
  }, items1);
};