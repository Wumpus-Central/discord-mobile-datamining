// === Module 11630: ? ===

// Module 11630
import _mod11631 from "module_11631" /* 11631 */;
import useCommonVariables from "useCommonVariables" /* 11634 */;
import _mod11638 from "module_11638" /* 11638 */;
import _mod11639 from "module_11639" /* 11639 */;
import CarouselLayout from "CarouselLayout" /* 11640 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod11631.useInitProps(defaultIndex);
  const commonVariables = useCommonVariables.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod11638.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod11639.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});