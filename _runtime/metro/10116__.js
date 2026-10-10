// === Module 10116: ? ===

// Module 10116
import _mod10117 from "module_10117" /* 10117 */;
import _mod10120 from "module_10120" /* 10120 */;
import _mod10124 from "module_10124" /* 10124 */;
import _mod10125 from "module_10125" /* 10125 */;
import CarouselLayout from "CarouselLayout" /* 10126 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10117.useInitProps(defaultIndex);
  const commonVariables = _mod10120.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10124.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10125.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});