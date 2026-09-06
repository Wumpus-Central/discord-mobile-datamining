// discord_app/modules/keyboard/native/useAndroidOrientationSheetResync.tsx
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/keyboard/native/useAndroidOrientationSheetResync.tsx");

export default function useAndroidOrientationSheetResync(animatedIndex) {
  animatedIndex = animatedIndex.animatedIndex;
  let bottomSheetRef = animatedIndex.bottomSheetRef;
  const containerHeight = animatedIndex.containerHeight;
  const isYeeted = animatedIndex.isYeeted;
  const snapPoints = animatedIndex.snapPoints;
  c6 = undefined;
  containerHeight.useRef(false);
  let num = 0;
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
              const bound = Math.max(0, NumberResult - c6);
              let result = bound.set(num);
              let current = bottomSheetRef.current;
              if (current != null) {
                current.setToIndex(tmp10, bound);
              }
              const _requestAnimationFrame = requestAnimationFrame;
              bottomSheetRef = requestAnimationFrame(function apply() {
                const result = animatedIndex.set(num);
                const current = bottomSheetRef.current;
                if (current != null) {
                  current.setToIndex(num, bound);
                }
              });
              return () => cancelAnimationFrame(closure_1);
            }
          }
        } else {
          tmp3.current = true;
        }
      }
      obj = animatedIndex(bottomSheetRef[1]);
    }
  }, items);
}
