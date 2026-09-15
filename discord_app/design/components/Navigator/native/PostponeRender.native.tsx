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
const createStyles = fn(4639);
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
    children = jsx(first(7146).SceneLoadingIndicator, {});
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
