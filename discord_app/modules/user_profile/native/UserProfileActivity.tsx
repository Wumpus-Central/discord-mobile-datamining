// discord_app/modules/user_profile/native/UserProfileActivity.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import StreamActionCreators from "../../../actions/StreamActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import PrivateChannelCallUtils from "../../../utils/native/PrivateChannelCallUtils.tsx";
import SelectedChannelActionCreatorsDefault from "../../../actions/SelectedChannelActionCreators.tsx";
import transitionToGuild from "../../routing/transitionToGuild.native.tsx";
import isEmbeddedActivityDefault from "../../activities/utils/isEmbeddedActivity.tsx";
import MaskedLinkUtils from "../../../utils/MaskedLinkUtils.tsx";
import closeVoicePanelsDefault from "../../voice_panel/native/utils/closeVoicePanels.tsx";
import UserActivitySpotify from "../../now_playing/native/UserActivitySpotify.tsx";
import UserProfileActivityButtons from "UserProfileActivityButtons.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import ApplicationStreamingStore from "../../../stores/ApplicationStreamingStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import PresenceStore from "../../../stores/PresenceStore.tsx";
import SelfPresenceStore from "../../../stores/SelfPresenceStore.tsx";
import VoiceStateStore from "../../../stores/VoiceStateStore.tsx";
import UserProfileStore from "../UserProfileStore.tsx";

