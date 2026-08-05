import { getSystemLocale } from "../../../intl/index.native.tsx";
import { getNickname } from "../../../utils/NicknameUtils.tsx";
import { messagesProxy } from "../../request_to_stream/RequestToStream.messages.js";
// discord_app/modules/activities/utils/InviteEmbedTextUtils.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import { ActivityActionTypes } from "ME";

const require = arg1;
function getAskToJoinText(author, name_override, isPrivate, id1, arg4) {
  if (author.author.id === id1) {
    if (isPrivate.isPrivate()) {
      user = user.getUser(isPrivate.getRecipientId());
      if (null != user) {
        const intl2 = getSystemLocale /* getSystemLocale */.intl;
        const formatToPlainString2 = intl2.formatToPlainString;
        const t2 = getSystemLocale /* getSystemLocale */.t;
        if (arg4) {
          let obj = { username: null, appName: null };
          obj[0] = user.globalName;
          obj[1] = name_override;
          let formatToPlainString2Result = formatToPlainString2(t2.JddpN2, obj);
        } else {
          obj = { username: null, appName: null };
          obj[0] = user.globalName;
          obj[1] = name_override;
          formatToPlainString2Result = formatToPlainString2(t2.gYVkSW, obj);
        }
        return formatToPlainString2Result;
      }
    }
    const intl = getSystemLocale /* getSystemLocale */.intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = getSystemLocale /* getSystemLocale */.t;
    if (arg4) {
      const obj1 = { appName: null };
      obj1[0] = name_override;
      let formatToPlainStringResult = formatToPlainString(t["2N1kNS"], obj1);
    } else {
      const obj2 = { appName: null };
      obj2[0] = name_override;
      formatToPlainStringResult = formatToPlainString(t.IA6uDV, obj2);
    }
    return formatToPlainStringResult;
  } else {
    const intl3 = getSystemLocale /* getSystemLocale */.intl;
    const formatToPlainString3 = intl3.formatToPlainString;
    const t3 = getSystemLocale /* getSystemLocale */.t;
    if (arg4) {
      const obj3 = { username: null, appName: null };
      obj3[0] = author.author.globalName;
      obj3[1] = name_override;
      let formatToPlainString3Result = formatToPlainString3(t3.XE8axA, obj3);
    } else {
      obj = { username: null, appName: null };
      obj[0] = author.author.globalName;
      obj[1] = name_override;
      formatToPlainString3Result = formatToPlainString3(t3.hgcjOn, obj);
    }
    return formatToPlainString3Result;
  }
}
const result = require("getSystemLocale").fileFinishedImporting("modules/activities/utils/InviteEmbedTextUtils.tsx");

export const getHeaderText = function getHeaderText(arg0, arg1, arg2) {
  if (ActivityActionTypes.LISTEN === arg1) {
    const intl5 = getSystemLocale /* getSystemLocale */.intl;
    let obj = { name: null };
    obj[0] = arg0;
    return intl5.formatToPlainString(getSystemLocale /* getSystemLocale */.t["/8czH4"], obj);
  } else if (tmp.WATCH === arg1) {
    const intl4 = getSystemLocale /* getSystemLocale */.intl;
    obj = { name: null };
    obj[0] = arg0;
    return intl4.formatToPlainString(getSystemLocale /* getSystemLocale */.t.BBJXVk, obj);
  } else if (tmp.JOIN === arg1) {
    let stringResult;
    if (!arg2) {
      const intl3 = getSystemLocale /* getSystemLocale */.intl;
      stringResult = intl3.string(getSystemLocale /* getSystemLocale */.t.pkq6Vq);
    }
    return stringResult;
  } else if (tmp.STREAM_REQUEST === arg1) {
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    return intl2.string(messagesProxy.DKHhec);
  } else {
    const JOIN_REQUEST = tmp.JOIN_REQUEST;
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.Ckxb6j);
  }
};
export const getRequestToStreamText = function getRequestToStreamText(author, guild_id, id) {
  if (author.author.id === id) {
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    let stringResult = intl2.string(messagesProxy["8B3U5O"]);
  } else {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    const obj = { username: null };
    obj[0] = getNickname /* getNickname */.getName(guild_id.guild_id, guild_id.id, author.author);
    stringResult = intl.formatToPlainString(messagesProxy["d/qbC0"], obj);
    const obj2 = getNickname /* getNickname */;
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
    if (tmp2.WATCH !== type) {
      if (tmp2.JOIN !== type) {
        if (tmp2.STREAM_REQUEST === type) {
          if (activity.author.id === id1) {
            const intl2 = getSystemLocale /* getSystemLocale */.intl;
            let stringResult = intl2.string(messagesProxy["8B3U5O"]);
          } else {
            const intl = getSystemLocale /* getSystemLocale */.intl;
            const obj = { username: null };
            obj[0] = getNickname /* getNickname */.getName(guild_id.guild_id, guild_id.id, activity.author);
            stringResult = intl.formatToPlainString(messagesProxy["d/qbC0"], obj);
            const obj2 = getNickname /* getNickname */;
          }
          return stringResult;
        } else {
          const JOIN_REQUEST = tmp2.JOIN_REQUEST;
          return getAskToJoinText(activity, name_override, guild_id, id1, true);
        }
      }
    }
  }
  const intl3 = getSystemLocale /* getSystemLocale */.intl;
  const t = getSystemLocale /* getSystemLocale */.t;
  return intl3.string(arg4 ? t.x1UXGR : t["Ek+51n"]);
};
export const getPartyText = function getPartyText(arg0) {
  let activityActionType;
  let maxPartySize;
  let partySize;
  ({ activityActionType, maxPartySize, partySize } = arg0);
  if (activityActionType === ActivityActionTypes.STREAM_REQUEST) {
    return "";
  } else {
    if (activityActionType !== tmp.LISTEN) {
      if (maxPartySize > 0) {
        const intl2 = getSystemLocale /* getSystemLocale */.intl;
        let obj = { partySize: null, maxPartySize: null };
        obj[0] = partySize;
        obj[1] = maxPartySize;
        let formatToPlainStringResult = intl2.formatToPlainString(getSystemLocale /* getSystemLocale */.t.gLu7NU, obj);
      } else {
        const intl = getSystemLocale /* getSystemLocale */.intl;
        obj = { partySize: null };
        obj[0] = partySize;
        formatToPlainStringResult = intl.formatToPlainString(getSystemLocale /* getSystemLocale */.t["65JnWC"], obj);
      }
    }
    if (maxPartySize > 0) {
      const intl4 = getSystemLocale /* getSystemLocale */.intl;
      obj = { partySize: null, maxPartySize: null };
      obj[0] = partySize;
      obj[1] = maxPartySize;
      let formatToPlainStringResult1 = intl4.formatToPlainString(getSystemLocale /* getSystemLocale */.t.Zogoou, obj);
    } else {
      const intl3 = getSystemLocale /* getSystemLocale */.intl;
      const obj1 = { partySize: null };
      obj1[0] = partySize;
      formatToPlainStringResult1 = intl3.formatToPlainString(getSystemLocale /* getSystemLocale */.t.UGei0j, obj1);
    }
  }
};