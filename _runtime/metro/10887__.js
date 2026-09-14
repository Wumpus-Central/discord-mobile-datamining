// === Module 10887: ? ===

// Module 10887
import _mod10888 from "module_10888" /* 10888 */;
import _mod10891 from "module_10891" /* 10891 */;
import _mod10895 from "module_10895" /* 10895 */;
import _mod10896 from "module_10896" /* 10896 */;
import CarouselLayout from "CarouselLayout" /* 10897 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10888.useInitProps(defaultIndex);
  const commonVariables = _mod10891.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10895.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10896.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});