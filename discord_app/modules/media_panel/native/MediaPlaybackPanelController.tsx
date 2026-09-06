// === Module 17222: MediaPlaybackPanelController ===

// Module 17222 (MediaPlaybackPanelController)
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 14536 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import VoicePanelStore from "VoicePanelStore" /* 4768 */;

const require = fn;
const MediaPlaybackPanelModes = fn(14537).MediaPlaybackPanelModes;
const ActivityPanelModes = fn(9505).ActivityPanelModes;
let MorphablePanelModes = fn(12274).MorphablePanelModes;
const jsx = fn(21).jsx;
let __initData = { code: "function MediaPlaybackPanelControllerTsx1(){const{mode,MediaPlaybackPanelModes,MorphablePanelModes}=this.__closure;switch(mode.get()){case MediaPlaybackPanelModes.PIP:{return MorphablePanelModes.PIP;}default:{return MorphablePanelModes.UNDEFINED;}}}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelController.tsx");

export default function MediaPlaybackPanelController(children) {
  let sharedValue;
  let sharedValue1;
  AccessibilityStore = undefined;
  let sharedValue6;
  MorphablePanelModes = undefined;
  __initData = undefined;
  let obj = sharedValue(sharedValue1[9]);
  sharedValue = obj.useSharedValue(sharedValue6.PIP);
  closure_129_0 = sharedValue;
  sharedValue1 = sharedValue(sharedValue1[9]).useSharedValue({ height: 0, width: 0 });
  const obj3 = sharedValue(sharedValue1[9]);
  const sharedValue2 = sharedValue(sharedValue1[9]).useSharedValue({ x: -1, y: -1 });
  const obj4 = sharedValue(sharedValue1[9]);
  const sharedValue3 = sharedValue(sharedValue1[9]).useSharedValue(AccessibilityStore.useReducedMotion);
  closure_129_1 = sharedValue3;
  const items = [sharedValue3];
  const effect = sharedValue2.useEffect(() => {
    function onChange() {
      useReducedMotion = useReducedMotion.useReducedMotion;
      if (useReducedMotion !== derivedValue.get()) {
        const result = derivedValue.set(useReducedMotion);
      }
    }
    let result = pipAvoidanceSpecs.addReactChangeListener(onChange);
    return () => {
      const result = AccessibilityStore.removeReactChangeListener(onChange);
    };
  }, items);
  const obj5 = sharedValue(sharedValue1[9]);
  const sharedValue4 = sharedValue(sharedValue1[9]).useSharedValue(true);
  const obj6 = sharedValue(sharedValue1[9]);
  const sharedValue5 = sharedValue(sharedValue1[9]).useSharedValue(0);
  const obj7 = sharedValue(sharedValue1[9]);
  const fn = function p() {
    if (sharedValue.get() === MediaPlaybackPanelModes.PIP) {
      let UNDEFINED = MorphablePanelModes.PIP;
    } else {
      UNDEFINED = MorphablePanelModes.UNDEFINED;
    }
    return UNDEFINED;
  };
  obj = { mode: sharedValue, MediaPlaybackPanelModes: sharedValue6, MorphablePanelModes };
  fn.__closure = obj;
  fn.__workletHash = 10375114450450;
  fn.__initData = __initData;
  const derivedValue = sharedValue(sharedValue1[9]).useDerivedValue(fn);
  const obj8 = sharedValue(sharedValue1[9]);
  const tmp8 = derivedValue(sharedValue1[10])();
  const tmp9 = derivedValue(sharedValue1[11])(derivedValue(sharedValue1[10])());
  sharedValue6 = sharedValue(sharedValue1[9]).useSharedValue(false);
  const obj10 = sharedValue(sharedValue1[9]);
  AccessibilityStore = tmp9;
  const wrapperOffset = sharedValue(sharedValue1[9]).useSharedValue({ x: 0, y: 0, gestureActive: false });
  MorphablePanelModes = sharedValue2.useRef(undefined);
  const tmp11 = sharedValue3(sharedValue2.useState(sharedValue.get()), 2);
  const first = tmp11[0];
  __initData = tmp13;
  const items1 = [first, tmp11[1]];
  const dismissPanel = sharedValue2.useCallback(() => {
    let flag = first === MediaPlaybackPanelModes.PIP;
    if (flag) {
      setMode(tmp.DISMISSED);
      MediaPlayerManagerDefault.userDidClosePip();
      flag = true;
    }
    return flag;
  }, items1);
  const tmp14 = sharedValue4((voicePanelsPIP) => voicePanelsPIP.voicePanelsPIP.size > 0);
  closure_14 = tmp14;
  const obj11 = sharedValue(sharedValue1[9]);
  const items2 = [sharedValue5];
  const stateFromStores = sharedValue(sharedValue1[13]).useStateFromStores(items2, () => sharedValue5.getActivityPanelMode() === wrapperOffset.PIP);
  const items3 = [sharedValue4, tmp14, stateFromStores];
  const layoutEffect = sharedValue2.useLayoutEffect(() => {
    let tmp2 = !closure_14;
    if (!closure_14) {
      tmp2 = !stateFromStores;
    }
    const result = sharedValue4.set(tmp2);
  }, items3);
  return first(derivedValue(sharedValue1[14]).Provider, { value: sharedValue3(sharedValue2.useState(() => ({ mode: sharedValue, setMode, morphablePanelMode: derivedValue, wrapperDimensions: sharedValue1, useReducedMotion: sharedValue3, pipState: sharedValue2, pipAvoidanceSpecs, dismissToPipGestureRef, dismissPanel, scrollPosition: sharedValue5, canShowPIP: sharedValue4, lockScrolling: sharedValue6, wrapperOffset })), 1)[0], children: children.children });
};