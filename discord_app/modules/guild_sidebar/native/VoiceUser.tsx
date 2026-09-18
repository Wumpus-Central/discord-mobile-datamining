// === Module 16379: VoiceUser ===

// Module 16379 (VoiceUser)
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1957 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4738 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4744 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1909 */;
import SessionsStore from "SessionsStore" /* 4740 */;
import VoiceStateStore from "VoiceStateStore" /* 4741 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceUser.tsx");

export default function VoiceUserConnected(channel) {
  channel = channel.channel;
  const user = channel.user;
  const sessionId = channel.sessionId;
  ({ selfVideo, mute } = channel);
  ({ member, selfMute, selfDeaf, deaf, suppress, collapsed, isGuest } = channel);
  const tmp = AuthenticationStore.getId() === user.id;
  closure_3 = tmp;
  const items = [MediaEngineStore];
  const stateFromStoresObject = channel(sessionId[9]).useStateFromStoresObject(items, () => {
    if (closure_3) {
      const obj2 = { localMute: false, localDeaf: false, localVideo: MediaEngineStore.isVideoEnabled() };
      let obj = obj2;
    } else {
      obj = { localMute: MediaEngineStore.isLocalMute(user.id), localDeaf: false, localVideo: false };
    }
    return obj;
  });
  ({ localMute, localVideo } = stateFromStoresObject);
  let obj2 = channel(sessionId[9]);
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
    tmp8 = sessionId !== AuthenticationStore.getSessionId();
  }
  const obj5 = channel(sessionId[9]);
  const items5 = [closure_3];
  const items6 = [user.id, channel.id];
  const stateFromStores3 = channel(sessionId[9]).useStateFromStores(items5, () => {
    const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channel.id);
    return embeddedActivitiesForChannel.find((userIds) => {
      userIds = userIds.userIds;
      return userIds.has(id.id);
    });
  }, items6);
  const tmp2Result = channel(sessionId[9]);
  const items7 = [ChannelRTCStore];
  const stateFromStores4 = channel(sessionId[9]).useStateFromStores(items7, () => {
    const guildRingingUsers = ChannelRTCStore.getGuildRingingUsers(channel.id);
    return guildRingingUsers.has(user.id);
  });
  const obj6 = { guildId: channel.guild_id, channelId: channel.id, member, user, collapsed, serverMute: null, serverDeaf: null, mute: null, deaf: null, localMute: null, video: null, stream: null, platform: null, disabled: null, isInEmbeddedActivity: null, isGuest: null, voicePlatform: null, ringing: null };
  const tmp2Result2 = channel(sessionId[9]);
  if (!mute) {
    mute = suppress;
  }
  obj6.serverMute = mute;
  obj6.serverDeaf = deaf;
  obj6.mute = selfMute;
  obj6.deaf = selfDeaf;
  obj6.localMute = localMute;
  if (!selfVideo) {
    selfVideo = localVideo;
  }
  obj6.video = selfVideo;
  let channelId;
  if (stateFromStores != null) {
    channelId = stateFromStores.channelId;
  }
  obj6.stream = channelId === channel.id;
  obj6.platform = stateFromStores1;
  obj6.disabled = null == stateFromStores1 && tmp8;
  obj6.isInEmbeddedActivity = null != stateFromStores3;
  obj6.isGuest = isGuest;
  obj6.voicePlatform = stateFromStores2;
  obj6.ringing = stateFromStores4;
  return jsx(user(sessionId[10]), { guildId: channel.guild_id, channelId: channel.id, member, user, collapsed, serverMute: null, serverDeaf: null, mute: null, deaf: null, localMute: null, video: null, stream: null, platform: null, disabled: null, isInEmbeddedActivity: null, isGuest: null, voicePlatform: null, ringing: null });
};