// === Module 6691: ? ===

// Module 6691
import _mod6692 from "module_6692" /* 6692 */;
import react_native from "react-native" /* 17 */;

let hasOwnProperty;

const self = this;
let tmp = this && self.__createBinding;
if (!tmp) {
  let _Object = Object;
  tmp = Object.create ? ((arg0, arg1, arg2, arg3) => {
    closure_0 = arg1;
    closure_1 = arg2;
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    const obj = {
      enumerable: true,
      get() {
        return closure_0[closure_1];
      }
    };
    Object.defineProperty(arg0, tmp, obj);
  }) : ((arg0, arg1, arg2, arg3) => {
    let tmp = arg3;
    if (undefined === arg3) {
      tmp = arg2;
    }
    arg0[tmp] = arg1[arg2];
  });
}
let closure_0 = tmp;
let tmp3 = self && self.__setModuleDefault;
if (!tmp3) {
  const _Object2 = Object;
  tmp3 = Object.create ? ((arg0, value) => {
    const obj = { enumerable: true, value };
    Object.defineProperty(arg0, "default", obj);
  }) : ((arg0, arg1) => {
    arg0.default = arg1;
  });
}
let closure_1 = tmp3;
const tmp5 = self && self.__importStar || ((__esModule) => {
  const tmp = __esModule;
  if (tmp) {
    if (__esModule.__esModule) {
      return __esModule;
    }
  }
  const obj = {};
  if (null != __esModule) {
    for (const key10009 in __esModule) {
      let callResult = "default" !== key10009;
      if (callResult) {
        let _Object = Object;
        hasOwnProperty = Object.prototype.hasOwnProperty;
        callResult = hasOwnProperty.call(__esModule, key10009);
      }
      if (!callResult) {
        continue;
      } else {
        let tmp6 = closure_0(obj, __esModule, key10009);
        continue;
      }
      continue;
    }
  }
  closure_1(obj, __esModule);
  return obj;
});
const module_6692 = tmp5(_mod6692);

export const Clipboard = {
  getString() {
    const _default = module_6692.default;
    return _default.getString();
  },
  getStrings() {
    const _default = module_6692.default;
    return _default.getStrings();
  },
  getImagePNG() {
    const _default = module_6692.default;
    return _default.getImagePNG();
  },
  getImageJPG() {
    const _default = module_6692.default;
    return _default.getImageJPG();
  },
  setImage(arg0) {
    if ("ios" === react_native.Platform.OS) {
      const _default = module_6692.default;
      _default.setImage(arg0);
    }
  },
  getImage() {
    const _default = module_6692.default;
    return _default.getImage();
  },
  setString(arg0) {
    const _default = module_6692.default;
    _default.setString(arg0);
  },
  setStrings(arg0) {
    const _default = module_6692.default;
    _default.setStrings(arg0);
  },
  hasString() {
    const _default = module_6692.default;
    return _default.hasString();
  },
  hasImage() {
    const _default = module_6692.default;
    return _default.hasImage();
  },
  hasURL() {
    if ("ios" === react_native.Platform.OS) {
      const _default = module_6692.default;
      return _default.hasURL();
    }
  },
  hasNumber() {
    if ("ios" === react_native.Platform.OS) {
      const _default = module_6692.default;
      return _default.hasNumber();
    }
  },
  hasWebURL() {
    if ("ios" === react_native.Platform.OS) {
      const _default = module_6692.default;
      return _default.hasWebURL();
    }
  },
  addListener(arg0) {
    return module_6692.addListener(arg0);
  },
  removeAllListeners() {
    module_6692.removeAllListeners();
  }
};