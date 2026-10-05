// === Module 4722: UserUtils ===

// Module 4722 (UserUtils)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import intl7 from "intl" /* 1126 */;
import StreamerModeStore from "StreamerModeStore" /* 4723 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
function nameFromUser(primary1) {
  let globalName;
  const global_name = primary1.global_name;
  const tmp = null != global_name && global_name.length > 0;
  if (tmp) {
    globalName = primary1.global_name;
  } else {
    const globalName1 = primary1.globalName;
    const tmp2 = null != globalName1 && globalName1.length > 0;
    if (tmp2) {
      globalName = primary1.globalName;
    } else {
      const username = primary1.username;
      globalName = null != username && username.length > 0 ? primary1.username : c7;
      const tmp3 = null != username && username.length > 0;
    }
  }
  return globalName;
}
function presentUserTag(username, identifiable, tmpResult) {
  if (null == username) {
    const intl = intl7.intl;
    return intl.string(intl7.t.sKdZ6U);
  } else {
    const username1 = username.username;
    const tmp = null != username1 && username1.length > 0;
    if (tmp) {
      let combined;
      let flag = false;
      if ("always" !== identifiable.identifiable) {
        flag = tmpResult;
        if ("never" === identifiable.identifiable) {
          flag = true;
        }
      }
      if ("0" !== username.discriminator) {
        if (username.discriminator !== React3) {
          if ("username" !== identifiable.mode) {
            let username2;
            if (!flag) {
              const _HermesInternal3 = HermesInternal;
              username2 = "" + username.username + "#" + username.discriminator;
            }
            return username2;
          }
          username2 = username.username;
        }
      }
      username = username.username;
      if (flag) {
        const _HermesInternal = HermesInternal;
        combined = "" + username[0] + "\u2026";
      } else {
        combined = username;
      }
      let combined1 = combined;
      if ("never" !== identifiable.decoration) {
        const _HermesInternal2 = HermesInternal;
        combined1 = "@" + combined;
      }
      return combined1;
    } else {
      return c7;
    }
  }
}
({ NON_USER_BOT_DISCRIMINATOR: closure_4, StatusTypes: hasOwnProperty } = Constants);
let c6 = 86400000;
let c7 = "???";
let closure_8 = { mode: "full", decoration: "never", identifiable: "auto" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((username, arg1) => {
  let tmp6;
  let tmp7;
  const obj = react;
  const cResult = obj.c(2);
  const obj2 = {};
  const merged = Object.assign(closure_8);
  const merged1 = Object.assign(arg1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StreamerModeStore];
    const fn = function u() {
      return StreamerModeStore.hidePersonalInformation;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = get_initialized;
  return presentUserTag(username, obj2, tmpResult.useStateFromStores(tmp6, tmp7));
}) : ((username, arg1) => {
  const obj = {};
  const merged = Object.assign(closure_8);
  const merged1 = Object.assign(arg1);
  const items = [StreamerModeStore];
  const obj2 = get_initialized;
  return presentUserTag(username, obj, obj2.useStateFromStores(items, () => StreamerModeStore.hidePersonalInformation));
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      if (null != closure_0) {
        let user = null;
        if (closure_0.isPrivate()) {
          user = null;
          if (closure_0.isDM()) {
            user = UserStore.getUser(closure_0.getRecipientId());
          }
        }
        return user;
      }
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [UserStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    if (null != closure_0) {
      let user = null;
      if (closure_0.isPrivate()) {
        user = null;
        if (closure_0.isDM()) {
          user = UserStore.getUser(closure_0.getRecipientId());
        }
      }
      return user;
    }
  });
});
function getName(username) {
  if (null != username) {
    let hidePersonalInformation = StreamerModeStore.hidePersonalInformation;
    const obj = nameFromUser(username);
    if (hidePersonalInformation) {
      username = username.username;
      let toLocaleLowerCaseResult1;
      const toLocaleLowerCaseResult = obj.toLocaleLowerCase();
      if (username != null) {
        toLocaleLowerCaseResult1 = username.toLocaleLowerCase();
      }
      hidePersonalInformation = toLocaleLowerCaseResult === toLocaleLowerCaseResult1;
    }
    if (hidePersonalInformation) {
      hidePersonalInformation = "0" === username.discriminator;
    }
    let combined = obj;
    if (hidePersonalInformation) {
      const _HermesInternal = HermesInternal;
      combined = "" + obj[0] + "\u2026";
    }
    return combined;
  }
}
function useName(guildId) {
  let tmp15;
  let tmp16;
  let tmp6;
  if (closure_10) {
    const tmpResult = react;
    const cResult = tmpResult.c(5);
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [StreamerModeStore];
      const fn = function o() {
        return StreamerModeStore.hidePersonalInformation;
      };
      cResult[0] = items;
      cResult[1] = fn;
      tmp15 = items;
      tmp16 = fn;
    } else {
      [tmp15, tmp16] = cResult;
    }
    const tmpResult3 = get_initialized;
    const stateFromStores = tmpResult3.useStateFromStores(tmp15, tmp16);
    let tmp20;
    if (null != guildId) {
      if (cResult[2] === stateFromStores) {
        let tmp21;
        if (cResult[3] === guildId) {
          tmp21 = cResult[4];
        }
        tmp20 = tmp21;
      }
      const obj5 = nameFromUser(guildId);
      let tmp23 = stateFromStores;
      if (tmp23) {
        const username2 = guildId.username;
        let toLocaleLowerCaseResult1;
        const toLocaleLowerCaseResult = obj5.toLocaleLowerCase();
        if (username2 != null) {
          toLocaleLowerCaseResult1 = username2.toLocaleLowerCase();
        }
        tmp23 = toLocaleLowerCaseResult === toLocaleLowerCaseResult1;
      }
      if (tmp23) {
        tmp23 = "0" === guildId.discriminator;
      }
      let combined = obj5;
      if (tmp23) {
        const _HermesInternal2 = HermesInternal;
        combined = "" + obj5[0] + "\u2026";
      }
      cResult[2] = stateFromStores;
      cResult[3] = guildId;
      cResult[4] = combined;
      tmp21 = combined;
    }
    tmp6 = tmp20;
  } else {
    const items1 = [StreamerModeStore];
    const tmpResult4 = get_initialized;
    const stateFromStores1 = tmpResult4.useStateFromStores(items1, () => StreamerModeStore.hidePersonalInformation);
    if (null != guildId) {
      const obj2 = nameFromUser(guildId);
      let tmp8 = stateFromStores1;
      if (tmp8) {
        const username = guildId.username;
        let toLocaleLowerCaseResult3;
        const toLocaleLowerCaseResult2 = obj2.toLocaleLowerCase();
        if (username != null) {
          toLocaleLowerCaseResult3 = username.toLocaleLowerCase();
        }
        tmp8 = toLocaleLowerCaseResult2 === toLocaleLowerCaseResult3;
      }
      if (tmp8) {
        tmp8 = "0" === guildId.discriminator;
      }
      let combined1 = obj2;
      if (tmp8) {
        const _HermesInternal = HermesInternal;
        combined1 = "" + obj2[0] + "\u2026";
      }
      tmp6 = combined1;
    }
  }
  return tmp6;
}
function getGlobalName(user) {
  if (null != user) {
    let global_name;
    const globalName = user.globalName;
    const tmp = null != globalName && globalName.length > 0;
    if (tmp) {
      global_name = user.globalName;
    } else {
      const global_name1 = user.global_name;
      const tmp2 = null != global_name1 && global_name1.length > 0;
      if (tmp2) {
        global_name = user.global_name;
      }
    }
    return global_name;
  }
}
function getFormattedName(inviter, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (null == inviter) {
    return c7;
  } else {
    let username;
    let tmp3;
    if (null != inviter) {
      let global_name;
      const globalName = inviter.globalName;
      const tmp = null != globalName && globalName.length > 0;
      if (tmp) {
        global_name = inviter.globalName;
      } else {
        const global_name1 = inviter.global_name;
        const tmp2 = null != global_name1 && global_name1.length > 0;
        if (tmp2) {
          global_name = inviter.global_name;
        }
      }
      tmp3 = global_name;
    }
    if (flag) {
      const obj = {};
      const merged = Object.assign(closure_8);
      const merged1 = Object.assign(undefined);
      const hidePersonalInformation = "auto" !== obj.identifiable || StreamerModeStore.hidePersonalInformation;
      username = presentUserTag(inviter, obj, hidePersonalInformation);
    } else {
      username = inviter.username;
      if (username == null) {
        username = c7;
      }
    }
    let tmp11 = tmp3;
    if (tmp3 !== username) {
      let combined = username;
      if (null != tmp3) {
        const _HermesInternal = HermesInternal;
        combined = "" + tmp3 + " (" + username + ")";
      }
      tmp11 = combined;
    }
    return tmp11;
  }
}
function humanizeStatus(status, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const isMobile = obj.isMobile;
  const isVR = obj.isVR;
  const tmp = undefined !== isMobile && isMobile;
  const tmp2 = undefined !== isVR && isVR;
  if (hasOwnProperty.ONLINE === status) {
    let stringResult;
    const intl6 = intl7.intl;
    const string = intl6.string;
    const t = intl7.t;
    if (tmp2) {
      stringResult = string(t.SWnU0R);
    } else if (tmp) {
      stringResult = string(t["9hghLD"]);
    } else {
      stringResult = string(t.WbGtnH);
    }
    return stringResult;
  } else if (hasOwnProperty.OFFLINE === status) {
    const intl5 = intl7.intl;
    return intl5.string(intl7.t.Vv0abJ);
  } else if (hasOwnProperty.IDLE === status) {
    const intl4 = intl7.intl;
    return intl4.string(intl7.t.qWbtVU);
  } else if (hasOwnProperty.DND === status) {
    const intl3 = intl7.intl;
    return intl3.string(intl7.t.jaNpQH);
  } else if (hasOwnProperty.INVISIBLE === status) {
    const intl2 = intl7.intl;
    return intl2.string(intl7.t.bg24HO);
  } else if (hasOwnProperty.STREAMING === status) {
    const intl = intl7.intl;
    return intl.string(intl7.t.XKYej5);
  } else {
    const UNKNOWN = hasOwnProperty.UNKNOWN;
    return null;
  }
}
function getUserTag(user, arg1) {
  const obj = {};
  const merged = Object.assign(closure_8);
  const merged1 = Object.assign(arg1);
  const hidePersonalInformation = "auto" !== obj.identifiable || StreamerModeStore.hidePersonalInformation;
  return presentUserTag(user, obj, hidePersonalInformation);
}
function getUserIsStaff() {
  const currentUser = UserStore.getCurrentUser();
  const tmp = null != currentUser && currentUser.isStaff();
  return tmp;
}
let obj = {
  getName,
  useName,
  isNameConcealed(str) {
    const endsWithResult = 2 === str.length && str.endsWith("\u2026");
    return endsWithResult;
  },
  getUserTag,
  useUserTag: tmp3,
  getUserIsStaff,
  getFormattedName,
  getGlobalName,
  humanizeStatus,
  useDirectMessageRecipient: tmp4
};
function accountAgeInRange(createdAt, arg1) {
  let maxDaysOld;
  let minDaysOld;
  ({ maxDaysOld, minDaysOld } = arg1);
  if (minDaysOld === undefined) {
    minDaysOld = 0;
  }
  if (null == createdAt) {
    return false;
  } else {
    const _Date = Date;
    createdAt = createdAt.createdAt;
    const timestamp = Date.now();
    const diff = timestamp - createdAt.getTime();
    return (null == maxDaysOld || diff <= c6 * maxDaysOld) && diff >= c6 * minDaysOld;
  }
}
const result = size.fileFinishedImporting("utils/UserUtils.tsx");

export default obj;
export { nameFromUser };
export { getName };
export { useName };
export { getGlobalName };
export { getFormattedName };
export { humanizeStatus };
export { accountAgeInRange };
export const ageEligibleForPremiumUpsell = function ageEligibleForPremiumUpsell(stateFromStores) {
  let flag = false;
  if (null != stateFromStores) {
    const _Date = Date;
    const createdAt = stateFromStores.createdAt;
    const timestamp = Date.now();
    const diff = timestamp - createdAt.getTime();
    flag = diff <= c6 * 30 && diff >= 0;
    const tmp5 = diff <= c6 * 30 && diff >= 0;
  }
  return !flag;
};
export const isNewUser = function isNewUser(createdAt) {
  let flag = false;
  if (null != createdAt) {
    const _Date = Date;
    createdAt = createdAt.createdAt;
    const timestamp = Date.now();
    const diff = timestamp - createdAt.getTime();
    flag = diff <= c6 * 7 && diff >= 0;
    const tmp5 = diff <= c6 * 7 && diff >= 0;
  }
  return flag;
};
export { getUserTag };
export const useUserTag = tmp3;
export const useDirectMessageRecipient = tmp4;
export { getUserIsStaff };