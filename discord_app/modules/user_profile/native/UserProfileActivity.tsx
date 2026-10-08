// === Module 12983: UserProfileActivity ===

// Module 12983 (UserProfileActivity)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AvatarUtils from "AvatarUtils" /* 1414 */;
import shared from "shared" /* 4929 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import hasRichActivityDefault from "hasRichActivity" /* 5107 */;
import useChannelNameDefault from "useChannelName" /* 5417 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5885 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import FastImageDefault from "FastImage" /* 6164 */;
import Pressables from "Pressables" /* 6189 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6841 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6865 */;
import UserProfileCardDefault from "UserProfileCard" /* 6890 */;
import transitionToGuild from "transitionToGuild" /* 7043 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7421 */;
import StreamActionCreators from "StreamActionCreators" /* 7438 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7476 */;
import UnknownGameIcon from "UnknownGameIcon" /* 7662 */;
import isStreamingDefault from "isStreaming" /* 8360 */;
import isCrunchyrollActivityDefault from "isCrunchyrollActivity" /* 8438 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 8466 */;
import getChannelA11yLabelDefault from "getChannelA11yLabel" /* 8626 */;
import isGameActivityDefault from "isGameActivity" /* 10230 */;
import isListeningOnSpotifyDefault from "isListeningOnSpotify" /* 10238 */;
import UserProfileVoiceActivityIconDefault from "UserProfileVoiceActivityIcon" /* 10241 */;
import closeVoicePanelsDefault from "closeVoicePanels" /* 10619 */;
import UserActivitySpotify from "UserActivitySpotify" /* 11376 */;
import isOnXboxDefault from "isOnXbox" /* 12991 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 12992 */;
import shouldShowActivityTimeBarDefault from "shouldShowActivityTimeBar" /* 12998 */;
import UserProfileActivityTimebarDefault from "UserProfileActivityTimebar" /* 13013 */;
import UserProfileActivityVoiceChannelDefault from "UserProfileActivityVoiceChannel" /* 13015 */;
import usePersonalizedVoiceChannelUsersDefault from "usePersonalizedVoiceChannelUsers" /* 13016 */;
import UserProfileActivityButtons from "UserProfileActivityButtons" /* 13023 */;
import isActivityJoinableOnCurrentPlatform from "isActivityJoinableOnCurrentPlatform" /* 13026 */;
import UserProfileVoiceSettingsDefault from "UserProfileVoiceSettings" /* 13034 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5436 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 5893 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4707 */;
import PresenceStore from "PresenceStore" /* 5106 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5755 */;
import VoiceStateStore from "VoiceStateStore" /* 5111 */;
import UserProfileStore from "UserProfileStore" /* 7309 */;

