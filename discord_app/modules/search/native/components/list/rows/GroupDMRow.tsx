import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("computeChannelName").fileFinishedImporting("modules/search/native/components/list/rows/GroupDMRow.tsx");

export default function GroupDMRow(channel) {
  let accessibilityActions;
  let onAccessibilityAction;
  let trailing;
  channel = channel.channel;
  const onPress = channel.onPress;
  ({ trailing, onAccessibilityAction, accessibilityActions } = channel);
  let str = onPress(4446)(channel);
  const items = [channel.id, onPress];
  const callback = React.useCallback(() => {
    onPress(channel.id);
  }, items);
  let obj = { size: null, channel: null };
  obj[0] = channel(1297).AvatarSizes.LARGE_48;
  obj[1] = channel;
  const tmp4 = onPress(9274);
  const tmp6 = jsx(onPress(9274), { size: null, channel: null });
  const recipientsLabel = channel(9275).useRecipientsLabel(channel);
  let tmp3Result;
  if (null != recipientsLabel) {
    obj = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: null };
    obj[3] = recipientsLabel;
    tmp3Result = tmp3(tmp5(4251).Text, obj);
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
  return jsx(channel(15579).SearchListRow, { label: str2, icon: tmp6, onPress: callback, accessibilityLabel: null, subLabel: null, trailing: null, accessibilityActions: null, onAccessibilityAction: null });
};