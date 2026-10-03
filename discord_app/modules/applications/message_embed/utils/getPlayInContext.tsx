// === Module 11554: getPlayInContext ===

// Module 11554 (getPlayInContext)
import getEmbeddedActivityLaunchability from "getEmbeddedActivityLaunchability" /* 9011 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/message_embed/utils/getPlayInContext.tsx");

export const usePlayInContext = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(14);
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
  const obj = require("c");
  stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [EmbeddedActivitiesStore];
    cResult[2] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === arg0) {
    if (cResult[4] === stateFromStores) {
      let tmp10 = cResult[5];
    }
    const stateFromStores1 = tmp(tmp2[4]).useStateFromStores(tmp8, tmp10);
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
      let tmp16 = fn2;
      let tmp15 = items2;
    } else {
      tmp15 = cResult[6];
      tmp16 = cResult[7];
    }
    const tmpResult4 = tmp(tmp2[4]);
    const stateFromStores2 = tmp(tmp2[4]).useStateFromStores(tmp15, tmp16);
    const tmpResult5 = tmp(tmp2[4]);
    const embeddedActivityLaunchability = tmp(tmp2[5]).useEmbeddedActivityLaunchability(stateFromStores);
    let tmp20 = null != compositeInstanceId;
    if (tmp20) {
      let compositeInstanceId1;
      if (stateFromStores2 != null) {
        compositeInstanceId1 = stateFromStores2.compositeInstanceId;
      }
      tmp20 = compositeInstanceId1 === compositeInstanceId;
    }
    const tmp22 = embeddedActivityLaunchability === tmp(tmp2[5]).EmbeddedActivityLaunchability.CAN_LAUNCH;
    if (cResult[8] === tmp22) {
      if (cResult[9] === compositeInstanceId) {
        if (cResult[10] === _location) {
          if (cResult[11] === stateFromStores) {
            if (cResult[12] === tmp20) {
              let tmp23 = cResult[13];
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
    tmp24[4] = tmp22;
    cResult[8] = tmp22;
    cResult[9] = compositeInstanceId;
    cResult[10] = _location;
    cResult[11] = stateFromStores;
    cResult[12] = tmp20;
    cResult[13] = tmp24;
    tmp23 = tmp24;
    const tmpResult6 = tmp(tmp2[5]);
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
  const tmpResult = require("initialize");
}) : ((arg0) => {
  _require = arg0;
  const items = [SelectedChannelStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => channelId.getChannelId());
  const obj = require("initialize");
  const items1 = [EmbeddedActivitiesStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
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
  const obj2 = require("initialize");
  const items2 = [EmbeddedActivitiesStore];
  const stateFromStores2 = require("initialize").useStateFromStores(items2, () => currentEmbeddedActivity.getCurrentEmbeddedActivity());
  const tmpResult = require("initialize");
  const embeddedActivityLaunchability = require("getEmbeddedActivityLaunchability").useEmbeddedActivityLaunchability(stateFromStores);
  const obj3 = { currentChannelId: stateFromStores, instanceId: compositeInstanceId, instanceLocation: _location, isCurrentlyInInstance: null, canLaunchInChannel: null };
  let tmp10 = null != compositeInstanceId;
  if (tmp10) {
    let compositeInstanceId1;
    if (stateFromStores2 != null) {
      compositeInstanceId1 = stateFromStores2.compositeInstanceId;
    }
    tmp10 = compositeInstanceId1 === compositeInstanceId;
  }
  obj3.isCurrentlyInInstance = tmp10;
  obj3.canLaunchInChannel = embeddedActivityLaunchability === require("getEmbeddedActivityLaunchability").EmbeddedActivityLaunchability.CAN_LAUNCH;
  return obj3;
});
export const getPlayInContext = function getPlayInContext(id, channel_id) {
  closure_0 = id;
  let channelId = channel_id;
  if (channel_id == null) {
    channelId = SelectedChannelStore.getChannelId();
  }
  if (null == channelId) {
    return { currentChannelId: null, instanceId: null, instanceLocation: null, isCurrentlyInInstance: false, canLaunchInChannel: false };
  } else {
    if (null != channelId) {
      let NO_CHANNEL = getEmbeddedActivityLaunchability.getEmbeddedActivityLaunchabilityForChannel(channelId);
      let tmp3 = require;
    } else {
      tmp3 = require;
      NO_CHANNEL = getEmbeddedActivityLaunchability.EmbeddedActivityLaunchability.NO_CHANNEL;
    }
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
    const obj3 = { currentChannelId: channelId, instanceId: compositeInstanceId, instanceLocation: _location, isCurrentlyInInstance: null, canLaunchInChannel: null };
    let tmp11 = null != compositeInstanceId;
    if (tmp11) {
      let compositeInstanceId1;
      if (currentEmbeddedActivity != null) {
        compositeInstanceId1 = currentEmbeddedActivity.compositeInstanceId;
      }
      tmp11 = compositeInstanceId1 === compositeInstanceId;
    }
    obj3.isCurrentlyInInstance = tmp11;
    obj3.canLaunchInChannel = NO_CHANNEL === tmp3(9011).EmbeddedActivityLaunchability.CAN_LAUNCH;
    return obj3;
  }
};