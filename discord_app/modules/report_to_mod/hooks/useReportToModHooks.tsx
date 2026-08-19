// discord_app/modules/report_to_mod/hooks/useReportToModHooks.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import noop from "../../../../_runtime/00019_noop.js";
import getGuildModeratorReportChannelIdDefault from "../getGuildModeratorReportChannelId.tsx";
import getGuildModeratorReportingEnabledDefault from "../getGuildModeratorReportingEnabled.tsx";
import canReportMessageToMods from "../ReportToModUtils.tsx";
import _fetchProfile from "../../../actions/UserActionCreators.tsx";
import createGuildRecordFromRust from "../../../stores/GuildStore.tsx";
import reinjectEphemerals from "../../../stores/MessageStore.tsx";

const useEffect = noop.useEffect;
const result = obj132.fileFinishedImporting("modules/report_to_mod/hooks/useReportToModHooks.tsx");

export const useIsReportToModEnabled = function useIsReportToModEnabled(arg0) {
  const _require = arg0;
  const items = [closure_4];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    if (null == closure_0) {
      return false;
    } else {
      const guild = closure_1_4.getGuild(tmp);
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
  const _require = arg0;
  const items = [closure_4];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    let guild = null;
    if (null != closure_0) {
      guild = closure_1_4.getGuild(tmp);
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
      message = closure_1_5.getMessage(messageReference.channel_id, messageReference.message_id);
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
      stateFromStores(dependencyMap[7]);
      let obj = { channelId: null, jump: null, limit: 10 };
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
  }
};