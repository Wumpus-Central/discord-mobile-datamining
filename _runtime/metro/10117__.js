// === Module 10117: ? ===

// Module 10117
import _mod10118 from "module_10118" /* 10118 */;
import _mod10121 from "module_10121" /* 10121 */;
import _mod10125 from "module_10125" /* 10125 */;
import _mod10126 from "module_10126" /* 10126 */;
import CarouselLayout from "CarouselLayout" /* 10127 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10118.useInitProps(defaultIndex);
  const commonVariables = _mod10121.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10125.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10126.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});