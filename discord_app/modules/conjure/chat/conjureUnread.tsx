// === Module 10834: conjureUnread ===

// Module 10834 (conjureUnread)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import conjureProjectMute from "conjureProjectMute" /* 10835 */;
import noop from "module_19" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1243 */;
import ReadStateStore from "ReadStateStore" /* 6829 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6831 */;

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
const ReadStateTypes = fn(6763).ReadStateTypes;
fn(558);
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureProjectBadge(arg0) {
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
    const fn = function s() {
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
}) : (function useConjureProjectBadge(arg0) {
  _require = arg0;
  const items = [ReadStateStore, UserSettingsProtoStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
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
  }, items1);
});
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureUnreadSummary(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore, UserSettingsProtoStore, ConjureProjectStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class C {
      constructor() {
        num = 0;
        num2 = 0;
        resourceIds = closure_5.getResourceIds(ReadStateTypes.CONJURING_PROJECT);
        iter = resourceIds[Symbol.iterator]();
        nextResult = iter.next();
        while (iter !== undefined) {
          tmp3 = nextResult;
          if (null == closure_0) {
            tmp8 = projectBadge;
            tmp9 = closure_5;
            tmp10 = nextResult;
            tmp11 = ReadStateTypes;
            mentionCount = closure_5.getMentionCount(tmp3, ReadStateTypes.CONJURING_PROJECT);
            tmp14 = closure_0;
            tmp15 = closure_2;
            ackMessageIdResult = closure_5.ackMessageId(tmp3, ReadStateTypes.CONJURING_PROJECT);
            obj = closure_0(closure_2[9]);
            tmp16 = closure_4;
            tmp17 = projectBadge(mentionCount, ackMessageIdResult, obj.isConjureProjectMuted(closure_4.settings, tmp3));
            if (null != tmp17) {
              tmp19 = num;
              num = num + 1;
              tmp20 = num2;
              tmp21 = tmp17;
              num2 = num2 + tmp18;
            }
          } else {
            tmp5 = isProjectInGuild;
            tmp6 = closure_6;
            tmp7 = nextResult;
          }
          continue;
        }
        obj1 = { hasUnread: num > 0, unreadCount: num, badgeCount: num2 };
        return obj1;
      }
    }
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = C;
    cResult[3] = items1;
    let tmp9 = items1;
  } else {
    class C {
      constructor() {
        num = 0;
        num2 = 0;
        resourceIds = closure_5.getResourceIds(ReadStateTypes.CONJURING_PROJECT);
        iter = resourceIds[Symbol.iterator]();
        nextResult = iter.next();
        while (iter !== undefined) {
          tmp3 = nextResult;
          if (null == closure_0) {
            tmp8 = projectBadge;
            tmp9 = closure_5;
            tmp10 = nextResult;
            tmp11 = ReadStateTypes;
            mentionCount = closure_5.getMentionCount(tmp3, ReadStateTypes.CONJURING_PROJECT);
            tmp14 = closure_0;
            tmp15 = closure_2;
            ackMessageIdResult = closure_5.ackMessageId(tmp3, ReadStateTypes.CONJURING_PROJECT);
            obj = closure_0(closure_2[9]);
            tmp16 = closure_4;
            tmp17 = projectBadge(mentionCount, ackMessageIdResult, obj.isConjureProjectMuted(closure_4.settings, tmp3));
            if (null != tmp17) {
              tmp19 = num;
              num = num + 1;
              tmp20 = num2;
              tmp21 = tmp17;
              num2 = num2 + tmp18;
            }
          } else {
            tmp5 = isProjectInGuild;
            tmp6 = closure_6;
            tmp7 = nextResult;
          }
          continue;
        }
        obj1 = { hasUnread: num > 0, unreadCount: num, badgeCount: num2 };
        return obj1;
      }
    }
    tmp9 = cResult[3];
  }
  let obj = require("c");
  return require("initialize").useStateFromStoresObject(first, C, tmp9);
}) : (function useConjureUnreadSummary(arg0) {
  _require = arg0;
  const items = [ReadStateStore, UserSettingsProtoStore, ConjureProjectStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresObject(items, () => {
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
        let tmp17 = projectBadge(mentionCount, ackMessageIdResult, obj.isConjureProjectMuted(UserSettingsProtoStore.settings, tmp3));
        if (null != tmp17) {
          num = num + 1;
          num2 = num2 + tmp18;
        }
      }
      continue;
    }
    return { hasUnread: num > 0, unreadCount: num, badgeCount: num2 };
  }, items1);
});
function ackConjureProject(projectId) {
  DispatcherDefault.dispatch({ type: "CONJURE_PROJECT_ACK", projectId });
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/conjureUnread.tsx");

export { ackConjureProject };
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
export const useConjureProjectBadge = tmp2;
export const useConjureUnreadSummary = tmp3;
export const useAckConjureProjectWhileViewing = ReactCompilerGating.isReactCompilerEnabled() ? (function useAckConjureProjectWhileViewing(projectId, arg1) {
  _require = projectId;
  importDefault = arg1;
  const cResult = require("c").c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== projectId) {
    class C {
      constructor() {
        tmp = closure_0;
        tmp2 = null != closure_0;
        if (tmp2) {
          tmp3 = closure_5;
          tmp4 = ReadStateTypes;
          mentionCount = closure_5.getMentionCount(tmp, ReadStateTypes.CONJURING_PROJECT);
          ackMessageIdResult = closure_5.ackMessageId(tmp, ReadStateTypes.CONJURING_PROJECT);
          num = 0;
          tmp7 = mentionCount > 0;
          if (!tmp7) {
            tmp8 = null != ackMessageIdResult;
            if (tmp8) {
              tmp9 = closure_1;
              tmp10 = closure_2;
              obj = closure_1(closure_2[6]);
              tmp8 = 0 !== obj.getNonTimestampBits(ackMessageIdResult);
            }
            tmp7 = tmp8;
          }
          tmp2 = tmp7;
        }
        return tmp2;
      }
    }
    const items1 = [projectId];
    cResult[1] = projectId;
    cResult[2] = C;
    cResult[3] = items1;
    let tmp7 = items1;
  } else {
    class C {
      constructor() {
        tmp = closure_0;
        tmp2 = null != closure_0;
        if (tmp2) {
          tmp3 = closure_5;
          tmp4 = ReadStateTypes;
          mentionCount = closure_5.getMentionCount(tmp, ReadStateTypes.CONJURING_PROJECT);
          ackMessageIdResult = closure_5.ackMessageId(tmp, ReadStateTypes.CONJURING_PROJECT);
          num = 0;
          tmp7 = mentionCount > 0;
          if (!tmp7) {
            tmp8 = null != ackMessageIdResult;
            if (tmp8) {
              tmp9 = closure_1;
              tmp10 = closure_2;
              obj = closure_1(closure_2[6]);
              tmp8 = 0 !== obj.getNonTimestampBits(ackMessageIdResult);
            }
            tmp7 = tmp8;
          }
          tmp2 = tmp7;
        }
        return tmp2;
      }
    }
    tmp7 = cResult[3];
  }
  let obj = require("c");
  stateFromStores = require("initialize").useStateFromStores(first, C, tmp7);
  if (cResult[4] === arg1) {
    class C {
      constructor() {
        tmp = closure_0;
        tmp2 = null != closure_0;
        if (tmp2) {
          tmp3 = closure_5;
          tmp4 = ReadStateTypes;
          mentionCount = closure_5.getMentionCount(tmp, ReadStateTypes.CONJURING_PROJECT);
          ackMessageIdResult = closure_5.ackMessageId(tmp, ReadStateTypes.CONJURING_PROJECT);
          num = 0;
          tmp7 = mentionCount > 0;
          if (!tmp7) {
            tmp8 = null != ackMessageIdResult;
            if (tmp8) {
              tmp9 = closure_1;
              tmp10 = closure_2;
              obj = closure_1(closure_2[6]);
              tmp8 = 0 !== obj.getNonTimestampBits(ackMessageIdResult);
            }
            tmp7 = tmp8;
          }
          tmp2 = tmp7;
        }
        return tmp2;
      }
    }
  }
  class P {
    constructor() {
      tmp2 = null != closure_0;
      tmp = closure_0;
      if (tmp2) {
        tmp2 = closure_2;
      }
      if (tmp2) {
        tmp2 = closure_1;
      }
      if (tmp2) {
        tmp3 = closure_1;
        tmp4 = closure_2;
        obj = closure_1(closure_2[5]);
        obj1 = { type: "CONJURE_PROJECT_ACK", projectId: null };
        obj1.projectId = tmp;
        dispatchResult = obj.dispatch(obj1);
      }
      return;
    }
  }
  const items2 = [projectId, stateFromStores, arg1];
  cResult[4] = arg1;
  cResult[5] = projectId;
  cResult[6] = stateFromStores;
  cResult[7] = P;
  cResult[8] = items2;
  const tmpResult = require("initialize");
}) : (function useAckConjureProjectWhileViewing(projectId, arg1) {
  _require = projectId;
  closure_1 = arg1;
  const items = [ReadStateStore];
  const items1 = [projectId];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
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
  }, items1);
  const items2 = [projectId, stateFromStores, arg1];
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
});