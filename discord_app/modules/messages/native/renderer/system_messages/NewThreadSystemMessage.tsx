// discord_app/modules/messages/native/renderer/system_messages/NewThreadSystemMessage.tsx
import util from "../../../../../intl/index.native.tsx";
import useChannelName from "../../../../channel/useChannelName.tsx";
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/NewThreadSystemMessage.tsx",
);

export const createNewThreadSystemMessage = function createNewThreadSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const messageReference = message.messageReference;
  let channel_id;
  if (messageReference != null) {
    channel_id = messageReference.channel_id;
  }
  const channel = ChannelStore.getChannel(channel_id);
  const intl = util.intl;
  obj = {
    actorName: messageAuthorWithProcessedColor.nick,
    actorHook: formatUsernameOnClickDefault({
      message,
      author: messageAuthorWithProcessedColor,
      roleStyle: roleStyle.roleStyle,
    }),
    threadName: null,
    threadOnClick: null,
  };
  if (null != channel) {
    let content = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
    const tmpResult = useChannelName;
  } else {
    content = message.content;
  }
  obj.threadName = content;
  const messageReference2 = message.messageReference;
  let channel_id1;
  if (messageReference2 != null) {
    channel_id1 = messageReference2.channel_id;
  }
  obj = {
    content: intl.formatToParts(util.t.veX9jq, obj),
    threadOnClick: { action: "bindOpenThreadChannel", threadId: channel_id1, medium: true },
  };
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj;
};
