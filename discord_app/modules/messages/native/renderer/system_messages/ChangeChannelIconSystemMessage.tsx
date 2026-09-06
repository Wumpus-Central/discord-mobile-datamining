// discord_app/modules/messages/native/renderer/system_messages/ChangeChannelIconSystemMessage.tsx
import resolveMessageContentColorsDefault from "../resolveMessageContentColors.tsx";
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/ChangeChannelIconSystemMessage.tsx",
);

export const createChangeChannelIconSystemMessage = function createChangeChannelIconSystemMessage(message) {
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
  const tmp8 = createCommonMessageDefault(message);
  const intl = tmp4(1114).intl;
  const formatToParts = intl.formatToParts;
  const t = tmp4(1114).t;
  if (flag) {
    obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp6, onEditGroup: null };
    let linkColor;
    if (tmp3 != null) {
      linkColor = tmp3.linkColor;
    }
    obj = { action: "bindOpenGdmCustomizeActionSheet", linkColor, messageChannelId: message.channel_id, medium: true };
    obj.onEditGroup = obj;
    let formatToPartsResult = formatToParts(t.hfeYXC, obj);
  } else {
    const obj1 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp6 };
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
