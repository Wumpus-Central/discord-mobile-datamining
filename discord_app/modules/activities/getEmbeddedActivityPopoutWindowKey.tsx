// === Module 15579: getEmbeddedActivityPopoutWindowKey ===

// Module 15579 (getEmbeddedActivityPopoutWindowKey)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4715 */;
import ApplicationStore from "ApplicationStore" /* 2163 */;
import PopoutWindowStore from "PopoutWindowStore" /* 6338 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4642 */;

require = fn;
const ActivityPanelModes = fn(5420).ActivityPanelModes;
const PopoutWindowKeys = fn(1071).PopoutWindowKeys;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/getEmbeddedActivityPopoutWindowKey.tsx");

export default function getEmbeddedActivityPopoutWindowKey(arg0) {
  ({ application, channelId } = arg0);
};
export function getEmbeddedActivityPopoutWindowKeyForChannel(channelId) {
  ({ EmbeddedActivitiesStore, ApplicationStore } = channelId);
  const selfEmbeddedActivityForChannel = EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(channelId.channelId);
  let applicationId;
  if (selfEmbeddedActivityForChannel != null) {
    applicationId = selfEmbeddedActivityForChannel.applicationId;
  }
  const application = ApplicationStore.getApplication(applicationId);
}
export function getEmbeddedActivityPopoutWindowKeyForApplication(applicationId) {
  applicationId = applicationId.applicationId;
  const currentEmbeddedActivity = EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  if (null != currentEmbeddedActivity) {
    if (currentEmbeddedActivity.applicationId === applicationId) {
      if (null != ApplicationStore.getApplication(applicationId)) {
        const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(currentEmbeddedActivity.location);
      }
    }
  }
}
export function usePopoutWindowForActivity(channelId) {
  channelId = channelId.channelId;
  items = [PopoutWindowStore, EmbeddedActivitiesStore, ApplicationStore];
  return channelId(504).useStateFromStores(items, () => {
    let connectedActivityChannelId = channelId;
    if (channelId == null) {
      connectedActivityChannelId = EmbeddedActivitiesStore.getConnectedActivityChannelId();
    }
    const selfEmbeddedActivityForChannel = EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(connectedActivityChannelId);
    let applicationId;
    if (selfEmbeddedActivityForChannel != null) {
      applicationId = selfEmbeddedActivityForChannel.applicationId;
    }
    const application = ApplicationStore.getApplication(applicationId);
  });
}