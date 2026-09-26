// === Module 10223: ? ===

// Module 10223
import _mod10224 from "module_10224" /* 10224 */;
import _mod10227 from "module_10227" /* 10227 */;
import _mod10231 from "module_10231" /* 10231 */;
import _mod10232 from "module_10232" /* 10232 */;
import CarouselLayout from "CarouselLayout" /* 10233 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10224.useInitProps(defaultIndex);
  const commonVariables = _mod10227.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10231.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10232.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});