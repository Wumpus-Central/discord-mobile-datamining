// discord_app/modules/messages/native/renderer/system_messages/ChangeChannelNameSystemMessage.tsx
import ensureGuildLoaded from "ensureGuildLoaded";

const require = arg1;
const result = require("getMessageAuthorWithProcessedColor").fileFinishedImporting("modules/messages/native/renderer/system_messages/ChangeChannelNameSystemMessage.tsx");

export const createChangeChannelNameSystemMessage = function createChangeChannelNameSystemMessage(message) {
  let roleStyle;
  let theme;
  message = message.message;
  ({ theme, roleStyle } = message);
  const tmp3 = importDefault(7872)(theme);
  let obj = require(7879) /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp6 = importDefault(7881)({ message, author: messageAuthorWithProcessedColor, roleStyle });
  channel = channel.getChannel(message.channel_id);
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
    let rk0be9 = tmp4(1236).t.hToFyf;
  } else {
    rk0be9 = tmp4(1236).t.rk0be9;
  }
  const tmp8 = importDefault(7882)(message);
  const intl = tmp4(1236).intl;
  const formatToParts = intl.formatToParts;
  if (flag) {
    obj = { username: null, usernameOnClick: null, channelName: null, onEditGroup: null };
    obj[0] = messageAuthorWithProcessedColor.nick;
    obj[1] = tmp6;
    obj[2] = message.content;
    let linkColor;
    if (tmp3 != null) {
      linkColor = tmp3.linkColor;
    }
    obj = { action: "bindOpenGdmCustomizeActionSheet", linkColor: null, messageChannelId: null };
    obj[1] = linkColor;
    obj[2] = message.channel_id;
    obj[3] = obj;
    let formatToPartsResult = formatToParts(rk0be9, obj);
  } else {
    const t = tmp4(1236).t;
    const obj1 = { username: null, usernameOnClick: null, channelName: null };
    obj1[0] = messageAuthorWithProcessedColor.nick;
    obj1[1] = tmp6;
    obj1[2] = message.content;
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
    const intl2 = tmp4(1236).intl;
    obj4[0] = intl2.string(tmp4(1236).t["5Q9+/L"]);
    obj4[1] = tmp4(7885).MessageAccessibilityAction.EDIT_GDM;
    items[HermesBuiltin.arraySpread(accessibilityActions, 0)] = obj4;
    obj3[0] = items;
    tmp12 = obj3;
    const arraySpreadResult = HermesBuiltin.arraySpread(accessibilityActions, 0);
  }
  const merged1 = Object.assign(tmp12);
  return { content: formatToPartsResult };
};