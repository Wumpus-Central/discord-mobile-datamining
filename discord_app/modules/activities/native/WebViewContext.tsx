// === Module 9643: WebViewContext ===

// Module 9643 (WebViewContext)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const context = noop.createContext(0);
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ placeholderWebView: { width: 2, height: 2, position: "absolute", opacity: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/WebViewContext.tsx");

export const WebViewContext = context;
export const WebViewContextProvider = function WebViewContextProvider(children) {
  const tmp2 = _slicedToArray(noop.useState(0), 2);
  closure_0 = tmp3;
  const items = [tmp2[1]];
  let obj = { value: tmp2[0], children: null };
  obj = {
    style: closure_6().placeholderWebView,
    ref: noop.useCallback((_nativeTag) => {
      if (_nativeTag) {
        closure_0(_nativeTag._nativeTag);
      }
    }, items),
    pointerEvents: "none"
  };
  const items1 = [React3(View, obj), children.children];
  obj.children = items1;
  return React4(context.Provider, obj);
};