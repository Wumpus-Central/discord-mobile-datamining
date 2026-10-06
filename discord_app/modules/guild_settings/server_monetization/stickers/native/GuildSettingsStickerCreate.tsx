// discord_app/modules/guild_settings/server_monetization/stickers/native/GuildSettingsStickerCreate.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../../../utils/AvatarUtils.tsx";
import StickersConstants from "../../../../stickers/StickersConstants.tsx";
import HelpdeskUtilsDefault from "../../../../../utils/HelpdeskUtils.tsx";
import UnicodeEmojisDefault from "../../../../emojis/UnicodeEmojis.tsx";
import useInitialValueDefault from "../../../../../hooks/useInitialValue.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import EmojiDefault from "../../../../emojis/native/Emoji.tsx";
import openEmojiPickerActionSheet from "../../../../emoji_picker/native/openEmojiPickerActionSheet.tsx";
import StickerDefault from "../../../../stickers/native/Sticker.tsx";
import useSafeAreaAvoidingInputsDefault from "../../../../safe_area/useSafeAreaAvoidingInputs.native.tsx";
import _asyncToGenerator from "../../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../_runtime/00017_react-native.js";
import EmojiStore from "../../../../emojis/EmojiStore.tsx";
import StickersStore_mod from "../../../../stickers/StickersStore.tsx";
import Constants from "../../../../../Constants.tsx";
import EmojiConstants from "../../../../emojis/EmojiConstants.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

let c4, stickerId;

