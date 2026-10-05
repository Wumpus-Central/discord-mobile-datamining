// discord_app/design/components/Sheet/native/BottomSheetBackdrop.native.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
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
let memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (animatedIndex) => {
        let appearsOnIndex;
        let disappearsOnIndex;
        let onPress;
        let opacity;
        let pressBehavior;
        const tmp = animatedIndex;
        let obj = animatedIndex(onPress[4]);
        const cResult = obj.c(19);
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
        const tmpResult = tmp(tmp2[5]);
        const bottomSheet = tmpResult.useBottomSheet();
        const snapToIndex = bottomSheet.snapToIndex;
        const close = bottomSheet.close;
        if (cResult[0] === close) {
          if (cResult[1] === num3) {
            if (cResult[2] === onPress) {
              if (cResult[3] === str) {
                let tmp6;
                let tmp7;
                if (cResult[4] === snapToIndex) {
                  tmp6 = cResult[5];
                }
                closure_8 = tmp6;
                if (cResult[6] !== tmp6) {
                  const Gesture = tmp(tmp2[6]).Gesture;
                  Gesture.Tap();
                  const fn2 = function b() {
                    const obj = ReanimatedRexport;
                    obj.runOnJS(closure_8)();
                  };
                  let obj2 = { runOnJS: tmp(onPress[7]).runOnJS, handleOnPress: tmp6 };
                  class G {
                    constructor() {
                      let items;
                      let items1;
                      let obj2;
                      const obj = { opacity: obj2.interpolate(animatedIndex.get(), items, items1) };
                      items = [-1, num3, num2];
                      items1 = [0, 0, num];
                      obj2 = ReanimatedRexport;
                      return obj;
                    }
                  }
                  fn2.__closure = obj2;
                  fn2.__workletHash = 3995467602852;
                  fn2.__initData = str;
                  const tmp9Result = tmp9(fn2);
                  cResult[6] = tmp6;
                  cResult[7] = tmp9Result;
                  tmp7 = tmp9Result;
                } else {
                  tmp7 = cResult[7];
                }
                const tmpResult2 = tmp(onPress[7]);
                class G {
                  constructor() {
                    let items;
                    let items1;
                    let obj2;
                    const obj = { opacity: obj2.interpolate(animatedIndex.get(), items, items1) };
                    items = [-1, num3, num2];
                    items1 = [0, 0, num];
                    obj2 = ReanimatedRexport;
                    return obj;
                  }
                }
                const useAnimatedStyle = tmpResult2.useAnimatedStyle;
                G.__closure = {
                  interpolate: tmp(onPress[7]).interpolate,
                  animatedIndex,
                  disappearsOnIndex: num3,
                  appearsOnIndex: num2,
                  opacity: num,
                };
                G.__workletHash = 1140766381376;
                G.__initData = snapToIndex;
                const obj3 = {
                  interpolate: tmp(onPress[7]).interpolate,
                  animatedIndex,
                  disappearsOnIndex: num3,
                  appearsOnIndex: num2,
                  opacity: num,
                };
                const animatedStyle = useAnimatedStyle(G);
                if (cResult[8] === animatedStyle) {
                  if (cResult[9] === style) {
                    let tmp15;
                    if (cResult[10] === tmp4.container) {
                      tmp15 = cResult[11];
                    }
                    if (cResult[12] === tmp6) {
                      let tmp16;
                      if (cResult[13] === tmp15) {
                        tmp16 = cResult[14];
                      }
                      if (cResult[15] === tmp16) {
                        if (cResult[16] === str) {
                          let tmp19;
                          if (cResult[17] === tmp7) {
                            tmp19 = cResult[18];
                          }
                          return tmp19;
                        }
                      }
                      class G {
                        constructor() {
                          let items;
                          let items1;
                          let obj2;
                          const obj = { opacity: obj2.interpolate(animatedIndex.get(), items, items1) };
                          items = [-1, num3, num2];
                          items1 = [0, 0, num];
                          obj2 = ReanimatedRexport;
                          return obj;
                        }
                      }
                      cResult[15] = tmp16;
                      cResult[16] = str;
                      cResult[17] = tmp7;
                      cResult[18] = tmp16;
                      tmp19 = tmp20;
                    }
                    const obj4 = { blur: "none", style: null, onDismiss: tmp6, "aria-hidden": true };
                    class G {
                      constructor() {
                        let items;
                        let items1;
                        let obj2;
                        const obj = { opacity: obj2.interpolate(animatedIndex.get(), items, items1) };
                        items = [-1, num3, num2];
                        items1 = [0, 0, num];
                        obj2 = ReanimatedRexport;
                        return obj;
                      }
                    }
                    const tmp18 = num2(tmp(onPress[8]).Backdrop, obj4);
                    cResult[12] = tmp6;
                    cResult[13] = tmp15;
                    cResult[14] = tmp18;
                    tmp16 = tmp18;
                  }
                }
                let items = [tmp4.container, style, animatedStyle];
                cResult[8] = animatedStyle;
                cResult[9] = style;
                cResult[10] = tmp4.container;
                cResult[11] = items;
                tmp15 = items;
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
          } else if ("collapse" === str) {
            snapToIndex(num3);
          } else if (typeof str === "number") {
            snapToIndex(str);
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
    : (animatedIndex) => {
        let callback;
        let container;
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
        let obj = animatedIndex(num[5]);
        const bottomSheet = obj.useBottomSheet();
        const snapToIndex = bottomSheet.snapToIndex;
        const close = bottomSheet.close;
        let items = [snapToIndex, close, num3, str, onPress];
        const onDismiss = num2.useCallback(() => {
          if (onPress != null) {
            tmp();
          }
          if ("close" === str) {
            close();
          } else if ("collapse" === str) {
            snapToIndex(num3);
          } else if (typeof str === "number") {
            snapToIndex(str);
          }
        }, items);
        const Gesture = animatedIndex(num[6]).Gesture;
        const TapResult = Gesture.Tap();
        const tmp2 = animatedIndex;
        const tmp3 = num;
        class I {
          constructor() {
            const obj = ReanimatedRexport;
            obj.runOnJS(callback)();
          }
        }
        let obj2 = { runOnJS: animatedIndex(num[7]).runOnJS, handleOnPress: onDismiss };
        I.__closure = obj2;
        I.__workletHash = 1200388032614;
        I.__initData = __initData;
        const fn = function y() {
          let items;
          let items1;
          let obj2;
          const obj = { opacity: obj2.interpolate(animatedIndex.get(), items, items1) };
          items = [-1, num3, num2];
          items1 = [0, 0, num];
          obj2 = ReanimatedRexport;
          return obj;
        };
        const onEndResult = TapResult.onEnd(I);
        const obj4 = animatedIndex(num[7]);
        fn.__closure = {
          interpolate: animatedIndex(num[7]).interpolate,
          animatedIndex,
          disappearsOnIndex: num3,
          appearsOnIndex: num2,
          opacity: num,
        };
        fn.__workletHash = 17214781637254;
        fn.__initData = snapToIndex;
        ({
          interpolate: animatedIndex(num[7]).interpolate,
          animatedIndex,
          disappearsOnIndex: num3,
          appearsOnIndex: num2,
          opacity: num,
        });
        animatedStyle = obj4.useAnimatedStyle(fn);
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
        const tmp9 = num3;
        if ("none" !== str) {
          const obj5 = { gesture: onEndResult, children: tmp10 };
          tmp9Result = tmp9(tmp2(tmp3[6]).GestureDetector, obj5);
        }
        return tmp9Result;
      },
);
const result = size.fileFinishedImporting("design/components/Sheet/native/BottomSheetBackdrop.native.tsx");

export const BottomSheetBackdrop = memoResult;
