// === Module 11176: OptInChannelsUtils ===

// Module 11176 (OptInChannelsUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import router_utils from "router_utils" /* 1112 */;
import util from "util" /* 1126 */;
import _modDef4461 from "module_4461" /* 4461 */;
import useChannelName from "useChannelName" /* 5043 */;
import fuzzysearchDefault from "fuzzysearch" /* 5702 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 6605 */;
import ChannelListState from "ChannelListState" /* 7039 */;
import RecentChannelsActionCreators from "RecentChannelsActionCreators" /* 11177 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildCategoryStore from "GuildCategoryStore" /* 6606 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;

const require = globalThis.__r;

require = fn;
function setIndex(arg0, index) {
  arg0.index = index;
}
const Constants = fn(1085);
({ Routes: closure_9, ChannelTypes: c10 } = Constants);
const ChannelConstants = fn(2058);
({ ChannelFlags: closure_11, StaticChannelRoute: closure_12 } = ChannelConstants);
const ChannelListGuildActionRow = fn(7045).ChannelListGuildActionRow;
const ReadStateTypes = fn(5072).ReadStateTypes;
fn(558);
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, _categories, arg2, rowHeight) => {
  _require = arg0;
  importDefault = _categories;
  dependencyMap = arg2;
  const cResult = require("c").c(14);
  let obj = require("c");
  const tmp = _require;
  const result = require("DismissibleContentUnsafeUtils").useIsDismissibleContentDismissed_UNSAFE(require("dismissible_content").DismissibleContent.CHANNEL_BROWSER_NUX);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      const obj = {};
      const mutableGuildChannelsForGuild = ChannelStore.getMutableGuildChannelsForGuild(closure_0);
      for (const key10009 in mutableGuildChannelsForGuild) {
        let parent_id = mutableGuildChannelsForGuild[key10009].parent_id;
        if (null == parent_id) {
          continue;
        } else {
          let num = obj[parent_id];
          if (num == null) {
            num = 0;
          }
          obj[parent_id] = num + 1;
          continue;
        }
        continue;
      }
      return obj;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj2 = require("DismissibleContentUnsafeUtils");
  const stateFromStoresObject = tmp(504).useStateFromStoresObject(first, tmp7, tmp8);
  if (cResult[4] === _categories) {
    if (cResult[5] === stateFromStoresObject) {
      if (cResult[6] === result) {
        if (cResult[7] === rowHeight) {
          if (cResult[8] === arg2) {
            let tmp10 = cResult[9];
          }
          return tmp10;
        }
      }
    }
  }
  if (cResult[10] === _categories) {
    if (cResult[11] === stateFromStoresObject) {
      if (cResult[12] === arg2) {
        let tmp11 = cResult[13];
      }
      _categories = _categories._categories;
      const mapped = _categories.map(tmp11);
      let tmp12 = result;
      if (!result) {
        tmp12 = null == rowHeight;
      }
      if (!tmp12) {
        const obj3 = { rowCount: 1, rowHeight };
        mapped.unshift(obj3);
      }
      cResult[4] = _categories;
      cResult[5] = stateFromStoresObject;
      cResult[6] = result;
      cResult[7] = rowHeight;
      cResult[8] = arg2;
      cResult[9] = mapped;
      tmp10 = mapped;
    }
  }
  class E {
    constructor(arg0) {
      arr = closure_1[arg0.channel.id];
      if ("null" === arg0.channel.id) {
        num = arr.length;
      } else {
        tmp = closure_3;
        num = 1;
        num2 = 0;
      }
      obj = { rowCount: num, rowHeight: null };
      num3 = 0;
      if (0 !== arr.length) {
        num3 = closure_2;
      }
      obj.rowHeight = num3;
      return obj;
    }
  }
  cResult[10] = _categories;
  cResult[11] = stateFromStoresObject;
  cResult[12] = arg2;
  cResult[13] = E;
  tmp11 = E;
  const tmpResult = tmp(504);
}) : ((arg0, _categories, arg2, rowHeight) => {
  _require = arg0;
  closure_1 = _categories;
  dependencyMap = arg2;
  let result = require("DismissibleContentUnsafeUtils").useIsDismissibleContentDismissed_UNSAFE(require("dismissible_content").DismissibleContent.CHANNEL_BROWSER_NUX);
  let obj = require("DismissibleContentUnsafeUtils");
  const items = [ChannelStore];
  const items1 = [arg0];
  closure_3 = require("initialize").useStateFromStoresObject(items, () => {
    const obj = {};
    const mutableGuildChannelsForGuild = ChannelStore.getMutableGuildChannelsForGuild(closure_0);
    for (const key10009 in mutableGuildChannelsForGuild) {
      let parent_id = mutableGuildChannelsForGuild[key10009].parent_id;
      if (null == parent_id) {
        continue;
      } else {
        let num = obj[parent_id];
        if (num == null) {
          num = 0;
        }
        obj[parent_id] = num + 1;
        continue;
      }
      continue;
    }
    return obj;
  }, items1);
  _categories = _categories._categories;
  const mapped = _categories.map((channel) => {
    if ("null" === channel.channel.id) {
      let num = arr.length;
    } else {
      num = 1;
    }
    const obj = { rowCount: num, rowHeight: null };
    let num3 = 0;
    if (0 !== closure_1[channel.channel.id].length) {
      num3 = closure_2;
    }
    obj.rowHeight = num3;
    return obj;
  });
  if (!result) {
    result = null == rowHeight;
  }
  if (!result) {
    const obj3 = { rowCount: 1, rowHeight };
    mapped.unshift(obj3);
  }
  return mapped;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/opt_in_channels/OptInChannelsUtils.tsx");

export const useFilterCategoriesByQuery = function useFilterCategoriesByQuery(guildId, stateFromStores1, stateFromStores2, str) {
  _require = stateFromStores1;
  let formatted = str.toLowerCase();
  const canSeeOnboardingHome = require("OnboardingHomeUtils").useCanSeeOnboardingHome(guildId);
  const items = [canSeeOnboardingHome];
  const callback = canSeeOnboardingHome.useCallback((channel, arg1) => {
    let tmp = !canSeeOnboardingHome;
    if (canSeeOnboardingHome) {
      channel = channel.channel;
      tmp = !channel.hasFlag(constants2.IS_GUILD_RESOURCE_CHANNEL);
    }
    if (tmp) {
      let tmp4 = channel.channel.type !== constants.GUILD_DIRECTORY;
      if (tmp4) {
        let tmp6 = 0 === arg1.length;
        if (!tmp6) {
          const tmp9 = fuzzysearchDefault;
          let hasItem = tmp9(arg1, useChannelName.computeChannelName(channel.channel, UserStore, RelationshipStore).toLowerCase());
          if (!hasItem) {
            formatted = channel.channel.topic.toLowerCase();
            hasItem = formatted.includes(arg1);
          }
          tmp6 = hasItem;
          const str = useChannelName.computeChannelName(channel.channel, UserStore, RelationshipStore);
        }
        tmp4 = tmp6;
      }
      tmp = tmp4;
    }
    return tmp;
  }, items);
  const items1 = [stateFromStores1, stateFromStores2, callback, formatted];
  return canSeeOnboardingHome.useMemo(() => {
    const obj = { null: [], _categories: [] };
    const item = stateFromStores2[constants.GUILD_CATEGORY].forEach((channel) => {
      channel = channel.channel;
      if ("null" === channel.id) {
        const _null = closure_0.null;
        obj.null = _null.filter((item) => closure_1_4(item, closure_1_2));
      }
      obj[channel.id] = closure_0[channel.id].filter((item) => closure_1_4(item, closure_1_2));
    });
    const _categories = obj._categories;
    obj._categories = _categories.filter((channel) => {
      let tmp = "null" === channel.channel.id;
      if (!tmp) {
        tmp = 0 === formatted.length;
      }
      if (!tmp) {
        tmp = obj[channel.channel.id].length > 0;
      }
      return tmp;
    });
    const item1 = stateFromStores2(formatted[13])(obj._categories, obj).forEach(setIndex);
    return obj;
  }, items1);
};
export const getFirstRouteFor = function getFirstRouteFor(getSections) {
  let channel;
  const sections = getSections.getSections(false);
  if (sections[ChannelListState.SECTION_INDEX_GUILD_ACTIONS] > 0) {
    const guildActionSection = getSections.getGuildActionSection();
    const row = guildActionSection.getRow(0);
    if (ChannelListGuildActionRow.GUILD_HOME === row) {
      return constants3.GUILD_HOME;
    } else if (ChannelListGuildActionRow.GUILD_ROLE_SUBSCRIPTIONS === row) {
      return constants3.ROLE_SUBSCRIPTIONS;
    } else if (ChannelListGuildActionRow.GUILD_MOD_DASH_MEMBER_SAFETY === row) {
      return constants3.MEMBER_SAFETY;
    }
  }
  let SECTION_INDEX_UNCATEGORIZED_CHANNELS = ChannelListState.SECTION_INDEX_UNCATEGORIZED_CHANNELS;
  if (SECTION_INDEX_UNCATEGORIZED_CHANNELS < getSections.voiceChannelsSectionNumber) {
    while (true) {
      if (sections[SECTION_INDEX_UNCATEGORIZED_CHANNELS] > 0) {
        let channelFromSectionRow = getSections.getChannelFromSectionRow(SECTION_INDEX_UNCATEGORIZED_CHANNELS, 0);
        channel = undefined;
        if (channelFromSectionRow != null) {
          channel = channelFromSectionRow.channel;
        }
        if (null != channel) {
          break;
        }
      }
      SECTION_INDEX_UNCATEGORIZED_CHANNELS = SECTION_INDEX_UNCATEGORIZED_CHANNELS + 1;
    }
    return channel.id;
  }
  return null;
};
export const clearRecentChannels = function clearRecentChannels(arg0, arr) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  RecentChannelsActionCreators.bulkClearRecents(arg0, arr);
  ReadStateActionCreators.bulkAck(arr.map((channelId) => ({ channelId, readStateType: constants.CHANNEL, messageId: ReadStateStore.lastMessageId(channelId) })));
  if (null != tmp) {
    router_utils.transitionTo(options.CHANNEL(arg0, tmp));
    const tmp2Result = router_utils;
  }
};
export const useChannelBrowserSections = tmp4;
export const useChannelBrowserChannelCount = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildCategoryStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      return GuildCategoryStore.getCategories(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  let sum = stateFromStores._categories[stateFromStores._categories.length - 1];
  if (null == sum) {
    return 0;
  } else {
    const channel = sum.channel;
    let str;
    if (channel != null) {
      str = channel.id;
    }
    if (str == null) {
      str = "null";
    }
    if (null == stateFromStores[str]) {
      return 0;
    } else if (0 === arr2.length) {
      sum = sum.index + 2;
      let diff = sum - length;
    } else {
      diff = arr2[arr2.length - 1].index + 2 - length;
    }
  }
  const tmpResult = require("initialize");
}) : ((arg0) => {
  _require = arg0;
  const items = [GuildCategoryStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildCategoryStore.getCategories(closure_0));
  let sum = stateFromStores._categories[stateFromStores._categories.length - 1];
  if (null == sum) {
    return 0;
  } else {
    const channel = sum.channel;
    let str;
    if (channel != null) {
      str = channel.id;
    }
    if (str == null) {
      str = "null";
    }
    if (null == stateFromStores[str]) {
      return 0;
    } else if (0 === arr2.length) {
      sum = sum.index + 2;
      let diff = sum - length;
    } else {
      diff = arr2[arr2.length - 1].index + 2 - length;
    }
  }
});
export const getActiveAgoTimestamp = function getActiveAgoTimestamp(id) {
  const intl = util.intl;
  const tmp = _modDef4461;
  let lastMessageIdResult = ReadStateStore.lastMessageId(id);
  if (lastMessageIdResult == null) {
    lastMessageIdResult = id;
  }
  const obj2 = { timeAgo: null };
  obj2.timeAgo = tmp(SnowflakeUtilsDefault.extractTimestamp(lastMessageIdResult)).fromNow();
  return intl.formatToPlainString(util.t["8N0BHR"], obj2);
};