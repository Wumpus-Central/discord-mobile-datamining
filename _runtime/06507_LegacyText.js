// _runtime/06507_LegacyText.js
import _objectWithoutProperties from "_objectWithoutProperties";
import noop from "noop";
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let Platform;
let c4;
let c5;
let closure_6;
let error;
const require = arg1;
let closure_2 = ["onPress", "onLongPress", "ref"];
({ useEffect: c4, useMemo: c5, useRef: closure_6 } = noop);
({ Platform, Text: error } = get_ActivityIndicator);

export const LegacyText = (arg0) => {
  let onLongPress;
  let onPress;
  let ref;
  ({ onPress, onLongPress, ref } = arg0);
  const tmp = callback(arg0, closure_2);
  const dependencyMap = callback4(null);
  const items = [ref];
  const tmp3 = callback3(() => {
    function handler(current) {
      closure_1.current = current;
      if (closure_0) {
        if (typeof tmp === "function") {
          tmp(current);
        } else {
          tmp.current = current;
        }
      }
    }
    handler.rngh = true;
    return handler;
  }, items);
  callback2(() => {

  }, []);
  if (!onPress) {
    if (!onLongPress) {
      let obj = { ref: null };
      obj[0] = tmp3;
      const merged = Object.assign(tmp);
      let tmp10 = <closure_7 ref={null} />;
    }
    return tmp10;
  }
  obj = {
    gesture: callback3(() => {
      const GestureObjects = ref(table[4]).GestureObjects;
      return GestureObjects.Native().runOnJS(true);
    }, []),
    children: null
  };
  obj = { onPress, onLongPress, ref: tmp3 };
  const merged1 = Object.assign(tmp);
  obj[1] = <closure_7 onPress={onPress} onLongPress={onLongPress} ref={tmp3} />;
  tmp10 = jsx(ref(6400).GestureDetector, { onPress, onLongPress, ref: tmp3 });
};