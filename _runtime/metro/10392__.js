// === Module 10392: ? ===

// Module 10392
import _mod10393 from "module_10393" /* 10393 */;
import _mod10396 from "module_10396" /* 10396 */;
import _mod10400 from "module_10400" /* 10400 */;
import _mod10401 from "module_10401" /* 10401 */;
import CarouselLayout from "CarouselLayout" /* 10402 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10393.useInitProps(defaultIndex);
  const commonVariables = _mod10396.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10400.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10401.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});