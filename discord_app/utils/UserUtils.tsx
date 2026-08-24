// === Module 4223: nameFromUser ===

// Module 4223 (nameFromUser)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import closure_2 from "initialize" /* 4224 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;

require = arg1;
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
    let hidePersonalInformation = closure_2.hidePersonalInformation;
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
  const items = [closure_2];
  let stateFromStores = initialize.useStateFromStores(items, () => obj.hidePersonalInformation);
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
  const obj = initialize;
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
        hidePersonalInformation = closure_2.hidePersonalInformation;
      }
      let username = presentUserTag(inviter, obj, hidePersonalInformation);
      const tmp9 = presentUserTag;
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
    const intl6 = getSystemLocale.intl;
    const string = intl6.string;
    const t = getSystemLocale.t;
    if (tmp2) {
      let stringResult = string(t.SWnU0R);
    } else if (tmp) {
      stringResult = string(t["9hghLD"]);
    } else {
      stringResult = string(t.WbGtnH);
    }
    return stringResult;
  } else if (tmp3.OFFLINE === DND) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(getSystemLocale.t.Vv0abJ);
  } else if (tmp3.IDLE === DND) {
    const intl4 = getSystemLocale.intl;
    return intl4.string(getSystemLocale.t.qWbtVU);
  } else if (tmp3.DND === DND) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t.jaNpQH);
  } else if (tmp3.INVISIBLE === DND) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.bg24HO);
  } else if (tmp3.STREAMING === DND) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.XKYej5);
  } else {
    const UNKNOWN = tmp3.UNKNOWN;
    return null;
  }
  tmp = undefined !== isMobile && isMobile;
  tmp2 = undefined !== isVR && isVR;
}
function presentUserTag(username, identifiable, arg2) {
  if (null == username) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.sKdZ6U);
  } else {
    username = username.username;
    let tmp = null != username;
    if (tmp) {
      tmp = username.length > 0;
    }
    if (tmp) {
      let flag = false;
      if ("always" !== identifiable.identifiable) {
        flag = arg2;
        if ("never" === identifiable.identifiable) {
          flag = true;
        }
      }
      if ("0" !== username.discriminator) {
        if (username.discriminator !== closure_4) {
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
    hidePersonalInformation = closure_2.hidePersonalInformation;
  }
  return presentUserTag(user, obj, hidePersonalInformation);
}
function useUserTag(user) {
  const merged = Object.assign(closure_8);
  const merged1 = Object.assign(arg1);
  const items = [closure_2];
  return presentUserTag(user, {}, initialize.useStateFromStores(items, () => obj.hidePersonalInformation));
}
function useDirectMessageRecipient(arg0) {
  const _require = arg0;
  const items = [closure_3];
  return _require(589).useStateFromStores(items, () => {
    if (null != closure_0) {
      let user = null;
      if (obj.isPrivate()) {
        user = null;
        if (obj.isDM()) {
          user = closure_1_3.getUser(obj.getRecipientId());
        }
      }
      return user;
    }
  });
}
function getUserIsStaff() {
  currentUser = currentUser.getCurrentUser();
  return null != currentUser && currentUser.isStaff();
}
({ NON_USER_BOT_DISCRIMINATOR: c4, StatusTypes: c5 } = ME);
let c6 = 86400000;
let c7 = "???";
let closure_8 = { mode: "full", decoration: "never", identifiable: "auto" };
const result = require("set").fileFinishedImporting("utils/UserUtils.tsx");

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
export const accountAgeInRange = function accountAgeInRange(createdAt) {
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