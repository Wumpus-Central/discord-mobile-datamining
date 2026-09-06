// _runtime/01669_ReanimatedFlatList.js
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import noop from "metro/00019__.js";

const require = fn;
let closure_2 = ["itemLayoutAnimation", "skipEnteringExitingAnimations", "CellRendererComponentStyle"];
const useRef = fn(19).useRef;
const jsx = fn(21).jsx;
const _isNativeReflectConstruct = fn(1670);
let closure_7 = _isNativeReflectConstruct.createAnimatedComponent(fn(17).FlatList);
const module_1775 = fn(1775);

export const ReanimatedFlatList = module_1775.componentWithRef((skipEnteringExitingAnimations, ref) => {
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
  const memo = noop.useMemo(
    () => (onLayout) => {
      let current;
      if (ref != null) {
        current = ref.current;
      }
      let obj = { layout: current, onLayout: onLayout.onLayout, style: null, children: null };
      const items = [onLayout.style];
      let current1;
      if (closure_1 != null) {
        current1 = obj2.current;
      }
      if (typeof current1 === "function") {
        let currentResult;
        if (obj2 != null) {
          obj = { index: null, item: null };
          ({ index: obj3.index, item: obj3.item } = onLayout);
          currentResult = obj2.current(obj);
        }
        current = currentResult;
      } else if (obj2 != null) {
        current = obj2.current;
      }
      items[1] = current;
      obj.style = items;
      obj.children = onLayout.children;
      return jsx(ref(closure_1[5]).AnimatedView, {
        layout: current,
        onLayout: onLayout.onLayout,
        style: null,
        children: null,
      });
    },
    [],
  );
  const merged = Object.assign(tmp);
  obj.CellRendererComponent = memo;
  const tmp7 = <closure_7 ref={arg1} />;
  let tmp5Result = tmp7;
  if (undefined !== skipEnteringExitingAnimations.skipEnteringExitingAnimations) {
    obj = { skipEntering: true, skipExiting: true, children: tmp7 };
    tmp5Result = jsx(require("metro/01774__.js").LayoutAnimationConfig, {
      skipEntering: true,
      skipExiting: true,
      children: tmp7,
    });
  }
  return tmp5Result;
});
