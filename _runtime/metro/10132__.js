// _runtime/metro/10132__.js
import _mod10133 from "10133__.js";
import useCommonVariables from "../10136_useCommonVariables.js";
import _mod10140 from "10140__.js";
import _mod10141 from "10141__.js";
import CarouselLayout from "../10142_CarouselLayout.js";
import noop from "00019__.js";

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10133.useInitProps(defaultIndex);
  const commonVariables = useCommonVariables.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10140.usePropsErrorBoundary(obj4);
  const obj5 = {
    value: { props: initProps, common: commonVariables },
    children: jsx(CarouselLayout.CarouselLayout, { ref }),
  };
  return jsx(_mod10141.GlobalStateProvider, {
    value: { props: initProps, common: commonVariables },
    children: jsx(CarouselLayout.CarouselLayout, { ref }),
  });
});
