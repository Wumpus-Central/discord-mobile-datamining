// discord_app/utils/GuildUtils.tsx
import DurationsDefault from "Durations.tsx";
import util from "../intl/index.native.tsx";
import UserUtilsAll from "UserUtils.tsx";
import GuildActionCreatorsDefault from "../actions/GuildActionCreators.tsx";
import GuildStore from "../stores/GuildStore.tsx";
import UserStore from "../stores/UserStore.tsx";
import priv from "../../_runtime/01437_priv.js";

require = fn;
function getGuildNameSuggestion(truncateUsername) {
  const currentUser = UserStore.getCurrentUser();
  let obj = UserUtilsAll;
  const name = obj.getName(currentUser);
  let str = "";
  if (null != name) {
    str = "";
    if (0 !== name.length) {
      const intl = util.intl;
      truncateUsername = undefined;
      if (truncateUsername != null) {
        truncateUsername = truncateUsername.truncateUsername;
      }
      let substr = name;
      if (truncateUsername) {
        substr = name.slice(0, 20);
      }
      obj = { username: substr };
      str = intl.formatToPlainString(util.t.Y6Qfju, obj);
    }
  }
  return str;
}
let obj = { maxAge: null };
obj.maxAge = DurationsDefault.Millis.MINUTE;
priv = new priv(obj);
obj = {
  getGuildNameSuggestion,
  requestMembers(arr, arg1) {
    closure_0 = arg1;
    let num = arg2;
    if (arg2 === undefined) {
      num = 10;
    }
    const isArray = Array.isArray(arr);
    let items = [];
    if (isArray) {
      let item = arr.forEach((item) => {
        let str = item;
        if (item == null) {
          str = "";
        }
        const combined = "" + str + ":" + closure_0;
        value = priv.get(combined);
        if (null == value) {
          const result = priv.set(combined, true);
        }
        if (null == value) {
          items.push(item);
        }
      });
      let flag2 = false;
    } else {
      let str = arr;
      if (arr == null) {
        str = "";
      }
      const _HermesInternal = HermesInternal;
      let combined = "" + str + ":" + arg1;
      value = priv.get(combined);
      if (null == value) {
        let result = priv.set(combined, true);
      }
      flag2 = false;
      if (null == value) {
        flag2 = true;
      }
    }
    if (items.length > 0) {
      if (isArray) {
        closure_130_0 = items;
        closure_130_1 = arg1;
        closure_130_2 = num;
        if (null != timeout) {
          const _clearTimeout2 = clearTimeout;
          clearTimeout(timeout);
        }
        const _setTimeout2 = setTimeout;
        timeout = setTimeout(() => {
          items = [];
          if (null == closure_0) {
            const push = items.push;
            const items1 = [];
            HermesBuiltin.arraySpread(GuildStore.getGuildIds(), 0);
            HermesBuiltin.apply(items1, items);
          } else {
            const _Array = Array;
            if (Array.isArray(closure_0)) {
              const item = closure_0.forEach((item) => {
                guild = guild.getGuild(item);
                if (null != guild) {
                  items.push(guild.id);
                }
              });
            } else {
              guild = GuildStore.getGuild(closure_0);
              if (null != guild) {
                items.push(guild.id);
              }
            }
          }
          if (items.length > 0) {
            const members = GuildActionCreatorsDefault.requestMembers(items, items.toLocaleLowerCase(), importAll);
          }
        }, 200);
      }
    }
    if (flag2) {
      closure_129_0 = arr;
      closure_129_1 = arg1;
      closure_129_2 = num;
      if (null != timeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(timeout);
      }
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        items = [];
        if (null == closure_0) {
          const push = items.push;
          const items1 = [];
          HermesBuiltin.arraySpread(GuildStore.getGuildIds(), 0);
          HermesBuiltin.apply(items1, items);
        } else {
          const _Array = Array;
          if (Array.isArray(closure_0)) {
            const item = closure_0.forEach((item) => {
              guild = guild.getGuild(item);
              if (null != guild) {
                items.push(guild.id);
              }
            });
          } else {
            guild = GuildStore.getGuild(closure_0);
            if (null != guild) {
              items.push(guild.id);
            }
          }
        }
        if (items.length > 0) {
          const members = GuildActionCreatorsDefault.requestMembers(items, items.toLocaleLowerCase(), importAll);
        }
      }, 200);
    }
  },
};
const size = fn(2);
let result = size.fileFinishedImporting("utils/GuildUtils.tsx");

export default obj;
export { getGuildNameSuggestion };
