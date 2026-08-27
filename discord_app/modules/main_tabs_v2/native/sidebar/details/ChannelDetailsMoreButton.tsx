// === Module 16223: MoreButton ===

// Module 16223 (MoreButton)
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 7543 */;
import registerAssetDefault from "registerAsset" /* 9689 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsMoreButton.tsx");

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
      obj[1] = registerAssetDefault;
      obj[2] = tmp;
      obj[0] = jsx(channel(7540).HeaderIconButton, { accessibilityLabel: null, source: null, onPress: null });
      tmp2 = jsx(PressableNavigatorButtonWrapperDefault, { accessibilityLabel: null, source: null, onPress: null });
      const tmp6 = PressableNavigatorButtonWrapperDefault;
    } else {
      tmp2 = null;
    }
  }
  return tmp2;
};