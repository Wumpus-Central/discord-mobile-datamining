// === Module 16181: ChannelsUnreadBars ===

// Module 16181 (ChannelsUnreadBars)
import debounceDefault from "debounce" /* 551 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import HapticUtils from "HapticUtils" /* 4528 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4529 */;
import useFontScale from "useFontScale" /* 4982 */;
import FastList from "FastList" /* 7072 */;
import ChannelListState from "ChannelListState" /* 7528 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4201 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7636 */;
import ReadStateStore from "ReadStateStore" /* 4575 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;

require = fn;
function shouldSkipSection(diff1) {
  if (ChannelListState.SECTION_INDEX_CHANNEL_NOTICES !== diff1) {
    if (ChannelListState.SECTION_INDEX_GUILD_ACTIONS !== diff1) {
      return false;
    }
  }
  return true;
}
function checkHasMentionOrUnread(getChannelFromSectionRow, section, item, MENTION) {
  const channelFromSectionRow = getChannelFromSectionRow.getChannelFromSectionRow(section, item);
  if (null == channelFromSectionRow) {
    return false;
  } else {
    let channel = channelFromSectionRow.channel;
    if (constants.MENTION === MENTION) {
      return (function hasMention(channel) {
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
      })(channel);
    } else if (tmp3.UNREAD === MENTION) {
      return (function hasUnread(channel) {
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
        const isGuildVocalResult = record.isGuildVocal();
        let hasUnreadResult = !isGuildVocalResult;
        if (!isGuildVocalResult) {
          hasUnreadResult = !channel.isMuted;
        }
        if (hasUnreadResult) {
          hasUnreadResult = ReadStateStore.hasUnread(record.id);
        }
        if (hasUnreadResult) {
          hasUnreadResult = UserGuildSettingsStore.resolveUnreadSetting(record) === constants.ALL_MESSAGES;
        }
        return hasUnreadResult;
      })(channel);
    } else {
      return false;
    }
  }
}
function findNearestUnreadItem(fastList, guildChannels, headerHeight, youBarTotalHeight) {
  if (tmp) {
    let MENTION = constants.MENTION;
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
    const result = getScaledChannelRowHeight(useFontScale.getFontScale()) / 2;
    value = scrollPosValue.get();
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
    const items = fastList.state.items;
    for (const item10031 of items) {
      let tmp12 = item10031;
      if (item10031.layoutStart >= layoutStart) {
        let tmp71 = require;
        if (tmp12.type === FastList.FastListItemTypes.ITEM) {
          if (tmp12.layoutStart > tmp8) {
            obj.return();
            break;
          } else {
            if (-1 === section) {
              ({ section, item } = tmp12);
            }
            if (tmp12.type !== tmp71(7072).FastListItemTypes.ITEM) {
              tmp9 = item10031;
            } else if (shouldSkipSection(tmp12.section)) {
              continue;
            } else if (checkHasMentionOrUnread(arg1, tmp12.section, tmp12.item, MENTION)) {
              let tmp27 = closure_18;
              obj.return();
              return tmp27;
            }
            continue;
          }
          let sections = arg1.getSections();
          let diff1 = section;
          if (section >= 0) {
            while (true) {
              if (!shouldSkipSection(diff1)) {
                let diff = sections[diff1] - 1;
                if (0 <= diff) {
                  while (true) {
                    if (diff1 !== section) {
                      if (checkHasMentionOrUnread(arg1, tmp32, tmp37, MENTION)) {
                        break;
                      }
                    }
                    diff = diff - 1;
                    continue;
                  }
                  let obj = { beforeItem: null, afterItem: null };
                  obj = { section: diff1, row: diff, isMention: null };
                  obj.isMention = MENTION === constants.MENTION;
                  obj.beforeItem = obj;
                  return obj;
                }
              }
              diff1 = diff1 - 1;
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
                let tmp47 = sections[num5];
                let num6 = 0;
                if (0 < tmp47) {
                  while (true) {
                    let tmp49 = num6;
                    if (null != tmp9) {
                      num6 = num6 + 1;
                      continue;
                    }
                    if (checkHasMentionOrUnread(arg1, tmp46, tmp49, MENTION)) {
                      break;
                    }
                  }
                  let obj1 = { afterItem: null, beforeItem: null };
                  let obj2 = { section: num5, row: num6, isMention: null };
                  obj2.isMention = MENTION === constants.MENTION;
                  obj1.afterItem = obj2;
                  return obj1;
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
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const getScaledChannelRowHeight = fn(10118).getScaledChannelRowHeight;
const UnreadSetting = fn(4742).UnreadSetting;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4560);
let closure_16 = createStyles.createStyles({ wrapper: StyleSheet.absoluteFillObject });
const constants = { MENTION: "mention", UNREAD: "unread" };
let closure_18 = { beforeItem: null, afterItem: null };
const __initData = { code: "function ChannelsUnreadBarsTsx1(){const{scrollPosValue}=this.__closure;return scrollPosValue.get();}" };
const __initData2 = { code: "function ChannelsUnreadBarsTsx2(position,lastPosition){const{runOnJS,debouncedUpdate}=this.__closure;if(position!==lastPosition){runOnJS(debouncedUpdate)();}}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/unread_bars/ChannelsUnreadBars.tsx");

export default noop.memo(function ChannelUnreadBarsComponent(fastList) {
  fastList = fastList.fastList;
  const guildChannels = fastList.guildChannels;
  const headerHeight = fastList.headerHeight;
  noop = undefined;
  let wrapper;
  let bannerWidth;
  let listBottom;
  closure_15 = undefined;
  let stateFromStores;
  const id = guildChannels.id;
  let obj = noop;
  noop = noop.useRef(-1);
  closure_5 = noop.useRef(null);
  let obj1 = fastList(headerHeight[16]);
  const youBarTotalHeight = obj1.useYouBarTotalHeight();
  let tmp4 = id(noop.useState(() => findNearestUnreadItem(fastList, guildChannels, headerHeight, youBarTotalHeight)), 2);
  const first = tmp4[0];
  let beforeItem = first.beforeItem;
  let afterItem = first.afterItem;
  closure_9 = tmp4[1];
  let items = [fastList, guildChannels, headerHeight, youBarTotalHeight];
  const memo = noop.useMemo(() => debounceDefault(() => {
    closure_0 = findNearestUnreadItem(fastList, guildChannels, headerHeight, youBarTotalHeight);
    closure_1_9((afterItem) => {
      if (afterItem === closure_0) {
        let tmp6 = afterItem;
      } else {
        afterItem = afterItem.afterItem;
        const afterItem2 = tmp.afterItem;
        tmp6 = tmp;
        if (tmp4(afterItem, afterItem2)) {
          beforeItem = afterItem.beforeItem;
          const beforeItem2 = tmp.beforeItem;
          tmp6 = tmp;
          const tmp2Result = tmp2(tmp3[18]);
        }
        tmp2 = guildChannels;
        tmp3 = headerHeight;
        tmp4 = guildChannels(headerHeight[18]);
      }
      return tmp6;
    });
  }, 100), items);
  const items1 = [memo, id];
  const effect = noop.useEffect(() => {
    const items = [closure_9, memo];
    const batchedStoreListener = new fastList(headerHeight[19]).BatchedStoreListener(items, () => {
      const guildUnreadsSentinel = memo.getGuildUnreadsSentinel(id);
      let tmp4 = id === ref2.current;
      if (tmp4) {
        tmp4 = guildUnreadsSentinel === ref.current;
      }
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
  let obj2 = fastList(headerHeight[20]);
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
      ReanimatedRexport.runOnJS(memo)();
    }
  };
  obj = { runOnJS: fastList(headerHeight[20]).runOnJS, debouncedUpdate: memo };
  fn.__closure = obj;
  fn.__workletHash = 17498480935002;
  fn.__initData = __initData2;
  const animatedReaction = obj2.useAnimatedReaction(L, fn);
  const tmp9 = stateFromStores();
  wrapper = tmp9;
  const tmp11 = guildChannels(headerHeight[21])(fastList.guild);
  bannerWidth = tmp11.bannerWidth;
  listBottom = tmp11.listBottom;
  const tmp12 = guildChannels(headerHeight[22])();
  closure_15 = tmp12;
  const items2 = [tmp9.wrapper, bannerWidth, listBottom, tmp12];
  let isMention;
  const memo1 = noop.useMemo(() => {
    const items = [wrapper.wrapper, ];
    const obj = { width: bannerWidth, bottom: null };
    let num = 0;
    if (!closure_15) {
      num = listBottom;
    }
    obj.bottom = num;
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
  stateFromStores = fastList(headerHeight[19]).useStateFromStores(items3, () => youBarTotalHeight.useReducedMotion);
  const items4 = [beforeItem, stateFromStores, fastList];
  const items5 = [afterItem, stateFromStores, fastList];
  const callback = obj.useCallback(() => {
    if (null != beforeItem) {
      let obj = HapticUtils;
      const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      obj = { section: null, item: null, animated: null, orientation: "center" };
      ({ section: obj2.section, row: obj2.item } = beforeItem);
      obj.animated = !stateFromStores;
      fastList.scrollToLocation(obj);
    }
  }, items4);
  obj = { style: memo1, pointerEvents: "box-none", children: null };
  const callback1 = obj.useCallback(() => {
    if (null != afterItem) {
      let obj = HapticUtils;
      const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      obj = { section: null, item: null, animated: null, orientation: "center" };
      ({ section: obj2.section, row: obj2.item } = afterItem);
      obj.animated = !stateFromStores;
      fastList.scrollToLocation(obj);
    }
  }, items5);
  obj1 = { position: "top", shown: "before" === str, onPress: callback, isMention: null, scrollPosition: null, listPaddingTop: 0, headerHeight: null };
  let isMention2;
  let tmp10Result = tmp10(tmp2[25]);
  if (beforeItem != null) {
    isMention2 = beforeItem.isMention;
  }
  obj1.isMention = isMention2;
  obj1.scrollPosition = fastList.scrollPosValue;
  obj1.headerHeight = headerHeight;
  const items6 = [listBottom(tmp10Result, obj1), ];
  obj2 = { position: "bottom", shown: "after" === str, onPress: callback1, isMention: null, scrollPosition: null, listPaddingTop: 0, headerHeight: null };
  let isMention3;
  tmp10Result = tmp10(tmp2[25]);
  if (afterItem != null) {
    isMention3 = afterItem.isMention;
  }
  obj2.isMention = isMention3;
  obj2.scrollPosition = fastList.scrollPosValue;
  obj2.headerHeight = headerHeight;
  items6[1] = listBottom(tmp10Result, obj2);
  obj.children = items6;
  return closure_15(closure_5, obj);
});