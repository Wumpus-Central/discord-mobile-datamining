// discord_app/utils/GuildUtils.tsx
import DurationsDefault from "Durations.tsx";
import intl2 from "../intl/index.native.tsx";
import UserUtilsAll from "UserUtils.tsx";
import GuildStore from "../stores/GuildStore.tsx";
import UserStore from "../stores/UserStore.tsx";
import LRUCache from "../../_runtime/01444_LRUCache.js";
import size from "../../_runtime/metro/00002__.js";

function getGuildNameSuggestion(truncateUsername) {
  const currentUser = UserStore.getCurrentUser();
  const obj = UserUtilsAll;
  const name = obj.getName(currentUser);
  let str = "";
  if (null != name) {
    str = "";
    if (0 !== name.length) {
      const intl = intl2.intl;
      const formatToPlainString = intl.formatToPlainString;
      truncateUsername = undefined;
      const Y6Qfju = intl2.t.Y6Qfju;
      if (truncateUsername != null) {
        truncateUsername = truncateUsername.truncateUsername;
      }
      let substr = name;
      if (truncateUsername) {
        substr = name.slice(0, 20);
      }
      const obj2 = { username: substr };
      str = formatToPlainString(Y6Qfju, obj2);
    }
  }
  return str;
}
let obj = { maxAge: DurationsDefault.Millis.MINUTE };
const importDefaultResult1 = new LRUCache(obj);
let obj2 = {
  getGuildNameSuggestion,
  requestMembers(arr, arg1) {
    let closure_4;
    let flag2;
    let timeout;
    const f90782 = () => {
      items = [];
      if (null == items) {
        const push = items.push;
        const items1 = [];
        HermesBuiltin.arraySpread(items1, GuildStore.getGuildIds(), 0);
        HermesBuiltin.apply(push, items1, items);
      } else {
        const _Array = Array;
        if (Array.isArray(items)) {
          const item = arr2.forEach((item) => {
            guild = guild.getGuild(item);
            if (null != guild) {
              items.push(guild.id);
            }
          });
        } else {
          let guild = GuildStore.getGuild(arr2);
          if (null != guild) {
            items.push(guild.id);
          }
        }
      }
      if (items.length > 0) {
        const obj = items(dependencyMap[4]);
        const members = obj.requestMembers(items, closure_1.toLocaleLowerCase(), num);
      }
    };
    let closure_0 = arg1;
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
        const value = importDefaultResult1.get(combined);
        if (null == value) {
          const result = importDefaultResult1.set(combined, true);
        }
        if (null == value) {
          items.push(item);
        }
      });
      flag2 = false;
    } else {
      let str = arr;
      if (arr == null) {
        str = "";
      }
      const _HermesInternal = HermesInternal;
      let combined = "" + str + ":" + arg1;
      let value = importDefaultResult1.get(combined);
      if (null == value) {
        let result = importDefaultResult1.set(combined, true);
      }
      flag2 = false;
      if (null == value) {
        flag2 = true;
      }
    }
    if (items.length > 0) {
      if (isArray) {
        let closure_1 = arg1;
        if (null != timeout) {
          const _clearTimeout2 = clearTimeout;
          clearTimeout(timeout);
        }
        const _setTimeout2 = setTimeout;
        timeout = setTimeout(f90782, 200);
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
      timeout = setTimeout(f90782, 200);
    }
  },
};
let result = size.fileFinishedImporting("utils/GuildUtils.tsx");

export default obj2;
export { getGuildNameSuggestion };
