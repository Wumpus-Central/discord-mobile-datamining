// === Module 8115: CallSystemMessage ===

// Module 8115 (CallSystemMessage)
import util from "util" /* 1115 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1400 */;
import DateUtils from "DateUtils" /* 4321 */;
import createCommonMessageDefault from "createCommonMessage" /* 8100 */;
import getHumanizedCallDurationDefault from "getHumanizedCallDuration" /* 8116 */;
import useIsCallActive from "useIsCallActive" /* 8117 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4656 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import VoiceStateStore from "VoiceStateStore" /* 4659 */;

require = fn;
const ME = fn(1074).ME;
const ParticipantTypes = fn(4661).ParticipantTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/CallSystemMessage.tsx");

export const createCallSystemMessage = function createCallSystemMessage(message) {
  message = message.message;
  const id = AuthenticationStore.getId();
  const channelId = message.getChannelId();
  const call = message.call;
  const userVoiceChannelId = VoiceStateStore.getUserVoiceChannelId(ME, id);
  const tmp6 = getHumanizedCallDurationDefault(message);
  const participants = ChannelRTCStore.getParticipants(channelId);
  const checkIsCallActiveResult = useIsCallActive.checkIsCallActive(channelId, message.id);
  let tmp9 = !checkIsCallActiveResult;
  if (!checkIsCallActiveResult) {
    tmp9 = null != call;
  }
  if (tmp9) {
    const participants1 = call.participants;
    tmp9 = -1 === participants1.indexOf(id);
  }
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (checkIsCallActiveResult) {
    let str2 = "";
    if (checkIsCallActiveResult) {
      if (null == userVoiceChannelId) {
        const intl3 = util.intl;
        str2 = intl3.string(util.t.DqA3mi);
      } else {
        str2 = "";
      }
    }
    const found = participants.filter((type) => type.type === constants.USER && !type.ringing);
    let mapped = found.map((user) => {
      user = user.user;
      return utils_AvatarUtils.ensureAvatarSource(user.getAvatarSource(undefined)).uri;
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
      const intl2 = util.intl;
      const obj2 = { duration: tmp6, timestamp: DateUtils.calendarFormat(message.timestamp) };
      formatToPlainStringResult = intl2.formatToPlainString(util.t.SBDnp1, obj2);
      const tmp7Result = DateUtils;
    } else {
      formatToPlainStringResult = DateUtils.calendarFormat(message.timestamp);
      const tmp7Result3 = DateUtils;
    }
    const author = message.author;
    mapped = [utils_AvatarUtils.ensureAvatarSource(author.getAvatarSource(undefined)).uri];
    const tmp7Result4 = utils_AvatarUtils;
  }
  const obj3 = { title: stringResult1, description: formatToPlainStringResult, isCallActive: checkIsCallActiveResult, missed: tmp9, avatarURLs: mapped, rawMilliseconds: null };
  const timestamp = message.timestamp;
  obj3.rawMilliseconds = timestamp.valueOf();
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj3;
};