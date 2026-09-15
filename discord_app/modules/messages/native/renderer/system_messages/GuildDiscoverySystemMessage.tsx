// === Module 8115: GuildDiscoverySystemMessage ===

// Module 8115 (GuildDiscoverySystemMessage)
import util from "util" /* 1115 */;
import createCommonMessageDefault from "createCommonMessage" /* 8071 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import GuildStore from "GuildStore" /* 1980 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GuildDiscoverySystemMessage.tsx");

export const createGuildDiscoveryDisqualifiedSystemMessage = function createGuildDiscoveryDisqualifiedSystemMessage(message) {
  message = message.message;
  const channel = ChannelStore.getChannel(message.channel_id);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  if (guild_id == null) {
    const messageReference = message.messageReference;
    let guild_id1;
    if (messageReference != null) {
      guild_id1 = messageReference.guild_id;
    }
    guild_id = guild_id1;
  }
  const guild = GuildStore.getGuild(guild_id);
  let name;
  if (guild != null) {
    name = guild.name;
  }
  if (name == null) {
    name = null;
  }
  if (null != name) {
    const intl2 = util.intl;
    const obj = { guildName: name };
    let formatToPartsResult = intl2.formatToParts(util.t.NaUZWO, obj);
  } else {
    const intl = util.intl;
    formatToPartsResult = intl.string(util.t.NxS3hY);
  }
  const merged = Object.assign(createCommonMessageDefault(message));
  return { content: formatToPartsResult };
};
export const createGuildDiscoveryRequalifiedSystemMessage = function createGuildDiscoveryRequalifiedSystemMessage(message) {
  const obj = { content: null };
  const intl = util.intl;
  obj.content = intl.string(util.t.tu6tOR);
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj;
};
export const createGuildDiscoveryGracePeriodInitialWarningSystemMessage = function createGuildDiscoveryGracePeriodInitialWarningSystemMessage(message) {
  message = message.message;
  const channel = ChannelStore.getChannel(message.channel_id);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  if (guild_id == null) {
    const messageReference = message.messageReference;
    let guild_id1;
    if (messageReference != null) {
      guild_id1 = messageReference.guild_id;
    }
    guild_id = guild_id1;
  }
  const guild = GuildStore.getGuild(guild_id);
  let name;
  if (guild != null) {
    name = guild.name;
  }
  if (name == null) {
    name = null;
  }
  if (null != name) {
    const intl2 = util.intl;
    const obj = { guildName: name };
    let formatToPartsResult = intl2.formatToParts(util.t["fJP+Wx"], obj);
  } else {
    const intl = util.intl;
    formatToPartsResult = intl.string(util.t.BoiiWz);
  }
  const merged = Object.assign(createCommonMessageDefault(message));
  return { content: formatToPartsResult };
};
export const createGuildDiscoveryGracePeriodFinalWarningSystemMessage = function createGuildDiscoveryGracePeriodFinalWarningSystemMessage(message) {
  message = message.message;
  const channel = ChannelStore.getChannel(message.channel_id);
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  if (guild_id == null) {
    const messageReference = message.messageReference;
    let guild_id1;
    if (messageReference != null) {
      guild_id1 = messageReference.guild_id;
    }
    guild_id = guild_id1;
  }
  const guild = GuildStore.getGuild(guild_id);
  let name;
  if (guild != null) {
    name = guild.name;
  }
  if (name == null) {
    name = null;
  }
  if (null != name) {
    const intl2 = util.intl;
    const obj = { guildName: name };
    let formatToPartsResult = intl2.formatToParts(util.t.bPMe3o, obj);
  } else {
    const intl = util.intl;
    formatToPartsResult = intl.string(util.t.ED4mGc);
  }
  const merged = Object.assign(createCommonMessageDefault(message));
  return { content: formatToPartsResult };
};