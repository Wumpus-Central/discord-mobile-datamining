// === Module 10758: ? ===

// Module 10758
import _mod10759 from "module_10759" /* 10759 */;
import useCommonVariables from "useCommonVariables" /* 10762 */;
import _mod10766 from "module_10766" /* 10766 */;
import _mod10767 from "module_10767" /* 10767 */;
import CarouselLayout from "CarouselLayout" /* 10768 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  const initProps = _mod10759.useInitProps(defaultIndex);
  const commonVariables = useCommonVariables.useCommonVariables(initProps);
  const obj4 = {};
  const merged = Object.assign(initProps);
  obj4.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10766.usePropsErrorBoundary(obj4);
  const obj5 = { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) };
  return jsx(_mod10767.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: jsx(CarouselLayout.CarouselLayout, { ref }) });
});