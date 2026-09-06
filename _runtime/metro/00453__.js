// === Module 453: ? ===

// Module 453
import EventEmitterDefault from "EventEmitter" /* 89 */;
import NativeEventEmitterDefault from "NativeEventEmitter" /* 209 */;
import Appearance from "Appearance" /* 454 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export const getColorScheme = function getColorScheme() {
  if (null == appearance) {
    const tmp11 = new EventEmitterDefault();
    closure_0 = tmp11;
    const _default = Appearance.default;
    if (null == _default) {
      appearance = { NativeAppearance: null, appearance: null, eventEmitter: tmp11 };
    } else {
      appearance = { NativeAppearance: _default, appearance: null, eventEmitter: tmp11 };
      const obj2 = new NativeEventEmitterDefault(_default);
      obj2.addListener("appearanceChanged", (colorScheme) => {
        appearance = { colorScheme: colorScheme.colorScheme };
        appearance.appearance = appearance;
        closure_0.emit("change", appearance.appearance);
      });
    }
  }
  const NativeAppearance = appearance.NativeAppearance;
  let colorScheme = null;
  if (null != NativeAppearance) {
    if (null == appearance.appearance) {
      appearance = { colorScheme: NativeAppearance.getColorScheme() };
      appearance.appearance = appearance;
    }
    colorScheme = appearance.appearance.colorScheme;
  }
  return colorScheme;
};
export const setColorScheme = function setColorScheme(arg0) {
  if (null == appearance) {
    const tmp14 = new EventEmitterDefault();
    closure_0 = tmp14;
    const _default = Appearance.default;
    if (null == _default) {
      appearance = { NativeAppearance: null, appearance: null, eventEmitter: tmp14 };
    } else {
      appearance = { NativeAppearance: _default, appearance: null, eventEmitter: tmp14 };
      const obj2 = new NativeEventEmitterDefault(_default);
      obj2.addListener("appearanceChanged", (colorScheme) => {
        appearance = { colorScheme: colorScheme.colorScheme };
        appearance.appearance = appearance;
        closure_0.emit("change", appearance.appearance);
      });
    }
  }
  const NativeAppearance = appearance.NativeAppearance;
  if (null != NativeAppearance) {
    NativeAppearance.setColorScheme(arg0);
    let tmp8 = arg0;
    if ("unspecified" === arg0) {
      let colorScheme = NativeAppearance.getColorScheme();
      if (colorScheme == null) {
        colorScheme = arg0;
      }
      tmp8 = colorScheme;
    }
    appearance = { colorScheme: tmp8 };
    appearance.appearance = appearance;
  }
};
export const addChangeListener = function addChangeListener(onChange) {
  if (null == appearance) {
    const tmp10 = new EventEmitterDefault();
    closure_0 = tmp10;
    const _default = Appearance.default;
    if (null == _default) {
      appearance = { NativeAppearance: null, appearance: null, eventEmitter: tmp10 };
    } else {
      appearance = { NativeAppearance: _default, appearance: null, eventEmitter: tmp10 };
      const obj2 = new NativeEventEmitterDefault(_default);
      obj2.addListener("appearanceChanged", (colorScheme) => {
        appearance = { colorScheme: colorScheme.colorScheme };
        appearance.appearance = appearance;
        closure_0.emit("change", appearance.appearance);
      });
    }
  }
  const eventEmitter = appearance.eventEmitter;
  return eventEmitter.addListener("change", onChange);
};