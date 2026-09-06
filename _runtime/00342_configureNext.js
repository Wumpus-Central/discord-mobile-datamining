// === Module 342: configureNext ===

// Module 342 (configureNext)
import _mod71 from "module_71" /* 71 */;
import get_VersionDefault from "get Version" /* 273 */;
import javaScriptFlagGetter from "module_27" /* 27 */;

require = arg1;
function configureNext(duration, arg1, arg2) {
  closure_0 = arg1;
  if (!get_VersionDefault.isDisableAnimations) {
    if (closure_4) {
      c1 = false;
      let num = duration.duration;
      if (num == null) {
        num = 0;
      }
      function onAnimationComplete() {
        if (!c1) {
          c1 = true;
          const _clearTimeout = clearTimeout;
          clearTimeout(closure_2);
          if (closure_0 != null) {
            closure_0();
          }
        }
      }
      const timeout = setTimeout(onAnimationComplete, num + 17);
      const fabricUIManager = _mod71.getFabricUIManager();
      let prop;
      if (fabricUIManager != null) {
        prop = fabricUIManager.configureNextLayoutAnimation;
      }
      let fn = arg2;
      if (prop) {
        if (global != null) {
          const nativeFabricUIManager = global.nativeFabricUIManager;
          if (nativeFabricUIManager != null) {
            if (fn == null) {
              fn = () => {

              };
            }
            const result = nativeFabricUIManager.configureNextLayoutAnimation(duration, onAnimationComplete, fn);
          }
        }
      } else {
        const _default = tmp6(68).default;
        let prop1;
        if (_default != null) {
          prop1 = _default.configureNextLayoutAnimation;
        }
        if (prop1) {
          let fn2 = fn;
          if (fn == null) {
            fn2 = () => {

            };
          }
          const result1 = tmp6(68).default.configureNextLayoutAnimation(duration, onAnimationComplete, fn2);
          const _default2 = tmp6(68).default;
        }
      }
    }
  }
}
let closure_4 = javaScriptFlagGetter.isLayoutAnimationEnabled();
let obj = { easeInEaseOut: { duration: 300, create: { type: "easeInEaseOut", property: "opacity" }, update: { type: "easeInEaseOut" }, delete: { type: "easeInEaseOut", property: "opacity" } }, linear: { duration: 500, create: { type: "linear", property: "opacity" }, update: { type: "linear" }, delete: { type: "linear", property: "opacity" } }, spring: { duration: 700, create: { type: "linear", property: "opacity" }, update: { type: "spring", springDamping: 0.4 }, delete: { type: "linear", property: "opacity" } } };
obj = {
  configureNext,
  create: function createLayoutAnimation(duration, type, property) {
    return { duration, create: { type, property }, update: { type }, delete: { type, property } };
  },
  Types: Object.freeze({ spring: "spring", linear: "linear", easeInEaseOut: "easeInEaseOut", easeIn: "easeIn", easeOut: "easeOut", keyboard: "keyboard" }),
  Properties: Object.freeze({ opacity: "opacity", scaleX: "scaleX", scaleY: "scaleY", scaleXY: "scaleXY" }),
  checkConfig() {
    console.error("LayoutAnimation.checkConfig(...) has been disabled.");
  },
  Presets: obj,
  easeInEaseOut: configureNext.bind(null, obj.easeInEaseOut),
  linear: configureNext.bind(null, obj.linear),
  spring: configureNext.bind(null, obj.spring),
  setEnabled: function setLayoutAnimationEnabled(arg0) {

  }
};

export default obj;