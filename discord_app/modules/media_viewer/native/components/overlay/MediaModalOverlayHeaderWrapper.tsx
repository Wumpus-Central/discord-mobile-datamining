// === Module 8639: MediaModalOverlayHeaderWrapper ===

// Module 8639 (MediaModalOverlayHeaderWrapper)
import noopAll from "noop" /* 19 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import NAV_BAR_HEIGHT from "NAV_BAR_HEIGHT" /* 5492 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

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