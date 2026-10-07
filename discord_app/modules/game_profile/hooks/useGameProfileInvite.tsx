// === Module 8392: useGameProfileInvite ===

// Module 8392 (useGameProfileInvite)
import DurationsDefault from "Durations" /* 1102 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8064 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import GameStore from "GameStore" /* 2007 */;
import GuildMembershipStore from "GuildMembershipStore" /* 2053 */;
import InviteStore from "InviteStore" /* 4877 */;

const require = globalThis.__r;

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
const Constants = fn(1085);
({ InviteStates: closure_7, QueryIds } = Constants);
const initialize = fn(504);
const obj2 = {
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
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "IconComponent", done: null };
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_2 = tmp2;
          c1 = 0;
          closure_129_0 = closure_0;
          if (null != closure_0) {
            c3 = 1;
            c4 = 1;
            const obj5 = { value: InstantInviteActionCreatorsDefault.resolveInvite(tmp18, "game_profile"), done: false };
            return obj5;
          }
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj = { value, done: true };
        return obj;
      } else if (!closure_130_8(closure_130_6.getInvite(closure_129_0))) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("Failed to resolve game profile invite: " + closure_129_0);
        throw error;
      }
      c4 = 3;
      return { value: "IconComponent", done: null };
    } catch (tmp22) {
      c4 = tmp;
      throw tmp22;
    }
  }
});
obj2.load = function() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
let closure_10 = initialize.createFetchStore(InviteStore, obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileInvite.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((websites, current) => {
  _require = current;
  const cResult = require("c").c(15);
  noop.useRef(current);
  if (cResult[0] !== current) {
    const fn = function u() {
      closure_1.current = current;
    };
    const items = [current];
    cResult[0] = current;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp5 = items;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = noop.useEffect(tmp4, tmp5);
  if (cResult[3] !== websites) {
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
    let tmp11 = null;
    if (null != arr) {
      tmp11 = null;
      if ("" !== arr) {
        tmp11 = arr;
      }
    }
    cResult[3] = websites;
    cResult[4] = tmp11;
    let tmp7 = tmp11;
  } else {
    tmp7 = cResult[4];
  }
  const tmp12 = closure_10(tmp7);
  data = tmp12.data;
  let isLoading = tmp12.isLoading;
  let tmp13 = null != tmp7;
  if (tmp13) {
    tmp13 = null == data;
  }
  if (tmp13) {
    if (!isLoading) {
      isLoading = null == tmp12.error;
    }
    tmp13 = isLoading;
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildMembershipStore];
    cResult[5] = items1;
    let tmp14 = items1;
  } else {
    tmp14 = cResult[5];
  }
  let id;
  if (data != null) {
    guild = data.guild;
    if (guild != null) {
      id = guild.id;
    }
  }
  if (cResult[6] !== id) {
    if (data != null) {
      let guild2 = data.guild;
      class G {
        constructor() {
          tmp = data;
          id = undefined;
          if (data != null) {
            guild = tmp.guild;
            if (guild != null) {
              id = guild.id;
            }
          }
          isMemberResult = null != id;
          if (isMemberResult) {
            id1 = undefined;
            tmp4 = closure_5;
            if (tmp != null) {
              guild2 = tmp.guild;
              if (guild2 != null) {
                id1 = guild2.id;
              }
            }
            isMemberResult = closure_5.isMember(id1);
          }
          return isMemberResult;
        }
      }
    }
    class G {
      constructor() {
        tmp = data;
        id = undefined;
        if (data != null) {
          guild = tmp.guild;
          if (guild != null) {
            id = guild.id;
          }
        }
        isMemberResult = null != id;
        if (isMemberResult) {
          id1 = undefined;
          tmp4 = closure_5;
          if (tmp != null) {
            guild2 = tmp.guild;
            if (guild2 != null) {
              id1 = guild2.id;
            }
          }
          isMemberResult = closure_5.isMember(id1);
        }
        return isMemberResult;
      }
    }
    cResult[6] = undefined;
    cResult[7] = G;
    let tmp17 = G;
  } else {
    tmp17 = cResult[7];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp14, tmp17);
  if (cResult[8] !== data) {
    const fn2 = function _() {
      if (null != data) {
        current = ref.current;
        if (current != null) {
          current(tmp);
        }
      }
    };
    const items2 = [];
    class G {
      constructor() {
        tmp = data;
        id = undefined;
        if (data != null) {
          guild = tmp.guild;
          if (guild != null) {
            id = guild.id;
          }
        }
        isMemberResult = null != id;
        if (isMemberResult) {
          id1 = undefined;
          tmp4 = closure_5;
          if (tmp != null) {
            guild2 = tmp.guild;
            if (guild2 != null) {
              id1 = guild2.id;
            }
          }
          isMemberResult = closure_5.isMember(id1);
        }
        return isMemberResult;
      }
    }
    cResult[8] = data;
    cResult[9] = fn2;
    cResult[10] = items2;
    let tmp21 = items2;
    let tmp20 = fn2;
  } else {
    tmp20 = cResult[9];
    tmp21 = cResult[10];
  }
  const effect1 = noop.useEffect(tmp20, tmp21);
  if (cResult[11] === data) {
    if (cResult[12] === stateFromStores) {
      if (cResult[13] === tmp13) {
        let tmp23 = cResult[14];
      }
      return tmp23;
    }
  }
  const obj3 = { invite: data, isMember: stateFromStores, isResolving: tmp13 };
  cResult[11] = data;
  cResult[12] = stateFromStores;
  cResult[13] = tmp13;
  cResult[14] = obj3;
  tmp23 = obj3;
  const tmpResult = require("initialize");
}) : ((websites, current) => {
  _require = current;
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
      guild = data.guild;
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
  const effect1 = noop.useEffect(() => {
    if (null != data) {
      current = ref.current;
      if (current != null) {
        current(tmp);
      }
    }
  }, items2);
  const obj3 = { invite: data, isMember: stateFromStores, isResolving: null };
  let tmp8 = null != tmp4 && null == data;
  if (tmp8) {
    if (!isLoading) {
      isLoading = null == tmp5.error;
    }
    tmp8 = isLoading;
  }
  obj3.isResolving = tmp8;
  return obj3;
});
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