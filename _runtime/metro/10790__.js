// === Module 10790: ? ===

// Module 10790
import _mod10791 from "module_10791" /* 10791 */;
import _mod10794 from "module_10794" /* 10794 */;
import _mod10798 from "module_10798" /* 10798 */;
import _mod10799 from "module_10799" /* 10799 */;
import CarouselLayout from "CarouselLayout" /* 10800 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;

export default noop.forwardRef((defaultIndex, ref) => {
  let obj = _mod10791;
  const initProps = obj.useInitProps(defaultIndex);
  let obj1 = _mod10794;
  const commonVariables = obj1.useCommonVariables(initProps);
  obj = {};
  const merged = Object.assign(initProps);
  obj.dataLength = initProps.dataLength;
  const propsErrorBoundary = _mod10798.usePropsErrorBoundary(obj);
  obj = { value: { props: initProps, common: commonVariables }, children: null };
  obj1 = { ref };
  obj.children = jsx(CarouselLayout.CarouselLayout, { ref });
  return jsx(_mod10799.GlobalStateProvider, { value: { props: initProps, common: commonVariables }, children: null });
});