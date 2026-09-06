// === Module 10909: GroupDMRow ===

// Module 10909 (GroupDMRow)
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4556 */;
import useChannelNameDefault from "useChannelName" /* 4713 */;
import TableCheckboxRow from "TableCheckboxRow" /* 5604 */;
import TableRow from "TableRow" /* 5605 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 10910 */;
import useRecipientsLabel from "useRecipientsLabel" /* 10911 */;
import noop from "module_19" /* 19 */;

require = fn;
const UserRowModes = fn(10860).UserRowModes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/GroupDMRow.tsx");

export default function GroupDMRow(channel) {
  channel = channel.channel;
  let NONE = channel.mode;
  if (NONE === undefined) {
    NONE = UserRowModes.NONE;
  }
  let flag = channel.selected;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = channel.disabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const onPress = channel.onPress;
  const merged = Object.assign(channel, Object.assign({ channel: 0, mode: 0, selected: 0, disabled: 0, onPress: 0 }));
  let str = useChannelNameDefault(channel);
  const items = [channel, onPress];
  const callback = noop.useCallback(() => {
    if (onPress != null) {
      tmp(channel);
    }
  }, items);
  let obj = { size: native.AvatarSizes.REFRESH_MEDIUM_32, channel };
  let obj1 = useRecipientsLabel;
  const recipientsLabel = obj1.useRecipientsLabel(channel);
  obj = {};
  const merged1 = Object.assign(merged);
  obj.disabled = flag2;
  let tmp5Result;
  if (null != recipientsLabel) {
    obj = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: recipientsLabel };
    tmp5Result = jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: recipientsLabel });
  }
  obj.subLabel = tmp5Result;
  obj.icon = jsx(GroupDMAvatarDefault, {});
  obj.onPress = callback;
  if (str == null) {
    str = "";
  }
  obj.label = str;
  obj.labelLineClamp = 1;
  obj.height = "100%";
  if (NONE === UserRowModes.TOGGLE) {
    obj1 = {};
    const merged2 = Object.assign(obj);
    obj1.checked = flag;
    tmp5Result = jsx(TableCheckboxRow.TableCheckboxRow, {});
  } else {
    const obj2 = {};
    const merged3 = Object.assign(obj);
    tmp5Result = jsx(TableRow.TableRow, {});
  }
  return tmp5Result;
};