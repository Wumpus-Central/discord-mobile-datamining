// === Module 10426: ? ===

// Module 10426
import _mod10427 from "module_10427" /* 10427 */;
import _mod10430 from "module_10430" /* 10430 */;
import _mod10434 from "module_10434" /* 10434 */;
import _mod10435 from "module_10435" /* 10435 */;
import CarouselLayout from "CarouselLayout" /* 10436 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10427.useInitProps(defaultIndex);
  const commonVariables = _mod10430.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10434.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10435.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});