const Text_Text = Text(5086);
require = fn;
let user = ["children"];
get_ActivityIndicator = fn(17);
({ TouchableOpacity: closure_7, TouchableWithoutFeedback: closure_8, View: closure_9 } = get_ActivityIndicator);
const CARD_PADDING = fn(6891).CARD_PADDING;
const Constants = fn(1085);
({ ActivityTypes: closure_19, Permissions: closure_20, PlatformTypes: closure_21, StatusTypes: closure_22 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_23, jsxs: closure_24, Fragment: closure_25 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { card: { gap: 12 }, cardTitle: { marginBottom: 0 }, cardTitleIcon: { tintColor: nativeDefault.colors.TEXT_SUBTLE }, body: { flexDirection: "row", alignItems: "center", gap: 16 }, content: { flex: 1 }, imageContainer: { position: "relative" }, imageAspectRatio: { width: 60, maxHeight: 60, aspectRatio: "1 / 1" }, crunchyrollImageAspectRatio: { width: 60, maxHeight: 100, aspectRatio: "2 / 3" }, largeImage: null, smallImageBackground: null, smallImage: null, badges: null, voiceChannelDivider: null, customButtons: null, streamPreview: null, voiceActivityCard: null, voiceSettings: null, voiceSettingsDivider: null, voiceCallContent: null, voiceCallNameIconWrapper: null };
let size = { borderRadius: nativeDefault.radii.xs, width: "100%", height: "100%" };
obj2.largeImage = size;
const rect = { borderRadius: 16, position: "absolute", right: -4, bottom: -4, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
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
obj2.voiceSettingsDivider = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingTop: 16, marginTop: 4, marginHorizontal: -CARD_PADDING, paddingHorizontal: CARD_PADDING };
obj2.voiceCallContent = { flex: 1, gap: 4 };
const PlatformUtils = fn(1381);
let num = 16;
if (PlatformUtils.isAndroid()) {
  num = 12;
}
obj2.voiceCallNameIconWrapper = { width: 22, height: num, justifyContent: "center" };
let closure_26 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? (function ActivityCardText(children) {
  let Text = require;
  let tmp = dependencyMap;
  const cResult = c.c(8);
  if (cResult[0] !== children) {
    children = children.children;
    const tmp6 = _objectWithoutProperties(children, closure_3);
    cResult[0] = children;
    cResult[1] = children;
    cResult[2] = tmp6;
    let tmp3 = tmp6;
    let str = children;
  } else {
    str = cResult[1];
    tmp3 = cResult[2];
  }
  if (cResult[3] !== str) {
    let trimmed = str;
    if (typeof str === "string") {
      trimmed = str.trim();
    }
    cResult[3] = str;
    cResult[4] = trimmed;
    let tmp7 = trimmed;
  } else {
    tmp7 = cResult[4];
  }
  let tmp9 = null;
  if (null != tmp7) {
    tmp9 = null;
    if ("" !== tmp7) {
      if (cResult[5] === tmp3) {
      }
      Text = Text_Text.Text;
      const obj2 = {};
      const merged = Object.assign(tmp3);
      obj2.children = tmp7;
      tmp = closure_1_23(Text, obj2);
      cResult[5] = tmp3;
      cResult[6] = tmp7;
      cResult[7] = tmp;
    }
  }
  return tmp9;
}) : (function ActivityCardText(children) {
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
      tmp3 = closure_1_23(Text_Text.Text, obj);
    }
  }
  return tmp3;
});
ReactCompilerGating = fn(558);
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? (function MaybeLink(href) {
  const cResult = href(576).c(5);
  href = href.href;
  const children = href.children;
  if (null == href) {
    return children;
  } else {
    if (cResult[0] !== href) {
      const fn = function n() {
        return MaskedLinkUtils.handleClick({ href });
      };
      cResult[0] = href;
      cResult[1] = fn;
      let tmp2 = fn;
    } else {
      tmp2 = cResult[1];
    }
    if (cResult[2] === children) {
    }
    const obj2 = { accessibilityRole: "link", onPress: tmp2, children };
    const tmp6 = closure_23(closure_7, obj2);
    cResult[2] = children;
    cResult[3] = tmp2;
    cResult[4] = tmp6;
  }
  const obj = href(576);
}) : (function MaybeLink(href) {
  href = href.href;
  const children = href.children;
  let tmp = children;
  if (null != href) {
    const obj = {
      accessibilityRole: "link",
      onPress() {
          return MaskedLinkUtils.handleClick({ href });
        },
      children
    };
    tmp = closure_23(closure_7, obj);
  }
  return tmp;
});
ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled() ? (function ActivityCardBody(user) {
  const cResult = user(onAction[20]).c(45);
  user = user.user;
  const activity = user.activity;
  onAction = user.onAction;
  const tmp3 = closure_26();
  closure_3 = tmp3;
  let obj = user(onAction[20]);
  const tmp = onAction;
  const imageForActivity = user(onAction[23]).useImageForActivity(activity, user.application, "user_profile_activity_native");
  const largeImage = imageForActivity.largeImage;
  const smallImage = imageForActivity.smallImage;
  let obj2 = user(onAction[23]);
  const theme = user(onAction[24]).useThemeContext().theme;
  if (cResult[0] === activity) {
    if (cResult[1] === largeImage) {
      if (cResult[2] === onAction) {
        if (cResult[3] === smallImage) {
          if (cResult[4] === tmp3.crunchyrollImageAspectRatio) {
            if (cResult[5] === tmp3.imageAspectRatio) {
              if (cResult[6] === tmp3.imageContainer) {
                if (cResult[7] === tmp3.largeImage) {
                  if (cResult[8] === tmp3.smallImage) {
                    if (cResult[9] === tmp3.smallImageBackground) {
                      if (cResult[10] === theme) {
                        if (cResult[11] === user.id) {
                          let tmp5 = cResult[12];
                        }
                        if (cResult[13] === activity) {
                          if (cResult[14] === onAction) {
                            let tmp6 = cResult[15];
                          }
                          if (cResult[16] === activity) {
                            if (cResult[17] === onAction) {
                              if (cResult[18] === user.id) {
                                let tmp7 = cResult[19];
                              }
                              if (cResult[20] !== activity) {
                                function renderState() {
                                  let obj = dependencyMap;
                                  if (!isListeningOnSpotifyDefault(activity)) {
                                    if (activity.type !== constants.WATCHING) {
                                      if (isGameActivityDefault(activity)) {
                                        if (!isEmbeddedActivityDefault(activity)) {
                                          if (null != activity.party) {
                                            return null;
                                          }
                                        }
                                      }
                                      if (isGameActivityDefault(activity)) {
                                        const party = activity.party;
                                        let size;
                                        if (party != null) {
                                          size = party.size;
                                        }
                                        let tmp13 = null != size;
                                        if (tmp13) {
                                          tmp13 = activity.party.size.length >= 2;
                                        }
                                        if (!tmp13) {
                                          const obj2 = { variant: "text-xs/medium", lineClamp: 1, children: null };
                                          const items = [activity.state, ""];
                                          obj2.children = items.join(" ");
                                          return closure_2_23(closure_27, obj2);
                                        } else if (0 === activity.party.size[1]) {
                                          const intl2 = util.intl;
                                          obj = { count: activity.party.size[0] };
                                          let formatToPlainStringResult = intl2.formatToPlainString(util.t.IM4J4e, obj);
                                        } else {
                                          const intl = util.intl;
                                          const obj3 = { count: activity.party.size[0], max: activity.party.size[1] };
                                          formatToPlainStringResult = intl.formatToPlainString(util.t["u//9By"], obj3);
                                        }
                                      } else {
                                        const assets = activity.assets;
                                        let large_url;
                                        if (assets != null) {
                                          large_url = assets.large_url;
                                        }
                                        const obj4 = { href: large_url, children: null };
                                        const assets2 = activity.assets;
                                        let large_text;
                                        if (assets2 != null) {
                                          large_text = assets2.large_text;
                                        }
                                        const obj5 = { variant: "text-xs/medium", lineClamp: 1, children: large_text };
                                        obj4.children = closure_2_23(closure_27, obj5);
                                        return closure_2_23(closure_28, obj4);
                                      }
                                    }
                                  }
                                  return null;
                                }
                                cResult[20] = activity;
                                cResult[21] = renderState;
                                let tmp8 = renderState;
                              } else {
                                tmp8 = cResult[21];
                              }
                              if (cResult[22] === tmp5) {
                                if (cResult[23] === user.bot) {
                                  let tmp10 = cResult[24];
                                }
                                if (cResult[25] !== tmp6) {
                                  const tmp6Result = tmp6();
                                  cResult[25] = tmp6;
                                  cResult[26] = tmp6Result;
                                  let tmp12 = tmp6Result;
                                } else {
                                  tmp12 = cResult[26];
                                }
                                if (cResult[27] !== tmp7) {
                                  const tmp7Result = tmp7();
                                  cResult[27] = tmp7;
                                  cResult[28] = tmp7Result;
                                  let tmp14 = tmp7Result;
                                } else {
                                  tmp14 = cResult[28];
                                }
                                if (cResult[29] !== tmp8) {
                                  const tmp8Result = tmp8();
                                  cResult[29] = tmp8;
                                  cResult[30] = tmp8Result;
                                  let tmp16 = tmp8Result;
                                } else {
                                  tmp16 = cResult[30];
                                }
                                if (cResult[31] === activity) {
                                  if (cResult[32] === tmp3.badges) {
                                    if (cResult[33] === user.bot) {
                                      let tmp18 = cResult[34];
                                    }
                                    if (cResult[35] === tmp3.content) {
                                      if (cResult[36] === tmp16) {
                                        if (cResult[37] === tmp18) {
                                          if (cResult[38] === tmp12) {
                                            if (cResult[39] === tmp14) {
                                              let tmp22 = cResult[40];
                                            }
                                            if (cResult[41] === tmp3.body) {
                                              if (cResult[42] === tmp22) {
                                                if (cResult[43] === tmp10) {
                                                  let tmp26 = cResult[44];
                                                }
                                                return tmp26;
                                              }
                                            }
                                            let obj4 = { style: tmp9, children: null };
                                            let items = [tmp10, tmp22];
                                            obj4.children = items;
                                            const tmp29 = closure_24(closure_9, obj4);
                                            cResult[41] = tmp3.body;
                                            cResult[42] = tmp22;
                                            cResult[43] = tmp10;
                                            cResult[44] = tmp29;
                                            tmp26 = tmp29;
                                          }
                                        }
                                      }
                                    }
                                    let obj5 = { style: tmp3.content, children: null };
                                    let items1 = [tmp12, tmp14, tmp16, tmp18];
                                    obj5.children = items1;
                                    const tmp25 = closure_24(closure_9, obj5);
                                    cResult[35] = tmp3.content;
                                    cResult[36] = tmp16;
                                    cResult[37] = tmp18;
                                    cResult[38] = tmp12;
                                    cResult[39] = tmp14;
                                    cResult[40] = tmp25;
                                    tmp22 = tmp25;
                                  }
                                }
                                const bot2 = user.bot;
                                let tmp19 = !bot2;
                                if (!bot2) {
                                  let obj6 = { style: tmp3.badges, activity };
                                  tmp19 = closure_23(activity(tmp[35]), obj6);
                                }
                                cResult[31] = activity;
                                cResult[32] = tmp3.badges;
                                cResult[33] = user.bot;
                                cResult[34] = tmp19;
                                tmp18 = tmp19;
                              }
                              const bot = user.bot;
                              let tmp5Result = !bot;
                              if (!bot) {
                                tmp5Result = tmp5();
                              }
                              cResult[22] = tmp5;
                              cResult[23] = user.bot;
                              cResult[24] = tmp5Result;
                              tmp10 = tmp5Result;
                            }
                          }
                          function renderDescription() {
                            if (isListeningOnSpotifyDefault(activity)) {
                              let trimmed;
                              if (activity.state != null) {
                                trimmed = str.trim();
                              }
                              let tmp11 = null;
                              if (null != trimmed) {
                                tmp11 = null;
                                if ("" !== trimmed) {
                                  const obj2 = { variant: "text-xs/medium", lineClamp: 1, children: null };
                                  const obj3 = {
                                    artists: trimmed,
                                    activity,
                                    userId: user.id,
                                    onPress() {
                                            return onAction({ action: "OPEN_SPOTIFY_ARTIST" });
                                          }
                                  };
                                  obj2.children = closure_2_23(UserActivitySpotify.SpotifyArtists, obj3);
                                  tmp11 = closure_2_23(closure_27, obj2);
                                }
                              }
                              return tmp11;
                            } else {
                              state = activity.details;
                              let tmp4 = isGameActivityDefault(activity);
                              if (!tmp4) {
                                tmp4 = null == activity.state;
                              }
                              if (!tmp4) {
                                state = activity.state;
                              }
                              const obj = { href: activity.state_url, children: null };
                              const obj4 = { variant: "text-xs/medium", lineClamp: 1, children: state };
                              obj.children = closure_2_23(closure_27, obj4);
                              return closure_2_23(closure_28, obj);
                            }
                          }
                          cResult[16] = activity;
                          cResult[17] = onAction;
                          cResult[18] = user.id;
                          cResult[19] = renderDescription;
                          tmp7 = renderDescription;
                        }
                        function renderName() {
                          if (isListeningOnSpotifyDefault(activity)) {
                            const obj2 = { variant: "text-md/semibold", children: null };
                            const obj3 = {
                              text: activity.details,
                              activity,
                              onPress() {
                                  return onAction({ action: "OPEN_SPOTIFY_TRACK" });
                                }
                            };
                            obj2.children = closure_2_23(UserActivitySpotify.SpotifyTrack, obj3);
                            let tmp4Result = closure_2_23(closure_27, obj2);
                          } else {
                            const obj = { href: activity.details_url, children: null };
                            if (isGameActivityDefault(activity)) {
                              let name = activity.name;
                            } else {
                              name = activity.details;
                              if (name == null) {
                                name = activity.name;
                              }
                            }
                            const obj4 = { variant: "text-md/semibold", children: name };
                            obj.children = closure_2_23(closure_27, obj4);
                            tmp4Result = closure_2_23(closure_28, obj);
                          }
                          return tmp4Result;
                        }
                        cResult[13] = activity;
                        cResult[14] = onAction;
                        cResult[15] = renderName;
                        tmp6 = renderName;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  function renderImage() {
    if (null != largeImage) {
      if (isListeningOnSpotifyDefault(activity)) {
        const obj2 = { accessibilityRole: "button", accessibilityLabel: largeImage.alt, accessibilityHint: null, onPress: null, children: null };
        const intl = util.intl;
        obj2.accessibilityHint = intl.string(util.t.sjjOk2);
        obj2.onPress = function onPress() {
          closure_1_2({ action: "OPEN_SPOTIFY_ALBUM" });
          user(onAction[27]).openAlbum(activity, id.id);
        };
        const obj3 = { style: null, children: null };
        const items = [, ];
        ({ imageContainer: arr3[0], imageAspectRatio: arr3[1] } = closure_3);
        obj3.style = items;
        const obj5 = { source: null, accessibilityLabel: null, style: null };
        const tmp45 = FastImageDefault;
        obj5.source = AvatarUtils.makeSource(largeImage.src);
        obj5.accessibilityLabel = largeImage.alt;
        obj5.style = closure_3.largeImage;
        obj3.children = closure_2_23(tmp45, obj5);
        obj2.children = closure_2_23(options, obj3);
        let tmp48Result = closure_2_23(closure_2_8, obj2);
      }
      return tmp48Result;
    }
    if (null != largeImage) {
      const items1 = [closure_3.imageContainer, ];
      const obj = { style: null, children: null };
      items1[1] = isCrunchyrollActivityDefault(activity) ? closure_3.crunchyrollImageAspectRatio : closure_3.imageAspectRatio;
      obj.style = items1;
      const assets = activity.assets;
      let large_url;
      if (assets != null) {
        large_url = assets.large_url;
      }
      const obj6 = { href: large_url, children: null };
      const obj7 = { source: null, accessibilityLabel: null, style: null };
      const tmp18 = FastImageDefault;
      obj7.source = AvatarUtils.makeSource(largeImage.src);
      obj7.accessibilityLabel = largeImage.alt;
      obj7.style = closure_3.largeImage;
      obj6.children = closure_2_23(tmp18, obj7);
      const items2 = [closure_2_23(closure_28, obj6), ];
      let tmp23Result = null != smallImage;
      if (tmp23Result) {
        const obj9 = { style: closure_3.smallImageBackground, children: null };
        const assets2 = activity.assets;
        let small_url;
        if (assets2 != null) {
          small_url = assets2.small_url;
        }
        const obj10 = { href: small_url, children: null };
        const obj11 = { source: null, accessibilityLabel: null, style: null };
        const tmp30 = FastImageDefault;
        obj11.source = AvatarUtils.makeSource(smallImage.src);
        obj11.accessibilityLabel = smallImage.alt;
        obj11.style = closure_3.smallImage;
        obj10.children = closure_2_23(tmp30, obj11);
        obj9.children = closure_2_23(closure_28, obj10);
        tmp23Result = closure_2_23(options, obj9);
      }
      items2[1] = tmp23Result;
      obj.children = items2;
      tmp48Result = dependencyMap(options, obj);
    } else {
      const obj13 = { style: null, children: null };
      const items3 = [, ];
      ({ imageContainer: arr4[0], imageAspectRatio: arr4[1] } = closure_3);
      obj13.style = items3;
      const obj14 = { size: "custom", style: closure_3.largeImage, color: null };
      const colors = nativeDefault.colors;
      obj14.color = shared.isThemeDark(theme) ? colors.WHITE : colors.BLACK;
      obj13.children = closure_2_23(UnknownGameIcon.UnknownGameIcon, obj14);
      tmp48Result = closure_2_23(options, obj13);
      const isThemeDarkResult = shared.isThemeDark(theme);
    }
  }
  cResult[0] = activity;
  cResult[1] = largeImage;
  cResult[2] = onAction;
  cResult[3] = smallImage;
  cResult[4] = tmp3.crunchyrollImageAspectRatio;
  cResult[5] = tmp3.imageAspectRatio;
  cResult[6] = tmp3.imageContainer;
  cResult[7] = tmp3.largeImage;
  cResult[8] = tmp3.smallImage;
  cResult[9] = tmp3.smallImageBackground;
  cResult[10] = theme;
  cResult[11] = user.id;
  cResult[12] = renderImage;
  tmp5 = renderImage;
  let obj3 = user(onAction[24]);
}) : (function ActivityCardBody(user) {
  user = user.user;
  const activity = user.activity;
  const onAction = user.onAction;
  const tmp = closure_26();
  let IM4J4e = user;
  const imageForActivity = user(onAction[23]).useImageForActivity(activity, user.application, "user_profile_activity_native");
  ({ largeImage, smallImage } = imageForActivity);
  user(onAction[24]);
  const obj2 = { style: tmp.body, children: null };
  if (user.bot) {
    const items = [tmp8, ];
    const obj3 = { style: tmp.content, children: null };
    if (activity(tmp2[25])(activity)) {
      const obj4 = { variant: "text-md/semibold", children: null };
      const obj5 = {
        text: activity.details,
        activity,
        onPress() {
              return onAction({ action: "OPEN_SPOTIFY_TRACK" });
            }
      };
      obj4.children = closure_23(IM4J4e(tmp2[27]).SpotifyTrack, obj5);
      let tmp24Result = closure_23(closure_27, obj4);
      let tmp29 = closure_27;
      let tmp30 = closure_23;
    } else {
      const obj6 = { href: activity.details_url, children: null };
      if (tmp23(tmp2[33])(activity)) {
        let name = activity.name;
      } else {
        name = activity.details;
        if (name == null) {
          name = activity.name;
        }
      }
      const obj7 = { variant: "text-md/semibold", children: name };
      obj6.children = closure_23(closure_27, obj7);
      tmp24Result = closure_23(closure_28, obj6);
      tmp29 = closure_27;
      tmp30 = closure_23;
    }
    const items1 = [tmp24Result, , , ];
    if (activity(tmp2[25])(activity)) {
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
                    }
          };
          obj8.children = tmp30(IM4J4e(tmp2[27]).SpotifyArtists, obj9);
          tmp30Result = tmp30(tmp29, obj8);
        }
      }
      let tmp30Result4 = tmp30Result;
    } else {
      state = activity.details;
      let tmp32 = tmp23(tmp2[33])(activity);
      if (!tmp32) {
        tmp32 = null == activity.state;
      }
      if (!tmp32) {
        state = activity.state;
      }
      const obj10 = { href: activity.state_url, children: null };
      const obj11 = { variant: "text-xs/medium", lineClamp: 1, children: state };
      obj10.children = tmp30(tmp29, obj11);
      tmp30Result4 = tmp30(closure_28, obj10);
    }
    items1[1] = tmp30Result4;
    let tmp30Result5 = null;
    if (!activity(tmp2[25])(activity)) {
      tmp30Result5 = null;
      if (activity.type !== constants.WATCHING) {
        if (tmp23(tmp2[33])(activity)) {
          if (!tmp23(tmp2[34])(activity)) {
            tmp30Result5 = null;
          }
        }
        if (tmp23(tmp2[33])(activity)) {
          const party = activity.party;
          let size;
          if (party != null) {
            size = party.size;
          }
          let tmp46 = null != size;
          if (tmp46) {
            tmp46 = activity.party.size.length >= 2;
          }
          if (!tmp46) {
            const obj12 = { variant: "text-xs/medium", lineClamp: 1, children: null };
            const items2 = [activity.state, ""];
            obj12.children = items2.join(" ");
            tmp30Result5 = tmp30(tmp29, obj12);
          } else if (0 === activity.party.size[1]) {
            const intl3 = IM4J4e(tmp2[26]).intl;
            IM4J4e = IM4J4e(tmp2[26]).t.IM4J4e;
            const obj13 = { count: activity.party.size[0] };
            let formatToPlainStringResult = intl3.formatToPlainString(IM4J4e, obj13);
          } else {
            const intl2 = IM4J4e(tmp2[26]).intl;
            const obj14 = { count: activity.party.size[0], max: activity.party.size[1] };
            formatToPlainStringResult = intl2.formatToPlainString(IM4J4e(tmp2[26]).t["u//9By"], obj14);
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
          tmp30Result5 = tmp30(closure_28, obj15);
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
    items[1] = closure_24(closure_9, obj3);
    obj2.children = items;
    return closure_24(closure_9, obj2);
  } else {
    if (null == largeImage) {
      if (null != largeImage) {
        const items3 = [tmp.imageContainer, ];
        const obj18 = { style: null, children: null };
        items3[1] = activity(tmp2[30])(activity) ? tmp.crunchyrollImageAspectRatio : tmp.imageAspectRatio;
        obj18.style = items3;
        const assets = activity.assets;
        let large_url1;
        if (assets != null) {
          large_url1 = assets.large_url;
        }
        const obj19 = { href: large_url1, children: null };
        const obj20 = { source: null, accessibilityLabel: null, style: null };
        const tmp12Result = activity(tmp2[28]);
        obj20.source = IM4J4e(tmp2[29]).makeSource(largeImage.src);
        obj20.accessibilityLabel = largeImage.alt;
        obj20.style = tmp.largeImage;
        obj19.children = closure_23(tmp12Result, obj20);
        const items4 = [closure_23(closure_28, obj19), ];
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
          const tmp12Result2 = tmp12(tmp2[28]);
          obj23.source = IM4J4e(tmp2[29]).makeSource(smallImage.src);
          obj23.accessibilityLabel = smallImage.alt;
          obj23.style = tmp.smallImage;
          obj22.children = closure_23(tmp12Result2, obj23);
          obj21.children = closure_23(closure_28, obj22);
          tmp13Result = closure_23(closure_9, obj21);
          const IM4J4eResult1 = IM4J4e(tmp2[29]);
        }
        items4[1] = tmp13Result;
        obj18.children = items4;
        let tmp50Result = closure_24(closure_9, obj18);
        const IM4J4eResult = IM4J4e(tmp2[29]);
      } else {
        const obj24 = { style: null, children: null };
        const items5 = [, ];
        ({ imageContainer: arr7[0], imageAspectRatio: arr7[1] } = tmp);
        obj24.style = items5;
        const obj25 = { size: "custom", style: tmp.largeImage, color: null };
        const IM4J4eResult2 = IM4J4e(tmp2[32]);
        const colors = activity(tmp2[17]).colors;
        obj25.color = IM4J4e(tmp2[32]).isThemeDark(tmp5) ? colors.WHITE : colors.BLACK;
        obj24.children = closure_23(IM4J4e(tmp2[31]).UnknownGameIcon, obj25);
        tmp50Result = closure_23(closure_9, obj24);
        const isThemeDarkResult = IM4J4e(tmp2[32]).isThemeDark(tmp5);
      }
    } else {
      let tmp10 = activity;
    }
    const obj26 = { accessibilityRole: "button", accessibilityLabel: largeImage.alt, accessibilityHint: null, onPress: null, children: null };
    const intl = IM4J4e(tmp2[26]).intl;
    obj26.accessibilityHint = intl.string(IM4J4e(tmp2[26]).t.sjjOk2);
    obj26.onPress = function onPress() {
      onAction({ action: "OPEN_SPOTIFY_ALBUM" });
      UserActivitySpotify.openAlbum(activity, user.id);
    };
    const obj27 = { style: null, children: null };
    const items6 = [, ];
    ({ imageContainer: arr3[0], imageAspectRatio: arr3[1] } = tmp);
    obj27.style = items6;
    tmp10 = tmp10(tmp2[28]);
    const obj28 = { source: IM4J4e(tmp2[29]).makeSource(largeImage.src), accessibilityLabel: largeImage.alt, style: null };
    largeImage = tmp.largeImage;
    obj28.style = largeImage;
    obj27.children = closure_23(tmp10, obj28);
    obj26.children = closure_23(closure_9, obj27);
    tmp50Result = closure_23(closure_8, obj26);
    const IM4J4eResult3 = IM4J4e(tmp2[29]);
  }
  const obj = user(onAction[23]);
});
ReactCompilerGating = fn(558);
let closure_30 = ReactCompilerGating.isReactCompilerEnabled() ? (function ActivityCard(user) {
  const cResult = user(activity[20]).c(71);
  user = user.user;
  const currentUser = user.currentUser;
  activity = user.activity;
  const voiceChannel = user.voiceChannel;
  let obj = user(activity[20]);
  closure_4 = closure_26();
  currentUser(activity[36])(activity);
  const tmp4 = closure_26();
  const analyticsLocations = currentUser(activity[37])(currentUser(activity[38]).USER_PROFILE_LIVE_ACTIVITY_CARD).analyticsLocations;
  let id;
  if (voiceChannel != null) {
    id = voiceChannel.id;
  }
  if (cResult[0] === activity) {
    if (cResult[1] === analyticsLocations) {
      if (cResult[2] === id) {
        if (cResult[3] === user) {
          let tmp9 = cResult[4];
        }
        const tmp10 = tmp5(tmp2[39])(tmp9);
        const onAction = tmp10;
        const application_id = activity.application_id;
        if (cResult[5] === application_id) {
          if (cResult[6] === user.id) {
            let tmp11 = cResult[7];
          }
          const tmp12 = tmp5(tmp2[41])(tmp11);
          closure_6 = tmp12;
          if (cResult[8] !== tmp12) {
            class E {
              constructor() {
                if (null != closure_6) {
                  tmpResult = tmp();
                }
                return;
              }
            }
            cResult[8] = tmp12;
            cResult[9] = E;
          } else {
            class E {
              constructor() {
                if (null != closure_6) {
                  tmpResult = tmp();
                }
                return;
              }
            }
          }
          if (cResult[10] === tmp10) {
            class E {
              constructor() {
                if (null != closure_6) {
                  tmpResult = tmp();
                }
                return;
              }
            }
            tmp5(tmp2[42])(tmp14);
            const _Symbol = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              class E {
                constructor() {
                  if (null != closure_6) {
                    tmpResult = tmp();
                  }
                  return;
                }
              }
              const items = [GuildStore, VoiceStateStore, ChannelStore];
              class F {
                constructor() {
                  tmp = activity;
                  if (closure_1(closure_2[34])(activity)) {
                    tmp3 = user;
                    session_id = undefined;
                    tmp2 = closure_17;
                    if (tmp != null) {
                      session_id = tmp.session_id;
                    }
                    voiceStateForSession = closure_17.getVoiceStateForSession(user.id, session_id);
                    channelId = undefined;
                    if (voiceStateForSession != null) {
                      channelId = voiceStateForSession.channelId;
                    }
                    tmp8 = closure_12;
                    tmp7 = closure_13;
                    channel = closure_12.getChannel(channelId);
                    guildId = undefined;
                    if (channel != null) {
                      guildId = channel.getGuildId();
                    }
                    return closure_13.getGuild(guildId);
                  } else {
                    return null;
                  }
                }
              }
              const tmp17 = items;
            } else {
              class E {
                constructor() {
                  if (null != closure_6) {
                    tmpResult = tmp();
                  }
                  return;
                }
              }
            }
            if (cResult[14] === activity) {
              class E {
                constructor() {
                  if (null != closure_6) {
                    tmpResult = tmp();
                  }
                  return;
                }
              }
              const stateFromStores = tmp(tmp2[43]).useStateFromStores(tmp17, F);
              const _Symbol2 = Symbol;
              if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                class E {
                  constructor() {
                    if (null != closure_6) {
                      tmpResult = tmp();
                    }
                    return;
                  }
                }
                const items1 = [ApplicationStore];
                cResult[17] = items1;
                const tmp22 = items1;
              } else {
                class E {
                  constructor() {
                    if (null != closure_6) {
                      tmpResult = tmp();
                    }
                    return;
                  }
                }
              }
              if (cResult[18] === activity.application_id) {
                class E {
                  constructor() {
                    if (null != closure_6) {
                      tmpResult = tmp();
                    }
                    return;
                  }
                }
                const stateFromStores1 = tmp(tmp2[43]).useStateFromStores(tmp22, tmp24);
                if (activity.type !== constants.CUSTOM_STATUS) {
                  class E {
                    constructor() {
                      if (null != closure_6) {
                        tmpResult = tmp();
                      }
                      return;
                    }
                  }
                }
                return null;
              }
              class F {
                constructor() {
                  tmp = activity;
                  if (closure_1(closure_2[34])(activity)) {
                    tmp3 = user;
                    session_id = undefined;
                    tmp2 = closure_17;
                    if (tmp != null) {
                      session_id = tmp.session_id;
                    }
                    voiceStateForSession = closure_17.getVoiceStateForSession(user.id, session_id);
                    channelId = undefined;
                    if (voiceStateForSession != null) {
                      channelId = voiceStateForSession.channelId;
                    }
                    tmp8 = closure_12;
                    tmp7 = closure_13;
                    channel = closure_12.getChannel(channelId);
                    guildId = undefined;
                    if (channel != null) {
                      guildId = channel.getGuildId();
                    }
                    return closure_13.getGuild(guildId);
                  } else {
                    return null;
                  }
                }
              }
              cResult[18] = activity.application_id;
              cResult[19] = activity.name;
              cResult[20] = tmp24;
              const tmpResult = tmp(tmp2[43]);
            }
            class F {
              constructor() {
                tmp = activity;
                if (closure_1(closure_2[34])(activity)) {
                  tmp3 = user;
                  session_id = undefined;
                  tmp2 = closure_17;
                  if (tmp != null) {
                    session_id = tmp.session_id;
                  }
                  voiceStateForSession = closure_17.getVoiceStateForSession(user.id, session_id);
                  channelId = undefined;
                  if (voiceStateForSession != null) {
                    channelId = voiceStateForSession.channelId;
                  }
                  tmp8 = closure_12;
                  tmp7 = closure_13;
                  channel = closure_12.getChannel(channelId);
                  guildId = undefined;
                  if (channel != null) {
                    guildId = channel.getGuildId();
                  }
                  return closure_13.getGuild(guildId);
                } else {
                  return null;
                }
              }
            }
            cResult[14] = activity;
            cResult[15] = user.id;
            cResult[16] = F;
          }
          let obj2 = { userId: user.id, onAction: tmp10 };
          cResult[10] = tmp10;
          cResult[11] = user.id;
          cResult[12] = obj2;
          tmp14 = obj2;
        }
        let obj3 = { location: "User Profile Activity Card", applicationId: application_id, source: null, trackEntryPointImpression: true, sourceUserId: user.id };
        cResult[5] = application_id;
        cResult[6] = user.id;
        cResult[7] = obj3;
        tmp11 = obj3;
      }
    }
  }
  let obj4 = { display: "live", voiceChannelId: id, user, activity, analyticsLocations };
  cResult[0] = activity;
  cResult[1] = analyticsLocations;
  cResult[2] = id;
  cResult[3] = user;
  cResult[4] = obj4;
  tmp9 = obj4;
  const tmp7 = currentUser(activity[37]);
}) : (function ActivityCard(user) {
  user = user.user;
  ({ currentUser, activity } = user);
  const voiceChannel = user.voiceChannel;
  dependencyMap = undefined;
  closure_3 = undefined;
  const tmp = closure_26();
  let obj = dependencyMap;
  const tmp3 = activity(13005)(activity);
  const analyticsLocations = activity(6841)(activity(6865).USER_PROFILE_LIVE_ACTIVITY_CARD).analyticsLocations;
  let id;
  const tmp4 = activity(6841);
  if (voiceChannel != null) {
    id = voiceChannel.id;
  }
  const tmp5Result = activity(13011)({ display: "live", voiceChannelId: id, user, activity, analyticsLocations });
  dependencyMap = tmp5Result;
  const application_id = activity.application_id;
  const tmp5 = activity(13011);
  const tmp2Result = activity(8851);
  let PlayOnSpotifyButton = user;
  const tmp2ResultResult = tmp2Result({ location: "User Profile Activity Card", applicationId: application_id, source: user(8850).GameProfileSources.UserProfile, trackEntryPointImpression: true, sourceUserId: user.id });
  closure_3 = tmp2ResultResult;
  const items = [tmp2ResultResult];
  const callback = noop.useCallback(() => {
    if (null != closure_3) {
      tmp();
    }
  }, items);
  activity(13012)({ userId: user.id, onAction: tmp5Result });
  const obj2 = { location: "User Profile Activity Card", applicationId: application_id, source: user(8850).GameProfileSources.UserProfile, trackEntryPointImpression: true, sourceUserId: user.id };
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
      let obj7 = { onPress: callback, disabled: null == tmp2ResultResult, accessibilityRole: "button", accessibilityLabel: null, children: null };
      const intl = PlayOnSpotifyButton(1126).intl;
      const obj8 = { gameName: activity.name };
      obj7.accessibilityLabel = intl.formatToPlainString(PlayOnSpotifyButton(1126).t["9sZWVp"], obj8);
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
        obj10.source = PlayOnSpotifyButton(1414).makeSource(whitePNG);
        obj10.size = PlayOnSpotifyButton(1200).IconSizes.SMALL_14;
        tmp33Result = closure_23(PlayOnSpotifyButton(1200).Icon, obj10);
        const PlayOnSpotifyButtonResult = PlayOnSpotifyButton(1414);
      }
      obj9.titleIcon = tmp33Result;
      const obj11 = { user, activity, application: stateFromStores1, onAction: tmp5Result };
      const items4 = [closure_23(closure_29, obj11), , , ];
      let tmp33Result5 = null;
      if (activity(12998)(activity)) {
        ({ start, end } = activity.timestamps);
        const obj12 = { start, end };
        tmp33Result5 = closure_23(activity(13013), obj12);
      }
      items4[1] = tmp33Result5;
      let tmp33Result6 = null;
      if (null != voiceChannel) {
        tmp33Result6 = null;
        if (null != stateFromStores) {
          const obj13 = { guild: stateFromStores, channel: voiceChannel, onAction: tmp5Result, style: tmp.voiceChannelDivider };
          tmp33Result6 = closure_23(activity(13015), obj13);
        }
      }
      items4[2] = tmp33Result6;
      let tmp33Result7 = null;
      if (user.id !== currentUser.id) {
        if (activity(10238)(activity)) {
          PlayOnSpotifyButton = PlayOnSpotifyButton(13023).PlayOnSpotifyButton;
          obj = { activity, onAction: tmp5Result };
          tmp33Result7 = closure_23(PlayOnSpotifyButton, obj);
        } else if (activity(7421)(activity)) {
          const obj14 = { user, currentUser, activity, application: stateFromStores1, onAction: tmp5Result };
          tmp33Result7 = closure_23(PlayOnSpotifyButton(13023).JoinActivityButton, obj14);
        } else {
          if (activity(10230)(activity)) {
            let supported_platforms = activity.supported_platforms;
            const currentActivityGamePlatform = PlayOnSpotifyButton(13026).getCurrentActivityGamePlatform();
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
                      const obj15 = { user, currentUser, activity, application: stateFromStores1, onAction: tmp5Result };
                      tmp33Result7 = closure_23(PlayOnSpotifyButton(13023).JoinGameActivityButton, obj15);
                    }
                  }
                }
              }
            }
            const PlayOnSpotifyButtonResult1 = PlayOnSpotifyButton(13026);
          }
          if (activity(8360)(activity)) {
            const obj16 = { activity, onAction: tmp5Result };
            tmp33Result7 = closure_23(PlayOnSpotifyButton(13023).WatchActivityButton, obj16);
          } else {
            if (null != activity.buttons) {
              if (activity.buttons.length > 0) {
                const obj17 = { style: tmp.customButtons, children: null };
                const buttons = activity.buttons;
                obj17.children = buttons.map((item, index) => closure_2_23(UserProfileActivityButtons.CustomActivityButton, { index, user, activity, onAction }, index));
                tmp33Result7 = closure_23(closure_9, obj17);
              }
            }
            tmp33Result7 = null;
            if (!activity(5107)(activity)) {
              if (!activity(12991)(activity)) {
                tmp33Result7 = null;
                if (activity(12992)(activity)) {
                  const obj18 = { type: constants3.PLAYSTATION, onAction: tmp5Result };
                  tmp33Result7 = closure_23(PlayOnSpotifyButton(13023).ConnectPlatformButton, obj18);
                }
              }
            }
            const obj19 = { type: constants3.XBOX, onAction: tmp5Result };
            tmp33Result7 = closure_23(PlayOnSpotifyButton(13023).ConnectPlatformButton, obj19);
          }
        }
      }
      items4[3] = tmp33Result7;
      obj9.children = items4;
      obj9 = closure_24(activity(6890), obj9);
      obj7.children = obj9;
      obj7 = closure_23(PlayOnSpotifyButton(6189).PressableOpacity, obj7);
      obj6.children = obj7;
      closure_23(PlayOnSpotifyButton(6841).AnalyticsLocationProvider, obj6);
      const tmp2Result2 = activity(6890);
    }
  }
  return tmp15;
});
ReactCompilerGating = fn(558);
let closure_31 = ReactCompilerGating.isReactCompilerEnabled() ? (function StreamActivityCard(user) {
  const cResult = user(activity[20]).c(73);
  user = user.user;
  const stream = user.stream;
  activity = user.activity;
  closure_26();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== stream.channelId) {
    const fn = function o() {
      return ChannelStore.getChannel(stream.channelId);
    };
    cResult[1] = stream.channelId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = user(activity[20]);
  const stateFromStores = user(activity[43]).useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [VoiceStateStore];
    cResult[3] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  if (cResult[4] !== id) {
    let id1;
    if (stateFromStores != null) {
      id1 = stateFromStores.id;
    }
    class T {
      constructor() {
        id = undefined;
        tmp = closure_17;
        if (closure_3 != null) {
          id = closure_3.id;
        }
        return closure_17.isInChannel(id);
      }
    }
    cResult[4] = id1;
    cResult[5] = T;
    let tmp12 = T;
  } else {
    tmp12 = cResult[5];
  }
  const tmpResult = user(activity[43]);
  const stateFromStores1 = user(activity[43]).useStateFromStores(tmp9, tmp12);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [];
    class T {
      constructor() {
        id = undefined;
        tmp = closure_17;
        if (closure_3 != null) {
          id = closure_3.id;
        }
        return closure_17.isInChannel(id);
      }
    }
    cResult[6] = items2;
    let tmp15 = items2;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] !== stream.guildId) {
    class L {
      constructor() {
        return closure_13.getGuild(stream.guildId);
      }
    }
    class T {
      constructor() {
        id = undefined;
        tmp = closure_17;
        if (closure_3 != null) {
          id = closure_3.id;
        }
        return closure_17.isInChannel(id);
      }
    }
    cResult[8] = L;
  } else {
    class L {
      constructor() {
        return closure_13.getGuild(stream.guildId);
      }
    }
  }
  const tmpResult7 = user(activity[43]);
  const stateFromStores2 = user(activity[43]).useStateFromStores(tmp15, L);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        return closure_13.getGuild(stream.guildId);
      }
    }
    const items3 = [];
    class T {
      constructor() {
        id = undefined;
        tmp = closure_17;
        if (closure_3 != null) {
          id = closure_3.id;
        }
        return closure_17.isInChannel(id);
      }
    }
    cResult[9] = items3;
    const tmp19 = items3;
  } else {
    class L {
      constructor() {
        return closure_13.getGuild(stream.guildId);
      }
    }
  }
  if (cResult[10] !== user.id) {
    class B {
      constructor() {
        return closure_15.findActivity(user.id, (arg0) => stream(activity[33])(arg0) && !stream(activity[56])(arg0));
      }
    }
    class T {
      constructor() {
        id = undefined;
        tmp = closure_17;
        if (closure_3 != null) {
          id = closure_3.id;
        }
        return closure_17.isInChannel(id);
      }
    }
    cResult[11] = B;
  } else {
    class B {
      constructor() {
        return closure_15.findActivity(user.id, (arg0) => stream(activity[33])(arg0) && !stream(activity[56])(arg0));
      }
    }
  }
  const tmpResult8 = user(activity[43]);
  const stateFromStores3 = user(activity[43]).useStateFromStores(tmp19, B);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class B {
      constructor() {
        return closure_15.findActivity(user.id, (arg0) => stream(activity[33])(arg0) && !stream(activity[56])(arg0));
      }
    }
    const items4 = [];
    class T {
      constructor() {
        id = undefined;
        tmp = closure_17;
        if (closure_3 != null) {
          id = closure_3.id;
        }
        return closure_17.isInChannel(id);
      }
    }
    cResult[12] = items4;
    const tmp22 = items4;
  } else {
    class B {
      constructor() {
        return closure_15.findActivity(user.id, (arg0) => stream(activity[33])(arg0) && !stream(activity[56])(arg0));
      }
    }
  }
  if (cResult[13] !== user.id) {
    class G {
      constructor() {
        return closure_11.getActiveStreamForUser(user.id, undefined);
      }
    }
    class T {
      constructor() {
        id = undefined;
        tmp = closure_17;
        if (closure_3 != null) {
          id = closure_3.id;
        }
        return closure_17.isInChannel(id);
      }
    }
    cResult[14] = G;
  } else {
    class G {
      constructor() {
        return closure_11.getActiveStreamForUser(user.id, undefined);
      }
    }
  }
  const tmpResult9 = user(activity[43]);
  const stateFromStores4 = user(activity[43]).useStateFromStores(tmp22, G);
  const tmpResult10 = user(activity[43]);
  if (stateFromStores4 != null) {
    class G {
      constructor() {
        return closure_11.getActiveStreamForUser(user.id, undefined);
      }
    }
  }
  const tmp26 = stream(activity[57]);
  ({ effectiveVolume, handleVolumeChange } = stream(activity[57])(undefined, user(activity[58]).MediaEngineContextTypes.STREAM));
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    class G {
      constructor() {
        return closure_11.getActiveStreamForUser(user.id, undefined);
      }
    }
    const items5 = [];
    class T {
      constructor() {
        id = undefined;
        tmp = closure_17;
        if (closure_3 != null) {
          id = closure_3.id;
        }
        return closure_17.isInChannel(id);
      }
    }
    cResult[15] = items5;
    const tmp28 = items5;
  } else {
    class G {
      constructor() {
        return closure_11.getActiveStreamForUser(user.id, undefined);
      }
    }
  }
  if (cResult[16] !== activity) {
    class G {
      constructor() {
        return closure_11.getActiveStreamForUser(user.id, undefined);
      }
    }
    class T {
      constructor() {
        id = undefined;
        tmp = closure_17;
        if (closure_3 != null) {
          id = closure_3.id;
        }
        return closure_17.isInChannel(id);
      }
    }
    cResult[17] = tmp30;
  } else {
    class G {
      constructor() {
        return closure_11.getActiveStreamForUser(user.id, undefined);
      }
    }
  }
  const tmp26Result = stream(activity[57])(undefined, user(activity[58]).MediaEngineContextTypes.STREAM);
  const stateFromStores5 = user(activity[43]).useStateFromStores(tmp28, tmp30);
  const tmpResult11 = user(activity[43]);
  const first1 = _slicedToArray(user(activity[59]).useCanWatchStream(stateFromStores), 1)[0];
  const tmpResult12 = user(activity[59]);
  const analyticsLocations = stream(activity[37])(tmp25(tmp2[38]).USER_PROFILE_LIVE_ACTIVITY_CARD).analyticsLocations;
  if (stateFromStores != null) {
    class G {
      constructor() {
        return closure_11.getActiveStreamForUser(user.id, undefined);
      }
    }
  }
  if (cResult[18] === analyticsLocations) {
    class G {
      constructor() {
        return closure_11.getActiveStreamForUser(user.id, undefined);
      }
    }
  }
  cResult[18] = analyticsLocations;
  cResult[19] = stream;
  cResult[20] = undefined;
  cResult[21] = user;
  cResult[22] = { display: "live", voiceChannelId: undefined, user, stream, analyticsLocations };
  let obj2 = { display: "live", voiceChannelId: undefined, user, stream, analyticsLocations };
  const tmp25Result = stream(activity[37]);
}) : (function StreamActivityCard(user) {
  user = user.user;
  const stream = user.stream;
  const activity = user.activity;
  _slicedToArray = undefined;
  const tmp = closure_26();
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
  const stateFromStores3 = user(activity[43]).useStateFromStores(items3, () => PresenceStore.findActivity(user.id, (arg0) => stream(activity[33])(arg0) && !stream(activity[56])(arg0)));
  const obj4 = user(activity[43]);
  const items4 = [ApplicationStreamingStore];
  const stateFromStores4 = user(activity[43]).useStateFromStores(items4, () => ApplicationStreamingStore.getActiveStreamForUser(user.id, undefined));
  let ownerId;
  const obj5 = user(activity[43]);
  if (stateFromStores4 != null) {
    ownerId = stateFromStores4.ownerId;
  }
  const tmp10 = stream(activity[57]);
  ({ effectiveVolume, handleVolumeChange } = stream(activity[57])(ownerId, user(activity[58]).MediaEngineContextTypes.STREAM));
  const tmp10Result = stream(activity[57])(ownerId, user(activity[58]).MediaEngineContextTypes.STREAM);
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
  const tmp2Result2 = user(activity[59]);
  const analyticsLocations = stream(activity[37])(tmp9(tmp3[38]).USER_PROFILE_LIVE_ACTIVITY_CARD).analyticsLocations;
  let id;
  const tmp9Result = stream(activity[37]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp9Result1Result = stream(activity[39])({ display: "live", voiceChannelId: id, user, stream, analyticsLocations });
  _slicedToArray = tmp9Result1Result;
  stream(activity[42])({ userId: user.id, onAction: tmp9Result1Result });
  const obj6 = { userId: user.id, onAction: tmp9Result1Result };
  const tmp9Result5 = stream(activity[39]);
  const obj7 = { value: analyticsLocations, children: null };
  const obj8 = { style: null, title: null, titleStyle: null, titleIcon: null, children: null };
  const items6 = [tmp.card, user.style];
  obj8.style = items6;
  const tmp9Result6 = stream(activity[63]);
  if (null != stateFromStores3) {
    const intl2 = tmp2(tmp3[26]).intl;
    const obj9 = { name: stateFromStores3.name };
    let formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[26]).t["4CQq9Q"], obj9);
  } else {
    const intl = tmp2(tmp3[26]).intl;
    formatToPlainStringResult = intl.string(tmp2(tmp3[26]).t["Jpkr/q"]);
  }
  obj8.title = formatToPlainStringResult;
  obj8.titleStyle = tmp.cardTitle;
  obj8.titleIcon = closure_23(user(activity[55]).LiveTag, {});
  const obj10 = { style: tmp.streamPreview, children: null };
  const obj11 = {
    mode: "a",
    stream,
    disabled: !_slicedToArray(tmp2Result2.useCanWatchStream(stateFromStores), 1)[0],
    onPress: function handlePressImage() {
      closure_4({ action: "PRESS_IMAGE" });
      const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(stream.channelId);
      const result = StreamActionCreators.watchStreamAndTransitionToStream(stream);
      ActionSheetActionCreatorsDefault.hideAllActionSheets();
    }
  };
  obj10.children = closure_23(user(activity[64]).VoicePanelStreamPreview, obj11);
  const items7 = [closure_23(closure_9, obj10), , , , ];
  let tmp19Result = null != stateFromStores4 && !tmp9Result6.useConfig({ location: "UserProfileVoiceSettings" }).nonContextualStreamOutputPresent;
  if (tmp19Result) {
    const obj12 = { value: effectiveVolume, onValueChange: handleVolumeChange, accessibilityLabel: null };
    const intl3 = tmp2(tmp3[26]).intl;
    obj12.accessibilityLabel = intl3.string(tmp2(tmp3[26]).t.pEAl4b);
    tmp19Result = closure_23(tmp9(tmp3[65]), obj12, "set-stream-volume");
    const tmp9Result8 = tmp9(tmp3[65]);
  }
  items7[1] = tmp19Result;
  let tmp19Result4 = null != activity && tmp9(tmp3[34])(activity);
  if (tmp19Result4) {
    const obj13 = { user, activity, application: stateFromStores5, onAction: tmp9Result1Result };
    tmp19Result4 = closure_23(closure_29, obj13);
  }
  items7[2] = tmp19Result4;
  let tmp19Result5 = null != stateFromStores2 && null != stateFromStores;
  if (tmp19Result5) {
    const obj14 = { guild: stateFromStores2, channel: stateFromStores, onAction: tmp9Result1Result, style: tmp.voiceChannelDivider };
    tmp19Result5 = closure_23(tmp9(tmp3[46]), obj14);
  }
  items7[3] = tmp19Result5;
  let tmp19Result6 = null != stateFromStores;
  if (tmp19Result6) {
    const obj15 = { channel: stateFromStores, isInChannel: stateFromStores1, onAction: tmp9Result1Result };
    tmp19Result6 = closure_23(tmp2(tmp3[47]).VoiceChannelButtons, obj15);
  }
  items7[4] = tmp19Result6;
  obj8.children = items7;
  obj7.children = closure_24(stream(activity[54]), obj8);
  return closure_23(user(activity[37]).AnalyticsLocationProvider, obj7);
});
ReactCompilerGating = fn(558);
let closure_32 = ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceCallActivityCard(arg0) {
  const cResult = channel(576).c(56);
  ({ user, channel } = arg0);
  ({ isInChannel, style } = arg0);
  let obj = channel(576);
  importDefault = closure_26();
  usePersonalizedVoiceChannelUsersDefault(channel);
  const tmp4 = closure_26();
  dependencyMap = useChannelNameDefault(channel);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel.guild_id) {
    const fn = function l() {
      return GuildStore.getGuild(channel.guild_id);
    };
    cResult[1] = channel.guild_id;
    cResult[2] = fn;
    let tmp10 = fn;
  } else {
    tmp10 = cResult[2];
  }
  const tmp7 = useChannelNameDefault(channel);
  const stateFromStores = channel(504).useStateFromStores(first, tmp10);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let items1 = [PermissionStore];
    cResult[3] = items1;
    let tmp12 = items1;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] !== channel) {
    class A {
      constructor() {
        tmp = channel;
        isPrivateResult = channel.isPrivate();
        if (!isPrivateResult) {
          tmp3 = closure_14;
          tmp4 = Permissions;
          isPrivateResult = closure_14.can(Permissions.CONNECT, tmp);
        }
        return isPrivateResult;
      }
    }
    cResult[4] = channel;
    cResult[5] = A;
  } else {
    class A {
      constructor() {
        tmp = channel;
        isPrivateResult = channel.isPrivate();
        if (!isPrivateResult) {
          tmp3 = closure_14;
          tmp4 = Permissions;
          isPrivateResult = closure_14.can(Permissions.CONNECT, tmp);
        }
        return isPrivateResult;
      }
    }
  }
  const tmpResult = channel(504);
  const stateFromStores1 = channel(504).useStateFromStores(tmp12, A);
  const tmpResult2 = channel(504);
  const tmp5Result = useAnalyticsLocationsDefault;
  ({ analyticsLocations, newestAnalyticsLocation } = useAnalyticsLocationsDefault(AnalyticsLocationDefault.USER_PROFILE_VOICE_ACTIVITY_CARD));
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        tmp = channel;
        isPrivateResult = channel.isPrivate();
        if (!isPrivateResult) {
          tmp3 = closure_14;
          tmp4 = Permissions;
          isPrivateResult = closure_14.can(Permissions.CONNECT, tmp);
        }
        return isPrivateResult;
      }
    }
    cResult[6] = tmp19;
  } else {
    class A {
      constructor() {
        tmp = channel;
        isPrivateResult = channel.isPrivate();
        if (!isPrivateResult) {
          tmp3 = closure_14;
          tmp4 = Permissions;
          isPrivateResult = closure_14.can(Permissions.CONNECT, tmp);
        }
        return isPrivateResult;
      }
    }
  }
  if (cResult[7] === analyticsLocations) {
    class A {
      constructor() {
        tmp = channel;
        isPrivateResult = channel.isPrivate();
        if (!isPrivateResult) {
          tmp3 = closure_14;
          tmp4 = Permissions;
          isPrivateResult = closure_14.can(Permissions.CONNECT, tmp);
        }
        return isPrivateResult;
      }
    }
  }
  cResult[7] = analyticsLocations;
  cResult[8] = channel.id;
  cResult[9] = user;
  cResult[10] = { display: "voice", activity: tmp19, voiceChannelId: channel.id, user, analyticsLocations };
  let obj2 = { display: "voice", activity: tmp19, voiceChannelId: channel.id, user, analyticsLocations };
  const tmp5ResultResult = useAnalyticsLocationsDefault(AnalyticsLocationDefault.USER_PROFILE_VOICE_ACTIVITY_CARD);
}) : (function VoiceCallActivityCard(arg0) {
  ({ user, channel } = arg0);
  let stateFromStores;
  dependencyMap = undefined;
  ({ isInChannel, style } = arg0);
  const tmp = closure_26();
  const tmp5 = stateFromStores(5417)(channel);
  const tmp4 = stateFromStores(13016)(channel);
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
  const tmp9 = stateFromStores(6841);
  ({ newestAnalyticsLocation: c2, analyticsLocations } = stateFromStores(6841)(stateFromStores(6865).USER_PROFILE_VOICE_ACTIVITY_CARD));
  const tmp11 = stateFromStores(13011)({ display: "voice", activity: { type: "VOICE" }, voiceChannelId: channel.id, user, analyticsLocations });
  closure_3 = tmp11;
  stateFromStores(13012)({ userId: user.id, onAction: tmp11 });
  const obj5 = { style: null, title: null, titleStyle: null, children: null };
  const items2 = [tmp.card, style];
  obj5.style = items2;
  const obj3 = { display: "voice", activity: { type: "VOICE" }, voiceChannelId: channel.id, user, analyticsLocations };
  const obj4 = { userId: user.id, onAction: tmp11 };
  const tmp9Result = stateFromStores(6841)(stateFromStores(6865).USER_PROFILE_VOICE_ACTIVITY_CARD);
  if (!channel.isDM()) {
    if (!channel.isGroupDM()) {
      const intl = channel(1126).intl;
      const string = intl.string;
      const t = channel(1126).t;
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
    const items3 = [closure_23(tmp2(13030), obj7), ];
    const obj8 = { style: tmp.voiceCallContent, children: null };
    if (stateFromStores1) {
      const obj9 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, onPress: null, children: null };
      const obj10 = { channel };
      obj9.accessibilityLabel = tmp2(8626)(obj10);
      const intl3 = channel(1126).intl;
      obj9.accessibilityHint = intl3.string(channel(1126).t["9C444m"]);
      obj9.onPress = function onPress() {
        closure_3({ action: "OPEN_VOICE_CHANNEL" });
        ActionSheetActionCreatorsDefault.hideAllActionSheets();
        ModalActionCreatorsDefault.popAll();
        PrivateChannelCallUtils.openGuildVoiceModal(channel, c2);
      };
      const obj11 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
      const obj12 = { style: tmp.voiceCallNameIconWrapper, children: null };
      const obj13 = { channel, size: "sm", color: "mobile-text-heading-primary" };
      obj12.children = closure_23(tmp2(10241), obj13);
      const items4 = [closure_23(closure_9, obj12), tmp5];
      obj11.children = items4;
      obj9.children = closure_24(channel(5086).Text, obj11);
      let tmp13Result = closure_23(channel(6189).PressableOpacity, obj9);
    } else {
      const obj14 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
      const obj15 = { style: tmp.voiceCallNameIconWrapper, children: null };
      const obj16 = { channel, size: "sm", color: "mobile-text-heading-primary" };
      obj15.children = closure_23(tmp2(10241), obj16);
      const items5 = [closure_23(closure_9, obj15), tmp5];
      obj14.children = items5;
      tmp13Result = closure_24(channel(5086).Text, obj14);
    }
    const items6 = [tmp13Result, ];
    let tmp18Result2 = null;
    if (null != stateFromStores) {
      const obj17 = { accessibilityRole: "button", accessibilityHint: null, accessibilityLabel: null, onPress: null, children: null };
      const intl4 = channel(1126).intl;
      obj17.accessibilityHint = intl4.string(channel(1126).t.KLOhbO);
      const intl5 = channel(1126).intl;
      const obj18 = { guildName: stateFromStores.name };
      obj17.accessibilityLabel = intl5.formatToPlainString(channel(1126).t["hq/Qze"], obj18);
      obj17.onPress = function onPress() {
        closure_3({ action: "OPEN_VOICE_GUILD" });
        transitionToGuild.transitionToGuild(stateFromStores.id);
        closeVoicePanelsDefault();
        ActionSheetActionCreatorsDefault.hideAllActionSheets();
      };
      const obj19 = { variant: "text-xs/medium", children: null };
      const intl6 = channel(1126).intl;
      const obj20 = { guildName: stateFromStores.name };
      obj19.children = intl6.format(channel(1126).t["hq/Qze"], obj20);
      obj17.children = closure_23(channel(5086).Text, obj19);
      tmp18Result2 = closure_23(channel(6189).PressableOpacity, obj17);
    }
    items6[1] = tmp18Result2;
    obj8.children = items6;
    items3[1] = closure_24(closure_9, obj8);
    obj6.children = items3;
    const items7 = [closure_24(closure_9, obj6), ];
    const obj21 = { channel, isInChannel, onAction: tmp11 };
    items7[1] = closure_23(channel(13023).VoiceChannelButtons, obj21);
    obj5.children = items7;
    return closure_24(tmp14, obj5);
  }
  const intl2 = channel(1126).intl;
  stringResult = intl2.string(channel(1126).t["9FaEzi"]);
  tmp14 = stateFromStores(6890);
});
ReactCompilerGating = fn(558);
let obj6 = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingTop: 16, marginTop: 4, marginHorizontal: -CARD_PADDING, paddingHorizontal: CARD_PADDING };
size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivity.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileActivity(user) {
  const cResult = user(style[20]).c(70);
  user = user.user;
  const currentUser = user.currentUser;
  ({ guildId, style } = user);
  let obj = user(style[20]);
  closure_3 = closure_26();
  let tmp4 = closure_26();
  const tmp5 = currentUser;
  ({ live, stream } = currentUser(style[75])(user.id));
  if (cResult[0] === guildId) {
    if (cResult[1] === user.id) {
      let tmp7 = cResult[2];
    }
    let tmp8 = tmp5(style[76])(tmp7);
    const voiceChannel = tmp8.voiceChannel;
    const voiceActivity = tmp8.voiceActivity;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      let items = [VoiceStateStore];
      cResult[3] = items;
      let tmp10 = items;
    } else {
      tmp10 = cResult[3];
    }
    if (cResult[4] !== voiceChannel) {
      class C {
        constructor() {
          isInChannelResult = null != voiceChannel;
          if (isInChannelResult) {
            tmp3 = closure_17;
            isInChannelResult = closure_17.isInChannel(tmp.id);
          }
          return isInChannelResult;
        }
      }
      cResult[4] = voiceChannel;
      cResult[5] = C;
    } else {
      class C {
        constructor() {
          isInChannelResult = null != voiceChannel;
          if (isInChannelResult) {
            tmp3 = closure_17;
            isInChannelResult = closure_17.isInChannel(tmp.id);
          }
          return isInChannelResult;
        }
      }
    }
    const stateFromStores = tmp(style[43]).useStateFromStores(tmp10, C);
    closure_8 = tmp14;
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor() {
          isInChannelResult = null != voiceChannel;
          if (isInChannelResult) {
            tmp3 = closure_17;
            isInChannelResult = closure_17.isInChannel(tmp.id);
          }
          return isInChannelResult;
        }
      }
      let items1 = [SelfPresenceStore, PresenceStore];
      cResult[6] = items1;
      const tmp15 = items1;
    } else {
      class C {
        constructor() {
          isInChannelResult = null != voiceChannel;
          if (isInChannelResult) {
            tmp3 = closure_17;
            isInChannelResult = closure_17.isInChannel(tmp.id);
          }
          return isInChannelResult;
        }
      }
    }
    if (cResult[7] === user.id === currentUser.id) {
      class C {
        constructor() {
          isInChannelResult = null != voiceChannel;
          if (isInChannelResult) {
            tmp3 = closure_17;
            isInChannelResult = closure_17.isInChannel(tmp.id);
          }
          return isInChannelResult;
        }
      }
      const stateFromStores1 = tmp(style[43]).useStateFromStores(tmp15, L);
      const _Symbol3 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor() {
            isInChannelResult = null != voiceChannel;
            if (isInChannelResult) {
              tmp3 = closure_17;
              isInChannelResult = closure_17.isInChannel(tmp.id);
            }
            return isInChannelResult;
          }
        }
        let items2 = [UserProfileStore];
        cResult[10] = items2;
        const tmp19 = items2;
      } else {
        class C {
          constructor() {
            isInChannelResult = null != voiceChannel;
            if (isInChannelResult) {
              tmp3 = closure_17;
              isInChannelResult = closure_17.isInChannel(tmp.id);
            }
            return isInChannelResult;
          }
        }
      }
      if (cResult[11] !== user.id) {
        class D {
          constructor() {
            userProfile = closure_18.getUserProfile(user.id);
            _private = undefined;
            if (userProfile != null) {
              _private = userProfile.private;
            }
            return true === _private;
          }
        }
        cResult[11] = user.id;
        cResult[12] = D;
      } else {
        class D {
          constructor() {
            userProfile = closure_18.getUserProfile(user.id);
            _private = undefined;
            if (userProfile != null) {
              _private = userProfile.private;
            }
            return true === _private;
          }
        }
      }
      const tmpResult3 = tmp(style[43]);
      const stateFromStores2 = tmp(style[43]).useStateFromStores(tmp19, D);
      if (stateFromStores1) {
        class D {
          constructor() {
            userProfile = closure_18.getUserProfile(user.id);
            _private = undefined;
            if (userProfile != null) {
              _private = userProfile.private;
            }
            return true === _private;
          }
        }
        if (null != voiceChannel) {
          class D {
            constructor() {
              userProfile = closure_18.getUserProfile(user.id);
              _private = undefined;
              if (userProfile != null) {
                _private = userProfile.private;
              }
              return true === _private;
            }
          }
        }
      } else {
        class D {
          constructor() {
            userProfile = closure_18.getUserProfile(user.id);
            _private = undefined;
            if (userProfile != null) {
              _private = userProfile.private;
            }
            return true === _private;
          }
        }
      }
      if (stateFromStores1) {
        class D {
          constructor() {
            userProfile = closure_18.getUserProfile(user.id);
            _private = undefined;
            if (userProfile != null) {
              _private = userProfile.private;
            }
            return true === _private;
          }
        }
        return null;
      } else {
        class D {
          constructor() {
            userProfile = closure_18.getUserProfile(user.id);
            _private = undefined;
            if (userProfile != null) {
              _private = userProfile.private;
            }
            return true === _private;
          }
        }
        if (null != voiceActivity) {
          class D {
            constructor() {
              userProfile = closure_18.getUserProfile(user.id);
              _private = undefined;
              if (userProfile != null) {
                _private = userProfile.private;
              }
              return true === _private;
            }
          }
        }
        cResult[27] = live;
        cResult[28] = voiceActivity;
        cResult[29] = live;
      }
      const tmpResult4 = tmp(style[43]);
    }
    class L {
      constructor() {
        if (closure_8) {
          tmp4 = closure_16;
          status = closure_16.getStatus();
        } else {
          tmp = closure_15;
          tmp2 = user;
          status = closure_15.getStatus(user.id);
        }
        tmp5 = status === StatusTypes.OFFLINE || status === StatusTypes.INVISIBLE;
        return tmp5;
      }
    }
    cResult[7] = user.id === currentUser.id;
    cResult[8] = user.id;
    cResult[9] = L;
    const tmpResult = tmp(style[43]);
  }
  let obj2 = { userId: user.id, guildId };
  cResult[0] = guildId;
  cResult[1] = user.id;
  cResult[2] = obj2;
  tmp7 = obj2;
  const tmp6 = currentUser(style[75])(user.id);
}) : (function UserProfileActivity(guildId) {
  user = guildId.user;
  const currentUser = guildId.currentUser;
  const style = guildId.style;
  stream = undefined;
  const tmp = closure_26();
  closure_3 = tmp;
  ({ live, stream } = currentUser(style[75])(user.id));
  const tmp5 = currentUser(style[76])({ userId: user.id, guildId: guildId.guildId });
  const voiceChannel = tmp5.voiceChannel;
  const voiceActivity = tmp5.voiceActivity;
  let obj = { userId: user.id, guildId: guildId.guildId };
  const tmp4 = currentUser(style[75])(user.id);
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
    return status === constants4.OFFLINE || status === constants4.INVISIBLE;
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
        const items4 = [, ];
        ({ voiceSettings: arr11[0], voiceSettingsDivider: arr11[1] } = tmp);
        obj6.style = items4;
        obj5.children = closure_23(tmp2(tmp3[77]), obj6);
        return closure_23(tmp2(tmp3[54]), obj5);
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
        const obj7 = { user, stream, activity: voiceActivity, style };
        tmp20 = closure_23(closure_31, obj7);
      }
      const obj8 = { children: null };
      items5[1] = tmp20;
      items5[2] = found.map((activity, index) => {
        let application_id = activity.application_id;
        if (application_id == null) {
          application_id = index;
        }
        return closure_2_23(closure_30, { user, currentUser, activity, style }, application_id);
      });
      obj8.children = items5;
      return closure_24(closure_25, obj8);
    } else {
      let items7 = function renderVoiceActivityCard(voiceChannel) {
        if (null != stream) {
          if (stream.channelId === voiceChannel.id) {
            const obj2 = { user, stream, activity: voiceActivity, style: closure_3.voiceActivityCard };
            let tmp8 = closure_2_23(closure_31, obj2);
          }
          return tmp8;
        }
        if (null != voiceActivity) {
          const obj3 = { user, currentUser, activity: tmp2, voiceChannel, style: closure_3.voiceActivityCard };
          tmp8 = closure_2_23(closure_30, obj3);
        } else {
          const obj = { user, channel: voiceChannel, isInChannel: stateFromStores, style: closure_3.voiceActivityCard };
          tmp8 = closure_2_23(closure_32, obj);
        }
      };
      if (stateFromStores) {
        const obj9 = { style: null, children: null };
        const items6 = [tmp.card, style];
        obj9.style = items6;
        const tmp2Result3 = tmp2(tmp3[54]);
        items7 = [, ];
        items7[0] = items7(voiceChannel);
        const obj10 = { user, currentUser, channel: voiceChannel, style: null };
        const items8 = [, ];
        ({ voiceSettings: arr8[0], voiceSettingsDivider: arr8[1] } = tmp);
        obj10.style = items8;
        items7[1] = closure_23(tmp2(tmp3[77]), obj10);
        obj9.children = items7;
        let tmp10Result = closure_24(tmp2Result3, obj9);
        const items7Result = items7(voiceChannel);
      } else {
        const obj11 = { style: null, children: null };
        const items9 = [tmp.card, style];
        obj11.style = items9;
        obj11.children = items7(voiceChannel);
        tmp10Result = closure_23(tmp2(tmp3[54]), obj11);
        const tmp2Result4 = tmp2(tmp3[54]);
      }
    }
  }
  const obj4 = user(style[43]);
});