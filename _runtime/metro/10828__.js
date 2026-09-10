// _runtime/metro/10828__.js
import _mod10829 from "10829__.js";
import _mod10832 from "10832__.js";
import _mod10836 from "10836__.js";
import _mod10837 from "10837__.js";
import CarouselLayout from "../10838_CarouselLayout.js";
import noop from "00019__.js";

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  let obj = _mod10829;
  const initProps = obj.useInitProps(defaultIndex);
  let obj1 = _mod10832;
  const commonVariables = obj1.useCommonVariables(initProps);
  obj = {};
  const merged = Object.assign(initProps);
  obj.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10836.usePropsErrorBoundary(obj);
  obj = { value: { props: initProps, common: commonVariables }, children: null };
  obj1 = { ref };
  obj.children = jsx(CarouselLayout.CarouselLayout, { ref });
  return jsx(_mod10837.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: null });
});
