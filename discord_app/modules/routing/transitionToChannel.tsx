import ensureGuildLoaded from "ensureGuildLoaded";
import { Routes } from "ME";

const require = arg1;
const result = require("useGuildIdForChannelRoute").fileFinishedImporting("modules/routing/transitionToChannel.tsx");

export const transitionToChannel = function transitionToChannel(id, openTextInVoiceIfVoiceChannel) {
  const channel = store.getChannel(id);
  if (null != channel) {
    const guildIdForGenericRedirect = require(4202) /* useGuildIdForChannelRoute */.getGuildIdForGenericRedirect(channel);
    const obj3 = require(4202) /* useGuildIdForChannelRoute */;
    const tmp7 = importDefault;
    importDefault(4203).preload(channel.guild_id, channel.id);
    const obj4 = importDefault(4203);
    const obj = { openChannel: true };
    const obj5 = require(1222) /* transitionTo */;
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
      tmp7(4387).updateChatOpen(channel.id, true);
      const tmp7Result = tmp7(4387);
    }
    const CHANNELResult = Routes.CHANNEL(guildIdForGenericRedirect, channel.id);
  }
};
export const transitionToThread = function transitionToThread(channel, arg1) {
  importDefault(38)(null != channel.parent_id, "Thread must have a parent ID.");
  let obj = require(4202) /* useGuildIdForChannelRoute */;
  const guildIdForGenericRedirect = obj.getGuildIdForGenericRedirect(channel);
  obj = { openChannel: true };
  const obj2 = require(1222) /* transitionTo */;
  const merged = Object.assign(arg1);
  obj2.transitionTo(Routes.CHANNEL(guildIdForGenericRedirect, channel.id), obj);
};
export const transitionToThreadMessage = function transitionToThreadMessage(channel, id, arg2) {
  importDefault(38)(null != channel.parent_id, "Thread must have a parent ID.");
  let obj = require(4202) /* useGuildIdForChannelRoute */;
  const guildIdForGenericRedirect = obj.getGuildIdForGenericRedirect(channel);
  obj = { openChannel: true };
  const obj2 = require(1222) /* transitionTo */;
  const merged = Object.assign(arg2);
  obj2.transitionTo(Routes.CHANNEL(guildIdForGenericRedirect, channel.id, id), obj);
};
export const tryTransitionToThreadMessage = function tryTransitionToThreadMessage(parentChannelId, threadId, messageId) {
  let obj = store;
  const channel = store.getChannel(threadId);
  if (null != channel) {
    importDefault(38)(null != channel.parent_id, "Thread must have a parent ID.");
    const guildIdForGenericRedirect = require(4202) /* useGuildIdForChannelRoute */.getGuildIdForGenericRedirect(channel);
    const obj3 = require(4202) /* useGuildIdForChannelRoute */;
    obj = { openChannel: true };
    const obj4 = require(1222) /* transitionTo */;
    const merged = Object.assign(arg3);
    obj4.transitionTo(Routes.CHANNEL(guildIdForGenericRedirect, channel.id, messageId), obj);
    const CHANNELResult = Routes.CHANNEL(guildIdForGenericRedirect, channel.id, messageId);
  } else {
    const channel1 = obj.getChannel(parentChannelId);
    if (null != channel1) {
      const guildIdForGenericRedirect1 = require(4202) /* useGuildIdForChannelRoute */.getGuildIdForGenericRedirect(channel1);
      const obj7 = require(4202) /* useGuildIdForChannelRoute */;
      const tmp20 = importDefault;
      importDefault(4203).preload(channel1.guild_id, channel1.id);
      const obj8 = importDefault(4203);
      obj = { openChannel: true };
      const obj9 = require(1222) /* transitionTo */;
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
        tmp20(4387).updateChatOpen(channel1.id, true);
        const tmp20Result = tmp20(4387);
      }
      const CHANNELResult1 = Routes.CHANNEL(guildIdForGenericRedirect1, channel1.id);
    }
  }
};
export const transitionToMessage = function transitionToMessage(channelId, id, arg2) {
  const channel = store.getChannel(channelId);
  if (null != channel) {
    let obj = require(4202) /* useGuildIdForChannelRoute */;
    const guildIdForGenericRedirect = obj.getGuildIdForGenericRedirect(channel);
    obj = { openChannel: true };
    const obj2 = require(1222) /* transitionTo */;
    const merged = Object.assign(arg2);
    obj2.transitionTo(Routes.CHANNEL(guildIdForGenericRedirect, channel.id, id), obj);
    const CHANNELResult = Routes.CHANNEL(guildIdForGenericRedirect, channel.id, id);
  }
};
export const transitionToStaticChannelRoute = function transitionToStaticChannelRoute(guildId, GUILD_HOME) {
  let obj = require(1222) /* transitionTo */;
  obj = { openChannel: true };
  const merged = Object.assign(arg2);
  obj.transitionTo(Routes.CHANNEL(guildId, GUILD_HOME), obj);
};