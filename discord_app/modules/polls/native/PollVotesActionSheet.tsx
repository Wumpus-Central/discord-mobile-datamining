// discord_app/modules/polls/native/PollVotesActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import EmojiDefault from "../../emojis/native/Emoji.tsx";
import PollsUtils from "../PollsUtils.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import formatPollMessageChatData from "../chat/formatPollMessageChatData.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import EmojiStore from "../../emojis/EmojiStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import MessageStore from "../../../stores/MessageStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
function PollEmoji(emoji) {
  emoji = emoji.emoji;
  const tmp = closure_16();
  let obj = emoji(504);
  const items = [EmojiStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (null != emoji.id) {
      let animated = tmp.animated;
      if (!animated) {
        const customEmojiById = EmojiStore.getCustomEmojiById(tmp.id);
        let flag;
        if (customEmojiById != null) {
          flag = customEmojiById.animated;
        }
        if (flag == null) {
          flag = false;
        }
        animated = flag;
      }
      const obj = { id: tmp.id, animated, size: 16 };
      return obj.getEmojiURL(obj);
    }
  });
  obj = {
    style: emoji.style,
    src: stateFromStores,
    name: emoji.name,
    textEmojiStyle: tmp.emojiText,
    fastImageStyle: tmp.emojiImage,
  };
  return closure_14(EmojiDefault, obj);
}
function PollVotesHeader(message) {
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
      asyncGeneratorStep(async (arg0, value) => {
        if (v3 === 2) {
          v3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj = { value, done: true };
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
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
                obj = { value, done: true };
                return obj;
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
                    let promise = new Promise((arg0) => {
                      closure_0 = arg0;
                      closure_1_0.measure((arg0, arg1, scrollWidth, arg3, scrollPageX) =>
                        closure_0({ scrollWidth, scrollPageX }),
                      );
                    });
                    promise = new Promise((arg0) => {
                      closure_0 = arg0;
                      closure_1_1.measure((arg0, arg1, width, arg3, pageX) => closure_0({ width, pageX }));
                    });
                    const promise1 = new Promise((arg0) => {
                      closure_0 = arg0;
                      closure_1_1.measureLayout(closure_1_0, (x) => closure_0({ x }));
                    });
                    const items = [promise, promise, promise1];
                    c2 = 1;
                    v3 = 1;
                    const obj1 = { value: Promise.all(items), done: false };
                    return obj1;
                  }
                }
                v3 = 3;
              }
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj2 = { value, done: true };
              return obj2;
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
                return { value: "HermesInternal", done: null };
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
  message(setSelectedAnswerId[19]);
  let tmp9 = null;
  if (null != message.poll) {
    let obj = { children: null };
    obj = {
      style: tmp.headerText,
      variant: "redesign/heading-18/bold",
      color: "mobile-text-heading-primary",
      accessibilityRole: "header",
      children: message.poll.question.text,
    };
    const items2 = [closure_14(tmp5(tmp6[17]).Text, obj), ,];
    obj = { style: tmp.subheaderText, variant: "text-md/medium", color: "text-default", children: null };
    const intl = tmp5(tmp6[15]).intl;
    let obj1 = { count: memo };
    obj.children = intl.format(tmp5(tmp6[15]).t.XRkuof, obj1);
    items2[1] = closure_14(tmp5(tmp6[17]).Text, obj);
    let obj2 = { gesture: tmp8, children: null };
    const obj3 = {
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
    const intl2 = tmp5(tmp6[15]).intl;
    obj3.accessibilityLabel = intl2.string(tmp5(tmp6[15]).t["qbir+4"]);
    const answers = message.poll.answers;
    obj3.children = answers.map((answer) => {
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
      return closure_2_14(closure_18, obj, answer.answer_id);
    });
    obj2.children = closure_14(closure_8, obj3);
    items2[2] = closure_14(tmp5(tmp6[19]).GestureDetector, obj2);
    obj.children = items2;
    tmp9 = closure_15(closure_7, obj);
  }
  return tmp9;
}
function VotersList(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const reaction = channelId.reaction;
  let analyticsLocations;
  let sharedValue;
  analyticsLocations = messageId(analyticsLocations[21])().analyticsLocations;
  const tmp4 = messageId(analyticsLocations[22])({ channelId, messageId, reaction });
  const reactors = tmp4.reactors;
  channelId(analyticsLocations[23]);
  let obj = {
    channelId,
    messageId,
    reactionSelected: reaction,
    reactors,
    reactorsHasMore: tmp4.hasMore,
    reactionType: channelId(analyticsLocations[24]).ReactionTypes.VOTE,
  };
  const reactorsOnScrollNative = obj.useReactorsOnScrollNative(obj);
  const tmp = closure_16();
  const tmp2 = messageId;
  const items = [ChannelStore];
  const stateFromStores = channelId(analyticsLocations[12]).useStateFromStores(items, () =>
    ChannelStore.getChannel(channelId),
  );
  const items1 = [stateFromStores, reactors.length, channelId, messageId, analyticsLocations];
  const callback = sharedValue.useCallback((item) => {
    item = item.item;
    const index = item.index;
    let obj = messageId(analyticsLocations[25]);
    let guild_id;
    if (stateFromStores != null) {
      guild_id = tmp3.guild_id;
    }
    let id;
    if (stateFromStores != null) {
      id = tmp3.id;
    }
    let nickname = obj.getNickname(guild_id, id, item);
    if (nickname == null) {
      let tmpResult = tmp(tmp2[26]);
      nickname = tmpResult.getGlobalName(item);
    }
    tmpResult = tmp(tmp2[26]);
    const userTag = tmpResult.getUserTag(item);
    user = user.getUser(item.id);
    obj = {
      start: 0 === index,
      end: reactors.length - 1 === index,
      icon: null,
      label: null,
      subLabel: null,
      onPress: null,
    };
    let guild_id1;
    if (stateFromStores != null) {
      guild_id1 = tmp3.guild_id;
    }
    obj = { guildId: guild_id1, user: null, size: null };
    if (user == null) {
      user = item;
    }
    obj.user = user;
    obj.size = channelId(analyticsLocations[28]).AvatarSizes.SMALL;
    obj.icon = closure_1_14(channelId(analyticsLocations[28]).Avatar, obj);
    let tmp9Result = nickname;
    if (nickname == null) {
      const obj1 = { user: item };
      tmp9Result = tmp9(tmp(tmp2[29]), obj1);
    }
    obj.label = tmp9Result;
    let tmp13 = null;
    if (null != nickname) {
      tmp13 = userTag;
    }
    obj.subLabel = tmp13;
    obj.onPress = function onPress() {
      return showUserProfileActionSheetDefault({
        userId: item.id,
        localUser: item,
        sourceAnalyticsLocations: analyticsLocations,
        channelId,
        messageId,
      });
    };
    return closure_1_14(channelId(analyticsLocations[27]).TableRow, obj);
  }, items1);
  const obj3 = channelId(analyticsLocations[12]);
  const obj4 = sharedValue;
  let num = 1;
  if (0 === reactors.length) {
    num = 0;
  }
  sharedValue = channelId(analyticsLocations[31]).useSharedValue(num);
  const items2 = [sharedValue, reactors.length];
  const effect = obj4.useEffect(() => {
    if (0 !== reactors.length) {
      const result = sharedValue.set(timing.withTiming(1, { duration: 200 }));
    } else {
      const result1 = sharedValue.set(0);
    }
  }, items2);
  const obj5 = channelId(analyticsLocations[31]);
  class I {
    constructor() {
      obj = { flex: 1, opacity: closure_5.get(), marginBottom: 32 };
      return obj;
    }
  }
  I.__closure = { opacity: sharedValue };
  I.__workletHash = 8593850252158;
  I.__initData = __initData;
  const animatedStyle = channelId(analyticsLocations[31]).useAnimatedStyle(I);
  obj = {
    style: animatedStyle,
    children: closure_14(channelId(analyticsLocations[33]).BottomSheetFlashList, {
      contentContainerStyle: tmp.list,
      data: reactors,
      renderItem: callback,
      onScroll: reactorsOnScrollNative,
    }),
  };
  return closure_14(tmp2(analyticsLocations[31]).View, obj);
}
function NoResults() {
  const tmp = closure_16();
  let obj = { style: tmp.noResultsContainer, children: null };
  obj = { style: tmp.noResultsImage, source: null };
  const tmp4 = useThemeDefault();
  const tmp5 = __initData;
  const tmp6 = React5;
  const tmp8 = timestampProducer;
  if (obj3.isThemeDark(tmp4)) {
    let tmp2Result = tmp2(11724);
  } else {
    tmp2Result = tmp2(11725);
  }
  obj.source = tmp2Result;
  const items = [closure_1_14(tmp8, obj), ,];
  obj = { style: tmp.noResultsTitle, variant: "heading-md/bold", color: "mobile-text-heading-primary", children: null };
  const intl = tmp9(1114).intl;
  obj.children = intl.string(util.t.vhQK3o);
  items[1] = closure_1_14(Text_Text.Text, obj);
  const obj1 = { style: tmp.noResultsSubtitle, variant: "text-sm/semibold", color: "text-default", children: null };
  const intl2 = tmp9(1114).intl;
  obj1.children = intl2.string(util.t.bwytdh);
  items[2] = closure_1_14(Text_Text.Text, obj1);
  obj.children = items;
  return tmp5(tmp6, obj);
}
get_ActivityIndicator = fn(17);
({ Image: metroRequire, View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
fn(4560);
let obj = {
  headerText: { textAlign: "center", paddingHorizontal: 16 },
  subheaderText: { textAlign: "center", marginTop: 2, paddingHorizontal: 16 },
  answerScroll: { marginTop: 24 },
  answerScrollContainer: { gap: 4, paddingHorizontal: 16 },
  answerName: { marginTop: 16, marginHorizontal: 16, marginBottom: 8 },
  list: { paddingHorizontal: 16 },
  answerButton: null,
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
obj = { padding: 8, flexDirection: "row", alignItems: "center", borderRadius: nativeDefault.radii.xs, maxWidth: 200 };
obj.answerButton = obj;
const createStyles = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj.answerSelected = createStyles;
obj.answerEmoji = { marginRight: 8 };
obj.answerText = { flexShrink: 1 };
obj.emojiText = { fontSize: 16 };
obj.emojiImage = { height: 16, width: 16, flexShrink: 0 };
obj.noResultsContainer = { flexDirection: "column", alignItems: "center", paddingHorizontal: 16 };
obj.noResultsImage = { marginTop: 32, width: 138 };
obj.noResultsTitle = { marginTop: 16, textAlign: "center" };
obj.noResultsSubtitle = { marginTop: 4, textAlign: "center" };
let closure_16 = createStyles.createStyles(obj);
let closure_18 = noop.forwardRef((answer, ref) => {
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
  let obj = { numVotes: num, option: answer.poll_media.text };
  obj = {
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
  obj.style = items1;
  obj.accessibilityState = { selected };
  obj.accessibilityLabel = intl.formatToPlainString(util.t.wqBc7A, obj);
  let tmp8 = null;
  if (null != answer.poll_media.emoji) {
    obj = { style: tmp.answerEmoji, emoji: answer.poll_media.emoji };
    tmp8 = closure_1_14(PollEmoji, obj);
  }
  const items2 = [tmp8, ,];
  let tmp11 = null;
  if (null != answer.poll_media.text) {
    const obj1 = {
      style: tmp.answerText,
      variant: "text-sm/semibold",
      color: str,
      lineClamp: 1,
      children: answer.poll_media.text,
    };
    tmp11 = closure_1_14(tmp3(4556).Text, obj1);
  }
  items2[1] = tmp11;
  const obj2 = { variant: "text-sm/semibold", color: str, lineClamp: 1, children: null };
  const items3 = [" ", "(", num.toLocaleString(), ")"];
  obj2.children = items3;
  items2[2] = __initData(Text_Text.Text, obj2);
  obj.children = items2;
  return __initData(Pressables.PressableHighlight, obj);
});
const __initData = {
  code: "function PollVotesActionSheetTsx1(){const{opacity}=this.__closure;return{flex:1,opacity:opacity.get(),marginBottom:32};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/polls/native/PollVotesActionSheet.tsx");

export default function PollVotesActionSheet(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  let stateFromStores;
  const tmp = closure_16();
  let obj = noop;
  const tmp4 = stateFromStores(noop.useState(channelId.initialAnswerId), 2);
  const selectedAnswerId = tmp4[0];
  let obj1 = channelId(selectedAnswerId[12]);
  const items = [MessageStore];
  stateFromStores = obj1.useStateFromStores(items, () => MessageStore.getMessage(channelId, messageId));
  closure_4 = tmp8;
  const items1 = [null != stateFromStores && null != stateFromStores.poll];
  const effect = obj.useEffect(() => {
    if (!closure_4) {
      ActionSheetActionCreatorsDefault.hideActionSheet("PollVotesActionSheet");
    }
  }, items1);
  let reactions;
  if (stateFromStores != null) {
    reactions = stateFromStores.reactions;
  }
  const items2 = [reactions, selectedAnswerId];
  const memo = obj.useMemo(() => {
    let reactions;
    if (stateFromStores != null) {
      reactions = tmp.reactions;
    }
    if (null != reactions) {
      return formatPollMessageChatData.reactionForId(tmp.reactions, first);
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
    obj = { value: tmp3(messageId(selectedAnswerId[38]).POLL_VOTES).analyticsLocations, children: null };
    obj = { scrollable: true, header: null, children: null };
    obj1 = { message: stateFromStores, selectedAnswerId, setSelectedAnswerId: tmp4[1] };
    obj.header = closure_14(PollVotesHeader, obj1);
    const obj2 = { style: tmp.answerName, variant: "text-sm/semibold", color: "text-default", children: null };
    let text;
    if (found != null) {
      text = found.poll_media.text;
    }
    const items3 = [text, " - "];
    const intl = tmp6(tmp2[15]).intl;
    const obj3 = { count: num };
    items3[2] = intl.format(tmp6(tmp2[15]).t["SG/Cyy"], obj3);
    obj2.children = items3;
    const items4 = [closure_15(tmp6(tmp2[17]).Text, obj2)];
    if (null != memo) {
      if (num > 0) {
        const obj4 = { channelId, messageId, reaction: memo };
        let tmp13Result = tmp13(VotersList, obj4);
      }
      items4[1] = tmp13Result;
      obj.children = items4;
      obj.children = tmp14(tmp6(tmp2[40]).BottomSheet, obj);
      return tmp13(tmp6(tmp2[21]).AnalyticsLocationProvider, obj);
    }
    tmp13Result = tmp13(NoResults, {});
  } else {
    return null;
  }
}
