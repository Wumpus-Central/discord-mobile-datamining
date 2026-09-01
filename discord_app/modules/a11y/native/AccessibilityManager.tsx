// discord_app/modules/a11y/native/AccessibilityManager.tsx
import dispatcherDefault from "../../../Dispatcher.tsx";
import setSystemTheme from "../../user_settings/ThemeActionCreators.tsx";
import uDefault from "../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import AccessibilityFeatureFlagsDefault from "AccessibilitySystemFeatures.tsx";
import A11Y_FEATURE_MAP from "AccessibilityPreferencesSharedValue.tsx";
import updateSaturation from "../../themes/native/updateSaturation.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../AccessibilityStore.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";
import { SystemTheme } from "../../user_settings/ThemeConstants.tsx";

require = arg1;
({ AccessibilityInfo: c4, Appearance: c5 } = get_ActivityIndicator);
let result = require("set").fileFinishedImporting("modules/a11y/native/AccessibilityManager.tsx");

export default {
  init() {
    const self = this;
    AccessibilityFeatureFlagsDefault.init();
    this.updateNativeColors();
    this.updateMotionSettings();
    closure_6.addChangeListener(this.updateNativeColors);
    closure_6.addChangeListener(this.updateMotionSettings);
    let obj = AccessibilityFeatureFlagsDefault;
    const subscription = dispatcherDefault.subscribe("CONNECTION_OPEN", this.updateMotionSettings);
    closure_5.addChangeListener(this.updateSystemAppearance);
    const listener = closure_4.addEventListener("screenReaderChanged", (arg0) => {
      const result = self.updateScreenReaderEnabled(arg0);
    });
    const obj2 = dispatcherDefault;
    const subscription1 = dispatcherDefault.subscribe("ACCESSIBILITY_COLORBLIND_TOGGLE", () => {
      let obj = callback(table[7]);
      obj = { colorblind_enabled: colorblindMode.colorblindMode };
      obj.track(constants.LOCAL_SETTINGS_UPDATED, obj);
    });
    let result = this.startAnnouncementQueue();
  },
  updateNativeColors() {
    updateSaturation.updateSaturation(closure_6.saturation);
  },
  updateMotionSettings() {
    uDefault(A11Y_FEATURE_MAP.accessibilityPreferencesSharedValue, {
      reduceMotion: closure_6.useReducedMotion,
      prefersCrossfades: closure_6.systemPrefersCrossfades,
    });
  },
  checkScreenreaderEnabled() {
    const self = this;
    return callback(function* () {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp5;
              closure_0 = tmp2;
              closure_0 = undefined;
              c2 = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_4.isScreenReaderEnabled();
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_0 = arg1;
            const result = closure_0.updateScreenReaderEnabled(closure_0);
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp12) {
          c3 = tmp;
          throw tmp12;
        }
      }
    })();
  },
  updateScreenReaderEnabled(screenReaderEnabled) {
    uDefault(A11Y_FEATURE_MAP.accessibilityPreferencesSharedValue, { screenReaderEnabled });
  },
  updateSystemAppearance(colorScheme) {
    let DARK = SystemTheme.NO_PREFERENCE;
    colorScheme = colorScheme.colorScheme;
    if ("light" === colorScheme) {
      DARK = tmp.LIGHT;
    } else if ("dark" === colorScheme) {
      DARK = tmp.DARK;
    }
    setSystemTheme.setSystemTheme(DARK);
  },
  startAnnouncementQueue() {
    const set = new Set();
    const listener = closure_4.addEventListener("announcementFinished", (success) => {
      if (!success.success) {
        if (!set.has(success.announcement)) {
          set.add(success.announcement);
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            const AccessibilityAnnouncer = success(closure_1_2[12]).AccessibilityAnnouncer;
            AccessibilityAnnouncer.announce(success.announcement);
          }, 150);
        }
      }
      success.delete(success.announcement);
    });
  },
};
