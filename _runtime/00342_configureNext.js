// === Module 342: configureNext ===

// Module 342 (configureNext)
import javaScriptFlagGetterAll from "javaScriptFlagGetter" /* 27 */;
import get_VersionDefault from "get Version" /* 273 */;

const require = arg1;
function configureNext(duration) {
  const _global = arg1;
  if (!get_VersionDefault.isDisableAnimations) {
    if (closure_4) {
      const _require = false;
      let num = duration.duration;
      if (num == null) {
        num = 0;
      }
      function onAnimationComplete() {
        if (!c1) {
          c1 = true;
          const _clearTimeout = clearTimeout;
          clearTimeout(closure_2);
          if (callback != null) {
            callback();
          }
        }
      }
      importDefault = setTimeout(onAnimationComplete, num + 17);
      const fabricUIManager = _require(71).getFabricUIManager();
      let prop;
      if (fabricUIManager != null) {
        prop = fabricUIManager.configureNextLayoutAnimation;
      }
      let fn = arg2;
      if (prop) {
        if (_global != null) {
          const nativeFabricUIManager = _global.nativeFabricUIManager;
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
      const obj = _require(71);
    }
  }
}
let closure_4 = javaScriptFlagGetterAll.isLayoutAnimationEnabled();
let obj = { easeInEaseOut: { duration: 300, create: { type: "easeInEaseOut", property: "opacity" }, update: { type: "easeInEaseOut" }, delete: { type: "easeInEaseOut", property: "opacity" } }, linear: { duration: 500, create: { type: "linear", property: "opacity" }, update: { type: "linear" }, delete: { type: "linear", property: "opacity" } }, spring: { duration: 700, create: { type: "linear", property: "opacity" }, update: { type: "spring", springDamping: 0.4 }, delete: { type: "linear", property: "opacity" } } };
obj = {
  configureNext,
  create: function createLayoutAnimation(duration, type, property) {
    obj = { duration, create: obj, update: obj, delete: obj1 };
    obj = { type, property };
    obj = { type };
    return obj;
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