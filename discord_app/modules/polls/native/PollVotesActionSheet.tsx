// discord_app/modules/polls/native/PollVotesActionSheet.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import shared from "../../../design/shared.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import PollsUtils from "../PollsUtils.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import formatPollMessageChatData from "../chat/formatPollMessageChatData.tsx";
import _modDef11354 from "../../../../_runtime/metro/11354__.js";
import _modDef11355 from "../../../../_runtime/metro/11355__.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import EmojiStore from "../../emojis/EmojiStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import MessageStore from "../../../stores/MessageStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
function VotersList(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const reaction = channelId.reaction;
  let analyticsLocations;
  let sharedValue;
  analyticsLocations = messageId(analyticsLocations[23])().analyticsLocations;
  const tmp4 = messageId(analyticsLocations[24])({ channelId, messageId, reaction });
  const reactors = tmp4.reactors;
  const tmp = closure_16();
  const tmp2 = messageId;
  let obj = channelId(analyticsLocations[25]);
  const reactorsOnScrollNative = obj.useReactorsOnScrollNative({
    channelId,
    messageId,
    reactionSelected: reaction,
    reactors,
    reactorsHasMore: tmp4.hasMore,
    reactionType: channelId(analyticsLocations[26]).ReactionTypes.VOTE,
  });
  let obj2 = {
    channelId,
    messageId,
    reactionSelected: reaction,
    reactors,
    reactorsHasMore: tmp4.hasMore,
    reactionType: channelId(analyticsLocations[26]).ReactionTypes.VOTE,
  };
  const items = [ChannelStore];
  const stateFromStores = channelId(analyticsLocations[15]).useStateFromStores(items, () =>
    ChannelStore.getChannel(channelId),
  );
  const items1 = [stateFromStores, reactors.length, channelId, messageId, analyticsLocations];
  const callback = sharedValue.useCallback((item) => {
    item = item.item;
    const index = item.index;
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    let nickname = messageId(analyticsLocations[27]).getNickname(guild_id, id, item);
    if (nickname == null) {
      nickname = messageId(analyticsLocations[28]).getGlobalName(item);
      const tmpResult = messageId(analyticsLocations[28]);
    }
    const obj = messageId(analyticsLocations[27]);
    const userTag = messageId(analyticsLocations[28]).getUserTag(item);
    user = user.getUser(item.id);
    const obj2 = {
      start: 0 === index,
      end: reactors.length - 1 === index,
      icon: null,
      label: null,
      subLabel: null,
      onPress: null,
    };
    let guild_id1;
    if (stateFromStores != null) {
      guild_id1 = stateFromStores.guild_id;
    }
    const obj3 = { guildId: guild_id1, user: null, size: null };
    if (user == null) {
      user = item;
    }
    obj3.user = user;
    obj3.size = channelId(analyticsLocations[30]).AvatarSizes.SMALL;
    obj2.icon = closure_1_14(channelId(analyticsLocations[30]).Avatar, obj3);
    let tmp9Result = nickname;
    if (nickname == null) {
      const obj4 = { user: item };
      tmp9Result = closure_1_14(messageId(analyticsLocations[31]), obj4);
    }
    obj2.label = tmp9Result;
    let tmp13 = null;
    if (null != nickname) {
      tmp13 = userTag;
    }
    obj2.subLabel = tmp13;
    obj2.onPress = function onPress() {
      return showUserProfileActionSheetDefault({
        userId: item.id,
        localUser: item,
        sourceAnalyticsLocations: analyticsLocations,
        channelId,
        messageId,
      });
    };
    return closure_1_14(channelId(analyticsLocations[29]).TableRow, obj2);
  }, items1);
  let obj3 = channelId(analyticsLocations[15]);
  let obj4 = sharedValue;
  let num = 1;
  if (0 === reactors.length) {
    num = 0;
  }
  sharedValue = channelId(analyticsLocations[33]).useSharedValue(num);
  const items2 = [sharedValue, reactors.length];
  const effect = obj4.useEffect(() => {
    if (0 !== reactors.length) {
      const result = sharedValue.set(timing.withTiming(1, { duration: 200 }));
    } else {
      const result1 = sharedValue.set(0);
    }
  }, items2);
  const obj5 = channelId(analyticsLocations[33]);
  class T {
    constructor() {
      obj = { flex: 1, opacity: closure_5.get(), marginBottom: 32 };
      return obj;
    }
  }
  T.__closure = { opacity: sharedValue };
  T.__workletHash = 8593850252158;
  T.__initData = __initData;
  const animatedStyle = channelId(analyticsLocations[33]).useAnimatedStyle(T);
  const obj6 = {
    style: animatedStyle,
    children: closure_14(channelId(analyticsLocations[35]).BottomSheetFlashList, {
      contentContainerStyle: tmp.list,
      data: reactors,
      renderItem: callback,
      onScroll: reactorsOnScrollNative,
    }),
  };
  return closure_14(tmp2(analyticsLocations[33]).View, obj6);
}
get_ActivityIndicator = fn(17);
({ Image: metroRequire, View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4890);
let obj = {
  headerText: { textAlign: "center", paddingHorizontal: 16 },
  subheaderText: { textAlign: "center", marginTop: 2, paddingHorizontal: 16 },
  answerScroll: { marginTop: 24 },
  answerScrollContainer: { gap: 4, paddingHorizontal: 16 },
  answerName: { marginTop: 16, marginHorizontal: 16, marginBottom: 8 },
  list: { paddingHorizontal: 16 },
  answerButton: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: nativeDefault.radii.xs,
    maxWidth: 200,
  },
  answerSelected: null,
  answerEmoji: null,
  answerText: null,
  emojiText: null,
  emojiImage: null,
  noResultsContainer: null,
  noResultsImage: null,
  noResultsTitle: null,
  noResultsSubtitle: null,
};
let obj3 = {
  padding: 8,
  flexDirection: "row",
  alignItems: "center",
  borderRadius: nativeDefault.radii.xs,
  maxWidth: 200,
};
obj.answerSelected = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj.answerEmoji = { marginRight: 8 };
obj.answerText = { flexShrink: 1 };
obj.emojiText = { fontSize: 16 };
obj.emojiImage = { height: 16, width: 16, flexShrink: 0 };
obj.noResultsContainer = { flexDirection: "column", alignItems: "center", paddingHorizontal: 16 };
obj.noResultsImage = { marginTop: 32, width: 138 };
obj.noResultsTitle = { marginTop: 16, textAlign: "center" };
obj.noResultsSubtitle = { marginTop: 4, textAlign: "center" };
let closure_16 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = emoji(576).c(10);
      ({ style, emoji } = arg0);
      const tmp4 = closure_16();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [EmojiStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === emoji.animated) {
        if (cResult[2] === emoji.id) {
          let tmp7 = cResult[3];
        }
        const stateFromStores = emoji(504).useStateFromStores(first, tmp7);
        if (cResult[4] === emoji.name) {
          if (cResult[5] === stateFromStores) {
            if (cResult[6] === style) {
              if (cResult[7] === tmp4.emojiImage) {
                if (cResult[8] === tmp4.emojiText) {
                  let tmp9 = cResult[9];
                }
                return tmp9;
              }
            }
          }
        }
        let obj2 = { style, src: stateFromStores, name: emoji.name, textEmojiStyle: null, fastImageStyle: null };
        ({ emojiText: obj3.textEmojiStyle, emojiImage: obj3.fastImageStyle } = tmp4);
        const tmp12 = closure_14(EmojiDefault, obj2);
        cResult[4] = emoji.name;
        cResult[5] = stateFromStores;
        cResult[6] = style;
        cResult[7] = tmp4.emojiImage;
        cResult[8] = tmp4.emojiText;
        cResult[9] = tmp12;
        tmp9 = tmp12;
        const tmpResult = emoji(504);
      }
      const fn = function n() {
        if (null != emoji.id) {
          let animated = emoji.animated;
          if (!animated) {
            const customEmojiById = EmojiStore.getCustomEmojiById(emoji.id);
            let flag;
            if (customEmojiById != null) {
              flag = customEmojiById.animated;
            }
            if (flag == null) {
              flag = false;
            }
            animated = flag;
          }
          const obj2 = { id: emoji.id, animated, size: 16 };
          return AvatarUtilsDefault.getEmojiURL(obj2);
        }
      };
      cResult[1] = emoji.animated;
      cResult[2] = emoji.id;
      cResult[3] = fn;
      tmp7 = fn;
      const obj = emoji(576);
    }
  : (emoji) => {
      emoji = emoji.emoji;
      const tmp = closure_16();
      const items = [EmojiStore];
      const stateFromStores = emoji(504).useStateFromStores(items, () => {
        if (null != emoji.id) {
          let animated = emoji.animated;
          if (!animated) {
            const customEmojiById = EmojiStore.getCustomEmojiById(emoji.id);
            let flag;
            if (customEmojiById != null) {
              flag = customEmojiById.animated;
            }
            if (flag == null) {
              flag = false;
            }
            animated = flag;
          }
          const obj2 = { id: emoji.id, animated, size: 16 };
          return AvatarUtilsDefault.getEmojiURL(obj2);
        }
      });
      return closure_14(EmojiDefault, {
        style: emoji.style,
        src: stateFromStores,
        name: emoji.name,
        textEmojiStyle: tmp.emojiText,
        fastImageStyle: tmp.emojiImage,
      });
    };
