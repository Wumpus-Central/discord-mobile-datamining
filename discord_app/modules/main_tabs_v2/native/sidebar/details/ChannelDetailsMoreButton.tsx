// === Module 18805: ChannelDetailsMoreButton ===

// Module 18805 (ChannelDetailsMoreButton)
import _modDef9100 from "module_9100" /* 9100 */;
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 9815 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10802 */;
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
      const intl = channel(1113).intl;
      obj2.accessibilityLabel = intl.string(channel(1113).t["UKOtz+"]);
      obj2.source = _modDef9100;
      obj2.onPress = tmp;
      obj.children = jsx(channel(9812).HeaderIconButton, { accessibilityLabel: null, source: null, onPress: null });
      tmp2 = jsx(PressableNavigatorButtonWrapperDefault, { children: null });
    } else {
      tmp2 = null;
    }
  }
  return tmp2;
};