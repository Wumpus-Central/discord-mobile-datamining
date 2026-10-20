// === Module 17697: reactionUtils ===

// Module 17697 (reactionUtils)
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7515 */;
import MessageParserDefault from "MessageParser" /* 7702 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/content_inventory/reactionUtils.tsx");

export const sendMessageWithEmbed = function sendMessageWithEmbed(channel) {
  channel = channel.channel;
  ({ content, entry, whenReady, doNotNotifyOnError, location: _location } = channel);
  const parsed = MessageParserDefault.parse(channel, content);
  return MessageActionCreatorsDefault.sendMessage(channel.id, parsed, whenReady, { contentInventoryEntry: { unverified_content: entry }, doNotNotifyOnError, location: _location });
};
export const sendMessageWithoutContentInventoryEntry = function sendMessageWithoutContentInventoryEntry(channel) {
  channel = channel.channel;
  ({ content, whenReady, doNotNotifyOnError, location: _location } = channel);
  const parsed = MessageParserDefault.parse(channel, content);
  return MessageActionCreatorsDefault.sendMessage(channel.id, parsed, whenReady, { doNotNotifyOnError, location: _location });
};