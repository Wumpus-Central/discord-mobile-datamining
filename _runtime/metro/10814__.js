// === Module 10814: ? ===

// Module 10814
import _mod10815 from "module_10815" /* 10815 */;
import useCommonVariables from "useCommonVariables" /* 10818 */;
import _mod10822 from "module_10822" /* 10822 */;
import _mod10823 from "module_10823" /* 10823 */;
import CarouselLayout from "CarouselLayout" /* 10824 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10815.useInitProps(defaultIndex);
  const commonVariables = useCommonVariables.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10822.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10823.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});