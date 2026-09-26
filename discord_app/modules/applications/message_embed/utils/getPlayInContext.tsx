// discord_app/modules/applications/message_embed/utils/getPlayInContext.tsx
import getEmbeddedActivityLaunchability from "../../../activities/utils/getEmbeddedActivityLaunchability.tsx";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import SelectedChannelStore from "../../../../stores/SelectedChannelStore.tsx";

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/message_embed/utils/getPlayInContext.tsx");

export const usePlayInContext = function usePlayInContext(arg0) {
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
  const stateFromStores2 = require("initialize").useStateFromStores(items2, () =>
    currentEmbeddedActivity.getCurrentEmbeddedActivity(),
  );
  const tmpResult = require("initialize");
  const embeddedActivityLaunchability = require("getEmbeddedActivityLaunchability").useEmbeddedActivityLaunchability(
    stateFromStores,
  );
  const obj3 = {
    currentChannelId: stateFromStores,
    instanceId: compositeInstanceId,
    instanceLocation: _location,
    isCurrentlyInInstance: null,
    canLaunchInChannel: null,
  };
  let tmp10 = null != compositeInstanceId;
  if (tmp10) {
    let compositeInstanceId1;
    if (stateFromStores2 != null) {
      compositeInstanceId1 = stateFromStores2.compositeInstanceId;
    }
    tmp10 = compositeInstanceId1 === compositeInstanceId;
  }
  obj3.isCurrentlyInInstance = tmp10;
  obj3.canLaunchInChannel =
    embeddedActivityLaunchability ===
    require("getEmbeddedActivityLaunchability").EmbeddedActivityLaunchability.CAN_LAUNCH;
  return obj3;
};
export const getPlayInContext = function getPlayInContext(id, channel_id) {
  closure_0 = id;
  let channelId = channel_id;
  if (channel_id == null) {
    channelId = SelectedChannelStore.getChannelId();
  }
  if (null == channelId) {
    return {
      currentChannelId: null,
      instanceId: null,
      instanceLocation: null,
      isCurrentlyInInstance: false,
      canLaunchInChannel: false,
    };
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
    const obj3 = {
      currentChannelId: channelId,
      instanceId: compositeInstanceId,
      instanceLocation: _location,
      isCurrentlyInInstance: null,
      canLaunchInChannel: null,
    };
    let tmp11 = null != compositeInstanceId;
    if (tmp11) {
      let compositeInstanceId1;
      if (currentEmbeddedActivity != null) {
        compositeInstanceId1 = currentEmbeddedActivity.compositeInstanceId;
      }
      tmp11 = compositeInstanceId1 === compositeInstanceId;
    }
    obj3.isCurrentlyInInstance = tmp11;
    obj3.canLaunchInChannel = NO_CHANNEL === tmp3(8800).EmbeddedActivityLaunchability.CAN_LAUNCH;
    return obj3;
  }
};
