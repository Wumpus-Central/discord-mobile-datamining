// discord_app/design/components/Sheet/native/BottomSheetBackdrop.native.tsx
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
let closure_4 = createStyles.createStyles({ container: { flex: 1 } });
let closure_5 = {
  code: "function BottomSheetBackdropNativeTsx1(){const{runOnJS,handleOnPress}=this.__closure;runOnJS(handleOnPress)();}",
};
let closure_6 = {
  code: "function BottomSheetBackdropNativeTsx2(){const{interpolate,animatedIndex,disappearsOnIndex,appearsOnIndex,opacity}=this.__closure;return{opacity:interpolate(animatedIndex.get(),[-1,disappearsOnIndex,appearsOnIndex],[0,0,opacity])};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Sheet/native/BottomSheetBackdrop.native.tsx");

export const BottomSheetBackdrop = noop.memo((animatedIndex) => {
  animatedIndex = animatedIndex.animatedIndex;
  let num = animatedIndex.opacity;
  if (num === undefined) {
    num = 1;
  }
  let num2 = animatedIndex.appearsOnIndex;
  if (num2 === undefined) {
    num2 = 0;
  }
  let num3 = animatedIndex.disappearsOnIndex;
  if (num3 === undefined) {
    num3 = -1;
  }
  let str = animatedIndex.pressBehavior;
  if (str === undefined) {
    str = "close";
  }
  const onPress = animatedIndex.onPress;
  const style = animatedIndex.style;
  let animatedStyle;
  const tmp = str();
  const container = tmp;
  const bottomSheet = animatedIndex(num[3]).useBottomSheet();
  const snapToIndex = bottomSheet.snapToIndex;
  const close = bottomSheet.close;
  let items = [snapToIndex, close, num3, str, onPress];
  const onDismiss = num2.useCallback(() => {
    if (onPress != null) {
      tmp();
    }
    if ("close" === str) {
      close();
    } else if ("collapse" === tmp3) {
      snapToIndex(num3);
    } else if (typeof tmp3 === "number") {
      snapToIndex(tmp3);
    }
  }, items);
  const Gesture = animatedIndex(num[4]).Gesture;
  let obj = animatedIndex(num[3]);
  const tmp2 = animatedIndex;
  const tmp3 = num;
  class I {
    constructor() {
      obj = closure_0(closure_1[5]);
      tmp = obj.runOnJS(closure_10)();
      return;
    }
  }
  const TapResult = Gesture.Tap();
  I.__closure = { runOnJS: animatedIndex(num[5]).runOnJS, handleOnPress: onDismiss };
  I.__workletHash = 3995467602852;
  I.__initData = onPress;
  const obj2 = { runOnJS: animatedIndex(num[5]).runOnJS, handleOnPress: onDismiss };
  const onEndResult = TapResult.onEnd(I);
  class S {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(closure_1[5]);
      items = [-1];
      items[1] = c3;
      items[2] = c2;
      items1 = [0, 0];
      items1[2] = c1;
      obj.opacity = obj2.interpolate(animatedIndex.get(), items, items1);
      return obj;
    }
  }
  const obj4 = animatedIndex(num[5]);
  S.__closure = {
    interpolate: animatedIndex(num[5]).interpolate,
    animatedIndex,
    disappearsOnIndex: num3,
    appearsOnIndex: num2,
    opacity: num,
  };
  S.__workletHash = 1140766381376;
  S.__initData = style;
  animatedStyle = obj4.useAnimatedStyle(S);
  let items1 = [tmp.container, style, animatedStyle];
  const memo = num2.useMemo(() => {
    const items = [container.container, style, animatedStyle];
    return items;
  }, items1);
  const tmp10 = num3(animatedIndex(num[6]).Backdrop, { blur: "none", style: memo, onDismiss, "aria-hidden": true });
  let tmp9Result = tmp10;
  if ("none" !== str) {
    const obj5 = { gesture: onEndResult, children: tmp10 };
    tmp9Result = num3(tmp2(tmp3[4]).GestureDetector, obj5);
  }
  return tmp9Result;
});
