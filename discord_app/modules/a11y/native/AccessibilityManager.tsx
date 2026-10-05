// === Module 14200: AccessibilityManager ===

// Module 14200 (AccessibilityManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import ThemeConstants from "ThemeConstants" /* 1196 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ThemeActionCreators from "ThemeActionCreators" /* 4726 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 9774 */;
import AccessibilitySystemFeaturesDefault from "AccessibilitySystemFeatures" /* 14201 */;
import AccessibilityPreferencesSharedValue from "AccessibilityPreferencesSharedValue" /* 14202 */;
import react_native from "react-native" /* 14278 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_native2 from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import size from "module_2" /* 2 */;

let c2, c3, set;

let closure_4;
let hasOwnProperty;
({ AccessibilityInfo: closure_4, Appearance: hasOwnProperty } = react_native2);
const AnalyticEvents = Constants.AnalyticEvents;
const SystemTheme = ThemeConstants.SystemTheme;
let obj = {
  init() {
    let colorblindMode;
    const self = this;
    let obj = AccessibilitySystemFeaturesDefault;
    obj.init();
    this.updateNativeColors();
    this.updateMotionSettings();
    AccessibilityStore.addChangeListener(this.updateNativeColors);
    AccessibilityStore.addChangeListener(this.updateMotionSettings);
    let obj2 = DispatcherDefault;
    const subscription = obj2.subscribe("CONNECTION_OPEN", this.updateMotionSettings);
    closure_5.addChangeListener(this.updateSystemAppearance);
    const listener = closure_4.addEventListener("screenReaderChanged", (event) => {
      const result = self.updateScreenReaderEnabled(event);
    });
    const obj3 = DispatcherDefault;
    const subscription1 = obj3.subscribe("ACCESSIBILITY_COLORBLIND_TOGGLE", () => {
      const obj = AnalyticsUtilsDefault;
      const obj2 = { colorblind_enabled: colorblindMode.colorblindMode };
      obj.track(constants.LOCAL_SETTINGS_UPDATED, obj2);
    });
    let result = this.startAnnouncementQueue();
  },
  updateNativeColors() {
    const obj = react_native;
    obj.updateSaturation(AccessibilityStore.saturation);
  },
  updateMotionSettings() {
    const obj = { reduceMotion: AccessibilityStore.useReducedMotion, prefersCrossfades: AccessibilityStore.systemPrefersCrossfades };
    const tmp = updateSharedValueIfChangedDefault;
    tmp(AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue, obj);
  },
  checkScreenreaderEnabled() {
    const self = this;
    return (async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let closure_0;
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
              let closure_1 = tmp4;
              closure_0 = undefined;
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
            closure_0 = value;
            const result = closure_129_0.updateScreenReaderEnabled(closure_0);
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp11) {
          c3 = 3;
          throw tmp11;
        }
      }
    })();
  },
  updateScreenReaderEnabled(screenReaderEnabled) {
    const obj = { screenReaderEnabled };
    const tmp = updateSharedValueIfChangedDefault;
    tmp(AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue, obj);
  },
  updateSystemAppearance(colorScheme) {
    let DARK = SystemTheme.NO_PREFERENCE;
    colorScheme = colorScheme.colorScheme;
    if ("light" === colorScheme) {
      DARK = SystemTheme.LIGHT;
    } else if ("dark" === colorScheme) {
      DARK = SystemTheme.DARK;
    }
    const obj = ThemeActionCreators;
    obj.setSystemTheme(DARK);
  },
  startAnnouncementQueue() {
    set = new Set();
    const listener = closure_4.addEventListener("announcementFinished", (event) => {
      let closure_0 = event;
      if (!event.success) {
        if (!set.has(event.announcement)) {
          set.add(event.announcement);
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            const AccessibilityAnnouncer = set(closure_2_2[12]).AccessibilityAnnouncer;
            AccessibilityAnnouncer.announce(announcement.announcement);
          }, 150);
        }
      }
      set.delete(event.announcement);
    });
  }
};
let result = size.fileFinishedImporting("modules/a11y/native/AccessibilityManager.tsx");

export default obj;