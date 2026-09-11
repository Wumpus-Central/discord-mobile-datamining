// _runtime/metro/10847__.js
import _mod10848 from "10848__.js";
import _mod10851 from "10851__.js";
import _mod10855 from "10855__.js";
import _mod10856 from "10856__.js";
import CarouselLayout from "../10857_CarouselLayout.js";
import noop from "00019__.js";

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  let obj = _mod10848;
  const initProps = obj.useInitProps(defaultIndex);
  let obj1 = _mod10851;
  const commonVariables = obj1.useCommonVariables(initProps);
  obj = {};
  const merged = Object.assign(initProps);
  obj.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10855.usePropsErrorBoundary(obj);
  obj = { value: { props: initProps, common: commonVariables }, children: null };
  obj1 = { ref };
  obj.children = jsx(CarouselLayout.CarouselLayout, { ref });
  return jsx(_mod10856.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: null });
});
