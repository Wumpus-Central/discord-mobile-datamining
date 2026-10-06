// === Module 17351: useControlsTranslation ===

// Module 17351 (useControlsTranslation)
import spring from "spring" /* 5604 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11916 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 11919 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const MODE_CHANGE_PHYSICS = VoicePanelConstants.MODE_CHANGE_PHYSICS;
const CALL_TILE_GUTTER = VoicePanelCardConstants.CALL_TILE_GUTTER;
const __initData = { code: "function useControlsTranslationTsx1(){const{withSpring,wrapperSpecs,MODE_CHANGE_PHYSICS,useReducedMotion,CALL_TILE_GUTTER,viewHeight}=this.__closure;return{transform:[{translateX:withSpring(wrapperSpecs.get().x,MODE_CHANGE_PHYSICS)},{translateY:withSpring(!useReducedMotion.get()&&wrapperSpecs.get().hidden?wrapperSpecs.get().height+CALL_TILE_GUTTER+viewHeight.get():wrapperSpecs.get().y,MODE_CHANGE_PHYSICS)}]};}" };
const __initData2 = { code: "function useControlsTranslationTsx2(){const{withSpring,wrapperSpecs,MODE_CHANGE_PHYSICS,useReducedMotion,CALL_TILE_GUTTER,viewHeight}=this.__closure;return{transform:[{translateX:withSpring(wrapperSpecs.get().x,MODE_CHANGE_PHYSICS)},{translateY:withSpring(!useReducedMotion.get()&&wrapperSpecs.get().hidden?wrapperSpecs.get().height+CALL_TILE_GUTTER+viewHeight.get():wrapperSpecs.get().y,MODE_CHANGE_PHYSICS)}]};}" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, wrapperSpecs, viewHeight) => {
  let useReducedMotion;
  _require = wrapperSpecs;
  importDefault = viewHeight;
  useReducedMotion = react.useContext(require("VoicePanelStateContext")).useReducedMotion;
  let obj = require("ReanimatedRexport");
  const fn = function u() {
    let obj2;
    const obj = { translateX: obj2.withSpring(wrapperSpecs.get().x, MODE_CHANGE_PHYSICS) };
    const items = [obj, ];
    obj2 = spring;
    const withSpring = spring.withSpring;
    spring;
    if (!useReducedMotion.get()) {
      let y;
      if (wrapperSpecs.get().hidden) {
        const sum = wrapperSpecs.get().height + CALL_TILE_GUTTER;
        y = sum + viewHeight.get();
      }
      const obj4 = { transform: items };
      items[1] = { translateY: withSpring(y, MODE_CHANGE_PHYSICS) };
      const obj5 = { translateY: withSpring(y, MODE_CHANGE_PHYSICS) };
      return obj4;
    }
    y = wrapperSpecs.get().y;
  };
  let obj2 = { withSpring: require("spring").withSpring, wrapperSpecs, MODE_CHANGE_PHYSICS, useReducedMotion, CALL_TILE_GUTTER, viewHeight };
  fn.__closure = obj2;
  fn.__workletHash = 11281989557090;
  fn.__initData = __initData;
  return obj.useAnimatedStyle(fn);
}) : ((arg0, wrapperSpecs, viewHeight) => {
  let useReducedMotion;
  _require = wrapperSpecs;
  importDefault = viewHeight;
  useReducedMotion = react.useContext(require("VoicePanelStateContext")).useReducedMotion;
  let obj = require("ReanimatedRexport");
  const fn = function u() {
    let obj2;
    const obj = { translateX: obj2.withSpring(wrapperSpecs.get().x, MODE_CHANGE_PHYSICS) };
    const items = [obj, ];
    obj2 = spring;
    const withSpring = spring.withSpring;
    spring;
    if (!useReducedMotion.get()) {
      let y;
      if (wrapperSpecs.get().hidden) {
        const sum = wrapperSpecs.get().height + CALL_TILE_GUTTER;
        y = sum + viewHeight.get();
      }
      const obj4 = { transform: items };
      items[1] = { translateY: withSpring(y, MODE_CHANGE_PHYSICS) };
      const obj5 = { translateY: withSpring(y, MODE_CHANGE_PHYSICS) };
      return obj4;
    }
    y = wrapperSpecs.get().y;
  };
  let obj2 = { withSpring: require("spring").withSpring, wrapperSpecs, MODE_CHANGE_PHYSICS, useReducedMotion, CALL_TILE_GUTTER, viewHeight };
  fn.__closure = obj2;
  fn.__workletHash = 14781416319841;
  fn.__initData = __initData2;
  return obj.useAnimatedStyle(fn);
});
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useControlsTranslation.tsx");

export default tmp2;