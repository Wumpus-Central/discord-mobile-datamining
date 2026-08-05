// discord_app/modules/content_inventory/reactionUtils.tsx
const result = require("set").fileFinishedImporting("modules/content_inventory/reactionUtils.tsx");

export const sendMessageWithEmbed = function sendMessageWithEmbed(channel) {
  let _location;
  let content;
  let doNotNotifyOnError;
  let entry;
  let whenReady;
  channel = channel.channel;
  ({ content, entry, whenReady, doNotNotifyOnError, location: _location } = channel);
  let obj = require("../messages/MessageParser.tsx");
  const parsed = obj.parse(channel, content);
  obj = { contentInventoryEntry: { unverified_content: entry }, doNotNotifyOnError, location: _location };
  return require("../../actions/MessageActionCreators.tsx").sendMessage(channel.id, parsed, whenReady, obj);
};
export const sendMessageWithoutContentInventoryEntry = function sendMessageWithoutContentInventoryEntry(channel) {
  let _location;
  let content;
  let doNotNotifyOnError;
  let whenReady;
  channel = channel.channel;
  ({ content, whenReady, doNotNotifyOnError, location: _location } = channel);
  let obj = require("../messages/MessageParser.tsx");
  const parsed = obj.parse(channel, content);
  obj = { doNotNotifyOnError, location: _location };
  return require("../../actions/MessageActionCreators.tsx").sendMessage(channel.id, parsed, whenReady, obj);
};