// _runtime/metro/10351__.js
import noopDefault from "../00019_noop.js";
import useInitProps from "../10352_useInitProps.js";
import useCommonVariables from "../10355_useCommonVariables.js";
import usePropsErrorBoundary from "../10359_usePropsErrorBoundary.js";
import context from "../10360_context.js";
import CarouselLayout from "../10361_CarouselLayout.js";
import { jsx } from "../react/00021_jsxProd.js";

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