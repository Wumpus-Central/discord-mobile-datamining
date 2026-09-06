// discord_app/modules/guild_settings/server_monetization/stickers/native/GuildSettingsStickerCreate.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../../../utils/AvatarUtils.tsx";
import HelpdeskUtilsDefault from "../../../../../utils/HelpdeskUtils.tsx";
import UnicodeEmojisDefault from "../../../../emojis/UnicodeEmojis.tsx";
import useInitialValueDefault from "../../../../../hooks/useInitialValue.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import EmojiDefault from "../../../../emojis/native/Emoji.tsx";
import StickerDefault from "../../../../stickers/native/Sticker.tsx";
import openEmojiPickerActionSheet from "../../../../emoji_picker/native/openEmojiPickerActionSheet.tsx";
import useSafeAreaAvoidingInputsDefault from "../../../../safe_area/useSafeAreaAvoidingInputs.native.tsx";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import EmojiStore from "../../../../emojis/EmojiStore.tsx";
import StickersStore from "../../../../stickers/StickersStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const Constants = fn(1074);
({ HelpdeskArticles: c10, UPLOAD_STICKER_SIZE: closure_11 } = Constants);
const EmojiConstants = fn(1374);
({ EMOJI_URL_BASE_SIZE: closure_12, EmojiIntention: map1 } = EmojiConstants);
const MAX_STICKER_FILE_SIZE = fn(1938).MAX_STICKER_FILE_SIZE;
const jsxProd = fn(21);
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = jsxProd);
fn(4560);
let obj = {
  container: null,
  title: null,
  description: null,
  help: null,
  stack: null,
  emojiPreview: null,
  stickerPreviewLabel: null,
  stickerPreview: null,
  stickerPreviewImage: null,
};
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.container = obj;
const createStyles = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_8 };
obj.title = createStyles;
obj.description = { marginBottom: nativeDefault.space.PX_16 };
let obj2 = { marginBottom: nativeDefault.space.PX_16 };
obj.help = { marginBottom: nativeDefault.space.PX_16 };
let obj3 = { marginBottom: nativeDefault.space.PX_16 };
obj.stack = { marginTop: nativeDefault.space.PX_8 };
let obj4 = { marginTop: nativeDefault.space.PX_8 };
obj.emojiPreview = {
  backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_12,
  marginBottom: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.lg,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
};
let obj5 = {
  backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_12,
  marginBottom: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.lg,
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
};
obj.stickerPreviewLabel = { marginTop: nativeDefault.space.PX_8 };
let size = {
  backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
  marginBottom: nativeDefault.space.PX_8,
  height: 2 * nativeDefault.space.PX_64,
  width: 2 * nativeDefault.space.PX_64,
  borderRadius: nativeDefault.radii.lg,
  justifyContent: "center",
  alignItems: "center",
};
obj.stickerPreview = size;
const size1 = { width: nativeDefault.space.PX_96, height: nativeDefault.space.PX_96 };
obj.stickerPreviewImage = size1;
let closure_18 = createStyles.createStyles(obj);
let obj6 = { marginTop: nativeDefault.space.PX_8 };
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_settings/server_monetization/stickers/native/GuildSettingsStickerCreate.tsx",
);

