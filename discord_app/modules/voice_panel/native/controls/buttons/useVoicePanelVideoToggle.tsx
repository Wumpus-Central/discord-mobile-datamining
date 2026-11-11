// discord_app/modules/voice_panel/native/controls/buttons/useVoicePanelVideoToggle.tsx
import util from "../../../../../intl/index.native.tsx";
import useAlertStore from "../../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import StreamPermissionUtils from "../../../../go_live/utils/StreamPermissionUtils.tsx";
import CallsUtils from "../../../../voice_calls/native/CallsUtils.tsx";
import openIgnoreThermalStateAlert from "../../../../activities/native/openIgnoreThermalStateAlert.tsx";
import VoicePanelVideoGuardErrorAlert from "../../alerts/VoicePanelVideoGuardErrorAlert.tsx";
import VoicePanelNoVideoPermissionsAlert from "../../alerts/VoicePanelNoVideoPermissionsAlert.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelCallLifecycleStore from "../../../../video_calls/native/ChannelCallLifecycleStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import MediaEngineStore from "../../../../../stores/MediaEngineStore.tsx";
import PermissionStore from "../../../../../stores/PermissionStore.tsx";

const require = globalThis.__r;
const VoicePanelVideoGuardErrorAlertDefault = VoicePanelVideoGuardErrorAlert;
const VoicePanelNoVideoPermissionsAlertDefault = VoicePanelNoVideoPermissionsAlert;

require = fn;
const Features = fn(6012).Features;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/useVoicePanelVideoToggle.tsx");

export default function useVoicePanelVideoToggle(arg0, location) {
  _require = arg0;
  items = [GuildStore, PermissionStore, ChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(closure_0);
    let tmp = null != channel;
    if (tmp) {
      let isPrivateResult = channel.isPrivate();
      if (!isPrivateResult) {
        const obj2 = StreamPermissionUtils;
        isPrivateResult = obj2.canStreamInChannel(channel, GuildStore, PermissionStore, false);
      }
      tmp = isPrivateResult;
    }
    return tmp;
  });
  let obj = require("initialize");
  const items1 = [MediaEngineStore];
  stateFromStores1 = require("initialize").useStateFromStores(items1, () => MediaEngineStore.isVideoEnabled());
  let obj2 = require("initialize");
  const items2 = [MediaEngineStore];
  const stateFromStores2 = require("initialize").useStateFromStores(items2, () =>
    MediaEngineStore.supports(constants.VIDEO),
  );
  const VideoGuardExperiment = require("VideoGuardExperiment").VideoGuardExperiment;
  const tmp4 = !VideoGuardExperiment.useConfig({ location }).videoEnabled;
  closure_4 = tmp4;
  const items3 = [arg0, stateFromStores1, stateFromStores, stateFromStores2, tmp4];
  let obj3 = require("initialize");
  let obj4 = { location };
  return {
    isVideoEnabled: stateFromStores1,
    videoSupported: stateFromStores2,
    videoBlocked: tmp4,
    onPress: stateFromStores2.useCallback(() => {
      if (closure_4) {
        const obj4 = { title: null };
        const obj3 = useAlertStore;
        const intl = util.intl;
        obj4.title = intl.string(util.t["8jSzSe"]);
        obj3.openAlert(
          VoicePanelVideoGuardErrorAlert.VOICE_PANEL_VIDEO_GUARD_ERROR_KEY,
          jsx(VoicePanelVideoGuardErrorAlertDefault, { title: null }),
        );
      } else if (stateFromStores2) {
        if (stateFromStores) {
          channel = ChannelStore.getChannel(channel);
          if (null != channel) {
            if (!stateFromStores1) {
              if (ChannelCallLifecycleStore.isReactingToThermalState()) {
                const result = openIgnoreThermalStateAlert.openIgnoreThermalStateAlert(() => {
                  if (null != channel) {
                    channel(stateFromStores1[15]).handleToggleVideo(tmp);
                    const obj = channel(stateFromStores1[15]);
                  }
                });
              }
            }
            if (null != channel) {
              CallsUtils.handleToggleVideo(channel);
            }
          }
        } else {
          useAlertStore.openAlert(
            VoicePanelNoVideoPermissionsAlert.VOICE_PANEL_NO_VIDEO_PERMS_KEY,
            jsx(VoicePanelNoVideoPermissionsAlertDefault, {}),
          );
        }
      }
    }, items3),
  };
}
