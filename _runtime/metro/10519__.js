// === Module 10519: ? ===

// Module 10519
import _mod10520 from "module_10520" /* 10520 */;
import _mod10523 from "module_10523" /* 10523 */;
import _mod10527 from "module_10527" /* 10527 */;
import _mod10528 from "module_10528" /* 10528 */;
import CarouselLayout from "CarouselLayout" /* 10529 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10520.useInitProps(defaultIndex);
  const commonVariables = _mod10523.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10527.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10528.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});