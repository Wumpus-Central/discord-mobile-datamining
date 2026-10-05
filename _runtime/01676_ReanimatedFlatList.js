// === Module 1676: ReanimatedFlatList ===

// Module 1676 (ReanimatedFlatList)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import module_1677 from "module_1677" /* 1677 */;
import module_1782 from "componentWithRef" /* 1782 */;

const require = globalThis.__r;
const react = react2;
let _require, dependencyMap, skipEnteringExitingAnimations;

let closure_2 = ["itemLayoutAnimation", "skipEnteringExitingAnimations", "CellRendererComponentStyle"];
const useRef = react2.useRef;
const FlatList = react_native.FlatList;
const jsx = Fragment.jsx;
let closure_7 = module_1677.createAnimatedComponent(FlatList);

export const ReanimatedFlatList = module_1782.componentWithRef((skipEnteringExitingAnimations, ref) => {
  let CellRendererComponentStyle;
  let itemLayoutAnimation;
  ({ itemLayoutAnimation, CellRendererComponentStyle } = skipEnteringExitingAnimations);
  skipEnteringExitingAnimations = skipEnteringExitingAnimations.skipEnteringExitingAnimations;
  const tmp = _objectWithoutProperties(skipEnteringExitingAnimations, closure_2);
  if (!("scrollEventThrottle" in tmp)) {
    tmp.scrollEventThrottle = 1;
  }
  const tmp2 = useRef(itemLayoutAnimation);
  _require = tmp2;
  tmp2.current = itemLayoutAnimation;
  const tmp3 = useRef(CellRendererComponentStyle);
  dependencyMap = tmp3;
  tmp3.current = CellRendererComponentStyle;
  const memo = react.useMemo(() => (onLayout) => {
    let current;
    let items;
    let current1;
    const AnimatedView = closure_2_0(closure_2_1[5]).AnimatedView;
    if (ref != null) {
      current1 = ref.current;
    }
    const obj = { layout: current1, onLayout: onLayout.onLayout, style: items, children: onLayout.children };
    items = [onLayout.style, ];
    let current2;
    if (ref != null) {
      current2 = ref.current;
    }
    if (typeof current2 === "function") {
      let currentResult;
      if (ref != null) {
        const obj4 = { index: null, item: null };
        ({ index: obj3.index, item: obj3.item } = onLayout);
        currentResult = ref.current(obj4);
      }
      current = currentResult;
    } else if (ref != null) {
      current = ref.current;
    }
    items[1] = current;
    return closure_2_6(AnimatedView, obj);
  }, []);
  const merged = Object.assign(tmp);
  const tmp7 = <closure_7 ref={ref} CellRendererComponent={memo} />;
  let tmp5Result = tmp7;
  if (undefined !== skipEnteringExitingAnimations) {
    tmp5Result = jsx(require("module_1781").LayoutAnimationConfig, { skipEntering: true, skipExiting: true, children: tmp7 });
  }
  return tmp5Result;
});