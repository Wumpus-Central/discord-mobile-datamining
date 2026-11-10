// === Module 19581: SoundboardHooks ===

// Module 19581 (SoundboardHooks)
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5390 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5143 */;
import ThemeStore from "ThemeStore" /* 1192 */;

require = fn;
const SoundboardStyleConstants = fn(19574);
({ SOUNDS_PER_ROW: closure_6, SOUND_ROW_PADDING: metroImportDefault } = SoundboardStyleConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/soundboard/native/SoundboardHooks.tsx");

export function useSoundButtonStyleConfig() {
  const obj = { buttonWidth: (Sheet_BottomSheet.useBottomSheetWidth() - metroImportDefault) / timestampProducer };
  return obj;
}
export function useMaybeFetchSoundboardSounds(shouldFetch) {
  shouldFetch = shouldFetch.shouldFetch;
  items = [AccessibilityStore];
  const stateFromStores = shouldFetch(504).useStateFromStores(items, () => saturation.saturation);
  let obj = shouldFetch(504);
  const items1 = [ThemeStore];
  const items2 = [stateFromStores, shouldFetch(504).useStateFromStores(items1, () => shouldFetch(dependencyMap[7]).isThemeDark(theme.theme)), shouldFetch];
  const effect = noop.useEffect(() => {
    closure_0 = async function _fetchAndHydrateColors() {
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj4 = { value, done: true };
          return obj4;
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
              const obj5 = { value, done: true };
              return obj5;
            } else if (c0) {
              const FrecencyUserSettingsActionCreators = shouldFetch(4972).FrecencyUserSettingsActionCreators;
              shouldFetch(5260).ignoreErrors(FrecencyUserSettingsActionCreators.loadIfNecessary());
              const obj2 = shouldFetch(5260);
              c1 = 1;
              c0 = 1;
              const obj6 = { value: shouldFetch(7592).maybeFetchSoundboardSounds(), done: false };
              return obj6;
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
          return { value: "HermesInternal", done: null };
        } catch (tmp8) {
          c0 = tmp;
          throw tmp8;
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
}