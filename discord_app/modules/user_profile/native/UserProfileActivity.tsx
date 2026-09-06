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
    let obj = {
      accessibilityRole: "link",
      onPress() {
        const obj = { href };
        return obj.handleClick(obj);
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
  let obj = user(onAction[20]);
  const imageForActivity = obj.useImageForActivity(activity, user.application, "user_profile_activity_native");
  ({ largeImage, smallImage } = imageForActivity);
  user(onAction[21]);
  obj = { style: tmp.body, children: null };
  if (user.bot) {
    const items = [tmp8];
    obj = { style: tmp.content, children: null };
    if (activity(tmp2[22])(activity)) {
      const obj1 = { variant: "text-md/semibold", children: null };
      const obj2 = {
        text: activity.details,
        activity,
        onPress() {
          return onAction({ action: "OPEN_SPOTIFY_TRACK" });
        },
      };
      obj1.children = closure_21(IM4J4e(tmp2[24]).SpotifyTrack, obj2);
      let tmp24Result = closure_21(ActivityCardText, obj1);
      let tmp29 = ActivityCardText;
      let tmp30 = closure_21;
      let tmp31 = closure_21;
    } else {
      const obj3 = { href: activity.details_url, children: null };
      if (tmp23(tmp2[30])(activity)) {
        let name = activity.name;
      } else {
        name = activity.details;
        if (name == null) {
          name = activity.name;
        }
      }
      const obj4 = { variant: "text-md/semibold", children: name };
      obj3.children = closure_21(ActivityCardText, obj4);
      tmp24Result = closure_21(MaybeLink, obj3);
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
          const obj5 = { variant: "text-xs/medium", lineClamp: 1, children: null };
          const obj6 = {
            artists: trimmed,
            activity,
            userId: user.id,
            onPress() {
              return onAction({ action: "OPEN_SPOTIFY_ARTIST" });
            },
          };
          obj5.children = tmp30(IM4J4e(tmp2[24]).SpotifyArtists, obj6);
          tmp30Result = tmp30(tmp29, obj5);
        }
      }
    } else {
      let state = activity.details;
      let tmp33 = tmp23(tmp2[30])(activity);
      if (!tmp33) {
        tmp33 = null == activity.state;
      }
      if (!tmp33) {
        state = activity.state;
      }
      const obj7 = { href: activity.state_url, children: null };
      const obj8 = { variant: "text-xs/medium", lineClamp: 1, children: state };
      obj7.children = tmp30(tmp29, obj8);
      tmp30Result = tmp30(MaybeLink, obj7);
    }
    items1[1] = tmp30Result;
    let tmp30Result1 = null;
    if (!activity(tmp2[22])(activity)) {
      tmp30Result1 = null;
      if (activity.type !== constants.WATCHING) {
        if (tmp23(tmp2[30])(activity)) {
          if (!tmp23(tmp2[31])(activity)) {
            tmp30Result1 = null;
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
            const obj9 = { variant: "text-xs/medium", lineClamp: 1, children: null };
            const items2 = [activity.state, ""];
            obj9.children = items2.join(" ");
            tmp30Result1 = tmp30(tmp29, obj9);
          } else if (0 === activity.party.size[1]) {
            const intl3 = IM4J4e(tmp2[23]).intl;
            IM4J4e = IM4J4e(tmp2[23]).t.IM4J4e;
            const obj10 = { count: activity.party.size[0] };
            let formatToPlainStringResult = intl3.formatToPlainString(IM4J4e, obj10);
          } else {
            const intl2 = IM4J4e(tmp2[23]).intl;
            const obj11 = { count: activity.party.size[0], max: activity.party.size[1] };
            formatToPlainStringResult = intl2.formatToPlainString(IM4J4e(tmp2[23]).t["u//9By"], obj11);
          }
        } else {
          const assets3 = activity.assets;
          let large_url;
          if (assets3 != null) {
            large_url = assets3.large_url;
          }
          const obj12 = { href: large_url, children: null };
          const assets4 = activity.assets;
          let large_text;
          if (assets4 != null) {
            large_text = assets4.large_text;
          }
          const obj13 = { variant: "text-xs/medium", lineClamp: 1, children: large_text };
          obj12.children = tmp30(tmp29, obj13);
          tmp30Result1 = tmp30(MaybeLink, obj12);
        }
      }
    }
    items1[2] = tmp30Result1;
    const bot = user.bot;
    let tmp31Result = !bot;
    if (!bot) {
      const obj14 = { style: tmp.badges, activity };
      tmp31Result = tmp31(tmp23(tmp2[32]), obj14);
    }
    items1[3] = tmp31Result;
    obj.children = items1;
    items[1] = closure_22(closure_7, obj);
    obj.children = items;
    return closure_22(closure_7, obj);
  } else {
    if (null == largeImage) {
      if (null != largeImage) {
        const items3 = [tmp.imageContainer];
        const obj15 = { style: null, children: null };
        items3[1] = activity(tmp2[27])(activity) ? tmp.crunchyrollImageAspectRatio : tmp.imageAspectRatio;
        obj15.style = items3;
        const assets = activity.assets;
        let large_url1;
        if (assets != null) {
          large_url1 = assets.large_url;
        }
        const obj16 = { href: large_url1, children: null };
        const obj17 = { source: null, alt: null, style: null };
        let tmp12Result = tmp12(tmp2[25]);
        obj17.source = IM4J4e(tmp2[26]).makeSource(largeImage.src);
        obj17.alt = largeImage.alt;
        obj17.style = tmp.largeImage;
        obj16.children = closure_21(tmp12Result, obj17);
        const items4 = [closure_21(MaybeLink, obj16)];
        let tmp13Result = null != smallImage;
        if (tmp13Result) {
          const obj18 = { style: tmp.smallImageBackground, children: null };
          const assets2 = activity.assets;
          let small_url;
          if (assets2 != null) {
            small_url = assets2.small_url;
          }
          const obj19 = { href: small_url, children: null };
          const obj20 = { source: null, alt: null, style: null };
          tmp12Result = tmp12(tmp2[25]);
          obj20.source = IM4J4e(tmp2[26]).makeSource(smallImage.src);
          obj20.alt = smallImage.alt;
          obj20.style = tmp.smallImage;
          obj19.children = closure_21(tmp12Result, obj20);
          obj18.children = closure_21(MaybeLink, obj19);
          tmp13Result = closure_21(closure_7, obj18);
          const IM4J4eResult1 = IM4J4e(tmp2[26]);
        }
        items4[1] = tmp13Result;
        obj15.children = items4;
        let tmp51Result = closure_22(closure_7, obj15);
        const IM4J4eResult = IM4J4e(tmp2[26]);
      } else {
        const obj21 = { style: null, children: null };
        const items5 = [,];
        ({ imageContainer: arr7[0], imageAspectRatio: arr7[1] } = tmp);
        obj21.style = items5;
        const obj22 = { size: "custom", style: tmp.largeImage, color: null };
        const IM4J4eResult2 = IM4J4e(tmp2[29]);
        const colors = activity(tmp2[16]).colors;
        obj22.color = IM4J4e(tmp2[29]).isThemeDark(tmp5) ? colors.WHITE : colors.BLACK;
        obj21.children = closure_21(IM4J4e(tmp2[28]).UnknownGameIcon, obj22);
        tmp51Result = closure_21(closure_7, obj21);
        const isThemeDarkResult = IM4J4e(tmp2[29]).isThemeDark(tmp5);
      }
    } else {
      let tmp10 = activity;
    }
    const obj23 = {
      accessibilityRole: "button",
      accessibilityLabel: largeImage.alt,
      accessibilityHint: null,
      onPress: null,
      children: null,
    };
    const intl = IM4J4e(tmp2[23]).intl;
    obj23.accessibilityHint = intl.string(IM4J4e(tmp2[23]).t.sjjOk2);
    obj23.onPress = function onPress() {
      onAction({ action: "OPEN_SPOTIFY_ALBUM" });
      UserActivitySpotify.openAlbum(activity, user.id);
    };
    const obj24 = { style: null, children: null };
    const items6 = [,];
    ({ imageContainer: arr3[0], imageAspectRatio: arr3[1] } = tmp);
    obj24.style = items6;
    tmp10 = tmp10(tmp2[25]);
    const obj25 = { source: IM4J4e(tmp2[26]).makeSource(largeImage.src), alt: largeImage.alt, style: null };
    largeImage = tmp.largeImage;
    obj25.style = largeImage;
    obj24.children = closure_21(tmp10, obj25);
    obj23.children = closure_21(closure_7, obj24);
    tmp51Result = closure_21(closure_6, obj23);
    const IM4J4eResult3 = IM4J4e(tmp2[26]);
  }
}
function ActivityCard(user) {
  user = user.user;
  ({ currentUser, activity } = user);
  const voiceChannel = user.voiceChannel;
  dependencyMap = undefined;
  closure_3 = undefined;
  const tmp = closure_24();
  let obj = dependencyMap;
  const tmp3 = activity(13014)(activity);
  const analyticsLocations = activity(7162)(activity(7182).USER_PROFILE_LIVE_ACTIVITY_CARD).analyticsLocations;
  let id;
  const tmp4 = activity(7162);
  if (voiceChannel != null) {
    id = voiceChannel.id;
  }
  const tmp5Result = activity(13020)({ display: "live", voiceChannelId: id, user, activity, analyticsLocations });
  dependencyMap = tmp5Result;
  const application_id = activity.application_id;
  let tmp2Result = activity(8675);
  obj = {
    location: "User Profile Activity Card",
    applicationId: application_id,
    source: user(8686).GameProfileSources.UserProfile,
    trackEntryPointImpression: true,
    sourceUserId: user.id,
  };
  let ConnectPlatformButton = user;
  const tmp2ResultResult = tmp2Result(obj);
  closure_3 = tmp2ResultResult;
  const items = [tmp2ResultResult];
  const callback = noop.useCallback(() => {
    if (null != closure_3) {
      tmp();
    }
  }, items);
  obj = { userId: user.id, onAction: tmp5Result };
  activity(13021)(obj);
  let obj3 = user(504);
  const items1 = [GuildStore, VoiceStateStore, ChannelStore];
  const stateFromStores = obj3.useStateFromStores(items1, () => {
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
  let obj4 = user(504);
  const items2 = [ApplicationStore];
  const stateFromStores1 = obj4.useStateFromStores(items2, () => {
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
      const obj1 = { value: analyticsLocations, children: null };
      let obj2 = {
        onPress: callback,
        disabled: null == tmp2ResultResult,
        accessibilityRole: "button",
        accessibilityLabel: null,
        children: null,
      };
      const intl = ConnectPlatformButton(1114).intl;
      obj3 = { gameName: activity.name };
      obj2.accessibilityLabel = intl.formatToPlainString(ConnectPlatformButton(1114).t["9sZWVp"], obj3);
      obj4 = { style: null, title: null, titleStyle: null, titleIcon: null, children: null };
      const items3 = [tmp.card, user.style];
      obj4.style = items3;
      obj4.title = tmp3.text;
      obj4.titleStyle = tmp.cardTitle;
      let tmp34Result = null != tmp3.platformIcon;
      tmp2Result = activity(7207);
      if (tmp34Result) {
        const obj5 = { style: tmp.cardTitleIcon, source: null, size: null, disableColor: true };
        const result = ConnectPlatformButton(1396);
        const platformIcon = tmp3.platformIcon;
        let whitePNG;
        if (platformIcon != null) {
          whitePNG = platformIcon.whitePNG;
        }
        obj5.source = result.makeSource(whitePNG);
        obj5.size = ConnectPlatformButton(1178).IconSizes.SMALL_14;
        tmp34Result = closure_21(ConnectPlatformButton(1178).Icon, obj5);
      }
      obj4.titleIcon = tmp34Result;
      const obj6 = { user, activity, application: stateFromStores1, onAction: tmp5Result };
      const items4 = [closure_21(ActivityCardBody, obj6), , ,];
      tmp34Result = null;
      if (activity(13007)(activity)) {
        ({ start, end } = activity.timestamps);
        const obj7 = { start, end };
        tmp34Result = closure_21(activity(13022), obj7);
      }
      items4[1] = tmp34Result;
      let tmp34Result1 = null;
      if (null != voiceChannel) {
        tmp34Result1 = null;
        if (null != stateFromStores) {
          const obj8 = {
            guild: stateFromStores,
            channel: voiceChannel,
            onAction: tmp5Result,
            style: tmp.voiceChannelDivider,
          };
          tmp34Result1 = closure_21(activity(13024), obj8);
        }
      }
      items4[2] = tmp34Result1;
      if (activity(13002)(activity)) {
        ConnectPlatformButton = ConnectPlatformButton(13032).ConnectPlatformButton;
        obj = { type: constants3.XBOX, onAction: tmp5Result };
        let tmp34Result2 = closure_21(ConnectPlatformButton, obj);
      } else if (activity(13003)(activity)) {
        const obj9 = { type: constants3.PLAYSTATION, onAction: tmp5Result };
        tmp34Result2 = closure_21(ConnectPlatformButton(13032).ConnectPlatformButton, obj9);
      } else {
        tmp34Result2 = null;
        if (user.id !== currentUser.id) {
          if (activity(10891)(activity)) {
            const obj10 = { activity, onAction: tmp5Result };
            tmp34Result2 = closure_21(ConnectPlatformButton(13032).PlayOnSpotifyButton, obj10);
          } else if (activity(7739)(activity)) {
            const obj11 = { user, currentUser, activity, application: stateFromStores1, onAction: tmp5Result };
            tmp34Result2 = closure_21(ConnectPlatformButton(13032).JoinActivityButton, obj11);
          } else {
            if (activity(10886)(activity)) {
              const result1 = ConnectPlatformButton(13035);
              let supported_platforms = activity.supported_platforms;
              const currentActivityGamePlatform = result1.getCurrentActivityGamePlatform();
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
                    const obj12 = { user, currentUser, activity, application: stateFromStores1, onAction: tmp5Result };
                    tmp34Result2 = closure_21(ConnectPlatformButton(13032).JoinGameActivityButton, obj12);
                  }
                }
              }
            }
            if (activity(8259)(activity)) {
              const obj13 = { activity, onAction: tmp5Result };
              let tmp34Result3 = closure_21(ConnectPlatformButton(13032).WatchActivityButton, obj13);
            } else {
              tmp34Result3 = null;
              if (null != activity.buttons) {
                tmp34Result3 = null;
                if (activity.buttons.length > 0) {
                  const obj14 = { style: tmp.customButtons, children: null };
                  const buttons = activity.buttons;
                  obj14.children = buttons.map((item, index) =>
                    __initData(
                      UserProfileActivityButtons.CustomActivityButton,
                      { index, user, activity, onAction },
                      index,
                    ),
                  );
                  tmp34Result3 = closure_21(closure_7, obj14);
                }
              }
            }
            tmp34Result2 = tmp34Result3;
          }
        }
      }
      items4[3] = tmp34Result2;
      obj4.children = items4;
      obj4 = closure_22(tmp2Result, obj4);
      obj2.children = obj4;
      obj2 = closure_21(ConnectPlatformButton(5123).PressableOpacity, obj2);
      obj1.children = obj2;
      closure_21(ConnectPlatformButton(7162).AnalyticsLocationProvider, obj1);
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
  let obj = user(activity[40]);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(stream.channelId));
  let obj1 = user(activity[40]);
  const items1 = [VoiceStateStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    return VoiceStateStore.isInChannel(id);
  });
  let obj2 = user(activity[40]);
  const items2 = [GuildStore];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => GuildStore.getGuild(stream.guildId));
  let obj3 = user(activity[40]);
  const items3 = [PresenceStore];
  const stateFromStores3 = obj3.useStateFromStores(items3, () =>
    PresenceStore.findActivity(user.id, (arg0) => stream(activity[30])(arg0) && !stream(activity[52])(arg0)),
  );
  let obj4 = user(activity[40]);
  const items4 = [ApplicationStreamingStore];
  const stateFromStores4 = obj4.useStateFromStores(items4, () =>
    ApplicationStreamingStore.getActiveStreamForUser(user.id, undefined),
  );
  let ownerId;
  if (stateFromStores4 != null) {
    ownerId = stateFromStores4.ownerId;
  }
  const tmp10 = stream(activity[53]);
  ({ effectiveVolume, handleVolumeChange } = stream(activity[53])(
    ownerId,
    user(activity[54]).MediaEngineContextTypes.STREAM,
  ));
  let tmp2Result = tmp2(tmp3[40]);
  const items5 = [ApplicationStore];
  const stateFromStores5 = tmp2Result.useStateFromStores(items5, () => {
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
  tmp2Result = tmp2(tmp3[55]);
  let tmp9Result = tmp9(tmp3[34]);
  const analyticsLocations = tmp9Result(tmp9(tmp3[35]).USER_PROFILE_LIVE_ACTIVITY_CARD).analyticsLocations;
  let id;
  tmp9Result = tmp9(tmp3[36]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp9Result1Result = tmp9Result({ display: "live", voiceChannelId: id, user, stream, analyticsLocations });
  closure_4 = tmp9Result1Result;
  obj = { userId: user.id, onAction: tmp9Result1Result };
  stream(activity[39])(obj);
  const tmp10Result = stream(activity[53])(ownerId, user(activity[54]).MediaEngineContextTypes.STREAM);
  obj = { value: analyticsLocations, children: null };
  obj1 = { style: null, title: null, titleStyle: null, titleIcon: null, children: null };
  const items6 = [tmp.card, user.style];
  obj1.style = items6;
  const tmp9Result1 = stream(activity[56]);
  if (null != stateFromStores3) {
    const intl2 = tmp2(tmp3[23]).intl;
    obj2 = { name: stateFromStores3.name };
    let formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[23]).t["4CQq9Q"], obj2);
  } else {
    const intl = tmp2(tmp3[23]).intl;
    formatToPlainStringResult = intl.string(tmp2(tmp3[23]).t["Jpkr/q"]);
  }
  obj1.title = formatToPlainStringResult;
  obj1.titleStyle = tmp.cardTitle;
  obj1.titleIcon = closure_21(user(activity[43]).LiveTag, {});
  obj3 = { style: tmp.streamPreview, children: null };
  obj4 = {
    mode: "a",
    stream,
    disabled: !stateFromStores(tmp2Result.useCanWatchStream(stateFromStores), 1)[0],
    onPress() {
      closure_4({ action: "PRESS_IMAGE" });
      const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(stream.channelId);
      const result = StreamActionCreators.watchStreamAndTransitionToStream(stream);
      ActionSheetActionCreatorsDefault.hideAllActionSheets();
    },
  };
  obj3.children = closure_21(user(activity[57]).VoicePanelStreamPreview, obj4);
  const items7 = [closure_21(closure_7, obj3), , , ,];
  let tmp19Result =
    null != stateFromStores4 &&
    !tmp9Result1.useConfig({ location: "UserProfileVoiceSettings" }).nonContextualStreamOutputPresent;
  if (tmp19Result) {
    const obj5 = { value: effectiveVolume, onValueChange: handleVolumeChange, accessibilityLabel: null };
    const intl3 = tmp2(tmp3[23]).intl;
    obj5.accessibilityLabel = intl3.string(tmp2(tmp3[23]).t.pEAl4b);
    tmp19Result = closure_21(tmp9(tmp3[61]), obj5, "set-stream-volume");
    const tmp9Result3 = tmp9(tmp3[61]);
  }
  items7[1] = tmp19Result;
  tmp19Result = null != activity && tmp9(tmp3[31])(activity);
  if (tmp19Result) {
    const obj6 = { user, activity, application: stateFromStores5, onAction: tmp9Result1Result };
    tmp19Result = closure_21(ActivityCardBody, obj6);
  }
  items7[2] = tmp19Result;
  let tmp19Result1 = null != stateFromStores2 && null != stateFromStores;
  if (tmp19Result1) {
    const obj7 = {
      guild: stateFromStores2,
      channel: stateFromStores,
      onAction: tmp9Result1Result,
      style: tmp.voiceChannelDivider,
    };
    tmp19Result1 = closure_21(tmp9(tmp3[46]), obj7);
  }
  items7[3] = tmp19Result1;
  let tmp19Result2 = null != stateFromStores;
  if (tmp19Result2) {
    const obj8 = { channel: stateFromStores, isInChannel: stateFromStores1, onAction: tmp9Result1Result };
    tmp19Result2 = closure_21(tmp2(tmp3[48]).VoiceChannelButtons, obj8);
  }
  items7[4] = tmp19Result2;
  obj1.children = items7;
  obj.children = closure_22(stream(activity[42]), obj1);
  return closure_21(user(activity[34]).AnalyticsLocationProvider, obj);
}
function VoiceCallActivityCard(arg0) {
  ({ user, channel } = arg0);
  let stateFromStores;
  dependencyMap = undefined;
  ({ isInChannel, style } = arg0);
  const tmp = closure_24();
  const tmp5 = stateFromStores(4713)(channel);
  let obj = channel(504);
  const items = [GuildStore];
  stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
  let obj1 = channel(504);
  const items1 = [PermissionStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    let isPrivateResult = channel.isPrivate();
    if (!isPrivateResult) {
      isPrivateResult = PermissionStore.can(constants2.CONNECT, channel);
    }
    return isPrivateResult;
  });
  const tmp4 = stateFromStores(13025)(channel);
  const tmp9 = stateFromStores(7162);
  ({ newestAnalyticsLocation: c2, analyticsLocations } = stateFromStores(7162)(
    stateFromStores(7182).USER_PROFILE_VOICE_ACTIVITY_CARD,
  ));
  obj = { display: "voice", activity: { type: "VOICE" }, voiceChannelId: channel.id, user, analyticsLocations };
  const tmp11 = stateFromStores(13020)(obj);
  closure_3 = tmp11;
  obj = { userId: user.id, onAction: tmp11 };
  stateFromStores(13021)(obj);
  obj1 = { style: null, title: null, titleStyle: null, children: null };
  const items2 = [tmp.card, style];
  obj1.style = items2;
  const tmp9Result = stateFromStores(7162)(stateFromStores(7182).USER_PROFILE_VOICE_ACTIVITY_CARD);
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
    obj1.title = stringResult;
    obj1.titleStyle = tmp.cardTitle;
    let obj2 = { style: tmp.body, children: null };
    const obj3 = { users: tmp4, guildId: null };
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    obj3.guildId = id;
    const items3 = [closure_21(tmp2(13039), obj3)];
    const obj4 = { style: tmp.voiceCallContent, children: null };
    if (stateFromStores1) {
      const obj5 = {
        accessibilityRole: "button",
        accessibilityLabel: null,
        accessibilityHint: null,
        onPress: null,
        children: null,
      };
      const obj6 = { channel };
      obj5.accessibilityLabel = tmp2(9770)(obj6);
      const intl3 = channel(1114).intl;
      obj5.accessibilityHint = intl3.string(channel(1114).t["9C444m"]);
      obj5.onPress = function onPress() {
        closure_3({ action: "OPEN_VOICE_CHANNEL" });
        ActionSheetActionCreatorsDefault.hideAllActionSheets();
        ModalActionCreatorsDefault.popAll();
        PrivateChannelCallUtils.openGuildVoiceModal(channel, c2);
      };
      const obj7 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
      const obj8 = { style: tmp.voiceCallNameIconWrapper, children: null };
      const obj9 = { channel, size: "sm", color: "mobile-text-heading-primary" };
      obj8.children = closure_21(tmp2(10894), obj9);
      const items4 = [closure_21(closure_7, obj8), tmp5];
      obj7.children = items4;
      obj5.children = closure_22(channel(4556).Text, obj7);
      let tmp13Result = closure_21(channel(5123).PressableOpacity, obj5);
    } else {
      const obj10 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
      const obj11 = { style: tmp.voiceCallNameIconWrapper, children: null };
      const obj12 = { channel, size: "sm", color: "mobile-text-heading-primary" };
      obj11.children = closure_21(tmp2(10894), obj12);
      const items5 = [closure_21(closure_7, obj11), tmp5];
      obj10.children = items5;
      tmp13Result = closure_22(channel(4556).Text, obj10);
    }
    const items6 = [tmp13Result];
    let tmp18Result = null;
    if (null != stateFromStores) {
      const obj13 = {
        accessibilityRole: "button",
        accessibilityHint: null,
        accessibilityLabel: null,
        onPress: null,
        children: null,
      };
      const intl4 = channel(1114).intl;
      obj13.accessibilityHint = intl4.string(channel(1114).t.KLOhbO);
      const intl5 = channel(1114).intl;
      const obj14 = { guildName: stateFromStores.name };
      obj13.accessibilityLabel = intl5.formatToPlainString(channel(1114).t["hq/Qze"], obj14);
      obj13.onPress = function onPress() {
        closure_3({ action: "OPEN_VOICE_GUILD" });
        transitionToGuild.transitionToGuild(stateFromStores.id);
        closeVoicePanelsDefault();
        ActionSheetActionCreatorsDefault.hideAllActionSheets();
      };
      const obj15 = { variant: "text-xs/medium", children: null };
      const intl6 = channel(1114).intl;
      const obj16 = { guildName: stateFromStores.name };
      obj15.children = intl6.format(channel(1114).t["hq/Qze"], obj16);
      obj13.children = closure_21(channel(4556).Text, obj15);
      tmp18Result = closure_21(channel(5123).PressableOpacity, obj13);
    }
    items6[1] = tmp18Result;
    obj4.children = items6;
    items3[1] = closure_22(closure_7, obj4);
    obj2.children = items3;
    const items7 = [closure_22(closure_7, obj2)];
    const obj17 = { channel, isInChannel, onAction: tmp11 };
    items7[1] = closure_21(channel(13032).VoiceChannelButtons, obj17);
    obj1.children = items7;
    return closure_22(tmp14, obj1);
  }
  const intl2 = channel(1114).intl;
  stringResult = intl2.string(channel(1114).t["9FaEzi"]);
  tmp14 = stateFromStores(7207);
}
get_ActivityIndicator = fn(17);
({ TouchableOpacity: hasOwnProperty, TouchableWithoutFeedback: metroRequire, View: closure_7 } = get_ActivityIndicator);
const CARD_PADDING = fn(7208).CARD_PADDING;
const Constants = fn(1074);
({
  ActivityTypes: closure_17,
  Permissions: closure_18,
  PlatformTypes: closure_19,
  StatusTypes: closure_20,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = jsxProd);
fn(4560);
let createStyles = {
  card: { gap: 12 },
  cardTitle: { marginBottom: 0 },
  cardTitleIcon: null,
  body: null,
  content: null,
  imageContainer: null,
  imageAspectRatio: null,
  crunchyrollImageAspectRatio: null,
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
createStyles = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
createStyles.cardTitleIcon = createStyles;
createStyles.body = { flexDirection: "row", alignItems: "center", gap: 16 };
createStyles.content = { flex: 1 };
createStyles.imageContainer = { position: "relative" };
createStyles.imageAspectRatio = { width: 60, maxHeight: 60, aspectRatio: "1 / 1" };
createStyles.crunchyrollImageAspectRatio = { width: 60, maxHeight: 100, aspectRatio: "2 / 3" };
let size = { borderRadius: nativeDefault.radii.xs, width: "100%", height: "100%" };
createStyles.largeImage = size;
const rect = {
  borderRadius: 16,
  position: "absolute",
  right: -4,
  bottom: -4,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
createStyles.smallImageBackground = rect;
createStyles.smallImage = { width: 24, height: 24, borderRadius: 12 };
createStyles.badges = { marginTop: 4, flexDirection: "row", flexWrap: "wrap", columnGap: 8, rowGap: 0 };
createStyles.voiceChannelDivider = {
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
  paddingTop: 12,
};
createStyles.customButtons = { flexDirection: "column", gap: 8 };
let obj1 = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingTop: 12 };
createStyles.streamPreview = {
  aspectRatio: 1.7777777777777777,
  borderRadius: nativeDefault.radii.xs,
  overflow: "hidden",
};
createStyles.voiceActivityCard = { padding: 0 };
createStyles.voiceSettings = { padding: 0, marginBottom: -16 };
let obj2 = { aspectRatio: 1.7777777777777777, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
createStyles.voiceSettingsDivider = {
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
  paddingTop: 16,
  marginTop: 4,
  marginHorizontal: -CARD_PADDING,
  paddingHorizontal: CARD_PADDING,
};
createStyles.voiceCallContent = { flex: 1, gap: 4 };
const PlatformUtils = fn(1115);
let num = 16;
if (PlatformUtils.isAndroid()) {
  num = 12;
}
createStyles.voiceCallNameIconWrapper = { width: 22, height: num, justifyContent: "center" };
let closure_24 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivity.tsx");

export default function UserProfileActivity(guildId) {
  const user = guildId.user;
  const currentUser = guildId.currentUser;
  const style = guildId.style;
  stream = undefined;
  const tmp = closure_24();
  closure_3 = tmp;
  ({ live, stream } = currentUser(style[71])(user.id));
  let obj = { userId: user.id, guildId: guildId.guildId };
  const tmp5 = currentUser(style[72])(obj);
  const voiceChannel = tmp5.voiceChannel;
  const voiceActivity = tmp5.voiceActivity;
  let obj1 = user(style[40]);
  const items = [VoiceStateStore];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    let isInChannelResult = null != voiceChannel;
    if (isInChannelResult) {
      isInChannelResult = VoiceStateStore.isInChannel(tmp.id);
    }
    return isInChannelResult;
  });
  closure_8 = user.id === currentUser.id;
  let obj2 = user(style[40]);
  const items1 = [SelfPresenceStore, PresenceStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    if (closure_8) {
      let status = SelfPresenceStore.getStatus();
    } else {
      status = PresenceStore.getStatus(user.id);
    }
    return status === constants4.OFFLINE || status === constants4.INVISIBLE;
  });
  let obj3 = user(style[40]);
  const items2 = [UserProfileStore];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
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
        obj = { style: null, children: null };
        const items3 = [tmp.card, style];
        obj.style = items3;
        let tmp2Result = tmp2(tmp3[42]);
        obj = { user, currentUser, channel: voiceChannel, style: null };
        const items4 = [,];
        ({ voiceSettings: arr11[0], voiceSettingsDivider: arr11[1] } = tmp);
        obj.style = items4;
        obj.children = closure_21(tmp2(tmp3[73]), obj);
        return closure_21(tmp2Result, obj);
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
        obj1 = { user, stream, activity: voiceActivity, style };
        tmp20 = closure_21(StreamActivityCard, obj1);
      }
      obj2 = { children: null };
      items5[1] = tmp20;
      items5[2] = found.map((activity, index) => {
        let application_id = activity.application_id;
        if (application_id == null) {
          application_id = index;
        }
        return __initData(ActivityCard, { user, currentUser, activity, style }, application_id);
      });
      obj2.children = items5;
      return closure_22(closure_23, obj2);
    } else {
      let items7 = function renderVoiceActivityCard(voiceChannel) {
        if (null != stream) {
          if (stream.channelId === voiceChannel.id) {
            let obj = { user, stream, activity: voiceActivity, style: closure_3.voiceActivityCard };
            let tmp8 = __initData(StreamActivityCard, obj);
          }
          return tmp8;
        }
        if (null != voiceActivity) {
          obj = { user, currentUser, activity: tmp2, voiceChannel, style: closure_3.voiceActivityCard };
          tmp8 = __initData(ActivityCard, obj);
        } else {
          obj = { user, channel: voiceChannel, isInChannel: stateFromStores, style: closure_3.voiceActivityCard };
          tmp8 = __initData(VoiceCallActivityCard, obj);
        }
      };
      if (stateFromStores) {
        obj3 = { style: null, children: null };
        const items6 = [tmp.card, style];
        obj3.style = items6;
        tmp2Result = tmp2(tmp3[42]);
        items7 = [,];
        items7[0] = items7(voiceChannel);
        const obj4 = { user, currentUser, channel: voiceChannel, style: null };
        const items8 = [,];
        ({ voiceSettings: arr8[0], voiceSettingsDivider: arr8[1] } = tmp);
        obj4.style = items8;
        items7[1] = closure_21(tmp2(tmp3[73]), obj4);
        obj3.children = items7;
        let tmp10Result = closure_22(tmp2Result, obj3);
        const items7Result = items7(voiceChannel);
      } else {
        const obj5 = { style: null, children: null };
        const items9 = [tmp.card, style];
        obj5.style = items9;
        obj5.children = items7(voiceChannel);
        tmp10Result = closure_21(tmp2(tmp3[42]), obj5);
        const tmp2Result1 = tmp2(tmp3[42]);
      }
    }
  }
  const tmp4 = currentUser(style[71])(user.id);
}
