// === Module 15950: MoreButton ===

// Module 15950 (MoreButton)
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 8495 */;
import registerAssetDefault from "registerAsset" /* 8904 */;
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsMoreButton.tsx");

export default function MoreButton(channel) {
  channel = channel.channel;
  [][0] = channel;
  let tmp2 = null;
  if (null != channel) {
    if (channel.isDM()) {
      const obj = { accessibilityLabel: null, source: null, onPress: null };
      const intl = channel(1236).intl;
      obj[0] = intl.string(channel(1236).t["UKOtz+"]);
      obj[1] = registerAssetDefault;
      obj[2] = tmp;
      obj[0] = jsx(channel(8492).HeaderIconButton, { accessibilityLabel: null, source: null, onPress: null });
      tmp2 = jsx(PressableNavigatorButtonWrapperDefault, { accessibilityLabel: null, source: null, onPress: null });
    } else {
      tmp2 = null;
    }
  }
  return tmp2;
};