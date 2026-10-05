// === Module 5722: get synchronousScreenUpdatesEnabled ===

// Module 5722 (get synchronousScreenUpdatesEnabled)
let obj2;
let obj3;
function get() {
  return closure_2.experiment[iosOrientationInheritanceFixEnabled];
}
function set(arg0) {
  const tmp3 = arg0 !== closure_2.experiment[iosOrientationInheritanceFixEnabled] && closure_2.experiment[iosOrientationInheritanceFixEnabled] !== c1;
  if (tmp3) {
    const _console = console;
    const _HermesInternal = HermesInternal;
    console.error("[RNScreens] " + iosOrientationInheritanceFixEnabled + " feature flag modified for a second time; this might lead to unexpected effects");
  }
  closure_2.experiment[iosOrientationInheritanceFixEnabled] = arg0;
}
let closure_2 = { experiment: { synchronousScreenUpdatesEnabled: true, synchronousHeaderConfigUpdatesEnabled: true, synchronousHeaderSubviewUpdatesEnabled: true, androidLegacyTopInsetBehavior: false, androidResetScreenShadowStateOnOrientationChangeEnabled: true, iosOrientationInheritanceFixEnabled: true }, stable: { debugLogging: false } };
const synchronousScreenUpdatesEnabled = "synchronousScreenUpdatesEnabled";
let closure_3 = { get, set };
const synchronousHeaderConfigUpdatesEnabled = "synchronousHeaderConfigUpdatesEnabled";
let closure_4 = { get, set };
const synchronousHeaderSubviewUpdatesEnabled = "synchronousHeaderSubviewUpdatesEnabled";
let closure_5 = { get, set };
const androidLegacyTopInsetBehavior = "androidLegacyTopInsetBehavior";
let closure_6 = { get, set };
const androidResetScreenShadowStateOnOrientationChangeEnabled = "androidResetScreenShadowStateOnOrientationChangeEnabled";
let closure_7 = { get, set };
const iosOrientationInheritanceFixEnabled = "iosOrientationInheritanceFixEnabled";
let closure_8 = { get, set };
const debugLogging = "debugLogging";
let c1 = false;
let closure_9 = {
  get() {
    return closure_2.stable[debugLogging];
  },
  set(arg0) {
    const tmp3 = arg0 !== closure_2.stable[debugLogging] && closure_2.stable[debugLogging] !== c1;
    if (tmp3) {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error("[RNScreens] " + debugLogging + " feature flag modified for a second time; this might lead to unexpected effects");
    }
    closure_2.stable[debugLogging] = arg0;
  }
};
const obj = { experiment: obj2, stable: obj3 };
obj2 = {};
Object.defineProperty(obj2, "synchronousScreenUpdatesEnabled", {
  get: () => closure_3.get(),
  set: (arg0) => {
    const result = closure_3.set(arg0);
  }
});
Object.defineProperty(obj2, "synchronousHeaderConfigUpdatesEnabled", {
  get: () => closure_4.get(),
  set: (arg0) => {
    const result = closure_4.set(arg0);
  }
});
Object.defineProperty(obj2, "synchronousHeaderSubviewUpdatesEnabled", {
  get: () => closure_5.get(),
  set: (arg0) => {
    const result = closure_5.set(arg0);
  }
});
Object.defineProperty(obj2, "androidLegacyTopInsetBehavior", {
  get: () => closure_6.get(),
  set: (arg0) => {
    const result = closure_6.set(arg0);
  }
});
Object.defineProperty(obj2, "androidResetScreenShadowStateOnOrientationChangeEnabled", {
  get: () => closure_7.get(),
  set: (arg0) => {
    const result = closure_7.set(arg0);
  }
});
Object.defineProperty(obj2, "iosOrientationInheritanceFixEnabled", {
  get: () => closure_8.get(),
  set: (arg0) => {
    const result = closure_8.set(arg0);
  }
});
Object.defineProperty(obj2, "iosPreventReattachmentOfDismissedScreens", {
  get: () => true,
  set: (arg0) => {

  }
});
Object.defineProperty(obj2, "iosPreventReattachmentOfDismissedModals", {
  get: () => true,
  set: (arg0) => {

  }
});
Object.defineProperty(obj2, "ios26AllowInteractionsDuringTransition", {
  get: () => true,
  set: (arg0) => {

  }
});
obj3 = {};
Object.defineProperty(obj3, "debugLogging", {
  get: () => closure_9.get(),
  set: (arg0) => {
    const result = closure_9.set(arg0);
  }
});

export default obj;
export const compatibilityFlags = { isNewBackTitleImplementation: true, usesHeaderFlexboxImplementation: true, usesNewAndroidHeaderHeightImplementation: true, usesStableTabsApi: true };
export const featureFlags = obj;