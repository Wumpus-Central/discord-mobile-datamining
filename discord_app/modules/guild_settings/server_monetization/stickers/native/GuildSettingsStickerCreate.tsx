// discord_app/modules/guild_settings/server_monetization/stickers/native/GuildSettingsStickerCreate.tsx
import loadSavedGuildStickers from "loadSavedGuildStickers";
import ReactionIcon from "ReactionIcon";
import importAllResult from "getStickerExtensionFromFormatType";
import get_ActivityIndicator from "showGuildSettingsStickerError";
import getEmojiToGroupId from "getEmojiToGroupId";
import closure_9 from "loadSavedGuildStickers";
import ME from "ME";
import set from "set";
import { MAX_STICKER_FILE_SIZE } from "STICKER_PICKER_TAB_PANEL_ID";
import jsxProd from "getSystemLocale";
import createCacheKey from "createCacheKey";
import set from "noop";
import { useInitialValue } from "../../../../../hooks/useInitialValue.tsx";
import { _calculateScrollOffset } from "../../../../safe_area/useSafeAreaAvoidingInputs.native.tsx";
import { useSafeAreaInsetsKeyboardAware } from "../../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";

let c10;
let closure_12;
let closure_15;
let closure_16;
let closure_17;
let closure_6;
let error;
let map1;
let unpackModuleId;
const require = arg1;
let c5 = importAllResult;
({ Image: closure_6, ScrollView: error } = get_ActivityIndicator);
({ HelpdeskArticles: c10, UPLOAD_STICKER_SIZE: unpackModuleId } = ME);
({ EMOJI_URL_BASE_SIZE: closure_12, EmojiIntention: map1 } = set);
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = jsxProd);
let obj = { container: null, title: null, description: null, help: null, stack: null, emojiPreview: null, stickerPreviewLabel: null, stickerPreview: null, stickerPreviewImage: null };
obj = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
obj[0] = obj;
createCacheKey = { marginTop: require("Themes").space.PX_16, marginBottom: require("Themes").space.PX_8 };
obj[1] = createCacheKey;
obj[2] = { marginBottom: require("Themes").space.PX_16 };
let obj2 = { marginBottom: require("Themes").space.PX_16 };
obj[3] = { marginBottom: require("Themes").space.PX_16 };
let obj3 = { marginBottom: require("Themes").space.PX_16 };
obj[4] = { marginTop: require("Themes").space.PX_8 };
let obj4 = { marginTop: require("Themes").space.PX_8 };
obj[5] = { backgroundColor: require("Themes").colors.INPUT_BACKGROUND_DEFAULT, paddingHorizontal: require("Themes").space.PX_16, paddingVertical: require("Themes").space.PX_12, marginBottom: require("Themes").space.PX_4, borderRadius: require("Themes").radii.lg, flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_12 };
let obj5 = { backgroundColor: require("Themes").colors.INPUT_BACKGROUND_DEFAULT, paddingHorizontal: require("Themes").space.PX_16, paddingVertical: require("Themes").space.PX_12, marginBottom: require("Themes").space.PX_4, borderRadius: require("Themes").radii.lg, flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_12 };
obj[6] = { marginTop: require("Themes").space.PX_8 };
let obj6 = { marginTop: require("Themes").space.PX_8 };
obj[7] = { backgroundColor: require("Themes").colors.INPUT_BACKGROUND_DEFAULT, marginBottom: require("Themes").space.PX_8, height: 2 * require("Themes").space.PX_64, width: 2 * require("Themes").space.PX_64, borderRadius: require("Themes").radii.lg, justifyContent: "center", alignItems: "center" };
let obj7 = { backgroundColor: require("Themes").colors.INPUT_BACKGROUND_DEFAULT, marginBottom: require("Themes").space.PX_8, height: 2 * require("Themes").space.PX_64, width: 2 * require("Themes").space.PX_64, borderRadius: require("Themes").radii.lg, justifyContent: "center", alignItems: "center" };
obj[8] = { width: require("Themes").space.PX_96, height: require("Themes").space.PX_96 };
let closure_18 = createCacheKey.createStyles(obj);
let obj8 = { width: require("Themes").space.PX_96, height: require("Themes").space.PX_96 };
let result = set.fileFinishedImporting("modules/guild_settings/server_monetization/stickers/native/GuildSettingsStickerCreate.tsx");

