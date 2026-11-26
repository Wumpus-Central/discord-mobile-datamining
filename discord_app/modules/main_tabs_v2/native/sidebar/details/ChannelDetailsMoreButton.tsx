// === Module 19057: ChannelDetailsMoreButton ===

// Module 19057 (ChannelDetailsMoreButton)
import _modDef8625 from "module_8625" /* 8625 */;
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 9007 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 11406 */;
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
      const intl = channel(1112).intl;
      obj2.accessibilityLabel = intl.string(channel(1112).t["UKOtz+"]);
      obj2.source = _modDef8625;
      obj2.onPress = tmp;
      obj.children = jsx(channel(9004).HeaderIconButton, { accessibilityLabel: null, source: null, onPress: null });
      tmp2 = jsx(PressableNavigatorButtonWrapperDefault, { children: null });
    } else {
      tmp2 = null;
    }
  }
  return tmp2;
};