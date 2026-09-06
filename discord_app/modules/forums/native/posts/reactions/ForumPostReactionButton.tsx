// === Module 10218: ForumPostReactionButton ===

// Module 10218 (ForumPostReactionButton)
import nativeDefault from "native" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import util from "util" /* 1114 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import UserSettings from "UserSettings" /* 1935 */;
import ReactionUtils from "ReactionUtils" /* 4211 */;
import Text_Text from "Text/Text" /* 4556 */;
import Pressables from "Pressables" /* 5123 */;
import EmojiDefault from "Emoji" /* 7130 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 7763 */;
import useNativeForumPostHandlersDefault from "useNativeForumPostHandlers" /* 10219 */;
import reactions_ReactionUtils from "reactions/ReactionUtils" /* 11254 */;
import useEmojiColorPalette from "useEmojiColorPalette" /* 11259 */;
import useReactionPermissionsDefault from "useReactionPermissions" /* 11314 */;
import AnimatedCounterDefault from "AnimatedCounter" /* 11316 */;
import noop from "module_19" /* 19 */;

require = fn;
class BurstReactionButton {
  constructor(arg0) {
    ({ colors, emoji, onPress, onLongPress, containerStyle, count, emojiSize, selected, animate, animateCount, accessible } = global);
    tmp = closure_0;
    tmp2 = closure_2;
    obj = closure_0(closure_2[13]);
    emojiColorPalette = obj.useEmojiColorPalette(colors);
    str = "";
    if (null != emojiColorPalette) {
      tmpResult = tmp(tmp2[14]);
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
    obj.borderColor = backgroundColor1;
    num2 = 0;
    if (selected) {
      num2 = 1;
    }
    obj1 = { containerStyle: items, textStyle: null, selected: false, emoji: null, count: null, animate: null, onPress: null, onLongPress: null, emojiSize: null, animateCount: null, accessible: null };
    obj.borderWidth = num2;
    items[1] = obj;
    accentColor = undefined;
    if (emojiColorPalette != null) {
      accentColor = emojiColorPalette.accentColor;
    }
    obj1.textStyle = { color: accentColor };
    obj1.emoji = emoji;
    obj1.count = count;
    obj1.animate = animate;
    obj1.onPress = onPress;
    obj1.onLongPress = onLongPress;
    obj1.emojiSize = emojiSize;
    obj1.animateCount = animateCount;
    obj1.accessible = accessible;
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
      obj = closure_1(closure_2[15]);
      obj = { id: null, animated: null, size: null };
      obj.id = emoji.id;
      if (animate) {
        animate = emoji.animated;
      }
      obj.animated = animate;
      obj.size = emojiSize;
      emojiURL = obj.getEmojiURL(obj);
    }
    selected = undefined;
    if (selected) {
      selected = tmp.selected;
    }
    tmp6 = jsxs;
    tmp7 = closure_2;
    obj1 = { style: null, accessible, accessibilityLabel: null, onPress: null, onLongPress: null, disabled: null, children: null };
    items = [, , ];
    items[0] = tmp.container;
    items[1] = containerStyle;
    items[2] = selected;
    obj1.style = items;
    obj4 = closure_0(closure_2[16]);
    obj1.accessibilityLabel = obj4.getAccessibleEmojiDisplayName(selected, count, emoji, false);
    obj1.onPress = onPress;
    obj1.onLongPress = onLongPress;
    obj1.disabled = disabled;
    tmp8 = jsx;
    tmp9 = closure_1;
    obj2 = { textEmojiStyle: tmp.textEmoji, fastImageStyle: tmp.imageEmoji, src: emojiURL, name: emoji.name };
    items1 = [, ];
    items1[0] = jsx(closure_1(closure_2[17]), obj2);
    tmp8Result = null != count;
    if (tmp8Result) {
      num = 0;
      tmp8Result = count > 0;
    }
    if (tmp8Result) {
      tmp11 = View;
      obj3 = { style: null, children: null };
      obj3.style = tmp.countContainer;
      obj4 = { textStyle: null, count: null, animate: null };
      obj4.textStyle = textStyle;
      obj4.count = count;
      obj4.animate = animateCount;
      obj3.children = tmp8(tmp9(tmp7[18]), obj4);
      tmp8Result = tmp8(View, obj3);
    }
    items1[1] = tmp8Result;
    obj1.children = items1;
    return tmp6(closure_0(closure_2[6]).PressableOpacity, obj1);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsxs: hasOwnProperty, jsx: metroRequire } = jsxProd);
