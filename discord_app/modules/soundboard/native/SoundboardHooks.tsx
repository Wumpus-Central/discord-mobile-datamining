// discord_app/modules/soundboard/native/SoundboardHooks.tsx
import Sheet_BottomSheet from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import ThemeStore from "../../user_settings/ThemeStore.tsx";

require = fn;
const SoundboardStyleConstants = fn(19167);
({ SOUNDS_PER_ROW: metroRequire, SOUND_ROW_PADDING: closure_7 } = SoundboardStyleConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/soundboard/native/SoundboardHooks.tsx");

export function useSoundButtonStyleConfig() {
  const obj = { buttonWidth: (Sheet_BottomSheet.useBottomSheetWidth() - React5) / timestampProducer };
  return obj;
}
export function useMaybeFetchSoundboardSounds(shouldFetch) {
  shouldFetch = shouldFetch.shouldFetch;
  const items = [AccessibilityStore];
  const stateFromStores = shouldFetch(504).useStateFromStores(items, () => saturation.saturation);
  let obj = shouldFetch(504);
  const items1 = [ThemeStore];
  const items2 = [
    stateFromStores,
    shouldFetch(504).useStateFromStores(items1, () => shouldFetch(dependencyMap[7]).isThemeDark(theme.theme)),
    shouldFetch,
  ];
  const effect = noop.useEffect(() => {
    closure_0 = async function _fetchAndHydrateColors() {
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              const FrecencyUserSettingsActionCreators = shouldFetch(4844).FrecencyUserSettingsActionCreators;
              const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
              c1 = 1;
              c0 = 1;
              const obj5 = { value: shouldFetch(7517).maybeFetchSoundboardSounds(), done: false };
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
}
