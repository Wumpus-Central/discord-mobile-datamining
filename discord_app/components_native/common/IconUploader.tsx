// === Module 10678: IconUploader ===

// Module 10678 (IconUploader)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import AvatarUtils from "AvatarUtils" /* 1402 */;
import Pressables from "Pressables" /* 5916 */;
import GuildIcon from "GuildIcon" /* 5978 */;
import AssetRegistryDefault from "AssetRegistry" /* 10679 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;
let c3, dependencyMap, ref;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
({ View: hasOwnProperty, Image: metroRequire } = react_native);
const UPLOAD_MEDIUM_SIZE = Constants.UPLOAD_MEDIUM_SIZE;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({ uploadIcon: { position: "absolute", right: -7, top: -7 }, avatar: { height: 64, width: 64, borderRadius: 32 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_2;
  let disabled;
  let icon;
  let iconStyle;
  let items1;
  let makeURL;
  let name;
  let onChangeIconPress;
  let onUpload;
  let style;
  let tmp5;
  let tmp7;
  let type;
  let obj = onUpload(576);
  const cResult = obj.c(33);
  ({ disabled, makeURL, type, name, icon, onUpload } = arg0);
  ({ style, iconStyle, onChangeIconPress } = arg0);
  const tmp4 = undefined !== disabled && disabled;
  if (cResult[0] !== makeURL) {
    let fn = makeURL;
    if (undefined === makeURL) {
      fn = () => {

      };
    }
    cResult[0] = makeURL;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  let str = "avatar";
  if (undefined !== type) {
    str = type;
  }
  const tmp6 = closure_11();
  dependencyMap = react.useRef(false);
  if (null == icon) {
    if (cResult[2] === icon) {
      let tmp8;
      if (cResult[3] === tmp5) {
        tmp8 = cResult[4];
      }
      tmp7 = tmp8;
    }
    const tmp5Result = tmp5(icon);
    cResult[2] = icon;
    cResult[3] = tmp5;
    cResult[4] = tmp5Result;
    tmp8 = tmp5Result;
  } else {
    let obj2 = /^data:/;
    tmp7 = icon;
  }
  if (cResult[5] === onChangeIconPress) {
    let tmp10;
    let tmp14;
    if (cResult[6] === onUpload) {
      tmp10 = cResult[7];
    }
    if ("guild" === str) {
      if (null != icon) {
        if (cResult[8] === tmp7) {
          if (cResult[9] === iconStyle) {
            let tmp18;
            if (cResult[10] === name) {
              tmp18 = cResult[11];
            }
            tmp14 = tmp18;
          }
        }
        let obj3 = { style: iconStyle, icon: tmp7, value: name, size: onUpload(5978).GuildIconSizes.XLARGE, animate: true };
        const tmp21 = onChangeIconPress(5978);
        const tmp22 = closure_8(tmp21, obj3);
        cResult[8] = tmp7;
        cResult[9] = iconStyle;
        cResult[10] = name;
        cResult[11] = tmp22;
        tmp18 = tmp22;
      }
    } else {
      let tmp11;
      if (cResult[12] !== tmp7) {
        const tmpResult = onUpload(1402);
        const source = tmpResult.makeSource(tmp7);
        cResult[12] = tmp7;
        cResult[13] = source;
        tmp11 = source;
      } else {
        tmp11 = cResult[13];
      }
      if (cResult[14] === iconStyle) {
        let tmp13;
        if (cResult[15] === tmp6.avatar) {
          tmp13 = cResult[16];
        }
        if (cResult[17] === tmp11) {
          if (cResult[18] === tmp13) {
            tmp14 = cResult[19];
          }
        }
        let obj4 = { style: tmp13, source: tmp11 };
        const tmp17 = closure_8(closure_6, obj4);
        cResult[17] = tmp11;
        cResult[18] = tmp13;
        cResult[19] = tmp17;
        tmp14 = tmp17;
      }
      const items = [tmp6.avatar, iconStyle];
      cResult[14] = iconStyle;
      cResult[15] = tmp6.avatar;
      cResult[16] = items;
      tmp13 = items;
    }
    if (cResult[20] === tmp4) {
      let tmp23;
      if (cResult[21] === tmp6) {
        tmp23 = cResult[22];
      }
      if (cResult[23] === tmp14) {
        let tmp28;
        if (cResult[24] === tmp23) {
          tmp28 = cResult[25];
        }
        let tmp32 = tmp28;
        if (!tmp4) {
          let tmp34;
          const _Symbol = Symbol;
          if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = onUpload(1126).intl;
            const stringResult = intl.string(onUpload(1126).t["MsUY/S"]);
            cResult[26] = stringResult;
            tmp34 = stringResult;
          } else {
            tmp34 = cResult[26];
          }
          if (cResult[27] === tmp10) {
            let tmp36;
            if (cResult[28] === tmp28) {
              tmp36 = cResult[29];
            }
            if (cResult[30] === style) {
              let tmp39;
              if (cResult[31] === tmp36) {
                tmp39 = cResult[32];
              }
              tmp32 = tmp39;
            }
            let obj5 = { style, children: tmp36 };
            const tmp42 = closure_8(closure_5, obj5);
            cResult[30] = style;
            cResult[31] = tmp36;
            cResult[32] = tmp42;
            tmp39 = tmp42;
          }
          let obj6 = { accessibilityRole: "button", accessibilityLabel: tmp34, onPress: tmp10, children: tmp28 };
          const tmp38 = closure_8(onUpload(5916).PressableOpacity, obj6);
          cResult[27] = tmp10;
          cResult[28] = tmp28;
          cResult[29] = tmp38;
          tmp36 = tmp38;
        }
        return tmp32;
      }
      const obj7 = { children: items1 };
      items1 = [tmp14, tmp23];
      const tmp31 = closure_10(closure_9, obj7);
      cResult[23] = tmp14;
      cResult[24] = tmp23;
      cResult[25] = tmp31;
      tmp28 = tmp31;
    }
    let tmp24 = null;
    if (!tmp4) {
      const obj8 = { style: tmp6.uploadIcon, source: onChangeIconPress(10679) };
      tmp24 = closure_8(closure_6, obj8);
    }
    cResult[20] = tmp4;
    cResult[21] = tmp6;
    cResult[22] = tmp24;
    tmp23 = tmp24;
  }
  let closure_0 = _asyncToGenerator(async () => {
    let closure_1;
    let obj2;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let base64;
        c3 = 2;
        if (0 === ref) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0 = tmp;
            base64 = undefined;
            if (tmp4 != null) {
              tmp4();
            }
            if (!ref.current) {
              ref.current = true;
              const obj5 = { size };
              c3 = 1;
              const obj6 = { value: obj2.openImagePicker(obj5), done: false };
              obj2 = onChangeIconPress(closure_2_2[8]);
              return obj6;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          base64 = value.base64;
          if (null != base64) {
            if (closure_0 != null) {
              tmp9(base64);
            }
          }
          ref.current = false;
        }
        c3 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp21) {
        c3 = 3;
        throw tmp21;
      }
    }
  });
  function handleChangeIcon() {
    return closure_0(...arguments);
  }
  cResult[5] = onChangeIconPress;
  cResult[6] = onUpload;
  cResult[7] = handleChangeIcon;
  tmp10 = handleChangeIcon;
}) : ((disabled) => {
  let PressableOpacity;
  let closure_2;
  let fnResult;
  let icon;
  let iconStyle;
  let intl;
  let items;
  let name;
  let obj7;
  let tmp7;
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
  let obj = function _handleChangeIcon2() {
    obj = _asyncToGenerator(async () => {
      let c2;
      let closure_1;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let base64;
          c3 = 2;
          if (0 === ref) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_0 = tmp;
              base64 = undefined;
              if (importDefault != null) {
                importDefault();
              }
              if (!ref.current) {
                ref.current = true;
                const obj5 = { size };
                const obj2 = tmp4(ref[8]);
                ref = 1;
                c3 = 1;
                const obj6 = { value: obj2.openImagePicker(obj5), done: false };
                return obj6;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            base64 = value.base64;
            if (null != base64) {
              if (closure_129_0 != null) {
                tmp9(base64);
              }
            }
            closure_129_2.current = false;
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp21) {
          c3 = 3;
          throw tmp21;
        }
      }
    });
    return obj(...arguments);
  };
  const style = disabled.style;
  const tmp = closure_11();
  dependencyMap = react.useRef(false);
  if (null == icon) {
    fnResult = fn(icon);
  } else {
    obj = /^data:/;
    fnResult = icon;
  }
  if ("guild" === str) {
    const tmp8 = null == icon && null == name;
    if (!tmp8) {
      let obj3 = { style: iconStyle, icon: fnResult, value: name, size: GuildIcon.GuildIconSizes.XLARGE, animate: true };
      const tmp12 = GuildIconDefault;
      tmp7 = closure_8(tmp12, obj3);
    }
  } else {
    const tmp4 = dependencyMap;
    let obj2 = AvatarUtils;
    let obj4 = { style: items, source: obj2.makeSource(fnResult) };
    items = [tmp.avatar, iconStyle];
    tmp7 = closure_8(closure_6, obj4);
  }
  const items1 = [tmp7, ];
  let tmp16 = null;
  if (!flag) {
    let obj5 = { style: tmp.uploadIcon, source: AssetRegistryDefault };
    tmp16 = closure_8(closure_6, obj5);
  }
  items1[1] = tmp16;
  const tmp14Result = closure_10(closure_9, { children: items1 });
  let tmp22 = tmp14Result;
  if (!flag) {
    let obj6 = { style, children: closure_8(PressableOpacity, obj7) };
    obj7 = {
      accessibilityRole: "button",
      accessibilityLabel: intl.string(intl2.t["MsUY/S"]),
      onPress: function handleChangeIcon() {
          return obj(...arguments);
        },
      children: tmp14Result
    };
    PressableOpacity = Pressables.PressableOpacity;
    intl = intl2.intl;
    tmp22 = closure_8(closure_5, obj6);
  }
  return tmp22;
});
const result = size.fileFinishedImporting("components_native/common/IconUploader.tsx");

export default tmp4;