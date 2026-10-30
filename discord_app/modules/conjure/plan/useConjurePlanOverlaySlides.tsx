// discord_app/modules/conjure/plan/useConjurePlanOverlaySlides.tsx
import _modDef3865 from "../intl/ConjureUntranslated.messages.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;

const require = fn;
let items = [_modDef3865["3eTjcV"], _modDef3865.l3j5nS];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/plan/useConjurePlanOverlaySlides.tsx");

export function useConjurePlanOverlaySlides(arg0) {
  ({ ready, paused } = arg0);
  if (paused === undefined) {
    paused = false;
  }
  _require = undefined;
  dependencyMap = undefined;
  ready = undefined;
  let num;
  let pick;
  items = [pick];
  const stateFromStores = require("initialize").useStateFromStores(items, () => callback.useReducedMotion);
  const tmp2 = ready(num.useState(0), 2);
  _require = tmp2[1];
  const obj = require("initialize");
  [tmp4, c1] = ready(num.useState(false), 2);
  if (ready) {
    ready = !stateFromStores;
  }
  if (ready) {
    ready = !paused;
  }
  if (ready) {
    ready = !tmp4;
  }
  if (!stateFromStores) {
    num = tmp2[0];
  } else {
    num = 0;
  }
  const items1 = [ready];
  const effect = obj2.useEffect(() => {
    if (ready) {
      const _setInterval = setInterval;
      const interval = setInterval(() => closure_0((arg0) => (arg0 + 1) % length.length), 4000);
      return () => clearInterval(closure_0);
    }
  }, items1);
  pick = obj2.useCallback((arg0) => {
    _undefined(true);
    closure_0(arg0);
  }, []);
  const items2 = [pick, num];
  const obj3 = { slide: num, labels: null, pick: null, hold: null };
  const callback1 = obj2.useCallback(() => callback(num), items2);
  obj3.labels = items.map((item) => {
    const intl = closure_0(_undefined[5]).intl;
    return intl.string(item);
  });
  obj3.pick = pick;
  obj3.hold = callback1;
  return obj3;
}
