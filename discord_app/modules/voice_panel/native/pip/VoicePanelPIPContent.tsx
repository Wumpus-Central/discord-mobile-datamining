// discord_app/modules/voice_panel/native/pip/VoicePanelPIPContent.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ComponentDispatchUtils from "../../../../utils/ComponentDispatchUtils.tsx";
import useWindowDimensions from "../../../screen/useWindowDimensions.native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport2 from "../../../reanimated/ReanimatedRexport.tsx";
import LinearGradientDefault from "../../../../../_runtime/05612_LinearGradient.js";
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import ReanimatedNativeViewDefault from "../../../core/native/ReanimatedNativeView.tsx";
import ExternalPipDefault from "../../../external_pip/ExternalPip.android.tsx";
import VideoRendererNativeComponentDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/VideoRendererNativeComponent.tsx";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import VoicePanelConstants from "../../VoicePanelConstants.tsx";
import VoicePanelCardLayoutManager from "../card/VoicePanelCardLayoutManager.tsx";
import VideoActionCreators from "../../../media/VideoActionCreators.tsx";
import VoicePanelPIPUtils from "VoicePanelPIPUtils.tsx";
import VoicePanelPIPConstants from "VoicePanelPIPConstants.tsx";
import VoicePanelPIPStateContext from "VoicePanelPIPStateContext.tsx";
import VoicePanelStreamOutputSinkStack from "../controller/VoicePanelStreamOutputSinkStack.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import EmbeddedActivitiesStore_mod from "../../../activities/EmbeddedActivitiesStore.tsx";
import ChannelRTCStore_mod from "../../../calls/ChannelRTCStore.tsx";
import ChannelCallLifecycleStore from "../../../video_calls/native/ChannelCallLifecycleStore.tsx";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import Constants_mod from "../../../../Constants.tsx";
import Constants_mod2 from "../../../activities/Constants.tsx";
import CallConstants from "../../../calls/CallConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const ReanimatedRexport = ReanimatedRexport2;
let _require, dependencyMap, importDefault;

