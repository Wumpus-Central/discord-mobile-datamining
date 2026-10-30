// === Module 10610: ? ===

// Module 10610
import _mod10611 from "module_10611" /* 10611 */;
import _mod10614 from "module_10614" /* 10614 */;
import _mod10618 from "module_10618" /* 10618 */;
import _mod10619 from "module_10619" /* 10619 */;
import CarouselLayout from "CarouselLayout" /* 10620 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10611.useInitProps(defaultIndex);
  const commonVariables = _mod10614.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10618.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10619.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});