ReactCompilerGating = fn(558);
let closure_18 = noop.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (answer, ref) => {
        const cResult = c.c(32);
        answer = answer.answer;
        ({ reaction, selected, setSelectedAnswerId } = answer);
        const tmp4 = closure_16();
        let num;
        if (reaction != null) {
          const count_details = reaction.count_details;
          if (count_details != null) {
            num = count_details.vote;
          }
        }
        if (num == null) {
          num = 0;
        }
        if (cResult[0] === answer.answer_id) {
          if (cResult[1] === setSelectedAnswerId) {
            let tmp5 = cResult[2];
          }
          let str = "text-default";
          if (selected) {
            str = "interactive-text-active";
          }
          if (cResult[3] === answer.poll_media.text) {
            if (cResult[4] === num) {
              let tmp6 = cResult[5];
            }
            let answerSelected;
            if (selected) {
              answerSelected = tmp4.answerSelected;
            }
            if (cResult[6] === tmp4.answerButton) {
              if (cResult[7] === answerSelected) {
                let tmp9 = cResult[8];
              }
              if (cResult[9] !== selected) {
                const obj2 = { selected };
                cResult[9] = selected;
                cResult[10] = obj2;
                let tmp10 = obj2;
              } else {
                tmp10 = cResult[10];
              }
              if (cResult[11] === answer.poll_media.emoji) {
                if (cResult[12] === tmp4.answerEmoji) {
                  let tmp11 = cResult[13];
                }
                if (cResult[14] === answer.poll_media.text) {
                  if (cResult[15] === tmp4.answerText) {
                    if (cResult[16] === str) {
                      let tmp15 = cResult[17];
                    }
                    if (cResult[18] !== num) {
                      const toLocaleStringResult = num.toLocaleString();
                      cResult[18] = num;
                      cResult[19] = toLocaleStringResult;
                      let tmp18 = toLocaleStringResult;
                    } else {
                      tmp18 = cResult[19];
                    }
                    if (cResult[20] === tmp18) {
                      if (cResult[21] === str) {
                        let tmp20 = cResult[22];
                      }
                      if (cResult[23] === tmp6) {
                        if (cResult[24] === tmp5) {
                          if (cResult[25] === ref) {
                            if (cResult[26] === tmp9) {
                              if (cResult[27] === tmp10) {
                                if (cResult[28] === tmp11) {
                                  if (cResult[29] === tmp15) {
                                    if (cResult[30] === tmp20) {
                                      let tmp24 = cResult[31];
                                    }
                                    return tmp24;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      const obj3 = {
                        ref,
                        onPress: tmp5,
                        style: tmp9,
                        accessibilityRole: "tab",
                        accessibilityState: tmp10,
                        accessibilityLabel: tmp6,
                        children: null,
                      };
                      const items = [tmp11, tmp15, tmp20];
                      obj3.children = items;
                      const tmp26 = closure_1_15(Pressables.PressableHighlight, obj3);
                      cResult[23] = tmp6;
                      cResult[24] = tmp5;
                      cResult[25] = ref;
                      cResult[26] = tmp9;
                      cResult[27] = tmp10;
                      cResult[28] = tmp11;
                      cResult[29] = tmp15;
                      cResult[30] = tmp20;
                      cResult[31] = tmp26;
                      tmp24 = tmp26;
                    }
                    const obj4 = { variant: "text-sm/semibold", color: str, lineClamp: 1, children: null };
                    const items1 = [" ", "(", tmp18, ")"];
                    obj4.children = items1;
                    const tmp22 = closure_1_15(Text_Text.Text, obj4);
                    cResult[20] = tmp18;
                    cResult[21] = str;
                    cResult[22] = tmp22;
                    tmp20 = tmp22;
                  }
                }
                let tmp16 = null;
                if (null != answer.poll_media.text) {
                  const obj5 = {
                    style: tmp4.answerText,
                    variant: "text-sm/semibold",
                    color: str,
                    lineClamp: 1,
                    children: answer.poll_media.text,
                  };
                  tmp16 = state(Text_Text.Text, obj5);
                }
                cResult[14] = answer.poll_media.text;
                cResult[15] = tmp4.answerText;
                cResult[16] = str;
                cResult[17] = tmp16;
                tmp15 = tmp16;
              }
              let tmp12 = null;
              if (null != answer.poll_media.emoji) {
                const obj6 = { style: tmp4.answerEmoji, emoji: answer.poll_media.emoji };
                tmp12 = state(closure_17, obj6);
              }
              cResult[11] = answer.poll_media.emoji;
              cResult[12] = tmp4.answerEmoji;
              cResult[13] = tmp12;
              tmp11 = tmp12;
            }
            const items2 = [tmp4.answerButton, answerSelected];
            cResult[6] = tmp4.answerButton;
            cResult[7] = answerSelected;
            cResult[8] = items2;
            tmp9 = items2;
          }
          const intl = util.intl;
          const obj7 = { numVotes: num, option: answer.poll_media.text };
          const formatToPlainStringResult = intl.formatToPlainString(util.t.wqBc7A, obj7);
          cResult[3] = answer.poll_media.text;
          cResult[4] = num;
          cResult[5] = formatToPlainStringResult;
          tmp6 = formatToPlainStringResult;
        }
        const fn = function n() {
          setSelectedAnswerId(String(answer.answer_id));
        };
        cResult[0] = answer.answer_id;
        cResult[1] = setSelectedAnswerId;
        cResult[2] = fn;
        tmp5 = fn;
      }
    : (answer, ref) => {
        answer = answer.answer;
        ({ reaction, selected, setSelectedAnswerId } = answer);
        const tmp = closure_16();
        let num;
        if (reaction != null) {
          const count_details = reaction.count_details;
          if (count_details != null) {
            num = count_details.vote;
          }
        }
        if (num == null) {
          num = 0;
        }
        const items = [setSelectedAnswerId, answer.answer_id];
        let str = "text-default";
        const callback = noop.useCallback(() => {
          setSelectedAnswerId(String(answer.answer_id));
        }, items);
        if (selected) {
          str = "interactive-text-active";
        }
        const intl = util.intl;
        const obj2 = {
          ref,
          onPress: callback,
          style: null,
          accessibilityRole: "tab",
          accessibilityState: null,
          accessibilityLabel: null,
          children: null,
        };
        const items1 = [tmp.answerButton];
        let answerSelected;
        if (selected) {
          answerSelected = tmp.answerSelected;
        }
        items1[1] = answerSelected;
        obj2.style = items1;
        obj2.accessibilityState = { selected };
        obj2.accessibilityLabel = intl.formatToPlainString(util.t.wqBc7A, {
          numVotes: num,
          option: answer.poll_media.text,
        });
        let tmp8 = null;
        if (null != answer.poll_media.emoji) {
          const obj3 = { style: tmp.answerEmoji, emoji: answer.poll_media.emoji };
          tmp8 = state(closure_17, obj3);
        }
        const items2 = [tmp8, ,];
        let tmp11 = null;
        if (null != answer.poll_media.text) {
          const obj4 = {
            style: tmp.answerText,
            variant: "text-sm/semibold",
            color: str,
            lineClamp: 1,
            children: answer.poll_media.text,
          };
          tmp11 = state(Text_Text.Text, obj4);
        }
        items2[1] = tmp11;
        const obj5 = { variant: "text-sm/semibold", color: str, lineClamp: 1, children: null };
        const items3 = [" ", "(", num.toLocaleString(), ")"];
        obj5.children = items3;
        items2[2] = closure_1_15(Text_Text.Text, obj5);
        obj2.children = items2;
        return closure_1_15(Pressables.PressableHighlight, obj2);
      },
);
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (message) => {
      const cResult = message(setSelectedAnswerId[13]).c(31);
      message = message.message;
      const selectedAnswerId = message.selectedAnswerId;
      setSelectedAnswerId = message.setSelectedAnswerId;
      let tmp4 = closure_16();
      if (cResult[0] !== message.reactions) {
        const totalVotes = tmp(tmp2[20]).getTotalVotes(message.reactions);
        cResult[0] = message.reactions;
        cResult[1] = totalVotes;
        let tmp5 = totalVotes;
        const tmpResult = tmp(tmp2[20]);
      } else {
        tmp5 = cResult[1];
      }
      let obj = message(setSelectedAnswerId[13]);
      let obj3 = noop;
      closure_4 = noop.useRef(null);
      noop = noop.useRef(false);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function v() {
          const timerId = setTimeout(
            asyncGeneratorStep(async () => {
              if (v3 === 2) {
                v3 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp4 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj = { value, done: true };
                  return obj;
                } else {
                  return { value: "IconComponent", done: "IconComponent" };
                }
              } else {
                try {
                  v3 = 2;
                  if (0 === c2) {
                    if (arg0 === 1) {
                      v3 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      v3 = 3;
                      const obj2 = { value, done: true };
                      return obj2;
                    } else {
                      closure_1 = tmp5;
                      closure_0 = tmp2;
                      closure_128_0 = undefined;
                      closure_128_1 = undefined;
                      closure_128_2 = undefined;
                      closure_128_3 = undefined;
                      closure_128_4 = undefined;
                      closure_128_5 = undefined;
                      closure_128_6 = undefined;
                      let scrollWidth;
                      let scrollPageX;
                      let width;
                      let pageX;
                      let x;
                      closure_128_12 = undefined;
                      const current4 = ref.current;
                      closure_128_0 = current4;
                      const current5 = ref2.current;
                      closure_128_1 = current5;
                      if (null != current4) {
                        if (null != current5) {
                          const promise = new Promise((arg0) => {
                            closure_0 = arg0;
                            closure_1_0.measure((arg0, arg1, scrollWidth, arg3, scrollPageX) =>
                              closure_0({ scrollWidth, scrollPageX }),
                            );
                          });
                          const promise3 = new Promise((arg0) => {
                            closure_0 = arg0;
                            closure_1_1.measure((arg0, arg1, width, arg3, pageX) => closure_0({ width, pageX }));
                          });
                          const promise4 = new Promise((arg0) => {
                            closure_0 = arg0;
                            closure_1_1.measureLayout(closure_1_0, (x) => closure_0({ x }));
                          });
                          const items = [promise, promise3, promise4];
                          c2 = 1;
                          v3 = 1;
                          const obj3 = { value: Promise.all(items), done: false };
                          return obj3;
                        }
                      }
                      v3 = 3;
                    }
                  } else if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    closure_128_2 = value;
                    closure_128_3 = v3(closure_128_2, 3);
                    closure_128_4 = closure_128_3[0];
                    closure_128_5 = closure_128_3[1];
                    closure_128_6 = closure_128_3[2];
                    scrollWidth = closure_128_4.scrollWidth;
                    scrollPageX = closure_128_4.scrollPageX;
                    width = closure_128_5.width;
                    pageX = closure_128_5.pageX;
                    x = closure_128_6.x;
                    closure_128_12 = !useReducedMotion.useReducedMotion;
                    if (closure_129_5.current) {
                      if (pageX >= scrollPageX) {
                        if (pageX + width > scrollPageX + scrollWidth) {
                          const current3 = closure_129_3.current;
                          if (current3 != null) {
                            const point = { x: x + width - scrollWidth + 16, y: 0, animated: closure_128_12 };
                            current3.scrollTo(point);
                          }
                        }
                      }
                    } else {
                      const current = closure_129_3.current;
                      if (current != null) {
                        const point1 = { x: x + width / 2 - scrollWidth / 2, y: 0, animated: closure_128_12 };
                        current.scrollTo(point1);
                      }
                      closure_129_5.current = true;
                      v3 = 3;
                      return { value: "IconComponent", done: "IconComponent" };
                    }
                  }
                  const current2 = closure_129_3.current;
                  if (current2 != null) {
                    const point2 = { x: x - 16, y: 0, animated: closure_128_12 };
                    current2.scrollTo(point2);
                  }
                } catch (tmp36) {
                  v3 = tmp;
                  throw tmp36;
                }
              }
            }),
            0,
          );
        };
        cResult[2] = fn;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== selectedAnswerId) {
        let items = [selectedAnswerId];
        cResult[3] = selectedAnswerId;
        cResult[4] = items;
        let tmp9 = items;
      } else {
        tmp9 = cResult[4];
      }
      const effect = obj3.useEffect(tmp8, tmp9);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { disallowInterruption: true };
        cResult[5] = obj2;
        let tmp11 = obj2;
      } else {
        tmp11 = cResult[5];
      }
      const ref = noop.useRef(null);
      const nativeGesture = message(setSelectedAnswerId[21]).useNativeGesture(tmp11);
      if (null == message.poll) {
        return null;
      } else {
        if (cResult[6] === message.poll.question.text) {
          if (cResult[7] === tmp4.headerText) {
            let tmp13 = cResult[8];
          }
          if (cResult[9] !== tmp5) {
            const intl = tmp(tmp2[17]).intl;
            let obj4 = { count: tmp5 };
            const formatResult = intl.format(tmp(tmp2[17]).t.XRkuof, obj4);
            cResult[9] = tmp5;
            cResult[10] = formatResult;
            let tmp16 = formatResult;
          } else {
            tmp16 = cResult[10];
          }
          if (cResult[11] === tmp4.subheaderText) {
            if (cResult[12] === tmp16) {
              let tmp18 = cResult[13];
            }
            const _Symbol = Symbol;
            ({ answerScroll, answerScrollContainer } = tmp4);
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = tmp(tmp2[17]).intl;
              const stringResult = intl2.string(tmp(tmp2[17]).t["qbir+4"]);
              cResult[14] = stringResult;
              let tmp21 = stringResult;
            } else {
              tmp21 = cResult[14];
            }
            if (cResult[15] === message.poll.answers) {
              if (cResult[16] === message.reactions) {
                if (cResult[17] === selectedAnswerId) {
                  if (cResult[18] === setSelectedAnswerId) {
                    let tmp23 = cResult[19];
                  }
                  if (cResult[20] === tmp4.answerScroll) {
                    if (cResult[21] === tmp4.answerScrollContainer) {
                      if (cResult[22] === tmp23) {
                        let tmp25 = cResult[23];
                      }
                      if (cResult[24] === nativeGesture) {
                        if (cResult[25] === tmp25) {
                          let tmp29 = cResult[26];
                        }
                        if (cResult[27] === tmp29) {
                          if (cResult[28] === tmp13) {
                            if (cResult[29] === tmp18) {
                              let tmp32 = cResult[30];
                            }
                            return tmp32;
                          }
                        }
                        const obj5 = { children: null };
                        const items1 = [tmp13, tmp18, tmp29];
                        obj5.children = items1;
                        const tmp35 = closure_15(closure_7, obj5);
                        cResult[27] = tmp29;
                        cResult[28] = tmp13;
                        cResult[29] = tmp18;
                        cResult[30] = tmp35;
                        tmp32 = tmp35;
                      }
                      const obj6 = { gesture: nativeGesture, children: tmp25 };
                      const tmp31 = closure_14(tmp(tmp2[21]).GestureDetector, obj6);
                      cResult[24] = nativeGesture;
                      cResult[25] = tmp25;
                      cResult[26] = tmp31;
                      tmp29 = tmp31;
                    }
                  }
                  const obj7 = {
                    ref,
                    style: answerScroll,
                    contentContainerStyle: answerScrollContainer,
                    horizontal: true,
                    showsHorizontalScrollIndicator: false,
                    accessibilityRole: "tablist",
                    accessibilityLabel: tmp21,
                    children: tmp23,
                  };
                  const tmp28 = closure_14(closure_8, obj7);
                  cResult[20] = tmp4.answerScroll;
                  cResult[21] = tmp4.answerScrollContainer;
                  cResult[22] = tmp23;
                  cResult[23] = tmp28;
                  tmp25 = tmp28;
                }
              }
            }
            const answers = message.poll.answers;
            const mapped = answers.map((answer) => {
              const tmp = selectedAnswerId === String(answer.answer_id);
              let tmp4;
              if (tmp) {
                tmp4 = closure_4;
              }
              const obj = {
                ref: tmp4,
                answer,
                selected: tmp,
                reaction: formatPollMessageChatData.reactionForId(message.reactions, String(answer.answer_id)),
                setSelectedAnswerId,
              };
              return state(closure_18, obj, answer.answer_id);
            });
            cResult[15] = message.poll.answers;
            cResult[16] = message.reactions;
            cResult[17] = selectedAnswerId;
            cResult[18] = setSelectedAnswerId;
            cResult[19] = mapped;
            tmp23 = mapped;
          }
          const obj8 = { style: tmp4.subheaderText, variant: "text-md/medium", color: "text-default", children: tmp16 };
          const tmp20 = closure_14(tmp(tmp2[18]).Text, obj8);
          cResult[11] = tmp4.subheaderText;
          cResult[12] = tmp16;
          cResult[13] = tmp20;
          tmp18 = tmp20;
        }
        const obj9 = {
          style: tmp4.headerText,
          variant: "redesign/heading-18/bold",
          color: "mobile-text-heading-primary",
          accessibilityRole: "header",
          children: message.poll.question.text,
        };
        const tmp15 = closure_14(tmp(tmp2[18]).Text, obj9);
        cResult[6] = message.poll.question.text;
        cResult[7] = tmp4.headerText;
        cResult[8] = tmp15;
        tmp13 = tmp15;
      }
      const tmpResult2 = message(setSelectedAnswerId[21]);
    }
  : (message) => {
      message = message.message;
      const selectedAnswerId = message.selectedAnswerId;
      const setSelectedAnswerId = message.setSelectedAnswerId;
      noop = undefined;
      let tmp = closure_16();
      let items = [message.reactions];
      const memo = noop.useMemo(() => PollsUtils.getTotalVotes(message.reactions), items);
      const ref = noop.useRef(null);
      closure_4 = noop.useRef(null);
      noop = noop.useRef(false);
      const items1 = [selectedAnswerId];
      const effect = noop.useEffect(() => {
        const timerId = setTimeout(
          asyncGeneratorStep(async () => {
            if (v3 === 2) {
              v3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj = { value, done: true };
                return obj;
              } else {
                return { value: "IconComponent", done: "IconComponent" };
              }
            } else {
              try {
                v3 = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    closure_1 = tmp5;
                    closure_0 = tmp2;
                    closure_128_0 = undefined;
                    closure_128_1 = undefined;
                    closure_128_2 = undefined;
                    closure_128_3 = undefined;
                    closure_128_4 = undefined;
                    let scrollWidth;
                    let scrollPageX;
                    closure_128_7 = undefined;
                    let width;
                    let pageX;
                    let x;
                    closure_128_11 = undefined;
                    const current4 = ref.current;
                    closure_128_0 = current4;
                    const current5 = ref2.current;
                    closure_128_1 = current5;
                    if (null != current4) {
                      if (null != current5) {
                        const promise = new Promise((arg0) => {
                          closure_0 = arg0;
                          closure_1_0.measure((arg0, arg1, scrollWidth, arg3, scrollPageX) =>
                            closure_0({ scrollWidth, scrollPageX }),
                          );
                        });
                        const promise3 = new Promise((arg0) => {
                          closure_0 = arg0;
                          closure_1_1.measure((arg0, arg1, width, arg3, pageX) => closure_0({ width, pageX }));
                        });
                        const promise4 = new Promise((arg0) => {
                          closure_0 = arg0;
                          closure_1_1.measureLayout(closure_1_0, (x) => closure_0({ x }));
                        });
                        const items = [promise, promise3, promise4];
                        c2 = 1;
                        v3 = 1;
                        const obj3 = { value: Promise.all(items), done: false };
                        return obj3;
                      }
                    }
                    v3 = 3;
                  }
                } else if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  closure_128_2 = value;
                  closure_128_3 = v3(closure_128_2, 3);
                  closure_128_4 = closure_128_3[0];
                  scrollWidth = closure_128_4.scrollWidth;
                  scrollPageX = closure_128_4.scrollPageX;
                  closure_128_7 = closure_128_3[1];
                  width = closure_128_7.width;
                  pageX = closure_128_7.pageX;
                  x = closure_128_3[2].x;
                  closure_128_11 = !useReducedMotion.useReducedMotion;
                  if (closure_129_5.current) {
                    if (pageX >= scrollPageX) {
                      if (pageX + width > scrollPageX + scrollWidth) {
                        const current3 = closure_129_3.current;
                        if (current3 != null) {
                          const point = { x: x + width - scrollWidth + 16, y: 0, animated: closure_128_11 };
                          current3.scrollTo(point);
                        }
                      }
                    }
                  } else {
                    const current = closure_129_3.current;
                    if (current != null) {
                      const point1 = { x: x + width / 2 - scrollWidth / 2, y: 0, animated: closure_128_11 };
                      current.scrollTo(point1);
                    }
                    closure_129_5.current = true;
                    v3 = 3;
                    return { value: "IconComponent", done: "IconComponent" };
                  }
                }
                const current2 = closure_129_3.current;
                if (current2 != null) {
                  const point2 = { x: x - 16, y: 0, animated: closure_128_11 };
                  current2.scrollTo(point2);
                }
              } catch (tmp36) {
                v3 = tmp;
                throw tmp36;
              }
            }
          }),
          0,
        );
      }, items1);
      message(setSelectedAnswerId[21]);
      let tmp9 = null;
      if (null != message.poll) {
        let obj = { children: null };
        let obj2 = {
          style: tmp.headerText,
          variant: "redesign/heading-18/bold",
          color: "mobile-text-heading-primary",
          accessibilityRole: "header",
          children: message.poll.question.text,
        };
        const items2 = [closure_14(tmp5(tmp6[18]).Text, obj2), ,];
        let obj3 = { style: tmp.subheaderText, variant: "text-md/medium", color: "text-default", children: null };
        const intl = tmp5(tmp6[17]).intl;
        let obj4 = { count: memo };
        obj3.children = intl.format(tmp5(tmp6[17]).t.XRkuof, obj4);
        items2[1] = closure_14(tmp5(tmp6[18]).Text, obj3);
        const obj5 = { gesture: tmp8, children: null };
        const obj11 = {
          ref,
          style: null,
          contentContainerStyle: null,
          horizontal: true,
          showsHorizontalScrollIndicator: false,
          accessibilityRole: "tablist",
          accessibilityLabel: null,
          children: null,
        };
        ({ answerScroll: obj6.style, answerScrollContainer: obj6.contentContainerStyle } = tmp);
        const intl2 = tmp5(tmp6[17]).intl;
        obj11.accessibilityLabel = intl2.string(tmp5(tmp6[17]).t["qbir+4"]);
        const answers = message.poll.answers;
        obj11.children = answers.map((answer) => {
          const tmp = selectedAnswerId === String(answer.answer_id);
          let tmp4;
          if (tmp) {
            tmp4 = closure_4;
          }
          const obj = {
            ref: tmp4,
            answer,
            selected: tmp,
            reaction: formatPollMessageChatData.reactionForId(message.reactions, String(answer.answer_id)),
            setSelectedAnswerId,
          };
          return state(closure_18, obj, answer.answer_id);
        });
        obj5.children = closure_14(closure_8, obj11);
        items2[2] = closure_14(tmp5(tmp6[21]).GestureDetector, obj5);
        obj.children = items2;
        tmp9 = closure_15(closure_7, obj);
      }
      return tmp9;
    };
