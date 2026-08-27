// === Module 12388: UserVoiceSettings ===

// Module 12388 (UserVoiceSettings)
import noopAll from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "handleSoundCreateOrUpdate" /* 4917 */;
import closure_5 from "_detectH265HardwareDecode" /* 4496 */;
import closure_6 from "getUncachedChannelPermissions" /* 4089 */;
import { VideoToggleState } from "ME" /* 676 */;
import { Permissions } from "sum" /* 505 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
function UserVoiceSettings(user) {
  user = user.user;
  const channel = user.channel;
  let trackUserProfileAction;
  isLocalVideoDisabled = undefined;
  let isLocalVideoAutoDisabled;
  const tmp = callback3();
  let obj = user(trackUserProfileAction[9]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  obj1 = user(trackUserProfileAction[10]);
  const items = [closure_5];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => ({ localVolume: closure_1_5.getLocalVolume(user.id), isLocalMute: closure_1_5.isLocalMute(user.id), isLocalVideoDisabled: closure_1_5.isLocalVideoDisabled(user.id), isLocalVideoAutoDisabled: closure_1_5.isLocalVideoAutoDisabled(user.id), supportsDisableLocalVideo: closure_1_5.supportsDisableLocalVideo() }));
  ({ isLocalMute, isLocalVideoDisabled } = stateFromStoresObject);
  isLocalVideoAutoDisabled = stateFromStoresObject.isLocalVideoAutoDisabled;
  ({ localVolume, supportsDisableLocalVideo } = stateFromStoresObject);
  let obj2 = user(trackUserProfileAction[10]);
  const items1 = [closure_6];
  const stateFromStores = obj2.useStateFromStores(items1, () => {
    let isPrivateResult = channel.isPrivate();
    if (!isPrivateResult) {
      isPrivateResult = closure_1_6.can(closure_1_8.SPEAK, channel);
    }
    return isPrivateResult;
  });
  let obj3 = user(trackUserProfileAction[10]);
  const items2 = [isLocalVideoAutoDisabled];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => isLocalVideoAutoDisabled.isLocalSoundboardMuted(user.id));
  let obj4 = user(trackUserProfileAction[12]);
  obj = { channelId: channel.id };
  const isSecureFramesUIEnabled = obj4.useIsSecureFramesUIEnabled(obj);
  obj = {
    style: tmp.volumeSlider,
    value: localVolume,
    onValueChange(arg0) {
      trackUserProfileAction({ action: "SET_VOLUME" });
      channel(trackUserProfileAction[14]).setLocalVolume(user.id, arg0);
    }
  };
  const items3 = [callback(channel(trackUserProfileAction[13]), obj, "set-volume")];
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
    obj1 = { label: null, icon: null, onPress: null };
    obj1[0] = string2Result;
    if (stateFromStores1) {
      let SoundboardIcon = tmp2(tmp3[19]).SoundboardSlashIcon;
    } else {
      SoundboardIcon = tmp2(tmp3[20]).SoundboardIcon;
    }
    obj1[1] = SoundboardIcon;
    obj1[2] = function onPress() {
      trackUserProfileAction({ action: "MUTE_SOUNDBOARD" });
      const result = channel(trackUserProfileAction[14]).toggleLocalSoundboardMute(user.id);
    };
    items3.push(tmp10(tmp2(tmp3[15]).UserProfileFormRow, obj1, "mute-soundboard"));
    if (supportsDisableLocalVideo) {
      const intl3 = tmp2(tmp3[16]).intl;
      const string3 = intl3.string;
      const t3 = tmp2(tmp3[16]).t;
      if (isLocalVideoDisabled) {
        let string3Result = string3(t3["xc+Psz"]);
      } else {
        string3Result = string3(t3["4MMsWF"]);
      }
      obj2 = { label: null, icon: null, sublabel: null, onPress: null };
      obj2[0] = string3Result;
      if (isLocalVideoDisabled) {
        let VideoIcon = tmp2(tmp3[21]).VideoSlashIcon;
      } else {
        VideoIcon = tmp2(tmp3[22]).VideoIcon;
      }
      obj2[1] = VideoIcon;
      if (isLocalVideoAutoDisabled) {
        obj3 = { style: null, children: null };
        obj3[0] = tmp.disableVideoSublabel;
        const items4 = [tmp10(tmp2(tmp3[23]).CircleErrorIcon, { size: "xxs", color: "text-feedback-warning" }), ];
        obj4 = { variant: "text-xs/medium", color: "text-feedback-warning", children: null };
        const intl4 = tmp2(tmp3[16]).intl;
        obj4[2] = intl4.string(tmp2(tmp3[16]).t.m2Hyj0);
        items4[1] = tmp10(tmp2(tmp3[24]).Text, obj4);
        obj3[1] = items4;
        isLocalVideoAutoDisabled = callback2(isLocalVideoDisabled, obj3);
      }
      obj2[2] = isLocalVideoAutoDisabled;
      obj2[3] = function onPress() {
        trackUserProfileAction({ action: "DISABLE_VIDEO" });
        if (isLocalVideoAutoDisabled) {
          const result = user(trackUserProfileAction[25]).confirmVideoUnstableConnection(() => closure_1_1(closure_1_2[14]).setDisableLocalVideo(id.id, closure_1_7.MANUAL_ENABLED));
          const obj2 = user(trackUserProfileAction[25]);
        } else {
          channel(trackUserProfileAction[14]).setDisableLocalVideo(user.id, isLocalVideoDisabled ? closure_1_7.MANUAL_ENABLED : closure_1_7.DISABLED);
          const obj = channel(trackUserProfileAction[14]);
        }
      };
      items3.push(tmp10(tmp2(tmp3[15]).UserProfileFormRow, obj2, "disable-video"));
    }
    if (isSecureFramesUIEnabled) {
      const obj5 = { label: null, icon: null, hint: null, onPress: null };
      const intl5 = tmp2(tmp3[16]).intl;
      obj5[0] = intl5.string(tmp2(tmp3[16]).t["8ErYvY"]);
      obj5[1] = tmp2(tmp3[26]).ShieldLockIcon;
      obj5[2] = tmp2(tmp3[27]).FormArrow;
      obj5[3] = function onPress() {
        trackUserProfileAction({ action: "VIEW_SECURE_FRAMES_VERIFICATION_CODE" });
        channel(trackUserProfileAction[28]).hideActionSheet();
        let obj = channel(trackUserProfileAction[28]);
        const result = channel(trackUserProfileAction[29]).openSecureFramesUserVerificationModal(user.id, channel.id, () => {
          let obj = closure_1_0(closure_1_2[30]);
          obj = { userId: id.id, channelId: closure_1.id, guildId: closure_1.guild_id };
          return obj.validateSecureFramesKeyConsistent(obj);
        });
      };
      items3.push(tmp10(tmp2(tmp3[15]).UserProfileFormRow, obj5, "view-secure-frames-verification-code"));
    }
    let tmp10Result = null;
    if (0 !== items3.length) {
      const obj6 = { style: null, title: null, titleStyle: null, children: null };
      const items5 = [tmp.card, user.style];
      obj6[0] = items5;
      const intl6 = tmp2(tmp3[16]).intl;
      obj6[1] = intl6.string(tmp2(tmp3[16]).t.NiTd0e);
      obj6[2] = tmp.cardTitle;
      const obj7 = { children: null };
      obj7[0] = items3;
      obj6[3] = tmp10(tmp2(tmp3[15]).UserProfileCardRows, obj7);
      tmp10Result = tmp10(channel(tmp3[15]), obj6);
      const tmp6Result = channel(tmp3[15]);
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
    const obj8 = { label: null, icon: null, onPress: null };
    obj8[0] = stringResult;
    if (isLocalMute) {
      let MicrophoneIcon = tmp2(tmp3[17]).MicrophoneSlashIcon;
    } else {
      MicrophoneIcon = tmp2(tmp3[18]).MicrophoneIcon;
    }
    obj8[1] = MicrophoneIcon;
    obj8[2] = function onPress() {
      trackUserProfileAction({ action: "MUTE" });
      channel(trackUserProfileAction[14]).toggleLocalMute(user.id);
    };
    items3.push(tmp10(tmp2(tmp3[15]).UserProfileFormRow, obj8, "mute"));
  }
}
function CurrentUserVoiceSettings(channel) {
  channel = channel.channel;
  let trackUserProfileAction;
  ({ user, style } = channel);
  const tmp = callback3();
  let tmp9Result = dependencyMap;
  let obj = channel(8490);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  obj1 = channel(589);
  const items = [closure_5];
  const stateFromStores = obj1.useStateFromStores(items, () => selfMute.isSelfMute());
  const items1 = [closure_6];
  const stateFromStores1 = channel(589).useStateFromStores(items1, () => {
    let isPrivateResult = channel.isPrivate();
    if (!isPrivateResult) {
      isPrivateResult = closure_1_6.can(closure_1_8.SPEAK, channel);
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
    obj[0] = items2;
    const intl = tmp2(1236).intl;
    obj[1] = intl.string(tmp2(1236).t.NiTd0e);
    obj[2] = tmp.cardTitle;
    const intl2 = tmp2(1236).intl;
    const string = intl2.string;
    const t = tmp2(1236).t;
    if (stateFromStores) {
      let stringResult = string(t.NHJxcg);
    } else {
      stringResult = string(t.sWmtI6);
    }
    obj = { label: null, icon: null, onPress: null };
    obj[0] = stringResult;
    if (stateFromStores) {
      let MicrophoneIcon = tmp2(9737).MicrophoneSlashIcon;
    } else {
      MicrophoneIcon = tmp2(10008).MicrophoneIcon;
    }
    obj1 = { children: null };
    obj[1] = MicrophoneIcon;
    obj[2] = function onPress() {
      trackUserProfileAction({ action: "MUTE" });
      trackUserProfileAction(closure_1_2[14]).toggleSelfMute();
    };
    obj1[0] = closure_9(tmp2(5952).UserProfileFormRow, obj, "mute");
    tmp9Result = tmp9(tmp2(5952).UserProfileCardRows, obj1);
    obj[3] = tmp9Result;
    tmp9Result = tmp9(trackUserProfileAction(5952), obj);
    const tmp6Result = trackUserProfileAction(5952);
  }
  return tmp8;
}
noopAll;
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles({ card: { paddingBottom: 0 }, cardTitle: { marginBottom: 0 }, volumeSlider: { paddingVertical: 20 }, disableVideoSublabel: { flexDirection: "row", alignItems: "center", gap: 4 } });
let result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileVoiceSettings.tsx");

export default function UserProfileVoiceSettings(arg0) {
  ({ user, currentUser, channel, style } = arg0);
  if (user.id === currentUser.id) {
    let obj = { user: null, channel: null, style: null };
    obj[0] = currentUser;
    obj[1] = channel;
    obj[2] = style;
    let tmp3 = callback(CurrentUserVoiceSettings, obj);
  } else {
    obj = { user: null, channel: null, style: null };
    obj[0] = user;
    obj[1] = channel;
    obj[2] = style;
    tmp3 = callback(UserVoiceSettings, obj);
  }
  return tmp3;
};