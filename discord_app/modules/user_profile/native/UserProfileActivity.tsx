// discord_app/modules/user_profile/native/UserProfileActivity.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl7 from "../../../intl/index.native.tsx";
import AvatarUtils from "../../../utils/AvatarUtils.tsx";
import shared from "../../../design/shared.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import hasRichActivityDefault from "../../activities/utils/hasRichActivity.tsx";
import StreamActionCreators from "../../../actions/StreamActionCreators.tsx";
import useChannelNameDefault from "../../channel/useChannelName.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import PrivateChannelCallUtils from "../../../utils/native/PrivateChannelCallUtils.tsx";
import SelectedChannelActionCreatorsDefault from "../../../actions/SelectedChannelActionCreators.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import UserProfileCardDefault from "UserProfileCard.tsx";
import Constants2 from "Constants.tsx";
import transitionToGuild from "../../routing/transitionToGuild.native.tsx";
import isEmbeddedActivityDefault from "../../activities/utils/isEmbeddedActivity.tsx";
import isStreamingDefault from "../../activities/utils/isStreaming.tsx";
import isCrunchyrollActivityDefault from "../../activities/utils/isCrunchyrollActivity.tsx";
import MaskedLinkUtils from "../../../utils/MaskedLinkUtils.tsx";
import UnknownGameIcon2 from "../../../design/components/Icon/native/redesign/generated/UnknownGameIcon.tsx";
import closeVoicePanelsDefault from "../../voice_panel/native/utils/closeVoicePanels.tsx";
import getChannelA11yLabelDefault from "../../channel/getChannelA11yLabel.tsx";
import isGameActivityDefault from "../../activities/utils/isGameActivity.tsx";
import isListeningOnSpotifyDefault from "../../activities/utils/isListeningOnSpotify.tsx";
import UserProfileVoiceActivityIconDefault from "UserProfileVoiceActivityIcon.tsx";
import UserActivitySpotify from "../../now_playing/native/UserActivitySpotify.tsx";
import isOnXboxDefault from "../../activities/utils/isOnXbox.tsx";
import isOnPlayStationDefault from "../../activities/utils/isOnPlayStation.tsx";
import shouldShowActivityTimeBarDefault from "../utils/shouldShowActivityTimeBar.tsx";
import UserProfileActivityTimebarDefault from "UserProfileActivityTimebar.tsx";
import UserProfileActivityVoiceChannelDefault from "UserProfileActivityVoiceChannel.tsx";
import usePersonalizedVoiceChannelUsersDefault from "../hooks/usePersonalizedVoiceChannelUsers.tsx";
import UserProfileActivityButtons from "UserProfileActivityButtons.tsx";
import isActivityJoinableOnCurrentPlatform from "../../activities/utils/isActivityJoinableOnCurrentPlatform.tsx";
import UserProfileVoiceSettingsDefault from "UserProfileVoiceSettings.tsx";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import ApplicationStreamingStore from "../../../stores/ApplicationStreamingStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import PresenceStore from "../../../stores/PresenceStore.tsx";
import SelfPresenceStore from "../../../stores/SelfPresenceStore.tsx";
import VoiceStateStore from "../../../stores/VoiceStateStore.tsx";
import UserProfileStore from "../UserProfileStore.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let dependencyMap, href, importDefault;

