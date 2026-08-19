// discord_app/modules/guild_sidebar/native/VoiceUser.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import participantFromServer from "../../activities/EmbeddedActivitiesStore.tsx";
import getParticipants from "../../calls/ChannelRTCStore.tsx";
import reset from "../../../stores/ApplicationStreamingStore.tsx";
import fetchFingerprint from "../../../stores/AuthenticationStore.tsx";
import _detectH265HardwareDecode from "../../../stores/MediaEngineStore.tsx";
import handleUpdate from "../../../stores/SessionsStore.tsx";
import updateVoiceState from "../../../stores/VoiceStateStore.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/guild_sidebar/native/VoiceUser.tsx");

export default function VoiceUserConnected(channel) {
  channel = channel.channel;
  const user = channel.user;
  const sessionId = channel.sessionId;
  ({ selfVideo, mute } = channel);
  let obj = id;
  ({ member, selfMute, selfDeaf, deaf, suppress, collapsed, isGuest } = channel);
  const tmp = id.getId() === user.id;
  closure_3 = tmp;
  const items = [closure_7];
  const stateFromStoresObject = channel(sessionId[9]).useStateFromStoresObject(items, () => {
    if (closure_3) {
      let obj = { localMute: false, localDeaf: false, localVideo: null };
      obj[2] = closure_1_7.isVideoEnabled();
    } else {
      obj = { localMute: null, localDeaf: false, localVideo: false };
      obj[0] = closure_1_7.isLocalMute(user.id);
    }
    return obj;
  });
  ({ localMute, localVideo } = stateFromStoresObject);
  const obj2 = channel(sessionId[9]);
  const items1 = [closure_5];
  const stateFromStores = channel(sessionId[9]).useStateFromStores(items1, () => closure_1_5.getStreamForUser(user.id, channel.getGuildId()));
  const obj3 = channel(sessionId[9]);
  const items2 = [closure_8];
  const stateFromStores1 = channel(sessionId[9]).useStateFromStores(items2, () => {
    let tmp2;
    if (null != sessionId) {
      const sessionById = closure_1_8.getSessionById(tmp);
      let os;
      if (sessionById != null) {
        os = sessionById.clientInfo.os;
      }
      tmp2 = os;
    }
    return tmp2;
  });
  const obj4 = channel(sessionId[9]);
  const items3 = [closure_9];
  const items4 = [channel.id, user.id];
  let tmp8 = null != sessionId;
  const stateFromStores2 = channel(sessionId[9]).useStateFromStores(items3, () => closure_1_9.getVoicePlatformForChannel(channel.id, user.id), items4);
  if (tmp8) {
    tmp8 = tmp;
  }
  if (tmp8) {
    tmp8 = sessionId !== obj.getSessionId();
  }
  let tmp2Result = tmp2(tmp3[9]);
  const items5 = [closure_3];
  const items6 = [user.id, channel.id];
  const stateFromStores3 = tmp2Result.useStateFromStores(items5, () => {
    embeddedActivitiesForChannel = embeddedActivitiesForChannel.getEmbeddedActivitiesForChannel(channel.id);
    return embeddedActivitiesForChannel.find((item, index) => {
      const userIds = item.userIds;
      return userIds.has(id.id);
    });
  }, items6);
  tmp2Result = tmp2(tmp3[9]);
  const items7 = [closure_4];
  const stateFromStores4 = tmp2Result.useStateFromStores(items7, () => {
    const guildRingingUsers = closure_1_4.getGuildRingingUsers(channel.id);
    return guildRingingUsers.has(user.id);
  });
  obj = { guildId: channel.guild_id, channelId: channel.id, member, user, collapsed, serverMute: null, serverDeaf: null, mute: null, deaf: null, localMute: null, video: null, stream: null, platform: null, disabled: null, isInEmbeddedActivity: null, isGuest: null, voicePlatform: null, ringing: null };
  const obj5 = channel(sessionId[9]);
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
  return jsx(user(sessionId[10]), { guildId: channel.guild_id, channelId: channel.id, member, user, collapsed, serverMute: null, serverDeaf: null, mute: null, deaf: null, localMute: null, video: null, stream: null, platform: null, disabled: null, isInEmbeddedActivity: null, isGuest: null, voicePlatform: null, ringing: null });
};