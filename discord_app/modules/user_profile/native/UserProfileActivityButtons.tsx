// === Module 12571: UserProfileActivityButtons ===

// Module 12571 (UserProfileActivityButtons)
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import LinkingDefault from "Linking" /* 4522 */;
import RootNavigationRef from "RootNavigationRef" /* 4689 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5032 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 5036 */;
import components_Button_Button from "components/Button/Button" /* 5274 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6578 */;
import isStreamingDefault from "isStreaming" /* 7697 */;
import StageChannelModalActionCreators from "StageChannelModalActionCreators" /* 7833 */;
import authorizeConnectionDefault from "authorizeConnection" /* 8520 */;
import handleJoinEmbeddedActivityDefault from "handleJoinEmbeddedActivity" /* 8818 */;
import GamesActionCreatorsDefault from "GamesActionCreators" /* 11251 */;
import getActivityChannelIdDefault from "getActivityChannelId" /* 12572 */;
import getActivityJoinability from "getActivityJoinability" /* 12573 */;
import getStreamURLDefault from "getStreamURL" /* 12575 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2043 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5588 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4750 */;
import GuildStore from "GuildStore" /* 2066 */;
import LocalActivityStore from "LocalActivityStore" /* 8806 */;
import PermissionStore from "PermissionStore" /* 4466 */;
import RelationshipStore from "RelationshipStore" /* 4476 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2098 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5586 */;
import VoiceStateStore from "VoiceStateStore" /* 4848 */;

const require = globalThis.__r;
const getActivityJoinabilityDefault = getActivityJoinability;

