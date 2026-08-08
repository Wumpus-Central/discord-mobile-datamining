// discord_app/modules/guild_sidebar/native/VoiceUser.tsx
import "noop";
import participantFromServer from "participantFromServer";
import getParticipants from "getParticipants";
import reset from "reset";
import fetchFingerprint from "fetchFingerprint";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import handleUpdate from "handleUpdate";
import updateVoiceState from "updateVoiceState";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getParticipants").fileFinishedImporting("modules/guild_sidebar/native/VoiceUser.tsx");

export default function VoiceUserConnected(channel) {
  let collapsed;
  let deaf;
  let isGuest;
  let localMute;
  let localVideo;
  let member;
  let mute;
  let selfDeaf;
  let selfMute;
  let selfVideo;
  let suppress;
  channel = channel.channel;
  const user = channel.user;
  const sessionId = channel.sessionId;
  ({ selfVideo, mute } = channel);
  let c3;
  let obj = id;
  ({ member, selfMute, selfDeaf, deaf, suppress, collapsed, isGuest } = channel);
  const tmp = id.getId() === user.id;
  c3 = tmp;
  const items = [_detectH265HardwareDecode];
  const stateFromStoresObject = channel(sessionId[9]).useStateFromStoresObject(items, () => {
    if (c3) {
      let obj = { localMute: false, localDeaf: false, localVideo: null };
      obj[2] = outer1_7.isVideoEnabled();
    } else {
      obj = { localMute: null, localDeaf: false, localVideo: false };
      obj[0] = outer1_7.isLocalMute(user.id);
    }
    return obj;
  });
  ({ localMute, localVideo } = stateFromStoresObject);
  const obj2 = channel(sessionId[9]);
  const items1 = [reset];
  const stateFromStores = channel(sessionId[9]).useStateFromStores(items1, () => outer1_5.getStreamForUser(user.id, channel.getGuildId()));
  const obj3 = channel(sessionId[9]);
  const items2 = [handleUpdate];
  const stateFromStores1 = channel(sessionId[9]).useStateFromStores(items2, () => {
    let tmp2;
    if (null != sessionId) {
      const sessionById = outer1_8.getSessionById(tmp);
      let os;
      if (sessionById != null) {
        os = sessionById.clientInfo.os;
      }
      tmp2 = os;
    }
    return tmp2;
  });
  const obj4 = channel(sessionId[9]);
  const items3 = [updateVoiceState];
  const items4 = [channel.id, user.id];
  let tmp8 = null != sessionId;
  const stateFromStores2 = channel(sessionId[9]).useStateFromStores(items3, () => outer1_9.getVoicePlatformForChannel(channel.id, user.id), items4);
  if (tmp8) {
    tmp8 = tmp;
  }
  if (tmp8) {
    tmp8 = sessionId !== obj.getSessionId();
  }
  let tmp2Result = tmp2(tmp3[9]);
  const items5 = [c3];
  const items6 = [user.id, channel.id];
  const stateFromStores3 = tmp2Result.useStateFromStores(items5, () => {
    const embeddedActivitiesForChannel = _undefined.getEmbeddedActivitiesForChannel(channel.id);
    return embeddedActivitiesForChannel.find((userIds) => {
      userIds = userIds.userIds;
      return userIds.has(id.id);
    });
  }, items6);
  tmp2Result = tmp2(tmp3[9]);
  const items7 = [getParticipants];
  const stateFromStores4 = tmp2Result.useStateFromStores(items7, () => {
    const guildRingingUsers = outer1_4.getGuildRingingUsers(channel.id);
    return guildRingingUsers.has(user.id);
  });
  obj = { guildId: channel.guild_id, channelId: channel.id, member, user, collapsed, serverMute: null, serverDeaf: null, mute: null, deaf: null, localMute: null, video: null, stream: null, platform: null, disabled: null, isInEmbeddedActivity: null, isGuest: null, voicePlatform: null, ringing: null };
  const obj5 = channel(sessionId[9]);
  const tmp11 = jsx;
  if (!mute) {
    mute = suppress;
  }
  obj[5] = mute;
  obj[6] = deaf;
  obj[7] = selfMute;
  obj[8] = selfDeaf;
  obj[9] = localMute;
  if (!selfVideo) {
    selfVideo = localVideo;
  }
  obj[10] = selfVideo;
  let channelId;
  if (stateFromStores != null) {
    channelId = stateFromStores.channelId;
  }
  obj[11] = channelId === channel.id;
  obj[12] = stateFromStores1;
  obj[13] = null == stateFromStores1 && tmp8;
  obj[14] = null != stateFromStores3;
  obj[15] = isGuest;
  obj[16] = stateFromStores2;
  obj[17] = stateFromStores4;
  return tmp11(user(sessionId[10]), obj);
};