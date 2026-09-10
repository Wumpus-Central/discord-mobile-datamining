// === Module 10828: ? ===

// Module 10828
import _mod10829 from "module_10829" /* 10829 */;
import _mod10832 from "module_10832" /* 10832 */;
import _mod10836 from "module_10836" /* 10836 */;
import _mod10837 from "module_10837" /* 10837 */;
import CarouselLayout from "CarouselLayout" /* 10838 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  let obj = _mod10829;
  const initProps = obj.useInitProps(defaultIndex);
  let obj1 = _mod10832;
  const commonVariables = obj1.useCommonVariables(initProps);
  obj = {};
  const merged = Object.assign(initProps);
  obj.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10836.usePropsErrorBoundary(obj);
  obj = { value: { props: initProps, common: commonVariables }, children: null };
  obj1 = { ref };
  obj.children = jsx(CarouselLayout.CarouselLayout, { ref });
  return jsx(_mod10837.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: null });
});