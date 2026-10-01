// === Module 10418: ? ===

// Module 10418
import _mod10419 from "module_10419" /* 10419 */;
import _mod10422 from "module_10422" /* 10422 */;
import _mod10426 from "module_10426" /* 10426 */;
import _mod10427 from "module_10427" /* 10427 */;
import CarouselLayout from "CarouselLayout" /* 10428 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10419.useInitProps(defaultIndex);
  const commonVariables = _mod10422.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10426.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10427.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});