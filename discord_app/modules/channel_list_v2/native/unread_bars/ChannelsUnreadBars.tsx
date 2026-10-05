// === Module 16106: ChannelsUnreadBars ===

// Module 16106 (ChannelsUnreadBars)
import debounceDefault from "debounce" /* 551 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import HapticUtils from "HapticUtils" /* 4855 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4856 */;
import ReadStateConstants from "ReadStateConstants" /* 5072 */;
import useFontScale from "useFontScale" /* 5602 */;
import FastList from "FastList" /* 6569 */;
import ChannelListState from "ChannelListState" /* 7039 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11697 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4511 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7121 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5071 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let closure_14;
let closure_15;
let hasOwnProperty;
function shouldSkipSection(diff2) {
  if (ChannelListState.SECTION_INDEX_CHANNEL_NOTICES !== diff2) {
    if (ChannelListState.SECTION_INDEX_GUILD_ACTIONS !== diff2) {
      return false;
    }
  }
  return true;
}
function checkHasMentionOrUnread(getChannelFromSectionRow, section, item, MENTION) {
  let muted;
  function hasMention(channel) {
    if (ReadStateStore.getMentionCount(channel.id) > 0) {
      return true;
    } else {
      const threadIds = channel.threadIds;
      for (const item10011 of threadIds) {
        if (ReadStateStore.getMentionCount(item10011) > 0) {
          obj.return();
          let flag = true;
          return true;
        }
      }
      return false;
    }
  }
  function hasUnread(channel) {
    let record;
    let threadIds;
    ({ record, threadIds } = channel);
    const obj = threadIds[Symbol.iterator]();
    while (obj !== undefined) {
      channel = channel.getChannel(tmp);
      let tmp4 = channel;
      if (null != channel) {
        if (!muted.isMuted(tmp4.id)) {
          if (ReadStateStore.hasUnread(tmp4.id)) {
            obj.return();
            let flag = true;
            return true;
          }
        }
      }
      continue;
    }
    let hasUnreadResult = !record.isGuildVocal() && !channel.isMuted;
    record.isGuildVocal();
    if (hasUnreadResult) {
      hasUnreadResult = ReadStateStore.hasUnread(record.id);
    }
    if (hasUnreadResult) {
      hasUnreadResult = UserGuildSettingsStore.resolveUnreadSetting(record) === constants.ALL_MESSAGES;
    }
    return hasUnreadResult;
  }
  const channelFromSectionRow = getChannelFromSectionRow.getChannelFromSectionRow(section, item);
  if (null == channelFromSectionRow) {
    return false;
  } else {
    let tmp2 = MENTION;
    let channel = channelFromSectionRow.channel;
    if (constants.MENTION === MENTION) {
      return hasMention(channel);
    } else if (tmp3.UNREAD === MENTION) {
      return hasUnread(channel);
    } else {
      let flag = false;
      return false;
    }
  }
}
function findNearestUnreadItem(fastList, guildChannels, headerHeight, youBarTotalHeight) {
  let MENTION;
  let item;
  let section;
  const tmp = GuildReadStateStore.getMentionCount(guildChannels.id) > 0;
  if (tmp) {
    MENTION = constants.MENTION;
  } else {
    MENTION = null;
    if (tmp2) {
      MENTION = constants.UNREAD;
    }
  }
  if (null == MENTION) {
    return closure_18;
  } else if (0 === fastList.containerSize) {
    return closure_18;
  } else {
    const scrollPosValue = fastList.scrollPosValue;
    const obj6 = useFontScale;
    const result = getScaledChannelRowHeight(obj6.getFontScale()) / 2;
    const value = scrollPosValue.get();
    const item2 = fastList.getSectionItemFromPosition(headerHeight + value + result).item;
    let layoutStart;
    if (item2 != null) {
      layoutStart = item2.layoutStart;
    }
    if (layoutStart == null) {
      layoutStart = value;
    }
    section = -1;
    item = -1;
    let tmp9 = null;
    const diff = layoutStart + fastList.containerSize - headerHeight - youBarTotalHeight;
    const items = fastList.getItems();
    for (const item10031 of items) {
      if (item10031.layoutStart >= layoutStart) {
        if (item10031.type === FastList.FastListItemTypes.ITEM) {
          if (item10031.layoutStart > diff) {
            obj.return();
            break;
          } else {
            if (-1 === section) {
              ({ section, item } = item10031);
            }
            if (item10031.type !== FastList.FastListItemTypes.ITEM) {
              tmp9 = item10031;
            } else if (shouldSkipSection(item10031.section)) {
              continue;
            } else if (checkHasMentionOrUnread(guildChannels, item10031.section, item10031.item, MENTION)) {
              obj.return();
              return closure_18;
            }
            continue;
          }
          let sections = guildChannels.getSections();
          let diff2 = section;
          if (section >= 0) {
            while (true) {
              if (!shouldSkipSection(diff2)) {
                let diff1 = sections[diff2] - 1;
                if (0 <= diff1) {
                  while (true) {
                    if (diff2 !== section) {
                      if (checkHasMentionOrUnread(guildChannels, tmp33, tmp38, MENTION)) {
                        break;
                      }
                    }
                    diff1 = diff1 - 1;
                    continue;
                  }
                  let obj2 = { beforeItem: obj3, afterItem: null };
                  let obj3 = { section: diff2, row: diff1, isMention: MENTION === constants.MENTION };
                  return obj2;
                }
              }
              diff2 = diff2 - 1;
            }
          }
          let num5;
          if (tmp9 != null) {
            num5 = tmp9.section;
          }
          if (num5 == null) {
            num5 = 0;
          }
          if (num5 < sections.length) {
            while (true) {
              if (!shouldSkipSection(num5)) {
                let tmp48 = sections[num5];
                let num6 = 0;
                if (0 < tmp48) {
                  while (true) {
                    let tmp50 = num6;
                    if (null != tmp9) {
                      num6 = num6 + 1;
                      continue;
                    }
                    if (checkHasMentionOrUnread(guildChannels, tmp47, tmp50, MENTION)) {
                      break;
                    }
                  }
                  let obj4 = { afterItem: obj5, beforeItem: null };
                  let obj5 = { section: num5, row: num6, isMention: MENTION === constants.MENTION };
                  return obj4;
                }
              }
              num5 = num5 + 1;
            }
          }
          return closure_18;
        }
      }
      continue;
    }
  }
}
let react = react_mod;
({ View: hasOwnProperty, StyleSheet } = react_native);
const getScaledChannelRowHeight = RedesignChannelListConstants.getScaledChannelRowHeight;
const UnreadSetting = ReadStateConstants.UnreadSetting;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let obj = { wrapper: StyleSheet.absoluteFillObject };
let closure_16 = createStyles.createStyles(obj);
const constants = { MENTION: "mention", UNREAD: "unread" };
let closure_18 = { beforeItem: null, afterItem: null };
const __initData = { code: "function ChannelsUnreadBarsTsx1(){const{scrollPosValue}=this.__closure;return scrollPosValue.get();}" };
const __initData2 = { code: "function ChannelsUnreadBarsTsx2(position,lastPosition){const{runOnJS,debouncedUpdate}=this.__closure;if(position!==lastPosition){runOnJS(debouncedUpdate)();}}" };
const memoResult = react.memo(function ChannelUnreadBarsComponent(fastList) {
  let closure_4;
  let isMention2;
  let isMention3;
  let items6;
  fastList = fastList.fastList;
  const guildChannels = fastList.guildChannels;
  const headerHeight = fastList.headerHeight;
  react = undefined;
  let wrapper;
  let bannerWidth;
  let listBottom;
  let closure_15;
  let stateFromStores;
  const id = guildChannels.id;
  let obj = react;
  const guild = fastList.guild;
  react = react.useRef(-1);
  let closure_5 = react.useRef(null);
  const obj2 = fastList(headerHeight[16]);
  const youBarTotalHeight = obj2.useYouBarTotalHeight();
  let tmp4 = id(react.useState(() => findNearestUnreadItem(fastList, guildChannels, headerHeight, youBarTotalHeight)), 2);
  const first = tmp4[0];
  let beforeItem = first.beforeItem;
  let afterItem = first.afterItem;
  let closure_9 = tmp4[1];
  let items = [fastList, guildChannels, headerHeight, youBarTotalHeight];
  const memo = react.useMemo(() => debounceDefault(() => {
    let closure_0 = findNearestUnreadItem(fastList, guildChannels, headerHeight, youBarTotalHeight);
    closure_1_9((afterItem) => {
      let tmp6;
      if (afterItem === closure_0) {
        tmp6 = afterItem;
      } else {
        afterItem = afterItem.afterItem;
        const afterItem2 = closure_0.afterItem;
        tmp6 = closure_0;
        const tmp4 = closure_2_1(closure_2_2[18]);
        if (tmp4(afterItem, afterItem2)) {
          beforeItem = afterItem.beforeItem;
          closure_2_1(closure_2_2[18]);
          const beforeItem2 = closure_0.beforeItem;
          tmp6 = closure_0;
        }
      }
      return tmp6;
    });
  }, 100), items);
  const items1 = [memo, id];
  const effect = react.useEffect(() => {
    let ref;
    let ref2;
    const items = [closure_9, memo];
    const batchedStoreListener = new fastList(headerHeight[19]).BatchedStoreListener(items, () => {
      const guildUnreadsSentinel = memo.getGuildUnreadsSentinel(id);
      const tmp4 = id === ref2.current && guildUnreadsSentinel === ref.current;
      if (!tmp4) {
        ref2.current = id;
        ref.current = guildUnreadsSentinel;
        closure_1_10();
      }
    });
    batchedStoreListener.attach("channel-list-unread-bars");
    return () => {
      batchedStoreListener.detach();
    };
  }, items1);
  const scrollPosValue = fastList.scrollPosValue;
  let obj3 = fastList(headerHeight[20]);
  const tmp = fastList;
  class L {
    constructor() {
      return scrollPosValue.get();
    }
  }
  L.__closure = { scrollPosValue };
  L.__workletHash = 7966775243843;
  L.__initData = __initData;
  const fn = function y(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(memo)();
    }
  };
  fn.__closure = { runOnJS: fastList(headerHeight[20]).runOnJS, debouncedUpdate: memo };
  fn.__workletHash = 17498480935002;
  fn.__initData = __initData2;
  ({ runOnJS: fastList(headerHeight[20]).runOnJS, debouncedUpdate: memo });
  const animatedReaction = obj3.useAnimatedReaction(L, fn);
  const tmp9 = stateFromStores();
  wrapper = tmp9;
  const tmp11 = guildChannels(headerHeight[21])(guild);
  bannerWidth = tmp11.bannerWidth;
  listBottom = tmp11.listBottom;
  const tmp12 = guildChannels(headerHeight[22])();
  closure_15 = tmp12;
  const items2 = [tmp9.wrapper, bannerWidth, listBottom, tmp12];
  let isMention;
  const memo1 = react.useMemo(() => {
    let num;
    const items = [wrapper.wrapper, ];
    const obj = { width: bannerWidth, bottom: num };
    num = 0;
    if (!closure_15) {
      num = listBottom;
    }
    items[1] = obj;
    return items;
  }, items2);
  if (beforeItem != null) {
    isMention = beforeItem.isMention;
  }
  let str = "before";
  if (!isMention) {
    let isMention1;
    if (afterItem != null) {
      isMention1 = afterItem.isMention;
    }
    let str3 = "after";
    if (!isMention1) {
      let str4 = "before";
      if (null == beforeItem) {
        let str5 = null;
        if (null != afterItem) {
          str5 = "after";
        }
        str4 = str5;
      }
      str3 = str4;
    }
    str = str3;
  }
  const items3 = [youBarTotalHeight];
  const tmpResult = tmp(headerHeight[19]);
  stateFromStores = tmpResult.useStateFromStores(items3, () => youBarTotalHeight.useReducedMotion);
  const items4 = [beforeItem, stateFromStores, fastList];
  const items5 = [afterItem, stateFromStores, fastList];
  const callback = obj.useCallback(() => {
    if (null != beforeItem) {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      const obj3 = { section: null, item: null, animated: !stateFromStores, orientation: "center" };
      ({ section: obj2.section, row: obj2.item } = beforeItem);
      fastList.scrollToLocation(obj3);
    }
  }, items4);
  const obj5 = { style: memo1, pointerEvents: "box-none", children: items6 };
  const callback1 = obj.useCallback(() => {
    if (null != afterItem) {
      const obj = HapticUtils;
      const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      const obj3 = { section: null, item: null, animated: !stateFromStores, orientation: "center" };
      ({ section: obj2.section, row: obj2.item } = afterItem);
      fastList.scrollToLocation(obj3);
    }
  }, items5);
  const obj6 = { position: "top", shown: "before" === str, onPress: callback, isMention: isMention2, scrollPosition: fastList.scrollPosValue, listPaddingTop: 0, headerHeight };
  isMention2 = undefined;
  const tmp10Result = guildChannels(headerHeight[25]);
  const tmp19 = closure_15;
  const tmp20 = closure_5;
  if (beforeItem != null) {
    isMention2 = beforeItem.isMention;
  }
  items6 = [listBottom(tmp10Result, obj6), ];
  const obj7 = { position: "bottom", shown: "after" === str, onPress: callback1, isMention: isMention3, scrollPosition: fastList.scrollPosValue, listPaddingTop: 0, headerHeight };
  isMention3 = undefined;
  const tmp10Result2 = guildChannels(headerHeight[25]);
  if (afterItem != null) {
    isMention3 = afterItem.isMention;
  }
  items6[1] = listBottom(tmp10Result2, obj7);
  return tmp19(tmp20, obj5);
});
let result = size.fileFinishedImporting("modules/channel_list_v2/native/unread_bars/ChannelsUnreadBars.tsx");

export default memoResult;