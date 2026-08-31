// === Module 10627: IconUploader ===

// Module 10627 (IconUploader)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getAvatarURL from "getAvatarURL" /* 1431 */;
import PressableBase from "PressableBase" /* 5036 */;
import GuildIconSizes from "GuildIconSizes" /* 5972 */;
import GuildIconSizesDefault from "GuildIconSizes" /* 5972 */;
import registerAssetDefault from "registerAsset" /* 10628 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { UPLOAD_MEDIUM_SIZE } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

require = arg1;
({ View: c5, Image: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, Fragment: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles({ uploadIcon: { position: "absolute", right: -7, top: -7 }, avatar: { height: 64, width: 64, borderRadius: 32 } });
const result = require("set").fileFinishedImporting("components_native/common/IconUploader.tsx");

export default function IconUploader(disabled) {
  let flag = disabled.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let fn = disabled.makeURL;
  if (fn === undefined) {
    fn = function u(icon) {

    };
  }
  let str = disabled.type;
  if (str === undefined) {
    str = "avatar";
  }
  ({ name, icon, onUpload: require, iconStyle, onChangeIconPress: importDefault } = disabled);
  dependencyMap = undefined;
  function _handleChangeIcon(arg0) {
    const self = this;
    const tmp = _handleChangeIcon(function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          if (0 === ref) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp5;
              let base64 = tmp2;
              base64 = undefined;
              if (closure_1_1 != null) {
                closure_1_1();
              }
              if (ref.current) {
                c3 = 3;
              } else {
                ref.current = true;
                obj1 = closure_1_1(ref[6]);
                obj1 = { size: null };
                obj1[0] = closure_1_7;
                c3 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = obj1.openImagePicker(obj1);
                return obj2;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            base64 = arg1.base64;
            if (null != base64) {
              if (base64 != null) {
                tmp10(base64);
              }
            }
            ref.current = false;
          }
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp22) {
          c3 = tmp;
          throw tmp22;
        }
      }
    });
    closure_3 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback2();
  dependencyMap = React.useRef(false);
  if (null == icon) {
    let fnResult = fn(icon);
  } else {
    let obj = /^data:/;
    fnResult = icon;
  }
  if ("guild" === str) {
    if (!tmp8) {
      obj = { style: null, icon: null, value: null, size: null, animate: true };
      obj[0] = iconStyle;
      obj[1] = fnResult;
      obj[2] = name;
      obj[3] = GuildIconSizes.GuildIconSizes.XLARGE;
      let tmp7 = callback(GuildIconSizesDefault, obj);
      const tmp12 = GuildIconSizesDefault;
    }
    tmp8 = null == icon && null == name;
  } else {
    obj1 = getAvatarURL;
    obj = { style: null, source: null };
    const items = [tmp.avatar, iconStyle];
    obj[0] = items;
    obj[1] = obj1.makeSource(fnResult);
    tmp7 = callback(closure_6, obj);
  }
  const items1 = [tmp7, ];
  let tmp16 = null;
  if (!flag) {
    obj1 = { style: null, source: null };
    obj1[0] = tmp.uploadIcon;
    obj1[1] = registerAssetDefault;
    tmp16 = callback(closure_6, obj1);
  }
  items1[1] = tmp16;
  const tmp14Result = closure_10(closure_9, { children: items1 });
  let tmp22 = tmp14Result;
  if (!flag) {
    let obj2 = { style: null, children: null };
    obj2[0] = disabled.style;
    const obj3 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
    const intl = getSystemLocale.intl;
    obj3[1] = intl.string(getSystemLocale.t["MsUY/S"]);
    obj3[2] = function handleChangeIcon() {
      const self = this;
      const apply = _handleChangeIcon.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj3[3] = tmp14Result;
    obj2[1] = callback(PressableBase.PressableOpacity, obj3);
    tmp22 = callback(closure_5, obj2);
  }
  return tmp22;
};