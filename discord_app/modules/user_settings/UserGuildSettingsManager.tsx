// discord_app/modules/user_settings/UserGuildSettingsManager.tsx
import setDefault from "set" /* 687 */;
import initializeDefault from "initialize" /* 5038 */;
import closure_2 from "asyncGeneratorStep" /* 5 */;
import closure_3 from "incrementVersion" /* 5270 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import ME from "ME" /* 676 */;

const require = arg1;
function handleConnectionOpen() {
  const obj = {};
  const merged = Object.assign(store.getCollapsedCategories());
}
function scheduleSync() {
  clearTimeout(timeout);
  timeout = setTimeout(() => callback({}), closure_10);
}
function saveUserGuildSettings(id, muteSettings) {
  const self = this;
  const apply = _saveUserGuildSettings.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _saveUserGuildSettings() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c3 = 0;
    return (function*(arg0, arg1) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let tmp7 = null;
              if (null != callback) {
                if (tmp19 !== closure_1_7) {
                  if (tmp7 != tmp20) {
                    closure_2 = tmp19;
                    if (tmp19 == tmp7) {
                      closure_2 = tmp5;
                    }
                    obj1 = {};
                    tmp7 = closure_2;
                    obj1[closure_2] = tmp20;
                    let obj2 = obj1;
                  } else {
                    obj2 = {};
                  }
                  closure_1_15(obj2);
                  c4 = 2;
                  c3 = 1;
                  const tmp6 = closure_1_15;
                }
                tmp5 = closure_1_7;
              }
              const HTTP = callback(table[5]).HTTP;
              const obj3 = { url: null, body: null, rejectWithError: false };
              obj3[0] = closure_1_5.USER_GUILD_SETTINGS(closure_1_7);
              obj3[1] = table;
              c4 = 1;
              c3 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.patch(obj3);
              return obj4;
            }
          } else {
            if (1 === tmp4) {
              if (arg0 === 1) {
                c3 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj5 = { value: null, done: true };
                obj5[0] = arg1;
                return obj5;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            c3 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp13) {
          c3 = tmp;
          throw tmp13;
        }
      }
    })();
  });
  closure_14 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function saveUserGuildSettingsBulk(arg0) {
  const self = this;
  const apply = _saveUserGuildSettingsBulk.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _saveUserGuildSettingsBulk() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c7 = 0;
    c6 = 0;
    return (function*(arg0, body) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c6 = 3;
              throw body;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              const _clearTimeout = clearTimeout;
              clearTimeout(closure_1_9);
              const _Object = Object;
              const tmp34 = 0 !== Object.keys(callback).length;
              let collapsedCategories = closure_1_3.getCollapsedCategories();
              const tmp37 = (function getChangedCategories() {
                const obj = {};
                collapsedCategories = collapsedCategories.getCollapsedCategories();
                for (const key10007 in collapsedCategories) {
                  let tmp2 = key10007;
                  let tmp3 = dependencyMap;
                  if (collapsedCategories[key10007] === dependencyMap[key10007]) {
                    continue;
                  } else {
                    obj[key10007] = true;
                    continue;
                  }
                  continue;
                }
                for (const key10010 in closure_8) {
                  let tmp4 = key10010;
                  let tmp5 = dependencyMap;
                  if (collapsedCategories[key10010] === dependencyMap[key10010]) {
                    continue;
                  } else {
                    obj[key10010] = true;
                    continue;
                  }
                  continue;
                }
                return obj;
              })();
              closure_2 = tmp37;
              const keys = Object.keys();
              if (keys === undefined) {
                closure_4 = tmp41;
                closure_3 = tmp40;
                closure_2 = tmp37;
                let table = keys;
                let tmp12 = tmp34;
              } else {
                closure_4 = tmp41;
                closure_3 = tmp40;
                closure_2 = tmp39;
                table = keys;
                let flag = tmp34;
                tmp12 = flag;
                while (table[closure_3] !== undefined) {
                  let tmp48 = tmp13;
                  closure_5 = tmp13;
                  let tmp49 = tmp10;
                  closure_4 = tmp10;
                  let tmp50 = tmp9;
                  closure_3 = tmp9;
                  let tmp51 = tmp8;
                  closure_2 = tmp8;
                  let tmp52 = tmp7;
                  table = tmp7;
                  let tmp53 = closure_1_4;
                  let channel = closure_1_4.getChannel(tmp13);
                  let tmp14 = null != channel;
                  if (tmp14) {
                    tmp14 = null != channel.guild_id;
                  }
                  flag = tmp12;
                  if (!tmp14) {
                    continue;
                  } else {
                    if (!(channel.guild_id in tmp30)) {
                      tmp30[channel.guild_id] = {};
                    }
                    if (null == tmp30[channel.guild_id].channel_overrides) {
                      tmp30[channel.guild_id].channel_overrides = {};
                    }
                    obj1 = {};
                    let tmp15 = obj1;
                    let merged = Object.assign(tmp30[channel.guild_id].channel_overrides[channel.id]);
                    obj1.collapsed = channel.id in collapsedCategories;
                    tmp30[channel.guild_id].channel_overrides[channel.id] = obj1;
                    flag = true;
                    continue;
                  }
                  continue;
                }
                closure_5 = tmp13;
                closure_4 = tmp10;
                closure_3 = tmp9;
                closure_2 = tmp8;
                table = tmp7;
              }
              if (tmp12) {
                obj2 = {};
                const merged1 = Object.assign(collapsedCategories);
                delete tmp3[tmp2];
                const HTTP = callback(closure_1_1[5]).HTTP;
                const obj3 = { url: null, body: null, rejectWithError: false };
                obj3[0] = closure_1_5.USER_GUILD_SETTINGS_BULK;
                const obj4 = { guilds: null };
                obj4[0] = tmp30;
                obj3[1] = obj4;
                c7 = 1;
                c6 = 1;
                const obj5 = { value: null, done: false };
                obj5[0] = HTTP.patch(obj3);
                return obj5;
              } else {
                const items = [];
                c6 = 3;
              }
              tmp39 = tmp37;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw body;
          } else if (arg0 !== 2) {
            body = body.body;
          }
          c6 = 3;
          obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } catch (tmp24) {
          c6 = tmp;
          throw tmp24;
        }
      }
    })();
  });
  closure_16 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function handleUserGuildSettingsFullUpdate() {
  const obj = {};
  const merged = Object.assign(store.getCollapsedCategories());
}
({ Endpoints: c5, FAVORITES: closure_6, ME: error } = ME);
let closure_8 = {};
let c9 = 0;
let closure_10 = 15 * setDefault.Millis.SECOND;
initializeDefault;
let prototype = function UserGuildSettingsManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { CATEGORY_COLLAPSE: scheduleSync, CATEGORY_EXPAND: scheduleSync, CATEGORY_COLLAPSE_ALL: scheduleSync, CATEGORY_EXPAND_ALL: scheduleSync, POST_CONNECTION_OPEN: handleConnectionOpen, USER_GUILD_SETTINGS_FULL_UPDATE: handleUserGuildSettingsFullUpdate };
  applyArgumentsResult.saveUserGuildSettings = saveUserGuildSettings;
  applyArgumentsResult.saveUserGuildSettingsBulk = saveUserGuildSettingsBulk;
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {
}
prototype = new prototype();
const result = require("set").fileFinishedImporting("modules/user_settings/UserGuildSettingsManager.tsx");

export default prototype;