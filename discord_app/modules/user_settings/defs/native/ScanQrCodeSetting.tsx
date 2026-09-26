// === Module 14516: ScanQrCodeSetting ===

// Module 14516 (ScanQrCodeSetting)
import util from "util" /* 1115 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1610 */;
import NativePermissionUtilsDefault from "NativePermissionUtils" /* 5451 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
const NativePermissionTypes = fn(5045).NativePermissionTypes;
const apply = fn(12);
const SettingBuilders = fn(11006);
const debounceResult = apply.debounce(asyncGeneratorStep(async () => {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_0 = tmp3;
          c2 = 1;
          let requestPermission = NativePermissionTypes;
          if (obj3.isMetaQuest()) {
            let CAMERA = requestPermission.HEADSET_CAMERA;
          } else {
            CAMERA = requestPermission.CAMERA;
          }
          obj3 = MetaQuestUtils;
          requestPermission = NativePermissionUtilsDefault.requestPermission;
          const permission = requestPermission(CAMERA);
          c1 = 2;
          c3 = 1;
        }
      } else {
        if (1 === tmp7) {
          c2 = 0;
          c3 = 3;
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 !== 2) {
          if (value) {
            closure_128_1(closure_128_2[5]).pushLazy(closure_128_0(closure_128_2[7])(closure_128_2[6], closure_128_2.paths));
            const obj = closure_128_1(closure_128_2[5]);
          }
          c2 = 0;
        }
        c2 = 0;
        c3 = 3;
        const obj5 = { value, done: true };
        return obj5;
      }
    } catch (tmp22) {
      if (tmp4 === c2) {
        c3 = tmp2;
        throw tmp22;
      } else {
        c1 = tmp;
      }
    }
  }
}), 1000, { leading: true, trailing: false });
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.RC0kJz);
  },
  parent: null,
  IconComponent: fn(14419).QrCodeIcon,
  onPress: apply.debounce(asyncGeneratorStep(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0 = tmp3;
            c2 = 1;
            let requestPermission = NativePermissionTypes;
            if (obj3.isMetaQuest()) {
              let CAMERA = requestPermission.HEADSET_CAMERA;
            } else {
              CAMERA = requestPermission.CAMERA;
            }
            obj3 = MetaQuestUtils;
            requestPermission = NativePermissionUtilsDefault.requestPermission;
            const permission = requestPermission(CAMERA);
            c1 = 2;
            c3 = 1;
          }
        } else {
          if (1 === tmp7) {
            c2 = 0;
            c3 = 3;
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            if (value) {
              closure_128_1(closure_128_2[5]).pushLazy(closure_128_0(closure_128_2[7])(closure_128_2[6], closure_128_2.paths));
              const obj = closure_128_1(closure_128_2[5]);
            }
            c2 = 0;
          }
          c2 = 0;
          c3 = 3;
          const obj5 = { value, done: true };
          return obj5;
        }
      } catch (tmp22) {
        if (tmp4 === c2) {
          c3 = tmp2;
          throw tmp22;
        } else {
          c1 = tmp;
        }
      }
    }
  }), 1000, { leading: true, trailing: false }),
  withArrow: true
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ScanQrCodeSetting.tsx");

export default pressable;