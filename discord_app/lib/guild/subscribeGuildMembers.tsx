// === Module 7004: subscribeGuildMembers ===

// Module 7004 (subscribeGuildMembers)
import _modDef12 from "module_12" /* 12 */;
import noop from "module_19" /* 19 */;
import GuildMemberRequesterStore from "GuildMemberRequesterStore" /* 5958 */;
import UserStore from "UserStore" /* 1390 */;

const require = globalThis.__r;

const require = fn;
let c6 = false;
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSubscribeGuildMembers(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(4);
  if (cResult[0] === arg1) {
    if (cResult[1] === arg0) {
      let tmp2 = cResult[2];
      let tmp3 = cResult[3];
    }
    const effect = noop.useEffect(tmp2, tmp3);
  }
  const fn = function l() {
    let item = _modDef12.forEach(closure_0, (userIds, guildId) => {
      let tmp = !c6;
      if (!c6) {
        tmp = userIds.length > 50;
      }
      if (tmp) {
        c6 = true;
        const obj2 = { extra: null };
        const obj3 = { count: userIds.length, guildId, reason };
        obj2.extra = obj3;
        reason(1255).captureMessage("SubscribeGuildMembers called with more than 50 userIds.", obj2);
        const obj = reason(1255);
      }
      closure_0(7005).subscribeMembers(guildId, userIds);
      const obj4 = closure_0(7005);
    });
    return () => {
      const item = reason(12).forEach(closure_1_0, (userIds, guildId) => closure_1_0(closure_1_2[7]).unsubscribeMembers(guildId, userIds));
    };
  };
  const items = [arg0, arg1];
  cResult[0] = arg1;
  cResult[1] = arg0;
  cResult[2] = fn;
  cResult[3] = items;
  tmp3 = items;
  tmp2 = fn;
  let obj = require("c");
}) : (function useSubscribeGuildMembers(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const items = [arg0, arg1];
  const effect = noop.useEffect(() => {
    let item = _modDef12.forEach(closure_0, (userIds, guildId) => {
      let tmp = !c6;
      if (!c6) {
        tmp = userIds.length > 50;
      }
      if (tmp) {
        c6 = true;
        const obj2 = { extra: null };
        const obj3 = { count: userIds.length, guildId, reason };
        obj2.extra = obj3;
        reason(1255).captureMessage("SubscribeGuildMembers called with more than 50 userIds.", obj2);
        const obj = reason(1255);
      }
      closure_0(7005).subscribeMembers(guildId, userIds);
      const obj4 = closure_0(7005);
    });
    return () => {
      const item = reason(12).forEach(closure_1_0, (userIds, guildId) => closure_1_0(closure_1_2[7]).unsubscribeMembers(guildId, userIds));
    };
  }, items);
});
let closure_7 = tmp2;
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("lib/guild/subscribeGuildMembers.tsx");

export const MAX_GUILD_MEMBER_SUBSCRIPTIONS = 50;
export const useSubscribeGuildMembers = tmp2;
export const useEnsureHydratedGuildUsers = ReactCompilerGating.isReactCompilerEnabled() ? (function useEnsureHydratedGuildUsers(arg0, arg1) {
  _require = arg0;
  importDefault = arg1;
  const cResult = require("c").c(8);
  if (0 !== arg1.length) {
    if (cResult[1] === arg0) {
    }
    const obj2 = {};
    obj2[arg0] = arg1;
    cResult[1] = arg0;
    cResult[2] = arg1;
    cResult[3] = obj2;
  } else {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = {};
      cResult[0] = obj3;
      let first = obj3;
    } else {
      first = cResult[0];
    }
    if (cResult[4] === arg0) {
      if (cResult[5] === arg1) {
        let tmp6 = cResult[6];
        let tmp7 = cResult[7];
      }
      const effect = noop.useEffect(tmp6, tmp7);
      closure_7(first, "useEnsureHydratedGuildUsers");
      class M {
        constructor() {
          item = closure_1.forEach(() => { ... });
          return;
        }
      }
    }
    class M {
      constructor() {
        item = closure_1.forEach(() => { ... });
        return;
      }
    }
    const items = [arg0, arg1];
    cResult[4] = arg0;
    cResult[5] = arg1;
    cResult[6] = M;
    cResult[7] = items;
    tmp7 = items;
    tmp6 = M;
  }
  const obj = require("c");
}) : (function useEnsureHydratedGuildUsers(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const items = [arg0, arg1];
  const items1 = [arg0, arg1];
  const memo = noop.useMemo(() => {
    if (0 === closure_1.length) {
      let obj = {};
    } else {
      obj = {};
      obj[closure_0] = tmp;
    }
    return obj;
  }, items);
  const effect = noop.useEffect(() => {
    const item = closure_1.forEach((item) => {
      if (null == user.getUser(item)) {
        const member = GuildMemberRequesterStore.requestMember(closure_1_0, item);
      }
    });
  }, items1);
  closure_7(memo, "useEnsureHydratedGuildUsers");
});