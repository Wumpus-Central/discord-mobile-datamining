// === Module 14523: AccessibilityManager ===

// Module 14523 (AccessibilityManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1240 */;
import ThemeActionCreators from "ThemeActionCreators" /* 4485 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 11488 */;
import AccessibilitySystemFeaturesDefault from "AccessibilitySystemFeatures" /* 14524 */;
import AccessibilityPreferencesSharedValue from "AccessibilityPreferencesSharedValue" /* 14525 */;
import updateSaturation from "updateSaturation" /* 14527 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AccessibilityStore from "AccessibilityStore" /* 4628 */;

require = fn;
get_ActivityIndicator = fn(17);
({ AccessibilityInfo: closure_4, Appearance: hasOwnProperty } = get_ActivityIndicator);
const AnalyticEvents = fn(1074).AnalyticEvents;
const SystemTheme = fn(1184).SystemTheme;
const size = fn(2);
let result = size.fileFinishedImporting("modules/a11y/native/AccessibilityManager.tsx");

export default {
  init() {
    const self = this;
    AccessibilitySystemFeaturesDefault.init();
    this.updateNativeColors();
    this.updateMotionSettings();
    AccessibilityStore.addChangeListener(this.updateNativeColors);
    AccessibilityStore.addChangeListener(this.updateMotionSettings);
    const subscription = DispatcherDefault.subscribe("CONNECTION_OPEN", this.updateMotionSettings);
    closure_5.addChangeListener(this.updateSystemAppearance);
    const listener = closure_4.addEventListener("screenReaderChanged", (event) => {
      const result = self.updateScreenReaderEnabled(event);
    });
    const subscription1 = DispatcherDefault.subscribe("ACCESSIBILITY_COLORBLIND_TOGGLE", () => {
      AnalyticsUtilsDefault.track(constants.LOCAL_SETTINGS_UPDATED, { colorblind_enabled: colorblindMode.colorblindMode });
    });
    let result = this.startAnnouncementQueue();
  },
  updateNativeColors() {
    updateSaturation.updateSaturation(AccessibilityStore.saturation);
  },
  updateMotionSettings() {
    updateSharedValueIfChangedDefault(AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue, { reduceMotion: AccessibilityStore.useReducedMotion, prefersCrossfades: AccessibilityStore.systemPrefersCrossfades });
  },
  checkScreenreaderEnabled() {
    const self = this;
    return (async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp5;
              closure_0 = tmp2;
              closure_128_0 = undefined;
              c2 = 1;
              c3 = 1;
              const obj4 = { value: screenReaderEnabled.isScreenReaderEnabled(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            const result = closure_129_0.updateScreenReaderEnabled(closure_128_0);
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
    updateSharedValueIfChangedDefault(AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue, { screenReaderEnabled });
  },
  updateSystemAppearance(colorScheme) {
    let DARK = SystemTheme.NO_PREFERENCE;
    colorScheme = colorScheme.colorScheme;
    if ("light" === colorScheme) {
      DARK = SystemTheme.LIGHT;
    } else if ("dark" === colorScheme) {
      DARK = SystemTheme.DARK;
    }
    ThemeActionCreators.setSystemTheme(DARK);
  },
  startAnnouncementQueue() {
    const set = new Set();
    const listener = closure_4.addEventListener("announcementFinished", (event) => {
      if (!event.success) {
        if (!set.has(event.announcement)) {
          set.add(event.announcement);
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            const AccessibilityAnnouncer = set(dependencyMap[12]).AccessibilityAnnouncer;
            AccessibilityAnnouncer.announce(event.announcement);
          }, 150);
        }
      }
      set.delete(event.announcement);
    });
  }
};