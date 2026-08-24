// === Module 16409: ? ===

// Module 16409
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import closure_5 from "getParticipants" /* 4778 */;
import { VoicePanelModes } from "VoicePanelModes" /* 11489 */;
import { VoicePanelControlsModes } from "VoicePanelControlsModes" /* 11487 */;
import { ParticipantTypes } from "ParticipantTypes" /* 4549 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
let c4 = importAllResult;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = jsxProd);
let closure_12 = { code: "function VoicePanelSystemUIManagerTsx1(){const{focused,mode,controlsSpecs,windowDimensions}=this.__closure;var _focused$get;return{focusedId:(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,mode:mode.get(),controlsMode:controlsSpecs.get().mode,landscape:windowDimensions.get().landscape};}" };
let closure_13 = { code: "function VoicePanelSystemUIManagerTsx2(props,previous){const{cheapWorkletShallowEqual,runOnJS,handleStateChange}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;runOnJS(handleStateChange)(props);}" };
const memoResult = importAllResult.memo(function VoicePanelSystemUIManager() {
  const context = windowDimensions.useContext(channelId(mode[7]));
  const focused = context.focused;
  channelId = context.channelId;
  mode = context.mode;
  const controlsSpecs = context.controlsSpecs;
  windowDimensions = context.windowDimensions;
  [tmp5, closure_5] = controlsSpecs(windowDimensions.useState(true), 2);
  const tmp6 = controlsSpecs(windowDimensions.useState(true), 2);
  closure_6 = tmp6[1];
  let tmp4 = controlsSpecs(windowDimensions.useState(true), 2);
  [tmp8, VoicePanelControlsModes] = controlsSpecs(windowDimensions.useState(false), 2);
  const tmp9 = controlsSpecs(windowDimensions.useState(false), 2);
  closure_8 = tmp9[1];
  const items = [channelId];
  const memo = windowDimensions.useMemo(() => {
    closure_0 = channelId(mode[10])(function updateState(arg0) {
      ({ focusedId: closure_0, mode: c1, controlsMode: closure_2, landscape: closure_3 } = arg0);
      lib(closure_1_2[8]).batchUpdates(() => {
        closure_1_6(c1 !== closure_2_6.PIP);
        let tmp4 = null == c0;
        if (tmp4) {
          tmp4 = !c3;
        }
        if (!tmp4) {
          tmp4 = c2 !== closure_2_7.HIDDEN;
        }
        closure_1_5(tmp4);
        let participant;
        if (null != c0) {
          participant = closure_2_5.getParticipant(c1, tmp3);
        }
        let type;
        if (participant != null) {
          type = participant.type;
        }
        const tmp11 = _undefined(closure_2_2[9]).isIOS() && type === closure_2_8.ACTIVITY;
        closure_1_8(tmp11);
        let tmp14 = !tmp4;
        if (!tmp4) {
          tmp14 = !tmp11;
        }
        closure_1_7(tmp14);
      });
    }, 500, { maxWait: 2000 });
    c1 = undefined;
    return {
      cancelPendingDebounce(arg0, arg1) {
        lib.cancel();
      },
      handleStateChange(focusedId) {
        if (focusedId !== focusedId.focusedId) {
          focusedId = focusedId.focusedId;
          lib(focusedId);
        } else {
          lib.cancel();
          lib = undefined;
          focusedId = undefined;
          c2 = undefined;
          c3 = undefined;
          ({ focusedId: c0, mode: c1, controlsMode: c2, landscape: c3 } = focusedId);
          focused(mode[8]).batchUpdates(() => {
            closure_1_6(c1 !== closure_2_6.PIP);
            let tmp4 = null == c0;
            if (tmp4) {
              tmp4 = !c3;
            }
            if (!tmp4) {
              tmp4 = c2 !== closure_2_7.HIDDEN;
            }
            closure_1_5(tmp4);
            let participant;
            if (null != c0) {
              participant = closure_2_5.getParticipant(c1, tmp3);
            }
            let type;
            if (participant != null) {
              type = participant.type;
            }
            const tmp11 = _undefined(closure_2_2[9]).isIOS() && type === closure_2_8.ACTIVITY;
            closure_1_8(tmp11);
            let tmp14 = !tmp4;
            if (!tmp4) {
              tmp14 = !tmp11;
            }
            closure_1_7(tmp14);
          });
          const obj = focused(mode[8]);
        }
      }
    };
  }, items);
  const cancelPendingDebounce = memo.cancelPendingDebounce;
  const handleStateChange = memo.handleStateChange;
  const items1 = [cancelPendingDebounce];
  const effect = windowDimensions.useEffect(() => () => callback(), items1);
  let obj = focused(mode[11]);
  const fn = function v() {
    const value = focused.get();
    let id;
    if (value != null) {
      id = value.id;
    }
    return { focusedId: id, mode: mode.get(), controlsMode: controlsSpecs.get().mode, landscape: windowDimensions.get().landscape };
  };
  fn.__closure = { focused, mode, controlsSpecs, windowDimensions };
  fn.__workletHash = 2478376475717;
  fn.__initData = closure_12;
  const fn2 = function u(safeAreaState, current) {
    if (!obj.cheapWorkletShallowEqual(safeAreaState, current)) {
      focused(mode[11]).runOnJS(handleStateChange)(safeAreaState);
      const tmp2Result = focused(mode[11]);
    }
  };
  obj = { cheapWorkletShallowEqual: focused(mode[12]).cheapWorkletShallowEqual, runOnJS: focused(mode[11]).runOnJS, handleStateChange };
  fn2.__closure = obj;
  fn2.__workletHash = 3592680244658;
  fn2.__initData = closure_13;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  let tmp15 = null;
  if (tmp6[0]) {
    obj = { hidden: null, barStyle: "light-content" };
    obj[0] = !tmp5;
    tmp15 = cancelPendingDebounce(tmp(tmp2[13]), obj);
  }
  obj1 = { children: null };
  const items2 = [tmp15, cancelPendingDebounce(channelId(mode[14]), { prefersHidden: tmp8, prefersDeferringSystemGestures: tmp9[0] })];
  obj1[0] = items2;
  return closure_11(handleStateChange, obj1);
});
const result = require("set").fileFinishedImporting("modules/voice_panel/native/VoicePanelSystemUIManager.tsx");

export default memoResult;