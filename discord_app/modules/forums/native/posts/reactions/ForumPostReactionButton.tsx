// discord_app/modules/forums/native/posts/reactions/ForumPostReactionButton.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import utils_ColorUtils from "../../../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import util from "../../../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../../../utils/AvatarUtils.tsx";
import UserSettings from "../../../../user_settings/UserSettings.tsx";
import ReactionUtils from "../../../../reactions/ReactionUtils.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import EmojiDefault from "../../../../emojis/native/Emoji.tsx";
import MessageReactionsTypes from "../../../../messages/MessageReactionsTypes.tsx";
import useNativeForumPostHandlersDefault from "../hooks/useNativeForumPostHandlers.tsx";
import reactions_ReactionUtils from "../../../../reactions/native/ReactionUtils.tsx";
import useEmojiColorPalette from "../../../../emojis/hooks/useEmojiColorPalette.tsx";
import useReactionPermissionsDefault from "../../../../messages/useReactionPermissions.tsx";
import AnimatedCounterDefault from "../AnimatedCounter.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
class BurstReactionButton {
  constructor(arg0) {
    ({
      colors,
      emoji,
      onPress,
      onLongPress,
      containerStyle,
      count,
      emojiSize,
      selected,
      animate,
      animateCount,
      accessible,
    } = global);
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
    items = [,];
    items[0] = containerStyle;
    obj1 = { backgroundColor: str, borderColor: null, borderWidth: null };
    backgroundColor1 = undefined;
    tmp5 = jsx;
    tmp6 = ReactionButton;
    if (emojiColorPalette != null) {
      backgroundColor1 = emojiColorPalette.backgroundColor;
    }
    obj1.borderColor = backgroundColor1;
    num2 = 0;
    if (selected) {
      num2 = 1;
    }
    obj5 = {
      containerStyle: items,
      textStyle: null,
      selected: false,
      emoji: null,
      count: null,
      animate: null,
      onPress: null,
      onLongPress: null,
      emojiSize: null,
      animateCount: null,
      accessible: null,
    };
    obj1.borderWidth = num2;
    items[1] = obj1;
    accentColor = undefined;
    if (emojiColorPalette != null) {
      accentColor = emojiColorPalette.accentColor;
    }
    obj5.textStyle = { color: accentColor };
    obj5.emoji = emoji;
    obj5.count = count;
    obj5.animate = animate;
    obj5.onPress = onPress;
    obj5.onLongPress = onLongPress;
    obj5.emojiSize = emojiSize;
    obj5.animateCount = animateCount;
    obj5.accessible = accessible;
    return tmp5(tmp6, obj5);
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
      obj1 = { id: null, animated: null, size: null };
      obj1.id = emoji.id;
      if (animate) {
        animate = emoji.animated;
      }
      obj1.animated = animate;
      obj1.size = emojiSize;
      emojiURL = obj.getEmojiURL(obj1);
    }
    selected1 = undefined;
    if (selected) {
      selected1 = tmp.selected;
    }
    tmp6 = jsxs;
    tmp7 = closure_2;
    obj8 = {
      style: null,
      accessible,
      accessibilityLabel: null,
      onPress: null,
      onLongPress: null,
      disabled: null,
      children: null,
    };
    items = [, ,];
    items[0] = tmp.container;
    items[1] = containerStyle;
    items[2] = selected1;
    obj8.style = items;
    obj4 = closure_0(closure_2[16]);
    obj8.accessibilityLabel = obj4.getAccessibleEmojiDisplayName(selected, count, emoji, false);
    obj8.onPress = onPress;
    obj8.onLongPress = onLongPress;
    obj8.disabled = disabled;
    tmp8 = jsx;
    tmp9 = closure_1;
    obj9 = { textEmojiStyle: tmp.textEmoji, fastImageStyle: tmp.imageEmoji, src: emojiURL, name: emoji.name };
    items1 = [,];
    items1[0] = jsx(closure_1(closure_2[17]), obj9);
    tmp8Result = null != count;
    if (tmp8Result) {
      num = 0;
      tmp8Result = count > 0;
    }
    if (tmp8Result) {
      tmp11 = View;
      obj10 = { style: null, children: null };
      obj10.style = tmp.countContainer;
      obj11 = { textStyle: null, count: null, animate: null };
      obj11.textStyle = textStyle;
      obj11.count = count;
      obj11.animate = animateCount;
      obj10.children = tmp8(tmp9(tmp7[18]), obj11);
      tmp8Result = tmp8(View, obj10);
    }
    items1[1] = tmp8Result;
    obj8.children = items1;
    return tmp6(closure_0(closure_2[6]).PressableOpacity, obj8);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsxs: hasOwnProperty, jsx: metroRequire } = jsxProd);
