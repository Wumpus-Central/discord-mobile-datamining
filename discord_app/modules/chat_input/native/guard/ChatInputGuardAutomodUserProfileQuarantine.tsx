// === Module 12120: ChatInputGuardAutomodUserProfileQuarantine ===

// Module 12120 (ChatInputGuardAutomodUserProfileQuarantine)
import AutomodPermissionUtils from "AutomodPermissionUtils" /* 4515 */;
import GuildAutomodActionActionCreators from "GuildAutomodActionActionCreators" /* 11473 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12090 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;

require = fn;
const GuildMemberFlags = fn(4495).GuildMemberFlags;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardAutomodUserProfileQuarantine.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(576).c(17);
  guildId = guildId.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore, GuildMemberStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function c() {
      if (null == guildId) {
        const _Set = Set;
        const set = new Set();
        return set;
      } else {
        const id = AuthenticationStore.getId();
        return AutomodPermissionUtils.getAutomodQuarantinedGuildMemberFlags(GuildMemberStore.getMember(tmp, id));
      }
    };
    const items1 = [guildId];
    cResult[1] = guildId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = guildId(576);
  const stateFromStores = guildId(504).useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] !== guildId) {
    class R {
      constructor() {
        obj = closure_0(closure_2[9]);
        result = obj.openAutomodProfileQuarantineAlert(guildId);
        return;
      }
    }
    cResult[4] = guildId;
    cResult[5] = R;
  } else {
    class R {
      constructor() {
        obj = closure_0(closure_2[9]);
        result = obj.openAutomodProfileQuarantineAlert(guildId);
        return;
      }
    }
  }
  if (cResult[6] !== stateFromStores) {
    class R {
      constructor() {
        obj = closure_0(closure_2[9]);
        result = obj.openAutomodProfileQuarantineAlert(guildId);
        return;
      }
    }
    const automodReason = obj3.getAutomodReason(stateFromStores);
    cResult[6] = stateFromStores;
    cResult[7] = automodReason;
  } else {
    class R {
      constructor() {
        obj = closure_0(closure_2[9]);
        result = obj.openAutomodProfileQuarantineAlert(guildId);
        return;
      }
    }
  }
  if (cResult[8] !== tmp11) {
    class R {
      constructor() {
        obj = closure_0(closure_2[9]);
        result = obj.openAutomodProfileQuarantineAlert(guildId);
        return;
      }
    }
    if (tmp11 === GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG) {
      class R {
        constructor() {
          obj = closure_0(closure_2[9]);
          result = obj.openAutomodProfileQuarantineAlert(guildId);
          return;
        }
      }
      let stringResult = obj5.string(tmp(1126).t.Viksoo);
    } else {
      class R {
        constructor() {
          obj = closure_0(closure_2[9]);
          result = obj.openAutomodProfileQuarantineAlert(guildId);
          return;
        }
      }
      stringResult = obj4.string(tmp(1126).t["/PGQf0"]);
    }
    cResult[8] = tmp11;
    cResult[9] = stringResult;
  } else {
    class R {
      constructor() {
        obj = closure_0(closure_2[9]);
        result = obj.openAutomodProfileQuarantineAlert(guildId);
        return;
      }
    }
    if (cResult[10] !== tmp11) {
      class R {
        constructor() {
          obj = closure_0(closure_2[9]);
          result = obj.openAutomodProfileQuarantineAlert(guildId);
          return;
        }
      }
      if (tmp11 === GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG) {
        class R {
          constructor() {
            obj = closure_0(closure_2[9]);
            result = obj.openAutomodProfileQuarantineAlert(guildId);
            return;
          }
        }
        let stringResult1 = obj7.string(tmp(1126).t.ml72ZU);
      } else {
        class R {
          constructor() {
            obj = closure_0(closure_2[9]);
            result = obj.openAutomodProfileQuarantineAlert(guildId);
            return;
          }
        }
        stringResult1 = obj6.string(tmp(1126).t["8HW7r9"]);
      }
      cResult[10] = tmp11;
      cResult[11] = stringResult1;
    } else {
      class R {
        constructor() {
          obj = closure_0(closure_2[9]);
          result = obj.openAutomodProfileQuarantineAlert(guildId);
          return;
        }
      }
      const _Symbol = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            obj = closure_0(closure_2[9]);
            result = obj.openAutomodProfileQuarantineAlert(guildId);
            return;
          }
        }
        const tmp20 = jsx(tmp(12121).ChatXIcon, {});
        cResult[12] = tmp20;
        const tmp19 = tmp20;
      } else {
        class R {
          constructor() {
            obj = closure_0(closure_2[9]);
            result = obj.openAutomodProfileQuarantineAlert(guildId);
            return;
          }
        }
      }
      if (cResult[13] === tmp13) {
        class R {
          constructor() {
            obj = closure_0(closure_2[9]);
            result = obj.openAutomodProfileQuarantineAlert(guildId);
            return;
          }
        }
      }
      const obj2 = { type: "simple-action", actionOnPress: R, actionLabel: tmp13, icon: tmp19, message: tmp16 };
      const tmp24 = jsx(ChatInputGuardDefault, { type: "simple-action", actionOnPress: R, actionLabel: tmp13, icon: tmp19, message: tmp16 });
      cResult[13] = tmp13;
      cResult[14] = R;
      cResult[15] = tmp16;
      cResult[16] = tmp24;
    }
  }
  const tmpResult = guildId(504);
}) : ((guildId) => {
  guildId = guildId.guildId;
  const items = [AuthenticationStore, GuildMemberStore];
  const items1 = [guildId];
  const items2 = [guildId];
  const stateFromStores = guildId(504).useStateFromStores(items, () => {
    if (null == guildId) {
      const _Set = Set;
      const set = new Set();
      return set;
    } else {
      const id = AuthenticationStore.getId();
      return AutomodPermissionUtils.getAutomodQuarantinedGuildMemberFlags(GuildMemberStore.getMember(tmp, id));
    }
  }, items1);
  const callback = noop.useCallback(() => {
    const result = GuildAutomodActionActionCreators.openAutomodProfileQuarantineAlert(guildId);
  }, items2);
  const obj = guildId(504);
  const automodReason = guildId(4515).getAutomodReason(stateFromStores);
  if (automodReason === GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG) {
    const intl2 = tmp(1126).intl;
    let stringResult = intl2.string(tmp(1126).t.Viksoo);
  } else {
    const intl = tmp(1126).intl;
    stringResult = intl.string(tmp(1126).t["/PGQf0"]);
  }
  if (automodReason === GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG) {
    const intl4 = tmp(1126).intl;
    let stringResult1 = intl4.string(tmp(1126).t.ml72ZU);
  } else {
    const intl3 = tmp(1126).intl;
    stringResult1 = intl3.string(tmp(1126).t["8HW7r9"]);
  }
  const obj3 = { type: "simple-action", actionOnPress: callback, actionLabel: stringResult, icon: null, message: null };
  const obj2 = guildId(4515);
  obj3.icon = jsx(guildId(12121).ChatXIcon, {});
  obj3.message = stringResult1;
  return jsx(ChatInputGuardDefault, { type: "simple-action", actionOnPress: callback, actionLabel: stringResult, icon: null, message: null });
}));