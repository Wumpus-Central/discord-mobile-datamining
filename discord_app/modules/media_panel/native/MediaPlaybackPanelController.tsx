// discord_app/modules/media_panel/native/MediaPlaybackPanelController.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import maybeApplyNoTextColorForLightCustomTheme from "../../a11y/AccessibilityStore.tsx";
import participantFromServer from "../../activities/EmbeddedActivitiesStore.tsx";
import withEqualityFn from "../../voice_panel/VoicePanelStore.tsx";
import { MediaPlaybackPanelModes } from "MediaPlaybackPanelConstants.tsx";
import { ActivityPanelModes } from "../../activities/panel/ActivityPanelConstants.tsx";
import { MorphablePanelModes } from "../../panels/morphable/native/MorphablePanelConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
let closure_12 = { code: "function MediaPlaybackPanelControllerTsx1(){const{mode,MediaPlaybackPanelModes,MorphablePanelModes}=this.__closure;switch(mode.get()){case MediaPlaybackPanelModes.PIP:{return MorphablePanelModes.PIP;}default:{return MorphablePanelModes.UNDEFINED;}}}" };
let result = require("obj132").fileFinishedImporting("modules/media_panel/native/MediaPlaybackPanelController.tsx");

export default function MediaPlaybackPanelController(children) {
  let sharedValue1;
  let useReducedMotion;
  let sharedValue6;
  closure_10 = undefined;
  closure_12 = undefined;
  let sharedValue;
  let obj = sharedValue(sharedValue1[9]);
  sharedValue = obj.useSharedValue(sharedValue6.PIP);
  sharedValue1 = sharedValue(sharedValue1[9]).useSharedValue({ height: 0, width: 0 });
  const obj3 = sharedValue(sharedValue1[9]);
  const sharedValue2 = sharedValue(sharedValue1[9]).useSharedValue({ x: -1, y: -1 });
  const obj4 = sharedValue(sharedValue1[9]);
  const sharedValue3 = sharedValue(sharedValue1[9]).useSharedValue(useReducedMotion.useReducedMotion);
  const items = [sharedValue3];
  const effect = sharedValue2.useEffect(() => {
    function onChange() {
      const useReducedMotion = closure_1_5.useReducedMotion;
      if (useReducedMotion !== store.get()) {
        const result = store.set(useReducedMotion);
      }
    }
    let result = closure_5.addReactChangeListener(onChange);
    return () => {
      const result = closure_5.removeReactChangeListener(onChange);
    };
  }, items);
  const obj5 = sharedValue(sharedValue1[9]);
  const sharedValue4 = sharedValue(sharedValue1[9]).useSharedValue(true);
  const obj6 = sharedValue(sharedValue1[9]);
  const sharedValue5 = sharedValue(sharedValue1[9]).useSharedValue(0);
  const obj7 = sharedValue(sharedValue1[9]);
  const fn = function p() {
    if (sharedValue.get() === sharedValue6.PIP) {
      let UNDEFINED = constants2.PIP;
    } else {
      UNDEFINED = constants2.UNDEFINED;
    }
    return UNDEFINED;
  };
  obj = { mode: sharedValue, MediaPlaybackPanelModes: sharedValue6, MorphablePanelModes: closure_10 };
  fn.__closure = obj;
  fn.__workletHash = 10375114450450;
  fn.__initData = closure_12;
  const derivedValue = sharedValue(sharedValue1[9]).useDerivedValue(fn);
  const obj8 = sharedValue(sharedValue1[9]);
  const tmp8 = derivedValue(sharedValue1[10])();
  const tmp9 = derivedValue(sharedValue1[11])(derivedValue(sharedValue1[10])());
  sharedValue6 = sharedValue(sharedValue1[9]).useSharedValue(false);
  const obj10 = sharedValue(sharedValue1[9]);
  useReducedMotion = tmp9;
  closure_9 = sharedValue(sharedValue1[9]).useSharedValue({ x: 0, y: 0, gestureActive: false });
  closure_10 = sharedValue2.useRef(undefined);
  const tmp11 = sharedValue3(sharedValue2.useState(sharedValue.get()), 2);
  const first = tmp11[0];
  closure_12 = tmp13;
  const items1 = [first, tmp11[1]];
  closure_13 = sharedValue2.useCallback(() => {
    let flag = first === sharedValue6.PIP;
    if (flag) {
      callback(tmp.DISMISSED);
      derivedValue(sharedValue1[12]).userDidClosePip();
      flag = true;
      const obj = derivedValue(sharedValue1[12]);
    }
    return flag;
  }, items1);
  const tmp14 = sharedValue4((voicePanelsPIP) => voicePanelsPIP.voicePanelsPIP.size > 0);
  closure_14 = tmp14;
  const obj11 = sharedValue(sharedValue1[9]);
  const items2 = [sharedValue5];
  const stateFromStores = sharedValue(sharedValue1[13]).useStateFromStores(items2, () => sharedValue5.getActivityPanelMode() === constants.PIP);
  const items3 = [sharedValue4, tmp14, stateFromStores];
  const layoutEffect = sharedValue2.useLayoutEffect(() => {
    let tmp2 = !closure_14;
    if (!closure_14) {
      tmp2 = !stateFromStores;
    }
    const result = sharedValue4.set(tmp2);
  }, items3);
  return first(derivedValue(sharedValue1[14]).Provider, { value: sharedValue3(sharedValue2.useState(() => ({ mode: sharedValue, setMode: closure_12, morphablePanelMode: derivedValue, wrapperDimensions: sharedValue1, useReducedMotion: sharedValue3, pipState: sharedValue2, pipAvoidanceSpecs: closure_5, dismissToPipGestureRef: closure_10, dismissPanel: closure_13, scrollPosition: sharedValue5, canShowPIP: sharedValue4, lockScrolling: sharedValue6, wrapperOffset: closure_9 })), 1)[0], children: children.children });
};