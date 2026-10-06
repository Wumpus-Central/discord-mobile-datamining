// === Module 16502: CardHeightMeasurer ===

// Module 16502 (CardHeightMeasurer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8039 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let itemId;

const View = react_native.View;
const jsx = Fragment.jsx;
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((itemId) => {
  let tmp2;
  let tmp3;
  let obj = itemId(576);
  const cResult = obj.c(8);
  itemId = itemId.itemId;
  const children = itemId.children;
  const width = react.useContext(itemId(16435).ICYMIContext).width;
  if (cResult[0] !== itemId) {
    const fn = function s(nativeEvent) {
      const height = nativeEvent.nativeEvent.layout.height;
      const obj = ICYMIActionCreatorsDefault;
      obj.setCardHeight(itemId, height);
    };
    cResult[0] = itemId;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  if (cResult[2] !== width) {
    const obj2 = { width, alignSelf: "center" };
    cResult[2] = width;
    cResult[3] = obj2;
    tmp3 = obj2;
  } else {
    tmp3 = cResult[3];
  }
  if (cResult[4] === children) {
    if (cResult[5] === tmp2) {
      let tmp4;
      if (cResult[6] === tmp3) {
        tmp4 = cResult[7];
      }
      return tmp4;
    }
  }
  const tmp5 = <View onLayout={tmp2} pointerEvents="box-none" style={tmp3}>{children}</View>;
  cResult[4] = children;
  cResult[5] = tmp2;
  cResult[6] = tmp3;
  cResult[7] = tmp5;
  tmp4 = tmp5;
}) : ((itemId) => {
  itemId = itemId.itemId;
  const children = itemId.children;
  const items = [itemId];
  const width = react.useContext(itemId(16435).ICYMIContext).width;
  return <View onLayout={react.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    const obj = ICYMIActionCreatorsDefault;
    obj.setCardHeight(itemId, height);
  }, items)} pointerEvents="box-none" style={{ width, alignSelf: "center" }}>{children}</View>;
}));
const result = size.fileFinishedImporting("modules/icymi/native/CardHeightMeasurer.tsx");

export const CardHeightMeasurer = memoResult;