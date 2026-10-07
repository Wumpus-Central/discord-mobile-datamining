// === Module 12885: UserProfileVoiceSettings ===

// Module 12885 (UserProfileVoiceSettings)
import c from "c" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 8079 */;
import SecureFramesPlatformUtilsDefault from "SecureFramesPlatformUtils" /* 9383 */;
import UserProfileAlertUtils from "UserProfileAlertUtils" /* 12301 */;
import noop from "module_19" /* 19 */;
import SoundboardStore from "SoundboardStore" /* 5687 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4919 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ AnalyticEvents: closure_8, VideoToggleState: closure_9 } = Constants);
const Permissions = fn(1096).Permissions;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4896);
let closure_13 = createStyles.createStyles({ card: { paddingBottom: 0 }, cardTitle: { marginBottom: 0 }, volumeSlider: { paddingVertical: 20 }, disableVideoSublabel: { flexDirection: "row", alignItems: "center", gap: 4 } });
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  const cResult = user(trackUserProfileAction[11]).c(83);
  user = user.user;
  const channel = user.channel;
  const tmp4 = closure_13();
  let obj = user(trackUserProfileAction[11]);
  trackUserProfileAction = user(trackUserProfileAction[12]).useUserProfileAnalyticsContext().trackUserProfileAction;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [stateFromStores1];
    cResult[0] = items;
    let first = items;
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
  let obj2 = user(trackUserProfileAction[12]);
  const stateFromStoresObject = user(trackUserProfileAction[13]).useStateFromStoresObject(first, L);
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
    const tmp9 = items1;
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
  const tmpResult = user(trackUserProfileAction[13]);
  const stateFromStores = user(trackUserProfileAction[13]).useStateFromStores(tmp9, D);
  channel(trackUserProfileAction[14])(user.id, channel.id);
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
    const tmp14 = items2;
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
  const tmp12 = channel;
  const tmpResult4 = user(trackUserProfileAction[13]);
  stateFromStores1 = user(trackUserProfileAction[13]).useStateFromStores(tmp14, O);
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
  const tmpResult5 = user(trackUserProfileAction[13]);
  const isSecureFramesUIEnabled = user(trackUserProfileAction[15]).useIsSecureFramesUIEnabled(tmp18);
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
    const tmp23 = closure_11(tmp12(tmp2[17]), obj3, "set-volume");
    cResult[14] = localVolume;
    cResult[15] = tmp4.volumeSlider;
    cResult[16] = G;
    cResult[17] = tmp23;
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
  const tmpResult6 = user(trackUserProfileAction[15]);
}) : ((user) => {
  user = user.user;
  const channel = user.channel;
  let trackUserProfileAction;
  isLocalVideoDisabled = undefined;
  let stateFromStores1;
  const tmp = closure_13();
  trackUserProfileAction = user(trackUserProfileAction[12]).useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj = user(trackUserProfileAction[12]);
  const items = [stateFromStores1];
  const stateFromStoresObject = user(trackUserProfileAction[13]).useStateFromStoresObject(items, () => ({ localVolume: MediaEngineStore.getLocalVolume(user.id), isLocalMute: MediaEngineStore.isLocalMute(user.id), isLocalVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id), isLocalVideoAutoDisabled: MediaEngineStore.isLocalVideoAutoDisabled(user.id), supportsDisableLocalVideo: MediaEngineStore.supportsDisableLocalVideo() }));
  ({ isLocalMute, isLocalVideoDisabled } = stateFromStoresObject);
  let isLocalVideoAutoDisabled = stateFromStoresObject.isLocalVideoAutoDisabled;
  ({ localVolume, supportsDisableLocalVideo } = stateFromStoresObject);
  let obj2 = user(trackUserProfileAction[13]);
  const items1 = [PermissionStore];
  const stateFromStores = user(trackUserProfileAction[13]).useStateFromStores(items1, () => {
    let isPrivateResult = channel.isPrivate();
    if (!isPrivateResult) {
      isPrivateResult = PermissionStore.can(Permissions.SPEAK, channel);
    }
    return isPrivateResult;
  });
  const obj3 = user(trackUserProfileAction[13]);
  const tmp6 = channel;
  const tmp7 = channel(trackUserProfileAction[14])(user.id, channel.id);
  const items2 = [isLocalVideoAutoDisabled];
  stateFromStores1 = user(trackUserProfileAction[13]).useStateFromStores(items2, () => SoundboardStore.isLocalSoundboardMuted(user.id));
  const obj4 = user(trackUserProfileAction[13]);
  const isSecureFramesUIEnabled = user(trackUserProfileAction[15]).useIsSecureFramesUIEnabled({ channelId: channel.id });
  const items3 = [
    closure_11(channel(trackUserProfileAction[17]), {
      style: tmp.volumeSlider,
      value: localVolume,
      onValueChange(arg0) {
        trackUserProfileAction({ action: "SET_VOLUME" });
        AudioActionCreatorsDefault.setLocalVolume(user.id, arg0);
      }
    }, "set-volume")
  ];
  let tmp11 = !stateFromStores;
  if (stateFromStores) {
    tmp11 = channel.isGuildStageVoice() && tmp7 !== tmp2(tmp3[14]).RequestToSpeakStates.ON_STAGE;
    const tmp12 = channel.isGuildStageVoice() && tmp7 !== tmp2(tmp3[14]).RequestToSpeakStates.ON_STAGE;
  }
  if (tmp11) {
    const intl2 = tmp2(tmp3[18]).intl;
    const string2 = intl2.string;
    const t2 = tmp2(tmp3[18]).t;
    if (stateFromStores1) {
      let string2Result = string2(t2["639hQT"]);
    } else {
      string2Result = string2(t2.LxhEuG);
    }
    const obj8 = { label: string2Result, icon: null, onPress: null };
    if (stateFromStores1) {
      let SoundboardIcon = tmp2(tmp3[22]).SoundboardSlashIcon;
    } else {
      SoundboardIcon = tmp2(tmp3[23]).SoundboardIcon;
    }
    obj8.icon = SoundboardIcon;
    obj8.onPress = function onPress() {
      trackUserProfileAction({ action: "MUTE_SOUNDBOARD" });
      const rTCConnection = RTCConnectionStore.getRTCConnection();
      const obj = { guild_id: channel.guild_id, target_user_id: user.id, media_session_id: null, parent_media_session_id: null, mute_soundboard: null };
      let mediaSessionId;
      if (rTCConnection != null) {
        mediaSessionId = rTCConnection.getMediaSessionId();
      }
      obj.media_session_id = mediaSessionId;
      let parentMediaSessionId;
      if (rTCConnection != null) {
        parentMediaSessionId = rTCConnection.parentMediaSessionId;
      }
      obj.parent_media_session_id = parentMediaSessionId;
      obj.mute_soundboard = !stateFromStores1;
      AnalyticsUtilsDefault.track(constants.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, obj);
      const result = AudioActionCreatorsDefault.toggleLocalSoundboardMute(user.id);
      const tmp2Result = AudioActionCreatorsDefault;
    };
    items3.push(closure_11(tmp2(tmp3[21]).UserProfileFormRow, obj8, "mute-soundboard"));
    if (supportsDisableLocalVideo) {
      const intl3 = tmp2(tmp3[18]).intl;
      const string3 = intl3.string;
      const t3 = tmp2(tmp3[18]).t;
      if (isLocalVideoDisabled) {
        let string3Result = string3(t3["xc+Psz"]);
      } else {
        string3Result = string3(t3["4MMsWF"]);
      }
      const obj9 = { label: string3Result, icon: null, sublabel: null, onPress: null };
      if (isLocalVideoDisabled) {
        let VideoIcon = tmp2(tmp3[25]).VideoSlashIcon;
      } else {
        VideoIcon = tmp2(tmp3[26]).VideoIcon;
      }
      obj9.icon = VideoIcon;
      if (isLocalVideoAutoDisabled) {
        const obj10 = { style: tmp.disableVideoSublabel, children: null };
        const items4 = [closure_11(tmp2(tmp3[27]).CircleErrorIcon, { size: "xxs", color: "text-feedback-warning" }), ];
        const obj11 = { variant: "text-xs/medium", color: "text-feedback-warning", children: null };
        const intl4 = tmp2(tmp3[18]).intl;
        obj11.children = intl4.string(tmp2(tmp3[18]).t.m2Hyj0);
        items4[1] = closure_11(tmp2(tmp3[28]).Text, obj11);
        obj10.children = items4;
        isLocalVideoAutoDisabled = closure_12(isLocalVideoDisabled, obj10);
      }
      obj9.sublabel = isLocalVideoAutoDisabled;
      obj9.onPress = function onPress() {
        trackUserProfileAction({ action: "DISABLE_VIDEO" });
        if (isLocalVideoAutoDisabled) {
          const result = UserProfileAlertUtils.confirmVideoUnstableConnection(() => channel(trackUserProfileAction[16]).setDisableLocalVideo(id.id, constants.MANUAL_ENABLED));
        } else {
          AudioActionCreatorsDefault.setDisableLocalVideo(user.id, isLocalVideoDisabled ? options.MANUAL_ENABLED : options.DISABLED);
        }
      };
      items3.push(closure_11(tmp2(tmp3[21]).UserProfileFormRow, obj9, "disable-video"));
    }
    if (isSecureFramesUIEnabled) {
      const obj12 = { label: null, icon: null, hint: null, onPress: null };
      const intl5 = tmp2(tmp3[18]).intl;
      obj12.label = intl5.string(tmp2(tmp3[18]).t["8ErYvY"]);
      obj12.icon = tmp2(tmp3[30]).ShieldLockIcon;
      obj12.hint = tmp2(tmp3[31]).FormArrow;
      obj12.onPress = function onPress() {
        trackUserProfileAction({ action: "VIEW_SECURE_FRAMES_VERIFICATION_CODE" });
        ActionSheetActionCreatorsDefault.hideActionSheet();
        const result = SecureFramesPlatformUtilsDefault.openSecureFramesUserVerificationModal(user.id, channel.id, () => user(trackUserProfileAction[34]).validateSecureFramesKeyConsistent({ userId: id.id, channelId: channel.id, guildId: channel.guild_id }));
      };
      items3.push(closure_11(tmp2(tmp3[21]).UserProfileFormRow, obj12, "view-secure-frames-verification-code"));
    }
    let tmp10Result = null;
    if (0 !== items3.length) {
      const obj13 = { style: null, title: null, titleStyle: null, children: null };
      const items5 = [tmp.card, user.style];
      obj13.style = items5;
      const intl6 = tmp2(tmp3[18]).intl;
      obj13.title = intl6.string(tmp2(tmp3[18]).t.dsXapM);
      obj13.titleStyle = tmp.cardTitle;
      const obj14 = { children: items3 };
      obj13.children = closure_11(tmp2(tmp3[21]).UserProfileCardRows, obj14);
      tmp10Result = closure_11(tmp6(tmp3[21]), obj13);
      const tmp6Result = tmp6(tmp3[21]);
    }
    return tmp10Result;
  } else {
    const intl = tmp2(tmp3[18]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[18]).t;
    if (isLocalMute) {
      let stringResult = string(t.NHJxcg);
    } else {
      stringResult = string(t.sWmtI6);
    }
    const obj15 = { label: stringResult, icon: null, onPress: null };
    if (isLocalMute) {
      let MicrophoneIcon = tmp2(tmp3[19]).MicrophoneSlashIcon;
    } else {
      MicrophoneIcon = tmp2(tmp3[20]).MicrophoneIcon;
    }
    obj15.icon = MicrophoneIcon;
    obj15.onPress = function onPress() {
      trackUserProfileAction({ action: "MUTE" });
      AudioActionCreatorsDefault.toggleLocalMute(user.id);
    };
    items3.push(closure_11(tmp2(tmp3[21]).UserProfileFormRow, obj15, "mute"));
  }
  const obj5 = user(trackUserProfileAction[15]);
  const obj6 = { channelId: channel.id };
  const obj7 = {
    style: tmp.volumeSlider,
    value: localVolume,
    onValueChange(arg0) {
      trackUserProfileAction({ action: "SET_VOLUME" });
      AudioActionCreatorsDefault.setLocalVolume(user.id, arg0);
    }
  };
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(576).c(21);
  channel = channel.channel;
  const style = channel.style;
  const tmp4 = closure_13();
  const obj = channel(576);
  const trackUserProfileAction = channel(7872).useUserProfileAnalyticsContext().trackUserProfileAction;
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
  const obj2 = channel(7872);
  const stateFromStores = channel(504).useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PermissionStore];
    cResult[2] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== channel) {
    class I {
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
    cResult[3] = channel;
    cResult[4] = I;
  } else {
    class I {
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
  const tmpResult = channel(504);
  const stateFromStores1 = channel(504).useStateFromStores(tmp9, I);
  if (stateFromStores1) {
    class I {
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
    if (cResult[5] === style) {
      class I {
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
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
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
        const stringResult = obj5.string(tmp(1126).t.NiTd0e);
        cResult[8] = stringResult;
      } else {
        class I {
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
      if (cResult[9] !== stateFromStores) {
        class I {
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
        if (stateFromStores) {
          class I {
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
          const stringResult1 = obj6.string(tmp(1126).t);
        } else {
          class I {
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
        cResult[9] = stateFromStores;
        cResult[10] = stringResult1;
      } else {
        class I {
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
        if (stateFromStores) {
          class I {
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
        } else {
          class I {
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
        if (cResult[11] !== trackUserProfileAction) {
          class P {
            constructor() {
              tmp = trackUserProfileAction({ action: "MUTE" });
              obj = closure_1(closure_2[16]);
              toggleSelfMuteResult = obj.toggleSelfMute();
              return;
            }
          }
          cResult[11] = trackUserProfileAction;
          cResult[12] = P;
        } else {
          class P {
            constructor() {
              tmp = trackUserProfileAction({ action: "MUTE" });
              obj = closure_1(closure_2[16]);
              toggleSelfMuteResult = obj.toggleSelfMute();
              return;
            }
          }
        }
        if (cResult[13] === tmp16) {
          class P {
            constructor() {
              tmp = trackUserProfileAction({ action: "MUTE" });
              obj = closure_1(closure_2[16]);
              toggleSelfMuteResult = obj.toggleSelfMute();
              return;
            }
          }
        }
        const obj3 = { children: null };
        const obj4 = { label: tmp16, icon: tmp19, onPress: P };
        obj3.children = closure_11(tmp(6713).UserProfileFormRow, obj4, "mute");
        const tmp23 = closure_11(tmp(6713).UserProfileCardRows, obj3);
        cResult[13] = tmp16;
        cResult[14] = tmp19;
        cResult[15] = P;
        cResult[16] = tmp23;
      }
    }
    const items2 = [tmp4.card, style];
    cResult[5] = style;
    cResult[6] = tmp4.card;
    cResult[7] = items2;
  }
  return null;
}) : ((channel) => {
  channel = channel.channel;
  ({ user, style } = channel);
  const tmp = closure_13();
  let tmp9Result = dependencyMap;
  const trackUserProfileAction = channel(7872).useUserProfileAnalyticsContext().trackUserProfileAction;
  const obj = channel(7872);
  const items = [MediaEngineStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => selfMute.isSelfMute());
  const obj2 = channel(504);
  const items1 = [PermissionStore];
  const stateFromStores1 = channel(504).useStateFromStores(items1, () => {
    let isPrivateResult = channel.isPrivate();
    if (!isPrivateResult) {
      isPrivateResult = PermissionStore.can(Permissions.SPEAK, channel);
    }
    return isPrivateResult;
  });
  let tmp8 = null;
  if (stateFromStores1) {
    if (channel.isGuildStageVoice()) {
      tmp8 = null;
    }
    const obj4 = { style: null, title: null, titleStyle: null, children: null };
    const items2 = [tmp.card, style];
    obj4.style = items2;
    const intl = tmp2(1126).intl;
    obj4.title = intl.string(tmp2(1126).t.NiTd0e);
    obj4.titleStyle = tmp.cardTitle;
    const intl2 = tmp2(1126).intl;
    const string = intl2.string;
    const t = tmp2(1126).t;
    if (stateFromStores) {
      let stringResult = string(t.NHJxcg);
    } else {
      stringResult = string(t.sWmtI6);
    }
    const obj5 = { label: stringResult, icon: null, onPress: null };
    if (stateFromStores) {
      let MicrophoneIcon = tmp2(4826).MicrophoneSlashIcon;
    } else {
      MicrophoneIcon = tmp2(9702).MicrophoneIcon;
    }
    const obj6 = { children: null };
    obj5.icon = MicrophoneIcon;
    obj5.onPress = function onPress() {
      trackUserProfileAction({ action: "MUTE" });
      AudioActionCreatorsDefault.toggleSelfMute();
    };
    obj6.children = closure_11(tmp2(6713).UserProfileFormRow, obj5, "mute");
    tmp9Result = closure_11(tmp2(6713).UserProfileCardRows, obj6);
    obj4.children = tmp9Result;
    closure_11(trackUserProfileAction(6713), obj4);
    const tmp6Result = trackUserProfileAction(6713);
  }
  return tmp8;
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileVoiceSettings.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(8);
  ({ user, currentUser, channel, style } = arg0);
  if (user.id === currentUser.id) {
    if (cResult[0] === channel) {
      if (cResult[1] === currentUser) {
      }
    }
    const obj2 = { user: currentUser, channel, style };
    const tmp9 = closure_1_11(closure_15, obj2);
    cResult[0] = channel;
    cResult[1] = currentUser;
    cResult[2] = style;
    cResult[3] = tmp9;
  } else {
    if (cResult[4] === channel) {
      if (cResult[5] === style) {
        if (cResult[6] === user) {
          let tmp2 = cResult[7];
        }
        return tmp2;
      }
    }
    const obj3 = { user, channel, style };
    const tmp5 = closure_1_11(closure_14, obj3);
    cResult[4] = channel;
    cResult[5] = style;
    cResult[6] = user;
    cResult[7] = tmp5;
    tmp2 = tmp5;
  }
}) : ((arg0) => {
  ({ user, currentUser, channel, style } = arg0);
  if (user.id === currentUser.id) {
    const obj2 = { user: currentUser, channel, style };
    let tmp3 = closure_1_11(closure_15, obj2);
  } else {
    const obj = { user, channel, style };
    tmp3 = closure_1_11(closure_14, obj);
  }
  return tmp3;
});