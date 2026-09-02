// discord_app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsMoreButton.tsx
import PressableNavigatorButtonWrapperDefault from "../../shared_components/navigator/PressableNavigatorButtonWrapper.tsx";
import registerAssetDefault from "../../../../../../_runtime/09790_registerAsset.js";
import closure_3 from "../../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
let result = require("set").fileFinishedImporting(
  "modules/main_tabs_v2/native/sidebar/details/ChannelDetailsMoreButton.tsx",
);

export default function MoreButton(channel) {
  channel = channel.channel;
  [][0] = channel;
  let tmp2 = null;
  if (null != channel) {
    if (channel.isDM()) {
      let obj = { children: null };
      obj = { accessibilityLabel: null, source: null, onPress: null };
      const intl = channel(1233).intl;
      obj[0] = intl.string(channel(1233).t["UKOtz+"]);
      obj[1] = registerAssetDefault;
      obj[2] = tmp;
      obj[0] = jsx(channel(7617).HeaderIconButton, { accessibilityLabel: null, source: null, onPress: null });
      tmp2 = jsx(PressableNavigatorButtonWrapperDefault, { accessibilityLabel: null, source: null, onPress: null });
      const tmp6 = PressableNavigatorButtonWrapperDefault;
    } else {
      tmp2 = null;
    }
  }
  return tmp2;
}
