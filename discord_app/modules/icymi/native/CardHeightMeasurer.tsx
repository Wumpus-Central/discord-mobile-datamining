// === Module 15479: CardHeightMeasurer ===

// Module 15479 (CardHeightMeasurer)
import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo((children) => {
  const itemId = children.itemId;
  const items = [itemId];
  return <View onLayout={importAllResult.useCallback((nativeEvent) => {
    outer1_1(outer1_2[4]).setCardHeight(itemId, nativeEvent.nativeEvent.layout.height);
  }, items)} pointerEvents="box-none" style={{ width: importAllResult.useContext(itemId(15412).ICYMIContext).width, alignSelf: "center" }}>{arg0.children}</View>;
});
const result = require("jsxProd").fileFinishedImporting("modules/icymi/native/CardHeightMeasurer.tsx");

export const CardHeightMeasurer = memoResult;