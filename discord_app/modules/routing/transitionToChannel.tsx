// === Module 4649: transitionToChannel ===

// Module 4649 (transitionToChannel)
import _modDef38 from "module_38" /* 38 */;
import router_utils from "router_utils" /* 1101 */;
import useGuildIdForChannelRoute from "useGuildIdForChannelRoute" /* 4650 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4651 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4839 */;
import ChannelStore from "ChannelStore" /* 1958 */;

require = fn;
const Routes = fn(1074).Routes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/routing/transitionToChannel.tsx");

export const transitionToChannel = function transitionToChannel(id, openTextInVoiceIfVoiceChannel) {
  const channel = ChannelStore.getChannel(id);
  if (null != channel) {
    const guildIdForGenericRedirect = useGuildIdForChannelRoute.getGuildIdForGenericRedirect(channel);
    ChannelActionCreatorsDefault.preload(channel.guild_id, channel.id);
    const obj = { openChannel: true };
    const obj5 = router_utils;
    const merged = Object.assign(openTextInVoiceIfVoiceChannel);
    obj5.transitionTo(Routes.CHANNEL(guildIdForGenericRedirect, channel.id), obj);
    let prop;
    if (openTextInVoiceIfVoiceChannel != null) {
      prop = openTextInVoiceIfVoiceChannel.openTextInVoiceIfVoiceChannel;
    }
    if (prop) {
      prop = channel.isGuildVocal();
    }
    if (prop) {
      ChannelRTCActionCreatorsDefault.updateChatOpen(channel.id, true);
      const tmp7Result = ChannelRTCActionCreatorsDefault;
    }
    const CHANNELResult = Routes.CHANNEL(guildIdForGenericRedirect, channel.id);
  }
};
export const transitionToThread = function transitionToThread(channel, arg1) {
  _modDef38(null != channel.parent_id, "Thread must have a parent ID.");
  const guildIdForGenericRedirect = useGuildIdForChannelRoute.getGuildIdForGenericRedirect(channel);
  const obj2 = router_utils;
  const obj3 = { openChannel: true };
  const merged = Object.assign(arg1);
  obj2.transitionTo(Routes.CHANNEL(guildIdForGenericRedirect, channel.id), obj3);
};
export const transitionToThreadMessage = function transitionToThreadMessage(channel, id, arg2) {
  _modDef38(null != channel.parent_id, "Thread must have a parent ID.");
  const guildIdForGenericRedirect = useGuildIdForChannelRoute.getGuildIdForGenericRedirect(channel);
  const obj2 = router_utils;
  const obj3 = { openChannel: true };
  const merged = Object.assign(arg2);
  obj2.transitionTo(Routes.CHANNEL(guildIdForGenericRedirect, channel.id, id), obj3);
};
export const tryTransitionToThreadMessage = function tryTransitionToThreadMessage(parentChannelId, threadId, messageId, arg3) {
  const channel = ChannelStore.getChannel(threadId);
  if (null != channel) {
    _modDef38(null != channel.parent_id, "Thread must have a parent ID.");
    const guildIdForGenericRedirect = useGuildIdForChannelRoute.getGuildIdForGenericRedirect(channel);
    const obj2 = { openChannel: true };
    const obj4 = router_utils;
    const merged = Object.assign(arg3);
    obj4.transitionTo(Routes.CHANNEL(guildIdForGenericRedirect, channel.id, messageId), obj2);
    const CHANNELResult = Routes.CHANNEL(guildIdForGenericRedirect, channel.id, messageId);
  } else {
    const channel1 = ChannelStore.getChannel(parentChannelId);
    if (null != channel1) {
      const guildIdForGenericRedirect1 = useGuildIdForChannelRoute.getGuildIdForGenericRedirect(channel1);
      ChannelActionCreatorsDefault.preload(channel1.guild_id, channel1.id);
      const obj5 = { openChannel: true };
      const obj9 = router_utils;
      const merged1 = Object.assign(arg3);
      obj9.transitionTo(Routes.CHANNEL(guildIdForGenericRedirect1, channel1.id), obj5);
      let prop;
      if (arg3 != null) {
        prop = arg3.openTextInVoiceIfVoiceChannel;
      }
      if (prop) {
        prop = channel1.isGuildVocal();
      }
      if (prop) {
        ChannelRTCActionCreatorsDefault.updateChatOpen(channel1.id, true);
        const tmp20Result = ChannelRTCActionCreatorsDefault;
      }
      const CHANNELResult1 = Routes.CHANNEL(guildIdForGenericRedirect1, channel1.id);
    }
  }
};
export const transitionToMessage = function transitionToMessage(channelId, id, arg2) {
  const channel = ChannelStore.getChannel(channelId);
  if (null != channel) {
    const guildIdForGenericRedirect = useGuildIdForChannelRoute.getGuildIdForGenericRedirect(channel);
    const obj3 = { openChannel: true };
    const obj2 = router_utils;
    const merged = Object.assign(arg2);
    obj2.transitionTo(Routes.CHANNEL(guildIdForGenericRedirect, channel.id, id), obj3);
    const CHANNELResult = Routes.CHANNEL(guildIdForGenericRedirect, channel.id, id);
  }
};
export const transitionToStaticChannelRoute = function transitionToStaticChannelRoute(guildId, GUILD_HOME, arg2) {
  const obj = router_utils;
  const obj2 = { openChannel: true };
  const merged = Object.assign(arg2);
  obj.transitionTo(Routes.CHANNEL(guildId, GUILD_HOME), obj2);
};