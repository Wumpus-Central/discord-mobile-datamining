// === Module 10808: ? ===

// Module 10808
import _mod10809 from "module_10809" /* 10809 */;
import useCommonVariables from "useCommonVariables" /* 10812 */;
import _mod10816 from "module_10816" /* 10816 */;
import _mod10817 from "module_10817" /* 10817 */;
import CarouselLayout from "CarouselLayout" /* 10818 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10809.useInitProps(defaultIndex);
  const commonVariables = useCommonVariables.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10816.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10817.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});