const createStyles = fn(4638);
let obj2 = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
    borderRadius: nativeDefault.radii.sm,
    borderWidth: 1,
    borderColor: nativeDefault.colors.REACTION_BORDER_DEFAULT,
    backgroundColor: nativeDefault.colors.REACTION_BACKGROUND_DEFAULT,
    minWidth: 32,
    minHeight: 26,
    maxHeight: 26,
  },
  selected: null,
  textEmoji: null,
  imageEmoji: null,
  countContainer: null,
};
let obj3 = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: 8,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  borderColor: nativeDefault.colors.REACTION_BORDER_DEFAULT,
  backgroundColor: nativeDefault.colors.REACTION_BACKGROUND_DEFAULT,
  minWidth: 32,
  minHeight: 26,
  maxHeight: 26,
};
obj2.selected = {
  borderColor: nativeDefault.colors.REACTION_BORDER_REACTED_DEFAULT,
  backgroundColor: nativeDefault.colors.REACTION_BACKGROUND_REACTED_DEFAULT,
};
obj2.textEmoji = { fontSize: 12 };
obj2.imageEmoji = { height: 16, width: 16 };
obj2.countContainer = { paddingStart: 4 };
const React5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/reactions/ForumPostReactionButton.tsx");

export const DEFAULT_EMOJI_SIZE = 14;
export const AdditionalReactionCount = function AdditionalReactionCount(arg0) {
  ({ count, threadId, containerStyle } = arg0);
  const obj = { accessible: true, accessibilityLabel: null, style: null, onPress: null, children: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.N8hbZB);
  const items = [closure_7().container, containerStyle];
  obj.style = items;
  obj.onPress = useNativeForumPostHandlersDefault({ threadId }).onTapReactionCount;
  const obj2 = { variant: "heading-sm/medium", color: "interactive-text-default", children: null };
  const items1 = ["+", count];
  obj2.children = items1;
  obj.children = hasOwnProperty(Text_Text.Text, obj2);
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
  const tmp2 = useNativeForumPostHandlersDefault({ threadId: thread.id });
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
    const obj5 = {
      accessible: tmp6,
      emoji: null,
      selected: null,
      colors: null,
      count: null,
      onPress: null,
      onLongPress: null,
      containerStyle: null,
      textStyle: null,
      emojiSize: null,
      animate: null,
      animateCount: null,
    };
    ({ emoji: obj3.emoji, me_burst: obj3.selected, burst_colors } = reaction);
    if (burst_colors == null) {
      burst_colors = [];
    }
    obj5.colors = burst_colors;
    obj5.count = reaction.burst_count;
    obj5.onPress = callback;
    obj5.onLongPress = callback1;
    obj5.containerStyle = containerStyle;
    obj5.textStyle = textStyle;
    obj5.emojiSize = num;
    obj5.animate = setting;
    obj5.animateCount = animateCount;
    let tmp10Result = timestampProducer(BurstReactionButton, obj5);
  } else {
    const obj6 = {
      accessible: tmp6,
      emoji: null,
      selected: null,
      count: null,
      onPress: null,
      onLongPress: null,
      containerStyle: null,
      textStyle: null,
      emojiSize: null,
      animate: null,
      animateCount: null,
    };
    ({ emoji: obj2.emoji, me: obj2.selected, count: obj2.count } = reaction);
    obj6.onPress = callback;
    obj6.onLongPress = callback1;
    obj6.containerStyle = containerStyle;
    obj6.textStyle = textStyle;
    obj6.emojiSize = num;
    obj6.animate = setting;
    obj6.animateCount = animateCount;
    tmp10Result = timestampProducer(ReactionButton, obj6);
  }
  return tmp10Result;
};
export { BurstReactionButton };
export { ReactionButton };
