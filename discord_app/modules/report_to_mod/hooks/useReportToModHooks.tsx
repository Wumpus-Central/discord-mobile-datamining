// === Module 9574: useIsReportToModEnabled ===

// Module 9574 (useIsReportToModEnabled)
import { useEffect } from "noop";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import reinjectEphemerals from "reinjectEphemerals";

const result = require("reinjectEphemerals").fileFinishedImporting("modules/report_to_mod/hooks/useReportToModHooks.tsx");

export const useIsReportToModEnabled = function useIsReportToModEnabled(arg0) {
  const _require = arg0;
  const items = [createGuildRecordFromRust];
  return _require(589).useStateFromStores(items, () => {
    if (null == closure_0) {
      return false;
    } else {
      const guild = outer1_4.getGuild(tmp);
      let tmp4 = null != guild;
      if (tmp4) {
        tmp4 = outer1_1(outer1_2[4])(guild) && null != outer1_1(outer1_2[5])(guild);
        const tmp5 = outer1_1;
        const tmp6 = outer1_2;
        const tmp7 = outer1_1(outer1_2[4])(guild) && null != outer1_1(outer1_2[5])(guild);
      }
      return tmp4;
    }
  });
};
export const useReportToModChannelId = function useReportToModChannelId(arg0) {
  const _require = arg0;
  const items = [createGuildRecordFromRust];
  return _require(589).useStateFromStores(items, () => {
    let guild = null;
    if (null != closure_0) {
      guild = outer1_4.getGuild(tmp);
    }
    let tmp4 = null;
    if (null != guild) {
      let tmp7 = outer1_1(outer1_2[5])(guild);
      if (tmp7 == null) {
        tmp7 = null;
      }
      tmp4 = tmp7;
    }
    return tmp4;
  });
};
export const useIsModeratorReportOrPostChannel = function useIsModeratorReportOrPostChannel(isModeratorReportChannel) {
  return require(6056) /* canReportMessageToMods */.isModeratorReportOrPostChannel(isModeratorReportChannel);
};
export const useIsModeratorReportPostChannel = function useIsModeratorReportPostChannel(isModeratorReportChannel) {
  return require(6056) /* canReportMessageToMods */.isModeratorReportPostChannel(isModeratorReportChannel);
};
export const useLoadReportedMessage = function useLoadReportedMessage(messageReference) {
  messageReference = messageReference.messageReference;
  const items = [reinjectEphemerals];
  const stateFromStores = messageReference(589).useStateFromStores(items, () => {
    let message = null;
    if (null != messageReference) {
      message = outer1_5.getMessage(tmp.channel_id, tmp.message_id);
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
      let obj = stateFromStores(outer1_2[7]);
      obj = { channelId: null, jump: null, limit: 10 };
      obj[0] = messageReference.channel_id;
      obj = { messageId: null };
      obj[0] = messageReference.message_id;
      obj[1] = obj;
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
    const user = require(7989) /* _fetchProfile */.getUser(reported_user_id);
    const obj = require(7989) /* _fetchProfile */;
  }
};