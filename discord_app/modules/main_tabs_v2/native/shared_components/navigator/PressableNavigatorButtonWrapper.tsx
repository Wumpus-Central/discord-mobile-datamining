// === Module 7866: PressableNavigatorButtonWrapper ===

// Module 7866 (PressableNavigatorButtonWrapper)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import MainTabsV2Constants from "MainTabsV2Constants" /* 7864 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const MIN_HEADER_HEIGHT = MainTabsV2Constants.MIN_HEADER_HEIGHT;
const jsx = jsxProd.jsx;
const obj = { buttonWrapper: null, buttonWrapperModal: null };
let size = { flexShrink: 0, flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_8, height: MIN_HEADER_HEIGHT, width: MIN_HEADER_HEIGHT };
obj.buttonWrapper = size;
obj.buttonWrapperModal = { marginLeft: -8 };
let closure_2 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorButtonWrapper.tsx");

export default function PressableNavigatorButtonWrapper(children) {
  let flag = children.isModal;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_2();
  return <View collapsable={false} style={flag ? tmp.buttonWrapperModal : tmp.buttonWrapper} importantForAccessibility="yes">{arg0.children}</View>;
};