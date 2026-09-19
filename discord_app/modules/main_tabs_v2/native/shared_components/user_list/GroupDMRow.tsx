// === Module 11172: GroupDMRow ===

// Module 11172 (GroupDMRow)
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4752 */;
import useChannelNameDefault from "useChannelName" /* 4909 */;
import TableCheckboxRow from "TableCheckboxRow" /* 5816 */;
import TableRow from "TableRow" /* 5817 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 11173 */;
import useRecipientsLabel from "useRecipientsLabel" /* 11174 */;
import noop from "module_19" /* 19 */;

require = fn;
const UserRowModes = fn(11121).UserRowModes;
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
  const obj = { size: native.AvatarSizes.REFRESH_MEDIUM_32, channel };
  const tmp8 = jsx(GroupDMAvatarDefault, { size: native.AvatarSizes.REFRESH_MEDIUM_32, channel });
  const recipientsLabel = useRecipientsLabel.useRecipientsLabel(channel);
  const obj3 = {};
  const merged1 = Object.assign(merged);
  obj3.disabled = flag2;
  let tmp5Result;
  if (null != recipientsLabel) {
    const obj4 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: recipientsLabel };
    tmp5Result = jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: recipientsLabel });
  }
  obj3.subLabel = tmp5Result;
  obj3.icon = tmp8;
  obj3.onPress = callback;
  if (str == null) {
    str = "";
  }
  obj3.label = str;
  obj3.labelLineClamp = 1;
  obj3.height = "100%";
  if (NONE === UserRowModes.TOGGLE) {
    const obj5 = {};
    const merged2 = Object.assign(obj3);
    obj5.checked = flag;
    let tmp5Result2 = jsx(TableCheckboxRow.TableCheckboxRow, {});
  } else {
    const obj6 = {};
    const merged3 = Object.assign(obj3);
    tmp5Result2 = jsx(TableRow.TableRow, {});
  }
  return tmp5Result2;
};