// discord_app/modules/user_settings/UserGuildSettingsManager.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import CategoryCollapseStore from "../../stores/CategoryCollapseStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import Constants from "../../Constants.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../_runtime/metro/00002__.js";

let channel, closure_1, closure_2, closure_4, closure_5, collapsedCategories;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function handleConnectionOpen() {
  obj = {};
  const merged = Object.assign(CategoryCollapseStore.getCollapsedCategories());
}
function scheduleSync() {
  let timeout;
  clearTimeout(timeout);
  timeout = setTimeout(() => saveUserGuildSettingsBulk({}), closure_10);
}
function saveUserGuildSettings() {
  return obj(...arguments);
}
let obj = function _saveUserGuildSettings() {
  obj = _asyncToGenerator(async (arg0, body) => {
    let closure_0 = arg0;
    let c4 = 0;
    let c3 = 0;
    return (async (arg0, value) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              if (null != closure_0) {
                if (closure_0 !== closure_2_7) {
                  let obj5;
                  if (null != body) {
                    closure_2 = closure_0;
                    if (closure_0 == null) {
                      closure_2 = tmp4;
                    }
                    const obj4 = {};
                    obj4[closure_2] = body;
                    obj5 = obj4;
                  } else {
                    obj5 = {};
                  }
                  c4 = 2;
                  c3 = 1;
                  const obj6 = { value: saveUserGuildSettingsBulk(obj5), done: false };
                  return obj6;
                }
              }
              const HTTP = HTTPUtils.HTTP;
              const request = { url: closure_2_5.USER_GUILD_SETTINGS(closure_2_7), body, rejectWithError: false };
              const patch = HTTP.patch;
              c4 = 1;
              c3 = 1;
              const obj7 = { value: patch(request), done: false };
              return obj7;
            }
          } else {
            if (1 === tmp3) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                return { value, done: true };
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              return { value, done: true };
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp11) {
          c3 = 3;
          throw tmp11;
        }
      }
    })();
  });
  return obj(...arguments);
};
function saveUserGuildSettingsBulk() {
  return obj(...arguments);
}
obj = function _saveUserGuildSettingsBulk() {
  let obj5;
  obj = _asyncToGenerator(async (guilds) => {
    let closure_3;
    let c7 = 0;
    let c6 = 0;
    return (async (arg0) => {
      let obj6;
      function getChangedCategories() {
        obj = {};
        collapsedCategories = collapsedCategories.getCollapsedCategories();
        for (const key10007 in collapsedCategories) {
          if (collapsedCategories[key10007] === closure_1_8[key10007]) {
            continue;
          } else {
            obj[key10007] = true;
            continue;
          }
          continue;
        }
        for (const key10010 in closure_1_8) {
          if (collapsedCategories[key10010] === closure_1_8[key10010]) {
            continue;
          } else {
            obj[key10010] = true;
            continue;
          }
          continue;
        }
        return obj;
      }
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let items;
          c6 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              let tmp9;
              const _clearTimeout = clearTimeout;
              clearTimeout(closure_2_9);
              const _Object = Object;
              const tmp28 = 0 !== Object.keys(guilds).length;
              collapsedCategories = collapsedCategories.getCollapsedCategories();
              const tmp31 = getChangedCategories();
              closure_2 = tmp31;
              const keys = Object.keys();
              const tmp33 = tmp31;
              if (keys === undefined) {
                closure_4 = tmp35;
                collapsedCategories = tmp34;
                closure_2 = tmp31;
                closure_1 = keys;
                tmp9 = tmp28;
              } else {
                closure_4 = tmp35;
                collapsedCategories = tmp34;
                closure_2 = tmp33;
                closure_1 = keys;
                let flag = tmp28;
                tmp9 = flag;
                while (closure_1[collapsedCategories] !== undefined) {
                  closure_5 = tmp10;
                  closure_4 = tmp7;
                  collapsedCategories = tmp6;
                  closure_2 = tmp5;
                  closure_1 = tmp4;
                  channel = channel.getChannel(tmp10);
                  let tmp11 = null != channel && null != channel.guild_id;
                  flag = tmp9;
                  if (!tmp11) {
                    continue;
                  } else {
                    if (!(channel.guild_id in guilds)) {
                      guilds[channel.guild_id] = {};
                    }
                    if (null == guilds[channel.guild_id].channel_overrides) {
                      guilds[channel.guild_id].channel_overrides = {};
                    }
                    let obj4 = { collapsed: channel.id in collapsedCategories };
                    let channel_overrides = guilds[channel.guild_id].channel_overrides;
                    let id = channel.id;
                    let merged = Object.assign(guilds[channel.guild_id].channel_overrides[channel.id]);
                    channel_overrides[id] = obj4;
                    flag = true;
                    continue;
                  }
                  continue;
                }
                closure_5 = tmp10;
                closure_4 = tmp7;
                collapsedCategories = tmp6;
                closure_2 = tmp5;
                closure_1 = tmp4;
              }
              if (tmp9) {
                const merged1 = Object.assign(collapsedCategories);
                delete guilds[closure_2_6];
                const HTTP = HTTPUtils.HTTP;
                const request = { url: constants.USER_GUILD_SETTINGS_BULK, body: obj6, rejectWithError: false };
                c7 = 1;
                c6 = 1;
                obj6 = { guilds };
                const obj7 = { value: HTTP.patch(request), done: false };
                return obj7;
              } else {
                items = [];
              }
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            items = value.body;
          }
          c6 = 3;
          return { value: items, done: true };
        } catch (tmp20) {
          c6 = 3;
          throw tmp20;
        }
      }
    })();
  });
  return obj(...arguments);
};
function handleUserGuildSettingsFullUpdate() {
  obj = {};
  const merged = Object.assign(CategoryCollapseStore.getCollapsedCategories());
}
({ Endpoints: hasOwnProperty, FAVORITES: metroRequire, ME: metroImportDefault } = Constants);
obj = {};
let closure_9 = 0;
let closure_10 = 15 * DurationsDefault.Millis.SECOND;
class UserGuildSettingsManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    obj = {
      CATEGORY_COLLAPSE: scheduleSync,
      CATEGORY_EXPAND: scheduleSync,
      CATEGORY_COLLAPSE_ALL: scheduleSync,
      CATEGORY_EXPAND_ALL: scheduleSync,
      POST_CONNECTION_OPEN: handleConnectionOpen,
      USER_GUILD_SETTINGS_FULL_UPDATE: handleUserGuildSettingsFullUpdate,
    };
    applyArgumentsResult.actions = obj;
    applyArgumentsResult.saveUserGuildSettings = saveUserGuildSettings;
    applyArgumentsResult.saveUserGuildSettingsBulk = saveUserGuildSettingsBulk;
    return applyArgumentsResult;
  }
}
const userGuildSettingsManager = new UserGuildSettingsManager();
const result = size.fileFinishedImporting("modules/user_settings/UserGuildSettingsManager.tsx");

export default userGuildSettingsManager;
