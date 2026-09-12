// _runtime/metro/10886__.js
import _mod10887 from "10887__.js";
import _mod10890 from "10890__.js";
import _mod10894 from "10894__.js";
import _mod10895 from "10895__.js";
import CarouselLayout from "../10896_CarouselLayout.js";
import noop from "00019__.js";

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  let obj = _mod10887;
  const initProps = obj.useInitProps(defaultIndex);
  let obj1 = _mod10890;
  const commonVariables = obj1.useCommonVariables(initProps);
  obj = {};
  const merged = Object.assign(initProps);
  obj.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10894.usePropsErrorBoundary(obj);
  obj = { value: { props: initProps, common: commonVariables }, children: null };
  obj1 = { ref };
  obj.children = jsx(CarouselLayout.CarouselLayout, { ref });
  return jsx(_mod10895.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: null });
});
