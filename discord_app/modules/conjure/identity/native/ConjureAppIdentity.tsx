// discord_app/modules/conjure/identity/native/ConjureAppIdentity.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3868 from "../../intl/ConjureUntranslated.messages.js";
import ImagePickerDefault from "../../../image/native/ImagePicker.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
let closure_12 = async function _pickConjureAppIcon() {
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
      return { value: "HermesInternal", done: "HermesInternal" };
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
class ConjureAppIconTile {
  constructor(arg0) {
    ({ iconURL, size, radius } = global);
    if (radius === undefined) {
      radius = 16;
    }
    ({ disabled, onChange } = global);
    onError = global.onError;
    tmp = closure_11();
    tmp2 = null == iconURL;
    items = [, ];
    items[0] = onChange;
    items[1] = onError;
    obj = { style: tmp.tileFrame, children: null };
    tmp6 = jsx;
    tmp7 = onChange;
    tmp8 = closure_2;
    callback = closure_5.useCallback(closure_4(async () => {
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              const obj4 = {
                value: (function pickConjureAppIcon() {
                          const self = this;
                          const apply = closure_1_12.apply;
                          if (typeof apply === "unknown") {
                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                          } else {
                            applyArgumentsResult = apply(self, arguments);
                          }
                          return applyArgumentsResult;
                        })(),
                done: false
              };
              return obj4;
            }
          } else if (1 === tmp7) {
            c2 = 0;
            c4 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
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
        } catch (tmp21) {
          tmp14 = c2;
          if (tmp4 === c2) {
            c4 = tmp2;
            throw tmp21;
          } else {
            c3 = tmp;
          }
        }
      }
    }), items);
    tmp4 = jsxs;
    tmp5 = View;
    str = "subtle";
    if (tmp2) {
      str = "strong";
    }
    obj1 = { variant: "secondary", border: str, radius, style: null, accessibilityLabel: null, disabled: null, onPress: null, children: null };
    items1 = [, , ];
    items1[0] = tmp.tile;
    items1[1] = { width: size, height: size };
    tileEmpty = tmp2;
    if (tmp2) {
      tileEmpty = tmp.tileEmpty;
    }
    items1[2] = tileEmpty;
    obj1.style = items1;
    intl = tmp7(tmp8[10]).intl;
    t = tmp7(tmp8[10]).t;
    obj1.accessibilityLabel = intl.string(tmp2 ? t["MsUY/S"] : t.VATxfe);
    obj1.disabled = disabled;
    obj1.onPress = callback;
    if (tmp2) {
      obj7 = { size: "md", color: null };
      tmp11 = onError;
      obj7.color = onError(tmp8[5]).colors.ICON_MUTED;
      tmp6Result = tmp6(tmp7(tmp8[15]).ImagePlusIcon, obj7);
      tmp9 = onError;
    } else {
      tmp9 = onError;
      obj8 = { source: null, style: null, resizeMode: "cover" };
      obj9 = { uri: null };
      obj9.uri = iconURL;
      obj8.source = obj9;
      obj8.style = tmp.tileImage;
      tmp6Result = tmp6(onError(tmp8[16]), obj8);
    }
    obj1.children = tmp6Result;
    items2 = [, ];
    items2[0] = tmp6(onChange(closure_2[14]).Card, obj1);
    tmp6Result1 = null;
    if (!tmp2) {
      tmp6Result1 = null;
      if (!disabled) {
        obj10 = { style: null };
        obj10.style = tmp.editIcon;
        tmp6Result1 = tmp6(tmp9(tmp8[17]), obj10);
      }
    }
    items2[1] = tmp6Result1;
    obj.children = items2;
    return tmp4(tmp5, obj);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const PX_4 = nativeDefault.space.PX_4;
const createStyles = fn(5014);
let obj2 = { nameRow: { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_16 }, tileFrame: { alignSelf: "flex-start" }, tile: { padding: 0, alignItems: "center", justifyContent: "center", overflow: "hidden" }, tileEmpty: { borderStyle: "dashed" }, tileImage: { width: "100%", height: "100%" }, editIcon: null, nameField: null };
const rect = { position: "absolute", top: -nativeDefault.space.PX_4, right: -nativeDefault.space.PX_4, pointerEvents: "none" };
obj2.editIcon = rect;
obj2.nameField = { flex: 1 };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/identity/native/ConjureAppIdentity.tsx");

export { ConjureAppIconTile };
export function ConjureAppIdentitySection(nameError) {
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
  const items1 = [closure_7(ConjureAppIconTile, { iconURL, size: tmp4[0], disabled: flag, onChange: onIconChange, onError: tmp2[1] }), ];
  const obj3 = { style: tmp.nameField, onLayout: callback, children: null };
  const obj4 = { label: null, value: null, onChange: null, maxLength: null, disabled: null, errorMessage: null };
  const intl = nameError(1113).intl;
  obj4.label = intl.string(_modDef3868.GWBCF9);
  obj4.value = name;
  obj4.onChange = onNameChange;
  obj4.maxLength = nameError(6845).MAX_PROJECT_NAME_LENGTH;
  obj4.disabled = flag;
  obj4.errorMessage = nameError;
  obj3.children = closure_7(nameError(7082).TextInput, obj4);
  items1[1] = closure_7(View, obj3);
  obj2.children = items1;
  const items2 = [closure_8(View, obj2), ];
  let tmp12Result = null;
  if (null != first) {
    const obj5 = { accessibilityLiveRegion: "polite", children: null };
    const obj6 = { variant: "text-xs/normal", color: "text-feedback-critical", children: first };
    obj5.children = closure_7(tmp8(5624).Text, obj6);
    tmp12Result = closure_7(View, obj5);
  }
  const obj7 = { children: null };
  items2[1] = tmp12Result;
  obj.children = items2;
  const items3 = [closure_8(nameError(6027).Stack, obj), ];
  const obj8 = { label: null, placeholder: null, value: null, onChange: null, maxLength: null, disabled: null };
  const intl2 = tmp8(1113).intl;
  obj8.label = intl2.string(_modDef3868.ynaGa1);
  const intl3 = tmp8(1113).intl;
  obj8.placeholder = intl3.string(_modDef3868["I+3UTL"]);
  obj8.value = description;
  obj8.onChange = onDescriptionChange;
  obj8.maxLength = nameError(6845).MAX_APP_DESCRIPTION_LENGTH;
  obj8.disabled = flag;
  items3[1] = closure_7(nameError(7253).TextArea, obj8);
  obj7.children = items3;
  return closure_8(closure_9, obj7);
}