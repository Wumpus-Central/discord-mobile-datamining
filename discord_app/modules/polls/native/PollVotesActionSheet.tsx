// === Module 11716: PollEmoji ===

// Module 11716 (PollEmoji)
import ThemesDefault from "Themes" /* 576 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import useThemeDefault from "useTheme" /* 4495 */;
import Text from "Text" /* 4556 */;
import EmojiDefault from "Emoji" /* 7130 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_9 from "maybeApplyNoTextColorForLightCustomTheme" /* 4552 */;
import closure_10 from "getEmojiToGroupId" /* 5459 */;
import closure_11 from "ensureGuildLoaded" /* 1957 */;
import closure_12 from "reinjectEphemerals" /* 4781 */;
import closure_13 from "mergeGuildAvatar" /* 1371 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
function PollEmoji(emoji) {
  emoji = emoji.emoji;
  const tmp = callback3();
  let obj = emoji(504);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (null != emoji.id) {
      let animated = tmp.animated;
      if (!animated) {
        const customEmojiById = closure_1_10.getCustomEmojiById(tmp.id);
        let flag;
        if (customEmojiById != null) {
          flag = customEmojiById.animated;
        }
        if (flag == null) {
          flag = false;
        }
        animated = flag;
      }
      let obj = closure_1_1(closure_1_2[13]);
      obj = { id: null, animated: null, size: 16 };
      obj[0] = tmp.id;
      obj[1] = animated;
      return obj.getEmojiURL(obj);
    }
  });
  obj = { style: emoji.style, src: stateFromStores, name: emoji.name, textEmojiStyle: tmp.emojiText, fastImageStyle: tmp.emojiImage };
  return callback(EmojiDefault, obj);
}
function PollVotesHeader(message) {
  message = message.message;
  const selectedAnswerId = message.selectedAnswerId;
  const setSelectedAnswerId = message.setSelectedAnswerId;
  let ref;
  closure_4 = undefined;
  importAllResult = undefined;
  let tmp = callback3();
  let items = [message.reactions];
  const memo = importAllResult.useMemo(() => message(setSelectedAnswerId[18]).getTotalVotes(message.reactions), items);
  ref = importAllResult.useRef(null);
  closure_4 = importAllResult.useRef(null);
  importAllResult = importAllResult.useRef(false);
  const items1 = [selectedAnswerId];
  const effect = importAllResult.useEffect(() => {
    const timerId = setTimeout(callback(function*() {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v0 = 2;
          if (0 === closure_2) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let current5 = tmp5;
              let current4 = tmp2;
              current4 = undefined;
              current5 = undefined;
              closure_2 = undefined;
              v0 = undefined;
              closure_4 = undefined;
              let scrollWidth;
              let scrollPageX;
              let styles;
              let width;
              let pageX;
              let x;
              closure_11 = undefined;
              current4 = v0.current;
              current5 = closure_1_4.current;
              if (null != current4) {
                if (null != current5) {
                  let promise = new Promise((arg0) => {
                    current4 = arg0;
                    current4.measure((arg0, arg1, scrollWidth, arg3, scrollPageX) => callback({ scrollWidth, scrollPageX }));
                  });
                  promise = new Promise((arg0) => {
                    closure_0 = arg0;
                    current5.measure((arg0, arg1, width, arg3, pageX) => callback({ width, pageX }));
                  });
                  const promise1 = new Promise((arg0) => {
                    closure_0 = arg0;
                    current5.measureLayout(closure_0, (arg0) => callback({ x: arg0 }));
                  });
                  const items = [promise, promise, promise1];
                  closure_2 = 1;
                  v0 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = Promise.all(items);
                  return obj1;
                }
              }
              v0 = 3;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            closure_2 = arg1;
            v0 = v0(closure_2, 3);
            closure_4 = v0[0];
            scrollWidth = closure_4.scrollWidth;
            scrollPageX = closure_4.scrollPageX;
            styles = v0[1];
            width = styles.width;
            pageX = styles.pageX;
            x = v0[2].x;
            closure_11 = !closure_1_9.useReducedMotion;
            if (scrollWidth.current) {
              if (pageX >= scrollPageX) {
                if (pageX + width > scrollPageX + scrollWidth) {
                  const current3 = v0.current;
                  if (current3 != null) {
                    const obj3 = { x: null, y: 0, animated: null };
                    obj3[0] = x + width - scrollWidth + 16;
                    obj3[2] = closure_11;
                    current3.scrollTo(obj3);
                  }
                }
              }
            } else {
              const current = v0.current;
              if (current != null) {
                obj = { x: null, y: 0, animated: null };
                obj[0] = x + width / 2 - scrollWidth / 2;
                obj[2] = closure_11;
                current.scrollTo(obj);
              }
              scrollWidth.current = true;
              v0 = 3;
              return { value: "HermesInternal", done: null };
            }
          }
          const current2 = v0.current;
          if (current2 != null) {
            const obj4 = { x: null, y: 0, animated: null };
            obj4[0] = x - 16;
            obj4[2] = closure_11;
            current2.scrollTo(obj4);
          }
        } catch (tmp36) {
          v0 = tmp;
          throw tmp36;
        }
      }
    }), 0);
  }, items1);
  message(setSelectedAnswerId[19]);
  let tmp9 = null;
  if (null != message.poll) {
    let obj = { children: null };
    obj = { style: null, variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
    obj[0] = tmp.headerText;
    obj[4] = message.poll.question.text;
    const items2 = [callback(tmp5(tmp6[17]).Text, obj), , ];
    obj = { style: null, variant: "text-md/medium", color: "text-default", children: null };
    obj[0] = tmp.subheaderText;
    const intl = tmp5(tmp6[15]).intl;
    obj1 = { count: null };
    obj1[0] = memo;
    obj[3] = intl.format(tmp5(tmp6[15]).t.XRkuof, obj1);
    items2[1] = callback(tmp5(tmp6[17]).Text, obj);
    let obj2 = { gesture: null, children: null };
    obj2[0] = tmp8;
    let obj3 = { ref: null, style: null, contentContainerStyle: null, horizontal: true, showsHorizontalScrollIndicator: false, accessibilityRole: "tablist", accessibilityLabel: null, children: null };
    obj3[0] = ref;
    ({ answerScroll: obj6[1], answerScrollContainer: obj6[2] } = tmp);
    const intl2 = tmp5(tmp6[15]).intl;
    obj3[6] = intl2.string(tmp5(tmp6[15]).t["qbir+4"]);
    const answers = message.poll.answers;
    obj3[7] = answers.map((answer) => {
      const tmp = selectedAnswerId === String(answer.answer_id);
      let tmp4;
      if (tmp) {
        tmp4 = closure_4;
      }
      const obj = { ref: tmp4, answer, selected: tmp, reaction: message(setSelectedAnswerId[20]).reactionForId(message.reactions, String(answer.answer_id)), setSelectedAnswerId };
      return closure_1_14(closure_1_18, obj, answer.answer_id);
    });
    obj2[1] = callback(closure_8, obj3);
    items2[2] = callback(tmp5(tmp6[19]).GestureDetector, obj2);
    obj[0] = items2;
    tmp9 = callback2(closure_7, obj);
  }
  return tmp9;
}
function VotersList(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  const reaction = channelId.reaction;
  let analyticsLocations;
  let reactors;
  let stateFromStores;
  let sharedValue;
  analyticsLocations = messageId(analyticsLocations[21])().analyticsLocations;
  const tmp4 = messageId(analyticsLocations[22])({ channelId, messageId, reaction });
  reactors = tmp4.reactors;
  let obj = channelId(analyticsLocations[23]);
  obj = { channelId, messageId, reactionSelected: reaction, reactors, reactorsHasMore: tmp4.hasMore, reactionType: channelId(analyticsLocations[24]).ReactionTypes.VOTE };
  const reactorsOnScrollNative = obj.useReactorsOnScrollNative(obj);
  const tmp = callback3();
  const tmp2 = messageId;
  const items = [closure_11];
  stateFromStores = channelId(analyticsLocations[12]).useStateFromStores(items, () => closure_1_11.getChannel(channelId));
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
    let user = closure_1_13.getUser(item.id);
    obj = { start: 0 === index, end: reactors.length - 1 === index, icon: null, label: null, subLabel: null, onPress: null };
    let guild_id1;
    if (stateFromStores != null) {
      guild_id1 = tmp3.guild_id;
    }
    obj = { guildId: guild_id1, user: null, size: null };
    if (user == null) {
      user = item;
    }
    obj[1] = user;
    obj[2] = channelId(analyticsLocations[28]).AvatarSizes.SMALL;
    obj[2] = closure_1_14(channelId(analyticsLocations[28]).Avatar, obj);
    let tmp9Result = nickname;
    if (nickname == null) {
      obj1 = { user: null };
      obj1[0] = item;
      tmp9Result = tmp9(tmp(tmp2[29]), obj1);
    }
    obj[3] = tmp9Result;
    let tmp13 = null;
    if (null != nickname) {
      tmp13 = userTag;
    }
    obj[4] = tmp13;
    obj[5] = function onPress() {
      return messageId(analyticsLocations[30])({ userId: item.id, localUser: item, sourceAnalyticsLocations: closure_1_2, channelId: item, messageId: closure_1_1 });
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
      const result = sharedValue.set(channelId(analyticsLocations[32]).withTiming(1, { duration: 200 }));
      const obj = channelId(analyticsLocations[32]);
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
  I.__initData = closure_20;
  const animatedStyle = channelId(analyticsLocations[31]).useAnimatedStyle(I);
  obj = { style: animatedStyle, children: callback(tmp5(tmp3[33]).BottomSheetFlashList, obj1) };
  return callback(tmp2(analyticsLocations[31]).View, obj);
}
function NoResults() {
  const tmp = callback3();
  let obj = { style: tmp.noResultsContainer, children: null };
  obj = { style: tmp.noResultsImage, source: null };
  const tmp4 = useThemeDefault();
  const tmp5 = closure_15;
  const tmp6 = closure_7;
  const tmp8 = closure_6;
  if (obj3.isThemeDark(tmp4)) {
    let tmp2Result = tmp2(11724);
  } else {
    tmp2Result = tmp2(11725);
  }
  obj[1] = tmp2Result;
  const items = [closure_14(tmp8, obj), , ];
  obj = { style: tmp.noResultsTitle, variant: "heading-md/bold", color: "mobile-text-heading-primary", children: null };
  const intl = tmp9(1114).intl;
  obj[3] = intl.string(getSystemLocale.t.vhQK3o);
  items[1] = closure_14(Text.Text, obj);
  obj1 = { style: tmp.noResultsSubtitle, variant: "text-sm/semibold", color: "text-default", children: null };
  const intl2 = tmp9(1114).intl;
  obj1[3] = intl2.string(getSystemLocale.t.bwytdh);
  items[2] = closure_14(Text.Text, obj1);
  obj[1] = items;
  return tmp5(tmp6, obj);
}
let c5 = importAllResult;
({ Image: closure_6, View: error, ScrollView: closure_8 } = get_ActivityIndicator);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let obj = { headerText: { textAlign: "center", paddingHorizontal: 16 }, subheaderText: { textAlign: "center", marginTop: 2, paddingHorizontal: 16 }, answerScroll: { marginTop: 24 }, answerScrollContainer: { gap: 4, paddingHorizontal: 16 }, answerName: { marginTop: 16, marginHorizontal: 16, marginBottom: 8 }, list: { paddingHorizontal: 16 }, answerButton: null, answerSelected: null, answerEmoji: null, answerText: null, emojiText: null, emojiImage: null, noResultsContainer: null, noResultsImage: null, noResultsTitle: null, noResultsSubtitle: null };
obj = { padding: 8, flexDirection: "row", alignItems: "center", borderRadius: ThemesDefault.radii.xs, maxWidth: 200 };
obj[6] = obj;
createCacheKey = { backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
obj[7] = createCacheKey;
obj[8] = { marginRight: 8 };
obj[9] = { flexShrink: 1 };
obj[10] = { fontSize: 16 };
obj[11] = { height: 16, width: 16, flexShrink: 0 };
obj[12] = { flexDirection: "column", alignItems: "center", paddingHorizontal: 16 };
obj[13] = { marginTop: 32, width: 138 };
obj[14] = { marginTop: 16, textAlign: "center" };
obj[15] = { marginTop: 4, textAlign: "center" };
let closure_16 = createCacheKey.createStyles(obj);
let closure_18 = importAllResult.forwardRef((answer, ref) => {
  answer = answer.answer;
  ({ reaction, selected, setSelectedAnswerId } = answer);
  const tmp = callback3();
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
  const callback = importAllResult.useCallback(() => {
    setSelectedAnswerId(String(answer.answer_id));
  }, items);
  if (selected) {
    str = "interactive-text-active";
  }
  const intl = answer(1114).intl;
  let obj = { numVotes: num, option: answer.poll_media.text };
  obj = { ref, onPress: callback, style: null, accessibilityRole: "tab", accessibilityState: null, accessibilityLabel: null, children: null };
  const items1 = [tmp.answerButton, ];
  let answerSelected;
  if (selected) {
    answerSelected = tmp.answerSelected;
  }
  items1[1] = answerSelected;
  obj[2] = items1;
  obj[4] = { selected };
  obj[5] = intl.formatToPlainString(answer(1114).t.wqBc7A, obj);
  let tmp8 = null;
  if (null != answer.poll_media.emoji) {
    obj = { style: null, emoji: null };
    obj[0] = tmp.answerEmoji;
    obj[1] = answer.poll_media.emoji;
    tmp8 = callback(PollEmoji, obj);
  }
  const items2 = [tmp8, , ];
  let tmp11 = null;
  if (null != answer.poll_media.text) {
    obj1 = { style: null, variant: "text-sm/semibold", color: null, lineClamp: 1, children: null };
    obj1[0] = tmp.answerText;
    obj1[2] = str;
    obj1[4] = answer.poll_media.text;
    tmp11 = callback(tmp3(4556).Text, obj1);
  }
  items2[1] = tmp11;
  const obj2 = { variant: "text-sm/semibold", color: str, lineClamp: 1, children: null };
  const items3 = [" ", "(", num.toLocaleString(), ")"];
  obj2[3] = items3;
  items2[2] = closure_15(answer(4556).Text, obj2);
  obj[6] = items2;
  return closure_15(answer(5123).PressableHighlight, obj);
});
let closure_20 = { code: "function PollVotesActionSheetTsx1(){const{opacity}=this.__closure;return{flex:1,opacity:opacity.get(),marginBottom:32};}" };
let result = require("set").fileFinishedImporting("modules/polls/native/PollVotesActionSheet.tsx");

export default function PollVotesActionSheet(channelId) {
  channelId = channelId.channelId;
  const messageId = channelId.messageId;
  let first;
  let stateFromStores;
  closure_4 = undefined;
  const tmp = callback3();
  let obj = importAllResult;
  const tmp4 = stateFromStores(importAllResult.useState(channelId.initialAnswerId), 2);
  first = tmp4[0];
  obj1 = channelId(first[12]);
  const items = [closure_12];
  stateFromStores = obj1.useStateFromStores(items, () => closure_1_12.getMessage(channelId, messageId));
  closure_4 = tmp8;
  const items1 = [null != stateFromStores && null != stateFromStores.poll];
  const effect = obj.useEffect(() => {
    if (!closure_4) {
      messageId(first[39]).hideActionSheet("PollVotesActionSheet");
      const obj = messageId(first[39]);
    }
  }, items1);
  let reactions;
  if (stateFromStores != null) {
    reactions = stateFromStores.reactions;
  }
  const items2 = [reactions, first];
  const memo = obj.useMemo(() => {
    let reactions;
    if (stateFromStores != null) {
      reactions = tmp.reactions;
    }
    if (null != reactions) {
      return channelId(first[20]).reactionForId(tmp.reactions, first);
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
    obj = { value: null, children: null };
    obj[0] = tmp3(messageId(first[38]).POLL_VOTES).analyticsLocations;
    obj = { scrollable: true, header: null, children: null };
    obj1 = { message: null, selectedAnswerId: null, setSelectedAnswerId: null };
    obj1[0] = stateFromStores;
    obj1[1] = first;
    obj1[2] = tmp4[1];
    obj[1] = callback(PollVotesHeader, obj1);
    const obj2 = { style: null, variant: "text-sm/semibold", color: "text-default", children: null };
    obj2[0] = tmp.answerName;
    let text;
    if (found != null) {
      text = found.poll_media.text;
    }
    const items3 = [text, " - ", ];
    const intl = tmp6(tmp2[15]).intl;
    const obj3 = { count: null };
    obj3[0] = num;
    items3[2] = intl.format(tmp6(tmp2[15]).t["SG/Cyy"], obj3);
    obj2[3] = items3;
    const items4 = [closure_15(tmp6(tmp2[17]).Text, obj2), ];
    if (null != memo) {
      if (num > 0) {
        const obj4 = { channelId: null, messageId: null, reaction: null };
        obj4[0] = channelId;
        obj4[1] = messageId;
        obj4[2] = memo;
        let tmp13Result = tmp13(VotersList, obj4);
      }
      items4[1] = tmp13Result;
      obj[2] = items4;
      obj[1] = tmp14(tmp6(tmp2[40]).BottomSheet, obj);
      return tmp13(tmp6(tmp2[21]).AnalyticsLocationProvider, obj);
    }
    tmp13Result = tmp13(NoResults, {});
  } else {
    return null;
  }
};