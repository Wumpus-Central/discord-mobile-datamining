// === Module 19582: useControlsTranslation ===

// Module 19582 (useControlsTranslation)
import _mod1652 from "module_1652" /* 1652 */;
import spring_spring from "spring/spring" /* 5771 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 11410 */;
import noop from "module_19" /* 19 */;

require = fn;
const MODE_CHANGE_PHYSICS = fn(11411).MODE_CHANGE_PHYSICS;
const CALL_TILE_GUTTER = fn(11414).CALL_TILE_GUTTER;
let closure_6 = { code: "(function useControlsTranslationTsx1(){let[withSpring,wrapperSpecs,MODE_CHANGE_PHYSICS,useReducedMotion,CALL_TILE_GUTTER,viewHeight]=this.__closure;return{transform:[{translateX:withSpring(wrapperSpecs.get().x,MODE_CHANGE_PHYSICS)},{translateY:withSpring(!useReducedMotion.get()&&wrapperSpecs.get().hidden?wrapperSpecs.get().height+CALL_TILE_GUTTER+viewHeight.get():wrapperSpecs.get().y,MODE_CHANGE_PHYSICS)}]};})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useControlsTranslation.tsx");

export default function useControlsTranslation(arg0, arg1, arg2) {
  items = [closure_6, spring_spring.withSpring, arg1, MODE_CHANGE_PHYSICS, noop.useContext(VoicePanelStateContextDefault).useReducedMotion, CALL_TILE_GUTTER, arg2];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7] = items;
  function useControlsTranslationTsx1() {
    items = [{ translateX: _undefined(_undefined2.get().x, c2) }, ];
    if (!_undefined3.get()) {
      if (_undefined2.get().hidden) {
        const sum = _undefined2.get().height + c4;
        let y = sum + _undefined4.get();
      }
      const obj3 = { transform: null };
      const obj4 = { translateY: _undefined(y, c2) };
      items[1] = obj4;
      obj3.transform = items;
      return obj3;
    }
    y = _undefined2.get().y;
    const obj = { translateX: _undefined(_undefined2.get().x, c2) };
  }
  const items1 = [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7];
  useControlsTranslationTsx1.__closure = items1;
  useControlsTranslationTsx1.__workletHash = 16744357992443;
  useControlsTranslationTsx1.__initData = tmp;
  return _mod1652.useAnimatedStyle(useControlsTranslationTsx1);
};