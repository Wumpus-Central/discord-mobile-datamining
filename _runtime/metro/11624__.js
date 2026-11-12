// === Module 11624: ? ===

// Module 11624
import _mod11625 from "module_11625" /* 11625 */;
import useCommonVariables from "useCommonVariables" /* 11628 */;
import _mod11632 from "module_11632" /* 11632 */;
import _mod11633 from "module_11633" /* 11633 */;
import CarouselLayout from "CarouselLayout" /* 11634 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod11625.useInitProps(defaultIndex);
  const commonVariables = useCommonVariables.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod11632.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod11633.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});