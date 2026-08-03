// === Module 9130: PressableNavigatorButtonWrapper ===

// Module 9130 (PressableNavigatorButtonWrapper)
import { View } from "get ActivityIndicator";
import { MIN_HEADER_HEIGHT } from "MIN_HEADER_HEIGHT";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let obj = { buttonWrapper: null, buttonWrapperModal: null };
obj = { flexShrink: 0, flexDirection: "row", alignItems: "center", padding: require("Themes").space.PX_8, height: MIN_HEADER_HEIGHT, width: MIN_HEADER_HEIGHT };
obj[0] = obj;
obj[1] = { marginLeft: -8 };
let closure_2 = createCacheKey.createStyles(obj);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorButtonWrapper.tsx");

export default function PressableNavigatorButtonWrapper(children) {
  let flag = children.isModal;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback();
  return <View collapsable={false} style={flag ? tmp.buttonWrapperModal : tmp.buttonWrapper} importantForAccessibility="yes">{arg0.children}</View>;
};