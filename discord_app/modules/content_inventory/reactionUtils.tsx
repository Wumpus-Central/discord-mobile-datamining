// discord_app/modules/content_inventory/reactionUtils.tsx
import MessageActionCreatorsDefault from "../../actions/MessageActionCreators.tsx";
import MessageParserDefault from "../messages/MessageParser.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/content_inventory/reactionUtils.tsx");

export const sendMessageWithEmbed = function sendMessageWithEmbed(channel) {
  channel = channel.channel;
  ({ content, entry, whenReady, doNotNotifyOnError, location: _location } = channel);
  const parsed = MessageParserDefault.parse(channel, content);
  return MessageActionCreatorsDefault.sendMessage(channel.id, parsed, whenReady, {
    contentInventoryEntry: { unverified_content: entry },
    doNotNotifyOnError,
    location: _location,
  });
};
export const sendMessageWithoutContentInventoryEntry = function sendMessageWithoutContentInventoryEntry(channel) {
  channel = channel.channel;
  ({ content, whenReady, doNotNotifyOnError, location: _location } = channel);
  const parsed = MessageParserDefault.parse(channel, content);
  return MessageActionCreatorsDefault.sendMessage(channel.id, parsed, whenReady, {
    doNotNotifyOnError,
    location: _location,
  });
};
