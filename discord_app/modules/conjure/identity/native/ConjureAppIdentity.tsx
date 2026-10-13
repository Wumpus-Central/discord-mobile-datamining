// discord_app/modules/conjure/identity/native/ConjureAppIdentity.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import StringUtils from "../../../../utils/StringUtils.tsx";
import _modDef3849 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import Card from "../../../../design/components/Card/native/Card.native.tsx";
import TextInput from "../../../../design/components/TextInput/native/TextInput.native.tsx";
import TextArea from "../../../../design/components/TextInput/native/TextArea.native.tsx";
import ConjureProjectTypes from "../../projects/ConjureProjectTypes.tsx";
import ImagePickerDefault from "../../../image/native/ImagePicker.tsx";
import BotTagDefault from "../../../applications/native/BotTag.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function pickConjureAppIcon() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_14 = async function _pickConjureAppIcon() {
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
      return { value: "IconComponent", done: null };
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
              const type = closure_1_0(closure_1_2[8]).getFile({ uri: null, overrideFilename: null }).type;
              let tmp3 = null;
              if ("unknown" !== type) {
                tmp3 = type;
              }
              return tmp3;
            }
          })(closure_129_1);
          if (null != closure_129_2) {
            const CONJURE_VIEWABLE_IMAGE_TYPES = closure_130_0(closure_130_2[10]).CONJURE_VIEWABLE_IMAGE_TYPES;
            if (!CONJURE_VIEWABLE_IMAGE_TYPES.has(closure_129_2)) {
              const obj = { error: null };
              const intl = closure_130_0(closure_130_2[11]).intl;
              obj.error = intl.string(closure_130_1(closure_130_2[12]).TWrjpi);
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
          const obj3 = closure_130_0(closure_130_2[13]);
          if (dataUriFileSizeResult > closure_130_0(closure_130_2[14]).MAX_CONJURE_APP_ICON_BYTES) {
            const obj9 = { error: null };
            const intl2 = closure_130_0(closure_130_2[11]).intl;
            obj9.error = intl2.string(closure_130_1(closure_130_2[12]).ZTAAMc);
          } else {
            { icon: null }[0] = closure_129_3;
          }
          c4 = 3;
          dataUriFileSizeResult = closure_130_0(closure_130_2[13]).dataUriFileSize(closure_129_3);
        }
      }
    } catch (tmp41) {
      c4 = tmp;
      throw tmp41;
    }
  }
};
let closure_3 = ["iconURL", "canRemove", "onIconChange", "previewName"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { tile: { width: 80, height: 80, padding: 0, alignItems: "center", justifyContent: "center", overflow: "hidden" }, tileEmpty: { borderStyle: "dashed" }, tileImage: { width: 80, height: 80 }, iconDetails: { flex: 1 }, previewCard: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 }, previewTile: null, previewImage: null, previewText: null };
let size = { width: 40, height: 40, borderRadius: nativeDefault.radii.md, alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.previewTile = size;
obj2.previewImage = { width: 40, height: 40 };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj2.previewText = { flex: 1, gap: nativeDefault.space.PX_4 };
let closure_12 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAppIconRow(arg0) {
  const cResult = onChange(576).c(47);
  ({ iconURL, canRemove, disabled, onChange } = arg0);
  importDefault = tmp4;
  const tmp5 = closure_12();
  const obj = onChange(576);
  [tmp7, dependencyMap] = noop.useState(null);
  if (cResult[0] === (undefined !== disabled && disabled)) {
    if (cResult[1] === onChange) {
      let tmp8 = cResult[2];
    }
    let str = "subtle";
    if (null == iconURL) {
      str = "strong";
    }
    if (cResult[3] === tmp5.tile) {
      if (cResult[4] === tmp9) {
        let tmp10 = cResult[5];
      }
      if (cResult[6] === iconURL) {
        if (cResult[7] === tmp5.tileImage) {
          if (cResult[9] === tmp4) {
            if (cResult[10] === tmp8) {
              if (cResult[11] === str) {
                if (cResult[12] === tmp10) {
                  if (cResult[13] === tmp11) {
                    let tmp18 = cResult[14];
                  }
                  const _Symbol = Symbol;
                  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj2 = { variant: "text-sm/medium", color: "text-strong", children: null };
                    const intl = onChange(1126).intl;
                    obj2.children = intl.string(_modDef3849.M3q9QZ);
                    const tmp25 = closure_9(onChange(5088).Text, obj2);
                    cResult[15] = tmp25;
                    let tmp22 = tmp25;
                  } else {
                    tmp22 = cResult[15];
                  }
                  let str3 = "text-muted";
                  if (null != tmp7) {
                    str3 = "text-feedback-critical";
                  }
                  if (cResult[16] !== tmp7) {
                    let stringResult = tmp7;
                    if (tmp7 == null) {
                      const intl2 = onChange(1126).intl;
                      stringResult = intl2.string(_modDef3849.F6L3s4);
                    }
                    cResult[16] = tmp7;
                    cResult[17] = stringResult;
                    let tmp26 = stringResult;
                  } else {
                    tmp26 = cResult[17];
                  }
                  if (cResult[18] === str3) {
                    if (cResult[19] === tmp26) {
                      let tmp29 = cResult[20];
                    }
                    const _Symbol2 = Symbol;
                    if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                      const tmp37 = closure_9(onChange(9406).UploadIcon, { size: "sm" });
                      cResult[21] = tmp37;
                      let tmp35 = tmp37;
                    } else {
                      tmp35 = cResult[21];
                    }
                    if (cResult[22] !== iconURL) {
                      const intl3 = onChange(1126).intl;
                      if (null == iconURL) {
                        let iwCCor = _modDef3849.WpXHIP;
                      } else {
                        iwCCor = _modDef3849.iwCCor;
                      }
                      const stringResult1 = intl3.string(iwCCor);
                      cResult[22] = iconURL;
                      cResult[23] = stringResult1;
                    } else {
                      if (cResult[24] !== iconURL) {
                        let stringResult2;
                        if (null != iconURL) {
                          const intl4 = onChange(1126).intl;
                          stringResult2 = intl4.string(_modDef3849["75j6Qp"]);
                        }
                        cResult[24] = iconURL;
                        cResult[25] = stringResult2;
                        let tmp43 = stringResult2;
                      } else {
                        tmp43 = cResult[25];
                      }
                      if (cResult[26] === tmp4) {
                        if (cResult[27] === tmp8) {
                          if (cResult[28] === tmp38) {
                            if (cResult[29] === tmp43) {
                              let tmp46 = cResult[30];
                            }
                            if (cResult[31] === canRemove) {
                              if (cResult[32] === tmp4) {
                                if (cResult[33] === onChange) {
                                  let tmp49 = cResult[34];
                                }
                                if (cResult[35] === tmp46) {
                                  if (cResult[36] === tmp49) {
                                    let tmp53 = cResult[37];
                                  }
                                  if (cResult[38] === tmp29) {
                                    if (cResult[39] === tmp53) {
                                      let tmp57 = cResult[40];
                                    }
                                    if (cResult[41] === tmp5.iconDetails) {
                                      if (cResult[42] === tmp57) {
                                        let tmp61 = cResult[43];
                                      }
                                      if (cResult[44] === tmp61) {
                                        if (cResult[45] === tmp18) {
                                          let tmp65 = cResult[46];
                                        }
                                        return tmp65;
                                      }
                                      const obj3 = { direction: "horizontal", spacing: nativeDefault.space.PX_16, align: "center", children: null };
                                      const items = [tmp18, tmp61];
                                      obj3.children = items;
                                      const tmp68 = closure_10(onChange(5377).Stack, obj3);
                                      cResult[44] = tmp61;
                                      cResult[45] = tmp18;
                                      cResult[46] = tmp68;
                                      tmp65 = tmp68;
                                    }
                                    const obj4 = { style: tmp5.iconDetails, children: tmp57 };
                                    const tmp64 = closure_9(View, obj4);
                                    cResult[41] = tmp5.iconDetails;
                                    cResult[42] = tmp57;
                                    cResult[43] = tmp64;
                                    tmp61 = tmp64;
                                  }
                                  const obj5 = { spacing: nativeDefault.space.PX_8, align: "flex-start", children: null };
                                  const items1 = [tmp29, tmp53];
                                  obj5.children = items1;
                                  const tmp60 = closure_10(onChange(5377).Stack, obj5);
                                  cResult[38] = tmp29;
                                  cResult[39] = tmp53;
                                  cResult[40] = tmp60;
                                  tmp57 = tmp60;
                                }
                                const obj6 = { direction: "horizontal", spacing: nativeDefault.space.PX_8, align: "center", children: null };
                                const items2 = [tmp46, tmp49];
                                obj6.children = items2;
                                const tmp56 = closure_10(onChange(5377).Stack, obj6);
                                cResult[35] = tmp46;
                                cResult[36] = tmp49;
                                cResult[37] = tmp56;
                                tmp53 = tmp56;
                              }
                            }
                            let tmp50 = null;
                            if (canRemove) {
                              const obj7 = { size: "sm", variant: "tertiary", text: null, disabled: null, onPress: null };
                              const intl5 = onChange(1126).intl;
                              obj7.text = intl5.string(_modDef3849.gqtFOS);
                              obj7.disabled = tmp4;
                              obj7.onPress = function onPress() {
                                dependencyMap(null);
                                onChange(null);
                              };
                              tmp50 = closure_9(onChange(5379).Button, obj7);
                            }
                            cResult[31] = canRemove;
                            cResult[32] = tmp4;
                            cResult[33] = onChange;
                            cResult[34] = tmp50;
                            tmp49 = tmp50;
                          }
                        }
                      }
                      const obj8 = { size: "sm", variant: "secondary", icon: tmp35, text: cResult[23], accessibilityLabel: tmp43, disabled: tmp4, onPress: tmp8 };
                      const tmp48 = closure_9(onChange(5379).Button, obj8);
                      cResult[26] = tmp4;
                      cResult[27] = tmp8;
                      cResult[28] = cResult[23];
                      cResult[29] = tmp43;
                      cResult[30] = tmp48;
                      tmp46 = tmp48;
                    }
                  }
                  const obj9 = { spacing: nativeDefault.space.PX_4, children: null };
                  const items3 = [tmp22, ];
                  const obj10 = { accessibilityLiveRegion: "polite", children: null };
                  const obj11 = { variant: "text-xs/normal", color: str3, children: tmp26 };
                  obj10.children = closure_9(onChange(5088).Text, obj11);
                  items3[1] = closure_9(View, obj10);
                  obj9.children = items3;
                  const tmp34 = closure_10(onChange(5377).Stack, obj9);
                  cResult[18] = str3;
                  cResult[19] = tmp26;
                  cResult[20] = tmp34;
                  tmp29 = tmp34;
                }
              }
            }
          }
          const obj12 = { variant: "secondary", border: str, radius: 16, style: tmp10, accessible: false, importantForAccessibility: "no-hide-descendants", disabled: tmp4, onPress: tmp8, children: cResult[8] };
          const tmp20 = closure_9(onChange(6182).Card, obj12);
          cResult[9] = tmp4;
          cResult[10] = tmp8;
          cResult[11] = str;
          cResult[12] = tmp10;
          cResult[13] = cResult[8];
          cResult[14] = tmp20;
          tmp18 = tmp20;
        }
      }
      if (null != iconURL) {
        const obj13 = { source: null, style: null, resizeMode: "cover" };
        const obj14 = { uri: iconURL };
        obj13.source = obj14;
        obj13.style = tmp5.tileImage;
        let tmp14 = closure_9(FastImageDefault, obj13);
      } else {
        const obj15 = { size: "md", color: nativeDefault.colors.ICON_MUTED };
        tmp14 = closure_9(onChange(11327).ImagePlusIcon, obj15);
      }
      cResult[6] = iconURL;
      cResult[7] = tmp5.tileImage;
      cResult[8] = tmp14;
    }
    const items4 = [tmp5.tile, null == iconURL && tmp5.tileEmpty];
    cResult[3] = tmp5.tile;
    cResult[4] = null == iconURL && tmp5.tileEmpty;
    cResult[5] = items4;
    tmp10 = items4;
  }
  const fn = function t() {
    if (!closure_1) {
      const promise = pickConjureAppIcon();
      pickConjureAppIcon().then((error) => {
        if (null != error) {
          if ("error" in error) {
            closure_1_2(error.error);
          } else {
            closure_1_2(null);
            onChange(error.icon);
          }
        }
      }).catch(() => {

      });
      const nextPromise = pickConjureAppIcon().then((error) => {
        if (null != error) {
          if ("error" in error) {
            closure_1_2(error.error);
          } else {
            closure_1_2(null);
            onChange(error.icon);
          }
        }
      });
    }
  };
  cResult[0] = undefined !== disabled && disabled;
  cResult[1] = onChange;
  cResult[2] = fn;
  tmp8 = fn;
  const tmp6 = _slicedToArray(noop.useState(null), 2);
}) : (function ConjureAppIconRow(onChange) {
  ({ iconURL, disabled } = onChange);
  if (disabled === undefined) {
    disabled = false;
  }
  onChange = onChange.onChange;
  dependencyMap = undefined;
  const tmp = closure_12();
  [tmp3, c2] = noop.useState(null);
  const items = [disabled, onChange];
  const callback = noop.useCallback(() => {
    if (!disabled) {
      const promise = pickConjureAppIcon();
      pickConjureAppIcon().then((error) => {
        if (null != error) {
          if ("error" in error) {
            _undefined(error.error);
          } else {
            _undefined(null);
            onChange(error.icon);
          }
        }
      }).catch(() => {

      });
      const nextPromise = pickConjureAppIcon().then((error) => {
        if (null != error) {
          if ("error" in error) {
            _undefined(error.error);
          } else {
            _undefined(null);
            onChange(error.icon);
          }
        }
      });
    }
  }, items);
  const obj = { direction: "horizontal", spacing: onChange(587).space.PX_16, align: "center", children: null };
  let str = "subtle";
  if (null == iconURL) {
    str = "strong";
  }
  const obj2 = { variant: "secondary", border: str, radius: 16, style: null, accessible: false, importantForAccessibility: "no-hide-descendants", disabled, onPress: callback, children: null };
  const items1 = [tmp.tile, null == iconURL && tmp.tileEmpty];
  obj2.style = items1;
  if (null != iconURL) {
    const obj3 = { source: null, style: null, resizeMode: "cover" };
    const obj4 = { uri: iconURL };
    obj3.source = obj4;
    obj3.style = tmp.tileImage;
    let tmp9Result = closure_9(tmp8(6157), obj3);
  } else {
    const obj5 = { size: "md", color: tmp8(587).colors.ICON_MUTED };
    tmp9Result = closure_9(tmp6(11327).ImagePlusIcon, obj5);
  }
  obj2.children = tmp9Result;
  const items2 = [closure_9(disabled(6182).Card, obj2), ];
  const obj6 = { style: tmp.iconDetails, children: null };
  const obj7 = { spacing: onChange(587).space.PX_8, align: "flex-start", children: null };
  const obj8 = { spacing: onChange(587).space.PX_4, children: null };
  const obj9 = { variant: "text-sm/medium", color: "text-strong", children: null };
  const intl = tmp6(1126).intl;
  obj9.children = intl.string(onChange(3849).M3q9QZ);
  const items3 = [closure_9(disabled(5088).Text, obj9), ];
  let str2 = "text-muted";
  if (null != stringResult) {
    str2 = "text-feedback-critical";
  }
  const obj10 = { variant: "text-xs/normal", color: str2, children: null };
  if (stringResult == null) {
    const intl2 = tmp6(1126).intl;
    stringResult = intl2.string(tmp8(3849).F6L3s4);
  }
  const tmp2 = _slicedToArray(noop.useState(null), 2);
  obj10.children = stringResult;
  items3[1] = closure_9(View, { accessibilityLiveRegion: "polite", children: closure_9(disabled(5088).Text, obj10) });
  obj8.children = items3;
  const items4 = [closure_10(disabled(5377).Stack, obj8), ];
  const obj12 = { direction: "horizontal", spacing: onChange(587).space.PX_8, align: "center", children: null };
  const obj13 = { size: "sm", variant: "secondary", icon: closure_9(disabled(9406).UploadIcon, { size: "sm" }), text: null, accessibilityLabel: null, disabled: null, onPress: null };
  const intl3 = tmp6(1126).intl;
  if (null == iconURL) {
    let iwCCor = tmp8(3849).WpXHIP;
  } else {
    iwCCor = tmp8(3849).iwCCor;
  }
  obj13.text = intl3.string(iwCCor);
  let stringResult1;
  if (null != iconURL) {
    const intl4 = tmp6(1126).intl;
    stringResult1 = intl4.string(tmp8(3849)["75j6Qp"]);
  }
  obj13.accessibilityLabel = stringResult1;
  obj13.disabled = disabled;
  obj13.onPress = callback;
  const items5 = [closure_9(disabled(5379).Button, obj13), ];
  let tmp9Result2 = null;
  if (onChange.canRemove) {
    const obj14 = { size: "sm", variant: "tertiary", text: null, disabled: null, onPress: null };
    const intl5 = tmp6(1126).intl;
    obj14.text = intl5.string(tmp8(3849).gqtFOS);
    obj14.disabled = disabled;
    obj14.onPress = function onPress() {
      _undefined(null);
      onChange(null);
    };
    tmp9Result2 = closure_9(tmp6(5379).Button, obj14);
  }
  items5[1] = tmp9Result2;
  obj12.children = items5;
  items4[1] = closure_10(disabled(5377).Stack, obj12);
  obj7.children = items4;
  obj6.children = closure_10(disabled(5377).Stack, obj7);
  items2[1] = closure_9(View, obj6);
  obj.children = items2;
  return closure_10(disabled(5377).Stack, obj);
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAppIdentityTextFields(arg0) {
  const cResult = c.c(15);
  ({ name, nameError, onNameChange, description, onDescriptionChange, disabled } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(_modDef3849.GWBCF9);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === (undefined !== disabled && disabled)) {
    if (cResult[2] === name) {
      if (cResult[3] === onNameChange) {
        if (cResult[4] === nameError) {
          let tmp8 = cResult[5];
        }
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = util.intl;
          const stringResult1 = intl2.string(_modDef3849.ynaGa1);
          const intl3 = util.intl;
          const stringResult2 = intl3.string(_modDef3849["I+3UTL"]);
          cResult[6] = stringResult1;
          cResult[7] = stringResult2;
          let tmp11 = stringResult2;
          let tmp10 = stringResult1;
        } else {
          tmp10 = cResult[6];
          tmp11 = cResult[7];
        }
        if (cResult[8] === description) {
          if (cResult[9] === tmp4) {
            if (cResult[10] === onDescriptionChange) {
              let tmp15 = cResult[11];
            }
            if (cResult[12] === tmp8) {
              if (cResult[13] === tmp15) {
                let tmp18 = cResult[14];
              }
              return tmp18;
            }
            const obj2 = { children: null };
            const items = [tmp8, tmp15];
            obj2.children = items;
            const tmp21 = collapsed(closure_1_11, obj2);
            cResult[12] = tmp8;
            cResult[13] = tmp15;
            cResult[14] = tmp21;
            tmp18 = tmp21;
          }
        }
        const obj3 = { label: tmp10, placeholder: tmp11, value: description, onChange: onDescriptionChange, maxLength: ConjureProjectTypes.MAX_APP_DESCRIPTION_LENGTH, disabled: tmp4 };
        const tmp17 = options(TextArea.TextArea, obj3);
        cResult[8] = description;
        cResult[9] = tmp4;
        cResult[10] = onDescriptionChange;
        cResult[11] = tmp17;
        tmp15 = tmp17;
      }
    }
  }
  const tmp9 = options(TextInput.TextInput, { label: first, value: name, onChange: onNameChange, maxLength: ConjureProjectTypes.MAX_PROJECT_NAME_LENGTH, disabled: undefined !== disabled && disabled, errorMessage: nameError });
  cResult[1] = undefined !== disabled && disabled;
  cResult[2] = name;
  cResult[3] = onNameChange;
  cResult[4] = nameError;
  cResult[5] = tmp9;
  tmp8 = tmp9;
  const obj4 = { label: first, value: name, onChange: onNameChange, maxLength: ConjureProjectTypes.MAX_PROJECT_NAME_LENGTH, disabled: undefined !== disabled && disabled, errorMessage: nameError };
}) : (function ConjureAppIdentityTextFields(arg0) {
  ({ nameError, disabled } = arg0);
  ({ name, onNameChange, description, onDescriptionChange } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  const obj = { label: null, value: null, onChange: null, maxLength: null, disabled: null, errorMessage: null };
  const intl = util.intl;
  obj.label = intl.string(_modDef3849.GWBCF9);
  obj.value = name;
  obj.onChange = onNameChange;
  obj.maxLength = ConjureProjectTypes.MAX_PROJECT_NAME_LENGTH;
  obj.disabled = disabled;
  const obj2 = { children: null };
  obj.errorMessage = nameError;
  const items = [options(TextInput.TextInput, obj), ];
  const obj3 = { label: null, placeholder: null, value: null, onChange: null, maxLength: null, disabled: null };
  const intl2 = util.intl;
  obj3.label = intl2.string(_modDef3849.ynaGa1);
  const intl3 = util.intl;
  obj3.placeholder = intl3.string(_modDef3849["I+3UTL"]);
  obj3.value = description;
  obj3.onChange = onDescriptionChange;
  obj3.maxLength = ConjureProjectTypes.MAX_APP_DESCRIPTION_LENGTH;
  obj3.disabled = disabled;
  items[1] = options(TextArea.TextArea, obj3);
  obj2.children = items;
  return collapsed(closure_1_11, obj2);
});
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAppPreviewCard(arg0) {
  const cResult = c.c(26);
  ({ iconURL, name, description } = arg0);
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-xs/semibold", color: "text-muted", children: null };
    const intl = util.intl;
    obj2.children = intl.string(_modDef3849.KhR80V);
    const tmp8 = options(Text_Text.Text, obj2);
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === iconURL) {
    if (cResult[2] === name) {
      if (cResult[3] === tmp4.previewImage) {
        if (cResult[5] === tmp4.previewTile) {
          if (cResult[6] === tmp9) {
            let tmp14 = cResult[7];
          }
          if (cResult[8] !== name) {
            const obj3 = { variant: "text-md/semibold", color: "text-strong", lineClamp: 1, children: name };
            const tmp20 = options(Text_Text.Text, obj3);
            cResult[8] = name;
            cResult[9] = tmp20;
            let tmp18 = tmp20;
          } else {
            tmp18 = cResult[9];
          }
          const _Symbol = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp24 = options(BotTagDefault, {});
            cResult[10] = tmp24;
            let tmp21 = tmp24;
          } else {
            tmp21 = cResult[10];
          }
          if (cResult[11] !== tmp18) {
            const obj4 = { direction: "horizontal", spacing: nativeDefault.space.PX_4, align: "center", children: null };
            const items = [tmp18, tmp21];
            obj4.children = items;
            const tmp28 = collapsed(Stack_Stack.Stack, obj4);
            cResult[11] = tmp18;
            cResult[12] = tmp28;
            let tmp25 = tmp28;
          } else {
            tmp25 = cResult[12];
          }
          let str2 = "text-default";
          if ("" === description) {
            str2 = "text-muted";
          }
          if (cResult[13] !== description) {
            let stringResult = description;
            if (tmp29) {
              const intl2 = util.intl;
              stringResult = intl2.string(_modDef3849.yQ158z);
            }
            cResult[13] = description;
            cResult[14] = stringResult;
            let tmp30 = stringResult;
          } else {
            tmp30 = cResult[14];
          }
          if (cResult[15] === str2) {
            if (cResult[16] === tmp30) {
              let tmp33 = cResult[17];
            }
            if (cResult[18] === tmp4.previewText) {
              if (cResult[19] === tmp25) {
                if (cResult[20] === tmp33) {
                  let tmp36 = cResult[21];
                }
                if (cResult[22] === tmp4.previewCard) {
                  if (cResult[23] === tmp36) {
                    if (cResult[24] === tmp14) {
                      let tmp40 = cResult[25];
                    }
                    return tmp40;
                  }
                }
                const obj5 = { spacing: nativeDefault.space.PX_8, children: null };
                const items1 = [first, ];
                const obj6 = { border: "subtle", style: tmp4.previewCard, accessibilityLiveRegion: "polite", children: null };
                const items2 = [tmp14, tmp36];
                obj6.children = items2;
                items1[1] = collapsed(Card.Card, obj6);
                obj5.children = items1;
                const tmp43 = collapsed(Stack_Stack.Stack, obj5);
                cResult[22] = tmp4.previewCard;
                cResult[23] = tmp36;
                cResult[24] = tmp14;
                cResult[25] = tmp43;
                tmp40 = tmp43;
              }
            }
            const obj7 = { style: tmp4.previewText, children: null };
            const items3 = [tmp25, tmp33];
            obj7.children = items3;
            const tmp39 = collapsed(View, obj7);
            cResult[18] = tmp4.previewText;
            cResult[19] = tmp25;
            cResult[20] = tmp33;
            cResult[21] = tmp39;
            tmp36 = tmp39;
          }
          const obj8 = { variant: "text-sm/normal", color: str2, lineClamp: 2, children: tmp30 };
          const tmp35 = options(Text_Text.Text, obj8);
          cResult[15] = str2;
          cResult[16] = tmp30;
          cResult[17] = tmp35;
          tmp33 = tmp35;
        }
        const obj9 = { style: tmp4.previewTile, children: cResult[4] };
        const tmp17 = options(View, obj9);
        cResult[5] = tmp4.previewTile;
        cResult[6] = cResult[4];
        cResult[7] = tmp17;
        tmp14 = tmp17;
      }
    }
  }
  if (null != iconURL) {
    const obj10 = { source: null, style: null, resizeMode: "cover" };
    const obj11 = { uri: iconURL };
    obj10.source = obj11;
    obj10.style = tmp4.previewImage;
    let tmp11 = options(FastImageDefault, obj10);
  } else {
    const obj12 = { variant: "text-sm/semibold", color: "text-muted", children: StringUtils.getAcronym(name) };
    tmp11 = options(Text_Text.Text, obj12);
    const tmpResult = StringUtils;
  }
  cResult[1] = iconURL;
  cResult[2] = name;
  iconURL = tmp4.previewImage;
  cResult[3] = iconURL;
  cResult[4] = tmp11;
}) : (function ConjureAppPreviewCard(arg0) {
  ({ iconURL, name, description } = arg0);
  const tmp = closure_12();
  const obj = { spacing: nativeDefault.space.PX_8, children: null };
  const obj2 = { variant: "text-xs/semibold", color: "text-muted", children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef3849.KhR80V);
  const items = [options(Text_Text.Text, obj2), ];
  const obj3 = { border: "subtle", style: tmp.previewCard, accessibilityLiveRegion: "polite", children: null };
  const obj4 = { style: tmp.previewTile, children: null };
  if (null != iconURL) {
    const obj5 = { source: null, style: null, resizeMode: "cover" };
    const obj6 = { uri: iconURL };
    obj5.source = obj6;
    obj5.style = tmp.previewImage;
    let tmp6Result = options(FastImageDefault, obj5);
  } else {
    const obj7 = { variant: "text-sm/semibold", color: "text-muted", children: StringUtils.getAcronym(name) };
    tmp6Result = options(Text_Text.Text, obj7);
    const tmp3Result = StringUtils;
  }
  obj4.children = tmp6Result;
  const items1 = [options(View, obj4), ];
  const obj8 = { style: tmp.previewText, children: null };
  const obj9 = { direction: "horizontal", spacing: nativeDefault.space.PX_4, align: "center", children: null };
  const items2 = [options(Text_Text.Text, { variant: "text-md/semibold", color: "text-strong", lineClamp: 1, children: name }), options(BotTagDefault, {})];
  obj9.children = items2;
  const items3 = [collapsed(Stack_Stack.Stack, obj9), ];
  let str = "text-default";
  if ("" === description) {
    str = "text-muted";
  }
  const obj10 = { variant: "text-sm/normal", color: str, lineClamp: 2, children: null };
  if ("" === description) {
    const intl2 = util.intl;
    description = intl2.string(_modDef3849.yQ158z);
  }
  obj10.children = description;
  items3[1] = options(Text_Text.Text, obj10);
  obj8.children = items3;
  items1[1] = collapsed(View, obj8);
  obj3.children = items1;
  items[1] = collapsed(Card.Card, obj3);
  obj.children = items;
  return collapsed(Stack_Stack.Stack, obj);
});
ReactCompilerGating = fn(558);
let obj4 = { flex: 1, gap: nativeDefault.space.PX_4 };
size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/identity/native/ConjureAppIdentity.tsx");

