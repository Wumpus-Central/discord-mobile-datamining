// discord_app/modules/user_profile/native/UserProfileActivity.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import SelectedChannelActionCreatorsDefault from "../../../actions/SelectedChannelActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import transitionToGuild from "../../routing/transitionToGuild.native.tsx";
import isEmbeddedActivityDefault from "../../activities/utils/isEmbeddedActivity.tsx";
import StreamActionCreators from "../../../actions/StreamActionCreators.tsx";
import PrivateChannelCallUtils from "../../../utils/native/PrivateChannelCallUtils.tsx";
import UserProfileAnalyticsUtils from "../UserProfileAnalyticsUtils.tsx";
import MaskedLinkUtils from "../../../utils/MaskedLinkUtils.tsx";
import closeVoicePanelsDefault from "../../voice_panel/native/utils/closeVoicePanels.tsx";
import UserActivitySpotify from "../../now_playing/native/UserActivitySpotify.tsx";
import UserProfileActivityButtons from "UserProfileActivityButtons.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import RequestToStreamStore from "../../request_to_stream/RequestToStreamStore.tsx";
import ApplicationStreamingStore from "../../../stores/ApplicationStreamingStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import PresenceStore from "../../../stores/PresenceStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
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
      tmp3 = __initData2(Text_Text.Text, obj);
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
    tmp = closure_22(closure_5, obj);
  }
  return tmp;
}
function ActivityCardBody(user) {
  user = user.user;
  const activity = user.activity;
  const onAction = user.onAction;
  const tmp = closure_25();
  let IM4J4e = user;
  const imageForActivity = user(onAction[22]).useImageForActivity(
    activity,
    user.application,
    "user_profile_activity_native",
  );
  ({ largeImage, smallImage } = imageForActivity);
  user(onAction[23]);
  const obj2 = { style: tmp.body, children: null };
  if (user.bot) {
    const items = [tmp8];
    const obj3 = { style: tmp.content, children: null };
    if (activity(tmp2[24])(activity)) {
      const obj4 = { variant: "text-md/semibold", children: null };
      const obj5 = {
        text: activity.details,
        activity,
        onPress() {
          return onAction({ action: "OPEN_SPOTIFY_TRACK" });
        },
      };
      obj4.children = closure_22(IM4J4e(tmp2[26]).SpotifyTrack, obj5);
      let tmp24Result = closure_22(ActivityCardText, obj4);
      let tmp29 = ActivityCardText;
      let tmp30 = closure_22;
    } else {
      const obj6 = { href: activity.details_url, children: null };
      if (tmp23(tmp2[32])(activity)) {
        let name = activity.name;
      } else {
        name = activity.details;
        if (name == null) {
          name = activity.name;
        }
      }
      const obj7 = { variant: "text-md/semibold", children: name };
      obj6.children = closure_22(ActivityCardText, obj7);
      tmp24Result = closure_22(MaybeLink, obj6);
      tmp29 = ActivityCardText;
      tmp30 = closure_22;
    }
    const items1 = [tmp24Result, , ,];
    if (activity(tmp2[24])(activity)) {
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
          obj8.children = tmp30(IM4J4e(tmp2[26]).SpotifyArtists, obj9);
          tmp30Result = tmp30(tmp29, obj8);
        }
      }
      let tmp30Result4 = tmp30Result;
    } else {
      let state = activity.details;
      let tmp32 = tmp23(tmp2[32])(activity);
      if (!tmp32) {
        tmp32 = null == activity.state;
      }
      if (!tmp32) {
        state = activity.state;
      }
      const obj10 = { href: activity.state_url, children: null };
      const obj11 = { variant: "text-xs/medium", lineClamp: 1, children: state };
      obj10.children = tmp30(tmp29, obj11);
      tmp30Result4 = tmp30(MaybeLink, obj10);
    }
    items1[1] = tmp30Result4;
    let tmp30Result5 = null;
    if (!activity(tmp2[24])(activity)) {
      tmp30Result5 = null;
      if (activity.type !== IM4J4e(tmp2[33]).ActivityTypes.WATCHING) {
        if (tmp23(tmp2[32])(activity)) {
          if (!tmp23(tmp2[34])(activity)) {
            tmp30Result5 = null;
          }
        }
        if (tmp23(tmp2[32])(activity)) {
          const party = activity.party;
          let size;
          if (party != null) {
            size = party.size;
          }
          let tmp45 = null != size;
          if (tmp45) {
            tmp45 = activity.party.size.length >= 2;
          }
          if (!tmp45) {
            const obj12 = { variant: "text-xs/medium", lineClamp: 1, children: null };
            const items2 = [activity.state, ""];
            obj12.children = items2.join(" ");
            tmp30Result5 = tmp30(tmp29, obj12);
          } else if (0 === activity.party.size[1]) {
            const intl3 = IM4J4e(tmp2[25]).intl;
            IM4J4e = IM4J4e(tmp2[25]).t.IM4J4e;
            const obj13 = { count: activity.party.size[0] };
            let formatToPlainStringResult = intl3.formatToPlainString(IM4J4e, obj13);
          } else {
            const intl2 = IM4J4e(tmp2[25]).intl;
            const obj14 = { count: activity.party.size[0], max: activity.party.size[1] };
            formatToPlainStringResult = intl2.formatToPlainString(IM4J4e(tmp2[25]).t["u//9By"], obj14);
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
          tmp30Result5 = tmp30(MaybeLink, obj15);
        }
      }
    }
    items1[2] = tmp30Result5;
    const bot = user.bot;
    let tmp30Result6 = !bot;
    if (!bot) {
      const obj17 = { style: tmp.badges, activity };
      tmp30Result6 = tmp30(tmp23(tmp2[35]), obj17);
    }
    items1[3] = tmp30Result6;
    obj3.children = items1;
    items[1] = closure_23(closure_7, obj3);
    obj2.children = items;
    return closure_23(closure_7, obj2);
  } else {
    if (null == largeImage) {
      if (null != largeImage) {
        const items3 = [tmp.imageContainer];
        const obj18 = { style: null, children: null };
        items3[1] = activity(tmp2[29])(activity) ? tmp.crunchyrollImageAspectRatio : tmp.imageAspectRatio;
        obj18.style = items3;
        const assets = activity.assets;
        let large_url1;
        if (assets != null) {
          large_url1 = assets.large_url;
        }
        const obj19 = { href: large_url1, children: null };
        const obj20 = { source: null, accessibilityLabel: null, style: null };
        const tmp12Result = activity(tmp2[27]);
        obj20.source = IM4J4e(tmp2[28]).makeSource(largeImage.src);
        obj20.accessibilityLabel = largeImage.alt;
        obj20.style = tmp.largeImage;
        obj19.children = closure_22(tmp12Result, obj20);
        const items4 = [closure_22(MaybeLink, obj19)];
        let tmp13Result = null != smallImage;
        if (tmp13Result) {
          const obj21 = { style: tmp.smallImageBackground, children: null };
          const assets2 = activity.assets;
          let small_url;
          if (assets2 != null) {
            small_url = assets2.small_url;
          }
          const obj22 = { href: small_url, children: null };
          const obj23 = { source: null, accessibilityLabel: null, style: null };
          const tmp12Result2 = tmp12(tmp2[27]);
          obj23.source = IM4J4e(tmp2[28]).makeSource(smallImage.src);
          obj23.accessibilityLabel = smallImage.alt;
          obj23.style = tmp.smallImage;
          obj22.children = closure_22(tmp12Result2, obj23);
          obj21.children = closure_22(MaybeLink, obj22);
          tmp13Result = closure_22(closure_7, obj21);
          const IM4J4eResult1 = IM4J4e(tmp2[28]);
        }
        items4[1] = tmp13Result;
        obj18.children = items4;
        let tmp49Result = closure_23(closure_7, obj18);
        const IM4J4eResult = IM4J4e(tmp2[28]);
      } else {
        const obj24 = { style: null, children: null };
        const items5 = [,];
        ({ imageContainer: arr7[0], imageAspectRatio: arr7[1] } = tmp);
        obj24.style = items5;
        const obj25 = { size: "custom", style: tmp.largeImage, color: null };
        const IM4J4eResult2 = IM4J4e(tmp2[31]);
        const colors = activity(tmp2[18]).colors;
        obj25.color = IM4J4e(tmp2[31]).isThemeDark(tmp5) ? colors.WHITE : colors.BLACK;
        obj24.children = closure_22(IM4J4e(tmp2[30]).UnknownGameIcon, obj25);
        tmp49Result = closure_22(closure_7, obj24);
        const isThemeDarkResult = IM4J4e(tmp2[31]).isThemeDark(tmp5);
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
    const intl = IM4J4e(tmp2[25]).intl;
    obj26.accessibilityHint = intl.string(IM4J4e(tmp2[25]).t.sjjOk2);
    obj26.onPress = function onPress() {
      onAction({ action: "OPEN_SPOTIFY_ALBUM" });
      UserActivitySpotify.openAlbum(activity, user.id);
    };
    const obj27 = { style: null, children: null };
    const items6 = [,];
    ({ imageContainer: arr3[0], imageAspectRatio: arr3[1] } = tmp);
    obj27.style = items6;
    tmp10 = tmp10(tmp2[27]);
    const obj28 = {
      source: IM4J4e(tmp2[28]).makeSource(largeImage.src),
      accessibilityLabel: largeImage.alt,
      style: null,
    };
    largeImage = tmp.largeImage;
    obj28.style = largeImage;
    obj27.children = closure_22(tmp10, obj28);
    obj26.children = closure_22(closure_7, obj27);
    tmp49Result = closure_22(closure_6, obj26);
    const IM4J4eResult3 = IM4J4e(tmp2[28]);
  }
  const obj = user(onAction[22]);
}
class ActivityCard {
  constructor(arg0) {
    user = global.user;
    ({ currentUser, activity } = global);
    voiceChannel = global.voiceChannel;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    tmp = closure_25();
    tmp2 = activity;
    tmp3 = closure_2;
    tmp4 = activity(closure_2[36])(activity);
    tmp5 = activity(closure_2[37]);
    analyticsLocations = tmp5(activity(closure_2[38]).USER_PROFILE_LIVE_ACTIVITY_CARD).analyticsLocations;
    id = undefined;
    tmp6 = activity(closure_2[39]);
    if (voiceChannel != null) {
      id = voiceChannel.id;
    }
    tmp6Result = tmp6({ display: "live", voiceChannelId: id, user, activity, analyticsLocations });
    closure_2 = tmp6Result;
    application_id = activity.application_id;
    tmp2Result = tmp2(tmp3[40]);
    obj = {
      location: "User Profile Activity Card",
      applicationId: application_id,
      source: user(tmp3[41]).GameProfileSources.UserProfile,
      trackEntryPointImpression: true,
      sourceUserId: user.id,
    };
    tmp10 = user;
    tmp9Result = tmp2Result(obj);
    closure_3 = tmp9Result;
    items = [];
    items[0] = tmp9Result;
    callback = closure_4.useCallback(() => {
      if (null != closure_3) {
        tmp();
      }
    }, items);
    obj1 = { userId: user.id, onAction: tmp6Result };
    tmp13 = tmp2(tmp3[42])(obj1);
    obj3 = user(tmp3[43]);
    items1 = [, ,];
    items1[0] = closure_12;
    items1[1] = closure_17;
    items1[2] = closure_11;
    stateFromStores = obj3.useStateFromStores(items1, () => {
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
    obj4 = user(tmp3[43]);
    items2 = [];
    items2[0] = closure_8;
    stateFromStores1 = obj4.useStateFromStores(items2, () => {
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
    obj5 = user(tmp3[43]);
    items3 = [, , ,];
    items3[0] = closure_17;
    items3[1] = closure_11;
    items3[2] = closure_15;
    items3[3] = closure_9;
    stateFromStoresObject = obj5.useStateFromStoresObject(items3, () => {
      const voiceStateForUser = VoiceStateStore.getVoiceStateForUser(user.id);
      let channelId;
      if (voiceStateForUser != null) {
        channelId = voiceStateForUser.channelId;
      }
      const channel = ChannelStore.getChannel(channelId);
      const obj = {
        requestToStreamChannel: channel,
        isConnectedToRequestToStreamChannel: null,
        isRequestOnCooldown: null,
      };
      let id;
      const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
      if (channel != null) {
        id = channel.id;
      }
      obj.isConnectedToRequestToStreamChannel = voiceChannelId === id;
      obj.isRequestOnCooldown = RequestToStreamStore.isRequestOnCooldown(user.id);
      return obj;
    });
    ({ requestToStreamChannel, isConnectedToRequestToStreamChannel, isRequestOnCooldown } = stateFromStoresObject);
    MobileRequestToStreamExperiment = user(tmp3[44]).MobileRequestToStreamExperiment;
    str = undefined;
    if (requestToStreamChannel != null) {
      str = requestToStreamChannel.guild_id;
    }
    if (str == null) {
      str = "";
    }
    enabled = MobileRequestToStreamExperiment.useConfig({ guildId: str, location: "UserProfileActivityCard" }).enabled;
    tmp10Result = tmp10(tmp3[45]);
    requestToStreamData = tmp10Result.useRequestToStreamData(user.id, requestToStreamChannel);
    closure_4 = requestToStreamData;
    tmp38Result4 = null;
    if (activity.type !== tmp10(tmp3[33]).ActivityTypes.CUSTOM_STATUS) {
      tmp38Result4 = null;
      if (activity.type !== tmp10(tmp3[33]).ActivityTypes.HANG_STATUS) {
        tmp38 = jsx;
        obj26 = { value: null, children: null };
        obj26.value = analyticsLocations;
        obj27 = {
          onPress: null,
          disabled: null,
          accessibilityRole: "button",
          accessibilityLabel: null,
          children: null,
        };
        obj27.onPress = callback;
        obj27.disabled = null == tmp9Result;
        intl2 = tmp10(tmp3[25]).intl;
        obj28 = { gameName: null };
        obj28.gameName = activity.name;
        obj27.accessibilityLabel = intl2.formatToPlainString(tmp10(tmp3[25]).t["9sZWVp"], obj28);
        tmp39 = jsxs;
        obj29 = { style: null, title: null, titleStyle: null, titleIcon: null, children: null };
        items4 = [,];
        items4[0] = tmp.card;
        items4[1] = global.style;
        obj29.style = items4;
        obj29.title = tmp4.text;
        obj29.titleStyle = tmp.cardTitle;
        tmp38Result = null != tmp4.platformIcon;
        tmp2Result1 = tmp2(tmp3[47]);
        if (tmp38Result) {
          obj30 = { style: null, source: null, size: null, disableColor: true };
          obj30.style = tmp.cardTitleIcon;
          tmp10Result1 = tmp10(tmp3[28]);
          platformIcon = tmp4.platformIcon;
          whitePNG = undefined;
          if (platformIcon != null) {
            whitePNG = platformIcon.whitePNG;
          }
          obj30.source = tmp10Result1.makeSource(whitePNG);
          obj30.size = tmp10(tmp3[48]).IconSizes.SMALL_14;
          tmp38Result = tmp38(tmp10(tmp3[48]).Icon, obj30);
        }
        obj29.titleIcon = tmp38Result;
        tmp21 = ActivityCardBody;
        obj31 = { user: null, activity: null, application: null, onAction: null };
        obj31.user = user;
        obj31.activity = activity;
        obj31.application = stateFromStores1;
        obj31.onAction = tmp6Result;
        items5 = [, , , ,];
        items5[0] = tmp38(ActivityCardBody, obj31);
        tmp38Result1 = null;
        if (tmp2(tmp3[49])(activity)) {
          ({ start, end } = activity.timestamps);
          obj32 = { start: null, end: null };
          obj32.start = start;
          obj32.end = end;
          tmp38Result1 = tmp38(tmp2(tmp3[50]), obj32);
        }
        items5[1] = tmp38Result1;
        tmp38Result2 = null;
        if (null != voiceChannel) {
          tmp38Result2 = null;
          if (null != stateFromStores) {
            obj33 = { guild: null, channel: null, onAction: null, style: null };
            obj33.guild = stateFromStores;
            obj33.channel = voiceChannel;
            obj33.onAction = tmp6Result;
            obj33.style = tmp.voiceChannelDivider;
            tmp38Result2 = tmp38(tmp2(tmp3[51]), obj33);
          }
        }
        items5[2] = tmp38Result2;
        tmp38Result3 = null;
        if (user.id !== currentUser.id) {
          if (tmp2(tmp3[24])(activity)) {
            obj34 = { activity: null, onAction: null };
            obj34.activity = activity;
            obj34.onAction = tmp6Result;
            tmp38Result3 = tmp38(tmp10(tmp3[52]).PlayOnSpotifyButton, obj34);
          } else if (tmp2(tmp3[34])(activity)) {
            obj35 = { user: null, currentUser: null, activity: null, application: null, onAction: null };
            obj35.user = user;
            obj35.currentUser = currentUser;
            obj35.activity = activity;
            obj35.application = stateFromStores1;
            obj35.onAction = tmp6Result;
            tmp38Result3 = tmp38(tmp10(tmp3[52]).JoinActivityButton, obj35);
          } else {
            if (tmp2(tmp3[32])(activity)) {
              tmp10Result2 = tmp10(tmp3[53]);
              tmp26 = globalThis;
              supported_platforms = activity.supported_platforms;
              currentActivityGamePlatform = tmp10Result2.getCurrentActivityGamePlatform();
              if (supported_platforms == null) {
                supported_platforms = [];
              }
              tmp27 = new.target;
              tmp28 = new.target;
              tmp29 = supported_platforms;
              set = new Set(supported_platforms);
              tmp30 = set;
              if (set.has(currentActivityGamePlatform)) {
                if (null != activity.party) {
                  deepLinkUri = undefined;
                  if (stateFromStores1 != null) {
                    deepLinkUri = stateFromStores1.deepLinkUri;
                  }
                  if (null != deepLinkUri) {
                    if (null != activity.session_id) {
                      if (null != stateFromStores1) {
                        obj36 = { user: null, currentUser: null, activity: null, application: null, onAction: null };
                        obj36.user = user;
                        obj36.currentUser = currentUser;
                        obj36.activity = activity;
                        obj36.application = stateFromStores1;
                        obj36.onAction = tmp6Result;
                        tmp38Result3 = tmp38(tmp10(tmp3[52]).JoinGameActivityButton, obj36);
                      }
                    }
                  }
                }
              }
            }
            if (tmp2(tmp3[54])(activity)) {
              obj37 = { activity: null, onAction: null };
              obj37.activity = activity;
              obj37.onAction = tmp6Result;
              tmp38Result3 = tmp38(tmp10(tmp3[52]).WatchActivityButton, obj37);
            } else {
              if (null != activity.buttons) {
                num = 0;
                if (activity.buttons.length > 0) {
                  tmp34 = View;
                  obj38 = { style: null, children: null };
                  obj38.style = tmp.customButtons;
                  buttons = activity.buttons;
                  obj38.children = buttons.map((item, index) =>
                    __initData2(
                      UserProfileActivityButtons.CustomActivityButton,
                      { index, user, activity, onAction },
                      index,
                    ),
                  );
                  tmp38Result3 = tmp38(View, obj38);
                }
              }
              tmp38Result3 = null;
              if (!tmp2(tmp3[55])(activity)) {
                if (tmp2(tmp3[56])(activity)) {
                  obj39 = { type: null, onAction: null };
                  tmp33 = PlatformTypes;
                  obj39.type = PlatformTypes.XBOX;
                  obj39.onAction = tmp6Result;
                  tmp38Result3 = tmp38(tmp10(tmp3[52]).ConnectPlatformButton, obj39);
                } else {
                  tmp38Result3 = null;
                  if (tmp2(tmp3[57])(activity)) {
                    obj40 = { type: null, onAction: null };
                    tmp32 = PlatformTypes;
                    obj40.type = PlatformTypes.PLAYSTATION;
                    obj40.onAction = tmp6Result;
                    tmp38Result3 = tmp38(tmp10(tmp3[52]).ConnectPlatformButton, obj40);
                  }
                }
              }
            }
          }
        }
        items5[3] = tmp38Result3;
        if (enabled) {
          enabled = null != requestToStreamData;
        }
        if (enabled) {
          playingApplication = requestToStreamData.playingApplication;
          id1 = undefined;
          if (playingApplication != null) {
            id1 = playingApplication.id;
          }
          id2 = undefined;
          if (stateFromStores1 != null) {
            id2 = stateFromStores1.id;
          }
          enabled = id1 === id2;
        }
        if (enabled) {
          id3 = undefined;
          if (stateFromStores1 != null) {
            id3 = stateFromStores1.id;
          }
          enabled = null != id3;
        }
        if (enabled) {
          enabled = isConnectedToRequestToStreamChannel;
        }
        if (enabled) {
          obj41 = { onPress: null, text: null, disabled: null, onPressDisabled: null };
          obj41.onPress = function onPress() {
            const result = UserProfileAnalyticsUtils.trackUserProfileAction({ action: "PRESS_REQUEST_TO_STREAM" });
            const result1 = requestToStreamData.handleRequestToStream({ analyticsLocation: "user_profile" });
          };
          intl = tmp10(tmp3[25]).intl;
          obj41.text = intl.string(tmp2(tmp3[60]).DKHhec);
          obj41.disabled = isRequestOnCooldown;
          obj41.onPressDisabled = function onRequestToStreamDisabledPress() {
            const obj2 = { text: null };
            const intl = user(onAction[25]).intl;
            obj2.text = intl.string(activity(onAction[60]).mVFTUg);
            activity(onAction[61]).open("REQUEST_TO_STREAM_DISABLED", obj2);
          };
          enabled = tmp38(tmp10(tmp3[58]).Button, obj41);
        }
        items5[4] = enabled;
        obj29.children = items5;
        obj27.children = tmp39(tmp2Result1, obj29);
        obj26.children = tmp38(tmp10(tmp3[46]).PressableOpacity, obj27);
        tmp38Result4 = tmp38(tmp10(tmp3[37]).AnalyticsLocationProvider, obj26);
      }
    }
    return tmp38Result4;
  }
}
function StreamActivityCard(user) {
  user = user.user;
  const stream = user.stream;
  const activity = user.activity;
  closure_4 = undefined;
  const tmp = closure_25();
  const items = [ChannelStore];
  const stateFromStores = user(activity[43]).useStateFromStores(items, () => ChannelStore.getChannel(stream.channelId));
  let obj = user(activity[43]);
  const items1 = [VoiceStateStore];
  const stateFromStores1 = user(activity[43]).useStateFromStores(items1, () => {
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    return VoiceStateStore.isInChannel(id);
  });
  let obj2 = user(activity[43]);
  const items2 = [GuildStore];
  const stateFromStores2 = user(activity[43]).useStateFromStores(items2, () => GuildStore.getGuild(stream.guildId));
  const obj3 = user(activity[43]);
  const items3 = [PresenceStore];
  const stateFromStores3 = user(activity[43]).useStateFromStores(items3, () =>
    PresenceStore.findActivity(user.id, (arg0) => stream(activity[32])(arg0) && !stream(activity[62])(arg0)),
  );
  const obj4 = user(activity[43]);
  const items4 = [ApplicationStreamingStore];
  const stateFromStores4 = user(activity[43]).useStateFromStores(items4, () =>
    ApplicationStreamingStore.getActiveStreamForUser(user.id, undefined),
  );
  let ownerId;
  const obj5 = user(activity[43]);
  if (stateFromStores4 != null) {
    ownerId = stateFromStores4.ownerId;
  }
  const tmp10 = stream(activity[63]);
  ({ effectiveVolume, handleVolumeChange } = stream(activity[63])(
    ownerId,
    user(activity[64]).MediaEngineContextTypes.STREAM,
  ));
  const tmp10Result = stream(activity[63])(ownerId, user(activity[64]).MediaEngineContextTypes.STREAM);
  const items5 = [ApplicationStore];
  const stateFromStores5 = user(activity[43]).useStateFromStores(items5, () => {
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
  const tmp2Result = user(activity[43]);
  const tmp2Result2 = user(activity[65]);
  const analyticsLocations = stream(activity[37])(tmp9(tmp3[38]).USER_PROFILE_LIVE_ACTIVITY_CARD).analyticsLocations;
  let id;
  const tmp9Result = stream(activity[37]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp9Result1Result = stream(activity[39])({
    display: "live",
    voiceChannelId: id,
    user,
    stream,
    analyticsLocations,
  });
  closure_4 = tmp9Result1Result;
  stream(activity[42])({ userId: user.id, onAction: tmp9Result1Result });
  const obj6 = { userId: user.id, onAction: tmp9Result1Result };
  const tmp9Result5 = stream(activity[39]);
  const obj7 = { value: analyticsLocations, children: null };
  const obj8 = { style: null, title: null, titleStyle: null, titleIcon: null, children: null };
  const items6 = [tmp.card, user.style];
  obj8.style = items6;
  const tmp9Result6 = stream(activity[66]);
  if (null != stateFromStores3) {
    const intl2 = tmp2(tmp3[25]).intl;
    const obj9 = { name: stateFromStores3.name };
    let formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[25]).t["4CQq9Q"], obj9);
  } else {
    const intl = tmp2(tmp3[25]).intl;
    formatToPlainStringResult = intl.string(tmp2(tmp3[25]).t["Jpkr/q"]);
  }
  obj8.title = formatToPlainStringResult;
  obj8.titleStyle = tmp.cardTitle;
  obj8.titleIcon = closure_22(user(activity[48]).LiveTag, {});
  const obj10 = { style: tmp.streamPreview, children: null };
  const obj11 = {
    mode: "a",
    stream,
    disabled: !stateFromStores(tmp2Result2.useCanWatchStream(stateFromStores), 1)[0],
    onPress: function handlePressImage() {
      closure_4({ action: "PRESS_IMAGE" });
      const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(stream.channelId);
      const result = StreamActionCreators.watchStreamAndTransitionToStream(stream);
      ActionSheetActionCreatorsDefault.hideAllActionSheets();
    },
  };
  obj10.children = closure_22(user(activity[67]).VoicePanelStreamPreview, obj11);
  const items7 = [closure_22(closure_7, obj10), , , ,];
  let tmp19Result =
    null != stateFromStores4 &&
    !tmp9Result6.useConfig({ location: "UserProfileVoiceSettings" }).nonContextualStreamOutputPresent;
  if (tmp19Result) {
    const obj12 = { value: effectiveVolume, onValueChange: handleVolumeChange, accessibilityLabel: null };
    const intl3 = tmp2(tmp3[25]).intl;
    obj12.accessibilityLabel = intl3.string(tmp2(tmp3[25]).t.pEAl4b);
    tmp19Result = closure_22(tmp9(tmp3[71]), obj12, "set-stream-volume");
    const tmp9Result8 = tmp9(tmp3[71]);
  }
  items7[1] = tmp19Result;
  let tmp19Result4 = null != activity && tmp9(tmp3[34])(activity);
  if (tmp19Result4) {
    const obj13 = { user, activity, application: stateFromStores5, onAction: tmp9Result1Result };
    tmp19Result4 = closure_22(ActivityCardBody, obj13);
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
    tmp19Result5 = closure_22(tmp9(tmp3[51]), obj14);
  }
  items7[3] = tmp19Result5;
  let tmp19Result6 = null != stateFromStores;
  if (tmp19Result6) {
    const obj15 = { channel: stateFromStores, isInChannel: stateFromStores1, onAction: tmp9Result1Result };
    tmp19Result6 = closure_22(tmp2(tmp3[52]).VoiceChannelButtons, obj15);
  }
  items7[4] = tmp19Result6;
  obj8.children = items7;
  obj7.children = closure_23(stream(activity[47]), obj8);
  return closure_22(user(activity[37]).AnalyticsLocationProvider, obj7);
}
function VoiceCallActivityCard(arg0) {
  ({ user, channel } = arg0);
  let stateFromStores;
  dependencyMap = undefined;
  ({ isInChannel, style } = arg0);
  const tmp = closure_25();
  const tmp5 = stateFromStores(5652)(channel);
  const tmp4 = stateFromStores(14877)(channel);
  const items = [GuildStore];
  stateFromStores = channel(504).useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
  let obj = channel(504);
  const items1 = [PermissionStore];
  const stateFromStores1 = channel(504).useStateFromStores(items1, () => {
    let isPrivateResult = channel.isPrivate();
    if (!isPrivateResult) {
      isPrivateResult = PermissionStore.can(constants.CONNECT, channel);
    }
    return isPrivateResult;
  });
  let obj2 = channel(504);
  const tmp9 = stateFromStores(7326);
  ({ newestAnalyticsLocation: c2, analyticsLocations } = stateFromStores(7326)(
    stateFromStores(7351).USER_PROFILE_VOICE_ACTIVITY_CARD,
  ));
  const tmp11 = stateFromStores(14866)({
    display: "voice",
    activity: { type: "VOICE" },
    voiceChannelId: channel.id,
    user,
    analyticsLocations,
  });
  closure_3 = tmp11;
  stateFromStores(14867)({ userId: user.id, onAction: tmp11 });
  const obj5 = { style: null, title: null, titleStyle: null, children: null };
  const items2 = [tmp.card, style];
  obj5.style = items2;
  const obj3 = { display: "voice", activity: { type: "VOICE" }, voiceChannelId: channel.id, user, analyticsLocations };
  const obj4 = { userId: user.id, onAction: tmp11 };
  const tmp9Result = stateFromStores(7326)(stateFromStores(7351).USER_PROFILE_VOICE_ACTIVITY_CARD);
  if (!channel.isDM()) {
    if (!channel.isGroupDM()) {
      const intl = channel(1113).intl;
      const string = intl.string;
      const t = channel(1113).t;
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
    const items3 = [closure_22(tmp2(14891), obj7)];
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
      obj9.accessibilityLabel = tmp2(9085)(obj10);
      const intl3 = channel(1113).intl;
      obj9.accessibilityHint = intl3.string(channel(1113).t["9C444m"]);
      obj9.onPress = function onPress() {
        closure_3({ action: "OPEN_VOICE_CHANNEL" });
        ActionSheetActionCreatorsDefault.hideAllActionSheets();
        ModalActionCreatorsDefault.popAll();
        PrivateChannelCallUtils.openGuildVoiceModal(channel, c2);
      };
      const obj11 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
      const obj12 = { style: tmp.voiceCallNameIconWrapper, children: null };
      const obj13 = { channel, size: "sm", color: "mobile-text-heading-primary" };
      obj12.children = closure_22(tmp2(10765), obj13);
      const items4 = [closure_22(closure_7, obj12), tmp5];
      obj11.children = items4;
      obj9.children = closure_23(channel(5624).Text, obj11);
      let tmp13Result = closure_22(channel(6980).PressableOpacity, obj9);
    } else {
      const obj14 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
      const obj15 = { style: tmp.voiceCallNameIconWrapper, children: null };
      const obj16 = { channel, size: "sm", color: "mobile-text-heading-primary" };
      obj15.children = closure_22(tmp2(10765), obj16);
      const items5 = [closure_22(closure_7, obj15), tmp5];
      obj14.children = items5;
      tmp13Result = closure_23(channel(5624).Text, obj14);
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
      const intl4 = channel(1113).intl;
      obj17.accessibilityHint = intl4.string(channel(1113).t.KLOhbO);
      const intl5 = channel(1113).intl;
      const obj18 = { guildName: stateFromStores.name };
      obj17.accessibilityLabel = intl5.formatToPlainString(channel(1113).t["hq/Qze"], obj18);
      obj17.onPress = function onPress() {
        closure_3({ action: "OPEN_VOICE_GUILD" });
        transitionToGuild.transitionToGuild(stateFromStores.id);
        closeVoicePanelsDefault();
        ActionSheetActionCreatorsDefault.hideAllActionSheets();
      };
      const obj19 = { variant: "text-xs/medium", children: null };
      const intl6 = channel(1113).intl;
      const obj20 = { guildName: stateFromStores.name };
      obj19.children = intl6.format(channel(1113).t["hq/Qze"], obj20);
      obj17.children = closure_22(channel(5624).Text, obj19);
      tmp18Result2 = closure_22(channel(6980).PressableOpacity, obj17);
    }
    items6[1] = tmp18Result2;
    obj8.children = items6;
    items3[1] = closure_23(closure_7, obj8);
    obj6.children = items3;
    const items7 = [closure_23(closure_7, obj6)];
    const obj21 = { channel, isInChannel, onAction: tmp11 };
    items7[1] = closure_22(channel(14884).VoiceChannelButtons, obj21);
    obj5.children = items7;
    return closure_23(tmp14, obj5);
  }
  const intl2 = channel(1113).intl;
  stringResult = intl2.string(channel(1113).t["9FaEzi"]);
  tmp14 = stateFromStores(7376);
}
get_ActivityIndicator = fn(17);
({ TouchableOpacity: hasOwnProperty, TouchableWithoutFeedback: metroRequire, View: closure_7 } = get_ActivityIndicator);
const CARD_PADDING = fn(7377).CARD_PADDING;
const Constants = fn(1072);
({ Permissions: closure_19, PlatformTypes: closure_20, StatusTypes: closure_21 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_22, jsxs: closure_23, Fragment: closure_24 } = jsxProd);
const createStyles = fn(5014);
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
const PlatformUtils = fn(1375);
let num = 16;
if (PlatformUtils.isAndroid()) {
  num = 12;
}
obj2.voiceCallNameIconWrapper = { width: 22, height: num, justifyContent: "center" };
const __initData4 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivity.tsx");

export default function UserProfileActivity(guildId) {
  const user = guildId.user;
  const currentUser = guildId.currentUser;
  const style = guildId.style;
  stream = undefined;
  const tmp = closure_25();
  closure_3 = tmp;
  ({ live, stream } = currentUser(style[81])(user.id));
  const tmp5 = currentUser(style[82])({ userId: user.id, guildId: guildId.guildId });
  const voiceChannel = tmp5.voiceChannel;
  const voiceActivity = tmp5.voiceActivity;
  let obj = { userId: user.id, guildId: guildId.guildId };
  const tmp4 = currentUser(style[81])(user.id);
  const items = [VoiceStateStore];
  const stateFromStores = user(style[43]).useStateFromStores(items, () => {
    let isInChannelResult = null != voiceChannel;
    if (isInChannelResult) {
      isInChannelResult = VoiceStateStore.isInChannel(tmp.id);
    }
    return isInChannelResult;
  });
  closure_8 = user.id === currentUser.id;
  let obj2 = user(style[43]);
  const items1 = [SelfPresenceStore, PresenceStore];
  const stateFromStores1 = user(style[43]).useStateFromStores(items1, () => {
    if (closure_8) {
      let status = SelfPresenceStore.getStatus();
    } else {
      status = PresenceStore.getStatus(user.id);
    }
    return status === constants3.OFFLINE || status === constants3.INVISIBLE;
  });
  let obj3 = user(style[43]);
  const items2 = [UserProfileStore];
  const stateFromStores2 = user(style[43]).useStateFromStores(items2, () => {
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
        obj5.children = closure_22(tmp2(tmp3[83]), obj6);
        return closure_22(tmp2(tmp3[47]), obj5);
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
        tmp20 = closure_22(StreamActivityCard, obj7);
      }
      const obj8 = { children: null };
      items5[1] = tmp20;
      items5[2] = found.map((activity, index) => {
        let application_id = activity.application_id;
        if (application_id == null) {
          application_id = index;
        }
        return __initData2(ActivityCard, { user, currentUser, activity, style }, application_id);
      });
      obj8.children = items5;
      return closure_23(closure_24, obj8);
    } else {
      let items7 = function renderVoiceActivityCard(voiceChannel) {
        if (null != stream) {
          if (stream.channelId === voiceChannel.id) {
            const obj2 = { user, stream, activity: voiceActivity, style: closure_3.voiceActivityCard };
            let tmp8 = __initData2(StreamActivityCard, obj2);
          }
          return tmp8;
        }
        if (null != voiceActivity) {
          const obj3 = { user, currentUser, activity: tmp2, voiceChannel, style: closure_3.voiceActivityCard };
          tmp8 = __initData2(ActivityCard, obj3);
        } else {
          const obj = { user, channel: voiceChannel, isInChannel: stateFromStores, style: closure_3.voiceActivityCard };
          tmp8 = __initData2(VoiceCallActivityCard, obj);
        }
      };
      if (stateFromStores) {
        const obj9 = { style: null, children: null };
        const items6 = [tmp.card, style];
        obj9.style = items6;
        const tmp2Result3 = tmp2(tmp3[47]);
        items7 = [,];
        items7[0] = items7(voiceChannel);
        const obj10 = { user, currentUser, channel: voiceChannel, style: null };
        const items8 = [,];
        ({ voiceSettings: arr8[0], voiceSettingsDivider: arr8[1] } = tmp);
        obj10.style = items8;
        items7[1] = closure_22(tmp2(tmp3[83]), obj10);
        obj9.children = items7;
        let tmp10Result = closure_23(tmp2Result3, obj9);
        const items7Result = items7(voiceChannel);
      } else {
        const obj11 = { style: null, children: null };
        const items9 = [tmp.card, style];
        obj11.style = items9;
        obj11.children = items7(voiceChannel);
        tmp10Result = closure_22(tmp2(tmp3[47]), obj11);
        const tmp2Result4 = tmp2(tmp3[47]);
      }
    }
  }
  const obj4 = user(style[43]);
}
export { ActivityCard };
