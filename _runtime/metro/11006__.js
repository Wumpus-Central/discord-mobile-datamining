// === Module 11006: ? ===

// Module 11006
import _mod11007 from "module_11007" /* 11007 */;
import _mod11010 from "module_11010" /* 11010 */;
import _mod11014 from "module_11014" /* 11014 */;
import _mod11015 from "module_11015" /* 11015 */;
import CarouselLayout from "CarouselLayout" /* 11016 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod11007.useInitProps(defaultIndex);
  const commonVariables = _mod11010.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod11014.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod11015.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});