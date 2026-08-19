// discord_app/modules/user_profile/native/UserProfileActivityButtons.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import defaultAreStatesEqual from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Button from "../../../design/void/native.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Button2 from "../../../design/components/Button/native/Button.native.tsx";
import contextDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import _isStreamingDefault from "../../activities/utils/isStreaming.tsx";
import fetchJoinSecretDefault from "../../../actions/GamesActionCreators.native.tsx";
import getActivityJoinability from "../../activities/utils/getActivityJoinability.tsx";
import getActivityJoinabilityDefault from "../../activities/utils/getActivityJoinability.tsx";
import getStreamURLDefault from "../../activities/utils/getStreamURL.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import participantFromServer from "../../activities/EmbeddedActivitiesStore.tsx";
import ensureGuildLoaded from "../../../stores/ChannelStore.tsx";
import set from "../../../stores/ConnectedAccountsStore.tsx";
import handleInviteData from "../../../stores/GuildMemberCountStore.tsx";
import createGuildRecordFromRust from "../../../stores/GuildStore.tsx";
import updateActivities from "../../../stores/LocalActivityStore.tsx";
import getUncachedChannelPermissions from "../../../stores/PermissionStore.tsx";
import markAllUserIdListsStale from "../../../stores/RelationshipStore.tsx";
import handleConnectionOpen from "../../../stores/SelectedChannelStore.tsx";
import filterPlayingActivities from "../../../stores/SelfPresenceStore.tsx";
import updateVoiceState from "../../../stores/VoiceStateStore.tsx";
import ME from "../../../Constants.tsx";
import SPOTIFY_APP_PROTOCOL from "../../spotify/SpotifyConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
noopAll;
({ PlatformTypes: closure_15, UserSettingsSections: closure_16 } = ME);
({ SpotifyEndpoints: closure_17, SpotifyResourceTypes: closure_18 } = SPOTIFY_APP_PROTOCOL);
const createCacheKey = { tintColor: ThemesDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT };
createCacheKey[0] = createCacheKey;
let closure_20 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/user_profile/native/UserProfileActivityButtons.tsx");

