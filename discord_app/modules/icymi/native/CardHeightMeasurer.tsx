// discord_app/modules/icymi/native/CardHeightMeasurer.tsx
import ICYMIActionCreatorsDefault from "../ICYMIActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/CardHeightMeasurer.tsx");

export const CardHeightMeasurer = noop.memo((children) => {
  const itemId = children.itemId;
  const items = [itemId];
  return (
    <View
      onLayout={noop.useCallback((nativeEvent) => {
        ICYMIActionCreatorsDefault.setCardHeight(itemId, nativeEvent.nativeEvent.layout.height);
      }, items)}
      pointerEvents="box-none"
      style={{ width: noop.useContext(itemId(16453).ICYMIContext).width, alignSelf: "center" }}
    >
      {arg0.children}
    </View>
  );
});
