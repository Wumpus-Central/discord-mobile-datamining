// discord_app/modules/messages/native/renderer/system_messages/RemoveRecipientSystemMessage.tsx
import ChannelRecord from "../../../../../records/ChannelRecord.tsx";
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const THREAD_CHANNEL_TYPES = ChannelRecord.THREAD_CHANNEL_TYPES;
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/RemoveRecipientSystemMessage.tsx",
);

export const createRemoveRecipientSystemMessage = function createRemoveRecipientSystemMessage(message) {
  ({ message, roleStyle } = message);
  const first = message.mentions[0];
  const channel = ChannelStore.getChannel(message.channel_id);
  let hasItem = null != channel;
  if (hasItem) {
    hasItem = THREAD_CHANNEL_TYPES.has(channel.type);
  }
  let obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = {
    username: messageAuthorWithProcessedColor.nick,
    usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }),
  };
  if (message.author.id === first) {
    const intl = tmp5(1114).intl;
    const formatToParts = intl.formatToParts;
    const t = tmp5(1114).t;
    if (hasItem) {
      let formatToPartsResult = formatToParts(t.uHmblj, obj);
    } else {
      formatToPartsResult = formatToParts(t["Qn5+Lf"], obj);
    }
    obj = { content: formatToPartsResult };
    const merged = Object.assign(tmp8(7964)(message));
    return obj;
  } else {
    const user = UserStore.getUser(first);
    const userAuthorWithProcessedColor = tmp5(7960).getUserAuthorWithProcessedColor(user, channel);
    const obj1 = {};
    const merged1 = Object.assign(obj);
    obj1.otherUsername = userAuthorWithProcessedColor.nick;
    const obj2 = { userId: first, message, author: userAuthorWithProcessedColor, roleStyle };
    obj1.otherUsernameOnClick = tmp8(7962)(obj2);
    const intl2 = tmp5(1114).intl;
    const formatToParts2 = intl2.formatToParts;
    const t2 = tmp5(1114).t;
    if (hasItem) {
      let formatToParts2Result = formatToParts2(t2.KBrM5t, obj1);
    } else {
      formatToParts2Result = formatToParts2(t2.QtZ0RD, obj1);
    }
    const obj3 = { content: formatToParts2Result };
    const merged2 = Object.assign(tmp8(7964)(message));
    return obj3;
  }
};
