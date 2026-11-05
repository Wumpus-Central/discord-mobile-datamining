// === Module 18898: CardHeightMeasurer ===

// Module 18898 (CardHeightMeasurer)
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 9070 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/CardHeightMeasurer.tsx");

export const CardHeightMeasurer = noop.memo(function CardHeightMeasurer(children) {
  const itemId = children.itemId;
  items = [itemId];
  return <View onLayout={noop.useCallback((nativeEvent) => {
    ICYMIActionCreatorsDefault.setCardHeight(itemId, nativeEvent.nativeEvent.layout.height);
  }, items)} pointerEvents="box-none" style={{ width: noop.useContext(itemId(18828).ICYMIContext).width, alignSelf: "center" }}>{children.children}</View>;
});