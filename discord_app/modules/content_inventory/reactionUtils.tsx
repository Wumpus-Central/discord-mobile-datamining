// === Module 18196: reactionUtils ===

// Module 18196 (reactionUtils)
import MessageActionCreatorsDefault from "MessageActionCreators" /* 8162 */;
import MessageParserDefault from "MessageParser" /* 8294 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/content_inventory/reactionUtils.tsx");

export function sendMessageWithEmbed(channel) {
  channel = channel.channel;
  ({ content, entry, whenReady, doNotNotifyOnError, location: _location } = channel);
  const parsed = MessageParserDefault.parse(channel, content);
  return MessageActionCreatorsDefault.sendMessage(channel.id, parsed, whenReady, { contentInventoryEntry: { unverified_content: entry }, doNotNotifyOnError, location: _location });
}
export function sendMessageWithoutContentInventoryEntry(channel) {
  channel = channel.channel;
  ({ content, whenReady, doNotNotifyOnError, location: _location } = channel);
  const parsed = MessageParserDefault.parse(channel, content);
  return MessageActionCreatorsDefault.sendMessage(channel.id, parsed, whenReady, { doNotNotifyOnError, location: _location });
}