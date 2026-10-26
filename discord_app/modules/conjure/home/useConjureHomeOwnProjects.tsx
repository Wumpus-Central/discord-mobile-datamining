// === Module 17841: useConjureHomeOwnProjects ===

// Module 17841 (useConjureHomeOwnProjects)
import ConjureChatStore from "ConjureChatStore" /* 10699 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6773 */;

const require = globalThis.__r;

const require = fn;
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
      const mapped = found.map((project) => {
        const obj = { project, time: null };
        if (thinking.isThinking(project.id)) {
          if (!projectDeleting.isProjectDeleting(project.id)) {
            const _Number = Number;
          }
          obj.time = POSITIVE_INFINITY;
          return obj;
        }
        let num = thinking.getFinishedAt(project.id);
        if (num == null) {
          num = 0;
        }
        let num2 = 0;
        if (null != project.updated_at) {
          const _Date = Date;
          num2 = Date.parse(project.updated_at);
        }
        let num3 = 0;
        if (!Number.isNaN(num2)) {
          num3 = num2;
        }
        POSITIVE_INFINITY = Math.max(num, num3);
      });
      const sorted = mapped.sort((time, time2) => {
        if (time.time === time2.time) {
          const id = time.project.id;
          let num = id.localeCompare(time2.project.id);
        } else {
          num = -1;
          if (time.time < time2.time) {
            num = 1;
          }
        }
        return num;
      });
      return sorted.map((project) => project.project);
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
  let obj = require("c");
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
    const mapped = found.map((project) => {
      const obj = { project, time: null };
      if (thinking.isThinking(project.id)) {
        if (!projectDeleting.isProjectDeleting(project.id)) {
          const _Number = Number;
        }
        obj.time = POSITIVE_INFINITY;
        return obj;
      }
      let num = thinking.getFinishedAt(project.id);
      if (num == null) {
        num = 0;
      }
      let num2 = 0;
      if (null != project.updated_at) {
        const _Date = Date;
        num2 = Date.parse(project.updated_at);
      }
      let num3 = 0;
      if (!Number.isNaN(num2)) {
        num3 = num2;
      }
      POSITIVE_INFINITY = Math.max(num, num3);
    });
    const sorted = mapped.sort((time, time2) => {
      if (time.time === time2.time) {
        const id = time.project.id;
        let num = id.localeCompare(time2.project.id);
      } else {
        num = -1;
        if (time.time < time2.time) {
          num = 1;
        }
      }
      return num;
    });
    return sorted.map((project) => project.project);
  }, items1);
});