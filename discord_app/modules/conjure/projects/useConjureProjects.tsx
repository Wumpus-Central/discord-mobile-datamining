// === Module 12355: useConjureProjects ===

// Module 12355 (useConjureProjects)
import c from "c" /* 576 */;
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 6843 */;
import ConjureActivity from "ConjureActivity" /* 11786 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2042 */;
import UserProfileStore from "UserProfileStore" /* 7738 */;
import GuildChannelStore from "GuildChannelStore" /* 4934 */;
import GuildStore from "GuildStore" /* 4878 */;
import PermissionStore from "PermissionStore" /* 4936 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5035 */;
import ConjureChatStore from "ConjureChatStore" /* 10734 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6808 */;

const require = globalThis.__r;

require = fn;
function conjureEntriesEqual(nextExpiry, nextExpiry2) {
  let everyResult = nextExpiry.nextExpiry === nextExpiry2.nextExpiry && nextExpiry.entries.length === nextExpiry2.entries.length;
  if (everyResult) {
    const entries = nextExpiry.entries;
    everyResult = entries.every((projectId, index) => null != nextExpiry2.entries[index] && projectId.projectId === nextExpiry2.entries[index].projectId && projectId.activity === nextExpiry2.entries[index].activity && projectId.name === nextExpiry2.entries[index].name && projectId.project.updated_at === nextExpiry2.entries[index].project.updated_at && projectId.guildId === nextExpiry2.entries[index].guildId && projectId.guildName === nextExpiry2.entries[index].guildName && projectId.owned === nextExpiry2.entries[index].owned && projectId.guild === nextExpiry2.entries[index].guild);
  }
  return everyResult;
}
function conjureGuildsEqual(arr, arg1) {
  closure_0 = arg1;
  return arr.length === arg1.length && arr.every((item, index) => item === closure_0[index]);
}
function collectEntries(_location) {
  _require = _location;
  function add(item10063, owned) {
    if (!set.has(item10063.id)) {
      const result = ConjureActivity.conjureProjectGuildId(item10063);
      if (null == result) {
        set.add(item10063.id);
        let num = ConjureChatStore.getFinishedAt(item10063.id);
        const isThinkingResult = ConjureChatStore.isThinking(item10063.id);
        const obj4 = { thinking: isThinkingResult, finishedAt: num, now };
        const conjureActivityResult = ConjureActivity.conjureActivity(obj4);
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
        guild = null;
        if (null != result) {
          guild = GuildStore.getGuild(result);
        }
        if (guild == null) {
          guild = null;
        }
        const obj5 = { project: item10063, projectId: null, name: null, guildId: null, guild: null, guildName: null, owned: null, activity: null, sortTime: null };
        ({ id: obj8.projectId, name: obj8.name } = item10063);
        obj5.guildId = result;
        obj5.guild = guild;
        let name;
        if (guild != null) {
          name = guild.name;
        }
        if (name == null) {
          name = null;
        }
        obj5.guildName = name;
        obj5.owned = owned;
        obj5.activity = conjureActivityResult;
        if (null == num) {
          num = 0;
          if (null != item10063.updated_at) {
            const _Date = Date;
            const parsed = Date.parse(item10063.updated_at);
            const _Number = Number;
            let num2 = 0;
            if (!Number.isNaN(parsed)) {
              num2 = parsed;
            }
            num = num2;
          }
        }
        obj5.sortTime = num;
        items.push(obj5);
        const tmpResult = ConjureActivity;
      } else {
        value = map.get(result);
        if (null == value) {
          const obj6 = { guildId: result, location: _location };
          const result1 = ConjureGuildExperiment.isConjureGuildEnabled(obj6);
          const result2 = map.set(result, result1);
          value = result1;
          const tmpResult2 = ConjureGuildExperiment;
        }
      }
    }
  }
  function isEnabled(id) {
    value = map.get(id);
    if (null != value) {
      return value;
    } else {
      const obj3 = { guildId: id, location: _location };
      const result = ConjureGuildExperiment.isConjureGuildEnabled(obj3);
      const result1 = map.set(id, result);
      return result;
    }
  }
  dependencyMap = Date.now();
  new Map();
  new Set();
  const items = [];
  let bound = null;
  const ownedProjects = ConjureProjectStore.getOwnedProjects();
  const iter = ownedProjects[Symbol.iterator]();
  while (iter !== undefined) {
    let addResult = add(iter.next(), true);
    continue;
  }
  const values = Object.values(GuildStore.getGuilds());
  const iter2 = values[Symbol.iterator]();
  const nextResult = iter2.next();
  while (iter2 !== undefined) {
    let tmp7 = nextResult;
    if (ConjureProjectStore.hasFetchedGuildProjects(nextResult.id)) {
      if (isEnabled(tmp7.id)) {
        let sharedProjects = ConjureProjectStore.getSharedProjects(tmp7.id);
        for (const item10063 of sharedProjects) {
          let addResult1 = add(item10063, false);
          continue;
        }
      }
    }
    continue;
  }
  let obj2 = { entries: require("ConjureActivity").sortConjureProjects(items), nextExpiry: bound };
  return obj2;
}
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDoneWindowExpiry(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const cResult = c.c(4);
  if (cResult[0] === arg0) {
    if (cResult[1] === arg1) {
      let tmp2 = cResult[2];
      let tmp3 = cResult[3];
    }
    const effect = noop.useEffect(tmp2, tmp3);
  }
  const fn = function o() {
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
}) : (function useDoneWindowExpiry(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const items = [arg0, arg1];
  const effect = noop.useEffect(() => {
    if (null != timeout) {
      const _Math = Math;
      const _Date = Date;
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => closure_1_1((arg0) => arg0 + 1), Math.max(0, tmp - Date.now()));
      return () => clearTimeout(closure_0);
    }
  }, items);
});
fn(558);
ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureProjects(arg0) {
  _require = arg0;
  const cResult = require("c").c(6);
  const tmp4 = _slicedToArray(noop.useState(0), 2);
  const first = tmp4[0];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore, ConjureChatStore, GuildStore, GuildChannelStore, UserProfileStore, ApplicationStore, tmp(1452).ApexExperimentStore];
    cResult[0] = items;
    let first1 = items;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class E {
      constructor() {
        return collectEntries(closure_0);
      }
    }
    cResult[1] = arg0;
    cResult[2] = E;
  } else {
    class E {
      constructor() {
        return collectEntries(closure_0);
      }
    }
  }
  if (cResult[3] === arg0) {
    class E {
      constructor() {
        return collectEntries(closure_0);
      }
    }
    const tmpResult = tmp(504);
    const stateFromStores = tmpResult.useStateFromStores(first1, E, tmp14, conjureEntriesEqual);
    closure_14(stateFromStores.nextExpiry, tmp4[1]);
    return stateFromStores.entries;
  }
  const items1 = [arg0, first];
  cResult[3] = arg0;
  cResult[4] = first;
  cResult[5] = items1;
  const obj = require("c");
}) : (function useConjureProjects(arg0) {
  _require = arg0;
  [tmp2, tmp3] = noop.useState(0);
  const tmp = _slicedToArray(noop.useState(0), 2);
  const items = [ConjureProjectStore, ConjureChatStore, GuildStore, GuildChannelStore, UserProfileStore, ApplicationStore, require("ApexExperiment").ApexExperimentStore];
  const items1 = [arg0, tmp2];
  const stateFromStores = require("initialize").useStateFromStores(items, () => collectEntries(closure_0), items1, conjureEntriesEqual);
  closure_14(stateFromStores.nextExpiry, tmp3);
  return stateFromStores.entries;
});
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureEligibleGuilds(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, tmp(1452).ApexExperimentStore, PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      const values = Object.values(GuildStore.getGuilds());
      const found = values.filter((item) => closure_0(dependencyMap[16]).canStartConjureProject(item, closure_1_0));
      return found.sort((name, name2) => {
        name = name.name;
        return name.localeCompare(name2.name);
      });
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
  return require("initialize").useStateFromStores(first, tmp7, tmp8, conjureGuildsEqual);
}) : (function useConjureEligibleGuilds(arg0) {
  _require = arg0;
  const items = [GuildStore, require("ApexExperiment").ApexExperimentStore, PermissionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    const values = Object.values(GuildStore.getGuilds());
    const found = values.filter((item) => closure_0(dependencyMap[16]).canStartConjureProject(item, closure_1_0));
    return found.sort((name, name2) => {
      name = name.name;
      return name.localeCompare(name2.name);
    });
  }, items1, conjureGuildsEqual);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/useConjureProjects.tsx");

export const useConjureProjects = tmp2;
export const useConjureEligibleGuilds = tmp3;
export const useConjureForMeGuildId = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureForMeGuildId(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, SelectedGuildStore, tmp(1452).ApexExperimentStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      guild = GuildStore.getGuild(SelectedGuildStore.getGuildId());
      if (null != guild) {
        if (obj2.canAccessConjure(guild, closure_0)) {
          let id = guild.id;
        }
        return id;
      }
      const values = Object.values(GuildStore.getGuilds());
      id = undefined;
      const sorted = values.sort((name, name2) => {
        name = name.name;
        return name.localeCompare(name2.name);
      });
      const found = sorted.find((item) => closure_0(dependencyMap[16]).canAccessConjure(item, closure_1_0));
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
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7, tmp8);
}) : (function useConjureForMeGuildId(arg0) {
  _require = arg0;
  const items = [GuildStore, SelectedGuildStore, require("ApexExperiment").ApexExperimentStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    guild = GuildStore.getGuild(SelectedGuildStore.getGuildId());
    if (null != guild) {
      if (obj2.canAccessConjure(guild, closure_0)) {
        let id = guild.id;
      }
      return id;
    }
    const values = Object.values(GuildStore.getGuilds());
    id = undefined;
    const sorted = values.sort((name, name2) => {
      name = name.name;
      return name.localeCompare(name2.name);
    });
    const found = sorted.find((item) => closure_0(dependencyMap[16]).canAccessConjure(item, closure_1_0));
    if (found != null) {
      id = found.id;
    }
    if (id == null) {
      id = null;
    }
  }, items1);
});