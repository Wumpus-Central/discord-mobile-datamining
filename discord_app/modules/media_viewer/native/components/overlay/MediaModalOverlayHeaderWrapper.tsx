// discord_app/modules/media_viewer/native/components/overlay/MediaModalOverlayHeaderWrapper.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import NAV_BAR_HEIGHT from "../../../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
let closure_5 = createCacheKey.createStyles((paddingTop) => {
  let obj = { bar: null };
  obj = { flexDirection: "row", alignItems: "center", height: NAV_BAR_HEIGHT.NAV_BAR_HEIGHT + paddingTop, paddingTop, paddingLeft: arg1 + 6, paddingRight: arg2 + 6 };
  obj[0] = obj;
  return obj;
});
const result = require("set").fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayHeaderWrapper.tsx");

export const MediaModalOverlayHeaderWrapper = function MediaModalOverlayHeaderWrapper(arg0) {
  ({ children, style } = arg0);
  const rect = useSafeAreaInsetsDefault();
  const obj = { style: null, pointerEvents: "box-none", children: null };
  const items = [callback(rect.top, rect.left, rect.right).bar, style];
  obj[0] = items;
  obj[2] = children;
  return <View style={null} pointerEvents="box-none">{null}</View>;
};