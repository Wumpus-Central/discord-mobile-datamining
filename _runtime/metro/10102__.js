// _runtime/metro/10102__.js
import _mod10103 from "10103__.js";
import _mod10106 from "10106__.js";
import _mod10110 from "10110__.js";
import _mod10111 from "10111__.js";
import CarouselLayout from "../10112_CarouselLayout.js";
import noop from "00019__.js";

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10103.useInitProps(defaultIndex);
  const commonVariables = _mod10106.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10110.usePropsErrorBoundary(obj4);
  const obj5 = {
    value: { props: initProps, common: commonVariables },
    children: jsx(CarouselLayout.CarouselLayout, { ref }),
  };
  return jsx(_mod10111.GlobalStateProvider, {
    value: { props: initProps, common: commonVariables },
    children: jsx(CarouselLayout.CarouselLayout, { ref }),
  });
});
