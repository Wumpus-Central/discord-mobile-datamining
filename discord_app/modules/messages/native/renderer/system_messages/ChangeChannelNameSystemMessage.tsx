// === Module 7982: ChangeChannelNameSystemMessage ===

// Module 7982 (ChangeChannelNameSystemMessage)
import resolveMessageContentColorsDefault from "resolveMessageContentColors" /* 7953 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7960 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7962 */;
import createCommonMessageDefault from "createCommonMessage" /* 7964 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ChangeChannelNameSystemMessage.tsx");

export const createChangeChannelNameSystemMessage = function createChangeChannelNameSystemMessage(message) {
  message = message.message;
  ({ theme, roleStyle } = message);
  const tmp3 = resolveMessageContentColorsDefault(theme);
  let obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp6 = formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle });
  const channel = ChannelStore.getChannel(message.channel_id);
  let flag;
  if (channel != null) {
    const isGroupDM = channel.isGroupDM;
    if (isGroupDM != null) {
      flag = isGroupDM();
    }
  }
  if (flag == null) {
    flag = false;
  }
  if ("" === message.content) {
    let rk0be9 = tmp4(1114).t.hToFyf;
  } else {
    rk0be9 = tmp4(1114).t.rk0be9;
  }
  const tmp8 = createCommonMessageDefault(message);
  const intl = tmp4(1114).intl;
  const formatToParts = intl.formatToParts;
  if (flag) {
    obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp6, channelName: message.content, onEditGroup: null };
    let linkColor;
    if (tmp3 != null) {
      linkColor = tmp3.linkColor;
    }
    obj = { action: "bindOpenGdmCustomizeActionSheet", linkColor, messageChannelId: message.channel_id };
    obj.onEditGroup = obj;
    let formatToPartsResult = formatToParts(rk0be9, obj);
  } else {
    const t = tmp4(1114).t;
    const obj1 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp6, channelName: message.content };
    formatToPartsResult = formatToParts(message.isForumPost ? t["qa0e/n"] : t.XCPMEG, obj1);
  }
  const merged = Object.assign(tmp8);
  let tmp12;
  if (flag) {
    let accessibilityActions = tmp8.accessibilityActions;
    if (accessibilityActions == null) {
      accessibilityActions = [];
    }
    const obj3 = { accessibilityActions: null };
    const items = [];
    const obj4 = { label: null, name: null };
    const intl2 = tmp4(1114).intl;
    obj4.label = intl2.string(tmp4(1114).t["5Q9+/L"]);
    obj4.name = tmp4(7967).MessageAccessibilityAction.EDIT_GDM;
    items[HermesBuiltin.arraySpread(accessibilityActions, 0)] = obj4;
    obj3.accessibilityActions = items;
    tmp12 = obj3;
    const arraySpreadResult = HermesBuiltin.arraySpread(accessibilityActions, 0);
  }
  const merged1 = Object.assign(tmp12);
  return { content: formatToPartsResult };
};