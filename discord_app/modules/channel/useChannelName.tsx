// === Module 5049: useChannelName ===

// Module 5049 (useChannelName)
import util from "util" /* 1126 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import UserUtilsDefault from "UserUtils" /* 4728 */;
import _slicedToArray from "module_32" /* 32 */;
import ExperimentStore from "ExperimentStore" /* 4782 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserStore from "UserStore" /* 1377 */;

const require = globalThis.__r;

require = fn;
function computeChannelName(channel, UserStore, RelationshipStore) {
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = arg4;
  if (arg4 === undefined) {
    flag2 = false;
  }
  if (channel.isObfuscated()) {
    const intl3 = require("util").intl;
    return intl3.string(require("util").t["/YzI63"]);
  } else {
    const type = channel.type;
    if (constants.DM === type) {
      if ("" !== str) {
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
        if (null == first) {
          return "???";
        } else {
          if (!first.isProvisional) {
            let str17 = RelationshipStore.getNickname(first.id);
            if (str17 == null) {
              str17 = UserUtilsDefault.getName(first);
            }
            if (str17 == null) {
              str17 = "???";
            }
            let globalName = str17;
            if (flag) {
              const _HermesInternal5 = HermesInternal;
              globalName = "@" + str17;
            }
          }
          globalName = first.globalName;
        }
      }
    } else if (constants.GROUP_DM === type) {
      if ("" !== str) {
        return str;
      } else {
        const recipients1 = channel.recipients;
        _require = RelationshipStore;
        const mapped1 = recipients1.map(UserStore.getUser);
        const found = mapped1.filter(require("GlobalUtils").isNotNullish);
        const mapped2 = found.map((id) => {
          nickname = nickname.getNickname(id.id);
          if (nickname == null) {
            nickname = UserUtilsDefault.getName(id);
          }
          return nickname;
        });
        if (mapped2.length > 0) {
          let joined = mapped2.join(", ");
        } else {
          const intl2 = tmp25(1126).intl;
          const obj = { name: UserUtilsDefault.getName(UserStore.getCurrentUser()) };
          joined = intl2.formatToPlainString(tmp25(1126).t["9Uk8PF"], obj);
        }
      }
    } else {
      if (constants.GUILD_ANNOUNCEMENT !== type) {
        if (constants.GUILD_TEXT !== type) {
          if (constants.GUILD_FORUM !== type) {
            if (constants.GUILD_MEDIA !== type) {
              if (constants.GUILD_APP !== type) {
                if (constants.GUILD_CATEGORY === type) {
                  if (channel.id === closure_8) {
                    const intl = require("util").intl;
                    let stringResult = intl.string(require("util").t.GSfOoo);
                  } else {
                    stringResult = str;
                    if (flag2) {
                      const _HermesInternal3 = HermesInternal;
                      stringResult = "#\"" + str.replace(/\\/g, "\\\\").replace(/"/g, "\\\"") + "\"";
                      const str9 = str.replace(/\\/g, "\\\\");
                    }
                  }
                  return stringResult;
                } else {
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
                              return str;
                            }
                          }
                        }
                      }
                    }
                  }
                  if (flag2) {
                    const _HermesInternal2 = HermesInternal;
                    let combined1 = "#\"" + str.replace(/\\/g, "\\\\").replace(/"/g, "\\\"") + "\"";
                    const str4 = str.replace(/\\/g, "\\\\");
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
const Constants = fn(1085);
({ ChannelTypes: closure_7, NULL_STRING_CHANNEL_ID: closure_8 } = Constants);
fn(558);
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore, RelationshipStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      let tmp = null;
      if (null != closure_0) {
        tmp = null;
        if (obj.isMultiUserDM()) {
          const recipients = obj.recipients;
          closure_0 = RelationshipStore;
          const mapped = recipients.map(UserStore.getUser);
          const found = mapped.filter(GlobalUtils.isNotNullish);
          const mapped1 = found.map((id) => {
            nickname = nickname.getNickname(id.id);
            if (nickname == null) {
              nickname = UserUtilsDefault.getName(id);
            }
            return nickname;
          });
          if (mapped1.length > 0) {
            let joined = mapped1.join(", ");
          } else {
            const intl = util.intl;
            const obj3 = { name: UserUtilsDefault.getName(UserStore.getCurrentUser()) };
            joined = intl.formatToPlainString(util.t["9Uk8PF"], obj3);
          }
        }
      }
      return tmp;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7);
}) : ((arg0) => {
  _require = arg0;
  const items = [UserStore, RelationshipStore];
  return require("initialize").useStateFromStores(items, () => {
    let tmp = null;
    if (null != nickname) {
      tmp = null;
      if (obj.isMultiUserDM()) {
        const recipients = obj.recipients;
        nickname = RelationshipStore;
        const mapped = recipients.map(UserStore.getUser);
        const found = mapped.filter(GlobalUtils.isNotNullish);
        const mapped1 = found.map((id) => {
          nickname = nickname.getNickname(id.id);
          if (nickname == null) {
            nickname = UserUtilsDefault.getName(id);
          }
          return nickname;
        });
        if (mapped1.length > 0) {
          let joined = mapped1.join(", ");
        } else {
          const intl = util.intl;
          const obj3 = { name: UserUtilsDefault.getName(UserStore.getCurrentUser()) };
          joined = intl.formatToPlainString(util.t["9Uk8PF"], obj3);
        }
      }
    }
    return tmp;
  });
});
function computeDefaultGroupDmNameFromUserIds(arr, getUser, arg2) {
  _require = arg2;
  const mapped = arr.map(getUser.getUser);
  const found = mapped.filter(require("GlobalUtils").isNotNullish);
  const mapped1 = found.map((id) => {
    nickname = nickname.getNickname(id.id);
    if (nickname == null) {
      nickname = UserUtilsDefault.getName(id);
    }
    return nickname;
  });
  if (mapped1.length > 0) {
    let joined = mapped1.join(", ");
  } else {
    const intl = tmp(1126).intl;
    const obj = { name: UserUtilsDefault.getName(getUser.getCurrentUser()) };
    joined = intl.formatToPlainString(tmp(1126).t["9Uk8PF"], obj);
  }
  return joined;
}
function computeDefaultGroupDmName(recipients, getUser, arg2) {
  recipients = recipients.recipients;
  _require = arg2;
  const mapped = recipients.map(getUser.getUser);
  const found = mapped.filter(require("GlobalUtils").isNotNullish);
  const mapped1 = found.map((id) => {
    nickname = nickname.getNickname(id.id);
    if (nickname == null) {
      nickname = UserUtilsDefault.getName(id);
    }
    return nickname;
  });
  if (mapped1.length > 0) {
    let joined = mapped1.join(", ");
  } else {
    const intl = tmp(1126).intl;
    const obj = { name: UserUtilsDefault.getName(getUser.getCurrentUser()) };
    joined = intl.formatToPlainString(tmp(1126).t["9Uk8PF"], obj);
  }
  return joined;
}
function escapeChannelName(channelName) {
  return channelName.replace(/\\/g, "\\\\").replace(/"/g, "\\\"");
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/useChannelName.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  const cResult = require("c").c(4);
  closure_1 = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore, ExperimentStore, RelationshipStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === tmp4) {
      let tmp9 = cResult[3];
    }
    return tmp(504).useStateFromStores(first, tmp9);
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
  const obj = require("c");
  tmp = _require;
}) : ((arg0) => {
  _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const items = [UserStore, ExperimentStore, RelationshipStore];
  return require("initialize").useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != closure_0) {
      tmp2 = computeChannelName(closure_0, UserStore, RelationshipStore, flag);
    }
    return tmp2;
  });
});
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