// === Module 18839: ChannelDetailsMoreButton ===

// Module 18839 (ChannelDetailsMoreButton)
import _modDef8028 from "module_8028" /* 8028 */;
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 8564 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 13843 */;
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
      obj2.source = _modDef8028;
      obj2.onPress = tmp;
      obj.children = jsx(channel(8561).HeaderIconButton, { accessibilityLabel: null, source: null, onPress: null });
      tmp2 = jsx(PressableNavigatorButtonWrapperDefault, { children: null });
    } else {
      tmp2 = null;
    }
  }
  return tmp2;
};