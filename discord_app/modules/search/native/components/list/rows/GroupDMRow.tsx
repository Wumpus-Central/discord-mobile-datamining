// === Module 15877: GroupDMRow ===

// Module 15877 (GroupDMRow)
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/search/native/components/list/rows/GroupDMRow.tsx");

export default function GroupDMRow(channel) {
  channel = channel.channel;
  const onPress = channel.onPress;
  ({ trailing, onAccessibilityAction, accessibilityActions } = channel);
  let str = onPress(4984)(channel);
  const items = [channel.id, onPress];
  const callback = React.useCallback(() => {
    onPress(channel.id);
  }, items);
  let obj = { size: channel(1297).AvatarSizes.LARGE_48, channel };
  const tmp4 = onPress(9916);
  const tmp6 = jsx(onPress(9916), { size: channel(1297).AvatarSizes.LARGE_48, channel });
  const recipientsLabel = channel(9917).useRecipientsLabel(channel);
  let tmp3Result;
  if (null != recipientsLabel) {
    obj = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: null };
    obj[3] = recipientsLabel;
    tmp3Result = tmp3(tmp5(4734).Text, obj);
  }
  let str2 = str;
  if (str == null) {
    str2 = "";
  }
  obj = { label: str2, icon: tmp6, onPress: callback, accessibilityLabel: null, subLabel: null, trailing: null, accessibilityActions: null, onAccessibilityAction: null };
  if (str == null) {
    str = "";
  }
  obj[3] = str;
  obj[4] = tmp3Result;
  obj[5] = trailing;
  obj[6] = accessibilityActions;
  obj[7] = onAccessibilityAction;
  return jsx(channel(15876).SearchListRow, { label: str2, icon: tmp6, onPress: callback, accessibilityLabel: null, subLabel: null, trailing: null, accessibilityActions: null, onAccessibilityAction: null });
};