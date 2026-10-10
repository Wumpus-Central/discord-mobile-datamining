// discord_app/modules/forums/native/posts/reactions/ForumPostReactionButton.tsx
import c from "../../../../../../_runtime/00576_c.js";
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
import reactions_ReactionUtils from "../../../../reactions/native/ReactionUtils.tsx";
import useEmojiColorPalette from "../../../../emojis/hooks/useEmojiColorPalette.tsx";
import useReactionPermissionsDefault from "../../../../messages/useReactionPermissions.tsx";
import useNativeForumPostHandlersDefault from "../hooks/useNativeForumPostHandlers.tsx";
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
    obj = closure_0(closure_2[15]);
    emojiColorPalette = obj.useEmojiColorPalette(colors);
    str = "";
    if (null != emojiColorPalette) {
      tmpResult = tmp(tmp2[16]);
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
const View = fn(17).View;
const jsxProd = fn(21);
({ jsxs: hasOwnProperty, jsx: metroRequire } = jsxProd);
const createStyles = fn(5092);
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
let closure_7 = createStyles.createStyles(obj2);
fn(558);
let obj4 = {
  borderColor: nativeDefault.colors.REACTION_BORDER_REACTED_DEFAULT,
  backgroundColor: nativeDefault.colors.REACTION_BACKGROUND_REACTED_DEFAULT,
};
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AdditionalReactionCount(arg0) {
      const cResult = c.c(12);
      ({ count, threadId, containerStyle } = arg0);
      const tmp4 = closure_7();
      if (cResult[0] !== threadId) {
        const obj2 = { threadId };
        cResult[0] = threadId;
        cResult[1] = obj2;
        let tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      const onTapReactionCount = useNativeForumPostHandlersDefault(tmp5).onTapReactionCount;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.N8hbZB);
        cResult[2] = stringResult;
        let tmp6 = stringResult;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] === containerStyle) {
        if (cResult[4] === tmp4.container) {
          let tmp8 = cResult[5];
        }
        if (cResult[6] !== count) {
          const obj3 = { variant: "heading-sm/medium", color: "interactive-text-default", children: null };
          const items = ["+", count];
          obj3.children = items;
          const tmp11 = hasOwnProperty(Text_Text.Text, obj3);
          cResult[6] = count;
          cResult[7] = tmp11;
          let tmp9 = tmp11;
        } else {
          tmp9 = cResult[7];
        }
        if (cResult[8] === onTapReactionCount) {
          if (cResult[9] === tmp8) {
            if (cResult[10] === tmp9) {
              let tmp12 = cResult[11];
            }
            return tmp12;
          }
        }
        const obj4 = {
          accessible: true,
          accessibilityLabel: tmp6,
          style: tmp8,
          onPress: onTapReactionCount,
          children: tmp9,
        };
        const tmp14 = timestampProducer(Pressables.PressableOpacity, obj4);
        cResult[8] = onTapReactionCount;
        cResult[9] = tmp8;
        cResult[10] = tmp9;
        cResult[11] = tmp14;
        tmp12 = tmp14;
      }
      const items1 = [tmp4.container, containerStyle];
      cResult[3] = containerStyle;
      cResult[4] = tmp4.container;
      cResult[5] = items1;
      tmp8 = items1;
    }
  : function AdditionalReactionCount(arg0) {
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
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AddReactionButton(arg0) {
      const cResult = c.c(13);
      ({ threadId, containerStyle, reactionType } = arg0);
      if (undefined === reactionType) {
        reactionType = MessageReactionsTypes.ReactionTypes.NORMAL;
      }
      const tmp4 = closure_7();
      if (cResult[0] === reactionType) {
        if (cResult[1] === threadId) {
          let tmp5 = cResult[2];
        }
        const onTapAddReaction = useNativeForumPostHandlersDefault(tmp5).onTapAddReaction;
        const tmp7 = reactions_ReactionUtils.ADD_REACTION_ICON_COMPONENTS[reactionType];
        if (cResult[3] === containerStyle) {
          if (cResult[4] === tmp4.container) {
            let tmp8 = cResult[5];
          }
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = util.intl;
            const stringResult = intl.string(util.t.lfIHs4);
            cResult[6] = stringResult;
            let tmp10 = stringResult;
          } else {
            tmp10 = cResult[6];
          }
          if (cResult[7] !== tmp7) {
            const tmp14 = timestampProducer(tmp7, { size: "xs" });
            cResult[7] = tmp7;
            cResult[8] = tmp14;
            let tmp12 = tmp14;
          } else {
            tmp12 = cResult[8];
          }
          if (cResult[9] === onTapAddReaction) {
            if (cResult[10] === tmp8) {
              if (cResult[11] === tmp12) {
                let tmp15 = cResult[12];
              }
              return tmp15;
            }
          }
          const obj2 = {
            style: tmp8,
            accessible: true,
            accessibilityLabel: tmp10,
            onPress: onTapAddReaction,
            children: tmp12,
          };
          const tmp17 = timestampProducer(Pressables.PressableOpacity, obj2);
          cResult[9] = onTapAddReaction;
          cResult[10] = tmp8;
          cResult[11] = tmp12;
          cResult[12] = tmp17;
          tmp15 = tmp17;
        }
        const items = [tmp4.container, containerStyle];
        cResult[3] = containerStyle;
        cResult[4] = tmp4.container;
        cResult[5] = items;
        tmp8 = items;
      }
      const obj3 = { threadId, reactionType };
      cResult[0] = reactionType;
      cResult[1] = threadId;
      cResult[2] = obj3;
      tmp5 = obj3;
    }
  : function AddReactionButton(reactionType) {
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
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ReactionButton(arg0) {
      const cResult = c.c(32);
      ({
        emoji,
        onPress,
        onLongPress,
        textStyle,
        containerStyle,
        count,
        emojiSize,
        selected,
        animate,
        animateCount,
        accessible,
        disabled,
      } = arg0);
      const tmp5 = closure_7();
      if (cResult[0] === animate) {
        if (cResult[1] === emoji.animated) {
          if (cResult[2] === emoji.id) {
            if (cResult[3] === emojiSize) {
              let tmp6 = cResult[4];
            }
            let selected1;
            if (selected) {
              selected1 = tmp5.selected;
            }
            if (cResult[5] === containerStyle) {
              if (cResult[6] === selected1) {
                if (cResult[7] === tmp5.container) {
                  let tmp10 = cResult[8];
                }
                if (cResult[9] === count) {
                  if (cResult[10] === emoji) {
                    if (cResult[11] === selected) {
                      let tmp11 = cResult[12];
                    }
                    if (cResult[13] === emoji.name) {
                      if (cResult[14] === tmp6) {
                        if (cResult[15] === tmp5.imageEmoji) {
                          if (cResult[16] === tmp5.textEmoji) {
                            let tmp17 = cResult[17];
                          }
                          if (cResult[18] === animateCount) {
                            if (cResult[19] === count) {
                              if (cResult[20] === tmp5.countContainer) {
                                if (cResult[21] === textStyle) {
                                  let tmp21 = cResult[22];
                                }
                                if (cResult[23] === accessible) {
                                  if (cResult[24] === tmp4) {
                                    if (cResult[25] === onLongPress) {
                                      if (cResult[26] === onPress) {
                                        if (cResult[27] === tmp10) {
                                          if (cResult[28] === tmp11) {
                                            if (cResult[29] === tmp17) {
                                              if (cResult[30] === tmp21) {
                                                let tmp27 = cResult[31];
                                              }
                                              return tmp27;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                                const obj3 = {
                                  style: tmp10,
                                  accessible,
                                  accessibilityLabel: tmp11,
                                  onPress,
                                  onLongPress,
                                  disabled: tmp4,
                                  children: null,
                                };
                                const items = [tmp17, tmp21];
                                obj3.children = items;
                                const tmp29 = hasOwnProperty(Pressables.PressableOpacity, obj3);
                                cResult[23] = accessible;
                                cResult[24] = tmp4;
                                cResult[25] = onLongPress;
                                cResult[26] = onPress;
                                cResult[27] = tmp10;
                                cResult[28] = tmp11;
                                cResult[29] = tmp17;
                                cResult[30] = tmp21;
                                cResult[31] = tmp29;
                                tmp27 = tmp29;
                              }
                            }
                          }
                          let tmp23 = null != count;
                          if (tmp23) {
                            tmp23 = count > 0;
                          }
                          if (tmp23) {
                            const obj4 = { style: tmp5.countContainer, children: null };
                            const obj6 = { textStyle, count, animate: animateCount };
                            obj4.children = timestampProducer(AnimatedCounterDefault, obj6);
                            tmp23 = timestampProducer(View, obj4);
                          }
                          cResult[18] = animateCount;
                          cResult[19] = count;
                          cResult[20] = tmp5.countContainer;
                          cResult[21] = textStyle;
                          cResult[22] = tmp23;
                          tmp21 = tmp23;
                        }
                      }
                    }
                    const obj7 = { textEmojiStyle: null, fastImageStyle: null, src: null, name: null };
                    ({ textEmoji: obj5.textEmojiStyle, imageEmoji: obj5.fastImageStyle } = tmp5);
                    obj7.src = tmp6;
                    obj7.name = emoji.name;
                    const tmp20 = timestampProducer(EmojiDefault, obj7);
                    cResult[13] = emoji.name;
                    cResult[14] = tmp6;
                    cResult[15] = tmp5.imageEmoji;
                    cResult[16] = tmp5.textEmoji;
                    cResult[17] = tmp20;
                    tmp17 = tmp20;
                  }
                }
                const tmpResult = ReactionUtils;
                const accessibleEmojiDisplayName = tmpResult.getAccessibleEmojiDisplayName(
                  selected,
                  count,
                  emoji,
                  false,
                );
                cResult[9] = count;
                cResult[10] = emoji;
                cResult[11] = selected;
                cResult[12] = accessibleEmojiDisplayName;
                tmp11 = accessibleEmojiDisplayName;
              }
            }
            const items1 = [tmp5.container, containerStyle, selected1];
            cResult[5] = containerStyle;
            cResult[6] = selected1;
            cResult[7] = tmp5.container;
            cResult[8] = items1;
            tmp10 = items1;
          }
        }
      }
      let emojiURL;
      if (null != emoji.id) {
        const obj8 = { id: emoji.id, animated: null, size: null };
        let animated = animate;
        if (animate) {
          animated = emoji.animated;
        }
        obj8.animated = animated;
        obj8.size = emojiSize;
        emojiURL = AvatarUtilsDefault.getEmojiURL(obj8);
      }
      cResult[0] = animate;
      cResult[1] = emoji.animated;
      cResult[2] = emoji.id;
      cResult[3] = emojiSize;
      cResult[4] = emojiURL;
      tmp6 = emojiURL;
    }
  : function ReactionButton(arg0) {
      ({ emoji, count, selected, animate, disabled } = arg0);
      ({ onPress, onLongPress, textStyle, containerStyle, emojiSize, animateCount, accessible } = arg0);
      if (disabled === undefined) {
        disabled = false;
      }
      const tmp = closure_7();
      let emojiURL;
      if (null != emoji.id) {
        const obj2 = { id: emoji.id, animated: null, size: null };
        if (animate) {
          animate = emoji.animated;
        }
        obj2.animated = animate;
        obj2.size = emojiSize;
        emojiURL = AvatarUtilsDefault.getEmojiURL(obj2);
      }
      let selected1;
      if (selected) {
        selected1 = tmp.selected;
      }
      const obj3 = {
        style: null,
        accessible,
        accessibilityLabel: ReactionUtils.getAccessibleEmojiDisplayName(selected, count, emoji, false),
        onPress,
        onLongPress,
        disabled,
        children: null,
      };
      const items = [tmp.container, containerStyle, selected1];
      obj3.style = items;
      const items1 = [
        timestampProducer(EmojiDefault, {
          textEmojiStyle: tmp.textEmoji,
          fastImageStyle: tmp.imageEmoji,
          src: emojiURL,
          name: emoji.name,
        }),
      ];
      let tmp8Result = null != count;
      if (tmp8Result) {
        tmp8Result = count > 0;
      }
      if (tmp8Result) {
        const obj6 = { style: tmp.countContainer, children: null };
        const obj7 = { textStyle, count, animate: animateCount };
        obj6.children = timestampProducer(AnimatedCounterDefault, obj7);
        tmp8Result = timestampProducer(View, obj6);
      }
      items1[1] = tmp8Result;
      obj3.children = items1;
      return hasOwnProperty(Pressables.PressableOpacity, obj3);
    };
let closure_9 = tmp6;
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/posts/reactions/ForumPostReactionButton.tsx");

export const DEFAULT_EMOJI_SIZE = 14;
export const AdditionalReactionCount = tmp3;
export const AddReactionButton = tmp4;
export const ForumPostReactionButton = ReactCompilerGating.isReactCompilerEnabled()
  ? function ForumPostReactionButton(emojiSize) {
      const cResult = c.c(38);
      ({ thread, reaction } = emojiSize);
      ({ animateCount, containerStyle, textStyle, locationAnalyticsObject } = emojiSize);
      emojiSize = emojiSize.emojiSize;
      let num = 14;
      let num2 = 14;
      if (undefined !== emojiSize) {
        num2 = emojiSize;
      }
      const tmp5 = useReactionPermissionsDefault(thread);
      const disableReactionCreates = tmp5.disableReactionCreates;
      const disableReactionUpdates = tmp5.disableReactionUpdates;
      if (cResult[0] !== thread.id) {
        const obj2 = { threadId: thread.id };
        cResult[0] = thread.id;
        cResult[1] = obj2;
        let tmp6 = obj2;
      } else {
        tmp6 = cResult[1];
      }
      const tmp7 = useNativeForumPostHandlersDefault(tmp6);
      const onTapReaction = tmp7.onTapReaction;
      const onLongTapReaction = tmp7.onLongTapReaction;
      const AnimateEmoji = UserSettings.AnimateEmoji;
      const setting = AnimateEmoji.useSetting();
      if (cResult[2] === disableReactionCreates) {
        if (cResult[3] === disableReactionUpdates) {
          if (cResult[4] === locationAnalyticsObject) {
            if (cResult[5] === onTapReaction) {
              if (cResult[6] === reaction) {
                emoji = cResult[7];
              }
              if (cResult[8] === onLongTapReaction) {
                if (cResult[9] === reaction) {
                  let tmp9 = cResult[10];
                }
                let tmp10 = !disableReactionCreates;
                if (disableReactionCreates) {
                  tmp10 = !disableReactionUpdates;
                }
                if (reaction.burst_count > 0) {
                  if (cResult[11] !== reaction.burst_colors) {
                    let burst_colors = reaction.burst_colors;
                    if (burst_colors == null) {
                      burst_colors = [];
                    }
                    cResult[11] = reaction.burst_colors;
                    cResult[12] = burst_colors;
                    let tmp15 = burst_colors;
                  } else {
                    tmp15 = cResult[12];
                  }
                  if (cResult[13] === tmp10) {
                    if (cResult[14] === setting) {
                      if (cResult[15] === animateCount) {
                        if (cResult[16] === containerStyle) {
                          if (cResult[17] === num2) {
                            if (cResult[18] === tmp9) {
                              if (cResult[19] === emoji) {
                                if (cResult[20] === reaction.burst_count) {
                                  if (cResult[21] === reaction.emoji) {
                                    if (cResult[22] === reaction.me_burst) {
                                      if (cResult[23] === tmp15) {
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj7 = {
                    accessible: tmp10,
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
                  ({ emoji: obj4.emoji, me_burst: obj4.selected } = reaction);
                  obj7.colors = tmp15;
                  obj7.count = reaction.burst_count;
                  obj7.onPress = emoji;
                  obj7.onLongPress = tmp9;
                  obj7.containerStyle = containerStyle;
                  obj7.textStyle = textStyle;
                  obj7.emojiSize = num2;
                  obj7.animate = setting;
                  obj7.animateCount = animateCount;
                  const tmp20 = timestampProducer(BurstReactionButton, obj7);
                  cResult[13] = tmp10;
                  cResult[num] = setting;
                  cResult[15] = animateCount;
                  cResult[16] = containerStyle;
                  cResult[17] = num2;
                  cResult[18] = tmp9;
                  cResult[19] = emoji;
                  ({ burst_count: tmp3[20], emoji } = reaction);
                  class P {
                    constructor() {
                      obj = { reaction, disableReactionCreates, disableReactionUpdates, locationAnalyticsObject };
                      tmp = onTapReaction(obj);
                      return;
                    }
                  }
                  cResult[21] = emoji;
                  reaction = reaction.me_burst;
                  cResult[22] = reaction;
                  cResult[23] = tmp15;
                  cResult[24] = textStyle;
                  num = 25;
                  cResult[25] = tmp20;
                } else {
                  if (cResult[26] === tmp10) {
                    if (cResult[27] === setting) {
                      if (cResult[28] === animateCount) {
                        if (cResult[29] === containerStyle) {
                          if (cResult[30] === num2) {
                            if (cResult[31] === tmp9) {
                              if (cResult[32] === emoji) {
                                if (cResult[33] === reaction.count) {
                                  if (cResult[34] === reaction.emoji) {
                                    if (cResult[35] === reaction.me) {
                                      if (cResult[36] === textStyle) {
                                        let tmp11 = cResult[37];
                                      }
                                      return tmp11;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj8 = {
                    accessible: tmp10,
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
                  ({ emoji: obj3.emoji, me: obj3.selected, count: obj3.count } = reaction);
                  obj8.onPress = emoji;
                  obj8.onLongPress = tmp9;
                  obj8.containerStyle = containerStyle;
                  obj8.textStyle = textStyle;
                  obj8.emojiSize = num2;
                  obj8.animate = setting;
                  obj8.animateCount = animateCount;
                  const tmp14 = timestampProducer(closure_9, obj8);
                  cResult[26] = tmp10;
                  cResult[27] = setting;
                  cResult[28] = animateCount;
                  cResult[29] = containerStyle;
                  cResult[30] = num2;
                  cResult[31] = tmp9;
                  cResult[32] = emoji;
                  cResult[33] = reaction.count;
                  cResult[34] = reaction.emoji;
                  class P {
                    constructor() {
                      obj = { reaction, disableReactionCreates, disableReactionUpdates, locationAnalyticsObject };
                      tmp = onTapReaction(obj);
                      return;
                    }
                  }
                  cResult[35] = reaction.me;
                  cResult[36] = textStyle;
                  cResult[37] = tmp14;
                  tmp11 = tmp14;
                }
              }
              const fn = function v() {
                onLongTapReaction(reaction);
              };
              cResult[8] = onLongTapReaction;
              cResult[9] = reaction;
              cResult[10] = fn;
              tmp9 = fn;
            }
          }
        }
      }
      class P {
        constructor() {
          obj = { reaction, disableReactionCreates, disableReactionUpdates, locationAnalyticsObject };
          tmp = onTapReaction(obj);
          return;
        }
      }
      cResult[2] = disableReactionCreates;
      cResult[3] = disableReactionUpdates;
      cResult[4] = locationAnalyticsObject;
      cResult[5] = onTapReaction;
      cResult[6] = reaction;
      cResult[7] = P;
      emoji = P;
    }
  : function ForumPostReactionButton(emojiSize) {
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
        tmp10Result = timestampProducer(closure_9, obj6);
      }
      return tmp10Result;
    };
export { BurstReactionButton };
export const ReactionButton = tmp6;
