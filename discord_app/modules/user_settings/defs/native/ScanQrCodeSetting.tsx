// === Module 14979: ScanQrCodeSetting ===

// Module 14979 (ScanQrCodeSetting)
import util from "util" /* 1114 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1608 */;
import NativePermissionUtilsDefault from "NativePermissionUtils" /* 5139 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
const NativePermissionTypes = fn(4770).NativePermissionTypes;
let apply = fn(12);
const SettingBuilders = fn(11468);
apply = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.RC0kJz);
  },
  parent: null,
  IconComponent: fn(14882).QrCodeIcon,
  onPress: apply.debounce(asyncGeneratorStep(async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
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
              obj = closure_128_1(closure_128_2[5]);
              obj.pushLazy(closure_128_0(closure_128_2[7])(closure_128_2[6], closure_128_2.paths));
            }
            c2 = 0;
          }
          c2 = 0;
          c3 = 3;
          const obj1 = { value, done: true };
          return obj1;
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
};
apply = SettingBuilders.createPressable(apply);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ScanQrCodeSetting.tsx");

export default apply;