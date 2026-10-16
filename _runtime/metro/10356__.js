// === Module 10356: ? ===

// Module 10356
import _mod10357 from "module_10357" /* 10357 */;
import _mod10360 from "module_10360" /* 10360 */;
import _mod10364 from "module_10364" /* 10364 */;
import _mod10365 from "module_10365" /* 10365 */;
import CarouselLayout from "CarouselLayout" /* 10366 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10357.useInitProps(defaultIndex);
  const commonVariables = _mod10360.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10364.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10365.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});