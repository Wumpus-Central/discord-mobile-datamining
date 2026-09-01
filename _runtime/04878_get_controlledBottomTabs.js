// _runtime/04878_get_controlledBottomTabs.js
let ios26AllowInteractionsDuringTransition = {
  experiment: {
    controlledBottomTabs: false,
    synchronousScreenUpdatesEnabled: false,
    synchronousHeaderConfigUpdatesEnabled: false,
    synchronousHeaderSubviewUpdatesEnabled: false,
    androidResetScreenShadowStateOnOrientationChangeEnabled: true,
    iosPreventReattachmentOfDismissedScreens: true,
    ios26AllowInteractionsDuringTransition: true,
  },
  stable: {},
};
ios26AllowInteractionsDuringTransition = "controlledBottomTabs";
let c1 = {
  get() {
    return ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition];
  },
  set(arg0) {
    let tmp3 = arg0 !== ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition];
    if (tmp3) {
      tmp3 = tmp.experiment[tmp2] !== c1;
    }
    if (tmp3) {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error(
        "[RNScreens] " + tmp2 + " feature flag modified for a second time; this might lead to unexpected effects",
      );
    }
    ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition] = arg0;
  },
};
ios26AllowInteractionsDuringTransition = "synchronousScreenUpdatesEnabled";
c1 = false;
let closure_2 = {
  get() {
    return ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition];
  },
  set(arg0) {
    let tmp3 = arg0 !== ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition];
    if (tmp3) {
      tmp3 = tmp.experiment[tmp2] !== c1;
    }
    if (tmp3) {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error(
        "[RNScreens] " + tmp2 + " feature flag modified for a second time; this might lead to unexpected effects",
      );
    }
    ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition] = arg0;
  },
};
ios26AllowInteractionsDuringTransition = "synchronousHeaderConfigUpdatesEnabled";
c1 = false;
let closure_3 = {
  get() {
    return ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition];
  },
  set(arg0) {
    let tmp3 = arg0 !== ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition];
    if (tmp3) {
      tmp3 = tmp.experiment[tmp2] !== c1;
    }
    if (tmp3) {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error(
        "[RNScreens] " + tmp2 + " feature flag modified for a second time; this might lead to unexpected effects",
      );
    }
    ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition] = arg0;
  },
};
ios26AllowInteractionsDuringTransition = "synchronousHeaderSubviewUpdatesEnabled";
c1 = false;
let closure_4 = {
  get() {
    return ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition];
  },
  set(arg0) {
    let tmp3 = arg0 !== ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition];
    if (tmp3) {
      tmp3 = tmp.experiment[tmp2] !== c1;
    }
    if (tmp3) {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error(
        "[RNScreens] " + tmp2 + " feature flag modified for a second time; this might lead to unexpected effects",
      );
    }
    ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition] = arg0;
  },
};
ios26AllowInteractionsDuringTransition = "androidResetScreenShadowStateOnOrientationChangeEnabled";
c1 = true;
let closure_5 = {
  get() {
    return ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition];
  },
  set(arg0) {
    let tmp3 = arg0 !== ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition];
    if (tmp3) {
      tmp3 = tmp.experiment[tmp2] !== c1;
    }
    if (tmp3) {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error(
        "[RNScreens] " + tmp2 + " feature flag modified for a second time; this might lead to unexpected effects",
      );
    }
    ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition] = arg0;
  },
};
ios26AllowInteractionsDuringTransition = "iosPreventReattachmentOfDismissedScreens";
c1 = true;
let closure_6 = {
  get() {
    return ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition];
  },
  set(arg0) {
    let tmp3 = arg0 !== ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition];
    if (tmp3) {
      tmp3 = tmp.experiment[tmp2] !== c1;
    }
    if (tmp3) {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error(
        "[RNScreens] " + tmp2 + " feature flag modified for a second time; this might lead to unexpected effects",
      );
    }
    ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition] = arg0;
  },
};
ios26AllowInteractionsDuringTransition = "ios26AllowInteractionsDuringTransition";
c1 = true;
let closure_7 = {
  get() {
    return ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition];
  },
  set(arg0) {
    let tmp3 = arg0 !== ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition];
    if (tmp3) {
      tmp3 = tmp.experiment[tmp2] !== c1;
    }
    if (tmp3) {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error(
        "[RNScreens] " + tmp2 + " feature flag modified for a second time; this might lead to unexpected effects",
      );
    }
    ios26AllowInteractionsDuringTransition.experiment[ios26AllowInteractionsDuringTransition] = arg0;
  },
};
let obj = { experiment: null, stable: null };
obj = {};
Object.defineProperty(obj, "controlledBottomTabs", {
  get: () => _true.get(),
  set: (arg0) => {
    const result = _true.set(arg0);
  },
});
Object.defineProperty(obj, "synchronousScreenUpdatesEnabled", {
  get: () => store.get(),
  set: (arg0) => {
    const result = store.set(arg0);
  },
});
Object.defineProperty(obj, "synchronousHeaderConfigUpdatesEnabled", {
  get: () => store2.get(),
  set: (arg0) => {
    const result = store2.set(arg0);
  },
});
Object.defineProperty(obj, "synchronousHeaderSubviewUpdatesEnabled", {
  get: () => store3.get(),
  set: (arg0) => {
    const result = store3.set(arg0);
  },
});
Object.defineProperty(obj, "androidResetScreenShadowStateOnOrientationChangeEnabled", {
  get: () => store4.get(),
  set: (arg0) => {
    const result = store4.set(arg0);
  },
});
Object.defineProperty(obj, "iosPreventReattachmentOfDismissedScreens", {
  get: () => store5.get(),
  set: (arg0) => {
    const result = store5.set(arg0);
  },
});
Object.defineProperty(obj, "ios26AllowInteractionsDuringTransition", {
  get: () => store6.get(),
  set: (arg0) => {
    const result = store6.set(arg0);
  },
});
obj[0] = obj;
obj[1] = {};
arg5.default = obj;
arg5.compatibilityFlags = {
  isNewBackTitleImplementation: true,
  usesHeaderFlexboxImplementation: true,
  usesNewAndroidHeaderHeightImplementation: true,
};
arg5.featureFlags = obj;
