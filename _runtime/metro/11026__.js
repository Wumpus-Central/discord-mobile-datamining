// === Module 11026: ? ===

// Module 11026
import _mod11027 from "module_11027" /* 11027 */;
import _mod11030 from "module_11030" /* 11030 */;
import _mod11034 from "module_11034" /* 11034 */;
import _mod11035 from "module_11035" /* 11035 */;
import CarouselLayout from "CarouselLayout" /* 11036 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod11027.useInitProps(defaultIndex);
  const commonVariables = _mod11030.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod11034.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod11035.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});