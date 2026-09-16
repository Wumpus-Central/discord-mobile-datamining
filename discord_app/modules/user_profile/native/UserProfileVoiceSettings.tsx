// discord_app/modules/user_profile/native/UserProfileVoiceSettings.tsx
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import AudioActionCreatorsDefault from "../../../actions/AudioActionCreators.tsx";
import SecureFramesPlatformUtilsDefault from "../../rtc/SecureFramesPlatformUtils.native.tsx";
import UserProfileAlertUtils from "UserProfileAlertUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import SoundboardStore from "../../soundboard/SoundboardStore.tsx";
import MediaEngineStore from "../../../stores/MediaEngineStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";

require = fn;
function UserVoiceSettings(user) {
  user = user.user;
  const channel = user.channel;
  let trackUserProfileAction;
  isLocalVideoDisabled = undefined;
  const tmp = closure_11();
  trackUserProfileAction = user(trackUserProfileAction[9]).useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj = user(trackUserProfileAction[9]);
  const items = [MediaEngineStore];
  const stateFromStoresObject = user(trackUserProfileAction[10]).useStateFromStoresObject(items, () => ({
    localVolume: MediaEngineStore.getLocalVolume(user.id),
    isLocalMute: MediaEngineStore.isLocalMute(user.id),
    isLocalVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id),
    isLocalVideoAutoDisabled: MediaEngineStore.isLocalVideoAutoDisabled(user.id),
    supportsDisableLocalVideo: MediaEngineStore.supportsDisableLocalVideo(),
  }));
  ({ isLocalMute, isLocalVideoDisabled } = stateFromStoresObject);
  let isLocalVideoAutoDisabled = stateFromStoresObject.isLocalVideoAutoDisabled;
  ({ localVolume, supportsDisableLocalVideo } = stateFromStoresObject);
  let obj2 = user(trackUserProfileAction[10]);
  const items1 = [PermissionStore];
  const stateFromStores = user(trackUserProfileAction[10]).useStateFromStores(items1, () => {
    let isPrivateResult = channel.isPrivate();
    if (!isPrivateResult) {
      isPrivateResult = PermissionStore.can(Permissions.SPEAK, channel);
    }
    return isPrivateResult;
  });
  const obj3 = user(trackUserProfileAction[10]);
  const tmp6 = channel;
  const tmp7 = channel(trackUserProfileAction[11])(user.id, channel.id);
  const items2 = [isLocalVideoAutoDisabled];
  const stateFromStores1 = user(trackUserProfileAction[10]).useStateFromStores(items2, () =>
    SoundboardStore.isLocalSoundboardMuted(user.id),
  );
  const obj4 = user(trackUserProfileAction[10]);
  const isSecureFramesUIEnabled = user(trackUserProfileAction[12]).useIsSecureFramesUIEnabled({
    channelId: channel.id,
  });
  const items3 = [
    closure_9(
      channel(trackUserProfileAction[13]),
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
    tmp11 = channel.isGuildStageVoice() && tmp7 !== tmp2(tmp3[11]).RequestToSpeakStates.ON_STAGE;
    const tmp12 = channel.isGuildStageVoice() && tmp7 !== tmp2(tmp3[11]).RequestToSpeakStates.ON_STAGE;
  }
  if (tmp11) {
    const intl2 = tmp2(tmp3[16]).intl;
    const string2 = intl2.string;
    const t2 = tmp2(tmp3[16]).t;
    if (stateFromStores1) {
      let string2Result = string2(t2["639hQT"]);
    } else {
      string2Result = string2(t2.LxhEuG);
    }
    const obj8 = { label: string2Result, icon: null, onPress: null };
    if (stateFromStores1) {
      let SoundboardIcon = tmp2(tmp3[19]).SoundboardSlashIcon;
    } else {
      SoundboardIcon = tmp2(tmp3[20]).SoundboardIcon;
    }
    obj8.icon = SoundboardIcon;
    obj8.onPress = function onPress() {
      trackUserProfileAction({ action: "MUTE_SOUNDBOARD" });
      const result = AudioActionCreatorsDefault.toggleLocalSoundboardMute(user.id);
    };
    items3.push(closure_9(tmp2(tmp3[15]).UserProfileFormRow, obj8, "mute-soundboard"));
    if (supportsDisableLocalVideo) {
      const intl3 = tmp2(tmp3[16]).intl;
      const string3 = intl3.string;
      const t3 = tmp2(tmp3[16]).t;
      if (isLocalVideoDisabled) {
        let string3Result = string3(t3["xc+Psz"]);
      } else {
        string3Result = string3(t3["4MMsWF"]);
      }
      const obj9 = { label: string3Result, icon: null, sublabel: null, onPress: null };
      if (isLocalVideoDisabled) {
        let VideoIcon = tmp2(tmp3[21]).VideoSlashIcon;
      } else {
        VideoIcon = tmp2(tmp3[22]).VideoIcon;
      }
      obj9.icon = VideoIcon;
      if (isLocalVideoAutoDisabled) {
        const obj10 = { style: tmp.disableVideoSublabel, children: null };
        const items4 = [closure_9(tmp2(tmp3[23]).CircleErrorIcon, { size: "xxs", color: "text-feedback-warning" })];
        const obj11 = { variant: "text-xs/medium", color: "text-feedback-warning", children: null };
        const intl4 = tmp2(tmp3[16]).intl;
        obj11.children = intl4.string(tmp2(tmp3[16]).t.m2Hyj0);
        items4[1] = closure_9(tmp2(tmp3[24]).Text, obj11);
        obj10.children = items4;
        isLocalVideoAutoDisabled = closure_10(isLocalVideoDisabled, obj10);
      }
      obj9.sublabel = isLocalVideoAutoDisabled;
      obj9.onPress = function onPress() {
        trackUserProfileAction({ action: "DISABLE_VIDEO" });
        if (isLocalVideoAutoDisabled) {
          const result = UserProfileAlertUtils.confirmVideoUnstableConnection(() =>
            channel(trackUserProfileAction[14]).setDisableLocalVideo(id.id, constants.MANUAL_ENABLED),
          );
        } else {
          AudioActionCreatorsDefault.setDisableLocalVideo(
            user.id,
            isLocalVideoDisabled ? VideoToggleState.MANUAL_ENABLED : VideoToggleState.DISABLED,
          );
        }
      };
      items3.push(closure_9(tmp2(tmp3[15]).UserProfileFormRow, obj9, "disable-video"));
    }
    if (isSecureFramesUIEnabled) {
      const obj12 = { label: null, icon: null, hint: null, onPress: null };
      const intl5 = tmp2(tmp3[16]).intl;
      obj12.label = intl5.string(tmp2(tmp3[16]).t["8ErYvY"]);
      obj12.icon = tmp2(tmp3[26]).ShieldLockIcon;
      obj12.hint = tmp2(tmp3[27]).FormArrow;
      obj12.onPress = function onPress() {
        trackUserProfileAction({ action: "VIEW_SECURE_FRAMES_VERIFICATION_CODE" });
        ActionSheetActionCreatorsDefault.hideActionSheet();
        const result = SecureFramesPlatformUtilsDefault.openSecureFramesUserVerificationModal(user.id, channel.id, () =>
          user(trackUserProfileAction[30]).validateSecureFramesKeyConsistent({
            userId: id.id,
            channelId: channel.id,
            guildId: channel.guild_id,
          }),
        );
      };
      items3.push(closure_9(tmp2(tmp3[15]).UserProfileFormRow, obj12, "view-secure-frames-verification-code"));
    }
    let tmp10Result = null;
    if (0 !== items3.length) {
      const obj13 = { style: null, title: null, titleStyle: null, children: null };
      const items5 = [tmp.card, user.style];
      obj13.style = items5;
      const intl6 = tmp2(tmp3[16]).intl;
      obj13.title = intl6.string(tmp2(tmp3[16]).t.NiTd0e);
      obj13.titleStyle = tmp.cardTitle;
      const obj14 = { children: items3 };
      obj13.children = closure_9(tmp2(tmp3[15]).UserProfileCardRows, obj14);
      tmp10Result = closure_9(tmp6(tmp3[15]), obj13);
      const tmp6Result = tmp6(tmp3[15]);
    }
    return tmp10Result;
  } else {
    const intl = tmp2(tmp3[16]).intl;
    const string = intl.string;
    const t = tmp2(tmp3[16]).t;
    if (isLocalMute) {
      let stringResult = string(t.NHJxcg);
    } else {
      stringResult = string(t.sWmtI6);
    }
    const obj15 = { label: stringResult, icon: null, onPress: null };
    if (isLocalMute) {
      let MicrophoneIcon = tmp2(tmp3[17]).MicrophoneSlashIcon;
    } else {
      MicrophoneIcon = tmp2(tmp3[18]).MicrophoneIcon;
    }
    obj15.icon = MicrophoneIcon;
    obj15.onPress = function onPress() {
      trackUserProfileAction({ action: "MUTE" });
      AudioActionCreatorsDefault.toggleLocalMute(user.id);
    };
    items3.push(closure_9(tmp2(tmp3[15]).UserProfileFormRow, obj15, "mute"));
  }
  const obj5 = user(trackUserProfileAction[12]);
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
  const tmp = closure_11();
  let tmp9Result = dependencyMap;
  const trackUserProfileAction = channel(8319).useUserProfileAnalyticsContext().trackUserProfileAction;
  const obj = channel(8319);
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
    const intl = tmp2(1115).intl;
    obj4.title = intl.string(tmp2(1115).t.NiTd0e);
    obj4.titleStyle = tmp.cardTitle;
    const intl2 = tmp2(1115).intl;
    const string = intl2.string;
    const t = tmp2(1115).t;
    if (stateFromStores) {
      let stringResult = string(t.NHJxcg);
    } else {
      stringResult = string(t.sWmtI6);
    }
    const obj5 = { label: stringResult, icon: null, onPress: null };
    if (stateFromStores) {
      let MicrophoneIcon = tmp2(9270).MicrophoneSlashIcon;
    } else {
      MicrophoneIcon = tmp2(10144).MicrophoneIcon;
    }
    const obj6 = { children: null };
    obj5.icon = MicrophoneIcon;
    obj5.onPress = function onPress() {
      trackUserProfileAction({ action: "MUTE" });
      AudioActionCreatorsDefault.toggleSelfMute();
    };
    obj6.children = closure_9(tmp2(7317).UserProfileFormRow, obj5, "mute");
    tmp9Result = closure_9(tmp2(7317).UserProfileCardRows, obj6);
    obj4.children = tmp9Result;
    closure_9(trackUserProfileAction(7317), obj4);
    const tmp6Result = trackUserProfileAction(7317);
  }
  return tmp8;
}
const View = fn(17).View;
const VideoToggleState = fn(1074).VideoToggleState;
const Permissions = fn(1085).Permissions;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4638);
let closure_11 = createStyles.createStyles({
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
    let tmp3 = React7(CurrentUserVoiceSettings, obj2);
  } else {
    const obj = { user, channel, style };
    tmp3 = React7(UserVoiceSettings, obj);
  }
  return tmp3;
}
