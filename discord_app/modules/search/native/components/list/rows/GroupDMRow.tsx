// === Module 16653: rows/GroupDMRow ===

// Module 16653 (rows/GroupDMRow)
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4556 */;
import useChannelNameDefault from "useChannelName" /* 4713 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 10910 */;
import useRecipientsLabel from "useRecipientsLabel" /* 10911 */;
import SearchListRow from "SearchListRow" /* 16652 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/GroupDMRow.tsx");

export default function GroupDMRow(channel) {
  channel = channel.channel;
  const onPress = channel.onPress;
  ({ trailing, onAccessibilityAction, accessibilityActions } = channel);
  let str = useChannelNameDefault(channel);
  const items = [channel.id, onPress];
  const callback = noop.useCallback(() => {
    onPress(channel.id);
  }, items);
  let obj = { size: native.AvatarSizes.LARGE_48, channel };
  const tmp6 = jsx(GroupDMAvatarDefault, { size: native.AvatarSizes.LARGE_48, channel });
  const recipientsLabel = useRecipientsLabel.useRecipientsLabel(channel);
  let tmp3Result;
  if (null != recipientsLabel) {
    obj = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: recipientsLabel };
    tmp3Result = jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: recipientsLabel });
  }
  let str2 = str;
  if (str == null) {
    str2 = "";
  }
  obj = { label: str2, icon: tmp6, onPress: callback, accessibilityLabel: null, subLabel: null, trailing: null, accessibilityActions: null, onAccessibilityAction: null };
  if (str == null) {
    str = "";
  }
  obj.accessibilityLabel = str;
  obj.subLabel = tmp3Result;
  obj.trailing = trailing;
  obj.accessibilityActions = accessibilityActions;
  obj.onAccessibilityAction = onAccessibilityAction;
  return jsx(SearchListRow.SearchListRow, { label: str2, icon: tmp6, onPress: callback, accessibilityLabel: null, subLabel: null, trailing: null, accessibilityActions: null, onAccessibilityAction: null });
};