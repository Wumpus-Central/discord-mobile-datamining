// === Module 16490: useControlsTranslation ===

// Module 16490 (useControlsTranslation)
import closure_3 from "noop" /* 19 */;
import { MODE_CHANGE_PHYSICS } from "VoicePanelModes" /* 11489 */;
import { CALL_TILE_GUTTER } from "CARD_SIZE" /* 11492 */;

const require = arg1;
let closure_6 = { code: "function useControlsTranslationTsx1(){const{withSpring,wrapperSpecs,MODE_CHANGE_PHYSICS,useReducedMotion,CALL_TILE_GUTTER,viewHeight}=this.__closure;return{transform:[{translateX:withSpring(wrapperSpecs.get().x,MODE_CHANGE_PHYSICS)},{translateY:withSpring(!useReducedMotion.get()&&wrapperSpecs.get().hidden?wrapperSpecs.get().height+CALL_TILE_GUTTER+viewHeight.get():wrapperSpecs.get().y,MODE_CHANGE_PHYSICS)}]};}" };
const result = require("set").fileFinishedImporting("modules/voice_panel/native/hooks/useControlsTranslation.tsx");

export default function useControlsTranslation(arg0, wrapperSpecs, viewHeight) {
  const _require = wrapperSpecs;
  importDefault = viewHeight;
  useReducedMotion = React.useContext(importDefault(useReducedMotion[3])).useReducedMotion;
  let obj = _require(useReducedMotion[4]);
  class S {
    constructor() {
      obj = { translateX: null };
      obj2 = closure_0(useReducedMotion[5]);
      obj3 = closure_0;
      tmp = closure_1_4;
      obj[0] = obj2.withSpring(closure_0.get().x, closure_1_4);
      items = [, ];
      items[0] = obj;
      obj4 = closure_0(useReducedMotion[5]);
      if (!useReducedMotion.get()) {
        if (obj3.get().hidden) {
          tmp2 = closure_1_5;
          tmp4 = closure_1;
          sum = obj3.get().height + closure_1_5;
          y = sum + closure_1.get();
        }
        obj = { transform: null };
        obj1 = { translateY: null };
        obj1[0] = obj4.withSpring(y, tmp);
        items[1] = obj1;
        obj[0] = items;
        return obj;
      }
      y = obj3.get().y;
      return;
    }
  }
  obj = { withSpring: _require(useReducedMotion[5]).withSpring, wrapperSpecs, MODE_CHANGE_PHYSICS, useReducedMotion, CALL_TILE_GUTTER, viewHeight };
  S.__closure = obj;
  S.__workletHash = 11281989557090;
  S.__initData = closure_6;
  return obj.useAnimatedStyle(S);
};