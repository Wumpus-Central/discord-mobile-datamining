// _runtime/metro/10312__.js
import noopDefault from "../00019_noop.js";
import useInitProps from "../10313_useInitProps.js";
import useCommonVariables from "../10316_useCommonVariables.js";
import usePropsErrorBoundary from "../10320_usePropsErrorBoundary.js";
import context from "../10321_context.js";
import CarouselLayout from "../10322_CarouselLayout.js";
import { jsx } from "../react/00021_jsxProd.js";

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