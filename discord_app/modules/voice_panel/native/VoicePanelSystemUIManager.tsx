// discord_app/modules/voice_panel/native/VoicePanelSystemUIManager.tsx
import ReactBatchUpdates from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import VoicePanelStateContextDefault from "VoicePanelStateContext.tsx";
import HomeIndicatorDefault from "HomeIndicator.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelRTCStore from "../../calls/ChannelRTCStore.tsx";

const require = globalThis.__r;

require = fn;
const VoicePanelModes = fn(11372).VoicePanelModes;
const VoicePanelControlsModes = fn(11370).VoicePanelControlsModes;
const ParticipantTypes = fn(5807).ParticipantTypes;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = jsxProd);
let closure_12 = {
  code: "(function VoicePanelSystemUIManagerTsx1(){let[focused,mode,controlsSpecs,windowDimensions]=this.__closure;var _focused$get;return{focusedId:(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,mode:mode.get(),controlsMode:controlsSpecs.get().mode,landscape:windowDimensions.get().landscape};})",
};
let closure_13 = {
  code: "(function VoicePanelSystemUIManagerTsx2(props,previous){let[cheapWorkletShallowEqual,scheduleOnRN,handleStateChange]=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;scheduleOnRN(handleStateChange,props);})",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelSystemUIManager.tsx");

export default noop.memo(function VoicePanelSystemUIManager() {
  const context = noop.useContext(VoicePanelStateContextDefault);
  const channelId = context.channelId;
  ({ focused, mode, controlsSpecs, windowDimensions } = context);
  [tmp5, c1] = noop.useState(true);
  const tmp6 = _slicedToArray(noop.useState(true), 2);
  let tmp4 = _slicedToArray(noop.useState(true), 2);
  [tmp8, c3] = noop.useState(false);
  const tmp9 = _slicedToArray(noop.useState(false), 2);
  noop = tmp9[1];
  items = [channelId];
  const memo = noop.useMemo(() => {
    closure_0 = _undefined2(_undefined3[10])(
      function updateState(arg0) {
        ({ focusedId: closure_0, mode: focusedId, controlsMode: closure_2, landscape: closure_3 } = arg0);
        closure_0(1259).batchUpdates(() => {
          dependencyMap(c1 !== constants.PIP);
          let tmp4 = null == _undefined;
          if (tmp4) {
            tmp4 = !c3;
          }
          if (!tmp4) {
            tmp4 = _undefined2 !== constants2.HIDDEN;
          }
          focusedId(tmp4);
          let participant;
          if (null != _undefined) {
            participant = cancelPendingDebounce.getParticipant(closure_0, _undefined);
          }
          let type;
          if (participant != null) {
            type = participant.type;
          }
          const tmp11 = _undefined(_undefined2[9]).isIOS() && type === constants3.ACTIVITY;
          closure_2_4(tmp11);
          let tmp14 = !tmp4;
          if (!tmp4) {
            tmp14 = !tmp11;
          }
          _undefined4(tmp14);
          const obj = _undefined(_undefined2[9]);
        });
      },
      500,
      { maxWait: 2000 },
    );
    let focusedId;
    return {
      cancelPendingDebounce() {
        closure_0.cancel();
      },
      handleStateChange(focusedId) {
        if (focusedId !== focusedId.focusedId) {
          focusedId = focusedId.focusedId;
          _undefined(focusedId);
        } else {
          _undefined.cancel();
          c0 = undefined;
          c1 = undefined;
          c2 = undefined;
          c3 = undefined;
          ({ focusedId: c0, mode: c1, controlsMode: c2, landscape: c3 } = focusedId);
          ReactBatchUpdates.batchUpdates(() => {
            dependencyMap(c1 !== constants.PIP);
            let tmp4 = null == _undefined;
            if (tmp4) {
              tmp4 = !c3;
            }
            if (!tmp4) {
              tmp4 = _undefined2 !== constants2.HIDDEN;
            }
            focusedId(tmp4);
            let participant;
            if (null != _undefined) {
              participant = cancelPendingDebounce.getParticipant(closure_0, _undefined);
            }
            let type;
            if (participant != null) {
              type = participant.type;
            }
            const tmp11 = _undefined(_undefined2[9]).isIOS() && type === constants3.ACTIVITY;
            closure_2_4(tmp11);
            let tmp14 = !tmp4;
            if (!tmp4) {
              tmp14 = !tmp11;
            }
            _undefined4(tmp14);
            const obj = _undefined(_undefined2[9]);
          });
        }
      },
    };
  }, items);
  const cancelPendingDebounce = memo.cancelPendingDebounce;
  const items1 = [cancelPendingDebounce];
  const effect = noop.useEffect(() => () => cancelPendingDebounce(), items1);
  const tmp7 = _slicedToArray(noop.useState(false), 2);
  const items2 = [closure_12, focused, mode, controlsSpecs, windowDimensions];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [tmp13, tmp14, tmp15, tmp16, tmp17] = items2;
  class VoicePanelSystemUIManagerTsx1 {
    constructor() {
      value = closure_0.get();
      id = undefined;
      if (value != null) {
        id = value.id;
      }
      obj = {
        focusedId: id,
        mode: closure_1.get(),
        controlsMode: closure_2.get().mode,
        landscape: closure_3.get().landscape,
      };
      return obj;
    }
  }
  const items3 = [tmp14, tmp15, tmp16, tmp17];
  VoicePanelSystemUIManagerTsx1.__closure = items3;
  VoicePanelSystemUIManagerTsx1.__workletHash = 5587147718300;
  VoicePanelSystemUIManagerTsx1.__initData = tmp13;
  const items4 = [
    closure_13,
    require("cheapWorkletShallowEqual").cheapWorkletShallowEqual,
    require("../../../../_runtime/metro/01705__.js").scheduleOnRN,
    memo.handleStateChange,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp18, tmp19, tmp20, tmp21] = items4;
  class VoicePanelSystemUIManagerTsx2 {
    constructor(arg0, arg1) {
      tmp = arg1;
      tmp2 = closure_0;
      if (!tmp2(arg0, tmp)) {
        tmp3 = closure_1;
        tmp4 = closure_2;
        tmp5 = closure_1(closure_2, arg0);
      }
      return;
    }
  }
  const items5 = [tmp19, tmp20, tmp21];
  VoicePanelSystemUIManagerTsx2.__closure = items5;
  VoicePanelSystemUIManagerTsx2.__workletHash = 4961093697158;
  VoicePanelSystemUIManagerTsx2.__initData = tmp18;
  const animatedReaction = require("../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    VoicePanelSystemUIManagerTsx1,
    VoicePanelSystemUIManagerTsx2,
  );
  let tmp25 = null;
  if (tmp6[0]) {
    const obj2 = { hidden: !tmp5, barStyle: "light-content" };
    tmp25 = closure_9(tmp(11361), obj2);
  }
  const obj3 = { children: null };
  const items6 = [
    tmp25,
    closure_9(HomeIndicatorDefault, { prefersHidden: tmp8, prefersDeferringSystemGestures: tmp9[0] }),
  ];
  obj3.children = items6;
  return closure_11(closure_10, obj3);
});
