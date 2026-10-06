// === Module 14804: ScanQrCodeSetting ===

// Module 14804 (ScanQrCodeSetting)
import intl2 from "intl" /* 1126 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1615 */;
import NativePermissionConstants from "NativePermissionConstants" /* 5105 */;
import NativePermissionUtilsDefault from "NativePermissionUtils" /* 7288 */;
import QrCodeIcon from "QrCodeIcon" /* 14706 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import module_12 from "module_12" /* 12 */;
import SettingBuilders from "SettingBuilders" /* 11142 */;
import size from "module_2" /* 2 */;

let c1, c3;

const NativePermissionTypes = NativePermissionConstants.NativePermissionTypes;
const debounceResult = module_12.debounce(_asyncToGenerator(async () => {
  let obj4;
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    let c2;
    try {
      c3 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          let CAMERA;
          let closure_0 = tmp;
          c2 = 1;
          const obj3 = MetaQuestUtils;
          if (obj3.isMetaQuest()) {
            CAMERA = NativePermissionTypes.HEADSET_CAMERA;
          } else {
            CAMERA = NativePermissionTypes.CAMERA;
          }
          c1 = 2;
          c3 = 1;
          const obj6 = { value: obj4.requestPermission(CAMERA), done: false };
          obj4 = NativePermissionUtilsDefault;
          return obj6;
        }
      } else {
        if (1 === tmp4) {
          c2 = 0;
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          c3 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          if (value) {
            const obj = closure_128_1(closure_128_2[5]);
            obj.pushLazy(closure_128_0(closure_128_2[7])(closure_128_2[6], closure_128_2.paths));
          }
          c2 = 0;
        }
        c3 = 3;
        return { value: "IconComponent", done: null };
      }
    } catch (tmp18) {
      if (0 === c2) {
        c3 = 3;
        throw tmp18;
      } else {
        c1 = 1;
      }
    }
  }
}), 1000, { leading: true, trailing: false });
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.RC0kJz);
  },
  parent: null,
  IconComponent: QrCodeIcon.QrCodeIcon,
  onPress: debounceResult,
  withArrow: true
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ScanQrCodeSetting.tsx");

export default pressable;