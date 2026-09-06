// discord_app/modules/app_database/modules/UserGuildSettings.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import DatabaseDaosDefault from "../DatabaseDaos.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

const UserGuildSettingsStore = fn(4741);
({ convertChannelOverridesToMap: c3, getGuildDefaults: closure_4 } = UserGuildSettingsStore);
let closure_5 = new LoggerDefault("ReadStates");
class UserGuildSettings {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj.actions = {
      CONNECTION_OPEN(arg0, arg1) {
        return obj.handleConnectionOpen(arg0, arg1);
      },
      USER_GUILD_SETTINGS_FULL_UPDATE(arg0, arg1) {
        return obj.handleUserGuildSettingsUpdate(arg0, arg1);
      },
    };
    return obj;
  }
}
const prototype = UserGuildSettings.prototype;
prototype["getAll"] = function getAll(arg0) {
  closure_0 = arg0;
  return (async () => {
    const _performance2 = performance;
    closure_128_0 = performance.now();
    tmp2(tmp5[3]);
    closure_128_1 = await tmp2(tmp5[3]).userGuildSettings(tmp2).getMany();
    const _performance = performance;
    closure_128_2 = performance.now();
    const _HermesInternal = HermesInternal;
    logger.log(
      "asynchronously loaded in " +
        closure_128_2 -
        closure_128_0 +
        "ms (userGuildSettings: " +
        closure_128_1.length +
        ")",
    );
    return closure_128_1;
  })();
};
prototype["resetInMemoryState"] = function resetInMemoryState() {};
prototype["handleConnectionOpen"] = function handleConnectionOpen(userGuildSettings, database) {
  if (!userGuildSettings.userGuildSettings.partial) {
    const result = DatabaseDaosDefault.userGuildSettingsTransaction(database);
    result.delete();
  }
  this.write(userGuildSettings.userGuildSettings.entries, userGuildSettings.userGuildSettings.version, database);
};
prototype["handleUserGuildSettingsUpdate"] = function handleUserGuildSettingsUpdate(userGuildSettings, arg1) {
  userGuildSettings = userGuildSettings.userGuildSettings;
  const maxResult = _modDef12.max(
    userGuildSettings.map((version) => {
      let num = version.version;
      if (num == null) {
        num = -1;
      }
      return num;
    }),
  );
  if (null != maxResult) {
    const self = this;
    this.write(userGuildSettings.userGuildSettings, maxResult, arg1);
  }
};
prototype["write"] = function write(arg0, version, database) {
  let obj = DatabaseDaosDefault;
  const result = obj.userGuildSettingsTransaction(database);
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    obj = {};
    let merged = Object.assign(React4(nextResult.guild_id));
    let merged1 = Object.assign(nextResult);
    obj.channel_overrides = React3(nextResult.channel_overrides);
    let str = nextResult.guild_id;
    let tmp9 = obj;
    if (str == null) {
      str = "dm-sentinel";
    }
    let putResult = result.put(str, tmp9);
    continue;
  }
  const result1 = DatabaseDaosDefault.nonGuildVersionsTransaction(database);
  obj = { id: "user_guild_settings_version", version };
  result1.put(obj);
};
let size = Object.create(UserGuildSettings.prototype);
let closure_129_0 = size;
size.actions = {
  CONNECTION_OPEN(arg0, arg1) {
    return obj.handleConnectionOpen(arg0, arg1);
  },
  USER_GUILD_SETTINGS_FULL_UPDATE(arg0, arg1) {
    return obj.handleUserGuildSettingsUpdate(arg0, arg1);
  },
};
size = fn(2);
let result = size.fileFinishedImporting("modules/app_database/modules/UserGuildSettings.tsx");

export default size;