let StyleSheet;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let hasOwnProperty;
let obj2;
let size;
let size1;
let tmp3;
const AssetRegistryDefault = tmp3(4814);
const useProfileTileGradientDefault = tmp3(7934);
function markContentReady() {
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(constants2.VOICE_PANEL_PIP_CONTENT_READY);
}
function getFocusedKey(id) {
  return id.id;
}
function areParticipantsEqual(arg0, arg1) {
  if (arg0.length !== arg1.length) {
    return false;
  } else if (0 === arg0.length) {
    return true;
  } else {
    let num2 = 0;
    const iter = arg0[Symbol.iterator]();
    while (iter !== undefined) {
      let tmp6 = arg1[num2];
      let id1;
      let id = iter.next().id;
      if (tmp6 != null) {
        id1 = tmp6.id;
      }
      if (id !== id1) {
        iter.return();
        let flag = false;
        return false;
      } else {
        num2 = num2 + 1;
        continue;
      }
    }
    return true;
  }
}
let react = react_mod;
({ PixelRatio: hasOwnProperty, StyleSheet } = react_native);
let EmbeddedActivitiesStore = EmbeddedActivitiesStore_mod;
let ChannelRTCStore = ChannelRTCStore_mod;
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const VoicePanelPIPModes = VoicePanelPIPConstants.VoicePanelPIPModes;
let Constants = Constants_mod2;
({ ApplicationStreamStates: closure_16, ComponentActions: closure_17 } = Constants);
Constants = Constants_mod2;
({ ActivityLayoutMode: closure_18, OrientationLockState: closure_19 } = Constants);
({ ParticipantTypes: closure_20, isActivityParticipant: closure_21 } = CallConstants);
({ jsx: closure_22, jsxs: closure_23 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  contentWrapper: {
    position: "absolute",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  userOpacity: { opacity: 0.1 },
  activity: { position: "absolute", width: "100%", height: "100%" },
  user: { position: "absolute", width: "100%", height: "100%", alignItems: "center", justifyContent: "center" },
  video: { position: "absolute", width: "100%", height: "100%" },
  avatarWrapper: { position: "relative", width: "56%", height: "56%", alignItems: "center", justifyContent: "center" },
  thermalAlertIconContainer: size,
  thermalAlertIcon: size1,
  onTop: { zIndex: 1 },
  onBottom: { zIndex: 0 },
  streamEmptyImage: { width: "50%" },
  emptyPip: obj2,
  innerStroke: {
    position: "absolute",
    top: -1,
    left: -1,
    bottom: -1,
    right: -1,
    borderWidth: 2,
    borderColor: "white",
    zIndex: 1,
    opacity: 0.3,
  },
  blackBackground: { backgroundColor: "black" },
};
size = {
  width: 22,
  height: 22,
  backgroundColor: "rgba(78, 80, 88, 0.48)",
  borderRadius: nativeDefault.radii.round,
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: 6,
  left: 6,
};
createStyles = createStyles.createStyles;
size1 = { width: 14, height: 14, color: nativeDefault.colors.WHITE };
obj2 = { backgroundColor: nativeDefault.colors.BLACK };
let merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_24 = createStyles(obj);
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled()
  ? (streamId) => {
      const obj = react2;
      const cResult = obj.c(6);
      streamId = streamId.streamId;
      const streamOutputSinkStack = react.useContext(VoicePanelStateContextDefault).streamOutputSinkStack;
      const obj3 = VoicePanelStreamOutputSinkStack;
      const setHasActiveVideoOutputSink = obj3.useSetHasActiveVideoOutputSink(streamOutputSinkStack);
      if (cResult[0] === setHasActiveVideoOutputSink) {
        let tmp5;
        let tmp6;
        let tmp8;
        if (cResult[1] === streamId) {
          tmp5 = cResult[2];
          tmp6 = cResult[3];
        }
        const effect = react.useEffect(tmp5, tmp6);
        if (cResult[4] !== streamId) {
          const obj4 = {};
          const tmp3Result = VideoRendererNativeComponentDefault;
          const merged = Object.assign(streamId);
          const tmp14 = afk(tmp3Result, obj4);
          cResult[4] = streamId;
          cResult[5] = tmp14;
          tmp8 = tmp14;
        } else {
          tmp8 = cResult[5];
        }
        return tmp8;
      }
      const fn = function o() {
        if (null != streamId) {
          setHasActiveVideoOutputSink(tmp, true);
          return () => {
            setHasActiveVideoOutputSink(streamId, false);
          };
        }
      };
      const items = [setHasActiveVideoOutputSink, streamId];
      cResult[0] = setHasActiveVideoOutputSink;
      cResult[1] = streamId;
      cResult[2] = fn;
      cResult[3] = items;
      tmp6 = items;
      tmp5 = fn;
    }
  : (streamId) => {
      streamId = streamId.streamId;
      const streamOutputSinkStack = react.useContext(VoicePanelStateContextDefault).streamOutputSinkStack;
      const obj = VoicePanelStreamOutputSinkStack;
      const setHasActiveVideoOutputSink = obj.useSetHasActiveVideoOutputSink(streamOutputSinkStack);
      const items = [setHasActiveVideoOutputSink, streamId];
      const effect = react.useEffect(() => {
        if (null != streamId) {
          setHasActiveVideoOutputSink(tmp, true);
          return () => {
            setHasActiveVideoOutputSink(streamId, false);
          };
        }
      }, items);
      const obj2 = {};
      const tmp3 = VideoRendererNativeComponentDefault;
      const merged = Object.assign(streamId);
      return afk(tmp3, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_28 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onTop, arg1, arg2) => {
      let closure_0;
      _require = arg1;
      let closure_1 = arg2;
      let tmp = _require;
      const obj = require("react");
      const cResult = obj.c(4);
      if (cResult[0] === arg2) {
        let tmp4;
        let tmp5;
        if (cResult[1] === arg1) {
          tmp4 = cResult[2];
          tmp5 = cResult[3];
        }
        const effect = react.useEffect(tmp4, tmp5);
        return arg1 === tmp(4595).TransitionStates.YEETED ? onTop.onTop : onTop.onBottom;
      }
      const fn = function u() {
        let timeout;
        let tmp = timeout;
        if (timeout === timeout(dependencyMap[26]).TransitionStates.YEETED) {
          const _setTimeout = setTimeout;
          timeout = setTimeout(() => {
            let tmp;
            if (handleVideoReady != null) {
              tmp = handleVideoReady();
            }
            return tmp;
          }, 500);
          function handleVideoReady() {
            clearTimeout(closure_0);
            const timerId = setTimeout(() => {
              let tmp;
              if (handleVideoReady != null) {
                tmp = handleVideoReady();
              }
              return tmp;
            }, 17);
          }
          let ComponentDispatch = tmp(dependencyMap[25]).ComponentDispatch;
          const subscription = ComponentDispatch.subscribe(constants.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
          return () => {
            const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
            ComponentDispatch.unsubscribe(constants.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
            clearTimeout(closure_0);
          };
        }
      };
      const items = [arg1, arg2];
      cResult[0] = arg2;
      cResult[1] = arg1;
      cResult[2] = fn;
      cResult[3] = items;
      tmp5 = items;
      tmp4 = fn;
    }
  : (onTop, arg1, arg2) => {
      let closure_0;
      _require = arg1;
      let closure_1 = arg2;
      const items = [arg1, arg2];
      const effect = react.useEffect(() => {
        let timeout;
        function handleVideoReady() {
          clearTimeout(closure_0);
          const timerId = setTimeout(() => {
            let tmp;
            if (handleVideoReady != null) {
              tmp = handleVideoReady();
            }
            return tmp;
          }, 17);
        }
        let tmp = timeout;
        if (timeout === timeout(dependencyMap[26]).TransitionStates.YEETED) {
          const _setTimeout = setTimeout;
          timeout = setTimeout(() => {
            let tmp;
            if (handleVideoReady != null) {
              tmp = handleVideoReady();
            }
            return tmp;
          }, 500);
          let ComponentDispatch = tmp(dependencyMap[25]).ComponentDispatch;
          const subscription = ComponentDispatch.subscribe(constants.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
          return () => {
            const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
            ComponentDispatch.unsubscribe(constants.VOICE_PANEL_PIP_CONTENT_READY, handleVideoReady);
            clearTimeout(closure_0);
          };
        }
      }, items);
      return arg1 === require("native").TransitionStates.YEETED ? onTop.onTop : onTop.onBottom;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled()
  ? (style) => {
      let height;
      let tmp6;
      let width;
      const obj = react2;
      const cResult = obj.c(8);
      style = style.style;
      const obj2 = VoicePanelPIPStateContext;
      const pIPState = obj2.usePIPState();
      ({ width, height } = pIPState);
      const tmp4 = closure_24();
      const obj3 = VoicePanelPIPUtils;
      const sum = obj3.getVoicePanelPIPBorderRadius(width, height) + 1;
      if (cResult[0] !== sum) {
        const obj4 = { borderRadius: sum };
        cResult[0] = sum;
        cResult[1] = obj4;
        tmp6 = obj4;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === style) {
        if (cResult[3] === tmp4.innerStroke) {
          let tmp7;
          let tmp8;
          if (cResult[4] === tmp6) {
            tmp7 = cResult[5];
          }
          if (cResult[6] !== tmp7) {
            const obj5 = { style: tmp7 };
            const tmp11 = afk(NativeViewDefault, obj5);
            cResult[6] = tmp7;
            cResult[7] = tmp11;
            tmp8 = tmp11;
          } else {
            tmp8 = cResult[7];
          }
          return tmp8;
        }
      }
      const items = [tmp4.innerStroke, tmp6, style];
      cResult[2] = style;
      cResult[3] = tmp4.innerStroke;
      cResult[4] = tmp6;
      cResult[5] = items;
      tmp7 = items;
    }
  : (style) => {
      let items;
      style = style.style;
      let height;
      let obj = style(height[27]);
      size = obj.usePIPState();
      const width = size.width;
      height = size.height;
      const tmp = closure_24();
      const innerStroke = tmp;
      let obj2 = {
        style: react.useMemo(() => {
          let obj2;
          const items = [innerStroke.innerStroke, ,];
          const obj = { borderRadius: obj2.getVoicePanelPIPBorderRadius(width, height) + 1 };
          items[1] = obj;
          items[2] = style;
          obj2 = VoicePanelPIPUtils;
          return items;
        }, items),
      };
      items = [width, height, tmp.innerStroke, style];
      const tmp2 = width(height[29]);
      return closure_22(tmp2, obj2);
    };
let closure_30 = {
  code: "function VoicePanelPIPContentTsx1(){const{windowDimensions}=this.__closure;return windowDimensions.get();}",
};
let closure_31 = {
  code: "function VoicePanelPIPContentTsx2(windowDimensionsVal_0,previousWindowDimensionsVal){const{runOnJS,handleTargetAspectRatioParams}=this.__closure;if(windowDimensionsVal_0!==previousWindowDimensionsVal){runOnJS(handleTargetAspectRatioParams)(windowDimensionsVal_0);}}",
};
const __initData = {
  code: "function VoicePanelPIPContentTsx3(){const{windowDimensions}=this.__closure;return windowDimensions.get();}",
};
const __initData2 = {
  code: "function VoicePanelPIPContentTsx4(windowDimensionsVal_0,previousWindowDimensionsVal){const{runOnJS,handleTargetAspectRatioParams}=this.__closure;if(windowDimensionsVal_0!==previousWindowDimensionsVal){runOnJS(handleTargetAspectRatioParams)(windowDimensionsVal_0);}}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_34 = ReactCompilerGating.isReactCompilerEnabled()
  ? (participantId) => {
      let channelId;
      let closure_4;
      let first;
      let layoutManager;
      let layoutTransition;
      let stateFromStores2;
      let tmp12;
      let tmp9;
      let transitionState;
      let obj = participantId(layoutManager[21]);
      const cResult = obj.c(35);
      participantId = participantId.participantId;
      ({ transitionState, layoutTransition } = participantId);
      const transitionCleanUp = participantId.transitionCleanUp;
      const tmp4 = closure_24();
      closure_28(tmp4, transitionState, transitionCleanUp);
      let obj2 = react;
      const context = react.useContext(channelId(layoutManager[22]));
      channelId = context.channelId;
      layoutManager = context.layoutManager;
      const windowDimensions = context.windowDimensions;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function u() {
          return ChannelStore.getChannel(channelId);
        };
        let num2 = 1;
        cResult[1] = channelId;
        let num3 = 2;
        cResult[2] = fn;
        tmp9 = fn;
      } else {
        tmp9 = cResult[2];
      }
      const tmpResult = participantId(layoutManager[30]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp9);
      const tmp11 = windowDimensions(
        obj2.useState(transitionState === participantId(layoutManager[26]).TransitionStates.MOUNTED),
        2,
      );
      react = tmp11[0];
      let closure_5 = tmp11[1];
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ChannelRTCStore];
        cResult[3] = items1;
        tmp12 = items1;
      } else {
        tmp12 = cResult[3];
      }
      if (cResult[4] === channelId) {
        let tmp14;
        let tmp15;
        let tmp17;
        let tmp20;
        if (cResult[5] === participantId) {
          tmp14 = cResult[6];
          tmp15 = cResult[7];
        }
        const tmpResult3 = participantId(layoutManager[30]);
        const stateFromStores1 = tmpResult3.useStateFromStores(tmp12, tmp14, tmp15);
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [stateFromStores2];
          cResult[8] = items2;
          tmp17 = items2;
        } else {
          tmp17 = cResult[8];
        }
        if (cResult[9] !== stateFromStores1) {
          class B {
            constructor() {
              return EmbeddedActivitiesStore.getPipOrientationLockStateForApp(stateFromStores1);
            }
          }
          const items3 = [stateFromStores1];
          cResult[9] = stateFromStores1;
          cResult[10] = B;
          cResult[11] = items3;
          tmp20 = items3;
        } else {
          class B {
            constructor() {
              return EmbeddedActivitiesStore.getPipOrientationLockStateForApp(stateFromStores1);
            }
          }
          tmp20 = cResult[11];
        }
        const tmpResult4 = participantId(layoutManager[30]);
        stateFromStores2 = tmpResult4.useStateFromStores(tmp17, B, tmp20);
        if (cResult[12] === stateFromStores1) {
          class B {
            constructor() {
              return EmbeddedActivitiesStore.getPipOrientationLockStateForApp(stateFromStores1);
            }
          }
        }
        const fn3 = function q(width) {
          if (constants.LANDSCAPE === stateFromStores2) {
            layoutManager.setTargetDimensions(stateFromStores1, 16, 9);
          } else if (constants.PORTRAIT === stateFromStores2) {
            layoutManager.setTargetDimensions(stateFromStores1, 9, 16);
          } else if (constants.UNLOCKED === stateFromStores2) {
            let num2 = 9;
            const setTargetDimensions = layoutManager.setTargetDimensions;
            if (width.width > width.height) {
              num2 = 16;
            }
            let num3 = 16;
            if (width.width > width.height) {
              num3 = 9;
            }
            setTargetDimensions(stateFromStores1, num2, num3);
          }
        };
        cResult[12] = stateFromStores1;
        cResult[13] = layoutManager;
        cResult[14] = stateFromStores2;
        cResult[15] = fn3;
      }
      const fn2 = function x() {
        const participant = ChannelRTCStore.getParticipant(channelId, participantId);
        let applicationId = participantId;
        if (null != participant) {
          applicationId = participantId;
          if (participant.type === constants2.ACTIVITY) {
            applicationId = participant.applicationId;
          }
        }
        return applicationId;
      };
      const items4 = [channelId, participantId];
      cResult[4] = channelId;
      cResult[5] = participantId;
      cResult[6] = fn2;
      cResult[7] = items4;
      tmp15 = items4;
      tmp14 = fn2;
    }
  : (participantId) => {
      let items8;
      let items9;
      let layoutTransition;
      let transitionCleanUp;
      participantId = participantId.participantId;
      const transitionState = participantId.transitionState;
      let channelId;
      let layoutManager;
      let first;
      let stateFromStores2;
      let handleTargetAspectRatioParams;
      ({ transitionCleanUp, layoutTransition } = participantId);
      const tmp = closure_24();
      const tmp2 = closure_28(tmp, transitionState, transitionCleanUp);
      const context = first.useContext(channelId(layoutManager[22]));
      channelId = context.channelId;
      layoutManager = context.layoutManager;
      const windowDimensions = context.windowDimensions;
      let obj = participantId(layoutManager[30]);
      const items = [ChannelStore];
      const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
      const tmp7 = windowDimensions(
        first.useState(transitionState === participantId(layoutManager[26]).TransitionStates.MOUNTED),
        2,
      );
      first = tmp7[0];
      let closure_5 = tmp7[1];
      let obj2 = participantId(layoutManager[30]);
      const items1 = [handleTargetAspectRatioParams];
      const items2 = [channelId, participantId];
      const stateFromStores1 = obj2.useStateFromStores(
        items1,
        () => {
          const participant = ChannelRTCStore.getParticipant(channelId, participantId);
          let applicationId = participantId;
          if (null != participant) {
            applicationId = participantId;
            if (participant.type === constants2.ACTIVITY) {
              applicationId = participant.applicationId;
            }
          }
          return applicationId;
        },
        items2,
      );
      const items3 = [stateFromStores2];
      const items4 = [stateFromStores1];
      const obj3 = participantId(layoutManager[30]);
      stateFromStores2 = obj3.useStateFromStores(
        items3,
        () => EmbeddedActivitiesStore.getPipOrientationLockStateForApp(stateFromStores1),
        items4,
      );
      const items5 = [layoutManager, stateFromStores2, stateFromStores1];
      handleTargetAspectRatioParams = first.useCallback((width) => {
        if (constants.LANDSCAPE === stateFromStores2) {
          layoutManager.setTargetDimensions(stateFromStores1, 16, 9);
        } else if (constants.PORTRAIT === stateFromStores2) {
          layoutManager.setTargetDimensions(stateFromStores1, 9, 16);
        } else if (constants.UNLOCKED === stateFromStores2) {
          let num2 = 9;
          const setTargetDimensions = layoutManager.setTargetDimensions;
          if (width.width > width.height) {
            num2 = 16;
          }
          let num3 = 16;
          if (width.width > width.height) {
            num3 = 9;
          }
          setTargetDimensions(stateFromStores1, num2, num3);
        }
      }, items5);
      const items6 = [handleTargetAspectRatioParams];
      const layoutEffect = first.useLayoutEffect(() => {
        const obj = useWindowDimensions;
        size = obj.getWindowDimensions();
        const obj2 = { landscape: size.width > size.height };
        const merged = Object.assign(size);
        callback(obj2);
      }, items6);
      const fn = function v() {
        return windowDimensions.get();
      };
      fn.__closure = { windowDimensions };
      fn.__workletHash = 10821342487514;
      fn.__initData = __initData;
      const fn2 = function p(arg0, arg1) {
        if (arg0 !== arg1) {
          const obj = ReanimatedRexport2;
          obj.runOnJS(callback)(arg0);
        }
      };
      const obj4 = participantId(layoutManager[18]);
      fn2.__closure = { runOnJS: participantId(layoutManager[18]).runOnJS, handleTargetAspectRatioParams };
      fn2.__workletHash = 3382402534204;
      fn2.__initData = __initData2;
      ({ runOnJS: participantId(layoutManager[18]).runOnJS, handleTargetAspectRatioParams });
      const animatedReaction = obj4.useAnimatedReaction(fn, fn2);
      let tmp14 = null;
      let closure_9 = tmp15;
      const items7 = [null != stateFromStores, first];
      const effect = first.useEffect(() => {
        let closure_0;
        if (!first) {
          if (closure_9) {
            let ComponentDispatch = participantId(layoutManager[25]).ComponentDispatch;
            ComponentDispatch.dispatch(constants.VOICE_PANEL_PIP_CONTENT_READY);
          }
        }
        if (first) {
          const _setTimeout = setTimeout;
          const timeout = setTimeout(() => {
            closure_1_5(false);
            const ComponentDispatch = participantId(layoutManager[25]).ComponentDispatch;
            ComponentDispatch.dispatch(constants.VOICE_PANEL_PIP_CONTENT_READY);
          }, 500);
          return () => {
            clearTimeout(closure_0);
          };
        }
      }, items7);
      if (!first) {
        let tmp20;
        if (null != stateFromStores) {
          const obj6 = { style: items8, children: items9 };
          items8 = [tmp.activity, tmp2];
          items9 = [,];
          const obj7 = { channel: stateFromStores, layoutMode: constants3.PIP };
          const tmp3Result = channelId(layoutManager[29]);
          items9[0] = closure_22(channelId(layoutManager[32]), obj7);
          items9[1] = closure_22(closure_29, {});
          tmp20 = closure_23(tmp3Result, obj6);
        } else {
          const obj8 = { participantId: AuthenticationStore.getId(), layoutTransition };
          tmp20 = closure_22(closure_43, obj8);
        }
        tmp14 = tmp20;
      }
      return tmp14;
    };
const __initData3 = {
  code: "function VoicePanelPIPContentTsx5(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}",
};
const __initData4 = {
  code: "function VoicePanelPIPContentTsx6(focusedParticipantId_0,previousFocusedParticipantId){const{runOnJS,updateIsActivityFocused,mode}=this.__closure;if(focusedParticipantId_0!==previousFocusedParticipantId){runOnJS(updateIsActivityFocused)(focusedParticipantId_0,mode.get());}}",
};
const __initData5 = { code: "function VoicePanelPIPContentTsx7(){const{mode}=this.__closure;return mode.get();}" };
const __initData6 = {
  code: "function VoicePanelPIPContentTsx8(modeVal,previousModeVal){const{runOnJS,updateIsActivityFocused,focused}=this.__closure;if(modeVal!==previousModeVal){var _focused$get;runOnJS(updateIsActivityFocused)((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,modeVal);}}",
};
const __initData7 = {
  code: "function VoicePanelPIPContentTsx9(){const{focused}=this.__closure;var _focused$get;return(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id;}",
};
const __initData8 = {
  code: "function VoicePanelPIPContentTsx10(focusedParticipantId_0,previousFocusedParticipantId){const{runOnJS,updateIsActivityFocused,mode}=this.__closure;if(focusedParticipantId_0!==previousFocusedParticipantId){runOnJS(updateIsActivityFocused)(focusedParticipantId_0,mode.get());}}",
};
const __initData9 = { code: "function VoicePanelPIPContentTsx11(){const{mode}=this.__closure;return mode.get();}" };
const __initData10 = {
  code: "function VoicePanelPIPContentTsx12(modeVal,previousModeVal){const{runOnJS,updateIsActivityFocused,focused}=this.__closure;if(modeVal!==previousModeVal){var _focused$get;runOnJS(updateIsActivityFocused)((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,modeVal);}}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_43 = ReactCompilerGating.isReactCompilerEnabled()
  ? (participantId) => {
      let AvatarSizes;
      let Icon;
      let channelId;
      let closure_5;
      let first;
      let focused;
      let guildId;
      let items4;
      let items6;
      let layoutManager;
      let obj16;
      let tmp26;
      let tmpResult14;
      let transitionCleanUp;
      let transitionState;
      let userAvatarDecoration;
      let obj = participantId(focused[21]);
      const cResult = obj.c(59);
      participantId = participantId.participantId;
      const layoutTransition = participantId.layoutTransition;
      ({ transitionState, transitionCleanUp } = participantId);
      const tmp4 = closure_24();
      let tmp5 = closure_28(tmp4, transitionState, transitionCleanUp);
      const context = layoutManager.useContext(channelId(focused[22]));
      channelId = context.channelId;
      ({ guildId, focused } = context);
      const mode = context.mode;
      layoutManager = context.layoutManager;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelRTCStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === channelId) {
        let tmp10;
        if (cResult[2] === participantId) {
          tmp10 = cResult[3];
        }
        const tmpResult = participantId(focused[30]);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp10);
        let user1;
        if (stateFromStores != null) {
          user1 = stateFromStores.user;
        }
        if (user1 == null) {
          user1 = UserStore.getCurrentUser();
        }
        let avatarURL;
        const useDominantColorFromImage = participantId(focused[33]).useDominantColorFromImage;
        participantId(focused[33]);
        if (user1 != null) {
          avatarURL = user1.getAvatarURL(guildId, 80, false);
        }
        const dominantColorFromImage = useDominantColorFromImage(avatarURL);
        let id;
        const tmp6Result = channelId(focused[34]);
        if (user1 != null) {
          id = user1.id;
        }
        const obj3 = { userId: id, guildId, location: "VoicePanelPIPContent-native" };
        const tmp6ResultResult = tmp6Result(obj3);
        if (cResult[4] === dominantColorFromImage) {
          let tmp21;
          if (cResult[5] === tmp6ResultResult) {
            tmp21 = cResult[6];
          }
          if (cResult[7] === tmp4.user) {
            if (cResult[8] === tmp21) {
              let tmp23;
              let tmp27;
              let tmp40;
              let tmp39;
              if (cResult[9] === tmp5) {
                tmp23 = cResult[10];
              }
              [tmp26, closure_5] = mode(layoutManager.useState(false), 2);
              const _Symbol = Symbol;
              mode(layoutManager.useState(false), 2);
              if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                const obj4 = { location: "VoicePanelPIPContent" };
                cResult[11] = obj4;
                tmp27 = obj4;
              } else {
                tmp27 = cResult[11];
              }
              let id1;
              const useSurfaceDirectRendererExperiment = participantId(focused[35]).useSurfaceDirectRendererExperiment;
              participantId(focused[35]);
              if (stateFromStores != null) {
                const user = stateFromStores.user;
                if (user != null) {
                  id1 = user.id;
                }
              }
              const surfaceDirectRendererExperiment = useSurfaceDirectRendererExperiment(id1, tmp27);
              function updateIsActivityFocused(arg0, arg1) {
                let participant;
                if (null != arg0) {
                  participant = ChannelRTCStore.getParticipant(channelId, arg0);
                }
                const tmp5 = null != participant && closure_21(participant) && arg1 === VoicePanelModes.PANEL;
                closure_5(tmp5);
              }
              function ae() {
                const value = focused.get();
                let id;
                if (value != null) {
                  id = value.id;
                }
                return id;
              }
              const obj5 = { focused };
              ae.__closure = obj5;
              ae.__workletHash = 7289784389347;
              ae.__initData = __initData3;
              function ne(arg0, arg1) {
                if (arg0 !== arg1) {
                  const obj = ReanimatedRexport2;
                  const runOnJSResult = obj.runOnJS(updateIsActivityFocused);
                  runOnJSResult(arg0, mode.get());
                }
              }
              const obj6 = { runOnJS: participantId(focused[18]).runOnJS, updateIsActivityFocused, mode };
              const useAnimatedReaction = participantId(focused[18]).useAnimatedReaction;
              participantId(focused[18]);
              ne.__closure = obj6;
              ne.__workletHash = 14994700175532;
              ne.__initData = __initData4;
              const animatedReaction = useAnimatedReaction(ae, ne);
              function re() {
                return mode.get();
              }
              const obj7 = { mode };
              re.__closure = obj7;
              re.__workletHash = 1496434071774;
              re.__initData = __initData5;
              function ie(arg0, arg1) {
                if (arg0 !== arg1) {
                  const obj = ReanimatedRexport2;
                  const runOnJSResult = obj.runOnJS(updateIsActivityFocused);
                  const value = focused.get();
                  let id;
                  if (value != null) {
                    id = value.id;
                  }
                  runOnJSResult(id, arg0);
                }
              }
              const obj8 = { runOnJS: participantId(focused[18]).runOnJS, updateIsActivityFocused, focused };
              const useAnimatedReaction2 = participantId(focused[18]).useAnimatedReaction;
              participantId(focused[18]);
              ie.__closure = obj8;
              ie.__workletHash = 16735078785493;
              ie.__initData = __initData6;
              const animatedReaction2 = useAnimatedReaction2(re, ie);
              const _Symbol2 = Symbol;
              if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                const items1 = [ChannelCallLifecycleStore];
                function se() {
                  const obj = {
                    isReactingToThermalState: ChannelCallLifecycleStore.isReactingToThermalState(),
                    consumedRequestToRespondToSeriousThermalState:
                      ChannelCallLifecycleStore.consumedRequestToRespondToSeriousThermalState(),
                  };
                  return obj;
                }
                cResult[12] = items1;
                cResult[13] = se;
                tmp40 = se;
                tmp39 = items1;
              } else {
                tmp39 = cResult[12];
                tmp40 = cResult[13];
              }
              const tmpResult12 = participantId(focused[30]);
              const stateFromStoresObject = tmpResult12.useStateFromStoresObject(tmp39, tmp40);
              const consumedRequestToRespondToSeriousThermalState =
                stateFromStoresObject.consumedRequestToRespondToSeriousThermalState;
              if (cResult[14] === layoutManager) {
                let tmp44;
                let tmp48;
                let tmp47;
                if (cResult[15] === participantId) {
                  tmp44 = cResult[16];
                }
                const tmpResult13 = participantId(focused[36]);
                let canRenderParticipantVideo = tmpResult13.useCanRenderParticipantVideo(stateFromStores);
                if (canRenderParticipantVideo) {
                  canRenderParticipantVideo = !(tmp26 && tmp43);
                }
                if (cResult[17] !== canRenderParticipantVideo) {
                  function pe() {
                    if (!canRenderParticipantVideo) {
                      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
                      ComponentDispatch.dispatch(constants.VOICE_PANEL_PIP_CONTENT_READY);
                    }
                  }
                  const items2 = [canRenderParticipantVideo];
                  cResult[17] = canRenderParticipantVideo;
                  cResult[18] = items2;
                  cResult[19] = pe;
                  tmp48 = pe;
                  tmp47 = items2;
                } else {
                  tmp47 = cResult[18];
                  tmp48 = cResult[19];
                }
                const effect = obj2.useEffect(tmp48, tmp47);
                if (canRenderParticipantVideo) {
                  if (cResult[20] === tmp4.blackBackground) {
                    let tmp74;
                    let tmp75;
                    if (cResult[21] === tmp4.user) {
                      tmp74 = cResult[22];
                    }
                    if (cResult[23] !== tmp4.video) {
                      const items3 = [tmp4.video, undefined];
                      cResult[23] = tmp4.video;
                      cResult[24] = items3;
                      tmp75 = items3;
                    } else {
                      tmp75 = cResult[24];
                    }
                    if (cResult[25] === tmp44) {
                      if (cResult[26] === stateFromStores.streamId) {
                        if (cResult[27] === tmp75) {
                          let tmp76;
                          if (cResult[28] === surfaceDirectRendererExperiment) {
                            tmp76 = cResult[29];
                          }
                          if (cResult[30] === participantId) {
                            if (cResult[31] === tmp76) {
                              let tmp81;
                              let tmp85;
                              if (cResult[32] === tmp5) {
                                tmp81 = cResult[33];
                              }
                              const _Symbol3 = Symbol;
                              if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                                const tmp88 = closure_22(closure_29, {});
                                cResult[34] = tmp88;
                                tmp85 = tmp88;
                              } else {
                                tmp85 = cResult[34];
                              }
                              if (cResult[35] === tmp74) {
                                let tmp89;
                                if (cResult[36] === tmp81) {
                                  tmp89 = cResult[37];
                                }
                                return tmp89;
                              }
                              const obj9 = { style: tmp74, children: items4 };
                              items4 = [tmp81, tmp85];
                              const tmp91 = closure_23(channelId(focused[29]), obj9);
                              cResult[35] = tmp74;
                              cResult[36] = tmp81;
                              cResult[37] = tmp91;
                              tmp89 = tmp91;
                            }
                          }
                          const obj10 = { style: tmp5, participantId, children: tmp76 };
                          const tmp84 = closure_22(closure_46, obj10);
                          cResult[30] = participantId;
                          cResult[31] = tmp76;
                          cResult[32] = tmp5;
                          cResult[33] = tmp84;
                          tmp81 = tmp84;
                        }
                      }
                    }
                    const obj11 = {
                      useSurfaceDirectRenderer: surfaceDirectRendererExperiment,
                      streamId: stateFromStores.streamId,
                      style: tmp75,
                      onSize: tmp44,
                      onReady: markContentReady,
                    };
                    const tmp80 = closure_22(closure_26, obj11);
                    cResult[25] = tmp44;
                    cResult[26] = stateFromStores.streamId;
                    cResult[27] = tmp75;
                    cResult[28] = surfaceDirectRendererExperiment;
                    cResult[29] = tmp80;
                    tmp76 = tmp80;
                  }
                  const items5 = [,];
                  ({ blackBackground: arr6[0], user: arr6[1] } = tmp4);
                  cResult[20] = tmp4.blackBackground;
                  cResult[21] = tmp4.user;
                  cResult[22] = items5;
                  tmp74 = items5;
                } else {
                  const tmp6Result4 = channelId(focused[29]);
                  if (cResult[38] === tmp6ResultResult) {
                    let tmp51;
                    if (cResult[39] === layoutTransition) {
                      tmp51 = cResult[40];
                    }
                    const tmp6Result5 = channelId(focused[29]);
                    let tmp58Result = null;
                    if (null != user1) {
                      const obj12 = {
                        source: tmpResult14.getCachedSourceFromURI(user1.getAvatarURL(guildId, 80, false)),
                        size: tmp26 ? AvatarSizes.LARGE : AvatarSizes.XLARGE,
                        avatarDecoration: userAvatarDecoration,
                      };
                      const Avatar = tmp(focused[37]).Avatar;
                      tmpResult14 = participantId(focused[33]);
                      AvatarSizes = tmp(focused[37]).AvatarSizes;
                      userAvatarDecoration = undefined;
                      if (stateFromStores != null) {
                        userAvatarDecoration = stateFromStores.userAvatarDecoration;
                      }
                      tmp58Result = closure_22(Avatar, obj12);
                    }
                    if (cResult[41] === tmp6Result5) {
                      if (cResult[42] === tmp4.avatarWrapper) {
                        let tmp60;
                        let tmp63;
                        if (cResult[43] === tmp58Result) {
                          tmp60 = cResult[44];
                        }
                        if (cResult[45] !== tmp4.userOpacity) {
                          const obj13 = { style: tmp4.userOpacity };
                          const tmp66 = closure_22(closure_29, obj13);
                          cResult[45] = tmp4.userOpacity;
                          cResult[46] = tmp66;
                          tmp63 = tmp66;
                        } else {
                          tmp63 = cResult[46];
                        }
                        if (cResult[47] === consumedRequestToRespondToSeriousThermalState) {
                          if (cResult[48] === tmp26) {
                            if (cResult[49] === tmp4.thermalAlertIcon) {
                              let tmp67;
                              if (cResult[50] === tmp4.thermalAlertIconContainer) {
                                tmp67 = cResult[51];
                              }
                              if (cResult[52] === tmp6Result4) {
                                if (cResult[53] === tmp51) {
                                  if (cResult[54] === tmp60) {
                                    if (cResult[55] === tmp63) {
                                      if (cResult[56] === tmp67) {
                                        let tmp71;
                                        if (cResult[57] === tmp23) {
                                          tmp71 = cResult[58];
                                        }
                                        return tmp71;
                                      }
                                    }
                                  }
                                }
                              }
                              const obj14 = { style: tmp23, children: items6 };
                              items6 = [tmp51, tmp60, tmp63, tmp67];
                              const tmp73 = closure_23(tmp6Result4, obj14);
                              cResult[52] = tmp6Result4;
                              cResult[53] = tmp51;
                              cResult[54] = tmp60;
                              cResult[55] = tmp63;
                              cResult[56] = tmp67;
                              cResult[57] = tmp23;
                              cResult[58] = tmp73;
                              tmp71 = tmp73;
                            }
                          }
                        }
                        let tmp68 = null;
                        if (tmp26) {
                          tmp68 = null;
                          if (consumedRequestToRespondToSeriousThermalState) {
                            const obj15 = { style: tmp4.thermalAlertIconContainer, children: closure_22(Icon, obj16) };
                            obj16 = {
                              style: tmp4.thermalAlertIcon,
                              source: channelId(focused[38]),
                              color: tmp4.thermalAlertIcon.color,
                            };
                            const tmp6Result6 = channelId(focused[29]);
                            Icon = tmp(focused[37]).Icon;
                            tmp68 = closure_22(tmp6Result6, obj15);
                          }
                        }
                        cResult[47] = consumedRequestToRespondToSeriousThermalState;
                        cResult[48] = tmp26;
                        cResult[49] = tmp4.thermalAlertIcon;
                        cResult[50] = tmp4.thermalAlertIconContainer;
                        cResult[51] = tmp68;
                        tmp67 = tmp68;
                      }
                    }
                    const obj17 = { style: tmp4.avatarWrapper, children: tmp58Result };
                    const tmp62 = closure_22(tmp6Result5, obj17);
                    cResult[41] = tmp6Result5;
                    cResult[42] = tmp4.avatarWrapper;
                    cResult[43] = tmp58Result;
                    cResult[44] = tmp62;
                    tmp60 = tmp62;
                  }
                  let tmp52 = null;
                  if (null != tmp6ResultResult) {
                    const obj18 = {
                      colors: tmp6ResultResult,
                      start: { x: 0, y: 0 },
                      end: { x: 0, y: 1 },
                      style: updateIsActivityFocused.absoluteFill,
                      layout: layoutTransition,
                      pointerEvents: "none",
                    };
                    tmp52 = closure_22(LinearGradient, obj18);
                  }
                  cResult[38] = tmp6ResultResult;
                  cResult[39] = layoutTransition;
                  cResult[40] = tmp52;
                  tmp51 = tmp52;
                }
              }
              function ce(nativeEvent) {
                nativeEvent = nativeEvent.nativeEvent;
                layoutManager.setTargetDimensions(participantId, nativeEvent.width, nativeEvent.height);
              }
              cResult[14] = layoutManager;
              cResult[15] = participantId;
              cResult[16] = ce;
              tmp44 = ce;
            }
          }
          const items7 = [tmp4.user, tmp5, tmp21];
          cResult[7] = tmp4.user;
          cResult[8] = tmp21;
          cResult[9] = tmp5;
          cResult[10] = items7;
          tmp23 = items7;
        }
        let tmp22 = null;
        if (null == tmp6ResultResult) {
          tmp22 = { backgroundColor: dominantColorFromImage };
          const obj19 = { backgroundColor: dominantColorFromImage };
        }
        cResult[4] = dominantColorFromImage;
        cResult[5] = tmp6ResultResult;
        cResult[6] = tmp22;
        tmp21 = tmp22;
      }
      const fn = function c() {
        const participant = ChannelRTCStore.getParticipant(channelId, participantId);
        let type;
        if (participant != null) {
          type = participant.type;
        }
        let tmp3;
        if (type === constants2.USER) {
          tmp3 = participant;
        }
        return tmp3;
      };
      cResult[1] = channelId;
      cResult[2] = participantId;
      cResult[3] = fn;
      tmp10 = fn;
    }
  : (participantId) => {
      let AvatarSizes;
      let Icon;
      let _undefined;
      let c9;
      let closure_2;
      let consumedRequestToRespondToSeriousThermalState;
      let focused;
      let guildId;
      let isReactingToThermalState;
      let items7;
      let layoutTransition;
      let obj13;
      let obj7;
      let tmp18;
      let tmp36Result;
      let tmp43;
      let tmp6Result12;
      let transitionCleanUp;
      let transitionState;
      let userAvatarDecoration;
      participantId = participantId.participantId;
      focused = undefined;
      let dominantColorFromImage;
      let closure_8;
      c9 = undefined;
      let updateIsActivityFocused;
      let canRenderParticipantVideo;
      ({ transitionState, transitionCleanUp, layoutTransition } = participantId);
      let tmp = closure_24();
      importDefault = tmp;
      const tmp2 = closure_28(tmp, transitionState, transitionCleanUp);
      dependencyMap = tmp2;
      let obj = focused;
      let tmp3 = importDefault;
      const context = focused.useContext(VoicePanelStateContextDefault);
      const channelId = context.channelId;
      ({ guildId, focused } = context);
      const mode = context.mode;
      const layoutManager = context.layoutManager;
      let items = [closure_8];
      const obj2 = participantId(573);
      const stateFromStores = obj2.useStateFromStores(items, () => {
        const participant = ChannelRTCStore.getParticipant(channelId, participantId);
        let type;
        if (participant != null) {
          type = participant.type;
        }
        let tmp3;
        if (type === constants2.USER) {
          tmp3 = participant;
        }
        return tmp3;
      });
      let user1;
      if (stateFromStores != null) {
        user1 = stateFromStores.user;
      }
      if (user1 == null) {
        user1 = UserStore.getCurrentUser();
      }
      let avatarURL;
      const useDominantColorFromImage = participantId(8515).useDominantColorFromImage;
      participantId(8515);
      if (user1 != null) {
        avatarURL = user1.getAvatarURL(guildId, 80, false);
      }
      dominantColorFromImage = useDominantColorFromImage(avatarURL);
      let id;
      const tmp3Result = useProfileTileGradientDefault;
      if (user1 != null) {
        id = user1.id;
      }
      const tmp3ResultResult = tmp3Result({ userId: id, guildId, location: "VoicePanelPIPContent-native" });
      closure_8 = tmp3ResultResult;
      const items1 = [tmp, tmp2, dominantColorFromImage, tmp3ResultResult];
      const memo = obj.useMemo(() => {
        const items = [user.user, closure_2];
        let tmp = null;
        if (null == closure_8) {
          tmp = { backgroundColor: dominantColorFromImage };
          const obj = { backgroundColor: dominantColorFromImage };
        }
        items[2] = tmp;
        return items;
      }, items1);
      [tmp18, c9] = channelId(obj.useState(false), 2);
      channelId(obj.useState(false), 2);
      let id1;
      const useSurfaceDirectRendererExperiment = participantId(9141).useSurfaceDirectRendererExperiment;
      participantId(9141);
      if (stateFromStores != null) {
        const user = stateFromStores.user;
        if (user != null) {
          id1 = user.id;
        }
      }
      const items2 = [channelId];
      const surfaceDirectRendererExperiment = useSurfaceDirectRendererExperiment(id1, {
        location: "VoicePanelPIPContent",
      });
      updateIsActivityFocused = obj.useCallback((arg0, arg1) => {
        let participant;
        if (null != arg0) {
          participant = ChannelRTCStore.getParticipant(channelId, arg0);
        }
        const tmp5 = null != participant && closure_21(participant) && arg1 === VoicePanelModes.PANEL;
        _undefined(tmp5);
      }, items2);
      const tmp6Result8 = participantId(4618);
      class S {
        constructor() {
          const value = focused.get();
          let id;
          if (value != null) {
            id = value.id;
          }
          return id;
        }
      }
      S.__closure = { focused };
      S.__workletHash = 4704058004463;
      S.__initData = __initData7;
      const fn = function _(arg0, arg1) {
        if (arg0 !== arg1) {
          const obj = ReanimatedRexport2;
          const runOnJSResult = obj.runOnJS(callback);
          runOnJSResult(arg0, mode.get());
        }
      };
      fn.__closure = { runOnJS: participantId(4618).runOnJS, updateIsActivityFocused, mode };
      fn.__workletHash = 10514296638459;
      fn.__initData = __initData8;
      ({ runOnJS: participantId(4618).runOnJS, updateIsActivityFocused, mode });
      const animatedReaction = tmp6Result8.useAnimatedReaction(S, fn);
      const fn2 = function y() {
        return mode.get();
      };
      fn2.__closure = { mode };
      fn2.__workletHash = 16088308548105;
      fn2.__initData = __initData9;
      const tmp6Result9 = participantId(4618);
      class I {
        constructor(arg0, arg1) {
          if (arg0 !== arg1) {
            const obj = ReanimatedRexport2;
            const runOnJSResult = obj.runOnJS(callback);
            const value = focused.get();
            let id;
            if (value != null) {
              id = value.id;
            }
            runOnJSResult(id, arg0);
          }
        }
      }
      I.__closure = { runOnJS: participantId(4618).runOnJS, updateIsActivityFocused, focused };
      I.__workletHash = 7336366136494;
      I.__initData = __initData10;
      ({ runOnJS: participantId(4618).runOnJS, updateIsActivityFocused, focused });
      const animatedReaction1 = tmp6Result9.useAnimatedReaction(fn2, I);
      const items3 = [c9];
      const tmp6Result10 = participantId(573);
      const stateFromStoresObject = tmp6Result10.useStateFromStoresObject(items3, () => {
        const obj = {
          isReactingToThermalState: _undefined.isReactingToThermalState(),
          consumedRequestToRespondToSeriousThermalState: _undefined.consumedRequestToRespondToSeriousThermalState(),
        };
        return obj;
      });
      const items4 = [layoutManager, participantId];
      ({ isReactingToThermalState, consumedRequestToRespondToSeriousThermalState } = stateFromStoresObject);
      const callback1 = obj.useCallback((nativeEvent) => {
        nativeEvent = nativeEvent.nativeEvent;
        layoutManager.setTargetDimensions(participantId, nativeEvent.width, nativeEvent.height);
      }, items4);
      const tmp6Result11 = participantId(9154);
      canRenderParticipantVideo = tmp6Result11.useCanRenderParticipantVideo(stateFromStores);
      if (canRenderParticipantVideo) {
        canRenderParticipantVideo = !(tmp18 && isReactingToThermalState);
      }
      const items5 = [canRenderParticipantVideo];
      const effect = obj.useEffect(() => {
        if (!canRenderParticipantVideo) {
          const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
          ComponentDispatch.dispatch(constants.VOICE_PANEL_PIP_CONTENT_READY);
        }
      }, items5);
      const obj5 = { style: null, children: null };
      const tmp3Result4 = NativeViewDefault;
      if (canRenderParticipantVideo) {
        const items6 = [,];
        ({ blackBackground: arr8[0], user: arr8[1] } = tmp);
        obj5.style = items6;
        const obj6 = { style: tmp2, participantId, children: closure_22(closure_26, obj7) };
        obj7 = {
          useSurfaceDirectRenderer: surfaceDirectRendererExperiment,
          streamId: stateFromStores.streamId,
          style: items7,
          onSize: callback1,
          onReady: markContentReady,
        };
        items7 = [tmp.video, undefined];
        const items8 = [closure_22(closure_46, obj6), closure_22(closure_29, {})];
        obj5.children = items8;
        tmp43 = obj5;
      } else {
        obj5.style = memo;
        let tmp32 = null;
        if (null != tmp3ResultResult) {
          const obj8 = {
            colors: tmp3ResultResult,
            start: { x: 0, y: 0 },
            end: { x: 0, y: 1 },
            style: layoutManager.absoluteFill,
            layout: layoutTransition,
            pointerEvents: "none",
          };
          tmp32 = closure_22(LinearGradient, obj8);
        }
        const items9 = [tmp32, , ,];
        const obj9 = { style: tmp.avatarWrapper, children: tmp36Result };
        tmp36Result = null;
        const tmp3Result5 = NativeViewDefault;
        if (null != user1) {
          const obj10 = {
            source: tmp6Result12.getCachedSourceFromURI(user1.getAvatarURL(guildId, 80, false)),
            size: tmp18 ? AvatarSizes.LARGE : AvatarSizes.XLARGE,
            avatarDecoration: userAvatarDecoration,
          };
          const Avatar = tmp6(1188).Avatar;
          tmp6Result12 = participantId(8515);
          AvatarSizes = tmp6(1188).AvatarSizes;
          userAvatarDecoration = undefined;
          if (stateFromStores != null) {
            userAvatarDecoration = stateFromStores.userAvatarDecoration;
          }
          tmp36Result = closure_22(Avatar, obj10);
        }
        items9[1] = closure_22(tmp3Result5, obj9);
        const obj11 = { style: tmp.userOpacity };
        items9[2] = closure_22(closure_29, obj11);
        let tmp36Result2 = null;
        if (tmp18) {
          tmp36Result2 = null;
          if (consumedRequestToRespondToSeriousThermalState) {
            const obj12 = { style: tmp.thermalAlertIconContainer, children: closure_22(Icon, obj13) };
            obj13 = { style: tmp.thermalAlertIcon, source: AssetRegistryDefault, color: tmp.thermalAlertIcon.color };
            const tmp3Result6 = NativeViewDefault;
            Icon = tmp6(1188).Icon;
            tmp36Result2 = closure_22(tmp3Result6, obj12);
          }
        }
        items9[3] = tmp36Result2;
        obj5.children = items9;
        tmp43 = obj5;
      }
      return closure_23(tmp3Result4, tmp43);
    };
