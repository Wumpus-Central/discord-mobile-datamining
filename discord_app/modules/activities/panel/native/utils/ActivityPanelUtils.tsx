// discord_app/modules/activities/panel/native/utils/ActivityPanelUtils.tsx
import get_initialized from "../../../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../../../_runtime/00576_react.js";
import ChannelTypes from "../../../../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import embeddedActivityLocationUtils from "../../../utils/embeddedActivityLocationUtils.tsx";
import ActivityPanelConstants from "../../ActivityPanelConstants.tsx";
import isVoiceEmbeddedActivityDefault from "../../../utils/isVoiceEmbeddedActivity.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../../../../stores/SelectedChannelStore.tsx";
import EmbeddedActivitiesStore from "../../../EmbeddedActivitiesStore.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const ActivityPanelModes = ActivityPanelConstants.ActivityPanelModes;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      let tmp5;
      let obj = react;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [EmbeddedActivitiesStore];
        const fn = function n() {
          const obj = embeddedActivityLocationUtils;
          const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(
            EmbeddedActivitiesStore.getConnectedActivityLocation(),
          );
          const tmp3 =
            EmbeddedActivitiesStore.getActivityPanelMode() === constants.PANEL &&
            !isVoiceEmbeddedActivityDefault(embeddedActivityLocationChannelId);
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
    }
  : () => {
      let obj = get_initialized;
      const items = [EmbeddedActivitiesStore];
      return obj.useStateFromStores(items, () => {
        const obj = embeddedActivityLocationUtils;
        const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(
          EmbeddedActivitiesStore.getConnectedActivityLocation(),
        );
        const tmp3 =
          EmbeddedActivitiesStore.getActivityPanelMode() === constants.PANEL &&
          !isVoiceEmbeddedActivityDefault(embeddedActivityLocationChannelId);
        return tmp3;
      });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
            const embeddedActivityLocationChannelId =
              obj.getEmbeddedActivityLocationChannelId(connectedActivityLocation);
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
                tmp7 =
                  true === isPrivateResult && voiceChannelId.getVoiceChannelId() !== embeddedActivityLocationChannelId;
                const tmp9 =
                  true === isPrivateResult && voiceChannelId.getVoiceChannelId() !== embeddedActivityLocationChannelId;
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
    }
  : () => {
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
              tmp7 =
                true === isPrivateResult && voiceChannelId.getVoiceChannelId() !== embeddedActivityLocationChannelId;
              const tmp9 =
                true === isPrivateResult && voiceChannelId.getVoiceChannelId() !== embeddedActivityLocationChannelId;
            }
            flag = tmp7;
          }
        }
        return flag;
      });
    };
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
        tmp4 =
          true === isPrivateResult && SelectedChannelStore.getVoiceChannelId() !== embeddedActivityLocationChannelId;
        const tmp6 =
          true === isPrivateResult && SelectedChannelStore.getVoiceChannelId() !== embeddedActivityLocationChannelId;
      }
      return tmp4;
    }
  }
}
const result = size.fileFinishedImporting("modules/activities/panel/native/utils/ActivityPanelUtils.tsx");

export const isActivityPanelFullscreen = function isActivityPanelFullscreen() {
  const obj = embeddedActivityLocationUtils;
  const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(
    EmbeddedActivitiesStore.getConnectedActivityLocation(),
  );
  const tmp3 =
    EmbeddedActivitiesStore.getActivityPanelMode() === ActivityPanelModes.PANEL &&
    !isVoiceEmbeddedActivityDefault(embeddedActivityLocationChannelId);
  return tmp3;
};
export { isConnectedToActivityInText };
export const useIsActivityPanelFullscreen = tmp2;
export const useIsConnectedToActivityInText = tmp3;
