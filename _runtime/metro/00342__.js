// _runtime/metro/00342__.js
import _mod68 from "00068__.js";
import defineLazyObjectProperty from "../00071_defineLazyObjectProperty.js";
import get_VersionDefault from "../00273_get_Version.js";
import javaScriptFlagGetter from "../00027_javaScriptFlagGetter.js";

function createLayoutAnimation(duration, type, property) {
  return { duration, create: { type, property }, update: { type }, delete: { type, property } };
}
function checkConfig() {
  console.error("LayoutAnimation.checkConfig(...) has been disabled.");
}
function setLayoutAnimationEnabled(arg0) {}
function configureNext(duration, arg1, arg2) {
  let closure_0 = arg1;
  if (!get_VersionDefault.isDisableAnimations) {
    if (closure_4) {
      let c1 = false;
      let num = duration.duration;
      const _setTimeout = setTimeout;
      if (num == null) {
        num = 0;
      }
      function onAnimationComplete() {
        const tmp = c1;
        if (!tmp) {
          c1 = true;
          const _clearTimeout = clearTimeout;
          clearTimeout(closure_2);
          if (closure_0 != null) {
            closure_0();
          }
        }
      }
      let closure_2 = _setTimeout(onAnimationComplete, num + 17);
      const obj = defineLazyObjectProperty;
      const fabricUIManager = obj.getFabricUIManager();
      let prop;
      if (fabricUIManager != null) {
        prop = fabricUIManager.configureNextLayoutAnimation;
      }
      let fn = arg2;
      if (prop) {
        if (global != null) {
          const nativeFabricUIManager = global.nativeFabricUIManager;
          if (nativeFabricUIManager != null) {
            const configureNextLayoutAnimation2 = nativeFabricUIManager.configureNextLayoutAnimation;
            if (fn == null) {
              fn = () => {};
            }
            const result = configureNextLayoutAnimation2(duration, onAnimationComplete, fn);
          }
        }
      } else {
        const _default = _mod68.default;
        let prop1;
        if (_default != null) {
          prop1 = _default.configureNextLayoutAnimation;
        }
        if (prop1) {
          let fn2 = fn;
          const configureNextLayoutAnimation = _mod68.default.configureNextLayoutAnimation;
          _mod68.default;
          if (fn == null) {
            fn2 = () => {};
          }
          const result1 = configureNextLayoutAnimation(duration, onAnimationComplete, fn2);
        }
      }
    }
  }
}
let closure_4 = javaScriptFlagGetter.isLayoutAnimationEnabled();
let obj = {
  easeInEaseOut: {
    duration: 300,
    create: { type: "easeInEaseOut", property: "opacity" },
    update: { type: "easeInEaseOut" },
    delete: { type: "easeInEaseOut", property: "opacity" },
  },
  linear: {
    duration: 500,
    create: { type: "linear", property: "opacity" },
    update: { type: "linear" },
    delete: { type: "linear", property: "opacity" },
  },
  spring: {
    duration: 700,
    create: { type: "linear", property: "opacity" },
    update: { type: "spring", springDamping: 0.4 },
    delete: { type: "linear", property: "opacity" },
  },
};
({
  configureNext,
  create: createLayoutAnimation,
  Types: Object.freeze({
    spring: "spring",
    linear: "linear",
    easeInEaseOut: "easeInEaseOut",
    easeIn: "easeIn",
    easeOut: "easeOut",
    keyboard: "keyboard",
  }),
  Properties: Object.freeze({ opacity: "opacity", scaleX: "scaleX", scaleY: "scaleY", scaleXY: "scaleXY" }),
  checkConfig,
  Presets: obj,
  easeInEaseOut: configureNext.bind(null, obj.easeInEaseOut),
  linear: configureNext.bind(null, obj.linear),
  spring: configureNext.bind(null, obj.spring),
  setEnabled: setLayoutAnimationEnabled,
});

export default {
  configureNext,
  create: createLayoutAnimation,
  Types: Object.freeze({
    spring: "spring",
    linear: "linear",
    easeInEaseOut: "easeInEaseOut",
    easeIn: "easeIn",
    easeOut: "easeOut",
    keyboard: "keyboard",
  }),
  Properties: Object.freeze({ opacity: "opacity", scaleX: "scaleX", scaleY: "scaleY", scaleXY: "scaleXY" }),
  checkConfig,
  Presets: obj,
  easeInEaseOut: configureNext.bind(null, obj.easeInEaseOut),
  linear: configureNext.bind(null, obj.linear),
  spring: configureNext.bind(null, obj.spring),
  setEnabled: setLayoutAnimationEnabled,
};
