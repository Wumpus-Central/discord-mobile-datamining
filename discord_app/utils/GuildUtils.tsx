import createGuildRecordFromRust from "createGuildRecordFromRust";
import mergeGuildAvatar from "mergeGuildAvatar";
import importDefaultResult from "priv";

const require = arg1;
function getGuildNameSuggestion(truncateUsername) {
  currentUser = currentUser.getCurrentUser();
  let obj = importAll(4032);
  const name = obj.getName(currentUser);
  let str = "";
  if (null != name) {
    str = "";
    if (0 !== name.length) {
      const intl = require(1236) /* getSystemLocale */.intl;
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
      str = intl.formatToPlainString(require(1236) /* getSystemLocale */.t.Y6Qfju, obj);
    }
  }
  return str;
}
let obj = { maxAge: null };
obj[0] = require("set").Millis.MINUTE;
importDefaultResult = new importDefaultResult(obj);
const error = importDefaultResult;
obj = {
  getGuildNameSuggestion,
  requestMembers(arr) {
    let closure_0 = arg1;
    let num = arg2;
    if (arg2 === undefined) {
      num = 10;
    }
    let closure_1;
    const isArray = Array.isArray(arr);
    let items = [];
    closure_1 = items;
    if (isArray) {
      let item = arr.forEach((arg0) => {
        let str = arg0;
        if (arg0 == null) {
          str = "";
        }
        const combined = "" + str + ":" + closure_0;
        const value = outer1_7.get(combined);
        if (null == value) {
          const result = outer1_7.set(combined, true);
        }
        if (null == value) {
          arr = arr.push(arg0);
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
        let result = obj.set(combined, true);
      }
      flag2 = false;
      if (null == value) {
        flag2 = true;
      }
      obj = importDefaultResult;
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
            HermesBuiltin.arraySpread(outer1_5.getGuildIds(), 0);
            HermesBuiltin.apply(items1, items);
          } else {
            const _Array = Array;
            if (Array.isArray(arr2)) {
              const item = arr2.forEach((arg0) => {
                const guild = outer1_5.getGuild(arg0);
                if (null != guild) {
                  items.push(guild.id);
                }
              });
            } else {
              let guild = outer1_5.getGuild(arr2);
              if (null != guild) {
                const arr = items.push(guild.id);
              }
            }
          }
          if (items.length > 0) {
            const members = arr(outer1_3[4]).requestMembers(items, arr.toLocaleLowerCase(), num);
            const obj = arr(outer1_3[4]);
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
          HermesBuiltin.arraySpread(outer1_5.getGuildIds(), 0);
          HermesBuiltin.apply(items1, items);
        } else {
          const _Array = Array;
          if (Array.isArray(arr2)) {
            const item = arr2.forEach((arg0) => {
              const guild = outer1_5.getGuild(arg0);
              if (null != guild) {
                items.push(guild.id);
              }
            });
          } else {
            let guild = outer1_5.getGuild(arr2);
            if (null != guild) {
              const arr = items.push(guild.id);
            }
          }
        }
        if (items.length > 0) {
          const members = arr(outer1_3[4]).requestMembers(items, arr.toLocaleLowerCase(), num);
          const obj = arr(outer1_3[4]);
        }
      }, 200);
    }
  }
};
let result = require("priv").fileFinishedImporting("utils/GuildUtils.tsx");

export default obj;
export { getGuildNameSuggestion };