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
import _modDef11854 from "../../../../_runtime/metro/11854__.js";
import _modDef11855 from "../../../../_runtime/metro/11855__.js";
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
    let obj2 = {
      style: tmp.headerText,
      variant: "redesign/heading-18/bold",
      color: "mobile-text-heading-primary",
      accessibilityRole: "header",
      children: message.poll.question.text,
    };
    const items2 = [closure_14(tmp5(tmp6[17]).Text, obj2), ,];
    let obj3 = { style: tmp.subheaderText, variant: "text-md/medium", color: "text-default", children: null };
    const intl = tmp5(tmp6[15]).intl;
    let obj4 = { count: memo };
    obj3.children = intl.format(tmp5(tmp6[15]).t.XRkuof, obj4);
    items2[1] = closure_14(tmp5(tmp6[17]).Text, obj3);
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
    const intl2 = tmp5(tmp6[15]).intl;
    obj11.accessibilityLabel = intl2.string(tmp5(tmp6[15]).t["qbir+4"]);
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
      return closure_2_14(closure_18, obj, answer.answer_id);
    });
    obj5.children = closure_14(closure_8, obj11);
    items2[2] = closure_14(tmp5(tmp6[19]).GestureDetector, obj5);
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
  const tmp = closure_16();
  const tmp2 = messageId;
  let obj = channelId(analyticsLocations[23]);
  const reactorsOnScrollNative = obj.useReactorsOnScrollNative({
    channelId,
    messageId,
    reactionSelected: reaction,
    reactors,
    reactorsHasMore: tmp4.hasMore,
    reactionType: channelId(analyticsLocations[24]).ReactionTypes.VOTE,
  });
  let obj2 = {
    channelId,
    messageId,
    reactionSelected: reaction,
    reactors,
    reactorsHasMore: tmp4.hasMore,
    reactionType: channelId(analyticsLocations[24]).ReactionTypes.VOTE,
  };
  const items = [ChannelStore];
  const stateFromStores = channelId(analyticsLocations[12]).useStateFromStores(items, () =>
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
    let nickname = messageId(analyticsLocations[25]).getNickname(guild_id, id, item);
    if (nickname == null) {
      nickname = messageId(analyticsLocations[26]).getGlobalName(item);
      const tmpResult = messageId(analyticsLocations[26]);
    }
    const obj = messageId(analyticsLocations[25]);
    const userTag = messageId(analyticsLocations[26]).getUserTag(item);
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
    obj3.size = channelId(analyticsLocations[28]).AvatarSizes.SMALL;
    obj2.icon = closure_1_14(channelId(analyticsLocations[28]).Avatar, obj3);
    let tmp9Result = nickname;
    if (nickname == null) {
      const obj4 = { user: item };
      tmp9Result = closure_1_14(messageId(analyticsLocations[29]), obj4);
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
    return closure_1_14(channelId(analyticsLocations[27]).TableRow, obj2);
  }, items1);
  let obj3 = channelId(analyticsLocations[12]);
  let obj4 = sharedValue;
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
  const obj6 = {
    style: animatedStyle,
    children: closure_14(channelId(analyticsLocations[33]).BottomSheetFlashList, {
      contentContainerStyle: tmp.list,
      data: reactors,
      renderItem: callback,
      onScroll: reactorsOnScrollNative,
    }),
  };
  return closure_14(tmp2(analyticsLocations[31]).View, obj6);
}
function NoResults() {
  const tmp = closure_16();
  const obj = { style: tmp.noResultsContainer, children: null };
  const obj2 = { style: tmp.noResultsImage, source: null };
  const tmp4 = useThemeDefault();
  if (obj3.isThemeDark(tmp4)) {
    let tmp2Result = _modDef11854;
  } else {
    tmp2Result = _modDef11855;
  }
  obj2.source = tmp2Result;
  const items = [closure_1_14(timestampProducer, obj2), ,];
  const obj4 = {
    style: tmp.noResultsTitle,
    variant: "heading-md/bold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = util.intl;
  obj4.children = intl.string(util.t.vhQK3o);
  items[1] = closure_1_14(Text_Text.Text, obj4);
  const obj5 = { style: tmp.noResultsSubtitle, variant: "text-sm/semibold", color: "text-default", children: null };
  const intl2 = util.intl;
  obj5.children = intl2.string(util.t.bwytdh);
  items[2] = closure_1_14(Text_Text.Text, obj5);
  obj.children = items;
  return __initData(React5, obj);
}
get_ActivityIndicator = fn(17);
({ Image: metroRequire, View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4636);
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
  obj2.accessibilityLabel = intl.formatToPlainString(util.t.wqBc7A, { numVotes: num, option: answer.poll_media.text });
  let tmp8 = null;
  if (null != answer.poll_media.emoji) {
    const obj3 = { style: tmp.answerEmoji, emoji: answer.poll_media.emoji };
    tmp8 = closure_1_14(PollEmoji, obj3);
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
    tmp11 = closure_1_14(Text_Text.Text, obj4);
  }
  items2[1] = tmp11;
  const obj5 = { variant: "text-sm/semibold", color: str, lineClamp: 1, children: null };
  const items3 = [" ", "(", num.toLocaleString(), ")"];
  obj5.children = items3;
  items2[2] = __initData(Text_Text.Text, obj5);
  obj2.children = items2;
  return __initData(Pressables.PressableHighlight, obj2);
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
  const tmp4 = stateFromStores(noop.useState(channelId.initialAnswerId), 2);
  const selectedAnswerId = tmp4[0];
  const tmp3 = messageId(selectedAnswerId[21]);
  const items = [MessageStore];
  stateFromStores = channelId(selectedAnswerId[12]).useStateFromStores(items, () =>
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
    const obj3 = { value: tmp3(messageId(selectedAnswerId[38]).POLL_VOTES).analyticsLocations, children: null };
    const obj4 = { scrollable: true, header: null, children: null };
    const obj5 = { message: stateFromStores, selectedAnswerId, setSelectedAnswerId: tmp4[1] };
    obj4.header = closure_14(PollVotesHeader, obj5);
    const obj6 = { style: tmp.answerName, variant: "text-sm/semibold", color: "text-default", children: null };
    let text;
    if (found != null) {
      text = found.poll_media.text;
    }
    const items3 = [text, " - "];
    const intl = tmp6(tmp2[15]).intl;
    const obj7 = { count: num };
    items3[2] = intl.format(tmp6(tmp2[15]).t["SG/Cyy"], obj7);
    obj6.children = items3;
    const items4 = [closure_15(tmp6(tmp2[17]).Text, obj6)];
    if (null != memo) {
      if (num > 0) {
        const obj8 = { channelId, messageId, reaction: memo };
        let tmp13Result = closure_14(VotersList, obj8);
      }
      items4[1] = tmp13Result;
      obj4.children = items4;
      obj3.children = closure_15(tmp6(tmp2[40]).BottomSheet, obj4);
      return closure_14(tmp6(tmp2[21]).AnalyticsLocationProvider, obj3);
    }
    tmp13Result = closure_14(NoResults, {});
  } else {
    return null;
  }
  const obj2 = channelId(selectedAnswerId[12]);
}
