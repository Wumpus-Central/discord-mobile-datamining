// discord_app/modules/polls/native/PollVotesActionSheet.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../intl/index.native.tsx";
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
import AssetRegistryDefault from "../../../../_runtime/11367_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../_runtime/11368_AssetRegistry.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import react_mod from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import EmojiStore from "../../emojis/EmojiStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import MessageStore from "../../../stores/MessageStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let BottomSheet, answer, c2, item, message, ref2, set, user;

let closure_14;
let closure_15;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
function VotersList(channelId) {
  let obj6;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const reaction = channelId.reaction;
  let analyticsLocations;
  let sharedValue;
  const tmp3 = analyticsLocations;
  const tmp = closure_16();
  analyticsLocations = messageId(analyticsLocations[23])().analyticsLocations;
  const tmp4 = messageId(analyticsLocations[24])({ channelId, messageId, reaction });
  const reactors = tmp4.reactors;
  const hasMore = tmp4.hasMore;
  let obj = channelId(analyticsLocations[25]);
  let obj2 = {
    channelId,
    messageId,
    reactionSelected: reaction,
    reactors,
    reactorsHasMore: hasMore,
    reactionType: channelId(analyticsLocations[26]).ReactionTypes.VOTE,
  };
  const reactorsOnScrollNative = obj.useReactorsOnScrollNative(obj2);
  let obj3 = channelId(analyticsLocations[15]);
  const items = [ChannelStore];
  const stateFromStores = obj3.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const items1 = [stateFromStores, reactors.length, channelId, messageId, analyticsLocations];
  const callback = sharedValue.useCallback((item) => {
    let Avatar;
    let obj2;
    let tmp10Result;
    let tmp14;
    item = item.item;
    const index = item.index;
    let guild_id;
    const getNickname = messageId(analyticsLocations[27]).getNickname;
    messageId(analyticsLocations[27]);
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    let nickname = getNickname(guild_id, id, item);
    if (nickname == null) {
      const tmpResult = messageId(analyticsLocations[28]);
      nickname = tmpResult.getGlobalName(item);
    }
    const tmpResult2 = messageId(analyticsLocations[28]);
    const userTag = tmpResult2.getUserTag(item);
    user = user.getUser(item.id);
    let obj = {
      start: 0 === index,
      end: reactors.length - 1 === index,
      icon: closure_1_14(Avatar, obj2),
      label: tmp10Result,
      subLabel: tmp14,
      onPress() {
        const obj = {
          userId: item.id,
          localUser: item,
          sourceAnalyticsLocations: analyticsLocations,
          channelId,
          messageId,
        };
        return showUserProfileActionSheetDefault(obj);
      },
    };
    const TableRow = channelId(analyticsLocations[29]).TableRow;
    let guild_id1;
    Avatar = channelId(analyticsLocations[30]).Avatar;
    if (stateFromStores != null) {
      guild_id1 = stateFromStores.guild_id;
    }
    obj2 = { guildId: guild_id1, user, size: channelId(analyticsLocations[30]).AvatarSizes.SMALL };
    if (user == null) {
      user = item;
    }
    tmp10Result = nickname;
    if (nickname == null) {
      const obj3 = { user: item };
      tmp10Result = closure_1_14(messageId(analyticsLocations[31]), obj3);
    }
    tmp14 = null;
    if (null != nickname) {
      tmp14 = userTag;
    }
    return closure_1_14(TableRow, obj);
  }, items1);
  let num = 1;
  const useSharedValue = channelId(analyticsLocations[33]).useSharedValue;
  channelId(analyticsLocations[33]);
  const obj4 = sharedValue;
  const tmp2 = messageId;
  if (0 === reactors.length) {
    num = 0;
  }
  sharedValue = useSharedValue(num);
  const items2 = [sharedValue, reactors.length];
  const effect = obj4.useEffect(() => {
    if (0 !== reactors.length) {
      set = sharedValue.set;
      const obj = timing;
      const result = set(obj.withTiming(1, { duration: 200 }));
    } else {
      const result1 = sharedValue.set(0);
    }
  }, items2);
  const tmp5Result = channelId(tmp3[33]);
  class T {
    constructor() {
      const obj = { flex: 1, opacity: sharedValue.get(), marginBottom: 32 };
      return obj;
    }
  }
  T.__closure = { opacity: sharedValue };
  T.__workletHash = 8593850252158;
  T.__initData = __initData;
  const animatedStyle = tmp5Result.useAnimatedStyle(T);
  const obj5 = { style: animatedStyle, children: closure_14(channelId(tmp3[35]).BottomSheetFlashList, obj6) };
  const View = tmp2(tmp3[33]).View;
  obj6 = { contentContainerStyle: tmp.list, data: reactors, renderItem: callback, onScroll: reactorsOnScrollNative };
  return closure_14(View, obj5);
}
let react = react_mod;
({ Image: metroRequire, View: metroImportDefault, ScrollView: metroImportAll } = react_native);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  headerText: { textAlign: "center", paddingHorizontal: 16 },
  subheaderText: { textAlign: "center", marginTop: 2, paddingHorizontal: 16 },
  answerScroll: { marginTop: 24 },
  answerScrollContainer: { gap: 4, paddingHorizontal: 16 },
  answerName: { marginTop: 16, marginHorizontal: 16, marginBottom: 8 },
  list: { paddingHorizontal: 16 },
  answerButton: obj2,
  answerSelected: obj3,
  answerEmoji: { marginRight: 8 },
  answerText: { flexShrink: 1 },
  emojiText: { fontSize: 16 },
  emojiImage: { height: 16, width: 16, flexShrink: 0 },
  noResultsContainer: { flexDirection: "column", alignItems: "center", paddingHorizontal: 16 },
  noResultsImage: { marginTop: 32, width: 138 },
  noResultsTitle: { marginTop: 16, textAlign: "center" },
  noResultsSubtitle: { marginTop: 4, textAlign: "center" },
};
obj2 = { padding: 8, flexDirection: "row", alignItems: "center", borderRadius: nativeDefault.radii.xs, maxWidth: 200 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_16 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let emoji;
      let first;
      let style;
      let obj = emoji(576);
      const cResult = obj.c(10);
      ({ style, emoji } = arg0);
      const tmp4 = closure_16();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [EmojiStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === emoji.animated) {
        let tmp7;
        if (cResult[2] === emoji.id) {
          tmp7 = cResult[3];
        }
        const tmpResult = emoji(504);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
        if (cResult[4] === emoji.name) {
          if (cResult[5] === stateFromStores) {
            if (cResult[6] === style) {
              if (cResult[7] === tmp4.emojiImage) {
                let tmp9;
                if (cResult[8] === tmp4.emojiText) {
                  tmp9 = cResult[9];
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
          const obj = AvatarUtilsDefault;
          return obj.getEmojiURL(obj2);
        }
      };
      cResult[1] = emoji.animated;
      cResult[2] = emoji.id;
      cResult[3] = fn;
      tmp7 = fn;
    }
  : (emoji) => {
      emoji = emoji.emoji;
      const style = emoji.style;
      const tmp = closure_16();
      let obj = emoji(504);
      const items = [EmojiStore];
      const stateFromStores = obj.useStateFromStores(items, () => {
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
          const obj = AvatarUtilsDefault;
          return obj.getEmojiURL(obj2);
        }
      });
      let obj2 = {
        style,
        src: stateFromStores,
        name: emoji.name,
        textEmojiStyle: tmp.emojiText,
        fastImageStyle: tmp.emojiImage,
      };
      return closure_14(EmojiDefault, obj2);
    };
const forwardRef = react.forwardRef;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (answer, ref) => {
        let items;
        let items1;
        let reaction;
        let selected;
        let setSelectedAnswerId;
        const obj = react2;
        const cResult = obj.c(32);
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
          let tmp5;
          if (cResult[1] === setSelectedAnswerId) {
            tmp5 = cResult[2];
          }
          let str = "text-default";
          if (selected) {
            str = "interactive-text-active";
          }
          if (cResult[3] === answer.poll_media.text) {
            let tmp6;
            if (cResult[4] === num) {
              tmp6 = cResult[5];
            }
            let answerSelected;
            if (selected) {
              answerSelected = tmp4.answerSelected;
            }
            if (cResult[6] === tmp4.answerButton) {
              let tmp9;
              let tmp10;
              if (cResult[7] === answerSelected) {
                tmp9 = cResult[8];
              }
              if (cResult[9] !== selected) {
                const obj2 = { selected };
                cResult[9] = selected;
                cResult[10] = obj2;
                tmp10 = obj2;
              } else {
                tmp10 = cResult[10];
              }
              if (cResult[11] === answer.poll_media.emoji) {
                let tmp11;
                if (cResult[12] === tmp4.answerEmoji) {
                  tmp11 = cResult[13];
                }
                if (cResult[14] === answer.poll_media.text) {
                  if (cResult[15] === tmp4.answerText) {
                    let tmp15;
                    let tmp18;
                    if (cResult[16] === str) {
                      tmp15 = cResult[17];
                    }
                    if (cResult[18] !== num) {
                      const toLocaleStringResult = num.toLocaleString();
                      cResult[18] = num;
                      cResult[19] = toLocaleStringResult;
                      tmp18 = toLocaleStringResult;
                    } else {
                      tmp18 = cResult[19];
                    }
                    if (cResult[20] === tmp18) {
                      let tmp20;
                      if (cResult[21] === str) {
                        tmp20 = cResult[22];
                      }
                      if (cResult[23] === tmp6) {
                        if (cResult[24] === tmp5) {
                          if (cResult[25] === ref) {
                            if (cResult[26] === tmp9) {
                              if (cResult[27] === tmp10) {
                                if (cResult[28] === tmp11) {
                                  if (cResult[29] === tmp15) {
                                    let tmp24;
                                    if (cResult[30] === tmp20) {
                                      tmp24 = cResult[31];
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
                        children: items,
                      };
                      items = [tmp11, tmp15, tmp20];
                      const tmp26 = closure_15(Pressables.PressableHighlight, obj3);
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
                    const obj4 = { variant: "text-sm/semibold", color: str, lineClamp: 1, children: items1 };
                    items1 = [" ", "(", tmp18, ")"];
                    const tmp22 = closure_15(Text_Text.Text, obj4);
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
                  tmp16 = authStore2(Text_Text.Text, obj5);
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
                tmp12 = authStore2(closure_17, obj6);
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
          const intl = intl3.intl;
          const obj7 = { numVotes: num, option: answer.poll_media.text };
          const formatToPlainStringResult = intl.formatToPlainString(intl3.t.wqBc7A, obj7);
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
        let formatToPlainStringResult;
        let items1;
        let items2;
        let items3;
        let reaction;
        let selected;
        let setSelectedAnswerId;
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
        const callback = react.useCallback(() => {
          setSelectedAnswerId(String(answer.answer_id));
        }, items);
        if (selected) {
          str = "interactive-text-active";
        }
        const intl = intl3.intl;
        const obj2 = {
          ref,
          onPress: callback,
          style: items1,
          accessibilityRole: "tab",
          accessibilityState: { selected },
          accessibilityLabel: formatToPlainStringResult,
          children: items2,
        };
        items1 = [tmp.answerButton];
        let answerSelected;
        const obj = { numVotes: num, option: answer.poll_media.text };
        formatToPlainStringResult = intl.formatToPlainString(intl3.t.wqBc7A, obj);
        const PressableHighlight = Pressables.PressableHighlight;
        if (selected) {
          answerSelected = tmp.answerSelected;
        }
        items1[1] = answerSelected;
        let tmp8 = null;
        if (null != answer.poll_media.emoji) {
          const obj3 = { style: tmp.answerEmoji, emoji: answer.poll_media.emoji };
          tmp8 = authStore2(closure_17, obj3);
        }
        items2 = [tmp8, ,];
        let tmp11 = null;
        if (null != answer.poll_media.text) {
          const obj4 = {
            style: tmp.answerText,
            variant: "text-sm/semibold",
            color: str,
            lineClamp: 1,
            children: answer.poll_media.text,
          };
          tmp11 = authStore2(Text_Text.Text, obj4);
        }
        items2[1] = tmp11;
        const obj5 = { variant: "text-sm/semibold", color: str, lineClamp: 1, children: items3 };
        const Text = Text_Text.Text;
        items3 = [" ", "(", num.toLocaleString(), ")"];
        items2[2] = closure_15(Text, obj5);
        return closure_15(PressableHighlight, obj2);
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (message) => {
      let answerScroll;
      let answerScrollContainer;
      let closure_5;
      let items1;
      let setSelectedAnswerId;
      let tmp11;
      let tmp5;
      let tmp8;
      let tmp9;
      let tmp = message;
      let obj = message(setSelectedAnswerId[13]);
      const cResult = obj.c(31);
      message = message.message;
      const selectedAnswerId = message.selectedAnswerId;
      setSelectedAnswerId = message.setSelectedAnswerId;
      let tmp4 = closure_16();
      if (cResult[0] !== message.reactions) {
        const tmpResult = tmp(setSelectedAnswerId[20]);
        const totalVotes = tmpResult.getTotalVotes(message.reactions);
        cResult[0] = message.reactions;
        cResult[1] = totalVotes;
        tmp5 = totalVotes;
      } else {
        tmp5 = cResult[1];
      }
      let obj3 = react;
      let ref = react.useRef(null);
      let closure_4 = react.useRef(null);
      react = react.useRef(false);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function v() {
          const timerId = setTimeout(
            _asyncToGenerator(async function () {
              let c3;
              let closure_6;
              if (ref === 2) {
                ref = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  let obj = { value, done: true };
                  return obj;
                } else {
                  return { value: "IconComponent", done: null };
                }
              } else {
                try {
                  let closure_2;
                  let styles;
                  let x;
                  let scrollWidth;
                  let scrollPageX;
                  let width;
                  let pageX;
                  let x2;
                  let animated;
                  ref = 2;
                  if (0 === c2) {
                    if (arg0 === 1) {
                      ref = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      ref = 3;
                      const obj2 = { value, done: true };
                      return obj2;
                    } else {
                      let closure_1 = tmp4;
                      let closure_0 = tmp;
                      closure_2 = undefined;
                      ref = undefined;
                      ref2 = undefined;
                      styles = undefined;
                      x = undefined;
                      scrollWidth = undefined;
                      scrollPageX = undefined;
                      width = undefined;
                      pageX = undefined;
                      x2 = undefined;
                      animated = undefined;
                      const current4 = ref.current;
                      const current5 = ref2.current;
                      if (null != current4) {
                        if (null != current5) {
                          const self = this;
                          const self2 = this;
                          const promise = new Promise((arg0) => {
                            closure_0 = arg0;
                            closure_1_0.measure((arg0, arg1, scrollWidth, arg3, scrollPageX) => {
                              const obj = { scrollWidth, scrollPageX };
                              return closure_0(obj);
                            });
                          });
                          const self3 = this;
                          const self4 = this;
                          const promise3 = new Promise((arg0) => {
                            closure_0 = arg0;
                            closure_1_1.measure((arg0, arg1, width, arg3, pageX) => {
                              const obj = { width, pageX };
                              return closure_0(obj);
                            });
                          });
                          const self5 = this;
                          const self6 = this;
                          const promise4 = new Promise((arg0) => {
                            closure_0 = arg0;
                            closure_1_1.measureLayout(closure_1_0, (x) => {
                              const obj = { x };
                              return closure_0(obj);
                            });
                          });
                          const items = [promise, promise3, promise4];
                          c2 = 1;
                          ref = 1;
                          const obj3 = { value: Promise.all(items), done: false };
                          return obj3;
                        }
                      }
                    }
                  } else if (arg0 === 1) {
                    ref = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    ref = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    closure_2 = value;
                    ref = ref(closure_2, 3);
                    ref2 = ref[0];
                    styles = ref[1];
                    x = ref[2];
                    scrollWidth = ref2.scrollWidth;
                    scrollPageX = ref2.scrollPageX;
                    width = styles.width;
                    pageX = styles.pageX;
                    x2 = x.x;
                    animated = !useReducedMotion.useReducedMotion;
                    if (ref2.current) {
                      if (pageX < scrollPageX) {
                        const current2 = ref.current;
                        if (current2 != null) {
                          const point = { x: x2 - 16, y: 0, animated };
                          current2.scrollTo(point);
                        }
                      } else if (pageX + width > scrollPageX + scrollWidth) {
                        const current3 = ref.current;
                        if (current3 != null) {
                          const point1 = { x: x2 + width - scrollWidth + 16, y: 0, animated };
                          current3.scrollTo(point1);
                        }
                      }
                    } else {
                      const current = ref.current;
                      if (current != null) {
                        const point2 = { x: x2 + width / 2 - scrollWidth / 2, y: 0, animated };
                        current.scrollTo(point2);
                      }
                      ref2.current = true;
                      ref = 3;
                      return { value: "IconComponent", done: null };
                    }
                  }
                  ref = 3;
                  return { value: "IconComponent", done: null };
                } catch (tmp29) {
                  ref = 3;
                  throw tmp29;
                }
              }
            }),
            0,
          );
        };
        cResult[2] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== selectedAnswerId) {
        let items = [selectedAnswerId];
        cResult[3] = selectedAnswerId;
        cResult[4] = items;
        tmp9 = items;
      } else {
        tmp9 = cResult[4];
      }
      const effect = obj3.useEffect(tmp8, tmp9);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { disallowInterruption: true };
        cResult[5] = obj2;
        tmp11 = obj2;
      } else {
        tmp11 = cResult[5];
      }
      const tmpResult2 = tmp(setSelectedAnswerId[21]);
      const nativeGesture = tmpResult2.useNativeGesture(tmp11);
      if (null == message.poll) {
        return null;
      } else {
        if (cResult[6] === message.poll.question.text) {
          let tmp13;
          let tmp16;
          if (cResult[7] === tmp4.headerText) {
            tmp13 = cResult[8];
          }
          const subheaderText = tmp4.subheaderText;
          if (cResult[9] !== tmp5) {
            const intl = tmp(tmp2[17]).intl;
            let obj4 = { count: tmp5 };
            const formatResult = intl.format(tmp(setSelectedAnswerId[17]).t.XRkuof, obj4);
            cResult[9] = tmp5;
            cResult[10] = formatResult;
            tmp16 = formatResult;
          } else {
            tmp16 = cResult[10];
          }
          if (cResult[11] === tmp4.subheaderText) {
            let tmp18;
            let tmp21;
            if (cResult[12] === tmp16) {
              tmp18 = cResult[13];
            }
            const _Symbol = Symbol;
            ({ answerScroll, answerScrollContainer } = tmp4);
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = tmp(tmp2[17]).intl;
              const stringResult = intl2.string(tmp(setSelectedAnswerId[17]).t["qbir+4"]);
              cResult[14] = stringResult;
              tmp21 = stringResult;
            } else {
              tmp21 = cResult[14];
            }
            if (cResult[15] === message.poll.answers) {
              if (cResult[16] === message.reactions) {
                if (cResult[17] === selectedAnswerId) {
                  let tmp23;
                  if (cResult[18] === setSelectedAnswerId) {
                    tmp23 = cResult[19];
                  }
                  if (cResult[20] === tmp4.answerScroll) {
                    if (cResult[21] === tmp4.answerScrollContainer) {
                      let tmp25;
                      if (cResult[22] === tmp23) {
                        tmp25 = cResult[23];
                      }
                      if (cResult[24] === nativeGesture) {
                        let tmp29;
                        if (cResult[25] === tmp25) {
                          tmp29 = cResult[26];
                        }
                        if (cResult[27] === tmp29) {
                          if (cResult[28] === tmp13) {
                            let tmp32;
                            if (cResult[29] === tmp18) {
                              tmp32 = cResult[30];
                            }
                            return tmp32;
                          }
                        }
                        const obj5 = { children: items1 };
                        items1 = [tmp13, tmp18, tmp29];
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
              let obj2;
              const tmp = selectedAnswerId === String(answer.answer_id);
              let tmp4;
              if (tmp) {
                tmp4 = closure_4;
              }
              const obj = {
                ref: tmp4,
                answer,
                selected: tmp,
                reaction: obj2.reactionForId(message.reactions, String(answer.answer_id)),
                setSelectedAnswerId,
              };
              obj2 = formatPollMessageChatData;
              return authStore2(closure_18, obj, answer.answer_id);
            });
            cResult[15] = message.poll.answers;
            cResult[16] = message.reactions;
            cResult[17] = selectedAnswerId;
            cResult[18] = setSelectedAnswerId;
            cResult[19] = mapped;
            tmp23 = mapped;
          }
          const obj8 = { style: subheaderText, variant: "text-md/medium", color: "text-default", children: tmp16 };
          const tmp20 = closure_14(tmp(setSelectedAnswerId[18]).Text, obj8);
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
        const tmp15 = closure_14(tmp(setSelectedAnswerId[18]).Text, obj9);
        cResult[6] = message.poll.question.text;
        cResult[7] = tmp4.headerText;
        cResult[8] = tmp15;
        tmp13 = tmp15;
      }
    }
  : (message) => {
      let answers;
      let closure_5;
      let intl;
      let intl2;
      let items2;
      let obj11;
      let obj4;
      message = message.message;
      const selectedAnswerId = message.selectedAnswerId;
      const setSelectedAnswerId = message.setSelectedAnswerId;
      react = undefined;
      let tmp = closure_16();
      let items = [message.reactions];
      const memo = react.useMemo(() => {
        const obj = PollsUtils;
        return obj.getTotalVotes(message.reactions);
      }, items);
      let ref = react.useRef(null);
      let closure_4 = react.useRef(null);
      react = react.useRef(false);
      const items1 = [selectedAnswerId];
      const effect = react.useEffect(() => {
        const timerId = setTimeout(
          _asyncToGenerator(async function () {
            let c3;
            if (ref === 2) {
              ref = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                let obj = { value, done: true };
                return obj;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                let closure_2;
                let scrollWidth;
                let scrollPageX;
                let styles;
                let width;
                let pageX;
                let x;
                let animated;
                ref = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    ref = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    ref = 3;
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    let closure_1 = tmp4;
                    let closure_0 = tmp;
                    closure_2 = undefined;
                    ref = undefined;
                    ref2 = undefined;
                    scrollWidth = undefined;
                    scrollPageX = undefined;
                    styles = undefined;
                    width = undefined;
                    pageX = undefined;
                    x = undefined;
                    animated = undefined;
                    const current4 = ref.current;
                    const current5 = ref2.current;
                    if (null != current4) {
                      if (null != current5) {
                        const self = this;
                        const self2 = this;
                        const promise = new Promise((arg0) => {
                          closure_0 = arg0;
                          closure_1_0.measure((arg0, arg1, scrollWidth, arg3, scrollPageX) => {
                            const obj = { scrollWidth, scrollPageX };
                            return closure_0(obj);
                          });
                        });
                        const self3 = this;
                        const self4 = this;
                        const promise3 = new Promise((arg0) => {
                          closure_0 = arg0;
                          closure_1_1.measure((arg0, arg1, width, arg3, pageX) => {
                            const obj = { width, pageX };
                            return closure_0(obj);
                          });
                        });
                        const self5 = this;
                        const self6 = this;
                        const promise4 = new Promise((arg0) => {
                          closure_0 = arg0;
                          closure_1_1.measureLayout(closure_1_0, (x) => {
                            const obj = { x };
                            return closure_0(obj);
                          });
                        });
                        const items = [promise, promise3, promise4];
                        c2 = 1;
                        ref = 1;
                        const obj3 = { value: Promise.all(items), done: false };
                        return obj3;
                      }
                    }
                  }
                } else if (arg0 === 1) {
                  ref = 3;
                  throw value;
                } else if (arg0 === 2) {
                  ref = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  closure_2 = value;
                  ref = ref(closure_2, 3);
                  ref2 = ref[0];
                  scrollWidth = ref2.scrollWidth;
                  scrollPageX = ref2.scrollPageX;
                  styles = ref[1];
                  width = styles.width;
                  pageX = styles.pageX;
                  x = ref[2].x;
                  animated = !useReducedMotion.useReducedMotion;
                  if (ref2.current) {
                    if (pageX < scrollPageX) {
                      const current2 = ref.current;
                      if (current2 != null) {
                        const point = { x: x - 16, y: 0, animated };
                        current2.scrollTo(point);
                      }
                    } else if (pageX + width > scrollPageX + scrollWidth) {
                      const current3 = ref.current;
                      if (current3 != null) {
                        const point1 = { x: x + width - scrollWidth + 16, y: 0, animated };
                        current3.scrollTo(point1);
                      }
                    }
                  } else {
                    const current = ref.current;
                    if (current != null) {
                      const point2 = { x: x + width / 2 - scrollWidth / 2, y: 0, animated };
                      current.scrollTo(point2);
                    }
                    ref2.current = true;
                    ref = 3;
                    return { value: "IconComponent", done: null };
                  }
                }
                ref = 3;
                return { value: "IconComponent", done: null };
              } catch (tmp29) {
                ref = 3;
                throw tmp29;
              }
            }
          }),
          0,
        );
      }, items1);
      message(setSelectedAnswerId[21]);
      let tmp9 = null;
      if (null != message.poll) {
        let obj = { children: items2 };
        let obj2 = {
          style: tmp.headerText,
          variant: "redesign/heading-18/bold",
          color: "mobile-text-heading-primary",
          accessibilityRole: "header",
          children: message.poll.question.text,
        };
        items2 = [closure_14(tmp5(setSelectedAnswerId[18]).Text, obj2), ,];
        let obj3 = {
          style: tmp.subheaderText,
          variant: "text-md/medium",
          color: "text-default",
          children: intl.format(tmp5(setSelectedAnswerId[17]).t.XRkuof, obj4),
        };
        const Text = tmp5(tmp6[18]).Text;
        intl = tmp5(tmp6[17]).intl;
        obj4 = { count: memo };
        items2[1] = closure_14(Text, obj3);
        const obj5 = { gesture: tmp8, children: closure_14(closure_8, obj11) };
        ({ answerScroll: obj6.style, answerScrollContainer: obj6.contentContainerStyle } = tmp);
        obj11 = {
          ref,
          style: null,
          contentContainerStyle: null,
          horizontal: true,
          showsHorizontalScrollIndicator: false,
          accessibilityRole: "tablist",
          accessibilityLabel: intl2.string(message(setSelectedAnswerId[17]).t["qbir+4"]),
          children: answers.map((answer) => {
            let obj2;
            const tmp = selectedAnswerId === String(answer.answer_id);
            let tmp4;
            if (tmp) {
              tmp4 = closure_4;
            }
            const obj = {
              ref: tmp4,
              answer,
              selected: tmp,
              reaction: obj2.reactionForId(message.reactions, String(answer.answer_id)),
              setSelectedAnswerId,
            };
            obj2 = formatPollMessageChatData;
            return authStore2(closure_18, obj, answer.answer_id);
          }),
        };
        const GestureDetector = tmp5(tmp6[21]).GestureDetector;
        intl2 = tmp5(tmp6[17]).intl;
        answers = message.poll.answers;
        items2[2] = closure_14(GestureDetector, obj5);
        tmp9 = closure_15(closure_7, obj);
      }
      return tmp9;
    };
const __initData = {
  code: "function PollVotesActionSheetTsx1(){const{opacity}=this.__closure;return{flex:1,opacity:opacity.get(),marginBottom:32};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let items;
      let tmp5Result;
      const obj = react2;
      const cResult = obj.c(14);
      const tmp4 = closure_16();
      const noResultsContainer = tmp4.noResultsContainer;
      const tmp6 = useThemeDefault();
      const obj2 = shared;
      if (obj2.isThemeDark(tmp6)) {
        tmp5Result = AssetRegistryDefault;
      } else {
        tmp5Result = AssetRegistryDefault2;
      }
      if (cResult[0] === tmp4.noResultsImage) {
        let tmp8;
        let tmp11;
        let tmp13;
        let tmp16;
        let tmp18;
        if (cResult[1] === tmp5Result) {
          tmp8 = cResult[2];
        }
        const _Symbol = Symbol;
        const noResultsTitle = tmp4.noResultsTitle;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl3.intl;
          const stringResult = intl.string(intl3.t.vhQK3o);
          cResult[3] = stringResult;
          tmp11 = stringResult;
        } else {
          tmp11 = cResult[3];
        }
        if (cResult[4] !== tmp4.noResultsTitle) {
          const obj3 = {
            style: noResultsTitle,
            variant: "heading-md/bold",
            color: "mobile-text-heading-primary",
            children: tmp11,
          };
          const tmp15 = authStore2(Text_Text.Text, obj3);
          cResult[4] = tmp4.noResultsTitle;
          cResult[5] = tmp15;
          tmp13 = tmp15;
        } else {
          tmp13 = cResult[5];
        }
        const _Symbol2 = Symbol;
        const noResultsSubtitle = tmp4.noResultsSubtitle;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = intl3.intl;
          const stringResult1 = intl2.string(intl3.t.bwytdh);
          cResult[6] = stringResult1;
          tmp16 = stringResult1;
        } else {
          tmp16 = cResult[6];
        }
        if (cResult[7] !== tmp4.noResultsSubtitle) {
          const obj4 = {
            style: noResultsSubtitle,
            variant: "text-sm/semibold",
            color: "text-default",
            children: tmp16,
          };
          const tmp20 = authStore2(Text_Text.Text, obj4);
          cResult[7] = tmp4.noResultsSubtitle;
          cResult[8] = tmp20;
          tmp18 = tmp20;
        } else {
          tmp18 = cResult[8];
        }
        if (cResult[9] === tmp4.noResultsContainer) {
          if (cResult[10] === tmp8) {
            if (cResult[11] === tmp13) {
              let tmp21;
              if (cResult[12] === tmp18) {
                tmp21 = cResult[13];
              }
              return tmp21;
            }
          }
        }
        const obj5 = { style: noResultsContainer, children: items };
        items = [tmp8, tmp13, tmp18];
        const tmp24 = closure_15(metroImportDefault, obj5);
        cResult[9] = tmp4.noResultsContainer;
        cResult[10] = tmp8;
        cResult[11] = tmp13;
        cResult[12] = tmp18;
        cResult[13] = tmp24;
        tmp21 = tmp24;
      }
      const obj6 = { style: tmp4.noResultsImage, source: tmp5Result };
      const tmp9 = authStore2(metroRequire, obj6);
      cResult[0] = tmp4.noResultsImage;
      cResult[1] = tmp5Result;
      cResult[2] = tmp9;
      tmp8 = tmp9;
    }
  : () => {
      let intl;
      let intl2;
      let items;
      let tmp2Result;
      const tmp = closure_16();
      const obj = { style: tmp.noResultsContainer, children: items };
      const obj2 = { style: tmp.noResultsImage, source: tmp2Result };
      const tmp4 = useThemeDefault();
      const obj3 = shared;
      if (obj3.isThemeDark(tmp4)) {
        tmp2Result = AssetRegistryDefault;
      } else {
        tmp2Result = AssetRegistryDefault2;
      }
      items = [authStore2(metroRequire, obj2), ,];
      const obj4 = {
        style: tmp.noResultsTitle,
        variant: "heading-md/bold",
        color: "mobile-text-heading-primary",
        children: intl.string(intl3.t.vhQK3o),
      };
      const Text = Text_Text.Text;
      intl = intl3.intl;
      items[1] = authStore2(Text, obj4);
      const obj5 = {
        style: tmp.noResultsSubtitle,
        variant: "text-sm/semibold",
        color: "text-default",
        children: intl2.string(intl3.t.bwytdh),
      };
      const Text2 = Text_Text.Text;
      intl2 = intl3.intl;
      items[2] = authStore2(Text2, obj5);
      return closure_15(metroImportDefault, obj);
    };
let result = size.fileFinishedImporting("modules/polls/native/PollVotesActionSheet.tsx");

export default function PollVotesActionSheet(channelId) {
  let items3;
  let obj5;
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  let selectedAnswerId;
  let stateFromStores;
  const initialAnswerId = channelId.initialAnswerId;
  const tmp = closure_16();
  const tmp3 = messageId(selectedAnswerId[23]);
  const analyticsLocations = tmp3(messageId(selectedAnswerId[40]).POLL_VOTES).analyticsLocations;
  const tmp4 = stateFromStores(react.useState(initialAnswerId), 2);
  selectedAnswerId = tmp4[0];
  const items = [MessageStore];
  const tmp6 = tmp4[1];
  const obj2 = channelId(selectedAnswerId[15]);
  stateFromStores = obj2.useStateFromStores(items, () => MessageStore.getMessage(channelId, messageId));
  let closure_4 = tmp9;
  const items1 = [null != stateFromStores && null != stateFromStores.poll];
  const effect = react.useEffect(() => {
    if (!closure_4) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet("PollVotesActionSheet");
    }
  }, items1);
  let reactions;
  const useMemo = react.useMemo;
  if (stateFromStores != null) {
    reactions = stateFromStores.reactions;
  }
  const items2 = [reactions, selectedAnswerId];
  const memo = useMemo(() => {
    let reactions;
    if (stateFromStores != null) {
      reactions = stateFromStores.reactions;
    }
    if (null != reactions) {
      const obj = formatPollMessageChatData;
      return obj.reactionForId(stateFromStores.reactions, first);
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
    const obj3 = { value: analyticsLocations, children: null };
    const AnalyticsLocationProvider = tmp7(tmp2[23]).AnalyticsLocationProvider;
    const obj4 = { scrollable: true, header: closure_14(closure_19, obj5), children: null };
    obj5 = { message: stateFromStores, selectedAnswerId, setSelectedAnswerId: tmp6 };
    BottomSheet = tmp7(tmp2[42]).BottomSheet;
    let text;
    const obj6 = { style: tmp.answerName, variant: "text-sm/semibold", color: "text-default", children: items3 };
    const Text = tmp7(tmp2[18]).Text;
    if (found != null) {
      text = found.poll_media.text;
    }
    items3 = [text, ,];
    items3[1] = " - ";
    const intl = tmp7(tmp2[17]).intl;
    const obj7 = { count: num };
    items3[2] = intl.format(channelId(selectedAnswerId[17]).t["SG/Cyy"], obj7);
    const items4 = [closure_15(Text, obj6)];
    if (null != memo) {
      let tmp14Result;
      if (num > 0) {
        const obj8 = { channelId, messageId, reaction: memo };
        tmp14Result = closure_14(VotersList, obj8);
      }
      items4[1] = tmp14Result;
      obj4.children = items4;
      obj3.children = closure_15(BottomSheet, obj4);
      return closure_14(AnalyticsLocationProvider, obj3);
    }
    tmp14Result = closure_14(closure_22, {});
  } else {
    return null;
  }
}
