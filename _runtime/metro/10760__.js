// === Module 10760: ? ===

// Module 10760
import _mod10761 from "module_10761" /* 10761 */;
import useCommonVariables from "useCommonVariables" /* 10764 */;
import _mod10768 from "module_10768" /* 10768 */;
import _mod10769 from "module_10769" /* 10769 */;
import CarouselLayout from "CarouselLayout" /* 10770 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10761.useInitProps(defaultIndex);
  const commonVariables = useCommonVariables.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10768.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10769.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});