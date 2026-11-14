// === Module 20123: MediaPlaybackPanelController ===

// Module 20123 (MediaPlaybackPanelController)
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 17019 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 5154 */;
import VoicePanelStore from "VoicePanelStore" /* 6901 */;

const require = fn;
const MediaPlaybackPanelModes = fn(17020).MediaPlaybackPanelModes;
const ActivityPanelModes = fn(5959).ActivityPanelModes;
const MorphablePanelModes = fn(11986).MorphablePanelModes;
const jsx = fn(21).jsx;
let closure_12 = { code: "(function MediaPlaybackPanelControllerTsx1(){let[mode,MediaPlaybackPanelModes,MorphablePanelModes]=this.__closure;switch(mode.get()){case MediaPlaybackPanelModes.PIP:{return MorphablePanelModes.PIP;}default:{return MorphablePanelModes.UNDEFINED;}}})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelController.tsx");

export default function MediaPlaybackPanelController(children) {
  let sharedValue;
  let sharedValue1;
  AccessibilityStore = undefined;
  let sharedValue6;
  let wrapperOffset;
  let dismissToPipGestureRef;
  let first;
  let setMode;
  let dismissPanel;
  closure_14 = undefined;
  let stateFromStores;
  sharedValue = sharedValue(sharedValue1[9]).useSharedValue(sharedValue6.PIP);
  let obj = sharedValue(sharedValue1[9]);
  sharedValue1 = sharedValue(sharedValue1[9]).useSharedValue({ height: 0, width: 0 });
  const obj3 = sharedValue(sharedValue1[9]);
  const sharedValue2 = sharedValue(sharedValue1[9]).useSharedValue({ x: -1, y: -1 });
  const obj4 = sharedValue(sharedValue1[9]);
  const sharedValue3 = sharedValue(sharedValue1[9]).useSharedValue(AccessibilityStore.useReducedMotion);
  closure_129_0 = sharedValue3;
  value = sharedValue2;
  items = [sharedValue3];
  const effect = sharedValue2.useEffect(() => {
    function onChange() {
      useReducedMotion = useReducedMotion.useReducedMotion;
      if (useReducedMotion !== onChange.get()) {
        const result = onChange.set(useReducedMotion);
      }
    }
    let result = pipAvoidanceSpecs.addReactChangeListener(onChange);
    return () => {
      const result = AccessibilityStore.removeReactChangeListener(onChange);
    };
  }, items);
  const obj5 = sharedValue(sharedValue1[9]);
  const sharedValue4 = sharedValue(sharedValue1[9]).useSharedValue(true);
  const obj7 = sharedValue(sharedValue1[9]);
  const sharedValue5 = sharedValue(sharedValue1[9]).useSharedValue(0);
  const obj8 = sharedValue(sharedValue1[9]);
  const items1 = [setMode, sharedValue, sharedValue6, dismissToPipGestureRef];
  sharedValue = undefined;
  let derivedValue;
  sharedValue1 = undefined;
  [tmp9, tmp10, tmp11, tmp12] = items1;
  class MediaPlaybackPanelControllerTsx1 {
    constructor() {
      if (closure_0.get() === closure_1.PIP) {
        tmp2 = closure_2;
        UNDEFINED = closure_2.PIP;
      } else {
        tmp = closure_2;
        UNDEFINED = closure_2.UNDEFINED;
      }
      return UNDEFINED;
    }
  }
  const items2 = [tmp10, tmp11, tmp12];
  MediaPlaybackPanelControllerTsx1.__closure = items2;
  MediaPlaybackPanelControllerTsx1.__workletHash = 13130636479883;
  MediaPlaybackPanelControllerTsx1.__initData = tmp9;
  derivedValue = sharedValue(sharedValue1[9]).useDerivedValue(MediaPlaybackPanelControllerTsx1);
  const obj9 = sharedValue(sharedValue1[9]);
  const tmp14 = derivedValue(sharedValue1[10])();
  const tmp15 = derivedValue(sharedValue1[11])(derivedValue(sharedValue1[10])());
  sharedValue6 = sharedValue(sharedValue1[9]).useSharedValue(false);
  const tmpResult = sharedValue(sharedValue1[9]);
  AccessibilityStore = tmp15;
  wrapperOffset = sharedValue(sharedValue1[9]).useSharedValue({ x: 0, y: 0, gestureActive: false });
  dismissToPipGestureRef = value.useRef(undefined);
  const tmp17 = sharedValue3(value.useState(sharedValue.get()), 2);
  first = tmp17[0];
  setMode = tmp19;
  const items3 = [first, tmp17[1]];
  dismissPanel = value.useCallback(() => {
    let flag = first === MediaPlaybackPanelModes.PIP;
    if (flag) {
      setMode(tmp.DISMISSED);
      MediaPlayerManagerDefault.userDidClosePip();
      flag = true;
    }
    return flag;
  }, items3);
  const tmp20 = sharedValue4((voicePanelsPIP) => voicePanelsPIP.voicePanelsPIP.size > 0);
  closure_14 = tmp20;
  const tmpResult3 = sharedValue(sharedValue1[9]);
  const items4 = [sharedValue5];
  stateFromStores = sharedValue(sharedValue1[13]).useStateFromStores(items4, () => sharedValue5.getActivityPanelMode() === wrapperOffset.PIP);
  const items5 = [sharedValue4, tmp20, stateFromStores];
  const layoutEffect = value.useLayoutEffect(() => {
    let tmp2 = !closure_14;
    if (!closure_14) {
      tmp2 = !stateFromStores;
    }
    const result = sharedValue4.set(tmp2);
  }, items5);
  return first(derivedValue(sharedValue1[14]).Provider, { value: sharedValue3(value.useState(() => ({ mode: sharedValue, setMode, morphablePanelMode: derivedValue, wrapperDimensions: sharedValue1, useReducedMotion: sharedValue3, pipState: sharedValue2, pipAvoidanceSpecs, dismissToPipGestureRef, dismissPanel, scrollPosition: sharedValue5, canShowPIP: sharedValue4, lockScrolling: sharedValue6, wrapperOffset })), 1)[0], children: children.children });
};