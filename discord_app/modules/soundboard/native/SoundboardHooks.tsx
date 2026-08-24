// === Module 16291: useSoundButtonStyleConfig ===

// Module 16291 (useSoundButtonStyleConfig)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1494 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import closure_6 from "handleThemeChange" /* 1302 */;
import SOUND_BUTTON_HEIGHT from "SOUND_BUTTON_HEIGHT" /* 16284 */;
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO" /* 6951 */;

const require = arg1;
({ SOUNDS_PER_ROW: error, SOUND_ROW_PADDING: closure_8 } = SOUND_BUTTON_HEIGHT);
const result = require("set").fileFinishedImporting("modules/soundboard/native/SoundboardHooks.tsx");

export const useSoundButtonStyleConfig = function useSoundButtonStyleConfig() {
  return { buttonWidth: (Math.min(ACTION_SHEET_MAX_WIDTH, useWindowDimensionsDefault().width) - closure_8) / closure_7 };
};
export const useMaybeFetchSoundboardSounds = function useMaybeFetchSoundboardSounds(shouldFetch) {
  shouldFetch = shouldFetch.shouldFetch;
  const items = [closure_5];
  const stateFromStores = shouldFetch(589).useStateFromStores(items, () => saturation.saturation);
  let obj = shouldFetch(589);
  const items1 = [closure_6];
  const items2 = [stateFromStores, shouldFetch(589).useStateFromStores(items1, () => shouldFetch(table[8]).isThemeDark(theme.theme)), shouldFetch];
  const effect = React.useEffect(() => {
    function _fetchAndHydrateColors() {
      const self = this;
      const tmp = closure_2_3(function*() {
        if (c0 === 2) {
          c0 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            c0 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c0 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c0 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else if (c0) {
                const FrecencyUserSettingsActionCreators = v0(closure_2_2[9]).FrecencyUserSettingsActionCreators;
                const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
                obj1 = v0(closure_2_2[10]);
                c1 = 1;
                c0 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.maybeFetchSoundboardSounds();
                return obj1;
              }
            } else if (arg0 === 1) {
              c0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            c0 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          } catch (tmp9) {
            c0 = tmp;
            throw tmp9;
          }
        }
      });
      closure_0 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    !(function fetchAndHydrateColors() {
      const self = this;
      const apply = _fetchAndHydrateColors.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
  }, items2);
};