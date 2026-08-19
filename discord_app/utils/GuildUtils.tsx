// discord_app/utils/GuildUtils.tsx
import obj132Default from "Durations.tsx";
import getSystemLocale from "../intl/index.native.tsx";
import nameFromUserAll from "UserUtils.tsx";
import createGuildRecordFromRust from "../stores/GuildStore.tsx";
import mergeGuildAvatar from "../stores/UserStore.tsx";
import importDefaultResult from "../../_runtime/01405_priv.js";

require = fn;
function getGuildNameSuggestion(truncateUsername) {
  currentUser = currentUser.getCurrentUser();
  let obj = nameFromUserAll;
  const name = obj.getName(currentUser);
  let str = "";
  if (null != name) {
    str = "";
    if (0 !== name.length) {
      const intl = getSystemLocale.intl;
      truncateUsername = undefined;
      if (truncateUsername != null) {
        truncateUsername = truncateUsername.truncateUsername;
      }
      let substr = name;
      if (truncateUsername) {
        substr = name.slice(0, 20);
      }
      obj = { username: null };
      obj[0] = substr;
      str = intl.formatToPlainString(getSystemLocale.t.Y6Qfju, obj);
    }
  }
  return str;
}
let obj = { maxAge: null };
obj[0] = obj132Default.Millis.MINUTE;
importDefaultResult = new importDefaultResult(obj);
const error = importDefaultResult;
obj = {
  getGuildNameSuggestion,
  requestMembers(arr) {
    closure_0 = arg1;
    const isArray = Array.isArray(arr);
    let items = [];
    closure_1 = items;
    if (isArray) {
      let item = arr.forEach((item, index) => {
        let str = item;
        if (item == null) {
          str = "";
        }
        const combined = "" + str + ":" + closure_0;
        const value = closure_1_7.get(combined);
        if (null == value) {
          const result = closure_1_7.set(combined, true);
        }
        if (null == value) {
          arr = arr.push(item);
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
      let value = importDefaultResult.get(combined);
      if (null == value) {
        let result = importDefaultResult.set(combined, true);
      }
      flag2 = false;
      if (null == value) {
        flag2 = true;
      }
    }
    if (items.length > 0) {
      if (isArray) {
        closure_0 = items;
        closure_1 = arg1;
        if (null != timeout) {
          const _clearTimeout2 = clearTimeout;
          clearTimeout(timeout);
        }
        const _setTimeout2 = setTimeout;
        timeout = setTimeout(() => {
          const items = [];
          if (null == items) {
            const push = items.push;
            const items1 = [];
            HermesBuiltin.arraySpread(closure_1_5.getGuildIds(), 0);
            HermesBuiltin.apply(items1, items);
          } else {
            const _Array = Array;
            if (Array.isArray(arr2)) {
              const item = arr2.forEach((item, index) => {
                const guild = closure_1_5.getGuild(item);
                if (null != guild) {
                  items.push(guild.id);
                }
              });
            } else {
              let guild = closure_1_5.getGuild(arr2);
              if (null != guild) {
                arr = items.push(guild.id);
              }
            }
          }
          if (items.length > 0) {
            const members = arr(dependencyMap[4]).requestMembers(items, arr.toLocaleLowerCase(), num);
            const obj = arr(dependencyMap[4]);
          }
        }, 200);
      }
    }
    if (flag2) {
      closure_0 = arr;
      closure_1 = arg1;
      if (null != timeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(timeout);
      }
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        const items = [];
        if (null == items) {
          const push = items.push;
          const items1 = [];
          HermesBuiltin.arraySpread(closure_1_5.getGuildIds(), 0);
          HermesBuiltin.apply(items1, items);
        } else {
          const _Array = Array;
          if (Array.isArray(arr2)) {
            const item = arr2.forEach((item, index) => {
              const guild = closure_1_5.getGuild(item);
              if (null != guild) {
                items.push(guild.id);
              }
            });
          } else {
            let guild = closure_1_5.getGuild(arr2);
            if (null != guild) {
              arr = items.push(guild.id);
            }
          }
        }
        if (items.length > 0) {
          const members = arr(dependencyMap[4]).requestMembers(items, arr.toLocaleLowerCase(), num);
          const obj = arr(dependencyMap[4]);
        }
      }, 200);
    }
  }
};
let result = require("obj132").fileFinishedImporting("utils/GuildUtils.tsx");

export default obj;
export { getGuildNameSuggestion };