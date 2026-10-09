// discord_app/modules/favorites/native/action/useFavoritesGuildChannelActions.tsx
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import FavoriteStore from "../../FavoriteStore.tsx";

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/action/useFavoritesGuildChannelActions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useFavoritesGuildChannelActions(channelId, arg1) {
      _require = channelId;
      const cResult = require("c").c(17);
      const obj = require("c");
      const favoritesAccess = require("FavoritesHooks").useFavoritesAccess(arg1);
      ({ hasAccess, isExperimentEnabled } = favoritesAccess);
      if (cResult[0] !== channelId) {
        const isFavoritableChannelResult = tmp(2089).isFavoritableChannel(channelId);
        cResult[0] = channelId;
        cResult[1] = isFavoritableChannelResult;
        let tmp5 = isFavoritableChannelResult;
        const tmpResult = tmp(2089);
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [FavoriteStore];
        cResult[2] = items;
        let tmp7 = items;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] !== channelId.id) {
        const fn = function b() {
          return FavoriteStore.isFavorite(channelId.id);
        };
        cResult[3] = channelId.id;
        cResult[4] = fn;
        let tmp9 = fn;
      } else {
        tmp9 = cResult[4];
      }
      const obj2 = require("FavoritesHooks");
      const stateFromStores = require("initialize").useStateFromStores(tmp7, tmp9);
      const tmpResult5 = require("initialize");
      const isFavoritesGuildSelected = require("FavoritesHooks").useIsFavoritesGuildSelected();
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildMemberStore, AuthenticationStore];
        cResult[5] = items1;
      }
      if (cResult[6] !== channelId.guild_id) {
        class B {
          constructor() {
            isMemberResult = null == closure_0.guild_id;
            if (!isMemberResult) {
              tmp3 = closure_3;
              tmp4 = closure_2;
              isMemberResult = closure_3.isMember(tmp.guild_id, closure_2.getId());
            }
            return isMemberResult;
          }
        }
        cResult[6] = channelId.guild_id;
        cResult[7] = B;
      } else {
        class B {
          constructor() {
            isMemberResult = null == closure_0.guild_id;
            if (!isMemberResult) {
              tmp3 = closure_3;
              tmp4 = closure_2;
              isMemberResult = closure_3.isMember(tmp.guild_id, closure_2.getId());
            }
            return isMemberResult;
          }
        }
      }
      require("initialize");
      if (tmp5) {
        class B {
          constructor() {
            isMemberResult = null == closure_0.guild_id;
            if (!isMemberResult) {
              tmp3 = closure_3;
              tmp4 = closure_2;
              isMemberResult = closure_3.isMember(tmp.guild_id, closure_2.getId());
            }
            return isMemberResult;
          }
        }
      }
      const tmpResult6 = require("FavoritesHooks");
      if (hasAccess) {
        class B {
          constructor() {
            isMemberResult = null == closure_0.guild_id;
            if (!isMemberResult) {
              tmp3 = closure_3;
              tmp4 = closure_2;
              isMemberResult = closure_3.isMember(tmp.guild_id, closure_2.getId());
            }
            return isMemberResult;
          }
        }
      }
      if (hasAccess) {
        class B {
          constructor() {
            isMemberResult = null == closure_0.guild_id;
            if (!isMemberResult) {
              tmp3 = closure_3;
              tmp4 = closure_2;
              isMemberResult = closure_3.isMember(tmp.guild_id, closure_2.getId());
            }
            return isMemberResult;
          }
        }
      }
      if (hasAccess) {
        class B {
          constructor() {
            isMemberResult = null == closure_0.guild_id;
            if (!isMemberResult) {
              tmp3 = closure_3;
              tmp4 = closure_2;
              isMemberResult = closure_3.isMember(tmp.guild_id, closure_2.getId());
            }
            return isMemberResult;
          }
        }
      }
      const favoritesBetaTagDismissibleContent =
        require("FavoritesDismissibleContent").useFavoritesBetaTagDismissibleContent(hasAccess);
      ({ shouldShowBetaTag, dismissBetaTag } = favoritesBetaTagDismissibleContent);
      if (cResult[8] === tmp5) {
        class B {
          constructor() {
            isMemberResult = null == closure_0.guild_id;
            if (!isMemberResult) {
              tmp3 = closure_3;
              tmp4 = closure_2;
              isMemberResult = closure_3.isMember(tmp.guild_id, closure_2.getId());
            }
            return isMemberResult;
          }
        }
      }
      cResult[8] = tmp5;
      cResult[9] = channelId.id;
      cResult[10] = dismissBetaTag;
      cResult[11] = hasAccess;
      cResult[12] = stateFromStores;
      cResult[13] = isExperimentEnabled;
      cResult[14] = isFavoritesGuildSelected;
      cResult[15] = shouldShowBetaTag;
      cResult[16] = {
        isExperimentEnabled,
        hasFavoritesAccess: hasAccess,
        canFavoriteChannel: tmp5,
        isChannelInFavorites: stateFromStores,
        isFavoritesGuild: isFavoritesGuildSelected,
        channelId: channelId.id,
        shouldShowBetaTag,
        dismissBetaTag,
      };
      const obj3 = {
        isExperimentEnabled,
        hasFavoritesAccess: hasAccess,
        canFavoriteChannel: tmp5,
        isChannelInFavorites: stateFromStores,
        isFavoritesGuild: isFavoritesGuildSelected,
        channelId: channelId.id,
        shouldShowBetaTag,
        dismissBetaTag,
      };
      const tmpResult8 = require("FavoritesDismissibleContent");
    }
  : function useFavoritesGuildChannelActions(channelId, arg1) {
      _require = channelId;
      const favoritesAccess = require("FavoritesHooks").useFavoritesAccess(arg1);
      ({ hasAccess, isExperimentEnabled } = favoritesAccess);
      const obj = require("FavoritesHooks");
      const tmp = _require;
      let isFavoritableChannelResult = require("FavoritesUtils").isFavoritableChannel(channelId);
      const obj2 = require("FavoritesUtils");
      const items = [FavoriteStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () =>
        FavoriteStore.isFavorite(channelId.id),
      );
      const obj3 = require("initialize");
      const isFavoritesGuildSelected = require("FavoritesHooks").useIsFavoritesGuildSelected();
      const obj4 = require("FavoritesHooks");
      const items1 = [GuildMemberStore, AuthenticationStore];
      if (isFavoritableChannelResult) {
        isFavoritableChannelResult = obj5.useStateFromStores(items1, () => {
          let isMemberResult = null == channelId.guild_id;
          if (!isMemberResult) {
            isMemberResult = GuildMemberStore.isMember(tmp.guild_id, AuthenticationStore.getId());
          }
          return isMemberResult;
        });
      }
      obj5 = require("initialize");
      let tmp7 = hasAccess;
      if (hasAccess) {
        tmp7 = isFavoritableChannelResult;
      }
      if (tmp7) {
        tmp7 = !stateFromStores;
      }
      if (tmp7) {
        tmp7 = !isFavoritesGuildSelected;
      }
      const favoritesBetaTagDismissibleContent = tmp(10295).useFavoritesBetaTagDismissibleContent(tmp7);
      return {
        isExperimentEnabled,
        hasFavoritesAccess: hasAccess,
        canFavoriteChannel: isFavoritableChannelResult,
        isChannelInFavorites: stateFromStores,
        isFavoritesGuild: isFavoritesGuildSelected,
        channelId: channelId.id,
        shouldShowBetaTag: favoritesBetaTagDismissibleContent.shouldShowBetaTag,
        dismissBetaTag: favoritesBetaTagDismissibleContent.dismissBetaTag,
      };
    };
