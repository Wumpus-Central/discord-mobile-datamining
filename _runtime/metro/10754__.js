// === Module 10754: ? ===

// Module 10754
import noopDefault from "noop" /* 19 */;
import useInitProps from "useInitProps" /* 10755 */;
import useCommonVariables from "useCommonVariables" /* 10758 */;
import usePropsErrorBoundary from "usePropsErrorBoundary" /* 10762 */;
import context from "context" /* 10763 */;
import CarouselLayout from "CarouselLayout" /* 10764 */;
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