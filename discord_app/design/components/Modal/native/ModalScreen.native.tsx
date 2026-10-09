// === Module 7511: ModalScreen ===

// Module 7511 (ModalScreen)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6663 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj2 = { container: { flex: 1, flexDirection: "column", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW } };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, flexDirection: "column", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Modal/native/ModalScreen.native.tsx");

export const ModalScreen = ReactCompilerGating.isReactCompilerEnabled() ? (function ModalScreen(arg0) {
  const cResult = c.c(11);
  ({ backgroundColor, children } = arg0);
  const tmp2 = closure_5();
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  if (backgroundColor == null) {
    backgroundColor = tmp2.container.backgroundColor;
  }
  if (cResult[0] === insets.bottom) {
    if (cResult[1] === insets.left) {
      if (cResult[2] === insets.right) {
        if (cResult[3] === backgroundColor) {
          let tmp3 = cResult[4];
        }
        if (cResult[5] === tmp2.container) {
          if (cResult[6] === tmp3) {
            let tmp4 = cResult[7];
          }
          if (cResult[8] === children) {
            if (cResult[9] === tmp4) {
              let tmp5 = cResult[10];
            }
            return tmp5;
          }
          const obj2 = { style: tmp4, children };
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
}) : (function ModalScreen(children) {
  let backgroundColor = children.backgroundColor;
  const tmp = closure_5();
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  const style = [tmp.container, ];
  if (backgroundColor == null) {
    backgroundColor = tmp.container.backgroundColor;
  }
  style[1] = { backgroundColor, paddingLeft: insets.left, paddingRight: insets.right, paddingBottom: insets.bottom };
  return <View style={style}>{children.children}</View>;
});