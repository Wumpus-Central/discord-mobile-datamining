// === Module 17373: MediaPlaybackPanelController ===

// Module 17373 (MediaPlaybackPanelController)
import Fragment from "Fragment" /* 21 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 8705 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 11903 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 14378 */;
import MediaPlaybackPanelConstants from "MediaPlaybackPanelConstants" /* 14379 */;
import MediaPlaybackPanelStateContextDefault from "MediaPlaybackPanelStateContext" /* 17374 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import VoicePanelStore from "VoicePanelStore" /* 5098 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let children, dependencyMap, importDefault, set;

function useCoreState() {
  let sharedValue;
  const obj = sharedValue(4612);
  sharedValue = obj.useSharedValue(MediaPlaybackPanelModes.PIP);
  const obj2 = sharedValue(4612);
  const sharedValue1 = obj2.useSharedValue({ height: 0, width: 0 });
  const obj3 = sharedValue(4612);
  const sharedValue2 = obj3.useSharedValue({ x: -1, y: -1 });
  const obj4 = sharedValue(4612);
  const sharedValue3 = obj4.useSharedValue(AccessibilityStore.useReducedMotion);
  const items = [sharedValue3];
  const effect = react.useEffect(() => {
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
  const obj5 = sharedValue(4612);
  const sharedValue4 = obj5.useSharedValue(true);
  const obj6 = sharedValue(4612);
  const sharedValue5 = obj6.useSharedValue(0);
  const fn = function p() {
    let UNDEFINED;
    if (sharedValue.get() === MediaPlaybackPanelModes.PIP) {
      UNDEFINED = MorphablePanelModes.PIP;
    } else {
      UNDEFINED = MorphablePanelModes.UNDEFINED;
    }
    return UNDEFINED;
  };
  const obj8 = { mode: sharedValue, MediaPlaybackPanelModes, MorphablePanelModes };
  fn.__closure = obj8;
  fn.__workletHash = 10375114450450;
  fn.__initData = __initData;
  const obj7 = sharedValue(4612);
  const derivedValue = obj7.useDerivedValue(fn);
  const tmp9 = sharedValue3(1618)();
  const tmp10 = sharedValue3(17163)(tmp9);
  const obj9 = sharedValue(4612);
  const sharedValue6 = obj9.useSharedValue(false);
  const obj10 = sharedValue(4612);
  const obj11 = { mode: sharedValue, morphablePanelMode: derivedValue, wrapperDimensions: sharedValue1, useReducedMotion: sharedValue3, pipState: sharedValue2, pipAvoidanceSpecs: tmp10, scrollPosition: sharedValue5, canShowPIP: sharedValue4, lockScrolling: sharedValue6, wrapperOffset: obj10.useSharedValue({ x: 0, y: 0, gestureActive: false }) };
  return obj11;
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const MediaPlaybackPanelModes = MediaPlaybackPanelConstants.MediaPlaybackPanelModes;
const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
const MorphablePanelModes = MorphablePanelConstants.MorphablePanelModes;
const jsx = Fragment.jsx;
let __initData = { code: "function MediaPlaybackPanelControllerTsx1(){const{mode,MediaPlaybackPanelModes,MorphablePanelModes}=this.__closure;switch(mode.get()){case MediaPlaybackPanelModes.PIP:{return MorphablePanelModes.PIP;}default:{return MorphablePanelModes.UNDEFINED;}}}" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let mode;
  let setMode;
  let tmp12;
  let tmp13;
  let tmp5;
  let tmp9;
  let wrapperDimensions;
  let tmp2 = wrapperDimensions;
  const tmp = mode;
  let obj = mode(wrapperDimensions[13]);
  const cResult = obj.c(27);
  const tmp4 = E();
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
  const obj2 = pipState;
  if (cResult[0] !== mode) {
    const value = mode.get();
    cResult[0] = mode;
    cResult[1] = value;
    tmp5 = value;
  } else {
    tmp5 = cResult[1];
  }
  const tmp7 = useReducedMotion(obj2.useState(tmp5), 2);
  const first = tmp7[0];
  __initData = tmp7[1];
  if (cResult[2] !== first) {
    class E {
      constructor() {
        let flag = first === MediaPlaybackPanelModes.PIP;
        if (flag) {
          setMode(tmp.DISMISSED);
          const obj = MediaPlayerManagerDefault;
          obj.userDidClosePip();
          flag = true;
        }
        return flag;
      }
    }
    cResult[2] = first;
    cResult[3] = E;
    tmp9 = E;
  } else {
    class E {
      constructor() {
        let flag = first === MediaPlaybackPanelModes.PIP;
        if (flag) {
          setMode(tmp.DISMISSED);
          const obj = MediaPlayerManagerDefault;
          obj.userDidClosePip();
          flag = true;
        }
        return flag;
      }
    }
  }
  E = tmp9;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor(voicePanelsPIP) {
        return voicePanelsPIP.voicePanelsPIP.size > 0;
      }
    }
    cResult[4] = F;
  } else {
    class F {
      constructor(voicePanelsPIP) {
        return voicePanelsPIP.voicePanelsPIP.size > 0;
      }
    }
  }
  const tmp11 = canShowPIP(F);
  let closure_14 = tmp11;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor(voicePanelsPIP) {
        return voicePanelsPIP.voicePanelsPIP.size > 0;
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
    tmp13 = T;
    tmp12 = items;
  } else {
    class F {
      constructor(voicePanelsPIP) {
        return voicePanelsPIP.voicePanelsPIP.size > 0;
      }
    }
    tmp13 = cResult[6];
  }
  const tmpResult = tmp(tmp2[15]);
  const stateFromStores = tmpResult.useStateFromStores(tmp12, tmp13);
  if (cResult[7] === canShowPIP) {
    class F {
      constructor(voicePanelsPIP) {
        return voicePanelsPIP.voicePanelsPIP.size > 0;
      }
    }
  }
  const fn = function z() {
    let tmp2 = !closure_14;
    set = canShowPIP.set;
    if (!closure_14) {
      tmp2 = !stateFromStores;
    }
    const result = set(tmp2);
  };
  const items1 = [canShowPIP, tmp11, stateFromStores];
  cResult[7] = canShowPIP;
  cResult[8] = stateFromStores;
  cResult[9] = tmp11;
  cResult[10] = fn;
  cResult[11] = items1;
}) : ((children) => {
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c8;
  let c9;
  let canShowPIP;
  let dismissPanel;
  let lockScrolling;
  let morphablePanelMode;
  let pipAvoidanceSpecs;
  let pipState;
  let scrollPosition;
  let useReducedMotion;
  let wrapperDimensions;
  let wrapperOffset;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  react = undefined;
  c5 = undefined;
  c6 = undefined;
  canShowPIP = undefined;
  c8 = undefined;
  c9 = undefined;
  useCoreState = undefined;
  children = children.children;
  const tmp = useCoreState();
  const mode = tmp.mode;
  ({ morphablePanelMode: c1, wrapperDimensions: c2, useReducedMotion: c3, pipState: c4, pipAvoidanceSpecs: c5, scrollPosition: c6, canShowPIP } = tmp);
  ({ lockScrolling: c8, wrapperOffset: c9 } = tmp);
  const dismissToPipGestureRef = react.useRef(undefined);
  let tmp2 = _slicedToArray(react.useState(mode.get()), 2);
  const first = tmp2[0];
  const setMode = tmp4;
  const items = [first, tmp2[1]];
  useCoreState = react.useCallback(() => {
    let flag = first === MediaPlaybackPanelModes.PIP;
    if (flag) {
      setMode(tmp.DISMISSED);
      const obj = MediaPlayerManagerDefault;
      obj.userDidClosePip();
      flag = true;
    }
    return flag;
  }, items);
  const tmp5 = canShowPIP((voicePanelsPIP) => voicePanelsPIP.voicePanelsPIP.size > 0);
  let closure_14 = tmp5;
  let obj = mode(504);
  const items1 = [c6];
  const stateFromStores = obj.useStateFromStores(items1, () => scrollPosition.getActivityPanelMode() === wrapperOffset.PIP);
  const items2 = [canShowPIP, tmp5, stateFromStores];
  const layoutEffect = react.useLayoutEffect(() => {
    let tmp2 = !closure_14;
    set = canShowPIP.set;
    if (!closure_14) {
      tmp2 = !stateFromStores;
    }
    const result = set(tmp2);
  }, items2);
  return first(MediaPlaybackPanelStateContextDefault.Provider, { value: _slicedToArray(react.useState(() => ({ mode, setMode, morphablePanelMode, wrapperDimensions, useReducedMotion, pipState, pipAvoidanceSpecs, dismissToPipGestureRef, dismissPanel, scrollPosition, canShowPIP, lockScrolling, wrapperOffset })), 1)[0], children });
});
let result = size.fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelController.tsx");

export default tmp2;