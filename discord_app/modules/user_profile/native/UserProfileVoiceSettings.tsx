// discord_app/modules/user_profile/native/UserProfileVoiceSettings.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import AudioActionCreatorsDefault from "../../../actions/AudioActionCreators.tsx";
import SecureFramesPlatformUtilsDefault from "../../rtc/SecureFramesPlatformUtils.native.tsx";
import UserProfileAlertUtils from "UserProfileAlertUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import SoundboardStore from "../../soundboard/SoundboardStore.tsx";
import MediaEngineStore from "../../../stores/MediaEngineStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";

require = fn;
function UserVoiceSettings(user) {
  user = user.user;
  const channel = user.channel;
  let trackUserProfileAction;
  isLocalVideoDisabled = undefined;
  let stateFromStores1;
  const tmp = closure_13();
  trackUserProfileAction = user(trackUserProfileAction[10]).useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj = user(trackUserProfileAction[10]);
  const items = [stateFromStores1];
  const stateFromStoresObject = user(trackUserProfileAction[11]).useStateFromStoresObject(items, () => ({
    localVolume: MediaEngineStore.getLocalVolume(user.id),
    isLocalMute: MediaEngineStore.isLocalMute(user.id),
    isLocalVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id),
    isLocalVideoAutoDisabled: MediaEngineStore.isLocalVideoAutoDisabled(user.id),
    supportsDisableLocalVideo: MediaEngineStore.supportsDisableLocalVideo(),
  }));
  ({ isLocalMute, isLocalVideoDisabled } = stateFromStoresObject);
  let isLocalVideoAutoDisabled = stateFromStoresObject.isLocalVideoAutoDisabled;
  ({ localVolume, supportsDisableLocalVideo } = stateFromStoresObject);
  let obj2 = user(trackUserProfileAction[11]);
  const items1 = [PermissionStore];
  const stateFromStores = user(trackUserProfileAction[11]).useStateFromStores(items1, () => {
    let isPrivateResult = channel.isPrivate();
    if (!isPrivateResult) {
      isPrivateResult = PermissionStore.can(Permissions.SPEAK, channel);
    }
    return isPrivateResult;
  });
  const obj3 = user(trackUserProfileAction[11]);
  const tmp6 = channel;
  const tmp7 = channel(trackUserProfileAction[12])(user.id, channel.id);
  const items2 = [isLocalVideoAutoDisabled];
  stateFromStores1 = user(trackUserProfileAction[11]).useStateFromStores(items2, () =>
    SoundboardStore.isLocalSoundboardMuted(user.id),
  );
  const obj4 = user(trackUserProfileAction[11]);
  const isSecureFramesUIEnabled = user(trackUserProfileAction[13]).useIsSecureFramesUIEnabled({
    channelId: channel.id,
  });
  const items3 = [
    closure_11(
      channel(trackUserProfileAction[14]),
      {
        style: tmp.volumeSlider,
        value: localVolume,
        onValueChange(arg0) {
          trackUserProfileAction({ action: "SET_VOLUME" });
          AudioActionCreatorsDefault.setLocalVolume(user.id, arg0);
        },
      },
      "set-volume",
    ),
  ];
  let tmp11 = !stateFromStores;
  if (stateFromStores) {
    tmp11 = channel.isGuildStageVoice() && tmp7 !== tmp2(tmp3[12]).RequestToSpeakStates.ON_STAGE;
    const tmp12 = channel.isGuildStageVoice() && tmp7 !== tmp2(tmp3[12]).RequestToSpeakStates.ON_STAGE;
  }
  if (tmp11) {
    const intl2 = tmp2(tmp3[17]).intl;
    const string2 = intl2.string;
    const t2 = tmp2(tmp3[17]).t;
    if (stateFromStores1) {
      let string2Result = string2(t2["639hQT"]);
    } else {
      string2Result = string2(t2.LxhEuG);
    }
    const obj8 = { label: string2Result, icon: null, onPress: null };
    if (stateFromStores1) {
      let SoundboardIcon = tmp2(tmp3[20]).SoundboardSlashIcon;
    } else {
      SoundboardIcon = tmp2(tmp3[21]).SoundboardIcon;
    }
    obj8.icon = SoundboardIcon;
    obj8.onPress = function onPress() {
      trackUserProfileAction({ action: "MUTE_SOUNDBOARD" });
      const rTCConnection = RTCConnectionStore.getRTCConnection();
      const obj = {
        guild_id: channel.guild_id,
        target_user_id: user.id,
        media_session_id: null,
        parent_media_session_id: null,
        mute_soundboard: null,
      };
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
    items3.push(closure_11(tmp2(tmp3[16]).UserProfileFormRow, obj8, "mute-soundboard"));
    if (supportsDisableLocalVideo) {
      const intl3 = tmp2(tmp3[17]).intl;
      const string3 = intl3.string;
      const t3 = tmp2(tmp3[17]).t;
      if (isLocalVideoDisabled) {
        let string3Result = string3(t3["xc+Psz"]);
      } else {
        string3Result = string3(t3["4MMsWF"]);
      }
      const obj9 = { label: string3Result, icon: null, sublabel: null, onPress: null };
      if (isLocalVideoDisabled) {
        let VideoIcon = tmp2(tmp3[23]).VideoSlashIcon;
      } else {
        VideoIcon = tmp2(tmp3[24]).VideoIcon;
      }
      obj9.icon = VideoIcon;
      if (isLocalVideoAutoDisabled) {
        const obj10 = { style: tmp.disableVideoSublabel, children: null };
        const items4 = [closure_11(tmp2(tmp3[25]).CircleErrorIcon, { size: "xxs", color: "text-feedback-warning" })];
        const obj11 = { variant: "text-xs/medium", color: "text-feedback-warning", children: null };
        const intl4 = tmp2(tmp3[17]).intl;
        obj11.children = intl4.string(tmp2(tmp3[17]).t.m2Hyj0);
        items4[1] = closure_11(tmp2(tmp3[26]).Text, obj11);
        obj10.children = items4;
        isLocalVideoAutoDisabled = closure_12(isLocalVideoDisabled, obj10);
      }
      obj9.sublabel = isLocalVideoAutoDisabled;
      obj9.onPress = function onPress() {
        trackUserProfileAction({ action: "DISABLE_VIDEO" });
        if (isLocalVideoAutoDisabled) {
          const result = UserProfileAlertUtils.confirmVideoUnstableConnection(() =>
            channel(trackUserProfileAction[15]).setDisableLocalVideo(id.id, constants.MANUAL_ENABLED),
          );
        } else {
          AudioActionCreatorsDefault.setDisableLocalVideo(
            user.id,
            isLocalVideoDisabled ? React7.MANUAL_ENABLED : React7.DISABLED,
          );
        }
      };
      items3.push(closure_11(tmp2(tmp3[16]).UserProfileFormRow, obj9, "disable-video"));
    }
    if (isSecureFramesUIEnabled) {
      const obj12 = { label: null, icon: null, hint: null, onPress: null };
      const intl5 = tmp2(tmp3[17]).intl;
      obj12.label = intl5.string(tmp2(tmp3[17]).t["8ErYvY"]);
      obj12.icon = tmp2(tmp3[28]).ShieldLockIcon;
      obj12.hint = tmp2(tmp3[29]).FormArrow;
      obj12.onPress = function onPress() {
        trackUserProfileAction({ action: "VIEW_SECURE_FRAMES_VERIFICATION_CODE" });
        ActionSheetActionCreatorsDefault.hideActionSheet();
        const result = SecureFramesPlatformUtilsDefault.openSecureFramesUserVerificationModal(user.id, channel.id, () =>
          user(trackUserProfileAction[32]).validateSecureFramesKeyConsistent({
            userId: id.id,
            channelId: channel.id,
            guildId: channel.guild_id,
          }),
        );
      };
      items3.push(closure_11(tmp2(tmp3[16]).UserProfileFormRow, obj12, "view-secure-frames-verification-code"));
    }
    let tmp10Result = null;
    if (0 !== items3.length) {
      const obj13 = { style: null, title: null, titleStyle: null, children: null };
      const items5 = [tmp.card, user.style];
      obj13.style = items5;
      const intl6 = tmp2(tmp3[17]).intl;
      obj13.title = intl6.string(tmp2(tmp3[17]).t.dsXapM);
      obj13.titleStyle = tmp.cardTitle;
      const obj14 = { children: items3 };
      obj13.children = closure_11(tmp2(tmp3[16]).UserProfileCardRows, obj14);
      tmp10Result = closure_11(tmp6(tmp3[16]), obj13);
      const tmp6Result = tmp6(tmp3[16]);
    }
    return tmp10Result;
  } else {
    const intl = tmp2(tmp3[17]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[17]).t;
    if (isLocalMute) {
      let stringResult = string(t.NHJxcg);
    } else {
      stringResult = string(t.sWmtI6);
    }
    const obj15 = { label: stringResult, icon: null, onPress: null };
    if (isLocalMute) {
      let MicrophoneIcon = tmp2(tmp3[18]).MicrophoneSlashIcon;
    } else {
      MicrophoneIcon = tmp2(tmp3[19]).MicrophoneIcon;
    }
    obj15.icon = MicrophoneIcon;
    obj15.onPress = function onPress() {
      trackUserProfileAction({ action: "MUTE" });
      AudioActionCreatorsDefault.toggleLocalMute(user.id);
    };
    items3.push(closure_11(tmp2(tmp3[16]).UserProfileFormRow, obj15, "mute"));
  }
  const obj5 = user(trackUserProfileAction[13]);
  const obj6 = { channelId: channel.id };
  const obj7 = {
    style: tmp.volumeSlider,
    value: localVolume,
    onValueChange(arg0) {
      trackUserProfileAction({ action: "SET_VOLUME" });
      AudioActionCreatorsDefault.setLocalVolume(user.id, arg0);
    },
  };
}
function CurrentUserVoiceSettings(channel) {
  channel = channel.channel;
  ({ user, style } = channel);
  const tmp = closure_13();
  let tmp9Result = dependencyMap;
  const trackUserProfileAction = channel(8753).useUserProfileAnalyticsContext().trackUserProfileAction;
  const obj = channel(8753);
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
    const intl = tmp2(1114).intl;
    obj4.title = intl.string(tmp2(1114).t.NiTd0e);
    obj4.titleStyle = tmp.cardTitle;
    const intl2 = tmp2(1114).intl;
    const string = intl2.string;
    const t = tmp2(1114).t;
    if (stateFromStores) {
      let stringResult = string(t.NHJxcg);
    } else {
      stringResult = string(t.sWmtI6);
    }
    const obj5 = { label: stringResult, icon: null, onPress: null };
    if (stateFromStores) {
      let MicrophoneIcon = tmp2(9223).MicrophoneSlashIcon;
    } else {
      MicrophoneIcon = tmp2(11933).MicrophoneIcon;
    }
    const obj6 = { children: null };
    obj5.icon = MicrophoneIcon;
    obj5.onPress = function onPress() {
      trackUserProfileAction({ action: "MUTE" });
      AudioActionCreatorsDefault.toggleSelfMute();
    };
    obj6.children = closure_11(tmp2(7370).UserProfileFormRow, obj5, "mute");
    tmp9Result = closure_11(tmp2(7370).UserProfileCardRows, obj6);
    obj4.children = tmp9Result;
    closure_11(trackUserProfileAction(7370), obj4);
    const tmp6Result = trackUserProfileAction(7370);
  }
  return tmp8;
}
const View = fn(17).View;
const Constants = fn(1072);
({ AnalyticEvents: closure_8, VideoToggleState: closure_9 } = Constants);
const Permissions = fn(1083).Permissions;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5009);
let closure_13 = createStyles.createStyles({
  card: { paddingBottom: 0 },
  cardTitle: { marginBottom: 0 },
  volumeSlider: { paddingVertical: 20 },
  disableVideoSublabel: { flexDirection: "row", alignItems: "center", gap: 4 },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileVoiceSettings.tsx");

export default function UserProfileVoiceSettings(arg0) {
  ({ user, currentUser, channel, style } = arg0);
  if (user.id === currentUser.id) {
    const obj2 = { user: currentUser, channel, style };
    let tmp3 = closure_1_11(CurrentUserVoiceSettings, obj2);
  } else {
    const obj = { user, channel, style };
    tmp3 = closure_1_11(UserVoiceSettings, obj);
  }
  return tmp3;
}
