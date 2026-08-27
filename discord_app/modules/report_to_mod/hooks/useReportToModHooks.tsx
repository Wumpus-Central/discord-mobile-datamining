// === Module 11165: useIsReportToModEnabled ===

// Module 11165 (useIsReportToModEnabled)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;
import canReportMessageToMods from "canReportMessageToMods" /* 6075 */;
import _fetchProfile from "_fetchProfile" /* 8048 */;
import closure_4 from "createGuildRecordFromRust" /* 1910 */;
import closure_5 from "reinjectEphemerals" /* 4688 */;

const useEffect = noop.useEffect;
const result = set.fileFinishedImporting("modules/report_to_mod/hooks/useReportToModHooks.tsx");

export const useIsReportToModEnabled = function useIsReportToModEnabled(arg0) {
  const _require = arg0;
  const items = [closure_4];
  return _require(589).useStateFromStores(items, () => {
    if (null == closure_0) {
      return false;
    } else {
      const guild = closure_1_4.getGuild(tmp);
      let tmp4 = null != guild;
      if (tmp4) {
        tmp4 = closure_1_1(closure_1_2[4])(guild) && null != closure_1_1(closure_1_2[5])(guild);
        const tmp5 = closure_1_1;
        const tmp6 = closure_1_2;
        const tmp7 = closure_1_1(closure_1_2[4])(guild) && null != closure_1_1(closure_1_2[5])(guild);
      }
      return tmp4;
    }
  });
};
export const useReportToModChannelId = function useReportToModChannelId(arg0) {
  const _require = arg0;
  const items = [closure_4];
  return _require(589).useStateFromStores(items, () => {
    let guild = null;
    if (null != closure_0) {
      guild = closure_1_4.getGuild(tmp);
    }
    let tmp4 = null;
    if (null != guild) {
      let tmp7 = closure_1_1(closure_1_2[5])(guild);
      if (tmp7 == null) {
        tmp7 = null;
      }
      tmp4 = tmp7;
    }
    return tmp4;
  });
};
export const useIsModeratorReportOrPostChannel = function useIsModeratorReportOrPostChannel(isModeratorReportChannel) {
  return canReportMessageToMods.isModeratorReportOrPostChannel(isModeratorReportChannel);
};
export const useIsModeratorReportPostChannel = function useIsModeratorReportPostChannel(isModeratorReportChannel) {
  return canReportMessageToMods.isModeratorReportPostChannel(isModeratorReportChannel);
};
export const useLoadReportedMessage = function useLoadReportedMessage(messageReference) {
  messageReference = messageReference.messageReference;
  const items = [closure_5];
  const stateFromStores = messageReference(589).useStateFromStores(items, () => {
    let message = null;
    if (null != messageReference) {
      message = closure_1_5.getMessage(tmp.channel_id, tmp.message_id);
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
      let obj = stateFromStores(closure_1_2[7]);
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
    const user = _fetchProfile.getUser(reported_user_id);
    const obj = _fetchProfile;
  }
};