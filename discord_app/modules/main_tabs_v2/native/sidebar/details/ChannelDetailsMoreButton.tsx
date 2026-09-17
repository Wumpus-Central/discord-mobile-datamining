// === Module 16977: ChannelDetailsMoreButton ===

// Module 16977 (ChannelDetailsMoreButton)
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 7987 */;
import _modDef9951 from "module_9951" /* 9951 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 11070 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsMoreButton.tsx");

export default function MoreButton(channel) {
  channel = channel.channel;
  [][0] = channel;
  let tmp2 = null;
  if (null != channel) {
    if (channel.isDM()) {
      const obj = { children: null };
      let obj2 = { accessibilityLabel: null, source: null, onPress: null };
      const intl = channel(1115).intl;
      obj2.accessibilityLabel = intl.string(channel(1115).t["UKOtz+"]);
      obj2.source = _modDef9951;
      obj2.onPress = tmp;
      obj.children = jsx(channel(7984).HeaderIconButton, { accessibilityLabel: null, source: null, onPress: null });
      tmp2 = jsx(PressableNavigatorButtonWrapperDefault, { children: null });
    } else {
      tmp2 = null;
    }
  }
  return tmp2;
};