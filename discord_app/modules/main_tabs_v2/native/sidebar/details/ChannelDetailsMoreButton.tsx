// discord_app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsMoreButton.tsx
import noop from "noop";
import { jsx } from "jsxProd";

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
      obj[1] = require("../../../../../../_runtime/08973_registerAsset.js");
      obj[2] = tmp;
      obj[0] = jsx(channel(8193).HeaderIconButton, { accessibilityLabel: null, source: null, onPress: null });
      tmp2 = jsx(require("../../shared_components/navigator/PressableNavigatorButtonWrapper.tsx"), { accessibilityLabel: null, source: null, onPress: null });
      const tmp6 = require("../../shared_components/navigator/PressableNavigatorButtonWrapper.tsx");
    } else {
      tmp2 = null;
    }
  }
  return tmp2;
};