require = fn;
function ActivityCardText(children) {
  const merged = Object.assign(children, Object.assign({ children: 0 }));
  let trimmed = str;
  if (typeof children.children === "string") {
    trimmed = str.trim();
  }
  let tmp3 = null;
  if (null != trimmed) {
    tmp3 = null;
    if ("" !== trimmed) {
      const obj = {};
      const merged1 = Object.assign(merged);
      obj.children = trimmed;
      tmp3 = __initData(Text_Text.Text, obj);
    }
  }
  return tmp3;
}
function MaybeLink(href) {
  href = href.href;
  const children = href.children;
  let tmp = children;
  if (null != href) {
    const obj = {
      accessibilityRole: "link",
      onPress() {
        return MaskedLinkUtils.handleClick({ href });
      },
      children,
    };
    tmp = closure_21(closure_5, obj);
  }
  return tmp;
}
function ActivityCardBody(user) {
  user = user.user;
  const activity = user.activity;
  const onAction = user.onAction;
  const tmp = closure_24();
  let IM4J4e = user;
  const imageForActivity = user(onAction[20]).useImageForActivity(
    activity,
    user.application,
    "user_profile_activity_native",
  );
  ({ largeImage, smallImage } = imageForActivity);
  user(onAction[21]);
  const obj2 = { style: tmp.body, children: null };
  if (user.bot) {
    const items = [tmp8];
    const obj3 = { style: tmp.content, children: null };
    if (activity(tmp2[22])(activity)) {
      const obj4 = { variant: "text-md/semibold", children: null };
      const obj5 = {
        text: activity.details,
        activity,
        onPress() {
          return onAction({ action: "OPEN_SPOTIFY_TRACK" });
        },
      };
      obj4.children = closure_21(IM4J4e(tmp2[24]).SpotifyTrack, obj5);
      let tmp24Result = closure_21(ActivityCardText, obj4);
      let tmp29 = ActivityCardText;
      let tmp30 = closure_21;
      let tmp31 = closure_21;
    } else {
      const obj6 = { href: activity.details_url, children: null };
      if (tmp23(tmp2[30])(activity)) {
        let name = activity.name;
      } else {
        name = activity.details;
        if (name == null) {
          name = activity.name;
        }
      }
      const obj7 = { variant: "text-md/semibold", children: name };
      obj6.children = closure_21(ActivityCardText, obj7);
      tmp24Result = closure_21(MaybeLink, obj6);
      tmp29 = ActivityCardText;
      tmp30 = closure_21;
      tmp31 = closure_21;
    }
    const items1 = [tmp24Result, , ,];
    if (activity(tmp2[22])(activity)) {
      let trimmed;
      if (activity.state != null) {
        trimmed = str.trim();
      }
      let tmp30Result = null;
      if (null != trimmed) {
        tmp30Result = null;
        if ("" !== trimmed) {
          const obj8 = { variant: "text-xs/medium", lineClamp: 1, children: null };
          const obj9 = {
            artists: trimmed,
            activity,
            userId: user.id,
            onPress() {
              return onAction({ action: "OPEN_SPOTIFY_ARTIST" });
            },
          };
          obj8.children = tmp30(IM4J4e(tmp2[24]).SpotifyArtists, obj9);
          tmp30Result = tmp30(tmp29, obj8);
        }
      }
      let tmp30Result3 = tmp30Result;
    } else {
      let state = activity.details;
      let tmp33 = tmp23(tmp2[30])(activity);
      if (!tmp33) {
        tmp33 = null == activity.state;
      }
      if (!tmp33) {
        state = activity.state;
      }
      const obj10 = { href: activity.state_url, children: null };
      const obj11 = { variant: "text-xs/medium", lineClamp: 1, children: state };
      obj10.children = tmp30(tmp29, obj11);
      tmp30Result3 = tmp30(MaybeLink, obj10);
    }
    items1[1] = tmp30Result3;
    let tmp30Result4 = null;
    if (!activity(tmp2[22])(activity)) {
      tmp30Result4 = null;
      if (activity.type !== constants.WATCHING) {
        if (tmp23(tmp2[30])(activity)) {
          if (!tmp23(tmp2[31])(activity)) {
            tmp30Result4 = null;
          }
        }
        if (tmp23(tmp2[30])(activity)) {
          const party = activity.party;
          let size;
          if (party != null) {
            size = party.size;
          }
          let tmp47 = null != size;
          if (tmp47) {
            tmp47 = activity.party.size.length >= 2;
          }
          if (!tmp47) {
            const obj12 = { variant: "text-xs/medium", lineClamp: 1, children: null };
            const items2 = [activity.state, ""];
            obj12.children = items2.join(" ");
            tmp30Result4 = tmp30(tmp29, obj12);
          } else if (0 === activity.party.size[1]) {
            const intl3 = IM4J4e(tmp2[23]).intl;
            IM4J4e = IM4J4e(tmp2[23]).t.IM4J4e;
            const obj13 = { count: activity.party.size[0] };
            let formatToPlainStringResult = intl3.formatToPlainString(IM4J4e, obj13);
          } else {
            const intl2 = IM4J4e(tmp2[23]).intl;
            const obj14 = { count: activity.party.size[0], max: activity.party.size[1] };
            formatToPlainStringResult = intl2.formatToPlainString(IM4J4e(tmp2[23]).t["u//9By"], obj14);
          }
        } else {
          const assets3 = activity.assets;
          let large_url;
          if (assets3 != null) {
            large_url = assets3.large_url;
          }
          const obj15 = { href: large_url, children: null };
          const assets4 = activity.assets;
          let large_text;
          if (assets4 != null) {
            large_text = assets4.large_text;
          }
          const obj16 = { variant: "text-xs/medium", lineClamp: 1, children: large_text };
          obj15.children = tmp30(tmp29, obj16);
          tmp30Result4 = tmp30(MaybeLink, obj15);
        }
      }
    }
    items1[2] = tmp30Result4;
    const bot = user.bot;
    let tmp31Result = !bot;
    if (!bot) {
      const obj17 = { style: tmp.badges, activity };
      tmp31Result = tmp31(tmp23(tmp2[32]), obj17);
    }
    items1[3] = tmp31Result;
    obj3.children = items1;
    items[1] = closure_22(closure_7, obj3);
    obj2.children = items;
    return closure_22(closure_7, obj2);
  } else {
    if (null == largeImage) {
      if (null != largeImage) {
        const items3 = [tmp.imageContainer];
        const obj18 = { style: null, children: null };
        items3[1] = activity(tmp2[27])(activity) ? tmp.crunchyrollImageAspectRatio : tmp.imageAspectRatio;
        obj18.style = items3;
        const assets = activity.assets;
        let large_url1;
        if (assets != null) {
          large_url1 = assets.large_url;
        }
        const obj19 = { href: large_url1, children: null };
        const obj20 = { source: null, alt: null, style: null };
        const tmp12Result = activity(tmp2[25]);
        obj20.source = IM4J4e(tmp2[26]).makeSource(largeImage.src);
        obj20.alt = largeImage.alt;
        obj20.style = tmp.largeImage;
        obj19.children = closure_21(tmp12Result, obj20);
        const items4 = [closure_21(MaybeLink, obj19)];
        let tmp13Result = null != smallImage;
        if (tmp13Result) {
          const obj21 = { style: tmp.smallImageBackground, children: null };
          const assets2 = activity.assets;
          let small_url;
          if (assets2 != null) {
            small_url = assets2.small_url;
          }
          const obj22 = { href: small_url, children: null };
          const obj23 = { source: null, alt: null, style: null };
          const tmp12Result2 = tmp12(tmp2[25]);
          obj23.source = IM4J4e(tmp2[26]).makeSource(smallImage.src);
          obj23.alt = smallImage.alt;
          obj23.style = tmp.smallImage;
          obj22.children = closure_21(tmp12Result2, obj23);
          obj21.children = closure_21(MaybeLink, obj22);
          tmp13Result = closure_21(closure_7, obj21);
          const IM4J4eResult1 = IM4J4e(tmp2[26]);
        }
        items4[1] = tmp13Result;
        obj18.children = items4;
        let tmp51Result = closure_22(closure_7, obj18);
        const IM4J4eResult = IM4J4e(tmp2[26]);
      } else {
        const obj24 = { style: null, children: null };
        const items5 = [,];
        ({ imageContainer: arr7[0], imageAspectRatio: arr7[1] } = tmp);
        obj24.style = items5;
        const obj25 = { size: "custom", style: tmp.largeImage, color: null };
        const IM4J4eResult2 = IM4J4e(tmp2[29]);
        const colors = activity(tmp2[16]).colors;
        obj25.color = IM4J4e(tmp2[29]).isThemeDark(tmp5) ? colors.WHITE : colors.BLACK;
        obj24.children = closure_21(IM4J4e(tmp2[28]).UnknownGameIcon, obj25);
        tmp51Result = closure_21(closure_7, obj24);
        const isThemeDarkResult = IM4J4e(tmp2[29]).isThemeDark(tmp5);
      }
    } else {
      let tmp10 = activity;
    }
    const obj26 = {
      accessibilityRole: "button",
      accessibilityLabel: largeImage.alt,
      accessibilityHint: null,
      onPress: null,
      children: null,
    };
    const intl = IM4J4e(tmp2[23]).intl;
    obj26.accessibilityHint = intl.string(IM4J4e(tmp2[23]).t.sjjOk2);
    obj26.onPress = function onPress() {
      onAction({ action: "OPEN_SPOTIFY_ALBUM" });
      UserActivitySpotify.openAlbum(activity, user.id);
    };
    const obj27 = { style: null, children: null };
    const items6 = [,];
    ({ imageContainer: arr3[0], imageAspectRatio: arr3[1] } = tmp);
    obj27.style = items6;
    tmp10 = tmp10(tmp2[25]);
    const obj28 = { source: IM4J4e(tmp2[26]).makeSource(largeImage.src), alt: largeImage.alt, style: null };
    largeImage = tmp.largeImage;
    obj28.style = largeImage;
    obj27.children = closure_21(tmp10, obj28);
    obj26.children = closure_21(closure_7, obj27);
    tmp51Result = closure_21(closure_6, obj26);
    const IM4J4eResult3 = IM4J4e(tmp2[26]);
  }
  const obj = user(onAction[20]);
}
function ActivityCard(user) {
  user = user.user;
  ({ currentUser, activity } = user);
  const voiceChannel = user.voiceChannel;
  dependencyMap = undefined;
  closure_3 = undefined;
  const tmp = closure_24();
  let obj = dependencyMap;
  const tmp3 = activity(13145)(activity);
  const analyticsLocations = activity(7265)(activity(7285).USER_PROFILE_LIVE_ACTIVITY_CARD).analyticsLocations;
  let id;
  const tmp4 = activity(7265);
  if (voiceChannel != null) {
    id = voiceChannel.id;
  }
  const tmp5Result = activity(13151)({ display: "live", voiceChannelId: id, user, activity, analyticsLocations });
  dependencyMap = tmp5Result;
  const application_id = activity.application_id;
  const tmp5 = activity(13151);
  const tmp2Result = activity(8798);
  let PlayOnSpotifyButton = user;
  const tmp2ResultResult = tmp2Result({
    location: "User Profile Activity Card",
    applicationId: application_id,
    source: user(8809).GameProfileSources.UserProfile,
    trackEntryPointImpression: true,
    sourceUserId: user.id,
  });
  closure_3 = tmp2ResultResult;
  const items = [tmp2ResultResult];
  const callback = noop.useCallback(() => {
    if (null != closure_3) {
      tmp();
    }
  }, items);
  activity(13152)({ userId: user.id, onAction: tmp5Result });
  const obj2 = {
    location: "User Profile Activity Card",
    applicationId: application_id,
    source: user(8809).GameProfileSources.UserProfile,
    trackEntryPointImpression: true,
    sourceUserId: user.id,
  };
  const obj3 = { userId: user.id, onAction: tmp5Result };
  const items1 = [GuildStore, VoiceStateStore, ChannelStore];
  const stateFromStores = user(504).useStateFromStores(items1, () => {
    if (isEmbeddedActivityDefault(activity)) {
      let session_id;
      if (activity != null) {
        session_id = activity.session_id;
      }
      const voiceStateForSession = VoiceStateStore.getVoiceStateForSession(user.id, session_id);
      let channelId;
      if (voiceStateForSession != null) {
        channelId = voiceStateForSession.channelId;
      }
      const channel = ChannelStore.getChannel(channelId);
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      return GuildStore.getGuild(guildId);
    } else {
      return null;
    }
  });
  const obj4 = user(504);
  const items2 = [ApplicationStore];
  const stateFromStores1 = user(504).useStateFromStores(items2, () => {
    if (null != activity.application_id) {
      let application = ApplicationStore.getApplication(activity.application_id);
    } else {
      application = null;
      if (null != activity.name) {
        application = ApplicationStore.getApplicationByName(activity.name);
      }
    }
    return application;
  });
  let tmp15 = null;
  if (activity.type !== constants.CUSTOM_STATUS) {
    tmp15 = null;
    if (activity.type !== tmp14.HANG_STATUS) {
      const obj6 = { value: analyticsLocations, children: null };
      let obj7 = {
        onPress: callback,
        disabled: null == tmp2ResultResult,
        accessibilityRole: "button",
        accessibilityLabel: null,
        children: null,
      };
      const intl = PlayOnSpotifyButton(1114).intl;
      const obj8 = { gameName: activity.name };
      obj7.accessibilityLabel = intl.formatToPlainString(PlayOnSpotifyButton(1114).t["9sZWVp"], obj8);
      let obj9 = { style: null, title: null, titleStyle: null, titleIcon: null, children: null };
      const items3 = [tmp.card, user.style];
      obj9.style = items3;
      obj9.title = tmp3.text;
      obj9.titleStyle = tmp.cardTitle;
      let tmp33Result = null != tmp3.platformIcon;
      if (tmp33Result) {
        const obj10 = { style: tmp.cardTitleIcon, source: null, size: null, disableColor: true };
        const platformIcon = tmp3.platformIcon;
        let whitePNG;
        if (platformIcon != null) {
          whitePNG = platformIcon.whitePNG;
        }
        obj10.source = PlayOnSpotifyButton(1396).makeSource(whitePNG);
        obj10.size = PlayOnSpotifyButton(1176).IconSizes.SMALL_14;
        tmp33Result = closure_21(PlayOnSpotifyButton(1176).Icon, obj10);
        const PlayOnSpotifyButtonResult = PlayOnSpotifyButton(1396);
      }
      obj9.titleIcon = tmp33Result;
      const obj11 = { user, activity, application: stateFromStores1, onAction: tmp5Result };
      const items4 = [closure_21(ActivityCardBody, obj11), , ,];
      let tmp33Result5 = null;
      if (activity(13138)(activity)) {
        ({ start, end } = activity.timestamps);
        const obj12 = { start, end };
        tmp33Result5 = closure_21(activity(13153), obj12);
      }
      items4[1] = tmp33Result5;
      let tmp33Result6 = null;
      if (null != voiceChannel) {
        tmp33Result6 = null;
        if (null != stateFromStores) {
          const obj13 = {
            guild: stateFromStores,
            channel: voiceChannel,
            onAction: tmp5Result,
            style: tmp.voiceChannelDivider,
          };
          tmp33Result6 = closure_21(activity(13155), obj13);
        }
      }
      items4[2] = tmp33Result6;
      let tmp33Result7 = null;
      if (user.id !== currentUser.id) {
        if (activity(11020)(activity)) {
          PlayOnSpotifyButton = PlayOnSpotifyButton(13163).PlayOnSpotifyButton;
          obj = { activity, onAction: tmp5Result };
          tmp33Result7 = closure_21(PlayOnSpotifyButton, obj);
        } else if (activity(7841)(activity)) {
          const obj14 = { user, currentUser, activity, application: stateFromStores1, onAction: tmp5Result };
          tmp33Result7 = closure_21(PlayOnSpotifyButton(13163).JoinActivityButton, obj14);
        } else {
          if (activity(11015)(activity)) {
            let supported_platforms = activity.supported_platforms;
            const currentActivityGamePlatform = PlayOnSpotifyButton(13166).getCurrentActivityGamePlatform();
            if (supported_platforms == null) {
              supported_platforms = [];
            }
            const set = new Set(supported_platforms);
            if (set.has(currentActivityGamePlatform)) {
              if (null != activity.party) {
                let deepLinkUri;
                if (stateFromStores1 != null) {
                  deepLinkUri = stateFromStores1.deepLinkUri;
                }
                if (null != deepLinkUri) {
                  if (null != activity.session_id) {
                    if (null != stateFromStores1) {
                      const obj15 = {
                        user,
                        currentUser,
                        activity,
                        application: stateFromStores1,
                        onAction: tmp5Result,
                      };
                      tmp33Result7 = closure_21(PlayOnSpotifyButton(13163).JoinGameActivityButton, obj15);
                    }
                  }
                }
              }
            }
            const PlayOnSpotifyButtonResult1 = PlayOnSpotifyButton(13166);
          }
          if (activity(8375)(activity)) {
            const obj16 = { activity, onAction: tmp5Result };
            tmp33Result7 = closure_21(PlayOnSpotifyButton(13163).WatchActivityButton, obj16);
          } else {
            if (null != activity.buttons) {
              if (activity.buttons.length > 0) {
                const obj17 = { style: tmp.customButtons, children: null };
                const buttons = activity.buttons;
                obj17.children = buttons.map((item, index) =>
                  __initData(
                    UserProfileActivityButtons.CustomActivityButton,
                    { index, user, activity, onAction },
                    index,
                  ),
                );
                tmp33Result7 = closure_21(closure_7, obj17);
              }
            }
            tmp33Result7 = null;
            if (!activity(4677)(activity)) {
              if (!activity(13133)(activity)) {
                tmp33Result7 = null;
                if (activity(13134)(activity)) {
                  const obj18 = { type: constants3.PLAYSTATION, onAction: tmp5Result };
                  tmp33Result7 = closure_21(PlayOnSpotifyButton(13163).ConnectPlatformButton, obj18);
                }
              }
            }
            const obj19 = { type: constants3.XBOX, onAction: tmp5Result };
            tmp33Result7 = closure_21(PlayOnSpotifyButton(13163).ConnectPlatformButton, obj19);
          }
        }
      }
      items4[3] = tmp33Result7;
      obj9.children = items4;
      obj9 = closure_22(activity(7310), obj9);
      obj7.children = obj9;
      obj7 = closure_21(PlayOnSpotifyButton(5204).PressableOpacity, obj7);
      obj6.children = obj7;
      closure_21(PlayOnSpotifyButton(7265).AnalyticsLocationProvider, obj6);
      const tmp2Result2 = activity(7310);
    }
  }
  return tmp15;
}
function StreamActivityCard(user) {
  user = user.user;
  const stream = user.stream;
  const activity = user.activity;
  closure_4 = undefined;
  const tmp = closure_24();
  const items = [ChannelStore];
  const stateFromStores = user(activity[40]).useStateFromStores(items, () => ChannelStore.getChannel(stream.channelId));
  let obj = user(activity[40]);
  const items1 = [VoiceStateStore];
  const stateFromStores1 = user(activity[40]).useStateFromStores(items1, () => {
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    return VoiceStateStore.isInChannel(id);
  });
  let obj2 = user(activity[40]);
  const items2 = [GuildStore];
  const stateFromStores2 = user(activity[40]).useStateFromStores(items2, () => GuildStore.getGuild(stream.guildId));
  const obj3 = user(activity[40]);
  const items3 = [PresenceStore];
  const stateFromStores3 = user(activity[40]).useStateFromStores(items3, () =>
    PresenceStore.findActivity(user.id, (arg0) => stream(activity[30])(arg0) && !stream(activity[53])(arg0)),
  );
  const obj4 = user(activity[40]);
  const items4 = [ApplicationStreamingStore];
  const stateFromStores4 = user(activity[40]).useStateFromStores(items4, () =>
    ApplicationStreamingStore.getActiveStreamForUser(user.id, undefined),
  );
  let ownerId;
  const obj5 = user(activity[40]);
  if (stateFromStores4 != null) {
    ownerId = stateFromStores4.ownerId;
  }
  const tmp10 = stream(activity[54]);
  ({ effectiveVolume, handleVolumeChange } = stream(activity[54])(
    ownerId,
    user(activity[55]).MediaEngineContextTypes.STREAM,
  ));
  const tmp10Result = stream(activity[54])(ownerId, user(activity[55]).MediaEngineContextTypes.STREAM);
  const items5 = [ApplicationStore];
  const stateFromStores5 = user(activity[40]).useStateFromStores(items5, () => {
    let application_id;
    if (activity != null) {
      application_id = activity.application_id;
    }
    if (null != application_id) {
      let application = ApplicationStore.getApplication(activity.application_id);
    } else {
      let name;
      if (activity != null) {
        name = activity.name;
      }
      application = null;
      if (null != name) {
        application = ApplicationStore.getApplicationByName(activity.name);
      }
    }
    return application;
  });
  const tmp2Result = user(activity[40]);
  const tmp2Result2 = user(activity[56]);
  const analyticsLocations = stream(activity[34])(tmp9(tmp3[35]).USER_PROFILE_LIVE_ACTIVITY_CARD).analyticsLocations;
  let id;
  const tmp9Result = stream(activity[34]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp9Result1Result = stream(activity[36])({
    display: "live",
    voiceChannelId: id,
    user,
    stream,
    analyticsLocations,
  });
  closure_4 = tmp9Result1Result;
  stream(activity[39])({ userId: user.id, onAction: tmp9Result1Result });
  const obj6 = { userId: user.id, onAction: tmp9Result1Result };
  const tmp9Result5 = stream(activity[36]);
  const obj7 = { value: analyticsLocations, children: null };
  const obj8 = { style: null, title: null, titleStyle: null, titleIcon: null, children: null };
  const items6 = [tmp.card, user.style];
  obj8.style = items6;
  const tmp9Result6 = stream(activity[57]);
  if (null != stateFromStores3) {
    const intl2 = tmp2(tmp3[23]).intl;
    const obj9 = { name: stateFromStores3.name };
    let formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[23]).t["4CQq9Q"], obj9);
  } else {
    const intl = tmp2(tmp3[23]).intl;
    formatToPlainStringResult = intl.string(tmp2(tmp3[23]).t["Jpkr/q"]);
  }
  obj8.title = formatToPlainStringResult;
  obj8.titleStyle = tmp.cardTitle;
  obj8.titleIcon = closure_21(user(activity[43]).LiveTag, {});
  const obj10 = { style: tmp.streamPreview, children: null };
  const obj11 = {
    mode: "a",
    stream,
    disabled: !stateFromStores(tmp2Result2.useCanWatchStream(stateFromStores), 1)[0],
    onPress() {
      closure_4({ action: "PRESS_IMAGE" });
      const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(stream.channelId);
      const result = StreamActionCreators.watchStreamAndTransitionToStream(stream);
      ActionSheetActionCreatorsDefault.hideAllActionSheets();
    },
  };
  obj10.children = closure_21(user(activity[58]).VoicePanelStreamPreview, obj11);
  const items7 = [closure_21(closure_7, obj10), , , ,];
  let tmp19Result =
    null != stateFromStores4 &&
    !tmp9Result6.useConfig({ location: "UserProfileVoiceSettings" }).nonContextualStreamOutputPresent;
  if (tmp19Result) {
    const obj12 = { value: effectiveVolume, onValueChange: handleVolumeChange, accessibilityLabel: null };
    const intl3 = tmp2(tmp3[23]).intl;
    obj12.accessibilityLabel = intl3.string(tmp2(tmp3[23]).t.pEAl4b);
    tmp19Result = closure_21(tmp9(tmp3[62]), obj12, "set-stream-volume");
    const tmp9Result8 = tmp9(tmp3[62]);
  }
  items7[1] = tmp19Result;
  let tmp19Result4 = null != activity && tmp9(tmp3[31])(activity);
  if (tmp19Result4) {
    const obj13 = { user, activity, application: stateFromStores5, onAction: tmp9Result1Result };
    tmp19Result4 = closure_21(ActivityCardBody, obj13);
  }
  items7[2] = tmp19Result4;
  let tmp19Result5 = null != stateFromStores2 && null != stateFromStores;
  if (tmp19Result5) {
    const obj14 = {
      guild: stateFromStores2,
      channel: stateFromStores,
      onAction: tmp9Result1Result,
      style: tmp.voiceChannelDivider,
    };
    tmp19Result5 = closure_21(tmp9(tmp3[46]), obj14);
  }
  items7[3] = tmp19Result5;
  let tmp19Result6 = null != stateFromStores;
  if (tmp19Result6) {
    const obj15 = { channel: stateFromStores, isInChannel: stateFromStores1, onAction: tmp9Result1Result };
    tmp19Result6 = closure_21(tmp2(tmp3[47]).VoiceChannelButtons, obj15);
  }
  items7[4] = tmp19Result6;
  obj8.children = items7;
  obj7.children = closure_22(stream(activity[42]), obj8);
  return closure_21(user(activity[34]).AnalyticsLocationProvider, obj7);
}
function VoiceCallActivityCard(arg0) {
  ({ user, channel } = arg0);
  let stateFromStores;
  dependencyMap = undefined;
  ({ isInChannel, style } = arg0);
  const tmp = closure_24();
  const tmp5 = stateFromStores(4789)(channel);
  const tmp4 = stateFromStores(13156)(channel);
  const items = [GuildStore];
  stateFromStores = channel(504).useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
  let obj = channel(504);
  const items1 = [PermissionStore];
  const stateFromStores1 = channel(504).useStateFromStores(items1, () => {
    let isPrivateResult = channel.isPrivate();
    if (!isPrivateResult) {
      isPrivateResult = PermissionStore.can(constants2.CONNECT, channel);
    }
    return isPrivateResult;
  });
  let obj2 = channel(504);
  const tmp9 = stateFromStores(7265);
  ({ newestAnalyticsLocation: c2, analyticsLocations } = stateFromStores(7265)(
    stateFromStores(7285).USER_PROFILE_VOICE_ACTIVITY_CARD,
  ));
  const tmp11 = stateFromStores(13151)({
    display: "voice",
    activity: { type: "VOICE" },
    voiceChannelId: channel.id,
    user,
    analyticsLocations,
  });
  closure_3 = tmp11;
  stateFromStores(13152)({ userId: user.id, onAction: tmp11 });
  const obj5 = { style: null, title: null, titleStyle: null, children: null };
  const items2 = [tmp.card, style];
  obj5.style = items2;
  const obj3 = { display: "voice", activity: { type: "VOICE" }, voiceChannelId: channel.id, user, analyticsLocations };
  const obj4 = { userId: user.id, onAction: tmp11 };
  const tmp9Result = stateFromStores(7265)(stateFromStores(7285).USER_PROFILE_VOICE_ACTIVITY_CARD);
  if (!channel.isDM()) {
    if (!channel.isGroupDM()) {
      const intl = channel(1114).intl;
      const string = intl.string;
      const t = channel(1114).t;
      if (isGuildStageVoiceResult) {
        let stringResult = string(t.QygGCN);
      } else {
        stringResult = string(t.msxteM);
      }
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    obj5.title = stringResult;
    obj5.titleStyle = tmp.cardTitle;
    const obj6 = { style: tmp.body, children: null };
    const obj7 = { users: tmp4, guildId: null };
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    obj7.guildId = id;
    const items3 = [closure_21(tmp2(13170), obj7)];
    const obj8 = { style: tmp.voiceCallContent, children: null };
    if (stateFromStores1) {
      const obj9 = {
        accessibilityRole: "button",
        accessibilityLabel: null,
        accessibilityHint: null,
        onPress: null,
        children: null,
      };
      const obj10 = { channel };
      obj9.accessibilityLabel = tmp2(9900)(obj10);
      const intl3 = channel(1114).intl;
      obj9.accessibilityHint = intl3.string(channel(1114).t["9C444m"]);
      obj9.onPress = function onPress() {
        closure_3({ action: "OPEN_VOICE_CHANNEL" });
        ActionSheetActionCreatorsDefault.hideAllActionSheets();
        ModalActionCreatorsDefault.popAll();
        PrivateChannelCallUtils.openGuildVoiceModal(channel, c2);
      };
      const obj11 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
      const obj12 = { style: tmp.voiceCallNameIconWrapper, children: null };
      const obj13 = { channel, size: "sm", color: "mobile-text-heading-primary" };
      obj12.children = closure_21(tmp2(11023), obj13);
      const items4 = [closure_21(closure_7, obj12), tmp5];
      obj11.children = items4;
      obj9.children = closure_22(channel(4632).Text, obj11);
      let tmp13Result = closure_21(channel(5204).PressableOpacity, obj9);
    } else {
      const obj14 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
      const obj15 = { style: tmp.voiceCallNameIconWrapper, children: null };
      const obj16 = { channel, size: "sm", color: "mobile-text-heading-primary" };
      obj15.children = closure_21(tmp2(11023), obj16);
      const items5 = [closure_21(closure_7, obj15), tmp5];
      obj14.children = items5;
      tmp13Result = closure_22(channel(4632).Text, obj14);
    }
    const items6 = [tmp13Result];
    let tmp18Result2 = null;
    if (null != stateFromStores) {
      const obj17 = {
        accessibilityRole: "button",
        accessibilityHint: null,
        accessibilityLabel: null,
        onPress: null,
        children: null,
      };
      const intl4 = channel(1114).intl;
      obj17.accessibilityHint = intl4.string(channel(1114).t.KLOhbO);
      const intl5 = channel(1114).intl;
      const obj18 = { guildName: stateFromStores.name };
      obj17.accessibilityLabel = intl5.formatToPlainString(channel(1114).t["hq/Qze"], obj18);
      obj17.onPress = function onPress() {
        closure_3({ action: "OPEN_VOICE_GUILD" });
        transitionToGuild.transitionToGuild(stateFromStores.id);
        closeVoicePanelsDefault();
        ActionSheetActionCreatorsDefault.hideAllActionSheets();
      };
      const obj19 = { variant: "text-xs/medium", children: null };
      const intl6 = channel(1114).intl;
      const obj20 = { guildName: stateFromStores.name };
      obj19.children = intl6.format(channel(1114).t["hq/Qze"], obj20);
      obj17.children = closure_21(channel(4632).Text, obj19);
      tmp18Result2 = closure_21(channel(5204).PressableOpacity, obj17);
    }
    items6[1] = tmp18Result2;
    obj8.children = items6;
    items3[1] = closure_22(closure_7, obj8);
    obj6.children = items3;
    const items7 = [closure_22(closure_7, obj6)];
    const obj21 = { channel, isInChannel, onAction: tmp11 };
    items7[1] = closure_21(channel(13163).VoiceChannelButtons, obj21);
    obj5.children = items7;
    return closure_22(tmp14, obj5);
  }
  const intl2 = channel(1114).intl;
  stringResult = intl2.string(channel(1114).t["9FaEzi"]);
  tmp14 = stateFromStores(7310);
}
get_ActivityIndicator = fn(17);
({ TouchableOpacity: hasOwnProperty, TouchableWithoutFeedback: metroRequire, View: closure_7 } = get_ActivityIndicator);
const CARD_PADDING = fn(7311).CARD_PADDING;
const Constants = fn(1074);
({
  ActivityTypes: closure_17,
  Permissions: closure_18,
  PlatformTypes: closure_19,
  StatusTypes: closure_20,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = jsxProd);
const createStyles = fn(4636);
let obj2 = {
  card: { gap: 12 },
  cardTitle: { marginBottom: 0 },
  cardTitleIcon: { tintColor: nativeDefault.colors.TEXT_SUBTLE },
  body: { flexDirection: "row", alignItems: "center", gap: 16 },
  content: { flex: 1 },
  imageContainer: { position: "relative" },
  imageAspectRatio: { width: 60, maxHeight: 60, aspectRatio: "1 / 1" },
  crunchyrollImageAspectRatio: { width: 60, maxHeight: 100, aspectRatio: "2 / 3" },
  largeImage: null,
  smallImageBackground: null,
  smallImage: null,
  badges: null,
  voiceChannelDivider: null,
  customButtons: null,
  streamPreview: null,
  voiceActivityCard: null,
  voiceSettings: null,
  voiceSettingsDivider: null,
  voiceCallContent: null,
  voiceCallNameIconWrapper: null,
};
let size = { borderRadius: nativeDefault.radii.xs, width: "100%", height: "100%" };
obj2.largeImage = size;
const rect = {
  borderRadius: 16,
  position: "absolute",
  right: -4,
  bottom: -4,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj2.smallImageBackground = rect;
obj2.smallImage = { width: 24, height: 24, borderRadius: 12 };
obj2.badges = { marginTop: 4, flexDirection: "row", flexWrap: "wrap", columnGap: 8, rowGap: 0 };
let obj3 = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
obj2.voiceChannelDivider = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingTop: 12 };
obj2.customButtons = { flexDirection: "column", gap: 8 };
let obj4 = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingTop: 12 };
obj2.streamPreview = { aspectRatio: 1.7777777777777777, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
obj2.voiceActivityCard = { padding: 0 };
obj2.voiceSettings = { padding: 0, marginBottom: -16 };
let obj5 = { aspectRatio: 1.7777777777777777, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
obj2.voiceSettingsDivider = {
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
  paddingTop: 16,
  marginTop: 4,
  marginHorizontal: -CARD_PADDING,
  paddingHorizontal: CARD_PADDING,
};
obj2.voiceCallContent = { flex: 1, gap: 4 };
const PlatformUtils = fn(1363);
let num = 16;
if (PlatformUtils.isAndroid()) {
  num = 12;
}
obj2.voiceCallNameIconWrapper = { width: 22, height: num, justifyContent: "center" };
let closure_24 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivity.tsx");

export default function UserProfileActivity(guildId) {
  const user = guildId.user;
  const currentUser = guildId.currentUser;
  const style = guildId.style;
  stream = undefined;
  const tmp = closure_24();
  closure_3 = tmp;
  ({ live, stream } = currentUser(style[72])(user.id));
  const tmp5 = currentUser(style[73])({ userId: user.id, guildId: guildId.guildId });
  const voiceChannel = tmp5.voiceChannel;
  const voiceActivity = tmp5.voiceActivity;
  let obj = { userId: user.id, guildId: guildId.guildId };
  const tmp4 = currentUser(style[72])(user.id);
  const items = [VoiceStateStore];
  const stateFromStores = user(style[40]).useStateFromStores(items, () => {
    let isInChannelResult = null != voiceChannel;
    if (isInChannelResult) {
      isInChannelResult = VoiceStateStore.isInChannel(tmp.id);
    }
    return isInChannelResult;
  });
  closure_8 = user.id === currentUser.id;
  let obj2 = user(style[40]);
  const items1 = [SelfPresenceStore, PresenceStore];
  const stateFromStores1 = user(style[40]).useStateFromStores(items1, () => {
    if (closure_8) {
      let status = SelfPresenceStore.getStatus();
    } else {
      status = PresenceStore.getStatus(user.id);
    }
    return status === constants4.OFFLINE || status === constants4.INVISIBLE;
  });
  let obj3 = user(style[40]);
  const items2 = [UserProfileStore];
  const stateFromStores2 = user(style[40]).useStateFromStores(items2, () => {
    const userProfile = UserProfileStore.getUserProfile(user.id);
    let _private;
    if (userProfile != null) {
      _private = userProfile.private;
    }
    return true === _private;
  });
  if (stateFromStores1) {
    if (null != voiceChannel) {
      if (stateFromStores) {
        const obj5 = { style: null, children: null };
        const items3 = [tmp.card, style];
        obj5.style = items3;
        const obj6 = { user, currentUser, channel: voiceChannel, style: null };
        const items4 = [,];
        ({ voiceSettings: arr11[0], voiceSettingsDivider: arr11[1] } = tmp);
        obj6.style = items4;
        obj5.children = closure_21(tmp2(tmp3[74]), obj6);
        return closure_21(tmp2(tmp3[42]), obj5);
      }
    }
  }
  if (stateFromStores1) {
    return null;
  } else {
    let found = live;
    if (null != voiceActivity) {
      found = live.filter((item) => item !== voiceActivity);
    }
    let tmp12 = !stateFromStores2;
    if (!stateFromStores2) {
      tmp12 = null != voiceChannel;
    }
    if (!tmp12) {
      const items5 = [tmp12, ,];
      let tmp20 = !stateFromStores2;
      if (!stateFromStores2) {
        tmp20 = null != stream;
      }
      if (tmp20) {
        let id;
        if (voiceChannel != null) {
          id = voiceChannel.id;
        }
        tmp20 = stream.channelId !== id;
      }
      if (tmp20) {
        const obj7 = { user, stream, activity: voiceActivity, style };
        tmp20 = closure_21(StreamActivityCard, obj7);
      }
      const obj8 = { children: null };
      items5[1] = tmp20;
      items5[2] = found.map((activity, index) => {
        let application_id = activity.application_id;
        if (application_id == null) {
          application_id = index;
        }
        return __initData(ActivityCard, { user, currentUser, activity, style }, application_id);
      });
      obj8.children = items5;
      return closure_22(closure_23, obj8);
    } else {
      let items7 = function renderVoiceActivityCard(voiceChannel) {
        if (null != stream) {
          if (stream.channelId === voiceChannel.id) {
            const obj2 = { user, stream, activity: voiceActivity, style: closure_3.voiceActivityCard };
            let tmp8 = __initData(StreamActivityCard, obj2);
          }
          return tmp8;
        }
        if (null != voiceActivity) {
          const obj3 = { user, currentUser, activity: tmp2, voiceChannel, style: closure_3.voiceActivityCard };
          tmp8 = __initData(ActivityCard, obj3);
        } else {
          const obj = { user, channel: voiceChannel, isInChannel: stateFromStores, style: closure_3.voiceActivityCard };
          tmp8 = __initData(VoiceCallActivityCard, obj);
        }
      };
      if (stateFromStores) {
        const obj9 = { style: null, children: null };
        const items6 = [tmp.card, style];
        obj9.style = items6;
        const tmp2Result3 = tmp2(tmp3[42]);
        items7 = [,];
        items7[0] = items7(voiceChannel);
        const obj10 = { user, currentUser, channel: voiceChannel, style: null };
        const items8 = [,];
        ({ voiceSettings: arr8[0], voiceSettingsDivider: arr8[1] } = tmp);
        obj10.style = items8;
        items7[1] = closure_21(tmp2(tmp3[74]), obj10);
        obj9.children = items7;
        let tmp10Result = closure_22(tmp2Result3, obj9);
        const items7Result = items7(voiceChannel);
      } else {
        const obj11 = { style: null, children: null };
        const items9 = [tmp.card, style];
        obj11.style = items9;
        obj11.children = items7(voiceChannel);
        tmp10Result = closure_21(tmp2(tmp3[42]), obj11);
        const tmp2Result4 = tmp2(tmp3[42]);
      }
    }
  }
  const obj4 = user(style[40]);
}
