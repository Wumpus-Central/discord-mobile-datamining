// === Module 15759: UserProfileVoiceSettings ===

// Module 15759 (UserProfileVoiceSettings)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 6225 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 6233 */;
import SecureFramesPlatformUtilsDefault from "SecureFramesPlatformUtils" /* 10631 */;
import UserProfileAlertUtils from "UserProfileAlertUtils" /* 12123 */;
import completeStreamVolumeMovedTutorialDefault from "completeStreamVolumeMovedTutorial" /* 15764 */;
import noop from "module_19" /* 19 */;
import SoundboardStore from "SoundboardStore" /* 6369 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6820 */;
import MediaEngineStore from "MediaEngineStore" /* 2133 */;
import PermissionStore from "PermissionStore" /* 5238 */;
import RTCConnectionStore from "RTCConnectionStore" /* 6071 */;

require = fn;
function UserVoiceSettings(user) {
  user = user.user;
  const channel = user.channel;
  let trackUserProfileAction;
  isLocalVideoDisabled = undefined;
  c6 = undefined;
  const tmp = closure_15();
  trackUserProfileAction = user(trackUserProfileAction[12]).useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj = user(trackUserProfileAction[12]);
  items = [c6];
  const stateFromStoresObject = user(trackUserProfileAction[13]).useStateFromStoresObject(items, () => ({ localVolume: MediaEngineStore.getLocalVolume(user.id), isLocalMute: MediaEngineStore.isLocalMute(user.id), isLocalVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id), isLocalVideoAutoDisabled: MediaEngineStore.isLocalVideoAutoDisabled(user.id), supportsDisableLocalVideo: MediaEngineStore.supportsDisableLocalVideo() }));
  ({ localVolume, isLocalMute, isLocalVideoDisabled } = stateFromStoresObject);
  let isLocalVideoAutoDisabled = stateFromStoresObject.isLocalVideoAutoDisabled;
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
  const tmp7 = channel(trackUserProfileAction[14])(user.id, channel.id);
  const items2 = [isLocalVideoAutoDisabled];
  const stateFromStores1 = user(trackUserProfileAction[13]).useStateFromStores(items2, () => SoundboardStore.isLocalSoundboardMuted(user.id));
  const obj4 = user(trackUserProfileAction[13]);
  const isSecureFramesUIEnabled = user(trackUserProfileAction[15]).useIsSecureFramesUIEnabled({ channelId: channel.id });
  const obj5 = user(trackUserProfileAction[15]);
  const obj6 = { channelId: channel.id };
  const items3 = [stateFromStores1];
  const stateFromStores2 = user(trackUserProfileAction[13]).useStateFromStores(items3, () => ApplicationStreamingStore.getActiveStreamForUser(user.id, undefined));
  let ownerId;
  const obj7 = user(trackUserProfileAction[13]);
  if (stateFromStores2 != null) {
    ownerId = stateFromStores2.ownerId;
  }
  const tmp11 = channel(trackUserProfileAction[16]);
  ({ handleVolumeChange: c6, effectiveVolume } = channel(trackUserProfileAction[16])(ownerId, user(trackUserProfileAction[17]).MediaEngineContextTypes.STREAM));
  const tmp11Result = channel(trackUserProfileAction[16])(ownerId, user(trackUserProfileAction[17]).MediaEngineContextTypes.STREAM);
  const nonContextualStreamOutputPresent = channel(trackUserProfileAction[18]).useConfig({ location: "UserProfileVoiceSettings" }).nonContextualStreamOutputPresent;
  if (nonContextualStreamOutputPresent) {
    function handleVolumeChange(arg0) {
      trackUserProfileAction({ action: "SET_VOLUME" });
      AudioActionCreatorsDefault.setLocalVolume(user.id, arg0);
    }
    const obj8 = { style: tmp.volumeSlider, value: localVolume, onValueChange: handleVolumeChange };
    let tmp14Result = closure_13(tmp6(tmp3[20]), obj8, "set-volume");
    let tmp15 = closure_13;
  } else {
    tmp15 = closure_13;
    const obj9 = { label: null, value: null, maxValue: null, formatValue: null, onChange: null };
    const intl = tmp2(tmp3[23]).intl;
    obj9.label = intl.string(tmp2(tmp3[23]).t.m7TNdF);
    obj9.value = tmp2(tmp3[24]).amplitudeToPerceptual(localVolume);
    obj9.maxValue = maxValue;
    obj9.formatValue = function formatValue(arg0) {
      return "" + Math.round(arg0) + "%";
    };
    obj9.onChange = function onChange(arg0) {
      const result = PerceptualVolumeUtils.perceptualToAmplitude(arg0);
      trackUserProfileAction({ action: "SET_VOLUME" });
      AudioActionCreatorsDefault.setLocalVolume(user.id, result);
    };
    const items4 = [closure_13(tmp2(tmp3[22]).TableSliderRow, obj9), ];
    let tmp15Result = null != stateFromStores2;
    if (tmp15Result) {
      const obj10 = { userId: user.id, children: null };
      const obj11 = { label: null, value: null, maxValue: null, formatValue: null, onChange: null };
      const intl2 = tmp2(tmp3[23]).intl;
      obj11.label = intl2.string(tmp2(tmp3[23]).t.pEAl4b);
      const tmp6Result3 = tmp6(tmp3[25]);
      obj11.value = tmp2(tmp3[24]).amplitudeToPerceptual(effectiveVolume);
      obj11.maxValue = maxValue;
      obj11.formatValue = function formatValue(arg0) {
        return "" + Math.round(arg0) + "%";
      };
      obj11.onChange = function onChange(arg0) {
        _undefined(PerceptualVolumeUtils.perceptualToAmplitude(arg0));
        completeStreamVolumeMovedTutorialDefault();
      };
      obj10.children = tmp15(tmp2(tmp3[22]).TableSliderRow, obj11);
      tmp15Result = tmp15(tmp6Result3, obj10);
      const tmp2Result2 = tmp2(tmp3[24]);
    }
    const obj12 = { hasIcons: false, children: null };
    items4[1] = tmp15Result;
    obj12.children = items4;
    tmp14Result = closure_14(tmp2(tmp3[21]).TableRowGroup, obj12, "set-volume");
    let tmp2Result = tmp2(tmp3[24]);
  }
  const items5 = [tmp14Result];
  let tmp21 = !stateFromStores;
  if (stateFromStores) {
    tmp21 = channel.isGuildStageVoice() && tmp7 !== tmp2(tmp3[14]).RequestToSpeakStates.ON_STAGE;
    const tmp22 = channel.isGuildStageVoice() && tmp7 !== tmp2(tmp3[14]).RequestToSpeakStates.ON_STAGE;
  }
  if (tmp21) {
    const intl4 = tmp2(tmp3[23]).intl;
    const string2 = intl4.string;
    const t2 = tmp2(tmp3[23]).t;
    if (stateFromStores1) {
      let string2Result = string2(t2["639hQT"]);
    } else {
      string2Result = string2(t2.LxhEuG);
    }
    const obj13 = { label: string2Result, icon: null, onPress: null };
    if (stateFromStores1) {
      let SoundboardIcon = tmp2(tmp3[30]).SoundboardSlashIcon;
    } else {
      SoundboardIcon = tmp2(tmp3[31]).SoundboardIcon;
    }
    obj13.icon = SoundboardIcon;
    obj13.onPress = function onPress() {
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
    items5.push(tmp15(tmp2(tmp3[27]).UserProfileFormRow, obj13, "mute-soundboard"));
    if (stateFromStoresObject.supportsDisableLocalVideo) {
      const intl5 = tmp2(tmp3[23]).intl;
      const string3 = intl5.string;
      const t3 = tmp2(tmp3[23]).t;
      if (isLocalVideoDisabled) {
        let string3Result = string3(t3["xc+Psz"]);
      } else {
        string3Result = string3(t3["4MMsWF"]);
      }
      const obj14 = { label: string3Result, icon: null, sublabel: null, onPress: null };
      if (isLocalVideoDisabled) {
        let VideoIcon = tmp2(tmp3[33]).VideoSlashIcon;
      } else {
        VideoIcon = tmp2(tmp3[34]).VideoIcon;
      }
      obj14.icon = VideoIcon;
      if (isLocalVideoAutoDisabled) {
        const obj15 = { style: tmp.disableVideoSublabel, children: null };
        const items6 = [tmp15(tmp2(tmp3[35]).CircleErrorIcon, { size: "xxs", color: "text-feedback-warning" }), ];
        const obj16 = { variant: "body-xs/medium", color: "text-feedback-warning", children: null };
        const intl6 = tmp2(tmp3[23]).intl;
        obj16.children = intl6.string(tmp2(tmp3[23]).t.m2Hyj0);
        items6[1] = tmp15(tmp2(tmp3[36]).Text, obj16);
        obj15.children = items6;
        isLocalVideoAutoDisabled = closure_14(isLocalVideoDisabled, obj15);
      }
      obj14.sublabel = isLocalVideoAutoDisabled;
      obj14.onPress = function onPress() {
        trackUserProfileAction({ action: "DISABLE_VIDEO" });
        if (isLocalVideoAutoDisabled) {
          const result = UserProfileAlertUtils.confirmVideoUnstableConnection(() => channel(trackUserProfileAction[19]).setDisableLocalVideo(id.id, constants.MANUAL_ENABLED));
        } else {
          AudioActionCreatorsDefault.setDisableLocalVideo(user.id, isLocalVideoDisabled ? refs.MANUAL_ENABLED : refs.DISABLED);
        }
      };
      items5.push(tmp15(tmp2(tmp3[27]).UserProfileFormRow, obj14, "disable-video"));
    }
    if (isSecureFramesUIEnabled) {
      const obj17 = { label: null, icon: null, hint: null, onPress: null };
      const intl7 = tmp2(tmp3[23]).intl;
      obj17.label = intl7.string(tmp2(tmp3[23]).t["8ErYvY"]);
      obj17.icon = tmp2(tmp3[38]).ShieldLockIcon;
      obj17.hint = tmp2(tmp3[39]).FormArrow;
      obj17.onPress = function onPress() {
        trackUserProfileAction({ action: "VIEW_SECURE_FRAMES_VERIFICATION_CODE" });
        ActionSheetActionCreatorsDefault.hideActionSheet();
        const result = SecureFramesPlatformUtilsDefault.openSecureFramesUserVerificationModal(user.id, channel.id, () => user(trackUserProfileAction[42]).validateSecureFramesKeyConsistent({ userId: id.id, channelId: channel.id, guildId: channel.guild_id }));
      };
      items5.push(tmp15(tmp2(tmp3[27]).UserProfileFormRow, obj17, "view-secure-frames-verification-code"));
    }
    let tmp15Result2 = null;
    if (0 !== items5.length) {
      const obj18 = { style: null, title: null, titleStyle: null, children: null };
      const items7 = [tmp.card, user.style];
      obj18.style = items7;
      const intl8 = tmp2(tmp3[23]).intl;
      obj18.title = intl8.string(tmp2(tmp3[23]).t.dsXapM);
      let cardTitle;
      if (nonContextualStreamOutputPresent) {
        cardTitle = tmp.cardTitle;
      }
      obj18.titleStyle = cardTitle;
      const obj19 = { children: items5 };
      obj18.children = tmp15(tmp2(tmp3[27]).UserProfileCardRows, obj19);
      tmp15Result2 = tmp15(tmp6(tmp3[27]), obj18);
      const tmp6Result4 = tmp6(tmp3[27]);
    }
    return tmp15Result2;
  } else {
    const intl3 = tmp2(tmp3[23]).intl;
    const string = intl3.string;
    const t = tmp2(tmp3[23]).t;
    if (isLocalMute) {
      let stringResult = string(t.NHJxcg);
    } else {
      stringResult = string(t.sWmtI6);
    }
    const obj20 = { label: stringResult, icon: null, onPress: null };
    if (isLocalMute) {
      let MicrophoneIcon = tmp2(tmp3[28]).MicrophoneSlashIcon;
    } else {
      MicrophoneIcon = tmp2(tmp3[29]).MicrophoneIcon;
    }
    obj20.icon = MicrophoneIcon;
    obj20.onPress = function onPress() {
      trackUserProfileAction({ action: "MUTE" });
      AudioActionCreatorsDefault.toggleLocalMute(user.id);
    };
    items5.push(tmp15(tmp2(tmp3[27]).UserProfileFormRow, obj20, "mute"));
  }
  const tmp6Result = channel(trackUserProfileAction[18]);
}
function CurrentUserVoiceSettings(channel) {
  channel = channel.channel;
  ({ user, style } = channel);
  const tmp = closure_15();
  let tmp9Result = dependencyMap;
  const trackUserProfileAction = channel(8545).useUserProfileAnalyticsContext().trackUserProfileAction;
  const obj = channel(8545);
  items = [MediaEngineStore];
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
    const intl = tmp2(1113).intl;
    obj4.title = intl.string(tmp2(1113).t.NiTd0e);
    obj4.titleStyle = tmp.cardTitle;
    const intl2 = tmp2(1113).intl;
    const string = intl2.string;
    const t = tmp2(1113).t;
    if (stateFromStores) {
      let stringResult = string(t.NHJxcg);
    } else {
      stringResult = string(t.sWmtI6);
    }
    const obj5 = { label: stringResult, icon: null, onPress: null };
    if (stateFromStores) {
      let MicrophoneIcon = tmp2(10604).MicrophoneSlashIcon;
    } else {
      MicrophoneIcon = tmp2(13048).MicrophoneIcon;
    }
    const obj6 = { children: null };
    obj5.icon = MicrophoneIcon;
    obj5.onPress = function onPress() {
      trackUserProfileAction({ action: "MUTE" });
      AudioActionCreatorsDefault.toggleSelfMute();
    };
    obj6.children = closure_13(tmp2(7961).UserProfileFormRow, obj5, "mute");
    tmp9Result = closure_13(tmp2(7961).UserProfileCardRows, obj6);
    obj4.children = tmp9Result;
    closure_13(trackUserProfileAction(7961), obj4);
    const tmp6Result = trackUserProfileAction(7961);
  }
  return tmp8;
}
const View = fn(17).View;
const Constants = fn(1072);
({ AnalyticEvents: closure_9, VideoToggleState: closure_10 } = Constants);
const Permissions = fn(1083).Permissions;
const maxValue = fn(6075).MAX_EMBEDDED_VOLUME_PERCEPTUAL;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(5306);
let closure_15 = createStyles.createStyles({ card: { paddingBottom: 0 }, cardTitle: { marginBottom: 0 }, volumeSlider: { paddingVertical: 20 }, disableVideoSublabel: { flexDirection: "row", alignItems: "center", gap: 4 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileVoiceSettings.tsx");

export default function UserProfileVoiceSettings(arg0) {
  ({ user, currentUser, channel, style } = arg0);
  if (user.id === currentUser.id) {
    const obj2 = { user: currentUser, channel, style };
    let tmp3 = state(CurrentUserVoiceSettings, obj2);
  } else {
    const obj = { user, channel, style };
    tmp3 = state(UserVoiceSettings, obj);
  }
  return tmp3;
};