// discord_app/modules/premium/powerups/hooks/useMaybeGetSortedBoosts.tsx
import SnowflakeUtilsDefault from "../../../../utils/SnowflakeUtils.tsx";
import util from "../../../../intl/index.native.tsx";
import actions_BoostingActionCreators from "../../../../actions/BoostingActionCreators.tsx";
import getBoostLifecyclePhase from "../utils/getBoostLifecyclePhase.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AppliedGuildBoostStore from "../../../../stores/AppliedGuildBoostStore.tsx";
import GuildMemberRequesterStore from "../../../../stores/GuildMemberRequesterStore.tsx";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";

const require = globalThis.__r;

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useMaybeGetSortedBoosts(arg0, arg1) {
      _require = arg0;
      const cResult = require("c").c(37);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AppliedGuildBoostStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function f() {
          let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(closure_0);
          if (appliedGuildBoostsForGuild == null) {
            appliedGuildBoostsForGuild = [];
          }
          return appliedGuildBoostsForGuild;
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp7 = items1;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      let obj = require("c");
      const stateFromStoresArray = require("initialize").useStateFromStoresArray(first, tmp6, tmp7);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function h() {
          return Date.now();
        };
        cResult[4] = fn2;
        let tmp8 = fn2;
      } else {
        tmp8 = cResult[4];
      }
      const first1 = stateFromStoresArray1(stateFromStores.useState(tmp8), 1)[0];
      if (cResult[5] === stateFromStoresArray) {
        if (cResult[6] === arg1) {
          if (cResult[7] === first1) {
            dependencyMap = tmp10;
            const _Symbol = Symbol;
            if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
              const items2 = [GuildMemberStore];
              cResult[12] = items2;
              let tmp14 = items2;
            } else {
              tmp14 = cResult[12];
            }
            if (cResult[13] === arg0) {
              if (cResult[14] === tmp10) {
                let tmp16 = cResult[15];
                let tmp17 = cResult[16];
              }
              stateFromStoresArray1 = tmp(504).useStateFromStoresArray(tmp14, tmp16, tmp17);
              if (cResult[17] === stateFromStoresArray1) {
                if (cResult[18] === arg0) {
                  let tmp19 = cResult[19];
                  let tmp20 = cResult[20];
                }
                const effect = obj3.useEffect(tmp19, tmp20);
                const _Symbol2 = Symbol;
                if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                  const items3 = [GuildStore];
                  cResult[21] = items3;
                  class M {
                    constructor() {
                      arr = closure_3;
                      if (closure_3.length > 0) {
                        item = arr.forEach((item) => stateFromStores1.requestMember(closure_1_0, item));
                      }
                      return;
                    }
                  }
                } else {
                  const tmp23 = cResult[21];
                }
                class M {
                  constructor() {
                    arr = closure_3;
                    if (closure_3.length > 0) {
                      item = arr.forEach((item) => stateFromStores1.requestMember(closure_1_0, item));
                    }
                    return;
                  }
                }
                class A {
                  constructor() {
                    set = new Set();
                    closure_0 = set;
                    item = closure_2.forEach((boost) => {
                      boost = boost.boost;
                      if (null == GuildMemberStore.getMember(closure_0, boost.userId)) {
                        set.add(boost.userId);
                      }
                    });
                    return Array.from(set);
                  }
                }
                stateFromStores = obj6.useStateFromStores(tmp23, tmp25);
                if (cResult[24] !== stateFromStoresArray) {
                  const _Symbol3 = Symbol;
                  if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                    class T {
                      constructor(arg0) {
                        return !arg0.ended;
                      }
                    }
                    cResult[26] = T;
                  } else {
                    class T {
                      constructor(arg0) {
                        return !arg0.ended;
                      }
                    }
                  }
                  const found = stateFromStoresArray.filter(T);
                  class M {
                    constructor() {
                      arr = closure_3;
                      if (closure_3.length > 0) {
                        item = arr.forEach((item) => stateFromStores1.requestMember(closure_1_0, item));
                      }
                      return;
                    }
                  }
                  class A {
                    constructor() {
                      set = new Set();
                      closure_0 = set;
                      item = closure_2.forEach((boost) => {
                        boost = boost.boost;
                        if (null == GuildMemberStore.getMember(closure_0, boost.userId)) {
                          set.add(boost.userId);
                        }
                      });
                      return Array.from(set);
                    }
                  }
                  cResult[25] = found;
                } else {
                  class T {
                    constructor(arg0) {
                      return !arg0.ended;
                    }
                  }
                  AppliedGuildBoostStore = tmp30;
                  const _Symbol4 = Symbol;
                  if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                    class T {
                      constructor(arg0) {
                        return !arg0.ended;
                      }
                    }
                    const items4 = [AppliedGuildBoostStore];
                    cResult[27] = items4;
                    class M {
                      constructor() {
                        arr = closure_3;
                        if (closure_3.length > 0) {
                          item = arr.forEach((item) => stateFromStores1.requestMember(closure_1_0, item));
                        }
                        return;
                      }
                    }
                  } else {
                    class T {
                      constructor(arg0) {
                        return !arg0.ended;
                      }
                    }
                  }
                  class M {
                    constructor() {
                      arr = closure_3;
                      if (closure_3.length > 0) {
                        item = arr.forEach((item) => stateFromStores1.requestMember(closure_1_0, item));
                      }
                      return;
                    }
                  }
                  class A {
                    constructor() {
                      set = new Set();
                      closure_0 = set;
                      item = closure_2.forEach((boost) => {
                        boost = boost.boost;
                        if (null == GuildMemberStore.getMember(closure_0, boost.userId)) {
                          set.add(boost.userId);
                        }
                      });
                      return Array.from(set);
                    }
                  }
                  const stateFromStores1 = obj7.useStateFromStores(tmp31, tmp32, tmp33);
                  if (cResult[31] === tmp30) {
                    class T {
                      constructor(arg0) {
                        return !arg0.ended;
                      }
                    }
                  }
                  class N {
                    constructor() {
                      tmp = closure_4 === length && closure_6;
                      if (!tmp) {
                        tmp2 = closure_0;
                        tmp3 = closure_2;
                        obj = closure_0(closure_2[10]);
                        tmp4 = closure_0;
                        appliedGuildBoostsForGuild = obj.fetchAppliedGuildBoostsForGuild(closure_0, {
                          includeEnded: true,
                        });
                      }
                      return;
                    }
                  }
                  const items5 = [arg0, stateFromStores, tmp30, stateFromStores1];
                  cResult[31] = tmp30;
                  cResult[32] = stateFromStores;
                  cResult[33] = arg0;
                  cResult[34] = stateFromStores1;
                  cResult[35] = N;
                  cResult[36] = items5;
                }
              }
              class M {
                constructor() {
                  arr = closure_3;
                  if (closure_3.length > 0) {
                    item = arr.forEach((item) => stateFromStores1.requestMember(closure_1_0, item));
                  }
                  return;
                }
              }
              class A {
                constructor() {
                  set = new Set();
                  closure_0 = set;
                  item = closure_2.forEach((boost) => {
                    boost = boost.boost;
                    if (null == GuildMemberStore.getMember(closure_0, boost.userId)) {
                      set.add(boost.userId);
                    }
                  });
                  return Array.from(set);
                }
              }
              tmp21[0] = arg0;
              tmp21[1] = stateFromStoresArray1;
              cResult[18] = arg0;
              cResult[19] = M;
              cResult[20] = tmp21;
              tmp20 = tmp21;
              tmp19 = M;
              const tmpResult2 = tmp(504);
            }
            class A {
              constructor() {
                set = new Set();
                closure_0 = set;
                item = closure_2.forEach((boost) => {
                  boost = boost.boost;
                  if (null == GuildMemberStore.getMember(closure_0, boost.userId)) {
                    set.add(boost.userId);
                  }
                });
                return Array.from(set);
              }
            }
            const items6 = [arg0, cResult[8]];
            cResult[13] = arg0;
            cResult[14] = cResult[8];
            cResult[15] = A;
            cResult[16] = items6;
            tmp17 = items6;
            tmp16 = A;
          }
        }
      }
      if (cResult[9] !== first1) {
        class T {
          constructor(arg0) {
            return !arg0.ended;
          }
        }
        cResult[9] = first1;
        cResult[10] = I;
        class M {
          constructor() {
            arr = closure_3;
            if (closure_3.length > 0) {
              item = arr.forEach((item) => stateFromStores1.requestMember(closure_1_0, item));
            }
            return;
          }
        }
      } else {
        class T {
          constructor(arg0) {
            return !arg0.ended;
          }
        }
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor(arg0) {
            return !arg0.ended;
          }
        }
        cResult[11] = tmp12;
      } else {
        class T {
          constructor(arg0) {
            return !arg0.ended;
          }
        }
      }
      const mapped = stateFromStoresArray.map(sorted);
      sorted = mapped.sort(tmp12);
      const substr = sorted.slice(0, arg1);
      cResult[5] = stateFromStoresArray;
      cResult[6] = arg1;
      cResult[7] = first1;
      cResult[8] = substr;
      obj3 = stateFromStores;
      const tmpResult = require("initialize");
    }
  : function useMaybeGetSortedBoosts(arg0, arg1) {
      _require = arg0;
      closure_1 = arg1;
      const items = [stateFromStoresArray1];
      const items1 = [arg0];
      stateFromStoresArray = require("initialize").useStateFromStoresArray(
        items,
        () => {
          let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(closure_0);
          if (appliedGuildBoostsForGuild == null) {
            appliedGuildBoostsForGuild = [];
          }
          return appliedGuildBoostsForGuild;
        },
        items1,
      );
      first = first(
        memo.useState(() => Date.now()),
        1,
      )[0];
      const items2 = [stateFromStoresArray, arg1, first];
      memo = memo.useMemo(() => {
        const mapped = stateFromStoresArray.map((boost) => {
          const boostLifecycleInfo = closure_0(stateFromStoresArray[9]).getBoostLifecycleInfo(boost, first);
          const obj = closure_0(stateFromStoresArray[9]);
          const boostLifecycleTimestamp = closure_0(stateFromStoresArray[9]).getBoostLifecycleTimestamp(
            boost,
            boostLifecycleInfo,
          );
          if ("expiring" === boostLifecycleInfo.phase) {
            const obj3 = {
              boost,
              phase: "expiring",
              sortKey: boostLifecycleTimestamp,
              endsAt: boostLifecycleInfo.endsAt,
            };
            let obj4 = obj3;
          } else {
            obj4 = { boost, phase: boostLifecycleInfo.phase, sortKey: boostLifecycleTimestamp };
          }
          return obj4;
        });
        const sorted = mapped.sort((sortKey, sortKey2) => sortKey2.sortKey - sortKey.sortKey);
        return sorted.slice(0, closure_1);
      }, items2);
      let obj = require("initialize");
      const items3 = [memo1];
      const items4 = [arg0, memo];
      stateFromStoresArray1 = require("initialize").useStateFromStoresArray(
        items3,
        () => {
          const set = new Set();
          const item = memo.forEach((boost) => {
            boost = boost.boost;
            if (null == GuildMemberStore.getMember(closure_0, boost.userId)) {
              set.add(boost.userId);
            }
          });
          return Array.from(set);
        },
        items4,
      );
      const items5 = [arg0, stateFromStoresArray1];
      const effect = memo.useEffect(() => {
        if (stateFromStoresArray1.length > 0) {
          const item = stateFromStoresArray1.forEach((item) => stateFromStores.requestMember(closure_1_0, item));
        }
      }, items5);
      const obj2 = require("initialize");
      const items6 = [stateFromStores1];
      const stateFromStores = require("initialize").useStateFromStores(items6, () => {
        guild = GuildStore.getGuild(closure_0);
        let prop;
        if (guild != null) {
          prop = guild.premiumSubscriberCount;
        }
        return prop;
      });
      const items7 = [stateFromStoresArray];
      memo1 = memo.useMemo(() => stateFromStoresArray.filter((ended) => !ended.ended).length, items7);
      let obj3 = require("initialize");
      const items8 = [stateFromStoresArray1];
      const items9 = [arg0];
      stateFromStores1 = require("initialize").useStateFromStores(
        items8,
        () => null != AppliedGuildBoostStore.getLastFetchedAtForGuild(closure_0),
        items9,
      );
      const items10 = [arg0, stateFromStores, memo1, stateFromStores1];
      const effect1 = memo.useEffect(() => {
        if (!tmp) {
          const appliedGuildBoostsForGuild = actions_BoostingActionCreators.fetchAppliedGuildBoostsForGuild(closure_0, {
            includeEnded: true,
          });
        }
        tmp = stateFromStores === memo1 && stateFromStores1;
      }, items10);
      return memo;
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useMaybeGetSortedBoosts.tsx");

export default tmp2;
export const useGetBoostUserConfig = ReactCompilerGating.isReactCompilerEnabled()
  ? function useGetBoostUserConfig(id) {
      _require = id;
      const cResult = require("c").c(14);
      if (cResult[0] !== id.id) {
        const _Date = Date;
        const date = new Date(SnowflakeUtilsDefault.extractTimestamp(id.id));
        cResult[0] = id.id;
        cResult[1] = date;
        let tmp4 = date;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildMemberStore];
        cResult[2] = items;
        let tmp11 = items;
      } else {
        tmp11 = cResult[2];
      }
      if (cResult[3] === id.guildId) {
        let user = id.user;
        let username1;
        if (user != null) {
          username1 = user.username;
        }
        if (cResult[4] === username1) {
          if (cResult[5] === id.userId) {
            let tmp15 = cResult[6];
          }
          if (cResult[7] !== id) {
            const items1 = [id];
            cResult[7] = id;
            cResult[8] = items1;
            let tmp17 = items1;
          } else {
            tmp17 = cResult[8];
          }
          const stateFromStoresObject = tmp(504).useStateFromStoresObject(tmp11, tmp15, tmp17);
          ({ username, roleColor, roleColorStrings } = stateFromStoresObject);
          if (cResult[9] === roleColor) {
            if (cResult[10] === roleColorStrings) {
              if (cResult[11] === tmp4) {
                if (cResult[12] === username) {
                  let tmp19 = cResult[13];
                }
                return tmp19;
              }
            }
          }
          const obj3 = { timestamp: tmp4, username, roleColor, roleColorStrings };
          cResult[9] = roleColor;
          cResult[10] = roleColorStrings;
          cResult[11] = tmp4;
          cResult[12] = username;
          cResult[13] = obj3;
          tmp19 = obj3;
          const tmpResult = tmp(504);
        }
      }
      ({ guildId: tmp3[3], user: user2 } = id);
      let username2;
      if (user2 != null) {
        username2 = user2.username;
      }
      const fn = function a() {
        const member = GuildMemberStore.getMember(id.guildId, id.userId);
        let nick = GuildMemberStore.getNick(id.guildId, id.userId);
        if (nick == null) {
          const user = id.user;
          let username;
          if (user != null) {
            username = user.username;
          }
          nick = username;
        }
        if (nick == null) {
          const intl = util.intl;
          nick = intl.string(util.t["30mdIx"]);
        }
        const obj = { username: nick, roleColor: null, roleColorStrings: null };
        let colorString;
        if (member != null) {
          colorString = member.colorString;
        }
        if (colorString == null) {
          colorString = null;
        }
        obj.roleColor = colorString;
        let colorStrings;
        if (member != null) {
          colorStrings = member.colorStrings;
        }
        if (colorStrings == null) {
          colorStrings = null;
        }
        obj.roleColorStrings = colorStrings;
        return obj;
      };
      cResult[4] = username2;
      cResult[5] = id.userId;
      cResult[6] = fn;
      tmp15 = fn;
      let obj = require("c");
      tmp = _require;
    }
  : function useGetBoostUserConfig(id) {
      _require = id;
      const date = new Date(SnowflakeUtilsDefault.extractTimestamp(id.id));
      const items = [GuildMemberStore];
      const items1 = [id];
      const stateFromStoresObject = require("initialize").useStateFromStoresObject(
        items,
        () => {
          const member = GuildMemberStore.getMember(id.guildId, id.userId);
          let nick = GuildMemberStore.getNick(id.guildId, id.userId);
          if (nick == null) {
            const user = id.user;
            let username;
            if (user != null) {
              username = user.username;
            }
            nick = username;
          }
          if (nick == null) {
            const intl = util.intl;
            nick = intl.string(util.t["30mdIx"]);
          }
          const obj = { username: nick, roleColor: null, roleColorStrings: null };
          let colorString;
          if (member != null) {
            colorString = member.colorString;
          }
          if (colorString == null) {
            colorString = null;
          }
          obj.roleColor = colorString;
          let colorStrings;
          if (member != null) {
            colorStrings = member.colorStrings;
          }
          if (colorStrings == null) {
            colorStrings = null;
          }
          obj.roleColorStrings = colorStrings;
          return obj;
        },
        items1,
      );
      return {
        timestamp: date,
        username: stateFromStoresObject.username,
        roleColor: stateFromStoresObject.roleColor,
        roleColorStrings: stateFromStoresObject.roleColorStrings,
      };
    };
