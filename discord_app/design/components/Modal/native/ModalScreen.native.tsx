// === Module 8421: ModalScreen ===

// Module 8421 (ModalScreen)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6981 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null };
createStyles = { flex: 1, flexDirection: "column", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.container = createStyles;
let closure_4 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Modal/native/ModalScreen.native.tsx");

export const ModalScreen = function ModalScreen(children) {
  let backgroundColor = children.backgroundColor;
  const tmp = closure_4();
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  const style = [tmp.container, ];
  if (backgroundColor == null) {
    backgroundColor = tmp.container.backgroundColor;
  }
  style[1] = { backgroundColor, paddingLeft: insets.left, paddingRight: insets.right, paddingBottom: insets.bottom };
  return <View style={style}>{children.children}</View>;
};