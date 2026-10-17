// === Module 9408: useGameProfileCommunities ===

// Module 9408 (useGameProfileCommunities)
import DurationsDefault from "Durations" /* 1104 */;
import DiscoverableGuildsActionCreators from "DiscoverableGuildsActionCreators" /* 9410 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GameStore from "GameStore" /* 2022 */;
import DiscoverableGuildsStore from "DiscoverableGuildsStore" /* 9409 */;

require = fn;
function getCommunityGuildIds(gameId) {
  const game = GameStore.getGame(gameId);
  let communityGuildIds;
  if (game != null) {
    communityGuildIds = game.communityGuildIds;
  }
  if (communityGuildIds == null) {
    communityGuildIds = closure_4;
  }
  return communityGuildIds;
}
let closure_4 = [];
const initialize = fn(504);
const obj2 = {
  getQueryId(gameId) {
    const game = GameStore.getGame(gameId);
    let communityGuildIds;
    if (game != null) {
      communityGuildIds = game.communityGuildIds;
    }
    if (communityGuildIds == null) {
      communityGuildIds = closure_4;
    }
    let combined = null;
    if (communityGuildIds.length > 0) {
      const _HermesInternal = HermesInternal;
      combined = "game-community-guilds/" + gameId;
    }
    return combined;
  },
  get(gameId) {
    const game = GameStore.getGame(gameId);
    let communityGuildIds;
    if (game != null) {
      communityGuildIds = game.communityGuildIds;
    }
    if (communityGuildIds == null) {
      communityGuildIds = closure_4;
    }
    return DiscoverableGuildsStore.getGuilds(communityGuildIds);
  },
  load: null,
  staleAfter: null,
  failureStaleAfter: null
};
let closure_6 = asyncGeneratorStep(async (arg0) => {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          const arr = getCommunityGuildIds(closure_0);
          if (arr.length > 0) {
            c2 = 1;
            c1 = 1;
            const obj5 = { value: DiscoverableGuildsActionCreators.fetchDiscoverableGuilds(arr), done: false };
            return obj5;
          }
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c1 = 3;
      return { value: "IconComponent", done: null };
    } catch (tmp9) {
      c1 = tmp;
      throw tmp9;
    }
  }
});
obj2.load = function load() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
obj2.staleAfter = DurationsDefault.Seconds.HOUR;
obj2.failureStaleAfter = DurationsDefault.Seconds.MINUTE;
const fetchStore = initialize.createFetchStore(DiscoverableGuildsStore, obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileCommunities.tsx");

export default fetchStore;