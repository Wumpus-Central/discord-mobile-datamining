// === Module 10758: ? ===

// Module 10758
import _mod10759 from "module_10759" /* 10759 */;
import _mod10762 from "module_10762" /* 10762 */;
import _mod10766 from "module_10766" /* 10766 */;
import _mod10767 from "module_10767" /* 10767 */;
import CarouselLayout from "CarouselLayout" /* 10768 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  let obj = _mod10759;
  const initProps = obj.useInitProps(defaultIndex);
  let obj1 = _mod10762;
  const commonVariables = obj1.useCommonVariables(initProps);
  obj = {};
  const merged = Object.assign(initProps);
  obj.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10766.usePropsErrorBoundary(obj);
  obj = { value: { props: initProps, common: commonVariables }, children: null };
  obj1 = { ref };
  obj.children = jsx(CarouselLayout.CarouselLayout, { ref });
  return jsx(_mod10767.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: null });
});