// discord_app/modules/activities/panel/native/pip/usePIPAvoidanceSpecs.tsx
import cheapWorkletShallowEqual from "../../../../reanimated/native/cheapWorkletShallowEqual.tsx";
import updateSharedValueIfChangedDefault from "../../../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import getPIPBottomOffsetForPIPModeDefault from "../../../../panels/morphable/native/getPIPBottomOffsetForPIPMode.tsx";
import getAdjustedBottomOffsetsDefault from "../../../../panels/morphable/native/getAdjustedBottomOffsets.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let __initData = {
  code: "function usePIPAvoidanceSpecsTsx1(){const{keyboardHeight,safeArea,screenName}=this.__closure;return{keyboardHeight:keyboardHeight.get(),safeAreaBottom:safeArea.bottom,screenName:screenName.get()};}",
};
const __initData2 = {
  code: "function usePIPAvoidanceSpecsTsx2(props,previous){const{cheapWorkletShallowEqual,getPIPBottomOffsetForPIPMode,getAdjustedBottomOffsets,updateSharedValueIfChanged,pipAvoidanceSpecs}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined)){return;}const{keyboardHeight:keyboardHeight_0,safeAreaBottom:safeAreaBottom,screenName:screenName_0}=props;const screenBottomOffset=getPIPBottomOffsetForPIPMode(screenName_0);const{bottomOffset:bottomOffset}=getAdjustedBottomOffsets({screenBottomOffset:screenBottomOffset,safeAreaBottom:safeAreaBottom,keyboardHeight:keyboardHeight_0});updateSharedValueIfChanged(pipAvoidanceSpecs,{top:0,bottom:bottomOffset});}",
};
const __initData3 = {
  code: "function usePIPAvoidanceSpecsTsx3(){const{keyboardHeight,safeArea,screenName}=this.__closure;return{keyboardHeight:keyboardHeight.get(),safeAreaBottom:safeArea.bottom,screenName:screenName.get()};}",
};
const __initData4 = {
  code: "function usePIPAvoidanceSpecsTsx4(props,previous){const{cheapWorkletShallowEqual,getPIPBottomOffsetForPIPMode,getAdjustedBottomOffsets,updateSharedValueIfChanged,pipAvoidanceSpecs}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{keyboardHeight:keyboardHeight_0,safeAreaBottom:safeAreaBottom,screenName:screenName_0}=props;const screenBottomOffset=getPIPBottomOffsetForPIPMode(screenName_0);const{bottomOffset:bottomOffset}=getAdjustedBottomOffsets({screenBottomOffset:screenBottomOffset,safeAreaBottom:safeAreaBottom,keyboardHeight:keyboardHeight_0});updateSharedValueIfChanged(pipAvoidanceSpecs,{top:0,bottom:bottomOffset});}",
};
const result = size.fileFinishedImporting("modules/activities/panel/native/pip/usePIPAvoidanceSpecs.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (safeArea) => {
      _require = safeArea;
      const sharedValue = require("ReanimatedRexport").useSharedValue({ top: 0, bottom: 0 });
      const tmp2 = sharedValue(16583)();
      dependencyMap = tmp2;
      const tmp3 = sharedValue(17164)();
      __initData = tmp3;
      let obj = require("ReanimatedRexport");
      const fn = function n() {
        return { keyboardHeight: closure_2.get(), safeAreaBottom: safeArea.bottom, screenName: closure_3.get() };
      };
      fn.__closure = { keyboardHeight: tmp2, safeArea, screenName: tmp3 };
      fn.__workletHash = 9790941132204;
      fn.__initData = __initData;
      const fn2 = function f(safeAreaState, safeAreaState2) {
        if (!obj.cheapWorkletShallowEqual(safeAreaState, tmp)) {
          ({ keyboardHeight, safeAreaBottom, screenName } = safeAreaState);
          const obj2 = {
            screenBottomOffset: getPIPBottomOffsetForPIPModeDefault(screenName),
            safeAreaBottom,
            keyboardHeight,
          };
          const rect = { top: 0, bottom: getAdjustedBottomOffsetsDefault(obj2).bottomOffset };
          updateSharedValueIfChangedDefault(sharedValue, rect);
          const tmp4 = getPIPBottomOffsetForPIPModeDefault(screenName);
        }
        obj = cheapWorkletShallowEqual;
        tmp = safeAreaState2;
      };
      let obj2 = require("ReanimatedRexport");
      fn2.__closure = {
        cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual,
        getPIPBottomOffsetForPIPMode: sharedValue(17091),
        getAdjustedBottomOffsets: sharedValue(17165),
        updateSharedValueIfChanged: sharedValue(9774),
        pipAvoidanceSpecs: sharedValue,
      };
      fn2.__workletHash = 9489549686165;
      fn2.__initData = __initData2;
      const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
      return sharedValue;
    }
  : (safeArea) => {
      _require = safeArea;
      const sharedValue = require("ReanimatedRexport").useSharedValue({ top: 0, bottom: 0 });
      const tmp2 = sharedValue(16583)();
      dependencyMap = tmp2;
      const tmp3 = sharedValue(17164)();
      closure_3 = tmp3;
      let obj = require("ReanimatedRexport");
      const fn = function n() {
        return { keyboardHeight: closure_2.get(), safeAreaBottom: safeArea.bottom, screenName: closure_3.get() };
      };
      fn.__closure = { keyboardHeight: tmp2, safeArea, screenName: tmp3 };
      fn.__workletHash = 17178019509294;
      fn.__initData = __initData3;
      const fn2 = function o(safeAreaState, safeAreaState2) {
        if (!obj.cheapWorkletShallowEqual(safeAreaState, tmp)) {
          ({ keyboardHeight, safeAreaBottom, screenName } = safeAreaState);
          const obj2 = {
            screenBottomOffset: getPIPBottomOffsetForPIPModeDefault(screenName),
            safeAreaBottom,
            keyboardHeight,
          };
          const rect = { top: 0, bottom: getAdjustedBottomOffsetsDefault(obj2).bottomOffset };
          updateSharedValueIfChangedDefault(sharedValue, rect);
          const tmp4 = getPIPBottomOffsetForPIPModeDefault(screenName);
        }
        obj = cheapWorkletShallowEqual;
        tmp = safeAreaState2;
      };
      let obj2 = require("ReanimatedRexport");
      fn2.__closure = {
        cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual,
        getPIPBottomOffsetForPIPMode: sharedValue(17091),
        getAdjustedBottomOffsets: sharedValue(17165),
        updateSharedValueIfChanged: sharedValue(9774),
        pipAvoidanceSpecs: sharedValue,
      };
      fn2.__workletHash = 10685434620469;
      fn2.__initData = __initData4;
      const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
      return sharedValue;
    };
