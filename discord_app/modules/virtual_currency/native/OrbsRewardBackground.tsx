// === Module 14941: OrbsRewardBackground ===

// Module 14941 (OrbsRewardBackground)
import FastImageDefault from "FastImage" /* 5842 */;
import _modDef14942 from "module_14942" /* 14942 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;
import AppStateStore from "AppStateStore" /* 2117 */;

const _modDef14943 = tmp15(14943);
const require = fn;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/native/OrbsRewardBackground.tsx");

export function OrbsRewardBackground(arg0) {
  ({ style, onReady } = arg0);
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  items = [AccessibilityStore];
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
  obj5.uri = _modDef14942;
  obj4.source = obj5;
  obj4.style = style;
  obj4.onLoad = callback;
  const children = [closure_7(FastImageDefault, obj4), ];
  let tmp14Result = !stateFromStores;
  if (!stateFromStores) {
    tmp14Result = stateFromStores1 === onReady(1092).AppStates.ACTIVE;
  }
  if (tmp14Result) {
    const obj6 = { source: null, style: null, resizeMode: "cover", onLoad: null, disableFocus: true, playInBackground: true, preventsDisplaySleepDuringVideoPlayback: false };
    const obj7 = { uri: _modDef14943 };
    obj6.source = obj7;
    obj6.style = style;
    obj6.onLoad = callback1;
    tmp14Result = closure_7(onReady(8947).VideoComponent, obj6);
  }
  children[1] = tmp14Result;
  return closure_8(noop.Fragment, { children });
}