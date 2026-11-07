// === Module 10749: ? ===

// Module 10749
import _mod10750 from "module_10750" /* 10750 */;
import useCommonVariables from "useCommonVariables" /* 10753 */;
import _mod10757 from "module_10757" /* 10757 */;
import _mod10758 from "module_10758" /* 10758 */;
import CarouselLayout from "CarouselLayout" /* 10759 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10750.useInitProps(defaultIndex);
  const commonVariables = useCommonVariables.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10757.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10758.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});