// discord_app/modules/application_commands/ApplicationCommandFrecencyStore.tsx
import applyDefault from "../../../_runtime/00012_apply.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import DEFAULT_FRECENCYDefault from "../../lib/Frecency.tsx";
import handleConnectionClosedOrResumed from "../user_settings/UserSettingsProtoStore.tsx";
import TRUE_OPTION_NAME from "ApplicationCommandConstants.tsx";
import { UserSettingsTypes } from "../user_settings/UserSettingsConstants.tsx";

function handleUserSettingsProtoStoreChange() {
  const applicationCommandFrecency = obj.frecencyWithoutFetchingLatest.applicationCommandFrecency;
  let applicationCommands;
  if (applicationCommandFrecency != null) {
    applicationCommands = applicationCommandFrecency.applicationCommands;
  }
  if (applicationCommands == null) {
    applicationCommands = {};
  }
  closure_7.overwriteHistory(applyDefault.mapValues(applicationCommands, (recentUses) => {
    const obj = {};
    const merged = Object.assign(recentUses);
    recentUses = recentUses.recentUses;
    const mapped = recentUses.map(Number);
    obj.recentUses = mapped.filter((item, index) => item > 0);
    return obj;
  }), closure_6.pendingUsages);
}
({ DISCOVERY_COMMAND_FRECENCY_GATEWAY_LIMIT: c3, SUB_COMMAND_KEY_SEPARATOR: c4 } = TRUE_OPTION_NAME);
let closure_6 = { pendingUsages: [] };
let obj = {
  computeBonus() {
    return 1;
  },
  lookupKey(arg0) {
    return arg0;
  },
  afterCompute() {

  },
  numFrequentlyItems: require("ApplicationTypes").FREQUENCY_ITEM_LIMIT
};
let closure_7 = new DEFAULT_FRECENCYDefault(obj);
const PersistedStore = initializeDefault.PersistedStore;
class ApplicationCommandFrecencyStore extends PersistedStore {
}
const prototype = ApplicationCommandFrecencyStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (null != arg0) {
    closure_6 = arg0;
  }
  const items = [closure_2];
  this.syncWith(items, handleUserSettingsProtoStoreChange);
};
prototype["getState"] = function getState() {
  return closure_6;
};
prototype["hasPendingUsage"] = function hasPendingUsage() {
  return closure_6.pendingUsages.length > 0;
};
prototype["getCommandFrecencyWithoutLoadingLatest"] = function getCommandFrecencyWithoutLoadingLatest() {
  return closure_7;
};
prototype["getScoreWithoutLoadingLatest"] = function getScoreWithoutLoadingLatest(guild, id) {
  if (Number(id.id) < 0) {
    id = id.id;
  } else {
    guild = undefined;
    if (guild != null) {
      guild = guild.guild;
    }
    if (null != guild) {
      if (null != id.guildId) {
        const _HermesInternal = HermesInternal;
        id = "" + id.id + ":" + guild.guild.id;
      }
    }
    id = id.id;
  }
  let num = closure_7.getScore(id);
  if (num == null) {
    num = 0;
  }
  return num;
};
prototype["getTopCommandsWithoutLoadingLatest"] = function getTopCommandsWithoutLoadingLatest() {
  return closure_7.frequently;
};
ApplicationCommandFrecencyStore.displayName = "ApplicationCommandFrecencyStore";
ApplicationCommandFrecencyStore.persistKey = "ApplicationCommandFrecencyV2";
obj = {
  APPLICATION_COMMAND_USED: function handleApplicationCommandUsed(arg0) {
    ({ command, context } = arg0);
    if (Number(command.id) < 0) {
      let id = command.id;
    } else {
      let guild;
      if (context != null) {
        guild = context.guild;
      }
      if (null != guild) {
        if (null != command.guildId) {
          const _HermesInternal = HermesInternal;
          id = "" + command.id + ":" + context.guild.id;
        }
      }
      id = command.id;
    }
    const pendingUsages = closure_6.pendingUsages;
    pendingUsages.push({ key: id, timestamp: Date.now() });
    closure_7.track(id);
    closure_7.compute();
  },
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate(settings) {
    if (settings.settings.type === UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
      if (settings.wasSaved) {
        closure_6.pendingUsages = [];
      }
    }
    return false;
  }
};
const applicationCommandFrecencyStore = new ApplicationCommandFrecencyStore(dispatcherDefault, obj);
let tmp3 = new DEFAULT_FRECENCYDefault(obj);
const result = require("obj132").fileFinishedImporting("modules/application_commands/ApplicationCommandFrecencyStore.tsx");

export default applicationCommandFrecencyStore;
export const getTopRealCommands = function getTopRealCommands(arg0) {
  const set = new Set();
  const iter = arg0[Symbol.iterator]();
  while (iter !== undefined) {
    let first = str.split(closure_4)[0];
    let _Number = Number;
    let tmp3 = first;
    if (Number(first) > 0) {
      let addResult = set.add(tmp3);
    }
    if (set.size >= closure_3) {
      iter.return();
      break;
    }
    let items = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(set, 0);
    return items;
  }
  str = iter.next();
};
export const getFilteredTopCommands = function getFilteredTopCommands(arr) {
  closure_0 = arg1;
  const found = arr.filter((item, index) => {
    const hasItem = item.includes(":");
    let tmp2 = !hasItem;
    if (hasItem) {
      let guild;
      if (closure_0 != null) {
        guild = closure_0.guild;
      }
      let tmp6 = null != guild;
      if (tmp6) {
        tmp6 = closure_0.guild.id === item.split(":")[1];
      }
      tmp2 = tmp6;
    }
    return tmp2;
  });
  return found.map((item, index) => item.split(":")[0]);
};