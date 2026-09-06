// === Module 7037: PostponeRender ===

// Module 7037 (PostponeRender)
import nativeDefault from "native" /* 576 */;
import useMountEffectDefault from "useMountEffect" /* 4992 */;
import KeyboardAwareViewDefault from "KeyboardAwareView" /* 5578 */;
import RunAfterInteractionsUtils from "RunAfterInteractionsUtils" /* 7038 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { view: null };
createStyles = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createStyles.backgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOWER;
createStyles.view = createStyles;
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/PostponeRender.native.tsx");

export const PostponeRender = function PostponeRender(children) {
  children = children.children;
  ({ postpone, ignoreKeyboard, viewStyle } = children);
  const tmp2 = _slicedToArray(noop.useState(postpone), 2);
  const first = tmp2[0];
  importDefault = tmp2[1];
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
    children = jsx(first(7039).SceneLoadingIndicator, {});
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