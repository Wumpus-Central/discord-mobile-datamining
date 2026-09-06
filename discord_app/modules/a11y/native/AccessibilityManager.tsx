// discord_app/modules/a11y/native/AccessibilityManager.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ThemeActionCreators from "../../user_settings/ThemeActionCreators.tsx";
import updateSharedValueIfChangedDefault from "../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import AccessibilitySystemFeaturesDefault from "AccessibilitySystemFeatures.tsx";
import AccessibilityPreferencesSharedValue from "AccessibilityPreferencesSharedValue.tsx";
import updateSaturation from "../../themes/native/updateSaturation.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import AccessibilityStore from "../AccessibilityStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ AccessibilityInfo: closure_4, Appearance: hasOwnProperty } = get_ActivityIndicator);
const AnalyticEvents = fn(1074).AnalyticEvents;
const SystemTheme = fn(1186).SystemTheme;
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
      const obj = { colorblind_enabled: colorblindMode.colorblindMode };
      obj.track(constants.LOCAL_SETTINGS_UPDATED, obj);
    });
    let result = this.startAnnouncementQueue();
  },
  updateNativeColors() {
    updateSaturation.updateSaturation(AccessibilityStore.saturation);
  },
  updateMotionSettings() {
    updateSharedValueIfChangedDefault(AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue, {
      reduceMotion: AccessibilityStore.useReducedMotion,
      prefersCrossfades: AccessibilityStore.systemPrefersCrossfades,
    });
  },
  checkScreenreaderEnabled() {
    const self = this;
    return (async (arg0, value) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
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
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp5;
              closure_0 = tmp2;
              closure_128_0 = undefined;
              c2 = 1;
              c3 = 1;
              const obj1 = { value: screenReaderEnabled.isScreenReaderEnabled(), done: false };
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
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
    updateSharedValueIfChangedDefault(AccessibilityPreferencesSharedValue.accessibilityPreferencesSharedValue, {
      screenReaderEnabled,
    });
  },
  updateSystemAppearance(colorScheme) {
    let DARK = SystemTheme.NO_PREFERENCE;
    colorScheme = colorScheme.colorScheme;
    if ("light" === colorScheme) {
      DARK = tmp.LIGHT;
    } else if ("dark" === colorScheme) {
      DARK = tmp.DARK;
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
  },
};
