// discord_app/modules/applications/message_embed/utils/getPlayInContext.tsx
import participantFromServer from "participantFromServer";
import handleConnectionOpen from "handleConnectionOpen";
import { getEmbeddedActivityLaunchability } from "../../../activities/utils/getEmbeddedActivityLaunchability.tsx";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/applications/message_embed/utils/getPlayInContext.tsx");

export const usePlayInContext = function usePlayInContext(arg0) {
  const _require = arg0;
  let obj = _require(stateFromStores[2]);
  const items = [handleConnectionOpen];
  stateFromStores = obj.useStateFromStores(items, () => channelId.getChannelId());
  const items1 = [participantFromServer];
  const stateFromStores1 = _require(stateFromStores[2]).useStateFromStores(items1, () => {
    if (null == stateFromStores) {
      return null;
    } else {
      const embeddedActivitiesForChannel = outer1_2.getEmbeddedActivitiesForChannel(tmp);
      const found = embeddedActivitiesForChannel.filter((applicationId) => applicationId.applicationId === closure_0);
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
  const items2 = [participantFromServer];
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
  obj[3] = tmp10;
  obj[4] = embeddedActivityLaunchability === _require(stateFromStores[3]).EmbeddedActivityLaunchability.CAN_LAUNCH;
  return obj;
};
export const getPlayInContext = function getPlayInContext(id, channel_id) {
  const _require = id;
  let channelId = channel_id;
  if (channel_id == null) {
    channelId = channelId.getChannelId();
  }
  if (null == channelId) {
    return { currentChannelId: null, instanceId: null, instanceLocation: null, isCurrentlyInInstance: false, canLaunchInChannel: false };
  } else {
    if (null != channelId) {
      let obj = _getEmbeddedActivityLaunchability;
      let NO_CHANNEL = obj.getEmbeddedActivityLaunchabilityForChannel(channelId);
      let tmp3 = _require;
    } else {
      tmp3 = _require;
      NO_CHANNEL = _getEmbeddedActivityLaunchability.EmbeddedActivityLaunchability.NO_CHANNEL;
    }
    embeddedActivitiesForChannel = embeddedActivitiesForChannel.getEmbeddedActivitiesForChannel(channelId);
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
    const currentEmbeddedActivity = embeddedActivitiesForChannel.getCurrentEmbeddedActivity();
    obj = { currentChannelId: null, instanceId: null, instanceLocation: null, isCurrentlyInInstance: null, canLaunchInChannel: null };
    obj[0] = channelId;
    obj[1] = compositeInstanceId;
    obj[2] = _location;
    let tmp11 = null != compositeInstanceId;
    if (tmp11) {
      let compositeInstanceId1;
      if (currentEmbeddedActivity != null) {
        compositeInstanceId1 = currentEmbeddedActivity.compositeInstanceId;
      }
      tmp11 = compositeInstanceId1 === compositeInstanceId;
    }
    obj[3] = tmp11;
    obj[4] = NO_CHANNEL === tmp3(10864).EmbeddedActivityLaunchability.CAN_LAUNCH;
    return obj;
  }
};