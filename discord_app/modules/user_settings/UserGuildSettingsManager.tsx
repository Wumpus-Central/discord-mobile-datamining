// discord_app/modules/user_settings/UserGuildSettingsManager.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import CategoryCollapseStore from "../../stores/CategoryCollapseStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";

require = fn;
function handleConnectionOpen() {
  const obj = {};
  const merged = Object.assign(CategoryCollapseStore.getCollapsedCategories());
}
function scheduleSync() {
  clearTimeout(timeout);
  timeout = setTimeout(() => saveUserGuildSettingsBulk({}), closure_10);
}
function saveUserGuildSettings() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_14 = async function _saveUserGuildSettings(arg0) {
  closure_0 = arg0;
  c4 = 0;
  c3 = 0;
  return (async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            let tmp7 = null;
            if (null != closure_0) {
              if (closure_0 !== closure_2_7) {
                if (tmp7 != body) {
                  closure_2 = closure_0;
                  if (closure_0 == tmp7) {
                    closure_2 = closure_2_7;
                  }
                  const obj1 = {};
                  tmp7 = closure_2;
                  obj1[closure_2] = body;
                  let obj2 = obj1;
                } else {
                  obj2 = {};
                }
                saveUserGuildSettingsBulk(obj2);
                c4 = 2;
                c3 = 1;
              }
            }
            const HTTP = HTTPUtils.HTTP;
            const request = { url: closure_2_5.USER_GUILD_SETTINGS(closure_2_7), body, rejectWithError: false };
            c4 = 1;
            c3 = 1;
            const obj3 = { value: HTTP.patch(request), done: false };
            return obj3;
          }
        } else {
          if (1 === tmp4) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp13) {
        c3 = tmp;
        throw tmp13;
      }
    }
  })();
};
function saveUserGuildSettingsBulk() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_16 = async function _saveUserGuildSettingsBulk() {
  c7 = 0;
  c6 = 0;
  return (async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const _clearTimeout = clearTimeout;
            clearTimeout(closure_2_9);
            const _Object = Object;
            const tmp33 = 0 !== Object.keys(guilds).length;
            collapsedCategories = collapsedCategories.getCollapsedCategories();
            const tmp36 = (function getChangedCategories() {
              const obj = {};
              collapsedCategories = collapsedCategories.getCollapsedCategories();
              for (const key10007 in collapsedCategories) {
                if (collapsedCategories[key10007] === dependencyMap[key10007]) {
                  continue;
                } else {
                  obj[key10007] = true;
                  continue;
                }
                continue;
              }
              for (const key10010 in closure_1_8) {
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
            closure_2 = tmp36;
            const keys = Object.keys();
            if (keys === undefined) {
              closure_4 = tmp40;
              collapsedCategories = tmp39;
              closure_2 = tmp36;
              closure_1 = keys;
              let tmp12 = tmp33;
            } else {
              closure_4 = tmp40;
              collapsedCategories = tmp39;
              closure_2 = tmp38;
              closure_1 = keys;
              let flag = tmp33;
              tmp12 = flag;
              while (closure_1[collapsedCategories] !== undefined) {
                closure_5 = tmp13;
                closure_4 = tmp10;
                collapsedCategories = tmp9;
                closure_2 = tmp8;
                closure_1 = tmp7;
                channel = channel.getChannel(tmp13);
                let tmp14 = null != channel;
                if (tmp14) {
                  tmp14 = null != channel.guild_id;
                }
                flag = tmp12;
                if (!tmp14) {
                  continue;
                } else {
                  if (!(channel.guild_id in guilds)) {
                    guilds[channel.guild_id] = {};
                  }
                  if (null == guilds[channel.guild_id].channel_overrides) {
                    guilds[channel.guild_id].channel_overrides = {};
                  }
                  let obj1 = {};
                  let merged = Object.assign(guilds[channel.guild_id].channel_overrides[channel.id]);
                  obj1.collapsed = channel.id in collapsedCategories;
                  guilds[channel.guild_id].channel_overrides[channel.id] = obj1;
                  flag = true;
                  continue;
                }
                continue;
              }
              closure_5 = tmp13;
              closure_4 = tmp10;
              collapsedCategories = tmp9;
              closure_2 = tmp8;
              closure_1 = tmp7;
            }
            if (tmp12) {
              const merged1 = Object.assign(collapsedCategories);
              delete tmp3[tmp2];
              const HTTP = HTTPUtils.HTTP;
              const request = { url: constants.USER_GUILD_SETTINGS_BULK, body: null, rejectWithError: false };
              const obj3 = { guilds };
              request.body = obj3;
              c7 = 1;
              c6 = 1;
              const obj4 = { value: HTTP.patch(request), done: false };
              return obj4;
            } else {
              const items = [];
              c6 = 3;
            }
            tmp38 = tmp36;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          const body = value.body;
        }
        c6 = 3;
        obj = { value, done: true };
        return obj;
      } catch (tmp24) {
        c6 = tmp;
        throw tmp24;
      }
    }
  })();
};
function handleUserGuildSettingsFullUpdate() {
  const obj = {};
  const merged = Object.assign(CategoryCollapseStore.getCollapsedCategories());
}
const Constants = fn(1074);
({ Endpoints: hasOwnProperty, FAVORITES: metroRequire, ME: closure_7 } = Constants);
let actions = {};
let closure_9 = 0;
let closure_10 = 15 * DurationsDefault.Millis.SECOND;
let prototype = function UserGuildSettingsManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  actions = {
    CATEGORY_COLLAPSE: scheduleSync,
    CATEGORY_EXPAND: scheduleSync,
    CATEGORY_COLLAPSE_ALL: scheduleSync,
    CATEGORY_EXPAND_ALL: scheduleSync,
    POST_CONNECTION_OPEN: handleConnectionOpen,
    USER_GUILD_SETTINGS_FULL_UPDATE: handleUserGuildSettingsFullUpdate,
  };
  applyArgumentsResult.actions = actions;
  applyArgumentsResult.saveUserGuildSettings = saveUserGuildSettings;
  applyArgumentsResult.saveUserGuildSettingsBulk = saveUserGuildSettingsBulk;
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {}
prototype = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/UserGuildSettingsManager.tsx");

export default prototype;
