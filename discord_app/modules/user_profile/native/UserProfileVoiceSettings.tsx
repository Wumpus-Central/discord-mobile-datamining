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
  let obj = user(trackUserProfileAction[9]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj1 = user(trackUserProfileAction[10]);
  const items = [MediaEngineStore];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => ({
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
  const stateFromStores = obj2.useStateFromStores(items1, () => {
    let isPrivateResult = channel.isPrivate();
    if (!isPrivateResult) {
      isPrivateResult = PermissionStore.can(Permissions.SPEAK, channel);
    }
    return isPrivateResult;
  });
  let obj3 = user(trackUserProfileAction[10]);
  const items2 = [isLocalVideoAutoDisabled];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => SoundboardStore.isLocalSoundboardMuted(user.id));
  let obj4 = user(trackUserProfileAction[12]);
  obj = { channelId: channel.id };
  const isSecureFramesUIEnabled = obj4.useIsSecureFramesUIEnabled(obj);
  obj = {
    style: tmp.volumeSlider,
    value: localVolume,
    onValueChange(arg0) {
      trackUserProfileAction({ action: "SET_VOLUME" });
      AudioActionCreatorsDefault.setLocalVolume(user.id, arg0);
    },
  };
  const items3 = [closure_9(channel(trackUserProfileAction[13]), obj, "set-volume")];
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
    obj1 = { label: string2Result, icon: null, onPress: null };
    if (stateFromStores1) {
      let SoundboardIcon = tmp2(tmp3[19]).SoundboardSlashIcon;
    } else {
      SoundboardIcon = tmp2(tmp3[20]).SoundboardIcon;
    }
    obj1.icon = SoundboardIcon;
    obj1.onPress = function onPress() {
      trackUserProfileAction({ action: "MUTE_SOUNDBOARD" });
      const result = AudioActionCreatorsDefault.toggleLocalSoundboardMute(user.id);
    };
    items3.push(closure_9(tmp2(tmp3[15]).UserProfileFormRow, obj1, "mute-soundboard"));
    if (supportsDisableLocalVideo) {
      const intl3 = tmp2(tmp3[16]).intl;
      const string3 = intl3.string;
      const t3 = tmp2(tmp3[16]).t;
      if (isLocalVideoDisabled) {
        let string3Result = string3(t3["xc+Psz"]);
      } else {
        string3Result = string3(t3["4MMsWF"]);
      }
      obj2 = { label: string3Result, icon: null, sublabel: null, onPress: null };
      if (isLocalVideoDisabled) {
        let VideoIcon = tmp2(tmp3[21]).VideoSlashIcon;
      } else {
        VideoIcon = tmp2(tmp3[22]).VideoIcon;
      }
      obj2.icon = VideoIcon;
      if (isLocalVideoAutoDisabled) {
        obj3 = { style: tmp.disableVideoSublabel, children: null };
        const items4 = [closure_9(tmp2(tmp3[23]).CircleErrorIcon, { size: "xxs", color: "text-feedback-warning" })];
        obj4 = { variant: "text-xs/medium", color: "text-feedback-warning", children: null };
        const intl4 = tmp2(tmp3[16]).intl;
        obj4.children = intl4.string(tmp2(tmp3[16]).t.m2Hyj0);
        items4[1] = closure_9(tmp2(tmp3[24]).Text, obj4);
        obj3.children = items4;
        isLocalVideoAutoDisabled = closure_10(isLocalVideoDisabled, obj3);
      }
      obj2.sublabel = isLocalVideoAutoDisabled;
      obj2.onPress = function onPress() {
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
      items3.push(closure_9(tmp2(tmp3[15]).UserProfileFormRow, obj2, "disable-video"));
    }
    if (isSecureFramesUIEnabled) {
      const obj5 = { label: null, icon: null, hint: null, onPress: null };
      const intl5 = tmp2(tmp3[16]).intl;
      obj5.label = intl5.string(tmp2(tmp3[16]).t["8ErYvY"]);
      obj5.icon = tmp2(tmp3[26]).ShieldLockIcon;
      obj5.hint = tmp2(tmp3[27]).FormArrow;
      obj5.onPress = function onPress() {
        trackUserProfileAction({ action: "VIEW_SECURE_FRAMES_VERIFICATION_CODE" });
        ActionSheetActionCreatorsDefault.hideActionSheet();
        const result = SecureFramesPlatformUtilsDefault.openSecureFramesUserVerificationModal(
          user.id,
          channel.id,
          () => {
            user(trackUserProfileAction[30]);
            const obj = { userId: id.id, channelId: channel.id, guildId: channel.guild_id };
            return obj.validateSecureFramesKeyConsistent(obj);
          },
        );
      };
      items3.push(closure_9(tmp2(tmp3[15]).UserProfileFormRow, obj5, "view-secure-frames-verification-code"));
    }
    let tmp10Result = null;
    if (0 !== items3.length) {
      const obj6 = { style: null, title: null, titleStyle: null, children: null };
      const items5 = [tmp.card, user.style];
      obj6.style = items5;
      const intl6 = tmp2(tmp3[16]).intl;
      obj6.title = intl6.string(tmp2(tmp3[16]).t.NiTd0e);
      obj6.titleStyle = tmp.cardTitle;
      const obj7 = { children: items3 };
      obj6.children = closure_9(tmp2(tmp3[15]).UserProfileCardRows, obj7);
      tmp10Result = closure_9(tmp6(tmp3[15]), obj6);
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
    const obj8 = { label: stringResult, icon: null, onPress: null };
    if (isLocalMute) {
      let MicrophoneIcon = tmp2(tmp3[17]).MicrophoneSlashIcon;
    } else {
      MicrophoneIcon = tmp2(tmp3[18]).MicrophoneIcon;
    }
    obj8.icon = MicrophoneIcon;
    obj8.onPress = function onPress() {
      trackUserProfileAction({ action: "MUTE" });
      AudioActionCreatorsDefault.toggleLocalMute(user.id);
    };
    items3.push(closure_9(tmp2(tmp3[15]).UserProfileFormRow, obj8, "mute"));
  }
  tmp6 = channel;
  tmp7 = channel(trackUserProfileAction[11])(user.id, channel.id);
}
function CurrentUserVoiceSettings(channel) {
  channel = channel.channel;
  ({ user, style } = channel);
  const tmp = closure_11();
  let tmp9Result = dependencyMap;
  let obj = channel(8190);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj1 = channel(504);
  const items = [MediaEngineStore];
  const stateFromStores = obj1.useStateFromStores(items, () => selfMute.isSelfMute());
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
    obj = { style: null, title: null, titleStyle: null, children: null };
    const items2 = [tmp.card, style];
    obj.style = items2;
    const intl = tmp2(1114).intl;
    obj.title = intl.string(tmp2(1114).t.NiTd0e);
    obj.titleStyle = tmp.cardTitle;
    const intl2 = tmp2(1114).intl;
    const string = intl2.string;
    const t = tmp2(1114).t;
    if (stateFromStores) {
      let stringResult = string(t.NHJxcg);
    } else {
      stringResult = string(t.sWmtI6);
    }
    obj = { label: stringResult, icon: null, onPress: null };
    if (stateFromStores) {
      let MicrophoneIcon = tmp2(9127).MicrophoneSlashIcon;
    } else {
      MicrophoneIcon = tmp2(10005).MicrophoneIcon;
    }
    obj1 = { children: null };
    obj.icon = MicrophoneIcon;
    obj.onPress = function onPress() {
      trackUserProfileAction({ action: "MUTE" });
      AudioActionCreatorsDefault.toggleSelfMute();
    };
    obj1.children = closure_9(tmp2(7207).UserProfileFormRow, obj, "mute");
    tmp9Result = closure_9(tmp2(7207).UserProfileCardRows, obj1);
    obj.children = tmp9Result;
    tmp9Result = closure_9(trackUserProfileAction(7207), obj);
    const tmp6Result = trackUserProfileAction(7207);
  }
  return tmp8;
}
const View = fn(17).View;
const VideoToggleState = fn(1074).VideoToggleState;
const Permissions = fn(1085).Permissions;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
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
    let obj = { user: currentUser, channel, style };
    let tmp3 = React7(CurrentUserVoiceSettings, obj);
  } else {
    obj = { user, channel, style };
    tmp3 = React7(UserVoiceSettings, obj);
  }
  return tmp3;
}
