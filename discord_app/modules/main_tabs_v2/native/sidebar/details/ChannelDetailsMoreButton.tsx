// === Module 16814: ChannelDetailsMoreButton ===

// Module 16814 (ChannelDetailsMoreButton)
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 7939 */;
import _modDef9891 from "module_9891" /* 9891 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 11005 */;
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
      let obj = { children: null };
      obj = { accessibilityLabel: null, source: null, onPress: null };
      const intl = channel(1114).intl;
      obj.accessibilityLabel = intl.string(channel(1114).t["UKOtz+"]);
      obj.source = _modDef9891;
      obj.onPress = tmp;
      obj.children = jsx(channel(7936).HeaderIconButton, { accessibilityLabel: null, source: null, onPress: null });
      tmp2 = jsx(PressableNavigatorButtonWrapperDefault, { accessibilityLabel: null, source: null, onPress: null });
    } else {
      tmp2 = null;
    }
  }
  return tmp2;
};