// discord_app/modules/voice_panel/native/hooks/useControlsTranslation.tsx
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const MODE_CHANGE_PHYSICS = fn(11970).MODE_CHANGE_PHYSICS;
const CALL_TILE_GUTTER = fn(11973).CALL_TILE_GUTTER;
const __initData = {
  code: "function useControlsTranslationTsx1(){const{withSpring,wrapperSpecs,MODE_CHANGE_PHYSICS,useReducedMotion,CALL_TILE_GUTTER,viewHeight}=this.__closure;return{transform:[{translateX:withSpring(wrapperSpecs.get().x,MODE_CHANGE_PHYSICS)},{translateY:withSpring(!useReducedMotion.get()&&wrapperSpecs.get().hidden?wrapperSpecs.get().height+CALL_TILE_GUTTER+viewHeight.get():wrapperSpecs.get().y,MODE_CHANGE_PHYSICS)}]};}",
};
const __initData2 = {
  code: "function useControlsTranslationTsx2(){const{withSpring,wrapperSpecs,MODE_CHANGE_PHYSICS,useReducedMotion,CALL_TILE_GUTTER,viewHeight}=this.__closure;return{transform:[{translateX:withSpring(wrapperSpecs.get().x,MODE_CHANGE_PHYSICS)},{translateY:withSpring(!useReducedMotion.get()&&wrapperSpecs.get().hidden?wrapperSpecs.get().height+CALL_TILE_GUTTER+viewHeight.get():wrapperSpecs.get().y,MODE_CHANGE_PHYSICS)}]};}",
};
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useControlsTranslation.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useControlsTranslation(arg0, wrapperSpecs, viewHeight) {
      _require = wrapperSpecs;
      importDefault = viewHeight;
      useReducedMotion = noop.useContext(require("VoicePanelStateContext")).useReducedMotion;
      const fn = function u() {
        const obj = { translateX: spring.withSpring(wrapperSpecs.get().x, MODE_CHANGE_PHYSICS) };
        const items = [obj];
        if (!useReducedMotion.get()) {
          if (wrapperSpecs.get().hidden) {
            const sum = wrapperSpecs.get().height + CALL_TILE_GUTTER;
            let y = sum + viewHeight.get();
          }
          const obj5 = { transform: null };
          const obj6 = { translateY: obj4.withSpring(y, MODE_CHANGE_PHYSICS) };
          items[1] = obj6;
          obj5.transform = items;
          return obj5;
        }
        y = wrapperSpecs.get().y;
        obj4 = spring;
      };
      let obj = require("ReanimatedRexport");
      fn.__closure = {
        withSpring: require("spring").withSpring,
        wrapperSpecs,
        MODE_CHANGE_PHYSICS,
        useReducedMotion,
        CALL_TILE_GUTTER,
        viewHeight,
      };
      fn.__workletHash = 11281989557090;
      fn.__initData = __initData;
      return obj.useAnimatedStyle(fn);
    }
  : function useControlsTranslation(arg0, wrapperSpecs, viewHeight) {
      _require = wrapperSpecs;
      importDefault = viewHeight;
      useReducedMotion = noop.useContext(require("VoicePanelStateContext")).useReducedMotion;
      const fn = function u() {
        const obj = { translateX: spring.withSpring(wrapperSpecs.get().x, MODE_CHANGE_PHYSICS) };
        const items = [obj];
        if (!useReducedMotion.get()) {
          if (wrapperSpecs.get().hidden) {
            const sum = wrapperSpecs.get().height + CALL_TILE_GUTTER;
            let y = sum + viewHeight.get();
          }
          const obj5 = { transform: null };
          const obj6 = { translateY: obj4.withSpring(y, MODE_CHANGE_PHYSICS) };
          items[1] = obj6;
          obj5.transform = items;
          return obj5;
        }
        y = wrapperSpecs.get().y;
        obj4 = spring;
      };
      let obj = require("ReanimatedRexport");
      fn.__closure = {
        withSpring: require("spring").withSpring,
        wrapperSpecs,
        MODE_CHANGE_PHYSICS,
        useReducedMotion,
        CALL_TILE_GUTTER,
        viewHeight,
      };
      fn.__workletHash = 14781416319841;
      fn.__initData = __initData2;
      return obj.useAnimatedStyle(fn);
    };
