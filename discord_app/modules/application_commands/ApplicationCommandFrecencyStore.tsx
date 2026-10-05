// discord_app/modules/application_commands/ApplicationCommandFrecencyStore.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import UserSettingsConstants from "../user_settings/UserSettingsConstants.tsx";
import ApplicationConstants from "../applications/ApplicationConstants.tsx";
import FrecencyDefault from "../../lib/Frecency.tsx";
import UserSettingsProtoStore from "../user_settings/UserSettingsProtoStore.tsx";
import ApplicationCommandConstants from "ApplicationCommandConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_6, recentUses, set;

let c3;
let closure_4;
function handleUserSettingsProtoStoreChange() {
  const applicationCommandFrecency = UserSettingsProtoStore.frecencyWithoutFetchingLatest.applicationCommandFrecency;
  let applicationCommands;
  if (applicationCommandFrecency != null) {
    applicationCommands = applicationCommandFrecency.applicationCommands;
  }
  if (applicationCommands == null) {
    applicationCommands = {};
  }
  const overwriteHistory = closure_7.overwriteHistory;
  const obj2 = _modDef12;
  overwriteHistory(
    obj2.mapValues(applicationCommands, (recentUses) => {
      let mapped;
      const obj = { recentUses: mapped.filter((item) => item > 0) };
      const merged = Object.assign(recentUses);
      recentUses = recentUses.recentUses;
      mapped = recentUses.map(Number);
      return obj;
    }),
    closure_6.pendingUsages,
  );
}
({ DISCOVERY_COMMAND_FRECENCY_GATEWAY_LIMIT: c3, SUB_COMMAND_KEY_SEPARATOR: closure_4 } = ApplicationCommandConstants);
const FREQUENCY_ITEM_LIMIT = ApplicationConstants.FREQUENCY_ITEM_LIMIT;
const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
const metroRequire = { pendingUsages: [] };
let obj = {
  computeBonus() {
    return 1;
  },
  lookupKey(arg0) {
    return arg0;
  },
  afterCompute() {},
  numFrequentlyItems: FREQUENCY_ITEM_LIMIT,
};
let tmp3 = new FrecencyDefault(obj);
const metroImportDefault = tmp3;
const PersistedStore = get_initializedDefault.PersistedStore;
class ApplicationCommandFrecencyStore extends PersistedStore {
  initialize(arg0) {
    if (null != arg0) {
      closure_6 = arg0;
    }
    const items = [UserSettingsProtoStore];
    this.syncWith(items, handleUserSettingsProtoStoreChange);
  }
  getState() {
    return closure_6;
  }
  hasPendingUsage() {
    return closure_6.pendingUsages.length > 0;
  }
  getCommandFrecencyWithoutLoadingLatest() {
    return closure_7;
  }
  getScoreWithoutLoadingLatest(guild, id) {
    const getScore = closure_7.getScore;
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
    let num = getScore(id);
    if (num == null) {
      num = 0;
    }
    return num;
  }
  getTopCommandsWithoutLoadingLatest() {
    return closure_7.frequently;
  }
}
const prototype = ApplicationCommandFrecencyStore.prototype;
ApplicationCommandFrecencyStore.displayName = "ApplicationCommandFrecencyStore";
ApplicationCommandFrecencyStore.persistKey = "ApplicationCommandFrecencyV2";
let obj2 = {
  APPLICATION_COMMAND_USED: function handleApplicationCommandUsed(arg0) {
    let command;
    let context;
    let id;
    ({ command, context } = arg0);
    if (Number(command.id) < 0) {
      id = command.id;
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
    const obj = { key: id, timestamp: Date.now() };
    pendingUsages.push(obj);
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
  },
};
const applicationCommandFrecencyStore = new ApplicationCommandFrecencyStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/application_commands/ApplicationCommandFrecencyStore.tsx");

export default applicationCommandFrecencyStore;
export const getTopRealCommands = function getTopRealCommands(arg0) {
  set = new Set();
  const iter = arg0[Symbol.iterator]();
  const str = iter.next();
  while (iter !== undefined) {
    let first = str.split(React3)[0];
    let _Number = Number;
    let tmp3 = first;
    if (Number(first) > 0) {
      let addResult = set.add(tmp3);
    }
    if (set.size >= _false) {
      iter.return();
      break;
    }
    let items = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(items, set, 0);
    return items;
  }
};
export const getFilteredTopCommands = function getFilteredTopCommands(arr, arg1) {
  let closure_0 = arg1;
  const found = arr.filter((arr) => {
    const hasItem = arr.includes(":");
    let tmp2 = !hasItem;
    if (hasItem) {
      let guild;
      if (closure_0 != null) {
        guild = closure_0.guild;
      }
      tmp2 = null != guild && closure_0.guild.id === arr.split(":")[1];
      const tmp6 = null != guild && closure_0.guild.id === arr.split(":")[1];
    }
    return tmp2;
  });
  return found.map((item) => item.split(":")[0]);
};
