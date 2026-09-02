// === Module 16001: shouldSkipSection ===

// Module 16001 (shouldSkipSection)
import getFontScale from "getFontScale" /* 4935 */;
import computeSubtitle from "computeSubtitle" /* 7282 */;
import renderDefaultEmpty from "renderDefaultEmpty" /* 7804 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_6 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import closure_7 from "storeThread" /* 4122 */;
import closure_8 from "ensureGuildLoaded" /* 1386 */;
import closure_9 from "updateGuildUnreadSentinel" /* 7390 */;
import closure_10 from "generateOldThreadCutoff" /* 4493 */;
import closure_11 from "updateUserGuildSettingsInternal" /* 4701 */;
import { getScaledChannelRowHeight } from "hairlineWidth" /* 10223 */;
import { UnreadSetting } from "ReadStateTypes" /* 4702 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function shouldSkipSection(diff1) {
  if (computeSubtitle.SECTION_INDEX_CHANNEL_NOTICES !== diff1) {
    if (computeSubtitle.SECTION_INDEX_GUILD_ACTIONS !== diff1) {
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
        if (store.getMentionCount(channel.id) > 0) {
          return true;
        } else {
          const threadIds = channel.threadIds;
          for (const item10011 of threadIds) {
            let tmp3 = store;
            if (store.getMentionCount(item10011) > 0) {
              let tmp4 = obj;
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
          let tmp2 = channel;
          channel = channel.getChannel(tmp);
          let tmp4 = channel;
          if (null != channel) {
            let tmp5 = muted;
            let tmp6 = channel;
            if (!muted.isMuted(tmp4.id)) {
              let tmp7 = store;
              let tmp8 = channel;
              if (store.hasUnread(tmp4.id)) {
                let tmp9 = obj;
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
          hasUnreadResult = store.hasUnread(record.id);
        }
        if (hasUnreadResult) {
          hasUnreadResult = closure_11.resolveUnreadSetting(record) === constants.ALL_MESSAGES;
        }
        return hasUnreadResult;
      })(channel);
    } else {
      return false;
    }
  }
}
function findNearestUnreadItem(containerSize, id) {
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
  } else if (0 === containerSize.containerSize) {
    return closure_18;
  } else {
    const scrollPosValue = containerSize.scrollPosValue;
    const result = getScaledChannelRowHeight(getFontScale.getFontScale()) / 2;
    const value = scrollPosValue.get();
    const item2 = containerSize.getSectionItemFromPosition(arg2 + value + result).item;
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
    const items = containerSize.state.items;
    for (const item10031 of items) {
      let tmp12 = item10031;
      if (item10031.layoutStart >= layoutStart) {
        let tmp69 = item10031;
        let tmp70 = require;
        let tmp71 = require;
        let tmp72 = dependencyMap;
        let tmp73 = dependencyMap;
        if (tmp12.type === renderDefaultEmpty.FastListItemTypes.ITEM) {
          let tmp16 = item10031;
          if (tmp12.layoutStart > tmp8) {
            let tmp29 = obj;
            obj.return();
            break;
          } else {
            let tmp74 = section;
            if (-1 === section) {
              let tmp17 = item10031;
              ({ section, item } = tmp12);
            }
            let tmp18 = item10031;
            let tmp19 = tmp70;
            let tmp20 = tmp72;
            if (tmp12.type !== tmp71(7804).FastListItemTypes.ITEM) {
              tmp9 = item10031;
            } else {
              let tmp21 = shouldSkipSection;
              let tmp22 = item10031;
              if (shouldSkipSection(tmp12.section)) {
                continue;
              } else {
                let tmp23 = checkHasMentionOrUnread;
                let tmp24 = item10031;
                let num2 = 0;
                let tmp25 = arg1;
                let tmp26 = MENTION;
                if (checkHasMentionOrUnread(arg1, tmp12.section, tmp12.item, MENTION)) {
                  let tmp28 = obj;
                  let tmp27 = closure_18;
                  obj.return();
                  return tmp27;
                }
              }
            }
            continue;
          }
          let sections = arg1.getSections();
          let diff1 = section;
          let num3 = 1;
          if (section >= 0) {
            while (true) {
              let tmp31 = shouldSkipSection;
              if (!shouldSkipSection(diff1)) {
                let diff = sections[diff1] - 1;
                if (0 <= diff) {
                  while (true) {
                    let tmp34 = section;
                    let tmp35 = item;
                    if (diff1 !== section) {
                      let tmp38 = checkHasMentionOrUnread;
                      let num4 = 0;
                      let tmp39 = arg1;
                      let tmp40 = diff1;
                      let tmp41 = diff;
                      let tmp42 = MENTION;
                      if (checkHasMentionOrUnread(arg1, tmp32, tmp37, MENTION)) {
                        break;
                      }
                    }
                    diff = diff - 1;
                    continue;
                  }
                  let obj = { beforeItem: null, afterItem: null };
                  obj = { section: null, row: null, isMention: null };
                  obj[0] = diff1;
                  obj[1] = diff;
                  let tmp43 = constants;
                  obj[2] = MENTION === constants.MENTION;
                  obj[0] = obj;
                  return obj;
                }
              }
              diff1 = diff1 - 1;
            }
          }
          let tmp44 = tmp9;
          let num5;
          if (tmp9 != null) {
            num5 = tmp9.section;
          }
          if (num5 == null) {
            num5 = 0;
          }
          if (num5 < sections.length) {
            while (true) {
              let tmp45 = shouldSkipSection;
              if (!shouldSkipSection(num5)) {
                let tmp47 = sections[num5];
                let num6 = 0;
                if (0 < tmp47) {
                  while (true) {
                    let tmp48 = tmp9;
                    let tmp49 = num6;
                    if (null != tmp9) {
                      let tmp50 = tmp9;
                      num6 = num6 + 1;
                      continue;
                    }
                    let tmp51 = checkHasMentionOrUnread;
                    let num7 = 0;
                    let tmp52 = arg1;
                    let tmp53 = num5;
                    let tmp54 = num6;
                    let tmp55 = MENTION;
                    if (checkHasMentionOrUnread(arg1, tmp46, tmp49, MENTION)) {
                      break;
                    }
                  }
                  obj1 = { afterItem: null, beforeItem: null };
                  let obj2 = { section: null, row: null, isMention: null };
                  obj2[0] = num5;
                  obj2[1] = num6;
                  let tmp56 = constants;
                  obj2[2] = MENTION === constants.MENTION;
                  obj1[0] = obj2;
                  return obj1;
                }
              }
              num5 = num5 + 1;
            }
          }
          let tmp57 = closure_18;
          return closure_18;
        } else {
          let tmp13 = item10031;
          let tmp14 = tmp70;
          let tmp15 = tmp72;
        }
      }
      continue;
    }
    const obj6 = getFontScale;
  }
}
let c4 = importAllResult;
({ View: c5, StyleSheet } = get_ActivityIndicator);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = createCacheKey.createStyles({ wrapper: StyleSheet.absoluteFillObject });
let closure_17 = { MENTION: "mention", UNREAD: "unread" };
let closure_18 = { beforeItem: null, afterItem: null };
let closure_22 = { code: "function ChannelsUnreadBarsTsx1(){const{scrollPosValue}=this.__closure;return scrollPosValue.get();}" };
let closure_23 = { code: "function ChannelsUnreadBarsTsx2(position,lastPosition){const{runOnJS,debouncedUpdate}=this.__closure;if(position!==lastPosition){runOnJS(debouncedUpdate)();}}" };
const memoResult = importAllResult.memo(function ChannelUnreadBarsComponent(fastList) {
  fastList = fastList.fastList;
  const guildChannels = fastList.guildChannels;
  const headerHeight = fastList.headerHeight;
  let id;
  importAllResult = undefined;
  closure_5 = undefined;
  let youBarTotalHeight;
  let beforeItem;
  let afterItem;
  closure_9 = undefined;
  let memo;
  let scrollPosValue;
  closure_12 = undefined;
  let bannerWidth;
  let listBottom;
  closure_15 = undefined;
  let stateFromStores;
  id = guildChannels.id;
  let obj = importAllResult;
  importAllResult = importAllResult.useRef(-1);
  closure_5 = importAllResult.useRef(null);
  obj1 = fastList(headerHeight[16]);
  youBarTotalHeight = obj1.useYouBarTotalHeight();
  let tmp4 = id(importAllResult.useState(() => closure_1_21(fastList, guildChannels, headerHeight, youBarTotalHeight)), 2);
  const first = tmp4[0];
  beforeItem = first.beforeItem;
  afterItem = first.afterItem;
  closure_9 = tmp4[1];
  let items = [fastList, guildChannels, headerHeight, youBarTotalHeight];
  memo = importAllResult.useMemo(() => guildChannels(headerHeight[17])(() => {
    closure_0 = closure_1_21(closure_0, closure_1, closure_2, closure_6);
    callback((afterItem) => {
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
        tmp2 = closure_1_1;
        tmp3 = closure_1_2;
        tmp4 = closure_1_1(closure_1_2[18]);
      }
      return tmp6;
    });
  }, 100), items);
  const items1 = [memo, id];
  const effect = importAllResult.useEffect(() => {
    const items = [closure_9, memo];
    const batchedStoreListener = new fastList(headerHeight[19]).BatchedStoreListener(items, () => {
      const guildUnreadsSentinel = closure_1_10.getGuildUnreadsSentinel(closure_3);
      let tmp4 = closure_3 === ref2.current;
      if (tmp4) {
        tmp4 = guildUnreadsSentinel === ref.current;
      }
      if (!tmp4) {
        ref2.current = closure_3;
        ref.current = guildUnreadsSentinel;
        callback();
      }
    });
    batchedStoreListener.attach("channel-list-unread-bars");
    return () => {
      batchedStoreListener.detach();
    };
  }, items1);
  scrollPosValue = fastList.scrollPosValue;
  let obj2 = fastList(headerHeight[20]);
  class L {
    constructor() {
      return scrollPosValue.get();
    }
  }
  L.__closure = { scrollPosValue };
  L.__workletHash = 7966775243843;
  L.__initData = closure_22;
  const fn = function y(arg0, arg1) {
    if (arg0 !== arg1) {
      fastList(headerHeight[20]).runOnJS(memo)();
      const obj = fastList(headerHeight[20]);
    }
  };
  obj = { runOnJS: fastList(headerHeight[20]).runOnJS, debouncedUpdate: memo };
  fn.__closure = obj;
  fn.__workletHash = 17498480935002;
  fn.__initData = closure_23;
  const animatedReaction = obj2.useAnimatedReaction(L, fn);
  const tmp9 = stateFromStores();
  closure_12 = tmp9;
  const tmp11 = guildChannels(headerHeight[21])(fastList.guild);
  bannerWidth = tmp11.bannerWidth;
  listBottom = tmp11.listBottom;
  const tmp12 = guildChannels(headerHeight[22])();
  closure_15 = tmp12;
  const items2 = [tmp9.wrapper, bannerWidth, listBottom, tmp12];
  let isMention;
  const memo1 = importAllResult.useMemo(() => {
    const items = [wrapper.wrapper, ];
    const obj = { width: bannerWidth, bottom: null };
    let num = 0;
    if (!closure_15) {
      num = listBottom;
    }
    obj[1] = num;
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
      let obj = fastList(headerHeight[23]);
      const result = obj.triggerHapticFeedback(guildChannels(headerHeight[24]).IMPACT_LIGHT);
      obj = { section: null, item: null, animated: null, orientation: "center" };
      ({ section: obj2[0], row: obj2[1] } = beforeItem);
      obj[2] = !stateFromStores;
      fastList.scrollToLocation(obj);
    }
  }, items4);
  obj = { style: memo1, pointerEvents: "box-none", children: null };
  const callback1 = obj.useCallback(() => {
    if (null != afterItem) {
      let obj = fastList(headerHeight[23]);
      const result = obj.triggerHapticFeedback(guildChannels(headerHeight[24]).IMPACT_LIGHT);
      obj = { section: null, item: null, animated: null, orientation: "center" };
      ({ section: obj2[0], row: obj2[1] } = afterItem);
      obj[2] = !stateFromStores;
      fastList.scrollToLocation(obj);
    }
  }, items5);
  obj1 = { position: "top", shown: "before" === str, onPress: callback, isMention: null, scrollPosition: null, listPaddingTop: 0, headerHeight: null };
  let isMention2;
  let tmp10Result = tmp10(tmp2[25]);
  if (beforeItem != null) {
    isMention2 = beforeItem.isMention;
  }
  obj1[3] = isMention2;
  obj1[4] = fastList.scrollPosValue;
  obj1[6] = headerHeight;
  const items6 = [listBottom(tmp10Result, obj1), ];
  obj2 = { position: "bottom", shown: "after" === str, onPress: callback1, isMention: null, scrollPosition: null, listPaddingTop: 0, headerHeight: null };
  let isMention3;
  tmp10Result = tmp10(tmp2[25]);
  if (afterItem != null) {
    isMention3 = afterItem.isMention;
  }
  obj2[3] = isMention3;
  obj2[4] = fastList.scrollPosValue;
  obj2[6] = headerHeight;
  items6[1] = listBottom(tmp10Result, obj2);
  obj[2] = items6;
  return closure_15(closure_5, obj);
});
let obj = { wrapper: StyleSheet.absoluteFillObject };
let result = require("set").fileFinishedImporting("modules/channel_list_v2/native/unread_bars/ChannelsUnreadBars.tsx");

export default memoResult;