fn(4560);
let createStyles = { container: null, selected: null, textEmoji: null, imageEmoji: null, countContainer: null };
createStyles = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: 8, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.REACTION_BORDER_DEFAULT, backgroundColor: nativeDefault.colors.REACTION_BACKGROUND_DEFAULT, minWidth: 32, minHeight: 26, maxHeight: 26 };
createStyles.container = createStyles;
createStyles.selected = { borderColor: nativeDefault.colors.REACTION_BORDER_REACTED_DEFAULT, backgroundColor: nativeDefault.colors.REACTION_BACKGROUND_REACTED_DEFAULT };
createStyles.textEmoji = { fontSize: 12 };
createStyles.imageEmoji = { height: 16, width: 16 };
createStyles.countContainer = { paddingStart: 4 };
const React5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/reactions/ForumPostReactionButton.tsx");

export const DEFAULT_EMOJI_SIZE = 14;
export const AdditionalReactionCount = function AdditionalReactionCount(arg0) {
  ({ count, threadId, containerStyle } = arg0);
  let obj = { accessible: true, accessibilityLabel: null, style: null, onPress: null, children: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.N8hbZB);
  const items = [closure_7().container, containerStyle];
  obj.style = items;
  obj.onPress = useNativeForumPostHandlersDefault({ threadId }).onTapReactionCount;
  obj = { variant: "heading-sm/medium", color: "interactive-text-default", children: hasOwnProperty(Text_Text.Text, obj) };
  const items1 = ["+", count];
  obj.children = items1;
  return timestampProducer(Pressables.PressableOpacity, obj);
};
export const AddReactionButton = function AddReactionButton(reactionType) {
  let NORMAL = reactionType.reactionType;
  ({ threadId, containerStyle } = reactionType);
  if (NORMAL === undefined) {
    NORMAL = MessageReactionsTypes.ReactionTypes.NORMAL;
  }
  const obj = { style: null, accessible: true, accessibilityLabel: null, onPress: null, children: null };
  const items = [closure_7().container, containerStyle];
  obj.style = items;
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.lfIHs4);
  obj.onPress = useNativeForumPostHandlersDefault({ threadId, reactionType: NORMAL }).onTapAddReaction;
  obj.children = timestampProducer(reactions_ReactionUtils.ADD_REACTION_ICON_COMPONENTS[NORMAL], { size: "xs" });
  return timestampProducer(Pressables.PressableOpacity, obj);
};
export const ForumPostReactionButton = function ForumPostReactionButton(emojiSize) {
  ({ thread, reaction } = emojiSize);
  ({ animateCount, containerStyle, textStyle, locationAnalyticsObject } = emojiSize);
  let num = emojiSize.emojiSize;
  if (num === undefined) {
    num = 14;
  }
  const tmp = useReactionPermissionsDefault(thread);
  const disableReactionCreates = tmp.disableReactionCreates;
  const disableReactionUpdates = tmp.disableReactionUpdates;
  let obj = { threadId: thread.id };
  const tmp2 = useNativeForumPostHandlersDefault(obj);
  const onTapReaction = tmp2.onTapReaction;
  const onLongTapReaction = tmp2.onLongTapReaction;
  const AnimateEmoji = UserSettings.AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  const items = [disableReactionCreates, disableReactionUpdates, locationAnalyticsObject, onTapReaction, reaction];
  const callback = noop.useCallback(() => {
    onTapReaction({ reaction, disableReactionCreates, disableReactionUpdates, locationAnalyticsObject });
  }, items);
  const items1 = [onLongTapReaction, reaction];
  const callback1 = noop.useCallback(() => {
    onLongTapReaction(reaction);
  }, items1);
  let tmp6 = !disableReactionCreates;
  if (disableReactionCreates) {
    tmp6 = !disableReactionUpdates;
  }
  if (reaction.burst_count > 0) {
    obj = { accessible: tmp6, emoji: null, selected: null, colors: null, count: null, onPress: null, onLongPress: null, containerStyle: null, textStyle: null, emojiSize: null, animate: null, animateCount: null };
    ({ emoji: obj3.emoji, me_burst: obj3.selected, burst_colors } = reaction);
    if (burst_colors == null) {
      burst_colors = [];
    }
    obj.colors = burst_colors;
    obj.count = reaction.burst_count;
    obj.onPress = callback;
    obj.onLongPress = callback1;
    obj.containerStyle = containerStyle;
    obj.textStyle = textStyle;
    obj.emojiSize = num;
    obj.animate = setting;
    obj.animateCount = animateCount;
    let tmp10Result = timestampProducer(BurstReactionButton, obj);
  } else {
    obj = { accessible: tmp6, emoji: null, selected: null, count: null, onPress: null, onLongPress: null, containerStyle: null, textStyle: null, emojiSize: null, animate: null, animateCount: null };
    ({ emoji: obj2.emoji, me: obj2.selected, count: obj2.count } = reaction);
    obj.onPress = callback;
    obj.onLongPress = callback1;
    obj.containerStyle = containerStyle;
    obj.textStyle = textStyle;
    obj.emojiSize = num;
    obj.animate = setting;
    obj.animateCount = animateCount;
    tmp10Result = timestampProducer(ReactionButton, obj);
  }
  return tmp10Result;
};
export { BurstReactionButton };
export { ReactionButton };