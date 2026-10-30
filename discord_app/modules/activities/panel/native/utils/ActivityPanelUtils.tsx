// === Module 19070: ActivityPanelUtils ===

// Module 19070 (ActivityPanelUtils)
import initialize from "initialize" /* 504 */;
import ChannelTypes from "ChannelTypes" /* 1094 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4930 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 5673 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4912 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4857 */;

require = fn;
const ActivityPanelModes = fn(5652).ActivityPanelModes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/utils/ActivityPanelUtils.tsx");

export function isActivityPanelFullscreen() {
  const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(EmbeddedActivitiesStore.getConnectedActivityLocation());
  let tmp3 = EmbeddedActivitiesStore.getActivityPanelMode() === ActivityPanelModes.PANEL;
  if (tmp3) {
    tmp3 = !isVoiceEmbeddedActivityDefault(embeddedActivityLocationChannelId);
  }
  return tmp3;
}
export function isConnectedToActivityInText() {
  const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
  if (null == connectedActivityLocation) {
    return false;
  } else {
    const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
    if (null == embeddedActivityLocationChannelId) {
      return false;
    } else {
      const channel = ChannelStore.getChannel(embeddedActivityLocationChannelId);
      let type;
      if (channel != null) {
        type = channel.type;
      }
      let tmp4 = type === ChannelTypes.ChannelTypes.GUILD_TEXT;
      if (!tmp4) {
        let isPrivateResult;
        if (channel != null) {
          isPrivateResult = channel.isPrivate();
        }
        let tmp6 = true === isPrivateResult;
        if (tmp6) {
          tmp6 = SelectedChannelStore.getVoiceChannelId() !== embeddedActivityLocationChannelId;
        }
        tmp4 = tmp6;
      }
      return tmp4;
    }
  }
}
export function useIsActivityPanelFullscreen() {
  const items = [EmbeddedActivitiesStore];
  return initialize.useStateFromStores(items, () => {
    const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(EmbeddedActivitiesStore.getConnectedActivityLocation());
    let tmp3 = EmbeddedActivitiesStore.getActivityPanelMode() === constants.PANEL;
    if (tmp3) {
      tmp3 = !isVoiceEmbeddedActivityDefault(embeddedActivityLocationChannelId);
    }
    return tmp3;
  });
}
export function useIsConnectedToActivityInText() {
  const items = [EmbeddedActivitiesStore, ChannelStore, SelectedChannelStore];
  return initialize.useStateFromStores(items, () => {
    connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
    let flag = false;
    if (null != connectedActivityLocation) {
      const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
      flag = false;
      if (null != embeddedActivityLocationChannelId) {
        channel = channel.getChannel(embeddedActivityLocationChannelId);
        let type;
        if (channel != null) {
          type = channel.type;
        }
        let tmp7 = type === ChannelTypes.ChannelTypes.GUILD_TEXT;
        if (!tmp7) {
          let isPrivateResult;
          if (channel != null) {
            isPrivateResult = channel.isPrivate();
          }
          let tmp9 = true === isPrivateResult;
          if (tmp9) {
            tmp9 = voiceChannelId.getVoiceChannelId() !== embeddedActivityLocationChannelId;
          }
          tmp7 = tmp9;
        }
        flag = tmp7;
      }
    }
    return flag;
  });
}