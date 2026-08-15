// discord_app/modules/a11y/native/AccessibilityManager.tsx
import AccessibilityFeatureFlags from "AccessibilityFeatureFlags";
import get_ActivityIndicator from "get ActivityIndicator";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { AnalyticEvents } from "ME";
import { SystemTheme } from "SystemThemeState";
import { dispatcher } from "../../../Dispatcher.tsx";
import { u } from "../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import { updateSaturation } from "../../themes/native/updateSaturation.tsx";
import { setSystemTheme } from "../../user_settings/ThemeActionCreators.tsx";
import { A11Y_FEATURE_MAP } from "AccessibilityPreferencesSharedValue.tsx";
import { AccessibilityFeatureFlags } from "AccessibilitySystemFeatures.tsx";

let c4;
let c5;
const require = arg1;
({ AccessibilityInfo: c4, Appearance: c5 } = get_ActivityIndicator);
let result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/a11y/native/AccessibilityManager.tsx");

export default {
  init() {
    const self = this;
    AccessibilityFeatureFlags.init();
    this.updateNativeColors();
    this.updateMotionSettings();
    maybeApplyNoTextColorForLightCustomTheme.addChangeListener(this.updateNativeColors);
    maybeApplyNoTextColorForLightCustomTheme.addChangeListener(this.updateMotionSettings);
    let obj = AccessibilityFeatureFlags;
    const subscription = dispatcher.subscribe("CONNECTION_OPEN", this.updateMotionSettings);
    closure_5.addChangeListener(this.updateSystemAppearance);
    const listener = closure_4.addEventListener("screenReaderChanged", (arg0) => {
      const result = self.updateScreenReaderEnabled(arg0);
    });
    const obj2 = dispatcher;
    const subscription1 = dispatcher.subscribe("ACCESSIBILITY_COLORBLIND_TOGGLE", () => {
      let obj = callback(table[7]);
      obj = { colorblind_enabled: colorblindMode.colorblindMode };
      obj.track(constants.LOCAL_SETTINGS_UPDATED, obj);
    });
    let result = this.startAnnouncementQueue();
  },
  updateNativeColors() {
    updateSaturation.updateSaturation(maybeApplyNoTextColorForLightCustomTheme.saturation);
  },
  updateMotionSettings() {
    u(A11Y_FEATURE_MAP.accessibilityPreferencesSharedValue, { reduceMotion: maybeApplyNoTextColorForLightCustomTheme.useReducedMotion, prefersCrossfades: maybeApplyNoTextColorForLightCustomTheme.systemPrefersCrossfades });
  },
  checkScreenreaderEnabled() {
    const self = this;
    return callback(function*() {
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              let closure_1 = tmp5;
              let closure_0 = tmp2;
              closure_0 = undefined;
              c2 = 1;
              c3 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = outer1_4.isScreenReaderEnabled();
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
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp12) {
          c3 = tmp;
          throw tmp12;
        }
      }
    })();
  },
  updateScreenReaderEnabled(screenReaderEnabled) {
    u(A11Y_FEATURE_MAP.accessibilityPreferencesSharedValue, { screenReaderEnabled });
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
            const AccessibilityAnnouncer = success(outer1_2[12]).AccessibilityAnnouncer;
            AccessibilityAnnouncer.announce(success.announcement);
          }, 150);
        }
      }
      success.delete(success.announcement);
    });
  }
};