// _runtime/06890_LegacyText.js
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import noop_mod from "metro/00019__.js";

const require = fn;
let closure_2 = ["onPress", "onLongPress", "ref"];
let noop = fn(19);
({ useEffect: closure_4, useMemo: hasOwnProperty, useRef: metroRequire } = noop);
let noop = noop_mod;
get_ActivityIndicator = fn(17);
({ Platform, Text: closure_7 } = get_ActivityIndicator);
const jsx = fn(21).jsx;

export const LegacyText = (arg0) => {
  ({ onPress, onLongPress, ref } = arg0);
  const tmp = _objectWithoutProperties(arg0, closure_2);
  dependencyMap = closure_6(null);
  const items = [ref];
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
    if (!onLongPress) {
      const obj = { ref: tmp3 };
      const merged = Object.assign(tmp);
      let tmp10 = <closure_7 ref={tmp3} />;
    }
    return tmp10;
  }
  const obj2 = {
    gesture: closure_5(() => {
      const GestureObjects = ref(closure_1[4]).GestureObjects;
      return GestureObjects.Native().runOnJS(true);
    }, []),
    children: null,
  };
  const merged1 = Object.assign(tmp);
  obj2.children = <closure_7 onPress={onPress} onLongPress={onLongPress} ref={tmp3} />;
  tmp10 = jsx(ref(6783).GestureDetector, {
    gesture: closure_5(() => {
      const GestureObjects = ref(closure_1[4]).GestureObjects;
      return GestureObjects.Native().runOnJS(true);
    }, []),
    children: null,
  });
  const obj3 = { onPress, onLongPress, ref: tmp3 };
  const tmp2 = closure_5(() => {
    const GestureObjects = ref(closure_1[4]).GestureObjects;
    return GestureObjects.Native().runOnJS(true);
  }, []);
};
