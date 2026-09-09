// _runtime/metro/10790__.js
import _mod10791 from "10791__.js";
import _mod10794 from "10794__.js";
import _mod10798 from "10798__.js";
import _mod10799 from "10799__.js";
import CarouselLayout from "../10800_CarouselLayout.js";
import noop from "00019__.js";

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  let obj = _mod10791;
  const initProps = obj.useInitProps(defaultIndex);
  let obj1 = _mod10794;
  const commonVariables = obj1.useCommonVariables(initProps);
  obj = {};
  const merged = Object.assign(initProps);
  obj.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10798.usePropsErrorBoundary(obj);
  obj = { value: { props: initProps, common: commonVariables }, children: null };
  obj1 = { ref };
  obj.children = jsx(CarouselLayout.CarouselLayout, { ref });
  return jsx(_mod10799.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: null });
});
