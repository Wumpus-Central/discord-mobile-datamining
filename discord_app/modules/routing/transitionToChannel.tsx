// discord_app/modules/routing/transitionToChannel.tsx
import _modDef38 from "../../../_runtime/metro/00038__.js";
import router_utils from "router_utils.tsx";
import useGuildIdForChannelRoute from "useGuildIdForChannelRoute.tsx";
import ChannelActionCreatorsDefault from "../../actions/ChannelActionCreators.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";

require = fn;
const Routes = fn(1074).Routes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/routing/transitionToChannel.tsx");

export const transitionToChannel = function transitionToChannel(id, openTextInVoiceIfVoiceChannel) {
  const channel = ChannelStore.getChannel(id);
  if (null != channel) {
    const guildIdForGenericRedirect = useGuildIdForChannelRoute.getGuildIdForGenericRedirect(channel);
    const tmp7 = importDefault;
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
      tmp7(4761).updateChatOpen(channel.id, true);
      const tmp7Result = tmp7(4761);
    }
    const CHANNELResult = Routes.CHANNEL(guildIdForGenericRedirect, channel.id);
  }
};
export const transitionToThread = function transitionToThread(channel, arg1) {
  _modDef38(null != channel.parent_id, "Thread must have a parent ID.");
  let obj = useGuildIdForChannelRoute;
  const guildIdForGenericRedirect = obj.getGuildIdForGenericRedirect(channel);
  obj = { openChannel: true };
  const obj2 = router_utils;
  const merged = Object.assign(arg1);
  obj2.transitionTo(Routes.CHANNEL(guildIdForGenericRedirect, channel.id), obj);
};
export const transitionToThreadMessage = function transitionToThreadMessage(channel, id, arg2) {
  _modDef38(null != channel.parent_id, "Thread must have a parent ID.");
  let obj = useGuildIdForChannelRoute;
  const guildIdForGenericRedirect = obj.getGuildIdForGenericRedirect(channel);
  obj = { openChannel: true };
  const obj2 = router_utils;
  const merged = Object.assign(arg2);
  obj2.transitionTo(Routes.CHANNEL(guildIdForGenericRedirect, channel.id, id), obj);
};
export const tryTransitionToThreadMessage = function tryTransitionToThreadMessage(
  parentChannelId,
  threadId,
  messageId,
  arg3,
) {
  let obj = ChannelStore;
  const channel = ChannelStore.getChannel(threadId);
  if (null != channel) {
    _modDef38(null != channel.parent_id, "Thread must have a parent ID.");
    const guildIdForGenericRedirect = useGuildIdForChannelRoute.getGuildIdForGenericRedirect(channel);
    obj = { openChannel: true };
    const obj4 = router_utils;
    const merged = Object.assign(arg3);
    obj4.transitionTo(Routes.CHANNEL(guildIdForGenericRedirect, channel.id, messageId), obj);
    const CHANNELResult = Routes.CHANNEL(guildIdForGenericRedirect, channel.id, messageId);
  } else {
    const channel1 = obj.getChannel(parentChannelId);
    if (null != channel1) {
      const guildIdForGenericRedirect1 = useGuildIdForChannelRoute.getGuildIdForGenericRedirect(channel1);
      const tmp20 = importDefault;
      ChannelActionCreatorsDefault.preload(channel1.guild_id, channel1.id);
      obj = { openChannel: true };
      const obj9 = router_utils;
      const merged1 = Object.assign(arg3);
      obj9.transitionTo(Routes.CHANNEL(guildIdForGenericRedirect1, channel1.id), obj);
      let prop;
      if (arg3 != null) {
        prop = arg3.openTextInVoiceIfVoiceChannel;
      }
      if (prop) {
        prop = channel1.isGuildVocal();
      }
      if (prop) {
        tmp20(4761).updateChatOpen(channel1.id, true);
        const tmp20Result = tmp20(4761);
      }
      const CHANNELResult1 = Routes.CHANNEL(guildIdForGenericRedirect1, channel1.id);
    }
  }
};
export const transitionToMessage = function transitionToMessage(channelId, id, arg2) {
  const channel = ChannelStore.getChannel(channelId);
  if (null != channel) {
    let obj = useGuildIdForChannelRoute;
    const guildIdForGenericRedirect = obj.getGuildIdForGenericRedirect(channel);
    obj = { openChannel: true };
    const obj2 = router_utils;
    const merged = Object.assign(arg2);
    obj2.transitionTo(Routes.CHANNEL(guildIdForGenericRedirect, channel.id, id), obj);
    const CHANNELResult = Routes.CHANNEL(guildIdForGenericRedirect, channel.id, id);
  }
};
export const transitionToStaticChannelRoute = function transitionToStaticChannelRoute(guildId, GUILD_HOME, arg2) {
  const obj = { openChannel: true };
  const merged = Object.assign(arg2);
  obj.transitionTo(Routes.CHANNEL(guildId, GUILD_HOME), obj);
};
