// === Module 10351: ? ===

// Module 10351
import noopDefault from "noop" /* 19 */;
import useInitProps from "useInitProps" /* 10352 */;
import useCommonVariables from "useCommonVariables" /* 10355 */;
import usePropsErrorBoundary from "usePropsErrorBoundary" /* 10359 */;
import context from "context" /* 10360 */;
import CarouselLayout from "CarouselLayout" /* 10361 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;

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