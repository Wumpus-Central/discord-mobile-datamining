// === Module 5049: useChannelName ===

// Module 5049 (useChannelName)
import intl4 from "intl" /* 1126 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import UserUtilsDefault from "UserUtils" /* 4728 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ExperimentStore from "ExperimentStore" /* 4782 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, multiUserDM, nickname;

let metroImportAll;
let metroImportDefault;
const f90063 = (id) => {
  nickname = nickname.getNickname(id.id);
  if (nickname == null) {
    const obj = closure_2_1(closure_2_2[6]);
    nickname = obj.getName(id);
  }
  return nickname;
};
function computeChannelName(channel, UserStore, RelationshipStore) {
  let obj2;
  let flag2 = arg4;
  if (arg4 === undefined) {
    flag2 = false;
  }
  if (channel.isObfuscated()) {
    const intl3 = require("intl").intl;
    return intl3.string(require("intl").t["/YzI63"]);
  } else {
    const type = channel.type;
    if (constants.DM === type) {
      if ("" !== channel.name) {
        let combined = str;
        if (flag) {
          const _HermesInternal6 = HermesInternal;
          combined = "@" + str;
        }
        return combined;
      } else {
        const recipients = channel.recipients;
        const mapped = recipients.map(UserStore.getUser);
        const first = _slicedToArray(mapped.filter(require("GlobalUtils").isNotNullish), 1)[0];
        let str19 = "???";
        if (null != first) {
          let globalName;
          if (first.isProvisional) {
            if (null != first.globalName) {
              globalName = first.globalName;
            }
            str19 = globalName;
          }
          let str17 = RelationshipStore.getNickname(first.id);
          if (str17 == null) {
            const obj3 = UserUtilsDefault;
            str17 = obj3.getName(first);
          }
          if (str17 == null) {
            str17 = "???";
          }
          globalName = str17;
          if (flag) {
            const _HermesInternal5 = HermesInternal;
            globalName = "@" + str17;
          }
        }
        return str19;
      }
    } else if (constants.GROUP_DM === type) {
      let tmp14 = str;
      if ("" === channel.name) {
        let joined;
        const recipients1 = channel.recipients;
        _require = RelationshipStore;
        const mapped1 = recipients1.map(UserStore.getUser);
        const found = mapped1.filter(require("GlobalUtils").isNotNullish);
        const mapped2 = found.map(f90063);
        if (mapped2.length > 0) {
          joined = mapped2.join(", ");
        } else {
          const intl2 = tmp24(1126).intl;
          const formatToPlainString = intl2.formatToPlainString;
          const obj = { name: obj2.getName(UserStore.getCurrentUser()) };
          const v9Uk8PF = tmp24(1126).t["9Uk8PF"];
          obj2 = UserUtilsDefault;
          joined = formatToPlainString(v9Uk8PF, obj);
        }
        tmp14 = joined;
      }
      return tmp14;
    } else {
      if (constants.GUILD_ANNOUNCEMENT !== type) {
        if (constants.GUILD_TEXT !== type) {
          if (constants.GUILD_FORUM !== type) {
            if (constants.GUILD_MEDIA !== type) {
              if (constants.GUILD_APP !== type) {
                if (constants.GUILD_CATEGORY === type) {
                  let stringResult;
                  if (channel.id === closure_8) {
                    const intl = require("intl").intl;
                    stringResult = intl.string(require("intl").t.GSfOoo);
                  } else {
                    stringResult = str;
                    if (flag2) {
                      const _HermesInternal3 = HermesInternal;
                      const str9 = channel.name.replace(/\\/g, "\\\\");
                      stringResult = "#\"" + str9.replace(/"/g, "\\\"") + "\"";
                    }
                  }
                  return stringResult;
                } else {
                  let combined1;
                  if (constants.PUBLIC_THREAD !== type) {
                    if (constants.PRIVATE_THREAD !== type) {
                      if (constants.ANNOUNCEMENT_THREAD !== type) {
                        if (constants.MEDIA_THREAD !== type) {
                          if (constants.GUILD_VOICE !== type) {
                            if (constants.GUILD_STAGE_VOICE !== type) {
                              if (constants.GUILD_STORE !== type) {
                                if (constants.GUILD_DIRECTORY !== type) {
                                  if (constants.GUILD_SPACE !== type) {
                                    const UNKNOWN = constants.UNKNOWN;
                                  }
                                }
                              }
                              return channel.name;
                            }
                          }
                        }
                      }
                    }
                  }
                  if (flag2) {
                    const _HermesInternal2 = HermesInternal;
                    const str4 = channel.name.replace(/\\/g, "\\\\");
                    combined1 = "#\"" + str4.replace(/"/g, "\\\"") + "\"";
                  } else {
                    combined1 = str;
                    if (flag) {
                      combined1 = str;
                      if (channel.isThread()) {
                        const _HermesInternal = HermesInternal;
                        combined1 = "\"" + str + "\"";
                      }
                    }
                  }
                  return combined1;
                }
              }
            }
          }
        }
      }
      let combined2 = str;
      if (flag) {
        const _HermesInternal4 = HermesInternal;
        combined2 = "#" + str;
      }
      return combined2;
    }
  }
}
({ ChannelTypes: metroImportDefault, NULL_STRING_CHANNEL_ID: metroImportAll } = Constants);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let tmp7;
  _require = arg0;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore, RelationshipStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      let obj4;
      let tmp = null;
      if (null != multiUserDM) {
        tmp = null;
        if (multiUserDM.isMultiUserDM()) {
          let joined;
          const recipients = obj.recipients;
          multiUserDM = RelationshipStore;
          const mapped = recipients.map(UserStore.getUser);
          const found = mapped.filter(GlobalUtils.isNotNullish);
          const mapped1 = found.map(f90063);
          if (mapped1.length > 0) {
            joined = mapped1.join(", ");
          } else {
            const intl = intl4.intl;
            const formatToPlainString = intl.formatToPlainString;
            const obj3 = { name: obj4.getName(UserStore.getCurrentUser()) };
            const v9Uk8PF = intl4.t["9Uk8PF"];
            obj4 = UserUtilsDefault;
            joined = formatToPlainString(v9Uk8PF, obj3);
          }
          tmp = joined;
        }
      }
      return tmp;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp7);
}) : ((arg0) => {
  _require = arg0;
  let obj = require("get initialized");
  const items = [UserStore, RelationshipStore];
  return obj.useStateFromStores(items, () => {
    let obj4;
    let obj = closure_0;
    let tmp = null;
    if (null != closure_0) {
      tmp = null;
      if (obj.isMultiUserDM()) {
        let joined;
        const recipients = obj.recipients;
        closure_0 = RelationshipStore;
        const mapped = recipients.map(UserStore.getUser);
        const found = mapped.filter(GlobalUtils.isNotNullish);
        const mapped1 = found.map(f90063);
        if (mapped1.length > 0) {
          joined = mapped1.join(", ");
        } else {
          const intl = intl4.intl;
          const formatToPlainString = intl.formatToPlainString;
          const obj3 = { name: obj4.getName(UserStore.getCurrentUser()) };
          const v9Uk8PF = intl4.t["9Uk8PF"];
          obj4 = UserUtilsDefault;
          joined = formatToPlainString(v9Uk8PF, obj3);
        }
        tmp = joined;
      }
    }
    return tmp;
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let first;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  let closure_1 = tmp4;
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore, ExperimentStore, RelationshipStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    let tmp9;
    if (cResult[2] === (undefined !== arg1 && arg1)) {
      tmp9 = cResult[3];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(first, tmp9);
  }
  const fn = function c() {
    let tmp2 = null;
    if (null != closure_0) {
      tmp2 = computeChannelName(closure_0, UserStore, RelationshipStore, closure_1);
    }
    return tmp2;
  };
  cResult[1] = arg0;
  cResult[2] = undefined !== arg1 && arg1;
  cResult[3] = fn;
  tmp9 = fn;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const items = [UserStore, ExperimentStore, RelationshipStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != closure_0) {
      tmp2 = computeChannelName(closure_0, UserStore, RelationshipStore, flag);
    }
    return tmp2;
  });
});
function computeDefaultGroupDmNameFromUserIds(arr, getUser, arg2) {
  let closure_0;
  let joined;
  let obj2;
  _require = arg2;
  const mapped = arr.map(getUser.getUser);
  const found = mapped.filter(require("GlobalUtils").isNotNullish);
  const mapped1 = found.map(f90063);
  if (mapped1.length > 0) {
    joined = mapped1.join(", ");
  } else {
    const intl = tmp(1126).intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj = { name: obj2.getName(getUser.getCurrentUser()) };
    const v9Uk8PF = tmp(1126).t["9Uk8PF"];
    obj2 = UserUtilsDefault;
    joined = formatToPlainString(v9Uk8PF, obj);
  }
  return joined;
}
function computeDefaultGroupDmName(recipients, getUser, arg2) {
  let closure_0;
  let joined;
  let obj2;
  recipients = recipients.recipients;
  _require = arg2;
  const mapped = recipients.map(getUser.getUser);
  const found = mapped.filter(require("GlobalUtils").isNotNullish);
  const mapped1 = found.map(f90063);
  if (mapped1.length > 0) {
    joined = mapped1.join(", ");
  } else {
    const intl = tmp(1126).intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj = { name: obj2.getName(getUser.getCurrentUser()) };
    const v9Uk8PF = tmp(1126).t["9Uk8PF"];
    obj2 = UserUtilsDefault;
    joined = formatToPlainString(v9Uk8PF, obj);
  }
  return joined;
}
function escapeChannelName(channelName) {
  const str = channelName.replace(/\\/g, "\\\\");
  return str.replace(/"/g, "\\\"");
}
const result = size.fileFinishedImporting("modules/channel/useChannelName.tsx");

export default tmp4;
export { computeDefaultGroupDmNameFromUserIds };
export { computeDefaultGroupDmName };
export const useComputedGroupDmName = tmp3;
export const computeGroupDmName = function computeGroupDmName(stateFromStores) {
  if (!stateFromStores.isObfuscated()) {
    if (stateFromStores.isMultiUserDM()) {
      const name = stateFromStores.name;
      let tmp;
      if ("" !== name) {
        tmp = name;
      }
      return tmp;
    }
  }
};
export { computeChannelName };
export { escapeChannelName };
export const unescapeChannelName = function unescapeChannelName(str) {
  str = str.replace(/\\"/g, "\"");
  return str.replace(/\\\\/g, "\\");
};