// === Module 10445: ? ===

// Module 10445
import _mod10446 from "module_10446" /* 10446 */;
import _mod10449 from "module_10449" /* 10449 */;
import _mod10453 from "module_10453" /* 10453 */;
import _mod10454 from "module_10454" /* 10454 */;
import CarouselLayout from "CarouselLayout" /* 10455 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10446.useInitProps(defaultIndex);
  const commonVariables = _mod10449.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10453.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10454.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});