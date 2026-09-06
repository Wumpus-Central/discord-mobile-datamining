// discord_app/modules/messages/native/renderer/system_messages/AddRecipientSystemMessage.tsx
import util from "../../../../../intl/index.native.tsx";
import ChannelRecord from "../../../../../records/ChannelRecord.tsx";
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const THREAD_CHANNEL_TYPES = ChannelRecord.THREAD_CHANNEL_TYPES;
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/AddRecipientSystemMessage.tsx",
);

export const createAddRecipientSystemMessage = function createAddRecipientSystemMessage(message) {
  ({ message, roleStyle } = message);
  const first = message.mentions[0];
  const user = UserStore.getUser(first);
  const channel = ChannelStore.getChannel(message.channel_id);
  let hasItem = null != channel;
  if (hasItem) {
    hasItem = THREAD_CHANNEL_TYPES.has(channel.type);
  }
  let obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const userAuthorWithProcessedColor = useAuthorWithProcessedColor.getUserAuthorWithProcessedColor(user, channel);
  obj = {
    username: messageAuthorWithProcessedColor.nick,
    usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }),
    otherUsername: userAuthorWithProcessedColor.nick,
    otherUsernameOnClick: formatUsernameOnClickDefault({
      userId: first,
      message,
      author: userAuthorWithProcessedColor,
      roleStyle,
    }),
  };
  const intl = util.intl;
  const formatToParts = intl.formatToParts;
  const t = util.t;
  if (hasItem) {
    let formatToPartsResult = formatToParts(t.Vej1Nw, obj);
  } else {
    formatToPartsResult = formatToParts(t["7/Xl0S"], obj);
  }
  obj = { content: formatToPartsResult };
  const merged = Object.assign(createCommonMessageDefault(message));
  return obj;
};
