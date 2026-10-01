// discord_app/modules/vibegrations/lib/vibegrationsUnread.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import VibegrationsReadStateFlags2 from "../../../../discord_common/js/shared/shared-constants/VibegrationsReadStateFlags.tsx";
import useVibegrationsWindowFocusedDefault from "useVibegrationsWindowFocused.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ReadStateStore from "../../../stores/ReadStateStore.tsx";

const require = globalThis.__r;

require = fn;
function unreadStatus(mentionCount, ReadStateStore) {
  if (0 === mentionCount) {
    return null;
  } else {
    if (tmp == ReadStateStore) {
      const FINISHED = VibegrationsReadStateFlags2.VibegrationsReadStateFlags.FINISHED;
    } else {
      let VibegrationsReadStateFlags = dependencyMap;
      const nonTimestampBits = SnowflakeUtilsDefault.getNonTimestampBits(ReadStateStore);
    }
    VibegrationsReadStateFlags = VibegrationsReadStateFlags2.VibegrationsReadStateFlags;
    const NEEDS_INPUT = VibegrationsReadStateFlags.NEEDS_INPUT;
  }
}
const ReadStateTypes = fn(5027).ReadStateTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsUnread.tsx");

export const ackVibegrationsProject = function ackVibegrationsProject(projectId) {
  DispatcherDefault.dispatch({ type: "VIBEGRATIONS_PROJECT_ACK", projectId });
};
export const useVibegrationsProjectUnreadStatus = function useVibegrationsProjectUnreadStatus(id) {
  _require = id;
  const items = [ReadStateStore];
  const items1 = [id];
  return require("initialize").useStateFromStores(
    items,
    () => {
      let tmp3 = null;
      if (null != closure_0) {
        let VibegrationsReadStateFlags = ReadStateStore.getMentionCount(closure_0, ReadStateTypes.CONJURING_PROJECT);
        let ackMessageId = ReadStateStore.ackMessageId;
        const ackMessageIdResult = ackMessageId(closure_0, ReadStateTypes.CONJURING_PROJECT);
        if (0 === VibegrationsReadStateFlags) {
          tmp3 = null;
        } else {
          if (tmp2 == ackMessageIdResult) {
            const FINISHED = VibegrationsReadStateFlags2.VibegrationsReadStateFlags.FINISHED;
          } else {
            VibegrationsReadStateFlags = dependencyMap;
            ackMessageId = require;
            const nonTimestampBits = SnowflakeUtilsDefault.getNonTimestampBits(ackMessageIdResult);
          }
          VibegrationsReadStateFlags = ackMessageId(16065).VibegrationsReadStateFlags;
          const NEEDS_INPUT = VibegrationsReadStateFlags.NEEDS_INPUT;
        }
      }
      return tmp3;
    },
    items1,
  );
};
export const useVibegrationsUnreadSummary = function useVibegrationsUnreadSummary() {
  const items = [ReadStateStore];
  return initialize.useStateFromStoresObject(items, () => {
    let hasUnread = false;
    let badgeCount = 0;
    const resourceIds = ReadStateStore.getResourceIds(constants.CONJURING_PROJECT);
    const iter = resourceIds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let mentionCount = ReadStateStore.getMentionCount(nextResult, constants.CONJURING_PROJECT);
      let tmp7 = unreadStatus(mentionCount, ReadStateStore.ackMessageId(nextResult, constants.CONJURING_PROJECT));
      if (null != tmp7) {
        hasUnread = true;
        if (tmp8 === require("VibegrationsReadStateFlags").VibegrationsReadStateFlags.NEEDS_INPUT) {
          badgeCount = badgeCount + 1;
        }
      }
      continue;
    }
    return { hasUnread, badgeCount };
  });
};
export const useAckVibegrationsProjectWhileViewing = function useAckVibegrationsProjectWhileViewing(projectId) {
  _require = projectId;
  closure_129_0 = projectId;
  const items = [ReadStateStore];
  const items1 = [projectId];
  const tmp =
    null !=
    require("initialize").useStateFromStores(
      items,
      () => {
        let tmp3 = null;
        if (null != closure_0) {
          let VibegrationsReadStateFlags = ReadStateStore.getMentionCount(closure_0, ReadStateTypes.CONJURING_PROJECT);
          let ackMessageId = ReadStateStore.ackMessageId;
          const ackMessageIdResult = ackMessageId(closure_0, ReadStateTypes.CONJURING_PROJECT);
          if (0 === VibegrationsReadStateFlags) {
            tmp3 = null;
          } else {
            if (tmp2 == ackMessageIdResult) {
              const FINISHED = VibegrationsReadStateFlags2.VibegrationsReadStateFlags.FINISHED;
            } else {
              VibegrationsReadStateFlags = dependencyMap;
              ackMessageId = require;
              const nonTimestampBits = SnowflakeUtilsDefault.getNonTimestampBits(ackMessageIdResult);
            }
            VibegrationsReadStateFlags = ackMessageId(16065).VibegrationsReadStateFlags;
            const NEEDS_INPUT = VibegrationsReadStateFlags.NEEDS_INPUT;
          }
        }
        return tmp3;
      },
      items1,
    );
  importDefault = tmp;
  let tmp2 = useVibegrationsWindowFocusedDefault();
  dependencyMap = tmp2;
  const items2 = [projectId, tmp, tmp2];
  const effect = noop.useEffect(() => {
    let tmp2 = null != projectId;
    if (tmp2) {
      tmp2 = closure_1;
    }
    if (tmp2) {
      tmp2 = closure_2;
    }
    if (tmp2) {
      const obj2 = { type: "VIBEGRATIONS_PROJECT_ACK", projectId };
      DispatcherDefault.dispatch(obj2);
    }
  }, items2);
};
