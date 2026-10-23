// _runtime/metro/10493__.js
import _mod10494 from "10494__.js";
import _mod10497 from "10497__.js";
import _mod10501 from "10501__.js";
import _mod10502 from "10502__.js";
import CarouselLayout from "../10503_CarouselLayout.js";
import noop from "00019__.js";

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10494.useInitProps(defaultIndex);
  const commonVariables = _mod10497.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10501.usePropsErrorBoundary(obj4);
  const obj5 = {
    value: { props: initProps, common: commonVariables },
    children: jsx(CarouselLayout.CarouselLayout, { ref }),
  };
  return jsx(_mod10502.GlobalStateProvider, {
    value: { props: initProps, common: commonVariables },
    children: jsx(CarouselLayout.CarouselLayout, { ref }),
  });
});
