// === Module 10434: ? ===

// Module 10434
import _mod10435 from "module_10435" /* 10435 */;
import _mod10438 from "module_10438" /* 10438 */;
import _mod10442 from "module_10442" /* 10442 */;
import _mod10443 from "module_10443" /* 10443 */;
import CarouselLayout from "CarouselLayout" /* 10444 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10435.useInitProps(defaultIndex);
  const commonVariables = _mod10438.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10442.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10443.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});