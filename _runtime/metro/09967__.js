// _runtime/metro/09967__.js
import { jsx } from "jsxProd";
import { useInitProps } from "../09968_useInitProps.js";
import { useCommonVariables } from "../09971_useCommonVariables.js";
import { usePropsErrorBoundary } from "../09975_usePropsErrorBoundary.js";
import { context } from "../09976_context.js";
import { CarouselLayout } from "../09977_CarouselLayout.js";

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