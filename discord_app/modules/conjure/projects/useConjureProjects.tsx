// discord_app/modules/conjure/projects/useConjureProjects.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import UserProfileStore from "../../user_profile/UserProfileStore.tsx";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
import ConjureChatStore from "../chat/ConjureChatStore.tsx";
import ConjureProjectStore from "ConjureProjectStore.tsx";

const require = globalThis.__r;

const require = fn;
function conjureEntriesEqual(nextExpiry, nextExpiry2) {
  let everyResult =
    nextExpiry.nextExpiry === nextExpiry2.nextExpiry && nextExpiry.entries.length === nextExpiry2.entries.length;
  if (everyResult) {
    const entries = nextExpiry.entries;
    everyResult = entries.every(
      (projectId, index) =>
        null != nextExpiry2.entries[index] &&
        projectId.projectId === nextExpiry2.entries[index].projectId &&
        projectId.activity === nextExpiry2.entries[index].activity &&
        projectId.name === nextExpiry2.entries[index].name &&
        projectId.project.updated_at === nextExpiry2.entries[index].project.updated_at &&
        projectId.guildId === nextExpiry2.entries[index].guildId &&
        projectId.guildName === nextExpiry2.entries[index].guildName &&
        projectId.owned === nextExpiry2.entries[index].owned &&
        projectId.guild === nextExpiry2.entries[index].guild,
    );
  }
  return everyResult;
}
function conjureGuildsEqual(arr, arg1) {
  closure_0 = arg1;
  return arr.length === arg1.length && arr.every((item, index) => item === closure_0[index]);
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/useConjureProjects.tsx");

export function useConjureProjects(ConjureClarificationProjectPicker) {
  let nextExpiry = ConjureClarificationProjectPicker;
  const tmp = _slicedToArray(noop.useState(0), 2);
  let items = [
    ConjureProjectStore,
    ConjureChatStore,
    GuildStore,
    GuildChannelStore,
    UserProfileStore,
    ApplicationStore,
    nextExpiry(1447).ApexExperimentStore,
  ];
  const items1 = [ConjureClarificationProjectPicker, tmp[0]];
  const stateFromStores = nextExpiry(504).useStateFromStores(
    items,
    () =>
      (function collectEntries(nextExpiry) {
        const _location = nextExpiry;
        function add(item10063, owned) {
          if (!set.has(item10063.id)) {
            const result = nextExpiry(12071).conjureProjectGuildId(item10063);
            if (null == result) {
              set.add(item10063.id);
              let num = closure_2_10.getFinishedAt(item10063.id);
              const isThinkingResult = closure_2_10.isThinking(item10063.id);
              const obj4 = { thinking: isThinkingResult, finishedAt: num, now };
              const conjureActivityResult = nextExpiry(12071).conjureActivity(obj4);
              if ("done" === conjureActivityResult) {
                if (null != num) {
                  const sum = num + nextExpiry(12071).CONJURE_DONE_WINDOW_MS;
                  bound = sum;
                  if (null != bound) {
                    const _Math = Math;
                    bound = Math.min(bound, sum);
                  }
                }
              }
              let guild = null;
              if (null != result) {
                guild = closure_2_7.getGuild(result);
              }
              if (guild == null) {
                guild = null;
              }
              const obj5 = {
                project: item10063,
                projectId: null,
                name: null,
                guildId: null,
                guild: null,
                guildName: null,
                owned: null,
                activity: null,
                sortTime: null,
              };
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
              const tmpResult = nextExpiry(12071);
            } else {
              value = map.get(result);
              if (null == value) {
                const obj6 = { guildId: result, location: _location };
                const result1 = nextExpiry(6879).isConjureGuildEnabled(obj6);
                const result2 = map.set(result, result1);
                value = result1;
                const tmpResult2 = nextExpiry(6879);
              }
            }
            const obj2 = nextExpiry(12071);
          }
        }
        function isEnabled(id) {
          value = map.get(id);
          if (null != value) {
            return value;
          } else {
            const obj3 = { guildId: id, location: _location };
            const result = nextExpiry(6879).isConjureGuildEnabled(obj3);
            const result1 = map.set(id, result);
            return result;
          }
        }
        dependencyMap = Date.now();
        new Map();
        new Set();
        const items = [];
        let bound = null;
        const ownedProjects = closure_11.getOwnedProjects();
        const iter = ownedProjects[Symbol.iterator]();
        while (iter !== undefined) {
          let addResult = add(iter.next(), true);
          continue;
        }
        const values = Object.values(closure_7.getGuilds());
        const iter2 = values[Symbol.iterator]();
        const nextResult = iter2.next();
        while (iter2 !== undefined) {
          let tmp7 = nextResult;
          if (closure_11.hasFetchedGuildProjects(nextResult.id)) {
            if (isEnabled(tmp7.id)) {
              let sharedProjects = closure_11.getSharedProjects(tmp7.id);
              for (const item10063 of sharedProjects) {
                let addResult1 = add(item10063, false);
                continue;
              }
            }
          }
          continue;
        }
        let obj2 = { entries: _location(12071).sortConjureProjects(items), nextExpiry: bound };
        return obj2;
      })(nextExpiry),
    items1,
    conjureEntriesEqual,
  );
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
}
export function useConjureEligibleGuilds(ConjureClarificationEntityPicker) {
  _require = ConjureClarificationEntityPicker;
  const items = [GuildStore, require("ApexExperiment").ApexExperimentStore, PermissionStore];
  const items1 = [ConjureClarificationEntityPicker];
  return require("initialize").useStateFromStores(
    items,
    () => {
      const values = Object.values(GuildStore.getGuilds());
      const found = values.filter((item) =>
        closure_0(dependencyMap[14]).canStartConjureProject(item, ConjureClarificationEntityPicker),
      );
      return found.sort((name, name2) => {
        name = name.name;
        return name.localeCompare(name2.name);
      });
    },
    items1,
    conjureGuildsEqual,
  );
}
export function useConjureForMeGuildId(ConjureHomeScreen) {
  _require = ConjureHomeScreen;
  const items = [GuildStore, SelectedGuildStore, require("ApexExperiment").ApexExperimentStore];
  const items1 = [ConjureHomeScreen];
  return require("initialize").useStateFromStores(
    items,
    () => {
      const guild = GuildStore.getGuild(SelectedGuildStore.getGuildId());
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
      const found = sorted.find((item) => closure_0(dependencyMap[14]).canAccessConjure(item, ConjureHomeScreen));
      if (found != null) {
        id = found.id;
      }
      if (id == null) {
        id = null;
      }
    },
    items1,
  );
}
