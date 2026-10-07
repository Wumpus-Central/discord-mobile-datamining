// === Module 10369: AppliedForumTag ===

// Module 10369 (AppliedForumTag)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import Text_Text from "Text/Text" /* 4892 */;
import EmojiDefault from "Emoji" /* 6632 */;
import ForumTagContextMenuDefault from "ForumTagContextMenu" /* 10370 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import EmojiStore from "EmojiStore" /* 5645 */;

require = fn;
let closure_3 = ["ref"];
const View = fn(17).View;
const EMOJI_URL_BASE_SIZE = fn(1380).EMOJI_URL_BASE_SIZE;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { pill: { height: 24, paddingHorizontal: 8, borderRadius: 20, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, marginRight: 4, flexShrink: 1 }, disableEndMargin: { marginRight: 0 }, emoji: { height: 12, width: 12, marginRight: 4, flexShrink: 0 }, textEmoji: { fontSize: 10, marginRight: 4 }, tagName: { flexShrink: 1 }, container: { display: "flex", flexDirection: "row", alignItems: "center" } };
let closure_10 = createStyles.createStyles(obj2);
fn(558);
const obj3 = { height: 24, paddingHorizontal: 8, borderRadius: 20, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, marginRight: 4, flexShrink: 1 };
const ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((hasUnreads) => {
  const cResult = containerStyle(name[9]).c(17);
  ({ tag, containerStyle } = hasUnreads);
  const tmp4 = closure_10();
  importDefault = tmp4;
  name = tag.name;
  const emojiId = tag.emojiId;
  const emojiName = tag.emojiName;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [str];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== emojiId) {
    const fn = function x() {
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
  let obj = containerStyle(name[9]);
  const stateFromStores = containerStyle(name[10]).useStateFromStores(first, tmp7);
  str = "text-muted";
  if (hasUnreads.hasUnreads) {
    str = "text-default";
  }
  if (cResult[3] === str) {
    if (cResult[4] === containerStyle) {
      if (cResult[5] === stateFromStores) {
        if (cResult[6] === emojiId) {
          if (cResult[7] === emojiName) {
            if (cResult[8] === name) {
              if (cResult[9] === tmp4.container) {
                if (cResult[10] === tmp4.emoji) {
                  if (cResult[11] === tmp4.tagName) {
                    if (cResult[12] === tmp4.textEmoji) {
                      let tmp9 = cResult[13];
                    }
                    if (cResult[14] === tmp9) {
                      if (cResult[15] === tag.id) {
                        let tmp10 = cResult[16];
                      }
                      return tmp10;
                    }
                    const obj2 = { tagId: tag.id, children: tmp9 };
                    let tmp13 = closure_8(require("ForumTagContextMenu"), obj2);
                    cResult[14] = tmp9;
                    cResult[15] = tag.id;
                    cResult[16] = tmp13;
                    tmp10 = tmp13;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  class I {
    constructor(arg0) {
      tmp = closure_4(hasUnreads, closure_3);
      obj = { style: null, accessible: true, accessibilityLabel: null, ref: null };
      tmp4 = closure_1;
      items = [, ];
      items[0] = closure_1.container;
      items[1] = containerStyle;
      obj.style = items;
      tmp6 = closure_2;
      tmp2 = jsxs;
      tmp3 = View;
      tmp5 = closure_0;
      intl = closure_0(closure_2[11]).intl;
      obj1 = { tagName: name };
      tmp7 = name;
      obj.accessibilityLabel = intl.formatToPlainString(closure_0(closure_2[11]).t.tXXD6v, obj1);
      obj.ref = hasUnreads.ref;
      merged = Object.assign(tmp);
      str = emojiName;
      tmp11Result = null != emojiName;
      if (!tmp11Result) {
        tmp10 = emojiId;
        tmp11Result = null != emojiId;
      }
      if (tmp11Result) {
        tmp11 = jsx;
        tmp12 = closure_1;
        obj7 = { textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
        ({ textEmoji: obj3.textEmojiStyle, emoji: obj3.fastImageStyle } = tmp4);
        tmp14 = closure_5;
        emojiURL = undefined;
        tmp13 = closure_1(tmp6[12]);
        if (null != closure_5) {
          tmp12Result = tmp12(tmp6[13]);
          obj8 = { id: null, animated: null, size: null };
          ({ id: obj5.id, animated: obj5.animated } = tmp14);
          tmp16 = EMOJI_URL_BASE_SIZE;
          obj8.size = EMOJI_URL_BASE_SIZE;
          emojiURL = tmp12Result.getEmojiURL(obj8);
        }
        obj7.src = emojiURL;
        if (str == null) {
          str = "";
        }
        obj7.name = str;
        tmp11Result = tmp11(tmp13, obj7);
      }
      items1 = [, ];
      items1[0] = tmp11Result;
      obj9 = { lineClamp: 1, style: tmp4.tagName, variant: "text-xs/semibold", color: c6, children: tmp7 };
      items1[1] = jsx(tmp5(tmp6[14]).Text, obj9);
      obj.children = items1;
      return tmp2(tmp3, obj);
    }
  }
  cResult[3] = str;
  cResult[4] = containerStyle;
  cResult[5] = stateFromStores;
  cResult[6] = emojiId;
  cResult[7] = emojiName;
  cResult[8] = name;
  cResult[9] = tmp4.container;
  cResult[10] = tmp4.emoji;
  cResult[11] = tmp4.tagName;
  cResult[12] = tmp4.textEmoji;
  cResult[13] = I;
  tmp9 = I;
  const tmpResult = containerStyle(name[10]);
}) : ((hasUnreads) => {
  ({ tag, containerStyle: require } = hasUnreads);
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  let str;
  importDefault = closure_10();
  ({ name: c2, emojiId: c3, emojiName: c4 } = tag);
  let items = [str];
  closure_5 = initialize.useStateFromStores(items, () => {
    let usableCustomEmojiById = null;
    if (null != c3) {
      usableCustomEmojiById = EmojiStore.getUsableCustomEmojiById(tmp);
    }
    return usableCustomEmojiById;
  });
  str = "text-muted";
  if (hasUnreads.hasUnreads) {
    str = "text-default";
  }
  return closure_8(ForumTagContextMenuDefault, {
    tagId: tag.id,
    children(ref) {
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      const obj = { style: null, accessible: true, accessibilityLabel: null, ref: null };
      const items = [container.container, _require];
      obj.style = items;
      const intl = util.intl;
      obj.accessibilityLabel = intl.formatToPlainString(util.t.tXXD6v, { tagName });
      obj.ref = ref.ref;
      const merged1 = Object.assign(merged);
      str = c4;
      let tmp11Result = null != c4;
      if (!tmp11Result) {
        tmp11Result = null != c3;
      }
      if (tmp11Result) {
        const obj4 = { textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
        ({ textEmoji: obj3.textEmojiStyle, emoji: obj3.fastImageStyle } = container);
        let emojiURL;
        if (null != closure_5) {
          const obj6 = { id: null, animated: null, size: null };
          ({ id: obj5.id, animated: obj5.animated } = closure_5);
          obj6.size = EMOJI_URL_BASE_SIZE;
          emojiURL = AvatarUtilsDefault.getEmojiURL(obj6);
          const tmp12Result = AvatarUtilsDefault;
        }
        obj4.src = emojiURL;
        if (str == null) {
          str = "";
        }
        obj4.name = str;
        tmp11Result = closure_2_8(EmojiDefault, obj4);
      }
      const items1 = [tmp11Result, closure_2_8(Text_Text.Text, { lineClamp: 1, style: container.tagName, variant: "text-xs/semibold", color: str, children: tagName })];
      obj.children = items1;
      return options(View, obj);
    }
  });
});
let closure_11 = tmp5;
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/AppliedForumTag.tsx");

export const AppliedForumTagPill = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(11);
  ({ tag, hasUnreads, containerStyle, disableEndMargin } = arg0);
  const tmp2 = closure_10();
  if (cResult[0] === disableEndMargin) {
    if (cResult[1] === tmp2.disableEndMargin) {
      if (cResult[3] === containerStyle) {
        if (cResult[4] === tmp2.pill) {
          if (cResult[5] === tmp3) {
            let tmp5 = cResult[6];
          }
          if (cResult[7] === hasUnreads) {
            if (cResult[8] === tmp5) {
              if (cResult[9] === tag) {
                let tmp6 = cResult[10];
              }
              return tmp6;
            }
          }
          const obj2 = { tag, hasUnreads, containerStyle: tmp5 };
          const tmp9 = closure_1_8(closure_11, obj2);
          cResult[7] = hasUnreads;
          cResult[8] = tmp5;
          cResult[9] = tag;
          cResult[10] = tmp9;
          tmp6 = tmp9;
        }
      }
      const items = [tmp2.pill, containerStyle, cResult[2]];
      cResult[3] = containerStyle;
      cResult[4] = tmp2.pill;
      cResult[5] = cResult[2];
      cResult[6] = items;
      tmp5 = items;
    }
  }
  cResult[0] = disableEndMargin;
  disableEndMargin = tmp2.disableEndMargin;
  cResult[1] = disableEndMargin;
  cResult[2] = disableEndMargin ? tmp2.disableEndMargin : {};
  const tmp4 = disableEndMargin ? tmp2.disableEndMargin : {};
}) : ((arg0) => {
  ({ tag, hasUnreads, containerStyle, disableEndMargin } = arg0);
  const tmp = closure_10();
  const obj = { tag, hasUnreads, containerStyle: null };
  const items = [tmp.pill, containerStyle, disableEndMargin ? tmp.disableEndMargin : {}];
  obj.containerStyle = items;
  return closure_1_8(closure_11, obj);
});
export const AppliedForumTag = tmp5;