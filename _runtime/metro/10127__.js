// === Module 10127: ? ===

// Module 10127
import _mod10128 from "module_10128" /* 10128 */;
import _mod10131 from "module_10131" /* 10131 */;
import _mod10135 from "module_10135" /* 10135 */;
import _mod10136 from "module_10136" /* 10136 */;
import CarouselLayout from "CarouselLayout" /* 10137 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10128.useInitProps(defaultIndex);
  const commonVariables = _mod10131.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10135.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10136.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});