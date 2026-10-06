// discord_app/modules/activities/utils/InviteEmbedTextUtils.tsx
import Constants from "../../../Constants.tsx";
import intl6 from "../../../intl/index.native.tsx";
import _modDef3007 from "../../request_to_stream/RequestToStream.messages.js";
import NicknameUtils from "../../../utils/NicknameUtils.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function getAskToJoinText(author, appName, isPrivate, id4, arg4) {
  if (author.author.id === id4) {
    let formatToPlainStringResult;
    if (isPrivate.isPrivate()) {
      const user = UserStore.getUser(isPrivate.getRecipientId());
      if (null != user) {
        let formatToPlainString2Result;
        const intl2 = intl6.intl;
        const formatToPlainString2 = intl2.formatToPlainString;
        const t2 = intl6.t;
        if (arg4) {
          const obj2 = { username: user.globalName, appName };
          formatToPlainString2Result = formatToPlainString2(t2.JddpN2, obj2);
        } else {
          const obj3 = { username: user.globalName, appName };
          formatToPlainString2Result = formatToPlainString2(t2.gYVkSW, obj3);
        }
        return formatToPlainString2Result;
      }
    }
    const intl = intl6.intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = intl6.t;
    if (arg4) {
      const obj4 = { appName };
      formatToPlainStringResult = formatToPlainString(t["2N1kNS"], obj4);
    } else {
      const obj5 = { appName };
      formatToPlainStringResult = formatToPlainString(t.IA6uDV, obj5);
    }
    return formatToPlainStringResult;
  } else {
    let formatToPlainString3Result;
    const intl3 = intl6.intl;
    const formatToPlainString3 = intl3.formatToPlainString;
    const t3 = intl6.t;
    if (arg4) {
      const obj6 = { username: author.author.globalName, appName };
      formatToPlainString3Result = formatToPlainString3(t3.XE8axA, obj6);
    } else {
      const obj = { username: author.author.globalName, appName };
      formatToPlainString3Result = formatToPlainString3(t3.hgcjOn, obj);
    }
    return formatToPlainString3Result;
  }
}
const ActivityActionTypes = Constants.ActivityActionTypes;
const result = size.fileFinishedImporting("modules/activities/utils/InviteEmbedTextUtils.tsx");

export const getHeaderText = function getHeaderText(name, arg1, arg2) {
  if (ActivityActionTypes.LISTEN === arg1) {
    const intl5 = intl6.intl;
    const obj2 = { name };
    return intl5.formatToPlainString(intl6.t["/8czH4"], obj2);
  } else if (ActivityActionTypes.WATCH === arg1) {
    const intl4 = intl6.intl;
    const obj = { name };
    return intl4.formatToPlainString(intl6.t.BBJXVk, obj);
  } else if (ActivityActionTypes.JOIN === arg1) {
    let stringResult;
    if (!arg2) {
      const intl3 = intl6.intl;
      stringResult = intl3.string(intl6.t.pkq6Vq);
    }
    return stringResult;
  } else if (ActivityActionTypes.STREAM_REQUEST === arg1) {
    const intl2 = intl6.intl;
    return intl2.string(_modDef3007.DKHhec);
  } else {
    const JOIN_REQUEST = ActivityActionTypes.JOIN_REQUEST;
    const intl = intl6.intl;
    return intl.string(intl6.t.Ckxb6j);
  }
};
export const getRequestToStreamText = function getRequestToStreamText(author, guild_id, id) {
  let obj2;
  let stringResult;
  if (author.author.id === id) {
    const intl2 = intl6.intl;
    stringResult = intl2.string(_modDef3007["8B3U5O"]);
  } else {
    const intl = intl6.intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj = { username: obj2.getName(guild_id.guild_id, guild_id.id, author.author) };
    const prop = _modDef3007["d/qbC0"];
    obj2 = NicknameUtils;
    stringResult = formatToPlainString(prop, obj);
  }
  return stringResult;
};
export { getAskToJoinText };
export const getDeadGameInviteText = function getDeadGameInviteText(activity, name_override, guild_id, id4, arg4) {
  let obj2;
  activity = activity.activity;
  let type;
  if (activity != null) {
    type = activity.type;
  }
  if (ActivityActionTypes.LISTEN !== type) {
    if (ActivityActionTypes.WATCH !== type) {
      if (ActivityActionTypes.JOIN !== type) {
        if (ActivityActionTypes.STREAM_REQUEST === type) {
          let stringResult;
          if (activity.author.id === id4) {
            const intl2 = intl6.intl;
            stringResult = intl2.string(_modDef3007["8B3U5O"]);
          } else {
            const intl = intl6.intl;
            const formatToPlainString = intl.formatToPlainString;
            const obj = { username: obj2.getName(guild_id.guild_id, guild_id.id, activity.author) };
            const prop = _modDef3007["d/qbC0"];
            obj2 = NicknameUtils;
            stringResult = formatToPlainString(prop, obj);
          }
          return stringResult;
        } else {
          const JOIN_REQUEST = ActivityActionTypes.JOIN_REQUEST;
          return getAskToJoinText(activity, name_override, guild_id, id4, true);
        }
      }
    }
  }
  const intl3 = intl6.intl;
  const string = intl3.string;
  const t = intl6.t;
  return string(arg4 ? t.x1UXGR : t["Ek+51n"]);
};
export const getPartyText = function getPartyText(arg0) {
  let activityActionType;
  let maxPartySize;
  let partySize;
  ({ activityActionType, maxPartySize, partySize } = arg0);
  let str = "";
  if (activityActionType !== ActivityActionTypes.STREAM_REQUEST) {
    let formatToPlainStringResult1;
    if (activityActionType === ActivityActionTypes.LISTEN) {
      let formatToPlainStringResult;
      if (maxPartySize > 0) {
        const intl4 = intl6.intl;
        const obj2 = { partySize, maxPartySize };
        formatToPlainStringResult = intl4.formatToPlainString(intl6.t.Zogoou, obj2);
      } else {
        const intl3 = intl6.intl;
        const obj3 = { partySize };
        formatToPlainStringResult = intl3.formatToPlainString(intl6.t.UGei0j, obj3);
      }
      formatToPlainStringResult1 = formatToPlainStringResult;
    } else if (maxPartySize > 0) {
      const intl2 = intl6.intl;
      const obj4 = { partySize, maxPartySize };
      formatToPlainStringResult1 = intl2.formatToPlainString(intl6.t.gLu7NU, obj4);
    } else {
      const intl = intl6.intl;
      const obj = { partySize };
      formatToPlainStringResult1 = intl.formatToPlainString(intl6.t["65JnWC"], obj);
    }
    str = formatToPlainStringResult1;
  }
  return str;
};
