// === Module 9612: context ===

// Module 9612 (context)
import closure_0 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import context from "module_0" /* 0 */;
import createCacheKey from "createCacheKey" /* 4478 */;

({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ placeholderWebView: { width: 2, height: 2, position: "absolute", opacity: 0 } });
const result = require("set").fileFinishedImporting("modules/activities/native/WebViewContext.tsx");

export const WebViewContext = context;
export const WebViewContextProvider = function WebViewContextProvider(children) {
  let callback;
  const tmp2 = callback(importAllResult.useState(0), 2);
  callback = tmp3;
  const items = [tmp2[1]];
  let obj = { value: tmp2[0], children: null };
  obj = {
    style: callback4().placeholderWebView,
    ref: importAllResult.useCallback((_nativeTag) => {
      if (_nativeTag) {
        callback(_nativeTag._nativeTag);
      }
    }, items),
    pointerEvents: "none"
  };
  const items1 = [callback2(View, obj), children.children];
  obj[1] = items1;
  return callback3(context.Provider, obj);
};