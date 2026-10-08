// === Module 9089: GuildProfileTraits ===

// Module 9089 (GuildProfileTraits)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4725 */;
import Text_Text from "Text/Text" /* 5086 */;
import EmojiDefault from "Emoji" /* 6809 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 8 }, trait: { display: "flex", flexDirection: "row", gap: 4, alignItems: "center", paddingHorizontal: 8, paddingVertical: 4, borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderStyle: "solid", borderColor: nativeDefault.colors.BORDER_SUBTLE }, emojiImage: { width: 16, height: 16 } };
let closure_7 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function TraitEmoji(emoji) {
  const cResult = c.c(7);
  emoji = emoji.emoji;
  const tmp3 = closure_7();
  if (null == emoji) {
    return null;
  } else {
    if (cResult[0] === emoji.animated) {
      if (cResult[1] === emoji.id) {
        let tmp4 = cResult[2];
      }
      const tmp8 = EmojiUtilsDefault.isCustomEmoji(emoji) ? emoji.name : emoji.surrogates;
      if (cResult[3] === tmp4) {
        if (cResult[4] === tmp8) {
          if (cResult[5] === tmp3.emojiImage) {
            let tmp9 = cResult[6];
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
      ({ id: obj3.id, animated: obj3.animated } = emoji);
      emojiURL = AvatarUtilsDefault.getEmojiURL({ id: null, animated: null, size: 16 });
      const obj7 = { id: null, animated: null, size: 16 };
    }
    cResult[0] = emoji.animated;
    cResult[1] = emoji.id;
    cResult[2] = emojiURL;
    tmp4 = emojiURL;
  }
}) : (function TraitEmoji(emoji) {
  emoji = emoji.emoji;
  if (null == emoji) {
    return null;
  } else {
    let emojiURL;
    if (null != emoji.id) {
      ({ id: obj2.id, animated: obj2.animated } = emoji);
      emojiURL = AvatarUtilsDefault.getEmojiURL({ id: null, animated: null, size: 16 });
      const obj4 = { id: null, animated: null, size: 16 };
    }
    const obj6 = { src: emojiURL, name: EmojiUtilsDefault.isCustomEmoji(emoji) ? emoji.name : emoji.surrogates, fastImageStyle: tmp.emojiImage };
    return hasOwnProperty(EmojiDefault, obj6);
  }
});
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildProfileTraitView(trait) {
  const cResult = c.c(8);
  trait = trait.trait;
  const tmp4 = closure_7();
  if (cResult[0] !== trait.emoji) {
    const obj2 = { emoji: trait.emoji };
    const tmp8 = hasOwnProperty(closure_8, obj2);
    cResult[0] = trait.emoji;
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== trait.label) {
    const obj3 = { variant: "text-sm/medium", color: "text-default", children: trait.label };
    const tmp11 = hasOwnProperty(Text_Text.Text, obj3);
    cResult[2] = trait.label;
    cResult[3] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === tmp4.trait) {
    if (cResult[5] === tmp5) {
      if (cResult[6] === tmp9) {
        let tmp12 = cResult[7];
      }
      return tmp12;
    }
  }
  const obj4 = { style: tmp4.trait, children: null };
  const items = [tmp5, tmp9];
  obj4.children = items;
  const tmp13 = timestampProducer(View, obj4);
  cResult[4] = tmp4.trait;
  cResult[5] = tmp5;
  cResult[6] = tmp9;
  cResult[7] = tmp13;
  tmp12 = tmp13;
}) : (function GuildProfileTraitView(trait) {
  trait = trait.trait;
  const obj = { style: closure_7().trait, children: null };
  const items = [hasOwnProperty(closure_8, { emoji: trait.emoji }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: trait.label })];
  obj.children = items;
  return timestampProducer(View, obj);
});
ReactCompilerGating = fn(558);
let obj3 = { display: "flex", flexDirection: "row", gap: 4, alignItems: "center", paddingHorizontal: 8, paddingVertical: 4, borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderStyle: "solid", borderColor: nativeDefault.colors.BORDER_SUBTLE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileTraits.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildProfileTraits(profile) {
  const cResult = c.c(10);
  let traits = profile.profile;
  const tmp2 = closure_7();
  if (cResult[0] !== traits.traits) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function s(arg0, arg1) {
        const merged = Object.assign(arg0);
        return { key: "trait-" + arg1 };
      };
      cResult[2] = fn;
      let tmp4 = fn;
    } else {
      tmp4 = cResult[2];
    }
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function u(label) {
        return label.label.length > 0;
      };
      cResult[3] = fn2;
      let tmp5 = fn2;
    } else {
      tmp5 = cResult[3];
    }
    const traits1 = traits.traits;
    const mapped = traits1.map(tmp4);
    const found = mapped.filter(tmp5);
    traits = traits.traits;
    cResult[0] = traits;
    cResult[1] = found;
  } else if (cResult[4] !== cResult[1]) {
    const _Symbol3 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const fn3 = function h(trait) {
        return closure_1_5(closure_1_9, { trait }, trait.key);
      };
      cResult[6] = fn3;
      let tmp11 = fn3;
    } else {
      tmp11 = cResult[6];
    }
    const mapped1 = arr.map(tmp11);
    cResult[4] = arr;
    cResult[5] = mapped1;
  } else {
    if (cResult[7] === tmp2.container) {
      if (cResult[8] === tmp9) {
        let tmp14 = cResult[9];
      }
      return tmp14;
    }
    const obj2 = { style: tmp8, children: cResult[5] };
    const tmp17 = hasOwnProperty(View, obj2);
    cResult[7] = tmp2.container;
    cResult[8] = cResult[5];
    cResult[9] = tmp17;
    tmp14 = tmp17;
  }
}) : (function GuildProfileTraits(profile) {
  profile = profile.profile;
  const items = [profile];
  const memo = noop.useMemo(() => {
    const traits = profile.traits;
    const mapped = traits.map((item, index) => {
      const merged = Object.assign(item);
      return { key: "trait-" + index };
    });
    return mapped.filter((label) => label.label.length > 0);
  }, items);
  const tmp = closure_7();
  return closure_5(View, { style: closure_7().container, children: memo.map((trait) => closure_1_5(closure_1_9, { trait }, trait.key)) });
});