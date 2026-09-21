// discord_app/modules/virtual_currency/native/OrbsRewardBackground.tsx
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import _modDef12038 from "../../../../discord_assets/assets/orbs/quest_reward_mobile_bg_static.png.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";

const _modDef12039 = tmp15(12039);
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
  const items = [AccessibilityStore];
  const stateFromStores = onReady(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj = onReady(504);
  const items1 = [AppStateStore];
  const stateFromStores1 = onReady(504).useStateFromStores(items1, () => state.getState());
  const obj2 = onReady(504);
  [tmp6, c1] = noop.useState(false);
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  [tmp8, c2] = noop.useState(false);
  const callback = noop.useCallback(() => _undefined(true), []);
  const callback1 = noop.useCallback(() => _undefined2(true), []);
  if (!tmp6) {
    const tmp11 = !stateFromStores;
  }
  _slicedToArray = tmp6;
  noop = obj3.useRef(false);
  const items2 = [tmp6, onReady];
  const effect = obj3.useEffect(() => {
    let tmp = c3;
    if (c3) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      onReady();
    }
  }, items2);
  const obj4 = { source: null, style: null, resizeMode: "cover", onLoad: null };
  const obj5 = { uri: null };
  const tmp7 = _slicedToArray(noop.useState(false), 2);
  obj5.uri = _modDef12038;
  obj4.source = obj5;
  obj4.style = style;
  obj4.onLoad = callback;
  const children = [closure_7(FastImageDefault, obj4)];
  let tmp14Result = !stateFromStores;
  if (!stateFromStores) {
    tmp14Result = stateFromStores1 === onReady(1094).AppStates.ACTIVE;
  }
  if (tmp14Result) {
    const obj6 = {
      source: null,
      style: null,
      resizeMode: "cover",
      onLoad: null,
      disableFocus: true,
      playInBackground: true,
      preventsDisplaySleepDuringVideoPlayback: false,
    };
    const obj7 = { uri: _modDef12039 };
    obj6.source = obj7;
    obj6.style = style;
    obj6.onLoad = callback1;
    tmp14Result = closure_7(onReady(8578).VideoComponent, obj6);
  }
  children[1] = tmp14Result;
  return closure_8(noop.Fragment, { children });
};
