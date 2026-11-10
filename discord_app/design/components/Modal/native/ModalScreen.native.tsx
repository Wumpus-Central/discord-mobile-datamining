// === Module 8045: ModalScreen ===

// Module 8045 (ModalScreen)
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5737 */;
import NavigatorBackgroundContext from "NavigatorBackgroundContext" /* 7236 */;
import NavigatorGradientContext from "NavigatorGradientContext" /* 7275 */;
import ExpressiveGradient from "ExpressiveGradient" /* 8046 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
let obj = { navigator: nativeDefault.colors.BACKGROUND_BASE_LOW, modal: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const createStyles = fn(5142);
let obj3 = { container: { flex: 1, flexDirection: "column" }, navigator: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, modal: null };
const obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj3.modal = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_8 = createStyles.createStyles(obj3);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Modal/native/ModalScreen.native.tsx");

export function ModalScreen(backgroundColor) {
  backgroundColor = backgroundColor.backgroundColor;
  const tmp = closure_8();
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  const context = noop.useContext(NavigatorGradientContext.NavigatorGradientContext);
  const context1 = noop.useContext(NavigatorBackgroundContext.NavigatorBackgroundContext);
  items = [tmp.container, , ];
  if (backgroundColor == null) {
    backgroundColor = tmp[context1].backgroundColor;
  }
  items[1] = { backgroundColor, paddingLeft: insets.left, paddingRight: insets.right, paddingBottom: insets.bottom };
  let tmp8 = null != context;
  if (tmp8) {
    obj = { paddingTop: context.headerHeight };
    tmp8 = obj;
  }
  const obj2 = { style: items, children: null };
  items[2] = tmp8;
  let tmp9 = null != context;
  if (tmp9) {
    const obj3 = { color: context.color, backgroundColor: obj[context1] };
    tmp9 = hasOwnProperty(ExpressiveGradient.ExpressiveGradient, obj3);
  }
  const items1 = [tmp9, backgroundColor.children];
  obj2.children = items1;
  return timestampProducer(View, obj2);
}