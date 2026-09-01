// _runtime/01864_sharedValue.js
import noop from "00019_noop.js";

({ useCallback: obj1, useEffect: c3 } = noop);
let closure_4 = ["onScroll", "onScrollBeginDrag", "onScrollEndDrag", "onMomentumScrollBegin", "onMomentumScrollEnd"];
let closure_5 = {
  code: "function pnpm_useScrollStateTs1(event){const{offset,layout,size}=this.__closure;offset.value=event.contentOffset.y;layout.value=event.layoutMeasurement;size.value=event.contentSize;}",
};

export default function _default(arg0) {
  let obj = sharedValue(sharedValue1[1]);
  sharedValue = obj.useSharedValue(0);
  sharedValue1 = sharedValue(sharedValue1[1]).useSharedValue({ width: 0, height: 0 });
  const obj2 = sharedValue(sharedValue1[1]);
  const sharedValue2 = sharedValue(sharedValue1[1]).useSharedValue({ width: 0, height: 0 });
  const obj3 = sharedValue(sharedValue1[1]);
  const callback = sharedValue(sharedValue1[2]).useEventHandlerRegistration(arg0);
  const obj4 = sharedValue(sharedValue1[2]);
  const fn = function l(contentOffset) {
    sharedValue.value = contentOffset.contentOffset.y;
    sharedValue1.value = contentOffset.layoutMeasurement;
    sharedValue2.value = contentOffset.contentSize;
  };
  fn.__closure = { offset: sharedValue, layout: sharedValue1, size: sharedValue2 };
  fn.__workletHash = 10534434800111;
  fn.__initData = closure_5;
  closure_4 = sharedValue(sharedValue1[1]).useEvent(fn, closure_4);
  callback(() => {
    closure_0 = callback(closure_4);
    return () => {
      callback();
    };
  }, []);
  const items = [sharedValue1];
  const items1 = [sharedValue2];
  const obj5 = sharedValue(sharedValue1[1]);
  obj = {
    offset: sharedValue,
    layout: sharedValue1,
    size: sharedValue2,
    onLayout: sharedValue2((nativeEvent) => {
      sharedValue1.value = {
        width: nativeEvent.nativeEvent.layout.width,
        height: nativeEvent.nativeEvent.layout.height,
      };
    }, items),
    onContentSizeChange: sharedValue2((width, height) => {
      sharedValue2.value = { width, height };
    }, items1),
  };
  return obj;
}
