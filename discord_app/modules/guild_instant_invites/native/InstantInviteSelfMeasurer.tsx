// === Module 16038: ? ===

// Module 16038
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
let c3 = importAllResult;
let closure_6 = createCacheKey.createStyles({ container: { position: "absolute", opacity: 0 } });
const memoResult = importAllResult.memo(function InstantInviteSelfMeasurer(type) {
  ({ item, onMeasured } = type);
  let str = type.type;
  if (str === undefined) {
    str = "height";
  }
  const items = [onMeasured, str];
  let obj = {
    style: items1,
    onLayout: importAllResult.useCallback((nativeEvent) => {
      const layout = nativeEvent.nativeEvent.layout;
      onMeasured("height" === str ? layout.height : layout.width);
    }, items),
    pointerEvents: "none",
    importantForAccessibility: "no-hide-descendants",
    accessibilityElementsHidden: true,
    accessible: false,
    children: null
  };
  items1 = [type.containerStyle, callback().container];
  if ("invite" === item.type) {
    obj = { invite: null };
    obj[0] = item.data;
    let tmp2Result = jsx(str(9948), { invite: null });
  } else {
    obj = { channel: null };
    obj[0] = item.data;
    tmp2Result = jsx(onMeasured(9948).LinkedChannelInvite, { channel: null });
  }
  obj[6] = tmp2Result;
  return <View style={items1} onLayout={importAllResult.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    onMeasured("height" === str ? layout.height : layout.width);
  }, items)} pointerEvents="none" importantForAccessibility="no-hide-descendants" accessibilityElementsHidden accessible={false}>{null}</View>;
});
const result = require("obj132").fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteSelfMeasurer.tsx");

export default memoResult;