const __initData11 = {
  code: 'function VoicePanelPIPContentTsx13(){const{targetDimensions}=this.__closure;const{width:targetWidth,height:targetHeight}=targetDimensions.get();let height="100%";let width="100%";if(targetHeight<targetWidth){width="auto";}else{height="auto";}return{position:"absolute",aspectRatio:targetWidth/targetHeight,width:width,height:height};}',
};
const __initData12 = {
  code: "function VoicePanelPIPContentTsx14(){const{targetDimensions}=this.__closure;const{width:targetWidth,height:targetHeight}=targetDimensions.get();let height='100%';let width='100%';if(targetHeight<targetWidth){width='auto';}else{height='auto';}return{position:'absolute',aspectRatio:targetWidth/targetHeight,width:width,height:height};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_46 = ReactCompilerGating.isReactCompilerEnabled()
  ? (participantId) => {
      let children;
      let style;
      const obj = react2;
      const cResult = obj.c(6);
      ({ style, children } = participantId);
      participantId = participantId.participantId;
      const layoutManager = react.useContext(VoicePanelStateContextDefault).layoutManager;
      const obj2 = VoicePanelCardLayoutManager;
      const targetDimensionsSubscription = obj2.useTargetDimensionsSubscription(participantId, layoutManager);
      const fn = function o() {
        let height;
        let width;
        const value = targetDimensionsSubscription.get();
        ({ width, height } = value);
        let str = "100%";
        let str2 = "auto";
        if (height < width) {
          str = "auto";
          str2 = "100%";
        }
        size = { position: "absolute", aspectRatio: width / height, width: str, height: str2 };
        return size;
      };
      fn.__closure = { targetDimensions: targetDimensionsSubscription };
      fn.__workletHash = 17312139117941;
      fn.__initData = __initData11;
      const obj3 = ReanimatedRexport2;
      const animatedStyle = obj3.useAnimatedStyle(fn);
      if (cResult[0] === animatedStyle) {
        let tmp6;
        if (cResult[1] === style) {
          tmp6 = cResult[2];
        }
        if (cResult[3] === children) {
          let tmp7;
          if (cResult[4] === tmp6) {
            tmp7 = cResult[5];
          }
          return tmp7;
        }
        const obj4 = { style: tmp6, children };
        const tmp9 = afk(ReanimatedNativeViewDefault, obj4);
        cResult[3] = children;
        cResult[4] = tmp6;
        cResult[5] = tmp9;
        tmp7 = tmp9;
      }
      const items = [style, animatedStyle];
      cResult[0] = animatedStyle;
      cResult[1] = style;
      cResult[2] = items;
      tmp6 = items;
    }
  : (arg0) => {
      let children;
      let items;
      let participantId;
      let style;
      ({ participantId, style, children } = arg0);
      const layoutManager = react.useContext(VoicePanelStateContextDefault).layoutManager;
      const obj = VoicePanelCardLayoutManager;
      const targetDimensionsSubscription = obj.useTargetDimensionsSubscription(participantId, layoutManager);
      const fn = function u() {
        let height;
        let width;
        const value = targetDimensionsSubscription.get();
        ({ width, height } = value);
        let str = "100%";
        let str2 = "auto";
        if (height < width) {
          str = "auto";
          str2 = "100%";
        }
        size = { position: "absolute", aspectRatio: width / height, width: str, height: str2 };
        return size;
      };
      fn.__closure = { targetDimensions: targetDimensionsSubscription };
      fn.__workletHash = 14992307578674;
      fn.__initData = __initData12;
      const obj2 = ReanimatedRexport2;
      const animatedStyle = obj2.useAnimatedStyle(fn);
      const obj3 = { style: items, children };
      items = [style, animatedStyle];
      return afk(ReanimatedNativeViewDefault, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_47 = ReactCompilerGating.isReactCompilerEnabled()
  ? (participantId) => {
      let channelId;
      let closure_8;
      let first;
      let ref;
      let ref2;
      let streamId;
      let transitionCleanUp;
      let transitionState;
      const tmp = participantId;
      let tmp2 = channelId;
      let obj = participantId(channelId[21]);
      const cResult = obj.c(38);
      participantId = participantId.participantId;
      ({ transitionState, transitionCleanUp } = participantId);
      const tmp4 = closure_24();
      const obj2 = participantId(channelId[27]);
      const mode = obj2.usePIPState().mode;
      let tmp5 = closure_28(tmp4, transitionState, transitionCleanUp);
      const context = streamId.useContext(mode(channelId[22]));
      channelId = context.channelId;
      const layoutManager = context.layoutManager;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelRTCStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === channelId) {
        let tmp9;
        let tmp11;
        let tmp13;
        if (cResult[2] === participantId) {
          tmp9 = cResult[3];
        }
        const tmpResult = tmp(tmp2[30]);
        const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp9);
        streamId = stateFromStoresObject.streamId;
        const _Symbol = Symbol;
        const userId = stateFromStoresObject.userId;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { location: "VoicePanelPIPContent.Stream" };
          cResult[4] = obj4;
          tmp11 = obj4;
        } else {
          tmp11 = cResult[4];
        }
        const tmpResult3 = tmp(tmp2[35]);
        const surfaceDirectRendererExperiment = tmpResult3.useSurfaceDirectRendererExperiment(userId, tmp11);
        const _Symbol2 = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [ApplicationStreamingStore];
          cResult[5] = items1;
          tmp13 = items1;
        } else {
          tmp13 = cResult[5];
        }
        if (cResult[6] !== participantId) {
          class L {
            constructor() {
              const activeStreamForStreamKey = ApplicationStreamingStore.getActiveStreamForStreamKey(participantId);
              let state;
              if (activeStreamForStreamKey != null) {
                state = activeStreamForStreamKey.state;
              }
              return state;
            }
          }
          cResult[6] = participantId;
          cResult[7] = L;
        } else {
          class L {
            constructor() {
              const activeStreamForStreamKey = ApplicationStreamingStore.getActiveStreamForStreamKey(participantId);
              let state;
              if (activeStreamForStreamKey != null) {
                state = activeStreamForStreamKey.state;
              }
              return state;
            }
          }
        }
        const tmpResult4 = tmp(tmp2[30]);
        const stateFromStores = tmpResult4.useStateFromStores(tmp13, L);
        if (cResult[8] === layoutManager) {
          class L {
            constructor() {
              const activeStreamForStreamKey = ApplicationStreamingStore.getActiveStreamForStreamKey(participantId);
              let state;
              if (activeStreamForStreamKey != null) {
                state = activeStreamForStreamKey.state;
              }
              return state;
            }
          }
          closure_5 = closure_5.get();
          StyleSheet = obj3.useRef(0);
          EmbeddedActivitiesStore = obj3.useRef(0);
          if (cResult[11] === mode) {
            class L {
              constructor() {
                const activeStreamForStreamKey = ApplicationStreamingStore.getActiveStreamForStreamKey(participantId);
                let state;
                if (activeStreamForStreamKey != null) {
                  state = activeStreamForStreamKey.state;
                }
                return state;
              }
            }
            if (cResult[14] === mode) {
              let tmp30;
              class L {
                constructor() {
                  const activeStreamForStreamKey = ApplicationStreamingStore.getActiveStreamForStreamKey(participantId);
                  let state;
                  if (activeStreamForStreamKey != null) {
                    state = activeStreamForStreamKey.state;
                  }
                  return state;
                }
              }
              ChannelRTCStore = B;
              class B {
                constructor(arg0) {
                  const tmp2 = null == streamId || arg0 || mode !== VoicePanelPIPModes.IN_APP;
                  if (!tmp2) {
                    size = { width: ref.current * closure_5, height: ref2.current * closure_5 };
                    const obj = VideoActionCreators;
                    obj.updateVideoSize(streamId, size, 1);
                  }
                }
              }
              const effect = obj3.useEffect(tmp22, tmp21);
              let closure_9 = null != streamId;
              class H {
                constructor(nativeEvent) {
                  let height;
                  let width;
                  if (null != streamId) {
                    ({ width, height } = nativeEvent.nativeEvent.layout);
                    const tmp3 = width === ref.current && height === ref2.current;
                    if (!tmp3) {
                      ref.current = width;
                      ref2.current = height;
                      if (mode === VoicePanelPIPModes.IN_APP) {
                        size = { width: width * closure_5, height: height * closure_5 };
                        const obj = VideoActionCreators;
                        obj.updateVideoSize(tmp, size, 1);
                      }
                    }
                  }
                }
              }
              const effect1 = obj3.useEffect(tmp25, tmp26);
              if (stateFromStores === constants.ENDED) {
                class L {
                  constructor() {
                    const activeStreamForStreamKey =
                      ApplicationStreamingStore.getActiveStreamForStreamKey(participantId);
                    let state;
                    if (activeStreamForStreamKey != null) {
                      state = activeStreamForStreamKey.state;
                    }
                    return state;
                  }
                }
                tmp30 = tmp31;
              } else {
                class L {
                  constructor() {
                    const activeStreamForStreamKey =
                      ApplicationStreamingStore.getActiveStreamForStreamKey(participantId);
                    let state;
                    if (activeStreamForStreamKey != null) {
                      state = activeStreamForStreamKey.state;
                    }
                    return state;
                  }
                }
                if (stateFromStores !== tmp28.FAILED) {
                  class L {
                    constructor() {
                      const activeStreamForStreamKey =
                        ApplicationStreamingStore.getActiveStreamForStreamKey(participantId);
                      let state;
                      if (activeStreamForStreamKey != null) {
                        state = activeStreamForStreamKey.state;
                      }
                      return state;
                    }
                  }
                  tmp30 = tmp29;
                }
              }
              return tmp30;
            }
            class B {
              constructor(arg0) {
                const tmp2 = null == streamId || arg0 || mode !== VoicePanelPIPModes.IN_APP;
                if (!tmp2) {
                  size = { width: ref.current * closure_5, height: ref2.current * closure_5 };
                  const obj = VideoActionCreators;
                  obj.updateVideoSize(streamId, size, 1);
                }
              }
            }
            cResult[14] = mode;
            cResult[15] = streamId;
            class H {
              constructor(nativeEvent) {
                let height;
                let width;
                if (null != streamId) {
                  ({ width, height } = nativeEvent.nativeEvent.layout);
                  const tmp3 = width === ref.current && height === ref2.current;
                  if (!tmp3) {
                    ref.current = width;
                    ref2.current = height;
                    if (mode === VoicePanelPIPModes.IN_APP) {
                      size = { width: width * closure_5, height: height * closure_5 };
                      const obj = VideoActionCreators;
                      obj.updateVideoSize(tmp, size, 1);
                    }
                  }
                }
              }
            }
            cResult[16] = B;
          }
          class H {
            constructor(nativeEvent) {
              let height;
              let width;
              if (null != streamId) {
                ({ width, height } = nativeEvent.nativeEvent.layout);
                const tmp3 = width === ref.current && height === ref2.current;
                if (!tmp3) {
                  ref.current = width;
                  ref2.current = height;
                  if (mode === VoicePanelPIPModes.IN_APP) {
                    size = { width: width * closure_5, height: height * closure_5 };
                    const obj = VideoActionCreators;
                    obj.updateVideoSize(tmp, size, 1);
                  }
                }
              }
            }
          }
          cResult[11] = mode;
          cResult[12] = streamId;
          cResult[13] = H;
        }
        class N {
          constructor(nativeEvent) {
            nativeEvent = nativeEvent.nativeEvent;
            layoutManager.setTargetDimensions(participantId, nativeEvent.width, nativeEvent.height);
          }
        }
        cResult[8] = layoutManager;
        cResult[9] = participantId;
        cResult[10] = N;
      }
      const fn = function u() {
        let tmp5;
        const participant = ChannelRTCStore.getParticipant(channelId, participantId);
        streamId = undefined;
        if (null != participant && participant.type === constants2.STREAM) {
          streamId = participant.streamId;
        }
        const obj = { streamId, userId: tmp5 };
        tmp5 = undefined;
        if (null != participant && participant.type === constants2.STREAM) {
          const user = participant.user;
          let id;
          if (user != null) {
            id = user.id;
          }
          tmp5 = id;
        }
        return obj;
      };
      cResult[1] = channelId;
      cResult[2] = participantId;
      cResult[3] = fn;
      tmp9 = fn;
    }
  : (participantId) => {
      let c2;
      let layoutManager;
      let layoutTransition;
      let obj7;
      let tmp22;
      let transitionCleanUp;
      let transitionState;
      participantId = participantId.participantId;
      dependencyMap = undefined;
      layoutManager = undefined;
      let streamId;
      let c5;
      let callback2;
      ({ transitionState, transitionCleanUp, layoutTransition } = participantId);
      const tmp = closure_24();
      let tmp2 = participantId;
      let tmp3 = dependencyMap;
      let obj = participantId(17236);
      const mode = obj.usePIPState().mode;
      const tmp4 = closure_28(tmp, transitionState, transitionCleanUp);
      const context = streamId.useContext(mode(11915));
      ({ channelId: c2, layoutManager } = context);
      const items = [callback2];
      const obj2 = participantId(573);
      const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
        let tmp5;
        const participant = ChannelRTCStore.getParticipant(c2, participantId);
        streamId = undefined;
        if (null != participant && participant.type === constants2.STREAM) {
          streamId = participant.streamId;
        }
        const obj = { streamId, userId: tmp5 };
        tmp5 = undefined;
        if (null != participant && participant.type === constants2.STREAM) {
          const user = participant.user;
          let id;
          if (user != null) {
            id = user.id;
          }
          tmp5 = id;
        }
        return obj;
      });
      streamId = stateFromStoresObject.streamId;
      const userId = stateFromStoresObject.userId;
      const obj3 = participantId(9141);
      const surfaceDirectRendererExperiment = obj3.useSurfaceDirectRendererExperiment(userId, {
        location: "VoicePanelPIPContent.Stream",
      });
      const items1 = [ApplicationStreamingStore];
      const obj4 = participantId(573);
      const stateFromStores = obj4.useStateFromStores(items1, () => {
        const activeStreamForStreamKey = ApplicationStreamingStore.getActiveStreamForStreamKey(participantId);
        let state;
        if (activeStreamForStreamKey != null) {
          state = activeStreamForStreamKey.state;
        }
        return state;
      });
      const items2 = [layoutManager, participantId];
      const callback = streamId.useCallback((nativeEvent) => {
        nativeEvent = nativeEvent.nativeEvent;
        layoutManager.setTargetDimensions(participantId, nativeEvent.width, nativeEvent.height);
      }, items2);
      const value = c5.get();
      c5 = value;
      const ref = streamId.useRef(0);
      const ref2 = streamId.useRef(0);
      const items3 = [streamId, value, mode];
      const items4 = [streamId, value, mode];
      const callback1 = streamId.useCallback((nativeEvent) => {
        let height;
        let width;
        if (null != streamId) {
          ({ width, height } = nativeEvent.nativeEvent.layout);
          const tmp3 = width === ref.current && height === ref2.current;
          if (!tmp3) {
            ref.current = width;
            ref2.current = height;
            if (mode === VoicePanelPIPModes.IN_APP) {
              size = { width: width * c5, height: height * c5 };
              const obj = VideoActionCreators;
              obj.updateVideoSize(tmp, size, 1);
            }
          }
        }
      }, items3);
      callback2 = streamId.useCallback((arg0) => {
        const tmp2 = null == streamId || arg0 || mode !== VoicePanelPIPModes.IN_APP;
        if (!tmp2) {
          size = { width: ref.current * c5, height: ref2.current * c5 };
          const obj = VideoActionCreators;
          obj.updateVideoSize(streamId, size, 1);
        }
      }, items4);
      const items5 = [callback2];
      const effect = streamId.useEffect(() => {
        const obj = ExternalPipDefault;
        let closure_0 = obj.addOnPipModeChangedListener(callback2);
        return () => {
          if (closure_0 != null) {
            closure_0.remove();
          }
        };
      }, items5);
      let closure_9 = tmp14;
      const items6 = [null != streamId];
      const effect1 = streamId.useEffect(() => {
        if (closure_9) {
          const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
          ComponentDispatch.dispatch(constants.VOICE_PANEL_PIP_CONTENT_READY);
        }
      }, items6);
      if (stateFromStores === constants.ENDED) {
        const obj5 = { style: tmp.streamEmptyImage, resizeMode: "contain" };
        tmp22 = closure_22(tmp2(9133).StreamEnded, obj5);
      } else {
        tmp22 = null;
        if (stateFromStores !== tmp16.FAILED) {
          let tmp17Result;
          if (null != streamId) {
            const obj6 = { style: tmp4, participantId, children: closure_22(closure_26, obj7) };
            obj7 = {
              useSurfaceDirectRenderer: surfaceDirectRendererExperiment,
              streamId,
              style: tmp.video,
              onSize: callback,
              onLayout: callback1,
            };
            tmp17Result = closure_22(closure_46, obj6);
          } else {
            const obj8 = { participantId, layoutTransition };
            tmp17Result = closure_22(closure_43, obj8);
          }
          tmp22 = tmp17Result;
        }
      }
      return tmp22;
    };
