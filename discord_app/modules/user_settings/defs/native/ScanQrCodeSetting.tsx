// === Module 14336: pressable ===

// Module 14336 (pressable)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import { NativePermissionTypes } from "NativePermissionStatus" /* 4839 */;
import apply from "apply" /* 12 */;
import importDefaultResult from "asyncGeneratorStep" /* 5 */;
import createToggle from "createToggle" /* 10669 */;

require = arg1;
apply = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.RC0kJz);
  },
  parent: null,
  IconComponent: require("QrCodeIcon").QrCodeIcon,
  onPress: apply.debounce(importDefaultResult(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = tmp3;
            let paths = 1;
            let requestPermission = c3;
            if (obj3.isMetaQuest()) {
              let CAMERA = requestPermission.HEADSET_CAMERA;
            } else {
              CAMERA = requestPermission.CAMERA;
            }
            obj3 = closure_1_0(paths[3]);
            requestPermission = v0(paths[4]).requestPermission;
            const permission = requestPermission(CAMERA);
            v0 = 2;
            c3 = 1;
            const tmp20 = v0(paths[4]);
          }
        } else {
          if (1 === tmp7) {
            paths = 0;
            c3 = 3;
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            if (arg1) {
              obj = v0(paths[5]);
              obj.pushLazy(callback(paths[7])(paths[6], paths.paths));
            }
            paths = 0;
          }
          paths = 0;
          c3 = 3;
          obj1 = { value: null, done: true };
          obj1[0] = arg1;
          return obj1;
        }
      } catch (tmp22) {
        if (tmp4 === paths) {
          c3 = tmp2;
          throw tmp22;
        } else {
          v0 = tmp;
        }
      }
    }
  }), 1000, { leading: true, trailing: false }),
  withArrow: true
};
apply = createToggle.createPressable(apply);
const debounceResult = apply.debounce(importDefaultResult(function*() {
  if (c3 === 2) {
    c3 = 3;
    HermesBuiltin.throwTypeError();
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw arg1;
    } else if (arg0 === 2) {
      let obj = { value: null, done: true };
      obj[0] = arg1;
      return obj;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
    }
  } else {
    try {
      c3 = 2;
      if (0 === v0) {
        if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          const callback = tmp3;
          let paths = 1;
          let requestPermission = c3;
          if (obj3.isMetaQuest()) {
            let CAMERA = requestPermission.HEADSET_CAMERA;
          } else {
            CAMERA = requestPermission.CAMERA;
          }
          obj3 = closure_1_0(paths[3]);
          requestPermission = v0(paths[4]).requestPermission;
          const permission = requestPermission(CAMERA);
          v0 = 2;
          c3 = 1;
          const tmp20 = v0(paths[4]);
        }
      } else {
        if (1 === tmp7) {
          paths = 0;
          c3 = 3;
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          if (arg1) {
            obj = v0(paths[5]);
            obj.pushLazy(callback(paths[7])(paths[6], paths.paths));
          }
          paths = 0;
        }
        paths = 0;
        c3 = 3;
        obj1 = { value: null, done: true };
        obj1[0] = arg1;
        return obj1;
      }
    } catch (tmp22) {
      if (tmp4 === paths) {
        c3 = tmp2;
        throw tmp22;
      } else {
        v0 = tmp;
      }
    }
  }
}), 1000, { leading: true, trailing: false });
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/ScanQrCodeSetting.tsx");

export default apply;