// discord_app/modules/multi_account/native/FadeInOut.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react_mod from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let dependencyMap, set;

let react = react_mod;
const jsx = Fragment.jsx;
const __initData = { code: "function FadeInOutTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let closure_6 = {
  code: "function FadeInOutTsx2(finished){const{runOnJS,handleTransitionFinished}=this.__closure;if(finished){runOnJS(handleTransitionFinished)();}}",
};
const __initData2 = { code: "function FadeInOutTsx3(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let closure_8 = {
  code: "function FadeInOutTsx4(finished){const{runOnJS,handleTransitionFinished}=this.__closure;if(finished){runOnJS(handleTransitionFinished)();}}",
};
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (style, arg1) => {
        let children;
        let duration;
        let first;
        let ref;
        let tmp = dependencyMap;
        let obj = duration(576);
        const cResult = obj.c(10);
        ({ children, duration } = style);
        style = style.style;
        let obj2 = duration(4612);
        const sharedValue = obj2.useSharedValue(0);
        const obj3 = duration(4612);
        let fn = function l() {
          const obj = { opacity: sharedValue.get() };
          return obj;
        };
        fn.__closure = { opacity: sharedValue };
        fn.__workletHash = 8749472415282;
        fn.__initData = __initData;
        const animatedStyle = obj3.useAnimatedStyle(fn);
        dependencyMap = first.useRef(null);
        const obj4 = first;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const fn2 = function _() {
            const current = ref.current;
            if (current != null) {
              current();
            }
          };
          cResult[0] = fn2;
          first = fn2;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === duration) {
          let tmp6;
          if (cResult[2] === sharedValue) {
            tmp6 = cResult[3];
          }
          const imperativeHandle = obj4.useImperativeHandle(arg1, tmp6);
          if (cResult[4] === animatedStyle) {
            let tmp9;
            if (cResult[5] === style) {
              tmp9 = cResult[6];
            }
            if (cResult[7] === children) {
              let tmp10;
              if (cResult[8] === tmp9) {
                tmp10 = cResult[9];
              }
              return tmp10;
            }
            const tmp13 = jsx(sharedValue(4612).View, { style: tmp9, children });
            cResult[7] = children;
            cResult[8] = tmp9;
            cResult[9] = tmp13;
            tmp10 = tmp13;
          }
          const items = [style, animatedStyle];
          cResult[4] = animatedStyle;
          cResult[5] = style;
          cResult[6] = items;
          tmp9 = items;
        }
        const fn3 = function w() {
          let handleTransitionFinished;
          let obj = {
            componentDidAppear() {
              set = sharedValue.set;
              const obj = duration(ref[5]);
              const obj2 = { duration };
              const result = set(obj.withTiming(1, obj2));
            },
            componentDidEnter() {
              set = sharedValue.set;
              const obj = duration(ref[5]);
              const obj2 = { duration };
              const result = set(obj.withTiming(1, obj2));
            },
            componentWillLeave(current) {
              closure_1_2.current = current;
              set = sharedValue.set;
              let obj = duration(closure_2[5]);
              const fn = function t(arg0) {
                const tmp = arg0;
                if (tmp) {
                  const obj = duration(ref[4]);
                  obj.runOnJS(handleTransitionFinished)();
                }
              };
              const obj2 = { duration };
              fn.__closure = { runOnJS: duration(closure_2[4]).runOnJS, handleTransitionFinished };
              fn.__workletHash = 7644958904451;
              fn.__initData = __initData;
              ({ runOnJS: duration(closure_2[4]).runOnJS, handleTransitionFinished });
              const result = set(obj.withTiming(0, obj2, "respect-motion-settings", fn));
            },
          };
          return obj;
        };
        cResult[1] = duration;
        cResult[2] = sharedValue;
        cResult[3] = fn3;
        tmp6 = fn3;
      }
    : (duration, arg1) => {
        let children;
        let closure_3;
        let style;
        duration = duration.duration;
        let ref;
        react = undefined;
        ({ children, style } = duration);
        let obj = duration(ref[4]);
        const sharedValue = obj.useSharedValue(0);
        let obj2 = duration(ref[4]);
        let fn = function h() {
          const obj = { opacity: sharedValue.get() };
          return obj;
        };
        fn.__closure = { opacity: sharedValue };
        fn.__workletHash = 13243381431792;
        fn.__initData = __initData2;
        const animatedStyle = obj2.useAnimatedStyle(fn);
        ref = react.useRef(null);
        const items = [ref];
        react = react.useCallback(() => {
          const current = ref.current;
          if (current != null) {
            current();
          }
        }, items);
        const imperativeHandle = react.useImperativeHandle(arg1, () => {
          let handleTransitionFinished;
          let obj = {
            componentDidAppear() {
              set = sharedValue.set;
              const obj = duration(ref[5]);
              const obj2 = { duration };
              const result = set(obj.withTiming(1, obj2));
            },
            componentDidEnter() {
              set = sharedValue.set;
              const obj = duration(ref[5]);
              const obj2 = { duration };
              const result = set(obj.withTiming(1, obj2));
            },
            componentWillLeave(current) {
              closure_1_2.current = current;
              set = sharedValue.set;
              let obj = duration(ref[5]);
              const fn = function t(arg0) {
                const tmp = arg0;
                if (tmp) {
                  const obj = duration(ref[4]);
                  obj.runOnJS(handleTransitionFinished)();
                }
              };
              const obj2 = { duration };
              fn.__closure = { runOnJS: duration(ref[4]).runOnJS, handleTransitionFinished };
              fn.__workletHash = 14250676490181;
              fn.__initData = __initData;
              ({ runOnJS: duration(ref[4]).runOnJS, handleTransitionFinished });
              const result = set(obj.withTiming(0, obj2, "respect-motion-settings", fn));
            },
          };
          return obj;
        });
        const items1 = [style, animatedStyle];
        return jsx(sharedValue(ref[4]).View, { style: items1, children });
      },
);
let result = size.fileFinishedImporting("modules/multi_account/native/FadeInOut.tsx");

export default forwardRefResult;
