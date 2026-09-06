// discord_app/modules/voice_panel/native/hooks/useControlsTranslation.tsx
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const MODE_CHANGE_PHYSICS = fn(12273).MODE_CHANGE_PHYSICS;
const CALL_TILE_GUTTER = fn(12276).CALL_TILE_GUTTER;
const __initData = {
  code: "function useControlsTranslationTsx1(){const{withSpring,wrapperSpecs,MODE_CHANGE_PHYSICS,useReducedMotion,CALL_TILE_GUTTER,viewHeight}=this.__closure;return{transform:[{translateX:withSpring(wrapperSpecs.get().x,MODE_CHANGE_PHYSICS)},{translateY:withSpring(!useReducedMotion.get()&&wrapperSpecs.get().hidden?wrapperSpecs.get().height+CALL_TILE_GUTTER+viewHeight.get():wrapperSpecs.get().y,MODE_CHANGE_PHYSICS)}]};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useControlsTranslation.tsx");

export default function useControlsTranslation(arg0, wrapperSpecs, viewHeight) {
  _require = wrapperSpecs;
  importDefault = viewHeight;
  useReducedMotion = noop.useContext(require("VoicePanelStateContext")).useReducedMotion;
  let obj = require("ReanimatedRexport");
  class S {
    constructor() {
      obj = { translateX: null };
      obj2 = closure_0(closure_2[5]);
      obj3 = closure_0;
      tmp = MODE_CHANGE_PHYSICS;
      obj.translateX = obj2.withSpring(closure_0.get().x, MODE_CHANGE_PHYSICS);
      items = [,];
      items[0] = obj;
      obj4 = closure_0(closure_2[5]);
      if (!useReducedMotion.get()) {
        if (obj3.get().hidden) {
          tmp2 = CALL_TILE_GUTTER;
          tmp4 = closure_1;
          sum = obj3.get().height + CALL_TILE_GUTTER;
          y = sum + closure_1.get();
        }
        obj = { transform: null };
        obj1 = { translateY: null };
        obj1.translateY = obj4.withSpring(y, tmp);
        items[1] = obj1;
        obj.transform = items;
        return obj;
      }
      y = obj3.get().y;
      return;
    }
  }
  obj = {
    withSpring: require("spring").withSpring,
    wrapperSpecs,
    MODE_CHANGE_PHYSICS,
    useReducedMotion,
    CALL_TILE_GUTTER,
    viewHeight,
  };
  S.__closure = obj;
  S.__workletHash = 11281989557090;
  S.__initData = __initData;
  return obj.useAnimatedStyle(S);
}
