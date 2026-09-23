// === Module 11102: ? ===

// Module 11102
import _mod11103 from "module_11103" /* 11103 */;
import _mod11106 from "module_11106" /* 11106 */;
import _mod11110 from "module_11110" /* 11110 */;
import _mod11111 from "module_11111" /* 11111 */;
import CarouselLayout from "CarouselLayout" /* 11112 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod11103.useInitProps(defaultIndex);
  const commonVariables = _mod11106.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod11110.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod11111.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});