let c48 = "--voice-panel-pip-empty";
ReactCompilerGating = ReactCompilerGating_mod;
let closure_49 = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (transitionState) => {
        const obj = transitionState(576);
        const cResult = obj.c(6);
        transitionState = transitionState.transitionState;
        const transitionCleanUp = transitionState.transitionCleanUp;
        const tmp3 = closure_24();
        if (cResult[0] === transitionCleanUp) {
          let tmp4;
          let tmp5;
          let tmp8;
          if (cResult[1] === transitionState) {
            tmp4 = cResult[2];
            tmp5 = cResult[3];
          }
          const effect = react.useEffect(tmp4, tmp5);
          if (cResult[4] !== tmp3.emptyPip) {
            const obj2 = { style: tmp3.emptyPip };
            const tmp11 = closure_22(transitionCleanUp(5983), obj2);
            cResult[4] = tmp3.emptyPip;
            cResult[5] = tmp11;
            tmp8 = tmp11;
          } else {
            tmp8 = cResult[5];
          }
          return tmp8;
        }
        const fn = function o() {
          if (transitionState === native.TransitionStates.YEETED) {
            transitionCleanUp();
          }
        };
        const items = [transitionState, transitionCleanUp];
        cResult[0] = transitionCleanUp;
        cResult[1] = transitionState;
        cResult[2] = fn;
        cResult[3] = items;
        tmp5 = items;
        tmp4 = fn;
      }
    : (transitionState) => {
        transitionState = transitionState.transitionState;
        const transitionCleanUp = transitionState.transitionCleanUp;
        const items = [transitionState, transitionCleanUp];
        const tmp = closure_24();
        const effect = react.useEffect(() => {
          if (transitionState === native.TransitionStates.YEETED) {
            transitionCleanUp();
          }
        }, items);
        const obj = { style: tmp.emptyPip };
        return closure_22(transitionCleanUp(5983), obj);
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (layoutTransition) => {
        let channelId;
        let first;
        let height;
        let id;
        let tmp10;
        let width;
        let tmp = layoutTransition;
        let obj = layoutTransition(id[21]);
        const cResult = obj.c(22);
        layoutTransition = layoutTransition.layoutTransition;
        const tmp4 = channelId;
        channelId = react.useContext(channelId(id[22])).channelId;
        let obj2 = layoutTransition(id[27]);
        const pIPState = obj2.usePIPState();
        id = pIPState.id;
        ({ width, height } = pIPState);
        const tmp6 = closure_24();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const id1 = AuthenticationStore.getId();
          cResult[0] = id1;
          first = id1;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          let items = [ChannelRTCStore];
          cResult[1] = items;
          tmp10 = items;
        } else {
          tmp10 = cResult[1];
        }
        if (cResult[2] === channelId) {
          let tmp12;
          let tmp13;
          if (cResult[3] === id) {
            tmp12 = cResult[4];
            tmp13 = cResult[5];
          }
          const tmpResult = tmp(id[30]);
          const stateFromStores = tmpResult.useStateFromStores(tmp10, tmp12, tmp13, areParticipantsEqual);
          if (cResult[6] === height) {
            let tmp21;
            let tmp23;
            if (cResult[7] === width) {
              tmp21 = cResult[8];
            }
            if (cResult[9] !== tmp21) {
              let obj3 = { borderRadius: tmp21 };
              cResult[9] = tmp21;
              cResult[10] = obj3;
              tmp23 = obj3;
            } else {
              tmp23 = cResult[10];
            }
            if (cResult[11] === tmp6.contentWrapper) {
              let tmp24;
              let tmp25;
              if (cResult[12] === tmp23) {
                tmp24 = cResult[13];
              }
              if (cResult[14] !== layoutTransition) {
                const fn2 = function b(arg0, id, transitionState, transitionCleanUp) {
                  if (id.id === c48) {
                    const obj2 = { transitionState, transitionCleanUp };
                    return afk(closure_49, obj2, arg0);
                  } else {
                    const obj3 = { participantId: id.id, transitionState, transitionCleanUp, layoutTransition };
                    const type = id.type;
                    if (constants.ACTIVITY === type) {
                      const obj4 = {};
                      const merged = Object.assign(obj3);
                      return afk(closure_34, obj4, arg0);
                    } else if (constants.STREAM === type) {
                      const obj5 = {};
                      const merged1 = Object.assign(obj3);
                      return afk(closure_47, obj5, arg0);
                    } else {
                      if (constants.USER !== type) {
                        const HIDDEN_STREAM = constants.HIDDEN_STREAM;
                      }
                      const obj = {};
                      const merged2 = Object.assign(obj3);
                      return afk(closure_43, obj, arg0);
                    }
                  }
                };
                cResult[14] = layoutTransition;
                cResult[15] = fn2;
                tmp25 = fn2;
              } else {
                tmp25 = cResult[15];
              }
              if (cResult[16] === stateFromStores) {
                let tmp26;
                if (cResult[17] === tmp25) {
                  tmp26 = cResult[18];
                }
                if (cResult[19] === tmp26) {
                  let tmp30;
                  if (cResult[20] === tmp24) {
                    tmp30 = cResult[21];
                  }
                  return tmp30;
                }
                let obj4 = { style: tmp24, pointerEvents: "none", children: tmp26 };
                const tmp32 = closure_22(tmp4(id[29]), obj4);
                cResult[19] = tmp26;
                cResult[20] = tmp24;
                cResult[21] = tmp32;
                tmp30 = tmp32;
              }
              let obj5 = { items: stateFromStores, renderItem: tmp25, getItemKey: getFocusedKey };
              const tmp29 = closure_22(tmp(id[26]).TransitionGroup, obj5);
              cResult[16] = stateFromStores;
              cResult[17] = tmp25;
              cResult[18] = tmp29;
              tmp26 = tmp29;
            }
            const items1 = [tmp20, tmp23];
            const items2 = [items1];
            cResult[11] = tmp6.contentWrapper;
            cResult[12] = tmp23;
            cResult[13] = items2;
            tmp24 = items2;
          }
          const tmpResult2 = tmp(id[28]);
          const voicePanelPIPBorderRadius = tmpResult2.getVoicePanelPIPBorderRadius(width, height);
          cResult[6] = height;
          cResult[7] = width;
          cResult[8] = voicePanelPIPBorderRadius;
          tmp21 = voicePanelPIPBorderRadius;
        }
        const fn = function y() {
          let USER;
          let tmp = id;
          if (null != id) {
            const participant = ChannelRTCStore.getParticipant(channelId, tmp);
            let type;
            if (participant != null) {
              type = participant.type;
            }
            USER = type;
          } else {
            USER = constants.USER;
          }
          if (USER == null) {
            USER = constants.USER;
          }
          if (tmp == null) {
            tmp = first;
          }
          const items = [{ id: tmp, type: USER }];
          return items;
        };
        const items3 = [id, channelId, first];
        cResult[2] = channelId;
        cResult[3] = id;
        cResult[4] = fn;
        cResult[5] = items3;
        tmp13 = items3;
        tmp12 = fn;
      }
    : (layoutTransition) => {
        let obj4;
        layoutTransition = layoutTransition.layoutTransition;
        let channelId;
        let id;
        let height;
        channelId = height.useContext(channelId(id[22])).channelId;
        let obj = layoutTransition(id[27]);
        size = obj.usePIPState();
        id = size.id;
        const width = size.width;
        height = size.height;
        let tmp = closure_24();
        const contentWrapper = tmp;
        const id1 = AuthenticationStore.getId();
        let obj2 = layoutTransition(id[30]);
        let items = [ChannelRTCStore];
        let items1 = [id, channelId, id1];
        const items2 = [width, height, tmp.contentWrapper];
        const stateFromStores = obj2.useStateFromStores(
          items,
          () => {
            let USER;
            let tmp = id;
            if (null != id) {
              const participant = ChannelRTCStore.getParticipant(channelId, tmp);
              let type;
              if (participant != null) {
                type = participant.type;
              }
              USER = type;
            } else {
              USER = constants.USER;
            }
            if (USER == null) {
              USER = constants.USER;
            }
            if (tmp == null) {
              tmp = id1;
            }
            const items = [{ id: tmp, type: USER }];
            return items;
          },
          items1,
          areParticipantsEqual,
        );
        const items3 = [layoutTransition];
        const memo = height.useMemo(() => {
          let obj2;
          const items = [contentWrapper.contentWrapper];
          const obj = { borderRadius: obj2.getVoicePanelPIPBorderRadius(width, height) };
          items[1] = obj;
          const items1 = [items];
          obj2 = VoicePanelPIPUtils;
          return items1;
        }, items2);
        const callback = height.useCallback((arg0, id, transitionState, transitionCleanUp) => {
          if (id.id === c48) {
            const obj2 = { transitionState, transitionCleanUp };
            return afk(closure_49, obj2, arg0);
          } else {
            const obj3 = { participantId: id.id, transitionState, transitionCleanUp, layoutTransition };
            const type = id.type;
            if (constants.ACTIVITY === type) {
              const obj4 = {};
              const merged = Object.assign(obj3);
              return afk(closure_34, obj4, arg0);
            } else if (constants.STREAM === type) {
              const obj5 = {};
              const merged1 = Object.assign(obj3);
              return afk(closure_47, obj5, arg0);
            } else {
              if (constants.USER !== type) {
                const HIDDEN_STREAM = constants.HIDDEN_STREAM;
              }
              const obj = {};
              const merged2 = Object.assign(obj3);
              return afk(closure_43, obj, arg0);
            }
          }
        }, items3);
        let obj3 = {
          style: memo,
          pointerEvents: "none",
          children: closure_22(layoutTransition(id[26]).TransitionGroup, obj4),
        };
        obj4 = { items: stateFromStores, renderItem: callback, getItemKey: getFocusedKey };
        const tmp6 = channelId(id[29]);
        return closure_22(tmp6, obj3);
      },
);
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/VoicePanelPIPContent.tsx");

export default memoResult;
