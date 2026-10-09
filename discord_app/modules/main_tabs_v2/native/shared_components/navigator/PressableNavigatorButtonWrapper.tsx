// === Module 9276: PressableNavigatorButtonWrapper ===

// Module 9276 (PressableNavigatorButtonWrapper)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import MainTabsV2Constants from "MainTabsV2Constants" /* 9271 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const View = _mod17.View;
const MIN_HEADER_HEIGHT = MainTabsV2Constants.MIN_HEADER_HEIGHT;
const jsx = jsxProd.jsx;
const obj = { buttonWrapper: null, buttonWrapperModal: null };
let size = { flexShrink: 0, flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_8, height: MIN_HEADER_HEIGHT, width: MIN_HEADER_HEIGHT };
obj.buttonWrapper = size;
obj.buttonWrapperModal = { marginLeft: -8 };
let closure_4 = createStyles.createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorButtonWrapper.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PressableNavigatorButtonWrapper(arg0) {
  const cResult = c.c(3);
  ({ children, isModal } = arg0);
  const tmp3 = closure_4();
  const tmp4 = undefined !== isModal && isModal ? tmp3.buttonWrapperModal : tmp3.buttonWrapper;
  if (cResult[0] === children) {
    if (cResult[1] === tmp4) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const tmp6 = <View collapsable={false} style={tmp4} importantForAccessibility="yes">{children}</View>;
  cResult[0] = children;
  cResult[1] = tmp4;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function PressableNavigatorButtonWrapper(children) {
  let flag = children.isModal;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_4();
  return <View collapsable={false} style={flag ? tmp.buttonWrapperModal : tmp.buttonWrapper} importantForAccessibility="yes">{children.children}</View>;
});