// === Module 9915: GroupDMRow ===

// Module 9915 (GroupDMRow)
import noop from "noop" /* 19 */;
import { UserRowModes } from "UserRowModes" /* 9081 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/GroupDMRow.tsx");

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
  const merged = Object.assign(channel, Object.create(null));
  let str = onPress(4984)(channel);
  const items = [channel, onPress];
  const callback = React.useCallback(() => {
    if (onPress != null) {
      tmp(channel);
    }
  }, items);
  { size: channel(1297).AvatarSizes.REFRESH_MEDIUM_32, channel };
  const tmp6 = onPress(9916);
  obj1 = channel(9917);
  const recipientsLabel = obj1.useRecipientsLabel(channel);
  let obj = {};
  const merged1 = Object.assign(merged);
  obj.disabled = flag2;
  let tmp5Result;
  if (null != recipientsLabel) {
    obj = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: null };
    obj[3] = recipientsLabel;
    tmp5Result = jsx(tmp7(4734).Text, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: null });
  }
  obj.subLabel = tmp5Result;
  obj.icon = jsx(onPress(9916), {});
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
    tmp5Result = jsx(tmp7(8558).TableCheckboxRow, {});
  } else {
    const merged3 = Object.assign(obj);
    tmp5Result = jsx(tmp7(6291).TableRow, {});
  }
  return tmp5Result;
};