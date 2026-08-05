// _runtime/00453_getColorScheme.js
import { Appearance } from "00454_Appearance.js";
let require = arg1;
const module = arg2;
const dependencyMap = arg6;
arg5.getColorScheme = function getColorScheme() {
  if (null == obj) {
    const tmp11 = new obj(89)();
    const require = tmp11;
    const _default = Appearance /* Appearance */.default;
    if (null == _default) {
      obj = { NativeAppearance: null, appearance: null, eventEmitter: null };
      obj[2] = tmp11;
    } else {
      obj = { NativeAppearance: null, appearance: null, eventEmitter: null };
      obj[0] = _default;
      obj[2] = tmp11;
      const obj2 = new tmp7(209)(_default);
      obj2.addListener("appearanceChanged", (colorScheme) => {
        const obj = { colorScheme: colorScheme.colorScheme };
        obj.appearance = obj;
        tmp10.emit("change", obj.appearance);
      });
    }
    tmp7 = obj;
  }
  const NativeAppearance = obj.NativeAppearance;
  let colorScheme = null;
  if (null != NativeAppearance) {
    if (null == obj.appearance) {
      obj = { colorScheme: null };
      obj[0] = NativeAppearance.getColorScheme();
      obj.appearance = obj;
    }
    colorScheme = obj.appearance.colorScheme;
  }
  return colorScheme;
};
arg5.setColorScheme = function setColorScheme(arg0) {
  if (null == obj) {
    const tmp14 = new obj(89)();
    const require = tmp14;
    const _default = Appearance /* Appearance */.default;
    if (null == _default) {
      obj = { NativeAppearance: null, appearance: null, eventEmitter: null };
      obj[2] = tmp14;
    } else {
      obj = { NativeAppearance: null, appearance: null, eventEmitter: null };
      obj[0] = _default;
      obj[2] = tmp14;
      const obj2 = new tmp10(209)(_default);
      obj2.addListener("appearanceChanged", (colorScheme) => {
        const obj = { colorScheme: colorScheme.colorScheme };
        obj.appearance = obj;
        tmp10.emit("change", obj.appearance);
      });
    }
    tmp10 = obj;
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
    obj = { colorScheme: null };
    obj[0] = tmp8;
    obj.appearance = obj;
  }
};
arg5.addChangeListener = function addChangeListener(onChange) {
  if (null == obj) {
    const tmp10 = new obj(89)();
    const require = tmp10;
    const _default = Appearance /* Appearance */.default;
    if (null == _default) {
      obj = { NativeAppearance: null, appearance: null, eventEmitter: null };
      obj[2] = tmp10;
    } else {
      obj = { NativeAppearance: null, appearance: null, eventEmitter: null };
      obj[0] = _default;
      obj[2] = tmp10;
      const obj2 = new tmp6(209)(_default);
      obj2.addListener("appearanceChanged", (colorScheme) => {
        const obj = { colorScheme: colorScheme.colorScheme };
        obj.appearance = obj;
        tmp10.emit("change", obj.appearance);
      });
    }
    tmp6 = obj;
  }
  const eventEmitter = obj.eventEmitter;
  return eventEmitter.addListener("change", onChange);
};