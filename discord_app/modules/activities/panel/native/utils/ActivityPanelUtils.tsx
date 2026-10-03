// === Module 17136: ActivityPanelUtils ===

// Module 17136 (ActivityPanelUtils)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import ChannelTypes from "ChannelTypes" /* 1106 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4498 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 9014 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;

require = fn;
const ActivityPanelModes = fn(8705).ActivityPanelModes;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmbeddedActivitiesStore];
    const fn = function n() {
      const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(EmbeddedActivitiesStore.getConnectedActivityLocation());
      let tmp3 = EmbeddedActivitiesStore.getActivityPanelMode() === constants.PANEL;
      if (tmp3) {
        tmp3 = !isVoiceEmbeddedActivityDefault(embeddedActivityLocationChannelId);
      }
      return tmp3;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [EmbeddedActivitiesStore];
  return initialize.useStateFromStores(items, () => {
    const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(EmbeddedActivitiesStore.getConnectedActivityLocation());
    let tmp3 = EmbeddedActivitiesStore.getActivityPanelMode() === constants.PANEL;
    if (tmp3) {
      tmp3 = !isVoiceEmbeddedActivityDefault(embeddedActivityLocationChannelId);
    }
    return tmp3;
  });
});
function isConnectedToActivityInText() {
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/panel/native/utils/ActivityPanelUtils.tsx");

export const isActivityPanelFullscreen = function isActivityPanelFullscreen() {
  const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(EmbeddedActivitiesStore.getConnectedActivityLocation());
  let tmp3 = EmbeddedActivitiesStore.getActivityPanelMode() === ActivityPanelModes.PANEL;
  if (tmp3) {
    tmp3 = !isVoiceEmbeddedActivityDefault(embeddedActivityLocationChannelId);
  }
  return tmp3;
};
export { isConnectedToActivityInText };
export const useIsActivityPanelFullscreen = tmp2;
export const useIsConnectedToActivityInText = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmbeddedActivitiesStore, ChannelStore, SelectedChannelStore];
    const fn = function l() {
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
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
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
});