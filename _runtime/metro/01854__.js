// _runtime/metro/01854__.js
import _mod1643 from "01643__.js";
import _mod1832 from "01832__.js";
import react from "../00019_react.js";

let c2;
let c3;
({ useCallback: c2, useEffect: c3 } = react);
let closure_4 = ["onScroll", "onScrollBeginDrag", "onScrollEndDrag", "onMomentumScrollBegin", "onMomentumScrollEnd"];
const __initData = {
  code: "function pnpm_useScrollStateTs1(event){const{offset,layout,size}=this.__closure;offset.value=event.contentOffset.y;layout.value=event.layoutMeasurement;size.value=event.contentSize;}",
};

export default function _default(arg0) {
  const obj = _mod1643;
  const sharedValue = obj.useSharedValue(0);
  const obj2 = _mod1643;
  const sharedValue1 = obj2.useSharedValue({ width: 0, height: 0 });
  const obj3 = _mod1643;
  const sharedValue2 = obj3.useSharedValue({ width: 0, height: 0 });
  const obj4 = _mod1832;
  let c3 = obj4.useEventHandlerRegistration(arg0);
  const fn = function l(contentOffset) {
    sharedValue.value = contentOffset.contentOffset.y;
    sharedValue1.value = contentOffset.layoutMeasurement;
    sharedValue2.value = contentOffset.contentSize;
  };
  fn.__closure = { offset: sharedValue, layout: sharedValue1, size: sharedValue2 };
  fn.__workletHash = 10534434800111;
  fn.__initData = __initData;
  const obj5 = _mod1643;
  closure_4 = obj5.useEvent(fn, closure_4);
  _false(() => {
    let closure_0 = closure_3(closure_4);
    return () => {
      closure_0();
    };
  }, []);
  const items = [sharedValue1];
  const items1 = [sharedValue2];
  const tmp5 = React2((nativeEvent) => {
    sharedValue1.value = { width: nativeEvent.nativeEvent.layout.width, height: nativeEvent.nativeEvent.layout.height };
  }, items);
  const obj6 = {
    offset: sharedValue,
    layout: sharedValue1,
    size: sharedValue2,
    onLayout: tmp5,
    onContentSizeChange: React2((width, height) => {
      size = { width, height };
      sharedValue2.value = size;
    }, items1),
  };
  return obj6;
}
