// === Module 11280: IconUploader ===

// Module 11280 (IconUploader)
import util from "util" /* 1115 */;
import AvatarUtils from "AvatarUtils" /* 1397 */;
import Pressables from "Pressables" /* 5427 */;
import GuildIcon from "GuildIcon" /* 5889 */;
import _modDef11281 from "module_11281" /* 11281 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const GuildIconDefault = GuildIcon;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
const UPLOAD_MEDIUM_SIZE = fn(1074).UPLOAD_MEDIUM_SIZE;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4829);
let closure_11 = createStyles.createStyles({ uploadIcon: { position: "absolute", right: -7, top: -7 }, avatar: { height: 64, width: 64, borderRadius: 32 } });
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/IconUploader.tsx");

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
  const tmp = closure_11();
  dependencyMap = noop.useRef(false);
  if (null == icon) {
    let fnResult = fn(icon);
  } else {
    fnResult = icon;
  }
  if ("guild" === str) {
    if (!tmp8) {
      let obj3 = { style: iconStyle, icon: fnResult, value: name, size: GuildIcon.GuildIconSizes.XLARGE, animate: true };
      let tmp7 = closure_8(GuildIconDefault, obj3);
    }
    tmp8 = null == icon && null == name;
  } else {
    let obj4 = { style: null, source: null };
    const items = [tmp.avatar, iconStyle];
    obj4.style = items;
    obj4.source = AvatarUtils.makeSource(fnResult);
    tmp7 = closure_8(closure_6, obj4);
  }
  const items1 = [tmp7, ];
  let tmp16 = null;
  if (!flag) {
    let obj5 = { style: tmp.uploadIcon, source: _modDef11281 };
    tmp16 = closure_8(closure_6, obj5);
  }
  items1[1] = tmp16;
  const tmp14Result = closure_10(closure_9, { children: items1 });
  let tmp22 = tmp14Result;
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
    obj7.children = tmp14Result;
    obj6.children = closure_8(Pressables.PressableOpacity, obj7);
    tmp22 = closure_8(closure_5, obj6);
  }
  return tmp22;
};