// === Module 10492: ? ===

// Module 10492
import _mod10493 from "module_10493" /* 10493 */;
import _mod10496 from "module_10496" /* 10496 */;
import _mod10500 from "module_10500" /* 10500 */;
import _mod10501 from "module_10501" /* 10501 */;
import CarouselLayout from "CarouselLayout" /* 10502 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10493.useInitProps(defaultIndex);
  const commonVariables = _mod10496.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10500.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10501.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});