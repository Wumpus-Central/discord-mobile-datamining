// === Module 11943: getPlayInContext ===

// Module 11943 (getPlayInContext)
import getEmbeddedActivityLaunchability from "getEmbeddedActivityLaunchability" /* 9582 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/message_embed/utils/getPlayInContext.tsx");

export const usePlayInContext = function usePlayInContext(arg0) {
  _require = arg0;
  let obj = require("initialize");
  const items = [SelectedChannelStore];
  stateFromStores = obj.useStateFromStores(items, () => channelId.getChannelId());
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
  let tmpResult = tmp(tmp2[2]);
  const items2 = [EmbeddedActivitiesStore];
  const stateFromStores2 = tmpResult.useStateFromStores(items2, () => currentEmbeddedActivity.getCurrentEmbeddedActivity());
  tmpResult = tmp(tmp2[3]);
  const embeddedActivityLaunchability = tmpResult.useEmbeddedActivityLaunchability(stateFromStores);
  obj = { currentChannelId: stateFromStores, instanceId: compositeInstanceId, instanceLocation: _location, isCurrentlyInInstance: null, canLaunchInChannel: null };
  let tmp10 = null != compositeInstanceId;
  if (tmp10) {
    let compositeInstanceId1;
    if (stateFromStores2 != null) {
      compositeInstanceId1 = stateFromStores2.compositeInstanceId;
    }
    tmp10 = compositeInstanceId1 === compositeInstanceId;
  }
  obj.isCurrentlyInInstance = tmp10;
  obj.canLaunchInChannel = embeddedActivityLaunchability === require("getEmbeddedActivityLaunchability").EmbeddedActivityLaunchability.CAN_LAUNCH;
  return obj;
};
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
      let obj = getEmbeddedActivityLaunchability;
      let NO_CHANNEL = obj.getEmbeddedActivityLaunchabilityForChannel(channelId);
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
    obj = { currentChannelId: channelId, instanceId: compositeInstanceId, instanceLocation: _location, isCurrentlyInInstance: null, canLaunchInChannel: null };
    let tmp11 = null != compositeInstanceId;
    if (tmp11) {
      let compositeInstanceId1;
      if (currentEmbeddedActivity != null) {
        compositeInstanceId1 = currentEmbeddedActivity.compositeInstanceId;
      }
      tmp11 = compositeInstanceId1 === compositeInstanceId;
    }
    obj.isCurrentlyInInstance = tmp11;
    obj.canLaunchInChannel = NO_CHANNEL === tmp3(9582).EmbeddedActivityLaunchability.CAN_LAUNCH;
    return obj;
  }
};