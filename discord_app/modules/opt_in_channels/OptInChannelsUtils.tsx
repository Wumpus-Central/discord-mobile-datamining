// discord_app/modules/opt_in_channels/OptInChannelsUtils.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import router_utils from "../routing/router_utils.tsx";
import util from "../../intl/index.native.tsx";
import _modDef4153 from "../../../_runtime/metro/04153__.js";
import useChannelName from "../channel/useChannelName.tsx";
import fuzzysearchDefault from "../../../_runtime/05517_fuzzysearch.js";
import ReadStateActionCreators from "../../actions/ReadStateActionCreators.tsx";
import ChannelListState from "../guild_sidebar/ChannelListState.tsx";
import RecentChannelsActionCreators from "../recent_channels/RecentChannelsActionCreators.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildCategoryStore from "../../stores/GuildCategoryStore.tsx";
import ReadStateStore from "../../stores/ReadStateStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
function setIndex(arg0, index) {
  arg0.index = index;
}
const Constants = fn(1074);
({ Routes: closure_9, ChannelTypes: c10 } = Constants);
const ChannelConstants = fn(1964);
({ ChannelFlags: closure_11, StaticChannelRoute: closure_12 } = ChannelConstants);
const ChannelListGuildActionRow = fn(7534).ChannelListGuildActionRow;
const ReadStateTypes = fn(4742).ReadStateTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/opt_in_channels/OptInChannelsUtils.tsx");

export const useFilterCategoriesByQuery = function useFilterCategoriesByQuery(
  guildId,
  stateFromStores1,
  stateFromStores2,
  str,
) {
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
          let hasItem = tmp9(
            arg1,
            useChannelName.computeChannelName(channel.channel, UserStore, RelationshipStore).toLowerCase(),
          );
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
  ReadStateActionCreators.bulkAck(
    arr.map((channelId) => ({
      channelId,
      readStateType: constants.CHANNEL,
      messageId: ReadStateStore.lastMessageId(channelId),
    })),
  );
  if (null != tmp) {
    router_utils.transitionTo(React7.CHANNEL(arg0, tmp));
    const tmp2Result = router_utils;
  }
};
export const useChannelBrowserSections = function useChannelBrowserSections(
  guildId,
  filterCategoriesByQuery,
  arg2,
  rowHeight,
) {
  _require = guildId;
  closure_1 = filterCategoriesByQuery;
  dependencyMap = arg2;
  let obj = require("DismissibleContentUnsafeUtils");
  let result = obj.useIsDismissibleContentDismissed_UNSAFE(
    require("dismissible_content").DismissibleContent.CHANNEL_BROWSER_NUX,
  );
  const items = [ChannelStore];
  const items1 = [guildId];
  closure_3 = require("initialize").useStateFromStoresObject(
    items,
    () => {
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
    },
    items1,
  );
  const _categories = filterCategoriesByQuery._categories;
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
    obj = { rowCount: 1, rowHeight };
    mapped.unshift(obj);
  }
  return mapped;
};
export const useChannelBrowserChannelCount = function useChannelBrowserChannelCount(arg0) {
  _require = arg0;
  const items = [GuildCategoryStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    GuildCategoryStore.getCategories(closure_0),
  );
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
};
export const getActiveAgoTimestamp = function getActiveAgoTimestamp(id) {
  const intl = util.intl;
  let obj = SnowflakeUtilsDefault;
  let lastMessageIdResult = ReadStateStore.lastMessageId(id);
  if (lastMessageIdResult == null) {
    lastMessageIdResult = id;
  }
  obj = { timeAgo: null };
  obj.timeAgo = _modDef4153(obj.extractTimestamp(lastMessageIdResult)).fromNow();
  return intl.formatToPlainString(util.t["8N0BHR"], obj);
};
