// === Module 11690: ? ===

// Module 11690
import _mod11691 from "module_11691" /* 11691 */;
import useCommonVariables from "useCommonVariables" /* 11694 */;
import _mod11698 from "module_11698" /* 11698 */;
import _mod11699 from "module_11699" /* 11699 */;
import CarouselLayout from "CarouselLayout" /* 11700 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod11691.useInitProps(defaultIndex);
  const commonVariables = useCommonVariables.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod11698.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod11699.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});