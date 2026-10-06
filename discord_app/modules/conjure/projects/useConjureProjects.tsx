// === Module 16985: useConjureProjects ===

// Module 16985 (useConjureProjects)
import react2 from "react" /* 576 */;
import ConjureUtils from "ConjureUtils" /* 6756 */;
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 6758 */;
import ConjureActivity from "ConjureActivity" /* 12280 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4705 */;
import ConjureChatStore from "ConjureChatStore" /* 12924 */;
import ConjureProjectStore from "ConjureProjectStore" /* 8734 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, map, set;

function conjureEntriesEqual(nextExpiry, nextExpiry2) {
  let everyResult = nextExpiry.nextExpiry === nextExpiry2.nextExpiry && nextExpiry.entries.length === nextExpiry2.entries.length;
  if (everyResult) {
    const entries = nextExpiry.entries;
    everyResult = entries.every((projectId, index) => null != nextExpiry2.entries[index] && projectId.projectId === nextExpiry2.entries[index].projectId && projectId.activity === nextExpiry2.entries[index].activity && projectId.name === nextExpiry2.entries[index].name && projectId.guildId === nextExpiry2.entries[index].guildId && projectId.guildName === nextExpiry2.entries[index].guildName && projectId.guild === nextExpiry2.entries[index].guild);
  }
  return everyResult;
}
function conjureGuildsEqual(arr, arg1) {
  let closure_0 = arg1;
  const tmp = arr.length === arg1.length && arr.every((item, index) => item === closure_0[index]);
  return tmp;
}
function collectEntries(_location) {
  let now;
  let obj3;
  _require = _location;
  function add(item10061) {
    let name;
    if (!set.has(item10061.id)) {
      const obj2 = ConjureActivity;
      const result = obj2.conjureProjectGuildId(item10061);
      if (null == result) {
        set.add(item10061.id);
        const isThinkingResult = ConjureChatStore.isThinking(item10061.id);
        let num = ConjureChatStore.getFinishedAt(item10061.id);
        const obj4 = { thinking: isThinkingResult, finishedAt: num, now };
        const tmpResult = ConjureActivity;
        const conjureActivityResult = tmpResult.conjureActivity(obj4);
        if ("done" === conjureActivityResult) {
          if (null != num) {
            const sum = num + ConjureActivity.CONJURE_DONE_WINDOW_MS;
            bound = sum;
            if (null != bound) {
              const _Math = Math;
              bound = Math.min(bound, sum);
            }
          }
        }
        let guild = null;
        if (null != result) {
          guild = GuildStore.getGuild(result);
        }
        if (guild == null) {
          guild = null;
        }
        const obj5 = { project: item10061, projectId: null, name: null, guildId: result, guild, guildName: name, activity: conjureActivityResult, sortTime: num };
        ({ id: obj8.projectId, name: obj8.name } = item10061);
        name = undefined;
        const push = items.push;
        if (guild != null) {
          name = guild.name;
        }
        if (name == null) {
          name = null;
        }
        if (null == num) {
          num = 0;
          if (null != item10061.updated_at) {
            const _Date = Date;
            const parsed = Date.parse(item10061.updated_at);
            const _Number = Number;
            let num2 = 0;
            if (!Number.isNaN(parsed)) {
              num2 = parsed;
            }
            num = num2;
          }
        }
        push(obj5);
      } else {
        let value = map.get(result);
        if (null == value) {
          const obj6 = { guildId: result, location: _location };
          const tmpResult2 = ConjureGuildExperiment;
          const result1 = tmpResult2.isConjureGuildEnabled(obj6);
          const result2 = map.set(result, result1);
          value = result1;
        }
      }
    }
  }
  function isEnabled(id) {
    const value = map.get(id);
    if (null != value) {
      return value;
    } else {
      const obj3 = { guildId: id, location: _location };
      const obj2 = ConjureGuildExperiment;
      const result = obj2.isConjureGuildEnabled(obj3);
      const result1 = map.set(id, result);
      return result;
    }
  }
  dependencyMap = Date.now();
  map = new Map();
  set = new Set();
  const items = [];
  let bound = null;
  const ownedProjects = ConjureProjectStore.getOwnedProjects();
  const iter = ownedProjects[Symbol.iterator]();
  while (iter !== undefined) {
    let addResult = add(iter.next());
    continue;
  }
  const values = Object.values(items.getGuilds());
  for (const item10042 of values) {
    if (ConjureProjectStore.hasFetchedGuildProjects(item10042.id)) {
      if (isEnabled(item10042.id)) {
        let sharedProjects = ConjureProjectStore.getSharedProjects(item10042.id);
        for (const item10061 of sharedProjects) {
          let addResult1 = add(item10061);
          continue;
        }
      }
    }
    continue;
  }
  let obj2 = { entries: obj3.sortConjureProjects(items), nextExpiry: bound };
  obj3 = require("ConjureActivity");
  return obj2;
}
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const obj = react2;
  const cResult = obj.c(4);
  if (cResult[0] === arg0) {
    let tmp2;
    let tmp3;
    if (cResult[1] === arg1) {
      tmp2 = cResult[2];
      tmp3 = cResult[3];
    }
    const effect = react.useEffect(tmp2, tmp3);
  }
  const fn = function a() {
    let timeout;
    if (null != timeout) {
      const _Math = Math;
      const _Date = Date;
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => closure_1_1((arg0) => arg0 + 1), Math.max(0, tmp - Date.now()));
      return () => clearTimeout(closure_0);
    }
  };
  const items = [arg0, arg1];
  cResult[0] = arg0;
  cResult[1] = arg1;
  cResult[2] = fn;
  cResult[3] = items;
  tmp3 = items;
  tmp2 = fn;
}) : ((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  const effect = react.useEffect(() => {
    let timeout;
    if (null != timeout) {
      const _Math = Math;
      const _Date = Date;
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => closure_1_1((arg0) => arg0 + 1), Math.max(0, tmp - Date.now()));
      return () => clearTimeout(closure_0);
    }
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let first1;
  let tmp11;
  let tmp6;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(6);
  [first, tmp6] = react.useState(0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore, ConjureChatStore, GuildStore, require("ApexExperiment").ApexExperimentStore];
    cResult[0] = items;
    first1 = items;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function f() {
      return collectEntries(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp11 = fn;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] === arg0) {
    let tmp12;
    if (cResult[4] === first) {
      tmp12 = cResult[5];
    }
    const tmpResult = require("get initialized");
    const stateFromStores = tmpResult.useStateFromStores(first1, tmp11, tmp12, conjureEntriesEqual);
    const entries = stateFromStores.entries;
    closure_11(stateFromStores.nextExpiry, tmp6);
    return entries;
  }
  const items1 = [arg0, first];
  cResult[3] = arg0;
  cResult[4] = first;
  cResult[5] = items1;
  tmp12 = items1;
}) : ((arg0) => {
  let closure_0;
  let tmp2;
  let tmp3;
  _require = arg0;
  [tmp2, tmp3] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  const items = [ConjureProjectStore, ConjureChatStore, GuildStore, ];
  const useStateFromStores = require("get initialized").useStateFromStores;
  require("get initialized");
  items[3] = require("ApexExperiment").ApexExperimentStore;
  const items1 = [arg0, tmp2];
  const stateFromStores = useStateFromStores(items, () => collectEntries(closure_0), items1, conjureEntriesEqual);
  const entries = stateFromStores.entries;
  closure_11(stateFromStores.nextExpiry, tmp3);
  return entries;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp7;
  let tmp8;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, require("ApexExperiment").ApexExperimentStore, PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      const values = Object.values(GuildStore.getGuilds());
      const found = values.filter((item) => {
        const obj = closure_0(dependencyMap[13]);
        return obj.canStartConjureProject(item, closure_1_0);
      });
      return found.sort((name, name2) => {
        name = name.name;
        return name.localeCompare(name2.name);
      });
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = require("get initialized");
  return tmpResult.useStateFromStores(first, tmp7, tmp8, conjureGuildsEqual);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [GuildStore, , ];
  const useStateFromStores = require("get initialized").useStateFromStores;
  require("get initialized");
  items[1] = require("ApexExperiment").ApexExperimentStore;
  items[2] = PermissionStore;
  const items1 = [arg0];
  return useStateFromStores(items, () => {
    const values = Object.values(GuildStore.getGuilds());
    const found = values.filter((item) => {
      const obj = closure_0(dependencyMap[13]);
      return obj.canStartConjureProject(item, closure_1_0);
    });
    return found.sort((name, name2) => {
      name = name.name;
      return name.localeCompare(name2.name);
    });
  }, items1, conjureGuildsEqual);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp7;
  let tmp8;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, SelectedGuildStore, require("ApexExperiment").ApexExperimentStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function a() {
      let id;
      const guild = GuildStore.getGuild(SelectedGuildStore.getGuildId());
      if (null != guild) {
        const obj2 = ConjureUtils;
        if (obj2.canAccessConjure(guild, closure_0)) {
          id = guild.id;
        }
        return id;
      }
      const values = Object.values(GuildStore.getGuilds());
      id = undefined;
      const sorted = values.sort((name, name2) => {
        name = name.name;
        return name.localeCompare(name2.name);
      });
      const found = sorted.find((item) => {
        const obj = closure_0(dependencyMap[13]);
        return obj.canAccessConjure(item, closure_1_0);
      });
      if (found != null) {
        id = found.id;
      }
      if (id == null) {
        id = null;
      }
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = require("get initialized");
  return tmpResult.useStateFromStores(first, tmp7, tmp8);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [GuildStore, SelectedGuildStore, ];
  const useStateFromStores = require("get initialized").useStateFromStores;
  require("get initialized");
  items[2] = require("ApexExperiment").ApexExperimentStore;
  const items1 = [arg0];
  return useStateFromStores(items, () => {
    let id;
    const guild = GuildStore.getGuild(SelectedGuildStore.getGuildId());
    if (null != guild) {
      const obj2 = ConjureUtils;
      if (obj2.canAccessConjure(guild, closure_0)) {
        id = guild.id;
      }
      return id;
    }
    const values = Object.values(GuildStore.getGuilds());
    id = undefined;
    const sorted = values.sort((name, name2) => {
      name = name.name;
      return name.localeCompare(name2.name);
    });
    const found = sorted.find((item) => {
      const obj = closure_0(dependencyMap[13]);
      return obj.canAccessConjure(item, closure_1_0);
    });
    if (found != null) {
      id = found.id;
    }
    if (id == null) {
      id = null;
    }
  }, items1);
});
let result = size.fileFinishedImporting("modules/conjure/projects/useConjureProjects.tsx");

export const useConjureProjects = tmp2;
export const useConjureEligibleGuilds = tmp3;
export const useConjureForMeGuildId = tmp4;