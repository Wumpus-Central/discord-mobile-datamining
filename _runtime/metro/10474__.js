// === Module 10474: ? ===

// Module 10474
import _mod10475 from "module_10475" /* 10475 */;
import _mod10478 from "module_10478" /* 10478 */;
import _mod10482 from "module_10482" /* 10482 */;
import _mod10483 from "module_10483" /* 10483 */;
import CarouselLayout from "CarouselLayout" /* 10484 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10475.useInitProps(defaultIndex);
  const commonVariables = _mod10478.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10482.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10483.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});