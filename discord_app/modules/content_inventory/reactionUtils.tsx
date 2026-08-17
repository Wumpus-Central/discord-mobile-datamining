// discord_app/modules/content_inventory/reactionUtils.tsx
import set from "../../../_runtime/00002_set.js";
import trackInviteDefault from "../../actions/MessageActionCreators.tsx";
import rebuildDefault from "../messages/MessageParser.tsx";

const result = set.fileFinishedImporting("modules/content_inventory/reactionUtils.tsx");

export const sendMessageWithEmbed = function sendMessageWithEmbed(channel) {
  channel = channel.channel;
  ({ content, entry, whenReady, doNotNotifyOnError, location: _location } = channel);
  let obj = rebuildDefault;
  const parsed = obj.parse(channel, content);
  obj = { contentInventoryEntry: { unverified_content: entry }, doNotNotifyOnError, location: _location };
  return trackInviteDefault.sendMessage(channel.id, parsed, whenReady, obj);
};
export const sendMessageWithoutContentInventoryEntry = function sendMessageWithoutContentInventoryEntry(channel) {
  channel = channel.channel;
  ({ content, whenReady, doNotNotifyOnError, location: _location } = channel);
  let obj = rebuildDefault;
  const parsed = obj.parse(channel, content);
  obj = { doNotNotifyOnError, location: _location };
  return trackInviteDefault.sendMessage(channel.id, parsed, whenReady, obj);
};