// _runtime/metro/07193__.js
import _mod17 from "00017__.js";
import _mod7194 from "07194__.js";

const self = this;
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (self2) {
  let __setModuleDefault = self;
  if (self) {
    __setModuleDefault = self.__setModuleDefault;
  }
  if (__setModuleDefault) {
    let fn = self;
    if (self) {
      fn = self.__importStar;
    }
    if (!fn) {
      fn = (__esModule) => {
        if (__esModule) {
          if (__esModule.__esModule) {
            return __esModule;
          }
        }
        const obj = {};
        if (null != __esModule) {
          for (const key10009 in arg0) {
            let tmp9 = "default" !== key10009;
            if (!tmp9) {
              if (!tmp9) {
                continue;
              } else {
                let tmp6 = self2(obj, arg0, key10009);
                continue;
              }
              continue;
            } else {
              let _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10009);
              } else {
                hasOwnPropertyResult = call(arg0, key10009);
              }
            }
          }
        }
        __setModuleDefault(obj, __esModule);
        return obj;
      };
    }
    const _Object3 = Object;
    exports.Clipboard = undefined;
    const Platform = _mod17;
    let closure_3 = fn(_mod7194);
    let obj = {
      getString() {
        return closure_3.default.getString();
      },
      getStrings() {
        return closure_3.default.getStrings();
      },
      getImagePNG() {
        return closure_3.default.getImagePNG();
      },
      getImageJPG() {
        return closure_3.default.getImageJPG();
      },
      setImage(arg0) {
        if ("ios" === Platform.Platform.OS) {
          closure_3.default.setImage(arg0);
          const _default = closure_3.default;
        }
      },
      getImage() {
        return closure_3.default.getImage();
      },
      setString(arg0) {
        closure_3.default.setString(arg0);
      },
      setStrings(arg0) {
        closure_3.default.setStrings(arg0);
      },
      hasString() {
        return closure_3.default.hasString();
      },
      hasImage() {
        return closure_3.default.hasImage();
      },
      hasURL() {
        if ("ios" === Platform.Platform.OS) {
          return closure_3.default.hasURL();
        }
      },
      hasNumber() {
        if ("ios" === Platform.Platform.OS) {
          return closure_3.default.hasNumber();
        }
      },
      hasWebURL() {
        if ("ios" === Platform.Platform.OS) {
          return closure_3.default.hasWebURL();
        }
      },
      addListener(arg0) {
        return closure_3.addListener(arg0);
      },
      removeAllListeners() {
        closure_3.removeAllListeners();
      },
    };
    exports.Clipboard = obj;
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}
