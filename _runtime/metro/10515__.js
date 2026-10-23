// _runtime/metro/10515__.js
import _mod10516 from "10516__.js";
import _mod10519 from "10519__.js";
import _mod10523 from "10523__.js";
import _mod10524 from "10524__.js";
import CarouselLayout from "../10525_CarouselLayout.js";
import noop from "00019__.js";

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10516.useInitProps(defaultIndex);
  const commonVariables = _mod10519.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10523.usePropsErrorBoundary(obj4);
  const obj5 = {
    value: { props: initProps, common: commonVariables },
    children: jsx(CarouselLayout.CarouselLayout, { ref }),
  };
  return jsx(_mod10524.GlobalStateProvider, {
    value: { props: initProps, common: commonVariables },
    children: jsx(CarouselLayout.CarouselLayout, { ref }),
  });
});
