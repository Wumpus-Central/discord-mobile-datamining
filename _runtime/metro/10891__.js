// === Module 10891: ? ===

// Module 10891
import _mod10892 from "module_10892" /* 10892 */;
import _mod10895 from "module_10895" /* 10895 */;
import _mod10899 from "module_10899" /* 10899 */;
import _mod10900 from "module_10900" /* 10900 */;
import CarouselLayout from "CarouselLayout" /* 10901 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10892.useInitProps(defaultIndex);
  const commonVariables = _mod10895.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10899.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10900.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});