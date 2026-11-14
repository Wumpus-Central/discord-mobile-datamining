// === Module 1993: useScrollState ===

// Module 1993 (useScrollState)
import _mod1655 from "module_1655" /* 1655 */;
import _mod1971 from "module_1971" /* 1971 */;
import noop from "module_19" /* 19 */;

({ useCallback: c2, useEffect: c3 } = noop);
let closure_4 = ["onScroll", "onScrollBeginDrag", "onScrollEndDrag", "onMomentumScrollBegin", "onMomentumScrollEnd"];
let closure_5 = { code: "(function pnpm_useScrollStateTs1(event){let[offset,layout,size]=this.__closure;offset.value=event.contentOffset.y;layout.value=event.layoutMeasurement;size.value=event.contentSize;})" };

export default function _default(arg0) {
  const sharedValue = _mod1655.useSharedValue(0);
  const sharedValue1 = _mod1655.useSharedValue({ width: 0, height: 0 });
  const sharedValue2 = _mod1655.useSharedValue({ width: 0, height: 0 });
  _mod1971.useEventHandlerRegistration(arg0);
  items = [closure_5, sharedValue, sharedValue1, sharedValue2];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp4, tmp5, tmp6, tmp7] = items;
  function pnpm_useScrollStateTs1(contentOffset) {
    c0.value = contentOffset.contentOffset.y;
    c1.value = contentOffset.layoutMeasurement;
    c2.value = contentOffset.contentSize;
  }
  const items1 = [tmp5, tmp6, tmp7];
  pnpm_useScrollStateTs1.__closure = items1;
  pnpm_useScrollStateTs1.__workletHash = 3992989127478;
  pnpm_useScrollStateTs1.__initData = tmp4;
  closure_3 = _mod1655.useEvent(pnpm_useScrollStateTs1, closure_4);
  React3(() => {
    closure_0 = _undefined(closure_3);
    return () => {
      closure_0();
    };
  }, []);
  const items2 = [sharedValue1];
  const items3 = [sharedValue2];
  const tmp9 = React2((nativeEvent) => {
    c0.value = { width: nativeEvent.nativeEvent.layout.width, height: nativeEvent.nativeEvent.layout.height };
  }, items2);
  return {
    offset: sharedValue,
    layout: sharedValue1,
    size: sharedValue2,
    onLayout: React2((nativeEvent) => {
      c0.value = { width: nativeEvent.nativeEvent.layout.width, height: nativeEvent.nativeEvent.layout.height };
    }, items2),
    onContentSizeChange: React2((width, height) => {
      const size = { width, height };
      c1.value = size;
    }, items3)
  };
};