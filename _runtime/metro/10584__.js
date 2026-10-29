// === Module 10584: ? ===

// Module 10584
import _mod10585 from "module_10585" /* 10585 */;
import _mod10588 from "module_10588" /* 10588 */;
import _mod10592 from "module_10592" /* 10592 */;
import _mod10593 from "module_10593" /* 10593 */;
import CarouselLayout from "CarouselLayout" /* 10594 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10585.useInitProps(defaultIndex);
  const commonVariables = _mod10588.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10592.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10593.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});