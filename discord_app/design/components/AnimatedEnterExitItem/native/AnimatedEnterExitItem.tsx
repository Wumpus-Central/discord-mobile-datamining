// === Module 9364: AnimatedEnterExitItem ===

// Module 9364 (AnimatedEnterExitItem)
import native from "native" /* 5314 */;
import noop from "module_19" /* 19 */;

require = fn;
function AnimatedRenderItem(arg0) {
  ({ exiting, state } = arg0);
  _require = state;
  ({ cleanUp, useReducedMotion } = arg0);
  dependencyMap = undefined;
  ({ renderItem, item, shouldAnimate, entering } = arg0);
  let num = 0;
  if (state === require("native").TransitionStates.MOUNTED) {
    num = 1;
  }
  const sharedValue = require("module_1652").useSharedValue(num);
  items = [state, sharedValue];
  const effect = noop.useEffect(() => {
    if (c0 === native.TransitionStates.YEETED) {
      const result = _undefined2.set(0);
    } else {
      const result1 = _undefined2.set(1);
    }
  }, items);
  const obj = require("module_1652");
  const items1 = [c6, useReducedMotion, shouldAnimate, state, require("native").TransitionStates, exiting, sharedValue, require("module_1705").scheduleOnRN, cleanUp, entering];
  _require = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14] = items1;
  class AnimatedEnterExitItemTsx1 {
    constructor() {
      if (!closure_0) {
        obj = closure_1;
        tmp = null;
        value = undefined;
        if (closure_1 != null) {
          value = obj.get();
        }
        flag = false;
        if (false !== value) {
          tmp3 = closure_2;
          tmp4 = closure_3;
          if (closure_2 === closure_3.YEETED) {
            if (null != closure_4) {
              tmp8 = closure_5;
              tmp5Result = tmp5(closure_5.get(), (arg0) => {
                if (arg0) {
                  closure_1_6(closure_1_7);
                }
              });
            }
          }
          if (null != closure_8) {
            tmp7 = closure_5;
            tmp5Result = tmp6(closure_5.get());
          } else {
            tmp5Result = {};
          }
        }
        return {};
      }
      return;
    }
  }
  const items2 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14];
  AnimatedEnterExitItemTsx1.__closure = items2;
  AnimatedEnterExitItemTsx1.__workletHash = 3749359338106;
  AnimatedEnterExitItemTsx1.__initData = tmp5;
  const animatedStyle = require("module_1652").useAnimatedStyle(AnimatedEnterExitItemTsx1);
  const tmpResult = require("module_1652");
  const items3 = [c7, state, require("native").TransitionStates, sharedValue, null != exiting, useReducedMotion];
  _require = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21] = items3;
  class AnimatedEnterExitItemTsx2 {
    constructor() {
      tmp = closure_0 === closure_1.YEETED;
      if (tmp) {
        tmp2 = closure_2;
        num = 0;
        tmp = 0 === closure_2.get();
      }
      if (tmp) {
        tmp3 = closure_3;
        tmp4 = !closure_3;
        if (closure_3) {
          tmp4 = closure_4;
        }
        tmp = tmp4;
      }
      return tmp;
    }
  }
  const items4 = [tmp17, tmp18, tmp19, tmp20, tmp21];
  AnimatedEnterExitItemTsx2.__closure = items4;
  AnimatedEnterExitItemTsx2.__workletHash = 11178617332498;
  AnimatedEnterExitItemTsx2.__initData = tmp16;
  const items5 = [c8, require("module_1705").scheduleOnRN, cleanUp];
  _require = undefined;
  dependencyMap = undefined;
  [tmp22, tmp23, tmp24] = items5;
  class AnimatedEnterExitItemTsx3 {
    constructor(arg0, arg1) {
      tmp = arg0;
      if (arg0) {
        tmp2 = arg1;
        tmp = arg0 !== arg1;
      }
      if (tmp) {
        tmp3 = closure_0;
        tmp4 = closure_1;
        tmp5 = closure_0(closure_1);
      }
      return;
    }
  }
  const items6 = [tmp23, tmp24];
  AnimatedEnterExitItemTsx3.__closure = items6;
  AnimatedEnterExitItemTsx3.__workletHash = 2831055465835;
  AnimatedEnterExitItemTsx3.__initData = tmp22;
  const animatedReaction = require("module_1652").useAnimatedReaction(AnimatedEnterExitItemTsx2, AnimatedEnterExitItemTsx3);
  const tmpResult2 = require("module_1652");
  return c4(c3, { children: renderItem(item, animatedStyle) });
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
let closure_6 = { code: "(function AnimatedEnterExitItemTsx1(){let[useReducedMotion,shouldAnimate,state,TransitionStates,exiting,visible,scheduleOnRN,cleanUp,entering]=this.__closure;var _shouldAnimate;if(useReducedMotion)return{};if(((_shouldAnimate=shouldAnimate)===null||_shouldAnimate===void 0?void 0:_shouldAnimate.get())===false)return{};if(state===TransitionStates.YEETED&&exiting!=null){return exiting(visible.get(),function(finished){if(finished){scheduleOnRN(cleanUp);}});}if(entering!=null){return entering(visible.get());}return{};})" };
let closure_7 = { code: "(function AnimatedEnterExitItemTsx2(){let[state,TransitionStates,visible,hasExiting,useReducedMotion]=this.__closure;return state===TransitionStates.YEETED&&visible.get()===0&&(!hasExiting||useReducedMotion);})" };
let closure_8 = { code: "(function AnimatedEnterExitItemTsx3(hasExited,previous){let[scheduleOnRN,cleanUp]=this.__closure;if(!hasExited||hasExited===previous)return;scheduleOnRN(cleanUp);})" };
const size = fn(2);
let result = size.fileFinishedImporting("design/components/AnimatedEnterExitItem/native/AnimatedEnterExitItem.tsx");

export default function AnimatedEnterExitItem(useReducedMotion) {
  useReducedMotion = useReducedMotion.useReducedMotion;
  const shouldAnimate = useReducedMotion.shouldAnimate;
  const entering = useReducedMotion.entering;
  const exiting = useReducedMotion.exiting;
  const item = useReducedMotion.item;
  const renderItem = useReducedMotion.renderItem;
  items = [item, shouldAnimate, entering, exiting, renderItem, useReducedMotion];
  const memo = noop.useMemo(() => {
    if (null != item) {
      const obj = { shouldAnimate, entering, exiting, renderItem, item: tmp, useReducedMotion };
      return obj;
    }
  }, items);
  return React4(native.TransitionItem, { item: memo, renderItem: renderAnimatedItem });
};