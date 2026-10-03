// discord_app/modules/embedded_apps/native/WebViewContext.tsx
import c from "../../../../_runtime/00576_c.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const context = noop.createContext(0);
const createStyles = fn(4890);
let closure_8 = createStyles.createStyles({
  placeholderWebView: { width: 2, height: 2, position: "absolute", opacity: 0 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/embedded_apps/native/WebViewContext.tsx");

export const WebViewContext = context;
export const WebViewContextProvider = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      const cResult = c.c(7);
      children = children.children;
      const tmp2 = closure_8();
      [tmp4, require] = noop.useState(0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function b(_nativeTag) {
          if (_nativeTag) {
            require(_nativeTag._nativeTag);
          }
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp2.placeholderWebView) {
        const obj2 = { style: tmp2.placeholderWebView, ref: first, pointerEvents: "none" };
        const tmp9 = hasOwnProperty(View, obj2);
        cResult[1] = tmp2.placeholderWebView;
        cResult[2] = tmp9;
        let tmp6 = tmp9;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] === children) {
        if (cResult[4] === tmp4) {
          if (cResult[5] === tmp6) {
            let tmp10 = cResult[6];
          }
          return tmp10;
        }
      }
      const obj3 = { value: tmp4, children: null };
      const items = [tmp6, children];
      obj3.children = items;
      const tmp11 = timestampProducer(context.Provider, obj3);
      cResult[3] = children;
      cResult[4] = tmp4;
      cResult[5] = tmp6;
      cResult[6] = tmp11;
      tmp10 = tmp11;
      const tmp3 = _slicedToArray(noop.useState(0), 2);
    }
  : (children) => {
      const tmp2 = _slicedToArray(noop.useState(0), 2);
      closure_0 = tmp3;
      const items = [tmp2[1]];
      const obj = { value: tmp2[0], children: null };
      const tmp = closure_8();
      const items1 = [
        hasOwnProperty(View, {
          style: closure_8().placeholderWebView,
          ref: noop.useCallback((_nativeTag) => {
            if (_nativeTag) {
              closure_0(_nativeTag._nativeTag);
            }
          }, items),
          pointerEvents: "none",
        }),
        children.children,
      ];
      obj.children = items1;
      return timestampProducer(context.Provider, obj);
    };
