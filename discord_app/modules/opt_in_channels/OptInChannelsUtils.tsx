// discord_app/modules/opt_in_channels/OptInChannelsUtils.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import router_utils from "../routing/router_utils.tsx";
import intl2 from "../../intl/index.native.tsx";
import _modDef4461 from "../../../_runtime/metro/04461__.js";
import useChannelName from "../channel/useChannelName.tsx";
import ReadStateConstants from "../read_states/ReadStateConstants.tsx";
import fuzzysearchDefault from "../../../_runtime/05702_fuzzysearch.js";
import ReadStateActionCreators from "../../actions/ReadStateActionCreators.tsx";
import ChannelListState from "../guild_sidebar/ChannelListState.tsx";
import GuildSidebarConstants from "../guild_sidebar/GuildSidebarConstants.tsx";
import RecentChannelsActionCreators from "../recent_channels/RecentChannelsActionCreators.tsx";
import react from "../../../_runtime/00019_react.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildCategoryStore from "../../stores/GuildCategoryStore.tsx";
import ReadStateStore from "../../stores/ReadStateStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import Constants from "../../Constants.tsx";
import ChannelConstants from "../channel/ChannelConstants.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _null, _require, dependencyMap, importDefault;

let c10;
let c9;
let closure_12;
let unpackModuleId;
function setIndex(arg0, index) {
  arg0.index = index;
}
({ Routes: c9, ChannelTypes: c10 } = Constants);
({ ChannelFlags: unpackModuleId, StaticChannelRoute: closure_12 } = ChannelConstants);
const ChannelListGuildActionRow = GuildSidebarConstants.ChannelListGuildActionRow;
const ReadStateTypes = ReadStateConstants.ReadStateTypes;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, _categories, arg2, rowHeight) => {
      let closure_0;
      let closure_2;
      let first;
      let tmp10;
      let tmp7;
      let tmp8;
      _require = arg0;
      importDefault = _categories;
      dependencyMap = arg2;
      let obj = require("react");
      const cResult = obj.c(14);
      const obj2 = require("DismissibleContentUnsafeUtils");
      const result = obj2.useIsDismissibleContentDismissed_UNSAFE(
        require("dismissible_content").DismissibleContent.CHANNEL_BROWSER_NUX,
      );
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        let num = 0;
        cResult[0] = items;
        first = items;
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
              let num = obj[parent_id] ?? 0;
              obj[parent_id] = num + 1;
              continue;
            }
            continue;
          }
          return obj;
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        let num3 = 2;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = tmp(504);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp7, tmp8);
      if (cResult[4] === _categories) {
        if (cResult[5] === stateFromStoresObject) {
          if (cResult[6] === result) {
            if (cResult[7] === rowHeight) {
              if (cResult[8] === arg2) {
                tmp10 = cResult[9];
              }
              return tmp10;
            }
          }
        }
      }
      if (cResult[10] === _categories) {
        if (cResult[11] === stateFromStoresObject) {
          let tmp11;
          if (cResult[12] === arg2) {
            tmp11 = cResult[13];
          }
          _categories = _categories._categories;
          const mapped = _categories.map(tmp11);
          const tmp12 = result || null == rowHeight;
          if (!tmp12) {
            const obj3 = { rowCount: 1, rowHeight };
            const arr = mapped.unshift(obj3);
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
        constructor(channel) {
          let num;
          let num3;
          if ("null" === channel.channel.id) {
            num = arr.length;
          } else {
            num = 1;
          }
          const obj = { rowCount: num, rowHeight: num3 };
          num3 = 0;
          if (0 !== _categories[channel.channel.id].length) {
            num3 = closure_2;
          }
          return obj;
        }
      }
      cResult[10] = _categories;
      cResult[11] = stateFromStoresObject;
      cResult[12] = arg2;
      cResult[13] = E;
      tmp11 = E;
    }
  : (arg0, _categories, arg2, rowHeight) => {
      let closure_0;
      let closure_2;
      _require = arg0;
      let closure_1 = _categories;
      dependencyMap = arg2;
      let obj = require("DismissibleContentUnsafeUtils");
      let result = obj.useIsDismissibleContentDismissed_UNSAFE(
        require("dismissible_content").DismissibleContent.CHANNEL_BROWSER_NUX,
      );
      const items = [ChannelStore];
      const items1 = [arg0];
      const obj2 = require("get initialized");
      let closure_3 = obj2.useStateFromStoresObject(
        items,
        () => {
          const obj = {};
          const mutableGuildChannelsForGuild = ChannelStore.getMutableGuildChannelsForGuild(closure_0);
          for (const key10009 in mutableGuildChannelsForGuild) {
            let parent_id = mutableGuildChannelsForGuild[key10009].parent_id;
            if (null == parent_id) {
              continue;
            } else {
              let num = obj[parent_id] ?? 0;
              obj[parent_id] = num + 1;
              continue;
            }
            continue;
          }
          return obj;
        },
        items1,
      );
      _categories = _categories._categories;
      const mapped = _categories.map((channel) => {
        let num;
        let num3;
        if ("null" === channel.channel.id) {
          num = arr.length;
        } else {
          num = 1;
        }
        const obj = { rowCount: num, rowHeight: num3 };
        num3 = 0;
        if (0 !== _categories[channel.channel.id].length) {
          num3 = closure_2;
        }
        return obj;
      });
      if (!result) {
        result = null == rowHeight;
      }
      if (!result) {
        const obj3 = { rowCount: 1, rowHeight };
        const arr = mapped.unshift(obj3);
      }
      return mapped;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(3);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildCategoryStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
          return GuildCategoryStore.getCategories(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (null == stateFromStores._categories[stateFromStores._categories.length - 1]) {
        return 0;
      } else {
        const channel = tmp8.channel;
        let str;
        if (channel != null) {
          str = channel.id;
        }
        if (str == null) {
          str = "null";
        }
        let num5 = 0;
        if (null != stateFromStores[str]) {
          let diff;
          if (0 === stateFromStores[str].length) {
            diff = tmp8.index + 2 - length;
          } else {
            diff = arr2[arr2.length - 1].index + 2 - length;
          }
          num5 = diff;
        }
        return num5;
      }
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [GuildCategoryStore];
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () => GuildCategoryStore.getCategories(closure_0));
      if (null == stateFromStores._categories[stateFromStores._categories.length - 1]) {
        return 0;
      } else {
        const channel = tmp2.channel;
        let str;
        if (channel != null) {
          str = channel.id;
        }
        if (str == null) {
          str = "null";
        }
        let num2 = 0;
        if (null != stateFromStores[str]) {
          let diff;
          if (0 === stateFromStores[str].length) {
            diff = tmp2.index + 2 - length;
          } else {
            diff = arr2[arr2.length - 1].index + 2 - length;
          }
          num2 = diff;
        }
        return num2;
      }
    };
let result = size.fileFinishedImporting("modules/opt_in_channels/OptInChannelsUtils.tsx");

export const useFilterCategoriesByQuery = function useFilterCategoriesByQuery(
  guildId,
  stateFromStores1,
  stateFromStores2,
  str,
) {
  _require = stateFromStores1;
  let formatted = str.toLowerCase();
  let obj = require("OnboardingHomeUtils");
  const canSeeOnboardingHome = obj.useCanSeeOnboardingHome(guildId);
  const items = [canSeeOnboardingHome];
  const callback = canSeeOnboardingHome.useCallback((channel, arg1) => {
    let tmp = !canSeeOnboardingHome;
    if (canSeeOnboardingHome) {
      channel = channel.channel;
      tmp = !channel.hasFlag(unpackModuleId.IS_GUILD_RESOURCE_CHANNEL);
    }
    if (tmp) {
      let tmp4 = channel.channel.type !== constants.GUILD_DIRECTORY;
      if (tmp4) {
        let tmp6 = 0 === arg1.length;
        if (!tmp6) {
          const tmp9 = fuzzysearchDefault;
          const obj = useChannelName;
          const str = obj.computeChannelName(channel.channel, UserStore, RelationshipStore);
          let hasItem = tmp9(arg1, str.toLowerCase());
          if (!hasItem) {
            const str2 = channel.channel.topic;
            formatted = str2.toLowerCase();
            hasItem = formatted.includes(arg1);
          }
          tmp6 = hasItem;
        }
        tmp4 = tmp6;
      }
      tmp = tmp4;
    }
    return tmp;
  }, items);
  const items1 = [stateFromStores1, stateFromStores2, callback, formatted];
  return canSeeOnboardingHome.useMemo(() => {
    let _categories;
    const obj = {
      null: [],
      _categories: _categories.filter(
        (channel) => "null" === channel.channel.id || 0 === formatted.length || obj[channel.channel.id].length > 0,
      ),
    };
    const arr = stateFromStores2[constants.GUILD_CATEGORY];
    const item = arr.forEach((channel) => {
      channel = channel.channel;
      if ("null" === channel.id) {
        _null = _null.null;
        obj.null = _null.filter((item) => closure_1_4(item, closure_1_2));
      }
      const arr2 = _null[channel.id];
      obj[channel.id] = arr2.filter((item) => closure_1_4(item, closure_1_2));
    });
    _categories = obj._categories;
    const arr3 = stateFromStores2(formatted[13])(obj._categories, obj);
    const item1 = arr3.forEach(setIndex);
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
  let obj = RecentChannelsActionCreators;
  obj.bulkClearRecents(arg0, arr);
  const obj2 = ReadStateActionCreators;
  obj2.bulkAck(
    arr.map((channelId) => {
      const obj = { channelId, readStateType: constants.CHANNEL, messageId: ReadStateStore.lastMessageId(channelId) };
      return obj;
    }),
  );
  if (null != tmp) {
    const tmp2Result = router_utils;
    tmp2Result.transitionTo(React4.CHANNEL(arg0, tmp));
  }
};
export const useChannelBrowserSections = tmp4;
export const useChannelBrowserChannelCount = tmp5;
export const getActiveAgoTimestamp = function getActiveAgoTimestamp(id) {
  let tmp2Result;
  const intl = intl2.intl;
  const formatToPlainString = intl.formatToPlainString;
  const v8N0BHR = intl2.t["8N0BHR"];
  const tmp2 = _modDef4461;
  const extractTimestamp = SnowflakeUtilsDefault.extractTimestamp;
  SnowflakeUtilsDefault;
  let lastMessageIdResult = ReadStateStore.lastMessageId(id);
  if (lastMessageIdResult == null) {
    lastMessageIdResult = id;
  }
  const obj = { timeAgo: tmp2Result.fromNow() };
  tmp2Result = tmp2(extractTimestamp(lastMessageIdResult));
  return formatToPlainString(v8N0BHR, obj);
};
