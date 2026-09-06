// _runtime/metro/10758__.js
import _mod10759 from "10759__.js";
import _mod10762 from "10762__.js";
import _mod10766 from "10766__.js";
import _mod10767 from "10767__.js";
import CarouselLayout from "../10768_CarouselLayout.js";
import noop from "00019__.js";

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  let obj = _mod10759;
  const initProps = obj.useInitProps(defaultIndex);
  let obj1 = _mod10762;
  const commonVariables = obj1.useCommonVariables(initProps);
  obj = {};
  const merged = Object.assign(initProps);
  obj.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10766.usePropsErrorBoundary(obj);
  obj = { value: { props: initProps, common: commonVariables }, children: null };
  obj1 = { ref };
  obj.children = jsx(CarouselLayout.CarouselLayout, { ref });
  return jsx(_mod10767.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: null });
});
