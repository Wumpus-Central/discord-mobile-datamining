// === Module 10127: IconUploader ===

// Module 10127 (IconUploader)
import util from "util" /* 1114 */;
import AvatarUtils from "AvatarUtils" /* 1410 */;
import FastImageDefault from "FastImage" /* 5712 */;
import GuildIcon from "GuildIcon" /* 6951 */;
import Pressables from "Pressables" /* 6974 */;
import _modDef10128 from "module_10128" /* 10128 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const GuildIconDefault = GuildIcon;

require = fn;
const View = fn(17).View;
const UPLOAD_MEDIUM_SIZE = fn(1072).UPLOAD_MEDIUM_SIZE;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5009);
let closure_10 = createStyles.createStyles({ uploadIcon: { position: "absolute", right: -7, top: -7 }, avatar: { height: 64, width: 64, borderRadius: 32 } });
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/IconUploader.tsx");

export default function IconUploader(disabled) {
  let flag = disabled.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let fn = disabled.makeURL;
  if (fn === undefined) {
    fn = function y(icon) {

    };
  }
  let str = disabled.type;
  if (str === undefined) {
    str = "avatar";
  }
  ({ name, icon, onUpload: require, iconStyle, onChangeIconPress: importDefault } = disabled);
  closure_3 = async function _handleChangeIcon() {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0 = tmp2;
            let base64;
            if (importDefault != null) {
              importDefault();
            }
            if (ref.current) {
              c3 = 3;
            } else {
              ref.current = true;
              const obj5 = { size };
              c2 = 1;
              c3 = 1;
              const obj6 = { value: tmp5(c2[6]).openImagePicker(obj5), done: false };
              return obj6;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 !== 2) {
          base64 = value.base64;
          if (null != base64) {
            if (closure_129_0 != null) {
              tmp10(base64);
            }
          }
          closure_129_2.current = false;
        }
        c3 = 3;
        const obj = { value, done: true };
        return obj;
      } catch (tmp22) {
        c3 = tmp;
        throw tmp22;
      }
    }
  };
  const tmp = closure_10();
  dependencyMap = noop.useRef(false);
  if (null == icon) {
    let fnResult = fn(icon);
  } else {
    fnResult = icon;
  }
  if ("guild" === str) {
    if (!tmp9) {
      let obj3 = { style: iconStyle, icon: fnResult, value: name, size: GuildIcon.GuildIconSizes.XLARGE, animate: true };
      let tmp8 = closure_7(GuildIconDefault, obj3);
    }
    tmp9 = null == icon && null == name;
  } else {
    const source = AvatarUtils.makeSource(fnResult);
    let obj4 = { style: null, source: null };
    const items = [tmp.avatar, iconStyle];
    obj4.style = items;
    obj4.source = source;
    tmp8 = closure_7(FastImageDefault, obj4);
  }
  const items1 = [tmp8, ];
  let tmp17 = null;
  if (!flag) {
    let obj5 = { style: tmp.uploadIcon, source: _modDef10128 };
    tmp17 = closure_7(FastImageDefault, obj5);
  }
  items1[1] = tmp17;
  const tmp15Result = closure_9(closure_8, { children: items1 });
  let tmp23 = tmp15Result;
  if (!flag) {
    let obj6 = { style: disabled.style, children: null };
    const obj7 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
    const intl = util.intl;
    obj7.accessibilityLabel = intl.string(util.t["MsUY/S"]);
    obj7.onPress = function handleChangeIcon() {
      const self = this;
      const apply = closure_3.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj7.children = tmp15Result;
    obj6.children = closure_7(Pressables.PressableOpacity, obj7);
    tmp23 = closure_7(View, obj6);
  }
  return tmp23;
};