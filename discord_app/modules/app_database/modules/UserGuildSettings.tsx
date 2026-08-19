// === Module 5085: getAll ===

// Module 5085 (getAll)
import timestampDefault from "timestamp" /* 3 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal" /* 5043 */;
import obj132 from "obj132" /* 2 */;

let obj132 = importDefault;
({ convertChannelOverridesToMap: c3, getGuildDefaults: c4 } = updateUserGuildSettingsInternal);
let closure_5 = new timestampDefault("ReadStates");
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
          }
    };
    return obj;
  }
}
const prototype = UserGuildSettings.prototype;
prototype["getAll"] = function getAll(arg0) {
  closure_0 = arg0;
  return callback(function*() {
    const _performance2 = performance;
    closure_0 = performance.now();
    const obj6 = closure_1_0(closure_1_1[3]);
    const length = yield closure_1_0(closure_1_1[3]).userGuildSettings(closure_1_0).getMany();
    const _performance = performance;
    const _HermesInternal = HermesInternal;
    closure_1_5.log("asynchronously loaded in " + closure_2 - closure_0 + "ms (userGuildSettings: " + length.length + ")");
    return length;
  })();
};
prototype["resetInMemoryState"] = function resetInMemoryState() {

};
prototype["handleConnectionOpen"] = function handleConnectionOpen(userGuildSettings, database) {
  if (!userGuildSettings.userGuildSettings.partial) {
    const result = obj132(1955).userGuildSettingsTransaction(database);
    result.delete();
    const obj = obj132(1955);
  }
  this.write(userGuildSettings.userGuildSettings.entries, userGuildSettings.userGuildSettings.version, database);
};
prototype["handleUserGuildSettingsUpdate"] = function handleUserGuildSettingsUpdate(userGuildSettings) {
  userGuildSettings = userGuildSettings.userGuildSettings;
  const maxResult = obj132(12).max(userGuildSettings.map((item, index) => {
    let num = item.version;
    if (num == null) {
      num = -1;
    }
    return num;
  }));
  if (null != maxResult) {
    const self = this;
    this.write(userGuildSettings.userGuildSettings, maxResult, arg1);
  }
};
prototype["write"] = function write(arg0, version, database) {
  let obj = obj132(1955);
  const result = obj.userGuildSettingsTransaction(database);
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    obj = {};
    let merged = Object.assign(callback3(nextResult.guild_id));
    let merged1 = Object.assign(nextResult);
    obj.channel_overrides = callback2(nextResult.channel_overrides);
    let str = nextResult.guild_id;
    let tmp9 = obj;
    if (str == null) {
      str = "dm-sentinel";
    }
    let putResult = result.put(str, tmp9);
    continue;
  }
  const result1 = obj132(1955).nonGuildVersionsTransaction(database);
  obj = { id: "user_guild_settings_version", version };
  result1.put(obj);
  const obj4 = obj132(1955);
};
obj132 = Object.create(UserGuildSettings.prototype);
obj132.actions = {
  CONNECTION_OPEN(arg0, arg1) {
    return obj.handleConnectionOpen(arg0, arg1);
  },
  USER_GUILD_SETTINGS_FULL_UPDATE(arg0, arg1) {
    return obj.handleUserGuildSettingsUpdate(arg0, arg1);
  }
};
let result = obj132.fileFinishedImporting("modules/app_database/modules/UserGuildSettings.tsx");

export default obj132;