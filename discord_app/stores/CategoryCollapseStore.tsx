// discord_app/stores/CategoryCollapseStore.tsx
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import Constants from "../Constants.tsx";
import preloaded_user_settings from "../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import GlobalUtils from "../utils/GlobalUtils.tsx";
import FavoritesUtils from "../modules/favorites/FavoritesUtils.tsx";
import UserSettingsProtoStore from "../modules/user_settings/UserSettingsProtoStore.tsx";
import ChannelStore from "ChannelStore.tsx";
import GuildAvailabilityStore from "GuildAvailabilityStore.tsx";
import GuildChannelStore from "GuildChannelStore.tsx";
import size from "../../_runtime/metro/00002__.js";

let closure_7, set;

function incrementVersion() {
  closure_8 = closure_8 + 1;
}
function syncFavoriteCategoryCollapse() {
  const favorites = UserSettingsProtoStore.settings.favorites;
  let favoriteChannels;
  if (favorites != null) {
    favoriteChannels = favorites.favoriteChannels;
  }
  if (null == favoriteChannels) {
    return false;
  } else {
    let flag4 = false;
    let flag2 = false;
    const keys = Object.keys();
    if (keys !== undefined) {
      let flag = flag4;
      flag2 = flag4;
      while (keys[tmp] !== undefined) {
        let tmp10 = favoriteChannels[tmp3];
        let tmp9 = tmp3;
        flag4 = flag;
        if (tmp10.type !== preloaded_user_settings.FavoriteChannelType.CATEGORY) {
          continue;
        } else {
          let flag3;
          let tmp5 = closure_7[tmp3];
          if (tmp10.collapsed) {
            if (!tmp5) {
              closure_7[tmp3] = true;
              flag = true;
            }
            flag3 = flag;
          } else {
            flag3 = flag;
            if (tmp5) {
              delete closure_7[tmp9];
              flag3 = true;
            }
          }
          flag4 = flag3;
          continue;
        }
        continue;
      }
    }
    return flag2;
  }
}
const ChannelTypes = Constants.ChannelTypes;
const metroImportDefault = {};
let closure_8 = 0;
const PersistedStore = get_initializedDefault.PersistedStore;
class CategoryCollapseStore extends PersistedStore {
  initialize(arg0) {
    const self = this;
    let obj = arg0;
    this.waitFor(ChannelStore, GuildAvailabilityStore, GuildChannelStore, UserSettingsProtoStore);
    this.removeChangeListener(incrementVersion);
    this.addChangeListener(incrementVersion);
    if (arg0 == null) {
      obj = {};
    }
    closure_7 = obj;
    const items = [UserSettingsProtoStore];
    self.syncWith(items, syncFavoriteCategoryCollapse);
  }
  getState() {
    return closure_7;
  }
  isCollapsed(arg0) {
    return !(null == arg0 || "null" === arg0 || !closure_7[arg0]) && closure_7[arg0];
  }
  getCollapsedCategories() {
    return closure_7;
  }
}
Object.defineProperty(CategoryCollapseStore.prototype, "version", {
  get: function version() {
    return closure_8;
  },
  set: undefined,
});
CategoryCollapseStore.displayName = "CategoryCollapseStore";
CategoryCollapseStore.persistKey = "collapsedCategories";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen(userGuildSettings) {
    if (!userGuildSettings.userGuildSettings.partial) {
      closure_7 = {};
    }
    const iter = userGuildSettings.userGuildSettings.entries[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (null != nextResult.channel_overrides) {
        let channel_overrides = tmp2.channel_overrides;
        for (const item10023 of channel_overrides) {
          let tmp7 = closure_7;
          let channel_id = item10023.channel_id;
          if (item10023.collapsed) {
            tmp7[channel_id] = true;
          } else {
            delete tmp7[channel_id];
          }
          continue;
        }
      }
      continue;
    }
    syncFavoriteCategoryCollapse();
  },
  USER_GUILD_SETTINGS_FULL_UPDATE: function handleUserGuildSettingsFullUpdate(userGuildSettings) {
    userGuildSettings = userGuildSettings.userGuildSettings;
    const mapped = userGuildSettings.map((guild_id) => guild_id.guild_id);
    set = new Set(mapped.filter(GlobalUtils.isNotNullish));
    for (const key10023 in closure_7) {
      let channel = ChannelStore.getChannel(key10023);
      let hasItem = null != channel && null != channel.guild_id && set.has(channel.guild_id);
      if (!hasItem) {
        continue;
      } else {
        delete closure_7[tmp9.id];
        continue;
      }
      continue;
    }
    const iter = userGuildSettings[Symbol.iterator]();
    while (iter !== undefined) {
      let channel_overrides = iter.next().channel_overrides;
      for (const item10040 of channel_overrides) {
        if (item10040.collapsed) {
          closure_7[tmp4.channel_id] = true;
        }
        continue;
      }
      continue;
    }
  },
  CATEGORY_COLLAPSE: function handleCategoryCollapse(id) {
    id = id.id;
    const favorites = UserSettingsProtoStore.settings.favorites;
    let favoriteChannels;
    if (favorites != null) {
      favoriteChannels = favorites.favoriteChannels;
    }
    let type;
    if (favoriteChannels != null) {
      if (favoriteChannels[id] != null) {
        type = tmp3.type;
      }
    }
    let tmp5 = type !== preloaded_user_settings.FavoriteChannelType.CATEGORY;
    type === preloaded_user_settings.FavoriteChannelType.CATEGORY;
    if (tmp5) {
      if (!closure_7[id]) {
        closure_7[id] = true;
      }
      tmp5 = tmp7;
    }
    return tmp5;
  },
  CATEGORY_EXPAND: function handleCategoryExpand(id) {
    id = id.id;
    const favorites = UserSettingsProtoStore.settings.favorites;
    let favoriteChannels;
    if (favorites != null) {
      favoriteChannels = favorites.favoriteChannels;
    }
    let type;
    if (favoriteChannels != null) {
      if (favoriteChannels[id] != null) {
        type = tmp3.type;
      }
    }
    let tmp5 = type !== preloaded_user_settings.FavoriteChannelType.CATEGORY;
    type === preloaded_user_settings.FavoriteChannelType.CATEGORY;
    if (tmp5) {
      if (null != closure_7[id]) {
        delete closure_7[id];
      }
      tmp5 = flag;
    }
    return tmp5;
  },
  CATEGORY_COLLAPSE_ALL: function handleCategoryCollapseAll(guildId) {
    guildId = guildId.guildId;
    const obj = FavoritesUtils;
    if (obj.isFavoritesGuildId(guildId)) {
      return false;
    } else {
      const arr = GuildChannelStore.getChannels(guildId)[ChannelTypes.GUILD_CATEGORY];
      const item = arr.forEach((channel) => {
        channel = channel.channel;
        if ("null" !== channel.id) {
          closure_1_7[channel.id] = true;
        }
      });
    }
  },
  CATEGORY_EXPAND_ALL: function handleCategoryExpandAll(guildId) {
    guildId = guildId.guildId;
    const obj = FavoritesUtils;
    if (obj.isFavoritesGuildId(guildId)) {
      return false;
    } else {
      const arr = GuildChannelStore.getChannels(guildId)[ChannelTypes.GUILD_CATEGORY];
      const item = arr.forEach((item) => {
        delete closure_1_7[item.channel.id];
      });
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    const id = channel.channel.id;
    if (null != closure_7[id]) {
      delete closure_7[id];
    }
    return false;
  },
};
const categoryCollapseStore = new CategoryCollapseStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/CategoryCollapseStore.tsx");

export default categoryCollapseStore;
