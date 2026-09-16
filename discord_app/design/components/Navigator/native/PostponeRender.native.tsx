// === Module 7147: PostponeRender ===

// Module 7147 (PostponeRender)
import nativeDefault from "native" /* 576 */;
import useMountEffectDefault from "useMountEffect" /* 5077 */;
import KeyboardAwareViewDefault from "KeyboardAwareView" /* 5664 */;
import RunAfterInteractionsUtils from "RunAfterInteractionsUtils" /* 7148 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4638);
const obj2 = { view: null };
const obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOWER;
obj2.view = obj3;
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/PostponeRender.native.tsx");

export const PostponeRender = function PostponeRender(children) {
  children = children.children;
  first = undefined;
  importDefault = undefined;
  ({ postpone, ignoreKeyboard, viewStyle } = children);
  [first, importDefault] = noop.useState(postpone);
  dependencyMap = noop.useRef(undefined);
  useMountEffectDefault(() => {
    if (first) {
      ref.current = RunAfterInteractionsUtils.runAfterInteractions(() => {
        closure_1_1(false);
      });
      return () => {
        const current = ref.current;
        if (current != null) {
          current.cancel();
        }
      };
    }
  });
  if (first) {
    children = jsx(first(7149).SceneLoadingIndicator, {});
  }
  if (ignoreKeyboard) {
    let tmp4Result = closure_5;
  } else {
    tmp4Result = KeyboardAwareViewDefault;
  }
  const obj = { style: null, children };
  const items = [closure_7().view, viewStyle];
  obj.style = items;
  return <tmp4Result style={null}>{children}</tmp4Result>;
};