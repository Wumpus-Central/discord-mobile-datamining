// discord_app/modules/virtual_currency/native/OrbsRewardBackground.tsx
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import _modDef11914 from "../../../../discord_assets/assets/orbs/quest_reward_mobile_bg_static.png.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";

const _modDef11915 = tmp15(11915);
const require = fn;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/native/OrbsRewardBackground.tsx");

export const OrbsRewardBackground = function OrbsRewardBackground(arg0) {
  ({ style, onReady } = arg0);
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  let obj = onReady(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj1 = onReady(504);
  const items1 = [AppStateStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => state.getState());
  let obj2 = noop;
  [tmp6, c1] = _slicedToArray(noop.useState(false), 2);
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  [tmp8, c2] = _slicedToArray(noop.useState(false), 2);
  const callback = noop.useCallback(() => _undefined(true), []);
  const callback1 = noop.useCallback(() => _undefined2(true), []);
  if (!tmp6) {
    const tmp11 = !stateFromStores;
  }
  _slicedToArray = tmp6;
  noop = obj2.useRef(false);
  const items2 = [tmp6, onReady];
  const effect = obj2.useEffect(() => {
    let tmp = c3;
    if (c3) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      onReady();
    }
  }, items2);
  obj = { source: null, style: null, resizeMode: "cover", onLoad: null };
  obj = { uri: null };
  const tmp7 = _slicedToArray(noop.useState(false), 2);
  obj.uri = _modDef11914;
  obj.source = obj;
  obj.style = style;
  obj.onLoad = callback;
  const children = [closure_7(FastImageDefault, obj)];
  let tmp14Result = !stateFromStores;
  if (!stateFromStores) {
    tmp14Result = stateFromStores1 === onReady(1093).AppStates.ACTIVE;
  }
  if (tmp14Result) {
    obj1 = {
      source: null,
      style: null,
      resizeMode: "cover",
      onLoad: null,
      disableFocus: true,
      playInBackground: true,
      preventsDisplaySleepDuringVideoPlayback: false,
    };
    obj2 = { uri: _modDef11915 };
    obj1.source = obj2;
    obj1.style = style;
    obj1.onLoad = callback1;
    tmp14Result = closure_7(onReady(8425).VideoComponent, obj1);
  }
  children[1] = tmp14Result;
  return closure_8(obj2.Fragment, { children });
};
