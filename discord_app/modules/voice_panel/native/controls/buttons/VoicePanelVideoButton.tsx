// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelVideoButton.tsx
import c from "../../../../../../_runtime/00576_c.js";
import util from "../../../../../intl/index.native.tsx";
import CameraRive from "../../../../../../discord_common/js/packages/design/components/Rive/native/generated/CameraRive.tsx";
import useAlertStore from "../../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import StreamPermissionUtils from "../../../../go_live/utils/StreamPermissionUtils.tsx";
import CallsUtils from "../../../../voice_calls/native/CallsUtils.tsx";
import VideoIcon from "../../../../../design/components/Icon/native/redesign/generated/VideoIcon.tsx";
import openIgnoreThermalStateAlert from "../../../../activities/native/openIgnoreThermalStateAlert.tsx";
import VoicePanelVideoGuardErrorAlert from "../../alerts/VoicePanelVideoGuardErrorAlert.tsx";
import VideoSlashIcon2 from "../../../../../design/components/Icon/native/redesign/generated/VideoSlashIcon.tsx";
import VoicePanelNoVideoPermissionsAlert from "../../alerts/VoicePanelNoVideoPermissionsAlert.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelCallLifecycleStore from "../../../../video_calls/native/ChannelCallLifecycleStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import MediaEngineStore from "../../../../../stores/MediaEngineStore.tsx";
import PermissionStore from "../../../../../stores/PermissionStore.tsx";

