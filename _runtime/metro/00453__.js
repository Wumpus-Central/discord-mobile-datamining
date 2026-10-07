// _runtime/metro/00453__.js
import EventEmitterDefault from "../00089_EventEmitter.js";
import NativeEventEmitterDefault from "../00209_NativeEventEmitter.js";
import Appearance from "../00454_Appearance.js";

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export const getColorScheme = function getColorScheme() {
  if (null == obj) {
    const tmp11 = new EventEmitterDefault();
    closure_0 = tmp11;
    const _default = Appearance.default;
    if (null == _default) {
      const obj3 = { NativeAppearance: null, appearance: null, eventEmitter: tmp11 };
      obj = obj3;
    } else {
      obj = { NativeAppearance: _default, appearance: null, eventEmitter: tmp11 };
      const obj2 = new NativeEventEmitterDefault(_default);
      obj2.addListener("appearanceChanged", (colorScheme) => {
        appearance = { colorScheme: colorScheme.colorScheme };
        appearance.appearance = appearance;
        closure_0.emit("change", appearance.appearance);
      });
    }
  }
  const NativeAppearance = obj.NativeAppearance;
  let colorScheme = null;
  if (null != NativeAppearance) {
    if (null == obj.appearance) {
      const obj4 = { colorScheme: NativeAppearance.getColorScheme() };
      obj.appearance = obj4;
    }
    colorScheme = obj.appearance.colorScheme;
  }
  return colorScheme;
};
export const setColorScheme = function setColorScheme(arg0) {
  if (null == obj) {
    const tmp14 = new EventEmitterDefault();
    closure_0 = tmp14;
    const _default = Appearance.default;
    if (null == _default) {
      const obj3 = { NativeAppearance: null, appearance: null, eventEmitter: tmp14 };
      obj = obj3;
    } else {
      obj = { NativeAppearance: _default, appearance: null, eventEmitter: tmp14 };
      const obj2 = new NativeEventEmitterDefault(_default);
      obj2.addListener("appearanceChanged", (colorScheme) => {
        appearance = { colorScheme: colorScheme.colorScheme };
        appearance.appearance = appearance;
        closure_0.emit("change", appearance.appearance);
      });
    }
  }
  const NativeAppearance = obj.NativeAppearance;
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
    const obj4 = { colorScheme: tmp8 };
    obj.appearance = obj4;
  }
};
export const addChangeListener = function addChangeListener(onChange) {
  if (null == appearance) {
    const tmp10 = new EventEmitterDefault();
    closure_0 = tmp10;
    const _default = Appearance.default;
    if (null == _default) {
      const obj3 = { NativeAppearance: null, appearance: null, eventEmitter: tmp10 };
      appearance = obj3;
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
