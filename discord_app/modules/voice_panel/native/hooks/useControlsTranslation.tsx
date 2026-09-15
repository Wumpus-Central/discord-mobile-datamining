// === Module 17329: useControlsTranslation ===

// Module 17329 (useControlsTranslation)
import spring from "spring" /* 5058 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const MODE_CHANGE_PHYSICS = fn(12407).MODE_CHANGE_PHYSICS;
const CALL_TILE_GUTTER = fn(12410).CALL_TILE_GUTTER;
const __initData = { code: "function useControlsTranslationTsx1(){const{withSpring,wrapperSpecs,MODE_CHANGE_PHYSICS,useReducedMotion,CALL_TILE_GUTTER,viewHeight}=this.__closure;return{transform:[{translateX:withSpring(wrapperSpecs.get().x,MODE_CHANGE_PHYSICS)},{translateY:withSpring(!useReducedMotion.get()&&wrapperSpecs.get().hidden?wrapperSpecs.get().height+CALL_TILE_GUTTER+viewHeight.get():wrapperSpecs.get().y,MODE_CHANGE_PHYSICS)}]};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useControlsTranslation.tsx");

export default function useControlsTranslation(arg0, wrapperSpecs, viewHeight) {
  _require = wrapperSpecs;
  importDefault = viewHeight;
  useReducedMotion = noop.useContext(require("VoicePanelStateContext")).useReducedMotion;
  class S {
    constructor() {
      obj = { translateX: null };
      obj2 = closure_0(closure_2[5]);
      obj3 = closure_0;
      tmp = MODE_CHANGE_PHYSICS;
      obj.translateX = obj2.withSpring(closure_0.get().x, MODE_CHANGE_PHYSICS);
      items = [, ];
      items[0] = obj;
      obj4 = closure_0(closure_2[5]);
      if (!useReducedMotion.get()) {
        if (obj3.get().hidden) {
          tmp2 = CALL_TILE_GUTTER;
          tmp4 = closure_1;
          sum = obj3.get().height + CALL_TILE_GUTTER;
          y = sum + closure_1.get();
        }
        obj1 = { transform: null };
        obj7 = { translateY: null };
        obj7.translateY = obj4.withSpring(y, tmp);
        items[1] = obj7;
        obj1.transform = items;
        return obj1;
      }
      y = obj3.get().y;
      return;
    }
  }
  let obj = require("ReanimatedRexport");
  S.__closure = { withSpring: require("spring").withSpring, wrapperSpecs, MODE_CHANGE_PHYSICS, useReducedMotion, CALL_TILE_GUTTER, viewHeight };
  S.__workletHash = 11281989557090;
  S.__initData = __initData;
  return obj.useAnimatedStyle(S);
};