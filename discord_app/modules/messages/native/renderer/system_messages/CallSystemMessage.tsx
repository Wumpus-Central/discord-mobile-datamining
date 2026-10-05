// discord_app/modules/messages/native/renderer/system_messages/CallSystemMessage.tsx
import Constants from "../../../../../Constants.tsx";
import intl4 from "../../../../../intl/index.native.tsx";
import utils_AvatarUtils from "../../../../../utils/native/AvatarUtils.tsx";
import DateUtils from "../../../../../utils/DateUtils.tsx";
import CallConstants from "../../../../calls/CallConstants.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import getHumanizedCallDurationDefault from "../../../getHumanizedCallDuration.tsx";
import useIsCallActive from "../../../../calls/mobile/useIsCallActive.tsx";
import ChannelRTCStore from "../../../../calls/ChannelRTCStore.tsx";
import AuthenticationStore from "../../../../../stores/AuthenticationStore.tsx";
import VoiceStateStore from "../../../../../stores/VoiceStateStore.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let user;

const ME = Constants.ME;
const ParticipantTypes = CallConstants.ParticipantTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/CallSystemMessage.tsx");

export const createCallSystemMessage = function createCallSystemMessage(message) {
  let formatToPlainStringResult;
  let mapped;
  let stringResult1;
  let timestamp;
  let tmp7Result;
  message = message.message;
  const id = AuthenticationStore.getId();
  const channelId = message.getChannelId();
  const call = message.call;
  const userVoiceChannelId = VoiceStateStore.getUserVoiceChannelId(ME, id);
  const tmp6 = getHumanizedCallDurationDefault(message);
  const participants = ChannelRTCStore.getParticipants(channelId);
  let obj = useIsCallActive;
  const checkIsCallActiveResult = obj.checkIsCallActive(channelId, message.id);
  let tmp9 = !checkIsCallActiveResult && null != call;
  if (tmp9) {
    const participants1 = call.participants;
    tmp9 = -1 === participants1.indexOf(id);
  }
  const intl = intl4.intl;
  const string = intl.string;
  const t = intl4.t;
  if (checkIsCallActiveResult) {
    let str2 = "";
    const stringResult = string(t["NGg/fm"]);
    if (checkIsCallActiveResult) {
      if (null == userVoiceChannelId) {
        const intl3 = intl4.intl;
        str2 = intl3.string(intl4.t.DqA3mi);
      } else {
        str2 = "";
      }
    }
    const found = participants.filter((type) => type.type === constants.USER && !type.ringing);
    mapped = found.map((user) => {
      user = user.user;
      const obj = utils_AvatarUtils;
      return obj.ensureAvatarSource(user.getAvatarSource(undefined)).uri;
    });
    formatToPlainStringResult = str2;
    stringResult1 = stringResult;
  } else {
    if (tmp9) {
      stringResult1 = string(t["2CnhoI"]);
    } else {
      stringResult1 = string(t.v05Xd6);
    }
    if (null != tmp6) {
      const intl2 = intl4.intl;
      const formatToPlainString = intl2.formatToPlainString;
      const obj2 = { duration: tmp6, timestamp: tmp7Result.calendarFormat(message.timestamp) };
      const SBDnp1 = intl4.t.SBDnp1;
      tmp7Result = DateUtils;
      formatToPlainStringResult = formatToPlainString(SBDnp1, obj2);
    } else {
      const tmp7Result3 = DateUtils;
      formatToPlainStringResult = tmp7Result3.calendarFormat(message.timestamp);
    }
    const author = message.author;
    mapped = [];
    const tmp7Result4 = utils_AvatarUtils;
    mapped[0] = tmp7Result4.ensureAvatarSource(author.getAvatarSource(undefined)).uri;
  }
  const obj3 = {
    title: stringResult1,
    description: formatToPlainStringResult,
    isCallActive: checkIsCallActiveResult,
    missed: tmp9,
    avatarURLs: mapped,
    rawMilliseconds: timestamp.valueOf(),
  };
  timestamp = message.timestamp;
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj3;
};
