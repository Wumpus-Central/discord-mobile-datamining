// discord_app/modules/conjure/chat/conjureUnread.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import DispatcherDefault from "../../../Dispatcher.tsx";
import ReadStateConstants from "../../read_states/ReadStateConstants.tsx";
import conjureProjectMute from "../projects/conjureProjectMute.tsx";
import VibegrationsReadStateFlags from "../../../../discord_common/js/shared/shared-constants/VibegrationsReadStateFlags.tsx";
import react from "../../../../_runtime/00019_react.js";
import UserSettingsProtoStore from "../../user_settings/UserSettingsProtoStore.tsx";
import ReadStateStore from "../../../stores/ReadStateStore.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

function unreadStatus(mentionCount, ackMessageIdResult, arg2) {
  let tmp = null;
  if (!arg2) {
    tmp = null;
    if (0 !== mentionCount) {
      if (null != ackMessageIdResult) {
        let FINISHED;
        const obj = SnowflakeUtilsDefault;
        const nonTimestampBits = obj.getNonTimestampBits(ackMessageIdResult);
        if (nonTimestampBits & VibegrationsReadStateFlags.VibegrationsReadStateFlags.NEEDS_INPUT) {
          FINISHED = VibegrationsReadStateFlags.VibegrationsReadStateFlags.NEEDS_INPUT;
        }
        tmp = FINISHED;
      }
      FINISHED = VibegrationsReadStateFlags.VibegrationsReadStateFlags.FINISHED;
    }
  }
  return tmp;
}
const ReadStateTypes = ReadStateConstants.ReadStateTypes;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp7;
      let tmp8;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(4);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ReadStateStore, UserSettingsProtoStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function c() {
          let tmp2 = null;
          if (null != closure_0) {
            const mentionCount = ReadStateStore.getMentionCount(closure_0, ReadStateTypes.CONJURING_PROJECT);
            const ackMessageIdResult = ReadStateStore.ackMessageId(closure_0, ReadStateTypes.CONJURING_PROJECT);
            let tmp10 = null;
            const obj = conjureProjectMute;
            if (!obj.isConjureProjectMuted(UserSettingsProtoStore.settings, closure_0)) {
              tmp10 = null;
              if (0 !== mentionCount) {
                if (null != ackMessageIdResult) {
                  let FINISHED;
                  const obj2 = SnowflakeUtilsDefault;
                  const nonTimestampBits = obj2.getNonTimestampBits(ackMessageIdResult);
                  if (nonTimestampBits & VibegrationsReadStateFlags.VibegrationsReadStateFlags.NEEDS_INPUT) {
                    FINISHED = VibegrationsReadStateFlags.VibegrationsReadStateFlags.NEEDS_INPUT;
                  }
                  tmp10 = FINISHED;
                }
                FINISHED = VibegrationsReadStateFlags.VibegrationsReadStateFlags.FINISHED;
              }
            }
            tmp2 = tmp10;
          }
          return tmp2;
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp7, tmp8);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      let obj = require("get initialized");
      const items = [ReadStateStore, UserSettingsProtoStore];
      const items1 = [arg0];
      return obj.useStateFromStores(
        items,
        () => {
          let tmp2 = null;
          if (null != closure_0) {
            const mentionCount = ReadStateStore.getMentionCount(closure_0, ReadStateTypes.CONJURING_PROJECT);
            const ackMessageIdResult = ReadStateStore.ackMessageId(closure_0, ReadStateTypes.CONJURING_PROJECT);
            let tmp10 = null;
            const obj = conjureProjectMute;
            if (!obj.isConjureProjectMuted(UserSettingsProtoStore.settings, closure_0)) {
              tmp10 = null;
              if (0 !== mentionCount) {
                if (null != ackMessageIdResult) {
                  let FINISHED;
                  const obj2 = SnowflakeUtilsDefault;
                  const nonTimestampBits = obj2.getNonTimestampBits(ackMessageIdResult);
                  if (nonTimestampBits & VibegrationsReadStateFlags.VibegrationsReadStateFlags.NEEDS_INPUT) {
                    FINISHED = VibegrationsReadStateFlags.VibegrationsReadStateFlags.NEEDS_INPUT;
                  }
                  tmp10 = FINISHED;
                }
                FINISHED = VibegrationsReadStateFlags.VibegrationsReadStateFlags.FINISHED;
              }
            }
            tmp2 = tmp10;
          }
          return tmp2;
        },
        items1,
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let settings;
      let tmp4;
      let tmp5;
      let obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ReadStateStore, UserSettingsProtoStore];
        const fn = function s() {
          let hasUnread = false;
          let badgeCount = 0;
          const resourceIds = ReadStateStore.getResourceIds(constants.CONJURING_PROJECT);
          const iter = resourceIds[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let mentionCount = ReadStateStore.getMentionCount(nextResult, constants.CONJURING_PROJECT);
            let ackMessageIdResult = ReadStateStore.ackMessageId(nextResult, constants.CONJURING_PROJECT);
            let obj = require("conjureProjectMute");
            let tmp11 = unreadStatus(
              mentionCount,
              ackMessageIdResult,
              obj.isConjureProjectMuted(settings.settings, nextResult),
            );
            if (null != tmp11) {
              hasUnread = true;
              if (tmp12 === require("VibegrationsReadStateFlags").VibegrationsReadStateFlags.NEEDS_INPUT) {
                badgeCount = badgeCount + 1;
              }
            }
            continue;
          }
          return { hasUnread, badgeCount };
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      return tmpResult.useStateFromStoresObject(tmp4, tmp5);
    }
  : () => {
      let settings;
      let obj = get_initialized;
      const items = [ReadStateStore, UserSettingsProtoStore];
      return obj.useStateFromStoresObject(items, () => {
        let hasUnread = false;
        let badgeCount = 0;
        const resourceIds = ReadStateStore.getResourceIds(constants.CONJURING_PROJECT);
        const iter = resourceIds[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let mentionCount = ReadStateStore.getMentionCount(nextResult, constants.CONJURING_PROJECT);
          let ackMessageIdResult = ReadStateStore.ackMessageId(nextResult, constants.CONJURING_PROJECT);
          let obj = require("conjureProjectMute");
          let tmp11 = unreadStatus(
            mentionCount,
            ackMessageIdResult,
            obj.isConjureProjectMuted(settings.settings, nextResult),
          );
          if (null != tmp11) {
            hasUnread = true;
            if (tmp12 === require("VibegrationsReadStateFlags").VibegrationsReadStateFlags.NEEDS_INPUT) {
              badgeCount = badgeCount + 1;
            }
          }
          continue;
        }
        return { hasUnread, badgeCount };
      });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (projectId) => {
      let closure_2;
      let first;
      let tmp6;
      let tmp7;
      _require = projectId;
      let tmp2 = dependencyMap;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(9);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ReadStateStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== projectId) {
        const fn = function c() {
          const tmp2 = null != projectId && ReadStateStore.getMentionCount(tmp, ReadStateTypes.CONJURING_PROJECT) > 0;
          return tmp2;
        };
        const items1 = [projectId];
        cResult[1] = projectId;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
      const tmp9 = stateFromStores(16144)();
      dependencyMap = tmp9;
      if (cResult[4] === tmp9) {
        if (cResult[5] === projectId) {
          let tmp10;
          let tmp11;
          if (cResult[6] === stateFromStores) {
            tmp10 = cResult[7];
            tmp11 = cResult[8];
          }
          const effect = react.useEffect(tmp10, tmp11);
        }
      }
      class R {
        constructor() {
          const tmp2 = null != projectId && stateFromStores && closure_2;
          if (tmp2) {
            const obj2 = { type: "CONJURE_PROJECT_ACK", projectId };
            const obj = DispatcherDefault;
            obj.dispatch(obj2);
          }
        }
      }
      const items2 = [projectId, stateFromStores, tmp9];
      cResult[4] = tmp9;
      cResult[5] = projectId;
      cResult[6] = stateFromStores;
      cResult[7] = R;
      cResult[8] = items2;
      tmp11 = items2;
      tmp10 = R;
    }
  : (projectId) => {
      let closure_2;
      _require = projectId;
      let obj = require("get initialized");
      const items = [ReadStateStore];
      const items1 = [projectId];
      const stateFromStores = obj.useStateFromStores(
        items,
        () => {
          const tmp2 = null != projectId && ReadStateStore.getMentionCount(tmp, ReadStateTypes.CONJURING_PROJECT) > 0;
          return tmp2;
        },
        items1,
      );
      let tmp2 = stateFromStores(16144)();
      dependencyMap = tmp2;
      const items2 = [projectId, stateFromStores, tmp2];
      const effect = react.useEffect(() => {
        const tmp2 = null != projectId && stateFromStores && closure_2;
        if (tmp2) {
          const obj2 = { type: "CONJURE_PROJECT_ACK", projectId };
          const obj = DispatcherDefault;
          obj.dispatch(obj2);
        }
      }, items2);
    };
function ackConjureProject(projectId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CONJURE_PROJECT_ACK", projectId };
  obj.dispatch(obj2);
}
const result = size.fileFinishedImporting("modules/conjure/chat/conjureUnread.tsx");

export { ackConjureProject };
export const useConjureProjectUnreadStatus = tmp2;
export const useConjureUnreadSummary = tmp3;
export const useAckConjureProjectWhileViewing = tmp4;
