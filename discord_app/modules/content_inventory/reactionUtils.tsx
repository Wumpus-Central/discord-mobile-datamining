// === Module 16503: reactionUtils ===

// Module 16503 (reactionUtils)
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7456 */;
import MessageParserDefault from "MessageParser" /* 7682 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/content_inventory/reactionUtils.tsx");

export const sendMessageWithEmbed = function sendMessageWithEmbed(channel) {
  channel = channel.channel;
  ({ content, entry, whenReady, doNotNotifyOnError, location: _location } = channel);
  let obj = MessageParserDefault;
  const parsed = obj.parse(channel, content);
  obj = { contentInventoryEntry: { unverified_content: entry }, doNotNotifyOnError, location: _location };
  return MessageActionCreatorsDefault.sendMessage(channel.id, parsed, whenReady, obj);
};
export const sendMessageWithoutContentInventoryEntry = function sendMessageWithoutContentInventoryEntry(channel) {
  channel = channel.channel;
  ({ content, whenReady, doNotNotifyOnError, location: _location } = channel);
  let obj = MessageParserDefault;
  const parsed = obj.parse(channel, content);
  obj = { doNotNotifyOnError, location: _location };
  return MessageActionCreatorsDefault.sendMessage(channel.id, parsed, whenReady, obj);
};