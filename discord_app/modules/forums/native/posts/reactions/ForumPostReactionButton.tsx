// === Module 10030: ForumPostReactionButton ===

// Module 10030 (ForumPostReactionButton)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import intl2 from "intl" /* 1126 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import UserSettings from "UserSettings" /* 2028 */;
import ReactionUtils from "ReactionUtils" /* 4521 */;
import Text_Text from "Text/Text" /* 4886 */;
import Pressables from "Pressables" /* 5909 */;
import EmojiDefault from "Emoji" /* 6625 */;
import MessageReactionsTypes from "MessageReactionsTypes" /* 7259 */;
import reactions_ReactionUtils from "reactions/ReactionUtils" /* 9855 */;
import useEmojiColorPalette from "useEmojiColorPalette" /* 9977 */;
import useReactionPermissionsDefault from "useReactionPermissions" /* 10028 */;
import useNativeForumPostHandlersDefault from "useNativeForumPostHandlers" /* 10031 */;
import AnimatedCounterDefault from "AnimatedCounter" /* 11070 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
class BurstReactionButton {
  constructor(arg0) {
    let accentColor;
    let accessible;
    let animate;
    let animateCount;
    let backgroundColor1;
    let colors;
    let containerStyle;
    let count;
    let emoji;
    let emojiSize;
    let num2;
    let onLongPress;
    let onPress;
    let selected;
    ({ colors, emoji, onPress, onLongPress, containerStyle, count, emojiSize, selected, animate, animateCount, accessible } = arg0);
    const obj = useEmojiColorPalette;
    const emojiColorPalette = obj.useEmojiColorPalette(colors);
    let str = "";
    if (null != emojiColorPalette) {
      let backgroundColor;
      const hex2rgb = utils_ColorUtils.hex2rgb;
      utils_ColorUtils;
      if (emojiColorPalette != null) {
        backgroundColor = emojiColorPalette.backgroundColor;
      }
      let num;
      if (emojiColorPalette != null) {
        num = emojiColorPalette.opacity;
      }
      if (num == null) {
        num = 0.15;
      }
      let str2 = hex2rgb(backgroundColor, num);
      if (str2 == null) {
        str2 = "";
      }
      str = str2;
    }
    const items = [containerStyle, ];
    const obj2 = { backgroundColor: str, borderColor: backgroundColor1, borderWidth: num2 };
    backgroundColor1 = undefined;
    if (emojiColorPalette != null) {
      backgroundColor1 = emojiColorPalette.backgroundColor;
    }
    num2 = 0;
    if (selected) {
      num2 = 1;
    }
    const obj3 = { containerStyle: items, textStyle: { color: accentColor }, selected: false, emoji, count, animate, onPress, onLongPress, emojiSize, animateCount, accessible };
    items[1] = obj2;
    accentColor = undefined;
    if (emojiColorPalette != null) {
      accentColor = emojiColorPalette.accentColor;
    }
    return metroRequire(closure_9, obj3);
  }
}
const View = react_native.View;
({ jsxs: hasOwnProperty, jsx: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, selected: obj3, textEmoji: { fontSize: 12 }, imageEmoji: { height: 16, width: 16 }, countContainer: { paddingStart: 4 } };
obj2 = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", paddingHorizontal: 8, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.REACTION_BORDER_DEFAULT, backgroundColor: nativeDefault.colors.REACTION_BACKGROUND_DEFAULT, minWidth: 32, minHeight: 26, maxHeight: 26 };
createStyles = createStyles.createStyles;
obj3 = { borderColor: nativeDefault.colors.REACTION_BORDER_REACTED_DEFAULT, backgroundColor: nativeDefault.colors.REACTION_BACKGROUND_REACTED_DEFAULT };
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let containerStyle;
  let count;
  let items;
  let threadId;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(12);
  ({ count, threadId, containerStyle } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] !== threadId) {
    const obj2 = { threadId };
    cResult[0] = threadId;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  const onTapReactionCount = useNativeForumPostHandlersDefault(tmp5).onTapReactionCount;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl2.intl;
    const stringResult = intl.string(intl2.t.N8hbZB);
    cResult[2] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === containerStyle) {
    let tmp8;
    let tmp9;
    if (cResult[4] === tmp4.container) {
      tmp8 = cResult[5];
    }
    if (cResult[6] !== count) {
      const obj3 = { variant: "heading-sm/medium", color: "interactive-text-default", children: items };
      items = ["+", count];
      const tmp11 = hasOwnProperty(Text_Text.Text, obj3);
      cResult[6] = count;
      cResult[7] = tmp11;
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[7];
    }
    if (cResult[8] === onTapReactionCount) {
      if (cResult[9] === tmp8) {
        let tmp12;
        if (cResult[10] === tmp9) {
          tmp12 = cResult[11];
        }
        return tmp12;
      }
    }
    const obj4 = { accessible: true, accessibilityLabel: tmp6, style: tmp8, onPress: onTapReactionCount, children: tmp9 };
    const tmp14 = metroRequire(Pressables.PressableOpacity, obj4);
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
}) : ((arg0) => {
  let containerStyle;
  let count;
  let intl;
  let items;
  let items1;
  let obj2;
  let threadId;
  ({ count, threadId, containerStyle } = arg0);
  const tmp = closure_7();
  const onTapReactionCount = useNativeForumPostHandlersDefault({ threadId }).onTapReactionCount;
  const obj = { accessible: true, accessibilityLabel: intl.string(intl2.t.N8hbZB), style: items, onPress: onTapReactionCount, children: hasOwnProperty(Text_Text.Text, obj2) };
  const PressableOpacity = Pressables.PressableOpacity;
  intl = intl2.intl;
  items = [tmp.container, containerStyle];
  obj2 = { variant: "heading-sm/medium", color: "interactive-text-default", children: items1 };
  items1 = ["+", count];
  return metroRequire(PressableOpacity, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let containerStyle;
  let reactionType;
  let threadId;
  const obj = react2;
  const cResult = obj.c(13);
  ({ threadId, containerStyle, reactionType } = arg0);
  if (undefined === reactionType) {
    reactionType = MessageReactionsTypes.ReactionTypes.NORMAL;
  }
  const tmp4 = closure_7();
  if (cResult[0] === reactionType) {
    let tmp5;
    if (cResult[1] === threadId) {
      tmp5 = cResult[2];
    }
    const onTapAddReaction = useNativeForumPostHandlersDefault(tmp5).onTapAddReaction;
    const tmp7 = reactions_ReactionUtils.ADD_REACTION_ICON_COMPONENTS[reactionType];
    if (cResult[3] === containerStyle) {
      let tmp8;
      let tmp10;
      let tmp12;
      if (cResult[4] === tmp4.container) {
        tmp8 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl2.intl;
        const stringResult = intl.string(intl2.t.lfIHs4);
        cResult[6] = stringResult;
        tmp10 = stringResult;
      } else {
        tmp10 = cResult[6];
      }
      if (cResult[7] !== tmp7) {
        const tmp14 = metroRequire(tmp7, { size: "xs" });
        cResult[7] = tmp7;
        cResult[8] = tmp14;
        tmp12 = tmp14;
      } else {
        tmp12 = cResult[8];
      }
      if (cResult[9] === onTapAddReaction) {
        if (cResult[10] === tmp8) {
          let tmp15;
          if (cResult[11] === tmp12) {
            tmp15 = cResult[12];
          }
          return tmp15;
        }
      }
      const obj2 = { style: tmp8, accessible: true, accessibilityLabel: tmp10, onPress: onTapAddReaction, children: tmp12 };
      const tmp17 = metroRequire(Pressables.PressableOpacity, obj2);
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
}) : ((reactionType) => {
  let containerStyle;
  let intl;
  let items;
  let threadId;
  let tmp4;
  let NORMAL = reactionType.reactionType;
  ({ threadId, containerStyle } = reactionType);
  if (NORMAL === undefined) {
    NORMAL = MessageReactionsTypes.ReactionTypes.NORMAL;
  }
  const tmp3 = closure_7();
  const onTapAddReaction = useNativeForumPostHandlersDefault({ threadId, reactionType: NORMAL }).onTapAddReaction;
  const obj = { style: items, accessible: true, accessibilityLabel: intl.string(intl2.t.lfIHs4), onPress: onTapAddReaction, children: metroRequire(tmp4, { size: "xs" }) };
  items = [tmp3.container, containerStyle];
  tmp4 = reactions_ReactionUtils.ADD_REACTION_ICON_COMPONENTS[NORMAL];
  const PressableOpacity = Pressables.PressableOpacity;
  intl = intl2.intl;
  return metroRequire(PressableOpacity, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((emojiSize) => {
  let animateCount;
  let containerStyle;
  let locationAnalyticsObject;
  let reaction;
  let textStyle;
  let thread;
  let tmp6;
  let obj = react2;
  const cResult = obj.c(38);
  ({ thread, reaction } = emojiSize);
  ({ animateCount, containerStyle, textStyle, locationAnalyticsObject } = emojiSize);
  emojiSize = emojiSize.emojiSize;
  let num = 14;
  if (undefined !== emojiSize) {
    num = emojiSize;
  }
  const tmp5 = useReactionPermissionsDefault(thread);
  const disableReactionCreates = tmp5.disableReactionCreates;
  const disableReactionUpdates = tmp5.disableReactionUpdates;
  if (cResult[0] !== thread.id) {
    const obj2 = { threadId: thread.id };
    cResult[0] = thread.id;
    cResult[1] = obj2;
    tmp6 = obj2;
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
          let tmp9;
          if (cResult[6] === reaction) {
            tmp9 = cResult[7];
          }
          if (cResult[8] === onLongTapReaction) {
            let tmp10;
            let tmp12;
            if (cResult[9] === reaction) {
              tmp10 = cResult[10];
            }
            let tmp11 = !disableReactionCreates;
            if (disableReactionCreates) {
              tmp11 = !disableReactionUpdates;
            }
            if (reaction.burst_count > 0) {
              let tmp16;
              if (cResult[11] !== reaction.burst_colors) {
                let burst_colors = reaction.burst_colors;
                if (burst_colors == null) {
                  burst_colors = [];
                }
                cResult[11] = reaction.burst_colors;
                cResult[12] = burst_colors;
                tmp16 = burst_colors;
              } else {
                tmp16 = cResult[12];
              }
              if (cResult[13] === tmp11) {
                if (cResult[14] === setting) {
                  if (cResult[15] === animateCount) {
                    if (cResult[16] === containerStyle) {
                      if (cResult[17] === num) {
                        if (cResult[18] === tmp10) {
                          if (cResult[19] === tmp9) {
                            if (cResult[20] === reaction.burst_count) {
                              if (cResult[21] === reaction.emoji) {
                                if (cResult[22] === reaction.me_burst) {
                                  if (cResult[23] === tmp16) {
                                    let tmp18;
                                    if (cResult[24] === textStyle) {
                                      tmp18 = cResult[25];
                                    }
                                    tmp12 = tmp18;
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
              const obj7 = { accessible: tmp11, emoji: null, selected: null, colors: tmp16, count: reaction.burst_count, onPress: tmp9, onLongPress: tmp10, containerStyle, textStyle, emojiSize: num, animate: setting, animateCount };
              ({ emoji: obj4.emoji, me_burst: obj4.selected } = reaction);
              const tmp21 = metroRequire(BurstReactionButton, obj7);
              cResult[13] = tmp11;
              cResult[14] = setting;
              cResult[15] = animateCount;
              cResult[16] = containerStyle;
              cResult[17] = num;
              cResult[18] = tmp10;
              cResult[19] = tmp9;
              cResult[20] = reaction.burst_count;
              cResult[21] = reaction.emoji;
              cResult[22] = reaction.me_burst;
              cResult[23] = tmp16;
              cResult[24] = textStyle;
              cResult[25] = tmp21;
              tmp18 = tmp21;
            } else {
              if (cResult[26] === tmp11) {
                if (cResult[27] === setting) {
                  if (cResult[28] === animateCount) {
                    if (cResult[29] === containerStyle) {
                      if (cResult[30] === num) {
                        if (cResult[31] === tmp10) {
                          if (cResult[32] === tmp9) {
                            if (cResult[33] === reaction.count) {
                              if (cResult[34] === reaction.emoji) {
                                if (cResult[35] === reaction.me) {
                                  if (cResult[36] === textStyle) {
                                    tmp12 = cResult[37];
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
              const obj8 = { accessible: tmp11, emoji: null, selected: null, count: null, onPress: tmp9, onLongPress: tmp10, containerStyle, textStyle, emojiSize: num, animate: setting, animateCount };
              ({ emoji: obj3.emoji, me: obj3.selected, count: obj3.count } = reaction);
              const tmp15 = metroRequire(closure_9, obj8);
              cResult[26] = tmp11;
              cResult[27] = setting;
              cResult[28] = animateCount;
              cResult[29] = containerStyle;
              cResult[30] = num;
              cResult[31] = tmp10;
              cResult[32] = tmp9;
              cResult[33] = reaction.count;
              cResult[34] = reaction.emoji;
              cResult[35] = reaction.me;
              cResult[36] = textStyle;
              cResult[37] = tmp15;
              tmp12 = tmp15;
            }
            return tmp12;
          }
          const fn2 = function v() {
            onLongTapReaction(reaction);
          };
          cResult[8] = onLongTapReaction;
          cResult[9] = reaction;
          cResult[10] = fn2;
          tmp10 = fn2;
        }
      }
    }
  }
  const fn = function p() {
    const obj = { reaction, disableReactionCreates, disableReactionUpdates, locationAnalyticsObject };
    onTapReaction(obj);
  };
  cResult[2] = disableReactionCreates;
  cResult[3] = disableReactionUpdates;
  cResult[4] = locationAnalyticsObject;
  cResult[5] = onTapReaction;
  cResult[6] = reaction;
  cResult[7] = fn;
  tmp9 = fn;
}) : ((emojiSize) => {
  let animateCount;
  let burst_colors;
  let containerStyle;
  let locationAnalyticsObject;
  let reaction;
  let textStyle;
  let thread;
  let tmp10Result;
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
  const callback = react.useCallback(() => {
    const obj = { reaction, disableReactionCreates, disableReactionUpdates, locationAnalyticsObject };
    onTapReaction(obj);
  }, items);
  const items1 = [onLongTapReaction, reaction];
  const callback1 = react.useCallback(() => {
    onLongTapReaction(reaction);
  }, items1);
  let tmp6 = !disableReactionCreates;
  if (disableReactionCreates) {
    tmp6 = !disableReactionUpdates;
  }
  if (reaction.burst_count > 0) {
    const obj5 = { accessible: tmp6, emoji: null, selected: null, colors: burst_colors, count: reaction.burst_count, onPress: callback, onLongPress: callback1, containerStyle, textStyle, emojiSize: num, animate: setting, animateCount };
    ({ emoji: obj3.emoji, me_burst: obj3.selected, burst_colors } = reaction);
    if (burst_colors == null) {
      burst_colors = [];
    }
    tmp10Result = metroRequire(BurstReactionButton, obj5);
  } else {
    const obj6 = { accessible: tmp6, emoji: null, selected: null, count: null, onPress: callback, onLongPress: callback1, containerStyle, textStyle, emojiSize: num, animate: setting, animateCount };
    ({ emoji: obj2.emoji, me: obj2.selected, count: obj2.count } = reaction);
    tmp10Result = metroRequire(closure_9, obj6);
  }
  return tmp10Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessible;
  let animate;
  let animateCount;
  let animated;
  let containerStyle;
  let count;
  let disabled;
  let emoji;
  let emojiSize;
  let items;
  let obj5;
  let onLongPress;
  let onPress;
  let selected;
  let textStyle;
  const obj = react2;
  const cResult = obj.c(32);
  ({ emoji, onPress, onLongPress, textStyle, containerStyle, count, emojiSize, selected, animate, animateCount, accessible, disabled } = arg0);
  const tmp5 = closure_7();
  if (cResult[0] === animate) {
    if (cResult[1] === emoji.animated) {
      if (cResult[2] === emoji.id) {
        let tmp6;
        if (cResult[3] === emojiSize) {
          tmp6 = cResult[4];
        }
        let selected1;
        if (selected) {
          selected1 = tmp5.selected;
        }
        if (cResult[5] === containerStyle) {
          if (cResult[6] === selected1) {
            let tmp11;
            if (cResult[7] === tmp5.container) {
              tmp11 = cResult[8];
            }
            if (cResult[9] === count) {
              if (cResult[10] === emoji) {
                let tmp12;
                if (cResult[11] === selected) {
                  tmp12 = cResult[12];
                }
                if (cResult[13] === emoji.name) {
                  if (cResult[14] === tmp6) {
                    if (cResult[15] === tmp5.imageEmoji) {
                      let tmp18;
                      if (cResult[16] === tmp5.textEmoji) {
                        tmp18 = cResult[17];
                      }
                      if (cResult[18] === animateCount) {
                        if (cResult[19] === count) {
                          if (cResult[20] === tmp5.countContainer) {
                            let tmp22;
                            if (cResult[21] === textStyle) {
                              tmp22 = cResult[22];
                            }
                            if (cResult[23] === accessible) {
                              if (cResult[24] === (undefined !== disabled && disabled)) {
                                if (cResult[25] === onLongPress) {
                                  if (cResult[26] === onPress) {
                                    if (cResult[27] === tmp11) {
                                      if (cResult[28] === tmp12) {
                                        if (cResult[29] === tmp18) {
                                          let tmp28;
                                          if (cResult[30] === tmp22) {
                                            tmp28 = cResult[31];
                                          }
                                          return tmp28;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            const obj2 = { style: tmp11, accessible, accessibilityLabel: tmp12, onPress, onLongPress, disabled: undefined !== disabled && disabled, children: items };
                            items = [tmp18, tmp22];
                            const tmp30 = hasOwnProperty(Pressables.PressableOpacity, obj2);
                            cResult[23] = accessible;
                            cResult[24] = undefined !== disabled && disabled;
                            cResult[25] = onLongPress;
                            cResult[26] = onPress;
                            cResult[27] = tmp11;
                            cResult[28] = tmp12;
                            cResult[29] = tmp18;
                            cResult[30] = tmp22;
                            cResult[31] = tmp30;
                            tmp28 = tmp30;
                          }
                        }
                      }
                      let tmp24 = null != count && count > 0;
                      if (tmp24) {
                        const obj3 = { style: tmp5.countContainer, children: metroRequire(AnimatedCounterDefault, obj5) };
                        obj5 = { textStyle, count, animate: animateCount };
                        tmp24 = metroRequire(View, obj3);
                      }
                      cResult[18] = animateCount;
                      cResult[19] = count;
                      cResult[20] = tmp5.countContainer;
                      cResult[21] = textStyle;
                      cResult[22] = tmp24;
                      tmp22 = tmp24;
                    }
                  }
                }
                const obj6 = { textEmojiStyle: null, fastImageStyle: null, src: tmp6, name: emoji.name };
                ({ textEmoji: obj4.textEmojiStyle, imageEmoji: obj4.fastImageStyle } = tmp5);
                const tmp21 = metroRequire(EmojiDefault, obj6);
                cResult[13] = emoji.name;
                cResult[14] = tmp6;
                cResult[15] = tmp5.imageEmoji;
                cResult[16] = tmp5.textEmoji;
                cResult[17] = tmp21;
                tmp18 = tmp21;
              }
            }
            const tmpResult = ReactionUtils;
            const accessibleEmojiDisplayName = tmpResult.getAccessibleEmojiDisplayName(selected, count, emoji, false);
            cResult[9] = count;
            cResult[10] = emoji;
            cResult[11] = selected;
            cResult[12] = accessibleEmojiDisplayName;
            tmp12 = accessibleEmojiDisplayName;
          }
        }
        const items1 = [tmp5.container, containerStyle, selected1];
        cResult[5] = containerStyle;
        cResult[6] = selected1;
        cResult[7] = tmp5.container;
        cResult[8] = items1;
        tmp11 = items1;
      }
    }
  }
  let emojiURL;
  if (null != emoji.id) {
    const obj7 = { id: emoji.id, animated, size: emojiSize };
    animated = animate;
    const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
    AvatarUtilsDefault;
    if (animate) {
      animated = emoji.animated;
    }
    emojiURL = getEmojiURL(obj7);
  }
  cResult[0] = animate;
  cResult[1] = emoji.animated;
  cResult[2] = emoji.id;
  cResult[3] = emojiSize;
  cResult[4] = emojiURL;
  tmp6 = emojiURL;
}) : ((arg0) => {
  let accessible;
  let animate;
  let animateCount;
  let containerStyle;
  let count;
  let disabled;
  let emoji;
  let emojiSize;
  let items;
  let items1;
  let obj3;
  let obj6;
  let onLongPress;
  let onPress;
  let selected;
  let textStyle;
  ({ emoji, count, selected, animate, disabled } = arg0);
  ({ onPress, onLongPress, textStyle, containerStyle, emojiSize, animateCount, accessible } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = closure_7();
  let emojiURL;
  if (null != emoji.id) {
    const obj = { id: emoji.id, animated: animate, size: emojiSize };
    const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
    AvatarUtilsDefault;
    if (animate) {
      animate = emoji.animated;
    }
    emojiURL = getEmojiURL(obj);
  }
  let selected1;
  if (selected) {
    selected1 = tmp.selected;
  }
  const obj2 = { style: items, accessible, accessibilityLabel: obj3.getAccessibleEmojiDisplayName(selected, count, emoji, false), onPress, onLongPress, disabled, children: items1 };
  items = [tmp.container, containerStyle, selected1];
  const PressableOpacity = Pressables.PressableOpacity;
  items1 = [, ];
  obj3 = ReactionUtils;
  const obj4 = { textEmojiStyle: tmp.textEmoji, fastImageStyle: tmp.imageEmoji, src: emojiURL, name: emoji.name };
  items1[0] = metroRequire(EmojiDefault, obj4);
  let tmp9Result = null != count && count > 0;
  if (tmp9Result) {
    const obj5 = { style: tmp.countContainer, children: metroRequire(AnimatedCounterDefault, obj6) };
    obj6 = { textStyle, count, animate: animateCount };
    tmp9Result = metroRequire(View, obj5);
  }
  items1[1] = tmp9Result;
  return hasOwnProperty(PressableOpacity, obj2);
});
let closure_9 = tmp7;
const result = size.fileFinishedImporting("modules/forums/native/posts/reactions/ForumPostReactionButton.tsx");

export const DEFAULT_EMOJI_SIZE = 14;
export const AdditionalReactionCount = tmp4;
export const AddReactionButton = tmp5;
export const ForumPostReactionButton = tmp6;
export { BurstReactionButton };
export const ReactionButton = tmp7;