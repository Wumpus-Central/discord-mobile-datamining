// discord_app/design/components/AnimatedEnterExitItem/native/AnimatedEnterExitItem.tsx
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function AnimatedRenderItem(shouldAnimate) {
  shouldAnimate = shouldAnimate.shouldAnimate;
  const entering = shouldAnimate.entering;
  const exiting = shouldAnimate.exiting;
  const state = shouldAnimate.state;
  const cleanUp = shouldAnimate.cleanUp;
  const useReducedMotion = shouldAnimate.useReducedMotion;
  let sharedValue;
  __initData = undefined;
  ({ renderItem, item } = shouldAnimate);
  let obj = shouldAnimate(entering[2]);
  let num = 0;
  if (state === shouldAnimate(entering[3]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = obj.useSharedValue(num);
  const items = [state, sharedValue];
  const effect = exiting.useEffect(() => {
    if (state === native.TransitionStates.YEETED) {
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
          tmp4 = closure_0;
          tmp5 = closure_1;
          if (state === closure_0(closure_1[3]).TransitionStates.YEETED) {
            if (null != exiting) {
              tmp9 = closure_6;
              tmp6Result = tmp6(closure_6.get(), (arg0) => {
                if (arg0) {
                  shouldAnimate(entering[2]).runOnJS(cleanUp)();
                  const obj = shouldAnimate(entering[2]);
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
  obj = {
    useReducedMotion,
    shouldAnimate,
    state,
    TransitionStates: tmp(tmp2[3]).TransitionStates,
    exiting,
    visible: sharedValue,
    runOnJS: tmp(tmp2[2]).runOnJS,
    cleanUp,
    entering,
  };
  T.__closure = obj;
  T.__workletHash = 2197269661090;
  T.__initData = sharedValue;
  __initData = tmp6;
  const animatedStyle = tmpResult.useAnimatedStyle(T);
  tmpResult = tmp(tmp2[2]);
  class I {
    constructor() {
      tmp = state === closure_0(closure_1[3]).TransitionStates.YEETED;
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
  obj = {
    state,
    TransitionStates: tmp(tmp2[3]).TransitionStates,
    visible: sharedValue,
    hasExiting: tmp6,
    useReducedMotion,
  };
  I.__closure = obj;
  I.__workletHash = 11984384474891;
  I.__initData = __initData;
  const fn = function v(arg0, arg1) {
    let tmp = arg0;
    if (arg0) {
      tmp = arg0 !== arg1;
    }
    if (tmp) {
      ReanimatedRexport.runOnJS(cleanUp)();
    }
  };
  fn.__closure = { runOnJS: shouldAnimate(entering[2]).runOnJS, cleanUp };
  fn.__workletHash = 2105667466259;
  fn.__initData = __initData2;
  const animatedReaction = tmpResult.useAnimatedReaction(I, fn);
  const obj1 = { runOnJS: shouldAnimate(entering[2]).runOnJS, cleanUp };
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
const jsxProd = fn(21);
({ Fragment: c3, jsx: closure_4 } = jsxProd);
const createElement = fn(19).createElement;
let closure_6 = {
  code: "function AnimatedEnterExitItemTsx1(){const{useReducedMotion,shouldAnimate,state,TransitionStates,exiting,visible,runOnJS,cleanUp,entering}=this.__closure;var _shouldAnimate;if(useReducedMotion)return{};if(((_shouldAnimate=shouldAnimate)===null||_shouldAnimate===void 0?void 0:_shouldAnimate.get())===false)return{};if(state===TransitionStates.YEETED&&exiting!=null){return exiting(visible.get(),function(finished){if(finished){runOnJS(cleanUp)();}});}if(entering!=null){return entering(visible.get());}return{};}",
};
let __initData = {
  code: "function AnimatedEnterExitItemTsx2(){const{state,TransitionStates,visible,hasExiting,useReducedMotion}=this.__closure;return state===TransitionStates.YEETED&&visible.get()===0&&(!hasExiting||useReducedMotion);}",
};
const __initData2 = {
  code: "function AnimatedEnterExitItemTsx3(hasExited,previous){const{runOnJS,cleanUp}=this.__closure;if(!hasExited||hasExited===previous)return;runOnJS(cleanUp)();}",
};
const size = fn(2);
let result = size.fileFinishedImporting("design/components/AnimatedEnterExitItem/native/AnimatedEnterExitItem.tsx");

export default function AnimatedEnterExitItem(useReducedMotion) {
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
}
