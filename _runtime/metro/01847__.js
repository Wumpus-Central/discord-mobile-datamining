// _runtime/metro/01847__.js
import cancelAnimation from "../01636_cancelAnimation.js";
import _mod1825 from "01825__.js";
import noop from "00019__.js";

({ useCallback: c2, useEffect: c3 } = noop);
let closure_4 = ["onScroll", "onScrollBeginDrag", "onScrollEndDrag", "onMomentumScrollBegin", "onMomentumScrollEnd"];
const __initData = {
  code: "function pnpm_useScrollStateTs1(event){const{offset,layout,size}=this.__closure;offset.value=event.contentOffset.y;layout.value=event.layoutMeasurement;size.value=event.contentSize;}",
};

export default function _default(arg0) {
  let obj = cancelAnimation;
  const sharedValue = obj.useSharedValue(0);
  const sharedValue1 = cancelAnimation.useSharedValue({ width: 0, height: 0 });
  const sharedValue2 = cancelAnimation.useSharedValue({ width: 0, height: 0 });
  closure_3 = _mod1825.useEventHandlerRegistration(arg0);
  const fn = function l(contentOffset) {
    sharedValue.value = contentOffset.contentOffset.y;
    sharedValue1.value = contentOffset.layoutMeasurement;
    sharedValue2.value = contentOffset.contentSize;
  };
  fn.__closure = { offset: sharedValue, layout: sharedValue1, size: sharedValue2 };
  fn.__workletHash = 10534434800111;
  fn.__initData = __initData;
  closure_4 = cancelAnimation.useEvent(fn, closure_4);
  React3(() => {
    closure_0 = closure_3(closure_4);
    return () => {
      closure_0();
    };
  }, []);
  const items = [sharedValue1];
  const items1 = [sharedValue2];
  obj = {
    offset: sharedValue,
    layout: sharedValue1,
    size: sharedValue2,
    onLayout: React2((nativeEvent) => {
      sharedValue1.value = {
        width: nativeEvent.nativeEvent.layout.width,
        height: nativeEvent.nativeEvent.layout.height,
      };
    }, items),
    onContentSizeChange: React2((width, height) => {
      const size = { width, height };
      sharedValue2.value = size;
    }, items1),
  };
  return obj;
}
