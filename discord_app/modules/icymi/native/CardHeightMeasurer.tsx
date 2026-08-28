// discord_app/modules/icymi/native/CardHeightMeasurer.tsx
import importAllResult from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo((children) => {
  const itemId = children.itemId;
  const items = [itemId];
  return <View onLayout={importAllResult.useCallback((nativeEvent) => {
    closure_1_1(closure_1_2[4]).setCardHeight(itemId, nativeEvent.nativeEvent.layout.height);
  }, items)} pointerEvents="box-none" style={{ width: importAllResult.useContext(itemId(15972).ICYMIContext).width, alignSelf: "center" }}>{arg0.children}</View>;
});
const result = require("set").fileFinishedImporting("modules/icymi/native/CardHeightMeasurer.tsx");

export const CardHeightMeasurer = memoResult;