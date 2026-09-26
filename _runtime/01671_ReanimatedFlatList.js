// === Module 1671: ReanimatedFlatList ===

// Module 1671 (ReanimatedFlatList)
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let closure_2 = ["itemLayoutAnimation", "skipEnteringExitingAnimations", "CellRendererComponentStyle"];
const useRef = fn(19).useRef;
const jsx = fn(21).jsx;
const _isNativeReflectConstruct = fn(1672);
let closure_7 = _isNativeReflectConstruct.createAnimatedComponent(fn(17).FlatList);
const module_1777 = fn(1777);

export const ReanimatedFlatList = module_1777.componentWithRef((skipEnteringExitingAnimations, ref) => {
  ({ itemLayoutAnimation, CellRendererComponentStyle } = skipEnteringExitingAnimations);
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
  let obj = { ref };
  const memo = noop.useMemo(() => (onLayout) => {
    let current1;
    if (ref != null) {
      current1 = ref.current;
    }
    const obj = { layout: current1, onLayout: onLayout.onLayout, style: null, children: null };
    const items = [onLayout.style, ];
    let current2;
    if (ref != null) {
      current2 = ref.current;
    }
    if (typeof current2 === "function") {
      let currentResult;
      if (ref != null) {
        ({ index: obj3.index, item: obj3.item } = onLayout);
        currentResult = ref.current({ index: null, item: null });
        const obj4 = { index: null, item: null };
      }
      let current = currentResult;
    } else if (ref != null) {
      current = ref.current;
    }
    items[1] = current;
    obj.style = items;
    obj.children = onLayout.children;
    return jsx(ref(ref[5]).AnimatedView, { layout: current1, onLayout: onLayout.onLayout, style: null, children: null });
  }, []);
  const merged = Object.assign(tmp);
  obj.CellRendererComponent = memo;
  const tmp7 = <closure_7 ref={ref} />;
  let tmp5Result = tmp7;
  if (undefined !== skipEnteringExitingAnimations.skipEnteringExitingAnimations) {
    const obj2 = { skipEntering: true, skipExiting: true, children: tmp7 };
    tmp5Result = jsx(require("module_1776").LayoutAnimationConfig, { skipEntering: true, skipExiting: true, children: tmp7 });
  }
  return tmp5Result;
});