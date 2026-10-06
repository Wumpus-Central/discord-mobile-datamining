// === Module 12885: UserProfileVoiceSettings ===

// Module 12885 (UserProfileVoiceSettings)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import Constants2 from "Constants" /* 1096 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 8079 */;
import SecureFramesPlatformUtilsDefault from "SecureFramesPlatformUtils" /* 9383 */;
import UserProfileAlertUtils from "UserProfileAlertUtils" /* 12301 */;
import react from "react" /* 19 */;
import SoundboardStore from "SoundboardStore" /* 5687 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4919 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let setLocalVolumeResult;

let c9;
let closure_12;
let metroImportAll;
let unpackModuleId;
const View = react_native.View;
({ AnalyticEvents: metroImportAll, VideoToggleState: c9 } = Constants);
const Permissions = Constants2.Permissions;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = createStyles.createStyles({ card: { paddingBottom: 0 }, cardTitle: { marginBottom: 0 }, volumeSlider: { paddingVertical: 20 }, disableVideoSublabel: { flexDirection: "row", alignItems: "center", gap: 4 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let first;
  let isLocalMute;
  let isLocalVideoDisabled;
  let localVolume;
  let stateFromStores1;
  let tmp14;
  let tmp9;
  let trackUserProfileAction;
  let obj = user(trackUserProfileAction[11]);
  const cResult = obj.c(83);
  user = user.user;
  const channel = user.channel;
  const tmp4 = closure_13();
  let obj2 = user(trackUserProfileAction[12]);
  trackUserProfileAction = obj2.useUserProfileAnalyticsContext().trackUserProfileAction;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [stateFromStores1];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== user.id) {
    class L {
      constructor() {
        obj = { localVolume: closure_5.getLocalVolume(user.id), isLocalMute: closure_5.isLocalMute(user.id), isLocalVideoDisabled: closure_5.isLocalVideoDisabled(user.id), isLocalVideoAutoDisabled: closure_5.isLocalVideoAutoDisabled(user.id), supportsDisableLocalVideo: closure_5.supportsDisableLocalVideo() };
        return obj;
      }
    }
    cResult[1] = user.id;
    cResult[2] = L;
  } else {
    class L {
      constructor() {
        obj = { localVolume: closure_5.getLocalVolume(user.id), isLocalMute: closure_5.isLocalMute(user.id), isLocalVideoDisabled: closure_5.isLocalVideoDisabled(user.id), isLocalVideoAutoDisabled: closure_5.isLocalVideoAutoDisabled(user.id), supportsDisableLocalVideo: closure_5.supportsDisableLocalVideo() };
        return obj;
      }
    }
  }
  const tmpResult = user(trackUserProfileAction[13]);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, L);
  ({ localVolume, isLocalMute, isLocalVideoDisabled } = stateFromStoresObject);
  const isLocalVideoAutoDisabled = stateFromStoresObject.isLocalVideoAutoDisabled;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        obj = { localVolume: closure_5.getLocalVolume(user.id), isLocalMute: closure_5.isLocalMute(user.id), isLocalVideoDisabled: closure_5.isLocalVideoDisabled(user.id), isLocalVideoAutoDisabled: closure_5.isLocalVideoAutoDisabled(user.id), supportsDisableLocalVideo: closure_5.supportsDisableLocalVideo() };
        return obj;
      }
    }
    const items1 = [PermissionStore];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    class L {
      constructor() {
        obj = { localVolume: closure_5.getLocalVolume(user.id), isLocalMute: closure_5.isLocalMute(user.id), isLocalVideoDisabled: closure_5.isLocalVideoDisabled(user.id), isLocalVideoAutoDisabled: closure_5.isLocalVideoAutoDisabled(user.id), supportsDisableLocalVideo: closure_5.supportsDisableLocalVideo() };
        return obj;
      }
    }
  }
  if (cResult[4] !== channel) {
    class D {
      constructor() {
        tmp = channel;
        isPrivateResult = channel.isPrivate();
        if (!isPrivateResult) {
          tmp3 = closure_6;
          tmp4 = Permissions;
          isPrivateResult = closure_6.can(Permissions.SPEAK, tmp);
        }
        return isPrivateResult;
      }
    }
    cResult[4] = channel;
    cResult[5] = D;
  } else {
    class D {
      constructor() {
        tmp = channel;
        isPrivateResult = channel.isPrivate();
        if (!isPrivateResult) {
          tmp3 = closure_6;
          tmp4 = Permissions;
          isPrivateResult = closure_6.can(Permissions.SPEAK, tmp);
        }
        return isPrivateResult;
      }
    }
  }
  const tmpResult4 = user(trackUserProfileAction[13]);
  const stateFromStores = tmpResult4.useStateFromStores(tmp9, D);
  channel(trackUserProfileAction[14])(user.id, channel.id);
  const tmp12 = channel;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class D {
      constructor() {
        tmp = channel;
        isPrivateResult = channel.isPrivate();
        if (!isPrivateResult) {
          tmp3 = closure_6;
          tmp4 = Permissions;
          isPrivateResult = closure_6.can(Permissions.SPEAK, tmp);
        }
        return isPrivateResult;
      }
    }
    const items2 = [isLocalVideoAutoDisabled];
    cResult[6] = items2;
    tmp14 = items2;
  } else {
    class D {
      constructor() {
        tmp = channel;
        isPrivateResult = channel.isPrivate();
        if (!isPrivateResult) {
          tmp3 = closure_6;
          tmp4 = Permissions;
          isPrivateResult = closure_6.can(Permissions.SPEAK, tmp);
        }
        return isPrivateResult;
      }
    }
  }
  if (cResult[7] !== user.id) {
    class O {
      constructor() {
        return closure_4.isLocalSoundboardMuted(user.id);
      }
    }
    cResult[7] = user.id;
    cResult[8] = O;
  } else {
    class O {
      constructor() {
        return closure_4.isLocalSoundboardMuted(user.id);
      }
    }
  }
  const tmpResult5 = user(trackUserProfileAction[13]);
  stateFromStores1 = tmpResult5.useStateFromStores(tmp14, O);
  if (cResult[9] !== channel.id) {
    class O {
      constructor() {
        return closure_4.isLocalSoundboardMuted(user.id);
      }
    }
    tmp18[0] = channel.id;
    cResult[9] = channel.id;
    cResult[10] = tmp18;
  } else {
    class O {
      constructor() {
        return closure_4.isLocalSoundboardMuted(user.id);
      }
    }
  }
  const tmpResult6 = user(trackUserProfileAction[15]);
  const isSecureFramesUIEnabled = tmpResult6.useIsSecureFramesUIEnabled(tmp18);
  if (cResult[11] === trackUserProfileAction) {
    class O {
      constructor() {
        return closure_4.isLocalSoundboardMuted(user.id);
      }
    }
    if (cResult[14] === localVolume) {
      class O {
        constructor() {
          return closure_4.isLocalSoundboardMuted(user.id);
        }
      }
    }
    const obj3 = { style: tmp4.volumeSlider, value: localVolume, onValueChange: G };
    cResult[14] = localVolume;
    cResult[15] = tmp4.volumeSlider;
    cResult[16] = G;
    cResult[17] = closure_11(tmp12(trackUserProfileAction[17]), obj3, "set-volume");
    const tmp23 = closure_11(tmp12(trackUserProfileAction[17]), obj3, "set-volume");
  }
  class G {
    constructor(arg0) {
      tmp = trackUserProfileAction({ action: "SET_VOLUME" });
      obj = closure_1(closure_2[16]);
      setLocalVolumeResult = obj.setLocalVolume(user.id, user);
      return;
    }
  }
  cResult[11] = trackUserProfileAction;
  cResult[12] = user.id;
  cResult[13] = G;
}) : ((user) => {
  let MicrophoneIcon;
  let SoundboardIcon;
  let VideoIcon;
  let intl4;
  let intl5;
  let intl6;
  let isLocalMute;
  let isLocalVideoDisabled;
  let items4;
  let items5;
  let localVolume;
  let obj15;
  let string2Result;
  let supportsDisableLocalVideo;
  user = user.user;
  const channel = user.channel;
  let trackUserProfileAction;
  isLocalVideoDisabled = undefined;
  let stateFromStores1;
  const style = user.style;
  const tmp = closure_13();
  let obj = user(trackUserProfileAction[12]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj2 = user(trackUserProfileAction[13]);
  const items = [stateFromStores1];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { localVolume: MediaEngineStore.getLocalVolume(user.id), isLocalMute: MediaEngineStore.isLocalMute(user.id), isLocalVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id), isLocalVideoAutoDisabled: MediaEngineStore.isLocalVideoAutoDisabled(user.id), supportsDisableLocalVideo: MediaEngineStore.supportsDisableLocalVideo() };
    return obj;
  });
  ({ isLocalMute, isLocalVideoDisabled } = stateFromStoresObject);
  let isLocalVideoAutoDisabled = stateFromStoresObject.isLocalVideoAutoDisabled;
  ({ localVolume, supportsDisableLocalVideo } = stateFromStoresObject);
  const items1 = [PermissionStore];
  const obj3 = user(trackUserProfileAction[13]);
  const stateFromStores = obj3.useStateFromStores(items1, () => {
    const isPrivateResult = channel.isPrivate() || PermissionStore.can(Permissions.SPEAK, channel);
    return isPrivateResult;
  });
  const tmp7 = channel(trackUserProfileAction[14])(user.id, channel.id);
  const items2 = [isLocalVideoAutoDisabled];
  const obj4 = user(trackUserProfileAction[13]);
  stateFromStores1 = obj4.useStateFromStores(items2, () => SoundboardStore.isLocalSoundboardMuted(user.id));
  const obj5 = user(trackUserProfileAction[15]);
  const obj6 = { channelId: channel.id };
  const isSecureFramesUIEnabled = obj5.useIsSecureFramesUIEnabled(obj6);
  const items3 = [];
  const obj7 = {
    style: tmp.volumeSlider,
    value: localVolume,
    onValueChange(arg0) {
      trackUserProfileAction({ action: "SET_VOLUME" });
      const obj = AudioActionCreatorsDefault;
      obj.setLocalVolume(user.id, arg0);
    }
  };
  items3[0] = closure_11(channel(trackUserProfileAction[17]), obj7, "set-volume");
  let tmp11 = !stateFromStores;
  const tmp6 = channel;
  if (stateFromStores) {
    tmp11 = channel.isGuildStageVoice() && tmp7 !== user(trackUserProfileAction[14]).RequestToSpeakStates.ON_STAGE;
    channel.isGuildStageVoice() && tmp7 !== user(trackUserProfileAction[14]).RequestToSpeakStates.ON_STAGE;
  }
  if (!tmp11) {
    let stringResult;
    const push = items3.push;
    const UserProfileFormRow = tmp2(tmp3[21]).UserProfileFormRow;
    const intl = tmp2(tmp3[18]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[18]).t;
    if (isLocalMute) {
      stringResult = string(t.NHJxcg);
    } else {
      stringResult = string(t.sWmtI6);
    }
    const obj8 = {
      label: stringResult,
      icon: MicrophoneIcon,
      onPress() {
          trackUserProfileAction({ action: "MUTE" });
          const obj = AudioActionCreatorsDefault;
          obj.toggleLocalMute(user.id);
        }
    };
    if (isLocalMute) {
      MicrophoneIcon = tmp2(tmp3[19]).MicrophoneSlashIcon;
    } else {
      MicrophoneIcon = tmp2(tmp3[20]).MicrophoneIcon;
    }
    push(closure_11(UserProfileFormRow, obj8, "mute"));
  }
  const push2 = items3.push;
  const UserProfileFormRow2 = tmp2(tmp3[21]).UserProfileFormRow;
  const intl2 = tmp2(tmp3[18]).intl;
  const string2 = intl2.string;
  const t2 = tmp2(tmp3[18]).t;
  if (stateFromStores1) {
    string2Result = string2(t2["639hQT"]);
  } else {
    string2Result = string2(t2.LxhEuG);
  }
  const obj9 = {
    label: string2Result,
    icon: SoundboardIcon,
    onPress() {
      let mediaSessionId;
      let parentMediaSessionId;
      trackUserProfileAction({ action: "MUTE_SOUNDBOARD" });
      const rTCConnection = RTCConnectionStore.getRTCConnection();
      const obj = { guild_id: channel.guild_id, target_user_id: user.id, media_session_id: mediaSessionId, parent_media_session_id: parentMediaSessionId, mute_soundboard: !stateFromStores1 };
      mediaSessionId = undefined;
      const track = AnalyticsUtilsDefault.track;
      const AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED = metroImportAll.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED;
      AnalyticsUtilsDefault;
      if (rTCConnection != null) {
        mediaSessionId = rTCConnection.getMediaSessionId();
      }
      parentMediaSessionId = undefined;
      if (rTCConnection != null) {
        parentMediaSessionId = rTCConnection.parentMediaSessionId;
      }
      track(AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, obj);
      const tmp2Result = AudioActionCreatorsDefault;
      const result = tmp2Result.toggleLocalSoundboardMute(user.id);
    }
  };
  if (stateFromStores1) {
    SoundboardIcon = tmp2(tmp3[22]).SoundboardSlashIcon;
  } else {
    SoundboardIcon = tmp2(tmp3[23]).SoundboardIcon;
  }
  push2(closure_11(UserProfileFormRow2, obj9, "mute-soundboard"));
  if (supportsDisableLocalVideo) {
    let string3Result;
    const push3 = items3.push;
    const UserProfileFormRow3 = tmp2(tmp3[21]).UserProfileFormRow;
    const intl3 = tmp2(tmp3[18]).intl;
    const string3 = intl3.string;
    const t3 = tmp2(tmp3[18]).t;
    if (isLocalVideoDisabled) {
      string3Result = string3(t3["xc+Psz"]);
    } else {
      string3Result = string3(t3["4MMsWF"]);
    }
    const obj10 = {
      label: string3Result,
      icon: VideoIcon,
      sublabel: isLocalVideoAutoDisabled,
      onPress() {
          let id;
          trackUserProfileAction({ action: "DISABLE_VIDEO" });
          if (isLocalVideoAutoDisabled) {
            const obj2 = UserProfileAlertUtils;
            const result = obj2.confirmVideoUnstableConnection(() => {
              const obj = channel(trackUserProfileAction[16]);
              return obj.setDisableLocalVideo(id.id, constants.MANUAL_ENABLED);
            });
          } else {
            let obj = AudioActionCreatorsDefault;
            obj.setDisableLocalVideo(user.id, isLocalVideoDisabled ? React4.MANUAL_ENABLED : React4.DISABLED);
          }
        }
    };
    if (isLocalVideoDisabled) {
      VideoIcon = tmp2(tmp3[25]).VideoSlashIcon;
    } else {
      VideoIcon = tmp2(tmp3[26]).VideoIcon;
    }
    if (isLocalVideoAutoDisabled) {
      const obj11 = { style: tmp.disableVideoSublabel, children: items4 };
      items4 = [closure_11(user(trackUserProfileAction[27]).CircleErrorIcon, { size: "xxs", color: "text-feedback-warning" }), ];
      const obj12 = { variant: "text-xs/medium", color: "text-feedback-warning", children: intl4.string(user(trackUserProfileAction[18]).t.m2Hyj0) };
      const Text = tmp2(tmp3[28]).Text;
      intl4 = tmp2(tmp3[18]).intl;
      items4[1] = closure_11(Text, obj12);
      isLocalVideoAutoDisabled = closure_12(isLocalVideoDisabled, obj11);
    }
    push3(closure_11(UserProfileFormRow3, obj10, "disable-video"));
  }
  if (isSecureFramesUIEnabled) {
    const push4 = items3.push;
    const obj13 = {
      label: intl5.string(user(trackUserProfileAction[18]).t["8ErYvY"]),
      icon: user(trackUserProfileAction[30]).ShieldLockIcon,
      hint: user(trackUserProfileAction[31]).FormArrow,
      onPress() {
          let id;
          trackUserProfileAction({ action: "VIEW_SECURE_FRAMES_VERIFICATION_CODE" });
          let obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          let obj2 = SecureFramesPlatformUtilsDefault;
          const result = obj2.openSecureFramesUserVerificationModal(user.id, channel.id, () => {
            const obj = user(trackUserProfileAction[34]);
            const obj2 = { userId: id.id, channelId: channel.id, guildId: channel.guild_id };
            return obj.validateSecureFramesKeyConsistent(obj2);
          });
        }
    };
    const UserProfileFormRow4 = tmp2(tmp3[21]).UserProfileFormRow;
    intl5 = tmp2(tmp3[18]).intl;
    push4(closure_11(UserProfileFormRow4, obj13, "view-secure-frames-verification-code"));
  }
  let tmp10Result = null;
  if (0 !== items3.length) {
    const obj14 = { style: items5, title: intl6.string(user(trackUserProfileAction[18]).t.dsXapM), titleStyle: tmp.cardTitle, children: closure_11(user(trackUserProfileAction[21]).UserProfileCardRows, obj15) };
    items5 = [tmp.card, style];
    const tmp6Result = tmp6(trackUserProfileAction[21]);
    intl6 = tmp2(tmp3[18]).intl;
    obj15 = { children: items3 };
    tmp10Result = closure_11(tmp6Result, obj14);
  }
  return tmp10Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let obj4;
  let selfMute;
  let tmp5;
  let tmp6;
  let tmp9;
  let obj = channel(576);
  const cResult = obj.c(21);
  channel = channel.channel;
  const style = channel.style;
  const tmp4 = closure_13();
  const obj2 = channel(7872);
  const trackUserProfileAction = obj2.useUserProfileAnalyticsContext().trackUserProfileAction;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    const fn = function n() {
      return selfMute.isSelfMute();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = channel(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PermissionStore];
    cResult[2] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== channel) {
    class I {
      constructor() {
        const isPrivateResult = channel.isPrivate() || PermissionStore.can(Permissions.SPEAK, channel);
        return isPrivateResult;
      }
    }
    cResult[3] = channel;
    cResult[4] = I;
  } else {
    class I {
      constructor() {
        const isPrivateResult = channel.isPrivate() || PermissionStore.can(Permissions.SPEAK, channel);
        return isPrivateResult;
      }
    }
  }
  const tmpResult2 = channel(504);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, I);
  if (stateFromStores1) {
    class I {
      constructor() {
        const isPrivateResult = channel.isPrivate() || PermissionStore.can(Permissions.SPEAK, channel);
        return isPrivateResult;
      }
    }
    if (cResult[5] === style) {
      class I {
        constructor() {
          const isPrivateResult = channel.isPrivate() || PermissionStore.can(Permissions.SPEAK, channel);
          return isPrivateResult;
        }
      }
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            const isPrivateResult = channel.isPrivate() || PermissionStore.can(Permissions.SPEAK, channel);
            return isPrivateResult;
          }
        }
        cResult[8] = obj5.string(channel(1126).t.NiTd0e);
        const stringResult = obj5.string(channel(1126).t.NiTd0e);
      } else {
        class I {
          constructor() {
            const isPrivateResult = channel.isPrivate() || PermissionStore.can(Permissions.SPEAK, channel);
            return isPrivateResult;
          }
        }
      }
      if (cResult[9] !== stateFromStores) {
        class I {
          constructor() {
            const isPrivateResult = channel.isPrivate() || PermissionStore.can(Permissions.SPEAK, channel);
            return isPrivateResult;
          }
        }
        const string = tmp17.string;
        const t = tmp(1126).t;
        if (stateFromStores) {
          class I {
            constructor() {
              const isPrivateResult = channel.isPrivate() || PermissionStore.can(Permissions.SPEAK, channel);
              return isPrivateResult;
            }
          }
        } else {
          class I {
            constructor() {
              const isPrivateResult = channel.isPrivate() || PermissionStore.can(Permissions.SPEAK, channel);
              return isPrivateResult;
            }
          }
        }
        cResult[9] = stateFromStores;
        cResult[10] = tmp18;
      } else {
        class I {
          constructor() {
            const isPrivateResult = channel.isPrivate() || PermissionStore.can(Permissions.SPEAK, channel);
            return isPrivateResult;
          }
        }
      }
      if (stateFromStores) {
        class I {
          constructor() {
            const isPrivateResult = channel.isPrivate() || PermissionStore.can(Permissions.SPEAK, channel);
            return isPrivateResult;
          }
        }
      } else {
        class I {
          constructor() {
            const isPrivateResult = channel.isPrivate() || PermissionStore.can(Permissions.SPEAK, channel);
            return isPrivateResult;
          }
        }
      }
      if (cResult[11] !== trackUserProfileAction) {
        class P {
          constructor() {
            trackUserProfileAction({ action: "MUTE" });
            const obj = AudioActionCreatorsDefault;
            obj.toggleSelfMute();
          }
        }
        cResult[11] = trackUserProfileAction;
        cResult[12] = P;
      } else {
        class P {
          constructor() {
            trackUserProfileAction({ action: "MUTE" });
            const obj = AudioActionCreatorsDefault;
            obj.toggleSelfMute();
          }
        }
      }
      if (cResult[13] === tmp18) {
        class P {
          constructor() {
            trackUserProfileAction({ action: "MUTE" });
            const obj = AudioActionCreatorsDefault;
            obj.toggleSelfMute();
          }
        }
      }
      const obj3 = { children: closure_11(channel(6713).UserProfileFormRow, obj4, "mute") };
      const UserProfileCardRows = tmp(6713).UserProfileCardRows;
      obj4 = { label: tmp18, icon: tmp19, onPress: P };
      cResult[13] = tmp18;
      cResult[14] = tmp19;
      cResult[15] = P;
      cResult[16] = closure_11(UserProfileCardRows, obj3);
      const tmp23 = closure_11(UserProfileCardRows, obj3);
    }
    const items2 = [tmp4.card, style];
    cResult[5] = style;
    cResult[6] = tmp4.card;
    cResult[7] = items2;
  }
  return null;
}) : ((channel) => {
  let MicrophoneIcon;
  let UserProfileCardRows;
  let intl;
  let items2;
  let obj6;
  let selfMute;
  let style;
  let user;
  channel = channel.channel;
  ({ user, style } = channel);
  const tmp = closure_13();
  let obj = channel(7872);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const items = [MediaEngineStore];
  const obj2 = channel(504);
  const stateFromStores = obj2.useStateFromStores(items, () => selfMute.isSelfMute());
  const items1 = [PermissionStore];
  const obj3 = channel(504);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    const isPrivateResult = channel.isPrivate() || PermissionStore.can(Permissions.SPEAK, channel);
    return isPrivateResult;
  });
  let tmp9Result = null;
  const tmp6 = trackUserProfileAction;
  if (stateFromStores1) {
    if (!channel.isGuildStageVoice()) {
      let stringResult;
      const obj4 = { style: items2, title: intl.string(channel(1126).t.NiTd0e), titleStyle: tmp.cardTitle, children: closure_11(UserProfileCardRows, obj6) };
      items2 = [tmp.card, style];
      const tmp6Result = tmp6(6713);
      intl = tmp2(1126).intl;
      UserProfileCardRows = tmp2(6713).UserProfileCardRows;
      const UserProfileFormRow = tmp2(6713).UserProfileFormRow;
      const intl2 = tmp2(1126).intl;
      const string = intl2.string;
      const t = tmp2(1126).t;
      if (stateFromStores) {
        stringResult = string(t.NHJxcg);
      } else {
        stringResult = string(t.sWmtI6);
      }
      const obj5 = {
        label: stringResult,
        icon: MicrophoneIcon,
        onPress() {
              trackUserProfileAction({ action: "MUTE" });
              const obj = AudioActionCreatorsDefault;
              obj.toggleSelfMute();
            }
      };
      if (stateFromStores) {
        MicrophoneIcon = tmp2(4826).MicrophoneSlashIcon;
      } else {
        MicrophoneIcon = tmp2(9702).MicrophoneIcon;
      }
      obj6 = { children: closure_11(UserProfileFormRow, obj5, "mute") };
      tmp9Result = closure_11(tmp6Result, obj4);
    } else {
      tmp9Result = null;
    }
  }
  return tmp9Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let currentUser;
  let style;
  let tmp2;
  let user;
  const obj = react2;
  const cResult = obj.c(8);
  ({ user, currentUser, channel, style } = arg0);
  if (user.id === currentUser.id) {
    if (cResult[0] === channel) {
      if (cResult[1] === currentUser) {
        let tmp6;
        if (cResult[2] === style) {
          tmp6 = cResult[3];
        }
        tmp2 = tmp6;
      }
    }
    const obj2 = { user: currentUser, channel, style };
    const tmp9 = unpackModuleId(closure_15, obj2);
    cResult[0] = channel;
    cResult[1] = currentUser;
    cResult[2] = style;
    cResult[3] = tmp9;
    tmp6 = tmp9;
  } else {
    if (cResult[4] === channel) {
      if (cResult[5] === style) {
        if (cResult[6] === user) {
          tmp2 = cResult[7];
        }
      }
    }
    const obj3 = { user, channel, style };
    const tmp5 = unpackModuleId(closure_14, obj3);
    cResult[4] = channel;
    cResult[5] = style;
    cResult[6] = user;
    cResult[7] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
}) : ((arg0) => {
  let channel;
  let currentUser;
  let style;
  let tmp3;
  let user;
  ({ user, currentUser, channel, style } = arg0);
  if (user.id === currentUser.id) {
    const obj2 = { user: currentUser, channel, style };
    tmp3 = unpackModuleId(closure_15, obj2);
  } else {
    const obj = { user, channel, style };
    tmp3 = unpackModuleId(closure_14, obj);
  }
  return tmp3;
});
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileVoiceSettings.tsx");

export default tmp5;