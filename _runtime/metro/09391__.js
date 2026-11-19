// === Module 9391: ? ===

// Module 9391
import _mod9392 from "module_9392" /* 9392 */;
import useCommonVariables from "useCommonVariables" /* 9395 */;
import _mod9399 from "module_9399" /* 9399 */;
import _mod9400 from "module_9400" /* 9400 */;
import CarouselLayout from "CarouselLayout" /* 9401 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod9392.useInitProps(defaultIndex);
  const commonVariables = useCommonVariables.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod9399.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod9400.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});