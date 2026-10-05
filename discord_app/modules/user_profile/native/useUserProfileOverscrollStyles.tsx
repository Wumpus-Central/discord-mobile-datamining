// discord_app/modules/user_profile/native/useUserProfileOverscrollStyles.tsx
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let c6 = 1.5;
const __initData = {
  code: "function useUserProfileOverscrollStylesTsx1(){const{position}=this.__closure;return position.get()<=0;}",
};
const __initData2 = {
  code: "function useUserProfileOverscrollStylesTsx2(){const{isNegativeScrollPosition,position}=this.__closure;const transform=isNegativeScrollPosition.get()?[{translateY:position.get()}]:[];return{transform:transform};}",
};
const __initData3 = {
  code: "function useUserProfileOverscrollStylesTsx3(){const{interpolate,position,minScrollPosition,SCALE_FACTOR,translateOnScale,isNegativeScrollPosition}=this.__closure;const scale=interpolate(position.get(),[minScrollPosition,0],[SCALE_FACTOR,1]);const translateY=interpolate(position.get(),[minScrollPosition,0],[translateOnScale,0]);const transform_0=isNegativeScrollPosition.get()?[{scale:scale},{translateY:translateY}]:[];return{transform:transform_0};}",
};
const __initData4 = {
  code: "function useUserProfileOverscrollStylesTsx4(){const{isNegativeScrollPosition,position,coefficient}=this.__closure;const transform_1=isNegativeScrollPosition.get()?[{translateY:position.get()*(1/coefficient)}]:[];return{transform:transform_1};}",
};
const __initData5 = {
  code: "function useUserProfileOverscrollStylesTsx5(){const{clamp,interpolate,position,windowHeight,coefficient}=this.__closure;return{blurAmount:clamp(interpolate(position.get(),[0,-windowHeight*coefficient],[0,1]),0,1)};}",
};
const __initData6 = {
  code: "function useUserProfileOverscrollStylesTsx6(){const{position}=this.__closure;return position.get()<0;}",
};
const __initData7 = {
  code: "function useUserProfileOverscrollStylesTsx7(result,previous){const{runOnJS,setShowBlur}=this.__closure;return result!==previous&&runOnJS(setShowBlur)(result);}",
};
const __initData8 = {
  code: "function useUserProfileOverscrollStylesTsx8(){const{position}=this.__closure;return position.get()<=0;}",
};
const __initData9 = {
  code: "function useUserProfileOverscrollStylesTsx9(){const{isNegativeScrollPosition,position}=this.__closure;const transform=isNegativeScrollPosition.get()?[{translateY:position.get()}]:[];return{transform:transform};}",
};
const __initData10 = {
  code: "function useUserProfileOverscrollStylesTsx10(){const{interpolate,position,minScrollPosition,SCALE_FACTOR,translateOnScale,isNegativeScrollPosition}=this.__closure;const scale=interpolate(position.get(),[minScrollPosition,0],[SCALE_FACTOR,1]);const translateY=interpolate(position.get(),[minScrollPosition,0],[translateOnScale,0]);const transform_0=isNegativeScrollPosition.get()?[{scale:scale},{translateY:translateY}]:[];return{transform:transform_0};}",
};
const __initData11 = {
  code: "function useUserProfileOverscrollStylesTsx11(){const{isNegativeScrollPosition,position,coefficient}=this.__closure;const transform_1=isNegativeScrollPosition.get()?[{translateY:position.get()*(1/coefficient)}]:[];return{transform:transform_1};}",
};
const __initData12 = {
  code: "function useUserProfileOverscrollStylesTsx12(){const{clamp,interpolate,position,windowHeight,coefficient}=this.__closure;return{blurAmount:clamp(interpolate(position.get(),[0,-windowHeight*coefficient],[0,1]),0,1)};}",
};
const __initData13 = {
  code: "function useUserProfileOverscrollStylesTsx13(){const{position}=this.__closure;return position.get()<0;}",
};
const __initData14 = {
  code: "function useUserProfileOverscrollStylesTsx14(result,previous){const{runOnJS,setShowBlur}=this.__closure;return result!==previous&&runOnJS(setShowBlur)(result);}",
};
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let bannerHeight;
      let closure_3;
      let closure_6;
      let derivedValue;
      let height;
      let scrollPosition;
      let stateFromStores;
      let tmp17;
      let tmp18;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp = height;
      let obj = height(scrollPosition[4]);
      const cResult = obj.c(9);
      ({ scrollPosition, bannerHeight } = arg0);
      height = stateFromStores(scrollPosition[5])().height;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [derivedValue];
        const fn = function v() {
          let num = 1.5;
          if (derivedValue.useReducedMotion) {
            num = 1;
          }
          return num;
        };
        let items1 = [];
        let num = 0;
        cResult[0] = items;
        cResult[1] = fn;
        cResult[2] = items1;
        tmp4 = items;
        tmp5 = fn;
        tmp6 = items1;
      } else {
        [tmp4, tmp5, tmp6] = cResult;
      }
      const tmpResult = tmp(scrollPosition[6]);
      stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5, tmp6);
      const tmpResult8 = tmp(scrollPosition[7]);
      if (scrollPosition == null) {
        scrollPosition = tmpResult8.useSharedValue(0);
      }
      _slicedToArray = tmp9;
      const result = 0.125 * bannerHeight;
      react = result;
      const fn2 = function b() {
        return scrollPosition.get() <= 0;
      };
      fn2.__closure = { position: scrollPosition };
      fn2.__workletHash = 11756661427383;
      fn2.__initData = __initData;
      const tmpResult9 = tmp(scrollPosition[7]);
      derivedValue = tmpResult9.useDerivedValue(fn2);
      const fn3 = function x() {
        let transform;
        if (derivedValue.get()) {
          const items = [{ translateY: scrollPosition.get() }];
          transform = items;
          const obj = { translateY: scrollPosition.get() };
        } else {
          transform = [];
        }
        return { transform };
      };
      fn3.__closure = { isNegativeScrollPosition: derivedValue, position: scrollPosition };
      fn3.__workletHash = 2642279626533;
      fn3.__initData = __initData2;
      const tmpResult10 = tmp(scrollPosition[7]);
      const animatedStyle = tmpResult10.useAnimatedStyle(fn3);
      const tmpResult11 = tmp(scrollPosition[7]);
      class T {
        constructor() {
          let transform;
          const items = [closure_3, 0];
          const items1 = [c6, 1];
          const obj = ReanimatedRexport;
          const items2 = [closure_3, 0];
          const items3 = [react, 0];
          const interpolateResult = obj.interpolate(scrollPosition.get(), items, items1);
          const obj2 = ReanimatedRexport;
          const interpolateResult1 = obj2.interpolate(scrollPosition.get(), items2, items3);
          if (derivedValue.get()) {
            const items4 = [{ scale: interpolateResult }];
            const obj3 = { scale: interpolateResult };
            const obj4 = { translateY: interpolateResult1 };
            items4[1] = obj4;
            transform = items4;
          } else {
            transform = [];
          }
          return { transform };
        }
      }
      let obj2 = {
        interpolate: tmp(tmp2[7]).interpolate,
        position: scrollPosition,
        minScrollPosition: tmp9,
        SCALE_FACTOR,
        translateOnScale: result,
        isNegativeScrollPosition: derivedValue,
      };
      T.__closure = obj2;
      T.__workletHash = 13680082246548;
      T.__initData = __initData3;
      const animatedStyle1 = tmpResult11.useAnimatedStyle(T);
      const tmpResult12 = tmp(scrollPosition[7]);
      class N {
        constructor() {
          let transform;
          if (derivedValue.get()) {
            const items = [{ translateY: scrollPosition.get() * (1 / stateFromStores) }];
            transform = items;
            const obj = { translateY: scrollPosition.get() * (1 / stateFromStores) };
          } else {
            transform = [];
          }
          return { transform };
        }
      }
      N.__closure = { isNegativeScrollPosition: derivedValue, position: scrollPosition, coefficient: stateFromStores };
      N.__workletHash = 8233067051514;
      N.__initData = __initData4;
      const animatedStyle2 = tmpResult12.useAnimatedStyle(N);
      const tmpResult13 = tmp(scrollPosition[7]);
      class D {
        constructor() {
          let clamp;
          let items;
          let obj2;
          const obj = { blurAmount: clamp(obj2.interpolate(scrollPosition.get(), items, [0, 1]), 0, 1) };
          clamp = ReanimatedRexport.clamp;
          ReanimatedRexport;
          items = [0, -height * stateFromStores];
          obj2 = ReanimatedRexport;
          return obj;
        }
      }
      let obj3 = {
        clamp: tmp(tmp2[7]).clamp,
        interpolate: tmp(tmp2[7]).interpolate,
        position: scrollPosition,
        windowHeight: height,
        coefficient: stateFromStores,
      };
      D.__closure = obj3;
      D.__workletHash = 849678936428;
      D.__initData = __initData5;
      const animatedProps = tmpResult13.useAnimatedProps(D);
      [tmp17, tmp18] = react.useState(scrollPosition.get() < 0);
      SCALE_FACTOR = tmp18;
      _slicedToArray(react.useState(scrollPosition.get() < 0), 2);
      const tmpResult14 = tmp(scrollPosition[7]);
      class U {
        constructor() {
          return scrollPosition.get() < 0;
        }
      }
      U.__closure = { position: scrollPosition };
      U.__workletHash = 3867620644429;
      U.__initData = __initData6;
      class Y {
        constructor(arg0, arg1) {
          let tmp = arg0 !== arg1;
          if (tmp) {
            const obj = ReanimatedRexport;
            tmp = obj.runOnJS(SCALE_FACTOR)(arg0);
          }
          return tmp;
        }
      }
      let obj4 = { runOnJS: tmp(tmp2[7]).runOnJS, setShowBlur: tmp18 };
      Y.__closure = obj4;
      Y.__workletHash = 6548835412849;
      Y.__initData = __initData7;
      const animatedReaction = tmpResult14.useAnimatedReaction(U, Y);
      if (cResult[3] === animatedStyle) {
        if (cResult[4] === animatedStyle1) {
          if (cResult[5] === animatedProps) {
            if (cResult[6] === animatedStyle2) {
              let tmp20;
              if (cResult[7] === tmp17) {
                tmp20 = cResult[8];
              }
              return tmp20;
            }
          }
        }
      }
      const obj5 = {
        bannerAnimatedStyle: animatedStyle,
        bannerImageAnimatedStyle: animatedStyle1,
        contentAnimatedStyle: animatedStyle2,
        blurAnimatedProps: animatedProps,
        showBlur: tmp17,
      };
      cResult[3] = animatedStyle;
      cResult[4] = animatedStyle1;
      cResult[5] = animatedProps;
      cResult[6] = animatedStyle2;
      cResult[7] = tmp17;
      cResult[8] = obj5;
      tmp20 = obj5;
    }
  : (arg0) => {
      let bannerHeight;
      let c4;
      let closure_3;
      let closure_6;
      let scrollPosition;
      ({ scrollPosition, bannerHeight } = arg0);
      let stateFromStores;
      scrollPosition = undefined;
      _slicedToArray = undefined;
      react = undefined;
      let derivedValue;
      SCALE_FACTOR = undefined;
      let tmp = scrollPosition;
      const height = stateFromStores(scrollPosition[5])().height;
      let obj = height(scrollPosition[6]);
      let items = [derivedValue];
      stateFromStores = obj.useStateFromStores(items, () => {
        let num = 1.5;
        if (derivedValue.useReducedMotion) {
          num = 1;
        }
        return num;
      }, []);
      let obj2 = height(scrollPosition[7]);
      if (scrollPosition == null) {
        scrollPosition = obj2.useSharedValue(0);
      }
      _slicedToArray = tmp4;
      const result = 0.125 * bannerHeight;
      react = result;
      const fn = function u() {
        return scrollPosition.get() <= 0;
      };
      fn.__closure = { position: scrollPosition };
      fn.__workletHash = 12159392529150;
      fn.__initData = __initData8;
      const tmp2Result = height(tmp[7]);
      derivedValue = tmp2Result.useDerivedValue(fn);
      const fn2 = function _() {
        let transform;
        if (derivedValue.get()) {
          const items = [{ translateY: scrollPosition.get() }];
          transform = items;
          const obj = { translateY: scrollPosition.get() };
        } else {
          transform = [];
        }
        return { transform };
      };
      fn2.__closure = { isNegativeScrollPosition: derivedValue, position: scrollPosition };
      fn2.__workletHash = 11554208783982;
      fn2.__initData = __initData9;
      const tmp2Result6 = height(tmp[7]);
      const bannerAnimatedStyle = tmp2Result6.useAnimatedStyle(fn2);
      const fn3 = function f() {
        let transform;
        const items = [closure_3, 0];
        const items1 = [c6, 1];
        const obj = ReanimatedRexport;
        const items2 = [closure_3, 0];
        const items3 = [c4, 0];
        const interpolateResult = obj.interpolate(scrollPosition.get(), items, items1);
        const obj2 = ReanimatedRexport;
        const interpolateResult1 = obj2.interpolate(scrollPosition.get(), items2, items3);
        if (derivedValue.get()) {
          const items4 = [{ scale: interpolateResult }];
          const obj3 = { scale: interpolateResult };
          const obj4 = { translateY: interpolateResult1 };
          items4[1] = obj4;
          transform = items4;
        } else {
          transform = [];
        }
        return { transform };
      };
      const tmp2Result7 = height(tmp[7]);
      let obj3 = {
        interpolate: tmp2(tmp[7]).interpolate,
        position: scrollPosition,
        minScrollPosition: tmp4,
        SCALE_FACTOR,
        translateOnScale: result,
        isNegativeScrollPosition: derivedValue,
      };
      fn3.__closure = obj3;
      fn3.__workletHash = 17180041354278;
      fn3.__initData = __initData10;
      const bannerImageAnimatedStyle = tmp2Result7.useAnimatedStyle(fn3);
      const tmp2Result8 = height(tmp[7]);
      class S {
        constructor() {
          let transform;
          if (derivedValue.get()) {
            const items = [{ translateY: scrollPosition.get() * (1 / stateFromStores) }];
            transform = items;
            const obj = { translateY: scrollPosition.get() * (1 / stateFromStores) };
          } else {
            transform = [];
          }
          return { transform };
        }
      }
      S.__closure = { isNegativeScrollPosition: derivedValue, position: scrollPosition, coefficient: stateFromStores };
      S.__workletHash = 1631998179662;
      S.__initData = __initData11;
      const contentAnimatedStyle = tmp2Result8.useAnimatedStyle(S);
      const fn4 = function p() {
        let clamp;
        let items;
        let obj2;
        const obj = { blurAmount: clamp(obj2.interpolate(scrollPosition.get(), items, [0, 1]), 0, 1) };
        clamp = ReanimatedRexport.clamp;
        ReanimatedRexport;
        items = [0, -height * stateFromStores];
        obj2 = ReanimatedRexport;
        return obj;
      };
      const tmp2Result9 = height(tmp[7]);
      let obj4 = {
        clamp: tmp2(tmp[7]).clamp,
        interpolate: tmp2(tmp[7]).interpolate,
        position: scrollPosition,
        windowHeight: height,
        coefficient: stateFromStores,
      };
      fn4.__closure = obj4;
      fn4.__workletHash = 7547059253594;
      fn4.__initData = __initData12;
      const blurAnimatedProps = tmp2Result9.useAnimatedProps(fn4);
      const tmp11 = _slicedToArray(react.useState(scrollPosition.get() < 0), 2);
      SCALE_FACTOR = tmp13;
      const showBlur = tmp11[0];
      const fn5 = function b() {
        return scrollPosition.get() < 0;
      };
      fn5.__closure = { position: scrollPosition };
      fn5.__workletHash = 15655765871577;
      fn5.__initData = __initData13;
      const tmp2Result10 = height(tmp[7]);
      class H {
        constructor(arg0, arg1) {
          let tmp = arg0 !== arg1;
          if (tmp) {
            const obj = ReanimatedRexport;
            tmp = obj.runOnJS(closure_6)(arg0);
          }
          return tmp;
        }
      }
      H.__closure = { runOnJS: height(tmp[7]).runOnJS, setShowBlur: tmp11[1] };
      H.__workletHash = 5835025502051;
      H.__initData = __initData14;
      ({ runOnJS: height(tmp[7]).runOnJS, setShowBlur: tmp11[1] });
      const animatedReaction = tmp2Result10.useAnimatedReaction(fn5, H);
      return { bannerAnimatedStyle, bannerImageAnimatedStyle, contentAnimatedStyle, blurAnimatedProps, showBlur };
    };
let result = size.fileFinishedImporting("modules/user_profile/native/useUserProfileOverscrollStyles.tsx");

export default tmp2;
