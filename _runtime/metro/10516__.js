// === Module 10516: ? ===

// Module 10516
import _mod10517 from "module_10517" /* 10517 */;
import _mod10520 from "module_10520" /* 10520 */;
import _mod10524 from "module_10524" /* 10524 */;
import _mod10525 from "module_10525" /* 10525 */;
import CarouselLayout from "CarouselLayout" /* 10526 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10517.useInitProps(defaultIndex);
  const commonVariables = _mod10520.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10524.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10525.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});