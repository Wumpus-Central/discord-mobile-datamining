// === Module 9411: GuildProfileTraits ===

// Module 9411 (GuildProfileTraits)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4527 */;
import Text_Text from "Text/Text" /* 4886 */;
import EmojiDefault from "Emoji" /* 6625 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let emoji, profile;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: { display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 8 }, trait: obj2, emojiImage: { width: 16, height: 16 } };
obj2 = { display: "flex", flexDirection: "row", gap: 4, alignItems: "center", paddingHorizontal: 8, paddingVertical: 4, borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderStyle: "solid", borderColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_7 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((emoji) => {
  const obj = react2;
  const cResult = obj.c(7);
  emoji = emoji.emoji;
  const tmp3 = closure_7();
  if (null == emoji) {
    return null;
  } else {
    if (cResult[0] === emoji.animated) {
      let tmp4;
      if (cResult[1] === emoji.id) {
        tmp4 = cResult[2];
      }
      const obj4 = EmojiUtilsDefault;
      const tmp8 = obj4.isCustomEmoji(emoji) ? emoji.name : emoji.surrogates;
      if (cResult[3] === tmp4) {
        if (cResult[4] === tmp8) {
          let tmp9;
          if (cResult[5] === tmp3.emojiImage) {
            tmp9 = cResult[6];
          }
          return tmp9;
        }
      }
      const obj5 = { src: tmp4, name: tmp8, fastImageStyle: tmp3.emojiImage };
      const tmp11 = hasOwnProperty(EmojiDefault, obj5);
      cResult[3] = tmp4;
      cResult[4] = tmp8;
      cResult[5] = tmp3.emojiImage;
      cResult[6] = tmp11;
      tmp9 = tmp11;
    }
    let emojiURL;
    if (null != emoji.id) {
      const obj7 = { id: null, animated: null, size: 16 };
      ({ id: obj3.id, animated: obj3.animated } = emoji);
      const obj2 = AvatarUtilsDefault;
      emojiURL = obj2.getEmojiURL(obj7);
    }
    cResult[0] = emoji.animated;
    cResult[1] = emoji.id;
    cResult[2] = emojiURL;
    tmp4 = emojiURL;
  }
}) : ((emoji) => {
  emoji = emoji.emoji;
  if (null == emoji) {
    return null;
  } else {
    let emojiURL;
    if (null != emoji.id) {
      const obj4 = { id: null, animated: null, size: 16 };
      ({ id: obj2.id, animated: obj2.animated } = emoji);
      const obj = AvatarUtilsDefault;
      emojiURL = obj.getEmojiURL(obj4);
    }
    const obj3 = EmojiUtilsDefault;
    const obj6 = { src: emojiURL, name: obj3.isCustomEmoji(emoji) ? emoji.name : emoji.surrogates, fastImageStyle: tmp.emojiImage };
    obj3.isCustomEmoji(emoji) ? emoji.name : emoji.surrogates;
    return hasOwnProperty(EmojiDefault, obj6);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((trait) => {
  let items;
  let tmp5;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(8);
  trait = trait.trait;
  const tmp4 = closure_7();
  if (cResult[0] !== trait.emoji) {
    const obj2 = { emoji: trait.emoji };
    const tmp8 = hasOwnProperty(closure_8, obj2);
    cResult[0] = trait.emoji;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== trait.label) {
    const obj3 = { variant: "text-sm/medium", color: "text-default", children: trait.label };
    const tmp11 = hasOwnProperty(Text_Text.Text, obj3);
    cResult[2] = trait.label;
    cResult[3] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === tmp4.trait) {
    if (cResult[5] === tmp5) {
      let tmp12;
      if (cResult[6] === tmp9) {
        tmp12 = cResult[7];
      }
      return tmp12;
    }
  }
  const obj4 = { style: tmp4.trait, children: items };
  items = [tmp5, tmp9];
  const tmp13 = metroRequire(View, obj4);
  cResult[4] = tmp4.trait;
  cResult[5] = tmp5;
  cResult[6] = tmp9;
  cResult[7] = tmp13;
  tmp12 = tmp13;
}) : ((trait) => {
  let items;
  trait = trait.trait;
  const obj = { style: closure_7().trait, children: items };
  items = [, ];
  const obj2 = { emoji: trait.emoji };
  items[0] = hasOwnProperty(closure_8, obj2);
  const obj3 = { variant: "text-sm/medium", color: "text-default", children: trait.label };
  items[1] = hasOwnProperty(Text_Text.Text, obj3);
  return metroRequire(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((profile) => {
  let arr;
  let tmp7;
  let obj = react2;
  const cResult = obj.c(10);
  profile = profile.profile;
  const tmp2 = closure_7();
  if (cResult[0] !== profile.traits) {
    let tmp4;
    let tmp5;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function s(arg0, arg1) {
        const obj = { key: "trait-" + arg1 };
        const merged = Object.assign(arg0);
        return obj;
      };
      cResult[2] = fn;
      tmp4 = fn;
    } else {
      tmp4 = cResult[2];
    }
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function u(label) {
        return label.label.length > 0;
      };
      cResult[3] = fn2;
      tmp5 = fn2;
    } else {
      tmp5 = cResult[3];
    }
    const traits = profile.traits;
    const mapped = traits.map(tmp4);
    const found = mapped.filter(tmp5);
    cResult[0] = profile.traits;
    cResult[1] = found;
    arr = found;
  } else {
    arr = cResult[1];
  }
  const container = tmp2.container;
  if (cResult[4] !== arr) {
    let tmp9;
    const _Symbol3 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const fn3 = function h(trait) {
        const obj = { trait };
        return closure_1_5(closure_1_9, obj, trait.key);
      };
      cResult[6] = fn3;
      tmp9 = fn3;
    } else {
      tmp9 = cResult[6];
    }
    const mapped1 = arr.map(tmp9);
    cResult[4] = arr;
    cResult[5] = mapped1;
    tmp7 = mapped1;
  } else {
    tmp7 = cResult[5];
  }
  if (cResult[7] === tmp2.container) {
    let tmp11;
    if (cResult[8] === tmp7) {
      tmp11 = cResult[9];
    }
    return tmp11;
  }
  const tmp12 = hasOwnProperty(View, { style: container, children: tmp7 });
  cResult[7] = tmp2.container;
  cResult[8] = tmp7;
  cResult[9] = tmp12;
  tmp11 = tmp12;
}) : ((profile) => {
  profile = profile.profile;
  const items = [profile];
  const tmp = closure_7();
  const memo = react.useMemo(() => {
    const traits = profile.traits;
    const mapped = traits.map((item, index) => {
      const obj = { key: "trait-" + index };
      const merged = Object.assign(item);
      return obj;
    });
    return mapped.filter((label) => label.label.length > 0);
  }, items);
  let obj = {
    style: tmp.container,
    children: memo.map((trait) => {
      const obj = { trait };
      return closure_1_5(closure_1_9, obj, trait.key);
    })
  };
  return closure_5(View, obj);
});
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileTraits.tsx");

export default tmp3;