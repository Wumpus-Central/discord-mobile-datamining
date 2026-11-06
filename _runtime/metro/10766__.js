// === Module 10766: ? ===

// Module 10766
import _mod10767 from "module_10767" /* 10767 */;
import useCommonVariables from "useCommonVariables" /* 10770 */;
import _mod10774 from "module_10774" /* 10774 */;
import _mod10775 from "module_10775" /* 10775 */;
import CarouselLayout from "CarouselLayout" /* 10776 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10767.useInitProps(defaultIndex);
  const commonVariables = useCommonVariables.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10774.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10775.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});