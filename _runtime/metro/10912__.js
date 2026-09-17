// === Module 10912: ? ===

// Module 10912
import _mod10913 from "module_10913" /* 10913 */;
import _mod10916 from "module_10916" /* 10916 */;
import _mod10920 from "module_10920" /* 10920 */;
import _mod10921 from "module_10921" /* 10921 */;
import CarouselLayout from "CarouselLayout" /* 10922 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10913.useInitProps(defaultIndex);
  const commonVariables = _mod10916.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10920.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10921.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});