require = fn;
const Constants = fn(1074);
({ PlatformTypes: closure_15, UserSettingsSections: closure_16 } = Constants);
const SpotifyConstants = fn(7780);
({ SpotifyEndpoints: closure_17, SpotifyResourceTypes: closure_18 } = SpotifyConstants);
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let obj2 = { icon: { tintColor: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT } };
let closure_20 = createStyles.createStyles(obj2);
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
  let _location;
  if (embeddedActivityForUserId != null) {
    _location = embeddedActivityForUserId.location;
  }
  channelId = user(JOINED[19]).getEmbeddedActivityLocationChannelId(_location);
  const obj = user(JOINED[19]);
  const tmp2 = onAction;
  closure_7 = user(JOINED[20]).useStateFromStores([], () => getActivityChannelIdDefault({ channelId, userId: user.id, activity }));
  const tmp5Result = user(JOINED[20]);
  const items = [analyticsLocations, GuildStore, closure_7, RelationshipStore, SelectedChannelStore, VoiceStateStore, PermissionStore, LocalActivityStore, SelfPresenceStore, tmp2];
  const stateFromStores = user(JOINED[20]).useStateFromStores(items, () => getActivityJoinabilityDefault({ isEmbedded: true, user, currentUser, activity, application, channelId, ChannelStore, GuildStore, GuildMemberCountStore, RelationshipStore, SelectedChannelStore, VoiceStateStore, PermissionStore, LocalActivityStore, SelfPresenceStore, EmbeddedActivitiesStore }));
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
        const obj2 = { text: stringResult, icon: jsx(tmp5(JOINED[26]).AppsIcon, { size: "sm", color: "white" }), variant: "active", disabled: null, onPress: null };
        JOINED = tmp5(JOINED[22]).ActivityJoinability.JOINED;
        obj2.disabled = stateFromStores === JOINED;
        obj2.onPress = function onPress() {
          onAction({ action: "PRESS_JOIN_BUTTON" });
          handleJoinEmbeddedActivityDefault({ applicationId: application.id, activityChannelId, locationObject: {}, analyticsLocations });
          ActionSheetActionCreatorsDefault.hideAllActionSheets();
        };
        jsx(tmp5(JOINED[24]).Button, { text: stringResult, icon: jsx(tmp5(JOINED[26]).AppsIcon, { size: "sm", color: "white" }), variant: "active", disabled: null, onPress: null });
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
  const items = [analyticsLocations, GuildStore, GuildMemberCountStore, RelationshipStore, SelectedChannelStore, VoiceStateStore, PermissionStore, LocalActivityStore, SelfPresenceStore, onAction];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => getActivityJoinabilityDefault({ user, currentUser, activity: session_id, application, channelId: null, isEmbedded: false, ChannelStore, GuildStore, GuildMemberCountStore, RelationshipStore, SelectedChannelStore, VoiceStateStore, PermissionStore, LocalActivityStore, SelfPresenceStore, EmbeddedActivitiesStore }));
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
      let obj2 = { text: stringResult, variant: "active", disabled: null, onPress: null };
      JOINED = getActivityJoinability.ActivityJoinability.JOINED;
      obj2.disabled = stateFromStores === JOINED;
      obj2.onPress = function onPress() {
        onAction({ action: "PRESS_JOIN_BUTTON" });
        const joined = GamesActionCreatorsDefault.join({ userId: user.id, sessionId: session_id.session_id, application, channelId: null, messageId: null, applicationActivity: session_id, source: "UserProfile", analyticsLocations });
        const obj2 = { userId: user.id, sessionId: session_id.session_id, application, channelId: null, messageId: null, applicationActivity: session_id, source: "UserProfile", analyticsLocations };
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
  if (sync_id(10339)(activity)) {
    tmp4 = null;
    if (null != sync_id) {
      let obj = { text: null, icon: null, variant: "secondary", onPress: null };
      const intl = util.intl;
      let obj2 = { platform: activity.name };
      obj.text = intl.formatToPlainString(util.t.LEgD7t, obj2);
      const obj3 = { size: native.Icon.Sizes.SMALL, source: sync_id(7591), disableColor: true, style: tmp.icon };
      obj.icon = jsx(native.Icon, { size: native.Icon.Sizes.SMALL, source: sync_id(7591), disableColor: true, style: tmp.icon });
      obj.onPress = asyncGeneratorStep(async () => {
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
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
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_0 = tmp7;
                closure_128_0 = undefined;
                require({ action: "PRESS_PLAY_ON_SPOTIFY_BUTTON" });
                c3 = 1;
                c4 = 2;
                c5 = 1;
                const obj5 = { value: closure_0(tmp22[33]).canOpenSpotifyUrl(), done: false };
                return obj5;
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
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_128_0 = value;
              const obj7 = closure_0(tmp22[33]);
              if (closure_128_0) {
                obj7.openUrl(closure_128_0, constants2.TRACK, closure_129_1);
              } else {
                obj7.attributeInstall();
                tmp3(tmp22[34]).openURL(constants.APP_STORE);
                const obj = tmp3(tmp22[34]);
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
      tmp4 = jsx(components_Button_Button.Button, { text: null, icon: null, variant: "secondary", onPress: null });
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
          StageChannelModalActionCreators.connectAndOpen(channel);
          const tmp5Result = StageChannelModalActionCreators;
        } else {
          PrivateChannelCallUtils.openGuildVoiceModal(channel, newestAnalyticsLocation);
          const tmp5Result2 = PrivateChannelCallUtils;
        }
      };
      return jsx(channel(newestAnalyticsLocation[24]).Button, { text: stringResult, variant: null, grow: true, onPress: null });
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
  const tmp = closure_20();
  const tmp2 = onAction;
  const items = [ConnectedAccountsStore];
  if (obj.useStateFromStores(items, () => null != ConnectedAccountsStore.getAccount(null, type))) {
    return null;
  } else {
    value = tmp2(tmp3[41]).get(type);
    c3 = value;
    const obj2 = { text: null, icon: null, variant: "secondary", onPress: null };
    const intl = tmp4(tmp3[25]).intl;
    const obj3 = { platform: value.name };
    obj2.text = intl.formatToPlainString(tmp4(tmp3[25]).t.XWSHTb, obj3);
    const obj4 = { size: tmp4(tmp3[31]).Icon.Sizes.SMALL, source: null, disableColor: true, style: null };
    const tmp2Result = tmp2(tmp3[41]);
    obj4.source = tmp4(tmp3[42]).makeSource(value.icon.whitePNG);
    obj4.style = tmp.icon;
    obj2.icon = jsx(tmp4(tmp3[31]).Icon, { size: tmp4(tmp3[31]).Icon.Sizes.SMALL, source: null, disableColor: true, style: null });
    obj2.onPress = function onPress() {
      let str = "PRESS_CONNECT_XBOX_BUTTON";
      if (type === constants.PLAYSTATION) {
        str = "PRESS_CONNECT_PLAYSTATION_BUTTON";
      }
      onAction({ action: str });
      authorizeConnectionDefault({
        platformType: _undefined.type,
        location: newestAnalyticsLocation,
        onClose() {
          return type(newestAnalyticsLocation[44]).openUserSettings({ screen: constants.CONNECTIONS });
        }
      });
      const obj = {
        platformType: _undefined.type,
        location: newestAnalyticsLocation,
        onClose() {
          return type(newestAnalyticsLocation[44]).openUserSettings({ screen: constants.CONNECTIONS });
        }
      };
    };
    return jsx(tmp4(tmp3[24]).Button, { text: null, icon: null, variant: "secondary", onPress: null });
  }
  obj = type(newestAnalyticsLocation[20]);
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
        onPress: onAction(function*() {
              if (c5 === 2) {
                c5 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp6 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj3 = { value, done: true };
                  return obj3;
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
                      const obj4 = { value, done: true };
                      return obj4;
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
                      const obj5 = { value: id(tmp20[46]).getMetadata(activity, id.id), done: false };
                      return obj5;
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
                      const obj6 = { value, done: true };
                      return obj6;
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
                              closure_128_3 = tmp3(tmp20[47]).format(closure_128_2);
                              const obj = tmp3(tmp20[47]);
                              const obj7 = {
                                href: closure_128_3,
                                onConfirm() {
                                                  return closure_1(closure_2[34]).openURL(closure_1_3);
                                                },
                                trusted: false
                              };
                              id(tmp20[48]).handleClick(obj7);
                              c3 = 0;
                              const obj2 = id(tmp20[48]);
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
            })
      };
      jsx(require("components/Button/Button").Button, {
        text: stringResult,
        variant: "secondary",
        onPress: onAction(function*() {
              if (c5 === 2) {
                c5 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp6 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj3 = { value, done: true };
                  return obj3;
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
                      const obj4 = { value, done: true };
                      return obj4;
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
                      const obj5 = { value: id(tmp20[46]).getMetadata(activity, id.id), done: false };
                      return obj5;
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
                      const obj6 = { value, done: true };
                      return obj6;
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
                              closure_128_3 = tmp3(tmp20[47]).format(closure_128_2);
                              const obj = tmp3(tmp20[47]);
                              const obj7 = {
                                href: closure_128_3,
                                onConfirm() {
                                                  return closure_1(closure_2[34]).openURL(closure_1_3);
                                                },
                                trusted: false
                              };
                              id(tmp20[48]).handleClick(obj7);
                              c3 = 0;
                              const obj2 = id(tmp20[48]);
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
            })
      });
    }
  }
  return tmp;
};