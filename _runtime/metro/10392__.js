// _runtime/metro/10392__.js
import _mod10393 from "10393__.js";
import _mod10396 from "10396__.js";
import _mod10400 from "10400__.js";
import _mod10401 from "10401__.js";
import CarouselLayout from "../10402_CarouselLayout.js";
import noop from "00019__.js";

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10393.useInitProps(defaultIndex);
  const commonVariables = _mod10396.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10400.usePropsErrorBoundary(obj4);
  const obj5 = {
    value: { props: initProps, common: commonVariables },
    children: jsx(CarouselLayout.CarouselLayout, { ref }),
  };
  return jsx(_mod10401.GlobalStateProvider, {
    value: { props: initProps, common: commonVariables },
    children: jsx(CarouselLayout.CarouselLayout, { ref }),
  });
});
