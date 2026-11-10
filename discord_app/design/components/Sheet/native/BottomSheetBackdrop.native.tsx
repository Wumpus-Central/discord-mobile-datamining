// === Module 5727: Sheet/BottomSheetBackdrop ===

// Module 5727 (Sheet/BottomSheetBackdrop)
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import BottomSheetModal from "BottomSheetModal" /* 5394 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5422 */;
import Backdrop from "Backdrop" /* 5728 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5142);
let closure_4 = createStyles.createStyles({ container: { flex: 1 } });
let closure_5 = { code: "(function BottomSheetBackdropNativeTsx1(){let[scheduleOnRN,handleOnPress]=this.__closure;scheduleOnRN(handleOnPress);})" };
let closure_6 = { code: "(function BottomSheetBackdropNativeTsx2(){let[interpolate,animatedIndex,disappearsOnIndex,appearsOnIndex,opacity]=this.__closure;return{opacity:interpolate(animatedIndex.get(),[-1,disappearsOnIndex,appearsOnIndex],[0,0,opacity])};})" };
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Sheet/native/BottomSheetBackdrop.native.tsx");

export const BottomSheetBackdrop = noop.memo(function BottomSheetBackdropComponent(opacity) {
  let num = opacity.opacity;
  if (num === undefined) {
    num = 1;
  }
  let num2 = opacity.appearsOnIndex;
  if (num2 === undefined) {
    num2 = 0;
  }
  let num3 = opacity.disappearsOnIndex;
  if (num3 === undefined) {
    num3 = -1;
  }
  c0 = num3;
  let str = opacity.pressBehavior;
  if (str === undefined) {
    str = "close";
  }
  const onPress = opacity.onPress;
  c2 = onPress;
  const style = opacity.style;
  c3 = style;
  let animatedStyle;
  const tmp = _undefined3();
  c4 = tmp;
  const bottomSheet = BottomSheetModal.useBottomSheet();
  const snapToIndex = bottomSheet.snapToIndex;
  const close = bottomSheet.close;
  items = [snapToIndex, close, num3, str, onPress];
  const callback = noop.useCallback(() => {
    if (c2 != null) {
      tmp();
    }
    if ("close" === c1) {
      close();
    } else if ("collapse" === c1) {
      snapToIndex(c0);
    } else if (typeof c1 === "number") {
      snapToIndex(c1);
    }
  }, items);
  const Gesture = LegacyBaseButton.Gesture;
  let items1 = [closure_5, _mod1705.scheduleOnRN, callback];
  c0 = undefined;
  c1 = undefined;
  [tmp6, tmp7, tmp8] = items1;
  class BottomSheetBackdropNativeTsx1 {
    constructor() {
      tmp = closure_0(closure_1);
      return;
    }
  }
  const items2 = [tmp7, tmp8];
  BottomSheetBackdropNativeTsx1.__closure = items2;
  BottomSheetBackdropNativeTsx1.__workletHash = 13019722920668;
  BottomSheetBackdropNativeTsx1.__initData = tmp6;
  const TapResult = Gesture.Tap();
  const onEndResult = Gesture.Tap().onEnd(BottomSheetBackdropNativeTsx1);
  const items3 = [closure_6, _mod1652.interpolate, opacity.animatedIndex, num3, num2, num];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15] = items3;
  class BottomSheetBackdropNativeTsx2 {
    constructor() {
      obj = { opacity: null };
      items = [-1];
      items[1] = closure_2;
      items[2] = closure_3;
      items1 = [0, 0];
      items1[2] = closure_4;
      obj.opacity = closure_0(closure_1.get(), items, items1);
      return obj;
    }
  }
  const items4 = [tmp11, tmp12, tmp13, tmp14, tmp15];
  BottomSheetBackdropNativeTsx2.__closure = items4;
  BottomSheetBackdropNativeTsx2.__workletHash = 16206177452089;
  BottomSheetBackdropNativeTsx2.__initData = tmp10;
  animatedStyle = _mod1652.useAnimatedStyle(BottomSheetBackdropNativeTsx2);
  const items5 = [tmp.container, style, animatedStyle];
  const memo = noop.useMemo(() => {
    items = [_undefined3.container, c3, animatedStyle];
    return items;
  }, items5);
  const tmp19 = jsx(Backdrop.Backdrop, { blur: "none", style: memo, onDismiss: callback, "aria-hidden": true });
  let tmp18Result = tmp19;
  if ("none" !== str) {
    const obj3 = { gesture: onEndResult, children: tmp19 };
    tmp18Result = jsx(LegacyBaseButton.GestureDetector, { gesture: onEndResult, children: tmp19 });
  }
  return tmp18Result;
});