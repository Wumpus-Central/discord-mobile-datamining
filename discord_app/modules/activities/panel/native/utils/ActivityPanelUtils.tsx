// === Module 17160: ActivityPanelUtils ===

// Module 17160 (ActivityPanelUtils)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import ChannelTypes from "ChannelTypes" /* 1106 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4498 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 8705 */;
import isVoiceEmbeddedActivityDefault from "isVoiceEmbeddedActivity" /* 9014 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  let obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmbeddedActivitiesStore];
    const fn = function n() {
      const obj = embeddedActivityLocationUtils;
      const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(EmbeddedActivitiesStore.getConnectedActivityLocation());
      const tmp3 = EmbeddedActivitiesStore.getActivityPanelMode() === constants.PANEL && !isVoiceEmbeddedActivityDefault(embeddedActivityLocationChannelId);
      return tmp3;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
  let obj = get_initialized;
  const items = [EmbeddedActivitiesStore];
  return obj.useStateFromStores(items, () => {
    const obj = embeddedActivityLocationUtils;
    const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(EmbeddedActivitiesStore.getConnectedActivityLocation());
    const tmp3 = EmbeddedActivitiesStore.getActivityPanelMode() === constants.PANEL && !isVoiceEmbeddedActivityDefault(embeddedActivityLocationChannelId);
    return tmp3;
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  let voiceChannelId;
  let obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmbeddedActivitiesStore, ChannelStore, SelectedChannelStore];
    const fn = function l() {
      connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
      let flag = false;
      if (null != connectedActivityLocation) {
        const obj = embeddedActivityLocationUtils;
        const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
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
            tmp7 = true === isPrivateResult && voiceChannelId.getVoiceChannelId() !== embeddedActivityLocationChannelId;
            const tmp9 = true === isPrivateResult && voiceChannelId.getVoiceChannelId() !== embeddedActivityLocationChannelId;
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
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
  let voiceChannelId;
  let obj = get_initialized;
  const items = [EmbeddedActivitiesStore, ChannelStore, SelectedChannelStore];
  return obj.useStateFromStores(items, () => {
    connectedActivityLocation = connectedActivityLocation.getConnectedActivityLocation();
    let flag = false;
    if (null != connectedActivityLocation) {
      const obj = embeddedActivityLocationUtils;
      const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
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
          tmp7 = true === isPrivateResult && voiceChannelId.getVoiceChannelId() !== embeddedActivityLocationChannelId;
          const tmp9 = true === isPrivateResult && voiceChannelId.getVoiceChannelId() !== embeddedActivityLocationChannelId;
        }
        flag = tmp7;
      }
    }
    return flag;
  });
});
function isConnectedToActivityInText() {
  const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
  if (null == connectedActivityLocation) {
    return false;
  } else {
    const obj2 = embeddedActivityLocationUtils;
    const embeddedActivityLocationChannelId = obj2.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
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
        tmp4 = true === isPrivateResult && SelectedChannelStore.getVoiceChannelId() !== embeddedActivityLocationChannelId;
        const tmp6 = true === isPrivateResult && SelectedChannelStore.getVoiceChannelId() !== embeddedActivityLocationChannelId;
      }
      return tmp4;
    }
  }
}
const result = size.fileFinishedImporting("modules/activities/panel/native/utils/ActivityPanelUtils.tsx");

export const isActivityPanelFullscreen = function isActivityPanelFullscreen() {
  const obj = embeddedActivityLocationUtils;
  const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(EmbeddedActivitiesStore.getConnectedActivityLocation());
  const tmp3 = EmbeddedActivitiesStore.getActivityPanelMode() === ActivityPanelModes.PANEL && !isVoiceEmbeddedActivityDefault(embeddedActivityLocationChannelId);
  return tmp3;
};
export { isConnectedToActivityInText };
export const useIsActivityPanelFullscreen = tmp2;
export const useIsConnectedToActivityInText = tmp3;