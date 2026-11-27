// === Module 11178: ? ===

// Module 11178
import _mod11179 from "module_11179" /* 11179 */;
import useCommonVariables from "useCommonVariables" /* 11182 */;
import _mod11186 from "module_11186" /* 11186 */;
import _mod11187 from "module_11187" /* 11187 */;
import CarouselLayout from "CarouselLayout" /* 11188 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod11179.useInitProps(defaultIndex);
  const commonVariables = useCommonVariables.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod11186.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod11187.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});