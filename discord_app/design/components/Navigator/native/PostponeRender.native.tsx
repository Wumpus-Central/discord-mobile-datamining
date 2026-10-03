// === Module 6533: PostponeRender ===

// Module 6533 (PostponeRender)
import nativeDefault from "native" /* 587 */;
import useMountEffectDefault from "useMountEffect" /* 5590 */;
import RunAfterInteractionsUtils from "RunAfterInteractionsUtils" /* 6534 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const KeyboardAwareViewDefault = tmp8(6537);
require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { view: null };
const obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOWER;
obj2.view = obj3;
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/PostponeRender.native.tsx");

export const PostponeRender = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = first(576).c(12);
  ({ viewStyle, children } = arg0);
  ({ postpone, ignoreKeyboard } = arg0);
  const tmp4 = closure_7();
  [first, importDefault] = noop.useState(postpone);
  dependencyMap = noop.useRef(undefined);
  if (cResult[0] !== first) {
    const fn = function s() {
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
    };
    cResult[0] = first;
    cResult[1] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  useMountEffectDefault(tmp7);
  if (cResult[2] === children) {
    if (cResult[3] === first) {
      let tmp10 = cResult[4];
    }
    if (ignoreKeyboard) {
      let tmp8Result = closure_5;
    } else {
      tmp8Result = KeyboardAwareViewDefault;
    }
    if (cResult[5] === tmp4.view) {
      if (cResult[6] === viewStyle) {
        let tmp14 = cResult[7];
      }
      if (cResult[8] === tmp8Result) {
        if (cResult[9] === tmp10) {
          if (cResult[10] === tmp14) {
            let tmp15 = cResult[11];
          }
          return tmp15;
        }
      }
      const obj2 = { style: tmp14, children: tmp10 };
      const tmp17 = <tmp8Result style={tmp14}>{tmp10}</tmp8Result>;
      cResult[8] = tmp8Result;
      cResult[9] = tmp10;
      cResult[10] = tmp14;
      cResult[11] = tmp17;
      tmp15 = tmp17;
    }
    const items = [tmp4.view, viewStyle];
    cResult[5] = tmp4.view;
    cResult[6] = viewStyle;
    cResult[7] = items;
    tmp14 = items;
  }
  let tmp11 = children;
  if (first) {
    tmp11 = jsx(tmp(6535).SceneLoadingIndicator, {});
  }
  cResult[2] = children;
  cResult[3] = first;
  cResult[4] = tmp11;
  tmp10 = tmp11;
  const obj = first(576);
  tmp = first;
}) : ((children) => {
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
    children = jsx(first(6535).SceneLoadingIndicator, {});
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
});