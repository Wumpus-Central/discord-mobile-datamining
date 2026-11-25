// === Module 12179: PollVotesActionSheet ===

// Module 12179 (PollVotesActionSheet)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1412 */;
import useThemeDefault from "useTheme" /* 5221 */;
import timing_timing from "timing/timing" /* 5222 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import Text_Text from "Text/Text" /* 5603 */;
import FastImageDefault from "FastImage" /* 5699 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 6102 */;
import MarkupUtilsDefault from "MarkupUtils" /* 7036 */;
import EmojiDefault from "Emoji" /* 7457 */;
import PollTextUtils from "PollTextUtils" /* 12180 */;
import PollsUtils from "PollsUtils" /* 12181 */;
import chat_formatPollMessageChatData from "chat/formatPollMessageChatData" /* 12184 */;
import _modDef12201 from "module_12201" /* 12201 */;
import _modDef12202 from "module_12202" /* 12202 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5013 */;
import EmojiStore from "EmojiStore" /* 6852 */;
import ChannelStore from "ChannelStore" /* 4861 */;
import MessageStore from "MessageStore" /* 6360 */;
import UserStore from "UserStore" /* 1386 */;

require = fn;
function PollEmoji(emoji) {
  emoji = emoji.emoji;
  const tmp = closure_15();
  items = [EmojiStore];
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
  return closure_13(EmojiDefault, { style: emoji.style, src: stateFromStores, name: emoji.name, textEmojiStyle: tmp.emojiText, fastImageStyle: tmp.emojiImage });
}
function PollAnswerButton(answer) {
  answer = answer.answer;
  ({ reaction, selected, setSelectedAnswerId } = answer);
  let str;
  c3 = undefined;
  const tmp = closure_15();
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
  items = [setSelectedAnswerId, answer.answer_id];
  str = "text-default";
  const callback = noop.useCallback(() => {
    setSelectedAnswerId(String(answer.answer_id));
  }, items);
  if (selected) {
    str = "interactive-text-active";
  }
  const text = answer.poll_media.text;
  c3 = text;
  const items1 = [text];
  const items2 = [text, str];
  const memo = noop.useMemo(() => {
    let pollPlainText;
    if (null != c3) {
      pollPlainText = PollTextUtils.getPollPlainText(tmp);
    }
    return pollPlainText;
  }, items1);
  const memo1 = noop.useMemo(() => MarkupUtilsDefault.parsePoll(c3, true, { textVariant: "body-sm/semibold", textColor: str, noStyleAndInteraction: true }), items2);
  const intl = answer(str[17]).intl;
  const obj2 = { ref: answer.ref, onPress: callback, style: null, accessibilityRole: "tab", accessibilityState: null, accessibilityLabel: null, children: null };
  const items3 = [tmp.answerButton, ];
  let answerSelected;
  if (selected) {
    answerSelected = tmp.answerSelected;
  }
  items3[1] = answerSelected;
  obj2.style = items3;
  obj2.accessibilityState = { selected };
  obj2.accessibilityLabel = intl.formatToPlainString(answer(str[17]).t.wqBc7A, { numVotes: num, option: memo });
  let tmp10 = null;
  if (null != answer.poll_media.emoji) {
    const obj3 = { style: tmp.answerEmoji, emoji: answer.poll_media.emoji };
    tmp10 = closure_13(PollEmoji, obj3);
  }
  const items4 = [tmp10, , ];
  let tmp13 = null;
  if (null != answer.poll_media.text) {
    const obj4 = { style: tmp.answerText, variant: "body-sm/semibold", color: str, lineClamp: 1, children: memo1 };
    tmp13 = closure_13(tmp5(tmp6[19]).Text, obj4);
  }
  items4[1] = tmp13;
  const obj5 = { variant: "body-sm/semibold", color: str, lineClamp: 1, children: null };
  const items5 = [" ", "(", num.toLocaleString(), ")"];
  obj5.children = items5;
  items4[2] = closure_14(answer(str[19]).Text, obj5);
  obj2.children = items4;
  return closure_14(answer(str[18]).PressableHighlight, obj2);
}
function PollVotesHeader(message) {
  message = message.message;
  const selectedAnswerId = message.selectedAnswerId;
  const setSelectedAnswerId = message.setSelectedAnswerId;
  c3 = undefined;
  let ref;
  noop = undefined;
  closure_6 = undefined;
  let tmp = closure_15();
  const poll = message.poll;
  let text;
  if (poll != null) {
    text = poll.question.text;
  }
  c3 = text;
  items = [text];
  const items1 = [message.reactions];
  const memo = noop.useMemo(() => MarkupUtilsDefault.parsePoll(c3, true, { textVariant: "heading-md/semibold", textColor: "mobile-text-heading-primary" }), items);
  const memo1 = noop.useMemo(() => PollsUtils.getTotalVotes(message.reactions), items1);
  ref = noop.useRef(null);
  noop = noop.useRef(null);
  closure_6 = noop.useRef(false);
  const items2 = [selectedAnswerId];
  const effect = noop.useEffect(() => {
    const timerId = setTimeout(asyncGeneratorStep(async () => {
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
                    closure_1_0.measure((arg0, arg1, scrollWidth, arg3, scrollPageX) => closure_0({ scrollWidth, scrollPageX }));
                  });
                  const promise3 = new Promise((arg0) => {
                    closure_0 = arg0;
                    closure_1_1.measure((arg0, arg1, width, arg3, pageX) => closure_0({ width, pageX }));
                  });
                  const promise4 = new Promise((arg0) => {
                    closure_0 = arg0;
                    closure_1_1.measureLayout(closure_1_0, (x) => closure_0({ x }));
                  });
                  items = [promise, promise3, promise4];
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
            if (closure_129_6.current) {
              if (pageX >= scrollPageX) {
                if (pageX + width > scrollPageX + scrollWidth) {
                  const current3 = closure_129_4.current;
                  if (current3 != null) {
                    const point = { x: x + width - scrollWidth + 16, y: 0, animated: closure_128_11 };
                    current3.scrollTo(point);
                  }
                }
              }
            } else {
              const current = closure_129_4.current;
              if (current != null) {
                const point1 = { x: x + width / 2 - scrollWidth / 2, y: 0, animated: closure_128_11 };
                current.scrollTo(point1);
              }
              closure_129_6.current = true;
              v3 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          }
          const current2 = closure_129_4.current;
          if (current2 != null) {
            const point2 = { x: x - 16, y: 0, animated: closure_128_11 };
            current2.scrollTo(point2);
          }
        } catch (tmp36) {
          v3 = tmp;
          throw tmp36;
        }
      }
    }), 0);
  }, items2);
  message(setSelectedAnswerId[21]);
  let tmp11 = null;
  if (null != message.poll) {
    let obj = { children: null };
    let obj2 = { style: tmp.headerText, variant: "heading-md/semibold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: memo };
    const items3 = [closure_13(tmp7(tmp8[19]).Text, obj2), , ];
    let obj3 = { style: tmp.subheaderText, variant: "body-md/medium", color: "text-default", children: null };
    const intl = tmp7(tmp8[17]).intl;
    let obj4 = { count: memo1 };
    obj3.children = intl.format(tmp7(tmp8[17]).t.XRkuof, obj4);
    items3[1] = closure_13(tmp7(tmp8[19]).Text, obj3);
    const obj5 = { gesture: tmp10, children: null };
    const obj11 = { ref, style: null, contentContainerStyle: null, horizontal: true, showsHorizontalScrollIndicator: false, accessibilityRole: "tablist", accessibilityLabel: null, children: null };
    ({ answerScroll: obj6.style, answerScrollContainer: obj6.contentContainerStyle } = tmp);
    const intl2 = tmp7(tmp8[17]).intl;
    obj11.accessibilityLabel = intl2.string(tmp7(tmp8[17]).t["qbir+4"]);
    const answers = message.poll.answers;
    obj11.children = answers.map((answer) => {
      const tmp = selectedAnswerId === String(answer.answer_id);
      let tmp4;
      if (tmp) {
        tmp4 = closure_5;
      }
      const obj = { ref: tmp4, answer, selected: tmp, reaction: chat_formatPollMessageChatData.reactionForId(message.reactions, String(answer.answer_id)), setSelectedAnswerId };
      return state(PollAnswerButton, obj, answer.answer_id);
    });
    obj5.children = closure_13(closure_7, obj11);
    items3[2] = closure_13(tmp7(tmp8[21]).GestureDetector, obj5);
    obj.children = items3;
    tmp11 = closure_14(closure_6, obj);
  }
  return tmp11;
}
function VotersList(channelId) {
  channelId = channelId.channelId;
  _require = channelId;
  const messageId = channelId.messageId;
  const reaction = channelId.reaction;
  let analyticsLocations;
  let sharedValue;
  analyticsLocations = messageId(analyticsLocations[23])().analyticsLocations;
  const tmp4 = messageId(analyticsLocations[24])({ channelId, messageId, reaction });
  const reactors = tmp4.reactors;
  const tmp = closure_15();
  const tmp2 = messageId;
  let obj = require("MessageReactionsContent");
  const reactorsOnScrollNative = obj.useReactorsOnScrollNative({ channelId, messageId, reactionSelected: reaction, reactors, reactorsHasMore: tmp4.hasMore, reactionType: require("MessageReactionsTypes").ReactionTypes.VOTE });
  let obj2 = { channelId, messageId, reactionSelected: reaction, reactors, reactorsHasMore: tmp4.hasMore, reactionType: require("MessageReactionsTypes").ReactionTypes.VOTE };
  items = [ChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(c0));
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
    const obj2 = { start: 0 === index, end: reactors.length - 1 === index, icon: null, label: null, subLabel: null, onPress: null };
    let guild_id1;
    if (stateFromStores != null) {
      guild_id1 = stateFromStores.guild_id;
    }
    const obj3 = { guildId: guild_id1, user: null, size: null };
    if (user == null) {
      user = item;
    }
    obj3.user = user;
    obj3.size = _undefined(analyticsLocations[30]).AvatarSizes.SMALL;
    obj2.icon = closure_1_13(_undefined(analyticsLocations[30]).Avatar, obj3);
    let tmp9Result = nickname;
    if (nickname == null) {
      const obj4 = { user: item };
      tmp9Result = closure_1_13(messageId(analyticsLocations[31]), obj4);
    }
    obj2.label = tmp9Result;
    let tmp13 = null;
    if (null != nickname) {
      tmp13 = userTag;
    }
    obj2.subLabel = tmp13;
    obj2.onPress = function onPress() {
      return showUserProfileActionSheetDefault({ userId: item.id, localUser: item, sourceAnalyticsLocations: analyticsLocations, channelId, messageId });
    };
    return closure_1_13(_undefined(analyticsLocations[29]).TableRow, obj2);
  }, items1);
  let obj3 = require("initialize");
  let obj4 = sharedValue;
  let num = 1;
  if (0 === reactors.length) {
    num = 0;
  }
  sharedValue = require("module_1653").useSharedValue(num);
  const items2 = [sharedValue, reactors.length];
  const effect = obj4.useEffect(() => {
    if (0 !== reactors.length) {
      const result = sharedValue.set(timing_timing.withTiming(1, { duration: 200 }));
    } else {
      const result1 = sharedValue.set(0);
    }
  }, items2);
  const obj5 = require("module_1653");
  const items3 = [closure_19, sharedValue];
  _require = undefined;
  [tmp11, tmp12] = items3;
  class PollVotesActionSheetTsx1 {
    constructor() {
      obj = { flex: 1, opacity: closure_0.get(), marginBottom: 32 };
      return obj;
    }
  }
  const items4 = [tmp12];
  PollVotesActionSheetTsx1.__closure = items4;
  PollVotesActionSheetTsx1.__workletHash = 11579760846087;
  PollVotesActionSheetTsx1.__initData = tmp11;
  const animatedStyle = require("module_1653").useAnimatedStyle(PollVotesActionSheetTsx1);
  const obj6 = { style: animatedStyle, children: closure_13(require("module_7451").BottomSheetFlashList, { contentContainerStyle: tmp.list, data: reactors, renderItem: callback, onScroll: reactorsOnScrollNative }) };
  return closure_13(tmp2(analyticsLocations[33]).View, obj6);
}
function NoResults() {
  const tmp = closure_15();
  const obj = { style: tmp.noResultsContainer, children: null };
  const obj2 = { style: tmp.noResultsImage, source: null };
  const tmp4 = useThemeDefault();
  const tmp8 = FastImageDefault;
  if (obj3.isThemeDark(tmp4)) {
    let tmp2Result = _modDef12201;
  } else {
    tmp2Result = _modDef12202;
  }
  obj2.source = tmp2Result;
  items = [state(tmp8, obj2), , ];
  const obj4 = { style: tmp.noResultsTitle, variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t.vhQK3o);
  items[1] = state(Text_Text.Text, obj4);
  const obj5 = { style: tmp.noResultsSubtitle, variant: "body-sm/semibold", color: "text-default", children: null };
  const intl2 = util.intl;
  obj5.children = intl2.string(util.t.bwytdh);
  items[2] = state(Text_Text.Text, obj5);
  obj.children = items;
  return gesture(timestampProducer, obj);
}
get_ActivityIndicator = fn(17);
({ View: closure_6, ScrollView: metroImportDefault } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(5012);
let obj2 = { headerText: { textAlign: "center", paddingHorizontal: 16 }, subheaderText: { textAlign: "center", marginTop: 2, paddingHorizontal: 16 }, answerScroll: { marginTop: 24 }, answerScrollContainer: { gap: 4, paddingHorizontal: 16 }, answerName: { marginTop: 16, marginHorizontal: 16, marginBottom: 8 }, list: { paddingHorizontal: 16 }, answerButton: { padding: 8, flexDirection: "row", alignItems: "center", borderRadius: nativeDefault.radii.xs, maxWidth: 200 }, answerSelected: null, answerEmoji: null, answerText: null, emojiText: null, emojiImage: null, noResultsContainer: null, noResultsImage: null, noResultsTitle: null, noResultsSubtitle: null };
let obj3 = { padding: 8, flexDirection: "row", alignItems: "center", borderRadius: nativeDefault.radii.xs, maxWidth: 200 };
obj2.answerSelected = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.answerEmoji = { marginRight: 8 };
obj2.answerText = { flexShrink: 1 };
obj2.emojiText = { fontSize: 16 };
obj2.emojiImage = { height: 16, width: 16, flexShrink: 0 };
obj2.noResultsContainer = { flexDirection: "column", alignItems: "center", paddingHorizontal: 16 };
obj2.noResultsImage = { marginTop: 32, width: 138 };
obj2.noResultsTitle = { marginTop: 16, textAlign: "center" };
obj2.noResultsSubtitle = { marginTop: 4, textAlign: "center" };
let closure_15 = createStyles.createStyles(obj2);
let closure_19 = { code: "(function PollVotesActionSheetTsx1(){let[opacity]=this.__closure;return{flex:1,opacity:opacity.get(),marginBottom:32};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/polls/native/PollVotesActionSheet.tsx");

export default function PollVotesActionSheet(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  let stateFromStores;
  noop = undefined;
  const tmp = closure_15();
  const tmp4 = stateFromStores(noop.useState(channelId.initialAnswerId), 2);
  const selectedAnswerId = tmp4[0];
  const tmp3 = messageId(selectedAnswerId[23]);
  items = [MessageStore];
  stateFromStores = channelId(selectedAnswerId[12]).useStateFromStores(items, () => MessageStore.getMessage(channelId, messageId));
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
      reactions = stateFromStores.reactions;
    }
    if (null != reactions) {
      return chat_formatPollMessageChatData.reactionForId(stateFromStores.reactions, first);
    }
  }, items2);
  let found;
  if (stateFromStores != null) {
    const poll = stateFromStores.poll;
    if (poll != null) {
      const answers = poll.answers;
      found = answers.find((answer_id) => String(answer_id.answer_id) === first);
    }
  }
  let text;
  if (found != null) {
    text = found.poll_media.text;
  }
  noop = text;
  [][0] = text;
  if (null != stateFromStores && null != stateFromStores.poll) {
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
    const obj3 = { value: tmp3(messageId(selectedAnswerId[41]).POLL_VOTES).analyticsLocations, children: null };
    const obj4 = { scrollable: true, header: null, children: null };
    const obj5 = { message: stateFromStores, selectedAnswerId, setSelectedAnswerId: tmp4[1] };
    obj4.header = closure_13(PollVotesHeader, obj5);
    const obj6 = { style: tmp.answerName, variant: "body-sm/semibold", color: "text-default", children: null };
    const items3 = [tmp14, " - ", ];
    const intl = tmp6(tmp2[17]).intl;
    const obj7 = { count: num };
    items3[2] = intl.format(tmp6(tmp2[17]).t["SG/Cyy"], obj7);
    obj6.children = items3;
    const items4 = [closure_14(tmp6(tmp2[19]).Text, obj6), ];
    if (null != memo) {
      if (num > 0) {
        const obj8 = { channelId, messageId, reaction: memo };
        let tmp15Result = closure_13(VotersList, obj8);
      }
      items4[1] = tmp15Result;
      obj4.children = items4;
      obj3.children = closure_14(tmp6(tmp2[43]).BottomSheet, obj4);
      return closure_13(tmp6(tmp2[23]).AnalyticsLocationProvider, obj3);
    }
    tmp15Result = closure_13(NoResults, {});
  } else {
    return null;
  }
  const obj2 = channelId(selectedAnswerId[12]);
};