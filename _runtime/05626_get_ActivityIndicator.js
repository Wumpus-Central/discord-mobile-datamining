// _runtime/05626_get_ActivityIndicator.js
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
            let tmp8 = key10009;
            let tmp9 = "default" !== key10009;
            if (!tmp9) {
              if (!tmp9) {
                continue;
              } else {
                let tmp5 = self2;
                let tmp6 = self2(obj, arg0, key10009);
                continue;
              }
              continue;
            } else {
              let _Object = Object;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10009);
              } else {
                hasOwnPropertyResult = call(arg0, key10009);
              }
              let tmp4 = hasOwnPropertyResult;
            }
          }
        }
        __setModuleDefault(obj, __esModule);
        return obj;
      };
    }
    const _Object3 = Object;
    exports.Clipboard = undefined;
    let closure_2 = require("get ActivityIndicator");
    let closure_3 = fn(require("addListener"));
    let obj = { getString: null, getStrings: null, getImagePNG: null, getImageJPG: null, setImage: null, getImage: null, setString: null, setStrings: null, hasString: null, hasImage: null, hasURL: null, hasNumber: null, hasWebURL: null, addListener: null, removeAllListeners: null };
    obj[0] = function getString() {
      return closure_3.default.getString();
    };
    obj[1] = function getStrings() {
      return closure_3.default.getStrings();
    };
    obj[2] = function getImagePNG() {
      return closure_3.default.getImagePNG();
    };
    obj[3] = function getImageJPG() {
      return closure_3.default.getImageJPG();
    };
    obj[4] = function setImage(arg0) {
      if ("ios" === Platform.Platform.OS) {
        closure_3.default.setImage(arg0);
        const _default = closure_3.default;
      }
    };
    obj[5] = function getImage() {
      return closure_3.default.getImage();
    };
    obj[6] = function setString(arg0) {
      closure_3.default.setString(arg0);
    };
    obj[7] = function setStrings(arg0) {
      closure_3.default.setStrings(arg0);
    };
    obj[8] = function hasString() {
      return closure_3.default.hasString();
    };
    obj[9] = function hasImage() {
      return closure_3.default.hasImage();
    };
    obj[10] = function hasURL() {
      if ("ios" === Platform.Platform.OS) {
        return closure_3.default.hasURL();
      }
    };
    obj[11] = function hasNumber() {
      if ("ios" === Platform.Platform.OS) {
        return closure_3.default.hasNumber();
      }
    };
    obj[12] = function hasWebURL() {
      if ("ios" === Platform.Platform.OS) {
        return closure_3.default.hasWebURL();
      }
    };
    obj[13] = function addListener(arg0) {
      return closure_3.addListener(arg0);
    };
    obj[14] = function removeAllListeners() {
      closure_3.removeAllListeners();
    };
    exports.Clipboard = obj;
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}