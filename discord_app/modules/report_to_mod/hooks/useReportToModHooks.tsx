// === Module 11666: useReportToModHooks ===

// Module 11666 (useReportToModHooks)
import _mod19 from "module_19" /* 19 */;
import getGuildModeratorReportingEnabledDefault from "getGuildModeratorReportingEnabled" /* 7266 */;
import ReportToModUtils from "ReportToModUtils" /* 7276 */;
import getGuildModeratorReportChannelIdDefault from "getGuildModeratorReportChannelId" /* 7290 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7456 */;
import UserActionCreators from "UserActionCreators" /* 8181 */;
import GuildStore from "GuildStore" /* 1979 */;
import MessageStore from "MessageStore" /* 4781 */;
import size from "module_2" /* 2 */;

const useEffect = _mod19.useEffect;
const result = size.fileFinishedImporting("modules/report_to_mod/hooks/useReportToModHooks.tsx");

export const useIsReportToModEnabled = function useIsReportToModEnabled(arg0) {
  _require = arg0;
  const items = [GuildStore];
  return require("initialize").useStateFromStores(items, () => {
    if (null == closure_0) {
      return false;
    } else {
      const guild = GuildStore.getGuild(tmp);
      let tmp4 = null != guild;
      if (tmp4) {
        tmp4 = getGuildModeratorReportingEnabledDefault(guild) && null != getGuildModeratorReportChannelIdDefault(guild);
        const tmp7 = getGuildModeratorReportingEnabledDefault(guild) && null != getGuildModeratorReportChannelIdDefault(guild);
      }
      return tmp4;
    }
  });
};
export const useReportToModChannelId = function useReportToModChannelId(arg0) {
  _require = arg0;
  const items = [GuildStore];
  return require("initialize").useStateFromStores(items, () => {
    let guild = null;
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
};
export const useIsModeratorReportOrPostChannel = function useIsModeratorReportOrPostChannel(isModeratorReportChannel) {
  return ReportToModUtils.isModeratorReportOrPostChannel(isModeratorReportChannel);
};
export const useIsModeratorReportPostChannel = function useIsModeratorReportPostChannel(isModeratorReportChannel) {
  return ReportToModUtils.isModeratorReportPostChannel(isModeratorReportChannel);
};
export const useLoadReportedMessage = function useLoadReportedMessage(messageReference) {
  messageReference = messageReference.messageReference;
  const items = [MessageStore];
  const stateFromStores = messageReference(504).useStateFromStores(items, () => {
    let message = null;
    if (null != messageReference) {
      message = MessageStore.getMessage(tmp.channel_id, tmp.message_id);
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
      let obj = { channelId: messageReference.channel_id, jump: null, limit: 10 };
      obj = { messageId: messageReference.message_id };
      obj.jump = obj;
      const messages = obj.fetchMessages(obj);
    }
  }, items1);
};
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