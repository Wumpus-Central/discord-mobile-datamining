// === Module 16940: useVibegrationsProjects ===

// Module 16940 (useVibegrationsProjects)
import c from "c" /* 576 */;
import VibegrationsGuildExperiment from "VibegrationsGuildExperiment" /* 6748 */;
import VibegrationsActivity from "VibegrationsActivity" /* 12265 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import VibegrationsChatStore from "VibegrationsChatStore" /* 12905 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 8699 */;

const require = globalThis.__r;

require = fn;
function vibegrationsEntriesEqual(nextExpiry, nextExpiry2) {
  let everyResult = nextExpiry.nextExpiry === nextExpiry2.nextExpiry && nextExpiry.entries.length === nextExpiry2.entries.length;
  if (everyResult) {
    const entries = nextExpiry.entries;
    everyResult = entries.every((projectId, index) => null != nextExpiry2.entries[index] && projectId.projectId === nextExpiry2.entries[index].projectId && projectId.activity === nextExpiry2.entries[index].activity && projectId.name === nextExpiry2.entries[index].name && projectId.guildId === nextExpiry2.entries[index].guildId && projectId.guildName === nextExpiry2.entries[index].guildName && projectId.guild === nextExpiry2.entries[index].guild);
  }
  return everyResult;
}
function vibegrationsGuildsEqual(arr, arg1) {
  closure_0 = arg1;
  return arr.length === arg1.length && arr.every((item, index) => item === closure_0[index]);
}
function collectEntries(_location) {
  _require = _location;
  function add(item10061) {
    if (!set.has(item10061.id)) {
      const result = VibegrationsActivity.vibegrationsProjectGuildId(item10061);
      if (null == result) {
        set.add(item10061.id);
        let num = VibegrationsChatStore.getFinishedAt(item10061.id);
        const isThinkingResult = VibegrationsChatStore.isThinking(item10061.id);
        const obj4 = { thinking: isThinkingResult, finishedAt: num, now };
        const vibegrationsActivityResult = VibegrationsActivity.vibegrationsActivity(obj4);
        if ("done" === vibegrationsActivityResult) {
          if (null != num) {
            const sum = num + VibegrationsActivity.VIBEGRATIONS_DONE_WINDOW_MS;
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
        const obj5 = { project: item10061, projectId: null, name: null, guildId: null, guild: null, guildName: null, activity: null, sortTime: null };
        ({ id: obj8.projectId, name: obj8.name } = item10061);
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
        obj5.activity = vibegrationsActivityResult;
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
        obj5.sortTime = num;
        items.push(obj5);
        const tmpResult = VibegrationsActivity;
      } else {
        value = map.get(result);
        if (null == value) {
          const obj6 = { guildId: result, location: _location };
          const result1 = VibegrationsGuildExperiment.isVibegrationsGuildEnabled(obj6);
          const result2 = map.set(result, result1);
          value = result1;
          const tmpResult2 = VibegrationsGuildExperiment;
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
      const result = VibegrationsGuildExperiment.isVibegrationsGuildEnabled(obj3);
      const result1 = map.set(id, result);
      return result;
    }
  }
  dependencyMap = Date.now();
  new Map();
  new Set();
  const items = [];
  let bound = null;
  const ownedProjects = VibegrationsProjectStore.getOwnedProjects();
  const iter = ownedProjects[Symbol.iterator]();
  while (iter !== undefined) {
    let addResult = add(iter.next());
    continue;
  }
  const values = Object.values(items.getGuilds());
  for (const item10042 of values) {
    if (VibegrationsProjectStore.hasFetchedGuildProjects(item10042.id)) {
      if (isEnabled(item10042.id)) {
        let sharedProjects = VibegrationsProjectStore.getSharedProjects(item10042.id);
        for (const item10061 of sharedProjects) {
          let addResult1 = add(item10061);
          continue;
        }
      }
    }
    continue;
  }
  let obj2 = { entries: require("VibegrationsActivity").sortVibegrationsProjects(items), nextExpiry: bound };
  return obj2;
}
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
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
}) : ((arg0, arg1) => {
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
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(6);
  const tmp4 = _slicedToArray(noop.useState(0), 2);
  const first = tmp4[0];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VibegrationsProjectStore, VibegrationsChatStore, GuildStore, tmp(1440).ApexExperimentStore];
    cResult[0] = items;
    let first1 = items;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function v() {
      return collectEntries(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp10 = fn;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === arg0) {
    if (cResult[4] === first) {
      let tmp11 = cResult[5];
    }
    const tmpResult = tmp(504);
    const stateFromStores = tmpResult.useStateFromStores(first1, tmp10, tmp11, vibegrationsEntriesEqual);
    closure_10(stateFromStores.nextExpiry, tmp4[1]);
    return stateFromStores.entries;
  }
  const items1 = [arg0, first];
  cResult[3] = arg0;
  cResult[4] = first;
  cResult[5] = items1;
  tmp11 = items1;
  const obj = require("c");
}) : ((arg0) => {
  _require = arg0;
  [tmp2, tmp3] = noop.useState(0);
  const tmp = _slicedToArray(noop.useState(0), 2);
  const items = [VibegrationsProjectStore, VibegrationsChatStore, GuildStore, require("ApexExperiment").ApexExperimentStore];
  const items1 = [arg0, tmp2];
  const stateFromStores = require("initialize").useStateFromStores(items, () => collectEntries(closure_0), items1, vibegrationsEntriesEqual);
  closure_10(stateFromStores.nextExpiry, tmp3);
  return stateFromStores.entries;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsProjects.tsx");

export const useVibegrationsProjects = tmp2;
export const useVibegrationsEligibleGuilds = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, tmp(1440).ApexExperimentStore, PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      const values = Object.values(GuildStore.getGuilds());
      const found = values.filter((item) => closure_0(dependencyMap[12]).canStartVibegrationsProject(item, closure_1_0));
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
  return require("initialize").useStateFromStores(first, tmp7, tmp8, vibegrationsGuildsEqual);
}) : ((arg0) => {
  _require = arg0;
  const items = [GuildStore, require("ApexExperiment").ApexExperimentStore, PermissionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    const values = Object.values(GuildStore.getGuilds());
    const found = values.filter((item) => closure_0(dependencyMap[12]).canStartVibegrationsProject(item, closure_1_0));
    return found.sort((name, name2) => {
      name = name.name;
      return name.localeCompare(name2.name);
    });
  }, items1, vibegrationsGuildsEqual);
});