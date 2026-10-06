// === Module 11074: AvailableForumTag ===

// Module 11074 (AvailableForumTag)
import nativeDefault from "native" /* 587 */;
import EmojiConstants from "EmojiConstants" /* 1380 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import Text_Text from "Text/Text" /* 4892 */;
import EmojiDefault from "Emoji" /* 6632 */;
import native from "native" /* 8602 */;
import _objectWithoutProperties_mod from "_objectWithoutProperties" /* 109 */;
import react_mod from "react" /* 19 */;
import EmojiStore from "EmojiStore" /* 5645 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let onPress, tag;

let c9;
let metroImportAll;
let obj2;
let obj3;
let closure_3 = ["ref"];
let _objectWithoutProperties = _objectWithoutProperties_mod;
let react = react_mod;
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { pill: obj2, pillSelected: obj3, pillDisabled: { opacity: 0.6 }, emoji: { height: 18, width: 18, marginRight: 4, display: "flex", alignItems: "center", justifyContent: "center" }, imageEmoji: { height: 16, width: 16 }, textEmoji: { fontSize: 14, lineHeight: 20 } };
obj2 = { display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 12, borderRadius: 20, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, margin: 6, borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, overflow: "hidden", height: 32 };
createStyles = createStyles.createStyles;
obj3 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderWidth: 1 };
let style = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((tag) => {
  let closure_4;
  let disabled;
  let first;
  let tmp7;
  let tmp = tag;
  let obj = tag(disabled[8]);
  const cResult = obj.c(27);
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
    first = items;
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
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(disabled[9]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === disabled) {
    if (cResult[4] === onPress) {
      let tmp9;
      if (cResult[5] === tag) {
        tmp9 = cResult[6];
      }
      onPress = tmp9;
      if (cResult[7] === disabled) {
        if (cResult[8] === selected) {
          if (cResult[9] === tmp4.pill) {
            if (cResult[10] === tmp4.pillDisabled) {
              let tmp10;
              if (cResult[11] === tmp4.pillSelected) {
                tmp10 = cResult[12];
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
                                let tmp14;
                                if (cResult[22] === tmp4.textEmoji) {
                                  tmp14 = cResult[23];
                                }
                                if (cResult[24] === tmp14) {
                                  let tmp15;
                                  if (cResult[25] === tag.id) {
                                    tmp15 = cResult[26];
                                  }
                                  return tmp15;
                                }
                                class P {
                                  constructor(ref) {
                                    let emojiURL;
                                    let items;
                                    let obj2;
                                    let str;
                                    const obj = { style, accessibilityRole: "button", accessibilityState: obj2, disabled, ref: ref.ref, onPress, children: items };
                                    obj2 = { selected };
                                    const tmp = _objectWithoutProperties(ref.ref, closure_3);
                                    const PressableScale = native.PressableScale;
                                    const merged = Object.assign(tmp);
                                    let tmp9Result = null != stateFromStores || null != emojiName;
                                    if (tmp9Result) {
                                      const obj4 = { style: null, textEmojiStyle: null, fastImageStyle: null, src: emojiURL, name: str };
                                      ({ emoji: obj3.style, textEmoji: obj3.textEmojiStyle, imageEmoji: obj3.fastImageStyle } = closure_4);
                                      emojiURL = undefined;
                                      const tmp11 = EmojiDefault;
                                      if (null != stateFromStores) {
                                        const obj6 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
                                        ({ id: obj5.id, animated: obj5.animated } = stateFromStores);
                                        const tmp10Result = AvatarUtilsDefault;
                                        emojiURL = tmp10Result.getEmojiURL(obj6);
                                      }
                                      str = emojiName;
                                      if (emojiName == null) {
                                        str = "";
                                      }
                                      tmp9Result = metroImportAll(tmp11, obj4);
                                    }
                                    items = [tmp9Result, ];
                                    const obj10 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: name };
                                    items[1] = metroImportAll(Text_Text.Text, obj10);
                                    return onPress(PressableScale, obj);
                                  }
                                }
                                let obj2 = { tagId: tag.id, children: tmp14 };
                                const tmp17 = stateFromStores(onPress(disabled[14]), obj2);
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
                constructor(ref) {
                  let emojiURL;
                  let items;
                  let obj2;
                  let str;
                  const obj = { style, accessibilityRole: "button", accessibilityState: obj2, disabled, ref: ref.ref, onPress, children: items };
                  obj2 = { selected };
                  const tmp = _objectWithoutProperties(ref.ref, closure_3);
                  const PressableScale = native.PressableScale;
                  const merged = Object.assign(tmp);
                  let tmp9Result = null != stateFromStores || null != emojiName;
                  if (tmp9Result) {
                    const obj4 = { style: null, textEmojiStyle: null, fastImageStyle: null, src: emojiURL, name: str };
                    ({ emoji: obj3.style, textEmoji: obj3.textEmojiStyle, imageEmoji: obj3.fastImageStyle } = closure_4);
                    emojiURL = undefined;
                    const tmp11 = EmojiDefault;
                    if (null != stateFromStores) {
                      const obj6 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
                      ({ id: obj5.id, animated: obj5.animated } = stateFromStores);
                      const tmp10Result = AvatarUtilsDefault;
                      emojiURL = tmp10Result.getEmojiURL(obj6);
                    }
                    str = emojiName;
                    if (emojiName == null) {
                      str = "";
                    }
                    tmp9Result = metroImportAll(tmp11, obj4);
                  }
                  items = [tmp9Result, ];
                  const obj10 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: name };
                  items[1] = metroImportAll(Text_Text.Text, obj10);
                  return onPress(PressableScale, obj);
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
  class R {
    constructor() {
      if (!disabled) {
        onPress(tag);
      }
    }
  }
  cResult[3] = disabled;
  cResult[4] = onPress;
  cResult[5] = tag;
  cResult[6] = R;
  tmp9 = R;
}) : ((tag) => {
  let c5;
  let c6;
  let c7;
  let children;
  let disabled;
  tag = tag.tag;
  ({ onPress: importDefault, disabled } = tag);
  const selected = tag.selected;
  react = undefined;
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
  let obj = tag(disabled[9]);
  let items = [c6];
  let closure_8 = obj.useStateFromStores(items, () => {
    let usableCustomEmojiById = null;
    if (null != c6) {
      usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(tmp);
    }
    return usableCustomEmojiById;
  });
  const items1 = [disabled, selected, tmp];
  style = react.useMemo(() => {
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
  let obj2 = {
    tagId: tag.id,
    children(ref) {
      let emojiURL;
      let items;
      let obj2;
      let str;
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      const obj = { style, accessibilityRole: "button", accessibilityState: obj2, disabled, ref: ref.ref, onPress: handlePress, children: items };
      obj2 = { selected };
      const PressableScale = native.PressableScale;
      const merged1 = Object.assign(merged);
      let tmp9Result = null != metroImportAll || null != c7;
      if (tmp9Result) {
        const obj4 = { style: null, textEmojiStyle: null, fastImageStyle: null, src: emojiURL, name: str };
        ({ emoji: obj3.style, textEmoji: obj3.textEmojiStyle, imageEmoji: obj3.fastImageStyle } = pill);
        emojiURL = undefined;
        const tmp11 = EmojiDefault;
        if (null != metroImportAll) {
          const obj6 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
          ({ id: obj5.id, animated: obj5.animated } = metroImportAll);
          const tmp10Result = AvatarUtilsDefault;
          emojiURL = tmp10Result.getEmojiURL(obj6);
        }
        str = c7;
        if (c7 == null) {
          str = "";
        }
        tmp9Result = metroImportAll(tmp11, obj4);
      }
      items = [tmp9Result, ];
      const obj10 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children };
      items[1] = metroImportAll(Text_Text.Text, obj10);
      return handlePress(PressableScale, obj);
    }
  };
  return closure_8(require("ForumTagContextMenu"), obj2);
});
const result = size.fileFinishedImporting("modules/forums/native/AvailableForumTag.tsx");

export default tmp4;