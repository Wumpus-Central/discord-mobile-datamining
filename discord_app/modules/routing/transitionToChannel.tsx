// === Module 4901: transitionToChannel ===

// Module 4901 (transitionToChannel)
import _modDef38 from "module_38" /* 38 */;
import Constants from "Constants" /* 1085 */;
import router_utils from "router_utils" /* 1112 */;
import useGuildIdForChannelRoute from "useGuildIdForChannelRoute" /* 4902 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4903 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5091 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const result = size.fileFinishedImporting("modules/routing/transitionToChannel.tsx");

export const transitionToChannel = function transitionToChannel(id, openTextInVoiceIfVoiceChannel) {
  const channel = ChannelStore.getChannel(id);
  if (null != channel) {
    const obj3 = useGuildIdForChannelRoute;
    const guildIdForGenericRedirect = obj3.getGuildIdForGenericRedirect(channel);
    const obj4 = ChannelActionCreatorsDefault;
    obj4.preload(channel.guild_id, channel.id);
    const transitionTo = router_utils.transitionTo;
    const obj = { openChannel: true };
    router_utils;
    const CHANNELResult = Routes.CHANNEL(guildIdForGenericRedirect, channel.id);
    const merged = Object.assign(openTextInVoiceIfVoiceChannel);
    transitionTo(CHANNELResult, obj);
    let prop;
    if (openTextInVoiceIfVoiceChannel != null) {
      prop = openTextInVoiceIfVoiceChannel.openTextInVoiceIfVoiceChannel;
    }
    if (prop) {
      prop = channel.isGuildVocal();
    }
    if (prop) {
      const tmp7Result = ChannelRTCActionCreatorsDefault;
      tmp7Result.updateChatOpen(channel.id, true);
    }
  }
};
export const transitionToThread = function transitionToThread(channel, arg1) {
  _modDef38(null != channel.parent_id, "Thread must have a parent ID.");
  const obj = useGuildIdForChannelRoute;
  const guildIdForGenericRedirect = obj.getGuildIdForGenericRedirect(channel);
  const transitionTo = router_utils.transitionTo;
  const obj2 = { openChannel: true };
  router_utils;
  const CHANNELResult = Routes.CHANNEL(guildIdForGenericRedirect, channel.id);
  const merged = Object.assign(arg1);
  transitionTo(CHANNELResult, obj2);
};
export const transitionToThreadMessage = function transitionToThreadMessage(channel, id, arg2) {
  _modDef38(null != channel.parent_id, "Thread must have a parent ID.");
  const obj = useGuildIdForChannelRoute;
  const guildIdForGenericRedirect = obj.getGuildIdForGenericRedirect(channel);
  const transitionTo = router_utils.transitionTo;
  const obj2 = { openChannel: true };
  router_utils;
  const CHANNELResult = Routes.CHANNEL(guildIdForGenericRedirect, channel.id, id);
  const merged = Object.assign(arg2);
  transitionTo(CHANNELResult, obj2);
};
export const tryTransitionToThreadMessage = function tryTransitionToThreadMessage(parentChannelId, threadId, messageId, arg3) {
  const channel = ChannelStore.getChannel(threadId);
  if (null != channel) {
    _modDef38(null != channel.parent_id, "Thread must have a parent ID.");
    const obj3 = useGuildIdForChannelRoute;
    const guildIdForGenericRedirect = obj3.getGuildIdForGenericRedirect(channel);
    const transitionTo = router_utils.transitionTo;
    const obj2 = { openChannel: true };
    router_utils;
    const CHANNELResult = Routes.CHANNEL(guildIdForGenericRedirect, channel.id, messageId);
    const merged = Object.assign(arg3);
    transitionTo(CHANNELResult, obj2);
  } else {
    const channel1 = ChannelStore.getChannel(parentChannelId);
    if (null != channel1) {
      const obj6 = useGuildIdForChannelRoute;
      const guildIdForGenericRedirect1 = obj6.getGuildIdForGenericRedirect(channel1);
      const obj7 = ChannelActionCreatorsDefault;
      obj7.preload(channel1.guild_id, channel1.id);
      const transitionTo2 = router_utils.transitionTo;
      const obj4 = { openChannel: true };
      router_utils;
      const CHANNELResult1 = Routes.CHANNEL(guildIdForGenericRedirect1, channel1.id);
      const merged1 = Object.assign(arg3);
      transitionTo2(CHANNELResult1, obj4);
      let prop;
      if (arg3 != null) {
        prop = arg3.openTextInVoiceIfVoiceChannel;
      }
      if (prop) {
        prop = channel1.isGuildVocal();
      }
      if (prop) {
        const tmp21Result = ChannelRTCActionCreatorsDefault;
        tmp21Result.updateChatOpen(channel1.id, true);
      }
    }
  }
};
export const transitionToMessage = function transitionToMessage(channelId, messageId, arg2) {
  const channel = ChannelStore.getChannel(channelId);
  if (null != channel) {
    const obj = useGuildIdForChannelRoute;
    const guildIdForGenericRedirect = obj.getGuildIdForGenericRedirect(channel);
    const transitionTo = router_utils.transitionTo;
    const obj2 = { openChannel: true };
    router_utils;
    const CHANNELResult = Routes.CHANNEL(guildIdForGenericRedirect, channel.id, messageId);
    const merged = Object.assign(arg2);
    transitionTo(CHANNELResult, obj2);
  }
};
export const transitionToStaticChannelRoute = function transitionToStaticChannelRoute(guildId, GUILD_HOME, arg2) {
  const transitionTo = router_utils.transitionTo;
  const obj = { openChannel: true };
  router_utils;
  const CHANNELResult = Routes.CHANNEL(guildId, GUILD_HOME);
  const merged = Object.assign(arg2);
  transitionTo(CHANNELResult, obj);
};