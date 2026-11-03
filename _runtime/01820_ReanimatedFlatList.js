// === Module 1820: ReanimatedFlatList ===

// Module 1820 (ReanimatedFlatList)
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;

const require = globalThis.__r;

const require = fn;
let closure_2 = ["itemLayoutAnimation", "skipEnteringExitingAnimations", "CellRendererComponentStyle", "ref"];
const noop = fn(19);
({ useMemo: closure_4, useRef: hasOwnProperty } = noop);
const jsx = fn(21).jsx;
const _isNativeReflectConstruct = fn(1821);
let closure_7 = _isNativeReflectConstruct.createAnimatedComponent(fn(17).FlatList);

export function ReanimatedFlatList(arg0) {
  ({ itemLayoutAnimation, CellRendererComponentStyle } = arg0);
  ({ skipEnteringExitingAnimations, ref } = arg0);
  const tmp = _objectWithoutProperties(arg0, closure_2);
  if (!("scrollEventThrottle" in tmp)) {
    tmp.scrollEventThrottle = 1;
  }
  const tmp2 = closure_5(itemLayoutAnimation);
  _require = tmp2;
  tmp2.current = itemLayoutAnimation;
  const tmp3 = closure_5(CellRendererComponentStyle);
  dependencyMap = tmp3;
  tmp3.current = CellRendererComponentStyle;
  let obj = { ref };
  const merged = Object.assign(tmp);
  obj.CellRendererComponent = closure_4(() => (onLayout) => {
    let current1;
    if (ref != null) {
      current1 = ref.current;
    }
    const obj = { layout: current1, onLayout: onLayout.onLayout, style: null, children: null };
    items = [onLayout.style, ];
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
  const tmp7 = <closure_7 ref={ref} />;
  let tmp5Result = tmp7;
  if (undefined !== skipEnteringExitingAnimations) {
    const obj2 = { skipEntering: true, skipExiting: true, children: tmp7 };
    tmp5Result = jsx(require("module_1881").LayoutAnimationConfig, { skipEntering: true, skipExiting: true, children: tmp7 });
  }
  return tmp5Result;
}