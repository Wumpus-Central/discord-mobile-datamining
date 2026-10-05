// discord_app/modules/messages/native/renderer/system_messages/RemoveRecipientSystemMessage.tsx
import intl3 from "../../../../../intl/index.native.tsx";
import ChannelRecord from "../../../../../records/ChannelRecord.tsx";
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const THREAD_CHANNEL_TYPES = ChannelRecord.THREAD_CHANNEL_TYPES;
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/RemoveRecipientSystemMessage.tsx",
);

export const createRemoveRecipientSystemMessage = function createRemoveRecipientSystemMessage(message) {
  let obj5;
  let roleStyle;
  ({ message, roleStyle } = message);
  const first = message.mentions[0];
  const author = message.author;
  const channel = ChannelStore.getChannel(message.channel_id);
  const hasItem = null != channel && THREAD_CHANNEL_TYPES.has(channel.type);
  const obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const obj2 = {
    username: messageAuthorWithProcessedColor.nick,
    usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle }),
  };
  if (author.id === first) {
    let formatToPartsResult;
    const intl = intl3.intl;
    const formatToParts = intl.formatToParts;
    const t = intl3.t;
    if (hasItem) {
      formatToPartsResult = formatToParts(t.uHmblj, obj2);
    } else {
      formatToPartsResult = formatToParts(t["Qn5+Lf"], obj2);
    }
    const obj3 = { content: formatToPartsResult };
    const merged = Object.assign(createCommonMessageDefault(message));
    return obj3;
  } else {
    let formatToParts2Result;
    const user = UserStore.getUser(first);
    const tmp5Result = useAuthorWithProcessedColor;
    const userAuthorWithProcessedColor = tmp5Result.getUserAuthorWithProcessedColor(user, channel);
    const obj4 = {
      otherUsername: userAuthorWithProcessedColor.nick,
      otherUsernameOnClick: formatUsernameOnClickDefault(obj5),
    };
    const merged1 = Object.assign(obj2);
    obj5 = { userId: first, message, author: userAuthorWithProcessedColor, roleStyle };
    const intl2 = intl3.intl;
    const formatToParts2 = intl2.formatToParts;
    const t2 = intl3.t;
    if (hasItem) {
      formatToParts2Result = formatToParts2(t2.KBrM5t, obj4);
    } else {
      formatToParts2Result = formatToParts2(t2.QtZ0RD, obj4);
    }
    const obj6 = { content: formatToParts2Result };
    const merged2 = Object.assign(createCommonMessageDefault(message));
    return obj6;
  }
};