const __initData = {
  code: "function PollVotesActionSheetTsx1(){const{opacity}=this.__closure;return{flex:1,opacity:opacity.get(),marginBottom:32};}",
};
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(14);
      const tmp4 = closure_16();
      const tmp6 = useThemeDefault();
      if (obj2.isThemeDark(tmp6)) {
        let tmp5Result = _modDef11354;
      } else {
        tmp5Result = _modDef11355;
      }
      if (cResult[0] === tmp4.noResultsImage) {
        if (cResult[1] === tmp5Result) {
          let tmp8 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(util.t.vhQK3o);
          cResult[3] = stringResult;
          let tmp11 = stringResult;
        } else {
          tmp11 = cResult[3];
        }
        if (cResult[4] !== tmp4.noResultsTitle) {
          const obj3 = {
            style: tmp4.noResultsTitle,
            variant: "heading-md/bold",
            color: "mobile-text-heading-primary",
            children: tmp11,
          };
          const tmp15 = state(Text_Text.Text, obj3);
          cResult[4] = tmp4.noResultsTitle;
          cResult[5] = tmp15;
          let tmp13 = tmp15;
        } else {
          tmp13 = cResult[5];
        }
        const _Symbol2 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = util.intl;
          const stringResult1 = intl2.string(util.t.bwytdh);
          cResult[6] = stringResult1;
          let tmp16 = stringResult1;
        } else {
          tmp16 = cResult[6];
        }
        if (cResult[7] !== tmp4.noResultsSubtitle) {
          const obj4 = {
            style: tmp4.noResultsSubtitle,
            variant: "text-sm/semibold",
            color: "text-default",
            children: tmp16,
          };
          const tmp20 = state(Text_Text.Text, obj4);
          cResult[7] = tmp4.noResultsSubtitle;
          cResult[8] = tmp20;
          let tmp18 = tmp20;
        } else {
          tmp18 = cResult[8];
        }
        if (cResult[9] === tmp4.noResultsContainer) {
          if (cResult[10] === tmp8) {
            if (cResult[11] === tmp13) {
              if (cResult[12] === tmp18) {
                let tmp21 = cResult[13];
              }
              return tmp21;
            }
          }
        }
        const obj5 = { style: tmp4.noResultsContainer, children: null };
        const items = [tmp8, tmp13, tmp18];
        obj5.children = items;
        const tmp24 = closure_1_15(React5, obj5);
        cResult[9] = tmp4.noResultsContainer;
        cResult[10] = tmp8;
        cResult[11] = tmp13;
        cResult[12] = tmp18;
        cResult[13] = tmp24;
        tmp21 = tmp24;
      }
      const tmp9 = state(timestampProducer, { style: tmp4.noResultsImage, source: tmp5Result });
      cResult[0] = tmp4.noResultsImage;
      cResult[1] = tmp5Result;
      cResult[2] = tmp9;
      tmp8 = tmp9;
      obj2 = shared;
      const obj6 = { style: tmp4.noResultsImage, source: tmp5Result };
    }
  : () => {
      const tmp = closure_16();
      const obj = { style: tmp.noResultsContainer, children: null };
      const obj2 = { style: tmp.noResultsImage, source: null };
      const tmp4 = useThemeDefault();
      if (obj3.isThemeDark(tmp4)) {
        let tmp2Result = _modDef11354;
      } else {
        tmp2Result = _modDef11355;
      }
      obj2.source = tmp2Result;
      const items = [state(timestampProducer, obj2), ,];
      const obj4 = {
        style: tmp.noResultsTitle,
        variant: "heading-md/bold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      const intl = util.intl;
      obj4.children = intl.string(util.t.vhQK3o);
      items[1] = state(Text_Text.Text, obj4);
      const obj5 = { style: tmp.noResultsSubtitle, variant: "text-sm/semibold", color: "text-default", children: null };
      const intl2 = util.intl;
      obj5.children = intl2.string(util.t.bwytdh);
      items[2] = state(Text_Text.Text, obj5);
      obj.children = items;
      return closure_1_15(React5, obj);
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/polls/native/PollVotesActionSheet.tsx");

export default function PollVotesActionSheet(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  let stateFromStores;
  const tmp = closure_16();
  const tmp4 = stateFromStores(noop.useState(channelId.initialAnswerId), 2);
  const selectedAnswerId = tmp4[0];
  const tmp3 = messageId(selectedAnswerId[23]);
  const items = [MessageStore];
  stateFromStores = channelId(selectedAnswerId[15]).useStateFromStores(items, () =>
    MessageStore.getMessage(channelId, messageId),
  );
  closure_4 = tmp8;
  const items1 = [null != stateFromStores && null != stateFromStores.poll];
  const effect = noop.useEffect(() => {
    if (!closure_4) {
      ActionSheetActionCreatorsDefault.hideActionSheet("PollVotesActionSheet");
    }
  }, items1);
  let reactions;
  if (stateFromStores != null) {
    reactions = stateFromStores.reactions;
  }
  const items2 = [reactions, selectedAnswerId];
  const memo = noop.useMemo(() => {
    let reactions;
    if (stateFromStores != null) {
      reactions = stateFromStores.reactions;
    }
    if (null != reactions) {
      return formatPollMessageChatData.reactionForId(stateFromStores.reactions, first);
    }
  }, items2);
  if (null != stateFromStores && null != stateFromStores.poll) {
    let found;
    if (stateFromStores != null) {
      const poll = stateFromStores.poll;
      if (poll != null) {
        const answers = poll.answers;
        found = answers.find((answer_id) => String(answer_id.answer_id) === first);
      }
    }
    let num;
    if (memo != null) {
      const count_details = memo.count_details;
      if (count_details != null) {
        num = count_details.vote;
      }
    }
    if (num == null) {
      num = 0;
    }
    const obj3 = { value: tmp3(messageId(selectedAnswerId[40]).POLL_VOTES).analyticsLocations, children: null };
    const obj4 = { scrollable: true, header: null, children: null };
    const obj5 = { message: stateFromStores, selectedAnswerId, setSelectedAnswerId: tmp4[1] };
    obj4.header = closure_14(closure_19, obj5);
    const obj6 = { style: tmp.answerName, variant: "text-sm/semibold", color: "text-default", children: null };
    let text;
    if (found != null) {
      text = found.poll_media.text;
    }
    const items3 = [text, " - "];
    const intl = tmp6(tmp2[17]).intl;
    const obj7 = { count: num };
    items3[2] = intl.format(tmp6(tmp2[17]).t["SG/Cyy"], obj7);
    obj6.children = items3;
    const items4 = [closure_15(tmp6(tmp2[18]).Text, obj6)];
    if (null != memo) {
      if (num > 0) {
        const obj8 = { channelId, messageId, reaction: memo };
        let tmp13Result = closure_14(VotersList, obj8);
      }
      items4[1] = tmp13Result;
      obj4.children = items4;
      obj3.children = closure_15(tmp6(tmp2[42]).BottomSheet, obj4);
      return closure_14(tmp6(tmp2[23]).AnalyticsLocationProvider, obj3);
    }
    tmp13Result = closure_14(closure_22, {});
  } else {
    return null;
  }
  const obj2 = channelId(selectedAnswerId[15]);
}
