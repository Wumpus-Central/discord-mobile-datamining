// === Module 9610: IconUploader ===

// Module 9610 (IconUploader)
import util from "util" /* 1126 */;
import AvatarUtils from "AvatarUtils" /* 1415 */;
import FastImageDefault from "FastImage" /* 6163 */;
import GuildIcon from "GuildIcon" /* 6165 */;
import Pressables from "Pressables" /* 6191 */;
import _modDef9611 from "module_9611" /* 9611 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;

require = fn;
const View = fn(17).View;
const UPLOAD_MEDIUM_SIZE = fn(1085).UPLOAD_MEDIUM_SIZE;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5091);
let closure_10 = createStyles.createStyles({ uploadIcon: { position: "absolute", right: -7, top: -7 }, avatar: { height: 64, width: 64, borderRadius: 32 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/IconUploader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function IconUploader(arg0) {
  const cResult = require("c").c(33);
  ({ disabled, makeURL, type, name, icon, onUpload } = arg0);
  _require = onUpload;
  ({ style, iconStyle, onChangeIconPress } = arg0);
  if (cResult[0] !== makeURL) {
    let fn = makeURL;
    if (undefined === makeURL) {
      fn = () => {

      };
    }
    cResult[0] = makeURL;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  let str = "avatar";
  if (undefined !== type) {
    str = type;
  }
  const tmp6 = closure_10();
  dependencyMap = noop.useRef(false);
  if (null != icon) {
    if (obj2.test(icon)) {
      if (cResult[5] === onChangeIconPress) {
        if (cResult[6] === onUpload) {
          let tmp11 = cResult[7];
        }
        if ("guild" === str) {
          if (cResult[8] === icon) {
            if (cResult[9] === iconStyle) {
            }
          }
          let obj3 = { style: iconStyle, icon, value: name, size: tmp(6165).GuildIconSizes.XLARGE, animate: true };
          const tmp24 = closure_7(onChangeIconPress(6165), obj3);
          cResult[8] = icon;
          cResult[9] = iconStyle;
          cResult[10] = name;
          cResult[11] = tmp24;
          const tmp23 = onChangeIconPress(6165);
        } else {
          if (cResult[12] !== icon) {
            const source = tmp(1415).makeSource(icon);
            cResult[12] = icon;
            cResult[13] = source;
            let tmp13 = source;
            const tmpResult = tmp(1415);
          } else {
            tmp13 = cResult[13];
          }
          if (cResult[14] === iconStyle) {
            if (cResult[15] === tmp6.avatar) {
              let tmp15 = cResult[16];
            }
            if (cResult[17] === tmp13) {
              if (cResult[18] === tmp15) {
                let tmp16 = cResult[19];
              }
            }
            let obj4 = { style: tmp15, source: tmp13 };
            const tmp19 = closure_7(onChangeIconPress(6163), obj4);
            cResult[17] = tmp13;
            cResult[18] = tmp15;
            cResult[19] = tmp19;
            tmp16 = tmp19;
          }
          const items = [tmp6.avatar, iconStyle];
          cResult[14] = iconStyle;
          cResult[15] = tmp6.avatar;
          cResult[16] = items;
          tmp15 = items;
        }
        if (cResult[20] === tmp4) {
          if (cResult[21] === tmp6) {
            let tmp26 = cResult[22];
          }
          if (cResult[23] === tmp16) {
            if (cResult[24] === tmp26) {
              let tmp31 = cResult[25];
            }
            if (tmp4) {
              return tmp31;
            } else {
              const _Symbol = Symbol;
              if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = tmp(1126).intl;
                const stringResult = intl.string(tmp(1126).t["MsUY/S"]);
                cResult[26] = stringResult;
                let tmp37 = stringResult;
              } else {
                tmp37 = cResult[26];
              }
              if (cResult[27] === tmp11) {
                if (cResult[28] === tmp31) {
                  let tmp39 = cResult[29];
                }
                if (cResult[30] === style) {
                }
                let obj5 = { style, children: tmp39 };
                const tmp45 = closure_7(View, obj5);
                cResult[30] = style;
                cResult[31] = tmp39;
                cResult[32] = tmp45;
              }
              let obj6 = { accessibilityRole: "button", accessibilityLabel: tmp37, onPress: tmp11, children: tmp31 };
              const tmp41 = closure_7(tmp(6191).PressableOpacity, obj6);
              cResult[27] = tmp11;
              cResult[28] = tmp31;
              cResult[29] = tmp41;
              tmp39 = tmp41;
            }
          }
          const obj7 = { children: null };
          const items1 = [tmp16, tmp26];
          obj7.children = items1;
          const tmp34 = closure_9(closure_8, obj7);
          cResult[23] = tmp16;
          cResult[24] = tmp26;
          cResult[25] = tmp34;
          tmp31 = tmp34;
        }
        let tmp27 = null;
        if (!tmp4) {
          const obj8 = { style: tmp6.uploadIcon, source: onChangeIconPress(9611) };
          tmp27 = closure_7(onChangeIconPress(6163), obj8);
          const tmp30 = onChangeIconPress(6163);
        }
        cResult[20] = tmp4;
        cResult[21] = tmp6;
        cResult[22] = tmp27;
        tmp26 = tmp27;
      }
      _require = asyncGeneratorStep(async () => {
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
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
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
                closure_0 = tmp2;
                let base64;
                if (tmp5 != null) {
                  tmp5();
                }
                if (ref.current) {
                  c3 = 3;
                } else {
                  ref.current = true;
                  const obj5 = { size };
                  c3 = 1;
                  const obj6 = { value: onChangeIconPress(1[8]).openImagePicker(obj5), done: false };
                  return obj6;
                }
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 !== 2) {
              base64 = value.base64;
              if (null != base64) {
                if (closure_0 != null) {
                  tmp10(base64);
                }
              }
              ref.current = false;
            }
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } catch (tmp22) {
            c3 = tmp;
            throw tmp22;
          }
        }
      });
      function handleChangeIcon() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      cResult[5] = onChangeIconPress;
      cResult[6] = onUpload;
      cResult[7] = handleChangeIcon;
      tmp11 = handleChangeIcon;
    }
    obj2 = /^data:/;
  }
  if (cResult[2] === icon) {
  }
  const tmp5Result = tmp5(icon);
  cResult[2] = icon;
  cResult[3] = tmp5;
  cResult[4] = tmp5Result;
  let obj = require("c");
}) : (function IconUploader(disabled) {
  let flag = disabled.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let fn = disabled.makeURL;
  if (fn === undefined) {
    fn = function h(icon) {

    };
  }
  let str = disabled.type;
  if (str === undefined) {
    str = "avatar";
  }
  ({ name, icon, onUpload: require, iconStyle, onChangeIconPress: importDefault } = disabled);
  closure_3 = async function _handleChangeIcon2() {
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
        return { value: "IconComponent", done: null };
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
              const obj6 = { value: tmp5(c2[8]).openImagePicker(obj5), done: false };
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
    let obj5 = { style: tmp.uploadIcon, source: _modDef9611 };
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
});