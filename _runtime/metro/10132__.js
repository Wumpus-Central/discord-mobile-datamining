// === Module 10132: ? ===

// Module 10132
import _mod10133 from "module_10133" /* 10133 */;
import useCommonVariables from "useCommonVariables" /* 10136 */;
import _mod10140 from "module_10140" /* 10140 */;
import _mod10141 from "module_10141" /* 10141 */;
import CarouselLayout from "CarouselLayout" /* 10142 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10133.useInitProps(defaultIndex);
  const commonVariables = useCommonVariables.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10140.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10141.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});