// discord_app/modules/channel_list_v2/native/items/UnknownChannel.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import CircleInformationIcon from "../../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import openChannelLongPressActionSheet from "../../../channel/native/openChannelLongPressActionSheet.tsx";
import ChannelItemDefault from "../../../guild_sidebar/native/ChannelItem.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function handlePress() {
  const obj2 = { text: null, icon: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t["/ZjyYE"]);
  obj2.icon = CircleInformationIcon.CircleInformationIcon;
  ToastActionCreatorsDefault.open("UNKNOWN_CHANNEL_UPDATE_DISCORD", obj2);
}
const UnreadSetting = fn(6770).UnreadSetting;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let obj = {
  container: {
    marginVertical: fn(11027).CHANNEL_MARGIN_VERTICAL,
    marginHorizontal: 8,
    borderRadius: nativeDefault.radii.md,
  },
};
let closure_6 = createStyles.createStyles(obj);
const obj3 = {
  marginVertical: fn(11027).CHANNEL_MARGIN_VERTICAL,
  marginHorizontal: 8,
  borderRadius: nativeDefault.radii.md,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/UnknownChannel.tsx");

export default noop.memo(function UnknownChannel(channel) {
  channel = channel.channel;
  const selected = channel.selected;
  const items = [channel.id];
  const tmp = closure_6();
  const callback = noop.useCallback(() => {
    const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id);
  }, items);
  const obj = {
    onPress: handlePress,
    onLongPress: callback,
    style: tmp.container,
    accessible: true,
    accessibilityLabel: null,
    accessibilityState: null,
    channel: null,
    selected: null,
    resolvedUnreadSetting: null,
  };
  const tmp2 = useChannelNameDefault(channel);
  const intl = channel(1114).intl;
  obj.accessibilityLabel = intl.formatToPlainString(channel(1114).t.yjQ9P8, { channelName: tmp2 });
  obj.accessibilityState = { selected };
  obj.channel = channel;
  obj.selected = selected;
  obj.resolvedUnreadSetting = UnreadSetting.ONLY_MENTIONS;
  return jsx(ChannelItemDefault, {
    onPress: handlePress,
    onLongPress: callback,
    style: tmp.container,
    accessible: true,
    accessibilityLabel: null,
    accessibilityState: null,
    channel: null,
    selected: null,
    resolvedUnreadSetting: null,
  });
});
