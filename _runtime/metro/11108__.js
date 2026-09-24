// === Module 11108: ? ===

// Module 11108
import _mod11109 from "module_11109" /* 11109 */;
import _mod11112 from "module_11112" /* 11112 */;
import _mod11116 from "module_11116" /* 11116 */;
import _mod11117 from "module_11117" /* 11117 */;
import CarouselLayout from "CarouselLayout" /* 11118 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod11109.useInitProps(defaultIndex);
  const commonVariables = _mod11112.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod11116.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod11117.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});