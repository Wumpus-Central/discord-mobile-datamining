// discord_app/design/components/AnimatedEnterExitItem/native/AnimatedEnterExitItem.tsx
import c from "../../../../../_runtime/00576_c.js";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function renderAnimatedItem(key, arg1, state, cleanUp) {
  const obj = {};
  const merged = Object.assign(arg1);
  obj.key = key;
  obj.state = state;
  obj.cleanUp = cleanUp;
  return <closure_12 />;
}
const jsxProd = fn(21);
({ Fragment: c3, jsx: closure_4 } = jsxProd);
const createElement = fn(19).createElement;
let closure_6 = { code: "function AnimatedEnterExitItemTsx1(){const{useReducedMotion,shouldAnimate,state,TransitionStates,exiting,visible,runOnJS,cleanUp,entering}=this.__closure;var _shouldAnimate;if(useReducedMotion){return{};}if(((_shouldAnimate=shouldAnimate)===null||_shouldAnimate===void 0?void 0:_shouldAnimate.get())===false){return{};}if(state===TransitionStates.YEETED&&exiting!=null){return exiting(visible.get(),function(finished){if(finished){runOnJS(cleanUp)();}});}if(entering!=null){return entering(visible.get());}return{};}" };
let __initData = { code: "function AnimatedEnterExitItemTsx2(){const{state,TransitionStates,visible,hasExiting,useReducedMotion}=this.__closure;return state===TransitionStates.YEETED&&visible.get()===0&&(!hasExiting||useReducedMotion);}" };
const __initData2 = { code: "function AnimatedEnterExitItemTsx3(hasExited,previous){const{runOnJS,cleanUp}=this.__closure;if(!hasExited||hasExited===previous){return;}runOnJS(cleanUp)();}" };
const __initData3 = { code: "function AnimatedEnterExitItemTsx4(){const{useReducedMotion,shouldAnimate,state,TransitionStates,exiting,visible,runOnJS,cleanUp,entering}=this.__closure;var _shouldAnimate;if(useReducedMotion)return{};if(((_shouldAnimate=shouldAnimate)===null||_shouldAnimate===void 0?void 0:_shouldAnimate.get())===false)return{};if(state===TransitionStates.YEETED&&exiting!=null){return exiting(visible.get(),function(finished){if(finished){runOnJS(cleanUp)();}});}if(entering!=null){return entering(visible.get());}return{};}" };
const __initData4 = { code: "function AnimatedEnterExitItemTsx5(){const{state,TransitionStates,visible,hasExiting,useReducedMotion}=this.__closure;return state===TransitionStates.YEETED&&visible.get()===0&&(!hasExiting||useReducedMotion);}" };
const __initData5 = { code: "function AnimatedEnterExitItemTsx6(hasExited,previous){const{runOnJS,cleanUp}=this.__closure;if(!hasExited||hasExited===previous)return;runOnJS(cleanUp)();}" };
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((entering) => {
  const cResult = shouldAnimate(entering[3]).c(10);
  ({ renderItem, item, shouldAnimate } = entering);
  entering = entering.entering;
  const exiting = entering.exiting;
  state = entering.state;
  const cleanUp = entering.cleanUp;
  const useReducedMotion = entering.useReducedMotion;
  let obj = shouldAnimate(entering[3]);
  let num = 0;
  if (state === shouldAnimate(entering[5]).TransitionStates.MOUNTED) {
    num = 1;
  }
  const sharedValue = shouldAnimate(entering[4]).useSharedValue(num);
  if (cResult[0] === state) {
    if (cResult[1] === sharedValue) {
      let tmp5 = cResult[2];
      let tmp6 = cResult[3];
    }
    const effect = exiting.useEffect(tmp5, tmp6);
    class O {
      constructor() {
        if (!useReducedMotion) {
          obj = shouldAnimate;
          tmp = null;
          value = undefined;
          if (shouldAnimate != null) {
            value = obj.get();
          }
          flag = false;
          if (false !== value) {
            tmp3 = state;
            tmp4 = closure_0;
            tmp5 = closure_1;
            if (state === closure_0(closure_1[5]).TransitionStates.YEETED) {
              if (null != exiting) {
                tmp9 = closure_6;
                tmp6Result = tmp6(closure_6.get(), (arg0) => {
                  if (arg0) {
                    shouldAnimate(entering[4]).runOnJS(cleanUp)();
                    const obj = shouldAnimate(entering[4]);
                  }
                });
              }
            }
            if (null != entering) {
              tmp8 = closure_6;
              tmp6Result = tmp7(closure_6.get());
            } else {
              tmp6Result = {};
            }
          }
          return {};
        }
        return;
      }
    }
    const obj3 = { useReducedMotion, shouldAnimate, state, TransitionStates: shouldAnimate(tmp2[5]).TransitionStates, exiting, visible: sharedValue, runOnJS: shouldAnimate(tmp2[4]).runOnJS, cleanUp, entering };
    O.__closure = obj3;
    O.__workletHash = 14013247946914;
    O.__initData = sharedValue;
    const animatedStyle = shouldAnimate(tmp2[4]).useAnimatedStyle(O);
    __initData = tmp12;
    const tmpResult = shouldAnimate(tmp2[4]);
    class M {
      constructor() {
        tmp = state === closure_0(closure_1[5]).TransitionStates.YEETED;
        if (tmp) {
          tmp2 = closure_6;
          num = 0;
          tmp = 0 === closure_6.get();
        }
        if (tmp) {
          tmp3 = closure_7;
          tmp4 = !closure_7;
          if (closure_7) {
            tmp4 = useReducedMotion;
          }
          tmp = tmp4;
        }
        return tmp;
      }
    }
    const obj4 = { state, TransitionStates: shouldAnimate(tmp2[5]).TransitionStates, visible: sharedValue, hasExiting: null != exiting, useReducedMotion };
    M.__closure = obj4;
    M.__workletHash = 11984384474891;
    M.__initData = __initData;
    class I {
      constructor(arg0, arg1) {
        tmp = entering;
        if (entering) {
          tmp2 = arg1;
          tmp = entering !== arg1;
        }
        if (tmp) {
          tmp3 = closure_0;
          tmp4 = closure_1;
          obj = closure_0(closure_1[4]);
          tmp5 = cleanUp;
          tmp6 = obj.runOnJS(cleanUp)();
        }
        return;
      }
    }
    const obj5 = { runOnJS: shouldAnimate(tmp2[4]).runOnJS, cleanUp };
    I.__closure = obj5;
    I.__workletHash = 13577925153461;
    I.__initData = __initData2;
    const animatedReaction = shouldAnimate(tmp2[4]).useAnimatedReaction(M, I);
    if (cResult[4] === animatedStyle) {
      if (cResult[5] === item) {
        if (cResult[6] === renderItem) {
          let tmp16 = cResult[7];
        }
        if (cResult[8] !== tmp16) {
          { children: null }.children = tmp16;
          class O {
            constructor() {
              if (!useReducedMotion) {
                obj = shouldAnimate;
                tmp = null;
                value = undefined;
                if (shouldAnimate != null) {
                  value = obj.get();
                }
                flag = false;
                if (false !== value) {
                  tmp3 = state;
                  tmp4 = closure_0;
                  tmp5 = closure_1;
                  if (state === closure_0(closure_1[5]).TransitionStates.YEETED) {
                    if (null != exiting) {
                      tmp9 = closure_6;
                      tmp6Result = tmp6(closure_6.get(), (arg0) => {
                        if (arg0) {
                          shouldAnimate(entering[4]).runOnJS(cleanUp)();
                          const obj = shouldAnimate(entering[4]);
                        }
                      });
                    }
                  }
                  if (null != entering) {
                    tmp8 = closure_6;
                    tmp6Result = tmp7(closure_6.get());
                  } else {
                    tmp6Result = {};
                  }
                }
                return {};
              }
              return;
            }
          }
          cResult[8] = tmp16;
          cResult[9] = tmp21;
          let tmp18 = tmp21;
          const obj6 = { children: null };
        } else {
          tmp18 = cResult[9];
        }
        return tmp18;
      }
    }
    const renderItemResult = renderItem(item, animatedStyle);
    cResult[4] = animatedStyle;
    cResult[5] = item;
    cResult[6] = renderItem;
    cResult[7] = renderItemResult;
    tmp16 = renderItemResult;
    const tmpResult2 = shouldAnimate(tmp2[4]);
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
  tmp6 = items;
  tmp5 = fn;
  const obj2 = shouldAnimate(entering[4]);
}) : ((shouldAnimate) => {
  shouldAnimate = shouldAnimate.shouldAnimate;
  const entering = shouldAnimate.entering;
  const exiting = shouldAnimate.exiting;
  state = shouldAnimate.state;
  const cleanUp = shouldAnimate.cleanUp;
  const useReducedMotion = shouldAnimate.useReducedMotion;
  let sharedValue;
  closure_7 = undefined;
  ({ renderItem, item } = shouldAnimate);
  let num = 0;
  if (state === shouldAnimate(entering[5]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = shouldAnimate(entering[4]).useSharedValue(num);
  const items = [state, sharedValue];
  const effect = exiting.useEffect(() => {
    if (state === native.TransitionStates.YEETED) {
      const result = sharedValue.set(0);
    } else {
      const result1 = sharedValue.set(1);
    }
  }, items);
  let obj = shouldAnimate(entering[4]);
  const fn = function v() {
    if (!useReducedMotion) {
      value = undefined;
      if (shouldAnimate != null) {
        value = shouldAnimate.get();
      }
      if (false !== value) {
        if (state === native.TransitionStates.YEETED) {
          if (null != exiting) {
            tmp6(sharedValue.get(), (arg0) => {
              if (arg0) {
                shouldAnimate(entering[4]).runOnJS(cleanUp)();
                const obj = shouldAnimate(entering[4]);
              }
            });
          }
        }
        if (null != entering) {
          tmp7(sharedValue.get());
        }
      }
      return {};
    }
  };
  const tmpResult = shouldAnimate(entering[4]);
  fn.__closure = { useReducedMotion, shouldAnimate, state, TransitionStates: shouldAnimate(entering[5]).TransitionStates, exiting, visible: sharedValue, runOnJS: shouldAnimate(entering[4]).runOnJS, cleanUp, entering };
  fn.__workletHash = 15718564228231;
  fn.__initData = __initData3;
  closure_7 = tmp6;
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  const obj2 = { useReducedMotion, shouldAnimate, state, TransitionStates: shouldAnimate(entering[5]).TransitionStates, exiting, visible: sharedValue, runOnJS: shouldAnimate(entering[4]).runOnJS, cleanUp, entering };
  const fn2 = function b() {
    let tmp = state === native.TransitionStates.YEETED;
    if (tmp) {
      tmp = 0 === sharedValue.get();
    }
    if (tmp) {
      let tmp4 = !closure_7;
      if (closure_7) {
        tmp4 = useReducedMotion;
      }
      tmp = tmp4;
    }
    return tmp;
  };
  const tmpResult2 = shouldAnimate(entering[4]);
  fn2.__closure = { state, TransitionStates: shouldAnimate(entering[5]).TransitionStates, visible: sharedValue, hasExiting: null != exiting, useReducedMotion };
  fn2.__workletHash = 10212721541996;
  fn2.__initData = __initData4;
  class A {
    constructor(arg0, arg1) {
      tmp = shouldAnimate;
      if (shouldAnimate) {
        tmp2 = arg1;
        tmp = shouldAnimate !== arg1;
      }
      if (tmp) {
        tmp3 = closure_0;
        tmp4 = closure_1;
        obj = closure_0(closure_1[4]);
        tmp5 = cleanUp;
        tmp6 = obj.runOnJS(cleanUp)();
      }
      return;
    }
  }
  const obj3 = { state, TransitionStates: shouldAnimate(entering[5]).TransitionStates, visible: sharedValue, hasExiting: null != exiting, useReducedMotion };
  A.__closure = { runOnJS: shouldAnimate(entering[4]).runOnJS, cleanUp };
  A.__workletHash = 16078328777782;
  A.__initData = __initData5;
  const animatedReaction = tmpResult2.useAnimatedReaction(fn2, A);
  const obj4 = { runOnJS: shouldAnimate(entering[4]).runOnJS, cleanUp };
  return cleanUp(state, { children: renderItem(item, animatedStyle) });
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("design/components/AnimatedEnterExitItem/native/AnimatedEnterExitItem.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(9);
  ({ useReducedMotion, shouldAnimate, entering, exiting, item, renderItem } = arg0);
  if (null == item) {
    if (cResult[7] !== undefined) {
      const obj2 = { item: undefined, renderItem: renderAnimatedItem };
      const tmp9 = React4(native.TransitionItem, obj2);
      cResult[7] = undefined;
      cResult[8] = tmp9;
      let tmp6 = tmp9;
    } else {
      tmp6 = cResult[8];
    }
    return tmp6;
  } else {
    if (cResult[0] === entering) {
      if (cResult[1] === exiting) {
        if (cResult[2] === item) {
          if (cResult[3] === renderItem) {
            if (cResult[4] === shouldAnimate) {
            }
          }
        }
      }
    }
    const obj3 = { shouldAnimate, entering, exiting, renderItem, item, useReducedMotion };
    cResult[0] = entering;
    cResult[1] = exiting;
    cResult[2] = item;
    cResult[3] = renderItem;
    cResult[4] = shouldAnimate;
    cResult[5] = useReducedMotion;
    cResult[6] = obj3;
  }
}) : ((useReducedMotion) => {
  useReducedMotion = useReducedMotion.useReducedMotion;
  const shouldAnimate = useReducedMotion.shouldAnimate;
  const entering = useReducedMotion.entering;
  const exiting = useReducedMotion.exiting;
  const item = useReducedMotion.item;
  const renderItem = useReducedMotion.renderItem;
  const items = [item, shouldAnimate, entering, exiting, renderItem, useReducedMotion];
  const memo = noop.useMemo(() => {
    if (null != item) {
      const obj = { shouldAnimate, entering, exiting, renderItem, item: tmp, useReducedMotion };
      return obj;
    }
  }, items);
  return React4(native.TransitionItem, { item: memo, renderItem: renderAnimatedItem });
});