// discord_app/modules/conjure/chat/conjureUnread.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import conjureProjectMute from "../projects/conjureProjectMute.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserSettingsProtoStore from "../../user_settings/UserSettingsProtoStore.tsx";
import ReadStateStore from "../../../stores/ReadStateStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

const require = globalThis.__r;

require = fn;
function projectBadge(mentionCount, ackMessageIdResult, arg2) {
  let tmp = null;
  if (!arg2) {
    let tmp3 = mentionCount > 0;
    if (!tmp3) {
      let tmp5 = null != ackMessageIdResult;
      if (tmp5) {
        tmp5 = 0 !== SnowflakeUtilsDefault.getNonTimestampBits(ackMessageIdResult);
      }
      tmp3 = tmp5;
    }
    tmp = null;
    if (tmp3) {
      tmp = mentionCount;
    }
  }
  return tmp;
}
function isProjectInGuild(project, arg1) {
  if (null == project) {
    return false;
  } else {
    let guild_id = project.guild_id;
    if (guild_id == null) {
      guild_id = project.preview_guild_id;
    }
    if (guild_id == null) {
      guild_id = null;
    }
    let tmp2 = null == guild_id;
    if (!tmp2) {
      tmp2 = guild_id === arg1;
    }
    return tmp2;
  }
}
const ReadStateTypes = fn(6776).ReadStateTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/conjureUnread.tsx");

export function ackConjureProject(projectId) {
  DispatcherDefault.dispatch({ type: "CONJURE_PROJECT_ACK", projectId });
}
export function isConjureProjectUnread(id) {
  const mentionCount = ReadStateStore.getMentionCount(id, ReadStateTypes.CONJURING_PROJECT);
  const ackMessageIdResult = ReadStateStore.ackMessageId(id, ReadStateTypes.CONJURING_PROJECT);
  let tmp3 = mentionCount > 0;
  if (!tmp3) {
    let tmp5 = null != ackMessageIdResult;
    if (tmp5) {
      tmp5 = 0 !== SnowflakeUtilsDefault.getNonTimestampBits(ackMessageIdResult);
    }
    tmp3 = tmp5;
  }
  return tmp3;
}
export function getConjureProjectMentionCount(id) {
  return ReadStateStore.getMentionCount(id, ReadStateTypes.CONJURING_PROJECT);
}
export function useConjureProjectBadge(id) {
  _require = id;
  const items = [ReadStateStore, UserSettingsProtoStore];
  const items1 = [id];
  return require("initialize").useStateFromStores(
    items,
    () => {
      let tmp2 = null;
      if (null != closure_0) {
        const mentionCount = ReadStateStore.getMentionCount(closure_0, ReadStateTypes.CONJURING_PROJECT);
        const ackMessageIdResult = ReadStateStore.ackMessageId(closure_0, ReadStateTypes.CONJURING_PROJECT);
        let tmp10 = null;
        if (!obj.isConjureProjectMuted(UserSettingsProtoStore.settings, closure_0)) {
          let tmp11 = mentionCount > 0;
          if (!tmp11) {
            let tmp12 = null != ackMessageIdResult;
            if (tmp12) {
              tmp12 = 0 !== SnowflakeUtilsDefault.getNonTimestampBits(ackMessageIdResult);
            }
            tmp11 = tmp12;
          }
          tmp10 = null;
          if (tmp11) {
            tmp10 = mentionCount;
          }
        }
        tmp2 = tmp10;
        obj = conjureProjectMute;
      }
      return tmp2;
    },
    items1,
  );
}
export function useConjureUnreadSummary(arg0) {
  _require = arg0;
  const items = [ReadStateStore, UserSettingsProtoStore, ConjureProjectStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresObject(
    items,
    () => {
      let num = 0;
      let num2 = 0;
      const resourceIds = ReadStateStore.getResourceIds(ReadStateTypes.CONJURING_PROJECT);
      const iter = resourceIds[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp3 = nextResult;
        if (null == closure_0) {
          let mentionCount = ReadStateStore.getMentionCount(tmp3, ReadStateTypes.CONJURING_PROJECT);
          let ackMessageIdResult = ReadStateStore.ackMessageId(tmp3, ReadStateTypes.CONJURING_PROJECT);
          let obj = conjureProjectMute;
          let tmp17 = projectBadge(
            mentionCount,
            ackMessageIdResult,
            obj.isConjureProjectMuted(UserSettingsProtoStore.settings, tmp3),
          );
          if (null != tmp17) {
            num = num + 1;
            num2 = num2 + tmp18;
          }
        }
        continue;
      }
      return { hasUnread: num > 0, unreadCount: num, badgeCount: num2 };
    },
    items1,
  );
}
export function useAckConjureProjectOnLeave(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  const layoutEffect = noop.useLayoutEffect(
    () => () => {
      DispatcherDefault.dispatch({ type: "CONJURE_PROJECT_ACK", projectId });
    },
    items,
  );
}
export function useAckConjureProjectWhileViewing(projectId, stateFromStores) {
  _require = projectId;
  closure_1 = stateFromStores;
  const items = [ReadStateStore];
  const items1 = [projectId];
  stateFromStores = require("initialize").useStateFromStores(
    items,
    () => {
      let tmp2 = null != closure_0;
      if (tmp2) {
        const mentionCount = ReadStateStore.getMentionCount(closure_0, ReadStateTypes.CONJURING_PROJECT);
        const ackMessageIdResult = ReadStateStore.ackMessageId(closure_0, ReadStateTypes.CONJURING_PROJECT);
        let tmp7 = mentionCount > 0;
        if (!tmp7) {
          let tmp8 = null != ackMessageIdResult;
          if (tmp8) {
            tmp8 = 0 !== SnowflakeUtilsDefault.getNonTimestampBits(ackMessageIdResult);
          }
          tmp7 = tmp8;
        }
        tmp2 = tmp7;
      }
      return tmp2;
    },
    items1,
  );
  const items2 = [projectId, stateFromStores, stateFromStores];
  const effect = noop.useEffect(() => {
    let tmp2 = null != projectId;
    if (tmp2) {
      tmp2 = stateFromStores;
    }
    if (tmp2) {
      tmp2 = closure_1;
    }
    if (tmp2) {
      const obj2 = { type: "CONJURE_PROJECT_ACK", projectId };
      DispatcherDefault.dispatch(obj2);
    }
  }, items2);
}