export default noop.forwardRef((stickerId, arg1) => {
  stickerId = stickerId.stickerId;
  ({ guildId: importDefault, onFinish: dependencyMap } = stickerId);
  let ref2;
  c6 = undefined;
  c8 = undefined;
  size = undefined;
  c13 = undefined;
  let user;
  closure_17 = undefined;
  function hasUnsavedChanges(arg0) {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = true;
    }
    if (null != user) {
      let tmp12 = null != _undefined && tmp11 !== user.name;
      if (!tmp12) {
        let tmp14 = null != c8 && tmp13 !== user.description;
        if (!tmp14) {
          let tmp16 = null == first1;
          if (!tmp16) {
            tmp16 = tmp15 === closure_17;
          }
          tmp14 = !tmp16;
        }
        tmp12 = tmp14;
      }
      let tmp2 = tmp12;
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
        if (tmp7) {
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
  closure_19 = async function _handleImagePicker() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            stickerId = tmp7;
            closure_128_0 = undefined;
            let base64;
            let mimeType;
            let errorStr;
            let originalMd5;
            c3 = 1;
            let obj2 = tmp3(tmp31[16]);
            let obj1 = { size, preferredMimeType: "image/png" };
            c4 = 2;
            c5 = 1;
            obj2 = { value: null, done: false };
            obj2.value = obj2.openImagePicker(obj1);
            return obj2;
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
            obj1 = stickerId(tmp31[17]);
            const result = obj1.showGuildSettingsStickerError();
            c5 = 3;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            base64 = closure_128_0.base64;
            mimeType = closure_128_0.mimeType;
            errorStr = closure_128_0.errorStr;
            originalMd5 = closure_128_0.originalMd5;
            if ("Cancelled" === errorStr) {
              c3 = 0;
              c5 = 3;
              return { value: "HermesInternal", done: null };
            } else if (null != base64) {
              if ("image/png" === mimeType) {
                closure_129_11(base64);
                closure_129_13(originalMd5);
                c3 = 0;
              }
            }
          }
          const _Error = Error;
          const error = new Error("Invalid image type, only PNG is supported.");
          throw error;
        }
      } catch (tmp31) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp31;
        } else {
          c4 = tmp;
        }
      }
    }
  };
  closure_20 = async function _handleSave() {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c6 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c5 = 1;
            if (null == stickerId) {
              if (null != _undefined) {
                if (null != first1) {
                  if (null != uri) {
                    const obj1 = {
                      guildId,
                      name: tmp26,
                      tags: null,
                      description: null,
                      uri: null,
                      mimeType: "image/png",
                      platform: "mobile",
                      originalMd5: null,
                    };
                    const obj13 = description(tmp3[18]);
                    obj1.tags = description(tmp3[19]).getStickerTagForEmoji(tmp46);
                    description = EmojiStore;
                    if (EmojiStore == null) {
                      description = "";
                    }
                    obj1.description = description;
                    obj1.uri = tmp47;
                    obj1.originalMd5 = originalMd5;
                    c3 = 2;
                    c6 = 1;
                    let obj2 = { value: obj13.createGuildSticker(obj1), done: false };
                    return obj2;
                  }
                }
              }
              c5 = 0;
              c6 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              if (null != _undefined) {
                if (null != first1) {
                  const obj3 = { name: tmp38, tags: null, description: null };
                  const obj10 = description(tmp3[18]);
                  obj3.tags = description(tmp3[19]).getStickerTagForEmoji(tmp39);
                  let description2 = EmojiStore;
                  if (EmojiStore == null) {
                    description2 = "";
                  }
                  obj3.description = description2;
                  c3 = 3;
                  c6 = 1;
                  let obj4 = { value: obj10.updateGuildSticker(guildId, tmp37, obj3), done: false };
                  return obj4;
                }
              }
              c5 = 0;
              c6 = 3;
              return { value: "HermesInternal", done: null };
            }
          }
        } else {
          if (1 === tmp7) {
            c5 = 0;
            obj4 = description(tmp3[17]);
            const result = obj4.showGuildSettingsStickerError();
            c6 = 3;
          } else {
            if (2 === tmp7) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 !== 2) {
                closure_130_2();
                obj2 = description(tmp3[17]);
                const result1 = obj2.showGuildSettingsStickerSuccess();
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c6 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_130_2();
              obj = description(tmp3[17]);
              const result2 = obj.showGuildSettingsStickerSuccess();
            }
            c5 = 0;
          }
          c5 = 0;
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        }
      } catch (tmp29) {
        closure_4 = tmp29;
        if (tmp4 === c5) {
          c6 = tmp2;
          throw tmp29;
        } else {
          c3 = tmp;
        }
      }
    }
  };
  let tmp = hasUnsavedChanges();
  const ref = ref2.useRef(null);
  const ref1 = ref2.useRef(null);
  ref2 = ref2.useRef(null);
  [c6, tmp6] = ref1(ref2.useState(undefined), 2);
  c7 = tmp6;
  const tmp5 = ref1(ref2.useState(undefined), 2);
  [c8, tmp8] = ref1(ref2.useState(undefined), 2);
  StickersStore = tmp8;
  const tmp9 = ref1(ref2.useState(undefined), 2);
  const uri = tmp9[0];
  closure_11 = tmp9[1];
  let tmp7 = ref1(ref2.useState(undefined), 2);
  [c12, c13] = ref1(ref2.useState(undefined), 2);
  let tmp12 = ref1(ref2.useState(undefined), 2);
  const first1 = tmp12[0];
  const onPressEmoji = tmp12[1];
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  let obj = { insets, inputs: null, scrollViewRef: ref };
  obj = { ref: ref1, offset: { type: "toRef", ref: ref2 } };
  const items = [obj, { ref: ref2, offset: { type: "toBottom" } }];
  obj.inputs = items;
  const onFocus = useSafeAreaAvoidingInputsDefault(obj).onFocus;
  let stickerById;
  const tmp11 = ref1(ref2.useState(undefined), 2);
  if (null != stickerId) {
    stickerById = StickersStore.getStickerById(stickerId);
  }
  function handleImagePicker() {
    const self = this;
    const apply = closure_19.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  const tmp16Result = useInitialValueDefault(stickerById);
  user = tmp16Result;
  const tmp20 = useInitialValueDefault(() => {
    let tags = closure_16;
    if (null != closure_16) {
      let customEmojiById = null;
      if (null != tags.tags) {
        customEmojiById = EmojiStore.getCustomEmojiById(tags.tags);
      }
      if (null != customEmojiById) {
        return customEmojiById;
      } else if (null == tags.tags) {
        let tmp8;
        if (null != undefined) {
          const byName = UnicodeEmojisDefault.getByName(undefined);
          tmp8 = byName;
        }
        let tmp12;
        if (null != tmp8) {
          tmp12 = tmp8;
        }
        return tmp12;
      } else {
        if (obj.hasSurrogates(tags.tags)) {
          tags = tags.tags;
          let tags2 = UnicodeEmojisDefault.convertSurrogateToName(tags, false);
        } else {
          tags2 = tags.tags;
        }
        obj = UnicodeEmojisDefault;
      }
    }
  });
  closure_17 = tmp20;
  const imperativeHandle = obj.useImperativeHandle(arg1, () => ({ hasUnsavedChanges }));
  const items1 = [stickerId, tmp16Result, tmp20];
  const effect = obj.useEffect(() => {
    let tmp = null != stickerId;
    if (tmp) {
      tmp = null != user;
    }
    if (tmp) {
      onPressEmoji(closure_17);
      _undefined(user.name);
      _undefined2(user.description);
      const current = ref1.current;
      if (current != null) {
        current.setText(user.name);
      }
      const current2 = ref2.current;
      if (current2 != null) {
        let str = user.description;
        if (str == null) {
          str = "";
        }
        current2.setText(str);
      }
    }
  }, items1);
  let obj1 = {
    ref,
    style: tmp.container,
    keyboardShouldPersistTaps: "always",
    contentContainerStyle: null,
    children: null,
  };
  obj1.contentContainerStyle = {
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingBottom: nativeDefault.space.PX_16 + insets.bottom,
  };
  let tmp23Result = null;
  if (null == stickerId) {
    let obj3 = { variant: "heading-md/semibold", style: tmp.title, children: null };
    const intl = stickerId(1114).intl;
    obj3.children = intl.string(stickerId(1114).t["9N2OWD"]);
    const items2 = [onPressEmoji(stickerId(4556).Text, obj3), , ,];
    let obj4 = { variant: "text-sm/medium", color: "text-muted", style: tmp.description, children: null };
    const intl2 = stickerId(1114).intl;
    let obj5 = { fileSize: null };
    let obj8 = stickerId(4457);
    obj5.fileSize = obj8.formatKbSize(first1, { useKibibytes: true });
    obj4.children = intl2.format(stickerId(1114).t.hxLviw, obj5);
    items2[1] = onPressEmoji(stickerId(4556).Text, obj4);
    let obj6 = { variant: "text-sm/medium", color: "text-muted", style: tmp.help, children: null };
    const intl3 = stickerId(1114).intl;
    const obj7 = { articleUrl: null };
    let tmp14Result = HelpdeskUtilsDefault;
    obj7.articleUrl = tmp14Result.getArticleURL(uri.STICKERS_UPLOAD);
    obj6.children = intl3.format(stickerId(1114).t.UBj0aX, obj7);
    items2[2] = onPressEmoji(stickerId(4556).Text, obj6);
    obj8 = { text: null, onPress: null, variant: null };
    const intl4 = stickerId(1114).intl;
    obj8.text = intl4.string(stickerId(1114).t.O1REe1);
    obj8.onPress = handleImagePicker;
    let str = "secondary";
    if (null == uri) {
      str = "primary";
    }
    const obj9 = { children: null };
    obj8.variant = str;
    items2[3] = onPressEmoji(stickerId(4975).Button, obj8);
    obj9.children = items2;
    tmp23Result = tmp23(user, obj9);
  }
  const items3 = [tmp23Result];
  let obj10 = { style: tmp.stack, children: null };
  const obj11 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.stickerPreviewLabel, children: null };
  const intl5 = stickerId(1114).intl;
  obj11.children = intl5.string(stickerId(1114).t.gjdiKE);
  const items4 = [onPressEmoji(stickerId(4556).Text, obj11), , , , , ,];
  const obj12 = {
    style: tmp.stickerPreview,
    disabled: null != tmp16Result,
    onPress: handleImagePicker,
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null,
  };
  const intl6 = stickerId(1114).intl;
  obj12.accessibilityLabel = intl6.string(stickerId(1114).t.O1REe1);
  if (null != tmp16Result) {
    let obj13 = { sticker: tmp16Result, size: null, animated: true };
    tmp14Result = StickerDefault;
    obj13.size = nativeDefault.space.PX_96;
    let tmp32Result = tmp32(tmp14Result, obj13);
  } else if (null != uri) {
    const obj14 = { source: null, style: null, resizeMode: "contain" };
    const obj15 = { uri };
    obj14.source = obj15;
    obj14.style = tmp.stickerPreviewImage;
    tmp32Result = tmp32(c6, obj14);
  } else {
    tmp32Result = tmp32(tmp31(17581).StickerPlusIcon, { size: "lg" });
  }
  obj12.children = tmp32Result;
  items4[1] = onPressEmoji(stickerId(5123).PressableHighlight, obj12);
  const obj16 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.stickerPreviewLabel, children: null };
  const intl7 = tmp31(1114).intl;
  obj16.children = intl7.string(stickerId(1114).t["3BQmiC"]);
  items4[2] = onPressEmoji(stickerId(4556).Text, obj16);
  const obj17 = {
    style: tmp.emojiPreview,
    onPress() {
      const obj = { pickerIntention: constants.GUILD_STICKER_RELATED_EMOJI, guildId, onPressEmoji };
      const result = obj.openEmojiPickerActionSheet(obj);
    },
    children: null,
  };
  if (null != first1) {
    const obj18 = {
      fastImageStyle: { width: 24, height: 24 },
      name: null == first1.id ? first1.surrogates : first1.name,
      src: null,
    };
    let emojiURL;
    if (null != first1.id) {
      const obj19 = { id: null, animated: null, size: null };
      ({ id: obj25.id, animated: obj25.animated } = first1);
      obj19.size = size;
      emojiURL = AvatarUtilsDefault.getEmojiURL(obj19);
      const tmp14Result2 = AvatarUtilsDefault;
    }
    obj18.src = emojiURL;
    tmp32Result = tmp32(EmojiDefault, obj18);
    const tmp14Result1 = EmojiDefault;
  } else {
    tmp32Result = tmp32(tmp31(8757).ReactionIcon, { size: "md", color: "text-subtle" });
  }
  const items5 = [tmp32Result];
  if (null != first1) {
    const _HermesInternal = HermesInternal;
    let combined = ":" + first1.name + ":";
  } else {
    const intl8 = tmp31(1114).intl;
    combined = intl8.string(tmp31(1114).t.QTK0TJ);
  }
  items5[1] = onPressEmoji(stickerId(4556).Text, {
    variant: "text-md/semibold",
    color: "input-placeholder-text-default",
    children: combined,
  });
  obj17.children = items5;
  items4[3] = closure_17(stickerId(5123).PressableHighlight, obj17);
  const obj20 = {
    ref: ref1,
    label: null,
    placeholder: null,
    onChange: null,
    onFocus: null,
    onSubmitEditing: null,
    isDisabled: false,
    isClearable: true,
    returnKeyType: "next",
    submitBehavior: "submit",
  };
  const intl9 = tmp31(1114).intl;
  obj20.label = intl9.string(stickerId(1114).t["0VRh6n"]);
  const intl10 = tmp31(1114).intl;
  obj20.placeholder = intl10.string(stickerId(1114).t["3fGttT"]);
  obj20.onChange = tmp6;
  obj20.onFocus = onFocus;
  obj20.onSubmitEditing = function onSubmitEditing() {
    const current = ref2.current;
    if (current != null) {
      current.focus();
    }
    const current2 = ref.current;
    if (current2 != null) {
      current2.scrollToEnd({ animated: true });
    }
  };
  items4[4] = onPressEmoji(stickerId(6606).TextInput, obj20);
  const obj21 = { ref: ref2, maxLength: 100, label: null, placeholder: null, onChange: null, onFocus: null };
  const intl11 = tmp31(1114).intl;
  obj21.label = intl11.string(stickerId(1114).t.uGccej);
  const intl12 = tmp31(1114).intl;
  obj21.placeholder = intl12.string(stickerId(1114).t.zwR0fa);
  obj21.onChange = tmp8;
  obj21.onFocus = onFocus;
  items4[5] = onPressEmoji(stickerId(7085).TextArea, obj21);
  const obj22 = {
    onPress: function handleSave() {
      const self = this;
      const apply = closure_20.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    text: null,
    variant: null,
    disabled: null,
    loading: false,
  };
  const intl13 = tmp31(1114).intl;
  obj22.text = intl13.string(stickerId(1114).t["R3BPH+"]);
  let str3 = "secondary";
  if (hasUnsavedChanges(false)) {
    str3 = "primary";
  }
  obj22.variant = str3;
  obj22.disabled = !hasUnsavedChanges(false);
  items4[6] = onPressEmoji(stickerId(4975).Button, obj22);
  obj10.children = items4;
  items3[1] = closure_17(stickerId(4973).Stack, obj10);
  obj1.children = items3;
  return closure_17(c7, obj1);
});
