// discord_app/modules/channel/useChannelName.tsx
import _slicedToArray from "_slicedToArray";
import getHash from "getHash";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import { ChannelTypes } from "ME";

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
    const intl2 = _require(1236).intl;
    return intl2.string(_require(1236).t["/YzI63"]);
  } else {
    const type = channel.type;
    if (ChannelTypes.DM === type) {
      if ("" !== str) {
        let combined = str;
        if (flag) {
          const _HermesInternal5 = HermesInternal;
          combined = "@" + str;
        }
        return combined;
      } else {
        const recipients = channel.recipients;
        const mapped = recipients.map(closure_9.getUser);
        const first = callback(mapped.filter(_require(1351).isNotNullish), 1)[0];
        if (null == first) {
          return "???";
        } else {
          if (!first.isProvisional) {
            let str12 = closure_7.getNickname(first.id);
            if (str12 == null) {
              str12 = importDefault(4032).getName(first);
              const obj3 = importDefault(4032);
            }
            if (str12 == null) {
              str12 = "???";
            }
            let globalName = str12;
            if (flag) {
              const _HermesInternal4 = HermesInternal;
              globalName = "@" + str12;
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
        const found = mapped1.filter(_require(1351).isNotNullish);
        const mapped2 = found.map((id) => {
          nickname = nickname.getNickname(id.id);
          if (nickname == null) {
            nickname = outer1_1(outer1_2[6]).getName(id);
            const obj = outer1_1(outer1_2[6]);
          }
          return nickname;
        });
        if (mapped2.length > 0) {
          let joined = mapped2.join(", ");
        } else {
          const intl = tmp20(1236).intl;
          const obj = { name: null };
          obj[0] = importDefault(4032).getName(closure_9.getCurrentUser());
          joined = intl.formatToPlainString(tmp20(1236).t["9Uk8PF"], obj);
          const obj2 = importDefault(4032);
        }
      }
    } else {
      if (tmp3.GUILD_ANNOUNCEMENT !== type) {
        if (tmp3.GUILD_TEXT !== type) {
          if (tmp3.GUILD_FORUM !== type) {
            if (tmp3.GUILD_MEDIA !== type) {
              if (tmp3.PUBLIC_THREAD !== type) {
                if (tmp3.PRIVATE_THREAD !== type) {
                  if (tmp3.ANNOUNCEMENT_THREAD !== type) {
                    if (tmp3.GUILD_VOICE !== type) {
                      if (tmp3.GUILD_STAGE_VOICE !== type) {
                        if (tmp3.GUILD_CATEGORY !== type) {
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
      let combined2 = str;
      if (flag) {
        const _HermesInternal3 = HermesInternal;
        combined2 = "#" + str;
      }
      return combined2;
    }
  }
}
const result = require("upsertRelationship").fileFinishedImporting("modules/channel/useChannelName.tsx");

export default function useChannelName(arg0) {
  const _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const items = [mergeGuildAvatar, getHash, upsertRelationship];
  return _require(589).useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != closure_0) {
      tmp2 = outer1_8(tmp, outer1_6, outer1_5, flag);
    }
    return tmp2;
  });
};
export const computeDefaultGroupDmNameFromUserIds = function computeDefaultGroupDmNameFromUserIds(arr, getUser) {
  const _require = arg2;
  const mapped = arr.map(getUser.getUser);
  const found = mapped.filter(_require(1351).isNotNullish);
  const mapped1 = found.map((id) => {
    nickname = nickname.getNickname(id.id);
    if (nickname == null) {
      nickname = outer1_1(outer1_2[6]).getName(id);
      const obj = outer1_1(outer1_2[6]);
    }
    return nickname;
  });
  if (mapped1.length > 0) {
    let joined = mapped1.join(", ");
  } else {
    const intl = tmp(1236).intl;
    const obj = { name: null };
    obj[0] = importDefault(4032).getName(getUser.getCurrentUser());
    joined = intl.formatToPlainString(tmp(1236).t["9Uk8PF"], obj);
    const obj2 = importDefault(4032);
  }
  return joined;
};
export const computeDefaultGroupDmName = function computeDefaultGroupDmName(recipients, getUser) {
  recipients = recipients.recipients;
  const _require = arg2;
  const mapped = recipients.map(getUser.getUser);
  const found = mapped.filter(_require(1351).isNotNullish);
  const mapped1 = found.map((id) => {
    nickname = nickname.getNickname(id.id);
    if (nickname == null) {
      nickname = outer1_1(outer1_2[6]).getName(id);
      const obj = outer1_1(outer1_2[6]);
    }
    return nickname;
  });
  if (mapped1.length > 0) {
    let joined = mapped1.join(", ");
  } else {
    const intl = tmp(1236).intl;
    const obj = { name: null };
    obj[0] = importDefault(4032).getName(getUser.getCurrentUser());
    joined = intl.formatToPlainString(tmp(1236).t["9Uk8PF"], obj);
    const obj2 = importDefault(4032);
  }
  return joined;
};
export const useComputedGroupDmName = function useComputedGroupDmName(arg0) {
  const _require = arg0;
  const items = [mergeGuildAvatar, upsertRelationship];
  return _require(589).useStateFromStores(items, () => {
    let obj = callback;
    let tmp = null;
    if (null != callback) {
      tmp = null;
      if (obj.isMultiUserDM()) {
        const recipients = obj.recipients;
        callback = outer1_5;
        const mapped = recipients.map(outer1_6.getUser);
        const found = mapped.filter(callback(outer1_2[5]).isNotNullish);
        const mapped1 = found.map((id) => {
          nickname = nickname.getNickname(id.id);
          if (nickname == null) {
            nickname = outer1_1(outer1_2[6]).getName(id);
            const obj = outer1_1(outer1_2[6]);
          }
          return nickname;
        });
        if (mapped1.length > 0) {
          let joined = mapped1.join(", ");
        } else {
          const intl = tmp3(tmp4[7]).intl;
          obj = { name: null };
          obj[0] = outer1_1(tmp4[6]).getName(obj2.getCurrentUser());
          joined = intl.formatToPlainString(tmp3(tmp4[7]).t["9Uk8PF"], obj);
          const obj4 = outer1_1(tmp4[6]);
        }
        obj2 = outer1_6;
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
  return str.replace(/\\"/g, "\"").replace(/\\\\/g, "\\");
};