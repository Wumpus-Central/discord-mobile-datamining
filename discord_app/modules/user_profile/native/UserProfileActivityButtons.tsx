// === Module 12874: UserProfileActivityButtons ===

// Module 12874 (UserProfileActivityButtons)
import useStateFromStores from "useStateFromStores" /* 573 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import LinkingDefault from "Linking" /* 4571 */;
import RootNavigationRef from "RootNavigationRef" /* 4743 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 5103 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6664 */;
import isStreamingDefault from "isStreaming" /* 7942 */;
import StageChannelModalActionCreators from "StageChannelModalActionCreators" /* 8102 */;
import authorizeConnectionDefault from "authorizeConnection" /* 8764 */;
import handleJoinEmbeddedActivityDefault from "handleJoinEmbeddedActivity" /* 9083 */;
import GamesActionCreatorsDefault from "GamesActionCreators" /* 11410 */;
import getActivityChannelIdDefault from "getActivityChannelId" /* 12875 */;
import getActivityJoinability from "getActivityJoinability" /* 12876 */;
import getStreamURLDefault from "getStreamURL" /* 12878 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5447 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4786 */;
import GuildStore from "GuildStore" /* 2074 */;
import LocalActivityStore from "LocalActivityStore" /* 11129 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5445 */;
import VoiceStateStore from "VoiceStateStore" /* 4915 */;

const require = globalThis.__r;
const getActivityJoinabilityDefault = getActivityJoinability;

