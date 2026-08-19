// discord_app/modules/channel/useChannelName.tsx
import nameFromUserDefault from "../../utils/UserUtils.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import getHash from "../experiments/ExperimentStore.tsx";
import markAllUserIdListsStale from "../../stores/RelationshipStore.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import ME from "../../Constants.tsx";

const require = fn;
function computeChannelName(channel, closure_9, closure_7, flag, arg4) {
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = arg4;
  if (arg4 === undefined) {
    flag2 = false;
  }
  if (channel.isObfuscated()) {
    const intl3 = require("../../intl/index.native.tsx").intl;
    return intl3.string(require("../../intl/index.native.tsx").t["/YzI63"]);
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
        const mapped = recipients.map(currentUser.getUser);
        const first = callback(mapped.filter(require("../../utils/GlobalUtils.tsx").isNotNullish), 1)[0];
        if (null == first) {
          return "???";
        } else {
          if (!first.isProvisional) {
            let str17 = nickname.getNickname(first.id);
            if (str17 == null) {
              str17 = nameFromUserDefault.getName(first);
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
        _require = nickname;
        const mapped1 = recipients1.map(currentUser.getUser);
        const found = mapped1.filter(require("../../utils/GlobalUtils.tsx").isNotNullish);
        const mapped2 = found.map((item, index) => {
          nickname = nickname.getNickname(item.id);
          if (nickname == null) {
            nickname = closure_1_1(closure_1_2[6]).getName(item);
            const obj = closure_1_1(closure_1_2[6]);
          }
          return nickname;
        });
        if (mapped2.length > 0) {
          let joined = mapped2.join(", ");
        } else {
          const intl2 = tmp25(1236).intl;
          const obj = { name: null };
          obj[0] = nameFromUserDefault.getName(currentUser.getCurrentUser());
          joined = intl2.formatToPlainString(tmp25(1236).t["9Uk8PF"], obj);
        }
      }
    } else {
      if (constants.GUILD_ANNOUNCEMENT !== type) {
        if (constants.GUILD_TEXT !== type) {
          if (constants.GUILD_FORUM !== type) {
            if (constants.GUILD_MEDIA !== type) {
              if (constants.GUILD_CATEGORY === type) {
                if (channel.id === closure_8) {
                  const intl = require("../../intl/index.native.tsx").intl;
                  let stringResult = intl.string(require("../../intl/index.native.tsx").t.GSfOoo);
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
                      if (constants.GUILD_VOICE !== type) {
                        if (constants.GUILD_STAGE_VOICE !== type) {
                          return str;
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
const result = require("obj132").fileFinishedImporting("modules/channel/useChannelName.tsx");

export default function useChannelName(arg0) {
  const _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const items = [closure_6, closure_4, closure_5];
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != closure_0) {
      tmp2 = computeChannelName(closure_0, closure_1_6, closure_1_5, flag);
    }
    return tmp2;
  });
};
export const computeDefaultGroupDmNameFromUserIds = function computeDefaultGroupDmNameFromUserIds(arr, getUser) {
  const _require = arg2;
  const mapped = arr.map(getUser.getUser);
  const found = mapped.filter(require("../../utils/GlobalUtils.tsx").isNotNullish);
  const mapped1 = found.map((item, index) => {
    nickname = nickname.getNickname(item.id);
    if (nickname == null) {
      nickname = closure_1_1(closure_1_2[6]).getName(item);
      const obj = closure_1_1(closure_1_2[6]);
    }
    return nickname;
  });
  if (mapped1.length > 0) {
    let joined = mapped1.join(", ");
  } else {
    const intl = tmp(1236).intl;
    const obj = { name: null };
    obj[0] = nameFromUserDefault.getName(getUser.getCurrentUser());
    joined = intl.formatToPlainString(tmp(1236).t["9Uk8PF"], obj);
  }
  return joined;
};
export const computeDefaultGroupDmName = function computeDefaultGroupDmName(recipients, getUser) {
  recipients = recipients.recipients;
  const _require = arg2;
  const mapped = recipients.map(getUser.getUser);
  const found = mapped.filter(require("../../utils/GlobalUtils.tsx").isNotNullish);
  const mapped1 = found.map((item, index) => {
    nickname = nickname.getNickname(item.id);
    if (nickname == null) {
      nickname = closure_1_1(closure_1_2[6]).getName(item);
      const obj = closure_1_1(closure_1_2[6]);
    }
    return nickname;
  });
  if (mapped1.length > 0) {
    let joined = mapped1.join(", ");
  } else {
    const intl = tmp(1236).intl;
    const obj = { name: null };
    obj[0] = nameFromUserDefault.getName(getUser.getCurrentUser());
    joined = intl.formatToPlainString(tmp(1236).t["9Uk8PF"], obj);
  }
  return joined;
};
export const useComputedGroupDmName = function useComputedGroupDmName(arg0) {
  const _require = arg0;
  const items = [closure_6, closure_5];
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    let obj = callback;
    let tmp = null;
    if (null != callback) {
      tmp = null;
      if (obj.isMultiUserDM()) {
        const recipients = obj.recipients;
        callback = closure_1_5;
        const mapped = recipients.map(closure_1_6.getUser);
        const found = mapped.filter(callback(dependencyMap[5]).isNotNullish);
        const mapped1 = found.map((item, index) => {
          nickname = nickname.getNickname(item.id);
          if (nickname == null) {
            nickname = closure_1_1(closure_1_2[6]).getName(item);
            const obj = closure_1_1(closure_1_2[6]);
          }
          return nickname;
        });
        if (mapped1.length > 0) {
          let joined = mapped1.join(", ");
        } else {
          const intl = tmp3(dependencyMap[7]).intl;
          obj = { name: null };
          obj[0] = nameFromUserDefault.getName(closure_1_6.getCurrentUser());
          joined = intl.formatToPlainString(tmp3(dependencyMap[7]).t["9Uk8PF"], obj);
        }
      }
    }
    return tmp;
  });
};
export const computeGroupDmName = function computeGroupDmName(isObfuscated) {
  if (!isObfuscated.isObfuscated()) {
    if (isObfuscated.isMultiUserDM()) {
      const name = isObfuscated.name;
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
  str = str.replace(/\\"/g, "\"");
  return str.replace(/\\\\/g, "\\");
};