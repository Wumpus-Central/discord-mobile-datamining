// === Module 10763: ? ===

// Module 10763
import _mod10764 from "module_10764" /* 10764 */;
import _mod10767 from "module_10767" /* 10767 */;
import _mod10771 from "module_10771" /* 10771 */;
import _mod10772 from "module_10772" /* 10772 */;
import CarouselLayout from "CarouselLayout" /* 10773 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  let obj = _mod10764;
  const initProps = obj.useInitProps(defaultIndex);
  let obj1 = _mod10767;
  const commonVariables = obj1.useCommonVariables(initProps);
  obj = {};
  const merged = Object.assign(initProps);
  obj.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10771.usePropsErrorBoundary(obj);
  obj = { value: { props: initProps, common: commonVariables }, children: null };
  obj1 = { ref };
  obj.children = jsx(CarouselLayout.CarouselLayout, { ref });
  return jsx(_mod10772.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: null });
});