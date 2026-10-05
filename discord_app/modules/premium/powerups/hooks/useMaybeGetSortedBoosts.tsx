// === Module 12239: useMaybeGetSortedBoosts ===

// Module 12239 (useMaybeGetSortedBoosts)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import intl2 from "intl" /* 1126 */;
import actions_BoostingActionCreators from "actions/BoostingActionCreators" /* 7668 */;
import getBoostLifecyclePhase from "getBoostLifecyclePhase" /* 12240 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AppliedGuildBoostStore from "AppliedGuildBoostStore" /* 12221 */;
import GuildMemberRequesterStore from "GuildMemberRequesterStore" /* 5583 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, arr, boost, dependencyMap, set;

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let closure_2;
  let first;
  let length;
  let stateFromStores;
  let stateFromStoresArray1;
  let tmp6;
  let tmp7;
  let tmp8;
  _require = arg0;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(37);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [length];
    cResult[0] = items;
    first = items;
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
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function h() {
      return Date.now();
    };
    cResult[4] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[4];
  }
  let obj3 = stateFromStores;
  const first1 = stateFromStoresArray1(stateFromStores.useState(tmp8), 1)[0];
  if (cResult[5] === stateFromStoresArray) {
    if (cResult[6] === arg1) {
      let tmp10;
      let tmp15;
      if (cResult[7] === first1) {
        tmp10 = cResult[8];
      }
      dependencyMap = tmp10;
      const _Symbol = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [GuildMemberStore];
        cResult[12] = items2;
        tmp15 = items2;
      } else {
        tmp15 = cResult[12];
      }
      if (cResult[13] === arg0) {
        let tmp17;
        let tmp18;
        if (cResult[14] === tmp10) {
          tmp17 = cResult[15];
          tmp18 = cResult[16];
        }
        const tmpResult3 = tmp(504);
        stateFromStoresArray1 = tmpResult3.useStateFromStoresArray(tmp15, tmp17, tmp18);
        if (cResult[17] === stateFromStoresArray1) {
          let tmp20;
          let tmp21;
          let tmp24;
          let arr8;
          let tmp32;
          if (cResult[18] === arg0) {
            tmp20 = cResult[19];
            tmp21 = cResult[20];
          }
          const effect = obj3.useEffect(tmp20, tmp21);
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
            tmp24 = cResult[21];
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
          class G {
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
          stateFromStores = obj6.useStateFromStores(tmp24, tmp26);
          if (cResult[24] !== stateFromStoresArray) {
            const _Symbol3 = Symbol;
            if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
              class T {
                constructor(ended) {
                  return !ended.ended;
                }
              }
              cResult[26] = T;
            } else {
              class T {
                constructor(ended) {
                  return !ended.ended;
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
            class G {
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
            arr8 = found;
          } else {
            class T {
              constructor(ended) {
                return !ended.ended;
              }
            }
          }
          length = arr8.length;
          const _Symbol4 = Symbol;
          if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
            class T {
              constructor(ended) {
                return !ended.ended;
              }
            }
            const items4 = [length];
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
              constructor(ended) {
                return !ended.ended;
              }
            }
          }
          if (cResult[28] !== arg0) {
            class O {
              constructor() {
                return null != AppliedGuildBoostStore.getLastFetchedAtForGuild(closure_0);
              }
            }
            const items5 = [arg0];
            cResult[28] = arg0;
            class M {
              constructor() {
                arr = closure_3;
                if (closure_3.length > 0) {
                  item = arr.forEach((item) => stateFromStores1.requestMember(closure_1_0, item));
                }
                return;
              }
            }
            class G {
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
            cResult[30] = items5;
            tmp32 = items5;
          } else {
            class O {
              constructor() {
                return null != AppliedGuildBoostStore.getLastFetchedAtForGuild(closure_0);
              }
            }
            tmp32 = cResult[30];
          }
          const tmpResult4 = tmp(504);
          const stateFromStores1 = tmpResult4.useStateFromStores(tmp30, O, tmp32);
          if (cResult[31] === length) {
            class O {
              constructor() {
                return null != AppliedGuildBoostStore.getLastFetchedAtForGuild(closure_0);
              }
            }
          }
          class R {
            constructor() {
              const tmp = stateFromStores === length && stateFromStores1;
              if (!tmp) {
                const obj = actions_BoostingActionCreators;
                const appliedGuildBoostsForGuild = obj.fetchAppliedGuildBoostsForGuild(closure_0, { includeEnded: true });
              }
            }
          }
          const items6 = [arg0, stateFromStores, length, stateFromStores1];
          cResult[31] = length;
          cResult[32] = stateFromStores;
          cResult[33] = arg0;
          cResult[34] = stateFromStores1;
          cResult[35] = R;
          cResult[36] = items6;
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
        class G {
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
        tmp22[0] = arg0;
        tmp22[1] = stateFromStoresArray1;
        cResult[17] = stateFromStoresArray1;
        cResult[18] = arg0;
        cResult[19] = M;
        cResult[20] = tmp22;
        tmp21 = tmp22;
        tmp20 = M;
      }
      class G {
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
      const items7 = [arg0, tmp10];
      cResult[13] = arg0;
      cResult[14] = tmp10;
      cResult[15] = G;
      cResult[16] = items7;
      tmp18 = items7;
      tmp17 = G;
    }
  }
  if (cResult[9] !== first1) {
    class O {
      constructor() {
        return null != AppliedGuildBoostStore.getLastFetchedAtForGuild(closure_0);
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
    class O {
      constructor() {
        return null != AppliedGuildBoostStore.getLastFetchedAtForGuild(closure_0);
      }
    }
  }
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        return null != AppliedGuildBoostStore.getLastFetchedAtForGuild(closure_0);
      }
    }
    cResult[11] = tmp13;
  } else {
    class O {
      constructor() {
        return null != AppliedGuildBoostStore.getLastFetchedAtForGuild(closure_0);
      }
    }
  }
  const mapped = stateFromStoresArray.map(tmp11);
  const sorted = mapped.sort(tmp13);
  const substr = sorted.slice(0, arg1);
  cResult[5] = stateFromStoresArray;
  cResult[6] = arg1;
  cResult[7] = first1;
  cResult[8] = substr;
  tmp10 = substr;
}) : ((arg0, arg1) => {
  let closure_0;
  let first;
  let memo;
  let memo1;
  let stateFromStores1;
  let stateFromStoresArray;
  let stateFromStoresArray1;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("get initialized");
  const items = [stateFromStoresArray1];
  const items1 = [arg0];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    let appliedGuildBoostsForGuild = AppliedGuildBoostStore.getAppliedGuildBoostsForGuild(closure_0);
    if (appliedGuildBoostsForGuild == null) {
      appliedGuildBoostsForGuild = [];
    }
    return appliedGuildBoostsForGuild;
  }, items1);
  first = first(memo.useState(() => Date.now()), 1)[0];
  const items2 = [stateFromStoresArray, arg1, first];
  memo = memo.useMemo(() => {
    const mapped = stateFromStoresArray.map((boost) => {
      let obj4;
      const obj = closure_0(stateFromStoresArray[9]);
      const boostLifecycleInfo = obj.getBoostLifecycleInfo(boost, first);
      const obj2 = closure_0(stateFromStoresArray[9]);
      const boostLifecycleTimestamp = obj2.getBoostLifecycleTimestamp(boost, boostLifecycleInfo);
      if ("expiring" === boostLifecycleInfo.phase) {
        obj4 = { boost, phase: "expiring", sortKey: boostLifecycleTimestamp, endsAt: boostLifecycleInfo.endsAt };
        const obj3 = { boost, phase: "expiring", sortKey: boostLifecycleTimestamp, endsAt: boostLifecycleInfo.endsAt };
      } else {
        obj4 = { boost, phase: boostLifecycleInfo.phase, sortKey: boostLifecycleTimestamp };
      }
      return obj4;
    });
    const sorted = mapped.sort((sortKey, sortKey2) => sortKey2.sortKey - sortKey.sortKey);
    return sorted.slice(0, closure_1);
  }, items2);
  let obj2 = require("get initialized");
  const items3 = [memo1];
  const items4 = [arg0, memo];
  stateFromStoresArray1 = obj2.useStateFromStoresArray(items3, () => {
    set = new Set();
    const item = memo.forEach((boost) => {
      boost = boost.boost;
      if (null == GuildMemberStore.getMember(closure_0, boost.userId)) {
        set.add(boost.userId);
      }
    });
    return Array.from(set);
  }, items4);
  const items5 = [arg0, stateFromStoresArray1];
  const effect = memo.useEffect(() => {
    if (stateFromStoresArray1.length > 0) {
      const item = stateFromStoresArray1.forEach((item) => stateFromStores.requestMember(closure_1_0, item));
    }
  }, items5);
  let obj3 = require("get initialized");
  const items6 = [stateFromStores1];
  const stateFromStores = obj3.useStateFromStores(items6, () => {
    const guild = GuildStore.getGuild(closure_0);
    let prop;
    if (guild != null) {
      prop = guild.premiumSubscriberCount;
    }
    return prop;
  });
  const items7 = [stateFromStoresArray];
  memo1 = memo.useMemo(() => stateFromStoresArray.filter((ended) => !ended.ended).length, items7);
  let obj4 = require("get initialized");
  const items8 = [stateFromStoresArray1];
  const items9 = [arg0];
  stateFromStores1 = obj4.useStateFromStores(items8, () => null != AppliedGuildBoostStore.getLastFetchedAtForGuild(closure_0), items9);
  const items10 = [arg0, stateFromStores, memo1, stateFromStores1];
  const effect1 = memo.useEffect(() => {
    const tmp = stateFromStores === memo1 && stateFromStores1;
    if (!tmp) {
      const obj = actions_BoostingActionCreators;
      const appliedGuildBoostsForGuild = obj.fetchAppliedGuildBoostsForGuild(closure_0, { includeEnded: true });
    }
  }, items10);
  return memo;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function(id) {
  let roleColor;
  let roleColorStrings;
  let tmp4;
  let tmp9;
  let user2;
  let username;
  _require = id;
  let obj = require("react");
  const cResult = obj.c(14);
  const tmp = _require;
  if (cResult[0] !== id.id) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    const obj2 = SnowflakeUtilsDefault;
    const date = new Date(obj2.extractTimestamp(id.id));
    cResult[0] = id.id;
    cResult[1] = date;
    tmp4 = date;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore];
    cResult[2] = items;
    tmp9 = items;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === id.guildId) {
    let user = id.user;
    let username1;
    const tmp11 = cResult[4];
    if (user != null) {
      username1 = user.username;
    }
    if (tmp11 === username1) {
      let tmp14;
      let tmp16;
      if (cResult[5] === id.userId) {
        tmp14 = cResult[6];
      }
      if (cResult[7] !== id) {
        const items1 = [id];
        cResult[7] = id;
        cResult[8] = items1;
        tmp16 = items1;
      } else {
        tmp16 = cResult[8];
      }
      const tmpResult = tmp(504);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp9, tmp14, tmp16);
      ({ username, roleColor, roleColorStrings } = stateFromStoresObject);
      if (cResult[9] === roleColor) {
        if (cResult[10] === roleColorStrings) {
          if (cResult[11] === tmp4) {
            let tmp18;
            if (cResult[12] === username) {
              tmp18 = cResult[13];
            }
            return tmp18;
          }
        }
      }
      const obj3 = { timestamp: tmp4, username, roleColor, roleColorStrings };
      cResult[9] = roleColor;
      cResult[10] = roleColorStrings;
      cResult[11] = tmp4;
      cResult[12] = username;
      cResult[13] = obj3;
      tmp18 = obj3;
    }
  }
  ({ guildId: tmp3[3], user: user2 } = id);
  let username2;
  if (user2 != null) {
    username2 = user2.username;
  }
  const fn = function n() {
    let colorString;
    let colorStrings;
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
      const intl = intl2.intl;
      nick = intl.string(intl2.t["30mdIx"]);
    }
    const obj = { username: nick, roleColor: colorString, roleColorStrings: colorStrings };
    colorString = undefined;
    if (member != null) {
      colorString = member.colorString;
    }
    if (colorString == null) {
      colorString = null;
    }
    colorStrings = undefined;
    if (member != null) {
      colorStrings = member.colorStrings;
    }
    if (colorStrings == null) {
      colorStrings = null;
    }
    return obj;
  };
  cResult[4] = username2;
  cResult[5] = id.userId;
  cResult[6] = fn;
  tmp14 = fn;
}) : ((id) => {
  _require = id;
  let obj = SnowflakeUtilsDefault;
  const items = [GuildMemberStore];
  const items1 = [id];
  const date = new Date(obj.extractTimestamp(id.id));
  const obj2 = require("get initialized");
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    let colorString;
    let colorStrings;
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
      const intl = intl2.intl;
      nick = intl.string(intl2.t["30mdIx"]);
    }
    const obj = { username: nick, roleColor: colorString, roleColorStrings: colorStrings };
    colorString = undefined;
    if (member != null) {
      colorString = member.colorString;
    }
    if (colorString == null) {
      colorString = null;
    }
    colorStrings = undefined;
    if (member != null) {
      colorStrings = member.colorStrings;
    }
    if (colorStrings == null) {
      colorStrings = null;
    }
    return obj;
  }, items1);
  return { timestamp: date, username: stateFromStoresObject.username, roleColor: stateFromStoresObject.roleColor, roleColorStrings: stateFromStoresObject.roleColorStrings };
});
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useMaybeGetSortedBoosts.tsx");

export default tmp2;
export const useGetBoostUserConfig = tmp3;