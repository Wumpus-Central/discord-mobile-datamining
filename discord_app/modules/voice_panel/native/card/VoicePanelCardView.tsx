// discord_app/modules/voice_panel/native/card/VoicePanelCardView.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import intl2 from "../../../../intl/index.native.tsx";
import AccessibilityAnnouncer2 from "../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import CallConstants from "../../../calls/CallConstants.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import react3 from "../../../../../_runtime/05738_react.js";
import ReanimatedNativeViewDefault from "../../../core/native/ReanimatedNativeView.tsx";
import cheapWorkletShallowEqual2 from "../../../reanimated/native/cheapWorkletShallowEqual.tsx";
import roundToNearestPixelDefault from "../utils/roundToNearestPixel.tsx";
import VoicePanelControlsConstants from "../controls/VoicePanelControlsConstants.tsx";
import VoicePanelCardConstants from "VoicePanelCardConstants.tsx";
import calculateVoicePanelHeaderSpecsDefault from "../header/calculateVoicePanelHeaderSpecs.tsx";
import VoicePanelPIPConstants from "../pip/VoicePanelPIPConstants.tsx";
import VoicePanelCardDefault from "VoicePanelCard.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";
import VoicePanelConstants from "../../VoicePanelConstants.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, children, dependencyMap;

let UI_SHOW_HIDE_PHYSICS;
let VOICE_PANEL_CHUNK_DIVISOR;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
function getCardKey(type) {
  return "" + type.type + "-" + type.id;
}
function renderCard(key, item, transitionState, cleanUp) {
  return jsx(VoicePanelCardDefault, { item, transitionState, cleanUp }, key);
}
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({
  LAYOUT_PHYSICS: metroImportAll,
  VoicePanelModes: c9,
  UI_SHOW_HIDE_PHYSICS,
  VOICE_PANEL_CHUNK_DIVISOR,
} = VoicePanelConstants);
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const VoicePanelPIPModes = VoicePanelPIPConstants.VoicePanelPIPModes;
const EDGE_GUTTER = VoicePanelCardConstants.EDGE_GUTTER;
const isUserParticipant = CallConstants.isUserParticipant;
const jsx = Fragment.jsx;
let SCALE_PHYSICS = { mass: 1, restSpeedThreshold: 0.00001 };
const merged = Object.assign(UI_SHOW_HIDE_PHYSICS);
let closure_18 = { start: 0, end: VOICE_PANEL_CHUNK_DIVISOR };
const __initData = {
  code: "function VoicePanelCardViewTsx1(){const{viewableChunks}=this.__closure;return viewableChunks.get();}",
};
const __initData2 = {
  code: "function VoicePanelCardViewTsx2(newChunks_0,previous){const{cheapWorkletShallowEqual,runOnJS,updateValueIfChange}=this.__closure;if(cheapWorkletShallowEqual(newChunks_0,previous!==null&&previous!==void 0?previous:undefined)){return;}runOnJS(updateValueIfChange)(newChunks_0);}",
};
const __initData3 = {
  code: "function VoicePanelCardViewTsx3(){const{viewableChunks}=this.__closure;return viewableChunks.get();}",
};
const __initData4 = {
  code: "function VoicePanelCardViewTsx4(newChunks_0,previous){const{cheapWorkletShallowEqual,runOnJS,updateValueIfChange}=this.__closure;if(cheapWorkletShallowEqual(newChunks_0,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(updateValueIfChange)(newChunks_0);}",
};
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? (viewableChunks) => {
      let closure_1;
      let first;
      _require = viewableChunks;
      [first, closure_1] = react.useState(closure_18);
      function updateValueIfChange(arg0) {
        let closure_0 = arg0;
        closure_1((start) => {
          let tmp2 = start;
          if (start.start === start.start) {
            tmp2 = start;
            if (start.end === start.end) {
              tmp2 = start;
            }
          }
          return tmp2;
        });
      }
      const fn = function h() {
        return viewableChunks.get();
      };
      fn.__closure = { viewableChunks };
      fn.__workletHash = 1074173860641;
      fn.__initData = __initData;
      const fn2 = function s(safeAreaState, safeAreaState2) {
        const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
        cheapWorkletShallowEqual2;
        const tmp = safeAreaState2;
        if (!cheapWorkletShallowEqual(safeAreaState, tmp)) {
          const tmp2Result = ReanimatedRexport;
          tmp2Result.runOnJS(updateValueIfChange)(safeAreaState);
        }
      };
      const obj = require("ReanimatedRexport");
      fn2.__closure = {
        cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual,
        runOnJS: require("ReanimatedRexport").runOnJS,
        updateValueIfChange,
      };
      fn2.__workletHash = 8068567273906;
      fn2.__initData = __initData2;
      ({
        cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual,
        runOnJS: require("ReanimatedRexport").runOnJS,
        updateValueIfChange,
      });
      const animatedReaction = obj.useAnimatedReaction(fn, fn2);
      return first;
    }
  : (viewableChunks) => {
      let tmp2;
      _require = viewableChunks;
      let tmp = _slicedToArray(react.useState(closure_18), 2);
      [tmp2, importDefault] = tmp;
      const updateValueIfChange = react.useCallback((arg0) => {
        let closure_0 = arg0;
        importDefault((start) => {
          let tmp2 = start;
          if (start.start === start.start) {
            tmp2 = start;
            if (start.end === start.end) {
              tmp2 = start;
            }
          }
          return tmp2;
        });
      }, []);
      const fn = function h() {
        return viewableChunks.get();
      };
      fn.__closure = { viewableChunks };
      fn.__workletHash = 1697075298595;
      fn.__initData = __initData3;
      const fn2 = function s(safeAreaState, safeAreaState2) {
        const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
        cheapWorkletShallowEqual2;
        const tmp = safeAreaState2;
        if (!cheapWorkletShallowEqual(safeAreaState, tmp)) {
          const tmp2Result = ReanimatedRexport;
          tmp2Result.runOnJS(callback)(safeAreaState);
        }
      };
      const obj = require("ReanimatedRexport");
      fn2.__closure = {
        cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual,
        runOnJS: require("ReanimatedRexport").runOnJS,
        updateValueIfChange,
      };
      fn2.__workletHash = 4342690464082;
      fn2.__initData = __initData4;
      ({
        cheapWorkletShallowEqual: require("cheapWorkletShallowEqual").cheapWorkletShallowEqual,
        runOnJS: require("ReanimatedRexport").runOnJS,
        updateValueIfChange,
      });
      const animatedReaction = obj.useAnimatedReaction(fn, fn2);
      return tmp2;
    };
