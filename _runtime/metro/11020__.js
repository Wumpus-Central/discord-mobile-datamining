// _runtime/metro/11020__.js
import _mod11021 from "11021__.js";
import _mod11024 from "11024__.js";
import _mod11028 from "11028__.js";
import _mod11029 from "11029__.js";
import CarouselLayout from "../11030_CarouselLayout.js";
import noop from "00019__.js";

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod11021.useInitProps(defaultIndex);
  const commonVariables = _mod11024.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod11028.usePropsErrorBoundary(obj4);
  const obj5 = {
    value: { props: initProps, common: commonVariables },
    children: jsx(CarouselLayout.CarouselLayout, { ref }),
  };
  return jsx(_mod11029.GlobalStateProvider, {
    value: { props: initProps, common: commonVariables },
    children: jsx(CarouselLayout.CarouselLayout, { ref }),
  });
});