let c9;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
let metroImportAll;
let metroImportDefault;
let num;
let obj2;
let obj3;
let obj4;
let obj5;
let rect;
let size;
let user = ["children"];
let _slicedToArray = _slicedToArray_mod;
({ TouchableOpacity: metroImportDefault, TouchableWithoutFeedback: metroImportAll, View: c9 } = react_native);
const CARD_PADDING = Constants2.CARD_PADDING;
({
  ActivityTypes: closure_19,
  Permissions: closure_20,
  PlatformTypes: closure_21,
  StatusTypes: closure_22,
} = Constants);
({ jsx: closure_23, jsxs: closure_24, Fragment: closure_25 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  card: { gap: 12 },
  cardTitle: { marginBottom: 0 },
  cardTitleIcon: obj2,
  body: { flexDirection: "row", alignItems: "center", gap: 16 },
  content: { flex: 1 },
  imageContainer: { position: "relative" },
  imageAspectRatio: { width: 60, maxHeight: 60, aspectRatio: "1 / 1" },
  crunchyrollImageAspectRatio: { width: 60, maxHeight: 100, aspectRatio: "2 / 3" },
  largeImage: size,
  smallImageBackground: rect,
  smallImage: { width: 24, height: 24, borderRadius: 12 },
  badges: { marginTop: 4, flexDirection: "row", flexWrap: "wrap", columnGap: 8, rowGap: 0 },
  voiceChannelDivider: obj3,
  customButtons: { flexDirection: "column", gap: 8 },
  streamPreview: obj4,
  voiceActivityCard: { padding: 0 },
  voiceSettings: { padding: 0, marginBottom: -16 },
  voiceSettingsDivider: obj5,
  voiceCallContent: { flex: 1, gap: 4 },
  voiceCallNameIconWrapper: { width: 22, height: num, justifyContent: "center" },
};
obj2 = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
createStyles = createStyles.createStyles;
size = { borderRadius: nativeDefault.radii.xs, width: "100%", height: "100%" };
rect = {
  borderRadius: 16,
  position: "absolute",
  right: -4,
  bottom: -4,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj3 = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingTop: 12 };
obj4 = { aspectRatio: 1.7777777777777777, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
obj5 = {
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
  paddingTop: 16,
  marginTop: 4,
  marginHorizontal: -CARD_PADDING,
  paddingHorizontal: CARD_PADDING,
};
num = 16;
if (PlatformUtils.isAndroid()) {
  num = 12;
}
let closure_26 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      let str;
      let tmp4;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(8);
      if (cResult[0] !== children) {
        children = children.children;
        const tmp7 = _objectWithoutProperties(children, user);
        cResult[0] = children;
        cResult[1] = children;
        cResult[2] = tmp7;
        tmp4 = tmp7;
        str = children;
      } else {
        str = cResult[1];
        tmp4 = cResult[2];
      }
      if (cResult[3] !== str) {
        let trimmed = str;
        if (typeof str === "string") {
          trimmed = str.trim();
        }
        cResult[3] = str;
        cResult[4] = trimmed;
        tmp8 = trimmed;
      } else {
        tmp8 = cResult[4];
      }
      let tmp10 = null;
      if (null != tmp8) {
        tmp10 = null;
        if ("" !== tmp8) {
          if (cResult[5] === tmp4) {
            let tmp11;
            if (cResult[6] === tmp8) {
              tmp11 = cResult[7];
            }
            tmp10 = tmp11;
          }
          const obj2 = { children: tmp8 };
          const Text = Text_Text.Text;
          const merged = Object.assign(tmp4);
          const tmp16 = closure_23(Text, obj2);
          cResult[5] = tmp4;
          cResult[6] = tmp8;
          cResult[7] = tmp16;
          tmp11 = tmp16;
        }
      }
      return tmp10;
    }
  : (children) => {
      const merged = Object.assign(children, Object.assign({ children: 0 }));
      let trimmed = str;
      if (typeof children.children === "string") {
        trimmed = str.trim();
      }
      let tmp3 = null;
      if (null != trimmed) {
        tmp3 = null;
        if ("" !== trimmed) {
          const obj = { children: trimmed };
          const Text = Text_Text.Text;
          const merged1 = Object.assign(merged);
          tmp3 = closure_23(Text, obj);
        }
      }
      return tmp3;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_28 = ReactCompilerGating.isReactCompilerEnabled()
  ? (href) => {
      let obj = href(576);
      const cResult = obj.c(5);
      href = href.href;
      const children = href.children;
      let tmp2 = children;
      if (null != href) {
        let tmp3;
        if (cResult[0] !== href) {
          const fn = function n() {
            const obj = MaskedLinkUtils;
            const obj2 = { href };
            return obj.handleClick(obj2);
          };
          cResult[0] = href;
          cResult[1] = fn;
          tmp3 = fn;
        } else {
          tmp3 = cResult[1];
        }
        if (cResult[2] === children) {
          let tmp4;
          if (cResult[3] === tmp3) {
            tmp4 = cResult[4];
          }
          tmp2 = tmp4;
        }
        let obj2 = { accessibilityRole: "link", onPress: tmp3, children };
        const tmp7 = closure_23(closure_7, obj2);
        cResult[2] = children;
        cResult[3] = tmp3;
        cResult[4] = tmp7;
        tmp4 = tmp7;
      }
      return tmp2;
    }
  : (href) => {
      href = href.href;
      const children = href.children;
      let tmp = children;
      if (null != href) {
        let obj = {
          accessibilityRole: "link",
          onPress() {
            const obj = MaskedLinkUtils;
            const obj2 = { href };
            return obj.handleClick(obj2);
          },
          children,
        };
        tmp = closure_23(closure_7, obj);
      }
      return tmp;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_29 = ReactCompilerGating.isReactCompilerEnabled()
  ? (user) => {
      let onAction;
      let tmp14;
      let obj = user(onAction[20]);
      const cResult = obj.c(45);
      user = user.user;
      const activity = user.activity;
      const tmp = onAction;
      onAction = user.onAction;
      const application = user.application;
      const tmp3 = closure_26();
      let closure_3 = tmp3;
      let obj2 = user(onAction[23]);
      const imageForActivity = obj2.useImageForActivity(activity, application, "user_profile_activity_native");
      const largeImage = imageForActivity.largeImage;
      const smallImage = imageForActivity.smallImage;
      let obj3 = user(onAction[24]);
      const theme = obj3.useThemeContext().theme;
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
                            let tmp5;
                            if (cResult[11] === user.id) {
                              tmp5 = cResult[12];
                            }
                            if (cResult[13] === activity) {
                              let tmp6;
                              if (cResult[14] === onAction) {
                                tmp6 = cResult[15];
                              }
                              if (cResult[16] === activity) {
                                if (cResult[17] === onAction) {
                                  let tmp7;
                                  if (cResult[18] === user.id) {
                                    tmp7 = cResult[19];
                                  }
                                  if (cResult[20] !== activity) {
                                    class T {
                                      constructor() {
                                        let items;
                                        let obj5;
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
                                              size = undefined;
                                              if (party != null) {
                                                size = party.size;
                                              }
                                              let str = "";
                                              const tmp14 = null != size && activity.party.size.length >= 2;
                                              if (tmp14) {
                                                let formatToPlainStringResult;
                                                if (0 === activity.party.size[1]) {
                                                  const intl2 = intl7.intl;
                                                  const obj2 = { count: activity.party.size[0] };
                                                  formatToPlainStringResult = intl2.formatToPlainString(
                                                    intl7.t.IM4J4e,
                                                    obj2,
                                                  );
                                                } else {
                                                  const intl = intl7.intl;
                                                  const obj3 = {
                                                    count: activity.party.size[0],
                                                    max: activity.party.size[1],
                                                  };
                                                  formatToPlainStringResult = intl.formatToPlainString(
                                                    intl7.t["u//9By"],
                                                    obj3,
                                                  );
                                                }
                                                str = formatToPlainStringResult;
                                              }
                                              const obj4 = {
                                                variant: "text-xs/medium",
                                                lineClamp: 1,
                                                children: items.join(" "),
                                              };
                                              items = [activity.state, str];
                                              return closure_23(closure_27, obj4);
                                            } else {
                                              const assets = activity.assets;
                                              let large_url;
                                              if (assets != null) {
                                                large_url = assets.large_url;
                                              }
                                              const assets2 = activity.assets;
                                              let large_text;
                                              const obj = { href: large_url, children: closure_23(closure_27, obj5) };
                                              if (assets2 != null) {
                                                large_text = assets2.large_text;
                                              }
                                              obj5 = { variant: "text-xs/medium", lineClamp: 1, children: large_text };
                                              return closure_23(closure_28, obj);
                                            }
                                          }
                                        }
                                        return null;
                                      }
                                    }
                                    cResult[20] = activity;
                                    cResult[21] = T;
                                  } else {
                                    class T {
                                      constructor() {
                                        let items;
                                        let obj5;
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
                                              size = undefined;
                                              if (party != null) {
                                                size = party.size;
                                              }
                                              let str = "";
                                              const tmp14 = null != size && activity.party.size.length >= 2;
                                              if (tmp14) {
                                                let formatToPlainStringResult;
                                                if (0 === activity.party.size[1]) {
                                                  const intl2 = intl7.intl;
                                                  const obj2 = { count: activity.party.size[0] };
                                                  formatToPlainStringResult = intl2.formatToPlainString(
                                                    intl7.t.IM4J4e,
                                                    obj2,
                                                  );
                                                } else {
                                                  const intl = intl7.intl;
                                                  const obj3 = {
                                                    count: activity.party.size[0],
                                                    max: activity.party.size[1],
                                                  };
                                                  formatToPlainStringResult = intl.formatToPlainString(
                                                    intl7.t["u//9By"],
                                                    obj3,
                                                  );
                                                }
                                                str = formatToPlainStringResult;
                                              }
                                              const obj4 = {
                                                variant: "text-xs/medium",
                                                lineClamp: 1,
                                                children: items.join(" "),
                                              };
                                              items = [activity.state, str];
                                              return closure_23(closure_27, obj4);
                                            } else {
                                              const assets = activity.assets;
                                              let large_url;
                                              if (assets != null) {
                                                large_url = assets.large_url;
                                              }
                                              const assets2 = activity.assets;
                                              let large_text;
                                              const obj = { href: large_url, children: closure_23(closure_27, obj5) };
                                              if (assets2 != null) {
                                                large_text = assets2.large_text;
                                              }
                                              obj5 = { variant: "text-xs/medium", lineClamp: 1, children: large_text };
                                              return closure_23(closure_28, obj);
                                            }
                                          }
                                        }
                                        return null;
                                      }
                                    }
                                  }
                                  if (cResult[22] === tmp5) {
                                    class T {
                                      constructor() {
                                        let items;
                                        let obj5;
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
                                              size = undefined;
                                              if (party != null) {
                                                size = party.size;
                                              }
                                              let str = "";
                                              const tmp14 = null != size && activity.party.size.length >= 2;
                                              if (tmp14) {
                                                let formatToPlainStringResult;
                                                if (0 === activity.party.size[1]) {
                                                  const intl2 = intl7.intl;
                                                  const obj2 = { count: activity.party.size[0] };
                                                  formatToPlainStringResult = intl2.formatToPlainString(
                                                    intl7.t.IM4J4e,
                                                    obj2,
                                                  );
                                                } else {
                                                  const intl = intl7.intl;
                                                  const obj3 = {
                                                    count: activity.party.size[0],
                                                    max: activity.party.size[1],
                                                  };
                                                  formatToPlainStringResult = intl.formatToPlainString(
                                                    intl7.t["u//9By"],
                                                    obj3,
                                                  );
                                                }
                                                str = formatToPlainStringResult;
                                              }
                                              const obj4 = {
                                                variant: "text-xs/medium",
                                                lineClamp: 1,
                                                children: items.join(" "),
                                              };
                                              items = [activity.state, str];
                                              return closure_23(closure_27, obj4);
                                            } else {
                                              const assets = activity.assets;
                                              let large_url;
                                              if (assets != null) {
                                                large_url = assets.large_url;
                                              }
                                              const assets2 = activity.assets;
                                              let large_text;
                                              const obj = { href: large_url, children: closure_23(closure_27, obj5) };
                                              if (assets2 != null) {
                                                large_text = assets2.large_text;
                                              }
                                              obj5 = { variant: "text-xs/medium", lineClamp: 1, children: large_text };
                                              return closure_23(closure_28, obj);
                                            }
                                          }
                                        }
                                        return null;
                                      }
                                    }
                                    const content = tmp3.content;
                                    if (cResult[25] !== tmp6) {
                                      class T {
                                        constructor() {
                                          let items;
                                          let obj5;
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
                                                size = undefined;
                                                if (party != null) {
                                                  size = party.size;
                                                }
                                                let str = "";
                                                const tmp14 = null != size && activity.party.size.length >= 2;
                                                if (tmp14) {
                                                  let formatToPlainStringResult;
                                                  if (0 === activity.party.size[1]) {
                                                    const intl2 = intl7.intl;
                                                    const obj2 = { count: activity.party.size[0] };
                                                    formatToPlainStringResult = intl2.formatToPlainString(
                                                      intl7.t.IM4J4e,
                                                      obj2,
                                                    );
                                                  } else {
                                                    const intl = intl7.intl;
                                                    const obj3 = {
                                                      count: activity.party.size[0],
                                                      max: activity.party.size[1],
                                                    };
                                                    formatToPlainStringResult = intl.formatToPlainString(
                                                      intl7.t["u//9By"],
                                                      obj3,
                                                    );
                                                  }
                                                  str = formatToPlainStringResult;
                                                }
                                                const obj4 = {
                                                  variant: "text-xs/medium",
                                                  lineClamp: 1,
                                                  children: items.join(" "),
                                                };
                                                items = [activity.state, str];
                                                return closure_23(closure_27, obj4);
                                              } else {
                                                const assets = activity.assets;
                                                let large_url;
                                                if (assets != null) {
                                                  large_url = assets.large_url;
                                                }
                                                const assets2 = activity.assets;
                                                let large_text;
                                                const obj = { href: large_url, children: closure_23(closure_27, obj5) };
                                                if (assets2 != null) {
                                                  large_text = assets2.large_text;
                                                }
                                                obj5 = {
                                                  variant: "text-xs/medium",
                                                  lineClamp: 1,
                                                  children: large_text,
                                                };
                                                return closure_23(closure_28, obj);
                                              }
                                            }
                                          }
                                          return null;
                                        }
                                      }
                                      cResult[25] = tmp6;
                                      cResult[26] = tmp12;
                                    } else {
                                      class T {
                                        constructor() {
                                          let items;
                                          let obj5;
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
                                                size = undefined;
                                                if (party != null) {
                                                  size = party.size;
                                                }
                                                let str = "";
                                                const tmp14 = null != size && activity.party.size.length >= 2;
                                                if (tmp14) {
                                                  let formatToPlainStringResult;
                                                  if (0 === activity.party.size[1]) {
                                                    const intl2 = intl7.intl;
                                                    const obj2 = { count: activity.party.size[0] };
                                                    formatToPlainStringResult = intl2.formatToPlainString(
                                                      intl7.t.IM4J4e,
                                                      obj2,
                                                    );
                                                  } else {
                                                    const intl = intl7.intl;
                                                    const obj3 = {
                                                      count: activity.party.size[0],
                                                      max: activity.party.size[1],
                                                    };
                                                    formatToPlainStringResult = intl.formatToPlainString(
                                                      intl7.t["u//9By"],
                                                      obj3,
                                                    );
                                                  }
                                                  str = formatToPlainStringResult;
                                                }
                                                const obj4 = {
                                                  variant: "text-xs/medium",
                                                  lineClamp: 1,
                                                  children: items.join(" "),
                                                };
                                                items = [activity.state, str];
                                                return closure_23(closure_27, obj4);
                                              } else {
                                                const assets = activity.assets;
                                                let large_url;
                                                if (assets != null) {
                                                  large_url = assets.large_url;
                                                }
                                                const assets2 = activity.assets;
                                                let large_text;
                                                const obj = { href: large_url, children: closure_23(closure_27, obj5) };
                                                if (assets2 != null) {
                                                  large_text = assets2.large_text;
                                                }
                                                obj5 = {
                                                  variant: "text-xs/medium",
                                                  lineClamp: 1,
                                                  children: large_text,
                                                };
                                                return closure_23(closure_28, obj);
                                              }
                                            }
                                          }
                                          return null;
                                        }
                                      }
                                    }
                                    if (cResult[27] !== tmp7) {
                                      class T {
                                        constructor() {
                                          let items;
                                          let obj5;
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
                                                size = undefined;
                                                if (party != null) {
                                                  size = party.size;
                                                }
                                                let str = "";
                                                const tmp14 = null != size && activity.party.size.length >= 2;
                                                if (tmp14) {
                                                  let formatToPlainStringResult;
                                                  if (0 === activity.party.size[1]) {
                                                    const intl2 = intl7.intl;
                                                    const obj2 = { count: activity.party.size[0] };
                                                    formatToPlainStringResult = intl2.formatToPlainString(
                                                      intl7.t.IM4J4e,
                                                      obj2,
                                                    );
                                                  } else {
                                                    const intl = intl7.intl;
                                                    const obj3 = {
                                                      count: activity.party.size[0],
                                                      max: activity.party.size[1],
                                                    };
                                                    formatToPlainStringResult = intl.formatToPlainString(
                                                      intl7.t["u//9By"],
                                                      obj3,
                                                    );
                                                  }
                                                  str = formatToPlainStringResult;
                                                }
                                                const obj4 = {
                                                  variant: "text-xs/medium",
                                                  lineClamp: 1,
                                                  children: items.join(" "),
                                                };
                                                items = [activity.state, str];
                                                return closure_23(closure_27, obj4);
                                              } else {
                                                const assets = activity.assets;
                                                let large_url;
                                                if (assets != null) {
                                                  large_url = assets.large_url;
                                                }
                                                const assets2 = activity.assets;
                                                let large_text;
                                                const obj = { href: large_url, children: closure_23(closure_27, obj5) };
                                                if (assets2 != null) {
                                                  large_text = assets2.large_text;
                                                }
                                                obj5 = {
                                                  variant: "text-xs/medium",
                                                  lineClamp: 1,
                                                  children: large_text,
                                                };
                                                return closure_23(closure_28, obj);
                                              }
                                            }
                                          }
                                          return null;
                                        }
                                      }
                                      cResult[27] = tmp7;
                                      cResult[28] = tmp14;
                                    } else {
                                      class T {
                                        constructor() {
                                          let items;
                                          let obj5;
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
                                                size = undefined;
                                                if (party != null) {
                                                  size = party.size;
                                                }
                                                let str = "";
                                                const tmp14 = null != size && activity.party.size.length >= 2;
                                                if (tmp14) {
                                                  let formatToPlainStringResult;
                                                  if (0 === activity.party.size[1]) {
                                                    const intl2 = intl7.intl;
                                                    const obj2 = { count: activity.party.size[0] };
                                                    formatToPlainStringResult = intl2.formatToPlainString(
                                                      intl7.t.IM4J4e,
                                                      obj2,
                                                    );
                                                  } else {
                                                    const intl = intl7.intl;
                                                    const obj3 = {
                                                      count: activity.party.size[0],
                                                      max: activity.party.size[1],
                                                    };
                                                    formatToPlainStringResult = intl.formatToPlainString(
                                                      intl7.t["u//9By"],
                                                      obj3,
                                                    );
                                                  }
                                                  str = formatToPlainStringResult;
                                                }
                                                const obj4 = {
                                                  variant: "text-xs/medium",
                                                  lineClamp: 1,
                                                  children: items.join(" "),
                                                };
                                                items = [activity.state, str];
                                                return closure_23(closure_27, obj4);
                                              } else {
                                                const assets = activity.assets;
                                                let large_url;
                                                if (assets != null) {
                                                  large_url = assets.large_url;
                                                }
                                                const assets2 = activity.assets;
                                                let large_text;
                                                const obj = { href: large_url, children: closure_23(closure_27, obj5) };
                                                if (assets2 != null) {
                                                  large_text = assets2.large_text;
                                                }
                                                obj5 = {
                                                  variant: "text-xs/medium",
                                                  lineClamp: 1,
                                                  children: large_text,
                                                };
                                                return closure_23(closure_28, obj);
                                              }
                                            }
                                          }
                                          return null;
                                        }
                                      }
                                    }
                                    if (cResult[29] !== T) {
                                      class T {
                                        constructor() {
                                          let items;
                                          let obj5;
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
                                                size = undefined;
                                                if (party != null) {
                                                  size = party.size;
                                                }
                                                let str = "";
                                                const tmp14 = null != size && activity.party.size.length >= 2;
                                                if (tmp14) {
                                                  let formatToPlainStringResult;
                                                  if (0 === activity.party.size[1]) {
                                                    const intl2 = intl7.intl;
                                                    const obj2 = { count: activity.party.size[0] };
                                                    formatToPlainStringResult = intl2.formatToPlainString(
                                                      intl7.t.IM4J4e,
                                                      obj2,
                                                    );
                                                  } else {
                                                    const intl = intl7.intl;
                                                    const obj3 = {
                                                      count: activity.party.size[0],
                                                      max: activity.party.size[1],
                                                    };
                                                    formatToPlainStringResult = intl.formatToPlainString(
                                                      intl7.t["u//9By"],
                                                      obj3,
                                                    );
                                                  }
                                                  str = formatToPlainStringResult;
                                                }
                                                const obj4 = {
                                                  variant: "text-xs/medium",
                                                  lineClamp: 1,
                                                  children: items.join(" "),
                                                };
                                                items = [activity.state, str];
                                                return closure_23(closure_27, obj4);
                                              } else {
                                                const assets = activity.assets;
                                                let large_url;
                                                if (assets != null) {
                                                  large_url = assets.large_url;
                                                }
                                                const assets2 = activity.assets;
                                                let large_text;
                                                const obj = { href: large_url, children: closure_23(closure_27, obj5) };
                                                if (assets2 != null) {
                                                  large_text = assets2.large_text;
                                                }
                                                obj5 = {
                                                  variant: "text-xs/medium",
                                                  lineClamp: 1,
                                                  children: large_text,
                                                };
                                                return closure_23(closure_28, obj);
                                              }
                                            }
                                          }
                                          return null;
                                        }
                                      }
                                      cResult[29] = T;
                                      cResult[30] = tmp16;
                                    } else {
                                      class T {
                                        constructor() {
                                          let items;
                                          let obj5;
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
                                                size = undefined;
                                                if (party != null) {
                                                  size = party.size;
                                                }
                                                let str = "";
                                                const tmp14 = null != size && activity.party.size.length >= 2;
                                                if (tmp14) {
                                                  let formatToPlainStringResult;
                                                  if (0 === activity.party.size[1]) {
                                                    const intl2 = intl7.intl;
                                                    const obj2 = { count: activity.party.size[0] };
                                                    formatToPlainStringResult = intl2.formatToPlainString(
                                                      intl7.t.IM4J4e,
                                                      obj2,
                                                    );
                                                  } else {
                                                    const intl = intl7.intl;
                                                    const obj3 = {
                                                      count: activity.party.size[0],
                                                      max: activity.party.size[1],
                                                    };
                                                    formatToPlainStringResult = intl.formatToPlainString(
                                                      intl7.t["u//9By"],
                                                      obj3,
                                                    );
                                                  }
                                                  str = formatToPlainStringResult;
                                                }
                                                const obj4 = {
                                                  variant: "text-xs/medium",
                                                  lineClamp: 1,
                                                  children: items.join(" "),
                                                };
                                                items = [activity.state, str];
                                                return closure_23(closure_27, obj4);
                                              } else {
                                                const assets = activity.assets;
                                                let large_url;
                                                if (assets != null) {
                                                  large_url = assets.large_url;
                                                }
                                                const assets2 = activity.assets;
                                                let large_text;
                                                const obj = { href: large_url, children: closure_23(closure_27, obj5) };
                                                if (assets2 != null) {
                                                  large_text = assets2.large_text;
                                                }
                                                obj5 = {
                                                  variant: "text-xs/medium",
                                                  lineClamp: 1,
                                                  children: large_text,
                                                };
                                                return closure_23(closure_28, obj);
                                              }
                                            }
                                          }
                                          return null;
                                        }
                                      }
                                    }
                                    if (cResult[31] === activity) {
                                      class T {
                                        constructor() {
                                          let items;
                                          let obj5;
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
                                                size = undefined;
                                                if (party != null) {
                                                  size = party.size;
                                                }
                                                let str = "";
                                                const tmp14 = null != size && activity.party.size.length >= 2;
                                                if (tmp14) {
                                                  let formatToPlainStringResult;
                                                  if (0 === activity.party.size[1]) {
                                                    const intl2 = intl7.intl;
                                                    const obj2 = { count: activity.party.size[0] };
                                                    formatToPlainStringResult = intl2.formatToPlainString(
                                                      intl7.t.IM4J4e,
                                                      obj2,
                                                    );
                                                  } else {
                                                    const intl = intl7.intl;
                                                    const obj3 = {
                                                      count: activity.party.size[0],
                                                      max: activity.party.size[1],
                                                    };
                                                    formatToPlainStringResult = intl.formatToPlainString(
                                                      intl7.t["u//9By"],
                                                      obj3,
                                                    );
                                                  }
                                                  str = formatToPlainStringResult;
                                                }
                                                const obj4 = {
                                                  variant: "text-xs/medium",
                                                  lineClamp: 1,
                                                  children: items.join(" "),
                                                };
                                                items = [activity.state, str];
                                                return closure_23(closure_27, obj4);
                                              } else {
                                                const assets = activity.assets;
                                                let large_url;
                                                if (assets != null) {
                                                  large_url = assets.large_url;
                                                }
                                                const assets2 = activity.assets;
                                                let large_text;
                                                const obj = { href: large_url, children: closure_23(closure_27, obj5) };
                                                if (assets2 != null) {
                                                  large_text = assets2.large_text;
                                                }
                                                obj5 = {
                                                  variant: "text-xs/medium",
                                                  lineClamp: 1,
                                                  children: large_text,
                                                };
                                                return closure_23(closure_28, obj);
                                              }
                                            }
                                          }
                                          return null;
                                        }
                                      }
                                    }
                                    let tmp18 = !user.bot;
                                    if (tmp18) {
                                      class T {
                                        constructor() {
                                          let items;
                                          let obj5;
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
                                                size = undefined;
                                                if (party != null) {
                                                  size = party.size;
                                                }
                                                let str = "";
                                                const tmp14 = null != size && activity.party.size.length >= 2;
                                                if (tmp14) {
                                                  let formatToPlainStringResult;
                                                  if (0 === activity.party.size[1]) {
                                                    const intl2 = intl7.intl;
                                                    const obj2 = { count: activity.party.size[0] };
                                                    formatToPlainStringResult = intl2.formatToPlainString(
                                                      intl7.t.IM4J4e,
                                                      obj2,
                                                    );
                                                  } else {
                                                    const intl = intl7.intl;
                                                    const obj3 = {
                                                      count: activity.party.size[0],
                                                      max: activity.party.size[1],
                                                    };
                                                    formatToPlainStringResult = intl.formatToPlainString(
                                                      intl7.t["u//9By"],
                                                      obj3,
                                                    );
                                                  }
                                                  str = formatToPlainStringResult;
                                                }
                                                const obj4 = {
                                                  variant: "text-xs/medium",
                                                  lineClamp: 1,
                                                  children: items.join(" "),
                                                };
                                                items = [activity.state, str];
                                                return closure_23(closure_27, obj4);
                                              } else {
                                                const assets = activity.assets;
                                                let large_url;
                                                if (assets != null) {
                                                  large_url = assets.large_url;
                                                }
                                                const assets2 = activity.assets;
                                                let large_text;
                                                const obj = { href: large_url, children: closure_23(closure_27, obj5) };
                                                if (assets2 != null) {
                                                  large_text = assets2.large_text;
                                                }
                                                obj5 = {
                                                  variant: "text-xs/medium",
                                                  lineClamp: 1,
                                                  children: large_text,
                                                };
                                                return closure_23(closure_28, obj);
                                              }
                                            }
                                          }
                                          return null;
                                        }
                                      }
                                      let obj4 = { style: tmp3.badges, activity };
                                      tmp18 = closure_23(activity(tmp[35]), obj4);
                                    }
                                    cResult[31] = activity;
                                    cResult[32] = tmp3.badges;
                                    cResult[33] = user.bot;
                                    cResult[34] = tmp18;
                                  }
                                  const tmp10 = !user.bot && tmp5();
                                  cResult[22] = tmp5;
                                  cResult[23] = user.bot;
                                  cResult[24] = tmp10;
                                }
                              }
                              const fn3 = function b() {
                                let obj3;
                                let obj4;
                                if (isListeningOnSpotifyDefault(activity)) {
                                  let trimmed;
                                  if (activity.state != null) {
                                    trimmed = str.trim();
                                  }
                                  let tmp11 = null;
                                  if (null != trimmed) {
                                    tmp11 = null;
                                    if ("" !== trimmed) {
                                      const obj2 = {
                                        variant: "text-xs/medium",
                                        lineClamp: 1,
                                        children: closure_23(UserActivitySpotify.SpotifyArtists, obj3),
                                      };
                                      obj3 = {
                                        artists: trimmed,
                                        activity,
                                        userId: user.id,
                                        onPress() {
                                          return onAction({ action: "OPEN_SPOTIFY_ARTIST" });
                                        },
                                      };
                                      tmp11 = closure_23(closure_27, obj2);
                                    }
                                  }
                                  return tmp11;
                                } else {
                                  let state = activity.details;
                                  const tmp4 = isGameActivityDefault(activity) || null == activity.state;
                                  if (!tmp4) {
                                    state = activity.state;
                                  }
                                  const obj = { href: activity.state_url, children: closure_23(closure_27, obj4) };
                                  obj4 = { variant: "text-xs/medium", lineClamp: 1, children: state };
                                  return closure_23(closure_28, obj);
                                }
                              };
                              cResult[16] = activity;
                              cResult[17] = onAction;
                              cResult[18] = user.id;
                              cResult[19] = fn3;
                              tmp7 = fn3;
                            }
                            const fn2 = function f() {
                              let obj3;
                              let obj4;
                              let tmp4Result;
                              if (isListeningOnSpotifyDefault(activity)) {
                                const obj2 = {
                                  variant: "text-md/semibold",
                                  children: closure_23(UserActivitySpotify.SpotifyTrack, obj3),
                                };
                                obj3 = {
                                  text: activity.details,
                                  activity,
                                  onPress() {
                                    return onAction({ action: "OPEN_SPOTIFY_TRACK" });
                                  },
                                };
                                tmp4Result = closure_23(closure_27, obj2);
                              } else {
                                let name;
                                const obj = { href: activity.details_url, children: closure_23(closure_27, obj4) };
                                if (isGameActivityDefault(activity)) {
                                  name = activity.name;
                                } else {
                                  name = activity.details;
                                  if (name == null) {
                                    name = activity.name;
                                  }
                                }
                                obj4 = { variant: "text-md/semibold", children: name };
                                tmp4Result = closure_23(closure_28, obj);
                              }
                              return tmp4Result;
                            };
                            cResult[13] = activity;
                            cResult[14] = onAction;
                            cResult[15] = fn2;
                            tmp6 = fn2;
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
      const fn = function n() {
        let UnknownGameIcon;
        let colors;
        let id;
        let intl;
        let isThemeDarkResult;
        let items;
        let items2;
        let items3;
        let obj10;
        let obj11;
        let obj12;
        let obj14;
        let obj3;
        let obj4;
        let obj5;
        let obj7;
        let obj8;
        let tmp18;
        let tmp30;
        let tmp45;
        let tmp48Result;
        if (null != largeImage) {
          if (isListeningOnSpotifyDefault(activity)) {
            const obj2 = {
              accessibilityRole: "button",
              accessibilityLabel: largeImage.alt,
              accessibilityHint: intl.string(intl7.t.sjjOk2),
              onPress() {
                closure_1_2({ action: "OPEN_SPOTIFY_ALBUM" });
                const obj = user(onAction[27]);
                obj.openAlbum(activity, id.id);
              },
              children: closure_23(React4, obj3),
            };
            intl = intl7.intl;
            obj3 = { style: items, children: closure_23(tmp45, obj5) };
            items = [,];
            ({ imageContainer: arr3[0], imageAspectRatio: arr3[1] } = closure_3);
            obj5 = {
              source: obj12.makeSource(largeImage.src),
              accessibilityLabel: largeImage.alt,
              style: closure_3.largeImage,
            };
            tmp45 = FastImageDefault;
            obj12 = AvatarUtils;
            tmp48Result = closure_23(metroImportAll, obj2);
          }
          return tmp48Result;
        }
        if (null != largeImage) {
          const items1 = [closure_3.imageContainer];
          let obj = { style: items1, children: items2 };
          items1[1] = isCrunchyrollActivityDefault(activity)
            ? closure_3.crunchyrollImageAspectRatio
            : closure_3.imageAspectRatio;
          const assets = activity.assets;
          let large_url;
          if (assets != null) {
            large_url = assets.large_url;
          }
          const obj6 = { href: large_url, children: closure_23(tmp18, obj7) };
          obj7 = {
            source: obj4.makeSource(largeImage.src),
            accessibilityLabel: largeImage.alt,
            style: closure_3.largeImage,
          };
          tmp18 = FastImageDefault;
          obj4 = AvatarUtils;
          items2 = [closure_23(closure_28, obj6)];
          let tmp23Result = null != smallImage;
          if (tmp23Result) {
            const assets2 = activity.assets;
            let small_url;
            const obj9 = { style: closure_3.smallImageBackground, children: closure_23(closure_28, obj10) };
            if (assets2 != null) {
              small_url = assets2.small_url;
            }
            obj10 = { href: small_url, children: closure_23(tmp30, obj11) };
            obj11 = {
              source: obj8.makeSource(smallImage.src),
              accessibilityLabel: smallImage.alt,
              style: closure_3.smallImage,
            };
            tmp30 = FastImageDefault;
            obj8 = AvatarUtils;
            tmp23Result = closure_23(React4, obj9);
          }
          items2[1] = tmp23Result;
          tmp48Result = closure_24(React4, obj);
        } else {
          const obj13 = { style: items3, children: closure_23(UnknownGameIcon, obj14) };
          items3 = [,];
          ({ imageContainer: arr4[0], imageAspectRatio: arr4[1] } = closure_3);
          obj14 = {
            size: "custom",
            style: closure_3.largeImage,
            color: isThemeDarkResult ? colors.WHITE : colors.BLACK,
          };
          UnknownGameIcon = UnknownGameIcon2.UnknownGameIcon;
          const obj15 = shared;
          isThemeDarkResult = obj15.isThemeDark(theme);
          colors = nativeDefault.colors;
          tmp48Result = closure_23(React4, obj13);
        }
      };
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
      cResult[12] = fn;
      tmp5 = fn;
    }
  : (user) => {
      let UnknownGameIcon;
      let colors;
      let intl;
      let isThemeDarkResult;
      let items;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let largeImage;
      let obj10;
      let obj11;
      let obj13;
      let obj16;
      let obj18;
      let obj20;
      let obj22;
      let obj27;
      let obj4;
      let obj5;
      let obj8;
      let smallImage;
      let tmp11Result;
      let tmp13Result;
      let tmp13Result2;
      let tmp25Result;
      let tmp2Result;
      let tmp2Result4;
      let tmp2Result5;
      let tmp30;
      let tmp31;
      let tmp31Result3;
      let tmp32;
      user = user.user;
      const activity = user.activity;
      const onAction = user.onAction;
      const application = user.application;
      const tmp = closure_26();
      let obj = user(onAction[23]);
      const imageForActivity = obj.useImageForActivity(activity, application, "user_profile_activity_native");
      ({ largeImage, smallImage } = imageForActivity);
      user(onAction[24]);
      let tmp9 = !user.bot;
      const obj2 = { style: tmp.body, children: items4 };
      if (tmp9) {
        let tmp50Result;
        if (null != largeImage) {
          const tmp11 = activity;
          if (activity(onAction[25])(activity)) {
            const obj3 = {
              accessibilityRole: "button",
              accessibilityLabel: largeImage.alt,
              accessibilityHint: intl.string(user(onAction[26]).t.sjjOk2),
              onPress() {
                onAction({ action: "OPEN_SPOTIFY_ALBUM" });
                const obj = UserActivitySpotify;
                obj.openAlbum(activity, user.id);
              },
              children: closure_23(closure_9, obj4),
            };
            intl = tmp2(tmp3[26]).intl;
            obj4 = { style: items, children: closure_23(tmp11Result, obj5) };
            items = [,];
            ({ imageContainer: arr3[0], imageAspectRatio: arr3[1] } = tmp);
            obj5 = {
              source: tmp2Result.makeSource(largeImage.src),
              accessibilityLabel: largeImage.alt,
              style: tmp.largeImage,
            };
            tmp11Result = tmp11(onAction[28]);
            tmp2Result = user(onAction[29]);
            tmp50Result = closure_23(closure_8, obj3);
          }
          tmp9 = tmp50Result;
        }
        if (null != largeImage) {
          const items1 = [tmp.imageContainer];
          const obj6 = { style: items1, children: items2 };
          items1[1] = activity(onAction[30])(activity) ? tmp.crunchyrollImageAspectRatio : tmp.imageAspectRatio;
          const assets = activity.assets;
          let large_url;
          if (assets != null) {
            large_url = assets.large_url;
          }
          const obj7 = { href: large_url, children: closure_23(tmp13Result, obj8) };
          obj8 = {
            source: tmp2Result4.makeSource(largeImage.src),
            accessibilityLabel: largeImage.alt,
            style: tmp.largeImage,
          };
          tmp13Result = activity(onAction[28]);
          tmp2Result4 = user(onAction[29]);
          items2 = [closure_23(closure_28, obj7)];
          let tmp14Result = null != smallImage;
          if (tmp14Result) {
            const assets2 = activity.assets;
            let small_url;
            const obj9 = { style: tmp.smallImageBackground, children: closure_23(closure_28, obj10) };
            if (assets2 != null) {
              small_url = assets2.small_url;
            }
            obj10 = { href: small_url, children: closure_23(tmp13Result2, obj11) };
            obj11 = {
              source: tmp2Result5.makeSource(smallImage.src),
              accessibilityLabel: smallImage.alt,
              style: tmp.smallImage,
            };
            tmp13Result2 = activity(onAction[28]);
            tmp2Result5 = user(onAction[29]);
            tmp14Result = closure_23(closure_9, obj9);
          }
          items2[1] = tmp14Result;
          tmp50Result = closure_24(closure_9, obj6);
        } else {
          const obj12 = { style: items3, children: closure_23(UnknownGameIcon, obj13) };
          items3 = [,];
          ({ imageContainer: arr7[0], imageAspectRatio: arr7[1] } = tmp);
          obj13 = { size: "custom", style: tmp.largeImage, color: isThemeDarkResult ? colors.WHITE : colors.BLACK };
          UnknownGameIcon = tmp2(tmp3[31]).UnknownGameIcon;
          const tmp2Result6 = user(onAction[32]);
          isThemeDarkResult = tmp2Result6.isThemeDark(tmp6);
          colors = activity(tmp3[17]).colors;
          tmp50Result = closure_23(closure_9, obj12);
        }
      }
      items4 = [tmp9];
      const obj14 = { style: tmp.content, children: items5 };
      if (activity(onAction[25])(activity)) {
        const obj15 = { variant: "text-md/semibold", children: closure_23(user(onAction[27]).SpotifyTrack, obj16) };
        obj16 = {
          text: activity.details,
          activity,
          onPress() {
            return onAction({ action: "OPEN_SPOTIFY_TRACK" });
          },
        };
        tmp25Result = closure_23(closure_27, obj15);
        tmp30 = closure_27;
        tmp31 = closure_23;
        tmp32 = closure_23;
      } else {
        let name;
        const obj17 = { href: activity.details_url, children: closure_23(closure_27, obj18) };
        if (activity(onAction[33])(activity)) {
          name = activity.name;
        } else {
          name = activity.details;
          if (name == null) {
            name = activity.name;
          }
        }
        obj18 = { variant: "text-md/semibold", children: name };
        tmp25Result = closure_23(closure_28, obj17);
        tmp30 = closure_27;
        tmp31 = closure_23;
        tmp32 = closure_23;
      }
      items5 = [tmp25Result, , ,];
      if (activity(onAction[25])(activity)) {
        let trimmed;
        if (activity.state != null) {
          trimmed = str.trim();
        }
        let tmp31Result = null;
        if (null != trimmed) {
          tmp31Result = null;
          if ("" !== trimmed) {
            const obj19 = {
              variant: "text-xs/medium",
              lineClamp: 1,
              children: tmp31(user(onAction[27]).SpotifyArtists, obj20),
            };
            obj20 = {
              artists: trimmed,
              activity,
              userId: user.id,
              onPress() {
                return onAction({ action: "OPEN_SPOTIFY_ARTIST" });
              },
            };
            tmp31Result = tmp31(tmp30, obj19);
          }
        }
        tmp31Result3 = tmp31Result;
      } else {
        let state = activity.details;
        const tmp34 = tmp24(tmp3[33])(activity) || null == activity.state;
        if (!tmp34) {
          state = activity.state;
        }
        const obj21 = { href: activity.state_url, children: tmp31(tmp30, obj22) };
        obj22 = { variant: "text-xs/medium", lineClamp: 1, children: state };
        tmp31Result3 = tmp31(closure_28, obj21);
      }
      items5[1] = tmp31Result3;
      let tmp31Result4 = null;
      if (!activity(onAction[25])(activity)) {
        tmp31Result4 = null;
        if (activity.type !== constants.WATCHING) {
          if (activity(onAction[33])(activity)) {
            if (!activity(onAction[34])(activity)) {
              tmp31Result4 = null;
            }
          }
          if (activity(onAction[33])(activity)) {
            const party = activity.party;
            size = undefined;
            if (party != null) {
              size = party.size;
            }
            let str3 = "";
            const tmp47 = null != size && activity.party.size.length >= 2;
            if (tmp47) {
              let formatToPlainStringResult;
              if (0 === activity.party.size[1]) {
                const intl3 = tmp2(tmp3[26]).intl;
                const obj23 = { count: activity.party.size[0] };
                formatToPlainStringResult = intl3.formatToPlainString(tmp2(tmp3[26]).t.IM4J4e, obj23);
              } else {
                const intl2 = tmp2(tmp3[26]).intl;
                const obj24 = { count: activity.party.size[0], max: activity.party.size[1] };
                formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[26]).t["u//9By"], obj24);
              }
              str3 = formatToPlainStringResult;
            }
            const obj25 = { variant: "text-xs/medium", lineClamp: 1, children: items6.join(" ") };
            items6 = [activity.state, str3];
            tmp31Result4 = tmp31(tmp30, obj25);
          } else {
            const assets3 = activity.assets;
            let large_url1;
            if (assets3 != null) {
              large_url1 = assets3.large_url;
            }
            const assets4 = activity.assets;
            let large_text;
            const obj26 = { href: large_url1, children: tmp31(tmp30, obj27) };
            if (assets4 != null) {
              large_text = assets4.large_text;
            }
            obj27 = { variant: "text-xs/medium", lineClamp: 1, children: large_text };
            tmp31Result4 = tmp31(closure_28, obj26);
          }
        }
      }
      items5[2] = tmp31Result4;
      let tmp32Result = !user.bot;
      if (tmp32Result) {
        const obj28 = { style: tmp.badges, activity };
        tmp32Result = tmp32(tmp24(tmp3[35]), obj28);
      }
      items5[3] = tmp32Result;
      items4[1] = closure_24(closure_9, obj14);
      return closure_24(closure_9, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_30 = ReactCompilerGating.isReactCompilerEnabled()
  ? (user) => {
      let activity;
      let tmp14;
      const tmp = user;
      let tmp2 = activity;
      let obj = user(activity[20]);
      const cResult = obj.c(71);
      user = user.user;
      const currentUser = user.currentUser;
      activity = user.activity;
      const voiceChannel = user.voiceChannel;
      let closure_4 = closure_26();
      const tmp4 = closure_26();
      currentUser(activity[36])(activity);
      const tmp7 = currentUser(activity[37]);
      const analyticsLocations = tmp7(currentUser(activity[38]).USER_PROFILE_LIVE_ACTIVITY_CARD).analyticsLocations;
      let id;
      if (voiceChannel != null) {
        id = voiceChannel.id;
      }
      if (cResult[0] === activity) {
        if (cResult[1] === analyticsLocations) {
          if (cResult[2] === id) {
            let tmp9;
            if (cResult[3] === user) {
              tmp9 = cResult[4];
            }
            const tmp10 = currentUser(tmp2[39])(tmp9);
            const onAction = tmp10;
            const application_id = activity.application_id;
            if (cResult[5] === application_id) {
              let tmp11;
              if (cResult[6] === user.id) {
                tmp11 = cResult[7];
              }
              const tmp12 = currentUser(tmp2[41])(tmp11);
              let closure_6 = tmp12;
              if (cResult[8] !== tmp12) {
                class L {
                  constructor() {
                    if (null != closure_6) {
                      tmpResult = tmp();
                    }
                    return;
                  }
                }
                cResult[8] = tmp12;
                cResult[9] = L;
              } else {
                class L {
                  constructor() {
                    if (null != closure_6) {
                      tmpResult = tmp();
                    }
                    return;
                  }
                }
              }
              if (cResult[10] === tmp10) {
                let tmp17;
                class L {
                  constructor() {
                    if (null != closure_6) {
                      tmpResult = tmp();
                    }
                    return;
                  }
                }
                currentUser(tmp2[42])(tmp14);
                const _Symbol = Symbol;
                if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                  class L {
                    constructor() {
                      if (null != closure_6) {
                        tmpResult = tmp();
                      }
                      return;
                    }
                  }
                  const items = [GuildStore, VoiceStateStore, ChannelStore];
                  class V {
                    constructor() {
                      tmp = activity;
                      if (closure_1(closure_2[34])(activity)) {
                        tmp3 = user;
                        session_id = undefined;
                        tmp2 = closure_17;
                        getVoiceStateForSession = closure_17.getVoiceStateForSession;
                        id = user.id;
                        if (tmp != null) {
                          session_id = tmp.session_id;
                        }
                        voiceStateForSession = getVoiceStateForSession(id, session_id);
                        channelId = undefined;
                        if (voiceStateForSession != null) {
                          channelId = voiceStateForSession.channelId;
                        }
                        tmp8 = closure_12;
                        tmp7 = closure_13;
                        getGuild = closure_13.getGuild;
                        channel = closure_12.getChannel(channelId);
                        guildId = undefined;
                        if (channel != null) {
                          guildId = channel.getGuildId();
                        }
                        return getGuild(guildId);
                      } else {
                        return null;
                      }
                    }
                  }
                  tmp17 = items;
                } else {
                  class L {
                    constructor() {
                      if (null != closure_6) {
                        tmpResult = tmp();
                      }
                      return;
                    }
                  }
                }
                if (cResult[14] === activity) {
                  let tmp22;
                  class L {
                    constructor() {
                      if (null != closure_6) {
                        tmpResult = tmp();
                      }
                      return;
                    }
                  }
                  const tmpResult = tmp(tmp2[43]);
                  const stateFromStores = tmpResult.useStateFromStores(tmp17, V);
                  const _Symbol2 = Symbol;
                  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                    class L {
                      constructor() {
                        if (null != closure_6) {
                          tmpResult = tmp();
                        }
                        return;
                      }
                    }
                    const items1 = [ApplicationStore];
                    cResult[17] = items1;
                    tmp22 = items1;
                  } else {
                    class L {
                      constructor() {
                        if (null != closure_6) {
                          tmpResult = tmp();
                        }
                        return;
                      }
                    }
                  }
                  if (cResult[18] === activity.application_id) {
                    class L {
                      constructor() {
                        if (null != closure_6) {
                          tmpResult = tmp();
                        }
                        return;
                      }
                    }
                    const tmpResult2 = tmp(tmp2[43]);
                    const stateFromStores1 = tmpResult2.useStateFromStores(tmp22, tmp24);
                    if (activity.type !== constants.CUSTOM_STATUS) {
                      class L {
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
                  class V {
                    constructor() {
                      tmp = activity;
                      if (closure_1(closure_2[34])(activity)) {
                        tmp3 = user;
                        session_id = undefined;
                        tmp2 = closure_17;
                        getVoiceStateForSession = closure_17.getVoiceStateForSession;
                        id = user.id;
                        if (tmp != null) {
                          session_id = tmp.session_id;
                        }
                        voiceStateForSession = getVoiceStateForSession(id, session_id);
                        channelId = undefined;
                        if (voiceStateForSession != null) {
                          channelId = voiceStateForSession.channelId;
                        }
                        tmp8 = closure_12;
                        tmp7 = closure_13;
                        getGuild = closure_13.getGuild;
                        channel = closure_12.getChannel(channelId);
                        guildId = undefined;
                        if (channel != null) {
                          guildId = channel.getGuildId();
                        }
                        return getGuild(guildId);
                      } else {
                        return null;
                      }
                    }
                  }
                  cResult[18] = activity.application_id;
                  cResult[19] = activity.name;
                  cResult[20] = tmp24;
                }
                class V {
                  constructor() {
                    tmp = activity;
                    if (closure_1(closure_2[34])(activity)) {
                      tmp3 = user;
                      session_id = undefined;
                      tmp2 = closure_17;
                      getVoiceStateForSession = closure_17.getVoiceStateForSession;
                      id = user.id;
                      if (tmp != null) {
                        session_id = tmp.session_id;
                      }
                      voiceStateForSession = getVoiceStateForSession(id, session_id);
                      channelId = undefined;
                      if (voiceStateForSession != null) {
                        channelId = voiceStateForSession.channelId;
                      }
                      tmp8 = closure_12;
                      tmp7 = closure_13;
                      getGuild = closure_13.getGuild;
                      channel = closure_12.getChannel(channelId);
                      guildId = undefined;
                      if (channel != null) {
                        guildId = channel.getGuildId();
                      }
                      return getGuild(guildId);
                    } else {
                      return null;
                    }
                  }
                }
                cResult[14] = activity;
                cResult[15] = user.id;
                cResult[16] = V;
              }
              let obj2 = { userId: user.id, onAction: tmp10 };
              cResult[10] = tmp10;
              cResult[11] = user.id;
              cResult[12] = obj2;
              tmp14 = obj2;
            }
            let obj3 = {
              location: "User Profile Activity Card",
              applicationId: application_id,
              source: null,
              trackEntryPointImpression: true,
              sourceUserId: user.id,
            };
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
    }
  : function (user) {
      let PressableOpacity;
      let activity;
      let buttons;
      let currentUser;
      let end;
      let intl;
      let items3;
      let items4;
      let makeSource;
      let obj6;
      let obj7;
      let obj8;
      let onAction;
      let start;
      let tmp2Result2;
      let tmp33Result;
      let whitePNG;
      user = user.user;
      ({ currentUser, activity } = user);
      const voiceChannel = user.voiceChannel;
      dependencyMap = undefined;
      let closure_3;
      const style = user.style;
      const tmp = closure_26();
      const tmp4 = activity(12856)(activity);
      const tmp5 = activity(6664);
      const analyticsLocations = tmp5(activity(6688).USER_PROFILE_LIVE_ACTIVITY_CARD).analyticsLocations;
      let id;
      const tmp6 = activity(12862);
      if (voiceChannel != null) {
        id = voiceChannel.id;
      }
      const tmp6Result = tmp6({ display: "live", voiceChannelId: id, user, activity, analyticsLocations });
      dependencyMap = tmp6Result;
      const application_id = activity.application_id;
      const tmp2Result = activity(8353);
      let obj = {
        location: "User Profile Activity Card",
        applicationId: application_id,
        source: user(8352).GameProfileSources.UserProfile,
        trackEntryPointImpression: true,
        sourceUserId: user.id,
      };
      const tmp2ResultResult = tmp2Result(obj);
      closure_3 = tmp2ResultResult;
      const items = [tmp2ResultResult];
      const callback = react.useCallback(() => {
        if (null != closure_3) {
          tmp();
        }
      }, items);
      const obj2 = { userId: user.id, onAction: tmp6Result };
      activity(12863)(obj2);
      const items1 = [GuildStore, VoiceStateStore, ChannelStore];
      const obj3 = user(504);
      const stateFromStores = obj3.useStateFromStores(items1, () => {
        if (isEmbeddedActivityDefault(activity)) {
          let session_id;
          const getVoiceStateForSession = VoiceStateStore.getVoiceStateForSession;
          const id = user.id;
          if (activity != null) {
            session_id = activity.session_id;
          }
          const voiceStateForSession = getVoiceStateForSession(id, session_id);
          let channelId;
          if (voiceStateForSession != null) {
            channelId = voiceStateForSession.channelId;
          }
          const getGuild = GuildStore.getGuild;
          const channel = ChannelStore.getChannel(channelId);
          let guildId;
          if (channel != null) {
            guildId = channel.getGuildId();
          }
          return getGuild(guildId);
        } else {
          return null;
        }
      });
      const items2 = [ApplicationStore];
      const obj4 = user(504);
      const stateFromStores1 = obj4.useStateFromStores(items2, () => {
        let application;
        if (null != activity.application_id) {
          application = ApplicationStore.getApplication(activity.application_id);
        } else {
          application = null;
          if (null != activity.name) {
            application = ApplicationStore.getApplicationByName(activity.name);
          }
        }
        return application;
      });
      let tmp33Result8 = null;
      if (activity.type !== constants.CUSTOM_STATUS) {
        tmp33Result8 = null;
        if (activity.type !== tmp16.HANG_STATUS) {
          const obj5 = { value: analyticsLocations, children: closure_23(PressableOpacity, obj6) };
          const AnalyticsLocationProvider = tmp10(6664).AnalyticsLocationProvider;
          obj6 = {
            onPress: callback,
            disabled: null == tmp2ResultResult,
            accessibilityRole: "button",
            accessibilityLabel: intl.formatToPlainString(user(1126).t["9sZWVp"], obj7),
            children: closure_24(tmp2Result2, obj8),
          };
          PressableOpacity = tmp10(5916).PressableOpacity;
          intl = tmp10(1126).intl;
          obj8 = {
            style: items3,
            title: tmp4.text,
            titleStyle: tmp.cardTitle,
            titleIcon: tmp33Result,
            children: items4,
          };
          items3 = [tmp.card, style];
          tmp33Result = null != tmp4.platformIcon;
          obj7 = { gameName: activity.name };
          tmp2Result2 = activity(6713);
          if (tmp33Result) {
            const obj9 = {
              style: tmp.cardTitleIcon,
              source: makeSource(whitePNG),
              size: user(1188).IconSizes.SMALL_14,
              disableColor: true,
            };
            const Icon = tmp10(1188).Icon;
            const platformIcon = tmp4.platformIcon;
            whitePNG = undefined;
            makeSource = user(1402).makeSource;
            user(1402);
            if (platformIcon != null) {
              whitePNG = platformIcon.whitePNG;
            }
            tmp33Result = closure_23(Icon, obj9);
          }
          const obj10 = { user, activity, application: stateFromStores1, onAction: tmp6Result };
          items4 = [closure_23(closure_29, obj10), , ,];
          let tmp33Result5 = null;
          if (activity(12849)(activity)) {
            ({ start, end } = activity.timestamps);
            const obj11 = { start, end };
            tmp33Result5 = closure_23(activity(12864), obj11);
          }
          items4[1] = tmp33Result5;
          let tmp33Result6 = null;
          if (null != voiceChannel) {
            tmp33Result6 = null;
            if (null != stateFromStores) {
              const obj12 = {
                guild: stateFromStores,
                channel: voiceChannel,
                onAction: tmp6Result,
                style: tmp.voiceChannelDivider,
              };
              tmp33Result6 = closure_23(activity(12866), obj12);
            }
          }
          items4[2] = tmp33Result6;
          let tmp33Result7 = null;
          if (user.id !== currentUser.id) {
            if (activity(10638)(activity)) {
              const obj13 = { activity, onAction: tmp6Result };
              tmp33Result7 = closure_23(tmp10(12874).PlayOnSpotifyButton, obj13);
            } else if (activity(7242)(activity)) {
              const obj14 = { user, currentUser, activity, application: stateFromStores1, onAction: tmp6Result };
              tmp33Result7 = closure_23(tmp10(12874).JoinActivityButton, obj14);
            } else {
              if (activity(10632)(activity)) {
                let supported_platforms = activity.supported_platforms;
                const tmp10Result2 = user(12877);
                const currentActivityGamePlatform = tmp10Result2.getCurrentActivityGamePlatform();
                const _Set = Set;
                if (supported_platforms == null) {
                  supported_platforms = [];
                }
                const self = this;
                const self2 = this;
                const _Set1 = new _Set(supported_platforms);
                if (_Set1.has(currentActivityGamePlatform)) {
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
                            onAction: tmp6Result,
                          };
                          tmp33Result7 = closure_23(tmp10(12874).JoinGameActivityButton, obj15);
                        }
                      }
                    }
                  }
                }
              }
              if (activity(7942)(activity)) {
                const obj16 = { activity, onAction: tmp6Result };
                tmp33Result7 = closure_23(tmp10(12874).WatchActivityButton, obj16);
              } else {
                if (null != activity.buttons) {
                  if (activity.buttons.length > 0) {
                    const obj17 = {
                      style: tmp.customButtons,
                      children: buttons.map((item, index) => {
                        const obj = { index, user, activity, onAction };
                        return closure_23(UserProfileActivityButtons.CustomActivityButton, obj, index);
                      }),
                    };
                    buttons = activity.buttons;
                    tmp33Result7 = closure_23(closure_9, obj17);
                  }
                }
                tmp33Result7 = null;
                if (!activity(4937)(activity)) {
                  if (activity(12844)(activity)) {
                    const obj18 = { type: constants3.XBOX, onAction: tmp6Result };
                    tmp33Result7 = closure_23(tmp10(12874).ConnectPlatformButton, obj18);
                  } else {
                    tmp33Result7 = null;
                    if (activity(12845)(activity)) {
                      const obj19 = { type: constants3.PLAYSTATION, onAction: tmp6Result };
                      tmp33Result7 = closure_23(tmp10(12874).ConnectPlatformButton, obj19);
                    }
                  }
                }
              }
            }
          }
          items4[3] = tmp33Result7;
          tmp33Result8 = closure_23(AnalyticsLocationProvider, obj5);
        }
      }
      return tmp33Result8;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_31 = ReactCompilerGating.isReactCompilerEnabled()
  ? (user) => {
      let activity;
      let effectiveVolume;
      let first;
      let handleVolumeChange;
      let tmp13;
      let tmp16;
      let tmp20;
      let tmp23;
      let tmp29;
      let tmp7;
      let tmp9;
      let obj = user(activity[20]);
      const cResult = obj.c(73);
      user = user.user;
      const stream = user.stream;
      activity = user.activity;
      closure_26();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== stream.channelId) {
        const fn = function o() {
          return ChannelStore.getChannel(stream.channelId);
        };
        cResult[1] = stream.channelId;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = user(activity[43]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [VoiceStateStore];
        cResult[3] = items1;
        tmp9 = items1;
      } else {
        tmp9 = cResult[3];
      }
      let id;
      const tmp11 = cResult[4];
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      if (tmp11 !== id) {
        let id1;
        if (stateFromStores != null) {
          id1 = stateFromStores.id;
        }
        class T {
          constructor() {
            let id;
            const isInChannel = VoiceStateStore.isInChannel;
            if (stateFromStores != null) {
              id = stateFromStores.id;
            }
            return isInChannel(id);
          }
        }
        cResult[4] = id1;
        cResult[5] = T;
        tmp13 = T;
      } else {
        tmp13 = cResult[5];
      }
      const tmpResult7 = user(activity[43]);
      const stateFromStores1 = tmpResult7.useStateFromStores(tmp9, tmp13);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [];
        class T {
          constructor() {
            let id;
            const isInChannel = VoiceStateStore.isInChannel;
            if (stateFromStores != null) {
              id = stateFromStores.id;
            }
            return isInChannel(id);
          }
        }
        cResult[6] = items2;
        tmp16 = items2;
      } else {
        tmp16 = cResult[6];
      }
      if (cResult[7] !== stream.guildId) {
        class E {
          constructor() {
            return GuildStore.getGuild(stream.guildId);
          }
        }
        class T {
          constructor() {
            let id;
            const isInChannel = VoiceStateStore.isInChannel;
            if (stateFromStores != null) {
              id = stateFromStores.id;
            }
            return isInChannel(id);
          }
        }
        cResult[8] = E;
      } else {
        class E {
          constructor() {
            return GuildStore.getGuild(stream.guildId);
          }
        }
      }
      const tmpResult8 = user(activity[43]);
      const stateFromStores2 = tmpResult8.useStateFromStores(tmp16, E);
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            return GuildStore.getGuild(stream.guildId);
          }
        }
        const items3 = [];
        class T {
          constructor() {
            let id;
            const isInChannel = VoiceStateStore.isInChannel;
            if (stateFromStores != null) {
              id = stateFromStores.id;
            }
            return isInChannel(id);
          }
        }
        cResult[9] = items3;
        tmp20 = items3;
      } else {
        class E {
          constructor() {
            return GuildStore.getGuild(stream.guildId);
          }
        }
      }
      if (cResult[10] !== user.id) {
        class U {
          constructor() {
            return closure_15.findActivity(user.id, (arg0) => {
              const tmp3 = stream(activity[33])(arg0) && !stream(activity[56])(arg0);
              return tmp3;
            });
          }
        }
        class T {
          constructor() {
            let id;
            const isInChannel = VoiceStateStore.isInChannel;
            if (stateFromStores != null) {
              id = stateFromStores.id;
            }
            return isInChannel(id);
          }
        }
        cResult[11] = U;
      } else {
        class U {
          constructor() {
            return closure_15.findActivity(user.id, (arg0) => {
              const tmp3 = stream(activity[33])(arg0) && !stream(activity[56])(arg0);
              return tmp3;
            });
          }
        }
      }
      const tmpResult9 = user(activity[43]);
      const stateFromStores3 = tmpResult9.useStateFromStores(tmp20, U);
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            return closure_15.findActivity(user.id, (arg0) => {
              const tmp3 = stream(activity[33])(arg0) && !stream(activity[56])(arg0);
              return tmp3;
            });
          }
        }
        const items4 = [];
        class T {
          constructor() {
            let id;
            const isInChannel = VoiceStateStore.isInChannel;
            if (stateFromStores != null) {
              id = stateFromStores.id;
            }
            return isInChannel(id);
          }
        }
        cResult[12] = items4;
        tmp23 = items4;
      } else {
        class U {
          constructor() {
            return closure_15.findActivity(user.id, (arg0) => {
              const tmp3 = stream(activity[33])(arg0) && !stream(activity[56])(arg0);
              return tmp3;
            });
          }
        }
      }
      if (cResult[13] !== user.id) {
        class G {
          constructor() {
            return ApplicationStreamingStore.getActiveStreamForUser(user.id, undefined);
          }
        }
        class T {
          constructor() {
            let id;
            const isInChannel = VoiceStateStore.isInChannel;
            if (stateFromStores != null) {
              id = stateFromStores.id;
            }
            return isInChannel(id);
          }
        }
        cResult[14] = G;
      } else {
        class G {
          constructor() {
            return ApplicationStreamingStore.getActiveStreamForUser(user.id, undefined);
          }
        }
      }
      const tmpResult10 = user(activity[43]);
      const stateFromStores4 = tmpResult10.useStateFromStores(tmp23, G);
      const tmp27 = stream(activity[57]);
      if (stateFromStores4 != null) {
        class G {
          constructor() {
            return ApplicationStreamingStore.getActiveStreamForUser(user.id, undefined);
          }
        }
      }
      ({ effectiveVolume, handleVolumeChange } = tmp27(undefined, user(activity[58]).MediaEngineContextTypes.STREAM));
      tmp27(undefined, user(activity[58]).MediaEngineContextTypes.STREAM);
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class G {
          constructor() {
            return ApplicationStreamingStore.getActiveStreamForUser(user.id, undefined);
          }
        }
        const items5 = [];
        class T {
          constructor() {
            let id;
            const isInChannel = VoiceStateStore.isInChannel;
            if (stateFromStores != null) {
              id = stateFromStores.id;
            }
            return isInChannel(id);
          }
        }
        cResult[15] = items5;
        tmp29 = items5;
      } else {
        class G {
          constructor() {
            return ApplicationStreamingStore.getActiveStreamForUser(user.id, undefined);
          }
        }
      }
      if (cResult[16] !== activity) {
        class G {
          constructor() {
            return ApplicationStreamingStore.getActiveStreamForUser(user.id, undefined);
          }
        }
        class T {
          constructor() {
            let id;
            const isInChannel = VoiceStateStore.isInChannel;
            if (stateFromStores != null) {
              id = stateFromStores.id;
            }
            return isInChannel(id);
          }
        }
        cResult[17] = tmp31;
      } else {
        class G {
          constructor() {
            return ApplicationStreamingStore.getActiveStreamForUser(user.id, undefined);
          }
        }
      }
      const tmpResult11 = user(activity[43]);
      const stateFromStores5 = tmpResult11.useStateFromStores(tmp29, tmp31);
      const tmpResult12 = user(activity[59]);
      const first1 = _slicedToArray(tmpResult12.useCanWatchStream(stateFromStores), 1)[0];
      const tmp26Result = stream(activity[37]);
      const analyticsLocations = tmp26Result(tmp26(tmp2[38]).USER_PROFILE_LIVE_ACTIVITY_CARD).analyticsLocations;
      if (stateFromStores != null) {
        class G {
          constructor() {
            return ApplicationStreamingStore.getActiveStreamForUser(user.id, undefined);
          }
        }
      }
      if (cResult[18] === analyticsLocations) {
        class G {
          constructor() {
            return ApplicationStreamingStore.getActiveStreamForUser(user.id, undefined);
          }
        }
      }
      let obj2 = { display: "live", voiceChannelId: tmp35, user, stream, analyticsLocations };
      cResult[18] = analyticsLocations;
      cResult[19] = stream;
      cResult[20] = undefined;
      cResult[21] = user;
      cResult[22] = obj2;
    }
  : (user) => {
      let closure_4;
      let effectiveVolume;
      let formatToPlainStringResult;
      let handleVolumeChange;
      let intl3;
      let items6;
      let items7;
      let obj11;
      let obj8;
      let tmp9Result7;
      user = user.user;
      const stream = user.stream;
      const activity = user.activity;
      _slicedToArray = undefined;
      const style = user.style;
      const tmp = closure_26();
      let tmp3 = activity;
      let obj = user(activity[43]);
      const items = [ChannelStore];
      const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(stream.channelId));
      let obj2 = user(activity[43]);
      const items1 = [VoiceStateStore];
      const stateFromStores1 = obj2.useStateFromStores(items1, () => {
        let id;
        const isInChannel = VoiceStateStore.isInChannel;
        if (stateFromStores != null) {
          id = stateFromStores.id;
        }
        return isInChannel(id);
      });
      let obj3 = user(activity[43]);
      const items2 = [GuildStore];
      const stateFromStores2 = obj3.useStateFromStores(items2, () => GuildStore.getGuild(stream.guildId));
      const items3 = [PresenceStore];
      const obj4 = user(activity[43]);
      const stateFromStores3 = obj4.useStateFromStores(items3, () =>
        PresenceStore.findActivity(user.id, (arg0) => {
          const tmp3 = stream(activity[33])(arg0) && !stream(activity[56])(arg0);
          return tmp3;
        }),
      );
      const items4 = [ApplicationStreamingStore];
      const obj5 = user(activity[43]);
      const stateFromStores4 = obj5.useStateFromStores(items4, () =>
        ApplicationStreamingStore.getActiveStreamForUser(user.id, undefined),
      );
      let ownerId;
      const tmp10 = stream(activity[57]);
      if (stateFromStores4 != null) {
        ownerId = stateFromStores4.ownerId;
      }
      ({ effectiveVolume, handleVolumeChange } = tmp10(ownerId, user(tmp3[58]).MediaEngineContextTypes.STREAM));
      tmp10(ownerId, user(tmp3[58]).MediaEngineContextTypes.STREAM);
      const items5 = [ApplicationStore];
      const tmp2Result = user(tmp3[43]);
      const stateFromStores5 = tmp2Result.useStateFromStores(items5, () => {
        let application;
        let application_id;
        if (activity != null) {
          application_id = activity.application_id;
        }
        if (null != application_id) {
          application = ApplicationStore.getApplication(activity.application_id);
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
      const tmp2Result2 = user(tmp3[59]);
      const first = _slicedToArray(tmp2Result2.useCanWatchStream(stateFromStores), 1)[0];
      const tmp9Result = stream(tmp3[37]);
      const analyticsLocations = tmp9Result(tmp9(tmp3[38]).USER_PROFILE_LIVE_ACTIVITY_CARD).analyticsLocations;
      let id;
      const tmp9Result5 = stream(tmp3[39]);
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      const tmp9Result1Result = tmp9Result5({ display: "live", voiceChannelId: id, user, stream, analyticsLocations });
      _slicedToArray = tmp9Result1Result;
      const obj6 = { userId: user.id, onAction: tmp9Result1Result };
      stream(tmp3[42])(obj6);
      const tmp9Result6 = stream(tmp3[63]);
      const nonContextualStreamOutputPresent = tmp9Result6.useConfig({
        location: "UserProfileVoiceSettings",
      }).nonContextualStreamOutputPresent;
      const obj7 = { value: analyticsLocations, children: closure_24(tmp9Result7, obj8) };
      const AnalyticsLocationProvider = tmp2(tmp3[37]).AnalyticsLocationProvider;
      obj8 = {
        style: items6,
        title: formatToPlainStringResult,
        titleStyle: tmp.cardTitle,
        titleIcon: closure_23(user(tmp3[55]).LiveTag, {}),
        children: items7,
      };
      items6 = [tmp.card, style];
      tmp9Result7 = stream(tmp3[54]);
      if (null != stateFromStores3) {
        const intl2 = tmp2(tmp3[26]).intl;
        const obj9 = { name: stateFromStores3.name };
        formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[26]).t["4CQq9Q"], obj9);
      } else {
        const intl = tmp2(tmp3[26]).intl;
        formatToPlainStringResult = intl.string(tmp2(tmp3[26]).t["Jpkr/q"]);
      }
      const obj10 = { style: tmp.streamPreview, children: closure_23(user(tmp3[64]).VoicePanelStreamPreview, obj11) };
      obj11 = {
        mode: "a",
        stream,
        disabled: !first,
        onPress() {
          closure_4({ action: "PRESS_IMAGE" });
          const obj = SelectedChannelActionCreatorsDefault;
          const voiceChannel = obj.selectVoiceChannel(stream.channelId);
          const obj2 = StreamActionCreators;
          const result = obj2.watchStreamAndTransitionToStream(stream);
          const obj3 = ActionSheetActionCreatorsDefault;
          obj3.hideAllActionSheets();
        },
      };
      items7 = [closure_23(closure_9, obj10), , , ,];
      let tmp20Result = null != stateFromStores4 && !nonContextualStreamOutputPresent;
      if (tmp20Result) {
        const obj12 = {
          value: effectiveVolume,
          onValueChange: handleVolumeChange,
          accessibilityLabel: intl3.string(user(tmp3[26]).t.pEAl4b),
        };
        const tmp9Result8 = stream(tmp3[65]);
        intl3 = tmp2(tmp3[26]).intl;
        tmp20Result = closure_23(tmp9Result8, obj12, "set-stream-volume");
      }
      items7[1] = tmp20Result;
      let tmp20Result4 = null != activity && tmp9(tmp3[34])(activity);
      if (tmp20Result4) {
        const obj13 = { user, activity, application: stateFromStores5, onAction: tmp9Result1Result };
        tmp20Result4 = closure_23(closure_29, obj13);
      }
      items7[2] = tmp20Result4;
      let tmp20Result5 = null != stateFromStores2 && null != stateFromStores;
      if (tmp20Result5) {
        const obj14 = {
          guild: stateFromStores2,
          channel: stateFromStores,
          onAction: tmp9Result1Result,
          style: tmp.voiceChannelDivider,
        };
        tmp20Result5 = closure_23(tmp9(tmp3[46]), obj14);
      }
      items7[3] = tmp20Result5;
      let tmp20Result6 = null != stateFromStores;
      if (tmp20Result6) {
        const obj15 = { channel: stateFromStores, isInChannel: stateFromStores1, onAction: tmp9Result1Result };
        tmp20Result6 = closure_23(tmp2(tmp3[47]).VoiceChannelButtons, obj15);
      }
      items7[4] = tmp20Result6;
      return closure_23(AnalyticsLocationProvider, obj7);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_32 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let analyticsLocations;
      let channel;
      let closure_1;
      let closure_2;
      let first;
      let isInChannel;
      let newestAnalyticsLocation;
      let style;
      let tmp10;
      let tmp12;
      let tmp2 = dependencyMap;
      let obj = channel(576);
      const cResult = obj.c(56);
      ({ user, channel } = arg0);
      ({ isInChannel, style } = arg0);
      importDefault = closure_26();
      closure_26();
      usePersonalizedVoiceChannelUsersDefault(channel);
      dependencyMap = useChannelNameDefault(channel);
      useChannelNameDefault(channel);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel.guild_id) {
        const fn = function l() {
          return GuildStore.getGuild(channel.guild_id);
        };
        cResult[1] = channel.guild_id;
        cResult[2] = fn;
        tmp10 = fn;
      } else {
        tmp10 = cResult[2];
      }
      const tmpResult = channel(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp10);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        let items1 = [PermissionStore];
        cResult[3] = items1;
        tmp12 = items1;
      } else {
        tmp12 = cResult[3];
      }
      if (cResult[4] !== channel) {
        class A {
          constructor() {
            const isPrivateResult = channel.isPrivate() || PermissionStore.can(constants.CONNECT, channel);
            return isPrivateResult;
          }
        }
        cResult[4] = channel;
        cResult[5] = A;
      } else {
        class A {
          constructor() {
            const isPrivateResult = channel.isPrivate() || PermissionStore.can(constants.CONNECT, channel);
            return isPrivateResult;
          }
        }
      }
      const tmpResult2 = channel(504);
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp12, A);
      const tmp5Result = useAnalyticsLocationsDefault;
      ({ analyticsLocations, newestAnalyticsLocation } = tmp5Result(
        AnalyticsLocationDefault.USER_PROFILE_VOICE_ACTIVITY_CARD,
      ));
      tmp5Result(AnalyticsLocationDefault.USER_PROFILE_VOICE_ACTIVITY_CARD);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor() {
            const isPrivateResult = channel.isPrivate() || PermissionStore.can(constants.CONNECT, channel);
            return isPrivateResult;
          }
        }
        cResult[6] = tmp19;
      } else {
        class A {
          constructor() {
            const isPrivateResult = channel.isPrivate() || PermissionStore.can(constants.CONNECT, channel);
            return isPrivateResult;
          }
        }
      }
      if (cResult[7] === analyticsLocations) {
        class A {
          constructor() {
            const isPrivateResult = channel.isPrivate() || PermissionStore.can(constants.CONNECT, channel);
            return isPrivateResult;
          }
        }
      }
      let obj2 = { display: "voice", activity: tmp19, voiceChannelId: channel.id, user, analyticsLocations };
      cResult[7] = analyticsLocations;
      cResult[8] = channel.id;
      cResult[9] = user;
      cResult[10] = obj2;
    }
  : (arg0) => {
      let Text2;
      let Text3;
      let analyticsLocations;
      let c2;
      let channel;
      let id;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let isInChannel;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let obj10;
      let obj11;
      let obj13;
      let obj16;
      let obj18;
      let obj19;
      let obj20;
      let style;
      ({ user, channel } = arg0);
      let stateFromStores;
      dependencyMap = undefined;
      ({ isInChannel, style } = arg0);
      const tmp = closure_26();
      const tmp4 = stateFromStores(12867)(channel);
      const tmp5 = stateFromStores(5049)(channel);
      let obj = channel(504);
      const items = [GuildStore];
      stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
      let obj2 = channel(504);
      const items1 = [PermissionStore];
      const stateFromStores1 = obj2.useStateFromStores(items1, () => {
        const isPrivateResult = channel.isPrivate() || PermissionStore.can(constants.CONNECT, channel);
        return isPrivateResult;
      });
      const tmp9 = stateFromStores(6664);
      ({ newestAnalyticsLocation: c2, analyticsLocations } = tmp9(
        stateFromStores(6688).USER_PROFILE_VOICE_ACTIVITY_CARD,
      ));
      let obj3 = {
        display: "voice",
        activity: { type: "VOICE" },
        voiceChannelId: channel.id,
        user,
        analyticsLocations,
      };
      tmp9(stateFromStores(6688).USER_PROFILE_VOICE_ACTIVITY_CARD);
      const tmp11 = stateFromStores(12862)(obj3);
      let closure_3 = tmp11;
      const obj4 = { userId: user.id, onAction: tmp11 };
      stateFromStores(12863)(obj4);
      const obj5 = { style: items2, title: null, titleStyle: null, children: null };
      items2 = [tmp.card, style];
      const tmp14 = stateFromStores(6713);
      if (!channel.isDM()) {
        let stringResult;
        let tmp13Result;
        if (!channel.isGroupDM()) {
          const isGuildStageVoiceResult = channel.isGuildStageVoice();
          const intl = channel(1126).intl;
          const string = intl.string;
          const t = channel(1126).t;
          if (isGuildStageVoiceResult) {
            stringResult = string(t.QygGCN);
          } else {
            stringResult = string(t.msxteM);
          }
        }
        obj5.title = stringResult;
        obj5.titleStyle = tmp.cardTitle;
        const obj7 = { users: tmp4, guildId: id };
        id = undefined;
        const obj6 = { style: tmp.body, children: items3 };
        const tmp2Result = stateFromStores(12881);
        if (stateFromStores != null) {
          id = stateFromStores.id;
        }
        items3 = [closure_23(tmp2Result, obj7)];
        const obj8 = { style: tmp.voiceCallContent, children: items6 };
        if (stateFromStores1) {
          const obj9 = {
            accessibilityRole: "button",
            accessibilityLabel: stateFromStores(9295)(obj10),
            accessibilityHint: intl3.string(channel(1126).t["9C444m"]),
            onPress() {
              closure_3({ action: "OPEN_VOICE_CHANNEL" });
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideAllActionSheets();
              const obj2 = ModalActionCreatorsDefault;
              obj2.popAll();
              const obj3 = PrivateChannelCallUtils;
              obj3.openGuildVoiceModal(channel, c2);
            },
            children: closure_24(Text2, obj11),
          };
          const PressableOpacity = channel(5916).PressableOpacity;
          obj10 = { channel };
          intl3 = channel(1126).intl;
          obj11 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: items4 };
          const obj12 = { style: tmp.voiceCallNameIconWrapper, children: closure_23(stateFromStores(10641), obj13) };
          Text2 = channel(4892).Text;
          obj13 = { channel, size: "sm", color: "mobile-text-heading-primary" };
          items4 = [closure_23(closure_9, obj12), tmp5];
          tmp13Result = closure_23(PressableOpacity, obj9);
        } else {
          const obj14 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: items5 };
          const obj15 = { style: tmp.voiceCallNameIconWrapper, children: closure_23(stateFromStores(10641), obj16) };
          const Text = channel(4892).Text;
          obj16 = { channel, size: "sm", color: "mobile-text-heading-primary" };
          items5 = [closure_23(closure_9, obj15), tmp5];
          tmp13Result = closure_24(Text, obj14);
        }
        items6 = [tmp13Result];
        let tmp18Result2 = null;
        if (null != stateFromStores) {
          const obj17 = {
            accessibilityRole: "button",
            accessibilityHint: intl4.string(channel(1126).t.KLOhbO),
            accessibilityLabel: intl5.formatToPlainString(channel(1126).t["hq/Qze"], obj18),
            onPress() {
              closure_3({ action: "OPEN_VOICE_GUILD" });
              const obj = transitionToGuild;
              obj.transitionToGuild(stateFromStores.id);
              closeVoicePanelsDefault();
              const obj2 = ActionSheetActionCreatorsDefault;
              obj2.hideAllActionSheets();
            },
            children: closure_23(Text3, obj19),
          };
          const PressableOpacity2 = channel(5916).PressableOpacity;
          intl4 = channel(1126).intl;
          intl5 = channel(1126).intl;
          obj18 = { guildName: stateFromStores.name };
          obj19 = { variant: "text-xs/medium", children: intl6.format(channel(1126).t["hq/Qze"], obj20) };
          Text3 = channel(4892).Text;
          intl6 = channel(1126).intl;
          obj20 = { guildName: stateFromStores.name };
          tmp18Result2 = closure_23(PressableOpacity2, obj17);
        }
        items6[1] = tmp18Result2;
        items3[1] = closure_24(closure_9, obj8);
        const items7 = [closure_24(closure_9, obj6)];
        const obj21 = { channel, isInChannel, onAction: tmp11 };
        items7[1] = closure_23(channel(12874).VoiceChannelButtons, obj21);
        obj5.children = items7;
        return closure_24(tmp14, obj5);
      }
      const intl2 = channel(1126).intl;
      stringResult = intl2.string(channel(1126).t["9FaEzi"]);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (user) => {
      let guildId;
      let live;
      let stream;
      let style;
      const tmp = user;
      let obj = user(style[20]);
      const cResult = obj.c(70);
      user = user.user;
      const currentUser = user.currentUser;
      ({ guildId, style } = user);
      let closure_3 = closure_26();
      let tmp5 = currentUser;
      closure_26();
      ({ live, stream } = currentUser(style[75])(user.id));
      const tmp6 = currentUser(style[75])(user.id);
      if (cResult[0] === guildId) {
        let tmp7;
        let tmp10;
        let tmp15;
        if (cResult[1] === user.id) {
          tmp7 = cResult[2];
        }
        let tmp8 = tmp5(style[76])(tmp7);
        const voiceChannel = tmp8.voiceChannel;
        const voiceActivity = tmp8.voiceActivity;
        let tmp9 = globalThis;
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          let items = [VoiceStateStore];
          cResult[3] = items;
          tmp10 = items;
        } else {
          tmp10 = cResult[3];
        }
        if (cResult[4] !== voiceChannel) {
          class I {
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
          cResult[5] = I;
        } else {
          class I {
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
        const tmpResult = tmp(style[43]);
        const stateFromStores = tmpResult.useStateFromStores(tmp10, I);
        let closure_8 = tmp14;
        const _Symbol2 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
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
          tmp15 = items1;
        } else {
          class I {
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
        if ((cResult[7] === user.id) === currentUser.id) {
          let tmp19;
          class I {
            constructor() {
              isInChannelResult = null != voiceChannel;
              if (isInChannelResult) {
                tmp3 = closure_17;
                isInChannelResult = closure_17.isInChannel(tmp.id);
              }
              return isInChannelResult;
            }
          }
          const tmpResult3 = tmp(style[43]);
          const stateFromStores1 = tmpResult3.useStateFromStores(tmp15, E);
          const _Symbol3 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            class I {
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
            tmp19 = items2;
          } else {
            class I {
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
          const tmpResult4 = tmp(style[43]);
          const stateFromStores2 = tmpResult4.useStateFromStores(tmp19, D);
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
        }
        class E {
          constructor() {
            tmp = closure_8;
            if (tmp) {
              tmp5 = closure_16;
              status = closure_16.getStatus();
            } else {
              tmp2 = closure_15;
              tmp3 = user;
              status = closure_15.getStatus(user.id);
            }
            tmp6 = status === StatusTypes.OFFLINE || status === StatusTypes.INVISIBLE;
            return tmp6;
          }
        }
        cResult[7] = user.id === currentUser.id;
        cResult[8] = user.id;
        cResult[9] = E;
      }
      let obj2 = { userId: user.id, guildId };
      cResult[0] = guildId;
      cResult[1] = user.id;
      cResult[2] = obj2;
      tmp7 = obj2;
    }
  : (user) => {
      let items3;
      let items4;
      let items5;
      let items6;
      let items7;
      let items8;
      let live;
      let obj6;
      let stream;
      user = user.user;
      const currentUser = user.currentUser;
      const style = user.style;
      stream = undefined;
      const guildId = user.guildId;
      const tmp = closure_26();
      let closure_3 = tmp;
      const tmp2 = currentUser;
      ({ live, stream } = currentUser(style[75])(user.id));
      let obj = { userId: user.id, guildId };
      currentUser(style[75])(user.id);
      const tmp5 = currentUser(style[76])(obj);
      const voiceChannel = tmp5.voiceChannel;
      const voiceActivity = tmp5.voiceActivity;
      let obj2 = user(style[43]);
      const items = [VoiceStateStore];
      const stateFromStores = obj2.useStateFromStores(items, () => {
        const isInChannelResult = null != voiceChannel && VoiceStateStore.isInChannel(tmp.id);
        return isInChannelResult;
      });
      let closure_8 = user.id === currentUser.id;
      let obj3 = user(style[43]);
      const items1 = [SelfPresenceStore, PresenceStore];
      const stateFromStores1 = obj3.useStateFromStores(items1, () => {
        let status;
        if (closure_8) {
          status = SelfPresenceStore.getStatus();
        } else {
          status = PresenceStore.getStatus(user.id);
        }
        return status === constants.OFFLINE || status === constants.INVISIBLE;
      });
      const items2 = [UserProfileStore];
      const obj4 = user(style[43]);
      const stateFromStores2 = obj4.useStateFromStores(items2, () => {
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
            const obj5 = { style: items3, children: closure_23(tmp2(style[77]), obj6) };
            items3 = [tmp.card, style];
            obj6 = { user, currentUser, channel: voiceChannel, style: items4 };
            items4 = [,];
            ({ voiceSettings: arr11[0], voiceSettingsDivider: arr11[1] } = tmp);
            const tmp2Result = tmp2(style[54]);
            return closure_23(tmp2Result, obj5);
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
        let tmp12 = !stateFromStores2 && null != voiceChannel;
        if (tmp12) {
          let tmp10Result;
          function renderVoiceActivityCard(voiceChannel) {
            let tmp8;
            if (null != stream) {
              if (stream.channelId === voiceChannel.id) {
                const obj2 = { user, stream, activity: voiceActivity, style: closure_3.voiceActivityCard };
                tmp8 = closure_23(closure_31, obj2);
              }
              return tmp8;
            }
            if (null != voiceActivity) {
              const obj3 = { user, currentUser, activity: tmp2, voiceChannel, style: closure_3.voiceActivityCard };
              tmp8 = closure_23(closure_30, obj3);
            } else {
              const obj = {
                user,
                channel: voiceChannel,
                isInChannel: stateFromStores,
                style: closure_3.voiceActivityCard,
              };
              tmp8 = closure_23(closure_32, obj);
            }
          }
          if (stateFromStores) {
            const obj7 = { style: items5, children: items6 };
            items5 = [tmp.card, style];
            items6 = [,];
            const tmp2Result3 = tmp2(style[54]);
            items6[0] = renderVoiceActivityCard(voiceChannel);
            const obj8 = { user, currentUser, channel: voiceChannel, style: items7 };
            items7 = [,];
            ({ voiceSettings: arr8[0], voiceSettingsDivider: arr8[1] } = tmp);
            items6[1] = closure_23(tmp2(style[77]), obj8);
            tmp10Result = closure_24(tmp2Result3, obj7);
          } else {
            const obj9 = { style: items8, children: renderVoiceActivityCard(voiceChannel) };
            items8 = [tmp.card, style];
            const tmp2Result4 = tmp2(style[54]);
            tmp10Result = closure_23(tmp2Result4, obj9);
          }
          tmp12 = tmp10Result;
        }
        const items9 = [tmp12, ,];
        let tmp18 = !stateFromStores2 && null != stream;
        if (tmp18) {
          let id;
          const channelId = stream.channelId;
          if (voiceChannel != null) {
            id = voiceChannel.id;
          }
          tmp18 = channelId !== id;
        }
        if (tmp18) {
          const obj10 = { user, stream, activity: voiceActivity, style };
          tmp18 = closure_23(closure_31, obj10);
        }
        const obj11 = { children: items9 };
        items9[1] = tmp18;
        items9[2] = found.map((activity, index) => {
          let application_id = activity.application_id;
          const obj = { user, currentUser, activity, style };
          if (application_id == null) {
            application_id = index;
          }
          return closure_23(closure_30, obj, application_id);
        });
        return closure_24(closure_25, obj11);
      }
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivity.tsx");

export default tmp6;
