// discord_app/design/components/AnimatedEnterExitItem/native/AnimatedEnterExitItem.tsx
import react2 from "../../../../../_runtime/00019_react.js";
import react3 from "../../../../../_runtime/00576_react.js";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const react = react2;
let flag, tmp10, tmp2, tmp7Result;

let c3;
let closure_4;
function renderAnimatedItem(key, arg1, state, cleanUp) {
  const merged = Object.assign(arg1);
  return <closure_12 key={key} state={state} cleanUp={cleanUp} />;
}
({ Fragment: c3, jsx: closure_4 } = Fragment);
const createElement = react2.createElement;
let closure_6 = {
  code: "function AnimatedEnterExitItemTsx1(){const{useReducedMotion,shouldAnimate,state,TransitionStates,exiting,visible,runOnJS,cleanUp,entering}=this.__closure;var _shouldAnimate;if(useReducedMotion){return{};}if(((_shouldAnimate=shouldAnimate)===null||_shouldAnimate===void 0?void 0:_shouldAnimate.get())===false){return{};}if(state===TransitionStates.YEETED&&exiting!=null){return exiting(visible.get(),function(finished){if(finished){runOnJS(cleanUp)();}});}if(entering!=null){return entering(visible.get());}return{};}",
};
let __initData = {
  code: "function AnimatedEnterExitItemTsx2(){const{state,TransitionStates,visible,hasExiting,useReducedMotion}=this.__closure;return state===TransitionStates.YEETED&&visible.get()===0&&(!hasExiting||useReducedMotion);}",
};
const __initData2 = {
  code: "function AnimatedEnterExitItemTsx3(hasExited,previous){const{runOnJS,cleanUp}=this.__closure;if(!hasExited||hasExited===previous){return;}runOnJS(cleanUp)();}",
};
const __initData3 = {
  code: "function AnimatedEnterExitItemTsx4(){const{useReducedMotion,shouldAnimate,state,TransitionStates,exiting,visible,runOnJS,cleanUp,entering}=this.__closure;var _shouldAnimate;if(useReducedMotion)return{};if(((_shouldAnimate=shouldAnimate)===null||_shouldAnimate===void 0?void 0:_shouldAnimate.get())===false)return{};if(state===TransitionStates.YEETED&&exiting!=null){return exiting(visible.get(),function(finished){if(finished){runOnJS(cleanUp)();}});}if(entering!=null){return entering(visible.get());}return{};}",
};
const __initData4 = {
  code: "function AnimatedEnterExitItemTsx5(){const{state,TransitionStates,visible,hasExiting,useReducedMotion}=this.__closure;return state===TransitionStates.YEETED&&visible.get()===0&&(!hasExiting||useReducedMotion);}",
};
const __initData5 = {
  code: "function AnimatedEnterExitItemTsx6(hasExited,previous){const{runOnJS,cleanUp}=this.__closure;if(!hasExited||hasExited===previous)return;runOnJS(cleanUp)();}",
};
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (entering) => {
      let closure_7;
      let item;
      let renderItem;
      let shouldAnimate;
      let obj = shouldAnimate(entering[3]);
      const cResult = obj.c(10);
      ({ renderItem, item, shouldAnimate } = entering);
      entering = entering.entering;
      const exiting = entering.exiting;
      const state = entering.state;
      const cleanUp = entering.cleanUp;
      const useReducedMotion = entering.useReducedMotion;
      let tmp4 = shouldAnimate(entering[4]);
      const useSharedValue = tmp4.useSharedValue;
      let num = 0;
      if (state === shouldAnimate(entering[5]).TransitionStates.MOUNTED) {
        num = 1;
      }
      const sharedValue = useSharedValue(num);
      if (cResult[0] === state) {
        let tmp6;
        let tmp7;
        if (cResult[1] === sharedValue) {
          tmp6 = cResult[2];
          tmp7 = cResult[3];
        }
        const tmp8 = exiting;
        const effect = exiting.useEffect(tmp6, tmp7);
        const tmpResult = shouldAnimate(entering[4]);
        class O {
          constructor() {
            tmp = useReducedMotion;
            if (!tmp) {
              obj = shouldAnimate;
              tmp2 = null;
              value = undefined;
              if (shouldAnimate != null) {
                value = obj.get();
              }
              flag = false;
              if (false !== value) {
                tmp4 = state;
                tmp5 = closure_0;
                tmp6 = closure_1;
                if (state === closure_0(closure_1[5]).TransitionStates.YEETED) {
                  if (null != exiting) {
                    tmp10 = closure_6;
                    tmp7Result = tmp7(closure_6.get(), (arg0) => {
                      const tmp = arg0;
                      if (tmp) {
                        const obj = shouldAnimate(entering[4]);
                        obj.runOnJS(cleanUp)();
                      }
                    });
                  }
                }
                if (null != entering) {
                  tmp9 = closure_6;
                  tmp7Result = tmp8(closure_6.get());
                } else {
                  tmp7Result = {};
                }
              }
              return {};
            }
            return;
          }
        }
        const useAnimatedStyle = tmpResult.useAnimatedStyle;
        O.__closure = {
          useReducedMotion,
          shouldAnimate,
          state,
          TransitionStates: shouldAnimate(entering[5]).TransitionStates,
          exiting,
          visible: sharedValue,
          runOnJS: shouldAnimate(entering[4]).runOnJS,
          cleanUp,
          entering,
        };
        O.__workletHash = 14013247946914;
        O.__initData = sharedValue;
        const obj2 = {
          useReducedMotion,
          shouldAnimate,
          state,
          TransitionStates: shouldAnimate(entering[5]).TransitionStates,
          exiting,
          visible: sharedValue,
          runOnJS: shouldAnimate(entering[4]).runOnJS,
          cleanUp,
          entering,
        };
        const animatedStyle = useAnimatedStyle(O);
        __initData = tmp14;
        const tmpResult2 = shouldAnimate(entering[4]);
        class M {
          constructor() {
            let tmp = state === native.TransitionStates.YEETED && 0 === sharedValue.get();
            if (tmp) {
              let tmp4 = !closure_7;
              if (closure_7) {
                tmp4 = useReducedMotion;
              }
              tmp = tmp4;
            }
            return tmp;
          }
        }
        const useAnimatedReaction = tmpResult2.useAnimatedReaction;
        M.__closure = {
          state,
          TransitionStates: shouldAnimate(entering[5]).TransitionStates,
          visible: sharedValue,
          hasExiting: null != exiting,
          useReducedMotion,
        };
        M.__workletHash = 11984384474891;
        M.__initData = __initData;
        const obj3 = {
          state,
          TransitionStates: shouldAnimate(entering[5]).TransitionStates,
          visible: sharedValue,
          hasExiting: null != exiting,
          useReducedMotion,
        };
        class I {
          constructor(arg0, arg1) {
            const tmp = arg0 && arg0 !== arg1;
            if (tmp) {
              const obj = ReanimatedRexport;
              obj.runOnJS(cleanUp)();
            }
          }
        }
        I.__closure = { runOnJS: shouldAnimate(entering[4]).runOnJS, cleanUp };
        I.__workletHash = 13577925153461;
        I.__initData = __initData2;
        const obj4 = { runOnJS: shouldAnimate(entering[4]).runOnJS, cleanUp };
        const animatedReaction = useAnimatedReaction(M, I);
        if (cResult[4] === animatedStyle) {
          if (cResult[5] === item) {
            let tmp19;
            let tmp21;
            if (cResult[6] === renderItem) {
              tmp19 = cResult[7];
            }
            if (cResult[8] !== tmp19) {
              class O {
                constructor() {
                  tmp = useReducedMotion;
                  if (!tmp) {
                    obj = shouldAnimate;
                    tmp2 = null;
                    value = undefined;
                    if (shouldAnimate != null) {
                      value = obj.get();
                    }
                    flag = false;
                    if (false !== value) {
                      tmp4 = state;
                      tmp5 = closure_0;
                      tmp6 = closure_1;
                      if (state === closure_0(closure_1[5]).TransitionStates.YEETED) {
                        if (null != exiting) {
                          tmp10 = closure_6;
                          tmp7Result = tmp7(closure_6.get(), (arg0) => {
                            const tmp = arg0;
                            if (tmp) {
                              const obj = shouldAnimate(entering[4]);
                              obj.runOnJS(cleanUp)();
                            }
                          });
                        }
                      }
                      if (null != entering) {
                        tmp9 = closure_6;
                        tmp7Result = tmp8(closure_6.get());
                      } else {
                        tmp7Result = {};
                      }
                    }
                    return {};
                  }
                  return;
                }
              }
              cResult[8] = tmp19;
              cResult[9] = tmp24;
              tmp21 = tmp24;
            } else {
              tmp21 = cResult[9];
            }
            return tmp21;
          }
        }
        const renderItemResult = renderItem(item, animatedStyle);
        cResult[4] = animatedStyle;
        cResult[5] = item;
        cResult[6] = renderItem;
        cResult[7] = renderItemResult;
        tmp19 = renderItemResult;
      }
      const fn = function u() {
        if (state === native.TransitionStates.YEETED) {
          const result = sharedValue.set(0);
        } else {
          const result1 = sharedValue.set(1);
        }
      };
      const items = [state, sharedValue];
      cResult[0] = state;
      cResult[1] = sharedValue;
      cResult[2] = fn;
      tmp7 = items;
      tmp6 = fn;
    }
  : (shouldAnimate) => {
      let item;
      let renderItem;
      shouldAnimate = shouldAnimate.shouldAnimate;
      const entering = shouldAnimate.entering;
      const exiting = shouldAnimate.exiting;
      const state = shouldAnimate.state;
      const cleanUp = shouldAnimate.cleanUp;
      const useReducedMotion = shouldAnimate.useReducedMotion;
      let sharedValue;
      let closure_7;
      let tmp = shouldAnimate;
      ({ renderItem, item } = shouldAnimate);
      const useSharedValue = shouldAnimate(entering[4]).useSharedValue;
      let num = 0;
      shouldAnimate(entering[4]);
      if (state === shouldAnimate(entering[5]).TransitionStates.MOUNTED) {
        num = 1;
      }
      sharedValue = useSharedValue(num);
      const items = [state, sharedValue];
      const effect = exiting.useEffect(() => {
        if (state === native.TransitionStates.YEETED) {
          const result = sharedValue.set(0);
        } else {
          const result1 = sharedValue.set(1);
        }
      }, items);
      const fn = function v() {
        if (!useReducedMotion) {
          let value;
          if (shouldAnimate != null) {
            value = shouldAnimate.get();
          }
          if (false !== value) {
            if (state === native.TransitionStates.YEETED) {
              if (null != exiting) {
                tmp7(sharedValue.get(), (arg0) => {
                  const tmp = arg0;
                  if (tmp) {
                    const obj = shouldAnimate(entering[4]);
                    obj.runOnJS(cleanUp)();
                  }
                });
              }
            }
            if (null != entering) {
              tmp8(sharedValue.get());
            }
          }
          return {};
        }
      };
      const tmpResult = tmp(entering[4]);
      let obj = {
        useReducedMotion,
        shouldAnimate,
        state,
        TransitionStates: tmp(tmp2[5]).TransitionStates,
        exiting,
        visible: sharedValue,
        runOnJS: tmp(tmp2[4]).runOnJS,
        cleanUp,
        entering,
      };
      fn.__closure = obj;
      fn.__workletHash = 15718564228231;
      fn.__initData = __initData3;
      const tmp7 = null != exiting;
      closure_7 = tmp7;
      const animatedStyle = tmpResult.useAnimatedStyle(fn);
      const fn2 = function b() {
        let tmp = state === native.TransitionStates.YEETED && 0 === sharedValue.get();
        if (tmp) {
          let tmp4 = !closure_7;
          if (closure_7) {
            tmp4 = useReducedMotion;
          }
          tmp = tmp4;
        }
        return tmp;
      };
      const useAnimatedReaction = tmp(entering[4]).useAnimatedReaction;
      const tmpResult2 = tmp(entering[4]);
      fn2.__closure = {
        state,
        TransitionStates: tmp(entering[5]).TransitionStates,
        visible: sharedValue,
        hasExiting: tmp7,
        useReducedMotion,
      };
      fn2.__workletHash = 10212721541996;
      fn2.__initData = __initData4;
      ({
        state,
        TransitionStates: tmp(entering[5]).TransitionStates,
        visible: sharedValue,
        hasExiting: tmp7,
        useReducedMotion,
      });
      class A {
        constructor(arg0, arg1) {
          const tmp = arg0 && arg0 !== arg1;
          if (tmp) {
            const obj = ReanimatedRexport;
            obj.runOnJS(cleanUp)();
          }
        }
      }
      A.__closure = { runOnJS: tmp(entering[4]).runOnJS, cleanUp };
      A.__workletHash = 16078328777782;
      A.__initData = __initData5;
      ({ runOnJS: tmp(entering[4]).runOnJS, cleanUp });
      const animatedReaction = useAnimatedReaction(fn2, A);
      const obj4 = { children: renderItem(item, animatedStyle) };
      return cleanUp(state, obj4);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let entering;
      let exiting;
      let item;
      let renderItem;
      let shouldAnimate;
      let tmp6;
      let useReducedMotion;
      const obj = react3;
      const cResult = obj.c(9);
      ({ useReducedMotion, shouldAnimate, entering, exiting, item, renderItem } = arg0);
      let tmp4;
      if (null != item) {
        if (cResult[0] === entering) {
          if (cResult[1] === exiting) {
            if (cResult[2] === item) {
              if (cResult[3] === renderItem) {
                if (cResult[4] === shouldAnimate) {
                  let tmp5;
                  if (cResult[5] === useReducedMotion) {
                    tmp5 = cResult[6];
                  }
                  tmp4 = tmp5;
                }
              }
            }
          }
        }
        const obj2 = { shouldAnimate, entering, exiting, renderItem, item, useReducedMotion };
        cResult[0] = entering;
        cResult[1] = exiting;
        cResult[2] = item;
        cResult[3] = renderItem;
        cResult[4] = shouldAnimate;
        cResult[5] = useReducedMotion;
        cResult[6] = obj2;
        tmp5 = obj2;
      }
      if (cResult[7] !== tmp4) {
        const obj3 = { item: tmp4, renderItem: renderAnimatedItem };
        const tmp9 = React3(native.TransitionItem, obj3);
        cResult[7] = tmp4;
        cResult[8] = tmp9;
        tmp6 = tmp9;
      } else {
        tmp6 = cResult[8];
      }
      return tmp6;
    }
  : (useReducedMotion) => {
      useReducedMotion = useReducedMotion.useReducedMotion;
      const shouldAnimate = useReducedMotion.shouldAnimate;
      const entering = useReducedMotion.entering;
      const exiting = useReducedMotion.exiting;
      const item = useReducedMotion.item;
      const renderItem = useReducedMotion.renderItem;
      const items = [item, shouldAnimate, entering, exiting, renderItem, useReducedMotion];
      const memo = react.useMemo(() => {
        if (null != item) {
          return { shouldAnimate, entering, exiting, renderItem, item: tmp, useReducedMotion };
        }
      }, items);
      const obj = { item: memo, renderItem: renderAnimatedItem };
      return React3(native.TransitionItem, obj);
    };
let result = size.fileFinishedImporting("design/components/AnimatedEnterExitItem/native/AnimatedEnterExitItem.tsx");

export default tmp3;
