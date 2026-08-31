// === Module 7578: PressableNavigatorButtonWrapper ===

// Module 7578 (PressableNavigatorButtonWrapper)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import ThemesDefault from "Themes" /* 712 */;
import MIN_HEADER_HEIGHT2 from "MIN_HEADER_HEIGHT" /* 7576 */;
import createCacheKey from "createCacheKey" /* 4448 */;

const View = get_ActivityIndicator.View;
const MIN_HEADER_HEIGHT = MIN_HEADER_HEIGHT2.MIN_HEADER_HEIGHT;
const jsx = jsxProd.jsx;
let obj = { buttonWrapper: null, buttonWrapperModal: null };
obj = { flexShrink: 0, flexDirection: "row", alignItems: "center", padding: ThemesDefault.space.PX_8, height: MIN_HEADER_HEIGHT, width: MIN_HEADER_HEIGHT };
obj[0] = obj;
obj[1] = { marginLeft: -8 };
let closure_2 = createCacheKey.createStyles(obj);
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorButtonWrapper.tsx");

export default function PressableNavigatorButtonWrapper(children) {
  let flag = children.isModal;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback();
  return <View collapsable={false} style={flag ? tmp.buttonWrapperModal : tmp.buttonWrapper} importantForAccessibility="yes">{arg0.children}</View>;
};