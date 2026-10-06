// === Module 11567: getPlayInContext ===

// Module 11567 (getPlayInContext)
import getEmbeddedActivityLaunchability from "getEmbeddedActivityLaunchability" /* 9044 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, num;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channelId;
  let closure_0;
  let currentEmbeddedActivity;
  let stateFromStores;
  let tmp4;
  let tmp5;
  let tmp8;
  _require = arg0;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(14);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedChannelStore];
    const fn = function o() {
      return channelId.getChannelId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(stateFromStores[4]);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [EmbeddedActivitiesStore];
    cResult[2] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === arg0) {
    let tmp10;
    let tmp16;
    let tmp15;
    if (cResult[4] === stateFromStores) {
      tmp10 = cResult[5];
    }
    const tmpResult4 = tmp(stateFromStores[4]);
    const stateFromStores1 = tmpResult4.useStateFromStores(tmp8, tmp10);
    let compositeInstanceId;
    if (stateFromStores1 != null) {
      compositeInstanceId = stateFromStores1.compositeInstanceId;
    }
    let _location;
    if (stateFromStores1 != null) {
      _location = stateFromStores1.location;
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [EmbeddedActivitiesStore];
      const fn2 = function y() {
        return currentEmbeddedActivity.getCurrentEmbeddedActivity();
      };
      cResult[6] = items2;
      cResult[7] = fn2;
      tmp16 = fn2;
      tmp15 = items2;
    } else {
      tmp15 = cResult[6];
      tmp16 = cResult[7];
    }
    const tmpResult5 = tmp(stateFromStores[4]);
    const stateFromStores2 = tmpResult5.useStateFromStores(tmp15, tmp16);
    const tmpResult6 = tmp(stateFromStores[5]);
    const embeddedActivityLaunchability = tmpResult6.useEmbeddedActivityLaunchability(stateFromStores);
    let tmp20 = null != compositeInstanceId;
    const CAN_LAUNCH = tmp(tmp2[5]).EmbeddedActivityLaunchability.CAN_LAUNCH;
    if (tmp20) {
      let compositeInstanceId1;
      if (stateFromStores2 != null) {
        compositeInstanceId1 = stateFromStores2.compositeInstanceId;
      }
      tmp20 = compositeInstanceId1 === compositeInstanceId;
    }
    if (cResult[8] === embeddedActivityLaunchability === CAN_LAUNCH) {
      if (cResult[9] === compositeInstanceId) {
        if (cResult[10] === _location) {
          if (cResult[11] === stateFromStores) {
            let tmp23;
            if (cResult[12] === tmp20) {
              tmp23 = cResult[13];
            }
            return tmp23;
          }
        }
      }
    }
    class I {
      constructor() {
        if (null == closure_1) {
          return null;
        } else {
          tmp2 = closure_2;
          embeddedActivitiesForChannel = closure_2.getEmbeddedActivitiesForChannel(tmp);
          found = embeddedActivitiesForChannel.filter((applicationId) => applicationId.applicationId === closure_1_0);
          num = 0;
          first = undefined;
          if (found.length > 0) {
            first = found[0];
          }
          return first;
        }
      }
    }
    tmp24[0] = stateFromStores;
    tmp24[1] = compositeInstanceId;
    tmp24[2] = _location;
    tmp24[3] = tmp20;
    tmp24[4] = embeddedActivityLaunchability === CAN_LAUNCH;
    cResult[8] = embeddedActivityLaunchability === CAN_LAUNCH;
    cResult[9] = compositeInstanceId;
    cResult[10] = _location;
    cResult[11] = stateFromStores;
    cResult[12] = tmp20;
    cResult[13] = tmp24;
    tmp23 = tmp24;
  }
  class I {
    constructor() {
      if (null == closure_1) {
        return null;
      } else {
        tmp2 = closure_2;
        embeddedActivitiesForChannel = closure_2.getEmbeddedActivitiesForChannel(tmp);
        found = embeddedActivitiesForChannel.filter((applicationId) => applicationId.applicationId === closure_1_0);
        num = 0;
        first = undefined;
        if (found.length > 0) {
          first = found[0];
        }
        return first;
      }
    }
  }
  cResult[3] = arg0;
  cResult[4] = stateFromStores;
  cResult[5] = I;
  tmp10 = I;
}) : ((arg0) => {
  let CAN_LAUNCH;
  let channelId;
  let closure_0;
  let currentEmbeddedActivity;
  let stateFromStores;
  let tmp10;
  _require = arg0;
  const tmp = _require;
  const items = [SelectedChannelStore];
  const obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, () => channelId.getChannelId());
  const items1 = [EmbeddedActivitiesStore];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    if (null == stateFromStores) {
      return null;
    } else {
      const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(tmp);
      const found = embeddedActivitiesForChannel.filter((applicationId) => applicationId.applicationId === closure_1_0);
      let first;
      if (found.length > 0) {
        first = found[0];
      }
      return first;
    }
  });
  let compositeInstanceId;
  if (stateFromStores1 != null) {
    compositeInstanceId = stateFromStores1.compositeInstanceId;
  }
  let _location;
  if (stateFromStores1 != null) {
    _location = stateFromStores1.location;
  }
  const items2 = [EmbeddedActivitiesStore];
  const tmpResult = tmp(stateFromStores[4]);
  const stateFromStores2 = tmpResult.useStateFromStores(items2, () => currentEmbeddedActivity.getCurrentEmbeddedActivity());
  const tmpResult2 = tmp(stateFromStores[5]);
  const embeddedActivityLaunchability = tmpResult2.useEmbeddedActivityLaunchability(stateFromStores);
  const obj3 = { currentChannelId: stateFromStores, instanceId: compositeInstanceId, instanceLocation: _location, isCurrentlyInInstance: tmp10, canLaunchInChannel: embeddedActivityLaunchability === CAN_LAUNCH };
  tmp10 = null != compositeInstanceId;
  CAN_LAUNCH = tmp(tmp2[5]).EmbeddedActivityLaunchability.CAN_LAUNCH;
  if (tmp10) {
    let compositeInstanceId1;
    if (stateFromStores2 != null) {
      compositeInstanceId1 = stateFromStores2.compositeInstanceId;
    }
    tmp10 = compositeInstanceId1 === compositeInstanceId;
  }
  return obj3;
});
const result = size.fileFinishedImporting("modules/applications/message_embed/utils/getPlayInContext.tsx");

export const usePlayInContext = tmp2;
export const getPlayInContext = function getPlayInContext(id, channel_id) {
  let tmp11;
  let closure_0 = id;
  let channelId = channel_id;
  if (channel_id == null) {
    channelId = SelectedChannelStore.getChannelId();
  }
  if (null == channelId) {
    return { currentChannelId: null, instanceId: null, instanceLocation: null, isCurrentlyInInstance: false, canLaunchInChannel: false };
  } else {
    let NO_CHANNEL;
    let tmp3;
    if (null != channelId) {
      const obj = getEmbeddedActivityLaunchability;
      NO_CHANNEL = obj.getEmbeddedActivityLaunchabilityForChannel(channelId);
      tmp3 = require;
    } else {
      tmp3 = require;
      NO_CHANNEL = getEmbeddedActivityLaunchability.EmbeddedActivityLaunchability.NO_CHANNEL;
    }
    const CAN_LAUNCH = tmp3(9044).EmbeddedActivityLaunchability.CAN_LAUNCH;
    const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(channelId);
    const found = embeddedActivitiesForChannel.filter((applicationId) => applicationId.applicationId === closure_0);
    let first;
    if (found.length > 0) {
      first = found[0];
    }
    let compositeInstanceId;
    if (first != null) {
      compositeInstanceId = first.compositeInstanceId;
    }
    let _location;
    if (first != null) {
      _location = first.location;
    }
    const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
    const obj3 = { currentChannelId: channelId, instanceId: compositeInstanceId, instanceLocation: _location, isCurrentlyInInstance: tmp11, canLaunchInChannel: NO_CHANNEL === CAN_LAUNCH };
    tmp11 = null != compositeInstanceId;
    if (tmp11) {
      let compositeInstanceId1;
      if (currentEmbeddedActivity != null) {
        compositeInstanceId1 = currentEmbeddedActivity.compositeInstanceId;
      }
      tmp11 = compositeInstanceId1 === compositeInstanceId;
    }
    return obj3;
  }
};