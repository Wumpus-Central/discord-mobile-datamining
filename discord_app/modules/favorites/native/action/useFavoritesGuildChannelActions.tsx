// === Module 10704: useFavoritesGuildChannelActions ===

// Module 10704 (useFavoritesGuildChannelActions)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import FavoriteStore from "FavoriteStore" /* 2054 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId, arg1) => {
  let dismissBetaTag;
  let hasAccess;
  let isExperimentEnabled;
  let shouldShowBetaTag;
  let tmp5;
  let tmp7;
  let tmp9;
  _require = channelId;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(17);
  const obj2 = require("FavoritesHooks");
  const favoritesAccess = obj2.useFavoritesAccess(arg1);
  ({ hasAccess, isExperimentEnabled } = favoritesAccess);
  if (cResult[0] !== channelId) {
    const tmpResult = tmp(2077);
    const isFavoritableChannelResult = tmpResult.isFavoritableChannel(channelId);
    cResult[0] = channelId;
    cResult[1] = isFavoritableChannelResult;
    tmp5 = isFavoritableChannelResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FavoriteStore];
    cResult[2] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== channelId.id) {
    const fn = function b() {
      return FavoriteStore.isFavorite(channelId.id);
    };
    cResult[3] = channelId.id;
    cResult[4] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[4];
  }
  const tmpResult5 = tmp(504);
  const stateFromStores = tmpResult5.useStateFromStores(tmp7, tmp9);
  const tmpResult6 = tmp(10036);
  const isFavoritesGuildSelected = tmpResult6.useIsFavoritesGuildSelected();
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildMemberStore, AuthenticationStore];
    cResult[5] = items1;
  }
  if (cResult[6] !== channelId.guild_id) {
    class C {
      constructor() {
        const isMemberResult = null == channelId.guild_id || GuildMemberStore.isMember(tmp.guild_id, AuthenticationStore.getId());
        return isMemberResult;
      }
    }
    cResult[6] = channelId.guild_id;
    cResult[7] = C;
  } else {
    class C {
      constructor() {
        const isMemberResult = null == channelId.guild_id || GuildMemberStore.isMember(tmp.guild_id, AuthenticationStore.getId());
        return isMemberResult;
      }
    }
  }
  tmp(504);
  if (tmp5) {
    class C {
      constructor() {
        const isMemberResult = null == channelId.guild_id || GuildMemberStore.isMember(tmp.guild_id, AuthenticationStore.getId());
        return isMemberResult;
      }
    }
  }
  const useFavoritesBetaTagDismissibleContent = tmp(10050).useFavoritesBetaTagDismissibleContent;
  tmp(10050);
  if (hasAccess) {
    class C {
      constructor() {
        const isMemberResult = null == channelId.guild_id || GuildMemberStore.isMember(tmp.guild_id, AuthenticationStore.getId());
        return isMemberResult;
      }
    }
  }
  if (hasAccess) {
    class C {
      constructor() {
        const isMemberResult = null == channelId.guild_id || GuildMemberStore.isMember(tmp.guild_id, AuthenticationStore.getId());
        return isMemberResult;
      }
    }
  }
  if (hasAccess) {
    class C {
      constructor() {
        const isMemberResult = null == channelId.guild_id || GuildMemberStore.isMember(tmp.guild_id, AuthenticationStore.getId());
        return isMemberResult;
      }
    }
  }
  const favoritesBetaTagDismissibleContent = useFavoritesBetaTagDismissibleContent(hasAccess);
  ({ shouldShowBetaTag, dismissBetaTag } = favoritesBetaTagDismissibleContent);
  if (cResult[8] === tmp5) {
    class C {
      constructor() {
        const isMemberResult = null == channelId.guild_id || GuildMemberStore.isMember(tmp.guild_id, AuthenticationStore.getId());
        return isMemberResult;
      }
    }
  }
  const obj3 = { isExperimentEnabled, hasFavoritesAccess: hasAccess, canFavoriteChannel: tmp5, isChannelInFavorites: stateFromStores, isFavoritesGuild: isFavoritesGuildSelected, channelId: channelId.id, shouldShowBetaTag, dismissBetaTag };
  cResult[8] = tmp5;
  cResult[9] = channelId.id;
  cResult[10] = dismissBetaTag;
  cResult[11] = hasAccess;
  cResult[12] = stateFromStores;
  cResult[13] = isExperimentEnabled;
  cResult[14] = isFavoritesGuildSelected;
  cResult[15] = shouldShowBetaTag;
  cResult[16] = obj3;
}) : ((channelId, arg1) => {
  let hasAccess;
  let isExperimentEnabled;
  _require = channelId;
  const tmp = _require;
  const obj = require("FavoritesHooks");
  const favoritesAccess = obj.useFavoritesAccess(arg1);
  ({ hasAccess, isExperimentEnabled } = favoritesAccess);
  const obj2 = require("FavoritesUtils");
  let isFavoritableChannelResult = obj2.isFavoritableChannel(channelId);
  const items = [FavoriteStore];
  const obj3 = require("get initialized");
  const stateFromStores = obj3.useStateFromStores(items, () => FavoriteStore.isFavorite(channelId.id));
  const obj4 = require("FavoritesHooks");
  const isFavoritesGuildSelected = obj4.useIsFavoritesGuildSelected();
  const items1 = [GuildMemberStore, AuthenticationStore];
  const obj5 = require("get initialized");
  if (isFavoritableChannelResult) {
    isFavoritableChannelResult = obj5.useStateFromStores(items1, () => {
      const isMemberResult = null == channelId.guild_id || GuildMemberStore.isMember(tmp.guild_id, AuthenticationStore.getId());
      return isMemberResult;
    });
  }
  let tmp8 = hasAccess;
  const useFavoritesBetaTagDismissibleContent = tmp(10050).useFavoritesBetaTagDismissibleContent;
  tmp(10050);
  if (hasAccess) {
    tmp8 = isFavoritableChannelResult;
  }
  if (tmp8) {
    tmp8 = !stateFromStores;
  }
  if (tmp8) {
    tmp8 = !isFavoritesGuildSelected;
  }
  const favoritesBetaTagDismissibleContent = useFavoritesBetaTagDismissibleContent(tmp8);
  return { isExperimentEnabled, hasFavoritesAccess: hasAccess, canFavoriteChannel: isFavoritableChannelResult, isChannelInFavorites: stateFromStores, isFavoritesGuild: isFavoritesGuildSelected, channelId: channelId.id, shouldShowBetaTag: favoritesBetaTagDismissibleContent.shouldShowBetaTag, dismissBetaTag: favoritesBetaTagDismissibleContent.dismissBetaTag };
});
const result = size.fileFinishedImporting("modules/favorites/native/action/useFavoritesGuildChannelActions.tsx");

export default tmp2;