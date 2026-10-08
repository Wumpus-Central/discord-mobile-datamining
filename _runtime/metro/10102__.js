// === Module 10102: ? ===

// Module 10102
import _mod10103 from "module_10103" /* 10103 */;
import _mod10106 from "module_10106" /* 10106 */;
import _mod10110 from "module_10110" /* 10110 */;
import _mod10111 from "module_10111" /* 10111 */;
import CarouselLayout from "CarouselLayout" /* 10112 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10103.useInitProps(defaultIndex);
  const commonVariables = _mod10106.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10110.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10111.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});