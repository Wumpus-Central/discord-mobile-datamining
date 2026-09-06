// discord_app/modules/user_profile/native/UserProfileActivityButtons.tsx
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import LinkingDefault from "../../../lib/native/Linking.tsx";
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import PrivateChannelCallUtils from "../../../utils/native/PrivateChannelCallUtils.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import isStreamingDefault from "../../activities/utils/isStreaming.tsx";
import StageChannelModalActionCreators from "../../stage_channels/StageChannelModalActionCreators.tsx";
import authorizeConnectionDefault from "../../connections/authorizeConnection.native.tsx";
import handleJoinEmbeddedActivityDefault from "../../activities/handleJoinEmbeddedActivity.tsx";
import GamesActionCreatorsDefault from "../../../actions/GamesActionCreators.native.tsx";
import getActivityChannelIdDefault from "../../activities/utils/getActivityChannelId.tsx";
import getActivityJoinability from "../../activities/utils/getActivityJoinability.tsx";
import getStreamURLDefault from "../../activities/utils/getStreamURL.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../activities/EmbeddedActivitiesStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import ConnectedAccountsStore from "../../../stores/ConnectedAccountsStore.tsx";
import GuildMemberCountStore from "../../../stores/GuildMemberCountStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import LocalActivityStore from "../../../stores/LocalActivityStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import SelfPresenceStore from "../../../stores/SelfPresenceStore.tsx";
import VoiceStateStore from "../../../stores/VoiceStateStore.tsx";

const getActivityJoinabilityDefault = getActivityJoinability;

require = fn;
const Constants = fn(1074);
({ PlatformTypes: closure_15, UserSettingsSections: closure_16 } = Constants);
const SpotifyConstants = fn(8340);
({ SpotifyEndpoints: closure_17, SpotifyResourceTypes: closure_18 } = SpotifyConstants);
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { icon: null };
createStyles = { tintColor: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT };
createStyles.icon = createStyles;
let closure_20 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityButtons.tsx");

