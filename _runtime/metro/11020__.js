// === Module 11020: ? ===

// Module 11020
import _mod11021 from "module_11021" /* 11021 */;
import _mod11024 from "module_11024" /* 11024 */;
import _mod11028 from "module_11028" /* 11028 */;
import _mod11029 from "module_11029" /* 11029 */;
import CarouselLayout from "CarouselLayout" /* 11030 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod11021.useInitProps(defaultIndex);
  const commonVariables = _mod11024.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod11028.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod11029.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});