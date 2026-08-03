// === Module 10785: context ===

// Module 10785 (context)
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import context from "_slicedToArray";
import createCacheKey from "createCacheKey";

let c3;
let c4;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ placeholderWebView: { width: 2, height: 2, position: "absolute", opacity: 0 } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/activities/native/WebViewContext.tsx");

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
        _undefined(_nativeTag._nativeTag);
      }
    }, items),
    pointerEvents: "none"
  };
  const items1 = [callback2(View, obj), children.children];
  obj[1] = items1;
  return callback3(context.Provider, obj);
};