export const JoinActivityButton = function JoinActivityButton(user) {
  user = user.user;
  ({ currentUser: importDefault, activity } = user);
  const application = user.application;
  const onAction = user.onAction;
  let channelId;
  closure_7 = undefined;
  let JOINED = activity;
  const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  let id;
  if (application != null) {
    id = application.id;
  }
  const embeddedActivityForUserId = onAction.getEmbeddedActivityForUserId(user.id, id);
  let obj = user(JOINED[19]);
  let _location;
  if (embeddedActivityForUserId != null) {
    _location = embeddedActivityForUserId.location;
  }
  channelId = obj.getEmbeddedActivityLocationChannelId(_location);
  let tmp5Result = tmp5(JOINED[20]);
  closure_7 = tmp5Result.useStateFromStores([], () =>
    getActivityChannelIdDefault({ channelId, userId: user.id, activity }),
  );
  tmp5Result = tmp5(JOINED[20]);
  const items = [
    analyticsLocations,
    GuildStore,
    closure_7,
    RelationshipStore,
    SelectedChannelStore,
    VoiceStateStore,
    PermissionStore,
    LocalActivityStore,
    SelfPresenceStore,
    onAction,
  ];
  const stateFromStores = tmp5Result.useStateFromStores(items, () =>
    getActivityJoinabilityDefault({
      isEmbedded: true,
      user,
      currentUser,
      activity,
      application,
      channelId,
      ChannelStore,
      GuildStore,
      GuildMemberCountStore,
      RelationshipStore,
      SelectedChannelStore,
      VoiceStateStore,
      PermissionStore,
      LocalActivityStore,
      SelfPresenceStore,
      EmbeddedActivitiesStore,
    }),
  );
  let tmp8 = null;
  if (require("isEmbeddedActivity")(activity)) {
    tmp8 = null;
    if (null != application) {
      tmp8 = null;
      if (stateFromStores !== tmp5(JOINED[22]).ActivityJoinability.CANNOT_JOIN) {
        if (stateFromStores === tmp5(JOINED[22]).ActivityJoinability.JOINED) {
          const intl2 = tmp5(JOINED[25]).intl;
          let stringResult = intl2.string(tmp5(JOINED[25]).t.DPfdsq);
        } else {
          const intl = tmp5(JOINED[25]).intl;
          stringResult = intl.string(tmp5(JOINED[25]).t["4i2vj+"]);
        }
        obj = {
          text: stringResult,
          icon: jsx(tmp5(JOINED[26]).AppsIcon, { size: "sm", color: "white" }),
          variant: "active",
          disabled: null,
          onPress: null,
        };
        JOINED = tmp5(JOINED[22]).ActivityJoinability.JOINED;
        obj.disabled = stateFromStores === JOINED;
        obj.onPress = function onPress() {
          onAction({ action: "PRESS_JOIN_BUTTON" });
          handleJoinEmbeddedActivityDefault({
            applicationId: application.id,
            activityChannelId,
            locationObject: {},
            analyticsLocations,
          });
          ActionSheetActionCreatorsDefault.hideAllActionSheets();
        };
        jsx(tmp5(JOINED[24]).Button, {
          text: stringResult,
          icon: jsx(tmp5(JOINED[26]).AppsIcon, { size: "sm", color: "white" }),
          variant: "active",
          disabled: null,
          onPress: null,
        });
      }
    }
  }
  return tmp8;
};
export const JoinGameActivityButton = function JoinGameActivityButton(onAction) {
  ({ user: require, currentUser: importDefault, activity: dependencyMap, application } = onAction);
  onAction = onAction.onAction;
  application = undefined;
  let JOINED = dependencyMap;
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  application = { id: application.id, deeplink_uri: application.deepLinkUri };
  let obj = useStateFromStores;
  const items = [
    analyticsLocations,
    GuildStore,
    GuildMemberCountStore,
    RelationshipStore,
    SelectedChannelStore,
    VoiceStateStore,
    PermissionStore,
    LocalActivityStore,
    SelfPresenceStore,
    onAction,
  ];
  const stateFromStores = obj.useStateFromStores(items, () =>
    getActivityJoinabilityDefault({
      user,
      currentUser,
      activity: session_id,
      application,
      channelId: null,
      isEmbedded: false,
      ChannelStore,
      GuildStore,
      GuildMemberCountStore,
      RelationshipStore,
      SelectedChannelStore,
      VoiceStateStore,
      PermissionStore,
      LocalActivityStore,
      SelfPresenceStore,
      EmbeddedActivitiesStore,
    }),
  );
  let tmp3 = null;
  if (null != application) {
    tmp3 = null;
    if (stateFromStores !== getActivityJoinability.ActivityJoinability.CANNOT_JOIN) {
      if (stateFromStores === getActivityJoinability.ActivityJoinability.JOINED) {
        const intl2 = util.intl;
        let stringResult = intl2.string(util.t.DPfdsq);
      } else {
        const intl = util.intl;
        stringResult = intl.string(util.t.VJlc0S);
      }
      obj = { text: stringResult, variant: "active", disabled: null, onPress: null };
      JOINED = getActivityJoinability.ActivityJoinability.JOINED;
      obj.disabled = stateFromStores === JOINED;
      obj.onPress = function onPress() {
        onAction({ action: "PRESS_JOIN_BUTTON" });
        const obj = {
          userId: user.id,
          sessionId: session_id.session_id,
          application,
          channelId: null,
          messageId: null,
          applicationActivity: session_id,
          source: "UserProfile",
          analyticsLocations,
        };
        const joined = obj.join(obj);
        ActionSheetActionCreatorsDefault.hideAllActionSheets();
      };
      jsx(components_Button_Button.Button, { text: stringResult, variant: "active", disabled: null, onPress: null });
    }
  }
  return tmp3;
};
export const PlayOnSpotifyButton = function PlayOnSpotifyButton(arg0) {
  ({ activity, onAction: require } = arg0);
  const sync_id = activity.sync_id;
  let tmp4 = null;
  if (sync_id(10891)(activity)) {
    tmp4 = null;
    if (null != sync_id) {
      let obj = { text: null, icon: null, variant: "secondary", onPress: null };
      const intl = util.intl;
      obj = { platform: activity.name };
      obj.text = intl.formatToPlainString(util.t.LEgD7t, obj);
      obj = { size: native.Icon.Sizes.SMALL, source: sync_id(8142), disableColor: true, style: tmp.icon };
      obj.icon = jsx(native.Icon, {
        size: native.Icon.Sizes.SMALL,
        source: sync_id(8142),
        disableColor: true,
        style: tmp.icon,
      });
      obj.onPress = asyncGeneratorStep(async () => {
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj = { value, done: true };
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_0 = tmp7;
                closure_128_0 = undefined;
                require({ action: "PRESS_PLAY_ON_SPOTIFY_BUTTON" });
                c3 = 1;
                let obj2 = closure_0(tmp22[33]);
                c4 = 2;
                c5 = 1;
                const obj1 = { value: obj2.canOpenSpotifyUrl(), done: false };
                return obj1;
              }
            } else if (1 === tmp7) {
              c3 = 0;
              c5 = 3;
              return { value: "HermesInternal", done: null };
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              obj2 = { value, done: true };
              return obj2;
            } else {
              closure_128_0 = value;
              const obj7 = closure_0(tmp22[33]);
              if (closure_128_0) {
                obj7.openUrl(closure_128_0, constants2.TRACK, closure_129_1);
              } else {
                obj7.attributeInstall();
                obj = tmp3(tmp22[34]);
                obj.openURL(constants.APP_STORE);
              }
              c3 = 0;
              c5 = 3;
            }
          } catch (tmp22) {
            if (tmp4 === c3) {
              c5 = tmp2;
              throw tmp22;
            } else {
              c4 = tmp;
            }
          }
        }
      });
      tmp4 = jsx(components_Button_Button.Button, {
        size: native.Icon.Sizes.SMALL,
        source: sync_id(8142),
        disableColor: true,
        style: tmp.icon,
      });
    }
  }
  return tmp4;
};
export const WatchActivityButton = function WatchActivityButton(arg0) {
  ({ activity, onAction: require } = arg0);
  const tmp2 = getStreamURLDefault(activity);
  importDefault = tmp2;
  let tmp3 = null;
  if (isStreamingDefault(activity)) {
    tmp3 = null;
    if (null != tmp2) {
      const obj = { text: null, variant: "secondary", onPress: null };
      const intl = util.intl;
      obj.text = intl.string(util.t.I6JG46);
      obj.onPress = function onPress() {
        require({ action: "PRESS_WATCH_BUTTON" });
        LinkingDefault.openURL(closure_1);
      };
      tmp3 = jsx(components_Button_Button.Button, { text: null, variant: "secondary", onPress: null });
    }
  }
  return tmp3;
};
export const VoiceChannelButtons = function VoiceChannelButtons(channel) {
  channel = channel.channel;
  ({ isInChannel, onAction: importDefault } = channel);
  let newestAnalyticsLocation;
  let v7hwn2A = newestAnalyticsLocation;
  newestAnalyticsLocation = require("useAnalyticsLocations")().newestAnalyticsLocation;
  const isGuildStageVoiceResult = channel.isGuildStageVoice();
  c3 = isGuildStageVoiceResult;
  const isDMResult = channel.isDM();
  if (isInChannel) {
    if (!isDMResult) {
      if (!channel.isGroupDM()) {
        const intl3 = tmp4(v7hwn2A[25]).intl;
        const string2 = intl3.string;
        const t2 = tmp4(v7hwn2A[25]).t;
        if (isGuildStageVoiceResult) {
          let string2Result = string2(t2.Acqcot);
        } else {
          string2Result = string2(t2.BXxdl7);
        }
      }
    }
    const intl4 = tmp4(v7hwn2A[25]).intl;
    v7hwn2A = tmp4(v7hwn2A[25]).t["7hwn2A"];
    string2Result = intl4.string(v7hwn2A);
  } else {
    if (!isDMResult) {
      if (!channel.isGroupDM()) {
        const intl = tmp4(v7hwn2A[25]).intl;
        const string = intl.string;
        const t = tmp4(v7hwn2A[25]).t;
        if (isGuildStageVoiceResult) {
          let stringResult = string(t["7vb2cc"]);
        } else {
          stringResult = string(t["96ANUN"]);
        }
      }
      let obj = { text: stringResult, variant: null, grow: true, onPress: null };
      let str = "active";
      if (isInChannel) {
        str = "secondary";
      }
      obj.variant = str;
      obj.onPress = function onPress() {
        closure_1_1({ action: "PRESS_JOIN_CALL_BUTTON" });
        ActionSheetActionCreatorsDefault.hideAllActionSheets();
        ModalActionCreatorsDefault.popAll();
        const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
        let isReadyResult;
        if (rootNavigationRef != null) {
          isReadyResult = rootNavigationRef.isReady();
        }
        let tmp7 = true === isReadyResult;
        if (tmp7) {
          const currentRoute = rootNavigationRef.getCurrentRoute();
          let name;
          if (currentRoute != null) {
            name = currentRoute.name;
          }
          tmp7 = "you" === name;
        }
        if (tmp7) {
          rootNavigationRef.goBack();
        }
        if (c3) {
          let tmp5Result = StageChannelModalActionCreators;
          tmp5Result.connectAndOpen(channel);
        } else {
          tmp5Result = PrivateChannelCallUtils;
          tmp5Result.openGuildVoiceModal(channel, newestAnalyticsLocation);
        }
      };
      return jsx(channel(newestAnalyticsLocation[24]).Button, {
        text: stringResult,
        variant: null,
        grow: true,
        onPress: null,
      });
    }
    const intl2 = tmp4(v7hwn2A[25]).intl;
    stringResult = intl2.string(tmp4(v7hwn2A[25]).t.ozoE2A);
  }
};
export const ConnectPlatformButton = function ConnectPlatformButton(type) {
  type = type.type;
  const onAction = type.onAction;
  let newestAnalyticsLocation;
  c3 = undefined;
  newestAnalyticsLocation = onAction(newestAnalyticsLocation[18])().newestAnalyticsLocation;
  let obj = type(newestAnalyticsLocation[20]);
  const items = [ConnectedAccountsStore];
  if (obj.useStateFromStores(items, () => null != ConnectedAccountsStore.getAccount(null, type))) {
    return null;
  } else {
    value = tmp2(tmp3[41]).get(type);
    c3 = value;
    obj = { text: null, icon: null, variant: "secondary", onPress: null };
    const intl = tmp4(tmp3[25]).intl;
    obj = { platform: value.name };
    obj.text = intl.formatToPlainString(tmp4(tmp3[25]).t.XWSHTb, obj);
    const obj1 = { size: tmp4(tmp3[31]).Icon.Sizes.SMALL, source: null, disableColor: true, style: null };
    const tmp2Result = tmp2(tmp3[41]);
    obj1.source = tmp4(tmp3[42]).makeSource(value.icon.whitePNG);
    obj1.style = tmp.icon;
    obj.icon = jsx(tmp4(tmp3[31]).Icon, {
      size: tmp4(tmp3[31]).Icon.Sizes.SMALL,
      source: null,
      disableColor: true,
      style: null,
    });
    obj.onPress = function onPress() {
      let str = "PRESS_CONNECT_XBOX_BUTTON";
      if (type === constants.PLAYSTATION) {
        str = "PRESS_CONNECT_PLAYSTATION_BUTTON";
      }
      onAction({ action: str });
      authorizeConnectionDefault({
        platformType: _undefined.type,
        location: newestAnalyticsLocation,
        onClose() {
          type(newestAnalyticsLocation[44]);
          const obj = { screen: constants.CONNECTIONS };
          return obj.openUserSettings(obj);
        },
      });
      let obj = {
        platformType: _undefined.type,
        location: newestAnalyticsLocation,
        onClose() {
          type(newestAnalyticsLocation[44]);
          const obj = { screen: constants.CONNECTIONS };
          return obj.openUserSettings(obj);
        },
      };
    };
    return jsx(tmp4(tmp3[24]).Button, { platform: value.name });
  }
  tmp = closure_20();
  tmp2 = onAction;
};
export const CustomActivityButton = function CustomActivityButton(index) {
  ({ user: require, activity } = index);
  index = index.index;
  const onAction = index.onAction;
  let tmp = null;
  if (null != activity.buttons) {
    tmp = null;
    if (index < activity.buttons.length) {
      let obj = index;
      if (activity(index[45])(activity)) {
        const intl = require("util").intl;
        let stringResult = intl.string(require("util").t.I6JG46);
      } else {
        stringResult = activity.buttons[index];
      }
      obj = {
        text: stringResult,
        variant: "secondary",
        onPress: onAction(function* () {
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp6 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              let obj = { value, done: true };
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              c5 = 2;
              if (0 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  id = tmp7;
                  closure_128_0 = undefined;
                  closure_128_1 = undefined;
                  closure_128_2 = undefined;
                  closure_128_3 = undefined;
                  onAction({ action: "PRESS_CUSTOM_BUTTON" });
                  c3 = 1;
                  c4 = 2;
                  c5 = 1;
                  let obj1 = { value: id(tmp20[46]).getMetadata(activity, id.id), done: false };
                  return obj1;
                }
              } else {
                if (1 === tmp7) {
                  c3 = 0;
                  c5 = 3;
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c5 = 3;
                  const obj2 = { value, done: true };
                  return obj2;
                } else {
                  closure_128_0 = value;
                  if (closure_128_0.button_urls.length <= closure_129_2) {
                    c3 = 0;
                    c5 = 3;
                    return { value: "HermesInternal", done: null };
                  } else {
                    closure_128_1 = closure_128_0.button_urls[closure_129_2];
                    if (typeof closure_128_1 !== "string") {
                      c3 = 0;
                      c5 = 3;
                      return { value: "HermesInternal", done: null };
                    } else {
                      closure_128_2 = tmp3(tmp20[47]).safeParseWithQuery(closure_128_1);
                      let protocol;
                      if (closure_128_2 != null) {
                        protocol = closure_128_2.protocol;
                      }
                      if (null != protocol) {
                        let hostname;
                        if (closure_128_2 != null) {
                          hostname = closure_128_2.hostname;
                        }
                        if (null != hostname) {
                          obj = tmp3(tmp20[47]);
                          closure_128_3 = obj.format(closure_128_2);
                          obj1 = id(tmp20[48]);
                          const obj3 = {
                            href: closure_128_3,
                            onConfirm() {
                              return closure_1(closure_2[34]).openURL(closure_1_3);
                            },
                            trusted: false,
                          };
                          obj1.handleClick(obj3);
                          c3 = 0;
                        }
                      }
                      const obj8 = tmp3(tmp20[47]);
                    }
                  }
                }
                c3 = 0;
                c5 = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp20) {
              if (tmp4 === c3) {
                c5 = tmp2;
                throw tmp20;
              } else {
                c4 = tmp;
              }
            }
          }
        }),
      };
      jsx(require("components/Button/Button").Button, {
        text: stringResult,
        variant: "secondary",
        onPress: onAction(function* () {
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp6 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              let obj = { value, done: true };
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              c5 = 2;
              if (0 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  id = tmp7;
                  closure_128_0 = undefined;
                  closure_128_1 = undefined;
                  closure_128_2 = undefined;
                  closure_128_3 = undefined;
                  onAction({ action: "PRESS_CUSTOM_BUTTON" });
                  c3 = 1;
                  c4 = 2;
                  c5 = 1;
                  let obj1 = { value: id(tmp20[46]).getMetadata(activity, id.id), done: false };
                  return obj1;
                }
              } else {
                if (1 === tmp7) {
                  c3 = 0;
                  c5 = 3;
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c5 = 3;
                  const obj2 = { value, done: true };
                  return obj2;
                } else {
                  closure_128_0 = value;
                  if (closure_128_0.button_urls.length <= closure_129_2) {
                    c3 = 0;
                    c5 = 3;
                    return { value: "HermesInternal", done: null };
                  } else {
                    closure_128_1 = closure_128_0.button_urls[closure_129_2];
                    if (typeof closure_128_1 !== "string") {
                      c3 = 0;
                      c5 = 3;
                      return { value: "HermesInternal", done: null };
                    } else {
                      closure_128_2 = tmp3(tmp20[47]).safeParseWithQuery(closure_128_1);
                      let protocol;
                      if (closure_128_2 != null) {
                        protocol = closure_128_2.protocol;
                      }
                      if (null != protocol) {
                        let hostname;
                        if (closure_128_2 != null) {
                          hostname = closure_128_2.hostname;
                        }
                        if (null != hostname) {
                          obj = tmp3(tmp20[47]);
                          closure_128_3 = obj.format(closure_128_2);
                          obj1 = id(tmp20[48]);
                          const obj3 = {
                            href: closure_128_3,
                            onConfirm() {
                              return closure_1(closure_2[34]).openURL(closure_1_3);
                            },
                            trusted: false,
                          };
                          obj1.handleClick(obj3);
                          c3 = 0;
                        }
                      }
                      const obj8 = tmp3(tmp20[47]);
                    }
                  }
                }
                c3 = 0;
                c5 = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp20) {
              if (tmp4 === c3) {
                c5 = tmp2;
                throw tmp20;
              } else {
                c4 = tmp;
              }
            }
          }
        }),
      });
    }
  }
  return tmp;
};
