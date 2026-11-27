// discord_app/modules/conjure/identity/native/ConjureAppIdentity.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef4245 from "../../intl/ConjureUntranslated.messages.js";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import Card from "../../../../design/components/Card/native/Card.native.tsx";
import ImagePickerDefault from "../../../image/native/ImagePicker.tsx";
import UploadIcon from "../../../../design/components/Icon/native/redesign/generated/UploadIcon.tsx";
import MagicWandIcon from "../../../../design/components/Icon/native/redesign/generated/MagicWandIcon.tsx";
import ImagePlusIcon from "../../../../design/components/Icon/native/redesign/generated/ImagePlusIcon.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
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
      return { value: "HermesInternal", done: null };
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
            items = [, , ];
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
    iconURL = global.iconURL;
    size = global.size;
    num = global.radius;
    if (num === undefined) {
      num = 16;
    }
    c2 = num;
    disabled = global.disabled;
    onChange = global.onChange;
    onError = global.onError;
    onConjure = global.onConjure;
    closure_7 = undefined;
    tmp = closure_11();
    items = [, ];
    items[0] = onChange;
    items[1] = onError;
    callback = onError.useCallback(onChange(function*() {
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
          return { value: "HermesInternal", done: null };
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
            return { value: "HermesInternal", done: null };
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
              let tmp14 = closure_129_5;
              if (!("error" in closure_128_0)) {
                tmp14(null);
                closure_129_4(closure_128_0.icon);
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
    closure_7 = callback;
    items1 = [, ];
    items1[0] = onConjure;
    items1[1] = callback;
    memo = onError.useMemo(() => {
      let tmp2 = null;
      if (null != onConjure) {
        const obj = { label: null, IconComponent: null, action: null };
        const intl = util.intl;
        obj.label = intl.string(util.t["MsUY/S"]);
        obj.IconComponent = UploadIcon.UploadIcon;
        obj.action = action;
        items = [obj, ];
        const obj2 = { label: null, IconComponent: null, action: null };
        const intl2 = util.intl;
        obj2.label = intl2.string(_modDef4245["oAG/BY"]);
        obj2.IconComponent = MagicWandIcon.MagicWandIcon;
        obj2.action = tmp;
        items[1] = obj2;
        tmp2 = items;
      }
      return tmp2;
    }, items1);
    obj = { style: tmp.tileFrame, children: null };
    tmp4 = jsxs;
    tmp5 = onConjure;
    if (null == memo) {
      tmp10 = closure_7;
      tmp11 = IconTileCard;
      obj1 = { iconURL: null, size: null, radius: null, disabled: null, onPress: null };
      obj1.iconURL = iconURL;
      obj1.size = size;
      obj1.radius = num;
      obj1.disabled = disabled;
      obj1.onPress = callback;
      tmp9 = closure_7(IconTileCard, obj1);
      tmp6 = closure_7;
    } else {
      tmp6 = closure_7;
      tmp7 = iconURL;
      tmp8 = c2;
      obj5 = { items: null, align: "below", children: null };
      obj5.items = memo;
      obj5.children = function children(ref) {
        const obj = { ref: ref.ref, accessibilityActions: ref.accessibilityActions, onAccessibilityAction: ref.onAccessibilityAction, children: metroImportDefault(IconTileCard, { iconURL, size, radius: num, disabled, onPress: ref.onPress }) };
        return metroImportDefault(View, obj);
      };
      tmp9 = closure_7(iconURL(c2[16]).ContextMenu, obj5);
    }
    items2 = [, ];
    items2[0] = tmp9;
    tmp6Result = null;
    if (null != iconURL) {
      tmp6Result = null;
      if (!disabled) {
        tmp13 = size;
        tmp14 = c2;
        obj6 = { style: null };
        obj6.style = tmp.editIcon;
        tmp6Result = tmp6(size(c2[17]), obj6);
      }
    }
    items2[1] = tmp6Result;
    obj.children = items2;
    return tmp4(tmp5, obj);
  }
}
function IconTileCard(arg0) {
  ({ iconURL, size } = arg0);
  ({ radius, disabled, onPress } = arg0);
  const tmp = closure_11();
  let str = "subtle";
  if (null == iconURL) {
    str = "strong";
  }
  const obj = { variant: "secondary", border: str, radius, style: null, accessibilityLabel: null, disabled: null, onPress: null, children: null };
  items = [tmp.tile, { width: size, height: size }, ];
  let tileEmpty = tmp2;
  if (null == iconURL) {
    tileEmpty = tmp.tileEmpty;
  }
  items[2] = tileEmpty;
  obj.style = items;
  const intl = util.intl;
  const t = util.t;
  obj.accessibilityLabel = intl.string(null == iconURL ? t["MsUY/S"] : t.VATxfe);
  obj.disabled = disabled;
  obj.onPress = onPress;
  if (null == iconURL) {
    const obj2 = { size: "md", color: nativeDefault.colors.ICON_MUTED };
    let tmp3Result = metroImportDefault(ImagePlusIcon.ImagePlusIcon, obj2);
  } else {
    const obj3 = { source: null, style: null, resizeMode: "cover" };
    const obj4 = { uri: iconURL };
    obj3.source = obj4;
    obj3.style = tmp.tileImage;
    tmp3Result = metroImportDefault(FastImageDefault, obj3);
  }
  obj.children = tmp3Result;
  return metroImportDefault(Card.Card, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const PX_4 = nativeDefault.space.PX_4;
const createStyles = fn(5043);
let obj2 = { nameRow: { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_16 }, tileFrame: { alignSelf: "flex-start" }, tile: { padding: 0, alignItems: "center", justifyContent: "center", overflow: "hidden" }, tileEmpty: { borderStyle: "dashed" }, tileImage: { width: "100%", height: "100%" }, editIcon: null, nameField: null };
const rect = { position: "absolute", top: -nativeDefault.space.PX_4, right: -nativeDefault.space.PX_4, pointerEvents: "none" };
obj2.editIcon = rect;
obj2.nameField = { flex: 1 };
let closure_11 = createStyles.createStyles(obj2);
let size = fn(2);
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
  items = [nameError];
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
  const intl = nameError(1112).intl;
  obj4.label = intl.string(_modDef4245.GWBCF9);
  obj4.value = name;
  obj4.onChange = onNameChange;
  obj4.maxLength = nameError(6935).MAX_PROJECT_NAME_LENGTH;
  obj4.disabled = flag;
  obj4.errorMessage = nameError;
  obj3.children = closure_7(nameError(7274).TextInput, obj4);
  items1[1] = closure_7(View, obj3);
  obj2.children = items1;
  const items2 = [closure_8(View, obj2), ];
  let tmp12Result = null;
  if (null != first) {
    const obj5 = { accessibilityLiveRegion: "polite", children: null };
    const obj6 = { variant: "body-xs/normal", color: "text-feedback-critical", children: first };
    obj5.children = closure_7(tmp8(5634).Text, obj6);
    tmp12Result = closure_7(View, obj5);
  }
  const obj7 = { children: null };
  items2[1] = tmp12Result;
  obj.children = items2;
  const items3 = [closure_8(nameError(6115).Stack, obj), ];
  const obj8 = { label: null, placeholder: null, value: null, onChange: null, maxLength: null, disabled: null };
  const intl2 = tmp8(1112).intl;
  obj8.label = intl2.string(_modDef4245.ynaGa1);
  const intl3 = tmp8(1112).intl;
  obj8.placeholder = intl3.string(_modDef4245["I+3UTL"]);
  obj8.value = description;
  obj8.onChange = onDescriptionChange;
  obj8.maxLength = nameError(6935).MAX_APP_DESCRIPTION_LENGTH;
  obj8.disabled = flag;
  items3[1] = closure_7(nameError(7440).TextArea, obj8);
  obj7.children = items3;
  return closure_8(closure_9, obj7);
}