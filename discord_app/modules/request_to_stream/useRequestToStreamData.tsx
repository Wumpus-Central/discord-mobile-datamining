// === Module 14339: useRequestToStreamData ===

// Module 14339 (useRequestToStreamData)
import ActivitiesActionCreatorsDefault from "ActivitiesActionCreators" /* 11216 */;
import RequestToStreamActionCreators from "RequestToStreamActionCreators" /* 14342 */;
import noop from "module_19" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6643 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const require = globalThis.__r;

require = fn;
const ActivityActionTypes = fn(1084).ActivityActionTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/request_to_stream/useRequestToStreamData.tsx");

export const useRequestToStreamData = ReactCompilerGating.isReactCompilerEnabled() ? (function useRequestToStreamData(targetUserId, guild_id) {
  _require = targetUserId;
  importDefault = guild_id;
  const cResult = require("c").c(16);
  let str;
  if (guild_id != null) {
    str = guild_id.guild_id;
  }
  if (str == null) {
    str = "";
  }
  if (cResult[0] !== str) {
    let obj2 = { guildId: str, location: "useRequestToStreamData" };
    cResult[0] = str;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  let obj = require("c");
  const enabled = require("RequestToStreamNonGamesExperiment").useConfig(tmp4).enabled;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore];
    const fn = function _() {
      return id.getId();
    };
    cResult[2] = items;
    cResult[3] = fn;
    let tmp7 = fn;
    let tmp6 = items;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let obj3 = require("RequestToStreamNonGamesExperiment");
  const stateFromStores = require("initialize").useStateFromStores(tmp6, tmp7);
  guild_id = undefined;
  const tmpResult = require("initialize");
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  activity = require("useStreamRequestActivities")(targetUserId, guild_id)[0];
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ApplicationStreamingStore];
    cResult[4] = items1;
    let tmp13 = items1;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] === guild_id) {
    if (cResult[6] === targetUserId) {
      let tmp15 = cResult[7];
    }
    const stateFromStores1 = tmp(tmp2[7]).useStateFromStores(tmp13, tmp15);
    const tmpResult3 = tmp(tmp2[7]);
    let application_id;
    if (activity != null) {
      application_id = activity.application_id;
    }
    const data = tmp(tmp2[9]).useApplication(application_id).data;
    tmp5(tmp2[10]);
    if (guild_id != null) {
      const id = guild_id.id;
    }
    if (cResult[8] === guild_id) {
      if (cResult[9] === activity) {
        if (cResult[10] === targetUserId) {
          let tmp20 = cResult[11];
        }
        let tmp21 = stateFromStores !== targetUserId;
        if (tmp21) {
          tmp21 = null != activity || enabled;
          const tmp22 = null != activity || enabled;
        }
        if (tmp21) {
          tmp21 = null != data || enabled;
          const tmp23 = null != data || enabled;
        }
        if (tmp21) {
          tmp21 = tmp19;
        }
        if (tmp21) {
          tmp21 = !stateFromStores1;
        }
        if (cResult[12] === tmp21) {
          if (cResult[13] === tmp20) {
            if (cResult[14] === data) {
              let tmp24 = cResult[15];
            }
            return tmp24;
          }
        }
        let tmp25 = null;
        if (tmp21) {
          const obj4 = { playingApplication: data, handleRequestToStream: tmp20 };
          tmp25 = obj4;
        }
        cResult[12] = tmp21;
        cResult[13] = tmp20;
        cResult[14] = data;
        cResult[15] = tmp25;
        tmp24 = tmp25;
      }
    }
    const fn2 = function q(arg0) {
      if (null != closure_1) {
        const obj2 = { type: ActivityActionTypes.STREAM_REQUEST, channelId: tmp2.id, activity, content: null, location: null, targetUserId: null };
        const _HermesInternal = HermesInternal;
        obj2.content = "<@" + targetUserId + ">";
        obj2.location = tmp;
        obj2.targetUserId = targetUserId;
        ActivitiesActionCreatorsDefault.sendActivityInvite(obj2);
        const result = RequestToStreamActionCreators.startStreamRequestCooldown(targetUserId);
      }
    };
    cResult[8] = guild_id;
    cResult[9] = activity;
    cResult[10] = targetUserId;
    cResult[11] = fn2;
    tmp20 = fn2;
    const tmpResult4 = tmp(tmp2[9]);
  }
  class R {
    constructor() {
      obj = closure_1;
      guildId = undefined;
      tmp = closure_4;
      tmp2 = closure_0;
      if (closure_1 != null) {
        guildId = obj.getGuildId();
      }
      return null != closure_4.getStreamForUser(tmp2, guildId);
    }
  }
  cResult[5] = guild_id;
  cResult[6] = targetUserId;
  cResult[7] = R;
  tmp15 = R;
  const tmp5Result = require("useStreamRequestActivities");
}) : (function useRequestToStreamData(targetUserId, guild_id) {
  _require = targetUserId;
  importDefault = guild_id;
  let str;
  if (guild_id != null) {
    str = guild_id.guild_id;
  }
  if (str == null) {
    str = "";
  }
  const enabled = require("RequestToStreamNonGamesExperiment").useConfig({ guildId: str, location: "useRequestToStreamData" }).enabled;
  let obj = require("RequestToStreamNonGamesExperiment");
  const items = [id];
  const stateFromStores = require("initialize").useStateFromStores(items, () => id.getId());
  guild_id = undefined;
  let obj2 = require("initialize");
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  activity = require("useStreamRequestActivities")(targetUserId, guild_id)[0];
  const tmpResult = require("useStreamRequestActivities");
  const items1 = [handleRequestToStream];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    let guildId;
    if (guild_id != null) {
      guildId = guild_id.getGuildId();
    }
    return null != ApplicationStreamingStore.getStreamForUser(closure_0, guildId);
  });
  const tmp3Result = require("initialize");
  let application_id;
  if (activity != null) {
    application_id = activity.application_id;
  }
  const data = require("ApplicationActionCreators").useApplication(application_id).data;
  id = undefined;
  const tmp3Result2 = require("ApplicationActionCreators");
  if (guild_id != null) {
    id = guild_id.id;
  }
  const items2 = [guild_id, activity, targetUserId];
  const obj5 = data;
  const tmpResult2 = require("useCanRequestStreamFromUser");
  handleRequestToStream = data.useCallback((arg0) => {
    if (null != closure_1) {
      const obj2 = { type: ActivityActionTypes.STREAM_REQUEST, channelId: tmp2.id, activity, content: null, location: null, targetUserId: null };
      const _HermesInternal = HermesInternal;
      obj2.content = "<@" + targetUserId + ">";
      obj2.location = tmp;
      obj2.targetUserId = targetUserId;
      ActivitiesActionCreatorsDefault.sendActivityInvite(obj2);
      const result = RequestToStreamActionCreators.startStreamRequestCooldown(targetUserId);
    }
  }, items2);
  let tmp14 = stateFromStores !== targetUserId;
  if (tmp14) {
    tmp14 = null != activity || enabled;
    const tmp15 = null != activity || enabled;
  }
  if (tmp14) {
    tmp14 = null != data || enabled;
    const tmp16 = null != data || enabled;
  }
  if (tmp14) {
    tmp14 = tmpResult1Result;
  }
  if (tmp14) {
    tmp14 = !stateFromStores1;
  }
  id = tmp14;
  const items3 = [tmp14, data, handleRequestToStream];
  return obj5.useMemo(() => {
    let tmp = null;
    if (closure_5) {
      const obj = { playingApplication: data, handleRequestToStream };
      tmp = obj;
    }
    return tmp;
  }, items3);
});