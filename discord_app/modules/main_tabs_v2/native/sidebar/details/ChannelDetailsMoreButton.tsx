// discord_app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsMoreButton.tsx
import noop from "noop";
import { jsx } from "jsxProd";
import { registerAsset } from "../../../../../../_runtime/09051_registerAsset.js";
import { PressableNavigatorButtonWrapper } from "../../shared_components/navigator/PressableNavigatorButtonWrapper.tsx";

const require = arg1;
let result = require("openChannelLongPressActionSheet").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsMoreButton.tsx");

export default function MoreButton(channel) {
  channel = channel.channel;
  [][0] = channel;
  let tmp2 = null;
  if (null != channel) {
    if (channel.isDM()) {
      let obj = { children: null };
      obj = { accessibilityLabel: null, source: null, onPress: null };
      const intl = channel(1236).intl;
      obj[0] = intl.string(channel(1236).t["UKOtz+"]);
      obj[1] = registerAsset;
      obj[2] = tmp;
      obj[0] = jsx(channel(8382).HeaderIconButton, { accessibilityLabel: null, source: null, onPress: null });
      tmp2 = jsx(PressableNavigatorButtonWrapper, { accessibilityLabel: null, source: null, onPress: null });
      const tmp6 = PressableNavigatorButtonWrapper;
    } else {
      tmp2 = null;
    }
  }
  return tmp2;
};