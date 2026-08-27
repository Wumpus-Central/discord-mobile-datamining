// === Module 11570: useAndroidOrientationSheetResync ===

// Module 11570 (useAndroidOrientationSheetResync)
import closure_2 from "noop" /* 19 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/keyboard/native/useAndroidOrientationSheetResync.tsx");

export default function useAndroidOrientationSheetResync(animatedIndex) {
  animatedIndex = animatedIndex.animatedIndex;
  let bottomSheetRef = animatedIndex.bottomSheetRef;
  const containerHeight = animatedIndex.containerHeight;
  const isYeeted = animatedIndex.isYeeted;
  const snapPoints = animatedIndex.snapPoints;
  closure_4 = undefined;
  let num;
  c6 = undefined;
  closure_4 = containerHeight.useRef(false);
  num = 0;
  if (animatedIndex.forceMaxHeight) {
    num = 1;
  }
  let _Number = Number;
  if (Array.isArray(snapPoints)) {
    let first = snapPoints[num];
    if (first == null) {
      first = snapPoints[0];
    }
    let _NumberResult = _Number(first);
  } else {
    _NumberResult = _Number(snapPoints);
  }
  c6 = _NumberResult;
  const items = [animatedIndex, bottomSheetRef, containerHeight, isYeeted, num, _NumberResult];
  const layoutEffect = containerHeight.useLayoutEffect(() => {
    if (!isYeeted) {
      if (obj.isAndroid()) {
        if (ref.current) {
          const _Number = Number;
          const NumberResult = Number(containerHeight);
          const _Number2 = Number;
          if (Number.isFinite(NumberResult)) {
            const _Number3 = Number;
            if (Number.isFinite(c6)) {
              const _Math = Math;
              const bound = Math.max(0, NumberResult - tmp7);
              let result = bound.set(num);
              let current = bottomSheetRef.current;
              if (current != null) {
                current.setToIndex(tmp10, bound);
              }
              const _requestAnimationFrame = requestAnimationFrame;
              bottomSheetRef = requestAnimationFrame(function apply() {
                const result = bound.set(closure_1_5);
                const current = ref.current;
                if (current != null) {
                  current.setToIndex(closure_1_5, bound);
                }
              });
              return () => cancelAnimationFrame(closure_1);
            }
            tmp7 = c6;
          }
        } else {
          tmp3.current = true;
        }
      }
      obj = animatedIndex(bottomSheetRef[1]);
    }
  }, items);
};