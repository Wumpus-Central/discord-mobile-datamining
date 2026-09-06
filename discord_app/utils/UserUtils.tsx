// === Module 4404: UserUtils ===

// Module 4404 (UserUtils)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import StreamerModeStore from "StreamerModeStore" /* 4405 */;
import UserStore from "UserStore" /* 1371 */;

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
    globalName = primary1.globalName;
    let tmp2 = null != globalName;
    if (tmp2) {
      tmp2 = globalName.length > 0;
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
function useName(username) {
  const items = [StreamerModeStore];
  let stateFromStores = initialize.useStateFromStores(items, () => StreamerModeStore.hidePersonalInformation);
  if (null != username) {
    const obj2 = nameFromUser(username);
    if (stateFromStores) {
      username = username.username;
      let toLocaleLowerCaseResult1;
      if (username != null) {
        toLocaleLowerCaseResult1 = username.toLocaleLowerCase();
      }
      stateFromStores = obj2.toLocaleLowerCase() === toLocaleLowerCaseResult1;
      const toLocaleLowerCaseResult = obj2.toLocaleLowerCase();
    }
    if (stateFromStores) {
      stateFromStores = "0" === username.discriminator;
    }
    let combined = obj2;
    if (stateFromStores) {
      const _HermesInternal = HermesInternal;
      combined = "" + obj2[0] + "\u2026";
    }
    return combined;
  }
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
      global_name = user.global_name;
      let tmp2 = null != global_name;
      if (tmp2) {
        tmp2 = global_name.length > 0;
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
      global_name = inviter.global_name;
      let tmp2 = null != global_name;
      if (tmp2) {
        tmp2 = global_name.length > 0;
      }
      if (tmp2) {
        global_name = inviter.global_name;
      }
    }
  }
}
function humanizeStatus(DND, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const isMobile = obj.isMobile;
  const isVR = obj.isVR;
  if (constants.ONLINE === DND) {
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
  } else if (constants.OFFLINE === DND) {
    const intl5 = util.intl;
    return intl5.string(util.t.Vv0abJ);
  } else if (constants.IDLE === DND) {
    const intl4 = util.intl;
    return intl4.string(util.t.qWbtVU);
  } else if (constants.DND === DND) {
    const intl3 = util.intl;
    return intl3.string(util.t.jaNpQH);
  } else if (constants.INVISIBLE === DND) {
    const intl2 = util.intl;
    return intl2.string(util.t.bg24HO);
  } else if (constants.STREAMING === DND) {
    const intl = util.intl;
    return intl.string(util.t.XKYej5);
  } else {
    const UNKNOWN = constants.UNKNOWN;
    return null;
  }
  tmp = undefined !== isMobile && isMobile;
  tmp2 = undefined !== isVR && isVR;
}
function presentUserTag(username, identifiable, hidePersonalInformation) {
  if (null == username) {
    const intl = util.intl;
    return intl.string(util.t.sKdZ6U);
  } else {
    username = username.username;
    let tmp = null != username;
    if (tmp) {
      tmp = username.length > 0;
    }
    if (tmp) {
      let flag = false;
      if ("always" !== identifiable.identifiable) {
        flag = hidePersonalInformation;
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
function useUserTag(user, arg1) {
  const merged = Object.assign(closure_8);
  const merged1 = Object.assign(arg1);
  const items = [StreamerModeStore];
  return presentUserTag(user, {}, initialize.useStateFromStores(items, () => StreamerModeStore.hidePersonalInformation));
}
function useDirectMessageRecipient(arg0) {
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
}
function getUserIsStaff() {
  const currentUser = UserStore.getCurrentUser();
  return null != currentUser && currentUser.isStaff();
}
const Constants = fn(1074);
({ NON_USER_BOT_DISCRIMINATOR: closure_4, StatusTypes: hasOwnProperty } = Constants);
let c6 = 86400000;
let c7 = "???";
let closure_8 = { mode: "full", decoration: "never", identifiable: "auto" };
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
  useUserTag,
  getUserIsStaff,
  getFormattedName,
  getGlobalName,
  humanizeStatus,
  useDirectMessageRecipient
};
export { nameFromUser };
export { getName };
export { useName };
export { getGlobalName };
export { getFormattedName };
export { humanizeStatus };
export const accountAgeInRange = function accountAgeInRange(createdAt, arg1) {
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
};
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
export { useUserTag };
export { useDirectMessageRecipient };
export { getUserIsStaff };