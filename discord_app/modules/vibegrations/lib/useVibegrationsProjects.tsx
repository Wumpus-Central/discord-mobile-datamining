// === Module 16852: useVibegrationsProjects ===

// Module 16852 (useVibegrationsProjects)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2066 */;
import PermissionStore from "PermissionStore" /* 4498 */;
import VibegrationsChatStore from "VibegrationsChatStore" /* 12852 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 8686 */;

const require = globalThis.__r;

const require = fn;
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsProjects.tsx");

export const useVibegrationsProjects = function useVibegrationsProjects(VibegrationsProjectsSheet) {
  let nextExpiry = VibegrationsProjectsSheet;
  const tmp = _slicedToArray(noop.useState(0), 2);
  let items = [VibegrationsProjectStore, VibegrationsChatStore, GuildStore, nextExpiry(1435).ApexExperimentStore];
  const items1 = [VibegrationsProjectsSheet, tmp[0]];
  const stateFromStores = nextExpiry(504).useStateFromStores(items, () => (function collectEntries(nextExpiry) {
    const _location = nextExpiry;
    function add(item10061) {
      if (!set.has(item10061.id)) {
        const result = nextExpiry(12308).vibegrationsProjectGuildId(item10061);
        if (null == result) {
          set.add(item10061.id);
          let num = closure_2_6.getFinishedAt(item10061.id);
          const isThinkingResult = closure_2_6.isThinking(item10061.id);
          const obj4 = { thinking: isThinkingResult, finishedAt: num, now };
          const vibegrationsActivityResult = nextExpiry(12308).vibegrationsActivity(obj4);
          if ("done" === vibegrationsActivityResult) {
            if (null != num) {
              const sum = num + nextExpiry(12308).VIBEGRATIONS_DONE_WINDOW_MS;
              bound = sum;
              if (null != bound) {
                const _Math = Math;
                bound = Math.min(bound, sum);
              }
            }
          }
          guild = null;
          if (null != result) {
            guild = guild.getGuild(result);
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
          const tmpResult = nextExpiry(12308);
        } else {
          value = map.get(result);
          if (null == value) {
            const obj6 = { guildId: result, location: _location };
            const result1 = nextExpiry(5556).isVibegrationsGuildEnabled(obj6);
            const result2 = map.set(result, result1);
            value = result1;
            const tmpResult2 = nextExpiry(5556);
          }
        }
        const obj2 = nextExpiry(12308);
      }
    }
    function isEnabled(id) {
      value = map.get(id);
      if (null != value) {
        return value;
      } else {
        const obj3 = { guildId: id, location: _location };
        const result = nextExpiry(5556).isVibegrationsGuildEnabled(obj3);
        const result1 = map.set(id, result);
        return result;
      }
    }
    dependencyMap = Date.now();
    new Map();
    new Set();
    const items = [];
    let bound = null;
    const ownedProjects = closure_7.getOwnedProjects();
    const iter = ownedProjects[Symbol.iterator]();
    while (iter !== undefined) {
      let addResult = add(iter.next());
      continue;
    }
    const values = Object.values(items.getGuilds());
    for (const item10042 of values) {
      if (closure_7.hasFetchedGuildProjects(item10042.id)) {
        if (isEnabled(item10042.id)) {
          let sharedProjects = closure_7.getSharedProjects(item10042.id);
          for (const item10061 of sharedProjects) {
            let addResult1 = add(item10061);
            continue;
          }
        }
      }
      continue;
    }
    let obj2 = { entries: _location(12308).sortVibegrationsProjects(items), nextExpiry: bound };
    return obj2;
  })(nextExpiry), items1, vibegrationsEntriesEqual);
  nextExpiry = stateFromStores.nextExpiry;
  dependencyMap = tmp2;
  const items2 = [nextExpiry, tmp[1]];
  const effect = noop.useEffect(() => {
    if (null != timeout) {
      const _Math = Math;
      const _Date = Date;
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => closure_1_1((arg0) => arg0 + 1), Math.max(0, tmp - Date.now()));
      return () => clearTimeout(closure_0);
    }
  }, items2);
  return stateFromStores.entries;
};
export const useVibegrationsEligibleGuilds = function useVibegrationsEligibleGuilds(VibegrationsProjectsSheet) {
  _require = VibegrationsProjectsSheet;
  const items = [GuildStore, require("ApexExperiment").ApexExperimentStore, PermissionStore];
  const items1 = [VibegrationsProjectsSheet];
  return require("initialize").useStateFromStores(items, () => {
    const values = Object.values(GuildStore.getGuilds());
    const found = values.filter((item) => closure_0(dependencyMap[10]).canStartVibegrationsProject(item, VibegrationsProjectsSheet));
    return found.sort((name, name2) => {
      name = name.name;
      return name.localeCompare(name2.name);
    });
  }, items1, vibegrationsGuildsEqual);
};