export const ConjureAppIdentitySection = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAppIdentitySection(arg0) {
  const cResult = c.c(23);
  if (cResult[0] !== arg0) {
    ({ iconURL, canRemove, onIconChange, previewName } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = canRemove;
    cResult[2] = tmp9;
    cResult[3] = iconURL;
    cResult[4] = onIconChange;
    cResult[5] = previewName;
    let tmp6 = previewName;
    let tmp5 = onIconChange;
    let tmp4 = iconURL;
    let tmp3 = tmp9;
    let tmp2 = canRemove;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
    tmp4 = cResult[3];
    tmp5 = cResult[4];
    tmp6 = cResult[5];
  }
  if (cResult[6] === tmp2) {
    if (cResult[7] === tmp3.disabled) {
      if (cResult[8] === tmp4) {
        if (cResult[9] === tmp5) {
          let tmp10 = cResult[10];
        }
        if (cResult[11] !== tmp3) {
          const obj2 = {};
          const merged = Object.assign(tmp3);
          const tmp18 = options(closure_16, obj2);
          cResult[11] = tmp3;
          cResult[12] = tmp18;
          let tmp12 = tmp18;
        } else {
          tmp12 = cResult[12];
        }
        if (cResult[13] !== tmp3.description) {
          const trimmed = tmp3.description.trim();
          cResult[13] = tmp3.description;
          cResult[14] = trimmed;
          let tmp19 = trimmed;
        } else {
          tmp19 = cResult[14];
        }
        if (cResult[15] === tmp4) {
          if (cResult[16] === tmp6) {
            if (cResult[17] === tmp19) {
              let tmp21 = cResult[18];
            }
            if (cResult[19] === tmp10) {
              if (cResult[20] === tmp12) {
                if (cResult[21] === tmp21) {
                  let tmp25 = cResult[22];
                }
                return tmp25;
              }
            }
            const obj3 = { children: null };
            const items = [tmp10, tmp12, tmp21];
            obj3.children = items;
            const tmp28 = collapsed(closure_1_11, obj3);
            cResult[19] = tmp10;
            cResult[20] = tmp12;
            cResult[21] = tmp21;
            cResult[22] = tmp28;
            tmp25 = tmp28;
          }
        }
        const obj4 = { iconURL: tmp4, name: tmp6, description: tmp19 };
        const tmp24 = options(closure_17, obj4);
        cResult[15] = tmp4;
        cResult[16] = tmp6;
        cResult[17] = tmp19;
        cResult[18] = tmp24;
        tmp21 = tmp24;
      }
    }
  }
  const tmp11 = options(closure_15, { iconURL: tmp4, canRemove: tmp2, disabled: tmp3.disabled, onChange: tmp5 });
  cResult[6] = tmp2;
  cResult[7] = tmp3.disabled;
  cResult[8] = tmp4;
  cResult[9] = tmp5;
  cResult[10] = tmp11;
  tmp10 = tmp11;
  const obj5 = { iconURL: tmp4, canRemove: tmp2, disabled: tmp3.disabled, onChange: tmp5 };
}) : (function ConjureAppIdentitySection(iconURL) {
  iconURL = iconURL.iconURL;
  ({ canRemove, onIconChange, previewName } = iconURL);
  const merged = Object.assign(iconURL, Object.assign({ iconURL: 0, canRemove: 0, onIconChange: 0, previewName: 0 }));
  const obj = { children: null };
  const items = [options(closure_15, { iconURL, canRemove, disabled: merged.disabled, onChange: onIconChange }), , ];
  const merged1 = Object.assign(merged);
  items[1] = options(closure_16, {});
  const obj4 = { iconURL, name: previewName, description: merged.description.trim() };
  items[2] = options(closure_17, obj4);
  obj.children = items;
  return collapsed(closure_1_11, obj);
});