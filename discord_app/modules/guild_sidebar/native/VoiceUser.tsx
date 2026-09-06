// === Module 16122: VoiceUser ===

// Module 16122 (VoiceUser)
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4576 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4582 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import SessionsStore from "SessionsStore" /* 4578 */;
import VoiceStateStore from "VoiceStateStore" /* 4579 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceUser.tsx");

export default function VoiceUserConnected(channel) {
  channel = channel.channel;
  const user = channel.user;
  const sessionId = channel.sessionId;
  ({ selfVideo, mute } = channel);
  let obj = AuthenticationStore;
  ({ member, selfMute, selfDeaf, deaf, suppress, collapsed, isGuest } = channel);
  const tmp = AuthenticationStore.getId() === user.id;
  closure_3 = tmp;
  const items = [MediaEngineStore];
  const stateFromStoresObject = channel(sessionId[9]).useStateFromStoresObject(items, () => {
    if (closure_3) {
      let obj = { localMute: false, localDeaf: false, localVideo: MediaEngineStore.isVideoEnabled() };
    } else {
      obj = { localMute: MediaEngineStore.isLocalMute(user.id), localDeaf: false, localVideo: false };
    }
    return obj;
  });
  ({ localMute, localVideo } = stateFromStoresObject);
  const obj2 = channel(sessionId[9]);
  const items1 = [ApplicationStreamingStore];
  const stateFromStores = channel(sessionId[9]).useStateFromStores(items1, () => ApplicationStreamingStore.getStreamForUser(user.id, channel.getGuildId()));
  const obj3 = channel(sessionId[9]);
  const items2 = [SessionsStore];
  const stateFromStores1 = channel(sessionId[9]).useStateFromStores(items2, () => {
    let tmp2;
    if (null != sessionId) {
      const sessionById = SessionsStore.getSessionById(tmp);
      let os;
      if (sessionById != null) {
        os = sessionById.clientInfo.os;
      }
      tmp2 = os;
    }
    return tmp2;
  });
  const obj4 = channel(sessionId[9]);
  const items3 = [VoiceStateStore];
  const items4 = [channel.id, user.id];
  let tmp8 = null != sessionId;
  const stateFromStores2 = channel(sessionId[9]).useStateFromStores(items3, () => VoiceStateStore.getVoicePlatformForChannel(channel.id, user.id), items4);
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
    const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channel.id);
    return embeddedActivitiesForChannel.find((userIds) => {
      userIds = userIds.userIds;
      return userIds.has(id.id);
    });
  }, items6);
  tmp2Result = tmp2(tmp3[9]);
  const items7 = [ChannelRTCStore];
  const stateFromStores4 = tmp2Result.useStateFromStores(items7, () => {
    const guildRingingUsers = ChannelRTCStore.getGuildRingingUsers(channel.id);
    return guildRingingUsers.has(user.id);
  });
  obj = { guildId: channel.guild_id, channelId: channel.id, member, user, collapsed, serverMute: null, serverDeaf: null, mute: null, deaf: null, localMute: null, video: null, stream: null, platform: null, disabled: null, isInEmbeddedActivity: null, isGuest: null, voicePlatform: null, ringing: null };
  const obj5 = channel(sessionId[9]);
  if (!mute) {
    mute = suppress;
  }
  obj.serverMute = mute;
  obj.serverDeaf = deaf;
  obj.mute = selfMute;
  obj.deaf = selfDeaf;
  obj.localMute = localMute;
  if (!selfVideo) {
    selfVideo = localVideo;
  }
  obj.video = selfVideo;
  let channelId;
  if (stateFromStores != null) {
    channelId = stateFromStores.channelId;
  }
  obj.stream = channelId === channel.id;
  obj.platform = stateFromStores1;
  obj.disabled = null == stateFromStores1 && tmp8;
  obj.isInEmbeddedActivity = null != stateFromStores3;
  obj.isGuest = isGuest;
  obj.voicePlatform = stateFromStores2;
  obj.ringing = stateFromStores4;
  return jsx(user(sessionId[10]), { guildId: channel.guild_id, channelId: channel.id, member, user, collapsed, serverMute: null, serverDeaf: null, mute: null, deaf: null, localMute: null, video: null, stream: null, platform: null, disabled: null, isInEmbeddedActivity: null, isGuest: null, voicePlatform: null, ringing: null });
};