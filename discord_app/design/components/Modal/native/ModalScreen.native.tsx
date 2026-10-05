// === Module 8095: ModalScreen ===

// Module 8095 (ModalScreen)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6471 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { flex: 1, flexDirection: "column", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_5 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let backgroundColor;
  let children;
  const obj = react2;
  const cResult = obj.c(11);
  ({ backgroundColor, children } = arg0);
  const tmp2 = closure_5();
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  if (backgroundColor == null) {
    backgroundColor = tmp2.container.backgroundColor;
  }
  if (cResult[0] === insets.bottom) {
    if (cResult[1] === insets.left) {
      if (cResult[2] === insets.right) {
        let tmp3;
        if (cResult[3] === backgroundColor) {
          tmp3 = cResult[4];
        }
        if (cResult[5] === tmp2.container) {
          let tmp4;
          if (cResult[6] === tmp3) {
            tmp4 = cResult[7];
          }
          if (cResult[8] === children) {
            let tmp5;
            if (cResult[9] === tmp4) {
              tmp5 = cResult[10];
            }
            return tmp5;
          }
          const tmp8 = <View style={tmp4}>{children}</View>;
          cResult[8] = children;
          cResult[9] = tmp4;
          cResult[10] = tmp8;
          tmp5 = tmp8;
        }
        const items = [tmp2.container, tmp3];
        cResult[5] = tmp2.container;
        cResult[6] = tmp3;
        cResult[7] = items;
        tmp4 = items;
      }
    }
  }
  const obj3 = { backgroundColor, paddingLeft: insets.left, paddingRight: insets.right, paddingBottom: insets.bottom };
  cResult[0] = insets.bottom;
  cResult[1] = insets.left;
  cResult[2] = insets.right;
  cResult[3] = backgroundColor;
  cResult[4] = obj3;
  tmp3 = obj3;
}) : ((backgroundColor) => {
  backgroundColor = backgroundColor.backgroundColor;
  const children = backgroundColor.children;
  const tmp = closure_5();
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  const style = [tmp.container, ];
  if (backgroundColor == null) {
    backgroundColor = tmp.container.backgroundColor;
  }
  style[1] = { backgroundColor, paddingLeft: insets.left, paddingRight: insets.right, paddingBottom: insets.bottom };
  return <View style={style}>{children}</View>;
});
const result = size.fileFinishedImporting("design/components/Modal/native/ModalScreen.native.tsx");

export const ModalScreen = tmp3;