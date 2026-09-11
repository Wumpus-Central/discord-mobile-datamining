// === Module 10847: ? ===

// Module 10847
import _mod10848 from "module_10848" /* 10848 */;
import _mod10851 from "module_10851" /* 10851 */;
import _mod10855 from "module_10855" /* 10855 */;
import _mod10856 from "module_10856" /* 10856 */;
import CarouselLayout from "CarouselLayout" /* 10857 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  let obj = _mod10848;
  const initProps = obj.useInitProps(defaultIndex);
  let obj1 = _mod10851;
  const commonVariables = obj1.useCommonVariables(initProps);
  obj = {};
  const merged = Object.assign(initProps);
  obj.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10855.usePropsErrorBoundary(obj);
  obj = { value: { props: initProps, common: commonVariables }, children: null };
  obj1 = { ref };
  obj.children = jsx(CarouselLayout.CarouselLayout, { ref });
  return jsx(_mod10856.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: null });
});