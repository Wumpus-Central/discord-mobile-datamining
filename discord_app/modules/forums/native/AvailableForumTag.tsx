// === Module 10439: AvailableForumTag ===

// Module 10439 (AvailableForumTag)
import nativeDefault from "native" /* 587 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import Text_Text from "Text/Text" /* 5086 */;
import EmojiDefault from "Emoji" /* 6809 */;
import native from "native" /* 8517 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import EmojiStore from "EmojiStore" /* 5992 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["ref"];
const EMOJI_URL_BASE_SIZE = fn(1392).EMOJI_URL_BASE_SIZE;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { pill: { display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 12, borderRadius: 20, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, margin: 6, borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, overflow: "hidden", height: 32 }, pillSelected: null, pillDisabled: null, emoji: null, imageEmoji: null, textEmoji: null };
const obj3 = { display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 12, borderRadius: 20, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, margin: 6, borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, overflow: "hidden", height: 32 };
obj2.pillSelected = { borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderWidth: 1 };
obj2.pillDisabled = { opacity: 0.6 };
obj2.emoji = { height: 18, width: 18, marginRight: 4, display: "flex", alignItems: "center", justifyContent: "center" };
obj2.imageEmoji = { height: 16, width: 16 };
obj2.textEmoji = { fontSize: 14, lineHeight: 20 };
let style = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderWidth: 1 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/AvailableForumTag.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AvailableForumTag(tag) {
  const cResult = tag(disabled[8]).c(27);
  tag = tag.tag;
  onPress = tag.onPress;
  disabled = tag.disabled;
  const selected = tag.selected;
  const tmp4 = style();
  _objectWithoutProperties = tmp4;
  const name = tag.name;
  const emojiId = tag.emojiId;
  const emojiName = tag.emojiName;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [emojiId];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== emojiId) {
    const fn = function p() {
      let usableCustomEmojiById = null;
      if (null != emojiId) {
        usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(tmp);
      }
      return usableCustomEmojiById;
    };
    cResult[1] = emojiId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = tag(disabled[8]);
  const stateFromStores = tag(disabled[9]).useStateFromStores(first, tmp7);
  if (cResult[3] === disabled) {
    if (cResult[4] === onPress) {
      if (cResult[5] === tag) {
        let tmp9 = cResult[6];
      }
      onPress = tmp9;
      if (cResult[7] === disabled) {
        if (cResult[8] === selected) {
          if (cResult[9] === tmp4.pill) {
            if (cResult[10] === tmp4.pillDisabled) {
              if (cResult[11] === tmp4.pillSelected) {
                let tmp10 = cResult[12];
              }
              style = tmp10;
              if (cResult[13] === stateFromStores) {
                if (cResult[14] === disabled) {
                  if (cResult[15] === emojiName) {
                    if (cResult[16] === tmp9) {
                      if (cResult[17] === name) {
                        if (cResult[18] === tmp10) {
                          if (cResult[19] === selected) {
                            if (cResult[20] === tmp4.emoji) {
                              if (cResult[21] === tmp4.imageEmoji) {
                                if (cResult[22] === tmp4.textEmoji) {
                                  let tmp14 = cResult[23];
                                }
                                if (cResult[24] === tmp14) {
                                  if (cResult[25] === tag.id) {
                                    let tmp15 = cResult[26];
                                  }
                                  return tmp15;
                                }
                                class P {
                                  constructor(arg0) {
                                    tmp4 = closure_2;
                                    tmp = closure_4(tag, closure_3);
                                    tmp2 = jsxs;
                                    tmp3 = closure_0;
                                    obj = { style: closure_10, accessibilityRole: "button", accessibilityState: null, disabled, ref: tag.ref };
                                    obj1 = { selected };
                                    obj.accessibilityState = obj1;
                                    merged = Object.assign(tmp);
                                    obj.onPress = closure_9;
                                    tmp6 = closure_8;
                                    tmp9Result = null != closure_8;
                                    if (!tmp9Result) {
                                      tmp8 = emojiName;
                                      tmp9Result = null != emojiName;
                                    }
                                    if (tmp9Result) {
                                      tmp9 = jsx;
                                      tmp10 = closure_1;
                                      obj7 = { style: null, textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
                                      tmp12 = closure_4;
                                      ({ emoji: obj3.style, textEmoji: obj3.textEmojiStyle, imageEmoji: obj3.fastImageStyle } = closure_4);
                                      emojiURL = undefined;
                                      tmp11 = closure_1(tmp4[11]);
                                      if (null != tmp6) {
                                        tmp10Result = tmp10(tmp4[12]);
                                        obj8 = { id: null, animated: null, size: null };
                                        ({ id: obj5.id, animated: obj5.animated } = tmp6);
                                        tmp14 = EMOJI_URL_BASE_SIZE;
                                        obj8.size = EMOJI_URL_BASE_SIZE;
                                        emojiURL = tmp10Result.getEmojiURL(obj8);
                                      }
                                      obj7.src = emojiURL;
                                      str = emojiName;
                                      if (emojiName == null) {
                                        str = "";
                                      }
                                      obj7.name = str;
                                      tmp9Result = tmp9(tmp11, obj7);
                                    }
                                    items = [, ];
                                    items[0] = tmp9Result;
                                    obj9 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: name };
                                    items[1] = jsx(tmp3(tmp4[13]).Text, obj9);
                                    obj.children = items;
                                    return tmp2(closure_0(closure_2[10]).PressableScale, obj);
                                  }
                                }
                                const obj2 = { tagId: tag.id, children: tmp14 };
                                const tmp17 = stateFromStores(onPress(tmp2[14]), obj2);
                                cResult[24] = tmp14;
                                cResult[25] = tag.id;
                                cResult[26] = tmp17;
                                tmp15 = tmp17;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              class P {
                constructor(arg0) {
                  tmp4 = closure_2;
                  tmp = closure_4(tag, closure_3);
                  tmp2 = jsxs;
                  tmp3 = closure_0;
                  obj = { style: closure_10, accessibilityRole: "button", accessibilityState: null, disabled, ref: tag.ref };
                  obj1 = { selected };
                  obj.accessibilityState = obj1;
                  merged = Object.assign(tmp);
                  obj.onPress = closure_9;
                  tmp6 = closure_8;
                  tmp9Result = null != closure_8;
                  if (!tmp9Result) {
                    tmp8 = emojiName;
                    tmp9Result = null != emojiName;
                  }
                  if (tmp9Result) {
                    tmp9 = jsx;
                    tmp10 = closure_1;
                    obj7 = { style: null, textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
                    tmp12 = closure_4;
                    ({ emoji: obj3.style, textEmoji: obj3.textEmojiStyle, imageEmoji: obj3.fastImageStyle } = closure_4);
                    emojiURL = undefined;
                    tmp11 = closure_1(tmp4[11]);
                    if (null != tmp6) {
                      tmp10Result = tmp10(tmp4[12]);
                      obj8 = { id: null, animated: null, size: null };
                      ({ id: obj5.id, animated: obj5.animated } = tmp6);
                      tmp14 = EMOJI_URL_BASE_SIZE;
                      obj8.size = EMOJI_URL_BASE_SIZE;
                      emojiURL = tmp10Result.getEmojiURL(obj8);
                    }
                    obj7.src = emojiURL;
                    str = emojiName;
                    if (emojiName == null) {
                      str = "";
                    }
                    obj7.name = str;
                    tmp9Result = tmp9(tmp11, obj7);
                  }
                  items = [, ];
                  items[0] = tmp9Result;
                  obj9 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: name };
                  items[1] = jsx(tmp3(tmp4[13]).Text, obj9);
                  obj.children = items;
                  return tmp2(closure_0(closure_2[10]).PressableScale, obj);
                }
              }
              cResult[13] = stateFromStores;
              cResult[14] = disabled;
              cResult[15] = emojiName;
              cResult[16] = tmp9;
              cResult[17] = name;
              cResult[18] = tmp10;
              cResult[19] = selected;
              cResult[20] = tmp4.emoji;
              cResult[21] = tmp4.imageEmoji;
              cResult[22] = tmp4.textEmoji;
              cResult[23] = P;
              tmp14 = P;
            }
          }
        }
      }
      arr2.push(tmp4.pill);
      if (selected) {
        arr2.push(tmp4.pillSelected);
      }
      if (disabled) {
        arr2.push(tmp4.pillDisabled);
      }
      cResult[7] = disabled;
      cResult[8] = selected;
      cResult[9] = tmp4.pill;
      cResult[10] = tmp4.pillDisabled;
      cResult[11] = tmp4.pillSelected;
      cResult[12] = arr2;
      tmp10 = arr2;
    }
  }
  function handlePress() {
    if (!disabled) {
      onPress(tag);
    }
  }
  cResult[3] = disabled;
  cResult[4] = onPress;
  cResult[5] = tag;
  cResult[6] = handlePress;
  tmp9 = handlePress;
}) : (function AvailableForumTag(tag) {
  tag = tag.tag;
  ({ onPress: importDefault, disabled } = tag);
  const selected = tag.selected;
  noop = undefined;
  c6 = undefined;
  c7 = undefined;
  style = undefined;
  function handlePress() {
    if (!disabled) {
      importDefault(tag);
    }
  }
  const tmp = style();
  const pill = tmp;
  ({ name: c5, emojiId: c6, emojiName: c7 } = tag);
  let items = [c6];
  closure_8 = tag(disabled[9]).useStateFromStores(items, () => {
    let usableCustomEmojiById = null;
    if (null != c6) {
      usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(tmp);
    }
    return usableCustomEmojiById;
  });
  const items1 = [disabled, selected, tmp];
  style = noop.useMemo(() => {
    const items = [];
    items.push(pill.pill);
    if (selected) {
      items.push(pill.pillSelected);
    }
    if (disabled) {
      items.push(pill.pillDisabled);
    }
    return items;
  }, items1);
  return closure_8(require("ForumTagContextMenu"), {
    tagId: tag.id,
    children(ref) {
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      const obj = { style, accessibilityRole: "button", accessibilityState: { selected }, disabled, ref: ref.ref };
      const merged1 = Object.assign(merged);
      obj.onPress = handlePress;
      let tmp9Result = null != closure_8;
      if (!tmp9Result) {
        tmp9Result = null != c7;
      }
      if (tmp9Result) {
        const obj4 = { style: null, textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
        ({ emoji: obj3.style, textEmoji: obj3.textEmojiStyle, imageEmoji: obj3.fastImageStyle } = closure_4);
        let emojiURL;
        if (null != closure_8) {
          const obj6 = { id: null, animated: null, size: null };
          ({ id: obj5.id, animated: obj5.animated } = closure_8);
          obj6.size = EMOJI_URL_BASE_SIZE;
          emojiURL = AvatarUtilsDefault.getEmojiURL(obj6);
          const tmp10Result = AvatarUtilsDefault;
        }
        obj4.src = emojiURL;
        let str = c7;
        if (c7 == null) {
          str = "";
        }
        obj4.name = str;
        tmp9Result = closure_2_8(EmojiDefault, obj4);
      }
      const items = [tmp9Result, closure_2_8(Text_Text.Text, { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children })];
      obj.children = items;
      return onPress(native.PressableScale, obj);
    }
  });
});