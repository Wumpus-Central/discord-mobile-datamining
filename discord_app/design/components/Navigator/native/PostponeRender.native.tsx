// === Module 6533: PostponeRender ===

// Module 6533 (PostponeRender)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import useMountEffectDefault from "useMountEffect" /* 5590 */;
import RunAfterInteractionsUtils from "RunAfterInteractionsUtils" /* 6534 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let StyleSheet;
let hasOwnProperty;
let obj2;
let tmp8;
const KeyboardAwareViewDefault = tmp8(6537);
({ View: hasOwnProperty, StyleSheet } = react_native);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { view: obj2 };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_7 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let closure_1;
  let closure_2;
  let first;
  let ignoreKeyboard;
  let postpone;
  let tmp7;
  let viewStyle;
  let obj = first(576);
  const cResult = obj.c(12);
  ({ viewStyle, children } = arg0);
  ({ postpone, ignoreKeyboard } = arg0);
  const tmp4 = closure_7();
  const tmp = first;
  [first, importDefault] = react.useState(postpone);
  dependencyMap = react.useRef(undefined);
  if (cResult[0] !== first) {
    const fn = function s() {
      if (first) {
        const obj = RunAfterInteractionsUtils;
        ref.current = obj.runAfterInteractions(() => {
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
    tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  useMountEffectDefault(tmp7);
  if (cResult[2] === children) {
    let tmp10;
    let tmp8Result;
    if (cResult[3] === first) {
      tmp10 = cResult[4];
    }
    if (ignoreKeyboard) {
      tmp8Result = closure_5;
    } else {
      tmp8Result = KeyboardAwareViewDefault;
    }
    if (cResult[5] === tmp4.view) {
      let tmp14;
      if (cResult[6] === viewStyle) {
        tmp14 = cResult[7];
      }
      if (cResult[8] === tmp8Result) {
        if (cResult[9] === tmp10) {
          let tmp15;
          if (cResult[10] === tmp14) {
            tmp15 = cResult[11];
          }
          return tmp15;
        }
      }
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
}) : ((children) => {
  let closure_1;
  let closure_2;
  let first;
  let ignoreKeyboard;
  let postpone;
  let viewStyle;
  children = children.children;
  first = undefined;
  importDefault = undefined;
  ({ postpone, ignoreKeyboard, viewStyle } = children);
  const tmp = closure_7();
  [first, importDefault] = react.useState(postpone);
  dependencyMap = react.useRef(undefined);
  useMountEffectDefault(() => {
    if (first) {
      const obj = RunAfterInteractionsUtils;
      ref.current = obj.runAfterInteractions(() => {
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
  if (!ignoreKeyboard) {
    KeyboardAwareViewDefault;
  }
  const items = [tmp.view, viewStyle];
  return <tmp4Result style={items}>{children}</tmp4Result>;
});
const result = size.fileFinishedImporting("design/components/Navigator/native/PostponeRender.native.tsx");

export const PostponeRender = tmp5;