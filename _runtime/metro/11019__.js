// === Module 11019: ? ===

// Module 11019
import _mod11020 from "module_11020" /* 11020 */;
import _mod11023 from "module_11023" /* 11023 */;
import _mod11027 from "module_11027" /* 11027 */;
import _mod11028 from "module_11028" /* 11028 */;
import CarouselLayout from "CarouselLayout" /* 11029 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod11020.useInitProps(defaultIndex);
  const commonVariables = _mod11023.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod11027.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod11028.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});