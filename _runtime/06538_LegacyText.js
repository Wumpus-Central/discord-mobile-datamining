// _runtime/06538_LegacyText.js
import noopDefault from "00019_noop.js";
import closure_3 from "metro/00109__objectWithoutProperties.js";
import noop from "00019_noop.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import { jsx } from "react/00021_jsxProd.js";

const require = arg1;
let closure_2 = ["onPress", "onLongPress", "ref"];
({ useEffect: c4, useMemo: c5, useRef: closure_6 } = noop);
noopDefault;
({ Platform, Text: error } = get_ActivityIndicator);

export const LegacyText = (arg0) => {
  ({ onPress, onLongPress, ref } = arg0);
  const tmp = callback(arg0, closure_2);
  dependencyMap = callback4(null);
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
  tmp10 = jsx(ref(6431).GestureDetector, { onPress, onLongPress, ref: tmp3 });
};