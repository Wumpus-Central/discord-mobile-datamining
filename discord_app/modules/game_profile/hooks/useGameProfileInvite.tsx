// discord_app/modules/game_profile/hooks/useGameProfileInvite.tsx
import DurationsDefault from "../../../utils/Durations.tsx";
import InstantInviteActionCreatorsDefault from "../../../actions/InstantInviteActionCreators.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../_runtime/00019_react.js";
import GameStore from "../../games/GameStore.tsx";
import GuildMembershipStore from "../../../stores/GuildMembershipStore.tsx";
import InviteStore from "../../../stores/InviteStore.tsx";
import Constants from "../../../Constants.tsx";
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c3, c4;

let QueryIds;
let metroImportDefault;
const f97266 = (category) =>
  category.category === closure_1_0(closure_1_2[6]).ThirdPartyGameApplicationWebsiteCategory.DISCORD;
function isUsableGameProfileInvite(state) {
  let tmp = null != state && state.state !== metroImportDefault.RESOLVING;
  if (tmp) {
    let tmp4 = state.state !== metroImportDefault.EXPIRED && state.state !== tmp3.BANNED;
    if (tmp4) {
      let tmp5 = null != state.expires_at;
      if (tmp5) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const _Date2 = Date;
        const date = new Date(state.expires_at);
        const time = date.getTime();
        tmp5 = time <= Date.now();
      }
      tmp4 = !tmp5;
    }
    tmp = tmp4;
  }
  return tmp;
}
({ InviteStates: metroImportDefault, QueryIds } = Constants);
let obj = {
  getQueryId: QueryIds.GAME_PROFILE_INVITE,
  staleAfter: 5 * DurationsDefault.Seconds.MINUTE,
  failureStaleAfter: 5 * DurationsDefault.Seconds.MINUTE,
  get(arg0) {
    if (null == arg0) {
      return null;
    } else {
      const invite = InviteStore.getInvite(arg0);
      let tmp2 = null != invite && invite.state !== metroImportDefault.RESOLVING;
      if (tmp2) {
        let tmp4 = invite.state !== metroImportDefault.EXPIRED && invite.state !== tmp3.BANNED;
        if (tmp4) {
          let tmp5 = null != invite.expires_at;
          if (tmp5) {
            const _Date = Date;
            const self = this;
            const self2 = this;
            const _Date2 = Date;
            const date = new Date(invite.expires_at);
            const time = date.getTime();
            tmp5 = time <= Date.now();
          }
          tmp4 = !tmp5;
        }
        tmp2 = tmp4;
      }
      let tmp9 = null;
      if (tmp2) {
        tmp9 = invite;
      }
      return tmp9;
    }
  },
  load: function () {
    return closure_9(...arguments);
  },
};
const createFetchStore = get_initialized.createFetchStore;
let closure_9 = _asyncToGenerator(async function (arg0) {
  let obj2;
  let closure_0 = arg0;
  if (c4 === 2) {
    c4 = 3;
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
          let closure_2 = tmp;
          let c1 = 0;
          if (null != closure_0) {
            c3 = 1;
            c4 = 1;
            const obj5 = { value: obj2.resolveInvite(tmp15, "game_profile"), done: false };
            obj2 = InstantInviteActionCreatorsDefault;
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
      } else if (!closure_130_8(closure_130_6.getInvite(closure_0))) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const error = new Error("Failed to resolve game profile invite: " + closure_0);
        throw error;
      }
      c4 = 3;
      return { value: "IconComponent", done: null };
    } catch (tmp19) {
      c4 = 3;
      throw tmp19;
    }
  }
});
let closure_10 = createFetchStore(InviteStore, obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (websites, current) => {
      let data;
      let tmp14;
      let tmp18;
      let tmp21;
      let tmp22;
      let tmp4;
      let tmp5;
      let tmp7;
      _require = current;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(15);
      const ref = react.useRef(current);
      const tmp2 = data;
      if (cResult[0] !== current) {
        const fn = function u() {
          ref.current = current;
        };
        const items = [current];
        cResult[0] = current;
        cResult[1] = fn;
        cResult[2] = items;
        tmp5 = items;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const effect = react.useEffect(tmp4, tmp5);
      if (cResult[3] !== websites) {
        let found;
        if (websites != null) {
          websites = websites.websites;
          if (websites != null) {
            found = websites.find(f97266);
          }
        }
        let arr;
        if (found != null) {
          const str = found.url;
          const parts = str.split("/");
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
        tmp7 = tmp11;
      } else {
        tmp7 = cResult[4];
      }
      const tmp12 = closure_10(tmp7);
      data = tmp12.data;
      let isLoading = tmp12.isLoading;
      let tmp13 = null != tmp7;
      const error = tmp12.error;
      if (tmp13) {
        tmp13 = null == data;
      }
      if (tmp13) {
        if (!isLoading) {
          isLoading = null == error;
        }
        tmp13 = isLoading;
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildMembershipStore];
        cResult[5] = items1;
        tmp14 = items1;
      } else {
        tmp14 = cResult[5];
      }
      let id;
      const tmp16 = cResult[6];
      if (data != null) {
        let guild = data.guild;
        if (guild != null) {
          id = guild.id;
        }
      }
      if (tmp16 !== id) {
        if (data != null) {
          let guild2 = data.guild;
          class G {
            constructor() {
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
                const isMember = GuildMembershipStore.isMember;
                if (data != null) {
                  const guild2 = data.guild;
                  if (guild2 != null) {
                    id1 = guild2.id;
                  }
                }
                isMemberResult = isMember(id1);
              }
              return isMemberResult;
            }
          }
        }
        class G {
          constructor() {
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
              const isMember = GuildMembershipStore.isMember;
              if (data != null) {
                const guild2 = data.guild;
                if (guild2 != null) {
                  id1 = guild2.id;
                }
              }
              isMemberResult = isMember(id1);
            }
            return isMemberResult;
          }
        }
        cResult[6] = undefined;
        cResult[7] = G;
        tmp18 = G;
      } else {
        tmp18 = cResult[7];
      }
      const tmpResult = tmp(tmp2[7]);
      const stateFromStores = tmpResult.useStateFromStores(tmp14, tmp18);
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
              const isMember = GuildMembershipStore.isMember;
              if (data != null) {
                const guild2 = data.guild;
                if (guild2 != null) {
                  id1 = guild2.id;
                }
              }
              isMemberResult = isMember(id1);
            }
            return isMemberResult;
          }
        }
        cResult[8] = data;
        cResult[9] = fn2;
        cResult[10] = items2;
        tmp22 = items2;
        tmp21 = fn2;
      } else {
        tmp21 = cResult[9];
        tmp22 = cResult[10];
      }
      const effect1 = react.useEffect(tmp21, tmp22);
      if (cResult[11] === data) {
        if (cResult[12] === stateFromStores) {
          let tmp24;
          if (cResult[13] === tmp13) {
            tmp24 = cResult[14];
          }
          return tmp24;
        }
      }
      const obj3 = { invite: data, isMember: stateFromStores, isResolving: tmp13 };
      cResult[11] = data;
      cResult[12] = stateFromStores;
      cResult[13] = tmp13;
      cResult[14] = obj3;
      tmp24 = obj3;
    }
  : (websites, current) => {
      let tmp8;
      _require = current;
      const ref = react.useRef(current);
      const items = [current];
      const effect = react.useEffect(() => {
        ref.current = current;
      }, items);
      let found;
      if (websites != null) {
        websites = websites.websites;
        if (websites != null) {
          found = websites.find(f97266);
        }
      }
      let arr;
      if (found != null) {
        const str = found.url;
        const parts = str.split("/");
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
      const error = tmp5.error;
      const items1 = [GuildMembershipStore];
      const items2 = [data];
      const obj2 = require("get initialized");
      const stateFromStores = obj2.useStateFromStores(items1, () => {
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
          const isMember = GuildMembershipStore.isMember;
          if (data != null) {
            const guild2 = data.guild;
            if (guild2 != null) {
              id1 = guild2.id;
            }
          }
          isMemberResult = isMember(id1);
        }
        return isMemberResult;
      });
      const effect1 = react.useEffect(() => {
        if (null != data) {
          current = ref.current;
          if (current != null) {
            current(tmp);
          }
        }
      }, items2);
      const obj3 = { invite: data, isMember: stateFromStores, isResolving: tmp8 };
      tmp8 = null != tmp4 && null == data;
      if (tmp8) {
        if (!isLoading) {
          isLoading = null == error;
        }
        tmp8 = isLoading;
      }
      return obj3;
    };
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileInvite.tsx");

export default tmp6;
export const hasGameProfileDiscordWebsite = function hasGameProfileDiscordWebsite(game) {
  let flag;
  if (game != null) {
    const websites = game.websites;
    if (websites != null) {
      flag = websites.some(
        (category) =>
          category.category ===
          require("ThirdPartyGameApplicationWebsiteCategory").ThirdPartyGameApplicationWebsiteCategory.DISCORD,
      );
    }
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
export const preloadGameProfileInvite = function preloadGameProfileInvite(arg0) {
  let closure_0;
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
        found = websites.find(f97266);
      }
    }
    let arr;
    if (found != null) {
      const str = found.url;
      const parts = str.split("/");
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
