// discord_app/design/components/Sheet/native/BottomSheetBackdrop.native.tsx
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_4 = createStyles.createStyles({ container: { flex: 1 } });
let closure_5 = {
  code: "function BottomSheetBackdropNativeTsx1(){const{runOnJS,handleOnPress}=this.__closure;runOnJS(handleOnPress)();}",
};
let closure_6 = {
  code: "function BottomSheetBackdropNativeTsx2(){const{interpolate,animatedIndex,disappearsOnIndex,appearsOnIndex,opacity}=this.__closure;return{opacity:interpolate(animatedIndex.get(),[-1,disappearsOnIndex,appearsOnIndex],[0,0,opacity])};}",
};
let __initData = {
  code: "function BottomSheetBackdropNativeTsx3(){const{runOnJS,handleOnPress}=this.__closure;runOnJS(handleOnPress)();}",
};
let closure_8 = {
  code: "function BottomSheetBackdropNativeTsx4(){const{interpolate,animatedIndex,disappearsOnIndex,appearsOnIndex,opacity}=this.__closure;return{opacity:interpolate(animatedIndex.get(),[-1,disappearsOnIndex,appearsOnIndex],[0,0,opacity])};}",
};
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Sheet/native/BottomSheetBackdrop.native.tsx");

export const BottomSheetBackdrop = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function BottomSheetBackdropComponent(animatedIndex) {
        const cResult = animatedIndex(onPress[4]).c(19);
        animatedIndex = animatedIndex.animatedIndex;
        ({ opacity, appearsOnIndex, disappearsOnIndex, pressBehavior, onPress } = animatedIndex);
        const style = animatedIndex.style;
        let num = 1;
        if (undefined !== opacity) {
          num = opacity;
        }
        let num2 = 0;
        if (undefined !== appearsOnIndex) {
          num2 = appearsOnIndex;
        }
        let num3 = -1;
        if (undefined !== disappearsOnIndex) {
          num3 = disappearsOnIndex;
        }
        let str = "close";
        if (undefined !== pressBehavior) {
          str = pressBehavior;
        }
        const tmp4 = num3();
        let obj = animatedIndex(onPress[4]);
        const bottomSheet = animatedIndex(onPress[5]).useBottomSheet();
        const snapToIndex = bottomSheet.snapToIndex;
        const close = bottomSheet.close;
        if (cResult[0] === close) {
          if (cResult[1] === num3) {
            if (cResult[2] === onPress) {
              if (cResult[3] === str) {
                if (cResult[4] === snapToIndex) {
                  let tmp6 = cResult[5];
                }
                closure_8 = tmp6;
                if (cResult[6] !== tmp6) {
                  const Gesture = tmp(tmp2[6]).Gesture;
                  Gesture.Tap();
                  const fn2 = function b() {
                    ReanimatedRexport.runOnJS(closure_8)();
                  };
                  const obj2 = { runOnJS: null, handleOnPress: null };
                  class C {
                    constructor() {
                      obj = { opacity: null };
                      obj2 = closure_0(closure_1[7]);
                      items = [-1];
                      items[1] = disappearsOnIndex;
                      items[2] = appearsOnIndex;
                      items1 = [0, 0];
                      items1[2] = opacity;
                      obj.opacity = obj2.interpolate(animatedIndex.get(), items, items1);
                      return obj;
                    }
                  }
                  obj2.runOnJS = tmp(tmp2[7]).runOnJS;
                  obj2.handleOnPress = tmp6;
                  fn2.__closure = obj2;
                  fn2.__workletHash = 3995467602852;
                  fn2.__initData = str;
                  const tmp9Result = tmp9(fn2);
                  cResult[6] = tmp6;
                  cResult[7] = tmp9Result;
                  let tmp7 = tmp9Result;
                } else {
                  tmp7 = cResult[7];
                }
                class C {
                  constructor() {
                    obj = { opacity: null };
                    obj2 = closure_0(closure_1[7]);
                    items = [-1];
                    items[1] = disappearsOnIndex;
                    items[2] = appearsOnIndex;
                    items1 = [0, 0];
                    items1[2] = opacity;
                    obj.opacity = obj2.interpolate(animatedIndex.get(), items, items1);
                    return obj;
                  }
                }
                const obj3 = {
                  interpolate: tmp(tmp2[7]).interpolate,
                  animatedIndex,
                  disappearsOnIndex: num3,
                  appearsOnIndex: num2,
                  opacity: num,
                };
                C.__closure = obj3;
                C.__workletHash = 1140766381376;
                C.__initData = snapToIndex;
                const animatedStyle = tmp(tmp2[7]).useAnimatedStyle(C);
                if (cResult[8] === animatedStyle) {
                  if (cResult[9] === style) {
                    if (cResult[10] === tmp4.container) {
                      let tmp14 = cResult[11];
                    }
                    if (cResult[12] === tmp6) {
                      if (cResult[13] === tmp14) {
                        let tmp15 = cResult[14];
                      }
                      if (cResult[15] === tmp15) {
                        if (cResult[16] === str) {
                          if (cResult[17] === tmp7) {
                            let tmp18 = cResult[18];
                          }
                          return tmp18;
                        }
                      }
                      class C {
                        constructor() {
                          obj = { opacity: null };
                          obj2 = closure_0(closure_1[7]);
                          items = [-1];
                          items[1] = disappearsOnIndex;
                          items[2] = appearsOnIndex;
                          items1 = [0, 0];
                          items1[2] = opacity;
                          obj.opacity = obj2.interpolate(animatedIndex.get(), items, items1);
                          return obj;
                        }
                      }
                      cResult[15] = tmp15;
                      cResult[16] = str;
                      cResult[17] = tmp7;
                      cResult[18] = tmp15;
                      tmp18 = tmp19;
                    }
                    const obj4 = { blur: "none", style: null, onDismiss: null, "aria-hidden": true };
                    class C {
                      constructor() {
                        obj = { opacity: null };
                        obj2 = closure_0(closure_1[7]);
                        items = [-1];
                        items[1] = disappearsOnIndex;
                        items[2] = appearsOnIndex;
                        items1 = [0, 0];
                        items1[2] = opacity;
                        obj.opacity = obj2.interpolate(animatedIndex.get(), items, items1);
                        return obj;
                      }
                    }
                    obj4.onDismiss = tmp6;
                    const tmp17 = num2(tmp(tmp2[8]).Backdrop, obj4);
                    cResult[12] = tmp6;
                    cResult[13] = tmp14;
                    cResult[14] = tmp17;
                    tmp15 = tmp17;
                  }
                }
                let items = [tmp4.container, style, animatedStyle];
                cResult[8] = animatedStyle;
                cResult[9] = style;
                cResult[10] = tmp4.container;
                cResult[11] = items;
                tmp14 = items;
                const tmpResult2 = tmp(tmp2[7]);
              }
            }
          }
        }
        const fn = function c() {
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
        };
        cResult[0] = close;
        cResult[1] = num3;
        cResult[2] = onPress;
        cResult[3] = str;
        cResult[4] = snapToIndex;
        cResult[5] = fn;
        tmp6 = fn;
      }
    : function BottomSheetBackdropComponent(animatedIndex) {
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
        __initData = tmp;
        const bottomSheet = animatedIndex(num[5]).useBottomSheet();
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
        const Gesture = animatedIndex(num[6]).Gesture;
        let obj = animatedIndex(num[5]);
        const tmp2 = animatedIndex;
        const tmp3 = num;
        class I {
          constructor() {
            obj = closure_0(closure_1[7]);
            tmp = obj.runOnJS(closure_10)();
            return;
          }
        }
        const TapResult = Gesture.Tap();
        I.__closure = { runOnJS: animatedIndex(num[7]).runOnJS, handleOnPress: onDismiss };
        I.__workletHash = 1200388032614;
        I.__initData = __initData;
        const obj2 = { runOnJS: animatedIndex(num[7]).runOnJS, handleOnPress: onDismiss };
        const onEndResult = TapResult.onEnd(I);
        class S {
          constructor() {
            obj = { opacity: null };
            obj2 = closure_0(closure_1[7]);
            items = [-1];
            items[1] = c3;
            items[2] = c2;
            items1 = [0, 0];
            items1[2] = c1;
            obj.opacity = obj2.interpolate(animatedIndex.get(), items, items1);
            return obj;
          }
        }
        const obj4 = animatedIndex(num[7]);
        S.__closure = {
          interpolate: animatedIndex(num[7]).interpolate,
          animatedIndex,
          disappearsOnIndex: num3,
          appearsOnIndex: num2,
          opacity: num,
        };
        S.__workletHash = 17214781637254;
        S.__initData = snapToIndex;
        animatedStyle = obj4.useAnimatedStyle(S);
        let items1 = [tmp.container, style, animatedStyle];
        const memo = num2.useMemo(() => {
          const items = [container.container, style, animatedStyle];
          return items;
        }, items1);
        const tmp10 = num3(animatedIndex(num[8]).Backdrop, {
          blur: "none",
          style: memo,
          onDismiss,
          "aria-hidden": true,
        });
        let tmp9Result = tmp10;
        if ("none" !== str) {
          const obj5 = { gesture: onEndResult, children: tmp10 };
          tmp9Result = num3(tmp2(tmp3[6]).GestureDetector, obj5);
        }
        return tmp9Result;
      },
);
