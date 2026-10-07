// === Module 10505: ? ===

// Module 10505
import _mod10506 from "module_10506" /* 10506 */;
import _mod10509 from "module_10509" /* 10509 */;
import _mod10513 from "module_10513" /* 10513 */;
import _mod10514 from "module_10514" /* 10514 */;
import CarouselLayout from "CarouselLayout" /* 10515 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10506.useInitProps(defaultIndex);
  const commonVariables = _mod10509.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10513.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10514.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});