// === Module 14395: useConjureHomeOwnProjects ===

// Module 14395 (useConjureHomeOwnProjects)
import conjureHomeProjectOrder from "conjureHomeProjectOrder" /* 14396 */;
import ConjureChatStore from "ConjureChatStore" /* 10734 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6808 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/home/useConjureHomeOwnProjects.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureHomeOwnProjects(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ConjureProjectStore, ConjureChatStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      if (null != closure_0) {
        const items = [];
        HermesBuiltin.arraySpread(ConjureProjectStore.getSharedProjects(tmp), HermesBuiltin.arraySpread(ConjureProjectStore.getOwnedProjects(), 0));
        let found = items.filter((guild_id) => guild_id.guild_id === closure_1_0 || guild_id.preview_guild_id === tmp);
        const arraySpreadResult = HermesBuiltin.arraySpread(ConjureProjectStore.getOwnedProjects(), 0);
      } else {
        found = ConjureProjectStore.getOwnedProjects();
      }
      return conjureHomeProjectOrder.sortConjureProjectsByActivity(found.map((id) => {
        const findOpenTurnResult = closure_1_0(dependencyMap[5]).findOpenTurn(messages.getMessages(id.id));
        const obj3 = { project: id, turnStartedAt: null, finishedAt: null };
        let conjureTurnStartedAtResult = null;
        if (null != findOpenTurnResult) {
          conjureTurnStartedAtResult = closure_1_0(dependencyMap[6]).conjureTurnStartedAt(findOpenTurnResult);
          const tmpResult = closure_1_0(dependencyMap[6]);
        }
        obj3.turnStartedAt = conjureTurnStartedAtResult;
        obj3.finishedAt = messages.getFinishedAt(id.id);
        return obj3;
      }));
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStoresArray(first, tmp7, tmp8);
}) : (function useConjureHomeOwnProjects(arg0) {
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
      const findOpenTurnResult = closure_1_0(dependencyMap[5]).findOpenTurn(messages.getMessages(id.id));
      const obj3 = { project: id, turnStartedAt: null, finishedAt: null };
      let conjureTurnStartedAtResult = null;
      if (null != findOpenTurnResult) {
        conjureTurnStartedAtResult = closure_1_0(dependencyMap[6]).conjureTurnStartedAt(findOpenTurnResult);
        const tmpResult = closure_1_0(dependencyMap[6]);
      }
      obj3.turnStartedAt = conjureTurnStartedAtResult;
      obj3.finishedAt = messages.getFinishedAt(id.id);
      return obj3;
    }));
  }, items1);
});