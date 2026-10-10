// discord_app/modules/conjure/chat/conjureUnread.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import DispatcherDefault from "../../../Dispatcher.tsx";
import conjureProjectMute from "../projects/conjureProjectMute.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserSettingsProtoStore from "../../user_settings/UserSettingsProtoStore.tsx";
import ReadStateStore from "../../../stores/ReadStateStore.tsx";

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
const ReadStateTypes = fn(5967).ReadStateTypes;
fn(558);
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureProjectBadge(arg0) {
      _require = arg0;
      const cResult = require("c").c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ReadStateStore, UserSettingsProtoStore];
        cResult[0] = items;
        let first = items;
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
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp8 = items1;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      let obj = require("c");
      return require("initialize").useStateFromStores(first, tmp7, tmp8);
    }
  : function useConjureProjectBadge(arg0) {
      _require = arg0;
      const items = [ReadStateStore, UserSettingsProtoStore];
      const items1 = [arg0];
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
    };
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureUnreadSummary() {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ReadStateStore, UserSettingsProtoStore];
        const fn = function s() {
          let num = 0;
          let num2 = 0;
          const resourceIds = ReadStateStore.getResourceIds(constants.CONJURING_PROJECT);
          const iter = resourceIds[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let mentionCount = ReadStateStore.getMentionCount(nextResult, constants.CONJURING_PROJECT);
            let ackMessageIdResult = ReadStateStore.ackMessageId(nextResult, constants.CONJURING_PROJECT);
            let obj = require("conjureProjectMute");
            let tmp11 = projectBadge(
              mentionCount,
              ackMessageIdResult,
              obj.isConjureProjectMuted(settings.settings, nextResult),
            );
            if (null != tmp11) {
              num = num + 1;
              num2 = num2 + tmp12;
            }
            continue;
          }
          return { hasUnread: num > 0, unreadCount: num, badgeCount: num2 };
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      return initialize.useStateFromStoresObject(tmp4, tmp5);
    }
  : function useConjureUnreadSummary() {
      const items = [ReadStateStore, UserSettingsProtoStore];
      return initialize.useStateFromStoresObject(items, () => {
        let num = 0;
        let num2 = 0;
        const resourceIds = ReadStateStore.getResourceIds(constants.CONJURING_PROJECT);
        const iter = resourceIds[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let mentionCount = ReadStateStore.getMentionCount(nextResult, constants.CONJURING_PROJECT);
          let ackMessageIdResult = ReadStateStore.ackMessageId(nextResult, constants.CONJURING_PROJECT);
          let obj = require("conjureProjectMute");
          let tmp11 = projectBadge(
            mentionCount,
            ackMessageIdResult,
            obj.isConjureProjectMuted(settings.settings, nextResult),
          );
          if (null != tmp11) {
            num = num + 1;
            num2 = num2 + tmp12;
          }
          continue;
        }
        return { hasUnread: num > 0, unreadCount: num, badgeCount: num2 };
      });
    };
function ackConjureProject(projectId) {
  DispatcherDefault.dispatch({ type: "CONJURE_PROJECT_ACK", projectId });
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/conjureUnread.tsx");

export { ackConjureProject };
export const isConjureProjectUnread = function isConjureProjectUnread(arg0) {
  const mentionCount = ReadStateStore.getMentionCount(arg0, ReadStateTypes.CONJURING_PROJECT);
  const ackMessageIdResult = ReadStateStore.ackMessageId(arg0, ReadStateTypes.CONJURING_PROJECT);
  let tmp3 = mentionCount > 0;
  if (!tmp3) {
    let tmp5 = null != ackMessageIdResult;
    if (tmp5) {
      tmp5 = 0 !== SnowflakeUtilsDefault.getNonTimestampBits(ackMessageIdResult);
    }
    tmp3 = tmp5;
  }
  return tmp3;
};
export const useConjureProjectBadge = tmp2;
export const useConjureUnreadSummary = tmp3;
export const useAckConjureProjectWhileViewing = ReactCompilerGating.isReactCompilerEnabled()
  ? function useAckConjureProjectWhileViewing(projectId) {
      _require = projectId;
      const cResult = require("c").c(9);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ReadStateStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== projectId) {
        const fn = function c() {
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
        };
        const items1 = [projectId];
        cResult[1] = projectId;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp7 = items1;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
      const tmp9 = stateFromStores(11426)();
      dependencyMap = tmp9;
      if (cResult[4] === tmp9) {
        if (cResult[5] === projectId) {
          if (cResult[6] === stateFromStores) {
            let tmp10 = cResult[7];
            let tmp11 = cResult[8];
          }
          const effect = noop.useEffect(tmp10, tmp11);
        }
      }
      const fn2 = function l() {
        let tmp2 = null != projectId;
        if (tmp2) {
          tmp2 = stateFromStores;
        }
        if (tmp2) {
          tmp2 = closure_2;
        }
        if (tmp2) {
          const obj2 = { type: "CONJURE_PROJECT_ACK", projectId };
          DispatcherDefault.dispatch(obj2);
        }
      };
      const items2 = [projectId, stateFromStores, tmp9];
      cResult[4] = tmp9;
      cResult[5] = projectId;
      cResult[6] = stateFromStores;
      cResult[7] = fn2;
      cResult[8] = items2;
      tmp11 = items2;
      tmp10 = fn2;
      const tmpResult = require("initialize");
    }
  : function useAckConjureProjectWhileViewing(projectId) {
      _require = projectId;
      const items = [ReadStateStore];
      const items1 = [projectId];
      const stateFromStores = require("initialize").useStateFromStores(
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
      let tmp2 = stateFromStores(11426)();
      dependencyMap = tmp2;
      const items2 = [projectId, stateFromStores, tmp2];
      const effect = noop.useEffect(() => {
        let tmp2 = null != projectId;
        if (tmp2) {
          tmp2 = stateFromStores;
        }
        if (tmp2) {
          tmp2 = closure_2;
        }
        if (tmp2) {
          const obj2 = { type: "CONJURE_PROJECT_ACK", projectId };
          DispatcherDefault.dispatch(obj2);
        }
      }, items2);
    };
