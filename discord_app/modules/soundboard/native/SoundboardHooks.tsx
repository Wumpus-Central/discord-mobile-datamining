// === Module 17266: SoundboardHooks ===

// Module 17266 (SoundboardHooks)
import c from "c" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import ThemeStore from "ThemeStore" /* 1193 */;

require = fn;
const SoundboardStyleConstants = fn(17258);
({ SOUNDS_PER_ROW: closure_7, SOUND_ROW_PADDING: closure_8 } = SoundboardStyleConstants);
const ACTION_SHEET_MAX_WIDTH = fn(6653).ACTION_SHEET_MAX_WIDTH;
fn(558);
const ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const result = (Math.min(ACTION_SHEET_MAX_WIDTH, useWindowDimensionsDefault().width) - closure_1_8) / React5;
  if (cResult[0] !== result) {
    const obj2 = { buttonWidth: result };
    cResult[0] = result;
    cResult[1] = obj2;
    let tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => ({ buttonWidth: (Math.min(ACTION_SHEET_MAX_WIDTH, useWindowDimensionsDefault().width) - closure_1_8) / React5 }));
const size = fn(2);
let result = size.fileFinishedImporting("modules/soundboard/native/SoundboardHooks.tsx");

export const useSoundButtonStyleConfig = tmp3;
export const useMaybeFetchSoundboardSounds = ReactCompilerGating.isReactCompilerEnabled() ? ((shouldFetch) => {
  const cResult = shouldFetch(576).c(10);
  shouldFetch = shouldFetch.shouldFetch;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function h() {
      return saturation.saturation;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = shouldFetch(576);
  const stateFromStores = shouldFetch(504).useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ThemeStore];
    const fn2 = function y() {
      return shouldFetch(dependencyMap[10]).isThemeDark(theme.theme);
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp9 = fn2;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = shouldFetch(504);
  const stateFromStores1 = shouldFetch(504).useStateFromStores(tmp8, tmp9);
  if (cResult[4] !== shouldFetch) {
    const fn3 = function b() {
      closure_0 = asyncGeneratorStep(async () => {
        if (c0 === 2) {
          c0 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c0 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c0 = 3;
                throw value;
              } else if (arg0 === 2) {
                c0 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else if (c0) {
                const FrecencyUserSettingsActionCreators = v3(2033).FrecencyUserSettingsActionCreators;
                const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
                c1 = 1;
                c0 = 1;
                const obj5 = { value: v3(6851).maybeFetchSoundboardSounds(), done: false };
                return obj5;
              }
            } else if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj = { value, done: true };
              return obj;
            }
            c0 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp9) {
            c0 = tmp;
            throw tmp9;
          }
        }
      });
      (function fetchAndHydrateColors() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    };
    cResult[4] = shouldFetch;
    cResult[5] = fn3;
    let tmp12 = fn3;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === stateFromStores1) {
    if (cResult[7] === stateFromStores) {
      if (cResult[8] === shouldFetch) {
        let tmp13 = cResult[9];
      }
      const effect = noop.useEffect(tmp12, tmp13);
    }
  }
  const items2 = [stateFromStores, stateFromStores1, shouldFetch];
  cResult[6] = stateFromStores1;
  cResult[7] = stateFromStores;
  cResult[8] = shouldFetch;
  cResult[9] = items2;
  tmp13 = items2;
  const tmpResult2 = shouldFetch(504);
}) : ((shouldFetch) => {
  shouldFetch = shouldFetch.shouldFetch;
  const items = [AccessibilityStore];
  const stateFromStores = shouldFetch(504).useStateFromStores(items, () => saturation.saturation);
  let obj = shouldFetch(504);
  const items1 = [ThemeStore];
  const items2 = [stateFromStores, shouldFetch(504).useStateFromStores(items1, () => shouldFetch(dependencyMap[10]).isThemeDark(theme.theme)), shouldFetch];
  const effect = noop.useEffect(() => {
    closure_0 = async function _fetchAndHydrateColors2() {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else if (c0) {
              const FrecencyUserSettingsActionCreators = shouldFetch(2033).FrecencyUserSettingsActionCreators;
              const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
              c1 = 1;
              c0 = 1;
              const obj5 = { value: shouldFetch(6851).maybeFetchSoundboardSounds(), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c0 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp9) {
          c0 = tmp;
          throw tmp9;
        }
      }
    };
    !(function fetchAndHydrateColors() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
  }, items2);
});