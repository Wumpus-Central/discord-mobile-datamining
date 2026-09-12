// _runtime/04995_get_synchronousScreenUpdatesEnabled.js
let closure_2 = {
  experiment: {
    synchronousScreenUpdatesEnabled: true,
    synchronousHeaderConfigUpdatesEnabled: true,
    synchronousHeaderSubviewUpdatesEnabled: true,
    androidLegacyTopInsetBehavior: false,
    androidResetScreenShadowStateOnOrientationChangeEnabled: true,
    iosOrientationInheritanceFixEnabled: true,
  },
  stable: { debugLogging: false },
};
let debugLogging = "synchronousScreenUpdatesEnabled";
let closure_3 = {
  get() {
    return c2.experiment[debugLogging];
  },
  set(arg0) {
    let tmp3 = arg0 !== c2.experiment[debugLogging];
    if (tmp3) {
      tmp3 = c2.experiment[debugLogging] !== c1;
    }
    if (tmp3) {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error(
        "[RNScreens] " +
          debugLogging +
          " feature flag modified for a second time; this might lead to unexpected effects",
      );
    }
    c2.experiment[debugLogging] = arg0;
  },
};
debugLogging = "synchronousHeaderConfigUpdatesEnabled";
let closure_4 = {
  get() {
    return c2.experiment[debugLogging];
  },
  set(arg0) {
    let tmp3 = arg0 !== c2.experiment[debugLogging];
    if (tmp3) {
      tmp3 = c2.experiment[debugLogging] !== c1;
    }
    if (tmp3) {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error(
        "[RNScreens] " +
          debugLogging +
          " feature flag modified for a second time; this might lead to unexpected effects",
      );
    }
    c2.experiment[debugLogging] = arg0;
  },
};
debugLogging = "synchronousHeaderSubviewUpdatesEnabled";
let closure_5 = {
  get() {
    return c2.experiment[debugLogging];
  },
  set(arg0) {
    let tmp3 = arg0 !== c2.experiment[debugLogging];
    if (tmp3) {
      tmp3 = c2.experiment[debugLogging] !== c1;
    }
    if (tmp3) {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error(
        "[RNScreens] " +
          debugLogging +
          " feature flag modified for a second time; this might lead to unexpected effects",
      );
    }
    c2.experiment[debugLogging] = arg0;
  },
};
debugLogging = "androidLegacyTopInsetBehavior";
let closure_6 = {
  get() {
    return c2.experiment[debugLogging];
  },
  set(arg0) {
    let tmp3 = arg0 !== c2.experiment[debugLogging];
    if (tmp3) {
      tmp3 = c2.experiment[debugLogging] !== c1;
    }
    if (tmp3) {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error(
        "[RNScreens] " +
          debugLogging +
          " feature flag modified for a second time; this might lead to unexpected effects",
      );
    }
    c2.experiment[debugLogging] = arg0;
  },
};
debugLogging = "androidResetScreenShadowStateOnOrientationChangeEnabled";
let closure_7 = {
  get() {
    return c2.experiment[debugLogging];
  },
  set(arg0) {
    let tmp3 = arg0 !== c2.experiment[debugLogging];
    if (tmp3) {
      tmp3 = c2.experiment[debugLogging] !== c1;
    }
    if (tmp3) {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error(
        "[RNScreens] " +
          debugLogging +
          " feature flag modified for a second time; this might lead to unexpected effects",
      );
    }
    c2.experiment[debugLogging] = arg0;
  },
};
debugLogging = "iosOrientationInheritanceFixEnabled";
let closure_8 = {
  get() {
    return c2.experiment[debugLogging];
  },
  set(arg0) {
    let tmp3 = arg0 !== c2.experiment[debugLogging];
    if (tmp3) {
      tmp3 = c2.experiment[debugLogging] !== c1;
    }
    if (tmp3) {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error(
        "[RNScreens] " +
          debugLogging +
          " feature flag modified for a second time; this might lead to unexpected effects",
      );
    }
    c2.experiment[debugLogging] = arg0;
  },
};
debugLogging = "debugLogging";
let c1 = false;
let closure_9 = {
  get() {
    return closure_2.stable[debugLogging];
  },
  set(arg0) {
    let tmp3 = arg0 !== closure_2.stable[debugLogging];
    if (tmp3) {
      tmp3 = closure_2.stable[debugLogging] !== c1;
    }
    if (tmp3) {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error(
        "[RNScreens] " +
          debugLogging +
          " feature flag modified for a second time; this might lead to unexpected effects",
      );
    }
    closure_2.stable[debugLogging] = arg0;
  },
};
let obj = { experiment: null, stable: null };
obj = {};
Object.defineProperty(obj, "synchronousScreenUpdatesEnabled", {
  get: () => closure_3.get(),
  set: (arg0) => {
    const result = closure_3.set(arg0);
  },
});
Object.defineProperty(obj, "synchronousHeaderConfigUpdatesEnabled", {
  get: () => closure_4.get(),
  set: (arg0) => {
    const result = closure_4.set(arg0);
  },
});
Object.defineProperty(obj, "synchronousHeaderSubviewUpdatesEnabled", {
  get: () => closure_5.get(),
  set: (arg0) => {
    const result = closure_5.set(arg0);
  },
});
Object.defineProperty(obj, "androidLegacyTopInsetBehavior", {
  get: () => closure_6.get(),
  set: (arg0) => {
    const result = closure_6.set(arg0);
  },
});
Object.defineProperty(obj, "androidResetScreenShadowStateOnOrientationChangeEnabled", {
  get: () => closure_7.get(),
  set: (arg0) => {
    const result = closure_7.set(arg0);
  },
});
Object.defineProperty(obj, "iosOrientationInheritanceFixEnabled", {
  get: () => closure_8.get(),
  set: (arg0) => {
    const result = closure_8.set(arg0);
  },
});
Object.defineProperty(obj, "iosPreventReattachmentOfDismissedScreens", {
  get: () => true,
  set: (arg0) => {},
});
Object.defineProperty(obj, "iosPreventReattachmentOfDismissedModals", {
  get: () => true,
  set: (arg0) => {},
});
Object.defineProperty(obj, "ios26AllowInteractionsDuringTransition", {
  get: () => true,
  set: (arg0) => {},
});
obj.experiment = obj;
obj = {};
Object.defineProperty(obj, "debugLogging", {
  get: () => closure_9.get(),
  set: (arg0) => {
    const result = closure_9.set(arg0);
  },
});
obj.stable = obj;

export default obj;
export const compatibilityFlags = {
  isNewBackTitleImplementation: true,
  usesHeaderFlexboxImplementation: true,
  usesNewAndroidHeaderHeightImplementation: true,
  usesStableTabsApi: true,
};
export const featureFlags = obj;
