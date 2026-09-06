// discord_app/components_native/common/IconUploader.tsx
import util from "../../intl/index.native.tsx";
import AvatarUtils from "../../utils/AvatarUtils.tsx";
import Pressables from "../../design/void/Pressables/native/Pressables.tsx";
import GuildIcon from "../../modules/guild/native/GuildIcon.tsx";
import _modDef10929 from "../../../_runtime/metro/10929__.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../_runtime/metro/00019__.js";

const GuildIconDefault = GuildIcon;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
const UPLOAD_MEDIUM_SIZE = fn(1074).UPLOAD_MEDIUM_SIZE;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
let closure_11 = createStyles.createStyles({
  uploadIcon: { position: "absolute", right: -7, top: -7 },
  avatar: { height: 64, width: 64, borderRadius: 32 },
});
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/IconUploader.tsx");

export default function IconUploader(disabled) {
  let flag = disabled.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let fn = disabled.makeURL;
  if (fn === undefined) {
    fn = function u(icon) {};
  }
  let str = disabled.type;
  if (str === undefined) {
    str = "avatar";
  }
  ({ name, icon, onUpload: require, iconStyle, onChangeIconPress: importDefault } = disabled);
  closure_3 = async function _handleChangeIcon(arg0, value) {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
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
              let obj1 = tmp5(c2[6]);
              obj1 = { size };
              c2 = 1;
              c3 = 1;
              const obj2 = { value: obj1.openImagePicker(obj1), done: false };
              return obj2;
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
        obj = { value, done: true };
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
    let obj = /^data:/;
    fnResult = icon;
  }
  if ("guild" === str) {
    if (!tmp8) {
      obj = { style: iconStyle, icon: fnResult, value: name, size: GuildIcon.GuildIconSizes.XLARGE, animate: true };
      let tmp7 = closure_8(GuildIconDefault, obj);
    }
    tmp8 = null == icon && null == name;
  } else {
    let obj1 = AvatarUtils;
    obj = { style: null, source: null };
    const items = [tmp.avatar, iconStyle];
    obj.style = items;
    obj.source = obj1.makeSource(fnResult);
    tmp7 = closure_8(closure_6, obj);
  }
  const items1 = [tmp7];
  let tmp16 = null;
  if (!flag) {
    obj1 = { style: tmp.uploadIcon, source: _modDef10929 };
    tmp16 = closure_8(closure_6, obj1);
  }
  items1[1] = tmp16;
  const tmp14Result = closure_10(closure_9, { children: items1 });
  let tmp22 = tmp14Result;
  if (!flag) {
    let obj2 = { style: disabled.style, children: null };
    const obj3 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
    const intl = util.intl;
    obj3.accessibilityLabel = intl.string(util.t["MsUY/S"]);
    obj3.onPress = function handleChangeIcon() {
      const self = this;
      const apply = closure_3.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj3.children = tmp14Result;
    obj2.children = closure_8(Pressables.PressableOpacity, obj3);
    tmp22 = closure_8(closure_5, obj2);
  }
  return tmp22;
}