export const JoinActivityButton = function JoinActivityButton(user) {
  user = user.user;
  ({ currentUser: importDefault, activity } = user);
  const application = user.application;
  const onAction = user.onAction;
  let embeddedActivityLocationChannelId;
  closure_7 = undefined;
  let JOINED = activity;
  const analyticsLocations = importDefault(activity[18])().analyticsLocations;
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
  embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(_location);
  let tmp5Result = tmp5(JOINED[20]);
  closure_7 = tmp5Result.useStateFromStores([], () => importDefault(activity[21])({ channelId: closure_6, userId: user.id, activity }));
  tmp5Result = tmp5(JOINED[20]);
  const items = [analyticsLocations, closure_8, closure_7, closure_11, closure_12, closure_14, closure_10, closure_9, closure_13, onAction];
  const stateFromStores = tmp5Result.useStateFromStores(items, () => importDefault(activity[22])({ isEmbedded: true, user, currentUser: closure_1, activity, application, channelId: closure_7, ChannelStore: analyticsLocations, GuildStore: closure_1_8, GuildMemberCountStore: closure_7, RelationshipStore: closure_1_11, SelectedChannelStore: closure_1_12, VoiceStateStore: closure_1_14, PermissionStore: closure_1_10, LocalActivityStore: closure_1_9, SelfPresenceStore: closure_1_13, EmbeddedActivitiesStore: onAction }));
  let tmp8 = null;
  if (importDefault(JOINED[23])(activity)) {
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
        obj = { text: null, icon: null, variant: "active", disabled: null, onPress: null };
        obj[0] = stringResult;
        obj[1] = jsx(tmp5(JOINED[26]).AppsIcon, { size: "sm", color: "white" });
        JOINED = tmp5(JOINED[22]).ActivityJoinability.JOINED;
        obj[3] = stateFromStores === JOINED;
        obj[4] = function onPress() {
          onAction({ action: "PRESS_JOIN_BUTTON" });
          importDefault(activity[27])({ applicationId: application.id, activityChannelId: closure_7, locationObject: {}, analyticsLocations });
          importDefault(activity[28]).hideActionSheet();
        };
        jsx(tmp5(JOINED[24]).Button, { text: null, icon: null, variant: "active", disabled: null, onPress: null });
      }
    }
  }
  return tmp8;
};
export const JoinGameActivityButton = function JoinGameActivityButton(onAction) {
  ({ user: require, currentUser: importDefault, activity: dependencyMap, application } = onAction);
  onAction = onAction.onAction;
  let JOINED = dependencyMap;
  const analyticsLocations = contextDefault().analyticsLocations;
  closure_6 = { id: application.id, deeplink_uri: application.deepLinkUri };
  let obj = defaultAreStatesEqual;
  const items = [analyticsLocations, closure_8, closure_7, closure_11, closure_12, closure_14, closure_10, closure_9, closure_13, onAction];
  const stateFromStores = obj.useStateFromStores(items, () => getActivityJoinabilityDefault({ user: closure_0, currentUser: closure_1, activity: closure_2, application, channelId: null, isEmbedded: false, ChannelStore: analyticsLocations, GuildStore: closure_1_8, GuildMemberCountStore: closure_1_7, RelationshipStore: closure_1_11, SelectedChannelStore: closure_1_12, VoiceStateStore: closure_1_14, PermissionStore: closure_1_10, LocalActivityStore: closure_1_9, SelfPresenceStore: closure_1_13, EmbeddedActivitiesStore: onAction }));
  let tmp3 = null;
  if (null != application) {
    tmp3 = null;
    if (stateFromStores !== getActivityJoinability.ActivityJoinability.CANNOT_JOIN) {
      if (stateFromStores === getActivityJoinability.ActivityJoinability.JOINED) {
        const intl2 = getSystemLocale.intl;
        let stringResult = intl2.string(getSystemLocale.t.DPfdsq);
      } else {
        const intl = getSystemLocale.intl;
        stringResult = intl.string(getSystemLocale.t.VJlc0S);
      }
      obj = { text: null, variant: "active", disabled: null, onPress: null };
      obj[0] = stringResult;
      JOINED = getActivityJoinability.ActivityJoinability.JOINED;
      obj[2] = stateFromStores === JOINED;
      obj[3] = function onPress() {
        onAction({ action: "PRESS_JOIN_BUTTON" });
        const obj = { userId: id.id, sessionId: session_id.session_id, application: closure_6, channelId: null, messageId: null, applicationActivity: session_id, source: "UserProfile", analyticsLocations };
        const joined = obj.join(obj);
        ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
      };
      jsx(Button2.Button, { text: null, variant: "active", disabled: null, onPress: null });
    }
  }
  return tmp3;
};
export const PlayOnSpotifyButton = function PlayOnSpotifyButton(arg0) {
  ({ activity, onAction: require } = arg0);
  const sync_id = activity.sync_id;
  let tmp4 = null;
  if (sync_id(7261)(activity)) {
    tmp4 = null;
    if (null != sync_id) {
      const intl = getSystemLocale.intl;
      let obj = { platform: null };
      obj[0] = activity.name;
      obj[0] = intl.formatToPlainString(getSystemLocale.t.LEgD7t, obj);
      obj = { size: null, source: null, disableColor: true, style: null };
      obj[0] = Button.Icon.Sizes.SMALL;
      obj[1] = sync_id(8352);
      obj[3] = tmp.icon;
      obj[1] = jsx(Button.Icon, { size: null, source: null, disableColor: true, style: null });
      obj[3] = callback(function*() {
        if (c5 === 2) {
          c5 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_1 = tmp3;
                closure_0 = tmp7;
                closure_0 = undefined;
                closure_1_0({ action: "PRESS_PLAY_ON_SPOTIFY_BUTTON" });
                c3 = 1;
                let obj2 = closure_1_0(closure_1_2[33]);
                c4 = 2;
                c5 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj2.canOpenSpotifyUrl();
                return obj1;
              }
            } else if (1 === tmp7) {
              c3 = 0;
              c5 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              closure_0 = arg1;
              const obj7 = closure_1_0(closure_1_2[33]);
              if (closure_0) {
                obj7.openUrl(closure_0, closure_1_18.TRACK, closure_1);
              } else {
                obj7.attributeInstall();
                obj = sync_id(closure_1_2[34]);
                obj.openURL(closure_1_17.APP_STORE);
              }
              c3 = 0;
              c5 = 3;
            }
          } catch (tmp22) {
            closure_2 = tmp22;
            if (tmp4 === c3) {
              c5 = tmp2;
              throw tmp22;
            } else {
              c4 = tmp;
            }
          }
        }
      });
      tmp4 = jsx(Button2.Button, { size: null, source: null, disableColor: true, style: null });
    }
  }
  return tmp4;
};
export const WatchActivityButton = function WatchActivityButton(arg0) {
  ({ activity, onAction: require } = arg0);
  const tmp2 = getStreamURLDefault(activity);
  importDefault = tmp2;
  let tmp3 = null;
  if (_isStreamingDefault(activity)) {
    tmp3 = null;
    if (null != tmp2) {
      const obj = { text: null, variant: "secondary", onPress: null };
      const intl = getSystemLocale.intl;
      obj[0] = intl.string(getSystemLocale.t.I6JG46);
      obj[2] = function onPress() {
        callback({ action: "PRESS_WATCH_BUTTON" });
        callback2(dependencyMap[34]).openURL(callback2);
      };
      tmp3 = jsx(Button2.Button, { text: null, variant: "secondary", onPress: null });
    }
  }
  return tmp3;
};
export const VoiceChannelButtons = function VoiceChannelButtons(channel) {
  channel = channel.channel;
  ({ isInChannel, onAction: importDefault } = channel);
  let newestAnalyticsLocation;
  let v7hwn2A = newestAnalyticsLocation;
  newestAnalyticsLocation = importDefault(newestAnalyticsLocation[18])().newestAnalyticsLocation;
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
      let obj = { text: null, variant: null, grow: true, onPress: null };
      obj[0] = stringResult;
      let str = "active";
      if (isInChannel) {
        str = "secondary";
      }
      obj[1] = str;
      obj[3] = function onPress() {
        callback({ action: "PRESS_JOIN_CALL_BUTTON" });
        importDefault(newestAnalyticsLocation[28]).hideActionSheet();
        const obj = importDefault(newestAnalyticsLocation[28]);
        importDefault(newestAnalyticsLocation[37]).popAll();
        const obj2 = importDefault(newestAnalyticsLocation[37]);
        const rootNavigationRef = channel(newestAnalyticsLocation[38]).getRootNavigationRef();
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
          let tmp5Result = channel(newestAnalyticsLocation[39]);
          tmp5Result.connectAndOpen(channel);
        } else {
          tmp5Result = channel(newestAnalyticsLocation[40]);
          tmp5Result.openGuildVoiceModal(channel, newestAnalyticsLocation);
        }
        const obj3 = channel(newestAnalyticsLocation[38]);
      };
      return jsx(channel(newestAnalyticsLocation[24]).Button, { text: null, variant: null, grow: true, onPress: null });
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
  const items = [closure_6];
  if (obj.useStateFromStores(items, () => null != closure_1_6.getAccount(null, type))) {
    return null;
  } else {
    const value = tmp2(tmp3[41]).get(type);
    c3 = value;
    const intl = tmp4(tmp3[25]).intl;
    obj = { platform: null };
    obj[0] = value.name;
    obj[0] = intl.formatToPlainString(tmp4(tmp3[25]).t.XWSHTb, obj);
    obj1 = { size: null, source: null, disableColor: true, style: null };
    obj1[0] = tmp4(tmp3[31]).Icon.Sizes.SMALL;
    const tmp2Result = tmp2(tmp3[41]);
    obj1[1] = tmp4(tmp3[42]).makeSource(value.icon.whitePNG);
    obj1[3] = tmp.icon;
    obj[1] = jsx(tmp4(tmp3[31]).Icon, { size: null, source: null, disableColor: true, style: null });
    obj[3] = function onPress() {
      let str = "PRESS_CONNECT_XBOX_BUTTON";
      if (type === closure_1_15.PLAYSTATION) {
        str = "PRESS_CONNECT_PLAYSTATION_BUTTON";
      }
      onAction({ action: str });
      onAction(newestAnalyticsLocation[43])({
        platformType: _undefined.type,
        location: newestAnalyticsLocation,
        onClose() {
          callback(table[44]);
          const obj = { screen: constants.CONNECTIONS };
          return obj.openUserSettings(obj);
        }
      });
    };
    return jsx(tmp4(tmp3[24]).Button, { platform: null });
  }
  tmp = callback2();
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
        const intl = require(obj[25]).intl;
        let stringResult = intl.string(require(obj[25]).t.I6JG46);
      } else {
        stringResult = activity.buttons[index];
      }
      obj = { text: null, variant: "secondary", onPress: null };
      obj[0] = stringResult;
      obj[2] = onAction(function*() {
        if (c5 === 2) {
          c5 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp6 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_1 = tmp3;
                closure_0 = tmp7;
                closure_0 = undefined;
                closure_1 = undefined;
                closure_2 = undefined;
                let v0;
                v0({ action: "PRESS_CUSTOM_BUTTON" });
                v0 = 1;
                c4 = 2;
                c5 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_1_0(index[46]).getMetadata(activity, closure_1_0.id);
                return obj1;
              }
            } else {
              if (1 === tmp7) {
                v0 = 0;
                c5 = 3;
              } else if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v0 = 0;
                c5 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                closure_0 = arg1;
                if (closure_0.button_urls.length <= closure_2) {
                  v0 = 0;
                  c5 = 3;
                  return { value: "HermesInternal", done: "HermesInternal" };
                } else {
                  closure_1 = closure_0.button_urls[closure_2];
                  if (typeof closure_1 !== "string") {
                    v0 = 0;
                    c5 = 3;
                    return { value: "HermesInternal", done: "HermesInternal" };
                  } else {
                    closure_2 = activity(index[47]).safeParseWithQuery(closure_1);
                    let protocol;
                    if (closure_2 != null) {
                      protocol = closure_2.protocol;
                    }
                    if (null != protocol) {
                      let hostname;
                      if (closure_2 != null) {
                        hostname = closure_2.hostname;
                      }
                      if (null != hostname) {
                        obj = activity(index[47]);
                        v0 = obj.format(closure_2);
                        obj1 = closure_1_0(index[48]);
                        const obj3 = { href: null, onConfirm: null, trusted: false };
                        obj3[0] = v0;
                        obj3[1] = function onConfirm() {
                          return callback(tmp20[34]).openURL(c3);
                        };
                        obj1.handleClick(obj3);
                        v0 = 0;
                      }
                    }
                    const obj8 = activity(index[47]);
                  }
                }
              }
              v0 = 0;
              c5 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } catch (tmp20) {
            closure_2 = tmp20;
            if (tmp4 === v0) {
              c5 = tmp2;
              throw tmp20;
            } else {
              c4 = tmp;
            }
          }
        }
      });
      jsx(require(index[24]).Button, { text: null, variant: "secondary", onPress: null });
    }
  }
  return tmp;
};