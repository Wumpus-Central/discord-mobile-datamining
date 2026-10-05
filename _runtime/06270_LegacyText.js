// _runtime/06270_LegacyText.js
import Fragment from "react/00021_Fragment.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import react_mod from "00019_react.js";
import react_native from "00017_react-native.js";

let dependencyMap;

let Platform;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let closure_2 = ["onPress", "onLongPress", "ref"];
let react = react_mod;
({ useEffect: closure_4, useMemo: hasOwnProperty, useRef: metroRequire } = react);
react = react_mod;
({ Platform, Text: metroImportDefault } = react_native);
const jsx = Fragment.jsx;

export const LegacyText = (arg0) => {
  let closure_1;
  let onLongPress;
  let onPress;
  let ref;
  ({ onPress, onLongPress, ref } = arg0);
  const tmp = _objectWithoutProperties(arg0, closure_2);
  dependencyMap = closure_6(null);
  const items = [ref];
  const tmp2 = closure_5(() => {
    const GestureObjects = ref(closure_1[4]).GestureObjects;
    const NativeResult = GestureObjects.Native();
    return NativeResult.runOnJS(true);
  }, []);
  const tmp3 = closure_5(() => {
    function handler(current) {
      closure_1_1.current = current;
      if (ref) {
        if (typeof ref === "function") {
          ref(current);
        } else {
          ref.current = current;
        }
      }
    }
    handler.rngh = true;
    return handler;
  }, items);
  closure_4(() => {}, []);
  if (!onPress) {
    let tmp10;
    if (!onLongPress) {
      const merged = Object.assign(tmp);
      tmp10 = <closure_7 ref={tmp3} />;
    }
    return tmp10;
  }
  const GestureDetector = ref(6163).GestureDetector;
  const merged1 = Object.assign(tmp);
  tmp10 = <GestureDetector gesture={tmp2}>{null}</GestureDetector>;
};
