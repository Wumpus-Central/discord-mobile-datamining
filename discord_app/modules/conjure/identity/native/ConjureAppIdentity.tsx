// === Module 11813: ConjureAppIdentity ===

// Module 11813 (ConjureAppIdentity)
import nativeDefault from "native" /* 587 */;
import _modDef3830 from "module_3830" /* 3830 */;
import ImagePickerDefault from "ImagePicker" /* 8155 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = fn;
function pickConjureAppIcon() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_13 = async function _pickConjureAppIcon() {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "+352" };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_2 = tmp2;
          closure_1 = tmp3;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          c3 = 1;
          c4 = 1;
          const obj5 = { value: ImagePickerDefault.launchImageLibraryAsync({ mediaType: "photo", selectionLimit: 1, includeBase64: true }), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        closure_129_0 = value;
        let tmp10 = null;
        if (!closure_129_0.didCancel) {
          const assets = closure_129_0.assets;
          let first;
          if (assets != null) {
            first = assets[0];
          }
          tmp10 = first;
        }
        closure_129_1 = tmp10;
        let base64;
        if (closure_129_1 != null) {
          base64 = closure_129_1.base64;
        }
        if (null == base64) {
          c4 = 3;
          return { value: null, done: true };
        } else {
          closure_129_2 = (function pickedIconType(arg0) {
            const items = [, , ];
            ({ mimeType: arr[0], fileType: arr[1], type: arr[2] } = arg0);
            const str = items.find((arr) => {
              let hasItem;
              if (arr != null) {
                hasItem = arr.includes("/");
              }
              return true === hasItem;
            });
            if (null != str) {
              let str3 = "image/jpeg";
              if ("image/jpg" !== str.toLowerCase()) {
                str3 = str.toLowerCase();
              }
              return str3;
            } else {
              ({ uri: obj2.uri, fileName: obj2.overrideFilename } = arg0);
              const type = closure_1_0(closure_1_2[7]).getFile({ uri: null, overrideFilename: null }).type;
              let tmp3 = null;
              if ("unknown" !== type) {
                tmp3 = type;
              }
              return tmp3;
            }
          })(closure_129_1);
          if (null != closure_129_2) {
            const CONJURE_VIEWABLE_IMAGE_TYPES = closure_130_0(closure_130_2[9]).CONJURE_VIEWABLE_IMAGE_TYPES;
            if (!CONJURE_VIEWABLE_IMAGE_TYPES.has(closure_129_2)) {
              const obj = { error: null };
              const intl = closure_130_0(closure_130_2[10]).intl;
              obj.error = intl.string(closure_130_1(closure_130_2[11]).TWrjpi);
              c4 = 3;
              const obj8 = { value: obj, done: true };
              return obj8;
            }
          }
          c0 = closure_129_2;
          if (closure_129_2 == null) {
            c0 = "image/png";
          }
          const _HermesInternal = HermesInternal;
          closure_129_3 = "data:" + c0 + ";base64," + closure_129_1.base64;
          const obj3 = closure_130_0(closure_130_2[12]);
          if (dataUriFileSizeResult > closure_130_0(closure_130_2[13]).MAX_CONJURE_APP_ICON_BYTES) {
            const obj9 = { error: null };
            const intl2 = closure_130_0(closure_130_2[10]).intl;
            obj9.error = intl2.string(closure_130_1(closure_130_2[11]).ZTAAMc);
          } else {
            { icon: null }[0] = closure_129_3;
          }
          c4 = 3;
          dataUriFileSizeResult = closure_130_0(closure_130_2[12]).dataUriFileSize(closure_129_3);
        }
      }
    } catch (tmp41) {
      c4 = tmp;
      throw tmp41;
    }
  }
};
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const PX_4 = nativeDefault.space.PX_4;
const createStyles = fn(4971);
let obj2 = { nameRow: { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_16 }, tileFrame: { alignSelf: "flex-start" }, tile: { padding: 0, alignItems: "center", justifyContent: "center", overflow: "hidden" }, tileEmpty: { borderStyle: "dashed" }, tileImage: { width: "100%", height: "100%" }, editIcon: null, nameField: null };
const rect = { position: "absolute", top: -nativeDefault.space.PX_4, right: -nativeDefault.space.PX_4, pointerEvents: "none" };
obj2.editIcon = rect;
obj2.nameField = { flex: 1 };
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAppIconTile(onError) {
  const cResult = require("c").c(31);
  ({ iconURL, size, radius, disabled, onChange } = onError);
  _require = onChange;
  onError = onError.onError;
  let num = 16;
  if (undefined !== radius) {
    num = radius;
  }
  const tmp4 = closure_11();
  if (cResult[0] === onChange) {
    if (cResult[1] === onError) {
      let tmp6 = cResult[2];
    }
    let str = "subtle";
    if (tmp5) {
      str = "strong";
    }
    if (cResult[3] !== size) {
      const size1 = { width: size, height: size };
      cResult[3] = size;
      cResult[4] = size1;
      let tmp7 = size1;
    } else {
      tmp7 = cResult[4];
    }
    let tileEmpty = tmp5;
    if (tmp5) {
      tileEmpty = tmp4.tileEmpty;
    }
    if (cResult[5] === tmp4.tile) {
      if (cResult[6] === tmp7) {
        if (cResult[7] === tileEmpty) {
          let tmp8 = cResult[8];
        }
        if (cResult[9] !== tmp5) {
          const intl = tmp(1128).intl;
          const t = tmp(1128).t;
          const stringResult = intl.string(tmp5 ? t["MsUY/S"] : t.VATxfe);
          cResult[9] = tmp5;
          cResult[10] = stringResult;
        } else {
          if (cResult[11] === tmp5) {
            if (cResult[12] === iconURL) {
              if (cResult[13] === tmp4.tileImage) {
                if (cResult[15] === disabled) {
                  if (cResult[16] === tmp6) {
                    if (cResult[17] === num) {
                      if (cResult[18] === str) {
                        if (cResult[19] === tmp8) {
                          if (cResult[20] === tmp9) {
                            if (cResult[21] === tmp12) {
                              let tmp18 = cResult[22];
                            }
                            if (cResult[23] === disabled) {
                              if (cResult[24] === tmp5) {
                                if (cResult[25] === tmp4.editIcon) {
                                  let tmp21 = cResult[26];
                                }
                                if (cResult[27] === tmp4.tileFrame) {
                                  if (cResult[28] === tmp18) {
                                    if (cResult[29] === tmp21) {
                                      let tmp25 = cResult[30];
                                    }
                                    return tmp25;
                                  }
                                }
                                let obj2 = { style: tmp4.tileFrame, children: null };
                                const items = [tmp18, tmp21];
                                obj2.children = items;
                                const tmp28 = closure_8(View, obj2);
                                cResult[27] = tmp4.tileFrame;
                                cResult[28] = tmp18;
                                cResult[29] = tmp21;
                                cResult[30] = tmp28;
                                tmp25 = tmp28;
                              }
                            }
                            let tmp22 = null;
                            if (!tmp5) {
                              tmp22 = null;
                              if (!disabled) {
                                let obj3 = { style: tmp4.editIcon };
                                tmp22 = closure_7(onError(11816), obj3);
                              }
                            }
                            cResult[23] = disabled;
                            cResult[24] = tmp5;
                            cResult[25] = tmp4.editIcon;
                            cResult[26] = tmp22;
                            tmp21 = tmp22;
                          }
                        }
                      }
                    }
                  }
                }
                let obj4 = { variant: "secondary", border: str, radius: num, style: tmp8, accessibilityLabel: tmp9, disabled, onPress: tmp6, children: cResult[14] };
                const tmp20 = closure_7(tmp(6905).Card, obj4);
                cResult[15] = disabled;
                cResult[16] = tmp6;
                cResult[17] = num;
                cResult[18] = str;
                cResult[19] = tmp8;
                cResult[20] = tmp9;
                cResult[21] = cResult[14];
                cResult[22] = tmp20;
                tmp18 = tmp20;
              }
            }
          }
          if (tmp5) {
            const obj5 = { size: "md", color: onError(587).colors.ICON_MUTED };
            let tmp13Result = closure_7(tmp(11814).ImagePlusIcon, obj5);
          } else {
            const obj6 = { source: null, style: null, resizeMode: "cover" };
            const obj7 = { uri: iconURL };
            obj6.source = obj7;
            obj6.style = tmp4.tileImage;
            tmp13Result = closure_7(onError(5669), obj6);
          }
          cResult[11] = tmp5;
          cResult[12] = iconURL;
          iconURL = tmp4.tileImage;
          cResult[13] = iconURL;
          cResult[14] = tmp13Result;
        }
      }
    }
    const items1 = [tmp4.tile, tmp7, tileEmpty];
    cResult[5] = tmp4.tile;
    cResult[6] = tmp7;
    cResult[7] = tileEmpty;
    cResult[8] = items1;
    tmp8 = items1;
  }
  _require = asyncGeneratorStep(async () => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+352" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp3;
            closure_0 = tmp7;
            closure_128_0 = undefined;
            c2 = 1;
            c3 = 2;
            c4 = 1;
            const obj4 = { value: pickConjureAppIcon(), done: false };
            return obj4;
          }
        } else if (1 === tmp7) {
          c2 = 0;
          c4 = 3;
          return { value: "IconComponent", done: "+352" };
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_128_0 = value;
          c2 = 0;
          if (null == closure_128_0) {
            c4 = 3;
          } else {
            let tmp14 = closure_1;
            if (!("error" in closure_128_0)) {
              tmp14(null);
              closure_0(closure_128_0.icon);
            }
          }
          tmp14(closure_128_0.error);
        }
      } catch (tmp22) {
        tmp14 = c2;
        if (tmp4 === c2) {
          c4 = tmp2;
          throw tmp22;
        } else {
          c3 = tmp;
        }
      }
    }
  });
  function t2() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  cResult[0] = onChange;
  cResult[1] = onError;
  cResult[2] = t2;
  tmp6 = t2;
  let obj = require("c");
}) : (function ConjureAppIconTile(onError) {
  ({ iconURL, size, radius } = onError);
  if (radius === undefined) {
    radius = 16;
  }
  ({ disabled, onChange } = onError);
  onError = onError.onError;
  const tmp = closure_11();
  const items = [onChange, onError];
  let obj = { style: tmp.tileFrame, children: null };
  const callback = noop.useCallback(asyncGeneratorStep(async () => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+352" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp3;
            closure_0 = tmp7;
            closure_128_0 = undefined;
            c2 = 1;
            c3 = 2;
            c4 = 1;
            const obj4 = { value: pickConjureAppIcon(), done: false };
            return obj4;
          }
        } else if (1 === tmp7) {
          c2 = 0;
          c4 = 3;
          return { value: "IconComponent", done: "+352" };
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_128_0 = value;
          c2 = 0;
          if (null == closure_128_0) {
            c4 = 3;
          } else {
            let tmp14 = closure_129_1;
            if (!("error" in closure_128_0)) {
              tmp14(null);
              closure_129_0(closure_128_0.icon);
            }
          }
          tmp14(closure_128_0.error);
        }
      } catch (tmp22) {
        tmp14 = c2;
        if (tmp4 === c2) {
          c4 = tmp2;
          throw tmp22;
        } else {
          c3 = tmp;
        }
      }
    }
  }), items);
  let str = "subtle";
  if (null == iconURL) {
    str = "strong";
  }
  let obj2 = { variant: "secondary", border: str, radius, style: null, accessibilityLabel: null, disabled: null, onPress: null, children: null };
  const items1 = [tmp.tile, { width: size, height: size }, ];
  let tileEmpty = tmp2;
  if (null == iconURL) {
    tileEmpty = tmp.tileEmpty;
  }
  items1[2] = tileEmpty;
  obj2.style = items1;
  const intl = onChange(1128).intl;
  const t = onChange(1128).t;
  obj2.accessibilityLabel = intl.string(null == iconURL ? t["MsUY/S"] : t.VATxfe);
  obj2.disabled = disabled;
  obj2.onPress = callback;
  if (null == iconURL) {
    let obj3 = { size: "md", color: onError(587).colors.ICON_MUTED };
    let tmp6Result = closure_7(onChange(11814).ImagePlusIcon, obj3);
    let tmp9 = onError;
  } else {
    tmp9 = onError;
    let obj4 = { source: null, style: null, resizeMode: "cover" };
    const obj5 = { uri: iconURL };
    obj4.source = obj5;
    obj4.style = tmp.tileImage;
    tmp6Result = closure_7(onError(5669), obj4);
  }
  obj2.children = tmp6Result;
  const items2 = [closure_7(onChange(6905).Card, obj2), ];
  let tmp6Result2 = null;
  if (null != iconURL) {
    tmp6Result2 = null;
    if (!disabled) {
      const obj6 = { style: tmp.editIcon };
      tmp6Result2 = closure_7(tmp9(11816), obj6);
    }
  }
  items2[1] = tmp6Result2;
  obj.children = items2;
  return closure_8(View, obj);
});
let closure_14 = tmp3;
ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/identity/native/ConjureAppIdentity.tsx");

export const ConjureAppIconTile = tmp3;
export const ConjureAppIdentitySection = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAppIdentitySection(arg0) {
  const cResult = nameError(576).c(35);
  ({ iconURL, onIconChange, name, nameError } = arg0);
  ({ onNameChange, description, onDescriptionChange, disabled } = arg0);
  const tmp5 = closure_11();
  const tmp6 = _slicedToArray(noop.useState(null), 2);
  const first = tmp6[0];
  const obj = nameError(576);
  [tmp9, importDefault] = noop.useState(80);
  if (cResult[0] !== nameError) {
    const fn = function c(nativeEvent) {
      if (null == nameError) {
        const _Math = Math;
        importDefault(Math.round(nativeEvent.nativeEvent.layout.height - PX_4));
      }
    };
    cResult[0] = nameError;
    cResult[1] = fn;
    let tmp10 = fn;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] === (undefined !== disabled && disabled)) {
    if (cResult[3] === iconURL) {
      if (cResult[4] === onIconChange) {
        if (cResult[5] === tmp9) {
          let tmp12 = cResult[6];
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = nameError(1128).intl;
          const stringResult = intl.string(_modDef3830.GWBCF9);
          cResult[7] = stringResult;
          let tmp15 = stringResult;
        } else {
          tmp15 = cResult[7];
        }
        if (cResult[8] === tmp4) {
          if (cResult[9] === name) {
            if (cResult[10] === onNameChange) {
              if (cResult[11] === nameError) {
                let tmp18 = cResult[12];
              }
              if (cResult[13] === tmp10) {
                if (cResult[14] === tmp5.nameField) {
                  if (cResult[15] === tmp18) {
                    let tmp21 = cResult[16];
                  }
                  if (cResult[17] === tmp5.nameRow) {
                    if (cResult[18] === tmp12) {
                      if (cResult[19] === tmp21) {
                        let tmp25 = cResult[20];
                      }
                      if (cResult[21] !== first) {
                        let tmp30 = null;
                        if (null != first) {
                          const obj2 = { accessibilityLiveRegion: "polite", children: null };
                          const obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: first };
                          obj2.children = closure_7(nameError(5234).Text, obj3);
                          tmp30 = closure_7(View, obj2);
                        }
                        cResult[21] = first;
                        cResult[22] = tmp30;
                        let tmp29 = tmp30;
                      } else {
                        tmp29 = cResult[22];
                      }
                      if (cResult[23] === tmp25) {
                        if (cResult[24] === tmp29) {
                          let tmp33 = cResult[25];
                        }
                        const _Symbol2 = Symbol;
                        if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl2 = nameError(1128).intl;
                          const stringResult1 = intl2.string(_modDef3830.ynaGa1);
                          const intl3 = nameError(1128).intl;
                          const stringResult2 = intl3.string(_modDef3830["I+3UTL"]);
                          cResult[26] = stringResult1;
                          cResult[27] = stringResult2;
                          let tmp38 = stringResult2;
                          let tmp37 = stringResult1;
                        } else {
                          tmp37 = cResult[26];
                          tmp38 = cResult[27];
                        }
                        if (cResult[28] === description) {
                          if (cResult[29] === tmp4) {
                            if (cResult[30] === onDescriptionChange) {
                              let tmp42 = cResult[31];
                            }
                            if (cResult[32] === tmp33) {
                              if (cResult[33] === tmp42) {
                                let tmp45 = cResult[34];
                              }
                              return tmp45;
                            }
                            const obj4 = { children: null };
                            const items = [tmp33, tmp42];
                            obj4.children = items;
                            const tmp48 = closure_8(closure_9, obj4);
                            cResult[32] = tmp33;
                            cResult[33] = tmp42;
                            cResult[34] = tmp48;
                            tmp45 = tmp48;
                          }
                        }
                        const obj5 = { label: tmp37, placeholder: tmp38, value: description, onChange: onDescriptionChange, maxLength: nameError(6774).MAX_APP_DESCRIPTION_LENGTH, disabled: tmp4 };
                        const tmp44 = closure_7(nameError(7180).TextArea, obj5);
                        cResult[28] = description;
                        cResult[29] = tmp4;
                        cResult[30] = onDescriptionChange;
                        cResult[31] = tmp44;
                        tmp42 = tmp44;
                      }
                      const obj6 = { spacing: nativeDefault.space.PX_8, children: null };
                      const items1 = [tmp25, tmp29];
                      obj6.children = items1;
                      const tmp36 = closure_8(nameError(5977).Stack, obj6);
                      cResult[23] = tmp25;
                      cResult[24] = tmp29;
                      cResult[25] = tmp36;
                      tmp33 = tmp36;
                    }
                  }
                  const obj7 = { style: tmp11, children: null };
                  const items2 = [tmp12, tmp21];
                  obj7.children = items2;
                  const tmp28 = closure_8(View, obj7);
                  cResult[17] = tmp5.nameRow;
                  cResult[18] = tmp12;
                  cResult[19] = tmp21;
                  cResult[20] = tmp28;
                  tmp25 = tmp28;
                }
              }
              const obj8 = { style: tmp5.nameField, onLayout: tmp10, children: tmp18 };
              const tmp24 = closure_7(View, obj8);
              cResult[13] = tmp10;
              cResult[14] = tmp5.nameField;
              cResult[15] = tmp18;
              cResult[16] = tmp24;
              tmp21 = tmp24;
            }
          }
        }
        const obj9 = { label: tmp15, value: name, onChange: onNameChange, maxLength: nameError(6774).MAX_PROJECT_NAME_LENGTH, disabled: tmp4, errorMessage: nameError };
        const tmp20 = closure_7(nameError(7008).TextInput, obj9);
        cResult[8] = tmp4;
        cResult[9] = name;
        cResult[10] = onNameChange;
        cResult[11] = nameError;
        cResult[12] = tmp20;
        tmp18 = tmp20;
      }
    }
  }
  const tmp13 = closure_7(closure_14, { iconURL, size: tmp9, disabled: undefined !== disabled && disabled, onChange: onIconChange, onError: tmp6[1] });
  cResult[2] = undefined !== disabled && disabled;
  cResult[3] = iconURL;
  cResult[4] = onIconChange;
  cResult[5] = tmp9;
  cResult[6] = tmp13;
  tmp12 = tmp13;
  const tmp8 = _slicedToArray(noop.useState(80), 2);
}) : (function ConjureAppIdentitySection(nameError) {
  nameError = nameError.nameError;
  let flag = nameError.disabled;
  ({ iconURL, onIconChange, name, onNameChange, description, onDescriptionChange } = nameError);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_11();
  const tmp2 = _slicedToArray(noop.useState(null), 2);
  const first = tmp2[0];
  const tmp4 = _slicedToArray(noop.useState(80), 2);
  importDefault = tmp4[1];
  const items = [nameError];
  const callback = noop.useCallback((nativeEvent) => {
    if (null == nameError) {
      const _Math = Math;
      closure_1(Math.round(nativeEvent.nativeEvent.layout.height - PX_4));
    }
  }, items);
  const obj = { spacing: nativeDefault.space.PX_8, children: null };
  const obj2 = { style: tmp.nameRow, children: null };
  const items1 = [closure_7(closure_14, { iconURL, size: tmp4[0], disabled: flag, onChange: onIconChange, onError: tmp2[1] }), ];
  const obj3 = { style: tmp.nameField, onLayout: callback, children: null };
  const obj4 = { label: null, value: null, onChange: null, maxLength: null, disabled: null, errorMessage: null };
  const intl = nameError(1128).intl;
  obj4.label = intl.string(_modDef3830.GWBCF9);
  obj4.value = name;
  obj4.onChange = onNameChange;
  obj4.maxLength = nameError(6774).MAX_PROJECT_NAME_LENGTH;
  obj4.disabled = flag;
  obj4.errorMessage = nameError;
  obj3.children = closure_7(nameError(7008).TextInput, obj4);
  items1[1] = closure_7(View, obj3);
  obj2.children = items1;
  const items2 = [closure_8(View, obj2), ];
  let tmp12Result = null;
  if (null != first) {
    const obj5 = { accessibilityLiveRegion: "polite", children: null };
    const obj6 = { variant: "text-xs/normal", color: "text-feedback-critical", children: first };
    obj5.children = closure_7(tmp8(5234).Text, obj6);
    tmp12Result = closure_7(View, obj5);
  }
  const obj7 = { children: null };
  items2[1] = tmp12Result;
  obj.children = items2;
  const items3 = [closure_8(nameError(5977).Stack, obj), ];
  const obj8 = { label: null, placeholder: null, value: null, onChange: null, maxLength: null, disabled: null };
  const intl2 = tmp8(1128).intl;
  obj8.label = intl2.string(_modDef3830.ynaGa1);
  const intl3 = tmp8(1128).intl;
  obj8.placeholder = intl3.string(_modDef3830["I+3UTL"]);
  obj8.value = description;
  obj8.onChange = onDescriptionChange;
  obj8.maxLength = nameError(6774).MAX_APP_DESCRIPTION_LENGTH;
  obj8.disabled = flag;
  items3[1] = closure_7(nameError(7180).TextArea, obj8);
  obj7.children = items3;
  return closure_8(closure_9, obj7);
});