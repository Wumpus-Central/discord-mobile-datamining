// === Module 16654: UnknownChannel ===

// Module 16654 (UnknownChannel)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5046 */;
import useChannelNameDefault from "useChannelName" /* 5421 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10282 */;
import ChannelItemDefault from "ChannelItem" /* 16542 */;
import noop from "module_19" /* 19 */;

require = fn;
function handlePress() {
  const obj2 = { text: null, icon: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t["/ZjyYE"]);
  obj2.icon = CircleInformationIcon.CircleInformationIcon;
  ToastActionCreatorsDefault.open("UNKNOWN_CHANNEL_UPDATE_DISCORD", obj2);
}
const UnreadSetting = fn(5967).UnreadSetting;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj = { container: { marginVertical: fn(11758).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md } };
let closure_6 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { marginVertical: fn(11758).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/items/UnknownChannel.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function UnknownChannel(channel) {
  const cResult = channel(576).c(13);
  channel = channel.channel;
  const selected = channel.selected;
  const tmp4 = closure_6();
  const tmp6 = useChannelNameDefault(channel);
  if (cResult[0] !== channel.id) {
    const fn = function t() {
      const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id);
    };
    cResult[0] = channel.id;
    cResult[1] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== tmp6) {
    const intl = tmp(1126).intl;
    const obj2 = { channelName: tmp6 };
    const formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t.yjQ9P8, obj2);
    cResult[2] = tmp6;
    cResult[3] = formatToPlainStringResult;
    let tmp8 = formatToPlainStringResult;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== selected) {
    const obj3 = { selected };
    cResult[4] = selected;
    cResult[5] = obj3;
    let tmp10 = obj3;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] === channel) {
    if (cResult[7] === tmp7) {
      if (cResult[8] === selected) {
        if (cResult[9] === tmp4.container) {
          if (cResult[10] === tmp8) {
            if (cResult[11] === tmp10) {
              let tmp11 = cResult[12];
            }
            return tmp11;
          }
        }
      }
    }
  }
  const tmp12 = jsx(ChannelItemDefault, { onPress: handlePress, onLongPress: tmp7, style: tmp4.container, accessible: true, accessibilityLabel: tmp8, accessibilityState: tmp10, channel, selected, resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS });
  cResult[6] = channel;
  cResult[7] = tmp7;
  cResult[8] = selected;
  cResult[9] = tmp4.container;
  cResult[10] = tmp8;
  cResult[11] = tmp10;
  cResult[12] = tmp12;
  tmp11 = tmp12;
  const obj = channel(576);
  const obj4 = { onPress: handlePress, onLongPress: tmp7, style: tmp4.container, accessible: true, accessibilityLabel: tmp8, accessibilityState: tmp10, channel, selected, resolvedUnreadSetting: UnreadSetting.ONLY_MENTIONS };
}) : (function UnknownChannel(channel) {
  channel = channel.channel;
  const selected = channel.selected;
  const items = [channel.id];
  const tmp = closure_6();
  const callback = noop.useCallback(() => {
    const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id);
  }, items);
  const obj = { onPress: handlePress, onLongPress: callback, style: tmp.container, accessible: true, accessibilityLabel: null, accessibilityState: null, channel: null, selected: null, resolvedUnreadSetting: null };
  const tmp2 = useChannelNameDefault(channel);
  const intl = channel(1126).intl;
  obj.accessibilityLabel = intl.formatToPlainString(channel(1126).t.yjQ9P8, { channelName: tmp2 });
  obj.accessibilityState = { selected };
  obj.channel = channel;
  obj.selected = selected;
  obj.resolvedUnreadSetting = UnreadSetting.ONLY_MENTIONS;
  return jsx(ChannelItemDefault, { onPress: handlePress, onLongPress: callback, style: tmp.container, accessible: true, accessibilityLabel: null, accessibilityState: null, channel: null, selected: null, resolvedUnreadSetting: null });
}));