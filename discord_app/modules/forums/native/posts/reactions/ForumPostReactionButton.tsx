// === Module 10116: BurstReactionButton ===

// Module 10116 (BurstReactionButton)
import int2hslRaw from "int2hslRaw" /* 688 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getAvatarURLDefault from "getAvatarURL" /* 1435 */;
import MAX_REACTIONS from "MAX_REACTIONS" /* 4100 */;
import Text from "Text" /* 4440 */;
import PressableBase from "PressableBase" /* 5015 */;
import EmojiDefault from "Emoji" /* 5532 */;
import ReactionTypes from "ReactionTypes" /* 7432 */;
import handleOutOfSuperReactions from "handleOutOfSuperReactions" /* 8828 */;
import useNativeForumPostHandlersDefault from "useNativeForumPostHandlers" /* 10117 */;
import useEmojiColorPalette from "useEmojiColorPalette" /* 10422 */;
import AnimatedCountDefault from "AnimatedCount" /* 10423 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
class BurstReactionButton {
  constructor(arg0) {
    ({ colors, emoji, onPress, onLongPress, containerStyle, count, emojiSize, selected, animate, animateCount, accessible } = global);
    tmp = closure_0;
    tmp2 = closure_2;
    obj = require("useEmojiColorPalette");
    emojiColorPalette = obj.useEmojiColorPalette(colors);
    str = "";
    if (null != emojiColorPalette) {
      tmpResult = require("int2hslRaw");
      backgroundColor = undefined;
      if (emojiColorPalette != null) {
        backgroundColor = emojiColorPalette.backgroundColor;
      }
      num = undefined;
      if (emojiColorPalette != null) {
        num = emojiColorPalette.opacity;
      }
      if (num == null) {
        num = 0.15;
      }
      str2 = tmpResult.hex2rgb(backgroundColor, num);
      if (str2 == null) {
        str2 = "";
      }
      str = str2;
    }
    items = [, ];
    items[0] = containerStyle;
    obj = { backgroundColor: str, borderColor: null, borderWidth: null };
    backgroundColor1 = undefined;
    tmp5 = jsx;
    tmp6 = ReactionButton;
    if (emojiColorPalette != null) {
      backgroundColor1 = emojiColorPalette.backgroundColor;
    }
    obj[1] = backgroundColor1;
    num2 = 0;
    if (selected) {
      num2 = 1;
    }
    obj1 = { containerStyle: items, textStyle: null, selected: false, emoji: null, count: null, animate: null, onPress: null, onLongPress: null, emojiSize: null, animateCount: null, accessible: null };
    obj[2] = num2;
    items[1] = obj;
    accentColor = undefined;
    if (emojiColorPalette != null) {
      accentColor = emojiColorPalette.accentColor;
    }
    obj1[1] = { color: accentColor };
    obj1[3] = emoji;
    obj1[4] = count;
    obj1[5] = animate;
    obj1[6] = onPress;
    obj1[7] = onLongPress;
    obj1[8] = emojiSize;
    obj1[9] = animateCount;
    obj1[10] = accessible;
    return tmp5(tmp6, obj1);
  }
}
class ReactionButton {
  constructor(arg0) {
    ({ emoji, count, selected, animate, disabled } = global);
    ({ onPress, onLongPress, textStyle, containerStyle, emojiSize, animateCount, accessible } = global);
    if (disabled === undefined) {
      disabled = false;
    }
    tmp = closure_7();
    emojiURL = undefined;
    if (null != emoji.id) {
      tmp3 = closure_1;
      tmp4 = closure_2;
      obj = require("getAvatarURL");
      obj = { id: null, animated: null, size: null };
      obj[0] = emoji.id;
      if (animate) {
        animate = emoji.animated;
      }
      obj[1] = animate;
      obj[2] = emojiSize;
      emojiURL = obj.getEmojiURL(obj);
    }
    selected = undefined;
    if (selected) {
      selected = tmp.selected;
    }
    tmp6 = jsxs;
    tmp7 = closure_2;
    obj1 = { style: items, accessible, accessibilityLabel: null, onPress: null, onLongPress: null, disabled: null, children: null };
    items = [, , ];
    items[0] = tmp.container;
    items[1] = containerStyle;
    items[2] = selected;
    obj4 = require("MAX_REACTIONS");
    obj1[2] = obj4.getAccessibleEmojiDisplayName(selected, count, emoji, false);
    obj1[3] = onPress;
    obj1[4] = onLongPress;
    obj1[5] = disabled;
    tmp8 = jsx;
    tmp9 = closure_1;
    obj2 = { textEmojiStyle: tmp.textEmoji, fastImageStyle: tmp.imageEmoji, src: emojiURL, name: emoji.name };
    items1 = [, ];
    items1[0] = jsx(require("Emoji"), obj2);
    tmp8Result = null != count;
    if (tmp8Result) {
      num = 0;
      tmp8Result = count > 0;
    }
    if (tmp8Result) {
      tmp11 = View;
      obj3 = { style: null, children: null };
      obj3[0] = tmp.countContainer;
      obj4 = { textStyle: null, count: null, animate: null };
      obj4[0] = textStyle;
      obj4[1] = count;
      obj4[2] = animateCount;
      obj3[1] = tmp8(require("AnimatedCount"), obj4);
      tmp8Result = tmp8(View, obj3);
    }
    items1[1] = tmp8Result;
    obj1[6] = items1;
    return tmp6(require("PressableBase").PressableOpacity, obj1);
  }
}
({ jsxs: c5, jsx: closure_6 } = jsxProd);
createCacheKey = { container: null, selected: null, textEmoji: null, imageEmoji: null, countContainer: null };
createCacheKey = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: 8, borderRadius: ThemesDefault.radii.sm, borderWidth: 1, borderColor: ThemesDefault.colors.REACTION_BORDER_DEFAULT, backgroundColor: ThemesDefault.colors.REACTION_BACKGROUND_DEFAULT, minWidth: 32, minHeight: 26, maxHeight: 26 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderColor: ThemesDefault.colors.REACTION_BORDER_REACTED_DEFAULT, backgroundColor: ThemesDefault.colors.REACTION_BACKGROUND_REACTED_DEFAULT };
createCacheKey[2] = { fontSize: 12 };
createCacheKey[3] = { height: 16, width: 16 };
createCacheKey[4] = { paddingStart: 4 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const obj1 = { borderColor: ThemesDefault.colors.REACTION_BORDER_REACTED_DEFAULT, backgroundColor: ThemesDefault.colors.REACTION_BACKGROUND_REACTED_DEFAULT };
const result = require("set").fileFinishedImporting("modules/forums/native/posts/reactions/ForumPostReactionButton.tsx");

export const DEFAULT_EMOJI_SIZE = 14;
export const AdditionalReactionCount = function AdditionalReactionCount(arg0) {
  ({ count, threadId, containerStyle } = arg0);
  const obj = { accessible: true, accessibilityLabel: null, style: null, onPress: null, children: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.N8hbZB);
  const items = [callback3().container, containerStyle];
  obj[2] = items;
  obj[3] = useNativeForumPostHandlersDefault({ threadId }).onTapReactionCount;
  const items1 = ["+", count];
  obj[4] = callback(Text.Text, { variant: "heading-sm/medium", color: "interactive-text-default", children: items1 });
  return callback2(PressableBase.PressableOpacity, obj);
};
export const AddReactionButton = function AddReactionButton(reactionType) {
  let NORMAL = reactionType.reactionType;
  ({ threadId, containerStyle } = reactionType);
  if (NORMAL === undefined) {
    NORMAL = ReactionTypes.ReactionTypes.NORMAL;
  }
  const obj = { style: items, accessible: true, accessibilityLabel: null, onPress: null, children: null };
  items = [callback3().container, containerStyle];
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.lfIHs4);
  obj[3] = useNativeForumPostHandlersDefault({ threadId, reactionType: NORMAL }).onTapAddReaction;
  obj[4] = callback2(handleOutOfSuperReactions.ADD_REACTION_ICON_COMPONENTS[NORMAL], { size: "xs" });
  return callback2(PressableBase.PressableOpacity, obj);
};
export const ForumPostReactionButton = function ForumPostReactionButton(emojiSize) {
  ({ thread, reaction } = emojiSize);
  ({ animateCount, containerStyle, textStyle, locationAnalyticsObject } = emojiSize);
  let num = emojiSize.emojiSize;
  if (num === undefined) {
    num = 14;
  }
  let disableReactionCreates;
  let disableReactionUpdates;
  let onTapReaction;
  let onLongTapReaction;
  const tmp = locationAnalyticsObject(disableReactionCreates[11])(thread);
  disableReactionCreates = tmp.disableReactionCreates;
  disableReactionUpdates = tmp.disableReactionUpdates;
  let obj = { threadId: thread.id };
  const tmp2 = locationAnalyticsObject(disableReactionCreates[5])(obj);
  onTapReaction = tmp2.onTapReaction;
  onLongTapReaction = tmp2.onLongTapReaction;
  const AnimateEmoji = reaction(disableReactionCreates[12]).AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  const items = [disableReactionCreates, disableReactionUpdates, locationAnalyticsObject, onTapReaction, reaction];
  const callback = disableReactionUpdates.useCallback(() => {
    onTapReaction({ reaction, disableReactionCreates, disableReactionUpdates, locationAnalyticsObject });
  }, items);
  const items1 = [onLongTapReaction, reaction];
  const callback1 = disableReactionUpdates.useCallback(() => {
    onLongTapReaction(reaction);
  }, items1);
  let tmp6 = !disableReactionCreates;
  if (disableReactionCreates) {
    tmp6 = !disableReactionUpdates;
  }
  if (reaction.burst_count > 0) {
    obj = { accessible: null, emoji: null, selected: null, colors: null, count: null, onPress: null, onLongPress: null, containerStyle: null, textStyle: null, emojiSize: null, animate: null, animateCount: null };
    obj[0] = tmp6;
    ({ emoji: obj3[1], me_burst: obj3[2], burst_colors } = reaction);
    if (burst_colors == null) {
      burst_colors = [];
    }
    obj[3] = burst_colors;
    obj[4] = reaction.burst_count;
    obj[5] = callback;
    obj[6] = callback1;
    obj[7] = containerStyle;
    obj[8] = textStyle;
    obj[9] = num;
    obj[10] = setting;
    obj[11] = animateCount;
    let tmp10Result = callback2(BurstReactionButton, obj);
    const tmp10 = callback2;
    const tmp11 = BurstReactionButton;
  } else {
    obj = { accessible: null, emoji: null, selected: null, count: null, onPress: null, onLongPress: null, containerStyle: null, textStyle: null, emojiSize: null, animate: null, animateCount: null };
    obj[0] = tmp6;
    ({ emoji: obj2[1], me: obj2[2], count: obj2[3] } = reaction);
    obj[4] = callback;
    obj[5] = callback1;
    obj[6] = containerStyle;
    obj[7] = textStyle;
    obj[8] = num;
    obj[9] = setting;
    obj[10] = animateCount;
    tmp10Result = callback2(ReactionButton, obj);
  }
  return tmp10Result;
};
export { BurstReactionButton };
export { ReactionButton };