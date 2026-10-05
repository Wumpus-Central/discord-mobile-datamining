// === Module 11824: useAndroidOrientationSheetResync ===

// Module 11824 (useAndroidOrientationSheetResync)
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let animatedIndex;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((animatedIndex) => {
  let _NumberResult;
  let bottomSheetRef;
  let obj = animatedIndex(bottomSheetRef[2]);
  const cResult = obj.c(8);
  animatedIndex = animatedIndex.animatedIndex;
  bottomSheetRef = animatedIndex.bottomSheetRef;
  const containerHeight = animatedIndex.containerHeight;
  const isYeeted = animatedIndex.isYeeted;
  const snapPoints = animatedIndex.snapPoints;
  const forceMaxHeight = animatedIndex.forceMaxHeight;
  const ref = containerHeight.useRef(false);
  let num = 0;
  const obj2 = containerHeight;
  if (forceMaxHeight) {
    num = 1;
  }
  let _Number = Number;
  if (Array.isArray(snapPoints)) {
    let first = snapPoints[num];
    const tmp4 = null;
    if (first == null) {
      first = snapPoints[0];
    }
    _NumberResult = _Number(first);
  } else {
    _NumberResult = _Number(snapPoints);
  }
  let closure_6 = _NumberResult;
  if (cResult[0] === animatedIndex) {
    if (cResult[1] === bottomSheetRef) {
      if (cResult[2] === containerHeight) {
        if (cResult[3] === isYeeted) {
          if (cResult[4] === num) {
            let tmp5;
            let tmp6;
            if (cResult[5] === _NumberResult) {
              tmp5 = cResult[6];
              tmp6 = cResult[7];
            }
            const layoutEffect = obj2.useLayoutEffect(tmp5, tmp6);
          }
        }
      }
    }
  }
  const fn = function u() {
    let closure_1;
    if (!isYeeted) {
      const obj = animatedIndex(bottomSheetRef[3]);
      if (obj.isAndroid()) {
        if (ref.current) {
          const _Number = Number;
          const NumberResult = Number(containerHeight);
          const _Number2 = Number;
          if (Number.isFinite(NumberResult)) {
            const _Number3 = Number;
            if (Number.isFinite(closure_6)) {
              const _Math = Math;
              num = 0;
              const bound = Math.max(0, NumberResult - closure_6);
              let result = bound.set(num);
              let current = bottomSheetRef.current;
              const tmp11 = num;
              if (current != null) {
                current.setToIndex(tmp11, bound);
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
          tmp4.current = true;
        }
      }
    }
  };
  const items = [animatedIndex, bottomSheetRef, containerHeight, isYeeted, num, _NumberResult];
  cResult[0] = animatedIndex;
  cResult[1] = bottomSheetRef;
  cResult[2] = containerHeight;
  cResult[3] = isYeeted;
  cResult[4] = num;
  cResult[5] = _NumberResult;
  cResult[6] = fn;
  cResult[7] = items;
  tmp6 = items;
  tmp5 = fn;
}) : ((animatedIndex) => {
  let _NumberResult;
  animatedIndex = animatedIndex.animatedIndex;
  let bottomSheetRef = animatedIndex.bottomSheetRef;
  const containerHeight = animatedIndex.containerHeight;
  const isYeeted = animatedIndex.isYeeted;
  const snapPoints = animatedIndex.snapPoints;
  let c6;
  let obj = containerHeight;
  const forceMaxHeight = animatedIndex.forceMaxHeight;
  const ref = containerHeight.useRef(false);
  let num = 0;
  if (forceMaxHeight) {
    num = 1;
  }
  let _Number = Number;
  if (Array.isArray(snapPoints)) {
    let first = snapPoints[num];
    if (first == null) {
      first = snapPoints[0];
    }
    _NumberResult = _Number(first);
  } else {
    _NumberResult = _Number(snapPoints);
  }
  c6 = _NumberResult;
  const items = [animatedIndex, bottomSheetRef, containerHeight, isYeeted, num, _NumberResult];
  const layoutEffect = obj.useLayoutEffect(() => {
    let closure_1;
    if (!isYeeted) {
      const obj = animatedIndex(bottomSheetRef[3]);
      if (obj.isAndroid()) {
        if (ref.current) {
          const _Number = Number;
          const NumberResult = Number(containerHeight);
          const _Number2 = Number;
          if (Number.isFinite(NumberResult)) {
            const _Number3 = Number;
            if (Number.isFinite(c6)) {
              const _Math = Math;
              num = 0;
              const bound = Math.max(0, NumberResult - c6);
              let result = bound.set(num);
              let current = bottomSheetRef.current;
              const tmp11 = num;
              if (current != null) {
                current.setToIndex(tmp11, bound);
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
          tmp4.current = true;
        }
      }
    }
  }, items);
});
let result = size.fileFinishedImporting("modules/keyboard/native/useAndroidOrientationSheetResync.tsx");

export default tmp2;