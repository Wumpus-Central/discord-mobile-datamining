// === Module 17193: ChannelDetailsMoreButton ===

// Module 17193 (ChannelDetailsMoreButton)
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 8108 */;
import _modDef9897 from "module_9897" /* 9897 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 11176 */;
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
      obj2.source = _modDef9897;
      obj2.onPress = tmp;
      obj.children = jsx(channel(8105).HeaderIconButton, { accessibilityLabel: null, source: null, onPress: null });
      tmp2 = jsx(PressableNavigatorButtonWrapperDefault, { children: null });
    } else {
      tmp2 = null;
    }
  }
  return tmp2;
};