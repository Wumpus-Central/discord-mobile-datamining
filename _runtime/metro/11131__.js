// === Module 11131: ? ===

// Module 11131
import _mod11132 from "module_11132" /* 11132 */;
import useCommonVariables from "useCommonVariables" /* 11135 */;
import _mod11139 from "module_11139" /* 11139 */;
import _mod11140 from "module_11140" /* 11140 */;
import CarouselLayout from "CarouselLayout" /* 11141 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod11132.useInitProps(defaultIndex);
  const commonVariables = useCommonVariables.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod11139.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod11140.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});