// === Module 8874: AnimatedRenderItem ===

// Module 8874 (AnimatedRenderItem)
import closure_2 from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;
import { createElement } from "noop" /* 19 */;

const require = arg1;
function AnimatedRenderItem(shouldAnimate) {
  shouldAnimate = shouldAnimate.shouldAnimate;
  const entering = shouldAnimate.entering;
  const exiting = shouldAnimate.exiting;
  const state = shouldAnimate.state;
  const cleanUp = shouldAnimate.cleanUp;
  const useReducedMotion = shouldAnimate.useReducedMotion;
  let sharedValue;
  closure_7 = undefined;
  ({ renderItem, item } = shouldAnimate);
  let obj = shouldAnimate(entering[2]);
  let num = 0;
  if (state === shouldAnimate(entering[3]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = obj.useSharedValue(num);
  const items = [state, sharedValue];
  const effect = exiting.useEffect(() => {
    if (state === shouldAnimate(entering[3]).TransitionStates.YEETED) {
      const result = sharedValue.set(0);
    } else {
      const result1 = sharedValue.set(1);
    }
  }, items);
  let tmpResult = tmp(tmp2[2]);
  class T {
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
          tmp4 = shouldAnimate;
          tmp5 = entering;
          if (state === shouldAnimate(entering[3]).TransitionStates.YEETED) {
            if (null != exiting) {
              tmp9 = closure_6;
              tmp6Result = tmp6(closure_6.get(), (arg0) => {
                if (arg0) {
                  closure_1_0(closure_1_1[2]).runOnJS(closure_4)();
                  const obj = closure_1_0(closure_1_1[2]);
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
  obj = { useReducedMotion, shouldAnimate, state, TransitionStates: tmp(tmp2[3]).TransitionStates, exiting, visible: sharedValue, runOnJS: tmp(tmp2[2]).runOnJS, cleanUp, entering };
  T.__closure = obj;
  T.__workletHash = 2197269661090;
  T.__initData = sharedValue;
  closure_7 = tmp6;
  const animatedStyle = tmpResult.useAnimatedStyle(T);
  tmpResult = tmp(tmp2[2]);
  class I {
    constructor() {
      tmp = state === shouldAnimate(entering[3]).TransitionStates.YEETED;
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
  obj = { state, TransitionStates: tmp(tmp2[3]).TransitionStates, visible: sharedValue, hasExiting: tmp6, useReducedMotion };
  I.__closure = obj;
  I.__workletHash = 11984384474891;
  I.__initData = closure_7;
  const fn = function v(arg0, arg1) {
    let tmp = arg0;
    if (arg0) {
      tmp = arg0 !== arg1;
    }
    if (tmp) {
      shouldAnimate(entering[2]).runOnJS(cleanUp)();
      const obj = shouldAnimate(entering[2]);
    }
  };
  fn.__closure = { runOnJS: shouldAnimate(entering[2]).runOnJS, cleanUp };
  fn.__workletHash = 2105667466259;
  fn.__initData = closure_8;
  const animatedReaction = tmpResult.useAnimatedReaction(I, fn);
  obj1 = { runOnJS: shouldAnimate(entering[2]).runOnJS, cleanUp };
  return cleanUp(state, { children: renderItem(item, animatedStyle) });
}
function renderAnimatedItem(key, arg1, state, cleanUp) {
  const obj = {};
  const merged = Object.assign(arg1);
  obj.key = key;
  obj.state = state;
  obj.cleanUp = cleanUp;
  return <AnimatedRenderItem />;
}
({ Fragment: c3, jsx: c4 } = jsxProd);
let closure_6 = { code: "function AnimatedEnterExitItemTsx1(){const{useReducedMotion,shouldAnimate,state,TransitionStates,exiting,visible,runOnJS,cleanUp,entering}=this.__closure;var _shouldAnimate;if(useReducedMotion)return{};if(((_shouldAnimate=shouldAnimate)===null||_shouldAnimate===void 0?void 0:_shouldAnimate.get())===false)return{};if(state===TransitionStates.YEETED&&exiting!=null){return exiting(visible.get(),function(finished){if(finished){runOnJS(cleanUp)();}});}if(entering!=null){return entering(visible.get());}return{};}" };
let closure_7 = { code: "function AnimatedEnterExitItemTsx2(){const{state,TransitionStates,visible,hasExiting,useReducedMotion}=this.__closure;return state===TransitionStates.YEETED&&visible.get()===0&&(!hasExiting||useReducedMotion);}" };
let closure_8 = { code: "function AnimatedEnterExitItemTsx3(hasExited,previous){const{runOnJS,cleanUp}=this.__closure;if(!hasExited||hasExited===previous)return;runOnJS(cleanUp)();}" };
let result = require("set").fileFinishedImporting("design/components/AnimatedEnterExitItem/native/AnimatedEnterExitItem.tsx");

export default function AnimatedEnterExitItem(useReducedMotion) {
  useReducedMotion = useReducedMotion.useReducedMotion;
  const shouldAnimate = useReducedMotion.shouldAnimate;
  const entering = useReducedMotion.entering;
  const exiting = useReducedMotion.exiting;
  const item = useReducedMotion.item;
  const renderItem = useReducedMotion.renderItem;
  const items = [item, shouldAnimate, entering, exiting, renderItem, useReducedMotion];
  const memo = entering.useMemo(() => {
    if (null != item) {
      const obj = { shouldAnimate: null, entering: null, exiting: null, renderItem: null, item: null, useReducedMotion: null };
      obj[0] = shouldAnimate;
      obj[1] = entering;
      obj[2] = exiting;
      obj[3] = renderItem;
      obj[4] = tmp;
      obj[5] = useReducedMotion;
      return obj;
    }
  }, items);
  return item(useReducedMotion(shouldAnimate[3]).TransitionItem, { item: memo, renderItem: renderAnimatedItem });
};