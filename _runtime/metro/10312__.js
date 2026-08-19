// === Module 10312: ? ===

// Module 10312
import noopDefault from "noop" /* 19 */;
import useInitProps from "useInitProps" /* 10313 */;
import useCommonVariables from "useCommonVariables" /* 10316 */;
import usePropsErrorBoundary from "usePropsErrorBoundary" /* 10320 */;
import context from "context" /* 10321 */;
import CarouselLayout from "CarouselLayout" /* 10322 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;

export default noopDefault.forwardRef((defaultIndex, ref) => {
  let obj = useInitProps;
  const initProps = obj.useInitProps(defaultIndex);
  obj1 = useCommonVariables;
  const commonVariables = obj1.useCommonVariables(initProps);
  obj = {};
  const merged = Object.assign(initProps);
  obj.dataLength = initProps.dataLength;
  const propsErrorBoundary = usePropsErrorBoundary.usePropsErrorBoundary(obj);
  obj = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, obj1) };
  obj1 = { ref };
  return jsx(context.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});