// discord_app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsMoreButton.tsx
import PressableNavigatorButtonWrapperDefault from "../../shared_components/navigator/PressableNavigatorButtonWrapper.tsx";
import _modDef9800 from "../../../../../../_runtime/metro/09800__.js";
import openChannelLongPressActionSheet from "../../../../channel/native/openChannelLongPressActionSheet.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

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
      obj.source = _modDef9800;
      obj.onPress = tmp;
      obj.children = jsx(channel(7863).HeaderIconButton, { accessibilityLabel: null, source: null, onPress: null });
      tmp2 = jsx(PressableNavigatorButtonWrapperDefault, { accessibilityLabel: null, source: null, onPress: null });
    } else {
      tmp2 = null;
    }
  }
  return tmp2;
}
