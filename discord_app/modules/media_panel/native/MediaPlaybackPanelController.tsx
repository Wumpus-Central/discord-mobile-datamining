// === Module 17836: MediaPlaybackPanelController ===

// Module 17836 (MediaPlaybackPanelController)
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 14727 */;
import MediaPlaybackPanelStateContextDefault from "MediaPlaybackPanelStateContext" /* 17837 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2063 */;
import VoicePanelStore from "VoicePanelStore" /* 6081 */;

const require = fn;
function useCoreState() {
  sharedValue = sharedValue(4811).useSharedValue(MediaPlaybackPanelModes.PIP);
  const obj = sharedValue(4811);
  const sharedValue1 = sharedValue(4811).useSharedValue({ height: 0, width: 0 });
  const obj2 = sharedValue(4811);
  const sharedValue2 = sharedValue(4811).useSharedValue({ x: -1, y: -1 });
  const obj3 = sharedValue(4811);
  const sharedValue3 = sharedValue(4811).useSharedValue(AccessibilityStore.useReducedMotion);
  const items = [sharedValue3];
  const effect = noop.useEffect(() => {
    function onChange() {
      const useReducedMotion = AccessibilityStore.useReducedMotion;
      if (useReducedMotion !== sharedValue3.get()) {
        const result = sharedValue3.set(useReducedMotion);
      }
    }
    let result = AccessibilityStore.addReactChangeListener(onChange);
    return () => {
      const result = AccessibilityStore.removeReactChangeListener(onChange);
    };
  }, items);
  const obj4 = sharedValue(4811);
  const sharedValue4 = sharedValue(4811).useSharedValue(true);
  const obj5 = sharedValue(4811);
  const sharedValue5 = sharedValue(4811).useSharedValue(0);
  const obj6 = sharedValue(4811);
  const fn = function p() {
    if (sharedValue.get() === MediaPlaybackPanelModes.PIP) {
      let UNDEFINED = MorphablePanelModes.PIP;
    } else {
      UNDEFINED = MorphablePanelModes.UNDEFINED;
    }
    return UNDEFINED;
  };
  fn.__closure = { mode: sharedValue, MediaPlaybackPanelModes, MorphablePanelModes };
  fn.__workletHash = 10375114450450;
  fn.__initData = __initData;
  const derivedValue = sharedValue(4811).useDerivedValue(fn);
  const obj7 = sharedValue(4811);
  const obj8 = { mode: sharedValue, MediaPlaybackPanelModes, MorphablePanelModes };
  const tmp9 = sharedValue3(1631)();
  const tmp10 = sharedValue3(17625)(sharedValue3(1631)());
  const sharedValue6 = sharedValue(4811).useSharedValue(false);
  const obj9 = sharedValue(4811);
  const obj10 = sharedValue(4811);
  return { mode: sharedValue, morphablePanelMode: derivedValue, wrapperDimensions: sharedValue1, useReducedMotion: sharedValue3, pipState: sharedValue2, pipAvoidanceSpecs: tmp10, scrollPosition: sharedValue5, canShowPIP: sharedValue4, lockScrolling: sharedValue6, wrapperOffset: sharedValue(4811).useSharedValue({ x: 0, y: 0, gestureActive: false }) };
}
const MediaPlaybackPanelModes = fn(14728).MediaPlaybackPanelModes;
const ActivityPanelModes = fn(6074).ActivityPanelModes;
const MorphablePanelModes = fn(11927).MorphablePanelModes;
const jsx = fn(21).jsx;
let __initData = { code: "function MediaPlaybackPanelControllerTsx1(){const{mode,MediaPlaybackPanelModes,MorphablePanelModes}=this.__closure;switch(mode.get()){case MediaPlaybackPanelModes.PIP:{return MorphablePanelModes.PIP;}default:{return MorphablePanelModes.UNDEFINED;}}}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelController.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function MediaPlaybackPanelController(arg0) {
  const cResult = mode(wrapperDimensions[13]).c(27);
  const tmp4 = useCoreState();
  mode = tmp4.mode;
  const morphablePanelMode = tmp4.morphablePanelMode;
  wrapperDimensions = tmp4.wrapperDimensions;
  const useReducedMotion = tmp4.useReducedMotion;
  const pipState = tmp4.pipState;
  const pipAvoidanceSpecs = tmp4.pipAvoidanceSpecs;
  const scrollPosition = tmp4.scrollPosition;
  const canShowPIP = tmp4.canShowPIP;
  const lockScrolling = tmp4.lockScrolling;
  const wrapperOffset = tmp4.wrapperOffset;
  const dismissToPipGestureRef = pipState.useRef(undefined);
  if (cResult[0] !== mode) {
    value = mode.get();
    cResult[0] = mode;
    cResult[1] = value;
    let tmp5 = value;
  } else {
    tmp5 = cResult[1];
  }
  const tmp7 = useReducedMotion(pipState.useState(tmp5), 2);
  const first = tmp7[0];
  __initData = tmp7[1];
  if (cResult[2] !== first) {
    class E {
      constructor() {
        flag = closure_11 === MediaPlaybackPanelModes.PIP;
        if (flag) {
          tmp2 = closure_12;
          tmp3 = closure_12(tmp.DISMISSED);
          tmp4 = closure_1;
          tmp5 = closure_2;
          obj = closure_1(closure_2[14]);
          userDidClosePipResult = obj.userDidClosePip();
          flag = true;
        }
        return flag;
      }
    }
    cResult[2] = first;
    cResult[3] = E;
  } else {
    class E {
      constructor() {
        flag = closure_11 === MediaPlaybackPanelModes.PIP;
        if (flag) {
          tmp2 = closure_12;
          tmp3 = closure_12(tmp.DISMISSED);
          tmp4 = closure_1;
          tmp5 = closure_2;
          obj = closure_1(closure_2[14]);
          userDidClosePipResult = obj.userDidClosePip();
          flag = true;
        }
        return flag;
      }
    }
  }
  useCoreState = E;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor(arg0) {
        return arg0.voicePanelsPIP.size > 0;
      }
    }
    cResult[4] = F;
  } else {
    class F {
      constructor(arg0) {
        return arg0.voicePanelsPIP.size > 0;
      }
    }
  }
  const tmp11 = canShowPIP(F);
  closure_14 = tmp11;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor(arg0) {
        return arg0.voicePanelsPIP.size > 0;
      }
    }
    const items = [scrollPosition];
    class T {
      constructor() {
        return scrollPosition.getActivityPanelMode() === wrapperOffset.PIP;
      }
    }
    cResult[5] = items;
    cResult[6] = T;
    let tmp13 = T;
    const tmp12 = items;
  } else {
    class F {
      constructor(arg0) {
        return arg0.voicePanelsPIP.size > 0;
      }
    }
    tmp13 = cResult[6];
  }
  let obj = mode(wrapperDimensions[13]);
  const stateFromStores = mode(wrapperDimensions[15]).useStateFromStores(tmp12, tmp13);
  if (cResult[7] === canShowPIP) {
    class F {
      constructor(arg0) {
        return arg0.voicePanelsPIP.size > 0;
      }
    }
  }
  const fn = function z() {
    let tmp2 = !closure_14;
    if (!closure_14) {
      tmp2 = !stateFromStores;
    }
    const result = canShowPIP.set(tmp2);
  };
  const items1 = [canShowPIP, tmp11, stateFromStores];
  cResult[7] = canShowPIP;
  cResult[8] = stateFromStores;
  cResult[9] = tmp11;
  cResult[10] = fn;
  cResult[11] = items1;
  const tmpResult = mode(wrapperDimensions[15]);
}) : (function MediaPlaybackPanelController(children) {
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  canShowPIP = undefined;
  c8 = undefined;
  c9 = undefined;
  useCoreState = undefined;
  const tmp = useCoreState();
  const mode = tmp.mode;
  ({ morphablePanelMode: c1, wrapperDimensions: c2, useReducedMotion: c3, pipState: c4, pipAvoidanceSpecs: c5, scrollPosition: c6, canShowPIP } = tmp);
  ({ lockScrolling: c8, wrapperOffset: c9 } = tmp);
  const dismissToPipGestureRef = noop.useRef(undefined);
  let tmp2 = _slicedToArray(noop.useState(mode.get()), 2);
  const first = tmp2[0];
  const setMode = tmp4;
  const items = [first, tmp2[1]];
  useCoreState = noop.useCallback(() => {
    let flag = first === MediaPlaybackPanelModes.PIP;
    if (flag) {
      setMode(tmp.DISMISSED);
      MediaPlayerManagerDefault.userDidClosePip();
      flag = true;
    }
    return flag;
  }, items);
  const tmp5 = canShowPIP((voicePanelsPIP) => voicePanelsPIP.voicePanelsPIP.size > 0);
  closure_14 = tmp5;
  const items1 = [c6];
  const stateFromStores = mode(504).useStateFromStores(items1, () => scrollPosition.getActivityPanelMode() === wrapperOffset.PIP);
  const items2 = [canShowPIP, tmp5, stateFromStores];
  const layoutEffect = noop.useLayoutEffect(() => {
    let tmp2 = !closure_14;
    if (!closure_14) {
      tmp2 = !stateFromStores;
    }
    const result = canShowPIP.set(tmp2);
  }, items2);
  return first(MediaPlaybackPanelStateContextDefault.Provider, { value: _slicedToArray(noop.useState(() => ({ mode, setMode, morphablePanelMode, wrapperDimensions, useReducedMotion, pipState, pipAvoidanceSpecs, dismissToPipGestureRef, dismissPanel, scrollPosition, canShowPIP, lockScrolling, wrapperOffset })), 1)[0], children: children.children });
});