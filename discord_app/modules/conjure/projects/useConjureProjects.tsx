// discord_app/modules/conjure/projects/useConjureProjects.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import _modDef3827 from "../intl/ConjureUntranslated.messages.js";
import ConjureGuildExperiment from "../experiments/ConjureGuildExperiment.tsx";
import conjureAppInServer from "conjureAppInServer.tsx";
import ConjureActivity from "ConjureActivity.tsx";
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

require = fn;
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
        projectId.guildId === nextExpiry2.entries[index].guildId &&
        projectId.guildName === nextExpiry2.entries[index].guildName &&
        projectId.notInServer === nextExpiry2.entries[index].notInServer &&
        projectId.guild === nextExpiry2.entries[index].guild,
    );
  }
  return everyResult;
}
function conjureGuildsEqual(arr, arg1) {
  closure_0 = arg1;
  return arr.length === arg1.length && arr.every((item, index) => item === closure_0[index]);
}
function collectEntries(_location) {
  _require = _location;
  function add(item10061) {
    if (!set.has(item10061.id)) {
      const result = ConjureActivity.conjureProjectGuildId(item10061);
      if (null == result) {
        set.add(item10061.id);
        let num = ConjureChatStore.getFinishedAt(item10061.id);
        const isThinkingResult = ConjureChatStore.isThinking(item10061.id);
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
        const obj5 = {
          project: item10061,
          projectId: null,
          name: null,
          guildId: null,
          guild: null,
          guildName: null,
          notInServer: null,
          activity: null,
          sortTime: null,
        };
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
        const tmpResult = ConjureActivity;
        obj5.notInServer = "not_in_server" === conjureAppInServer.readConjureAppServerPresence(item10061);
        obj5.activity = conjureActivityResult;
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
        const tmpResult3 = conjureAppInServer;
      } else {
        value = map.get(result);
        if (null == value) {
          const obj6 = { guildId: result, location: _location };
          const result1 = ConjureGuildExperiment.isConjureGuildEnabled(obj6);
          const result2 = map.set(result, result1);
          value = result1;
          const tmpResult4 = ConjureGuildExperiment;
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
  const now = Date.now();
  new Set();
  const items = [];
  let bound = null;
  const ownedProjects = ConjureProjectStore.getOwnedProjects();
  const iter = ownedProjects[Symbol.iterator]();
  while (iter !== undefined) {
    let addResult = add(iter.next());
    continue;
  }
  const values = Object.values(GuildStore.getGuilds());
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
  let obj2 = { entries: null, nextExpiry: null };
  const map = new Map();
  obj2.entries = require("ConjureActivity").sortConjureProjects(items);
  obj2.nextExpiry = bound;
  return obj2;
}
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useDoneWindowExpiry(arg0, arg1) {
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
    }
  : function useDoneWindowExpiry(arg0, arg1) {
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
    };
fn(558);
ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureProjects(arg0) {
      _require = arg0;
      const cResult = require("c").c(6);
      const tmp4 = _slicedToArray(noop.useState(0), 2);
      const first = tmp4[0];
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [
          ConjureProjectStore,
          ConjureChatStore,
          GuildStore,
          GuildChannelStore,
          UserProfileStore,
          ApplicationStore,
          tmp(1453).ApexExperimentStore,
        ];
        cResult[0] = items;
        let first1 = items;
      } else {
        first1 = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function p() {
          return collectEntries(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp13 = fn;
      } else {
        tmp13 = cResult[2];
      }
      if (cResult[3] === arg0) {
        if (cResult[4] === first) {
          let tmp14 = cResult[5];
        }
        const tmpResult = tmp(504);
        const stateFromStores = tmpResult.useStateFromStores(first1, tmp13, tmp14, conjureEntriesEqual);
        closure_15(stateFromStores.nextExpiry, tmp4[1]);
        return stateFromStores.entries;
      }
      const items1 = [arg0, first];
      cResult[3] = arg0;
      cResult[4] = first;
      cResult[5] = items1;
      tmp14 = items1;
      const obj = require("c");
    }
  : function useConjureProjects(arg0) {
      _require = arg0;
      [tmp2, tmp3] = noop.useState(0);
      const tmp = _slicedToArray(noop.useState(0), 2);
      const items = [
        ConjureProjectStore,
        ConjureChatStore,
        GuildStore,
        GuildChannelStore,
        UserProfileStore,
        ApplicationStore,
        require("ApexExperiment").ApexExperimentStore,
      ];
      const items1 = [arg0, tmp2];
      const stateFromStores = require("initialize").useStateFromStores(
        items,
        () => collectEntries(closure_0),
        items1,
        conjureEntriesEqual,
      );
      closure_15(stateFromStores.nextExpiry, tmp3);
      return stateFromStores.entries;
    };
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureEligibleGuilds(arg0) {
      _require = arg0;
      const cResult = require("c").c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore, tmp(1453).ApexExperimentStore, PermissionStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function u() {
          const values = Object.values(GuildStore.getGuilds());
          const found = values.filter((item) => closure_0(dependencyMap[19]).canStartConjureProject(item, closure_1_0));
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
    }
  : function useConjureEligibleGuilds(arg0) {
      _require = arg0;
      const items = [GuildStore, require("ApexExperiment").ApexExperimentStore, PermissionStore];
      const items1 = [arg0];
      return require("initialize").useStateFromStores(
        items,
        () => {
          const values = Object.values(GuildStore.getGuilds());
          const found = values.filter((item) => closure_0(dependencyMap[19]).canStartConjureProject(item, closure_1_0));
          return found.sort((name, name2) => {
            name = name.name;
            return name.localeCompare(name2.name);
          });
        },
        items1,
        conjureGuildsEqual,
      );
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/useConjureProjects.tsx");

export const describeConjureProjectRow = function describeConjureProjectRow(entry) {
  if (entry.notInServer) {
    const obj3 = { serverName: null, label: null };
    const intl4 = util.intl;
    obj3.serverName = intl4.string(_modDef3827["08PzLy"]);
    const intl5 = util.intl;
    const obj4 = { name: entry.name };
    obj3.label = intl5.formatToPlainString(_modDef3827.pyh2pa, obj4);
    let obj = obj3;
  } else if (null == entry.guildName) {
    const obj5 = { serverName: null, label: null };
    const intl2 = util.intl;
    obj5.serverName = intl2.string(_modDef3827["3QFps8"]);
    const intl3 = util.intl;
    const obj6 = { name: entry.name };
    obj5.label = intl3.formatToPlainString(_modDef3827["2sBOnp"], obj6);
    obj = obj5;
  } else {
    obj = { serverName: entry.guildName, label: null };
    const intl = util.intl;
    ({ name: obj2.name, guildName: obj2.server } = entry);
    obj.label = intl.formatToPlainString(_modDef3827["hd+GF1"], { name: null, server: null });
    const obj11 = { name: null, server: null };
  }
  return obj;
};
export const useConjureProjects = tmp2;
export const useConjureEligibleGuilds = tmp3;
export const useConjureForMeGuildId = ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureForMeGuildId(arg0) {
      _require = arg0;
      const cResult = require("c").c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore, SelectedGuildStore, tmp(1453).ApexExperimentStore];
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
          const found = sorted.find((item) => closure_0(dependencyMap[19]).canAccessConjure(item, closure_1_0));
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
    }
  : function useConjureForMeGuildId(arg0) {
      _require = arg0;
      const items = [GuildStore, SelectedGuildStore, require("ApexExperiment").ApexExperimentStore];
      const items1 = [arg0];
      return require("initialize").useStateFromStores(
        items,
        () => {
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
          const found = sorted.find((item) => closure_0(dependencyMap[19]).canAccessConjure(item, closure_1_0));
          if (found != null) {
            id = found.id;
          }
          if (id == null) {
            id = null;
          }
        },
        items1,
      );
    };
