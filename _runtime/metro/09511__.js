// === Module 9511: ? ===

// Module 9511
import _mod9512 from "module_9512" /* 9512 */;
import useCommonVariables from "useCommonVariables" /* 9515 */;
import _mod9519 from "module_9519" /* 9519 */;
import _mod9520 from "module_9520" /* 9520 */;
import CarouselLayout from "CarouselLayout" /* 9521 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod9512.useInitProps(defaultIndex);
  const commonVariables = useCommonVariables.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod9519.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod9520.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});