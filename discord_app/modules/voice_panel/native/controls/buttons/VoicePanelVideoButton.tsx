// === Module 17339: VoicePanelVideoButton ===

// Module 17339 (VoicePanelVideoButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import CameraRive2 from "CameraRive" /* 4666 */;
import VideoSlashIcon2 from "VideoSlashIcon" /* 4823 */;
import Constants from "Constants" /* 4915 */;
import useAlertStore from "useAlertStore" /* 5709 */;
import StreamPermissionUtils from "StreamPermissionUtils" /* 7210 */;
import openIgnoreThermalStateAlert from "openIgnoreThermalStateAlert" /* 9084 */;
import CallsUtils from "CallsUtils" /* 9299 */;
import VideoIcon from "VideoIcon" /* 11234 */;
import VoicePanelVideoGuardErrorAlert from "VoicePanelVideoGuardErrorAlert" /* 13103 */;
import VoicePanelNoVideoPermissionsAlert from "VoicePanelNoVideoPermissionsAlert" /* 17340 */;
import react from "react" /* 19 */;
import ChannelCallLifecycleStore from "ChannelCallLifecycleStore" /* 9065 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const VoicePanelVideoGuardErrorAlertDefault = VoicePanelVideoGuardErrorAlert;
const VoicePanelNoVideoPermissionsAlertDefault = VoicePanelNoVideoPermissionsAlert;
let closure_0, handleToggleVideoResult, obj1, openAlert2Result, openAlertResult, tmp11, tmp14, tmp15, tmp18, tmp19, tmp21, tmp27, tmp3, tmp7, tmp8;

const View = react_native.View;
const Features = Constants.Features;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((props) => {
  let channelId;
  let first;
  let stateFromStores;
  let stateFromStores1;
  let stateFromStores2;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp16;
  let tmp17;
  let tmp20;
  let tmp = channelId;
  let obj = channelId(stateFromStores1[10]);
  const cResult = obj.c(30);
  props = props.props;
  const wrapperSpecs = props.wrapperSpecs;
  channelId = stateFromStores2.useContext(stateFromStores(stateFromStores1[11])).channelId;
  let obj2 = channelId(stateFromStores1[12]);
  const voicePanelButtonStyles = obj2.useVoicePanelButtonStyles(wrapperSpecs);
  const tmp4 = stateFromStores;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, PermissionStore, ChannelStore];
    cResult[0] = items;
    first = items;
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
    tmp10 = fn;
  } else {
    tmp10 = cResult[2];
  }
  const tmpResult = tmp(stateFromStores1[14]);
  stateFromStores = tmpResult.useStateFromStores(first, tmp10);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [MediaEngineStore];
    class O {
      constructor() {
        return MediaEngineStore.isVideoEnabled();
      }
    }
    cResult[3] = items1;
    cResult[4] = O;
    tmp13 = O;
    tmp12 = items1;
  } else {
    tmp12 = cResult[3];
    tmp13 = cResult[4];
  }
  const tmpResult3 = tmp(stateFromStores1[14]);
  stateFromStores1 = tmpResult3.useStateFromStores(tmp12, tmp13);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [MediaEngineStore];
    class P {
      constructor() {
        return MediaEngineStore.supports(constants.VIDEO);
      }
    }
    cResult[5] = items2;
    cResult[6] = P;
    tmp17 = P;
    tmp16 = items2;
  } else {
    tmp16 = cResult[5];
    tmp17 = cResult[6];
  }
  const tmpResult4 = tmp(stateFromStores1[14]);
  stateFromStores2 = tmpResult4.useStateFromStores(tmp16, tmp17);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { location: "VoicePanelVideoButton" };
    cResult[7] = obj3;
    class P {
      constructor() {
        return MediaEngineStore.supports(constants.VIDEO);
      }
    }
  } else {
    tmp20 = cResult[7];
  }
  const VideoGuardExperiment = tmp(tmp2[15]).VideoGuardExperiment;
  const videoEnabled = VideoGuardExperiment.useConfig(tmp20).videoEnabled;
  let closure_4 = tmp21;
  if (cResult[8] === channelId) {
    if (cResult[9] === stateFromStores) {
      if (cResult[10] === stateFromStores1) {
        if (cResult[11] === !videoEnabled) {
          let tmp22;
          let color;
          if (cResult[12] === stateFromStores2) {
            tmp22 = cResult[13];
          }
          if (stateFromStores2) {
            let color2;
            if (stateFromStores1) {
              color2 = voicePanelButtonStyles.iconFillSelected.color;
            } else {
              color2 = voicePanelButtonStyles.iconFill.color;
            }
            color = color2;
          } else {
            color = voicePanelButtonStyles.iconFillMuted.color;
          }
          if (cResult[14] === color) {
            let tmp23;
            if (cResult[15] === stateFromStores1) {
              tmp23 = cResult[16];
            }
            let tmp26 = !tmp21;
            if (videoEnabled) {
              tmp26 = !stateFromStores2;
            }
            class P {
              constructor() {
                return MediaEngineStore.supports(constants.VIDEO);
              }
            }
            const tmp28 = stateFromStores1 ? voicePanelButtonStyles.iconBgSelected : voicePanelButtonStyles.iconBg;
            if (cResult[19] === voicePanelButtonStyles.iconFill) {
              if (cResult[20] === !videoEnabled) {
                let tmp29;
                if (cResult[21] === tmp23) {
                  tmp29 = cResult[22];
                }
                if (cResult[23] === tmp22) {
                  if (cResult[24] === props) {
                    if (cResult[25] === tmp26) {
                      if (cResult[26] === tmp27) {
                        if (cResult[27] === tmp28) {
                          let tmp32;
                          if (cResult[28] === tmp29) {
                            tmp32 = cResult[29];
                          }
                          return tmp32;
                        }
                      }
                    }
                  }
                }
                class P {
                  constructor() {
                    return MediaEngineStore.supports(constants.VIDEO);
                  }
                }
                tmp34[0] = tmp22;
                tmp34[1] = tmp26;
                tmp34[2] = props;
                tmp34[3] = tmp27;
                tmp34[4] = tmp28;
                tmp34[5] = tmp29;
                const tmp35 = jsx(tmp4(stateFromStores1[23]), tmp34);
                cResult[23] = tmp22;
                cResult[24] = props;
                cResult[25] = tmp26;
                cResult[26] = tmp27;
                cResult[27] = tmp28;
                cResult[28] = tmp29;
                cResult[29] = tmp35;
                tmp32 = tmp35;
              }
            }
            if (!videoEnabled) {
              class P {
                constructor() {
                  return MediaEngineStore.supports(constants.VIDEO);
                }
              }
            }
            cResult[19] = voicePanelButtonStyles.iconFill;
            cResult[20] = !videoEnabled;
            cResult[21] = tmp23;
            cResult[22] = tmp23;
            tmp29 = tmp30;
          }
          class P {
            constructor() {
              return MediaEngineStore.supports(constants.VIDEO);
            }
          }
          const tmp25 = <closure_12 isVideoEnabled={stateFromStores1} color={color} />;
          cResult[14] = color;
          cResult[15] = stateFromStores1;
          cResult[16] = tmp25;
          tmp23 = tmp25;
        }
      }
    }
  }
  class T {
    constructor() {
      tmp = closure_4;
      if (tmp) {
        tmp18 = closure_0;
        tmp19 = closure_2;
        tmp20 = closure_0(closure_2[16]);
        openAlert2 = tmp20.openAlert;
        tmp21 = jsx;
        tmp22 = closure_1;
        VOICE_PANEL_VIDEO_GUARD_ERROR_KEY = closure_0(closure_2[17]).VOICE_PANEL_VIDEO_GUARD_ERROR_KEY;
        obj1 = { title: null };
        tmp23 = closure_1(closure_2[17]);
        intl = closure_0(closure_2[18]).intl;
        obj1.title = intl.string(closure_0(closure_2[18]).t["8jSzSe"]);
        openAlert2Result = openAlert2(VOICE_PANEL_VIDEO_GUARD_ERROR_KEY, jsx(tmp23, obj1));
      } else {
        tmp2 = closure_3;
        if (tmp2) {
          tmp3 = closure_1;
          if (tmp3) {
            tmp10 = closure_6;
            tmp11 = channelId;
            channel = closure_6.getChannel(channelId);
            closure_0 = channel;
            tmp13 = null;
            if (null != channel) {
              animateToggleVideo = function animateToggleVideo() {

              };
              tmp25 = closure_2;
              if (!tmp25) {
                tmp14 = closure_5;
                if (closure_5.isReactingToThermalState()) {
                  tmp15 = closure_0;
                  tmp16 = closure_2;
                  obj = closure_0(closure_2[21]);
                  result = obj.openIgnoreThermalStateAlert(() => {
                    if (typeof animateToggleVideo === "function") {
                      if (null != channel) {
                        const obj = channelId(stateFromStores1[20]);
                        obj.handleToggleVideo(tmp);
                      }
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  });
                }
              }
              if (null != channel) {
                tmp26 = closure_0;
                tmp27 = closure_2;
                obj3 = closure_0(closure_2[20]);
                handleToggleVideoResult = obj3.handleToggleVideo(channel);
              }
            }
          } else {
            tmp4 = closure_0;
            tmp5 = closure_2;
            tmp6 = closure_0(closure_2[16]);
            openAlert = tmp6.openAlert;
            tmp7 = jsx;
            tmp8 = closure_1;
            openAlertResult = openAlert(closure_0(closure_2[19]).VOICE_PANEL_NO_VIDEO_PERMS_KEY, jsx(closure_1(closure_2[19]), {}));
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
  tmp22 = T;
}) : ((arg0) => {
  let props;
  let stringResult;
  let wrapperSpecs;
  let stateFromStores;
  let stateFromStores1;
  let stateFromStores2;
  let color;
  let obj = stateFromStores2;
  ({ props, wrapperSpecs } = arg0);
  let tmp = stateFromStores;
  const channelId = stateFromStores2.useContext(stateFromStores(stateFromStores1[11])).channelId;
  let obj2 = channelId(stateFromStores1[12]);
  const voicePanelButtonStyles = obj2.useVoicePanelButtonStyles(wrapperSpecs);
  let obj3 = channelId(stateFromStores1[14]);
  const items = [GuildStore, PermissionStore, ChannelStore];
  stateFromStores = obj3.useStateFromStores(items, () => {
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
  const items1 = [MediaEngineStore];
  const obj4 = channelId(stateFromStores1[14]);
  stateFromStores1 = obj4.useStateFromStores(items1, () => MediaEngineStore.isVideoEnabled());
  const items2 = [MediaEngineStore];
  const obj5 = channelId(stateFromStores1[14]);
  stateFromStores2 = obj5.useStateFromStores(items2, () => MediaEngineStore.supports(constants.VIDEO));
  const VideoGuardExperiment = channelId(stateFromStores1[15]).VideoGuardExperiment;
  const videoEnabled = VideoGuardExperiment.useConfig({ location: "VoicePanelVideoButton" }).videoEnabled;
  let closure_4 = tmp8;
  const items3 = [channelId, stateFromStores1, stateFromStores, stateFromStores2, tmp8];
  const callback = stateFromStores2.useCallback(() => {
    if (closure_4) {
      const openAlert2 = useAlertStore.openAlert;
      useAlertStore;
      const VOICE_PANEL_VIDEO_GUARD_ERROR_KEY = VoicePanelVideoGuardErrorAlert.VOICE_PANEL_VIDEO_GUARD_ERROR_KEY;
      VoicePanelVideoGuardErrorAlertDefault;
      const intl = intl2.intl;
      openAlert2(VOICE_PANEL_VIDEO_GUARD_ERROR_KEY, <tmp23 title={intl.string(intl2.t["8jSzSe"])} />);
    } else if (stateFromStores2) {
      if (stateFromStores) {
        const channel = ChannelStore.getChannel(channelId);
        if (null != channel) {
          if (!stateFromStores1) {
            if (ChannelCallLifecycleStore.isReactingToThermalState()) {
              let obj = openIgnoreThermalStateAlert;
              const result = obj.openIgnoreThermalStateAlert(() => {
                if (null != channel) {
                  const obj = channelId(stateFromStores1[20]);
                  obj.handleToggleVideo(tmp);
                }
              });
            }
          }
          if (null != channel) {
            const obj3 = CallsUtils;
            obj3.handleToggleVideo(channel);
          }
        }
      } else {
        const openAlert = useAlertStore.openAlert;
        useAlertStore;
        openAlert(VoicePanelNoVideoPermissionsAlert.VOICE_PANEL_NO_VIDEO_PERMS_KEY, jsx(VoicePanelNoVideoPermissionsAlertDefault, {}));
      }
    }
  }, items3);
  if (stateFromStores2) {
    let color2;
    if (stateFromStores1) {
      color2 = voicePanelButtonStyles.iconFillSelected.color;
    } else {
      color2 = voicePanelButtonStyles.iconFill.color;
    }
    color = color2;
  } else {
    color = voicePanelButtonStyles.iconFillMuted.color;
  }
  const items4 = [color, stateFromStores1];
  let memo = obj.useMemo(() => <closure_12 isVideoEnabled={stateFromStores1} color={color} />, items4);
  let tmp13 = !tmp8;
  tmp(stateFromStores1[23]);
  if (videoEnabled) {
    tmp13 = !stateFromStores2;
  }
  let intl = tmp3(tmp2[18]).intl;
  const string = intl.string;
  const t = tmp3(tmp2[18]).t;
  if (stateFromStores1) {
    stringResult = string(t.EnX2Jl);
  } else {
    stringResult = string(t["v8K+8W"]);
  }
  if (!videoEnabled) {
    memo = jsx(tmp3(tmp2[22]).VideoDenyIcon, { color: voicePanelButtonStyles.iconFill.color });
  }
  return <tmpResult onPress={callback} disabled={tmp13} props={props} accessibilityLabel={stringResult} style={stateFromStores1 ? voicePanelButtonStyles.iconBgSelected : voicePanelButtonStyles.iconBg}>{memo}</tmpResult>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let color;
  let first;
  let isVideoEnabled;
  const obj = react2;
  const cResult = obj.c(11);
  ({ isVideoEnabled, color } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    size = { width: 24, height: 24, pointerEvents: "none" };
    cResult[0] = size;
    first = size;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === color) {
    let tmp5;
    if (cResult[2] === isVideoEnabled) {
      tmp5 = cResult[3];
    }
    let str = "CamOff";
    if (isVideoEnabled) {
      str = "CamOn";
    }
    if (cResult[4] === color) {
      let tmp6;
      if (cResult[5] === isVideoEnabled) {
        tmp6 = cResult[6];
      }
      if (cResult[7] === tmp5) {
        if (cResult[8] === str) {
          let tmp9;
          if (cResult[9] === tmp6) {
            tmp9 = cResult[10];
          }
          return tmp9;
        }
      }
      const tmp12 = <View style={first}>{null}</View>;
      cResult[7] = tmp5;
      cResult[8] = str;
      cResult[9] = tmp6;
      cResult[10] = tmp12;
      tmp9 = tmp12;
    }
    if (isVideoEnabled) {
      let VideoSlashIcon = VideoIcon.VideoIcon;
    } else {
      VideoSlashIcon = VideoSlashIcon2.VideoSlashIcon;
    }
    const tmp7Result = <VideoSlashIcon color={color} />;
    cResult[4] = color;
    cResult[5] = isVideoEnabled;
    cResult[6] = tmp7Result;
    tmp6 = tmp7Result;
  }
  const obj5 = { fill: color, on: isVideoEnabled };
  cResult[1] = color;
  cResult[2] = isVideoEnabled;
  cResult[3] = obj5;
  tmp5 = obj5;
}) : ((arg0) => {
  let color;
  let isVideoEnabled;
  ({ isVideoEnabled, color } = arg0);
  let str = "CamOff";
  const CameraRive = CameraRive2.CameraRive;
  if (isVideoEnabled) {
    str = "CamOn";
  }
  if (isVideoEnabled) {
    let VideoSlashIcon = VideoIcon.VideoIcon;
  } else {
    VideoSlashIcon = VideoSlashIcon2.VideoSlashIcon;
  }
  return <View style={{ width: 24, height: 24, pointerEvents: "none" }}>{null}</View>;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelVideoButton.tsx");

export default tmp2;