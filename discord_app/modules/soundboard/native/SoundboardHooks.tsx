// === Module 17070: SoundboardHooks ===

// Module 17070 (SoundboardHooks)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import ThemeStore from "ThemeStore" /* 1183 */;

const require = fn;
const SoundboardStyleConstants = fn(17062);
({ SOUNDS_PER_ROW: closure_7, SOUND_ROW_PADDING: closure_8 } = SoundboardStyleConstants);
const ACTION_SHEET_MAX_WIDTH = fn(7151).ACTION_SHEET_MAX_WIDTH;
const size = fn(2);
const result = size.fileFinishedImporting("modules/soundboard/native/SoundboardHooks.tsx");

export const useSoundButtonStyleConfig = function useSoundButtonStyleConfig() {
  return { buttonWidth: (Math.min(ACTION_SHEET_MAX_WIDTH, useWindowDimensionsDefault().width) - React6) / React5 };
};
export const useMaybeFetchSoundboardSounds = function useMaybeFetchSoundboardSounds(shouldFetch) {
  shouldFetch = shouldFetch.shouldFetch;
  const items = [AccessibilityStore];
  const stateFromStores = shouldFetch(504).useStateFromStores(items, () => saturation.saturation);
  let obj = shouldFetch(504);
  const items1 = [ThemeStore];
  const items2 = [stateFromStores, shouldFetch(504).useStateFromStores(items1, () => shouldFetch(dependencyMap[8]).isThemeDark(theme.theme)), shouldFetch];
  const effect = noop.useEffect(() => {
    closure_0 = async function _fetchAndHydrateColors(arg0, value) {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
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
              obj = { value, done: true };
              return obj;
            } else if (c0) {
              const FrecencyUserSettingsActionCreators = shouldFetch(1940).FrecencyUserSettingsActionCreators;
              const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
              let obj1 = shouldFetch(7338);
              c1 = 1;
              c0 = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.maybeFetchSoundboardSounds();
              return obj1;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value, done: true };
            return obj;
          }
          c0 = 3;
          return { value: "HermesInternal", done: null };
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
};