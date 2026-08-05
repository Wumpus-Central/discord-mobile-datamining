// discord_app/modules/messages/native/renderer/system_messages/CallSystemMessage.tsx
import getParticipants from "getParticipants";
import fetchFingerprint from "fetchFingerprint";
import updateVoiceState from "updateVoiceState";
import { ME } from "ME";
import { ParticipantTypes } from "ParticipantTypes";
import { useIsCallActive } from "../../../../calls/mobile/useIsCallActive.tsx";
import { getHumanizedCallDuration } from "../../../getHumanizedCallDuration.tsx";
import { createCommonMessage } from "createCommonMessage.tsx";

const require = arg1;
const result = require("updateVoiceState").fileFinishedImporting("modules/messages/native/renderer/system_messages/CallSystemMessage.tsx");

export const createCallSystemMessage = function createCallSystemMessage(message) {
  message = message.message;
  id = id.getId();
  const channelId = message.getChannelId();
  const call = message.call;
  userVoiceChannelId = userVoiceChannelId.getUserVoiceChannelId(ME, id);
  const tmp6 = getHumanizedCallDuration(message);
  participants = participants.getParticipants(channelId);
  let obj = useIsCallActive;
  const checkIsCallActiveResult = obj.checkIsCallActive(channelId, message.id);
  let tmp9 = !checkIsCallActiveResult;
  if (!checkIsCallActiveResult) {
    tmp9 = null != call;
  }
  if (tmp9) {
    const participants1 = call.participants;
    tmp9 = -1 === participants1.indexOf(id);
  }
  const intl = tmp7(1236).intl;
  const string = intl.string;
  const t = tmp7(1236).t;
  if (checkIsCallActiveResult) {
    let str2 = "";
    if (checkIsCallActiveResult) {
      if (null == userVoiceChannelId) {
        const intl3 = tmp7(1236).intl;
        str2 = intl3.string(tmp7(1236).t.DqA3mi);
      } else {
        str2 = "";
      }
    }
    const found = participants.filter((type) => type.type === constants.USER && !type.ringing);
    let mapped = found.map((user) => {
      user = user.user;
      return callback(table[8]).ensureAvatarSource(user.getAvatarSource(undefined)).uri;
    });
    let formatToPlainStringResult = str2;
    let stringResult1 = string(t["NGg/fm"]);
    const stringResult = string(t["NGg/fm"]);
  } else {
    if (tmp9) {
      stringResult1 = string(t["2CnhoI"]);
    } else {
      stringResult1 = string(t.v05Xd6);
    }
    if (null != tmp6) {
      const intl2 = tmp7(1236).intl;
      obj = { duration: null, timestamp: null };
      obj[0] = tmp6;
      let tmp7Result = tmp7(3925);
      obj[1] = tmp7Result.calendarFormat(message.timestamp);
      formatToPlainStringResult = intl2.formatToPlainString(tmp7(1236).t.SBDnp1, obj);
    } else {
      tmp7Result = tmp7(3925);
      formatToPlainStringResult = tmp7Result.calendarFormat(message.timestamp);
    }
    const author = message.author;
    mapped = [tmp7(1419).ensureAvatarSource(author.getAvatarSource(undefined)).uri];
    const tmp7Result1 = tmp7(1419);
  }
  obj = { title: stringResult1, description: formatToPlainStringResult, isCallActive: checkIsCallActiveResult, missed: tmp9, avatarURLs: mapped, rawMilliseconds: timestamp.valueOf() };
  timestamp = message.timestamp;
  const merged = Object.assign(createCommonMessage(message));
  return obj;
};