// discord_app/modules/messages/native/renderer/system_messages/ChangeChannelIconSystemMessage.tsx
import resultDefault from "../resolveMessageContentColors.tsx";
import getMessageAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import closure_3 from "../../../../../stores/ChannelStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/system_messages/ChangeChannelIconSystemMessage.tsx");

export const createChangeChannelIconSystemMessage = function createChangeChannelIconSystemMessage(message) {
  message = message.message;
  ({ theme, roleStyle } = message);
  const tmp3 = resultDefault(theme);
  let obj = getMessageAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp6 = formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle });
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
  const tmp8 = createCommonMessageDefault(message);
  const intl = tmp4(1236).intl;
  const formatToParts = intl.formatToParts;
  const t = tmp4(1236).t;
  if (flag) {
    obj = { username: null, usernameOnClick: null, onEditGroup: null };
    obj[0] = messageAuthorWithProcessedColor.nick;
    obj[1] = tmp6;
    let linkColor;
    if (tmp3 != null) {
      linkColor = tmp3.linkColor;
    }
    obj = { action: "bindOpenGdmCustomizeActionSheet", linkColor: null, messageChannelId: null, medium: true };
    obj[1] = linkColor;
    obj[2] = message.channel_id;
    obj[2] = obj;
    let formatToPartsResult = formatToParts(t.hfeYXC, obj);
  } else {
    obj1 = { username: null, usernameOnClick: null };
    obj1[0] = messageAuthorWithProcessedColor.nick;
    obj1[1] = tmp6;
    formatToPartsResult = formatToParts(t.wypJZ0, obj1);
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
    obj4[1] = tmp4(7822).MessageAccessibilityAction.EDIT_GDM;
    items[HermesBuiltin.arraySpread(accessibilityActions, 0)] = obj4;
    obj3[0] = items;
    tmp12 = obj3;
    const arraySpreadResult = HermesBuiltin.arraySpread(accessibilityActions, 0);
  }
  const merged1 = Object.assign(tmp12);
  return { content: formatToPartsResult };
};