// discord_app/modules/user_profile/native/UserProfileActivityButtons.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../intl/index.native.tsx";
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
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../_runtime/00019_react.js";
import EmbeddedActivitiesStore from "../../activities/EmbeddedActivitiesStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import ConnectedAccountsStore_mod from "../../../stores/ConnectedAccountsStore.tsx";
import GuildMemberCountStore from "../../../stores/GuildMemberCountStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import LocalActivityStore from "../../../stores/LocalActivityStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import SelfPresenceStore from "../../../stores/SelfPresenceStore.tsx";
import VoiceStateStore from "../../../stores/VoiceStateStore.tsx";
import Constants from "../../../Constants.tsx";
import SpotifyConstants from "../../spotify/SpotifyConstants.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const getActivityJoinabilityDefault = getActivityJoinability;
let _require, c4, c5, channel, hideAllActionSheetsResult, importDefault, type;

let closure_15;
let closure_16;
let closure_17;
let closure_18;
let obj2;
let ConnectedAccountsStore = ConnectedAccountsStore_mod;
({ PlatformTypes: closure_15, UserSettingsSections: closure_16 } = Constants);
({ SpotifyEndpoints: closure_17, SpotifyResourceTypes: closure_18 } = SpotifyConstants);
const jsx = Fragment.jsx;
let obj = { icon: obj2 };
obj2 = { tintColor: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT };
let closure_20 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (user) => {
      let activity;
      let channelId;
      let obj = user(activity[19]);
      const cResult = obj.c(27);
      user = user.user;
      const currentUser = user.currentUser;
      activity = user.activity;
      const application = user.application;
      const onAction = user.onAction;
      const analyticsLocations = currentUser(activity[20])().analyticsLocations;
      let id1;
      const first = cResult[0];
      const tmp4 = currentUser;
      if (application != null) {
        id1 = application.id;
      }
      if (first === id1) {
        let tmp7;
        let tmp16;
        if (cResult[1] === user.id) {
          tmp7 = cResult[2];
        }
        ConnectedAccountsStore = tmp7;
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [];
          cResult[3] = items;
          tmp16 = items;
        } else {
          tmp16 = cResult[3];
        }
        if (cResult[4] === activity) {
          if (cResult[5] === tmp7) {
            let tmp17;
            let tmp19;
            if (cResult[6] === user.id) {
              tmp17 = cResult[7];
            }
            const tmpResult = user(activity[23]);
            const stateFromStores = tmpResult.useStateFromStores(tmp16, tmp17);
            const _Symbol2 = Symbol;
            if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
              const items1 = [analyticsLocations, GuildStore, stateFromStores, , , , , , ,];
              class R {
                constructor() {
                  obj = {
                    isEmbedded: true,
                    user,
                    currentUser,
                    activity,
                    application,
                    channelId: closure_7,
                    ChannelStore: closure_5,
                    GuildStore: closure_8,
                    GuildMemberCountStore: closure_7,
                    RelationshipStore: closure_11,
                    SelectedChannelStore: closure_12,
                    VoiceStateStore: closure_14,
                    PermissionStore: closure_10,
                    LocalActivityStore: closure_9,
                    SelfPresenceStore: closure_13,
                    EmbeddedActivitiesStore: closure_4,
                  };
                  return closure_1(closure_2[24])(obj);
                }
              }
              items1[4] = SelectedChannelStore;
              items1[5] = VoiceStateStore;
              items1[6] = PermissionStore;
              items1[7] = LocalActivityStore;
              items1[8] = SelfPresenceStore;
              items1[9] = onAction;
              cResult[8] = items1;
              tmp19 = items1;
            } else {
              tmp19 = cResult[8];
            }
            if (cResult[9] === activity) {
              if (cResult[10] === application) {
                if (cResult[11] === stateFromStores) {
                  if (cResult[12] === currentUser) {
                    let tmp30;
                    if (cResult[13] === user) {
                      tmp30 = cResult[14];
                    }
                    const tmpResult3 = user(activity[23]);
                    const stateFromStores1 = tmpResult3.useStateFromStores(tmp19, tmp30);
                    if (tmp4(activity[25])(activity)) {
                      if (null != application) {
                        if (stateFromStores1 !== user(activity[24]).ActivityJoinability.CANNOT_JOIN) {
                          let tmp34;
                          if (cResult[15] !== stateFromStores1) {
                            let stringResult;
                            if (stateFromStores1 === user(activity[24]).ActivityJoinability.JOINED) {
                              const intl2 = tmp(tmp2[26]).intl;
                              stringResult = intl2.string(tmp(tmp2[26]).t.DPfdsq);
                            } else {
                              const intl = tmp(tmp2[26]).intl;
                              stringResult = intl.string(tmp(tmp2[26]).t["4i2vj+"]);
                            }
                            cResult[15] = stateFromStores1;
                            cResult[16] = stringResult;
                            class M {
                              constructor() {
                                tmp = onAction({ action: "PRESS_JOIN_BUTTON" });
                                obj = {
                                  applicationId: application.id,
                                  activityChannelId: closure_7,
                                  locationObject: {},
                                  analyticsLocations,
                                };
                                tmp2 = closure_1(closure_2[28])(obj);
                                obj2 = closure_1(closure_2[29]);
                                hideAllActionSheetsResult = obj2.hideAllActionSheets();
                                return;
                              }
                            }
                          }
                          const _Symbol3 = Symbol;
                          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                            const tmp36 = jsx(user(activity[27]).AppsIcon, { size: "sm", color: "white" });
                            cResult[17] = tmp36;
                            tmp34 = tmp36;
                          } else {
                            tmp34 = cResult[17];
                          }
                          if (cResult[18] === analyticsLocations) {
                            if (cResult[19] === application.id) {
                              if (cResult[20] === stateFromStores) {
                                let tmp38;
                                if (cResult[21] === onAction) {
                                  tmp38 = cResult[22];
                                }
                                if (cResult[23] === tmp32) {
                                  if ((cResult[24] === stateFromStores1) === tmp37) {
                                    let tmp40;
                                    if (cResult[25] === tmp38) {
                                      tmp40 = cResult[26];
                                    }
                                    return tmp40;
                                  }
                                }
                                class M {
                                  constructor() {
                                    tmp = onAction({ action: "PRESS_JOIN_BUTTON" });
                                    obj = {
                                      applicationId: application.id,
                                      activityChannelId: closure_7,
                                      locationObject: {},
                                      analyticsLocations,
                                    };
                                    tmp2 = closure_1(closure_2[28])(obj);
                                    obj2 = closure_1(closure_2[29]);
                                    hideAllActionSheetsResult = obj2.hideAllActionSheets();
                                    return;
                                  }
                                }
                                class R {
                                  constructor() {
                                    obj = {
                                      isEmbedded: true,
                                      user,
                                      currentUser,
                                      activity,
                                      application,
                                      channelId: closure_7,
                                      ChannelStore: closure_5,
                                      GuildStore: closure_8,
                                      GuildMemberCountStore: closure_7,
                                      RelationshipStore: closure_11,
                                      SelectedChannelStore: closure_12,
                                      VoiceStateStore: closure_14,
                                      PermissionStore: closure_10,
                                      LocalActivityStore: closure_9,
                                      SelfPresenceStore: closure_13,
                                      EmbeddedActivitiesStore: closure_4,
                                    };
                                    return closure_1(closure_2[24])(obj);
                                  }
                                }
                                const tmp42 = jsx(user(activity[30]).Button, {
                                  text: null,
                                  icon: tmp34,
                                  variant: "active",
                                  disabled: stateFromStores1 === tmp37,
                                  onPress: null,
                                });
                                cResult[23] = tmp32;
                                cResult[24] = stateFromStores1 === tmp37;
                                cResult[25] = tmp38;
                                cResult[26] = tmp42;
                                tmp40 = tmp42;
                              }
                            }
                          }
                          class M {
                            constructor() {
                              tmp = onAction({ action: "PRESS_JOIN_BUTTON" });
                              obj = {
                                applicationId: application.id,
                                activityChannelId: closure_7,
                                locationObject: {},
                                analyticsLocations,
                              };
                              tmp2 = closure_1(closure_2[28])(obj);
                              obj2 = closure_1(closure_2[29]);
                              hideAllActionSheetsResult = obj2.hideAllActionSheets();
                              return;
                            }
                          }
                          cResult[18] = analyticsLocations;
                          class R {
                            constructor() {
                              obj = {
                                isEmbedded: true,
                                user,
                                currentUser,
                                activity,
                                application,
                                channelId: closure_7,
                                ChannelStore: closure_5,
                                GuildStore: closure_8,
                                GuildMemberCountStore: closure_7,
                                RelationshipStore: closure_11,
                                SelectedChannelStore: closure_12,
                                VoiceStateStore: closure_14,
                                PermissionStore: closure_10,
                                LocalActivityStore: closure_9,
                                SelfPresenceStore: closure_13,
                                EmbeddedActivitiesStore: closure_4,
                              };
                              return closure_1(closure_2[24])(obj);
                            }
                          }
                          cResult[19] = application.id;
                          cResult[20] = stateFromStores;
                          cResult[21] = onAction;
                          cResult[22] = M;
                          tmp38 = M;
                        }
                      }
                    }
                    return null;
                  }
                }
              }
            }
            class R {
              constructor() {
                obj = {
                  isEmbedded: true,
                  user,
                  currentUser,
                  activity,
                  application,
                  channelId: closure_7,
                  ChannelStore: closure_5,
                  GuildStore: closure_8,
                  GuildMemberCountStore: closure_7,
                  RelationshipStore: closure_11,
                  SelectedChannelStore: closure_12,
                  VoiceStateStore: closure_14,
                  PermissionStore: closure_10,
                  LocalActivityStore: closure_9,
                  SelfPresenceStore: closure_13,
                  EmbeddedActivitiesStore: closure_4,
                };
                return closure_1(closure_2[24])(obj);
              }
            }
            cResult[9] = activity;
            cResult[10] = application;
            cResult[11] = stateFromStores;
            cResult[12] = currentUser;
            cResult[13] = user;
            cResult[14] = R;
            tmp30 = R;
          }
        }
        class E {
          constructor() {
            obj = { channelId: closure_6, userId: user.id, activity };
            return closure_1(closure_2[22])(obj);
          }
        }
        cResult[4] = activity;
        cResult[5] = tmp7;
        cResult[6] = user.id;
        cResult[7] = E;
        tmp17 = E;
      }
      let id2;
      const getEmbeddedActivityForUserId = onAction.getEmbeddedActivityForUserId;
      const id = user.id;
      if (application != null) {
        id2 = application.id;
      }
      const embeddedActivityForUserId = getEmbeddedActivityForUserId(id, id2);
      let _location;
      const getEmbeddedActivityLocationChannelId = tmp(tmp2[21]).getEmbeddedActivityLocationChannelId;
      user(activity[21]);
      if (embeddedActivityForUserId != null) {
        _location = embeddedActivityForUserId.location;
      }
      const embeddedActivityLocationChannelId = getEmbeddedActivityLocationChannelId(_location);
      let id3;
      if (application != null) {
        id3 = application.id;
      }
      cResult[0] = id3;
      cResult[1] = user.id;
      cResult[2] = embeddedActivityLocationChannelId;
      tmp7 = embeddedActivityLocationChannelId;
    }
  : (user) => {
      let activity;
      let currentUser;
      user = user.user;
      ({ currentUser: importDefault, activity } = user);
      const application = user.application;
      const onAction = user.onAction;
      let channelId;
      let closure_7;
      const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
      let id1;
      const getEmbeddedActivityForUserId = onAction.getEmbeddedActivityForUserId;
      const id = user.id;
      const tmp3 = onAction;
      if (application != null) {
        id1 = application.id;
      }
      const embeddedActivityForUserId = getEmbeddedActivityForUserId(id, id1);
      let _location;
      const getEmbeddedActivityLocationChannelId = user(activity[21]).getEmbeddedActivityLocationChannelId;
      user(activity[21]);
      if (embeddedActivityForUserId != null) {
        _location = embeddedActivityForUserId.location;
      }
      channelId = getEmbeddedActivityLocationChannelId(_location);
      const tmp6Result = user(activity[23]);
      closure_7 = tmp6Result.useStateFromStores([], () => {
        const obj = { channelId, userId: user.id, activity };
        return getActivityChannelIdDefault(obj);
      });
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
        tmp3,
      ];
      const tmp6Result2 = user(activity[23]);
      const stateFromStores = tmp6Result2.useStateFromStores(items, () => {
        const obj = {
          isEmbedded: true,
          user,
          currentUser: importDefault,
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
        };
        return getActivityJoinabilityDefault(obj);
      });
      let tmp12Result = null;
      if (require("isEmbeddedActivity")(activity)) {
        tmp12Result = null;
        if (null != application) {
          tmp12Result = null;
          if (stateFromStores !== user(activity[24]).ActivityJoinability.CANNOT_JOIN) {
            let stringResult;
            const Button = tmp6(activity[30]).Button;
            if (stateFromStores === user(activity[24]).ActivityJoinability.JOINED) {
              const intl2 = tmp6(activity[26]).intl;
              stringResult = intl2.string(tmp6(activity[26]).t.DPfdsq);
            } else {
              const intl = tmp6(activity[26]).intl;
              stringResult = intl.string(tmp6(activity[26]).t["4i2vj+"]);
            }
            tmp12Result = (
              <Button
                text={stringResult}
                icon={jsx(user(activity[27]).AppsIcon, { size: "sm", color: "white" })}
                variant="active"
                disabled={stateFromStores === user(activity[24]).ActivityJoinability.JOINED}
                onPress={function onPress() {
                  onAction({ action: "PRESS_JOIN_BUTTON" });
                  const obj = {
                    applicationId: application.id,
                    activityChannelId,
                    locationObject: {},
                    analyticsLocations,
                  };
                  handleJoinEmbeddedActivityDefault(obj);
                  const obj2 = ActionSheetActionCreatorsDefault;
                  obj2.hideAllActionSheets();
                }}
              />
            );
          }
        }
      }
      return tmp12Result;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (user) => {
      let activity;
      let obj = user(activity[19]);
      const cResult = obj.c(21);
      user = user.user;
      const currentUser = user.currentUser;
      activity = user.activity;
      const application = user.application;
      const onAction = user.onAction;
      const analyticsLocations = currentUser(activity[20])().analyticsLocations;
      if (cResult[0] === application.deepLinkUri) {
        let tmp4;
        let tmp6;
        if (cResult[1] === application.id) {
          tmp4 = cResult[2];
        }
        ConnectedAccountsStore = tmp4;
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
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
          cResult[3] = items;
          tmp6 = items;
        } else {
          tmp6 = cResult[3];
        }
        if (cResult[4] === activity) {
          if (cResult[5] === application) {
            if (cResult[6] === currentUser) {
              let tmp17;
              if (cResult[7] === user) {
                tmp17 = cResult[8];
              }
              const tmpResult = user(activity[23]);
              const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp17);
              if (null != application) {
                if (stateFromStores !== user(activity[24]).ActivityJoinability.CANNOT_JOIN) {
                  let tmp20;
                  if (cResult[9] !== stateFromStores) {
                    if (stateFromStores === user(activity[24]).ActivityJoinability.JOINED) {
                      const string2 = tmp(tmp2[26]).intl.string;
                      class R {
                        constructor() {
                          onAction({ action: "PRESS_JOIN_BUTTON" });
                          const obj = GamesActionCreatorsDefault;
                          const obj2 = {
                            userId: user.id,
                            sessionId: activity.session_id,
                            application,
                            channelId: null,
                            messageId: null,
                            applicationActivity: activity,
                            source: "UserProfile",
                            analyticsLocations,
                          };
                          const joined = obj.join(obj2);
                          const obj3 = ActionSheetActionCreatorsDefault;
                          obj3.hideAllActionSheets();
                        }
                      }
                    } else {
                      const string = tmp(tmp2[26]).intl.string;
                      class R {
                        constructor() {
                          onAction({ action: "PRESS_JOIN_BUTTON" });
                          const obj = GamesActionCreatorsDefault;
                          const obj2 = {
                            userId: user.id,
                            sessionId: activity.session_id,
                            application,
                            channelId: null,
                            messageId: null,
                            applicationActivity: activity,
                            source: "UserProfile",
                            analyticsLocations,
                          };
                          const joined = obj.join(obj2);
                          const obj3 = ActionSheetActionCreatorsDefault;
                          obj3.hideAllActionSheets();
                        }
                      }
                    }
                    class R {
                      constructor() {
                        onAction({ action: "PRESS_JOIN_BUTTON" });
                        const obj = GamesActionCreatorsDefault;
                        const obj2 = {
                          userId: user.id,
                          sessionId: activity.session_id,
                          application,
                          channelId: null,
                          messageId: null,
                          applicationActivity: activity,
                          source: "UserProfile",
                          analyticsLocations,
                        };
                        const joined = obj.join(obj2);
                        const obj3 = ActionSheetActionCreatorsDefault;
                        obj3.hideAllActionSheets();
                      }
                    }
                    cResult[10] = tmp21;
                    tmp20 = tmp21;
                  } else {
                    tmp20 = cResult[10];
                  }
                  if (cResult[11] === activity) {
                    if (cResult[12] === analyticsLocations) {
                      if (cResult[13] === tmp4) {
                        if (cResult[14] === onAction) {
                          let tmp23;
                          if (cResult[15] === user.id) {
                            tmp23 = cResult[16];
                          }
                          class R {
                            constructor() {
                              onAction({ action: "PRESS_JOIN_BUTTON" });
                              const obj = GamesActionCreatorsDefault;
                              const obj2 = {
                                userId: user.id,
                                sessionId: activity.session_id,
                                application,
                                channelId: null,
                                messageId: null,
                                applicationActivity: activity,
                                source: "UserProfile",
                                analyticsLocations,
                              };
                              const joined = obj.join(obj2);
                              const obj3 = ActionSheetActionCreatorsDefault;
                              obj3.hideAllActionSheets();
                            }
                          }
                          cResult[17] = tmp20;
                          cResult[18] = stateFromStores === tmp22;
                          cResult[19] = tmp23;
                          cResult[20] = jsx(user(activity[30]).Button, {
                            text: tmp20,
                            variant: "active",
                            disabled: stateFromStores === tmp22,
                            onPress: tmp23,
                          });
                          const tmp27 = jsx(user(activity[30]).Button, {
                            text: tmp20,
                            variant: "active",
                            disabled: stateFromStores === tmp22,
                            onPress: tmp23,
                          });
                        }
                      }
                    }
                  }
                  class R {
                    constructor() {
                      onAction({ action: "PRESS_JOIN_BUTTON" });
                      const obj = GamesActionCreatorsDefault;
                      const obj2 = {
                        userId: user.id,
                        sessionId: activity.session_id,
                        application,
                        channelId: null,
                        messageId: null,
                        applicationActivity: activity,
                        source: "UserProfile",
                        analyticsLocations,
                      };
                      const joined = obj.join(obj2);
                      const obj3 = ActionSheetActionCreatorsDefault;
                      obj3.hideAllActionSheets();
                    }
                  }
                  cResult[11] = activity;
                  cResult[12] = analyticsLocations;
                  cResult[13] = tmp4;
                  cResult[14] = onAction;
                  cResult[15] = user.id;
                  cResult[16] = R;
                  tmp23 = R;
                }
              }
              return null;
            }
          }
        }
        const fn = function b() {
          const obj = {
            user,
            currentUser,
            activity,
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
          };
          return getActivityJoinabilityDefault(obj);
        };
        cResult[4] = activity;
        cResult[5] = application;
        cResult[6] = currentUser;
        cResult[7] = user;
        cResult[8] = fn;
        tmp17 = fn;
      }
      let obj3 = { id: application.id, deeplink_uri: application.deepLinkUri };
      cResult[0] = application.deepLinkUri;
      cResult[1] = application.id;
      cResult[2] = obj3;
      tmp4 = obj3;
    }
  : (onAction) => {
      let application;
      let currentUser;
      let require;
      let session_id;
      let user;
      ({ user: require, currentUser: importDefault, activity: dependencyMap, application } = onAction);
      onAction = onAction.onAction;
      application = undefined;
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
      const stateFromStores = obj.useStateFromStores(items, () => {
        const obj = {
          user: require,
          currentUser: importDefault,
          activity: dependencyMap,
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
        };
        return getActivityJoinabilityDefault(obj);
      });
      let tmp6Result = null;
      if (null != application) {
        tmp6Result = null;
        if (stateFromStores !== getActivityJoinability.ActivityJoinability.CANNOT_JOIN) {
          let stringResult;
          const Button = components_Button_Button.Button;
          if (stateFromStores === getActivityJoinability.ActivityJoinability.JOINED) {
            const intl2 = intl5.intl;
            stringResult = intl2.string(intl5.t.DPfdsq);
          } else {
            const intl = intl5.intl;
            stringResult = intl.string(intl5.t.VJlc0S);
          }
          tmp6Result = (
            <Button
              text={stringResult}
              variant="active"
              disabled={stateFromStores === getActivityJoinability.ActivityJoinability.JOINED}
              onPress={function onPress() {
                onAction({ action: "PRESS_JOIN_BUTTON" });
                const obj = GamesActionCreatorsDefault;
                const obj2 = {
                  userId: require.id,
                  sessionId: dependencyMap.session_id,
                  application,
                  channelId: null,
                  messageId: null,
                  applicationActivity: dependencyMap,
                  source: "UserProfile",
                  analyticsLocations,
                };
                const joined = obj.join(obj2);
                const obj3 = ActionSheetActionCreatorsDefault;
                obj3.hideAllActionSheets();
              }}
            />
          );
        }
      }
      return tmp6Result;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let activity;
      let onAction;
      let obj = onAction(576);
      const cResult = obj.c(11);
      ({ activity, onAction } = arg0);
      const tmp4 = closure_20();
      const sync_id = activity.sync_id;
      let tmp6 = null;
      const tmp5 = sync_id;
      if (sync_id(10625)(activity)) {
        tmp6 = null;
        if (null != sync_id) {
          let tmp7;
          let tmp9;
          if (cResult[0] !== activity.name) {
            const intl = onAction(1126).intl;
            let obj2 = { platform: activity.name };
            const formatToPlainStringResult = intl.formatToPlainString(onAction(1126).t.LEgD7t, obj2);
            cResult[0] = activity.name;
            cResult[1] = formatToPlainStringResult;
            tmp7 = formatToPlainStringResult;
          } else {
            tmp7 = cResult[1];
          }
          if (cResult[2] !== tmp4.icon) {
            const Icon = onAction(1188).Icon;
            const tmp11 = (
              <Icon size={onAction(1188).Icon.Sizes.SMALL} source={tmp5(7824)} disableColor style={tmp4.icon} />
            );
            cResult[2] = tmp4.icon;
            cResult[3] = tmp11;
            tmp9 = tmp11;
          } else {
            tmp9 = cResult[3];
          }
          if (cResult[4] === onAction) {
            let tmp12;
            if (cResult[5] === sync_id) {
              tmp12 = cResult[6];
            }
            if (cResult[7] === tmp7) {
              if (cResult[8] === tmp9) {
                let tmp14;
                if (cResult[9] === tmp12) {
                  tmp14 = cResult[10];
                }
                tmp6 = tmp14;
              }
            }
            const tmp16 = jsx(onAction(5594).Button, { text: tmp7, icon: tmp9, variant: "secondary", onPress: tmp12 });
            cResult[7] = tmp7;
            cResult[8] = tmp9;
            cResult[9] = tmp12;
            cResult[10] = tmp16;
            tmp14 = tmp16;
          }
          let closure_0 = _asyncToGenerator(async () => {
            let obj4;
            if (c5 === 2) {
              c5 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              let c3;
              try {
                let closure_1;
                c5 = 2;
                if (0 === c4) {
                  if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c5 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    closure_1 = tmp;
                    closure_0 = undefined;
                    closure_0({ action: "PRESS_PLAY_ON_SPOTIFY_BUTTON" });
                    c3 = 1;
                    c4 = 2;
                    c5 = 1;
                    const obj5 = { value: obj4.canOpenSpotifyUrl(), done: false };
                    obj4 = closure_0(dependencyMap[35]);
                    return obj5;
                  }
                } else if (1 === c4) {
                  c3 = 0;
                  c5 = 3;
                  return { value: "IconComponent", done: null };
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c5 = 3;
                  const obj6 = { value, done: true };
                  return obj6;
                } else {
                  let openUrlResult;
                  closure_0 = value;
                  const obj8 = closure_0(dependencyMap[35]);
                  if (closure_0) {
                    openUrlResult = obj8.openUrl(closure_0, constants2.TRACK, closure_1);
                  } else {
                    obj8.attributeInstall();
                    const obj = sync_id(dependencyMap[36]);
                    openUrlResult = obj.openURL(constants.APP_STORE);
                  }
                  c3 = 0;
                  c5 = 3;
                  const obj7 = { value: openUrlResult, done: true };
                  return obj7;
                }
              } catch (tmp18) {
                let closure_2 = tmp18;
                if (0 === c3) {
                  c5 = 3;
                  throw tmp18;
                } else {
                  c4 = 1;
                }
              }
            }
          });
          const fn = function () {
            return closure_0(...arguments);
          };
          cResult[4] = onAction;
          cResult[5] = sync_id;
          cResult[6] = fn;
          tmp12 = fn;
        }
      }
      return tmp6;
    }
  : (arg0) => {
      let activity;
      let require;
      ({ activity, onAction: require } = arg0);
      const sync_id = activity.sync_id;
      const tmp = closure_20();
      let tmp4 = null;
      const tmp2 = sync_id;
      if (sync_id(10625)(activity)) {
        tmp4 = null;
        if (null != sync_id) {
          const Button = components_Button_Button.Button;
          const intl = intl5.intl;
          let obj2 = { platform: activity.name };
          let obj3 = { size: native.Icon.Sizes.SMALL, source: tmp2(7824), disableColor: true, style: tmp.icon };
          const Icon = native.Icon;
          tmp4 = (
            <Button
              text={intl.formatToPlainString(intl5.t.LEgD7t, obj2)}
              icon={null}
              variant="secondary"
              onPress={_asyncToGenerator(async () => {
                let closure_0;
                let closure_1;
                let obj4;
                if (c5 === 2) {
                  c5 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp3 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    const obj2 = { value, done: true };
                    return obj2;
                  } else {
                    return { value: "IconComponent", done: null };
                  }
                } else {
                  let c3;
                  try {
                    let require;
                    c5 = 2;
                    if (0 === c4) {
                      if (arg0 === 1) {
                        c5 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c5 = 3;
                        const obj3 = { value, done: true };
                        return obj3;
                      } else {
                        require = undefined;
                        _require({ action: "PRESS_PLAY_ON_SPOTIFY_BUTTON" });
                        c3 = 1;
                        c4 = 2;
                        c5 = 1;
                        const obj5 = { value: obj4.canOpenSpotifyUrl(), done: false };
                        obj4 = require("UserActivitySpotify");
                        return obj5;
                      }
                    } else if (1 === c4) {
                      c3 = 0;
                      c5 = 3;
                      return { value: "IconComponent", done: null };
                    } else if (arg0 === 1) {
                      c5 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c3 = 0;
                      c5 = 3;
                      const obj6 = { value, done: true };
                      return obj6;
                    } else {
                      let openUrlResult;
                      require = value;
                      const obj8 = require("UserActivitySpotify");
                      if (require) {
                        openUrlResult = obj8.openUrl(require, constants2.TRACK, closure_129_1);
                      } else {
                        obj8.attributeInstall();
                        const obj = tmp(closure_2[36]);
                        openUrlResult = obj.openURL(constants.APP_STORE);
                      }
                      c3 = 0;
                      c5 = 3;
                      const obj7 = { value: openUrlResult, done: true };
                      return obj7;
                    }
                  } catch (tmp18) {
                    closure_2 = tmp18;
                    if (0 === c3) {
                      c5 = 3;
                      throw tmp18;
                    } else {
                      c4 = 1;
                    }
                  }
                }
              })}
            />
          );
        }
      }
      return tmp4;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let activity;
      let closure_1;
      let onAction;
      let tmp4;
      let obj = onAction(576);
      const cResult = obj.c(6);
      ({ activity, onAction } = arg0);
      if (cResult[0] !== activity) {
        const tmp6 = getStreamURLDefault(activity);
        cResult[0] = activity;
        cResult[1] = tmp6;
        tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      importDefault = tmp4;
      let tmp7 = null;
      if (isStreamingDefault(activity)) {
        tmp7 = null;
        if (null != tmp4) {
          let tmp9;
          const _Symbol = Symbol;
          if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = onAction(1126).intl;
            const stringResult = intl.string(onAction(1126).t.I6JG46);
            cResult[2] = stringResult;
            tmp9 = stringResult;
          } else {
            tmp9 = cResult[2];
          }
          if (cResult[3] === onAction) {
            let tmp11;
            if (cResult[4] === tmp4) {
              tmp11 = cResult[5];
            }
            tmp7 = tmp11;
          }
          const tmp13 = jsx(onAction(5594).Button, {
            text: tmp9,
            variant: "secondary",
            onPress() {
              onAction({ action: "PRESS_WATCH_BUTTON" });
              const obj = LinkingDefault;
              obj.openURL(closure_1);
            },
          });
          cResult[3] = onAction;
          cResult[4] = tmp4;
          cResult[5] = tmp13;
          tmp11 = tmp13;
        }
      }
      return tmp7;
    }
  : (arg0) => {
      let activity;
      let closure_1;
      let require;
      ({ activity, onAction: require } = arg0);
      const tmp2 = getStreamURLDefault(activity);
      importDefault = tmp2;
      let tmp3 = null;
      if (isStreamingDefault(activity)) {
        tmp3 = null;
        if (null != tmp2) {
          const Button = components_Button_Button.Button;
          const intl = intl5.intl;
          tmp3 = (
            <Button
              text={intl.string(intl5.t.I6JG46)}
              variant="secondary"
              onPress={function onPress() {
                _require({ action: "PRESS_WATCH_BUTTON" });
                const obj = LinkingDefault;
                obj.openURL(closure_1);
              }}
            />
          );
        }
      }
      return tmp3;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let isInChannel;
      let newestAnalyticsLocation;
      let onAction;
      let tmp4;
      let obj = channel(newestAnalyticsLocation[19]);
      const cResult = obj.c(21);
      const tmp = channel;
      channel = channel.channel;
      ({ isInChannel, onAction } = channel);
      const tmp2 = newestAnalyticsLocation;
      newestAnalyticsLocation = onAction(newestAnalyticsLocation[20])().newestAnalyticsLocation;
      if (cResult[0] !== channel) {
        const isGuildStageVoiceResult = channel.isGuildStageVoice();
        cResult[0] = channel;
        cResult[1] = isGuildStageVoiceResult;
        tmp4 = isGuildStageVoiceResult;
      } else {
        tmp4 = cResult[1];
      }
      let closure_3 = tmp4;
      if (cResult[2] === channel) {
        let tmp6;
        if (cResult[3] === tmp4) {
          tmp6 = cResult[4];
        }
        if (cResult[5] === channel) {
          let tmp7;
          if (cResult[6] === tmp4) {
            tmp7 = cResult[7];
          }
          if (cResult[8] === isInChannel) {
            if (cResult[9] === tmp7) {
              let tmp8;
              if (cResult[10] === tmp6) {
                tmp8 = cResult[11];
              }
              let str = "active";
              if (isInChannel) {
                str = "secondary";
              }
              if (cResult[12] === channel) {
                if (cResult[13] === tmp4) {
                  if (cResult[14] === newestAnalyticsLocation) {
                    let tmp10;
                    if (cResult[15] === onAction) {
                      tmp10 = cResult[16];
                    }
                    if (cResult[17] === tmp8) {
                      if (cResult[18] === str) {
                        let tmp11;
                        if (cResult[19] === tmp10) {
                          tmp11 = cResult[20];
                        }
                        return tmp11;
                      }
                    }
                    const tmp13 = jsx(tmp(tmp2[30]).Button, { text: tmp8, variant: str, grow: true, onPress: tmp10 });
                    cResult[17] = tmp8;
                    cResult[18] = str;
                    cResult[19] = tmp10;
                    cResult[20] = tmp13;
                    tmp11 = tmp13;
                  }
                }
              }
              const fn2 = function f() {
                onAction({ action: "PRESS_JOIN_CALL_BUTTON" });
                const obj = ActionSheetActionCreatorsDefault;
                obj.hideAllActionSheets();
                const obj2 = ModalActionCreatorsDefault;
                obj2.popAll();
                const obj3 = RootNavigationRef;
                const rootNavigationRef = obj3.getRootNavigationRef();
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
                if (closure_3) {
                  const tmp5Result = StageChannelModalActionCreators;
                  tmp5Result.connectAndOpen(channel);
                } else {
                  const tmp5Result2 = PrivateChannelCallUtils;
                  tmp5Result2.openGuildVoiceModal(channel, newestAnalyticsLocation);
                }
              };
              cResult[12] = channel;
              cResult[13] = tmp4;
              cResult[14] = newestAnalyticsLocation;
              cResult[15] = onAction;
              cResult[16] = fn2;
              tmp10 = fn2;
            }
          }
          const tmp9 = isInChannel ? tmp6() : tmp7();
          cResult[8] = isInChannel;
          cResult[9] = tmp7;
          cResult[10] = tmp6;
          cResult[11] = tmp9;
          tmp8 = tmp9;
        }
        const fn = function v() {
          if (!channel.isDM()) {
            let stringResult;
            if (!channel.isGroupDM()) {
              const intl = intl5.intl;
              const string = intl.string;
              const t = intl5.t;
              if (closure_3) {
                stringResult = string(t["7vb2cc"]);
              } else {
                stringResult = string(t["96ANUN"]);
              }
            }
            return stringResult;
          }
          const intl2 = intl5.intl;
          stringResult = intl2.string(intl5.t.ozoE2A);
        };
        cResult[5] = channel;
        cResult[6] = tmp4;
        cResult[7] = fn;
        tmp7 = fn;
      }
      class S {
        constructor() {
          if (!channel.isDM()) {
            let stringResult;
            if (!channel.isGroupDM()) {
              const intl = intl5.intl;
              const string = intl.string;
              const t = intl5.t;
              if (closure_3) {
                stringResult = string(t.Acqcot);
              } else {
                stringResult = string(t.BXxdl7);
              }
            }
            return stringResult;
          }
          const intl2 = intl5.intl;
          stringResult = intl2.string(intl5.t["7hwn2A"]);
        }
      }
      cResult[2] = channel;
      cResult[3] = tmp4;
      cResult[4] = S;
      tmp6 = S;
    }
  : (channel) => {
      let isInChannel;
      let stringResult;
      channel = channel.channel;
      ({ isInChannel, onAction: importDefault } = channel);
      let newestAnalyticsLocation;
      newestAnalyticsLocation = require("useAnalyticsLocations")().newestAnalyticsLocation;
      const isGuildStageVoiceResult = channel.isGuildStageVoice();
      let c3 = isGuildStageVoiceResult;
      const Button = channel(newestAnalyticsLocation[30]).Button;
      const isDMResult = channel.isDM();
      if (isInChannel) {
        if (!isDMResult) {
          let string2Result;
          if (!channel.isGroupDM()) {
            const intl3 = tmp4(tmp[26]).intl;
            const string2 = intl3.string;
            const t2 = tmp4(tmp[26]).t;
            if (isGuildStageVoiceResult) {
              string2Result = string2(t2.Acqcot);
            } else {
              string2Result = string2(t2.BXxdl7);
            }
          }
          stringResult = string2Result;
        }
        const intl4 = tmp4(tmp[26]).intl;
        string2Result = intl4.string(tmp4(tmp[26]).t["7hwn2A"]);
      } else {
        if (!isDMResult) {
          if (!channel.isGroupDM()) {
            const intl = tmp4(tmp[26]).intl;
            const string = intl.string;
            const t = tmp4(tmp[26]).t;
            if (isGuildStageVoiceResult) {
              stringResult = string(t["7vb2cc"]);
            } else {
              stringResult = string(t["96ANUN"]);
            }
          }
        }
        const intl2 = tmp4(tmp[26]).intl;
        stringResult = intl2.string(tmp4(tmp[26]).t.ozoE2A);
      }
      let str = "active";
      if (isInChannel) {
        str = "secondary";
      }
      return (
        <Button
          text={stringResult}
          variant={str}
          grow
          onPress={function onPress() {
            importDefault({ action: "PRESS_JOIN_CALL_BUTTON" });
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideAllActionSheets();
            const obj2 = ModalActionCreatorsDefault;
            obj2.popAll();
            const obj3 = RootNavigationRef;
            const rootNavigationRef = obj3.getRootNavigationRef();
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
              const tmp5Result = StageChannelModalActionCreators;
              tmp5Result.connectAndOpen(channel);
            } else {
              const tmp5Result2 = PrivateChannelCallUtils;
              tmp5Result2.openGuildVoiceModal(channel, newestAnalyticsLocation);
            }
          }}
        />
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (type) => {
      let first;
      let onAction;
      let tmp8;
      let obj = require("react");
      const cResult = obj.c(25);
      type = type.type;
      onAction = type.onAction;
      const tmp4 = closure_20();
      const newestAnalyticsLocation = type(onAction[20])().newestAnalyticsLocation;
      const tmp5 = type;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConnectedAccountsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== type) {
        const fn = function o() {
          return null != ConnectedAccountsStore.getAccount(null, type);
        };
        cResult[1] = type;
        cResult[2] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      let tmp9 = null;
      const tmpResult = tmp(tmp2[23]);
      if (!tmpResult.useStateFromStores(first, tmp8)) {
        let tmp15;
        let tmp14;
        let tmp13;
        let tmp11;
        let tmp10;
        if (cResult[3] !== type) {
          const tmp5Result = tmp5(onAction[43]);
          const value = tmp5Result.get(type);
          _require = value;
          const Button = tmp(tmp2[30]).Button;
          const intl = tmp(tmp2[26]).intl;
          let obj2 = { platform: value.name };
          const formatToPlainStringResult = intl.formatToPlainString(require("intl").t.XWSHTb, obj2);
          const Icon = tmp(tmp2[33]).Icon;
          const SMALL = tmp(tmp2[33]).Icon.Sizes.SMALL;
          const tmpResult2 = require("AvatarUtils");
          const source = tmpResult2.makeSource(value.icon.whitePNG);
          cResult[3] = type;
          cResult[4] = Icon;
          cResult[5] = Button;
          cResult[6] = value;
          cResult[7] = SMALL;
          cResult[8] = source;
          cResult[9] = formatToPlainStringResult;
          tmp15 = formatToPlainStringResult;
          tmp14 = source;
          tmp13 = SMALL;
          tmp11 = Button;
          tmp10 = Icon;
        } else {
          tmp10 = cResult[4];
          tmp11 = cResult[5];
          _require = cResult[6];
          tmp13 = cResult[7];
          tmp14 = cResult[8];
          tmp15 = cResult[9];
        }
        if (cResult[10] === tmp10) {
          if (cResult[11] === tmp4.icon) {
            if (cResult[12] === tmp13) {
              let tmp19;
              if (cResult[13] === tmp14) {
                tmp19 = cResult[14];
              }
              if (cResult[15] === newestAnalyticsLocation) {
                if (cResult[16] === onAction) {
                  if (cResult[17] === tmp12.type) {
                    let tmp22;
                    if (cResult[18] === type) {
                      tmp22 = cResult[19];
                    }
                    if (cResult[20] === tmp11) {
                      if (cResult[21] === tmp15) {
                        if (cResult[22] === tmp19) {
                          let tmp23;
                          if (cResult[23] === tmp22) {
                            tmp23 = cResult[24];
                          }
                          tmp9 = tmp23;
                        }
                      }
                    }
                    const tmp25 = <tmp11 text={tmp15} icon={tmp19} variant="secondary" onPress={tmp22} />;
                    cResult[20] = tmp11;
                    cResult[21] = tmp15;
                    cResult[22] = tmp19;
                    cResult[23] = tmp22;
                    cResult[24] = tmp25;
                    tmp23 = tmp25;
                  }
                }
              }
              const fn2 = function p() {
                let str = "PRESS_CONNECT_XBOX_BUTTON";
                if (type === constants.PLAYSTATION) {
                  str = "PRESS_CONNECT_PLAYSTATION_BUTTON";
                }
                onAction({ action: str });
                let obj = {
                  platformType: type.type,
                  location: newestAnalyticsLocation,
                  onClose() {
                    const obj = type(onAction[46]);
                    const obj2 = { screen: constants.CONNECTIONS };
                    return obj.openUserSettings(obj2);
                  },
                };
                authorizeConnectionDefault(obj);
              };
              cResult[15] = newestAnalyticsLocation;
              cResult[16] = onAction;
              cResult[17] = tmp12.type;
              cResult[18] = type;
              cResult[19] = fn2;
              tmp22 = fn2;
            }
          }
        }
        const tmp21 = <tmp10 size={tmp13} source={tmp14} disableColor style={tmp4.icon} />;
        cResult[10] = tmp10;
        cResult[11] = tmp4.icon;
        cResult[12] = tmp13;
        cResult[13] = tmp14;
        cResult[14] = tmp21;
        tmp19 = tmp21;
      }
      return tmp9;
    }
  : (type) => {
      let tmp4Result;
      type = type.type;
      const onAction = type.onAction;
      let newestAnalyticsLocation;
      let c3;
      const tmp = closure_20();
      newestAnalyticsLocation = onAction(newestAnalyticsLocation[20])().newestAnalyticsLocation;
      let obj = type(newestAnalyticsLocation[23]);
      const items = [ConnectedAccountsStore];
      const tmp2 = onAction;
      if (obj.useStateFromStores(items, () => null != ConnectedAccountsStore.getAccount(null, type))) {
        return null;
      } else {
        const tmp2Result = tmp2(newestAnalyticsLocation[43]);
        const value = tmp2Result.get(type);
        c3 = value;
        const Button = tmp4(tmp3[30]).Button;
        const intl = tmp4(tmp3[26]).intl;
        const obj3 = { platform: value.name };
        ({
          size: type(newestAnalyticsLocation[33]).Icon.Sizes.SMALL,
          source: tmp4Result.makeSource(value.icon.whitePNG),
          disableColor: true,
          style: tmp.icon,
        });
        const Icon = tmp4(tmp3[33]).Icon;
        tmp4Result = type(newestAnalyticsLocation[44]);
        return (
          <Button
            text={intl.formatToPlainString(type(newestAnalyticsLocation[26]).t.XWSHTb, obj3)}
            icon={null}
            variant="secondary"
            onPress={function onPress() {
              let str = "PRESS_CONNECT_XBOX_BUTTON";
              if (type === constants.PLAYSTATION) {
                str = "PRESS_CONNECT_PLAYSTATION_BUTTON";
              }
              onAction({ action: str });
              let obj = {
                platformType: type.type,
                location: newestAnalyticsLocation,
                onClose() {
                  const obj = type(newestAnalyticsLocation[46]);
                  const obj2 = { screen: constants.CONNECTIONS };
                  return obj.openUserSettings(obj2);
                },
              };
              authorizeConnectionDefault(obj);
            }}
          />
        );
      }
    };
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityButtons.tsx");

export const JoinActivityButton = tmp5;
export const JoinGameActivityButton = tmp6;
export const PlayOnSpotifyButton = tmp7;
export const WatchActivityButton = tmp8;
export const VoiceChannelButtons = tmp9;
export const ConnectPlatformButton = tmp10;
export const CustomActivityButton = function CustomActivityButton(index) {
  let activity;
  let require;
  ({ user: require, activity } = index);
  index = index.index;
  const onAction = index.onAction;
  let tmp = null;
  if (null != activity.buttons) {
    tmp = null;
    if (index < activity.buttons.length) {
      let stringResult;
      const tmp4 = index;
      const Button = require("components/Button/Button").Button;
      if (activity(index[47])(activity)) {
        const intl = require("intl").intl;
        stringResult = intl.string(require("intl").t.I6JG46);
      } else {
        stringResult = activity.buttons[index];
      }
      tmp = (
        <Button
          text={stringResult}
          variant="secondary"
          onPress={onAction(function* () {
            let closure_0;
            let closure_1;
            let closure_2;
            let obj9;
            if (c5 === 2) {
              c5 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              let tmp17;
              let c3;
              try {
                let tmp;
                let href;
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
                    id = undefined;
                    tmp = undefined;
                    tmp17 = undefined;
                    href = undefined;
                    onAction({ action: "PRESS_CUSTOM_BUTTON" });
                    c3 = 1;
                    c4 = 2;
                    c5 = 1;
                    const obj5 = { value: obj9.getMetadata(activity, require.id), done: false };
                    obj9 = id(tmp17[48]);
                    return obj5;
                  }
                } else {
                  if (1 === c4) {
                    c3 = 0;
                  } else if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 0;
                    c5 = 3;
                    const obj6 = { value, done: true };
                    return obj6;
                  } else {
                    id = value;
                    if (id.button_urls.length <= closure_129_2) {
                      c3 = 0;
                      c5 = 3;
                      return { value: "IconComponent", done: null };
                    } else {
                      tmp = id.button_urls[closure_129_2];
                      if (typeof tmp !== "string") {
                        c3 = 0;
                        c5 = 3;
                        return { value: "IconComponent", done: null };
                      } else {
                        const obj8 = tmp(tmp17[49]);
                        tmp17 = obj8.safeParseWithQuery(tmp);
                        let protocol;
                        if (tmp17 != null) {
                          protocol = tmp17.protocol;
                        }
                        if (null != protocol) {
                          let hostname;
                          if (tmp17 != null) {
                            hostname = tmp17.hostname;
                          }
                          if (null != hostname) {
                            let obj = tmp(tmp17[49]);
                            href = obj.format(tmp17);
                            const obj7 = {
                              href,
                              onConfirm() {
                                const obj = activity(index[36]);
                                return obj.openURL(href);
                              },
                              trusted: false,
                            };
                            const obj2 = id(tmp17[50]);
                            obj2.handleClick(obj7);
                            c3 = 0;
                          }
                        }
                        c3 = 0;
                        c5 = 3;
                        return { value: "IconComponent", done: null };
                      }
                    }
                  }
                  c5 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp17) {
                if (0 === c3) {
                  c5 = 3;
                  throw tmp17;
                } else {
                  c4 = 1;
                }
              }
            }
          })}
        />
      );
    }
  }
  return tmp;
};
