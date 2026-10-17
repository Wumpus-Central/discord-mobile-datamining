// === Module 10420: ? ===

// Module 10420
import _mod10421 from "module_10421" /* 10421 */;
import _mod10424 from "module_10424" /* 10424 */;
import _mod10428 from "module_10428" /* 10428 */;
import _mod10429 from "module_10429" /* 10429 */;
import CarouselLayout from "CarouselLayout" /* 10430 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10421.useInitProps(defaultIndex);
  const commonVariables = _mod10424.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10428.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10429.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});