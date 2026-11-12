// === Module 20371: GuildSettingsStickerCreate ===

// Module 20371 (GuildSettingsStickerCreate)
import nativeDefault from "native" /* 575 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2185 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 5189 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5850 */;
import useInitialValueDefault from "useInitialValue" /* 5854 */;
import EmojiDefault from "Emoji" /* 7828 */;
import openEmojiPickerActionSheet from "openEmojiPickerActionSheet" /* 9476 */;
import StickerDefault from "Sticker" /* 11024 */;
import useSafeAreaAvoidingInputsDefault from "useSafeAreaAvoidingInputs" /* 11785 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import EmojiStore from "EmojiStore" /* 6906 */;
import StickersStore from "StickersStore" /* 6947 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_6, ScrollView: metroImportDefault } = get_ActivityIndicator);
const Constants = fn(1072);
({ HelpdeskArticles: closure_10, UPLOAD_STICKER_SIZE: closure_11 } = Constants);
const EmojiConstants = fn(1388);
({ EMOJI_URL_BASE_SIZE: closure_12, EmojiIntention: map1 } = EmojiConstants);
const MAX_STICKER_FILE_SIZE = fn(5071).MAX_STICKER_FILE_SIZE;
const jsxProd = fn(21);
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = jsxProd);
const createStyles = fn(5243);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, title: null, description: null, help: null, stack: null, emojiPreview: null, stickerPreviewLabel: null, stickerPreview: null, stickerPreviewImage: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.title = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_8 };
let obj4 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_8 };
obj2.description = { marginBottom: nativeDefault.space.PX_16 };
let obj5 = { marginBottom: nativeDefault.space.PX_16 };
obj2.help = { marginBottom: nativeDefault.space.PX_16 };
let obj6 = { marginBottom: nativeDefault.space.PX_16 };
obj2.stack = { marginTop: nativeDefault.space.PX_8 };
let obj7 = { marginTop: nativeDefault.space.PX_8 };
obj2.emojiPreview = { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.lg, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let obj8 = { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.lg, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj2.stickerPreviewLabel = { marginTop: nativeDefault.space.PX_8 };
let size = { backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, marginBottom: nativeDefault.space.PX_8, height: 2 * nativeDefault.space.PX_64, width: 2 * nativeDefault.space.PX_64, borderRadius: nativeDefault.radii.lg, justifyContent: "center", alignItems: "center" };
obj2.stickerPreview = size;
const size1 = { width: nativeDefault.space.PX_96, height: nativeDefault.space.PX_96 };
obj2.stickerPreviewImage = size1;
let closure_18 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/GuildSettingsStickerCreate.tsx");

export default function GuildSettingsStickerCreate(stickerId) {
  stickerId = stickerId.stickerId;
  ({ guildId: importDefault, onFinish: dependencyMap } = stickerId);
  let ref2;
  c8 = undefined;
  size = undefined;
  c13 = undefined;
  let user;
  closure_17 = undefined;
  closure_18 = undefined;
  c19 = undefined;
  function hasUnsavedChanges() {
    if (null != user) {
      let tmp7 = null != first && tmp6 !== user.name;
      if (!tmp7) {
        let tmp9 = null != c8 && tmp8 !== user.description;
        if (!tmp9) {
          let tmp11 = null == first2;
          if (!tmp11) {
            tmp11 = tmp10 === closure_17;
          }
          tmp9 = !tmp11;
        }
        tmp7 = tmp9;
      }
      let tmp2 = tmp7;
    } else {
      tmp2 = null != first;
      if (tmp2) {
        tmp2 = first.length > 0;
      }
      if (!tmp2) {
        tmp2 = null != first1;
      }
      if (!tmp2) {
        tmp2 = null != first2;
      }
      if (!tmp2) {
        tmp2 = null != c8;
      }
    }
    return tmp2;
  }
  closure_21 = async function _handleImagePicker() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
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
            const obj5 = { value, done: true };
            return obj5;
          } else {
            stickerId = tmp7;
            closure_128_0 = undefined;
            let base64;
            let mimeType;
            let errorStr;
            let originalMd5;
            c3 = 1;
            const obj6 = { size, preferredMimeType: "image/png" };
            c4 = 2;
            c5 = 1;
            const obj7 = { value: tmp3(tmp31[16]).openImagePicker(obj6), done: false };
            return obj7;
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
            const result = stickerId(tmp31[17]).showGuildSettingsStickerError();
            c5 = 3;
            const obj2 = stickerId(tmp31[17]);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
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
  closure_22 = async function _handleSave() {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = function _commitSave() {
              const self = this;
              const tmp = ref(function*(arg0) {
                closure_1 = tmp3;
                closure_1_18.current = true;
                closure_1_19(true);
                yield closure_0();
                if (1 === tmp7) {
                  c4 = 0;
                  closure_1_18.current = false;
                  closure_1_19(false);
                  const result = closure_2_0(20372).showGuildSettingsStickerError();
                  c5 = 3;
                  closure_2_0(20372);
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 !== 2) {
                  v2();
                  const result1 = closure_2_0(20372).showGuildSettingsStickerSuccess();
                  c4 = 0;
                  closure_2_0(20372);
                }
                return value;
              });
              closure_0 = tmp;
              const apply = tmp.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
            if (!ref.current) {
              closure_1 = length;
              closure_2 = first2;
              if (null != length) {
                if (length.length >= 2) {
                  if (null != tmp5) {
                    function commitSave(arg0) {
                      const self = this;
                      const apply = closure_0.apply;
                      if (typeof apply === "unknown") {
                        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                      } else {
                        applyArgumentsResult = apply(self, arguments);
                      }
                      return applyArgumentsResult;
                    }
                    if (null != stickerId) {
                      closure_3 = stickerId;
                      c1 = 1;
                      c0 = 1;
                      const obj4 = {
                        value: commitSave(() => {
                                            const obj2 = { name, tags: null, description: null };
                                            const obj = stickerId(11291);
                                            obj2.tags = stickerId(6729).getStickerTagForEmoji(closure_2);
                                            let str = closure_2_8;
                                            if (closure_2_8 == null) {
                                              str = "";
                                            }
                                            obj2.description = str;
                                            return obj.updateGuildSticker(c1, closure_3, obj2);
                                          }),
                        done: false
                      };
                      return obj4;
                    } else {
                      const uri = first1;
                      if (null == first1) {
                        c0 = 3;
                        return { value: "HermesInternal", done: null };
                      } else {
                        c1 = 2;
                        c0 = 1;
                        const obj5 = {
                          value: commitSave(() => {
                                                const obj2 = { guildId, name, tags: null, description: null, uri: null, mimeType: "image/png", platform: "mobile", originalMd5: null };
                                                const obj = stickerId(11291);
                                                obj2.tags = stickerId(6729).getStickerTagForEmoji(closure_2);
                                                let str = closure_2_8;
                                                if (closure_2_8 == null) {
                                                  str = "";
                                                }
                                                obj2.description = str;
                                                obj2.uri = uri;
                                                obj2.originalMd5 = originalMd5;
                                                return obj.createGuildSticker(obj2);
                                              }),
                          done: false
                        };
                        return obj5;
                      }
                    }
                  }
                }
              }
            }
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj6 = { value, done: true };
            return obj6;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          let obj = { value, done: true };
          return obj;
        }
        c0 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp8) {
        c0 = tmp;
        throw tmp8;
      }
    }
  };
  let tmp = closure_18();
  const ref = ref2.useRef(null);
  const ref1 = ref2.useRef(null);
  ref2 = ref2.useRef(null);
  const tmp6 = ref1(ref2.useState(undefined), 2);
  const first = tmp6[0];
  closure_7 = tmp7;
  [c8, tmp9] = ref1(ref2.useState(undefined), 2);
  StickersStore = tmp9;
  const tmp10 = ref1(ref2.useState(undefined), 2);
  const first1 = tmp10[0];
  closure_11 = tmp10[1];
  const tmp5 = ref1;
  let tmp8 = ref1(ref2.useState(undefined), 2);
  [c12, c13] = ref1(ref2.useState(undefined), 2);
  const tmp13 = ref1(ref2.useState(undefined), 2);
  const first2 = tmp13[0];
  const onPressEmoji = tmp13[1];
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  let obj2 = { insets, inputs: null, scrollViewRef: ref };
  items = [{ ref: ref1, offset: { type: "toRef", ref: ref2 } }, { ref: ref2, offset: { type: "toBottom" } }];
  obj2.inputs = items;
  const onFocus = useSafeAreaAvoidingInputsDefault(obj2).onFocus;
  let stickerById;
  let obj3 = { ref: ref1, offset: { type: "toRef", ref: ref2 } };
  let tmp12 = ref1(ref2.useState(undefined), 2);
  if (null != stickerId) {
    stickerById = StickersStore.getStickerById(stickerId);
  }
  function handleImagePicker() {
    const self = this;
    const apply = closure_21.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  const tmp17Result = useInitialValueDefault(stickerById);
  user = tmp17Result;
  const tmp21 = useInitialValueDefault(() => {
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
  closure_17 = tmp21;
  closure_18 = obj.useRef(false);
  [tmp23, c19] = tmp5(ref2.useState(false), 2);
  const imperativeHandle = obj.useImperativeHandle(stickerId.ref, () => ({ hasUnsavedChanges }));
  const items1 = [stickerId, tmp17Result, tmp21];
  const effect = obj.useEffect(() => {
    let tmp = null != stickerId;
    if (tmp) {
      tmp = null != user;
    }
    if (tmp) {
      onPressEmoji(closure_17);
      closure_7(user.name);
      _undefined(user.description);
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
  let obj4 = { ref, style: tmp.container, keyboardShouldPersistTaps: "always", contentContainerStyle: null, children: null };
  const tmp5Result = tmp5(ref2.useState(false), 2);
  obj4.contentContainerStyle = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + insets.bottom };
  let tmp26Result = null;
  if (null == stickerId) {
    let obj6 = { variant: "heading-sm/semibold", style: tmp.title, children: null };
    const intl = stickerId(1113).intl;
    obj6.children = intl.string(stickerId(1113).t["9N2OWD"]);
    const items2 = [onPressEmoji(stickerId(5866).Text, obj6), , , ];
    let obj7 = { variant: "body-sm/medium", color: "text-muted", style: tmp.description, children: null };
    const intl2 = stickerId(1113).intl;
    const obj8 = { fileSize: stickerId(6699).formatKbSize(first2, { useKibibytes: true }) };
    obj7.children = intl2.format(stickerId(1113).t.hxLviw, obj8);
    items2[1] = onPressEmoji(stickerId(5866).Text, obj7);
    const obj10 = { variant: "body-sm/medium", color: "text-muted", style: tmp.help, children: null };
    const intl3 = stickerId(1113).intl;
    const obj11 = { articleUrl: null };
    const obj9 = stickerId(6699);
    const tmp29 = user;
    const tmp30 = onPressEmoji;
    obj11.articleUrl = HelpdeskUtilsDefault.getArticleURL(first1.STICKERS_UPLOAD);
    obj10.children = intl3.format(stickerId(1113).t.UBj0aX, obj11);
    items2[2] = onPressEmoji(stickerId(5866).Text, obj10);
    const obj12 = { text: null, onPress: null, variant: null };
    const intl4 = stickerId(1113).intl;
    obj12.text = intl4.string(stickerId(1113).t.O1REe1);
    obj12.onPress = handleImagePicker;
    let str = "secondary";
    if (null == first1) {
      str = "primary";
    }
    const obj13 = { children: null };
    obj12.variant = str;
    items2[3] = tmp30(stickerId(5873).Button, obj12);
    obj13.children = items2;
    tmp26Result = tmp26(tmp29, obj13);
    const tmp15Result = HelpdeskUtilsDefault;
  }
  const items3 = [tmp26Result, ];
  const obj14 = { style: tmp.stack, children: null };
  const obj15 = { variant: "body-sm/semibold", color: "text-subtle", style: tmp.stickerPreviewLabel, children: null };
  const intl5 = stickerId(1113).intl;
  obj15.children = intl5.string(stickerId(1113).t.gjdiKE);
  const items4 = [onPressEmoji(stickerId(5866).Text, obj15), , , , , , ];
  const obj16 = { style: tmp.stickerPreview, disabled: null != tmp17Result, onPress: handleImagePicker, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl6 = stickerId(1113).intl;
  obj16.accessibilityLabel = intl6.string(stickerId(1113).t.O1REe1);
  if (null != tmp17Result) {
    const obj17 = { sticker: tmp17Result, size: nativeDefault.space.PX_96, animated: true };
    let tmp35Result = tmp35(StickerDefault, obj17);
    const tmp15Result4 = StickerDefault;
  } else if (null != first1) {
    const obj18 = { source: null, style: null, resizeMode: "contain" };
    const obj19 = { uri: first1 };
    obj18.source = obj19;
    obj18.style = tmp.stickerPreviewImage;
    tmp35Result = tmp35(first, obj18);
  } else {
    tmp35Result = tmp35(tmp34(20373).StickerPlusIcon, { size: "lg" });
  }
  obj16.children = tmp35Result;
  items4[1] = onPressEmoji(stickerId(7364).PressableHighlight, obj16);
  const obj20 = { variant: "body-sm/semibold", color: "text-subtle", style: tmp.stickerPreviewLabel, children: null };
  const intl7 = tmp34(1113).intl;
  obj20.children = intl7.string(stickerId(1113).t["3BQmiC"]);
  items4[2] = onPressEmoji(stickerId(5866).Text, obj20);
  const obj21 = {
    style: tmp.emojiPreview,
    onPress() {
      const result = openEmojiPickerActionSheet.openEmojiPickerActionSheet({ pickerIntention: constants.GUILD_STICKER_RELATED_EMOJI, guildId, onPressEmoji });
    },
    children: null
  };
  if (null != first2) {
    const obj22 = { fastImageStyle: { width: 24, height: 24 }, name: null == first2.id ? first2.surrogates : first2.name, src: null };
    let emojiURL;
    if (null != first2.id) {
      const obj23 = { id: null, animated: null, size: null };
      ({ id: obj25.id, animated: obj25.animated } = first2);
      obj23.size = size;
      emojiURL = AvatarUtilsDefault.getEmojiURL(obj23);
      const tmp15Result6 = AvatarUtilsDefault;
    }
    obj22.src = emojiURL;
    let tmp35Result2 = tmp35(EmojiDefault, obj22);
    const tmp15Result5 = EmojiDefault;
  } else {
    tmp35Result2 = tmp35(tmp34(10340).ReactionIcon, { size: "md", color: "text-subtle" });
  }
  const items5 = [tmp35Result2, ];
  if (null != first2) {
    const _HermesInternal = HermesInternal;
    let combined = ":" + first2.name + ":";
  } else {
    const intl8 = tmp34(1113).intl;
    combined = intl8.string(tmp34(1113).t.QTK0TJ);
  }
  items5[1] = onPressEmoji(stickerId(5866).Text, { variant: "body-md/semibold", color: "input-placeholder-text-default", children: combined });
  obj21.children = items5;
  items4[3] = closure_17(stickerId(7364).PressableHighlight, obj21);
  const obj24 = { ref: ref1, label: null, placeholder: null, onChange: null, onFocus: null, onSubmitEditing: null, disabled: null, clearable: true, returnKeyType: "next", submitBehavior: "submit" };
  const intl9 = tmp34(1113).intl;
  obj24.label = intl9.string(stickerId(1113).t["0VRh6n"]);
  const intl10 = tmp34(1113).intl;
  obj24.placeholder = intl10.string(stickerId(1113).t["3fGttT"]);
  obj24.onChange = tmp6[1];
  obj24.onFocus = onFocus;
  obj24.onSubmitEditing = function onSubmitEditing() {
    const current = ref2.current;
    if (current != null) {
      current.focus();
    }
    const current2 = ref.current;
    if (current2 != null) {
      current2.scrollToEnd({ animated: true });
    }
  };
  obj24.disabled = tmp23;
  items4[4] = onPressEmoji(stickerId(7553).TextInput, obj24);
  const obj26 = { ref: ref2, maxLength: 100, label: null, placeholder: null, onChange: null, onFocus: null };
  const intl11 = tmp34(1113).intl;
  obj26.label = intl11.string(stickerId(1113).t.uGccej);
  const intl12 = tmp34(1113).intl;
  obj26.placeholder = intl12.string(stickerId(1113).t.zwR0fa);
  obj26.onChange = tmp9;
  obj26.onFocus = onFocus;
  items4[5] = onPressEmoji(stickerId(7793).TextArea, obj26);
  const obj27 = {
    onPress: function handleSave() {
      const self = this;
      const apply = closure_22.apply;
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
    loading: null
  };
  const intl13 = tmp34(1113).intl;
  obj27.text = intl13.string(stickerId(1113).t["R3BPH+"]);
  if (null != tmp17Result) {
    let hasUnsavedChangesResult = !tmp46;
    if (!(null != first && first.length < 2)) {
      hasUnsavedChangesResult = hasUnsavedChanges();
    }
    let tmp45 = hasUnsavedChangesResult;
  } else {
    tmp45 = null != first && first.length >= 2 && null != first1 && null != first2;
  }
  let str3 = "secondary";
  if (tmp45) {
    str3 = "primary";
  }
  obj27.variant = str3;
  if (null != tmp17Result) {
    let hasUnsavedChangesResult1 = !tmp49;
    if (!(null != first && first.length < 2)) {
      hasUnsavedChangesResult1 = hasUnsavedChanges();
    }
    let tmp48 = hasUnsavedChangesResult1;
  } else {
    tmp48 = null != first && first.length >= 2 && null != first1 && null != first2;
  }
  let tmp51 = !tmp48;
  if (tmp48) {
    tmp51 = tmp23;
  }
  obj27.disabled = tmp51;
  obj27.loading = tmp23;
  items4[6] = onPressEmoji(stickerId(5873).Button, obj27);
  obj14.children = items4;
  items3[1] = closure_17(stickerId(6274).Stack, obj14);
  obj4.children = items3;
  return closure_17(closure_7, obj4);
};