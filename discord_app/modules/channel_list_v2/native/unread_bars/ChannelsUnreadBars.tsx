// discord_app/modules/channel_list_v2/native/unread_bars/ChannelsUnreadBars.tsx
import debounceDefault from "../../../../../_runtime/00551_debounce.js";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import haptics_HapticFeedbackTypesDefault from "../../../haptics/HapticFeedbackTypes.tsx";
import useFontScale from "../../../screen/native/useFontScale.tsx";
import FastList from "../../../../lib/native/FastList.tsx";
import ChannelListState from "../../../guild_sidebar/ChannelListState.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import JoinedThreadsStore from "../../../threads/JoinedThreadsStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildReadStateStore from "../../../../stores/GuildReadStateStore.tsx";
import ReadStateStore from "../../../../stores/ReadStateStore.tsx";
import UserGuildSettingsStore from "../../../../stores/UserGuildSettingsStore.tsx";

const require = globalThis.__r;

require = fn;
function shouldSkipSection(diff2) {
  if (ChannelListState.SECTION_INDEX_CHANNEL_NOTICES !== diff2) {
    if (ChannelListState.SECTION_INDEX_GUILD_ACTIONS !== diff2) {
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
function findNearestUnreadItem(c0, c1, headerHeight, youBarTotalHeight) {
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
  } else if (0 === c0.containerSize) {
    return closure_18;
  } else {
    const scrollPosValue = c0.scrollPosValue;
    const result = getScaledChannelRowHeight(useFontScale.getFontScale()) / 2;
    value = scrollPosValue.get();
    const item2 = c0.getSectionItemFromPosition(headerHeight + value + result).item;
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
    const diff = layoutStart + c0.containerSize - headerHeight - youBarTotalHeight;
    items = c0.getItems();
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
            } else if (checkHasMentionOrUnread(arg1, item10031.section, item10031.item, MENTION)) {
              obj.return();
              return closure_18;
            }
            continue;
          }
          let sections = arg1.getSections();
          let diff2 = section;
          if (section >= 0) {
            while (true) {
              if (!shouldSkipSection(diff2)) {
                let diff1 = sections[diff2] - 1;
                if (0 <= diff1) {
                  while (true) {
                    if (diff2 !== section) {
                      if (checkHasMentionOrUnread(arg1, tmp33, tmp38, MENTION)) {
                        break;
                      }
                    }
                    diff1 = diff1 - 1;
                    continue;
                  }
                  let obj2 = { beforeItem: null, afterItem: null };
                  let obj3 = { section: diff2, row: diff1, isMention: MENTION === constants.MENTION };
                  obj2.beforeItem = obj3;
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
                    if (checkHasMentionOrUnread(arg1, tmp47, tmp50, MENTION)) {
                      break;
                    }
                  }
                  let obj4 = { afterItem: null, beforeItem: null };
                  let obj5 = { section: num5, row: num6, isMention: MENTION === constants.MENTION };
                  obj4.afterItem = obj5;
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
  tmp = GuildReadStateStore.getMentionCount(importDefault.id) > 0;
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const getScaledChannelRowHeight = fn(11199).getScaledChannelRowHeight;
const UnreadSetting = fn(6856).UnreadSetting;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(5170);
let closure_16 = createStyles.createStyles({ wrapper: StyleSheet.absoluteFillObject });
const constants = { MENTION: "mention", UNREAD: "unread" };
let closure_18 = { beforeItem: null, afterItem: null };
let closure_22 = {
  code: "(function ChannelsUnreadBarsTsx1(){let[scrollPosValue]=this.__closure;return scrollPosValue.get();})",
};
let closure_23 = {
  code: "(function ChannelsUnreadBarsTsx2(position,lastPosition){let[scheduleOnRN,debouncedUpdate]=this.__closure;if(position!==lastPosition){scheduleOnRN(debouncedUpdate);}})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/unread_bars/ChannelsUnreadBars.tsx");

export default noop.memo(function ChannelUnreadBarsComponent(fastList) {
  fastList = fastList.fastList;
  _require = fastList;
  const guildChannels = fastList.guildChannels;
  importDefault = guildChannels;
  const headerHeight = fastList.headerHeight;
  noop = undefined;
  let wrapper;
  let bannerWidth;
  let listBottom;
  closure_14 = undefined;
  let stateFromStores;
  const id = guildChannels.id;
  noop = noop.useRef(-1);
  closure_5 = noop.useRef(null);
  const youBarTotalHeight = require("useYouBarTotalHeight").useYouBarTotalHeight();
  let tmp4 = id(
    noop.useState(() => findNearestUnreadItem(c0, c1, headerHeight, youBarTotalHeight)),
    2,
  );
  const first = tmp4[0];
  let beforeItem = first.beforeItem;
  let afterItem = first.afterItem;
  closure_9 = tmp4[1];
  items = [fastList, guildChannels, headerHeight, youBarTotalHeight];
  const memo = noop.useMemo(
    () =>
      debounceDefault(() => {
        closure_0 = findNearestUnreadItem(_undefined, closure_1_1, headerHeight, youBarTotalHeight);
        closure_1_9((afterItem) => {
          if (afterItem === closure_0) {
            let tmp6 = afterItem;
          } else {
            afterItem = afterItem.afterItem;
            const afterItem2 = closure_0.afterItem;
            tmp6 = closure_0;
            if (tmp4(afterItem, afterItem2)) {
              beforeItem = afterItem.beforeItem;
              closure_2_1(headerHeight[18]);
              const beforeItem2 = closure_0.beforeItem;
              tmp6 = closure_0;
            }
            tmp4 = closure_2_1(headerHeight[18]);
          }
          return tmp6;
        });
      }, 100),
    items,
  );
  const items1 = [memo, id];
  const effect = noop.useEffect(() => {
    items = [closure_9, memo];
    const batchedStoreListener = new _undefined(headerHeight[19]).BatchedStoreListener(items, () => {
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
  const obj2 = require("useYouBarTotalHeight");
  const items2 = [closure_22, fastList.scrollPosValue];
  _require = undefined;
  [tmp8, tmp9] = items2;
  class ChannelsUnreadBarsTsx1 {
    constructor() {
      return closure_0.get();
    }
  }
  const items3 = [tmp9];
  ChannelsUnreadBarsTsx1.__closure = items3;
  ChannelsUnreadBarsTsx1.__workletHash = 16683573593754;
  ChannelsUnreadBarsTsx1.__initData = tmp8;
  const items4 = [closure_23, require("../../../../../_runtime/metro/01705__.js").scheduleOnRN, memo];
  _require = undefined;
  importDefault = undefined;
  [tmp10, tmp11, tmp12] = items4;
  class ChannelsUnreadBarsTsx2 {
    constructor(arg0, arg1) {
      if (fastList !== arg1) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_0(closure_1);
      }
      return;
    }
  }
  const items5 = [tmp11, tmp12];
  ChannelsUnreadBarsTsx2.__closure = items5;
  ChannelsUnreadBarsTsx2.__workletHash = 10887635959554;
  ChannelsUnreadBarsTsx2.__initData = tmp10;
  const animatedReaction = require("../../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    ChannelsUnreadBarsTsx1,
    ChannelsUnreadBarsTsx2,
  );
  const tmp14 = closure_16();
  wrapper = tmp14;
  const tmp16 = require("useChannelListSpecs")(fastList.guild);
  bannerWidth = tmp16.bannerWidth;
  listBottom = tmp16.listBottom;
  const tmp17 = require("useIsWindowLarge")();
  closure_14 = tmp17;
  const items6 = [tmp14.wrapper, bannerWidth, listBottom, tmp17];
  let isMention;
  const memo1 = obj.useMemo(() => {
    items = [wrapper.wrapper];
    const obj = { width: bannerWidth, bottom: null };
    let num = 0;
    if (!closure_14) {
      num = listBottom;
    }
    obj.bottom = num;
    items[1] = obj;
    return items;
  }, items6);
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
  let obj3 = require("../../../../../_runtime/metro/01652__.js");
  const items7 = [youBarTotalHeight];
  stateFromStores = require("initialize").useStateFromStores(items7, () => youBarTotalHeight.useReducedMotion);
  const items8 = [beforeItem, stateFromStores, fastList];
  const items9 = [afterItem, stateFromStores, fastList];
  const callback = obj.useCallback(() => {
    if (null != beforeItem) {
      const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      const obj3 = { section: null, item: null, animated: null, orientation: "center" };
      ({ section: obj2.section, row: obj2.item } = beforeItem);
      obj3.animated = !stateFromStores;
      _undefined.scrollToLocation(obj3);
    }
  }, items8);
  const obj4 = { style: memo1, pointerEvents: "box-none", children: null };
  const callback1 = obj.useCallback(() => {
    if (null != afterItem) {
      const result = HapticUtils.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
      const obj3 = { section: null, item: null, animated: null, orientation: "center" };
      ({ section: obj2.section, row: obj2.item } = afterItem);
      obj3.animated = !stateFromStores;
      _undefined.scrollToLocation(obj3);
    }
  }, items9);
  const obj5 = {
    position: "top",
    shown: "before" === str,
    onPress: callback,
    isMention: null,
    scrollPosition: null,
    listPaddingTop: 0,
    headerHeight: null,
  };
  let isMention2;
  const tmp24 = stateFromStores;
  const tmp25 = closure_5;
  const tmpResult = require("initialize");
  if (beforeItem != null) {
    isMention2 = beforeItem.isMention;
  }
  obj5.isMention = isMention2;
  obj5.scrollPosition = fastList.scrollPosValue;
  obj5.headerHeight = headerHeight;
  const items10 = [closure_14(require("ChannelsUnreadBar"), obj5)];
  const obj6 = {
    position: "bottom",
    shown: "after" === str,
    onPress: callback1,
    isMention: null,
    scrollPosition: null,
    listPaddingTop: 0,
    headerHeight: null,
  };
  let isMention3;
  const tmp15Result = require("ChannelsUnreadBar");
  if (afterItem != null) {
    isMention3 = afterItem.isMention;
  }
  obj6.isMention = isMention3;
  obj6.scrollPosition = fastList.scrollPosValue;
  obj6.headerHeight = headerHeight;
  items10[1] = closure_14(require("ChannelsUnreadBar"), obj6);
  obj4.children = items10;
  return tmp24(tmp25, obj4);
});
