// _runtime/metro/09965__.js
import { jsx } from "jsxProd";

const require = arg1;

export default require("noop").forwardRef((defaultIndex, ref) => {
  let obj = require("../09966_useInitProps.js") /* useInitProps */;
  const initProps = obj.useInitProps(defaultIndex);
  let obj1 = require("../09969_useCommonVariables.js") /* useCommonVariables */;
  const commonVariables = obj1.useCommonVariables(initProps);
  obj = {};
  const merged = Object.assign(initProps);
  obj.dataLength = initProps.dataLength;
  const propsErrorBoundary = require("../09973_usePropsErrorBoundary.js") /* usePropsErrorBoundary */.usePropsErrorBoundary(obj);
  obj = { value: { props: initProps, common: commonVariables }, children: null };
  obj1 = { ref };
  obj[1] = jsx(require("../09975_CarouselLayout.js") /* CarouselLayout */.CarouselLayout, { ref });
  return jsx(require("../09974_context.js") /* context */.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: null });
});