export default importAllResult.forwardRef((stickerId, ref) => {
  let c12;
  let c13;
  let c6;
  let c8;
  let dependencyMap;
  let importDefault;
  let tmp6;
  let tmp8;
  stickerId = stickerId.stickerId;
  ({ guildId: importDefault, onFinish: dependencyMap } = stickerId);
  ref = undefined;
  let ref1;
  let ref2;
  c6 = undefined;
  let c7;
  c8 = undefined;
  let stickerById;
  let first;
  let closure_11;
  c12 = undefined;
  c13 = undefined;
  let first1;
  let callback;
  let c16;
  let c17;
  function hasUnsavedChanges(arg0) {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = true;
    }
    if (null != c16) {
      let tmp12 = null != c6 && tmp11 !== tmp.name;
      if (!tmp12) {
        let tmp14 = null != c8 && tmp13 !== tmp.description;
        if (!tmp14) {
          let tmp16 = null == first1;
          if (!tmp16) {
            tmp16 = tmp15 === c17;
          }
          tmp14 = !tmp16;
        }
        tmp12 = tmp14;
      }
      let tmp2 = tmp12;
    } else {
      let tmp7 = null != c6;
      if (flag) {
        if (tmp7) {
          let length;
          if (arr != null) {
            length = arr.length;
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
          if (arr != null) {
            length1 = arr.length;
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
  function _handleImagePicker() {
    const self = this;
    const tmp = ref(function*() {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === originalMd5) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let base64 = tmp3;
              let closure_0 = tmp7;
              closure_0 = undefined;
              base64 = undefined;
              let mimeType;
              let errorStr;
              originalMd5 = undefined;
              errorStr = 1;
              let obj2 = outer1_1(outer1_2[16]);
              let obj1 = { size: null, preferredMimeType: "image/png" };
              obj1[0] = outer1_11;
              originalMd5 = 2;
              c5 = 1;
              obj2 = { value: null, done: false };
              obj2[0] = obj2.openImagePicker(obj1);
              return obj2;
            }
          } else {
            if (1 === tmp7) {
              errorStr = 0;
              obj1 = outer1_0(outer1_2[17]);
              const result = obj1.showGuildSettingsStickerError();
              c5 = 3;
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              errorStr = 0;
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_0 = arg1;
              base64 = closure_0.base64;
              mimeType = closure_0.mimeType;
              errorStr = closure_0.errorStr;
              originalMd5 = closure_0.originalMd5;
              if ("Cancelled" === errorStr) {
                errorStr = 0;
                c5 = 3;
                return { value: "HermesInternal", done: null };
              } else if (null != base64) {
                if ("image/png" === mimeType) {
                  callback(base64);
                  callback2(originalMd5);
                  errorStr = 0;
                }
              }
            }
            const _Error = Error;
            const error = new Error("Invalid image type, only PNG is supported.");
            throw error;
          }
        } catch (tmp31) {
          mimeType = tmp31;
          if (tmp4 === errorStr) {
            c5 = tmp2;
            throw tmp31;
          } else {
            originalMd5 = tmp;
          }
        }
      }
    });
    const _handleImagePicker = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  function _handleSave() {
    const self = this;
    const tmp = ref(function*() {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const callback = tmp3;
              let c5 = 1;
              if (null == outer1_0) {
                if (null != c6) {
                  if (null != outer1_14) {
                    if (null != outer1_10) {
                      const obj1 = { guildId: null, name: null, tags: null, description: null, uri: null, mimeType: "image/png", platform: "mobile", originalMd5: null };
                      obj1[0] = outer1_1;
                      obj1[1] = tmp26;
                      const obj13 = outer1_0(outer1_2[18]);
                      obj1[2] = outer1_0(outer1_2[19]).getStickerTagForEmoji(tmp47);
                      let c0 = outer1_8;
                      if (outer1_8 == null) {
                        c0 = "";
                      }
                      obj1[3] = c0;
                      obj1[4] = tmp48;
                      obj1[7] = outer1_12;
                      c3 = 2;
                      c6 = 1;
                      let obj2 = { value: null, done: false };
                      obj2[0] = obj13.createGuildSticker(obj1);
                      return obj2;
                    }
                  }
                }
                c5 = 0;
                c6 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                if (null != c6) {
                  if (null != outer1_14) {
                    const obj3 = { name: null, tags: null, description: null };
                    obj3[0] = tmp39;
                    const obj10 = outer1_0(outer1_2[18]);
                    const tmp43 = outer1_1;
                    obj3[1] = outer1_0(outer1_2[19]).getStickerTagForEmoji(tmp40);
                    let c1 = outer1_8;
                    if (outer1_8 == null) {
                      c1 = "";
                    }
                    obj3[2] = c1;
                    c3 = 3;
                    c6 = 1;
                    let obj4 = { value: null, done: false };
                    obj4[0] = obj10.updateGuildSticker(tmp43, tmp38, obj3);
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
              obj4 = outer1_0(outer1_2[17]);
              const result = obj4.showGuildSettingsStickerError();
              c6 = 3;
            } else {
              if (2 === tmp7) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw arg1;
                } else if (arg0 !== 2) {
                  outer1_2();
                  obj2 = outer1_0(outer1_2[17]);
                  const result1 = obj2.showGuildSettingsStickerSuccess();
                }
              } else if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 0;
                c6 = 3;
                const obj5 = { value: null, done: true };
                obj5[0] = arg1;
                return obj5;
              } else {
                callback();
                obj = outer1_0(outer1_2[17]);
                const result2 = obj.showGuildSettingsStickerSuccess();
              }
              c5 = 0;
            }
            c5 = 0;
            c6 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          }
        } catch (tmp29) {
          let ReactionIcon = tmp29;
          if (tmp4 === c5) {
            c6 = tmp2;
            throw tmp29;
          } else {
            c3 = tmp;
          }
        }
      }
    });
    const _handleSave = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = hasUnsavedChanges();
  let obj = ref2;
  ref = ref2.useRef(null);
  ref1 = ref2.useRef(null);
  ref2 = ref2.useRef(null);
  [c6, tmp6] = ref1(ref2.useState(undefined), 2);
  c7 = tmp6;
  const tmp5 = ref1(ref2.useState(undefined), 2);
  [c8, tmp8] = ref1(ref2.useState(undefined), 2);
  stickerById = tmp8;
  const tmp9 = ref1(ref2.useState(undefined), 2);
  first = tmp9[0];
  closure_11 = tmp9[1];
  let tmp7 = ref1(ref2.useState(undefined), 2);
  [c12, c13] = ref1(ref2.useState(undefined), 2);
  let tmp12 = ref1(ref2.useState(undefined), 2);
  first1 = tmp12[0];
  callback = tmp12[1];
  const insets = useSafeAreaInsetsKeyboardAware({ includeKeyboardHeight: true }).insets;
  const items = [{ ref: ref1, offset: { type: "toRef", ref: ref2 } }, { ref: ref2, offset: { type: "toBottom" } }];
  const onFocus = _calculateScrollOffset({ insets, inputs: items, scrollViewRef: ref }).onFocus;
  stickerById = undefined;
  const tmp11 = ref1(ref2.useState(undefined), 2);
  if (null != stickerId) {
    stickerById = stickerById.getStickerById(stickerId);
  }
  function handleImagePicker() {
    const self = this;
    const apply = _handleImagePicker.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  const tmp16Result = useInitialValue(stickerById);
  c16 = tmp16Result;
  const tmp20 = useInitialValue(() => {
    let tags = c16;
    if (null != c16) {
      let customEmojiById = null;
      if (null != tags.tags) {
        customEmojiById = _undefined2.getCustomEmojiById(tags.tags);
      }
      if (null != customEmojiById) {
        return customEmojiById;
      } else if (null == tags.tags) {
        let tmp8;
        if (null != undefined) {
          const byName = outer1_1(outer1_2[15]).getByName(undefined);
          tmp8 = byName;
          const obj3 = outer1_1(outer1_2[15]);
        }
        let tmp12;
        if (null != tmp8) {
          tmp12 = tmp8;
        }
        return tmp12;
      } else {
        if (obj.hasSurrogates(tags.tags)) {
          tags = tags.tags;
          let tags2 = outer1_1(outer1_2[15]).convertSurrogateToName(tags, false);
          const obj2 = outer1_1(outer1_2[15]);
        } else {
          tags2 = tags.tags;
        }
        obj = outer1_1(outer1_2[15]);
      }
    }
  });
  c17 = tmp20;
  const imperativeHandle = obj.useImperativeHandle(ref, () => ({ hasUnsavedChanges }));
  const items1 = [stickerId, tmp16Result, tmp20];
  const effect = obj.useEffect(() => {
    let tmp = null != stickerId;
    if (tmp) {
      tmp = null != _undefined5;
    }
    if (tmp) {
      callback(c17);
      _undefined(_undefined5.name);
      _undefined3(_undefined5.description);
      const current = ref1.current;
      if (current != null) {
        current.setText(tmp7.name);
      }
      const current2 = ref2.current;
      if (current2 != null) {
        let str = tmp7.description;
        if (str == null) {
          str = "";
        }
        current2.setText(str);
      }
    }
  }, items1);
  obj = { ref, style: tmp.container, keyboardShouldPersistTaps: "always", contentContainerStyle: null, children: null };
  obj = { paddingHorizontal: tmp14(712).space.PX_16, paddingBottom: tmp14(712).space.PX_16 + insets.bottom };
  obj[3] = obj;
  let tmp23Result = null;
  if (null == stickerId) {
    let obj1 = { variant: "heading-md/semibold", style: null, children: null };
    obj1[1] = tmp.title;
    const intl = stickerId(1236).intl;
    obj1[2] = intl.string(stickerId(1236).t["9N2OWD"]);
    const items2 = [callback(stickerId(4338).Text, obj1), , , ];
    let obj2 = { variant: "text-sm/medium", color: "text-muted", style: null, children: null };
    obj2[2] = tmp.description;
    const intl2 = stickerId(1236).intl;
    let obj3 = { fileSize: null };
    let obj6 = stickerId(4237);
    obj3[0] = obj6.formatKbSize(first1, { useKibibytes: true });
    obj2[3] = intl2.format(stickerId(1236).t.hxLviw, obj3);
    items2[1] = callback(stickerId(4338).Text, obj2);
    let obj4 = { variant: "text-sm/medium", color: "text-muted", style: null, children: null };
    obj4[2] = tmp.help;
    const intl3 = stickerId(1236).intl;
    let obj5 = { articleUrl: null };
    let tmp14Result = tmp14(1993);
    obj5[0] = tmp14Result.getArticleURL(first.STICKERS_UPLOAD);
    obj4[3] = intl3.format(stickerId(1236).t.UBj0aX, obj5);
    items2[2] = callback(stickerId(4338).Text, obj4);
    obj6 = { text: null, onPress: null, variant: null };
    const intl4 = stickerId(1236).intl;
    obj6[0] = intl4.string(stickerId(1236).t.O1REe1);
    obj6[1] = handleImagePicker;
    let str = "secondary";
    if (null == first) {
      str = "primary";
    }
    const obj7 = { children: null };
    obj6[2] = str;
    items2[3] = callback(stickerId(4755).Button, obj6);
    obj7[0] = items2;
    tmp23Result = tmp23(c16, obj7);
    const tmp26 = c16;
    const tmp27 = callback;
  }
  const items3 = [tmp23Result, ];
  const obj8 = { style: tmp.stack, children: null };
  const obj9 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.stickerPreviewLabel, children: null };
  const intl5 = stickerId(1236).intl;
  obj9[3] = intl5.string(stickerId(1236).t.gjdiKE);
  const items4 = [callback(stickerId(4338).Text, obj9), , , , , , ];
  let obj10 = { style: tmp.stickerPreview, disabled: null != tmp16Result, onPress: handleImagePicker, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl6 = stickerId(1236).intl;
  obj10[4] = intl6.string(stickerId(1236).t.O1REe1);
  if (null != tmp16Result) {
    const obj11 = { sticker: null, size: null, animated: true };
    obj11[0] = tmp16Result;
    tmp14Result = tmp14(9902);
    obj11[1] = tmp14(712).space.PX_96;
    let tmp32Result = tmp32(tmp14Result, obj11);
  } else if (null != first) {
    const obj12 = { source: null, style: null, resizeMode: "contain" };
    let obj13 = { uri: null };
    obj13[0] = first;
    obj12[0] = obj13;
    obj12[1] = tmp.stickerPreviewImage;
    tmp32Result = tmp32(c6, obj12);
  } else {
    tmp32Result = tmp32(tmp31(16749).StickerPlusIcon, { size: "lg" });
  }
  obj10[5] = tmp32Result;
  items4[1] = callback(stickerId(4887).PressableHighlight, obj10);
  const obj14 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.stickerPreviewLabel, children: null };
  const intl7 = tmp31(1236).intl;
  obj14[3] = intl7.string(stickerId(1236).t["3BQmiC"]);
  items4[2] = callback(stickerId(4338).Text, obj14);
  const obj15 = {
    style: tmp.emojiPreview,
    onPress() {
      let obj = stickerId(outer1_2[29]);
      obj = { pickerIntention: _undefined4.GUILD_STICKER_RELATED_EMOJI, guildId: closure_1, onPressEmoji: closure_15 };
      const result = obj.openEmojiPickerActionSheet(obj);
    },
    children: null
  };
  if (null != first1) {
    const obj16 = { fastImageStyle: null, name: null, src: null };
    obj16[0] = { width: 24, height: 24 };
    obj16[1] = null == first1.id ? first1.surrogates : first1.name;
    let emojiURL;
    if (null != first1.id) {
      const obj17 = { id: null, animated: null, size: null };
      ({ id: obj23[0], animated: obj23[1] } = first1);
      obj17[2] = c12;
      emojiURL = tmp14(1435).getEmojiURL(obj17);
      const tmp14Result2 = tmp14(1435);
    }
    obj16[2] = emojiURL;
    tmp32Result = tmp32(tmp14(5400), obj16);
    const tmp14Result1 = tmp14(5400);
  } else {
    tmp32Result = tmp32(tmp31(7700).ReactionIcon, { size: "md", color: "text-subtle" });
  }
  const items5 = [tmp32Result, ];
  if (null != first1) {
    const _HermesInternal = HermesInternal;
    let combined = ":" + first1.name + ":";
  } else {
    const intl8 = tmp31(1236).intl;
    combined = intl8.string(tmp31(1236).t.QTK0TJ);
  }
  items5[1] = callback(stickerId(4338).Text, { variant: "text-md/semibold", color: "input-placeholder-text-default", children: combined });
  obj15[2] = items5;
  items4[3] = c17(stickerId(4887).PressableHighlight, obj15);
  const obj18 = { ref: ref1, label: null, placeholder: null, onChange: null, onFocus: null, onSubmitEditing: null, isDisabled: false, isClearable: true, returnKeyType: "next", submitBehavior: "submit" };
  const intl9 = tmp31(1236).intl;
  obj18[1] = intl9.string(stickerId(1236).t["0VRh6n"]);
  const intl10 = tmp31(1236).intl;
  obj18[2] = intl10.string(stickerId(1236).t["3fGttT"]);
  obj18[3] = tmp6;
  obj18[4] = onFocus;
  obj18[5] = function onSubmitEditing() {
    const current = ref2.current;
    if (current != null) {
      current.focus();
    }
    const current2 = ref.current;
    if (current2 != null) {
      current2.scrollToEnd({ animated: true });
    }
  };
  items4[4] = callback(stickerId(7835).TextInput, obj18);
  const obj19 = { ref: ref2, maxLength: 100, label: null, placeholder: null, onChange: null, onFocus: null };
  const intl11 = tmp31(1236).intl;
  obj19[2] = intl11.string(stickerId(1236).t.uGccej);
  const intl12 = tmp31(1236).intl;
  obj19[3] = intl12.string(stickerId(1236).t.zwR0fa);
  obj19[4] = tmp8;
  obj19[5] = onFocus;
  items4[5] = callback(stickerId(8021).TextArea, obj19);
  const obj20 = {
    onPress: function handleSave() {
      const self = this;
      const apply = _handleSave.apply;
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
    loading: false
  };
  const intl13 = tmp31(1236).intl;
  obj20[1] = intl13.string(stickerId(1236).t["R3BPH+"]);
  let str3 = "secondary";
  if (hasUnsavedChanges(false)) {
    str3 = "primary";
  }
  obj20[2] = str3;
  obj20[3] = !hasUnsavedChanges(false);
  items4[6] = callback(stickerId(4755).Button, obj20);
  obj8[1] = items4;
  items3[1] = c17(stickerId(4753).Stack, obj8);
  obj[4] = items3;
  return c17(c7, obj);
});