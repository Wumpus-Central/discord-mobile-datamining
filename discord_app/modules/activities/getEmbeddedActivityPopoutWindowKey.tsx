// === Module 16236: getEmbeddedActivityPopoutWindowKey ===

// Module 16236 (getEmbeddedActivityPopoutWindowKey)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4926 */;
import ApplicationStore from "ApplicationStore" /* 2043 */;
import PopoutWindowStore from "PopoutWindowStore" /* 7888 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4856 */;

require = fn;
const ActivityPanelModes = fn(5646).ActivityPanelModes;
const PopoutWindowKeys = fn(1084).PopoutWindowKeys;
const ReactCompilerGating = fn(558);
function getEmbeddedActivityPopoutWindowKey(arg0) {
  ({ application, channelId } = arg0);
}
function getEmbeddedActivityPopoutWindowKeyForChannel(channelId) {
  ({ EmbeddedActivitiesStore, ApplicationStore } = channelId);
  const selfEmbeddedActivityForChannel = EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(channelId.channelId);
  let applicationId;
  if (selfEmbeddedActivityForChannel != null) {
    applicationId = selfEmbeddedActivityForChannel.applicationId;
  }
  const application = ApplicationStore.getApplication(applicationId);
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/getEmbeddedActivityPopoutWindowKey.tsx");

export default getEmbeddedActivityPopoutWindowKey;
export { getEmbeddedActivityPopoutWindowKeyForChannel };
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
export const usePopoutWindowForActivity = ReactCompilerGating.isReactCompilerEnabled() ? (function usePopoutWindowForActivity(channelId) {
  const cResult = channelId(576).c(3);
  channelId = channelId.channelId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PopoutWindowStore, EmbeddedActivitiesStore, ApplicationStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function p() {
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
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const obj = channelId(576);
  return channelId(504).useStateFromStores(first, tmp8);
}) : (function usePopoutWindowForActivity(channelId) {
  channelId = channelId.channelId;
  const items = [PopoutWindowStore, EmbeddedActivitiesStore, ApplicationStore];
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
});