let c10;
let closure_12;
let closure_15;
let closure_16;
let closure_17;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let size;
let size1;
let unpackModuleId;
({ Image: metroRequire, ScrollView: metroImportDefault } = react_native);
let StickersStore = StickersStore_mod;
({ HelpdeskArticles: c10, UPLOAD_STICKER_SIZE: unpackModuleId } = Constants);
({ EMOJI_URL_BASE_SIZE: closure_12, EmojiIntention: map1 } = EmojiConstants);
const MAX_STICKER_FILE_SIZE = StickersConstants.MAX_STICKER_FILE_SIZE;
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  title: obj3,
  description: obj4,
  help: obj5,
  stack: obj6,
  emojiPreview: obj7,
  stickerPreviewLabel: obj8,
  stickerPreview: size,
  stickerPreviewImage: size1,
};
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_8 };
obj4 = { marginBottom: nativeDefault.space.PX_16 };
obj5 = { marginBottom: nativeDefault.space.PX_16 };
obj6 = { marginTop: nativeDefault.space.PX_8 };
obj7 = {
  backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_12,
  marginBottom: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.lg,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
};
obj8 = { marginTop: nativeDefault.space.PX_8 };
size = {
  backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
  marginBottom: nativeDefault.space.PX_8,
  height: 2 * nativeDefault.space.PX_64,
  width: 2 * nativeDefault.space.PX_64,
  borderRadius: nativeDefault.radii.lg,
  justifyContent: "center",
  alignItems: "center",
};
size1 = { width: nativeDefault.space.PX_96, height: nativeDefault.space.PX_96 };
let closure_18 = createStyles(obj);
const forwardRefResult = react.forwardRef((stickerId, arg1) => {
  let UBj0aX;
  let _undefined;
  let _undefined2;
  let c12;
  let c13;
  let c6;
  let c8;
  let combined;
  let emojiURL;
  let format;
  let format2;
  let guildId;
  let hxLviw;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl9;
  let items;
  let items3;
  let items4;
  let items5;
  let obj11;
  let obj19;
  let obj5;
  let obj8;
  let obj9;
  let str;
  let str3;
  let tmp14Result;
  let tmp32Result;
  let tmp32Result2;
  let tmp6;
  let tmp8;
  stickerId = stickerId.stickerId;
  ({ guildId: importDefault, onFinish: dependencyMap } = stickerId);
  let ref2;
  c6 = undefined;
  c8 = undefined;
  size = undefined;
  c13 = undefined;
  let user;
  let closure_17;
  function hasUnsavedChanges(arg0) {
    let tmp2;
    let flag = arg0;
    if (arg0 === undefined) {
      flag = true;
    }
    if (null != user) {
      let tmp12 = null != _undefined && tmp11 !== user.name;
      if (!tmp12) {
        let tmp14 = null != c8 && tmp13 !== user.description;
        if (!tmp14) {
          tmp14 = !(null == first1 || tmp15 === closure_17);
          const tmp16 = null == first1 || tmp15 === closure_17;
        }
        tmp12 = tmp14;
      }
      tmp2 = tmp12;
    } else {
      let tmp7 = null != _undefined;
      if (flag) {
        if (tmp7) {
          let length;
          if (_undefined != null) {
            length = _undefined.length;
          }
          tmp7 = length > 0;
        }
        if (!tmp7) {
          tmp7 = null != first;
        }
        if (!tmp7) {
          tmp7 = null != first1;
        }
        if (!tmp7) {
          tmp7 = null != c8;
        }
        tmp2 = tmp7;
      } else {
        tmp2 = tmp7;
        if (tmp2) {
          let length1;
          if (_undefined != null) {
            length1 = _undefined.length;
          }
          tmp2 = length1 > 0;
        }
        if (tmp2) {
          tmp2 = null != first;
        }
        if (tmp2) {
          tmp2 = null != first1;
        }
      }
    }
    return tmp2;
  }
  let obj = function _handleImagePicker() {
    obj = _asyncToGenerator(async function () {
      let closure_1;
      let obj3;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj4 = { value, done: true };
          return obj4;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let closure_0;
          let base64;
          let mimeType;
          let errorStr;
          let originalMd5;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_0 = undefined;
              base64 = undefined;
              mimeType = undefined;
              errorStr = undefined;
              originalMd5 = undefined;
              c3 = 1;
              const obj6 = { size, preferredMimeType: "image/png" };
              c4 = 2;
              c5 = 1;
              const obj7 = { value: obj3.openImagePicker(obj6), done: false };
              obj3 = tmp(closure_2[16]);
              return obj7;
            }
          } else {
            if (1 === c4) {
              c3 = 0;
              const obj2 = closure_0(closure_2[17]);
              const result = obj2.showGuildSettingsStickerError();
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = value;
              base64 = closure_0.base64;
              mimeType = closure_0.mimeType;
              errorStr = closure_0.errorStr;
              originalMd5 = closure_0.originalMd5;
              if ("Cancelled" === errorStr) {
                c3 = 0;
                c5 = 3;
                return { value: "IconComponent", done: null };
              } else {
                if (null != base64) {
                  if ("image/png" === mimeType) {
                    closure_129_11(base64);
                    closure_129_13(originalMd5);
                    c3 = 0;
                  }
                }
                const _Error = Error;
                const self = this;
                const self2 = this;
                const error = new Error("Invalid image type, only PNG is supported.");
                throw error;
              }
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp26) {
          closure_2 = tmp26;
          if (0 === c3) {
            c5 = 3;
            throw tmp26;
          } else {
            c4 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  obj = function _handleSave() {
    let originalMd5;
    obj = _asyncToGenerator(async () => {
      let description;
      let description2;
      let obj11;
      let obj13;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c5;
        try {
          let closure_2;
          c6 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_2 = tmp;
              c5 = 1;
              if (null == stickerId) {
                if (null != _undefined) {
                  if (null != first1) {
                    if (null != uri) {
                      const obj6 = {
                        guildId,
                        name: tmp23,
                        tags: obj13.getStickerTagForEmoji(tmp43),
                        description,
                        uri: tmp44,
                        mimeType: "image/png",
                        platform: "mobile",
                        originalMd5,
                      };
                      const createGuildSticker = description(closure_2[18]).createGuildSticker;
                      const tmp47 = description(closure_2[18]);
                      obj13 = description(closure_2[19]);
                      description = closure_2_8;
                      if (closure_2_8 == null) {
                        description = "";
                      }
                      c3 = 2;
                      c6 = 1;
                      const obj7 = { value: createGuildSticker(obj6), done: false };
                      return obj7;
                    }
                  }
                }
                c5 = 0;
                c6 = 3;
                return { value: "IconComponent", done: null };
              } else {
                if (null != _undefined) {
                  if (null != first1) {
                    const obj8 = { name: tmp34, tags: obj11.getStickerTagForEmoji(tmp35), description: description2 };
                    const updateGuildSticker = description(closure_2[18]).updateGuildSticker;
                    const tmp38 = description(closure_2[18]);
                    obj11 = description(closure_2[19]);
                    description2 = closure_2_8;
                    if (closure_2_8 == null) {
                      description2 = "";
                    }
                    c3 = 3;
                    c6 = 1;
                    const obj9 = { value: updateGuildSticker(guildId, tmp33, obj8), done: false };
                    return obj9;
                  }
                }
                c5 = 0;
                c6 = 3;
                return { value: "IconComponent", done: null };
              }
            }
          } else {
            if (1 === c3) {
              c5 = 0;
              const obj5 = description(closure_2[17]);
              const result = obj5.showGuildSettingsStickerError();
            } else {
              if (2 === c3) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 0;
                  c6 = 3;
                  const obj10 = { value, done: true };
                  return obj10;
                } else {
                  closure_130_2();
                  const obj3 = description(closure_2[17]);
                  const result1 = obj3.showGuildSettingsStickerSuccess();
                }
              } else if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                c6 = 3;
                const obj12 = { value, done: true };
                return obj12;
              } else {
                closure_130_2();
                obj = description(closure_2[17]);
                const result2 = obj.showGuildSettingsStickerSuccess();
              }
              c5 = 0;
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp26) {
          let closure_4 = tmp26;
          if (0 === c5) {
            c6 = 3;
            throw tmp26;
          } else {
            c3 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = hasUnsavedChanges();
  obj = ref2;
  const ref = ref2.useRef(null);
  const ref1 = ref2.useRef(null);
  ref2 = ref2.useRef(null);
  [c6, tmp6] = ref1(ref2.useState(undefined), 2);
  let c7 = tmp6;
  const tmp5 = ref1(ref2.useState(undefined), 2);
  let tmp7 = ref1(ref2.useState(undefined), 2);
  [c8, tmp8] = tmp7;
  StickersStore = tmp8;
  let tmp9 = ref1(ref2.useState(undefined), 2);
  const uri = tmp9[0];
  let closure_11 = tmp9[1];
  const tmp11 = ref1(ref2.useState(undefined), 2);
  [c12, c13] = tmp11;
  let tmp12 = ref1(ref2.useState(undefined), 2);
  const first1 = tmp12[0];
  const onPressEmoji = tmp12[1];
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  let obj2 = { insets, inputs: items, scrollViewRef: ref };
  let obj3 = { ref: ref1, offset: { type: "toRef", ref: ref2 } };
  items = [obj3, { ref: ref2, offset: { type: "toBottom" } }];
  const onFocus = useSafeAreaAvoidingInputsDefault(obj2).onFocus;
  let stickerById;
  let tmp16 = useInitialValueDefault;
  if (null != stickerId) {
    stickerById = StickersStore.getStickerById(stickerId);
  }
  function handleImagePicker() {
    return obj(...arguments);
  }
  const tmp16Result = tmp16(stickerById);
  user = tmp16Result;
  const tmp20 = useInitialValueDefault(() => {
    if (null != user) {
      let customEmojiById = null;
      if (null != user.tags) {
        customEmojiById = EmojiStore.getCustomEmojiById(user.tags);
      }
      if (null != customEmojiById) {
        return customEmojiById;
      } else {
        let tmp8;
        if (null != user.tags) {
          let tags;
          obj = UnicodeEmojisDefault;
          if (obj.hasSurrogates(user.tags)) {
            const obj2 = UnicodeEmojisDefault;
            tags = obj2.convertSurrogateToName(user.tags, false);
          } else {
            tags = user.tags;
          }
          tmp8 = tags;
        }
        let tmp9;
        if (null != tmp8) {
          const obj3 = UnicodeEmojisDefault;
          const byName = obj3.getByName(tmp8);
          tmp9 = byName;
        }
        let tmp13;
        if (null != tmp9) {
          tmp13 = tmp9;
        }
        return tmp13;
      }
    }
  });
  closure_17 = tmp20;
  const imperativeHandle = obj.useImperativeHandle(arg1, () => ({ hasUnsavedChanges }));
  const items1 = [stickerId, tmp16Result, tmp20];
  const effect = obj.useEffect(() => {
    const tmp = null != stickerId && null != user;
    if (tmp) {
      onPressEmoji(closure_17);
      _undefined2(user.name);
      _undefined2(user.description);
      const current = ref1.current;
      if (current != null) {
        current.setText(user.name);
      }
      const current2 = ref2.current;
      if (current2 != null) {
        let str = user.description;
        const setText = current2.setText;
        if (str == null) {
          str = "";
        }
        setText(str);
      }
    }
  }, items1);
  const tmp23 = closure_17;
  let obj4 = {
    ref,
    style: tmp.container,
    keyboardShouldPersistTaps: "always",
    contentContainerStyle: obj5,
    children: items3,
  };
  obj5 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + insets.bottom };
  let tmp23Result = null;
  const tmp24 = c7;
  if (null == stickerId) {
    const tmp26 = user;
    let obj6 = { variant: "heading-md/semibold", style: tmp.title, children: intl.string(stickerId(1126).t["9N2OWD"]) };
    const Text = stickerId(4892).Text;
    intl = stickerId(1126).intl;
    const items2 = [onPressEmoji(Text, obj6), , ,];
    let obj7 = {
      variant: "text-sm/medium",
      color: "text-muted",
      style: tmp.description,
      children: format(hxLviw, obj8),
    };
    const Text2 = stickerId(4892).Text;
    const intl2 = stickerId(1126).intl;
    format = intl2.format;
    obj8 = { fileSize: obj9.formatKbSize(first1, { useKibibytes: true }) };
    hxLviw = stickerId(1126).t.hxLviw;
    obj9 = stickerId(5324);
    items2[1] = onPressEmoji(Text2, obj7);
    let obj10 = { variant: "text-sm/medium", color: "text-muted", style: tmp.help, children: format2(UBj0aX, obj11) };
    const Text3 = stickerId(4892).Text;
    const intl3 = stickerId(1126).intl;
    format2 = intl3.format;
    obj11 = { articleUrl: tmp14Result.getArticleURL(uri.STICKERS_UPLOAD) };
    UBj0aX = stickerId(1126).t.UBj0aX;
    tmp14Result = HelpdeskUtilsDefault;
    items2[2] = onPressEmoji(Text3, obj10);
    let obj12 = { text: intl4.string(stickerId(1126).t.O1REe1), onPress: handleImagePicker, variant: str };
    const Button = stickerId(5601).Button;
    intl4 = stickerId(1126).intl;
    str = "secondary";
    const tmp27 = onPressEmoji;
    if (null == uri) {
      str = "primary";
    }
    let obj13 = { children: items2 };
    items2[3] = tmp27(Button, obj12);
    tmp23Result = tmp23(tmp26, obj13);
  }
  items3 = [tmp23Result];
  const obj14 = { style: tmp.stack, children: items4 };
  const Stack = stickerId(5600).Stack;
  const obj15 = {
    variant: "text-sm/semibold",
    color: "text-subtle",
    style: tmp.stickerPreviewLabel,
    children: intl5.string(stickerId(1126).t.gjdiKE),
  };
  const Text4 = stickerId(4892).Text;
  intl5 = stickerId(1126).intl;
  items4 = [onPressEmoji(Text4, obj15), , , , , ,];
  const obj16 = {
    style: tmp.stickerPreview,
    disabled: null != tmp16Result,
    onPress: handleImagePicker,
    accessibilityRole: "button",
    accessibilityLabel: intl6.string(stickerId(1126).t.O1REe1),
    children: tmp32Result,
  };
  const PressableHighlight = stickerId(5916).PressableHighlight;
  intl6 = stickerId(1126).intl;
  if (null != tmp16Result) {
    const obj17 = { sticker: tmp16Result, size: nativeDefault.space.PX_96, animated: true };
    const tmp14Result4 = StickerDefault;
    tmp32Result = tmp32(tmp14Result4, obj17);
  } else if (null != uri) {
    const tmp34 = c6;
    const obj18 = { source: obj19, style: tmp.stickerPreviewImage, resizeMode: "contain" };
    obj19 = { uri };
    tmp32Result = tmp32(c6, obj18);
  } else {
    tmp32Result = tmp32(tmp31(17799).StickerPlusIcon, { size: "lg" });
  }
  items4[1] = onPressEmoji(PressableHighlight, obj16);
  const obj20 = {
    variant: "text-sm/semibold",
    color: "text-subtle",
    style: tmp.stickerPreviewLabel,
    children: intl7.string(stickerId(1126).t["3BQmiC"]),
  };
  const Text5 = tmp31(4892).Text;
  intl7 = tmp31(1126).intl;
  items4[2] = onPressEmoji(Text5, obj20);
  const obj21 = {
    style: tmp.emojiPreview,
    onPress() {
      obj = openEmojiPickerActionSheet;
      const obj2 = { pickerIntention: map1.GUILD_STICKER_RELATED_EMOJI, guildId: importDefault, onPressEmoji };
      const result = obj.openEmojiPickerActionSheet(obj2);
    },
    children: items5,
  };
  const PressableHighlight2 = tmp31(5916).PressableHighlight;
  if (null != first1) {
    const obj22 = {
      fastImageStyle: { width: 24, height: 24 },
      name: null == first1.id ? first1.surrogates : first1.name,
      src: emojiURL,
    };
    emojiURL = undefined;
    const tmp14Result5 = EmojiDefault;
    if (null != first1.id) {
      const obj23 = { id: null, animated: null, size };
      ({ id: obj25.id, animated: obj25.animated } = first1);
      const tmp14Result6 = AvatarUtilsDefault;
      emojiURL = tmp14Result6.getEmojiURL(obj23);
    }
    tmp32Result2 = tmp32(tmp14Result5, obj22);
  } else {
    tmp32Result2 = tmp32(tmp31(8444).ReactionIcon, { size: "md", color: "text-subtle" });
  }
  items5 = [tmp32Result2];
  const Text6 = tmp31(4892).Text;
  if (null != first1) {
    const _HermesInternal = HermesInternal;
    combined = ":" + first1.name + ":";
  } else {
    const intl8 = tmp31(1126).intl;
    combined = intl8.string(tmp31(1126).t.QTK0TJ);
  }
  items5[1] = onPressEmoji(Text6, {
    variant: "text-md/semibold",
    color: "input-placeholder-text-default",
    children: combined,
  });
  items4[3] = tmp23(PressableHighlight2, obj21);
  const obj24 = {
    ref: ref1,
    label: intl9.string(stickerId(1126).t["0VRh6n"]),
    placeholder: intl10.string(stickerId(1126).t["3fGttT"]),
    onChange: tmp6,
    onFocus,
    onSubmitEditing() {
      const current = ref2.current;
      if (current != null) {
        current.focus();
      }
      const current2 = ref.current;
      if (current2 != null) {
        current2.scrollToEnd({ animated: true });
      }
    },
    disabled: false,
    clearable: true,
    returnKeyType: "next",
    submitBehavior: "submit",
  };
  const TextInput = tmp31(6105).TextInput;
  intl9 = tmp31(1126).intl;
  intl10 = tmp31(1126).intl;
  items4[4] = onPressEmoji(TextInput, obj24);
  const obj26 = {
    ref: ref2,
    maxLength: 100,
    label: intl11.string(stickerId(1126).t.uGccej),
    placeholder: intl12.string(stickerId(1126).t.zwR0fa),
    onChange: tmp8,
    onFocus,
  };
  const TextArea = tmp31(6587).TextArea;
  intl11 = tmp31(1126).intl;
  intl12 = tmp31(1126).intl;
  items4[5] = onPressEmoji(TextArea, obj26);
  const obj27 = {
    onPress: function handleSave() {
      return obj(...arguments);
    },
    text: intl13.string(stickerId(1126).t["R3BPH+"]),
    variant: str3,
    disabled: !hasUnsavedChanges(false),
    loading: false,
  };
  const Button2 = tmp31(5601).Button;
  intl13 = tmp31(1126).intl;
  str3 = "secondary";
  if (hasUnsavedChanges(false)) {
    str3 = "primary";
  }
  items4[6] = onPressEmoji(Button2, obj27);
  items3[1] = tmp23(Stack, obj14);
  return tmp23(tmp24, obj4);
});
size = size_mod;
let result = size.fileFinishedImporting(
  "modules/guild_settings/server_monetization/stickers/native/GuildSettingsStickerCreate.tsx",
);

export default forwardRefResult;
