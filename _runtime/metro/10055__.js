// _runtime/metro/10055__.js
import { jsx } from "jsxProd";
import { useInitProps } from "../10056_useInitProps.js";
import { useCommonVariables } from "../10059_useCommonVariables.js";
import { usePropsErrorBoundary } from "../10063_usePropsErrorBoundary.js";
import { context } from "../10064_context.js";
import { CarouselLayout } from "../10065_CarouselLayout.js";

const require = arg1;

export default require("noop").forwardRef((defaultIndex, ref) => {
  let obj = useInitProps;
  const initProps = obj.useInitProps(defaultIndex);
  let obj1 = useCommonVariables;
  const commonVariables = obj1.useCommonVariables(initProps);
  obj = {};
  const merged = Object.assign(initProps);
  obj.dataLength = initProps.dataLength;
  const propsErrorBoundary = usePropsErrorBoundary.usePropsErrorBoundary(obj);
  obj = { value: { props: initProps, common: commonVariables }, children: null };
  obj1 = { ref };
  obj[1] = jsx(CarouselLayout.CarouselLayout, { ref });
  return jsx(context.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: null });
});