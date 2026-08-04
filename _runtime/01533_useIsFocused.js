// _runtime/01533_useIsFocused.js
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { useState } from "noop";


export default function useIsFocused() {
  obj = obj(1532)();
  const tmp = callback(useState(obj.isFocused), 2);
  const dependencyMap = tmp2;
  const isFocusedResult = obj.isFocused();
  if (tmp[0] !== isFocusedResult) {
    tmp2(isFocusedResult);
  }
  const items = [obj];
  const effect = React.useEffect(() => {
    obj = obj.addListener("focus", () => callback2(true));
    let closure_1 = obj.addListener("blur", () => callback2(false));
    return () => {
      callback();
      callback2();
    };
  }, items);
  const debugValue = React.useDebugValue(isFocusedResult);
  return isFocusedResult;
};