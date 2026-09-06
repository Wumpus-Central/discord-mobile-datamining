// === Module 17096: VoicePanelSystemUIManager ===

// Module 17096 (VoicePanelSystemUIManager)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1249 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4576 */;

require = fn;
const VoicePanelModes = fn(12273).VoicePanelModes;
const VoicePanelControlsModes = fn(12271).VoicePanelControlsModes;
const ParticipantTypes = fn(4581).ParticipantTypes;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const __initData = { code: "function VoicePanelSystemUIManagerTsx1(){const{focused,mode,controlsSpecs,windowDimensions}=this.__closure;var _focused$get;return{focusedId:(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,mode:mode.get(),controlsMode:controlsSpecs.get().mode,landscape:windowDimensions.get().landscape};}" };
const __initData2 = { code: "function VoicePanelSystemUIManagerTsx2(props,previous){const{cheapWorkletShallowEqual,runOnJS,handleStateChange}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(handleStateChange)(props);}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelSystemUIManager.tsx");

export default noop.memo(function VoicePanelSystemUIManager() {
  const context = windowDimensions.useContext(channelId(mode[7]));
  const focused = context.focused;
  channelId = context.channelId;
  mode = context.mode;
  const controlsSpecs = context.controlsSpecs;
  windowDimensions = context.windowDimensions;
  [tmp5, ChannelRTCStore] = controlsSpecs(windowDimensions.useState(true), 2);
  const tmp6 = controlsSpecs(windowDimensions.useState(true), 2);
  closure_6 = tmp6[1];
  let tmp4 = controlsSpecs(windowDimensions.useState(true), 2);
  [tmp8, VoicePanelControlsModes] = controlsSpecs(windowDimensions.useState(false), 2);
  const tmp9 = controlsSpecs(windowDimensions.useState(false), 2);
  closure_8 = tmp9[1];
  const items = [channelId];
  const memo = windowDimensions.useMemo(() => {
    closure_0 = channelId(mode[10])(function updateState(arg0) {
      ({ focusedId: closure_0, mode: focusedId, controlsMode: closure_2, landscape: closure_3 } = arg0);
      closure_0(mode[8]).batchUpdates(() => {
        closure_2_6(c1 !== constants.PIP);
        let tmp4 = null == c0;
        if (tmp4) {
          tmp4 = !c3;
        }
        if (!tmp4) {
          tmp4 = c2 !== constants.HIDDEN;
        }
        closure_2_5(tmp4);
        participant = undefined;
        if (null != c0) {
          participant = participant.getParticipant(focusedId, tmp3);
        }
        let type;
        if (participant != null) {
          type = participant.type;
        }
        const tmp11 = focused(mode[9]).isIOS() && type === constants2.ACTIVITY;
        closure_2_8(tmp11);
        let tmp14 = !tmp4;
        if (!tmp4) {
          tmp14 = !tmp11;
        }
        closure_2_7(tmp14);
      });
    }, 500, { maxWait: 2000 });
    let focusedId;
    return {
      cancelPendingDebounce() {
        closure_0.cancel();
      },
      handleStateChange(focusedId) {
        if (focusedId !== focusedId.focusedId) {
          focusedId = focusedId.focusedId;
          closure_0(focusedId);
        } else {
          closure_0.cancel();
          c0 = undefined;
          c1 = undefined;
          c2 = undefined;
          c3 = undefined;
          ({ focusedId: c0, mode: c1, controlsMode: c2, landscape: c3 } = focusedId);
          ReactBatchUpdates.batchUpdates(() => {
            closure_2_6(c1 !== constants.PIP);
            let tmp4 = null == c0;
            if (tmp4) {
              tmp4 = !c3;
            }
            if (!tmp4) {
              tmp4 = c2 !== constants.HIDDEN;
            }
            closure_2_5(tmp4);
            participant = undefined;
            if (null != c0) {
              participant = participant.getParticipant(focusedId, tmp3);
            }
            let type;
            if (participant != null) {
              type = participant.type;
            }
            const tmp11 = focused(mode[9]).isIOS() && type === constants2.ACTIVITY;
            closure_2_8(tmp11);
            let tmp14 = !tmp4;
            if (!tmp4) {
              tmp14 = !tmp11;
            }
            closure_2_7(tmp14);
          });
        }
      }
    };
  }, items);
  const cancelPendingDebounce = memo.cancelPendingDebounce;
  const handleStateChange = memo.handleStateChange;
  const items1 = [cancelPendingDebounce];
  const effect = windowDimensions.useEffect(() => () => cancelPendingDebounce(), items1);
  focused(mode[11]);
  const fn = function v() {
    value = focused.get();
    let id;
    if (value != null) {
      id = value.id;
    }
    return { focusedId: id, mode: mode.get(), controlsMode: controlsSpecs.get().mode, landscape: windowDimensions.get().landscape };
  };
  fn.__closure = { focused, mode, controlsSpecs, windowDimensions };
  fn.__workletHash = 2478376475717;
  fn.__initData = __initData;
  const fn2 = function u(safeAreaState, current) {
    if (!obj.cheapWorkletShallowEqual(safeAreaState, current)) {
      ReanimatedRexport.runOnJS(handleStateChange)(safeAreaState);
      const tmp2Result = ReanimatedRexport;
    }
  };
  let obj = { cheapWorkletShallowEqual: focused(mode[12]).cheapWorkletShallowEqual, runOnJS: focused(mode[11]).runOnJS, handleStateChange };
  fn2.__closure = obj;
  fn2.__workletHash = 3592680244658;
  fn2.__initData = __initData2;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  let tmp15 = null;
  if (tmp6[0]) {
    obj = { hidden: !tmp5, barStyle: "light-content" };
    tmp15 = cancelPendingDebounce(tmp(tmp2[13]), obj);
  }
  const obj1 = { children: null };
  const items2 = [tmp15, cancelPendingDebounce(channelId(mode[14]), { prefersHidden: tmp8, prefersDeferringSystemGestures: tmp9[0] })];
  obj1.children = items2;
  return closure_11(handleStateChange, obj1);
});