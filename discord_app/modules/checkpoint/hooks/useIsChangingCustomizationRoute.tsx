// discord_app/modules/checkpoint/hooks/useIsChangingCustomizationRoute.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

const require = fn;
let closure_5 = fn(12515).CHECKPOINT_CHARACTER_STAGE_FADE;
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/hooks/useIsChangingCustomizationRoute.tsx");

export default function useIsChangingCustomizationRoute(stepName) {
  items = [AccessibilityStore];
  const stateFromStores = first1(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp4 = _slicedToArray(noop.useState(stepName), 2);
  const first = tmp4[0];
  [first1] = noop.useState(false);
  dependencyMap = tmp8;
  if (stepName !== first) {
    const result = tmp(6338).isCheckpointCustomizationRoute(first);
    const tmpResult = tmp(6338);
    const result1 = tmp(6338).isCheckpointCustomizationRoute(stepName);
    tmp4[1](stepName);
    let tmp12 = !stateFromStores;
    if (!stateFromStores) {
      tmp12 = result;
    }
    if (tmp12) {
      tmp12 = result1;
    }
    tmp8(tmp12);
    const tmpResult2 = tmp(6338);
  }
  const items1 = [first1, stepName];
  const effect = noop.useEffect(() => {
    if (timeout) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => closure_1_1(false), duration.duration);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  return first1;
}
