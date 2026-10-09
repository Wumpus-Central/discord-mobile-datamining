// === Module 10087: ? ===

// Module 10087
import _mod10088 from "module_10088" /* 10088 */;
import _mod10091 from "module_10091" /* 10091 */;
import _mod10095 from "module_10095" /* 10095 */;
import _mod10096 from "module_10096" /* 10096 */;
import CarouselLayout from "CarouselLayout" /* 10097 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10088.useInitProps(defaultIndex);
  const commonVariables = _mod10091.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10095.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10096.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});