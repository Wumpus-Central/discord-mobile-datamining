// === Module 12135: ChatInputGuardAutomodUserProfileQuarantine ===

// Module 12135 (ChatInputGuardAutomodUserProfileQuarantine)
import Fragment from "Fragment" /* 21 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4501 */;
import AutomodPermissionUtils from "AutomodPermissionUtils" /* 4521 */;
import GuildAutomodActionActionCreators from "GuildAutomodActionActionCreators" /* 11486 */;
import ChatInputGuardDefault from "ChatInputGuard" /* 12105 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let guildId, set;

const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let first;
  let tmp7;
  let tmp8;
  const tmp = guildId;
  let obj = guildId(576);
  const cResult = obj.c(17);
  guildId = guildId.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore, GuildMemberStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function c() {
      if (null == guildId) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set();
        return set;
      } else {
        const id = AuthenticationStore.getId();
        const obj = AutomodPermissionUtils;
        return obj.getAutomodQuarantinedGuildMemberFlags(GuildMemberStore.getMember(tmp, id));
      }
    };
    const items1 = [guildId];
    cResult[1] = guildId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] !== guildId) {
    class R {
      constructor() {
        const obj = GuildAutomodActionActionCreators;
        const result = obj.openAutomodProfileQuarantineAlert(guildId);
      }
    }
    cResult[4] = guildId;
    cResult[5] = R;
  } else {
    class R {
      constructor() {
        const obj = GuildAutomodActionActionCreators;
        const result = obj.openAutomodProfileQuarantineAlert(guildId);
      }
    }
  }
  if (cResult[6] !== stateFromStores) {
    class R {
      constructor() {
        const obj = GuildAutomodActionActionCreators;
        const result = obj.openAutomodProfileQuarantineAlert(guildId);
      }
    }
    const automodReason = obj3.getAutomodReason(stateFromStores);
    cResult[6] = stateFromStores;
    cResult[7] = automodReason;
  } else {
    class R {
      constructor() {
        const obj = GuildAutomodActionActionCreators;
        const result = obj.openAutomodProfileQuarantineAlert(guildId);
      }
    }
  }
  if (cResult[8] !== tmp11) {
    let stringResult;
    class R {
      constructor() {
        const obj = GuildAutomodActionActionCreators;
        const result = obj.openAutomodProfileQuarantineAlert(guildId);
      }
    }
    if (tmp11 === GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG) {
      class R {
        constructor() {
          const obj = GuildAutomodActionActionCreators;
          const result = obj.openAutomodProfileQuarantineAlert(guildId);
        }
      }
      stringResult = obj5.string(tmp(1126).t.Viksoo);
    } else {
      class R {
        constructor() {
          const obj = GuildAutomodActionActionCreators;
          const result = obj.openAutomodProfileQuarantineAlert(guildId);
        }
      }
      stringResult = obj4.string(tmp(1126).t["/PGQf0"]);
    }
    cResult[8] = tmp11;
    cResult[9] = stringResult;
  } else {
    class R {
      constructor() {
        const obj = GuildAutomodActionActionCreators;
        const result = obj.openAutomodProfileQuarantineAlert(guildId);
      }
    }
  }
  if (cResult[10] !== tmp11) {
    let stringResult1;
    class R {
      constructor() {
        const obj = GuildAutomodActionActionCreators;
        const result = obj.openAutomodProfileQuarantineAlert(guildId);
      }
    }
    if (tmp11 === GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG) {
      class R {
        constructor() {
          const obj = GuildAutomodActionActionCreators;
          const result = obj.openAutomodProfileQuarantineAlert(guildId);
        }
      }
      stringResult1 = obj7.string(tmp(1126).t.ml72ZU);
    } else {
      class R {
        constructor() {
          const obj = GuildAutomodActionActionCreators;
          const result = obj.openAutomodProfileQuarantineAlert(guildId);
        }
      }
      stringResult1 = obj6.string(tmp(1126).t["8HW7r9"]);
    }
    cResult[10] = tmp11;
    cResult[11] = stringResult1;
  } else {
    class R {
      constructor() {
        const obj = GuildAutomodActionActionCreators;
        const result = obj.openAutomodProfileQuarantineAlert(guildId);
      }
    }
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        const obj = GuildAutomodActionActionCreators;
        const result = obj.openAutomodProfileQuarantineAlert(guildId);
      }
    }
    const tmp18 = jsx(tmp(12136).ChatXIcon, {});
    cResult[12] = tmp18;
  } else {
    class R {
      constructor() {
        const obj = GuildAutomodActionActionCreators;
        const result = obj.openAutomodProfileQuarantineAlert(guildId);
      }
    }
  }
  if (cResult[13] === tmp13) {
    class R {
      constructor() {
        const obj = GuildAutomodActionActionCreators;
        const result = obj.openAutomodProfileQuarantineAlert(guildId);
      }
    }
  }
  cResult[13] = tmp13;
  cResult[14] = R;
  cResult[15] = tmp15;
  cResult[16] = jsx(ChatInputGuardDefault, { type: "simple-action", actionOnPress: R, actionLabel: tmp13, icon: tmp17, message: tmp15 });
  jsx(ChatInputGuardDefault, { type: "simple-action", actionOnPress: R, actionLabel: tmp13, icon: tmp17, message: tmp15 });
}) : ((guildId) => {
  let stringResult;
  let stringResult1;
  guildId = guildId.guildId;
  const tmp = guildId;
  let obj = guildId(504);
  const items = [AuthenticationStore, GuildMemberStore];
  const items1 = [guildId];
  const items2 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, function() {
    if (null == guildId) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
      return set;
    } else {
      const id = AuthenticationStore.getId();
      const obj = AutomodPermissionUtils;
      return obj.getAutomodQuarantinedGuildMemberFlags(GuildMemberStore.getMember(tmp, id));
    }
  }, items1);
  const callback = react.useCallback(() => {
    const obj = GuildAutomodActionActionCreators;
    const result = obj.openAutomodProfileQuarantineAlert(guildId);
  }, items2);
  const obj2 = guildId(4521);
  const automodReason = obj2.getAutomodReason(stateFromStores);
  if (automodReason === GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG) {
    const intl2 = tmp(1126).intl;
    stringResult = intl2.string(tmp(1126).t.Viksoo);
  } else {
    const intl = tmp(1126).intl;
    stringResult = intl.string(tmp(1126).t["/PGQf0"]);
  }
  if (automodReason === GuildMemberFlags.AUTOMOD_QUARANTINED_SERVER_TAG) {
    const intl4 = tmp(1126).intl;
    stringResult1 = intl4.string(tmp(1126).t.ml72ZU);
  } else {
    const intl3 = tmp(1126).intl;
    stringResult1 = intl3.string(tmp(1126).t["8HW7r9"]);
  }
  ChatInputGuardDefault;
  return <tmp9 type="simple-action" actionOnPress={callback} actionLabel={stringResult} icon={null} message={stringResult1} />;
}));
let result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuardAutomodUserProfileQuarantine.tsx");

export default memoResult;