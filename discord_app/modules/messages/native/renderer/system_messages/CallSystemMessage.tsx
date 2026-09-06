// discord_app/modules/messages/native/renderer/system_messages/CallSystemMessage.tsx
import utils_AvatarUtils from "../../../../../utils/native/AvatarUtils.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import getHumanizedCallDurationDefault from "../../../getHumanizedCallDuration.tsx";
import useIsCallActive from "../../../../calls/mobile/useIsCallActive.tsx";
import ChannelRTCStore from "../../../../calls/ChannelRTCStore.tsx";
import AuthenticationStore from "../../../../../stores/AuthenticationStore.tsx";
import VoiceStateStore from "../../../../../stores/VoiceStateStore.tsx";

require = fn;
const ME = fn(1074).ME;
const ParticipantTypes = fn(4581).ParticipantTypes;
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
  const intl = tmp7(1114).intl;
  const string = intl.string;
  const t = tmp7(1114).t;
  if (checkIsCallActiveResult) {
    let str2 = "";
    if (checkIsCallActiveResult) {
      if (null == userVoiceChannelId) {
        const intl3 = tmp7(1114).intl;
        str2 = intl3.string(tmp7(1114).t.DqA3mi);
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
      const intl2 = tmp7(1114).intl;
      obj = { duration: tmp6, timestamp: null };
      let tmp7Result = tmp7(4242);
      obj.timestamp = tmp7Result.calendarFormat(message.timestamp);
      formatToPlainStringResult = intl2.formatToPlainString(tmp7(1114).t.SBDnp1, obj);
    } else {
      tmp7Result = tmp7(4242);
      formatToPlainStringResult = tmp7Result.calendarFormat(message.timestamp);
    }
    const author = message.author;
    mapped = [tmp7(1399).ensureAvatarSource(author.getAvatarSource(undefined)).uri];
    const tmp7Result1 = tmp7(1399);
  }
  obj = {
    title: stringResult1,
    description: formatToPlainStringResult,
    isCallActive: checkIsCallActiveResult,
    missed: tmp9,
    avatarURLs: mapped,
    rawMilliseconds: null,
  };
  const timestamp = message.timestamp;
  obj.rawMilliseconds = timestamp.valueOf();
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj;
};
