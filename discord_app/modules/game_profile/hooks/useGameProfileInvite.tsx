// === Module 8838: useGameProfileInvite ===

// Module 8838 (useGameProfileInvite)
import DurationsDefault from "Durations" /* 1090 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8496 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GameStore from "GameStore" /* 1916 */;
import GuildMembershipStore from "GuildMembershipStore" /* 1959 */;
import InviteStore from "InviteStore" /* 4620 */;

const require = fn;
function isUsableGameProfileInvite(state) {
  let tmp = null != state;
  if (tmp) {
    tmp = state.state !== constants.RESOLVING;
  }
  if (tmp) {
    let tmp4 = state.state !== constants.EXPIRED && state.state !== tmp3.BANNED;
    if (tmp4) {
      let tmp5 = null != state.expires_at;
      if (tmp5) {
        const _Date = Date;
        const date = new Date(state.expires_at);
        const _Date2 = Date;
        const time = date.getTime();
        tmp5 = time <= Date.now();
      }
      tmp4 = !tmp5;
    }
    tmp = tmp4;
  }
  return tmp;
}
const Constants = fn(1074);
({ InviteStates: closure_7, QueryIds } = Constants);
fn(504);
const initialize = {
  getQueryId: QueryIds.GAME_PROFILE_INVITE,
  staleAfter: 5 * DurationsDefault.Seconds.MINUTE,
  failureStaleAfter: 5 * DurationsDefault.Seconds.MINUTE,
  get(arg0) {
    if (null == arg0) {
      return null;
    } else {
      const invite = InviteStore.getInvite(arg0);
      let tmp2 = null != invite;
      if (tmp2) {
        tmp2 = invite.state !== constants.RESOLVING;
      }
      if (tmp2) {
        let tmp4 = invite.state !== constants.EXPIRED && invite.state !== tmp3.BANNED;
        if (tmp4) {
          let tmp5 = null != invite.expires_at;
          if (tmp5) {
            const _Date = Date;
            const date = new Date(invite.expires_at);
            const _Date2 = Date;
            const time = date.getTime();
            tmp5 = time <= Date.now();
          }
          tmp4 = !tmp5;
        }
        tmp2 = tmp4;
      }
      let tmp11 = null;
      if (tmp2) {
        tmp11 = invite;
      }
      return tmp11;
    }
  },
  load: null
};
let closure_9 = asyncGeneratorStep(async (arg0) => {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp2;
          c1 = 0;
          closure_129_0 = closure_0;
          if (null != closure_0) {
            let obj1 = InstantInviteActionCreatorsDefault;
            c3 = 1;
            c4 = 1;
            obj1 = { value: null, done: false };
            obj1.value = obj1.resolveInvite(tmp18, "game_profile");
            return obj1;
          }
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        obj = { value, done: true };
        return obj;
      } else if (!closure_130_8(closure_130_6.getInvite(closure_129_0))) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("Failed to resolve game profile invite: " + closure_129_0);
        throw error;
      }
      c4 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp22) {
      c4 = tmp;
      throw tmp22;
    }
  }
});
initialize.load = function() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
let closure_10 = initialize.createFetchStore(InviteStore, initialize);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileInvite.tsx");

export default function useGameProfileInvite(websites, current) {
  _require = current;
  let obj = noop;
  noop.useRef(current);
  const items = [current];
  const effect = noop.useEffect(() => {
    closure_1.current = current;
  }, items);
  let found;
  if (websites != null) {
    websites = websites.websites;
    if (websites != null) {
      found = websites.find((category) => category.category === closure_1_0(closure_1_2[6]).ThirdPartyGameApplicationWebsiteCategory.DISCORD);
    }
  }
  let arr;
  if (found != null) {
    const parts = found.url.split("/");
    arr = parts.pop();
  }
  let tmp4 = null;
  if (null != arr) {
    tmp4 = null;
    if ("" !== arr) {
      tmp4 = arr;
    }
  }
  const tmp5 = closure_10(tmp4);
  const data = tmp5.data;
  let isLoading = tmp5.isLoading;
  const items1 = [GuildMembershipStore];
  const items2 = [data];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => {
    let id;
    if (data != null) {
      const guild = data.guild;
      if (guild != null) {
        id = guild.id;
      }
    }
    let isMemberResult = null != id;
    if (isMemberResult) {
      let id1;
      if (data != null) {
        const guild2 = data.guild;
        if (guild2 != null) {
          id1 = guild2.id;
        }
      }
      isMemberResult = GuildMembershipStore.isMember(id1);
    }
    return isMemberResult;
  });
  const effect1 = obj.useEffect(() => {
    if (null != data) {
      current = ref.current;
      if (current != null) {
        current(tmp);
      }
    }
  }, items2);
  obj = { invite: data, isMember: stateFromStores, isResolving: null };
  let tmp8 = null != tmp4 && null == data;
  if (tmp8) {
    if (!isLoading) {
      isLoading = null == tmp5.error;
    }
    tmp8 = isLoading;
  }
  obj.isResolving = tmp8;
  return obj;
};
export const hasGameProfileDiscordWebsite = function hasGameProfileDiscordWebsite(game) {
  let flag;
  if (game != null) {
    const websites = game.websites;
    if (websites != null) {
      flag = websites.some((category) => category.category === require("ThirdPartyGameApplicationWebsiteCategory").ThirdPartyGameApplicationWebsiteCategory.DISCORD);
    }
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
export const preloadGameProfileInvite = function preloadGameProfileInvite(arg0) {
  _require = arg0;
  const useGame = require("useGame").useGame;
  let items = [arg0];
  let many = useGame.fetchMany(items);
  many.then(() => {
    const game = GameStore.getGame(closure_0);
    let found;
    if (game != null) {
      const websites = game.websites;
      if (websites != null) {
        found = websites.find((category) => category.category === closure_1_0(closure_1_2[6]).ThirdPartyGameApplicationWebsiteCategory.DISCORD);
      }
    }
    let arr;
    if (found != null) {
      const parts = found.url.split("/");
      arr = parts.pop();
    }
    let tmp4 = null;
    if (null != arr) {
      tmp4 = null;
      if ("" !== arr) {
        tmp4 = arr;
      }
    }
    if (null != tmp4) {
      const items = [tmp4];
      const many = closure_10.fetchMany(items);
    }
  });
};