require = fn;
const View = fn(17).View;
const Features = fn(5117).Features;
const jsx = fn(21).jsx;
fn(558);
const ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function VideoButtonRive(arg0) {
      const cResult = c.c(11);
      ({ isVideoEnabled, color } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const size = { width: 24, height: 24, pointerEvents: "none" };
        cResult[0] = size;
        let first = size;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === color) {
        if (cResult[2] === isVideoEnabled) {
          let tmp5 = cResult[3];
        }
        let str = "CamOff";
        if (isVideoEnabled) {
          str = "CamOn";
        }
        if (cResult[4] === color) {
          if (cResult[5] === isVideoEnabled) {
            if (cResult[7] === tmp5) {
              if (cResult[8] === str) {
                if (cResult[9] === tmp6) {
                  let tmp10 = cResult[10];
                }
                return tmp10;
              }
            }
            const obj2 = { style: first, children: null };
            const obj3 = { dataBinding: tmp5, defaultViewModelInstance: str, fallback: cResult[6] };
            obj2.children = jsx(CameraRive.CameraRive, {
              dataBinding: tmp5,
              defaultViewModelInstance: str,
              fallback: cResult[6],
            });
            const tmp13 = <View style={first}>{null}</View>;
            cResult[7] = tmp5;
            cResult[8] = str;
            cResult[9] = cResult[6];
            cResult[10] = tmp13;
            tmp10 = tmp13;
          }
        }
        if (isVideoEnabled) {
          let VideoSlashIcon = VideoIcon.VideoIcon;
        } else {
          VideoSlashIcon = VideoSlashIcon2.VideoSlashIcon;
        }
        const obj4 = { color };
        const tmp7Result = <VideoSlashIcon color={color} />;
        cResult[4] = color;
        cResult[5] = isVideoEnabled;
        cResult[6] = tmp7Result;
      }
      const obj5 = { fill: color, on: isVideoEnabled };
      cResult[1] = color;
      cResult[2] = isVideoEnabled;
      cResult[3] = obj5;
      tmp5 = obj5;
    }
  : function VideoButtonRive(arg0) {
      ({ isVideoEnabled, color } = arg0);
      const obj = { style: { width: 24, height: 24, pointerEvents: "none" }, children: null };
      const obj2 = { dataBinding: { fill: color, on: isVideoEnabled }, defaultViewModelInstance: null, fallback: null };
      let str = "CamOff";
      if (isVideoEnabled) {
        str = "CamOn";
      }
      obj2.defaultViewModelInstance = str;
      if (isVideoEnabled) {
        let VideoSlashIcon = VideoIcon.VideoIcon;
      } else {
        VideoSlashIcon = VideoSlashIcon2.VideoSlashIcon;
      }
      obj2.fallback = <VideoSlashIcon color={color} />;
      obj.children = jsx(CameraRive.CameraRive, {
        dataBinding: { fill: color, on: isVideoEnabled },
        defaultViewModelInstance: null,
        fallback: null,
      });
      return <View style={{ width: 24, height: 24, pointerEvents: "none" }}>{null}</View>;
    };
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelVideoButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function VideoButton(wrapperSpecs) {
      const cResult = channelId(stateFromStores1[10]).c(30);
      channelId = stateFromStores2.useContext(stateFromStores(stateFromStores1[11])).channelId;
      let obj = channelId(stateFromStores1[10]);
      const voicePanelButtonStyles = channelId(stateFromStores1[12]).useVoicePanelButtonStyles(
        wrapperSpecs.wrapperSpecs,
      );
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore, PermissionStore, ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function f() {
          const channel = ChannelStore.getChannel(channelId);
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
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        let tmp9 = fn;
      } else {
        tmp9 = cResult[2];
      }
      let obj2 = channelId(stateFromStores1[12]);
      stateFromStores = channelId(stateFromStores1[14]).useStateFromStores(first, tmp9);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [MediaEngineStore];
        class O {
          constructor() {
            return closure_1_8.isVideoEnabled();
          }
        }
        cResult[3] = items1;
        cResult[4] = O;
        let tmp12 = O;
        let tmp11 = items1;
      } else {
        tmp11 = cResult[3];
        tmp12 = cResult[4];
      }
      const tmpResult = channelId(stateFromStores1[14]);
      stateFromStores1 = channelId(stateFromStores1[14]).useStateFromStores(tmp11, tmp12);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [MediaEngineStore];
        class O {
          constructor() {
            return closure_1_8.isVideoEnabled();
          }
        }
        cResult[5] = items2;
        cResult[6] = tmp18;
        let tmp16 = tmp18;
        let tmp15 = items2;
      } else {
        tmp15 = cResult[5];
        tmp16 = cResult[6];
      }
      const tmpResult3 = channelId(stateFromStores1[14]);
      stateFromStores2 = channelId(stateFromStores1[14]).useStateFromStores(tmp15, tmp16);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        cResult[7] = { location: "VoicePanelVideoButton" };
        class O {
          constructor() {
            return closure_1_8.isVideoEnabled();
          }
        }
        let obj3 = { location: "VoicePanelVideoButton" };
      } else {
        let tmp20 = cResult[7];
      }
      const VideoGuardExperiment = tmp(tmp2[15]).VideoGuardExperiment;
      const videoEnabled = VideoGuardExperiment.useConfig(tmp20).videoEnabled;
      closure_4 = tmp21;
      if (cResult[8] === channelId) {
        if (cResult[9] === stateFromStores) {
          if (cResult[10] === stateFromStores1) {
            if (cResult[11] === tmp21) {
              if (stateFromStores2) {
                if (stateFromStores1) {
                  let color2 = voicePanelButtonStyles.iconFillSelected.color;
                } else {
                  color2 = voicePanelButtonStyles.iconFill.color;
                }
              } else {
                const color = voicePanelButtonStyles.iconFillMuted.color;
                if (cResult[14] === color) {
                  class O {
                    constructor() {
                      return closure_1_8.isVideoEnabled();
                    }
                  }
                }
                class O {
                  constructor() {
                    return closure_1_8.isVideoEnabled();
                  }
                }
                let obj4 = { isVideoEnabled: stateFromStores1, color };
                const tmp26 = <closure_12 isVideoEnabled={stateFromStores1} color={color} />;
                cResult[14] = color;
                cResult[15] = stateFromStores1;
                cResult[16] = tmp26;
              }
            }
          }
        }
      }
      class T {
        constructor() {
          if (closure_4) {
            tmp16 = closure_0;
            tmp17 = closure_2;
            obj3 = closure_0(closure_2[16]);
            tmp18 = jsx;
            tmp19 = closure_1;
            obj1 = { title: null };
            tmp20 = closure_1(closure_2[17]);
            intl = closure_0(closure_2[18]).intl;
            obj1.title = intl.string(closure_0(closure_2[18]).t["8jSzSe"]);
            openAlertResult = obj3.openAlert(
              closure_0(closure_2[17]).VOICE_PANEL_VIDEO_GUARD_ERROR_KEY,
              jsx(tmp20, obj1),
            );
          } else {
            tmp = closure_3;
            if (closure_3) {
              tmp2 = closure_1;
              if (closure_1) {
                tmp8 = closure_6;
                tmp9 = channelId;
                channel = closure_6.getChannel(channelId);
                closure_0 = channel;
                tmp11 = null;
                if (null != channel) {
                  animateToggleVideo = function animateToggleVideo() {};
                  tmp22 = closure_2;
                  if (!closure_2) {
                    tmp12 = closure_5;
                    if (closure_5.isReactingToThermalState()) {
                      tmp13 = closure_0;
                      tmp14 = closure_2;
                      obj2 = closure_0(closure_2[21]);
                      result = obj2.openIgnoreThermalStateAlert(() => {
                        if (typeof animateToggleVideo === "function") {
                          if (null != channel) {
                            channelId(stateFromStores1[20]).handleToggleVideo(tmp);
                            const obj = channelId(stateFromStores1[20]);
                          }
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      });
                    }
                  }
                  if (null != channel) {
                    tmp23 = closure_0;
                    tmp24 = closure_2;
                    obj5 = closure_0(closure_2[20]);
                    handleToggleVideoResult = obj5.handleToggleVideo(channel);
                  }
                }
              } else {
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj = closure_0(closure_2[16]);
                tmp5 = jsx;
                tmp6 = closure_1;
                openAlertResult1 = obj.openAlert(
                  closure_0(closure_2[19]).VOICE_PANEL_NO_VIDEO_PERMS_KEY,
                  jsx(closure_1(closure_2[19]), {}),
                );
              }
            }
          }
          return;
        }
      }
      cResult[8] = channelId;
      cResult[9] = stateFromStores;
      cResult[10] = stateFromStores1;
      cResult[11] = !videoEnabled;
      cResult[12] = stateFromStores2;
      cResult[13] = T;
      const tmpResult4 = channelId(stateFromStores1[14]);
    }
  : function VideoButton(arg0) {
      let stateFromStores;
      let stateFromStores1;
      let stateFromStores2;
      let color;
      ({ props, wrapperSpecs } = arg0);
      const channelId = stateFromStores2.useContext(stateFromStores(stateFromStores1[11])).channelId;
      const voicePanelButtonStyles = channelId(stateFromStores1[12]).useVoicePanelButtonStyles(wrapperSpecs);
      let obj = stateFromStores2;
      let obj2 = channelId(stateFromStores1[12]);
      let tmp = stateFromStores;
      const items = [GuildStore, PermissionStore, ChannelStore];
      stateFromStores = channelId(stateFromStores1[14]).useStateFromStores(items, () => {
        const channel = ChannelStore.getChannel(channelId);
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
      let obj3 = channelId(stateFromStores1[14]);
      const items1 = [MediaEngineStore];
      stateFromStores1 = channelId(stateFromStores1[14]).useStateFromStores(items1, () =>
        MediaEngineStore.isVideoEnabled(),
      );
      let obj4 = channelId(stateFromStores1[14]);
      const items2 = [MediaEngineStore];
      stateFromStores2 = channelId(stateFromStores1[14]).useStateFromStores(items2, () =>
        MediaEngineStore.supports(constants.VIDEO),
      );
      const VideoGuardExperiment = channelId(stateFromStores1[15]).VideoGuardExperiment;
      const videoEnabled = VideoGuardExperiment.useConfig({ location: "VoicePanelVideoButton" }).videoEnabled;
      closure_4 = tmp8;
      const items3 = [channelId, stateFromStores1, stateFromStores, stateFromStores2, !videoEnabled];
      if (stateFromStores2) {
        if (stateFromStores1) {
          let color2 = voicePanelButtonStyles.iconFillSelected.color;
        } else {
          color2 = voicePanelButtonStyles.iconFill.color;
        }
      } else {
        color = voicePanelButtonStyles.iconFillMuted.color;
        const items4 = [color, stateFromStores1];
        let memo = obj.useMemo(() => <closure_12 isVideoEnabled={stateFromStores1} color={color} />, items4);
        const element = {
          onPress: tmp9,
          disabled: null,
          props: null,
          accessibilityLabel: null,
          style: null,
          children: null,
        };
        let tmp14 = !tmp8;
        if (videoEnabled) {
          tmp14 = !stateFromStores2;
        }
        element.disabled = tmp14;
        element.props = props;
        let intl = tmp3(tmp2[18]).intl;
        const string = intl.string;
        const t = tmp3(tmp2[18]).t;
        if (stateFromStores1) {
          let stringResult = string(t.EnX2Jl);
        } else {
          stringResult = string(t["v8K+8W"]);
        }
        element.accessibilityLabel = stringResult;
        element.style = stateFromStores1 ? voicePanelButtonStyles.iconBgSelected : voicePanelButtonStyles.iconBg;
        if (!videoEnabled) {
          const obj6 = { color: voicePanelButtonStyles.iconFill.color };
          memo = jsx(tmp3(tmp2[22]).VideoDenyIcon, { color: voicePanelButtonStyles.iconFill.color });
        }
        element.children = memo;
        return jsx(tmp(tmp2[23]), {
          onPress: tmp9,
          disabled: null,
          props: null,
          accessibilityLabel: null,
          style: null,
          children: null,
        });
      }
      let obj5 = channelId(stateFromStores1[14]);
    };
