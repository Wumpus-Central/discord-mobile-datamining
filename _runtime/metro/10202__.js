// === Module 10202: ? ===

// Module 10202
import noopDefault from "noop" /* 19 */;
import useInitProps from "useInitProps" /* 10203 */;
import useCommonVariables from "useCommonVariables" /* 10206 */;
import usePropsErrorBoundary from "usePropsErrorBoundary" /* 10210 */;
import context from "context" /* 10211 */;
import CarouselLayout from "CarouselLayout" /* 10212 */;
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