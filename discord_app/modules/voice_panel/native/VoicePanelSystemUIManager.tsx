// === Module 17210: VoicePanelSystemUIManager ===

// Module 17210 (VoicePanelSystemUIManager)
import react_native from "react-native" /* 1259 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import CallConstants from "CallConstants" /* 4911 */;
import cheapWorkletShallowEqual2 from "cheapWorkletShallowEqual" /* 9074 */;
import VoicePanelControlsConstants from "VoicePanelControlsConstants" /* 11900 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11902 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4906 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let participant;

let c10;
let c9;
let unpackModuleId;
const VoicePanelModes = VoicePanelConstants.VoicePanelModes;
const VoicePanelControlsModes = VoicePanelControlsConstants.VoicePanelControlsModes;
const ParticipantTypes = CallConstants.ParticipantTypes;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
const __initData = { code: "function VoicePanelSystemUIManagerTsx1(){const{focused,mode,controlsSpecs,windowDimensions}=this.__closure;var _focused$get;return{focusedId:(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,mode:mode.get(),controlsMode:controlsSpecs.get().mode,landscape:windowDimensions.get().landscape};}" };
const __initData2 = { code: "function VoicePanelSystemUIManagerTsx2(props_0,previous){const{cheapWorkletShallowEqual,runOnJS,handleStateChange}=this.__closure;if(cheapWorkletShallowEqual(props_0,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(handleStateChange)(props_0);}" };
const memoResult = react.memo(function VoicePanelSystemUIManager() {
  let channelId;
  let items2;
  let mode;
  let tmp5;
  let tmp9;
  let windowDimensions;
  let tmp = channelId;
  const context = windowDimensions.useContext(channelId(mode[7]));
  const focused = context.focused;
  channelId = context.channelId;
  mode = context.mode;
  const controlsSpecs = context.controlsSpecs;
  windowDimensions = context.windowDimensions;
  let tmp4 = controlsSpecs(windowDimensions.useState(true), 2);
  [tmp5, ChannelRTCStore] = tmp4;
  const tmp6 = controlsSpecs(windowDimensions.useState(true), 2);
  let closure_6 = tmp6[1];
  const first = tmp6[0];
  [tmp9, VoicePanelControlsModes] = controlsSpecs(windowDimensions.useState(false), 2);
  const tmp8 = controlsSpecs(windowDimensions.useState(false), 2);
  const tmp10 = controlsSpecs(windowDimensions.useState(false), 2);
  let closure_8 = tmp10[1];
  const items = [channelId];
  const first1 = tmp10[0];
  const memo = windowDimensions.useMemo(() => {
    let constants2;
    let constants3;
    let closure_0 = channelId(mode[10])(function updateState(arg0) {
      let closure_2;
      let closure_3;
      ({ focusedId: closure_0, mode: focusedId, controlsMode: closure_2, landscape: closure_3 } = arg0);
      const obj = closure_0(mode[8]);
      obj.batchUpdates(() => {
        closure_2_6(c1 !== constants.PIP);
        let tmp4 = null == c0;
        const HIDDEN = constants2.HIDDEN;
        if (tmp4) {
          tmp4 = !c3;
        }
        if (!tmp4) {
          tmp4 = c2 !== HIDDEN;
        }
        closure_2_5(tmp4);
        participant = undefined;
        if (null != c0) {
          participant = participant.getParticipant(focusedId, c0);
        }
        let type;
        if (participant != null) {
          type = participant.type;
        }
        const ACTIVITY = constants3.ACTIVITY;
        const obj = _undefined(mode[9]);
        const tmp11 = obj.isIOS() && type === ACTIVITY;
        closure_2_8(tmp11);
        const tmp14 = !tmp4 && !tmp11;
        closure_2_7(tmp14);
      });
    }, 500, { maxWait: 2000 });
    let focusedId;
    let obj = {
      cancelPendingDebounce() {
        closure_0.cancel();
      },
      handleStateChange(focusedId) {
        let c0;
        let c1;
        let c2;
        let c3;
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
          let obj = react_native;
          obj.batchUpdates(() => {
            closure_2_6(c1 !== constants.PIP);
            let tmp4 = null == c0;
            const HIDDEN = constants2.HIDDEN;
            if (tmp4) {
              tmp4 = !c3;
            }
            if (!tmp4) {
              tmp4 = c2 !== HIDDEN;
            }
            closure_2_5(tmp4);
            participant = undefined;
            if (null != c0) {
              participant = participant.getParticipant(focusedId, c0);
            }
            let type;
            if (participant != null) {
              type = participant.type;
            }
            const ACTIVITY = constants3.ACTIVITY;
            const obj = _undefined(mode[9]);
            const tmp11 = obj.isIOS() && type === ACTIVITY;
            closure_2_8(tmp11);
            const tmp14 = !tmp4 && !tmp11;
            closure_2_7(tmp14);
          });
        }
      }
    };
    return obj;
  }, items);
  const cancelPendingDebounce = memo.cancelPendingDebounce;
  const handleStateChange = memo.handleStateChange;
  const items1 = [cancelPendingDebounce];
  const effect = windowDimensions.useEffect(() => () => cancelPendingDebounce(), items1);
  let obj = focused(mode[11]);
  const fn = function v() {
    const value = focused.get();
    let id;
    if (value != null) {
      id = value.id;
    }
    const obj = { focusedId: id, mode: mode.get(), controlsMode: controlsSpecs.get().mode, landscape: windowDimensions.get().landscape };
    return obj;
  };
  fn.__closure = { focused, mode, controlsSpecs, windowDimensions };
  fn.__workletHash = 2478376475717;
  fn.__initData = __initData;
  const fn2 = function u(safeAreaState, safeAreaState2) {
    const cheapWorkletShallowEqual = cheapWorkletShallowEqual2.cheapWorkletShallowEqual;
    cheapWorkletShallowEqual2;
    const tmp = safeAreaState2;
    if (!cheapWorkletShallowEqual(safeAreaState, tmp)) {
      const tmp2Result = ReanimatedRexport;
      tmp2Result.runOnJS(handleStateChange)(safeAreaState);
    }
  };
  fn2.__closure = { cheapWorkletShallowEqual: focused(mode[12]).cheapWorkletShallowEqual, runOnJS: focused(mode[11]).runOnJS, handleStateChange };
  fn2.__workletHash = 9238710291709;
  fn2.__initData = __initData2;
  ({ cheapWorkletShallowEqual: focused(mode[12]).cheapWorkletShallowEqual, runOnJS: focused(mode[11]).runOnJS, handleStateChange });
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  let tmp17 = null;
  const tmp16 = handleStateChange;
  if (first) {
    const obj3 = { hidden: !tmp5, barStyle: "light-content" };
    tmp17 = cancelPendingDebounce(tmp(tmp2[13]), obj3);
  }
  const obj4 = { children: items2 };
  items2 = [tmp17, cancelPendingDebounce(tmp(tmp2[14]), { prefersHidden: tmp9, prefersDeferringSystemGestures: first1 })];
  return closure_11(tmp16, obj4);
});
const result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelSystemUIManager.tsx");

export default memoResult;