// === Module 11302: useReportToModHooks ===

// Module 11302 (useReportToModHooks)
import _mod19 from "module_19" /* 19 */;
import getGuildModeratorReportingEnabledDefault from "getGuildModeratorReportingEnabled" /* 6779 */;
import ReportToModUtils from "ReportToModUtils" /* 6789 */;
import getGuildModeratorReportChannelIdDefault from "getGuildModeratorReportChannelId" /* 6803 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 6978 */;
import UserActionCreators from "UserActionCreators" /* 7863 */;
import GuildStore from "GuildStore" /* 2074 */;
import MessageStore from "MessageStore" /* 5116 */;
import "ReactCompilerGating";
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useEffect = _mod19.useEffect;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      if (null == closure_0) {
        return false;
      } else {
        guild = GuildStore.getGuild(tmp);
        let tmp4 = null != guild;
        if (tmp4) {
          tmp4 = getGuildModeratorReportingEnabledDefault(guild) && null != getGuildModeratorReportChannelIdDefault(guild);
          const tmp7 = getGuildModeratorReportingEnabledDefault(guild) && null != getGuildModeratorReportChannelIdDefault(guild);
        }
        return tmp4;
      }
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6);
}) : ((arg0) => {
  _require = arg0;
  const items = [GuildStore];
  return require("initialize").useStateFromStores(items, () => {
    if (null == closure_0) {
      return false;
    } else {
      guild = GuildStore.getGuild(tmp);
      let tmp4 = null != guild;
      if (tmp4) {
        tmp4 = getGuildModeratorReportingEnabledDefault(guild) && null != getGuildModeratorReportChannelIdDefault(guild);
        const tmp7 = getGuildModeratorReportingEnabledDefault(guild) && null != getGuildModeratorReportChannelIdDefault(guild);
      }
      return tmp4;
    }
  });
});
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      guild = null;
      if (null != closure_0) {
        guild = GuildStore.getGuild(tmp);
      }
      let tmp4 = null;
      if (null != guild) {
        let tmp7 = getGuildModeratorReportChannelIdDefault(guild);
        if (tmp7 == null) {
          tmp7 = null;
        }
        tmp4 = tmp7;
      }
      return tmp4;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6);
}) : ((arg0) => {
  _require = arg0;
  const items = [GuildStore];
  return require("initialize").useStateFromStores(items, () => {
    guild = null;
    if (null != closure_0) {
      guild = GuildStore.getGuild(tmp);
    }
    let tmp4 = null;
    if (null != guild) {
      let tmp7 = getGuildModeratorReportChannelIdDefault(guild);
      if (tmp7 == null) {
        tmp7 = null;
      }
      tmp4 = tmp7;
    }
    return tmp4;
  });
});
const result = size.fileFinishedImporting("modules/report_to_mod/hooks/useReportToModHooks.tsx");

export const useIsReportToModEnabled = tmp2;
export const useReportToModChannelId = tmp3;
export const useIsModeratorReportOrPostChannel = function useIsModeratorReportOrPostChannel(isModeratorReportChannel) {
  return ReportToModUtils.isModeratorReportOrPostChannel(isModeratorReportChannel);
};
export const useIsModeratorReportPostChannel = function useIsModeratorReportPostChannel(isModeratorReportChannel) {
  return ReportToModUtils.isModeratorReportPostChannel(isModeratorReportChannel);
};
export const useLoadReportedMessage = ReactCompilerGating.isReactCompilerEnabled() ? ((messageReference) => {
  const cResult = messageReference(576).c(7);
  messageReference = messageReference.messageReference;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MessageStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== messageReference) {
    const fn = function s() {
      let message = null;
      if (null != messageReference) {
        message = MessageStore.getMessage(messageReference.channel_id, messageReference.message_id);
      }
      return message;
    };
    cResult[1] = messageReference;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = messageReference(576);
  const stateFromStores = messageReference(504).useStateFromStores(first, tmp6);
  if (cResult[3] === messageReference) {
    if (cResult[4] === stateFromStores) {
      let tmp8 = cResult[5];
      let tmp9 = cResult[6];
    }
    useEffect(tmp8, tmp9);
  }
  const fn2 = function h() {
    let tmp = null == stateFromStores;
    if (tmp) {
      tmp = null != messageReference;
    }
    if (tmp) {
      const obj2 = { channelId: messageReference.channel_id, jump: null, limit: 10 };
      const obj3 = { messageId: messageReference.message_id };
      obj2.jump = obj3;
      const messages = MessageActionCreatorsDefault.fetchMessages(obj2);
    }
  };
  const items1 = [stateFromStores, messageReference];
  cResult[3] = messageReference;
  cResult[4] = stateFromStores;
  cResult[5] = fn2;
  cResult[6] = items1;
  tmp9 = items1;
  tmp8 = fn2;
  const tmpResult = messageReference(504);
}) : ((messageReference) => {
  messageReference = messageReference.messageReference;
  const items = [MessageStore];
  const stateFromStores = messageReference(504).useStateFromStores(items, () => {
    let message = null;
    if (null != messageReference) {
      message = MessageStore.getMessage(messageReference.channel_id, messageReference.message_id);
    }
    return message;
  });
  const items1 = [stateFromStores, messageReference];
  useEffect(() => {
    let tmp = null == stateFromStores;
    if (tmp) {
      tmp = null != messageReference;
    }
    if (tmp) {
      const obj2 = { channelId: messageReference.channel_id, jump: null, limit: 10 };
      const obj3 = { messageId: messageReference.message_id };
      obj2.jump = obj3;
      const messages = MessageActionCreatorsDefault.fetchMessages(obj2);
    }
  }, items1);
});
export const loadOriginalAuthorFromSnapshot = function loadOriginalAuthorFromSnapshot(arg0) {
  let reported_user_id;
  if (arg0 != null) {
    const first = arg0.messageSnapshots[0];
    if (first != null) {
      const moderatorReport = first.moderatorReport;
      if (moderatorReport != null) {
        reported_user_id = moderatorReport.reported_user_id;
      }
    }
  }
  if (null != reported_user_id) {
    const user = UserActionCreators.getUser(reported_user_id);
  }
};