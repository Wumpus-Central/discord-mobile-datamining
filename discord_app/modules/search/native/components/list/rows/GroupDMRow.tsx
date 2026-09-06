// discord_app/modules/search/native/components/list/rows/GroupDMRow.tsx
import native from "../../../../../../design/void/native.tsx";
import useChannelNameDefault from "../../../../../channel/useChannelName.tsx";
import GroupDMAvatarDefault from "../../../../../group_dm/native/GroupDMAvatar.tsx";
import useRecipientsLabel from "../../../../../main_tabs_v2/useRecipientsLabel.tsx";
import SearchListRow from "../SearchListRow.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

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
    tmp3Result = tmp3(tmp5(4556).Text, obj);
  }
  let str2 = str;
  if (str == null) {
    str2 = "";
  }
  obj = {
    label: str2,
    icon: tmp6,
    onPress: callback,
    accessibilityLabel: null,
    subLabel: null,
    trailing: null,
    accessibilityActions: null,
    onAccessibilityAction: null,
  };
  if (str == null) {
    str = "";
  }
  obj.accessibilityLabel = str;
  obj.subLabel = tmp3Result;
  obj.trailing = trailing;
  obj.accessibilityActions = accessibilityActions;
  obj.onAccessibilityAction = onAccessibilityAction;
  return jsx(SearchListRow.SearchListRow, {
    label: str2,
    icon: tmp6,
    onPress: callback,
    accessibilityLabel: null,
    subLabel: null,
    trailing: null,
    accessibilityActions: null,
    onAccessibilityAction: null,
  });
}
