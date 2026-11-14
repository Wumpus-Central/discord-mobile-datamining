// === Module 14475: useCheckpointCharacterGradientFadeIn ===

// Module 14475 (useCheckpointCharacterGradientFadeIn)
import _mod14476 from "module_14476" /* 14476 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;

require = fn;
const CheckpointConstants = fn(6377);
({ CHECKPOINT_INTRODUCTION_FADE_IN_DURATION_MS: hasOwnProperty, CHECKPOINT_INTRODUCTION_REVEAL_DURATION_MS: closure_6 } = CheckpointConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/character/useCheckpointCharacterGradientFadeIn.tsx");

export function useCheckpointCharacterGradientFadeIn(dataBinding) {
  dataBinding = dataBinding.dataBinding;
  let first;
  noop = undefined;
  items = [AccessibilityStore];
  const stateFromStores = dataBinding(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp2 = dataBinding.stage === dataBinding(6745).CheckpointCharacterStage.INTRODUCTION && !stateFromStores;
  dependencyMap = tmp2;
  let num = 1;
  let num2 = 1;
  if (tmp2) {
    num2 = 0;
  }
  const tmp3 = first(noop.useState(num2), 2);
  first = tmp3[0];
  noop = tmp5;
  const tmp6 = first(noop.useState(tmp2), 2);
  if (tmp2 !== tmp6[0]) {
    tmp6[1](tmp2);
    if (tmp2) {
      num = 0;
    }
    tmp5(num);
  }
  const items1 = [tmp2];
  const effect = obj2.useEffect(() => {
    if (closure_1) {
      const _Date = Date;
      closure_0 = Date.now() + closure_1_6;
      let _requestAnimationFrame = requestAnimationFrame;
      function handleAnimationFrame() {
        const bound = Math.max(Math.min(Date.now() - closure_0, hasOwnProperty), 0);
        closure_3(_mod14476.easeOutCubic(bound, 0, 1, hasOwnProperty));
        if (bound < hasOwnProperty) {
          const _requestAnimationFrame = requestAnimationFrame;
          closure_1 = requestAnimationFrame(handleAnimationFrame);
        }
      }
      closure_1 = requestAnimationFrame(handleAnimationFrame);
      return () => cancelAnimationFrame(closure_1);
    }
  }, items1);
  const items2 = [dataBinding, first];
  return noop.useMemo(() => {
    if (1 === first) {
      let obj = dataBinding;
    } else {
      obj = {};
      const merged = Object.assign(dataBinding);
      obj.gradientTopOpacity = dataBinding.gradientTopOpacity * first;
      obj.gradientBottomOpacity = dataBinding.gradientBottomOpacity * first;
      obj.gradientLeftOpacity = dataBinding.gradientLeftOpacity * first;
      obj.gradientRightOpacity = dataBinding.gradientRightOpacity * first;
    }
    return obj;
  }, items2);
}