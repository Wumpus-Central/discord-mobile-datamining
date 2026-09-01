// discord_app/modules/activities/native/WebViewContext.tsx
import closure_0 from "../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import context from "../../../index.native.tsx";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_6 = createCacheKey.createStyles({
  placeholderWebView: { width: 2, height: 2, position: "absolute", opacity: 0 },
});
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
    pointerEvents: "none",
  };
  const items1 = [callback2(View, obj), children.children];
  obj[1] = items1;
  return callback3(context.Provider, obj);
};
