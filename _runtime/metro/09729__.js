// === Module 9729: ? ===

// Module 9729
import { jsx } from "jsxProd";

const require = arg1;

export default require("noop").forwardRef((defaultIndex, ref) => {
  let obj = require(9730) /* useInitProps */;
  const initProps = obj.useInitProps(defaultIndex);
  let obj1 = require(9733) /* useCommonVariables */;
  const commonVariables = obj1.useCommonVariables(initProps);
  obj = {};
  const merged = Object.assign(initProps);
  obj.dataLength = initProps.dataLength;
  const propsErrorBoundary = require(9737) /* usePropsErrorBoundary */.usePropsErrorBoundary(obj);
  obj = { value: { props: initProps, common: commonVariables }, children: null };
  obj1 = { ref };
  obj[1] = jsx(require(9739) /* CarouselLayout */.CarouselLayout, { ref });
  return jsx(require(9738) /* context */.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: null });
});