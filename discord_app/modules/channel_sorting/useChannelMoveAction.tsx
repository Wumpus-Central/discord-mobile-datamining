// discord_app/modules/channel_sorting/useChannelMoveAction.tsx
import getChannelMoveBlockerDefault from "getChannelMoveBlocker.tsx";
import ChannelSortingUtils from "ChannelSortingUtils.tsx";
import GuildCategoryStore from "../../stores/GuildCategoryStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";
import UserGuildSettingsStore from "../../stores/UserGuildSettingsStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import getChannelListRecord from "getChannelListRecord.tsx";

const require = globalThis.__r;

require = fn;
function areDestinationsEqual(arr, arg1) {
  dependencyMap = arg1;
  return (
    arr.length === arg1.length &&
    arr.every(
      (id, index) =>
        id.id === dependencyMap[index].id &&
        id.label === dependencyMap[index].label &&
        id.disabled === dependencyMap[index].disabled,
    )
  );
}
const NULL_STRING_CHANNEL_ID = fn(1074).NULL_STRING_CHANNEL_ID;
let closure_12 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_sorting/useChannelMoveAction.tsx");

export default function useChannelMoveAction(getGuildId) {
  _require = getGuildId;
  const items = [SelectedGuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => guildId.getGuildId());
  let obj = require("initialize");
  const isFavoritesGuildIdResult = require("FavoritesUtils").isFavoritesGuildId(stateFromStores);
  let guildId = stateFromStores;
  if (!isFavoritesGuildIdResult) {
    guildId = getGuildId.getGuildId();
  }
  const obj2 = require("FavoritesUtils");
  const items1 = [GuildCategoryStore, GuildStore, PermissionStore, UserGuildSettingsStore];
  const items2 = [guildId, getGuildId];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(
    items1,
    () => {
      const obj = {
        categories: GuildCategoryStore.getCategories(guildId),
        listChannel: null,
        isBlocked: null,
        guild: null,
      };
      let tmp3 = getChannelListRecord(guildId, getGuildId.id);
      if (tmp3 == null) {
        tmp3 = getGuildId;
      }
      obj.listChannel = tmp3;
      obj.isBlocked = null != getChannelMoveBlockerDefault(getGuildId, guildId);
      obj.guild = GuildStore.getGuild(guildId);
      return obj;
    },
    items2,
  );
  ({ categories, listChannel, guild } = stateFromStoresObject);
  closure_129_0 = isFavoritesGuildIdResult;
  closure_129_1 = categories;
  closure_129_2 = listChannel;
  closure_129_3 = guild;
  let isCategoryResult = listChannel.isCategory();
  closure_129_4 = isCategoryResult;
  const tmpResult = require("initialize");
  const categoryKey = require("ChannelSortingUtils").getCategoryKey(listChannel.parent_id, categories);
  closure_129_5 = categoryKey;
  if (listChannel.isCategory()) {
    let _categories = categories._categories;
    let found = _categories.filter((channel) => channel.channel.id !== NULL_STRING_CHANNEL_ID);
  } else {
    found = tmp(10660).getSectionSiblings(listChannel, categories);
    const tmpResult5 = tmp(10660);
  }
  let id1 = null;
  if (found.length > 1) {
    const obj3 = { first: found[0], last: found[found.length - 1] };
    id1 = obj3;
  }
  const tmpResult4 = require("ChannelSortingUtils");
  const items3 = [GuildCategoryStore, GuildStore, PermissionStore, UserStore, RelationshipStore];
  const items4 = [categories, isCategoryResult, categoryKey, isFavoritesGuildIdResult, guild];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items3,
    () => {
      if (GuildStore) {
        let mapped = closure_12;
      } else {
        const _categories = guildId._categories;
        const found = _categories.filter((channel) => {
          channel = channel.channel;
          let canViewChannelListResult = getGuildId;
          if (!getGuildId) {
            let tmp5 = null;
            if (channel.id !== NULL_STRING_CHANNEL_ID) {
              tmp5 = channel;
            }
            canViewChannelListResult = closure_0(parent_id[13]).canViewChannelList(tmp5);
            const obj = closure_0(parent_id[13]);
          }
          return canViewChannelListResult;
        });
        mapped = found.map((channel) => {
          channel = channel.channel;
          let tmp = null;
          if (channel.id !== NULL_STRING_CHANNEL_ID) {
            tmp = channel;
          }
          const obj = {
            id: channel.id,
            label: closure_0(parent_id[14]).computeChannelName(channel, UserStore, RelationshipStore),
            disabled: null,
          };
          let tmp3 = channel.id === closure_1_5;
          if (!tmp3) {
            let tmp4 = getGuildId;
            if (!getGuildId) {
              let tmp6 = null != closure_1_3;
              if (tmp6) {
                tmp6 = guildId(parent_id[13])(tmp, tmp5);
              }
              tmp4 = tmp6;
            }
            tmp3 = !tmp4;
          }
          obj.disabled = tmp3;
          return obj;
        });
      }
      return mapped;
    },
    items4,
    areDestinationsEqual,
  );
  if (!isFavoritesGuildIdResult) {
    if (listChannel.isThread()) {
      return null;
    }
  }
  if (null != guildId) {
    if (!stateFromStoresObject.isBlocked) {
      if (!stateFromStores1.some((disabled) => !disabled.disabled)) {
        if (null == id1) {
          return null;
        }
      }
      if (!isCategoryResult) {
        isCategoryResult = categoryKey === NULL_STRING_CHANNEL_ID;
      }
      const obj4 = {
        label: null,
        guildId: null,
        channel: null,
        isFavorites: null,
        destinations: null,
        placements: null,
        getDestinationMove: null,
        getPlacementMove: null,
      };
      const intl = tmp(1115).intl;
      obj4.label = intl.string(tmp(1115).t.A95Fzm);
      obj4.guildId = guildId;
      obj4.channel = listChannel;
      obj4.isFavorites = isFavoritesGuildIdResult;
      obj4.destinations = stateFromStores1;
      if (null == id1) {
        obj4.placements = null;
        obj4.getDestinationMove = function getDestinationMove(id) {
          let tmp = null;
          if (id !== NULL_STRING_CHANNEL_ID) {
            tmp = id;
          }
          const obj = {
            targetParentId: tmp,
            updates: ChannelSortingUtils.getChannelPlacementUpdates(parent_id, guildId, id, "last"),
          };
          return obj;
        };
        obj4.getPlacementMove = function getPlacementMove(arg0) {
          parent_id = parent_id.parent_id;
          if (parent_id == null) {
            parent_id = null;
          }
          const obj = {
            targetParentId: parent_id,
            updates: ChannelSortingUtils.getChannelPlacementUpdates(parent_id, guildId, PermissionStore, arg0),
          };
          return obj;
        };
        return obj4;
      } else {
        const intl2 = tmp(1115).intl;
        const t = tmp(1115).t;
        const obj5 = {
          firstLabel: intl2.string(isCategoryResult ? t.IMqgs9 : t.Q9TKt6),
          lastLabel: null,
          isFirst: null,
          isLast: null,
        };
        const intl3 = tmp(1115).intl;
        let id = intl3.string;
        const t2 = tmp(1115).t;
        obj5.lastLabel = id(isCategoryResult ? t2["8fQe3x"] : t2["/Pkxmw"]);
        id = id1.first.channel.id;
        obj5.isFirst = id === listChannel.id;
        id1 = id1.last.channel.id;
        listChannel = listChannel.id;
        obj5.isLast = id1 === listChannel;
      }
    }
  }
  return null;
}
