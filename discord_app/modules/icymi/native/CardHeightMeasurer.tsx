// === Module 15776: CardHeightMeasurer ===

// Module 15776 (CardHeightMeasurer)
import _modDef9057 from "module_9057" /* 9057 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
let c3 = importAllResult;
const memoResult = importAllResult.memo((children) => {
  const itemId = children.itemId;
  const items = [itemId];
  return <View onLayout={importAllResult.useCallback((nativeEvent) => {
    _modDef9057.setCardHeight(itemId, nativeEvent.nativeEvent.layout.height);
  }, items)} pointerEvents="box-none" style={{ width: importAllResult.useContext(itemId(15709).ICYMIContext).width, alignSelf: "center" }}>{children.children}</View>;
});
const result = require("obj132").fileFinishedImporting("modules/icymi/native/CardHeightMeasurer.tsx");

export const CardHeightMeasurer = memoResult;