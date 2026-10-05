// discord_app/components_native/common/IconUploader.tsx
import util from "../../intl/index.native.tsx";
import AvatarUtils from "../../utils/AvatarUtils.tsx";
import Pressables from "../../design/void/Pressables/native/Pressables.tsx";
import GuildIcon from "../../modules/guild/native/GuildIcon.tsx";
import _modDef10666 from "../../../_runtime/metro/10666__.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../_runtime/metro/00019__.js";

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
const UPLOAD_MEDIUM_SIZE = fn(1085).UPLOAD_MEDIUM_SIZE;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4890);
let closure_11 = createStyles.createStyles({
  uploadIcon: { position: "absolute", right: -7, top: -7 },
  avatar: { height: 64, width: 64, borderRadius: 32 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/IconUploader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = require("c").c(33);
      ({ disabled, makeURL, type, name, icon, onUpload } = arg0);
      _require = onUpload;
      ({ style, iconStyle, onChangeIconPress } = arg0);
      if (cResult[0] !== makeURL) {
        let fn = makeURL;
        if (undefined === makeURL) {
          fn = () => {};
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
      const tmp6 = closure_11();
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
              let obj3 = { style: iconStyle, icon, value: name, size: tmp(5971).GuildIconSizes.XLARGE, animate: true };
              const tmp24 = closure_8(onChangeIconPress(5971), obj3);
              cResult[8] = icon;
              cResult[9] = iconStyle;
              cResult[10] = name;
              cResult[11] = tmp24;
              const tmp23 = onChangeIconPress(5971);
            } else {
              if (cResult[12] !== icon) {
                const source = tmp(1402).makeSource(icon);
                cResult[12] = icon;
                cResult[13] = source;
                let tmp13 = source;
                const tmpResult = tmp(1402);
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
                const tmp19 = closure_8(closure_6, obj4);
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
                    const tmp45 = closure_8(closure_5, obj5);
                    cResult[30] = style;
                    cResult[31] = tmp39;
                    cResult[32] = tmp45;
                  }
                  let obj6 = {
                    accessibilityRole: "button",
                    accessibilityLabel: tmp37,
                    onPress: tmp11,
                    children: tmp31,
                  };
                  const tmp41 = closure_8(tmp(5909).PressableOpacity, obj6);
                  cResult[27] = tmp11;
                  cResult[28] = tmp31;
                  cResult[29] = tmp41;
                  tmp39 = tmp41;
                }
              }
              const obj7 = { children: null };
              const items1 = [tmp16, tmp26];
              obj7.children = items1;
              const tmp34 = closure_10(closure_9, obj7);
              cResult[23] = tmp16;
              cResult[24] = tmp26;
              cResult[25] = tmp34;
              tmp31 = tmp34;
            }
            let tmp27 = null;
            if (!tmp4) {
              const obj8 = { style: tmp6.uploadIcon, source: onChangeIconPress(10666) };
              tmp27 = closure_8(closure_6, obj8);
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
                      const obj6 = { value: onChangeIconPress((1)[8]).openImagePicker(obj5), done: false };
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
    }
  : (disabled) => {
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
      const tmp = closure_11();
      dependencyMap = noop.useRef(false);
      if (null == icon) {
        let fnResult = fn(icon);
      } else {
        fnResult = icon;
      }
      if ("guild" === str) {
        if (!tmp8) {
          let obj3 = {
            style: iconStyle,
            icon: fnResult,
            value: name,
            size: GuildIcon.GuildIconSizes.XLARGE,
            animate: true,
          };
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
      const items1 = [tmp7];
      let tmp16 = null;
      if (!flag) {
        let obj5 = { style: tmp.uploadIcon, source: _modDef10666 };
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
