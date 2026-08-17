// discord_app/modules/user_profile/native/UserProfileActivity.tsx
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4734 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "addApplication" /* 4478 */;
import closure_9 from "reset" /* 4652 */;
import closure_10 from "ensureGuildLoaded" /* 1391 */;
import closure_11 from "createGuildRecordFromRust" /* 1910 */;
import closure_12 from "getUncachedChannelPermissions" /* 4021 */;
import closure_13 from "sortActivity" /* 4559 */;
import closure_14 from "filterPlayingActivities" /* 7250 */;
import closure_15 from "updateVoiceState" /* 4542 */;
import closure_16 from "createUserWidgetFromServer" /* 5365 */;
import { CARD_PADDING } from "ARBITRARY_LARGE_OFFSET" /* 7186 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import set from "set" /* 500 */;

require = arg1;
function ActivityCardText(children) {
  const merged = Object.assign(children, Object.create(null));
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
      tmp3 = callback(Text.Text, obj);
    }
  }
  return tmp3;
}
function MaybeLink(href) {
  href = href.href;
  const children = href.children;
  let tmp = children;
  if (null != href) {
    let obj = { accessibilityRole: "link", onPress: null, children: null };
    obj[1] = function onPress() {
      let obj = href(closure_1_2[19]);
      obj = { href };
      return obj.handleClick(obj);
    };
    obj[2] = children;
    tmp = callback(closure_5, obj);
  }
  return tmp;
}
function ActivityCardBody(user) {
  user = user.user;
  const activity = user.activity;
  const onAction = user.onAction;
  const tmp = callback2();
  let IM4J4e = user;
  let obj = user(onAction[20]);
  const imageForActivity = obj.useImageForActivity(activity, user.application, "user_profile_activity_native");
  ({ largeImage, smallImage } = imageForActivity);
  user(onAction[21]);
  obj = { style: tmp.body, children: null };
  if (user.bot) {
    const items = [tmp8, ];
    obj = { style: null, children: null };
    obj[0] = tmp.content;
    if (activity(tmp2[22])(activity)) {
      obj1 = { variant: "text-md/semibold", children: null };
      const obj2 = { text: null, activity: null, onPress: null };
      obj2[0] = activity.details;
      obj2[1] = activity;
      obj2[2] = function onPress() {
        return onAction({ action: "OPEN_SPOTIFY_TRACK" });
      };
      obj1[1] = tmp24(IM4J4e(tmp2[24]).SpotifyTrack, obj2);
      let tmp24Result = tmp24(ActivityCardText, obj1);
      let tmp29 = ActivityCardText;
      let tmp30 = tmp24;
      let tmp31 = tmp24;
    } else {
      const obj3 = { href: null, children: null };
      obj3[0] = activity.details_url;
      if (tmp23(tmp2[30])(activity)) {
        let name = activity.name;
      } else {
        name = activity.details;
        if (name == null) {
          name = activity.name;
        }
      }
      const obj4 = { variant: "text-md/semibold", children: null };
      obj4[1] = name;
      obj3[1] = tmp24(ActivityCardText, obj4);
      tmp24Result = tmp24(MaybeLink, obj3);
      tmp29 = tmp26;
      tmp30 = tmp24;
      tmp31 = tmp24;
      const tmp25 = MaybeLink;
    }
    const items1 = [tmp24Result, , , ];
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
          const obj6 = { artists: null, activity: null, userId: null, onPress: null };
          obj6[0] = trimmed;
          obj6[1] = activity;
          obj6[2] = user.id;
          obj6[3] = function onPress() {
            return onAction({ action: "OPEN_SPOTIFY_ARTIST" });
          };
          obj5[2] = tmp30(IM4J4e(tmp2[24]).SpotifyArtists, obj6);
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
      const obj7 = { href: null, children: null };
      obj7[0] = activity.state_url;
      const obj8 = { variant: "text-xs/medium", lineClamp: 1, children: null };
      obj8[2] = state;
      obj7[1] = tmp30(tmp29, obj8);
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
            obj9[2] = items2.join(" ");
            tmp30Result1 = tmp30(tmp29, obj9);
          } else if (0 === activity.party.size[1]) {
            const intl3 = IM4J4e(tmp2[23]).intl;
            IM4J4e = IM4J4e(tmp2[23]).t.IM4J4e;
            const obj10 = { count: null };
            obj10[0] = activity.party.size[0];
            let formatToPlainStringResult = intl3.formatToPlainString(IM4J4e, obj10);
          } else {
            const intl2 = IM4J4e(tmp2[23]).intl;
            const obj11 = { count: null, max: null };
            obj11[0] = activity.party.size[0];
            obj11[1] = activity.party.size[1];
            formatToPlainStringResult = intl2.formatToPlainString(IM4J4e(tmp2[23]).t["u//9By"], obj11);
          }
        } else {
          const assets3 = activity.assets;
          let large_url;
          if (assets3 != null) {
            large_url = assets3.large_url;
          }
          const obj12 = { href: null, children: null };
          obj12[0] = large_url;
          const assets4 = activity.assets;
          let large_text;
          if (assets4 != null) {
            large_text = assets4.large_text;
          }
          const obj13 = { variant: "text-xs/medium", lineClamp: 1, children: null };
          obj13[2] = large_text;
          obj12[1] = tmp30(tmp29, obj13);
          tmp30Result1 = tmp30(MaybeLink, obj12);
          const tmp43 = MaybeLink;
        }
      }
    }
    items1[2] = tmp30Result1;
    const bot = user.bot;
    let tmp31Result = !bot;
    if (!bot) {
      const obj14 = { style: null, activity: null };
      obj14[0] = tmp.badges;
      obj14[1] = activity;
      tmp31Result = tmp31(tmp23(tmp2[32]), obj14);
    }
    items1[3] = tmp31Result;
    obj[1] = items1;
    items[1] = tmp6(tmp7, obj);
    obj[1] = items;
    return tmp6(tmp7, obj);
  } else {
    if (null == largeImage) {
      if (null != largeImage) {
        const items3 = [tmp.imageContainer, ];
        const obj15 = { style: null, children: null };
        items3[1] = activity(tmp2[27])(activity) ? tmp.crunchyrollImageAspectRatio : tmp.imageAspectRatio;
        obj15[0] = items3;
        const assets = activity.assets;
        let large_url1;
        if (assets != null) {
          large_url1 = assets.large_url;
        }
        const obj16 = { href: null, children: null };
        obj16[0] = large_url1;
        const obj17 = { source: null, alt: null, style: null };
        let tmp12Result = tmp12(tmp2[25]);
        obj17[0] = IM4J4e(tmp2[26]).makeSource(largeImage.src);
        obj17[1] = largeImage.alt;
        obj17[2] = tmp.largeImage;
        obj16[1] = callback(tmp12Result, obj17);
        const items4 = [callback(MaybeLink, obj16), ];
        let tmp13Result = null != smallImage;
        if (tmp13Result) {
          const obj18 = { style: null, children: null };
          obj18[0] = tmp.smallImageBackground;
          const assets2 = activity.assets;
          let small_url;
          if (assets2 != null) {
            small_url = assets2.small_url;
          }
          const obj19 = { href: null, children: null };
          obj19[0] = small_url;
          const obj20 = { source: null, alt: null, style: null };
          tmp12Result = tmp12(tmp2[25]);
          obj20[0] = IM4J4e(tmp2[26]).makeSource(smallImage.src);
          obj20[1] = smallImage.alt;
          obj20[2] = tmp.smallImage;
          obj19[1] = tmp13(tmp12Result, obj20);
          obj18[1] = tmp13(tmp14, obj19);
          tmp13Result = tmp13(tmp7, obj18);
          const IM4J4eResult1 = IM4J4e(tmp2[26]);
        }
        items4[1] = tmp13Result;
        obj15[1] = items4;
        let tmp51Result = tmp6(tmp7, obj15);
        const IM4J4eResult = IM4J4e(tmp2[26]);
      } else {
        const obj21 = { style: null, children: null };
        const items5 = [, ];
        ({ imageContainer: arr7[0], imageAspectRatio: arr7[1] } = tmp);
        obj21[0] = items5;
        const obj22 = { size: "custom", style: null, color: null };
        obj22[1] = tmp.largeImage;
        const IM4J4eResult2 = IM4J4e(tmp2[29]);
        const colors = activity(tmp2[16]).colors;
        obj22[2] = IM4J4e(tmp2[29]).isThemeDark(tmp5) ? colors.WHITE : colors.BLACK;
        obj21[1] = callback(IM4J4e(tmp2[28]).UnknownGameIcon, obj22);
        tmp51Result = tmp51(tmp7, obj21);
        const isThemeDarkResult = IM4J4e(tmp2[29]).isThemeDark(tmp5);
      }
    } else {
      let tmp10 = activity;
    }
    const obj23 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, onPress: null, children: null };
    obj23[1] = largeImage.alt;
    const intl = IM4J4e(tmp2[23]).intl;
    obj23[2] = intl.string(IM4J4e(tmp2[23]).t.sjjOk2);
    obj23[3] = function onPress() {
      onAction({ action: "OPEN_SPOTIFY_ALBUM" });
      user(onAction[24]).openAlbum(activity, user.id);
    };
    const obj24 = { style: null, children: null };
    const items6 = [, ];
    ({ imageContainer: arr3[0], imageAspectRatio: arr3[1] } = tmp);
    obj24[0] = items6;
    tmp10 = tmp10(tmp2[25]);
    const obj25 = { source: null, alt: null, style: null };
    obj25[0] = IM4J4e(tmp2[26]).makeSource(largeImage.src);
    obj25[1] = largeImage.alt;
    largeImage = tmp.largeImage;
    obj25[2] = largeImage;
    obj24[1] = callback(tmp10, obj25);
    obj23[4] = callback(tmp7, obj24);
    tmp51Result = callback(closure_6, obj23);
    const IM4J4eResult3 = IM4J4e(tmp2[26]);
  }
}
function ActivityCard(user) {
  user = user.user;
  ({ currentUser, activity } = user);
  const voiceChannel = user.voiceChannel;
  dependencyMap = undefined;
  closure_3 = undefined;
  const tmp = callback2();
  let obj = dependencyMap;
  const tmp3 = activity(12111)(activity);
  const analyticsLocations = activity(7139)(activity(7159).USER_PROFILE_LIVE_ACTIVITY_CARD).analyticsLocations;
  let id;
  const tmp4 = activity(7139);
  if (voiceChannel != null) {
    id = voiceChannel.id;
  }
  const tmp5Result = activity(12117)({ display: "live", voiceChannelId: id, user, activity, analyticsLocations });
  dependencyMap = tmp5Result;
  const application_id = activity.application_id;
  let tmp2Result = tmp2(9519);
  obj = { location: "User Profile Activity Card", applicationId: application_id, source: user(9101).GameProfileSources.UserProfile, trackEntryPointImpression: true, sourceUserId: user.id };
  let ConnectPlatformButton = user;
  const tmp2ResultResult = tmp2Result(obj);
  closure_3 = tmp2ResultResult;
  const items = [tmp2ResultResult];
  const callback = React.useCallback(() => {
    if (null != closure_3) {
      tmp();
    }
  }, items);
  obj = { userId: user.id, onAction: tmp5Result };
  activity(12118)(obj);
  let obj3 = user(589);
  const items1 = [closure_11, closure_15, closure_10];
  const stateFromStores = obj3.useStateFromStores(items1, () => {
    if (activity(7259)(activity)) {
      let session_id;
      if (tmp != null) {
        session_id = tmp.session_id;
      }
      const voiceStateForSession = closure_1_15.getVoiceStateForSession(user.id, session_id);
      let channelId;
      if (voiceStateForSession != null) {
        channelId = voiceStateForSession.channelId;
      }
      const channel = closure_1_10.getChannel(channelId);
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      return closure_1_11.getGuild(guildId);
    } else {
      return null;
    }
  });
  let obj4 = user(589);
  const items2 = [closure_8];
  const stateFromStores1 = obj4.useStateFromStores(items2, () => {
    if (null != activity.application_id) {
      let application = closure_1_8.getApplication(tmp.application_id);
    } else {
      application = null;
      if (null != tmp.name) {
        application = closure_1_8.getApplicationByName(tmp.name);
      }
    }
    return application;
  });
  let tmp15 = null;
  if (activity.type !== constants.CUSTOM_STATUS) {
    tmp15 = null;
    if (activity.type !== tmp14.HANG_STATUS) {
      obj1 = { value: null, children: null };
      obj1[0] = analyticsLocations;
      let obj2 = { onPress: null, disabled: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
      obj2[0] = callback;
      obj2[1] = null == tmp2ResultResult;
      const intl = ConnectPlatformButton(1236).intl;
      obj3 = { gameName: null };
      obj3[0] = activity.name;
      obj2[3] = intl.formatToPlainString(ConnectPlatformButton(1236).t["9sZWVp"], obj3);
      obj4 = { style: null, title: null, titleStyle: null, titleIcon: null, children: null };
      const items3 = [tmp.card, user.style];
      obj4[0] = items3;
      obj4[1] = tmp3.text;
      obj4[2] = tmp.cardTitle;
      let tmp34Result = null != tmp3.platformIcon;
      tmp2Result = tmp2(7185);
      if (tmp34Result) {
        const obj5 = { style: null, source: null, size: null, disableColor: true };
        obj5[0] = tmp.cardTitleIcon;
        const result = ConnectPlatformButton(1435);
        const platformIcon = tmp3.platformIcon;
        let whitePNG;
        if (platformIcon != null) {
          whitePNG = platformIcon.whitePNG;
        }
        obj5[1] = result.makeSource(whitePNG);
        obj5[2] = ConnectPlatformButton(1297).IconSizes.SMALL_14;
        tmp34Result = tmp34(ConnectPlatformButton(1297).Icon, obj5);
      }
      obj4[3] = tmp34Result;
      const obj6 = { user: null, activity: null, application: null, onAction: null };
      obj6[0] = user;
      obj6[1] = activity;
      obj6[2] = stateFromStores1;
      obj6[3] = tmp5Result;
      const items4 = [closure_21(ActivityCardBody, obj6), , , ];
      tmp34Result = null;
      if (tmp2(12104)(activity)) {
        ({ start, end } = activity.timestamps);
        const obj7 = { start: null, end: null };
        obj7[0] = start;
        obj7[1] = end;
        tmp34Result = tmp34(tmp2(12119), obj7);
      }
      items4[1] = tmp34Result;
      let tmp34Result1 = null;
      if (null != voiceChannel) {
        tmp34Result1 = null;
        if (null != stateFromStores) {
          const obj8 = { guild: null, channel: null, onAction: null, style: null };
          obj8[0] = stateFromStores;
          obj8[1] = voiceChannel;
          obj8[2] = tmp5Result;
          obj8[3] = tmp.voiceChannelDivider;
          tmp34Result1 = tmp34(tmp2(12121), obj8);
        }
      }
      items4[2] = tmp34Result1;
      if (tmp2(12099)(activity)) {
        ConnectPlatformButton = ConnectPlatformButton(12129).ConnectPlatformButton;
        obj = { type: null, onAction: null };
        obj[0] = constants2.XBOX;
        obj[1] = tmp5Result;
        let tmp34Result2 = tmp34(ConnectPlatformButton, obj);
      } else if (tmp2(12100)(activity)) {
        const obj9 = { type: null, onAction: null };
        obj9[0] = constants2.PLAYSTATION;
        obj9[1] = tmp5Result;
        tmp34Result2 = tmp34(ConnectPlatformButton(12129).ConnectPlatformButton, obj9);
      } else {
        tmp34Result2 = null;
        if (user.id !== currentUser.id) {
          if (tmp2(7261)(activity)) {
            const obj10 = { activity: null, onAction: null };
            obj10[0] = activity;
            obj10[1] = tmp5Result;
            tmp34Result2 = tmp34(ConnectPlatformButton(12129).PlayOnSpotifyButton, obj10);
          } else if (tmp2(7259)(activity)) {
            const obj11 = { user: null, currentUser: null, activity: null, application: null, onAction: null };
            obj11[0] = user;
            obj11[1] = currentUser;
            obj11[2] = activity;
            obj11[3] = stateFromStores1;
            obj11[4] = tmp5Result;
            tmp34Result2 = tmp34(ConnectPlatformButton(12129).JoinActivityButton, obj11);
          } else {
            if (tmp2(9902)(activity)) {
              const result1 = ConnectPlatformButton(12132);
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
                    const obj12 = { user: null, currentUser: null, activity: null, application: null, onAction: null };
                    obj12[0] = user;
                    obj12[1] = currentUser;
                    obj12[2] = activity;
                    obj12[3] = stateFromStores1;
                    obj12[4] = tmp5Result;
                    tmp34Result2 = tmp34(ConnectPlatformButton(12129).JoinGameActivityButton, obj12);
                  }
                }
              }
            }
            if (tmp2(8411)(activity)) {
              const obj13 = { activity: null, onAction: null };
              obj13[0] = activity;
              obj13[1] = tmp5Result;
              let tmp34Result3 = tmp34(ConnectPlatformButton(12129).WatchActivityButton, obj13);
            } else {
              tmp34Result3 = null;
              if (null != activity.buttons) {
                tmp34Result3 = null;
                if (activity.buttons.length > 0) {
                  const obj14 = { style: null, children: null };
                  obj14[0] = tmp.customButtons;
                  const buttons = activity.buttons;
                  obj14[1] = buttons.map((arg0, index) => closure_1_21(user(12129).CustomActivityButton, { index, user, activity, onAction: dependencyMap }, index));
                  tmp34Result3 = tmp34(closure_7, obj14);
                }
              }
            }
            tmp34Result2 = tmp34Result3;
          }
        }
      }
      items4[3] = tmp34Result2;
      obj4[4] = items4;
      obj4 = closure_22(tmp2Result, obj4);
      obj2[4] = obj4;
      obj2 = tmp34(ConnectPlatformButton(5433).PressableOpacity, obj2);
      obj1[1] = obj2;
      closure_21(ConnectPlatformButton(7139).AnalyticsLocationProvider, obj1);
      const tmp35 = closure_22;
    }
  }
  return tmp15;
}
function StreamActivityCard(user) {
  user = user.user;
  const stream = user.stream;
  const activity = user.activity;
  let stateFromStores;
  closure_4 = undefined;
  const tmp = callback2();
  let obj = user(activity[40]);
  const items = [closure_10];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_10.getChannel(stream.channelId));
  obj1 = user(activity[40]);
  const items1 = [closure_15];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    return closure_1_15.isInChannel(id);
  });
  let obj2 = user(activity[40]);
  const items2 = [closure_11];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => closure_1_11.getGuild(stream.guildId));
  let obj3 = user(activity[40]);
  const items3 = [closure_13];
  const stateFromStores3 = obj3.useStateFromStores(items3, () => closure_1_13.findActivity(user.id, (arg0) => callback(table[30])(arg0) && !callback(table[52])(arg0)));
  let obj4 = user(activity[40]);
  const items4 = [closure_9];
  const stateFromStores4 = obj4.useStateFromStores(items4, () => closure_1_9.getActiveStreamForUser(user.id, undefined));
  let ownerId;
  if (stateFromStores4 != null) {
    ownerId = stateFromStores4.ownerId;
  }
  const tmp10 = stream(activity[53]);
  ({ effectiveVolume, handleVolumeChange } = stream(activity[53])(ownerId, user(activity[54]).MediaEngineContextTypes.STREAM));
  let tmp2Result = tmp2(tmp3[40]);
  const items5 = [closure_8];
  const stateFromStores5 = tmp2Result.useStateFromStores(items5, () => {
    let application_id;
    if (activity != null) {
      application_id = tmp.application_id;
    }
    if (null != application_id) {
      let application = closure_1_8.getApplication(tmp.application_id);
    } else {
      let name;
      if (tmp != null) {
        name = tmp.name;
      }
      application = null;
      if (null != name) {
        application = closure_1_8.getApplicationByName(tmp.name);
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
  obj1 = { style: items6, title: null, titleStyle: null, titleIcon: null, children: null };
  items6 = [tmp.card, user.style];
  const tmp20 = closure_22;
  const tmp9Result1 = stream(activity[56]);
  if (null != stateFromStores3) {
    const intl2 = tmp2(tmp3[23]).intl;
    obj2 = { name: null };
    obj2[0] = stateFromStores3.name;
    let formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[23]).t["4CQq9Q"], obj2);
  } else {
    const intl = tmp2(tmp3[23]).intl;
    formatToPlainStringResult = intl.string(tmp2(tmp3[23]).t["Jpkr/q"]);
  }
  obj1[1] = formatToPlainStringResult;
  obj1[2] = tmp.cardTitle;
  obj1[3] = closure_21(user(activity[43]).LiveTag, {});
  obj3 = { style: tmp.streamPreview, children: tmp19(tmp2(tmp3[57]).VoicePanelStreamPreview, obj4) };
  obj4 = { mode: "a", stream: "capitalize", disabled: null, onPress: null };
  obj4[1] = stream;
  obj4[2] = !stateFromStores(tmp2Result.useCanWatchStream(stateFromStores), 1)[0];
  obj4[3] = function onPress() {
    callback({ action: "PRESS_IMAGE" });
    const voiceChannel = stream(activity[58]).selectVoiceChannel(stream.channelId);
    const obj = stream(activity[58]);
    const result = user(activity[59]).watchStreamAndTransitionToStream(stream);
    const obj2 = user(activity[59]);
    stream(activity[60]).hideActionSheet();
  };
  const items7 = [closure_21(closure_7, obj3), , , , ];
  let tmp19Result = null != stateFromStores4 && !tmp9Result1.useConfig({ location: "UserProfileVoiceSettings" }).nonContextualStreamOutputPresent;
  if (tmp19Result) {
    const obj5 = { value: null, onValueChange: null };
    obj5[0] = effectiveVolume;
    obj5[1] = handleVolumeChange;
    tmp19Result = tmp19(tmp9(tmp3[61]), obj5, "set-stream-volume");
  }
  items7[1] = tmp19Result;
  tmp19Result = null != activity && tmp9(tmp3[31])(activity);
  if (tmp19Result) {
    const obj6 = { user: null, activity: null, application: null, onAction: null };
    obj6[0] = user;
    obj6[1] = activity;
    obj6[2] = stateFromStores5;
    obj6[3] = tmp9Result1Result;
    tmp19Result = tmp19(ActivityCardBody, obj6);
  }
  items7[2] = tmp19Result;
  let tmp19Result1 = null != stateFromStores2 && null != stateFromStores;
  if (tmp19Result1) {
    const obj7 = { guild: null, channel: null, onAction: null, style: null };
    obj7[0] = stateFromStores2;
    obj7[1] = stateFromStores;
    obj7[2] = tmp9Result1Result;
    obj7[3] = tmp.voiceChannelDivider;
    tmp19Result1 = tmp19(tmp9(tmp3[46]), obj7);
  }
  items7[3] = tmp19Result1;
  let tmp19Result2 = null != stateFromStores;
  if (tmp19Result2) {
    const obj8 = { channel: null, isInChannel: null, onAction: null };
    obj8[0] = stateFromStores;
    obj8[1] = stateFromStores1;
    obj8[2] = tmp9Result1Result;
    tmp19Result2 = tmp19(tmp2(tmp3[48]).VoiceChannelButtons, obj8);
  }
  items7[4] = tmp19Result2;
  obj1[4] = items7;
  obj[1] = tmp20(stream(activity[42]), obj1);
  return closure_21(user(activity[34]).AnalyticsLocationProvider, obj);
}
function VoiceCallActivityCard(arg0) {
  ({ user, channel } = arg0);
  let stateFromStores;
  dependencyMap = undefined;
  closure_3 = undefined;
  ({ isInChannel, style } = arg0);
  const tmp = callback2();
  const tmp5 = stateFromStores(4984)(channel);
  let obj = channel(589);
  const items = [closure_11];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_11.getGuild(channel.guild_id));
  obj1 = channel(589);
  const items1 = [closure_12];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    let isPrivateResult = channel.isPrivate();
    if (!isPrivateResult) {
      isPrivateResult = closure_1_12.can(closure_1_18.CONNECT, channel);
    }
    return isPrivateResult;
  });
  const tmp4 = stateFromStores(12122)(channel);
  const tmp9 = stateFromStores(7139);
  ({ newestAnalyticsLocation: c2, analyticsLocations } = stateFromStores(7139)(stateFromStores(7159).USER_PROFILE_VOICE_ACTIVITY_CARD));
  obj = { display: "voice", activity: { type: "VOICE" }, voiceChannelId: channel.id, user, analyticsLocations };
  const tmp11 = stateFromStores(12117)(obj);
  closure_3 = tmp11;
  obj = { userId: user.id, onAction: tmp11 };
  stateFromStores(12118)(obj);
  obj1 = { style: items2, title: null, titleStyle: null, children: null };
  items2 = [tmp.card, style];
  const tmp9Result = stateFromStores(7139)(stateFromStores(7159).USER_PROFILE_VOICE_ACTIVITY_CARD);
  if (!channel.isDM()) {
    if (!channel.isGroupDM()) {
      const intl = tmp6(1236).intl;
      const string = intl.string;
      const t = tmp6(1236).t;
      if (isGuildStageVoiceResult) {
        let stringResult = string(t.QygGCN);
      } else {
        stringResult = string(t.msxteM);
      }
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    obj1[1] = stringResult;
    obj1[2] = tmp.cardTitle;
    let obj2 = { style: null, children: null };
    obj2[0] = tmp.body;
    const obj3 = { users: null, guildId: null };
    obj3[0] = tmp4;
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    obj3[1] = id;
    const items3 = [closure_21(tmp2(12142), obj3), ];
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.voiceCallContent;
    if (stateFromStores1) {
      const obj5 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, onPress: null, children: null };
      const obj6 = { channel: null };
      obj6[0] = channel;
      obj5[1] = tmp2(8886)(obj6);
      const intl3 = tmp6(1236).intl;
      obj5[2] = intl3.string(tmp6(1236).t["9C444m"]);
      obj5[3] = function onPress() {
        callback({ action: "OPEN_VOICE_CHANNEL" });
        stateFromStores(_undefined[60]).hideActionSheet();
        const obj = stateFromStores(_undefined[60]);
        stateFromStores(_undefined[67]).popAll();
        const obj2 = stateFromStores(_undefined[67]);
        channel(_undefined[68]).openGuildVoiceModal(channel, _undefined);
      };
      const obj7 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
      const obj8 = { style: null, children: null };
      obj8[0] = tmp.voiceCallNameIconWrapper;
      const obj9 = { channel: null, size: "sm", color: "mobile-text-heading-primary" };
      obj9[0] = channel;
      obj8[1] = tmp18(tmp2(9910), obj9);
      const items4 = [tmp18(tmp17, obj8), tmp5];
      obj7[2] = items4;
      obj5[4] = tmp13(tmp6(4734).Text, obj7);
      let tmp13Result = tmp18(tmp6(5433).PressableOpacity, obj5);
    } else {
      const obj10 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
      const obj11 = { style: null, children: null };
      obj11[0] = tmp.voiceCallNameIconWrapper;
      const obj12 = { channel: null, size: "sm", color: "mobile-text-heading-primary" };
      obj12[0] = channel;
      obj11[1] = tmp18(tmp2(9910), obj12);
      const items5 = [tmp18(tmp17, obj11), tmp5];
      obj10[2] = items5;
      tmp13Result = tmp13(tmp6(4734).Text, obj10);
    }
    const items6 = [tmp13Result, ];
    let tmp18Result = null;
    if (null != stateFromStores) {
      const obj13 = { accessibilityRole: "button", accessibilityHint: null, accessibilityLabel: null, onPress: null, children: null };
      const intl4 = tmp6(1236).intl;
      obj13[1] = intl4.string(tmp6(1236).t.KLOhbO);
      const intl5 = tmp6(1236).intl;
      const obj14 = { guildName: null };
      obj14[0] = stateFromStores.name;
      obj13[2] = intl5.formatToPlainString(tmp6(1236).t["hq/Qze"], obj14);
      obj13[3] = function onPress() {
        callback({ action: "OPEN_VOICE_GUILD" });
        channel(_undefined[69]).transitionToGuild(stateFromStores.id);
        stateFromStores(_undefined[70])();
        const obj = channel(_undefined[69]);
        stateFromStores(_undefined[60]).hideActionSheet();
      };
      const obj15 = { variant: "text-xs/medium", children: null };
      const intl6 = tmp6(1236).intl;
      const obj16 = { guildName: null };
      obj16[0] = stateFromStores.name;
      obj15[1] = intl6.format(tmp6(1236).t["hq/Qze"], obj16);
      obj13[4] = tmp18(tmp6(4734).Text, obj15);
      tmp18Result = tmp18(tmp6(5433).PressableOpacity, obj13);
    }
    items6[1] = tmp18Result;
    obj4[1] = items6;
    items3[1] = tmp13(closure_7, obj4);
    obj2[1] = items3;
    const items7 = [tmp13(closure_7, obj2), ];
    const obj17 = { channel: null, isInChannel: null, onAction: null };
    obj17[0] = channel;
    obj17[1] = isInChannel;
    obj17[2] = tmp11;
    items7[1] = closure_21(tmp6(12129).VoiceChannelButtons, obj17);
    obj1[3] = items7;
    return tmp13(tmp14, obj1);
  }
  const intl2 = tmp6(1236).intl;
  stringResult = intl2.string(tmp6(1236).t["9FaEzi"]);
}
({ TouchableOpacity: c5, TouchableWithoutFeedback: closure_6, View: error } = get_ActivityIndicator);
({ ActivityTypes: closure_17, Permissions: closure_18, PlatformTypes: closure_19, StatusTypes: closure_20 } = ME);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = jsxProd);
createCacheKey = { card: { gap: 12 }, cardTitle: { marginBottom: 0 }, cardTitleIcon: null, body: null, content: null, imageContainer: null, imageAspectRatio: null, crunchyrollImageAspectRatio: null, largeImage: null, smallImageBackground: null, smallImage: null, badges: null, voiceChannelDivider: null, customButtons: null, streamPreview: null, voiceActivityCard: null, voiceSettings: null, voiceSettingsDivider: null, voiceCallContent: null, voiceCallNameIconWrapper: null };
createCacheKey = { tintColor: ThemesDefault.colors.TEXT_SUBTLE };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { flexDirection: "row", alignItems: "center", gap: 16 };
createCacheKey[4] = { flex: 1 };
createCacheKey[5] = { position: "relative" };
createCacheKey[6] = { width: 60, maxHeight: 60, aspectRatio: "1 / 1" };
createCacheKey[7] = { width: 60, maxHeight: 100, aspectRatio: "2 / 3" };
createCacheKey[8] = { borderRadius: ThemesDefault.radii.xs, width: "100%", height: "100%" };
let obj1 = { borderRadius: ThemesDefault.radii.xs, width: "100%", height: "100%" };
createCacheKey[9] = { borderRadius: 16, position: "absolute", right: -4, bottom: -4, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[10] = { width: 24, height: 24, borderRadius: 12 };
createCacheKey[11] = { marginTop: 4, flexDirection: "row", flexWrap: "wrap", columnGap: 8, rowGap: 0 };
let obj2 = { borderRadius: 16, position: "absolute", right: -4, bottom: -4, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[12] = { borderTopWidth: 1, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE, paddingTop: 12 };
createCacheKey[13] = { flexDirection: "column", gap: 8 };
let obj3 = { borderTopWidth: 1, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE, paddingTop: 12 };
createCacheKey[14] = { aspectRatio: 1.7777777777777777, borderRadius: ThemesDefault.radii.xs, overflow: "hidden" };
createCacheKey[15] = { padding: 0 };
createCacheKey[16] = { padding: 0, marginBottom: -16 };
let obj4 = { aspectRatio: 1.7777777777777777, borderRadius: ThemesDefault.radii.xs, overflow: "hidden" };
createCacheKey[17] = { borderTopWidth: 1, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE, paddingTop: 16, marginTop: 4, marginHorizontal: -CARD_PADDING, paddingHorizontal: CARD_PADDING };
createCacheKey[18] = { flex: 1, gap: 4 };
let num = 16;
if (set.isAndroid()) {
  num = 12;
}
createCacheKey[19] = { width: 22, height: num, justifyContent: "center" };
let closure_24 = createCacheKey.createStyles(createCacheKey);
let result = set.fileFinishedImporting("modules/user_profile/native/UserProfileActivity.tsx");

export default function UserProfileActivity(guildId) {
  const user = guildId.user;
  const currentUser = guildId.currentUser;
  const style = guildId.style;
  closure_3 = undefined;
  stream = undefined;
  let voiceChannel;
  let voiceActivity;
  let stateFromStores;
  closure_8 = undefined;
  const tmp = callback2();
  closure_3 = tmp;
  ({ live, stream } = currentUser(style[71])(user.id));
  let obj = { userId: user.id, guildId: guildId.guildId };
  const tmp5 = currentUser(style[72])(obj);
  voiceChannel = tmp5.voiceChannel;
  voiceActivity = tmp5.voiceActivity;
  obj1 = user(style[40]);
  const items = [closure_15];
  stateFromStores = obj1.useStateFromStores(items, () => {
    let isInChannelResult = null != voiceChannel;
    if (isInChannelResult) {
      isInChannelResult = closure_1_15.isInChannel(tmp.id);
    }
    return isInChannelResult;
  });
  closure_8 = user.id === currentUser.id;
  let obj2 = user(style[40]);
  const items1 = [closure_14, closure_13];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    if (closure_8) {
      let status = closure_1_14.getStatus();
    } else {
      status = closure_1_13.getStatus(user.id);
    }
    return status === closure_1_20.OFFLINE || status === closure_1_20.INVISIBLE;
  });
  let obj3 = user(style[40]);
  const items2 = [closure_16];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    const userProfile = closure_1_16.getUserProfile(user.id);
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
        obj[0] = items3;
        let tmp2Result = tmp2(tmp3[42]);
        obj = { user: null, currentUser: null, channel: null, style: null };
        obj[0] = user;
        obj[1] = currentUser;
        obj[2] = voiceChannel;
        const items4 = [, ];
        ({ voiceSettings: arr11[0], voiceSettingsDivider: arr11[1] } = tmp);
        obj[3] = items4;
        obj[1] = callback(tmp2(tmp3[73]), obj);
        return callback(tmp2Result, obj);
      }
    }
  }
  if (stateFromStores1) {
    return null;
  } else {
    let found = live;
    if (null != voiceActivity) {
      found = live.filter((arg0) => arg0 !== voiceActivity);
    }
    let tmp12 = !stateFromStores2;
    if (!stateFromStores2) {
      tmp12 = null != voiceChannel;
    }
    if (!tmp12) {
      const items5 = [tmp12, , ];
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
        obj1 = { user: null, stream: null, activity: null, style: null };
        obj1[0] = user;
        obj1[1] = stream;
        obj1[2] = voiceActivity;
        obj1[3] = style;
        tmp20 = callback(StreamActivityCard, obj1);
      }
      obj2 = { children: null };
      items5[1] = tmp20;
      items5[2] = found.map((activity) => {
        let application_id = activity.application_id;
        if (application_id == null) {
          application_id = arg1;
        }
        return closure_1_21(closure_1_28, { user, currentUser, activity, style }, application_id);
      });
      obj2[0] = items5;
      return tmp10(tmp11, obj2);
    } else {
      let items7 = function renderVoiceActivityCard(voiceChannel) {
        if (null != stream) {
          if (tmp.channelId === voiceChannel.id) {
            let obj = { user: null, stream: null, activity: null, style: null };
            obj[0] = user;
            obj[1] = tmp;
            obj[2] = voiceActivity;
            obj[3] = closure_3.voiceActivityCard;
            let tmp8 = closure_1_21(closure_1_29, obj);
          }
          return tmp8;
        }
        if (null != voiceActivity) {
          obj = { user: null, currentUser: null, activity: null, voiceChannel: null, style: null };
          obj[0] = user;
          obj[1] = currentUser;
          obj[2] = tmp2;
          obj[3] = voiceChannel;
          obj[4] = closure_3.voiceActivityCard;
          tmp8 = closure_1_21(closure_1_28, obj);
        } else {
          obj = { user: null, channel: null, isInChannel: null, style: null };
          obj[0] = user;
          obj[1] = voiceChannel;
          obj[2] = stateFromStores;
          obj[3] = closure_3.voiceActivityCard;
          tmp8 = closure_1_21(closure_1_30, obj);
        }
      };
      if (stateFromStores) {
        obj3 = { style: null, children: null };
        const items6 = [tmp.card, style];
        obj3[0] = items6;
        tmp2Result = tmp2(tmp3[42]);
        items7 = [, ];
        items7[0] = items7(voiceChannel);
        const obj4 = { user: null, currentUser: null, channel: null, style: null };
        obj4[0] = user;
        obj4[1] = currentUser;
        obj4[2] = voiceChannel;
        const items8 = [, ];
        ({ voiceSettings: arr8[0], voiceSettingsDivider: arr8[1] } = tmp);
        obj4[3] = items8;
        items7[1] = callback(tmp2(tmp3[73]), obj4);
        obj3[1] = items7;
        let tmp10Result = tmp10(tmp2Result, obj3);
        const items7Result = items7(voiceChannel);
      } else {
        const obj5 = { style: null, children: null };
        const items9 = [tmp.card, style];
        obj5[0] = items9;
        obj5[1] = items7(voiceChannel);
        tmp10Result = callback(tmp2(tmp3[42]), obj5);
        const tmp2Result1 = tmp2(tmp3[42]);
      }
    }
    tmp11 = closure_23;
  }
};