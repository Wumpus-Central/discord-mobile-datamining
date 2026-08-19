// === Module 8202: createCallSystemMessage ===

// Module 8202 (createCallSystemMessage)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ensureAvatarSource from "ensureAvatarSource" /* 1438 */;
import resetCache from "resetCache" /* 4063 */;
import createCommonMessageDefault from "createCommonMessage" /* 8188 */;
import getHumanizedCallDurationDefault from "getHumanizedCallDuration" /* 8203 */;
import useIsCallActive from "useIsCallActive" /* 8204 */;
import getParticipants from "getParticipants" /* 4773 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import updateVoiceState from "updateVoiceState" /* 4542 */;
import { ME } from "ME" /* 676 */;
import { ParticipantTypes } from "ParticipantTypes" /* 4544 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/messages/native/renderer/system_messages/CallSystemMessage.tsx");

export const createCallSystemMessage = function createCallSystemMessage(message) {
  message = message.message;
  id = id.getId();
  const channelId = message.getChannelId();
  const call = message.call;
  userVoiceChannelId = userVoiceChannelId.getUserVoiceChannelId(ME, id);
  const tmp6 = getHumanizedCallDurationDefault(message);
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
  const intl = getSystemLocale.intl;
  const string = intl.string;
  const t = getSystemLocale.t;
  if (checkIsCallActiveResult) {
    let str2 = "";
    if (checkIsCallActiveResult) {
      if (null == userVoiceChannelId) {
        const intl3 = getSystemLocale.intl;
        str2 = intl3.string(getSystemLocale.t.DqA3mi);
      } else {
        str2 = "";
      }
    }
    const found = participants.filter((item, index) => item.type === constants.USER && !item.ringing);
    let mapped = found.map((item, index) => {
      const user = item.user;
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
      const intl2 = getSystemLocale.intl;
      obj = { duration: null, timestamp: null };
      obj[0] = tmp6;
      let tmp7Result = resetCache;
      obj[1] = tmp7Result.calendarFormat(message.timestamp);
      formatToPlainStringResult = intl2.formatToPlainString(getSystemLocale.t.SBDnp1, obj);
    } else {
      tmp7Result = resetCache;
      formatToPlainStringResult = tmp7Result.calendarFormat(message.timestamp);
    }
    const author = message.author;
    mapped = [ensureAvatarSource.ensureAvatarSource(author.getAvatarSource(undefined)).uri];
    const tmp7Result1 = ensureAvatarSource;
  }
  obj = { title: stringResult1, description: formatToPlainStringResult, isCallActive: checkIsCallActiveResult, missed: tmp9, avatarURLs: mapped, rawMilliseconds: timestamp.valueOf() };
  timestamp = message.timestamp;
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj;
};