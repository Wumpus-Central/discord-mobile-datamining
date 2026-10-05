// === Module 9139: WebViewContext ===

// Module 9139 (WebViewContext)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let children;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const context = react.createContext(0);
let closure_8 = createStyles.createStyles({ placeholderWebView: { width: 2, height: 2, position: "absolute", opacity: 0 } });
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  let closure_129_0;
  let first;
  let items;
  let tmp4;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(7);
  children = children.children;
  const tmp2 = closure_8();
  [tmp4, closure_129_0] = _slicedToArray(react.useState(0), 2);
  const tmp3 = _slicedToArray(react.useState(0), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function b(_nativeTag) {
      const tmp = _nativeTag;
      if (tmp) {
        closure_1_0(_nativeTag._nativeTag);
      }
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp2.placeholderWebView) {
    const obj2 = { style: tmp2.placeholderWebView, ref: first, pointerEvents: "none" };
    const tmp9 = hasOwnProperty(View, obj2);
    cResult[1] = tmp2.placeholderWebView;
    cResult[2] = tmp9;
    tmp6 = tmp9;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === children) {
    if (cResult[4] === tmp4) {
      let tmp10;
      if (cResult[5] === tmp6) {
        tmp10 = cResult[6];
      }
      return tmp10;
    }
  }
  const obj3 = { value: tmp4, children: items };
  items = [tmp6, children];
  const tmp11 = metroRequire(context.Provider, obj3);
  cResult[3] = children;
  cResult[4] = tmp4;
  cResult[5] = tmp6;
  cResult[6] = tmp11;
  tmp10 = tmp11;
}) : ((children) => {
  let items1;
  children = children.children;
  let tmp = closure_8();
  const tmp2 = _slicedToArray(react.useState(0), 2);
  let closure_0 = tmp3;
  const items = [tmp3];
  const Provider = context.Provider;
  const obj = { value: tmp2[0], children: items1 };
  items1 = [, ];
  const obj2 = {
    style: tmp.placeholderWebView,
    ref: react.useCallback((_nativeTag) => {
      const tmp = _nativeTag;
      if (tmp) {
        closure_0(_nativeTag._nativeTag);
      }
    }, items),
    pointerEvents: "none"
  };
  items1[0] = hasOwnProperty(View, obj2);
  items1[1] = children;
  return metroRequire(Provider, obj);
});
const result = size.fileFinishedImporting("modules/embedded_apps/native/WebViewContext.tsx");

export const WebViewContext = context;
export const WebViewContextProvider = tmp4;