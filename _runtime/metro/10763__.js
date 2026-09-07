// _runtime/metro/10763__.js
import _mod10764 from "10764__.js";
import _mod10767 from "10767__.js";
import _mod10771 from "10771__.js";
import _mod10772 from "10772__.js";
import CarouselLayout from "../10773_CarouselLayout.js";
import noop from "00019__.js";

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  let obj = _mod10764;
  const initProps = obj.useInitProps(defaultIndex);
  let obj1 = _mod10767;
  const commonVariables = obj1.useCommonVariables(initProps);
  obj = {};
  const merged = Object.assign(initProps);
  obj.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10771.usePropsErrorBoundary(obj);
  obj = { value: { props: initProps, common: commonVariables }, children: null };
  obj1 = { ref };
  obj.children = jsx(CarouselLayout.CarouselLayout, { ref });
  return jsx(_mod10772.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: null });
});
