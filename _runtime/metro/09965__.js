// _runtime/metro/09965__.js
import { jsx } from "jsxProd";
import { useInitProps } from "../09966_useInitProps.js";
import { useCommonVariables } from "../09969_useCommonVariables.js";
import { usePropsErrorBoundary } from "../09973_usePropsErrorBoundary.js";
import { context } from "../09974_context.js";
import { CarouselLayout } from "../09975_CarouselLayout.js";

const require = arg1;

export default require("noop").forwardRef((defaultIndex, ref) => {
  let obj = useInitProps /* useInitProps */;
  const initProps = obj.useInitProps(defaultIndex);
  let obj1 = useCommonVariables /* useCommonVariables */;
  const commonVariables = obj1.useCommonVariables(initProps);
  obj = {};
  const merged = Object.assign(initProps);
  obj.dataLength = initProps.dataLength;
  const propsErrorBoundary = usePropsErrorBoundary /* usePropsErrorBoundary */.usePropsErrorBoundary(obj);
  obj = { value: { props: initProps, common: commonVariables }, children: null };
  obj1 = { ref };
  obj[1] = jsx(CarouselLayout /* CarouselLayout */.CarouselLayout, { ref });
  return jsx(context /* context */.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: null });
});