require = fn;
const Constants = fn(1085);
({ PlatformTypes: closure_15, UserSettingsSections: closure_16 } = Constants);
const SpotifyConstants = fn(8026);
({ SpotifyEndpoints: closure_17, SpotifyResourceTypes: closure_18 } = SpotifyConstants);
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj2 = { icon: { tintColor: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT } };
let closure_20 = createStyles.createStyles(obj2);
fn(558);
let obj3 = { tintColor: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT };
let ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  const cResult = user(activity[19]).c(27);
  user = user.user;
  const currentUser = user.currentUser;
  activity = user.activity;
  const application = user.application;
  const onAction = user.onAction;
  const analyticsLocations = currentUser(activity[20])().analyticsLocations;
  let id;
  if (application != null) {
    id = application.id;
  }
  if (cResult[0] === id) {
    if (cResult[1] === user.id) {
      let tmp6 = cResult[2];
    }
    ConnectedAccountsStore = tmp6;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [];
      cResult[3] = items;
      let tmp14 = items;
    } else {
      tmp14 = cResult[3];
    }
    if (cResult[4] === activity) {
      if (cResult[5] === tmp6) {
        if (cResult[6] === user.id) {
          let tmp15 = cResult[7];
        }
        const stateFromStores = tmp(tmp2[23]).useStateFromStores(tmp14, tmp15);
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [analyticsLocations, GuildStore, stateFromStores, , , , , , , ];
          class R {
            constructor() {
              obj = { isEmbedded: true, user, currentUser, activity, application, channelId: closure_7, ChannelStore: closure_5, GuildStore: closure_8, GuildMemberCountStore: closure_7, RelationshipStore: closure_11, SelectedChannelStore: closure_12, VoiceStateStore: closure_14, PermissionStore: closure_10, LocalActivityStore: closure_9, SelfPresenceStore: closure_13, EmbeddedActivitiesStore: closure_4 };
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
          let tmp17 = items1;
        } else {
          tmp17 = cResult[8];
        }
        if (cResult[9] === activity) {
          if (cResult[10] === application) {
            if (cResult[11] === stateFromStores) {
              if (cResult[12] === currentUser) {
                if (cResult[13] === user) {
                  let tmp28 = cResult[14];
                }
                const stateFromStores1 = tmp(tmp2[23]).useStateFromStores(tmp17, tmp28);
                if (tmp4(tmp2[25])(activity)) {
                  if (null != application) {
                    if (stateFromStores1 !== tmp(tmp2[24]).ActivityJoinability.CANNOT_JOIN) {
                      if (cResult[15] !== stateFromStores1) {
                        if (stateFromStores1 === tmp(tmp2[24]).ActivityJoinability.JOINED) {
                          const intl2 = tmp(tmp2[26]).intl;
                          let stringResult = intl2.string(tmp(tmp2[26]).t.DPfdsq);
                        } else {
                          const intl = tmp(tmp2[26]).intl;
                          stringResult = intl.string(tmp(tmp2[26]).t["4i2vj+"]);
                        }
                        cResult[15] = stateFromStores1;
                        cResult[16] = stringResult;
                      } else {
                        const _Symbol3 = Symbol;
                        if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                          const tmp35 = jsx(tmp(tmp2[27]).AppsIcon, { size: "sm", color: "white" });
                          cResult[17] = tmp35;
                          let tmp33 = tmp35;
                        } else {
                          tmp33 = cResult[17];
                        }
                        if (cResult[18] === analyticsLocations) {
                          if (cResult[19] === application.id) {
                            if (cResult[20] === stateFromStores) {
                              if (cResult[21] === onAction) {
                                let tmp37 = cResult[22];
                              }
                              if (cResult[23] === tmp30) {
                                if (cResult[24] === tmp38) {
                                  if (cResult[25] === tmp37) {
                                    let tmp39 = cResult[26];
                                  }
                                  return tmp39;
                                }
                              }
                              const obj2 = { text: null, icon: null, variant: "active", disabled: null, onPress: null };
                              class M {
                                constructor() {
                                  tmp = onAction({ action: "PRESS_JOIN_BUTTON" });
                                  obj = { applicationId: application.id, activityChannelId: closure_7, locationObject: {}, analyticsLocations };
                                  tmp2 = closure_1(closure_2[28])(obj);
                                  obj2 = closure_1(closure_2[29]);
                                  hideAllActionSheetsResult = obj2.hideAllActionSheets();
                                  return;
                                }
                              }
                              obj2.icon = tmp33;
                              obj2.disabled = stateFromStores1 === tmp36;
                              class R {
                                constructor() {
                                  obj = { isEmbedded: true, user, currentUser, activity, application, channelId: closure_7, ChannelStore: closure_5, GuildStore: closure_8, GuildMemberCountStore: closure_7, RelationshipStore: closure_11, SelectedChannelStore: closure_12, VoiceStateStore: closure_14, PermissionStore: closure_10, LocalActivityStore: closure_9, SelfPresenceStore: closure_13, EmbeddedActivitiesStore: closure_4 };
                                  return closure_1(closure_2[24])(obj);
                                }
                              }
                              const tmp41 = jsx(tmp(tmp2[30]).Button, { text: null, icon: null, variant: "active", disabled: null, onPress: null });
                              cResult[23] = tmp30;
                              cResult[24] = stateFromStores1 === tmp36;
                              cResult[25] = tmp37;
                              cResult[26] = tmp41;
                              tmp39 = tmp41;
                            }
                          }
                        }
                        class M {
                          constructor() {
                            tmp = onAction({ action: "PRESS_JOIN_BUTTON" });
                            obj = { applicationId: application.id, activityChannelId: closure_7, locationObject: {}, analyticsLocations };
                            tmp2 = closure_1(closure_2[28])(obj);
                            obj2 = closure_1(closure_2[29]);
                            hideAllActionSheetsResult = obj2.hideAllActionSheets();
                            return;
                          }
                        }
                        cResult[18] = analyticsLocations;
                        class R {
                          constructor() {
                            obj = { isEmbedded: true, user, currentUser, activity, application, channelId: closure_7, ChannelStore: closure_5, GuildStore: closure_8, GuildMemberCountStore: closure_7, RelationshipStore: closure_11, SelectedChannelStore: closure_12, VoiceStateStore: closure_14, PermissionStore: closure_10, LocalActivityStore: closure_9, SelfPresenceStore: closure_13, EmbeddedActivitiesStore: closure_4 };
                            return closure_1(closure_2[24])(obj);
                          }
                        }
                        cResult[19] = application.id;
                        cResult[20] = stateFromStores;
                        cResult[21] = onAction;
                        cResult[22] = M;
                        tmp37 = M;
                      }
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
            obj = { isEmbedded: true, user, currentUser, activity, application, channelId: closure_7, ChannelStore: closure_5, GuildStore: closure_8, GuildMemberCountStore: closure_7, RelationshipStore: closure_11, SelectedChannelStore: closure_12, VoiceStateStore: closure_14, PermissionStore: closure_10, LocalActivityStore: closure_9, SelfPresenceStore: closure_13, EmbeddedActivitiesStore: closure_4 };
            return closure_1(closure_2[24])(obj);
          }
        }
        cResult[9] = activity;
        cResult[10] = application;
        cResult[11] = stateFromStores;
        cResult[12] = currentUser;
        cResult[13] = user;
        cResult[14] = R;
        tmp28 = R;
        const tmpResult = tmp(tmp2[23]);
      }
    }
    class E {
      constructor() {
        obj = { channelId: closure_6, userId: user.id, activity };
        return closure_1(closure_2[22])(obj);
      }
    }
    cResult[4] = activity;
    cResult[5] = tmp6;
    cResult[6] = user.id;
    cResult[7] = E;
    tmp15 = E;
  }
  let id1;
  if (application != null) {
    id1 = application.id;
  }
  const embeddedActivityForUserId = onAction.getEmbeddedActivityForUserId(user.id, id1);
  const obj = user(activity[19]);
  tmp4 = currentUser;
  let _location;
  if (embeddedActivityForUserId != null) {
    _location = embeddedActivityForUserId.location;
  }
  const embeddedActivityLocationChannelId = user(activity[21]).getEmbeddedActivityLocationChannelId(_location);
  let id2;
  if (application != null) {
    id2 = application.id;
  }
  cResult[0] = id2;
  cResult[1] = user.id;
  cResult[2] = embeddedActivityLocationChannelId;
  tmp6 = embeddedActivityLocationChannelId;
  const tmpResult4 = user(activity[21]);
}) : ((user) => {
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
  channelId = user(JOINED[21]).getEmbeddedActivityLocationChannelId(_location);
  const obj = user(JOINED[21]);
  const tmp2 = onAction;
  closure_7 = user(JOINED[23]).useStateFromStores([], () => getActivityChannelIdDefault({ channelId, userId: user.id, activity }));
  const tmp5Result = user(JOINED[23]);
  const items = [analyticsLocations, GuildStore, closure_7, RelationshipStore, SelectedChannelStore, VoiceStateStore, PermissionStore, LocalActivityStore, SelfPresenceStore, tmp2];
  const stateFromStores = user(JOINED[23]).useStateFromStores(items, () => getActivityJoinabilityDefault({ isEmbedded: true, user, currentUser, activity, application, channelId, ChannelStore, GuildStore, GuildMemberCountStore, RelationshipStore, SelectedChannelStore, VoiceStateStore, PermissionStore, LocalActivityStore, SelfPresenceStore, EmbeddedActivitiesStore }));
  let tmp8 = null;
  if (require("isEmbeddedActivity")(activity)) {
    tmp8 = null;
    if (null != application) {
      tmp8 = null;
      if (stateFromStores !== tmp5(JOINED[24]).ActivityJoinability.CANNOT_JOIN) {
        if (stateFromStores === tmp5(JOINED[24]).ActivityJoinability.JOINED) {
          const intl2 = tmp5(JOINED[26]).intl;
          let stringResult = intl2.string(tmp5(JOINED[26]).t.DPfdsq);
        } else {
          const intl = tmp5(JOINED[26]).intl;
          stringResult = intl.string(tmp5(JOINED[26]).t["4i2vj+"]);
        }
        const obj2 = { text: stringResult, icon: jsx(tmp5(JOINED[27]).AppsIcon, { size: "sm", color: "white" }), variant: "active", disabled: null, onPress: null };
        JOINED = tmp5(JOINED[24]).ActivityJoinability.JOINED;
        obj2.disabled = stateFromStores === JOINED;
        obj2.onPress = function onPress() {
          onAction({ action: "PRESS_JOIN_BUTTON" });
          handleJoinEmbeddedActivityDefault({ applicationId: application.id, activityChannelId, locationObject: {}, analyticsLocations });
          ActionSheetActionCreatorsDefault.hideAllActionSheets();
        };
        jsx(tmp5(JOINED[30]).Button, { text: stringResult, icon: jsx(tmp5(JOINED[27]).AppsIcon, { size: "sm", color: "white" }), variant: "active", disabled: null, onPress: null });
      }
    }
  }
  return tmp8;
});
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  const cResult = user(activity[19]).c(21);
  user = user.user;
  const currentUser = user.currentUser;
  activity = user.activity;
  const application = user.application;
  const onAction = user.onAction;
  const analyticsLocations = currentUser(activity[20])().analyticsLocations;
  if (cResult[0] === application.deepLinkUri) {
    if (cResult[1] === application.id) {
      let tmp4 = cResult[2];
    }
    ConnectedAccountsStore = tmp4;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [analyticsLocations, GuildStore, GuildMemberCountStore, RelationshipStore, SelectedChannelStore, VoiceStateStore, PermissionStore, LocalActivityStore, SelfPresenceStore, onAction];
      cResult[3] = items;
      let tmp6 = items;
    } else {
      tmp6 = cResult[3];
    }
    if (cResult[4] === activity) {
      if (cResult[5] === application) {
        if (cResult[6] === currentUser) {
          if (cResult[7] === user) {
            let tmp17 = cResult[8];
          }
          const stateFromStores = tmp(tmp2[23]).useStateFromStores(tmp6, tmp17);
          if (null != application) {
            if (stateFromStores !== tmp(tmp2[24]).ActivityJoinability.CANNOT_JOIN) {
              if (cResult[9] !== stateFromStores) {
                if (stateFromStores === tmp(tmp2[24]).ActivityJoinability.JOINED) {
                  const intl2 = tmp(tmp2[26]).intl;
                  let stringResult = intl2.string(tmp(tmp2[26]).t.DPfdsq);
                } else {
                  const intl = tmp(tmp2[26]).intl;
                  stringResult = intl.string(tmp(tmp2[26]).t.VJlc0S);
                }
                cResult[9] = stateFromStores;
                cResult[10] = stringResult;
              } else {
                if (cResult[11] === activity) {
                  if (cResult[12] === analyticsLocations) {
                    if (cResult[13] === tmp4) {
                      if (cResult[14] === onAction) {
                        if (cResult[15] === user.id) {
                          let tmp24 = cResult[16];
                        }
                        class R {
                          constructor() {
                            tmp = onAction({ action: "PRESS_JOIN_BUTTON" });
                            obj = closure_1(closure_2[31]);
                            obj1 = { userId: user.id, sessionId: activity.session_id, application: closure_6, channelId: null, messageId: null, applicationActivity: activity, source: "UserProfile", analyticsLocations };
                            joined = obj.join(obj1);
                            obj3 = closure_1(closure_2[29]);
                            hideAllActionSheetsResult = obj3.hideAllActionSheets();
                            return;
                          }
                        }
                        let obj2 = { text: tmp20, variant: "active", disabled: stateFromStores === tmp23, onPress: tmp24 };
                        const tmp28 = jsx(tmp(tmp2[30]).Button, { text: tmp20, variant: "active", disabled: stateFromStores === tmp23, onPress: tmp24 });
                        cResult[17] = tmp20;
                        cResult[18] = stateFromStores === tmp23;
                        cResult[19] = tmp24;
                        cResult[20] = tmp28;
                      }
                    }
                  }
                }
                class R {
                  constructor() {
                    tmp = onAction({ action: "PRESS_JOIN_BUTTON" });
                    obj = closure_1(closure_2[31]);
                    obj1 = { userId: user.id, sessionId: activity.session_id, application: closure_6, channelId: null, messageId: null, applicationActivity: activity, source: "UserProfile", analyticsLocations };
                    joined = obj.join(obj1);
                    obj3 = closure_1(closure_2[29]);
                    hideAllActionSheetsResult = obj3.hideAllActionSheets();
                    return;
                  }
                }
                cResult[11] = activity;
                cResult[12] = analyticsLocations;
                cResult[13] = tmp4;
                cResult[14] = onAction;
                cResult[15] = user.id;
                cResult[16] = R;
                tmp24 = R;
              }
            }
          }
          return null;
        }
      }
    }
    const fn = function b() {
      return getActivityJoinabilityDefault({ user, currentUser, activity, application, channelId: null, isEmbedded: false, ChannelStore, GuildStore, GuildMemberCountStore, RelationshipStore, SelectedChannelStore, VoiceStateStore, PermissionStore, LocalActivityStore, SelfPresenceStore, EmbeddedActivitiesStore });
    };
    cResult[4] = activity;
    cResult[5] = application;
    cResult[6] = currentUser;
    cResult[7] = user;
    cResult[8] = fn;
    tmp17 = fn;
  }
  const obj3 = { id: application.id, deeplink_uri: application.deepLinkUri };
  cResult[0] = application.deepLinkUri;
  cResult[1] = application.id;
  cResult[2] = obj3;
  tmp4 = obj3;
  let obj = user(activity[19]);
}) : ((onAction) => {
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
});
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let Button = _require;
  let tmp = dependencyMap;
  const cResult = require("c").c(11);
  ({ activity, onAction } = arg0);
  _require = onAction;
  const tmp3 = closure_20();
  const sync_id = activity.sync_id;
  let tmp5 = null;
  if (sync_id(10638)(activity)) {
    tmp5 = null;
    if (null != sync_id) {
      if (cResult[0] !== activity.name) {
        const intl = Button(1126).intl;
        let obj2 = { platform: activity.name };
        const formatToPlainStringResult = intl.formatToPlainString(Button(1126).t.LEgD7t, obj2);
        cResult[0] = activity.name;
        cResult[1] = formatToPlainStringResult;
        let tmp6 = formatToPlainStringResult;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] !== tmp3.icon) {
        const obj3 = { size: Button(1188).Icon.Sizes.SMALL, source: sync_id(7835), disableColor: true, style: tmp3.icon };
        const tmp10 = jsx(Button(1188).Icon, { size: Button(1188).Icon.Sizes.SMALL, source: sync_id(7835), disableColor: true, style: tmp3.icon });
        cResult[2] = tmp3.icon;
        cResult[3] = tmp10;
        let tmp8 = tmp10;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] === onAction) {
        if (cResult[5] === sync_id) {
          let tmp11 = cResult[6];
        }
        if (cResult[7] === tmp6) {
          if (cResult[8] === tmp8) {
          }
        }
        Button = Button(5601).Button;
        let obj4 = { text: tmp6, icon: tmp8, variant: "secondary", onPress: tmp11 };
        tmp = <Button text={tmp6} icon={tmp8} variant="secondary" onPress={tmp11} />;
        cResult[7] = tmp6;
        cResult[8] = tmp8;
        cResult[9] = tmp11;
        cResult[10] = tmp;
      }
      _require = asyncGeneratorStep(async () => {
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
            return { value: "IconComponent", done: null };
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
                closure_1 = tmp3;
                closure_0 = tmp7;
                closure_128_0 = undefined;
                closure_0({ action: "PRESS_PLAY_ON_SPOTIFY_BUTTON" });
                c3 = 1;
                c4 = 2;
                c5 = 1;
                const obj5 = { value: closure_0(11393).canOpenSpotifyUrl(), done: false };
                return obj5;
              }
            } else if (1 === tmp7) {
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
              closure_128_0 = value;
              const obj7 = closure_0(11393);
              if (closure_128_0) {
                obj7.openUrl(closure_128_0, constants2.TRACK, closure_1);
              } else {
                obj7.attributeInstall();
                sync_id(4571).openURL(constants.APP_STORE);
                const obj = sync_id(4571);
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
      const fn = function() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      cResult[4] = onAction;
      cResult[5] = sync_id;
      cResult[6] = fn;
      tmp11 = fn;
    }
  }
  return tmp5;
}) : ((arg0) => {
  ({ activity, onAction: require } = arg0);
  const sync_id = activity.sync_id;
  let tmp4 = null;
  if (sync_id(10638)(activity)) {
    tmp4 = null;
    if (null != sync_id) {
      let obj = { text: null, icon: null, variant: "secondary", onPress: null };
      const intl = util.intl;
      let obj2 = { platform: activity.name };
      obj.text = intl.formatToPlainString(util.t.LEgD7t, obj2);
      const obj3 = { size: native.Icon.Sizes.SMALL, source: sync_id(7835), disableColor: true, style: tmp.icon };
      obj.icon = jsx(native.Icon, { size: native.Icon.Sizes.SMALL, source: sync_id(7835), disableColor: true, style: tmp.icon });
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
            return { value: "IconComponent", done: null };
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
                _require({ action: "PRESS_PLAY_ON_SPOTIFY_BUTTON" });
                c3 = 1;
                c4 = 2;
                c5 = 1;
                const obj5 = { value: closure_0(tmp22[35]).canOpenSpotifyUrl(), done: false };
                return obj5;
              }
            } else if (1 === tmp7) {
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
              closure_128_0 = value;
              const obj7 = closure_0(tmp22[35]);
              if (closure_128_0) {
                obj7.openUrl(closure_128_0, constants2.TRACK, closure_129_1);
              } else {
                obj7.attributeInstall();
                tmp3(tmp22[36]).openURL(constants.APP_STORE);
                const obj = tmp3(tmp22[36]);
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
});
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let Button = onAction;
  let tmp = dependencyMap;
  const cResult = onAction(576).c(6);
  ({ activity, onAction } = arg0);
  if (cResult[0] !== activity) {
    const tmp5 = getStreamURLDefault(activity);
    cResult[0] = activity;
    cResult[1] = tmp5;
    let tmp3 = tmp5;
  } else {
    tmp3 = cResult[1];
  }
  importDefault = tmp3;
  let tmp6 = null;
  if (isStreamingDefault(activity)) {
    tmp6 = null;
    if (null != tmp3) {
      const _Symbol = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = Button(1126).intl;
        const stringResult = intl.string(Button(1126).t.I6JG46);
        cResult[2] = stringResult;
        let tmp8 = stringResult;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === onAction) {
      }
      Button = Button(5601).Button;
      const obj2 = {
        text: tmp8,
        variant: "secondary",
        onPress() {
              onAction({ action: "PRESS_WATCH_BUTTON" });
              LinkingDefault.openURL(closure_1);
            }
      };
      tmp = <Button text={tmp8} variant="secondary" onPress={function onPress() {
        onAction({ action: "PRESS_WATCH_BUTTON" });
        LinkingDefault.openURL(closure_1);
      }} />;
      cResult[3] = onAction;
      cResult[4] = tmp3;
      cResult[5] = tmp;
    }
  }
  return tmp6;
}) : ((arg0) => {
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
        _require({ action: "PRESS_WATCH_BUTTON" });
        LinkingDefault.openURL(closure_1);
      };
      tmp3 = jsx(components_Button_Button.Button, { text: null, variant: "secondary", onPress: null });
    }
  }
  return tmp3;
});
ReactCompilerGating = fn(558);
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(newestAnalyticsLocation[19]).c(21);
  channel = channel.channel;
  ({ isInChannel, onAction } = channel);
  newestAnalyticsLocation = onAction(newestAnalyticsLocation[20])().newestAnalyticsLocation;
  if (cResult[0] !== channel) {
    const isGuildStageVoiceResult = channel.isGuildStageVoice();
    cResult[0] = channel;
    cResult[1] = isGuildStageVoiceResult;
    let tmp4 = isGuildStageVoiceResult;
  } else {
    tmp4 = cResult[1];
  }
  closure_3 = tmp4;
  if (cResult[2] === channel) {
    if (cResult[3] === tmp4) {
      let tmp6 = cResult[4];
    }
    if (cResult[5] === channel) {
      if (cResult[6] === tmp4) {
        let tmp7 = cResult[7];
      }
      if (cResult[8] === isInChannel) {
        if (cResult[9] === tmp7) {
          if (cResult[10] === tmp6) {
            let str = "active";
            if (isInChannel) {
              str = "secondary";
            }
            if (cResult[12] === channel) {
              if (cResult[13] === tmp4) {
                if (cResult[14] === newestAnalyticsLocation) {
                  if (cResult[15] === onAction) {
                    let tmp11 = cResult[16];
                  }
                  if (cResult[17] === tmp8) {
                    if (cResult[18] === str) {
                      if (cResult[19] === tmp11) {
                        let tmp12 = cResult[20];
                      }
                      return tmp12;
                    }
                  }
                  let obj2 = { text: tmp8, variant: str, grow: true, onPress: tmp11 };
                  const tmp14 = jsx(tmp(tmp2[30]).Button, { text: tmp8, variant: str, grow: true, onPress: tmp11 });
                  cResult[17] = tmp8;
                  cResult[18] = str;
                  cResult[19] = tmp11;
                  cResult[20] = tmp14;
                  tmp12 = tmp14;
                }
              }
            }
            const fn2 = function f() {
              onAction({ action: "PRESS_JOIN_CALL_BUTTON" });
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
              if (closure_3) {
                StageChannelModalActionCreators.connectAndOpen(channel);
                const tmp5Result = StageChannelModalActionCreators;
              } else {
                PrivateChannelCallUtils.openGuildVoiceModal(channel, newestAnalyticsLocation);
                const tmp5Result2 = PrivateChannelCallUtils;
              }
            };
            cResult[12] = channel;
            cResult[13] = tmp4;
            cResult[14] = newestAnalyticsLocation;
            cResult[15] = onAction;
            cResult[16] = fn2;
            tmp11 = fn2;
          }
        }
      }
      const tmp9 = isInChannel ? tmp6() : tmp7();
      cResult[8] = isInChannel;
      cResult[9] = tmp7;
      cResult[10] = tmp6;
      cResult[11] = tmp9;
    }
    const fn = function v() {
      if (!channel.isDM()) {
        if (!channel.isGroupDM()) {
          const intl = util.intl;
          const string = intl.string;
          const t = util.t;
          if (closure_3) {
            let stringResult = string(t["7vb2cc"]);
          } else {
            stringResult = string(t["96ANUN"]);
          }
        }
        return stringResult;
      }
      const intl2 = util.intl;
      stringResult = intl2.string(util.t.ozoE2A);
    };
    cResult[5] = channel;
    cResult[6] = tmp4;
    cResult[7] = fn;
    tmp7 = fn;
  }
  class S {
    constructor() {
      obj = channel;
      if (!channel.isDM()) {
        if (!obj.isGroupDM()) {
          tmp = closure_3;
          tmp2 = closure_0;
          tmp3 = closure_2;
          intl = closure_0(closure_2[26]).intl;
          string = intl.string;
          tmp4 = closure_0;
          tmp5 = closure_2;
          t = closure_0(closure_2[26]).t;
          if (closure_3) {
            stringResult = string(t.Acqcot);
          } else {
            stringResult = string(t.BXxdl7);
          }
        }
        return stringResult;
      }
      intl2 = closure_0(closure_2[26]).intl;
      stringResult = intl2.string(closure_0(closure_2[26]).t["7hwn2A"]);
      return;
    }
  }
  cResult[2] = channel;
  cResult[3] = tmp4;
  cResult[4] = S;
  tmp6 = S;
  let obj = channel(newestAnalyticsLocation[19]);
  tmp = channel;
  tmp2 = newestAnalyticsLocation;
}) : ((channel) => {
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
        const intl3 = tmp4(v7hwn2A[26]).intl;
        const string2 = intl3.string;
        const t2 = tmp4(v7hwn2A[26]).t;
        if (isGuildStageVoiceResult) {
          let string2Result = string2(t2.Acqcot);
        } else {
          string2Result = string2(t2.BXxdl7);
        }
      }
    }
    const intl4 = tmp4(v7hwn2A[26]).intl;
    v7hwn2A = tmp4(v7hwn2A[26]).t["7hwn2A"];
    string2Result = intl4.string(v7hwn2A);
  } else {
    if (!isDMResult) {
      if (!channel.isGroupDM()) {
        const intl = tmp4(v7hwn2A[26]).intl;
        const string = intl.string;
        const t = tmp4(v7hwn2A[26]).t;
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
      return jsx(channel(newestAnalyticsLocation[30]).Button, { text: stringResult, variant: null, grow: true, onPress: null });
    }
    const intl2 = tmp4(v7hwn2A[26]).intl;
    stringResult = intl2.string(tmp4(v7hwn2A[26]).t.ozoE2A);
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityButtons.tsx");

export const JoinActivityButton = tmp5;
export const JoinGameActivityButton = tmp6;
export const PlayOnSpotifyButton = tmp7;
export const WatchActivityButton = tmp8;
export const VoiceChannelButtons = tmp9;
export const ConnectPlatformButton = ReactCompilerGating.isReactCompilerEnabled() ? ((type) => {
  const cResult = require("c").c(25);
  type = type.type;
  onAction = type.onAction;
  const tmp4 = closure_20();
  const newestAnalyticsLocation = type(onAction[20])().newestAnalyticsLocation;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConnectedAccountsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== type) {
    const fn = function o() {
      return null != ConnectedAccountsStore.getAccount(null, type);
    };
    cResult[1] = type;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  let obj = require("c");
  const tmp5 = type;
  if (tmpResult.useStateFromStores(first, tmp8)) {
    return null;
  } else {
    if (cResult[3] !== type) {
      value = tmp5(tmp2[43]).get(type);
      _require = value;
      const Button = tmp(tmp2[30]).Button;
      const intl = tmp(tmp2[26]).intl;
      const obj2 = { platform: value.name };
      const formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[26]).t.XWSHTb, obj2);
      const Icon = tmp(tmp2[33]).Icon;
      const SMALL = tmp(tmp2[33]).Icon.Sizes.SMALL;
      const tmp5Result = tmp5(tmp2[43]);
      const source = tmp(tmp2[44]).makeSource(value.icon.whitePNG);
      cResult[3] = type;
      cResult[4] = Icon;
      cResult[5] = Button;
      cResult[6] = value;
      cResult[7] = SMALL;
      cResult[8] = source;
      cResult[9] = formatToPlainStringResult;
      let tmp14 = formatToPlainStringResult;
      let tmp13 = source;
      let tmp12 = SMALL;
      let tmp10 = Button;
      let tmp9 = Icon;
      const tmpResult2 = tmp(tmp2[44]);
    } else {
      tmp9 = cResult[4];
      tmp10 = cResult[5];
      _require = cResult[6];
      tmp12 = cResult[7];
      tmp13 = cResult[8];
      tmp14 = cResult[9];
    }
    if (cResult[10] === tmp9) {
      if (cResult[11] === tmp4.icon) {
        if (cResult[12] === tmp12) {
          if (cResult[13] === tmp13) {
            let tmp18 = cResult[14];
          }
          if (cResult[15] === newestAnalyticsLocation) {
            if (cResult[16] === onAction) {
              if (cResult[17] === tmp11.type) {
                if (cResult[18] === type) {
                  let tmp21 = cResult[19];
                }
                if (cResult[20] === tmp10) {
                  if (cResult[21] === tmp14) {
                    if (cResult[22] === tmp18) {
                    }
                  }
                }
                const obj3 = { text: tmp14, icon: tmp18, variant: "secondary", onPress: tmp21 };
                const tmp24 = <tmp10 text={tmp14} icon={tmp18} variant="secondary" onPress={tmp21} />;
                cResult[20] = tmp10;
                cResult[21] = tmp14;
                cResult[22] = tmp18;
                cResult[23] = tmp21;
                cResult[24] = tmp24;
              }
            }
          }
          const fn2 = function p() {
            let str = "PRESS_CONNECT_XBOX_BUTTON";
            if (type === constants.PLAYSTATION) {
              str = "PRESS_CONNECT_PLAYSTATION_BUTTON";
            }
            onAction({ action: str });
            authorizeConnectionDefault({
              platformType: type.type,
              location: newestAnalyticsLocation,
              onClose() {
                return type(onAction[46]).openUserSettings({ screen: constants.CONNECTIONS });
              }
            });
            const obj = {
              platformType: type.type,
              location: newestAnalyticsLocation,
              onClose() {
                return type(onAction[46]).openUserSettings({ screen: constants.CONNECTIONS });
              }
            };
          };
          cResult[15] = newestAnalyticsLocation;
          cResult[16] = onAction;
          cResult[17] = tmp11.type;
          cResult[18] = type;
          cResult[19] = fn2;
          tmp21 = fn2;
        }
      }
    }
    const obj4 = { size: tmp12, source: tmp13, disableColor: true, style: tmp4.icon };
    const tmp20 = <tmp9 size={tmp12} source={tmp13} disableColor style={tmp4.icon} />;
    cResult[10] = tmp9;
    cResult[11] = tmp4.icon;
    cResult[12] = tmp12;
    cResult[13] = tmp13;
    cResult[14] = tmp20;
    tmp18 = tmp20;
  }
  tmpResult = require("useStateFromStores");
}) : ((type) => {
  type = type.type;
  const onAction = type.onAction;
  let newestAnalyticsLocation;
  c3 = undefined;
  newestAnalyticsLocation = onAction(newestAnalyticsLocation[20])().newestAnalyticsLocation;
  const tmp = closure_20();
  const tmp2 = onAction;
  const items = [ConnectedAccountsStore];
  if (obj.useStateFromStores(items, () => null != ConnectedAccountsStore.getAccount(null, type))) {
    return null;
  } else {
    value = tmp2(tmp3[43]).get(type);
    c3 = value;
    const obj2 = { text: null, icon: null, variant: "secondary", onPress: null };
    const intl = tmp4(tmp3[26]).intl;
    const obj3 = { platform: value.name };
    obj2.text = intl.formatToPlainString(tmp4(tmp3[26]).t.XWSHTb, obj3);
    const obj4 = { size: tmp4(tmp3[33]).Icon.Sizes.SMALL, source: null, disableColor: true, style: null };
    const tmp2Result = tmp2(tmp3[43]);
    obj4.source = tmp4(tmp3[44]).makeSource(value.icon.whitePNG);
    obj4.style = tmp.icon;
    obj2.icon = jsx(tmp4(tmp3[33]).Icon, { size: tmp4(tmp3[33]).Icon.Sizes.SMALL, source: null, disableColor: true, style: null });
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
          return type(newestAnalyticsLocation[46]).openUserSettings({ screen: constants.CONNECTIONS });
        }
      });
      const obj = {
        platformType: _undefined.type,
        location: newestAnalyticsLocation,
        onClose() {
          return type(newestAnalyticsLocation[46]).openUserSettings({ screen: constants.CONNECTIONS });
        }
      };
    };
    return jsx(tmp4(tmp3[30]).Button, { text: null, icon: null, variant: "secondary", onPress: null });
  }
  obj = type(newestAnalyticsLocation[23]);
});
export const CustomActivityButton = function CustomActivityButton(index) {
  ({ user: require, activity } = index);
  index = index.index;
  const onAction = index.onAction;
  let tmp = null;
  if (null != activity.buttons) {
    tmp = null;
    if (index < activity.buttons.length) {
      let obj = index;
      if (activity(index[47])(activity)) {
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
                  return { value: "IconComponent", done: null };
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
                      const obj5 = { value: id(tmp20[48]).getMetadata(activity, id.id), done: false };
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
                        return { value: "IconComponent", done: null };
                      } else {
                        closure_128_1 = closure_128_0.button_urls[closure_129_2];
                        if (typeof closure_128_1 !== "string") {
                          c3 = 0;
                          c5 = 3;
                          return { value: "IconComponent", done: null };
                        } else {
                          closure_128_2 = tmp3(tmp20[49]).safeParseWithQuery(closure_128_1);
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
                              closure_128_3 = tmp3(tmp20[49]).format(closure_128_2);
                              const obj = tmp3(tmp20[49]);
                              const obj7 = {
                                href: closure_128_3,
                                onConfirm() {
                                                  return closure_1(closure_2[36]).openURL(closure_1_3);
                                                },
                                trusted: false
                              };
                              id(tmp20[50]).handleClick(obj7);
                              c3 = 0;
                              const obj2 = id(tmp20[50]);
                            }
                          }
                          const obj8 = tmp3(tmp20[49]);
                        }
                      }
                    }
                    c3 = 0;
                    c5 = 3;
                    return { value: "IconComponent", done: null };
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
                  return { value: "IconComponent", done: null };
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
                      const obj5 = { value: id(tmp20[48]).getMetadata(activity, id.id), done: false };
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
                        return { value: "IconComponent", done: null };
                      } else {
                        closure_128_1 = closure_128_0.button_urls[closure_129_2];
                        if (typeof closure_128_1 !== "string") {
                          c3 = 0;
                          c5 = 3;
                          return { value: "IconComponent", done: null };
                        } else {
                          closure_128_2 = tmp3(tmp20[49]).safeParseWithQuery(closure_128_1);
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
                              closure_128_3 = tmp3(tmp20[49]).format(closure_128_2);
                              const obj = tmp3(tmp20[49]);
                              const obj7 = {
                                href: closure_128_3,
                                onConfirm() {
                                                  return closure_1(closure_2[36]).openURL(closure_1_3);
                                                },
                                trusted: false
                              };
                              id(tmp20[50]).handleClick(obj7);
                              c3 = 0;
                              const obj2 = id(tmp20[50]);
                            }
                          }
                          const obj8 = tmp3(tmp20[49]);
                        }
                      }
                    }
                    c3 = 0;
                    c5 = 3;
                    return { value: "IconComponent", done: null };
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