const __initData5 = {
  code: 'function VoicePanelCardViewTsx5(){const{controlsSpecs,VoicePanelControlsModes,safeArea,EDGE_GUTTER,calculateVoicePanelHeaderSpecs,edgeGutter,connected,contentDimensions,windowDimensions,mode,VoicePanelModes,focused,roundToNearestPixel,withSpring,wrapperOffset,LAYOUT_PHYSICS,SCALE_PHYSICS,freeze}=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;let height=0;let scale=1;let top=0;const safeAreaBottom=Math.max(safeArea.get().bottom,EDGE_GUTTER);const{height:headerBarHeight,paddingTop:safeAreaTop}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(connected.get()){height=0+safeAreaTop;height=height+contentDimensions.get().height;height=height+safeAreaBottom;if(height-windowDimensions.get().height<8){height=windowDimensions.get().height;}if(mode.get()!==VoicePanelModes.PIP&&!hidden&&focused.get()==null){const targetHeight=height-headerBarHeight-EDGE_GUTTER-controlsSpecs.get().height-safeAreaBottom;const fullView=windowDimensions.get().height-safeAreaTop-safeAreaBottom;const controlsView=windowDimensions.get().height-headerBarHeight-controlsSpecs.get().height-safeAreaBottom;top=headerBarHeight;scale=function(){if(contentDimensions.get().height>targetHeight){return targetHeight/contentDimensions.get().height;}return 1;}();if(contentDimensions.get().height<fullView&&contentDimensions.get().height>controlsView){const offsetOriginal=(fullView-contentDimensions.get().height)/2;const scaledContent=contentDimensions.get().height*scale;const scaledOffset=(controlsView-scaledContent)/2;top=top-(offsetOriginal-scaledOffset)*scale;}if(contentDimensions.get().height>targetHeight){top=top+(height*scale-height)/2;}else{top=top+(targetHeight-(windowDimensions.get().height-safeAreaTop-safeAreaBottom))/2;}top=top-safeAreaTop*scale;}}return{position:"relative",width:windowDimensions.get().width,height:roundToNearestPixel(height),transform:[{translateY:withSpring(top+wrapperOffset.get().y,wrapperOffset.get().gestureActive||mode.get()===VoicePanelModes.PIP?LAYOUT_PHYSICS:SCALE_PHYSICS)},{scale:withSpring(scale,SCALE_PHYSICS)}],opacity:freeze?0:1};}',
};
const __initData6 = {
  code: "function VoicePanelCardViewTsx6(){const{controlsSpecs,VoicePanelControlsModes,safeArea,EDGE_GUTTER,calculateVoicePanelHeaderSpecs,edgeGutter,connected,contentDimensions,windowDimensions,mode,VoicePanelModes,focused,roundToNearestPixel,withSpring,wrapperOffset,LAYOUT_PHYSICS,SCALE_PHYSICS,freeze}=this.__closure;const hidden=controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN;let height=0;let scale=1;let top=0;const safeAreaBottom=Math.max(safeArea.get().bottom,EDGE_GUTTER);const{height:headerBarHeight,paddingTop:safeAreaTop}=calculateVoicePanelHeaderSpecs(safeArea.get(),edgeGutter);if(connected.get()){height+=safeAreaTop;height+=contentDimensions.get().height;height+=safeAreaBottom;if(height-windowDimensions.get().height<8){height=windowDimensions.get().height;}if(mode.get()!==VoicePanelModes.PIP&&!hidden&&focused.get()==null){const targetHeight=height-headerBarHeight-EDGE_GUTTER-controlsSpecs.get().height-safeAreaBottom;const fullView=windowDimensions.get().height-safeAreaTop-safeAreaBottom;const controlsView=windowDimensions.get().height-headerBarHeight-controlsSpecs.get().height-safeAreaBottom;top=headerBarHeight;scale=function(){if(contentDimensions.get().height>targetHeight){return targetHeight/contentDimensions.get().height;}return 1;}();if(contentDimensions.get().height<fullView&&contentDimensions.get().height>controlsView){const offsetOriginal=(fullView-contentDimensions.get().height)/2;const scaledContent=contentDimensions.get().height*scale;const scaledOffset=(controlsView-scaledContent)/2;top-=(offsetOriginal-scaledOffset)*scale;}if(contentDimensions.get().height>targetHeight){top+=(height*scale-height)/2;}else{top+=(targetHeight-(windowDimensions.get().height-safeAreaTop-safeAreaBottom))/2;}top-=safeAreaTop*scale;}}return{position:'relative',width:windowDimensions.get().width,height:roundToNearestPixel(height),transform:[{translateY:withSpring(top+wrapperOffset.get().y,wrapperOffset.get().gestureActive||mode.get()===VoicePanelModes.PIP?LAYOUT_PHYSICS:SCALE_PHYSICS)},{scale:withSpring(scale,SCALE_PHYSICS)}],opacity:freeze?0:1};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled()
  ? (freeze) => {
      let connected;
      let contentDimensions;
      let controlsSpecs;
      _require = freeze;
      const context = contentDimensions.useContext(connected(controlsSpecs[14]));
      connected = context.connected;
      controlsSpecs = context.controlsSpecs;
      const safeArea = context.safeArea;
      contentDimensions = context.contentDimensions;
      const windowDimensions = context.windowDimensions;
      let mode = context.mode;
      const focused = context.focused;
      const wrapperOffset = context.wrapperOffset;
      SCALE_PHYSICS = require("useToken");
      const token = SCALE_PHYSICS.useToken(connected(controlsSpecs[16]).modules.mobile.VOICE_PANEL_GUTTER);
      const fn = function o() {
        let height;
        let paddingTop;
        let tmp20Result;
        mode = controlsSpecs.get().mode;
        const HIDDEN = VoicePanelControlsModes.HIDDEN;
        const bound = Math.max(safeArea.get().bottom, EDGE_GUTTER);
        const tmp5 = calculateVoicePanelHeaderSpecsDefault;
        ({ height, paddingTop } = tmp5(safeArea.get(), token));
        let num = 1;
        let num2 = 0;
        let num3 = 1;
        let num4 = 0;
        tmp5(safeArea.get(), token);
        if (connected.get()) {
          let height2 = paddingTop + contentDimensions.get().height + bound;
          if (height2 - windowDimensions.get().height < 8) {
            height2 = windowDimensions.get().height;
          }
          num2 = 0;
          num3 = num;
          num4 = height2;
          if (mode.get() !== token.PIP) {
            num2 = 0;
            num3 = num;
            num4 = height2;
            if (mode !== HIDDEN) {
              num2 = 0;
              num3 = num;
              num4 = height2;
              if (null == focused.get()) {
                let sum;
                const diff = height2 - height - EDGE_GUTTER;
                const diff1 = diff - controlsSpecs.get().height - bound;
                const diff2 = windowDimensions.get().height - paddingTop - bound;
                const diff3 = windowDimensions.get().height - height;
                const diff4 = diff3 - controlsSpecs.get().height - bound;
                let result = num;
                if (contentDimensions.get().height > diff1) {
                  result = diff1 / contentDimensions.get().height;
                }
                let diff5 = height;
                const tmp16 = contentDimensions.get().height < diff2 && contentDimensions.get().height > diff4;
                if (tmp16) {
                  const result1 = (diff2 - contentDimensions.get().height) / 2;
                  diff5 = height - (result1 - (diff4 - contentDimensions.get().height * result) / 2) * result;
                }
                if (contentDimensions.get().height > diff1) {
                  sum = diff5 + (height2 * result - height2) / 2;
                } else {
                  sum = diff5 + (diff1 - (windowDimensions.get().height - paddingTop - bound)) / 2;
                }
                num2 = sum - paddingTop * result;
                num3 = result;
                num4 = height2;
              }
            }
          }
        }
        size = {
          position: "relative",
          width: windowDimensions.get().width,
          height: roundToNearestPixelDefault(num4),
          transform: null,
          opacity: null,
        };
        const withSpring = spring.withSpring;
        spring;
        const sum1 = num2 + wrapperOffset.get().y;
        if (!wrapperOffset.get().gestureActive) {
          let tmp25;
          if (mode.get() !== token.PIP) {
            tmp25 = controlsSpecs;
          }
          const items = [{ translateY: withSpring(sum1, tmp25) }];
          const obj4 = { translateY: withSpring(sum1, tmp25) };
          const obj5 = { scale: tmp20Result.withSpring(num3, controlsSpecs) };
          items[1] = obj5;
          size.transform = items;
          tmp20Result = spring;
          if (freeze) {
            num = 0;
          }
          size.opacity = num;
          return size;
        }
        tmp25 = metroImportAll;
      };
      const obj2 = require("ReanimatedRexport");
      fn.__closure = {
        controlsSpecs,
        VoicePanelControlsModes,
        safeArea,
        EDGE_GUTTER,
        calculateVoicePanelHeaderSpecs: connected(controlsSpecs[17]),
        edgeGutter: token,
        connected,
        contentDimensions,
        windowDimensions,
        mode,
        VoicePanelModes: token,
        focused,
        roundToNearestPixel: connected(controlsSpecs[18]),
        withSpring: require("spring").withSpring,
        wrapperOffset,
        LAYOUT_PHYSICS: wrapperOffset,
        SCALE_PHYSICS,
        freeze,
      };
      fn.__workletHash = 270121942538;
      fn.__initData = __initData5;
      ({
        controlsSpecs,
        VoicePanelControlsModes,
        safeArea,
        EDGE_GUTTER,
        calculateVoicePanelHeaderSpecs: connected(controlsSpecs[17]),
        edgeGutter: token,
        connected,
        contentDimensions,
        windowDimensions,
        mode,
        VoicePanelModes: token,
        focused,
        roundToNearestPixel: connected(controlsSpecs[18]),
        withSpring: require("spring").withSpring,
        wrapperOffset,
        LAYOUT_PHYSICS: wrapperOffset,
        SCALE_PHYSICS,
        freeze,
      });
      return obj2.useAnimatedStyle(fn);
    }
  : (freeze) => {
      let connected;
      let contentDimensions;
      let controlsSpecs;
      _require = freeze;
      const context = contentDimensions.useContext(connected(controlsSpecs[14]));
      connected = context.connected;
      controlsSpecs = context.controlsSpecs;
      const safeArea = context.safeArea;
      contentDimensions = context.contentDimensions;
      const windowDimensions = context.windowDimensions;
      let mode = context.mode;
      const focused = context.focused;
      const wrapperOffset = context.wrapperOffset;
      SCALE_PHYSICS = require("useToken");
      const token = SCALE_PHYSICS.useToken(connected(controlsSpecs[16]).modules.mobile.VOICE_PANEL_GUTTER);
      const fn = function o() {
        let height;
        let paddingTop;
        let tmp20Result;
        mode = controlsSpecs.get().mode;
        const HIDDEN = VoicePanelControlsModes.HIDDEN;
        const bound = Math.max(safeArea.get().bottom, EDGE_GUTTER);
        const tmp5 = calculateVoicePanelHeaderSpecsDefault;
        ({ height, paddingTop } = tmp5(safeArea.get(), token));
        let num = 1;
        let num2 = 0;
        let num3 = 1;
        let num4 = 0;
        tmp5(safeArea.get(), token);
        if (connected.get()) {
          let height2 = paddingTop + contentDimensions.get().height + bound;
          if (height2 - windowDimensions.get().height < 8) {
            height2 = windowDimensions.get().height;
          }
          num2 = 0;
          num3 = num;
          num4 = height2;
          if (mode.get() !== token.PIP) {
            num2 = 0;
            num3 = num;
            num4 = height2;
            if (mode !== HIDDEN) {
              num2 = 0;
              num3 = num;
              num4 = height2;
              if (null == focused.get()) {
                let sum;
                const diff = height2 - height - EDGE_GUTTER;
                const diff1 = diff - controlsSpecs.get().height - bound;
                const diff2 = windowDimensions.get().height - paddingTop - bound;
                const diff3 = windowDimensions.get().height - height;
                const diff4 = diff3 - controlsSpecs.get().height - bound;
                let result = num;
                if (contentDimensions.get().height > diff1) {
                  result = diff1 / contentDimensions.get().height;
                }
                let diff5 = height;
                const tmp16 = contentDimensions.get().height < diff2 && contentDimensions.get().height > diff4;
                if (tmp16) {
                  const result1 = (diff2 - contentDimensions.get().height) / 2;
                  diff5 = height - (result1 - (diff4 - contentDimensions.get().height * result) / 2) * result;
                }
                if (contentDimensions.get().height > diff1) {
                  sum = diff5 + (height2 * result - height2) / 2;
                } else {
                  sum = diff5 + (diff1 - (windowDimensions.get().height - paddingTop - bound)) / 2;
                }
                num2 = sum - paddingTop * result;
                num3 = result;
                num4 = height2;
              }
            }
          }
        }
        size = {
          position: "relative",
          width: windowDimensions.get().width,
          height: roundToNearestPixelDefault(num4),
          transform: null,
          opacity: null,
        };
        const withSpring = spring.withSpring;
        spring;
        const sum1 = num2 + wrapperOffset.get().y;
        if (!wrapperOffset.get().gestureActive) {
          let tmp25;
          if (mode.get() !== token.PIP) {
            tmp25 = controlsSpecs;
          }
          const items = [{ translateY: withSpring(sum1, tmp25) }];
          const obj4 = { translateY: withSpring(sum1, tmp25) };
          const obj5 = { scale: tmp20Result.withSpring(num3, controlsSpecs) };
          items[1] = obj5;
          size.transform = items;
          tmp20Result = spring;
          if (freeze) {
            num = 0;
          }
          size.opacity = num;
          return size;
        }
        tmp25 = metroImportAll;
      };
      const obj2 = require("ReanimatedRexport");
      fn.__closure = {
        controlsSpecs,
        VoicePanelControlsModes,
        safeArea,
        EDGE_GUTTER,
        calculateVoicePanelHeaderSpecs: connected(controlsSpecs[17]),
        edgeGutter: token,
        connected,
        contentDimensions,
        windowDimensions,
        mode,
        VoicePanelModes: token,
        focused,
        roundToNearestPixel: connected(controlsSpecs[18]),
        withSpring: require("spring").withSpring,
        wrapperOffset,
        LAYOUT_PHYSICS: wrapperOffset,
        SCALE_PHYSICS,
        freeze,
      };
      fn.__workletHash = 12625747503513;
      fn.__initData = __initData6;
      ({
        controlsSpecs,
        VoicePanelControlsModes,
        safeArea,
        EDGE_GUTTER,
        calculateVoicePanelHeaderSpecs: connected(controlsSpecs[17]),
        edgeGutter: token,
        connected,
        contentDimensions,
        windowDimensions,
        mode,
        VoicePanelModes: token,
        focused,
        roundToNearestPixel: connected(controlsSpecs[18]),
        withSpring: require("spring").withSpring,
        wrapperOffset,
        LAYOUT_PHYSICS: wrapperOffset,
        SCALE_PHYSICS,
        freeze,
      });
      return obj2.useAnimatedStyle(fn);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_2;
      let first;
      let mode;
      const tmp = dependencyMap;
      const obj = mode(576);
      const cResult = obj.c(6);
      const obj2 = mode(17207);
      mode = obj2.usePIPState().mode;
      const ref = react.useRef(mode === VoicePanelPIPModes.IN_APP);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = {};
        cResult[0] = obj4;
        first = obj4;
      } else {
        first = cResult[0];
      }
      const tmp6 = _slicedToArray(react.useState(first), 2)[1];
      dependencyMap = tmp6;
      if (cResult[1] === tmp6) {
        let tmp7;
        let tmp8;
        if (cResult[2] === mode) {
          tmp7 = cResult[3];
        }
        if (cResult[4] !== mode) {
          const items = [mode];
          cResult[4] = mode;
          cResult[5] = items;
          tmp8 = items;
        } else {
          tmp8 = cResult[5];
        }
        const effect = react.useEffect(tmp7, tmp8);
        const tmp11 = mode === VoicePanelPIPModes.IN_APP && ref(5973)(ref);
        return tmp11;
      }
      const fn = function l() {
        let closure_0;
        let timeout;
        if (timeout === constants.IN_APP) {
          const _setTimeout = setTimeout;
          timeout = setTimeout(() => {
            if (!ref.current) {
              tmp.current = true;
              closure_1_2({});
            }
          }, 700);
          return () => {
            clearTimeout(closure_0);
          };
        } else {
          ref.current = false;
        }
      };
      cResult[1] = tmp6;
      cResult[2] = mode;
      cResult[3] = fn;
      tmp7 = fn;
    }
  : () => {
      let closure_2;
      let mode;
      const obj = mode(17207);
      mode = obj.usePIPState().mode;
      const ref = react.useRef(mode === VoicePanelPIPModes.IN_APP);
      dependencyMap = _slicedToArray(react.useState({}), 2)[1];
      const items = [mode];
      const effect = react.useEffect(() => {
        let closure_0;
        let timeout;
        if (timeout === constants.IN_APP) {
          const _setTimeout = setTimeout;
          timeout = setTimeout(() => {
            if (!ref.current) {
              tmp.current = true;
              closure_1_2({});
            }
          }, 700);
          return () => {
            clearTimeout(closure_0);
          };
        } else {
          ref.current = false;
        }
      }, items);
      const tmp3 = mode === VoicePanelPIPModes.IN_APP && ref(5973)(ref);
      return tmp3;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_28 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      let tmp6;
      const obj = react2;
      const cResult = obj.c(8);
      children = children.children;
      const tmp4 = closure_27();
      const tmp5 = closure_26(tmp4);
      if (cResult[0] !== children) {
        const tmp10 = (
          <metroRequire collapsable={false} style={hasOwnProperty.absoluteFill}>
            {children}
          </metroRequire>
        );
        cResult[0] = children;
        cResult[1] = tmp10;
        tmp6 = tmp10;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === tmp4) {
        let tmp11;
        if (cResult[3] === tmp6) {
          tmp11 = cResult[4];
        }
        if (cResult[5] === tmp5) {
          let tmp13;
          if (cResult[6] === tmp11) {
            tmp13 = cResult[7];
          }
          return tmp13;
        }
        const tmp16 = jsx(ReanimatedNativeViewDefault, { style: tmp5, children: tmp11 });
        cResult[5] = tmp5;
        cResult[6] = tmp11;
        cResult[7] = tmp16;
        tmp13 = tmp16;
      }
      const tmp12 = jsx(react3.Freeze, { freeze: tmp4, children: tmp6 });
      cResult[2] = tmp4;
      cResult[3] = tmp6;
      cResult[4] = tmp12;
      tmp11 = tmp12;
    }
  : (children) => {
      children = children.children;
      const tmp = closure_27();
      const freeze = tmp;
      const tmp2 = closure_26(tmp);
      const style = tmp2;
      const items = [tmp2, tmp, children];
      return react.useMemo(() => {
        ReanimatedNativeViewDefault;
        const Freeze = react3.Freeze;
        return <tmp style={style}>{null}</tmp>;
      }, items);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (viewableChunks) => {
        let channelId;
        let first;
        let items2;
        let ref;
        let stateFromStoresArray;
        let tmp8;
        let tmp9;
        let obj = channelId(576);
        const cResult = obj.c(11);
        viewableChunks = viewableChunks.viewableChunks;
        channelId = react.useContext(stateFromStoresArray(11901)).channelId;
        const tmp4 = closure_23(viewableChunks);
        const obj3 = channelId(17301);
        const chunkedParticipants = obj3.useChunkedParticipants(channelId, tmp4);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ChannelRTCStore];
          cResult[0] = items;
          first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== channelId) {
          const fn = function s() {
            const participants = ChannelRTCStore.getParticipants(channelId);
            return participants.filter((item) => closure_1_13(item));
          };
          const items1 = [channelId];
          cResult[1] = channelId;
          cResult[2] = fn;
          cResult[3] = items1;
          tmp9 = items1;
          tmp8 = fn;
        } else {
          tmp8 = cResult[2];
          tmp9 = cResult[3];
        }
        let tmpResult = tmp(504);
        stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp8, tmp9);
        dependencyMap = react.useRef(stateFromStoresArray);
        if (cResult[4] !== stateFromStoresArray) {
          class S {
            constructor() {
              const obj = _modDef12;
              if (!obj.isEqual(ref.current, stateFromStoresArray)) {
                const tmpResult = _modDef12;
                const differenceWithResult = tmpResult.differenceWith(
                  ref.current,
                  stateFromStoresArray,
                  (id, id2) => id.id === id2.id,
                );
                let user = null;
                if (differenceWithResult.length > 0) {
                  user = differenceWithResult[0].user;
                }
                if (null != user) {
                  const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
                  const announce = AccessibilityAnnouncer.announce;
                  const intl = intl2.intl;
                  const obj2 = { username: user.username };
                  announce(intl.formatToPlainString(intl2.t["9NqwWZ"], obj2));
                }
              }
              ref.current = stateFromStoresArray;
            }
          }
          cResult[4] = stateFromStoresArray;
          cResult[5] = S;
        } else {
          class S {
            constructor() {
              const obj = _modDef12;
              if (!obj.isEqual(ref.current, stateFromStoresArray)) {
                const tmpResult = _modDef12;
                const differenceWithResult = tmpResult.differenceWith(
                  ref.current,
                  stateFromStoresArray,
                  (id, id2) => id.id === id2.id,
                );
                let user = null;
                if (differenceWithResult.length > 0) {
                  user = differenceWithResult[0].user;
                }
                if (null != user) {
                  const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
                  const announce = AccessibilityAnnouncer.announce;
                  const intl = intl2.intl;
                  const obj2 = { username: user.username };
                  announce(intl.formatToPlainString(intl2.t["9NqwWZ"], obj2));
                }
              }
              ref.current = stateFromStoresArray;
            }
          }
        }
        if (cResult[6] === stateFromStoresArray) {
          let tmp13;
          class S {
            constructor() {
              const obj = _modDef12;
              if (!obj.isEqual(ref.current, stateFromStoresArray)) {
                const tmpResult = _modDef12;
                const differenceWithResult = tmpResult.differenceWith(
                  ref.current,
                  stateFromStoresArray,
                  (id, id2) => id.id === id2.id,
                );
                let user = null;
                if (differenceWithResult.length > 0) {
                  user = differenceWithResult[0].user;
                }
                if (null != user) {
                  const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
                  const announce = AccessibilityAnnouncer.announce;
                  const intl = intl2.intl;
                  const obj2 = { username: user.username };
                  announce(intl.formatToPlainString(intl2.t["9NqwWZ"], obj2));
                }
              }
              ref.current = stateFromStoresArray;
            }
          }
          const effect = react.useEffect(S, items2);
          if (cResult[9] !== chunkedParticipants) {
            class S {
              constructor() {
                const obj = _modDef12;
                if (!obj.isEqual(ref.current, stateFromStoresArray)) {
                  const tmpResult = _modDef12;
                  const differenceWithResult = tmpResult.differenceWith(
                    ref.current,
                    stateFromStoresArray,
                    (id, id2) => id.id === id2.id,
                  );
                  let user = null;
                  if (differenceWithResult.length > 0) {
                    user = differenceWithResult[0].user;
                  }
                  if (null != user) {
                    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
                    const announce = AccessibilityAnnouncer.announce;
                    const intl = intl2.intl;
                    const obj2 = { username: user.username };
                    announce(intl.formatToPlainString(intl2.t["9NqwWZ"], obj2));
                  }
                }
                ref.current = stateFromStoresArray;
              }
            }
            const tmp17 = <closure_28>{null}</closure_28>;
            cResult[9] = chunkedParticipants;
            cResult[10] = tmp17;
            tmp13 = tmp17;
          } else {
            class S {
              constructor() {
                const obj = _modDef12;
                if (!obj.isEqual(ref.current, stateFromStoresArray)) {
                  const tmpResult = _modDef12;
                  const differenceWithResult = tmpResult.differenceWith(
                    ref.current,
                    stateFromStoresArray,
                    (id, id2) => id.id === id2.id,
                  );
                  let user = null;
                  if (differenceWithResult.length > 0) {
                    user = differenceWithResult[0].user;
                  }
                  if (null != user) {
                    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
                    const announce = AccessibilityAnnouncer.announce;
                    const intl = intl2.intl;
                    const obj2 = { username: user.username };
                    announce(intl.formatToPlainString(intl2.t["9NqwWZ"], obj2));
                  }
                }
                ref.current = stateFromStoresArray;
              }
            }
          }
          return tmp13;
        }
        items2 = [stateFromStoresArray, channelId];
        cResult[6] = stateFromStoresArray;
        cResult[7] = channelId;
        cResult[8] = items2;
      }
    : (viewableChunks) => {
        let chunkedParticipants;
        let stateFromStoresArray;
        viewableChunks = viewableChunks.viewableChunks;
        const channelId = react.useContext(chunkedParticipants(stateFromStoresArray[14])).channelId;
        const tmp = closure_23(viewableChunks);
        let obj = channelId(stateFromStoresArray[25]);
        chunkedParticipants = obj.useChunkedParticipants(channelId, tmp);
        let obj2 = channelId(stateFromStoresArray[26]);
        const items = [ChannelRTCStore];
        const items1 = [channelId];
        stateFromStoresArray = obj2.useStateFromStoresArray(
          items,
          () => {
            const participants = ChannelRTCStore.getParticipants(channelId);
            return participants.filter((item) => closure_1_13(item));
          },
          items1,
        );
        const ref = react.useRef(stateFromStoresArray);
        const items2 = [stateFromStoresArray, channelId];
        const effect = react.useEffect(() => {
          const obj = _modDef12;
          if (!obj.isEqual(ref.current, stateFromStoresArray)) {
            const tmpResult = _modDef12;
            const differenceWithResult = tmpResult.differenceWith(
              ref.current,
              stateFromStoresArray,
              (id, id2) => id.id === id2.id,
            );
            let user = null;
            if (differenceWithResult.length > 0) {
              user = differenceWithResult[0].user;
            }
            if (null != user) {
              const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
              const announce = AccessibilityAnnouncer.announce;
              const intl = intl2.intl;
              const obj2 = { username: user.username };
              announce(intl.formatToPlainString(intl2.t["9NqwWZ"], obj2));
            }
          }
          ref.current = stateFromStoresArray;
        }, items2);
        const items3 = [chunkedParticipants];
        return react.useMemo(() => <closure_28>{null}</closure_28>, items3);
      },
);
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCardView.tsx");

export default memoResult;
