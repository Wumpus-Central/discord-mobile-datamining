// discord_app/modules/app_database/modules/UserGuildSettings.tsx
import closure_2 from "set";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import set from "timestamp";

let c3;
let c4;
({ convertChannelOverridesToMap: c3, getGuildDefaults: c4 } = updateUserGuildSettingsInternal);
let c5 = new require("items")("ReadStates");
class UserGuildSettings {
  constructor() {
    obj = Object.create(new.target.prototype);
    UserGuildSettings = obj;
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
  let closure_0 = arg0;
  return callback(function*() {
    let length = tmp5;
    let closure_0 = tmp2;
    const _performance2 = performance;
    closure_0 = performance.now();
    const obj6 = outer1_0(outer1_1[3]);
    length = yield outer1_0(outer1_1[3]).userGuildSettings(outer1_0).getMany();
    const _performance = performance;
    const _HermesInternal = HermesInternal;
    outer1_5.log("asynchronously loaded in " + closure_2 - closure_0 + "ms (userGuildSettings: " + length.length + ")");
    return length;
  })();
};
prototype["resetInMemoryState"] = function resetInMemoryState() {

};
prototype["handleConnectionOpen"] = function handleConnectionOpen(userGuildSettings, database) {
  if (!userGuildSettings.userGuildSettings.partial) {
    obj = obj(1936);
    const result = obj.userGuildSettingsTransaction(database);
    result.delete();
  }
  this.write(userGuildSettings.userGuildSettings.entries, userGuildSettings.userGuildSettings.version, database);
};
prototype["handleUserGuildSettingsUpdate"] = function handleUserGuildSettingsUpdate(userGuildSettings) {
  obj = obj(12);
  userGuildSettings = userGuildSettings.userGuildSettings;
  const maxResult = obj.max(userGuildSettings.map((version) => {
    let num = version.version;
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
  obj = obj(1936);
  const result = obj.userGuildSettingsTransaction(database);
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    obj = {};
    let tmp2 = callback3;
    let tmp3 = obj;
    let merged = Object.assign(callback3(nextResult.guild_id));
    let tmp5 = obj;
    let tmp6 = nextResult;
    let merged1 = Object.assign(nextResult);
    let tmp8 = callback2;
    obj.channel_overrides = callback2(nextResult.channel_overrides);
    let str = nextResult.guild_id;
    let tmp9 = obj;
    if (str == null) {
      str = "dm-sentinel";
    }
    let tmp10 = obj;
    let putResult = result.put(str, tmp9);
    continue;
  }
  const result1 = obj(1936).nonGuildVersionsTransaction(database);
  obj = { id: "user_guild_settings_version", version };
  result1.put(obj);
};
let set = Object.create(UserGuildSettings.prototype);
set.actions = {
  CONNECTION_OPEN(arg0, arg1) {
    return obj.handleConnectionOpen(arg0, arg1);
  },
  USER_GUILD_SETTINGS_FULL_UPDATE(arg0, arg1) {
    return obj.handleUserGuildSettingsUpdate(arg0, arg1);
  }
};
let result = set.fileFinishedImporting("modules/app_database/modules/UserGuildSettings.tsx");

export default set;