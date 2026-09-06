// === Module 4713: computeChannelName ===

// Module 4713 (computeChannelName)
import nameFromUserDefault from "nameFromUser" /* 4404 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "getHash" /* 4476 */;
import closure_5 from "markAllUserIdListsStale" /* 4209 */;
import closure_6 from "mergeGuildAvatar" /* 1371 */;
import ME from "ME" /* 1074 */;

const require = arg1;
function computeChannelName(channel, closure_9, closure_7, arg3, arg4) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let flag2 = arg4;
  if (arg4 === undefined) {
    flag2 = false;
  }
  if (channel.isObfuscated()) {
    const intl3 = _require(1114).intl;
    return intl3.string(_require(1114).t["/YzI63"]);
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
        const mapped = recipients.map(closure_9.getUser);
        const first = callback(mapped.filter(_require(1369).isNotNullish), 1)[0];
        if (null == first) {
          return "???";
        } else {
          if (!first.isProvisional) {
            let str17 = closure_7.getNickname(first.id);
            if (str17 == null) {
              str17 = nameFromUserDefault.getName(first);
              const obj3 = nameFromUserDefault;
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
    } else if (tmp3.GROUP_DM === type) {
      if ("" !== str) {
        return str;
      } else {
        const recipients1 = channel.recipients;
        _require = closure_7;
        const mapped1 = recipients1.map(closure_9.getUser);
        const found = mapped1.filter(_require(1369).isNotNullish);
        const mapped2 = found.map((id) => {
          nickname = nickname.getNickname(id.id);
          if (nickname == null) {
            nickname = closure_1_1(closure_1_2[6]).getName(id);
            const obj = closure_1_1(closure_1_2[6]);
          }
          return nickname;
        });
        if (mapped2.length > 0) {
          let joined = mapped2.join(", ");
        } else {
          const intl2 = tmp25(1114).intl;
          const obj = { name: null };
          obj[0] = nameFromUserDefault.getName(closure_9.getCurrentUser());
          joined = intl2.formatToPlainString(tmp25(1114).t["9Uk8PF"], obj);
          const obj2 = nameFromUserDefault;
        }
      }
    } else {
      if (tmp3.GUILD_ANNOUNCEMENT !== type) {
        if (tmp3.GUILD_TEXT !== type) {
          if (tmp3.GUILD_FORUM !== type) {
            if (tmp3.GUILD_MEDIA !== type) {
              if (tmp3.GUILD_APP !== type) {
                if (tmp3.GUILD_CATEGORY === type) {
                  if (channel.id === closure_8) {
                    const intl = _require(1114).intl;
                    let stringResult = intl.string(_require(1114).t.GSfOoo);
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
                  if (tmp3.PUBLIC_THREAD !== type) {
                    if (tmp3.PRIVATE_THREAD !== type) {
                      if (tmp3.ANNOUNCEMENT_THREAD !== type) {
                        if (tmp3.MEDIA_THREAD !== type) {
                          if (tmp3.GUILD_VOICE !== type) {
                            if (tmp3.GUILD_STAGE_VOICE !== type) {
                              if (tmp3.GUILD_STORE !== type) {
                                if (tmp3.GUILD_DIRECTORY !== type) {
                                  if (tmp3.GUILD_SPACE !== type) {
                                    const UNKNOWN = tmp3.UNKNOWN;
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
({ ChannelTypes: error, NULL_STRING_CHANNEL_ID: closure_8 } = ME);
const result = require("set").fileFinishedImporting("modules/channel/useChannelName.tsx");

export default function useChannelName(arg0) {
  const _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const items = [closure_6, closure_4, closure_5];
  return _require(504).useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != closure_0) {
      tmp2 = closure_1_9(tmp, closure_1_6, closure_1_5, flag);
    }
    return tmp2;
  });
};
export const computeDefaultGroupDmNameFromUserIds = function computeDefaultGroupDmNameFromUserIds(arr, getUser) {
  const _require = arg2;
  const mapped = arr.map(getUser.getUser);
  const found = mapped.filter(_require(1369).isNotNullish);
  const mapped1 = found.map((id) => {
    nickname = nickname.getNickname(id.id);
    if (nickname == null) {
      nickname = closure_1_1(closure_1_2[6]).getName(id);
      const obj = closure_1_1(closure_1_2[6]);
    }
    return nickname;
  });
  if (mapped1.length > 0) {
    let joined = mapped1.join(", ");
  } else {
    const intl = tmp(1114).intl;
    const obj = { name: null };
    obj[0] = nameFromUserDefault.getName(getUser.getCurrentUser());
    joined = intl.formatToPlainString(tmp(1114).t["9Uk8PF"], obj);
    const obj2 = nameFromUserDefault;
  }
  return joined;
};
export const computeDefaultGroupDmName = function computeDefaultGroupDmName(recipients, getUser) {
  recipients = recipients.recipients;
  const _require = arg2;
  const mapped = recipients.map(getUser.getUser);
  const found = mapped.filter(_require(1369).isNotNullish);
  const mapped1 = found.map((id) => {
    nickname = nickname.getNickname(id.id);
    if (nickname == null) {
      nickname = closure_1_1(closure_1_2[6]).getName(id);
      const obj = closure_1_1(closure_1_2[6]);
    }
    return nickname;
  });
  if (mapped1.length > 0) {
    let joined = mapped1.join(", ");
  } else {
    const intl = tmp(1114).intl;
    const obj = { name: null };
    obj[0] = nameFromUserDefault.getName(getUser.getCurrentUser());
    joined = intl.formatToPlainString(tmp(1114).t["9Uk8PF"], obj);
    const obj2 = nameFromUserDefault;
  }
  return joined;
};
export const useComputedGroupDmName = function useComputedGroupDmName(stateFromStores) {
  const _require = stateFromStores;
  const items = [closure_6, closure_5];
  return _require(504).useStateFromStores(items, () => {
    let obj = stateFromStores;
    let tmp = null;
    if (null != stateFromStores) {
      tmp = null;
      if (obj.isMultiUserDM()) {
        const recipients = obj.recipients;
        stateFromStores = closure_1_5;
        const mapped = recipients.map(closure_1_6.getUser);
        const found = mapped.filter(stateFromStores(closure_1_2[5]).isNotNullish);
        const mapped1 = found.map((id) => {
          nickname = nickname.getNickname(id.id);
          if (nickname == null) {
            nickname = closure_1_1(closure_1_2[6]).getName(id);
            const obj = closure_1_1(closure_1_2[6]);
          }
          return nickname;
        });
        if (mapped1.length > 0) {
          let joined = mapped1.join(", ");
        } else {
          const intl = tmp3(tmp4[7]).intl;
          obj = { name: null };
          obj[0] = closure_1_1(tmp4[6]).getName(obj2.getCurrentUser());
          joined = intl.formatToPlainString(tmp3(tmp4[7]).t["9Uk8PF"], obj);
          const obj4 = closure_1_1(tmp4[6]);
        }
        obj2 = closure_1_6;
      }
    }
    return tmp;
  });
};
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
export const escapeChannelName = function escapeChannelName(channelName) {
  return channelName.replace(/\\/g, "\\\\").replace(/"/g, "\\\"");
};
export const unescapeChannelName = function unescapeChannelName(str) {
  return str.replace(/\\"/g, "\"").replace(/\\\\/g, "\\");
};