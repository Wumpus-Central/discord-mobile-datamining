// === Module 11032: ? ===

// Module 11032
import _mod11033 from "module_11033" /* 11033 */;
import useCommonVariables from "useCommonVariables" /* 11036 */;
import _mod11040 from "module_11040" /* 11040 */;
import _mod11041 from "module_11041" /* 11041 */;
import CarouselLayout from "CarouselLayout" /* 11042 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod11033.useInitProps(defaultIndex);
  const commonVariables = useCommonVariables.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod11040.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod11041.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});