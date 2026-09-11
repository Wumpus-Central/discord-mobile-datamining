// === Module 16295: UnknownChannel ===

// Module 16295 (UnknownChannel)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4305 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4561 */;
import useChannelNameDefault from "useChannelName" /* 4759 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 11005 */;
import ChannelItemDefault from "ChannelItem" /* 16187 */;
import noop from "module_19" /* 19 */;

require = fn;
function handlePress() {
  const obj = { key: "UNKNOWN_CHANNEL_UPDATE_DISCORD", content: null, IconComponent: null };
  const intl = util.intl;
  obj.content = intl.string(util.t["/ZjyYE"]);
  obj.IconComponent = CircleInformationIcon.CircleInformationIcon;
  obj.open(obj);
}
const UnreadSetting = fn(4788).UnreadSetting;
const jsx = fn(21).jsx;
const createStyles = fn(4606);
let obj = { container: null };
obj = { marginVertical: fn(10207).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
obj.container = obj;
let closure_6 = createStyles.createStyles(obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/UnknownChannel.tsx");

export default noop.memo((channel) => {
  channel = channel.channel;
  const selected = channel.selected;
  const items = [channel.id];
  const tmp = closure_6();
  const callback = noop.useCallback(() => {
    const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id);
  }, items);
  const obj = { onPress: handlePress, onLongPress: callback, style: tmp.container, accessible: true, accessibilityLabel: null, accessibilityState: null, channel: null, selected: null, resolvedUnreadSetting: null };
  const tmp2 = useChannelNameDefault(channel);
  const intl = channel(1114).intl;
  obj.accessibilityLabel = intl.formatToPlainString(channel(1114).t.yjQ9P8, { channelName: tmp2 });
  obj.accessibilityState = { selected };
  obj.channel = channel;
  obj.selected = selected;
  obj.resolvedUnreadSetting = UnreadSetting.ONLY_MENTIONS;
  return jsx(ChannelItemDefault, { onPress: handlePress, onLongPress: callback, style: tmp.container, accessible: true, accessibilityLabel: null, accessibilityState: null, channel: null, selected: null, resolvedUnreadSetting: null });
});