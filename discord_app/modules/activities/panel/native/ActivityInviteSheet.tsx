// discord_app/modules/activities/panel/native/ActivityInviteSheet.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants2 from "../../../../Constants.tsx";
import Constants3 from "../../../../../discord_common/js/shared/Constants.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import UserPlaceholderRowDefault from "../../../main_tabs_v2/native/shared_components/user_list/UserPlaceholderRow.tsx";
import InviteSuggestionsActionCreators from "../../../../actions/InviteSuggestionsActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import InstantInviteSendStateStore from "../../../instant_invite/InstantInviteSendStateStore.tsx";
import InviteSuggestionsStore from "../../../../stores/InviteSuggestionsStore.tsx";
import Constants from "../../../instant_invite/Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let BottomSheet,
  activity,
  catchPromise1,
  cleanupPromise,
  closure_0,
  dependencyMap,
  hideActionSheetResult,
  obj1,
  set,
  tmp20,
  tmp21,
  tmp22,
  tmp23,
  tmp24,
  tmp9;

let c10;
let closure_14;
let closure_15;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
let size1;
let unpackModuleId;
let react = react_mod;
const View = react_native.View;
({ setSendState: metroRequire, useInstantInviteSendStates: metroImportDefault } = InstantInviteSendStateStore);
const ActivityActionTypes = Constants2.ActivityActionTypes;
({ InviteSendStates: c10, InviteTargetTypes: unpackModuleId } = Constants);
const NOOP_NULL = Constants3.NOOP_NULL;
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  placeholderHeader: size,
  placeholderLabel: size1,
  emptyState: { backgroundColor: "transparent" },
  searchAndShareContainer: obj2,
};
size = {
  height: 16,
  width: "80%",
  margin: 16,
  marginBottom: 8,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
createStyles = createStyles.createStyles;
size1 = {
  height: 16,
  width: "40%",
  margin: 16,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
obj2 = {
  borderTopWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  marginTop: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
  flexDirection: "column",
  gap: nativeDefault.space.PX_12,
};
let closure_16 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let items1;
      let tmp12;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(8);
      const tmp2 = closure_16();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [];
        let num4 = 0;
        do {
          let obj2 = { row: num4 };
          let arr = items.push(map1(UserPlaceholderRowDefault, obj2, num4));
          num4 = num4 + 1;
        } while (num4 < 10);
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp2.placeholderHeader) {
        const obj3 = { style: tmp2.placeholderHeader };
        const tmp11 = map1(View, obj3);
        cResult[1] = tmp2.placeholderHeader;
        cResult[2] = tmp11;
        tmp8 = tmp11;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== tmp2.placeholderLabel) {
        const obj4 = { style: tmp2.placeholderLabel };
        const tmp15 = map1(View, obj4);
        cResult[3] = tmp2.placeholderLabel;
        cResult[4] = tmp15;
        tmp12 = tmp15;
      } else {
        tmp12 = cResult[4];
      }
      if (cResult[5] === tmp8) {
        let tmp16;
        if (cResult[6] === tmp12) {
          tmp16 = cResult[7];
        }
        return tmp16;
      }
      const obj5 = { children: items1 };
      items1 = [tmp8, tmp12, first];
      const tmp17 = closure_15(authStore2, obj5);
      cResult[5] = tmp8;
      cResult[6] = tmp12;
      cResult[7] = tmp17;
      tmp16 = tmp17;
    }
  : () => {
      let items1;
      const tmp = closure_16();
      const items = [];
      let num = 0;
      do {
        let obj = { row: num };
        let arr = items.push(map1(UserPlaceholderRowDefault, obj, num));
        num = num + 1;
      } while (num < 10);
      const obj2 = { children: items1 };
      items1 = [, ,];
      const obj3 = { style: tmp.placeholderHeader };
      items1[0] = map1(View, obj3);
      const obj4 = { style: tmp.placeholderLabel };
      items1[1] = map1(View, obj4);
      items1[2] = items;
      return closure_15(authStore2, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (activity) => {
      let analyticsLocations;
      let inviteSuggestionRows;
      let tmp17;
      let tmp8;
      let tmp = activity;
      let obj = activity(576);
      const cResult = obj.c(28);
      activity = activity.activity;
      const tmp4 = closure_16();
      let tmp5 = analyticsLocations(6664);
      analyticsLocations = tmp5(analyticsLocations(6688).ACTIVITY_INVITE_SHEET).analyticsLocations;
      let tmp6 = closure_3;
      [tmp8, dependencyMap] = closure_3(react.useState(null), 2);
      closure_3(react.useState(null), 2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor(arg0) {
            return activity;
          }
        }
        cResult[0] = S;
      } else {
        class S {
          constructor(arg0) {
            return activity;
          }
        }
      }
      const tmp10 = closure_7(S);
      closure_3 = tmp10;
      const tmp11 = cResult[1];
      if (activity.party != null) {
        class S {
          constructor(arg0) {
            return activity;
          }
        }
      }
      if (tmp11 === undefined) {
        let tmp15;
        let tmp14;
        let tmp19;
        let tmp27;
        class S {
          constructor(arg0) {
            return activity;
          }
        }
        if (cResult[4] !== analyticsLocations) {
          class H {
            constructor(arg0) {
              obj = closure_1(closure_2[16]);
              hideActionSheetResult = obj.hideActionSheet();
              obj1 = { userId: activity, sourceAnalyticsLocations: analyticsLocations };
              tmp2 = closure_1(closure_2[17])(obj1);
              return;
            }
          }
          cResult[4] = analyticsLocations;
          cResult[5] = H;
        } else {
          class H {
            constructor(arg0) {
              obj = closure_1(closure_2[16]);
              hideActionSheetResult = obj.hideActionSheet();
              obj1 = { userId: activity, sourceAnalyticsLocations: analyticsLocations };
              tmp2 = closure_1(closure_2[17])(obj1);
              return;
            }
          }
        }
        if (cResult[6] !== activity) {
          class V {
            constructor(arg0) {
              closure_0 = activity;
              tmp = closure_0;
              if (null != closure_0) {
                party = tmp.party;
                id = undefined;
                if (party != null) {
                  id = party.id;
                }
                if (null != id) {
                  markInviteSent = function markInviteSent() {
                    /* body not rendered: F148339 */
                  };
                  tmp21 = closure_1_6;
                  tmp22 = closure_1_10;
                  tmp23 = closure_1_6(id, activity.item.id, closure_1_10.SENDING);
                  tmp24 = activity;
                  tmp25 = closure_2;
                  if (activity.type === activity(closure_2[18]).RowTypes.CHANNEL) {
                    try {
                      tmp13 = analyticsLocations;
                      tmp14 = analyticsLocations(tmp25[19]);
                      obj1 = { channelId: null, type: null, activity: null, location: null };
                      obj1.channelId = tmp12;
                      tmp15 = closure_1_9;
                      obj1.type = closure_1_9.JOIN;
                      obj1.activity = tmp;
                      sendActivityInvite = tmp14.sendActivityInvite;
                      obj1.location = analyticsLocations(tmp25[15]).ACTIVITY_INVITE_SHEET;
                      sendActivityInviteResult = sendActivityInvite(obj1);
                      nextPromise = sendActivityInviteResult.then(markInviteSent);
                      catchPromise = nextPromise.catch(() => {
                        /* body not rendered: F148340 */
                      });
                    } catch (tmp17) {
                      tmp18 = closure_2;
                      tmp19 = globalThis;
                      _String2 = String;
                      tmp20 = closure_2(String(tmp17));
                    }
                  } else if (activity.type === tmp24(tmp25[18]).RowTypes.DM) {
                    try {
                      tmp4 = analyticsLocations;
                      tmp5 = analyticsLocations(tmp25[19]);
                      obj = { userId: null, type: null, activity: null, location: null };
                      obj.userId = tmp3;
                      tmp6 = closure_1_9;
                      obj.type = closure_1_9.JOIN;
                      obj.activity = tmp;
                      sendActivityInviteUser = tmp5.sendActivityInviteUser;
                      obj.location = analyticsLocations(tmp25[15]).ACTIVITY_INVITE_SHEET;
                      result = sendActivityInviteUser(obj);
                      nextPromise1 = result.then(markInviteSent);
                      catchPromise1 = nextPromise1.catch(() => {
                        /* body not rendered: F148341 */
                      });
                    } catch (tmp8) {
                      tmp9 = closure_2;
                      tmp10 = globalThis;
                      _String = String;
                      tmp11 = closure_2(String(tmp8));
                    }
                  }
                }
              }
              return;
            }
          }
          cResult[6] = activity;
          cResult[7] = V;
        } else {
          class V {
            constructor(arg0) {
              closure_0 = activity;
              tmp = closure_0;
              if (null != closure_0) {
                party = tmp.party;
                id = undefined;
                if (party != null) {
                  id = party.id;
                }
                if (null != id) {
                  markInviteSent = function markInviteSent() {
                    /* body not rendered: F148339 */
                  };
                  tmp21 = closure_1_6;
                  tmp22 = closure_1_10;
                  tmp23 = closure_1_6(id, activity.item.id, closure_1_10.SENDING);
                  tmp24 = activity;
                  tmp25 = closure_2;
                  if (activity.type === activity(closure_2[18]).RowTypes.CHANNEL) {
                    try {
                      tmp13 = analyticsLocations;
                      tmp14 = analyticsLocations(tmp25[19]);
                      obj1 = { channelId: null, type: null, activity: null, location: null };
                      obj1.channelId = tmp12;
                      tmp15 = closure_1_9;
                      obj1.type = closure_1_9.JOIN;
                      obj1.activity = tmp;
                      sendActivityInvite = tmp14.sendActivityInvite;
                      obj1.location = analyticsLocations(tmp25[15]).ACTIVITY_INVITE_SHEET;
                      sendActivityInviteResult = sendActivityInvite(obj1);
                      nextPromise = sendActivityInviteResult.then(markInviteSent);
                      catchPromise = nextPromise.catch(() => {
                        /* body not rendered: F148340 */
                      });
                    } catch (tmp17) {
                      tmp18 = closure_2;
                      tmp19 = globalThis;
                      _String2 = String;
                      tmp20 = closure_2(String(tmp17));
                    }
                  } else if (activity.type === tmp24(tmp25[18]).RowTypes.DM) {
                    try {
                      tmp4 = analyticsLocations;
                      tmp5 = analyticsLocations(tmp25[19]);
                      obj = { userId: null, type: null, activity: null, location: null };
                      obj.userId = tmp3;
                      tmp6 = closure_1_9;
                      obj.type = closure_1_9.JOIN;
                      obj.activity = tmp;
                      sendActivityInviteUser = tmp5.sendActivityInviteUser;
                      obj.location = analyticsLocations(tmp25[15]).ACTIVITY_INVITE_SHEET;
                      result = sendActivityInviteUser(obj);
                      nextPromise1 = result.then(markInviteSent);
                      catchPromise1 = nextPromise1.catch(() => {
                        /* body not rendered: F148341 */
                      });
                    } catch (tmp8) {
                      tmp9 = closure_2;
                      tmp10 = globalThis;
                      _String = String;
                      tmp11 = closure_2(String(tmp8));
                    }
                  }
                }
              }
              return;
            }
          }
        }
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class V {
            constructor(arg0) {
              closure_0 = activity;
              tmp = closure_0;
              if (null != closure_0) {
                party = tmp.party;
                id = undefined;
                if (party != null) {
                  id = party.id;
                }
                if (null != id) {
                  markInviteSent = function markInviteSent() {
                    /* body not rendered: F148339 */
                  };
                  tmp21 = closure_1_6;
                  tmp22 = closure_1_10;
                  tmp23 = closure_1_6(id, activity.item.id, closure_1_10.SENDING);
                  tmp24 = activity;
                  tmp25 = closure_2;
                  if (activity.type === activity(closure_2[18]).RowTypes.CHANNEL) {
                    try {
                      tmp13 = analyticsLocations;
                      tmp14 = analyticsLocations(tmp25[19]);
                      obj1 = { channelId: null, type: null, activity: null, location: null };
                      obj1.channelId = tmp12;
                      tmp15 = closure_1_9;
                      obj1.type = closure_1_9.JOIN;
                      obj1.activity = tmp;
                      sendActivityInvite = tmp14.sendActivityInvite;
                      obj1.location = analyticsLocations(tmp25[15]).ACTIVITY_INVITE_SHEET;
                      sendActivityInviteResult = sendActivityInvite(obj1);
                      nextPromise = sendActivityInviteResult.then(markInviteSent);
                      catchPromise = nextPromise.catch(() => {
                        /* body not rendered: F148340 */
                      });
                    } catch (tmp17) {
                      tmp18 = closure_2;
                      tmp19 = globalThis;
                      _String2 = String;
                      tmp20 = closure_2(String(tmp17));
                    }
                  } else if (activity.type === tmp24(tmp25[18]).RowTypes.DM) {
                    try {
                      tmp4 = analyticsLocations;
                      tmp5 = analyticsLocations(tmp25[19]);
                      obj = { userId: null, type: null, activity: null, location: null };
                      obj.userId = tmp3;
                      tmp6 = closure_1_9;
                      obj.type = closure_1_9.JOIN;
                      obj.activity = tmp;
                      sendActivityInviteUser = tmp5.sendActivityInviteUser;
                      obj.location = analyticsLocations(tmp25[15]).ACTIVITY_INVITE_SHEET;
                      result = sendActivityInviteUser(obj);
                      nextPromise1 = result.then(markInviteSent);
                      catchPromise1 = nextPromise1.catch(() => {
                        /* body not rendered: F148341 */
                      });
                    } catch (tmp8) {
                      tmp9 = closure_2;
                      tmp10 = globalThis;
                      _String = String;
                      tmp11 = closure_2(String(tmp8));
                    }
                  }
                }
              }
              return;
            }
          }
          const items = [InviteSuggestionsStore];
          class U {
            constructor() {
              return closure_1_8.getInviteSuggestionRows();
            }
          }
          cResult[8] = items;
          cResult[9] = U;
          tmp15 = U;
          tmp14 = items;
        } else {
          class V {
            constructor(arg0) {
              closure_0 = activity;
              tmp = closure_0;
              if (null != closure_0) {
                party = tmp.party;
                id = undefined;
                if (party != null) {
                  id = party.id;
                }
                if (null != id) {
                  markInviteSent = function markInviteSent() {
                    /* body not rendered: F148339 */
                  };
                  tmp21 = closure_1_6;
                  tmp22 = closure_1_10;
                  tmp23 = closure_1_6(id, activity.item.id, closure_1_10.SENDING);
                  tmp24 = activity;
                  tmp25 = closure_2;
                  if (activity.type === activity(closure_2[18]).RowTypes.CHANNEL) {
                    try {
                      tmp13 = analyticsLocations;
                      tmp14 = analyticsLocations(tmp25[19]);
                      obj1 = { channelId: null, type: null, activity: null, location: null };
                      obj1.channelId = tmp12;
                      tmp15 = closure_1_9;
                      obj1.type = closure_1_9.JOIN;
                      obj1.activity = tmp;
                      sendActivityInvite = tmp14.sendActivityInvite;
                      obj1.location = analyticsLocations(tmp25[15]).ACTIVITY_INVITE_SHEET;
                      sendActivityInviteResult = sendActivityInvite(obj1);
                      nextPromise = sendActivityInviteResult.then(markInviteSent);
                      catchPromise = nextPromise.catch(() => {
                        /* body not rendered: F148340 */
                      });
                    } catch (tmp17) {
                      tmp18 = closure_2;
                      tmp19 = globalThis;
                      _String2 = String;
                      tmp20 = closure_2(String(tmp17));
                    }
                  } else if (activity.type === tmp24(tmp25[18]).RowTypes.DM) {
                    try {
                      tmp4 = analyticsLocations;
                      tmp5 = analyticsLocations(tmp25[19]);
                      obj = { userId: null, type: null, activity: null, location: null };
                      obj.userId = tmp3;
                      tmp6 = closure_1_9;
                      obj.type = closure_1_9.JOIN;
                      obj.activity = tmp;
                      sendActivityInviteUser = tmp5.sendActivityInviteUser;
                      obj.location = analyticsLocations(tmp25[15]).ACTIVITY_INVITE_SHEET;
                      result = sendActivityInviteUser(obj);
                      nextPromise1 = result.then(markInviteSent);
                      catchPromise1 = nextPromise1.catch(() => {
                        /* body not rendered: F148341 */
                      });
                    } catch (tmp8) {
                      tmp9 = closure_2;
                      tmp10 = globalThis;
                      _String = String;
                      tmp11 = closure_2(String(tmp8));
                    }
                  }
                }
              }
              return;
            }
          }
          tmp15 = cResult[9];
        }
        const tmpResult = tmp(504);
        const stateFromStores = tmpResult.useStateFromStores(tmp14, tmp15);
        const tmp6Result = tmp6(react.useState(false), 2);
        [tmp17, react] = tmp6Result;
        const _Symbol2 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor() {
              tmp = closure_4(true);
              tmp2 = closure_0(closure_2[21]);
              obj = { omitUserIds: null, inviteTargetType: null };
              loadInviteSuggestions = tmp2.loadInviteSuggestions;
              set = new Set();
              obj.omitUserIds = set;
              obj.inviteTargetType = InviteTargetTypes.EMBEDDED_APPLICATION;
              inviteSuggestions = loadInviteSuggestions(obj);
              catchPromise = inviteSuggestions.catch(NOOP_NULL);
              cleanupPromise = catchPromise.finally(() => {
                /* body not rendered: F148342 */
              });
              return;
            }
          }
          const items1 = [];
          class U {
            constructor() {
              return closure_1_8.getInviteSuggestionRows();
            }
          }
          cResult[11] = items1;
          tmp19 = items1;
        } else {
          class F {
            constructor() {
              tmp = closure_4(true);
              tmp2 = closure_0(closure_2[21]);
              obj = { omitUserIds: null, inviteTargetType: null };
              loadInviteSuggestions = tmp2.loadInviteSuggestions;
              set = new Set();
              obj.omitUserIds = set;
              obj.inviteTargetType = InviteTargetTypes.EMBEDDED_APPLICATION;
              inviteSuggestions = loadInviteSuggestions(obj);
              catchPromise = inviteSuggestions.catch(NOOP_NULL);
              cleanupPromise = catchPromise.finally(() => {
                /* body not rendered: F148342 */
              });
              return;
            }
          }
          tmp19 = cResult[11];
        }
        const effect = react.useEffect(F, tmp19);
        const _Symbol3 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor() {
              tmp = closure_4(true);
              tmp2 = closure_0(closure_2[21]);
              obj = { omitUserIds: null, inviteTargetType: null };
              loadInviteSuggestions = tmp2.loadInviteSuggestions;
              set = new Set();
              obj.omitUserIds = set;
              obj.inviteTargetType = InviteTargetTypes.EMBEDDED_APPLICATION;
              inviteSuggestions = loadInviteSuggestions(obj);
              catchPromise = inviteSuggestions.catch(NOOP_NULL);
              cleanupPromise = catchPromise.finally(() => {
                /* body not rendered: F148342 */
              });
              return;
            }
          }
          const obj3 = { title: obj5.string(tmp(1126).t["OzOM/q"]) };
          const BottomSheetTitleHeader = tmp(6651).BottomSheetTitleHeader;
          class U {
            constructor() {
              return closure_1_8.getInviteSuggestionRows();
            }
          }
          cResult[12] = closure_13(BottomSheetTitleHeader, obj3);
          const tmp25 = closure_13(BottomSheetTitleHeader, obj3);
        } else {
          class F {
            constructor() {
              tmp = closure_4(true);
              tmp2 = closure_0(closure_2[21]);
              obj = { omitUserIds: null, inviteTargetType: null };
              loadInviteSuggestions = tmp2.loadInviteSuggestions;
              set = new Set();
              obj.omitUserIds = set;
              obj.inviteTargetType = InviteTargetTypes.EMBEDDED_APPLICATION;
              inviteSuggestions = loadInviteSuggestions(obj);
              catchPromise = inviteSuggestions.catch(NOOP_NULL);
              cleanupPromise = catchPromise.finally(() => {
                /* body not rendered: F148342 */
              });
              return;
            }
          }
        }
        if (cResult[13] === tmp8) {
          class F {
            constructor() {
              tmp = closure_4(true);
              tmp2 = closure_0(closure_2[21]);
              obj = { omitUserIds: null, inviteTargetType: null };
              loadInviteSuggestions = tmp2.loadInviteSuggestions;
              set = new Set();
              obj.omitUserIds = set;
              obj.inviteTargetType = InviteTargetTypes.EMBEDDED_APPLICATION;
              inviteSuggestions = loadInviteSuggestions(obj);
              catchPromise = inviteSuggestions.catch(NOOP_NULL);
              cleanupPromise = catchPromise.finally(() => {
                /* body not rendered: F148342 */
              });
              return;
            }
          }
        }
        if (null != tmp8) {
          class F {
            constructor() {
              tmp = closure_4(true);
              tmp2 = closure_0(closure_2[21]);
              obj = { omitUserIds: null, inviteTargetType: null };
              loadInviteSuggestions = tmp2.loadInviteSuggestions;
              set = new Set();
              obj.omitUserIds = set;
              obj.inviteTargetType = InviteTargetTypes.EMBEDDED_APPLICATION;
              inviteSuggestions = loadInviteSuggestions(obj);
              catchPromise = inviteSuggestions.catch(NOOP_NULL);
              cleanupPromise = catchPromise.finally(() => {
                /* body not rendered: F148342 */
              });
              return;
            }
          }
          const obj4 = { style: tmp4.emptyState, Illustration: tmp(9523).AppCrash, title: tmp8 };
          class U {
            constructor() {
              return closure_1_8.getInviteSuggestionRows();
            }
          }
          tmp27 = closure_13(tmp28, obj4);
        } else {
          class F {
            constructor() {
              tmp = closure_4(true);
              tmp2 = closure_0(closure_2[21]);
              obj = { omitUserIds: null, inviteTargetType: null };
              loadInviteSuggestions = tmp2.loadInviteSuggestions;
              set = new Set();
              obj.omitUserIds = set;
              obj.inviteTargetType = InviteTargetTypes.EMBEDDED_APPLICATION;
              inviteSuggestions = loadInviteSuggestions(obj);
              catchPromise = inviteSuggestions.catch(NOOP_NULL);
              cleanupPromise = catchPromise.finally(() => {
                /* body not rendered: F148342 */
              });
              return;
            }
          }
        }
        cResult[13] = tmp8;
        cResult[14] = R;
        cResult[15] = V;
        cResult[16] = H;
        cResult[17] = stateFromStores;
        cResult[18] = 0 === stateFromStores.length && !tmp17;
        class R {
          constructor(arg0) {
            party = activity.party;
            id = undefined;
            if (party != null) {
              id = party.id;
            }
            tmp3 = null;
            if (null != id) {
              tmp4 = closure_3;
              tmp5 = closure_3[id];
              tmp6 = undefined;
              if (tmp5 != null) {
                tmp6 = tmp5[tmp2];
              }
              tmp3 = tmp6;
            }
            return tmp3;
          }
        }
        cResult[20] = tmp4;
        cResult[21] = tmp27;
      }
      if (activity.party != null) {
        class F {
          constructor() {
            tmp = closure_4(true);
            tmp2 = closure_0(closure_2[21]);
            obj = { omitUserIds: null, inviteTargetType: null };
            loadInviteSuggestions = tmp2.loadInviteSuggestions;
            set = new Set();
            obj.omitUserIds = set;
            obj.inviteTargetType = InviteTargetTypes.EMBEDDED_APPLICATION;
            inviteSuggestions = loadInviteSuggestions(obj);
            catchPromise = inviteSuggestions.catch(NOOP_NULL);
            cleanupPromise = catchPromise.finally(() => {
              /* body not rendered: F148342 */
            });
            return;
          }
        }
      }
      class R {
        constructor(arg0) {
          party = activity.party;
          id = undefined;
          if (party != null) {
            id = party.id;
          }
          tmp3 = null;
          if (null != id) {
            tmp4 = closure_3;
            tmp5 = closure_3[id];
            tmp6 = undefined;
            if (tmp5 != null) {
              tmp6 = tmp5[tmp2];
            }
            tmp3 = tmp6;
          }
          return tmp3;
        }
      }
      cResult[1] = undefined;
      cResult[2] = tmp10;
      cResult[3] = R;
    }
  : (activity) => {
      let BottomSheetTitleHeader;
      let SearchField;
      let _undefined;
      let _undefined2;
      let c2;
      let c4;
      let intl;
      let intl2;
      let intl3;
      let inviteSuggestionRows;
      let obj3;
      let obj4;
      let obj7;
      let obj8;
      let tmp13;
      let tmp19Result;
      let tmp6;
      activity = activity.activity;
      let analyticsLocations;
      dependencyMap = undefined;
      let closure_3;
      react = undefined;
      let tmp = closure_16();
      let tmp3 = dependencyMap;
      const tmp2 = analyticsLocations;
      const tmp4 = analyticsLocations(6664);
      analyticsLocations = tmp4(analyticsLocations(6688).ACTIVITY_INVITE_SHEET).analyticsLocations;
      let tmp5 = closure_3(react.useState(null), 2);
      [tmp6, c2] = tmp5;
      const tmp7 = closure_7((arg0) => arg0);
      closure_3 = tmp7;
      const items = [activity, tmp7];
      const items1 = [analyticsLocations];
      const callback = react.useCallback((arg0) => {
        const party = activity.party;
        let id;
        if (party != null) {
          id = party.id;
        }
        let tmp3 = null;
        if (null != id) {
          let tmp6;
          if (closure_3[id] != null) {
            tmp6 = tmp5[tmp2];
          }
          tmp3 = tmp6;
        }
        return tmp3;
      }, items);
      const items2 = [activity];
      const callback1 = react.useCallback((userId) => {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        const obj2 = { userId, sourceAnalyticsLocations: analyticsLocations };
        showUserProfileActionSheetDefault(obj2);
      }, items1);
      const callback2 = react.useCallback((item) => {
        const tmp = item;
        if (null != item) {
          const party = tmp.party;
          let id;
          if (party != null) {
            id = party.id;
          }
          if (null != id) {
            function markInviteSent() {
              if (null != id) {
                metroRequire(tmp, item.item.id, constants.SENT);
              }
            }
            closure_1_6(id, item.item.id, constants2.SENDING);
            if (item.type === activity(c2[18]).RowTypes.CHANNEL) {
              try {
                const obj2 = {
                  channelId: tmp12,
                  type: constants.JOIN,
                  activity: tmp,
                  location: analyticsLocations(c2[15]).ACTIVITY_INVITE_SHEET,
                };
                const sendActivityInvite = analyticsLocations(c2[19]).sendActivityInvite;
                analyticsLocations(c2[19]);
                const sendActivityInviteResult = sendActivityInvite(obj2);
                const nextPromise = sendActivityInviteResult.then(markInviteSent);
                nextPromise.catch((error) => {
                  _undefined(String(error));
                });
              } catch (tmp17) {
                const _String2 = String;
                c2(String(tmp17));
              }
            } else if (item.type === activity(c2[18]).RowTypes.DM) {
              try {
                const tmp5 = analyticsLocations(c2[19]);
                const sendActivityInviteUser = tmp5.sendActivityInviteUser;
                const obj = {
                  userId: tmp3,
                  type: constants.JOIN,
                  activity: tmp,
                  location: analyticsLocations(c2[15]).ACTIVITY_INVITE_SHEET,
                };
                const result = sendActivityInviteUser(obj);
                const nextPromise1 = result.then(markInviteSent);
                nextPromise1.catch((error) => _undefined(String(error)));
              } catch (tmp8) {
                const _String = String;
                c2(String(tmp8));
              }
            }
          }
        }
      }, items2);
      let obj = activity(504);
      const items3 = [InviteSuggestionsStore];
      const stateFromStores = obj.useStateFromStores(items3, () => inviteSuggestionRows.getInviteSuggestionRows());
      const tmp12 = closure_3(react.useState(false), 2);
      [tmp13, c4] = tmp12;
      const effect = react.useEffect(() => {
        _undefined2(true);
        const obj = { omitUserIds: new Set(), inviteTargetType: unpackModuleId.EMBEDDED_APPLICATION };
        const loadInviteSuggestions = InviteSuggestionsActionCreators.loadInviteSuggestions;
        InviteSuggestionsActionCreators;
        new Set();
        const inviteSuggestions = loadInviteSuggestions(obj);
        const catchPromise = inviteSuggestions.catch(NOOP_NULL);
        catchPromise.finally(() => {
          _undefined2(false);
        });
      }, []);
      let obj2 = { value: analyticsLocations, children: closure_13(BottomSheet, obj3) };
      const AnalyticsLocationProvider = tmp11(6664).AnalyticsLocationProvider;
      let tmp18 = null != tmp6;
      BottomSheet = tmp11(6652).BottomSheet;
      if (!tmp18) {
        tmp18 = !tmp15;
      }
      if (!tmp18) {
        tmp18 = !tmp16;
      }
      obj3 = {
        showGradient: tmp18,
        scrollable: true,
        startExpanded: true,
        header: closure_13(BottomSheetTitleHeader, obj4),
        children: tmp19Result,
      };
      obj4 = { title: intl.string(activity(1126).t["OzOM/q"]) };
      BottomSheetTitleHeader = tmp11(6651).BottomSheetTitleHeader;
      intl = tmp11(1126).intl;
      if (null != tmp6) {
        const obj5 = { style: tmp.emptyState, Illustration: activity(9523).AppCrash, title: tmp6 };
        const EmptyState2 = tmp11(1188).EmptyState;
        tmp19Result = closure_13(EmptyState2, obj5);
      } else if (0 === stateFromStores.length && tmp13) {
        tmp19Result = closure_13(closure_17, {});
      } else {
        let tmp17Result2;
        const obj6 = { children: closure_13(View, obj7) };
        obj7 = { style: tmp.searchAndShareContainer, children: closure_13(SearchField, obj8) };
        obj8 = {
          size: "md",
          round: true,
          onChange: activity(9521).searchInviteSuggestions,
          placeholder: intl2.string(activity(1126).t.iI1gMg),
        };
        SearchField = tmp11(6554).SearchField;
        intl2 = tmp11(1126).intl;
        const items4 = [closure_13(View, obj6)];
        if (0 === stateFromStores.length && !tmp13) {
          const obj9 = { style: tmp.emptyState, title: intl3.string(activity(1126).t.ojoWgX) };
          const EmptyState = tmp11(1188).EmptyState;
          intl3 = tmp11(1126).intl;
          tmp17Result2 = closure_13(EmptyState, obj9);
        } else {
          const obj10 = {
            data: stateFromStores,
            error: tmp6,
            getSendState: callback,
            onInviteSent: callback2,
            onPressAvatar: callback1,
          };
          tmp17Result2 = closure_13(tmp2(17210), obj10);
        }
        const obj11 = { children: items4 };
        items4[1] = tmp17Result2;
        tmp19Result = closure_15(closure_14, obj11);
      }
      return closure_13(AnalyticsLocationProvider, obj2);
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/activities/panel/native/ActivityInviteSheet.tsx");

export default tmp6;
