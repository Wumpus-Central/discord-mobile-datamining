// === Module 1687: ReanimatedFlatList ===

// Module 1687 (ReanimatedFlatList)
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "noop" /* 19 */;
import { useRef } from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import createAnimatedComponent from "createAnimatedComponent" /* 1688 */;
import isReactRendering from "isReactRendering" /* 1793 */;

const require = fn;
let closure_2 = ["itemLayoutAnimation", "skipEnteringExitingAnimations", "CellRendererComponentStyle"];
let closure_7 = createAnimatedComponent.createAnimatedComponent(require("get ActivityIndicator").FlatList);

export const ReanimatedFlatList = isReactRendering.componentWithRef((skipEnteringExitingAnimations, ref) => {
  ({ itemLayoutAnimation, CellRendererComponentStyle } = skipEnteringExitingAnimations);
  const tmp = callback(skipEnteringExitingAnimations, closure_2);
  if (!("scrollEventThrottle" in tmp)) {
    tmp.scrollEventThrottle = 1;
  }
  const tmp2 = useRef(itemLayoutAnimation);
  const _require = tmp2;
  tmp2.current = itemLayoutAnimation;
  const tmp3 = useRef(CellRendererComponentStyle);
  dependencyMap = tmp3;
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
      current1 = table.current;
    }
    if (typeof current1 === "function") {
      let currentResult;
      if (table != null) {
        obj = { index: null, item: null };
        ({ index: obj3[0], item: obj3[1] } = onLayout);
        currentResult = table.current(obj);
      }
      current = currentResult;
    } else if (table != null) {
      current = table.current;
    }
    items[1] = current;
    obj[2] = items;
    obj[3] = onLayout.children;
    return closure_1_6(ref(table[5]).AnimatedView, obj);
  }, []);
  const merged = Object.assign(tmp);
  obj.CellRendererComponent = memo;
  const tmp7 = <closure_7 ref={ref} />;
  let tmp5Result = tmp7;
  if (undefined !== skipEnteringExitingAnimations.skipEnteringExitingAnimations) {
    obj = { skipEntering: true, skipExiting: true, children: null };
    obj[2] = tmp7;
    tmp5Result = jsx(_require(1792).LayoutAnimationConfig, { skipEntering: true, skipExiting: true, children: null });
  }
  return tmp5Result;
});