// === Module 10886: ? ===

// Module 10886
import _mod10887 from "module_10887" /* 10887 */;
import _mod10890 from "module_10890" /* 10890 */;
import _mod10894 from "module_10894" /* 10894 */;
import _mod10895 from "module_10895" /* 10895 */;
import CarouselLayout from "CarouselLayout" /* 10896 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  let obj = _mod10887;
  const initProps = obj.useInitProps(defaultIndex);
  let obj1 = _mod10890;
  const commonVariables = obj1.useCommonVariables(initProps);
  obj = {};
  const merged = Object.assign(initProps);
  obj.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10894.usePropsErrorBoundary(obj);
  obj = { value: { props: initProps, common: commonVariables }, children: null };
  obj1 = { ref };
  obj.children = jsx(CarouselLayout.CarouselLayout, { ref });
  return jsx(_mod10895.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: null });
});