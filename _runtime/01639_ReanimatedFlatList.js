// === Module 1639: ReanimatedFlatList ===

// Module 1639 (ReanimatedFlatList)
import _objectWithoutProperties from "_objectWithoutProperties";
import noop from "noop";
import { useRef } from "noop";
import { jsx } from "jsxProd";
import createAnimatedComponent from "createAnimatedComponent";
import isReactRendering from "isReactRendering";

let require = arg1;
let closure_2 = ["itemLayoutAnimation", "skipEnteringExitingAnimations", "CellRendererComponentStyle"];
let closure_7 = createAnimatedComponent.createAnimatedComponent(require("get ActivityIndicator").FlatList);

export const ReanimatedFlatList = isReactRendering.componentWithRef((skipEnteringExitingAnimations, ref) => {
  let CellRendererComponentStyle;
  let itemLayoutAnimation;
  ({ itemLayoutAnimation, CellRendererComponentStyle } = skipEnteringExitingAnimations);
  const tmp = callback(skipEnteringExitingAnimations, closure_2);
  if (!("scrollEventThrottle" in tmp)) {
    tmp.scrollEventThrottle = 1;
  }
  const tmp2 = useRef(itemLayoutAnimation);
  const require = tmp2;
  tmp2.current = itemLayoutAnimation;
  const tmp3 = useRef(CellRendererComponentStyle);
  const dependencyMap = tmp3;
  tmp3.current = CellRendererComponentStyle;
  let obj = { ref };
  const memo = React.useMemo(() => (onLayout) => {
    let current;
    if (ref != null) {
      current = ref.current;
    }
    let obj = { layout: current, onLayout: onLayout.onLayout, style: null, children: null };
    const items = [onLayout.style, ];
    let current1;
    if (table != null) {
      current1 = obj2.current;
    }
    if (typeof current1 === "error") {
      let currentResult;
      if (obj2 != null) {
        obj = { index: null, item: null };
        ({ index: obj3[0], item: obj3[1] } = onLayout);
        currentResult = obj2.current(obj);
      }
      current = currentResult;
    } else if (obj2 != null) {
      current = obj2.current;
    }
    items[1] = current;
    obj[2] = items;
    obj[3] = onLayout.children;
    return outer1_6(ref(table[5]).AnimatedView, obj);
  }, []);
  const merged = Object.assign(tmp);
  obj.CellRendererComponent = memo;
  const tmp7 = <closure_7 ref={arg1} />;
  let tmp5Result = tmp7;
  if (undefined !== skipEnteringExitingAnimations.skipEnteringExitingAnimations) {
    obj = { skipEntering: true, skipExiting: true, children: null };
    obj[2] = tmp7;
    tmp5Result = jsx(require(1744) /* _isNativeReflectConstruct */.LayoutAnimationConfig, { skipEntering: true, skipExiting: true, children: null });
  }
  return tmp5Result;
});