// discord_app/design/components/Navigator/native/PostponeRender.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useMountEffectDefault from "../../../../hooks/useMountEffect.tsx";
import KeyboardAwareViewDefault from "../../../../modules/keyboard/native/KeyboardAwareView.tsx";
import RunAfterInteractionsUtils from "../../../../utils/native/RunAfterInteractionsUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

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
