// === Module 9413: ? ===

// Module 9413
import _mod9414 from "module_9414" /* 9414 */;
import useCommonVariables from "useCommonVariables" /* 9417 */;
import _mod9421 from "module_9421" /* 9421 */;
import _mod9422 from "module_9422" /* 9422 */;
import CarouselLayout from "CarouselLayout" /* 9423 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod9414.useInitProps(defaultIndex);
  const commonVariables = useCommonVariables.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod9421.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod9422.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});