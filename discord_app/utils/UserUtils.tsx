// === Module 4728: UserUtils ===

// Module 4728 (UserUtils)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import StreamerModeStore from "StreamerModeStore" /* 4729 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
function nameFromUser(primary1) {
  const global_name = primary1.global_name;
  let tmp = null != global_name;
  if (tmp) {
    tmp = global_name.length > 0;
  }
  if (tmp) {
    let globalName = primary1.global_name;
  } else {
    const globalName1 = primary1.globalName;
    let tmp2 = null != globalName1;
    if (tmp2) {
      tmp2 = globalName1.length > 0;
    }
    if (tmp2) {
      globalName = primary1.globalName;
    } else {
      const username = primary1.username;
      let tmp3 = null != username;
      if (tmp3) {
        tmp3 = username.length > 0;
      }
      globalName = tmp3 ? primary1.username : c7;
    }
  }
  return globalName;
}
function presentUserTag(username, identifiable, tmpResult) {
  if (null == username) {
    const intl = util.intl;
    return intl.string(util.t.sKdZ6U);
  } else {
    const username1 = username.username;
    let tmp = null != username1;
    if (tmp) {
      tmp = username1.length > 0;
    }
    if (tmp) {
      let flag = false;
      if ("always" !== identifiable.identifiable) {
        flag = tmpResult;
        if ("never" === identifiable.identifiable) {
          flag = true;
        }
      }
      if ("0" !== username.discriminator) {
        if (username.discriminator !== React4) {
          if ("username" !== identifiable.mode) {
            if (!flag) {
              const _HermesInternal3 = HermesInternal;
              let username2 = "" + username.username + "#" + username.discriminator;
            }
            return username2;
          }
          username2 = username.username;
        }
      }
      username = username.username;
      if (flag) {
        const _HermesInternal = HermesInternal;
        let combined = "" + username[0] + "\u2026";
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
const Constants = fn(1085);
({ NON_USER_BOT_DISCRIMINATOR: closure_4, StatusTypes: hasOwnProperty } = Constants);
let c6 = 86400000;
let c7 = "???";
let closure_8 = { mode: "full", decoration: "never", identifiable: "auto" };
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((username, arg1) => {
  const cResult = c.c(2);
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
  const obj2 = {};
  return presentUserTag(username, obj2, initialize.useStateFromStores(tmp6, tmp7));
}) : ((username, arg1) => {
  const merged = Object.assign(closure_8);
  const merged1 = Object.assign(arg1);
  const items = [StreamerModeStore];
  return presentUserTag(username, {}, initialize.useStateFromStores(items, () => StreamerModeStore.hidePersonalInformation));
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
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
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6);
}) : ((arg0) => {
  _require = arg0;
  const items = [UserStore];
  return require("initialize").useStateFromStores(items, () => {
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
      if (username != null) {
        toLocaleLowerCaseResult1 = username.toLocaleLowerCase();
      }
      hidePersonalInformation = obj.toLocaleLowerCase() === toLocaleLowerCaseResult1;
      const toLocaleLowerCaseResult = obj.toLocaleLowerCase();
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
  if (closure_10) {
    const cResult = c.c(5);
    let str4 = globalThis;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [StreamerModeStore];
      const fn = function o() {
        return StreamerModeStore.hidePersonalInformation;
      };
      cResult[0] = items;
      cResult[1] = fn;
      tmp14 = items;
      tmp15 = fn;
    } else {
      [tmp14, tmp15] = cResult;
    }
    const tmpResult = c;
    const stateFromStores = initialize.useStateFromStores(tmp14, tmp15);
    let tmp18 = null;
    if (null != guildId) {
      if (cResult[2] === stateFromStores) {
      }
      const obj5 = nameFromUser(guildId);
      let tmp21 = stateFromStores;
      if (stateFromStores) {
        const username2 = guildId.username;
        tmp18 = username2 == tmp18;
        let toLocaleLowerCaseResult1;
        if (!tmp18) {
          toLocaleLowerCaseResult1 = username2.toLocaleLowerCase();
        }
        tmp21 = obj5.toLocaleLowerCase() === toLocaleLowerCaseResult1;
        const toLocaleLowerCaseResult = obj5.toLocaleLowerCase();
      }
      if (tmp21) {
        tmp21 = "0" === guildId.discriminator;
      }
      let combined = obj5;
      if (tmp21) {
        str4 = "";
        combined = "" + obj5[0] + "\u2026";
      }
      cResult[2] = stateFromStores;
      cResult[3] = guildId;
      cResult[4] = combined;
    }
    const tmpResult3 = initialize;
  } else {
    const items1 = [StreamerModeStore];
    const stateFromStores1 = initialize.useStateFromStores(items1, () => StreamerModeStore.hidePersonalInformation);
    if (null != guildId) {
      const obj2 = nameFromUser(guildId);
      let tmp8 = stateFromStores1;
      if (stateFromStores1) {
        const username = guildId.username;
        let toLocaleLowerCaseResult3;
        if (username != null) {
          toLocaleLowerCaseResult3 = username.toLocaleLowerCase();
        }
        tmp8 = obj2.toLocaleLowerCase() === toLocaleLowerCaseResult3;
        const toLocaleLowerCaseResult2 = obj2.toLocaleLowerCase();
      }
      if (tmp8) {
        tmp8 = "0" === guildId.discriminator;
      }
      let combined1 = obj2;
      if (tmp8) {
        const _HermesInternal = HermesInternal;
        combined1 = "" + obj2[0] + "\u2026";
      }
      const tmp6 = combined1;
    }
    const tmpResult4 = initialize;
  }
  return tmp6;
}
function getGlobalName(user) {
  if (null != user) {
    const globalName = user.globalName;
    let tmp = null != globalName;
    if (tmp) {
      tmp = globalName.length > 0;
    }
    if (tmp) {
      let global_name = user.globalName;
    } else {
      const global_name1 = user.global_name;
      let tmp2 = null != global_name1;
      if (tmp2) {
        tmp2 = global_name1.length > 0;
      }
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
  } else if (null == inviter) {
    if (flag) {
      const obj = {};
      const merged = Object.assign(closure_8);
      const merged1 = Object.assign(undefined);
      let hidePersonalInformation = "auto" !== obj.identifiable;
      if (!hidePersonalInformation) {
        hidePersonalInformation = StreamerModeStore.hidePersonalInformation;
      }
      let username = presentUserTag(inviter, obj, hidePersonalInformation);
    } else {
      username = inviter.username;
      if (username == null) {
        username = c7;
      }
    }
    let tmp11;
    if (undefined !== username) {
      let combined = username;
      if (null != undefined) {
        const _HermesInternal = HermesInternal;
        combined = "" + undefined + " (" + username + ")";
      }
      tmp11 = combined;
    }
    return tmp11;
  } else {
    const globalName = inviter.globalName;
    let tmp = null != globalName;
    if (tmp) {
      tmp = globalName.length > 0;
    }
    if (tmp) {
      let global_name = inviter.globalName;
    } else {
      const global_name1 = inviter.global_name;
      let tmp2 = null != global_name1;
      if (tmp2) {
        tmp2 = global_name1.length > 0;
      }
      if (tmp2) {
        global_name = inviter.global_name;
      }
    }
  }
}
function humanizeStatus(status, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const isMobile = obj.isMobile;
  const isVR = obj.isVR;
  if (constants.ONLINE === status) {
    const intl6 = util.intl;
    const string = intl6.string;
    const t = util.t;
    if (tmp2) {
      let stringResult = string(t.SWnU0R);
    } else if (tmp) {
      stringResult = string(t["9hghLD"]);
    } else {
      stringResult = string(t.WbGtnH);
    }
    return stringResult;
  } else if (constants.OFFLINE === status) {
    const intl5 = util.intl;
    return intl5.string(util.t.Vv0abJ);
  } else if (constants.IDLE === status) {
    const intl4 = util.intl;
    return intl4.string(util.t.qWbtVU);
  } else if (constants.DND === status) {
    const intl3 = util.intl;
    return intl3.string(util.t.jaNpQH);
  } else if (constants.INVISIBLE === status) {
    const intl2 = util.intl;
    return intl2.string(util.t.bg24HO);
  } else if (constants.STREAMING === status) {
    const intl = util.intl;
    return intl.string(util.t.XKYej5);
  } else {
    const UNKNOWN = constants.UNKNOWN;
    return null;
  }
  tmp = undefined !== isMobile && isMobile;
  tmp2 = undefined !== isVR && isVR;
}
function getUserTag(user, arg1) {
  const obj = {};
  const merged = Object.assign(closure_8);
  const merged1 = Object.assign(arg1);
  let hidePersonalInformation = "auto" !== obj.identifiable;
  if (!hidePersonalInformation) {
    hidePersonalInformation = StreamerModeStore.hidePersonalInformation;
  }
  return presentUserTag(user, obj, hidePersonalInformation);
}
function getUserIsStaff() {
  const currentUser = UserStore.getCurrentUser();
  return null != currentUser && currentUser.isStaff();
}
function accountAgeInRange(createdAt, arg1) {
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
    let tmp4 = null == maxDaysOld;
    if (!tmp4) {
      tmp4 = diff <= c6 * maxDaysOld;
    }
    if (tmp4) {
      tmp4 = diff >= c6 * minDaysOld;
    }
    return tmp4;
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("utils/UserUtils.tsx");

export default {
  getName,
  useName,
  isNameConcealed(str) {
    let endsWithResult = 2 === str.length;
    if (endsWithResult) {
      endsWithResult = str.endsWith("\u2026");
    }
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
    let tmp5 = diff <= c6 * 30;
    if (tmp5) {
      tmp5 = diff >= 0;
    }
    flag = tmp5;
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
    let tmp5 = diff <= c6 * 7;
    if (tmp5) {
      tmp5 = diff >= 0;
    }
    flag = tmp5;
  }
  return flag;
};
export { getUserTag };
export const useUserTag = tmp3;
export const useDirectMessageRecipient = tmp4;
export { getUserIsStaff };