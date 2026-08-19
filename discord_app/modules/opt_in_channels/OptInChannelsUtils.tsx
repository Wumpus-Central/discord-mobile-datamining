// discord_app/modules/opt_in_channels/OptInChannelsUtils.tsx
import DISCORD_EPOCHDefault from "../../utils/SnowflakeUtils.tsx";
import transitionTo from "../routing/router_utils.tsx";
import getSystemLocale from "../../intl/index.native.tsx";
import tDefault from "../../../_runtime/03975_t.js";
import computeSubtitle from "../guild_sidebar/ChannelListState.tsx";
import ack from "../../actions/ReadStateActionCreators.tsx";
import _bulkClearRecents from "../recent_channels/RecentChannelsActionCreators.tsx";
import noop from "../../../_runtime/00019_noop.js";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import setIndex from "../../stores/GuildCategoryStore.tsx";
import generateOldThreadCutoff from "../../stores/ReadStateStore.tsx";
import markAllUserIdListsStale from "../../stores/RelationshipStore.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import ME from "../../Constants.tsx";
import { ChannelListGuildActionRow } from "../guild_sidebar/GuildSidebarConstants.tsx";
import { ReadStateTypes } from "../read_states/ReadStateConstants.tsx";
import set from "../channel/ChannelConstants.tsx";
import { UNSAFE_isDismissibleContentDismissed } from "../dismissible_content/DismissibleContentUnsafeUtils.tsx";

require = fn;
function setIndex(arg0, index) {
  arg0.index = index;
}
({ Routes: c9, ChannelTypes: c10 } = ME);
({ ChannelFlags: unpackModuleId, StaticChannelRoute: closure_12 } = require("set"));
let result = require("obj132").fileFinishedImporting("modules/opt_in_channels/OptInChannelsUtils.tsx");

export const useFilterCategoriesByQuery = function useFilterCategoriesByQuery(guildId, stateFromStores1, stateFromStores2, str) {
  const _require = stateFromStores1;
  closure_1 = stateFromStores2;
  let formatted = str.toLowerCase();
  const canSeeOnboardingHome = _require(formatted[10]).useCanSeeOnboardingHome(guildId);
  const items = [canSeeOnboardingHome];
  const callback = canSeeOnboardingHome.useCallback((channel) => {
    let tmp = !canSeeOnboardingHome;
    if (canSeeOnboardingHome) {
      channel = channel.channel;
      tmp = !channel.hasFlag(closure_1_11.IS_GUILD_RESOURCE_CHANNEL);
    }
    if (tmp) {
      let tmp4 = channel.channel.type !== closure_1_10.GUILD_DIRECTORY;
      if (tmp4) {
        let tmp6 = 0 === arg1.length;
        if (!tmp6) {
          const tmp9 = stateFromStores2(formatted[11]);
          const obj = stateFromStores1(formatted[12]);
          let hasItem = tmp9(arg1, stateFromStores1(formatted[12]).computeChannelName(channel.channel, closure_1_8, closure_1_7).toLowerCase());
          if (!hasItem) {
            formatted = channel.channel.topic.toLowerCase();
            hasItem = formatted.includes(arg1);
          }
          tmp6 = hasItem;
          const str = stateFromStores1(formatted[12]).computeChannelName(channel.channel, closure_1_8, closure_1_7);
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
    const item = stateFromStores2[closure_1_10.GUILD_CATEGORY].forEach((item, index) => {
      const channel = item.channel;
      if ("null" === channel.id) {
        const _null = obj.null;
        obj.null = _null.filter((item, index) => callback(item, closure_2));
      }
      obj[channel.id] = obj[channel.id].filter((item, index) => callback(item, closure_2));
    });
    const _categories = obj._categories;
    obj._categories = _categories.filter((item, index) => {
      let tmp = "null" === item.channel.id;
      if (!tmp) {
        tmp = 0 === formatted.length;
      }
      if (!tmp) {
        tmp = obj[item.channel.id].length > 0;
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
  if (sections[computeSubtitle.SECTION_INDEX_GUILD_ACTIONS] > 0) {
    const guildActionSection = getSections.getGuildActionSection();
    const row = guildActionSection.getRow(0);
    if (ChannelListGuildActionRow.GUILD_HOME === row) {
      return constants.GUILD_HOME;
    } else if (ChannelListGuildActionRow.GUILD_ROLE_SUBSCRIPTIONS === row) {
      return constants.ROLE_SUBSCRIPTIONS;
    } else if (ChannelListGuildActionRow.GUILD_MOD_DASH_MEMBER_SAFETY === row) {
      return constants.MEMBER_SAFETY;
    }
  }
  let SECTION_INDEX_UNCATEGORIZED_CHANNELS = computeSubtitle.SECTION_INDEX_UNCATEGORIZED_CHANNELS;
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
export const clearRecentChannels = function clearRecentChannels(closure_0, closure_1) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  _bulkClearRecents.bulkClearRecents(closure_0, importDefault);
  ack.bulkAck(importDefault.map((item, index) => ({ channelId: item, readStateType: constants.CHANNEL, messageId: closure_6.lastMessageId(item) })));
  if (null != tmp) {
    transitionTo.transitionTo(closure_9.CHANNEL(closure_0, tmp));
    const tmp2Result = transitionTo;
  }
};
export const useChannelBrowserSections = function useChannelBrowserSections(guildId, filterCategoriesByQuery, arg2) {
  const _require = guildId;
  closure_1 = filterCategoriesByQuery;
  dependencyMap = arg2;
  let obj = UNSAFE_isDismissibleContentDismissed;
  let result = obj.useIsDismissibleContentDismissed_UNSAFE(require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx").DismissibleContent.CHANNEL_BROWSER_NUX);
  const items = [closure_4];
  const items1 = [guildId];
  closure_3 = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStoresObject(items, () => {
    const obj = {};
    const mutableGuildChannelsForGuild = closure_1_4.getMutableGuildChannelsForGuild(closure_0);
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
  const _categories = filterCategoriesByQuery._categories;
  const mapped = _categories.map((item, index) => {
    if ("null" === item.channel.id) {
      let num = arr.length;
    } else {
      num = 1;
    }
    const obj = { rowCount: num, rowHeight: null };
    let num3 = 0;
    if (0 !== table[item.channel.id].length) {
      num3 = closure_2;
    }
    obj[1] = num3;
    return obj;
  });
  if (!result) {
    result = null == arg3;
  }
  if (!result) {
    obj = { rowCount: 1, rowHeight: null };
    obj[1] = arg3;
    mapped.unshift(obj);
  }
  return mapped;
};
export const useChannelBrowserChannelCount = function useChannelBrowserChannelCount(arg0) {
  const _require = arg0;
  const items = [closure_5];
  const stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => closure_1_5.getCategories(closure_0));
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
  const intl = getSystemLocale.intl;
  let obj = DISCORD_EPOCHDefault;
  let lastMessageIdResult = closure_6.lastMessageId(id);
  if (lastMessageIdResult == null) {
    lastMessageIdResult = id;
  }
  obj = { timeAgo: null };
  obj[0] = tDefault(obj.extractTimestamp(lastMessageIdResult)).fromNow();
  return intl.formatToPlainString(getSystemLocale.t["8N0BHR"], obj);
};