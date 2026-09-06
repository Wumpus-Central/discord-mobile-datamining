// discord_app/modules/activities/utils/InviteEmbedTextUtils.tsx
import util from "../../../intl/index.native.tsx";
import _modDef2882 from "../../request_to_stream/RequestToStream.messages.js";
import NicknameUtils from "../../../utils/NicknameUtils.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
function getAskToJoinText(author, appName, isPrivate, id1, arg4) {
  if (author.author.id === id1) {
    if (isPrivate.isPrivate()) {
      const user = UserStore.getUser(isPrivate.getRecipientId());
      if (null != user) {
        const intl2 = util.intl;
        const formatToPlainString2 = intl2.formatToPlainString;
        const t2 = util.t;
        if (arg4) {
          let obj = { username: user.globalName, appName };
          let formatToPlainString2Result = formatToPlainString2(t2.JddpN2, obj);
        } else {
          obj = { username: user.globalName, appName };
          formatToPlainString2Result = formatToPlainString2(t2.gYVkSW, obj);
        }
        return formatToPlainString2Result;
      }
    }
    const intl = util.intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = util.t;
    if (arg4) {
      const obj1 = { appName };
      let formatToPlainStringResult = formatToPlainString(t["2N1kNS"], obj1);
    } else {
      const obj2 = { appName };
      formatToPlainStringResult = formatToPlainString(t.IA6uDV, obj2);
    }
    return formatToPlainStringResult;
  } else {
    const intl3 = util.intl;
    const formatToPlainString3 = intl3.formatToPlainString;
    const t3 = util.t;
    if (arg4) {
      const obj3 = { username: author.author.globalName, appName };
      let formatToPlainString3Result = formatToPlainString3(t3.XE8axA, obj3);
    } else {
      obj = { username: author.author.globalName, appName };
      formatToPlainString3Result = formatToPlainString3(t3.hgcjOn, obj);
    }
    return formatToPlainString3Result;
  }
}
const ActivityActionTypes = fn(1074).ActivityActionTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/InviteEmbedTextUtils.tsx");

export const getHeaderText = function getHeaderText(name, type5, arg2) {
  if (ActivityActionTypes.LISTEN === type5) {
    const intl5 = util.intl;
    let obj = { name };
    return intl5.formatToPlainString(util.t["/8czH4"], obj);
  } else if (ActivityActionTypes.WATCH === type5) {
    const intl4 = util.intl;
    obj = { name };
    return intl4.formatToPlainString(util.t.BBJXVk, obj);
  } else if (ActivityActionTypes.JOIN === type5) {
    let stringResult;
    if (!arg2) {
      const intl3 = util.intl;
      stringResult = intl3.string(util.t.pkq6Vq);
    }
    return stringResult;
  } else if (ActivityActionTypes.STREAM_REQUEST === type5) {
    const intl2 = util.intl;
    return intl2.string(_modDef2882.DKHhec);
  } else {
    const JOIN_REQUEST = ActivityActionTypes.JOIN_REQUEST;
    const intl = util.intl;
    return intl.string(util.t.Ckxb6j);
  }
};
export const getRequestToStreamText = function getRequestToStreamText(author, guild_id, id) {
  if (author.author.id === id) {
    const intl2 = util.intl;
    let stringResult = intl2.string(_modDef2882["8B3U5O"]);
  } else {
    const intl = util.intl;
    const obj = { username: NicknameUtils.getName(guild_id.guild_id, guild_id.id, author.author) };
    stringResult = intl.formatToPlainString(_modDef2882["d/qbC0"], obj);
  }
  return stringResult;
};
export { getAskToJoinText };
export const getDeadGameInviteText = function getDeadGameInviteText(activity, name_override, guild_id, id1, arg4) {
  activity = activity.activity;
  let type;
  if (activity != null) {
    type = activity.type;
  }
  if (ActivityActionTypes.LISTEN !== type) {
    if (ActivityActionTypes.WATCH !== type) {
      if (ActivityActionTypes.JOIN !== type) {
        if (ActivityActionTypes.STREAM_REQUEST === type) {
          if (activity.author.id === id1) {
            const intl2 = util.intl;
            let stringResult = intl2.string(_modDef2882["8B3U5O"]);
          } else {
            const intl = util.intl;
            const obj = { username: NicknameUtils.getName(guild_id.guild_id, guild_id.id, activity.author) };
            stringResult = intl.formatToPlainString(_modDef2882["d/qbC0"], obj);
          }
          return stringResult;
        } else {
          const JOIN_REQUEST = ActivityActionTypes.JOIN_REQUEST;
          return getAskToJoinText(activity, name_override, guild_id, id1, true);
        }
      }
    }
  }
  const intl3 = util.intl;
  const t = util.t;
  return intl3.string(arg4 ? t.x1UXGR : t["Ek+51n"]);
};
export const getPartyText = function getPartyText(arg0) {
  ({ activityActionType, maxPartySize, partySize } = arg0);
  if (activityActionType === ActivityActionTypes.STREAM_REQUEST) {
    return "";
  } else {
    if (activityActionType !== tmp.LISTEN) {
      if (maxPartySize > 0) {
        const intl2 = util.intl;
        let obj = { partySize, maxPartySize };
        let formatToPlainStringResult = intl2.formatToPlainString(util.t.gLu7NU, obj);
      } else {
        const intl = util.intl;
        obj = { partySize };
        formatToPlainStringResult = intl.formatToPlainString(util.t["65JnWC"], obj);
      }
    }
    if (maxPartySize > 0) {
      const intl4 = util.intl;
      obj = { partySize, maxPartySize };
      let formatToPlainStringResult1 = intl4.formatToPlainString(util.t.Zogoou, obj);
    } else {
      const intl3 = util.intl;
      const obj1 = { partySize };
      formatToPlainStringResult1 = intl3.formatToPlainString(util.t.UGei0j, obj1);
    }
  }
};
