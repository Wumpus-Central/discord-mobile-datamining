// === Module 17209: ActivityInviteSheet ===

// Module 17209 (ActivityInviteSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7861 */;
import UserPlaceholderRowDefault from "UserPlaceholderRow" /* 9503 */;
import InviteSuggestionsActionCreators from "InviteSuggestionsActionCreators" /* 9521 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import InviteSuggestionsStore from "InviteSuggestionsStore" /* 9507 */;

require = fn;
const View = fn(17).View;
const InstantInviteSendStateStore = fn(9567);
({ setSendState: metroRequire, useInstantInviteSendStates: closure_7 } = InstantInviteSendStateStore);
const ActivityActionTypes = fn(1085).ActivityActionTypes;
const Constants = fn(7239);
({ InviteSendStates: c10, InviteTargetTypes: closure_11 } = Constants);
const NOOP_NULL = fn(1096).NOOP_NULL;
const jsxProd = fn(21);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { placeholderHeader: null, placeholderLabel: null, emptyState: null, searchAndShareContainer: null };
let size = { height: 16, width: "80%", margin: 16, marginBottom: 8, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2.placeholderHeader = size;
const size1 = { height: 16, width: "40%", margin: 16, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2.placeholderLabel = size1;
obj2.emptyState = { backgroundColor: "transparent" };
obj2.searchAndShareContainer = { borderTopWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, flexDirection: "column", gap: nativeDefault.space.PX_12 };
let closure_16 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(8);
  const tmp2 = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    let num4 = 0;
    do {
      let obj2 = { row: num4 };
      let arr = items.push(__initData2(UserPlaceholderRowDefault, obj2, num4));
      num4 = num4 + 1;
    } while (num4 < 10);
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp2.placeholderHeader) {
    const obj3 = { style: tmp2.placeholderHeader };
    const tmp11 = __initData2(View, obj3);
    cResult[1] = tmp2.placeholderHeader;
    cResult[2] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== tmp2.placeholderLabel) {
    const obj4 = { style: tmp2.placeholderLabel };
    const tmp15 = __initData2(View, obj4);
    cResult[3] = tmp2.placeholderLabel;
    cResult[4] = tmp15;
    let tmp12 = tmp15;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] === tmp8) {
    if (cResult[6] === tmp12) {
      let tmp16 = cResult[7];
    }
    return tmp16;
  }
  const obj5 = { children: null };
  const items1 = [tmp8, tmp12, first];
  obj5.children = items1;
  const tmp17 = closure_1_15(state, obj5);
  cResult[5] = tmp8;
  cResult[6] = tmp12;
  cResult[7] = tmp17;
  tmp16 = tmp17;
}) : (() => {
  const tmp = closure_16();
  const items = [];
  let num = 0;
  do {
    let obj = { row: num };
    let arr = items.push(__initData2(UserPlaceholderRowDefault, obj, num));
    num = num + 1;
  } while (num < 10);
  const obj2 = { children: null };
  const items1 = [__initData2(View, { style: tmp.placeholderHeader }), __initData2(View, { style: tmp.placeholderLabel }), items];
  obj2.children = items1;
  return closure_1_15(state, obj2);
});
ReactCompilerGating = fn(558);
let obj3 = { borderTopWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, flexDirection: "column", gap: nativeDefault.space.PX_12 };
size = fn(2);
let result = size.fileFinishedImporting("modules/activities/panel/native/ActivityInviteSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((activity) => {
  const cResult = activity(576).c(28);
  activity = activity.activity;
  const tmp4 = closure_16();
  let obj = activity(576);
  analyticsLocations = analyticsLocations(6664)(analyticsLocations(6688).ACTIVITY_INVITE_SHEET).analyticsLocations;
  const tmp5 = analyticsLocations(6664);
  let tmp6 = dependencyMap2;
  [tmp8, dependencyMap] = dependencyMap2(noop.useState(null), 2);
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
  dependencyMap2 = tmp10;
  if (activity.party != null) {
    class S {
      constructor(arg0) {
        return activity;
      }
    }
  }
  if (cResult[1] === undefined) {
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
          tmp2 = closure_0;
          if (null != closure_0) {
            party = tmp2.party;
            id = undefined;
            if (party != null) {
              id = party.id;
            }
            if (null != id) {
              markInviteSent = function markInviteSent() { ... };
              tmp20 = closure_1_6;
              tmp21 = closure_1_10;
              tmp22 = closure_1_6(id, activity.item.id, closure_1_10.SENDING);
              tmp23 = activity;
              tmp24 = closure_2;
              if (activity.type === activity(closure_2[18]).RowTypes.CHANNEL) {
                try {
                  tmp13 = analyticsLocations;
                  obj3 = analyticsLocations(tmp24[19]);
                  obj1 = { channelId: null, type: null, activity: null, location: null };
                  obj1.channelId = tmp12;
                  tmp14 = closure_1_9;
                  obj1.type = closure_1_9.JOIN;
                  obj1.activity = tmp2;
                  obj1.location = analyticsLocations(tmp24[15]).ACTIVITY_INVITE_SHEET;
                  sendActivityInviteResult = obj3.sendActivityInvite(obj1);
                  nextPromise = sendActivityInviteResult.then(markInviteSent);
                  catchPromise = nextPromise.catch(() => { ... });
                } catch (tmp16) {
                  tmp17 = closure_2;
                  tmp18 = globalThis;
                  _String2 = String;
                  tmp19 = closure_2(String(tmp16));
                }
              } else if (activity.type === tmp23(tmp24[18]).RowTypes.DM) {
                try {
                  tmp5 = analyticsLocations;
                  obj = analyticsLocations(tmp24[19]);
                  obj5 = { userId: null, type: null, activity: null, location: null };
                  obj5.userId = tmp4;
                  tmp6 = closure_1_9;
                  obj5.type = closure_1_9.JOIN;
                  obj5.activity = tmp2;
                  obj5.location = analyticsLocations(tmp24[15]).ACTIVITY_INVITE_SHEET;
                  result = obj.sendActivityInviteUser(obj5);
                  nextPromise1 = result.then(markInviteSent);
                  catchPromise1 = nextPromise1.catch(() => { ... });
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
          tmp2 = closure_0;
          if (null != closure_0) {
            party = tmp2.party;
            id = undefined;
            if (party != null) {
              id = party.id;
            }
            if (null != id) {
              markInviteSent = function markInviteSent() { ... };
              tmp20 = closure_1_6;
              tmp21 = closure_1_10;
              tmp22 = closure_1_6(id, activity.item.id, closure_1_10.SENDING);
              tmp23 = activity;
              tmp24 = closure_2;
              if (activity.type === activity(closure_2[18]).RowTypes.CHANNEL) {
                try {
                  tmp13 = analyticsLocations;
                  obj3 = analyticsLocations(tmp24[19]);
                  obj1 = { channelId: null, type: null, activity: null, location: null };
                  obj1.channelId = tmp12;
                  tmp14 = closure_1_9;
                  obj1.type = closure_1_9.JOIN;
                  obj1.activity = tmp2;
                  obj1.location = analyticsLocations(tmp24[15]).ACTIVITY_INVITE_SHEET;
                  sendActivityInviteResult = obj3.sendActivityInvite(obj1);
                  nextPromise = sendActivityInviteResult.then(markInviteSent);
                  catchPromise = nextPromise.catch(() => { ... });
                } catch (tmp16) {
                  tmp17 = closure_2;
                  tmp18 = globalThis;
                  _String2 = String;
                  tmp19 = closure_2(String(tmp16));
                }
              } else if (activity.type === tmp23(tmp24[18]).RowTypes.DM) {
                try {
                  tmp5 = analyticsLocations;
                  obj = analyticsLocations(tmp24[19]);
                  obj5 = { userId: null, type: null, activity: null, location: null };
                  obj5.userId = tmp4;
                  tmp6 = closure_1_9;
                  obj5.type = closure_1_9.JOIN;
                  obj5.activity = tmp2;
                  obj5.location = analyticsLocations(tmp24[15]).ACTIVITY_INVITE_SHEET;
                  result = obj.sendActivityInviteUser(obj5);
                  nextPromise1 = result.then(markInviteSent);
                  catchPromise1 = nextPromise1.catch(() => { ... });
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
          tmp2 = closure_0;
          if (null != closure_0) {
            party = tmp2.party;
            id = undefined;
            if (party != null) {
              id = party.id;
            }
            if (null != id) {
              markInviteSent = function markInviteSent() { ... };
              tmp20 = closure_1_6;
              tmp21 = closure_1_10;
              tmp22 = closure_1_6(id, activity.item.id, closure_1_10.SENDING);
              tmp23 = activity;
              tmp24 = closure_2;
              if (activity.type === activity(closure_2[18]).RowTypes.CHANNEL) {
                try {
                  tmp13 = analyticsLocations;
                  obj3 = analyticsLocations(tmp24[19]);
                  obj1 = { channelId: null, type: null, activity: null, location: null };
                  obj1.channelId = tmp12;
                  tmp14 = closure_1_9;
                  obj1.type = closure_1_9.JOIN;
                  obj1.activity = tmp2;
                  obj1.location = analyticsLocations(tmp24[15]).ACTIVITY_INVITE_SHEET;
                  sendActivityInviteResult = obj3.sendActivityInvite(obj1);
                  nextPromise = sendActivityInviteResult.then(markInviteSent);
                  catchPromise = nextPromise.catch(() => { ... });
                } catch (tmp16) {
                  tmp17 = closure_2;
                  tmp18 = globalThis;
                  _String2 = String;
                  tmp19 = closure_2(String(tmp16));
                }
              } else if (activity.type === tmp23(tmp24[18]).RowTypes.DM) {
                try {
                  tmp5 = analyticsLocations;
                  obj = analyticsLocations(tmp24[19]);
                  obj5 = { userId: null, type: null, activity: null, location: null };
                  obj5.userId = tmp4;
                  tmp6 = closure_1_9;
                  obj5.type = closure_1_9.JOIN;
                  obj5.activity = tmp2;
                  obj5.location = analyticsLocations(tmp24[15]).ACTIVITY_INVITE_SHEET;
                  result = obj.sendActivityInviteUser(obj5);
                  nextPromise1 = result.then(markInviteSent);
                  catchPromise1 = nextPromise1.catch(() => { ... });
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
      let tmp14 = U;
      const tmp13 = items;
    } else {
      class V {
        constructor(arg0) {
          closure_0 = activity;
          tmp2 = closure_0;
          if (null != closure_0) {
            party = tmp2.party;
            id = undefined;
            if (party != null) {
              id = party.id;
            }
            if (null != id) {
              markInviteSent = function markInviteSent() { ... };
              tmp20 = closure_1_6;
              tmp21 = closure_1_10;
              tmp22 = closure_1_6(id, activity.item.id, closure_1_10.SENDING);
              tmp23 = activity;
              tmp24 = closure_2;
              if (activity.type === activity(closure_2[18]).RowTypes.CHANNEL) {
                try {
                  tmp13 = analyticsLocations;
                  obj3 = analyticsLocations(tmp24[19]);
                  obj1 = { channelId: null, type: null, activity: null, location: null };
                  obj1.channelId = tmp12;
                  tmp14 = closure_1_9;
                  obj1.type = closure_1_9.JOIN;
                  obj1.activity = tmp2;
                  obj1.location = analyticsLocations(tmp24[15]).ACTIVITY_INVITE_SHEET;
                  sendActivityInviteResult = obj3.sendActivityInvite(obj1);
                  nextPromise = sendActivityInviteResult.then(markInviteSent);
                  catchPromise = nextPromise.catch(() => { ... });
                } catch (tmp16) {
                  tmp17 = closure_2;
                  tmp18 = globalThis;
                  _String2 = String;
                  tmp19 = closure_2(String(tmp16));
                }
              } else if (activity.type === tmp23(tmp24[18]).RowTypes.DM) {
                try {
                  tmp5 = analyticsLocations;
                  obj = analyticsLocations(tmp24[19]);
                  obj5 = { userId: null, type: null, activity: null, location: null };
                  obj5.userId = tmp4;
                  tmp6 = closure_1_9;
                  obj5.type = closure_1_9.JOIN;
                  obj5.activity = tmp2;
                  obj5.location = analyticsLocations(tmp24[15]).ACTIVITY_INVITE_SHEET;
                  result = obj.sendActivityInviteUser(obj5);
                  nextPromise1 = result.then(markInviteSent);
                  catchPromise1 = nextPromise1.catch(() => { ... });
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
      tmp14 = cResult[9];
    }
    const stateFromStores = tmp(504).useStateFromStores(tmp13, tmp14);
    const tmpResult = tmp(504);
    [tmp16, noop] = tmp6(noop.useState(false), 2);
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          tmp = closure_4(true);
          obj = closure_0(closure_2[21]);
          obj1 = { omitUserIds: null, inviteTargetType: null };
          set = new Set();
          obj1.omitUserIds = set;
          obj1.inviteTargetType = InviteTargetTypes.EMBEDDED_APPLICATION;
          inviteSuggestions = obj.loadInviteSuggestions(obj1);
          catchPromise = inviteSuggestions.catch(NOOP_NULL);
          cleanupPromise = catchPromise.finally(() => { ... });
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
      let tmp18 = items1;
    } else {
      class F {
        constructor() {
          tmp = closure_4(true);
          obj = closure_0(closure_2[21]);
          obj1 = { omitUserIds: null, inviteTargetType: null };
          set = new Set();
          obj1.omitUserIds = set;
          obj1.inviteTargetType = InviteTargetTypes.EMBEDDED_APPLICATION;
          inviteSuggestions = obj.loadInviteSuggestions(obj1);
          catchPromise = inviteSuggestions.catch(NOOP_NULL);
          cleanupPromise = catchPromise.finally(() => { ... });
          return;
        }
      }
      tmp18 = cResult[11];
    }
    const effect = noop.useEffect(F, tmp18);
    const _Symbol3 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          tmp = closure_4(true);
          obj = closure_0(closure_2[21]);
          obj1 = { omitUserIds: null, inviteTargetType: null };
          set = new Set();
          obj1.omitUserIds = set;
          obj1.inviteTargetType = InviteTargetTypes.EMBEDDED_APPLICATION;
          inviteSuggestions = obj.loadInviteSuggestions(obj1);
          catchPromise = inviteSuggestions.catch(NOOP_NULL);
          cleanupPromise = catchPromise.finally(() => { ... });
          return;
        }
      }
      let obj3 = { title: null };
      class U {
        constructor() {
          return closure_1_8.getInviteSuggestionRows();
        }
      }
      obj3.title = obj5.string(tmp(1126).t["OzOM/q"]);
      const tmp24 = closure_13(tmp(6651).BottomSheetTitleHeader, obj3);
      cResult[12] = tmp24;
    } else {
      class F {
        constructor() {
          tmp = closure_4(true);
          obj = closure_0(closure_2[21]);
          obj1 = { omitUserIds: null, inviteTargetType: null };
          set = new Set();
          obj1.omitUserIds = set;
          obj1.inviteTargetType = InviteTargetTypes.EMBEDDED_APPLICATION;
          inviteSuggestions = obj.loadInviteSuggestions(obj1);
          catchPromise = inviteSuggestions.catch(NOOP_NULL);
          cleanupPromise = catchPromise.finally(() => { ... });
          return;
        }
      }
    }
    if (cResult[13] === tmp8) {
      class F {
        constructor() {
          tmp = closure_4(true);
          obj = closure_0(closure_2[21]);
          obj1 = { omitUserIds: null, inviteTargetType: null };
          set = new Set();
          obj1.omitUserIds = set;
          obj1.inviteTargetType = InviteTargetTypes.EMBEDDED_APPLICATION;
          inviteSuggestions = obj.loadInviteSuggestions(obj1);
          catchPromise = inviteSuggestions.catch(NOOP_NULL);
          cleanupPromise = catchPromise.finally(() => { ... });
          return;
        }
      }
    }
    if (null != tmp8) {
      class F {
        constructor() {
          tmp = closure_4(true);
          obj = closure_0(closure_2[21]);
          obj1 = { omitUserIds: null, inviteTargetType: null };
          set = new Set();
          obj1.omitUserIds = set;
          obj1.inviteTargetType = InviteTargetTypes.EMBEDDED_APPLICATION;
          inviteSuggestions = obj.loadInviteSuggestions(obj1);
          catchPromise = inviteSuggestions.catch(NOOP_NULL);
          cleanupPromise = catchPromise.finally(() => { ... });
          return;
        }
      }
      let obj4 = { style: tmp4.emptyState, Illustration: null, title: null };
      class U {
        constructor() {
          return closure_1_8.getInviteSuggestionRows();
        }
      }
      obj4.Illustration = tmp(9523).AppCrash;
      obj4.title = tmp8;
      const tmp25 = closure_13(tmp26, obj4);
    } else {
      class F {
        constructor() {
          tmp = closure_4(true);
          obj = closure_0(closure_2[21]);
          obj1 = { omitUserIds: null, inviteTargetType: null };
          set = new Set();
          obj1.omitUserIds = set;
          obj1.inviteTargetType = InviteTargetTypes.EMBEDDED_APPLICATION;
          inviteSuggestions = obj.loadInviteSuggestions(obj1);
          catchPromise = inviteSuggestions.catch(NOOP_NULL);
          cleanupPromise = catchPromise.finally(() => { ... });
          return;
        }
      }
    }
    cResult[13] = tmp8;
    cResult[14] = R;
    cResult[15] = V;
    cResult[16] = H;
    cResult[17] = stateFromStores;
    cResult[18] = 0 === stateFromStores.length && !tmp16;
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
    cResult[21] = tmp25;
    const tmp20 = 0 === stateFromStores.length && tmp16;
    const tmp6Result = tmp6(noop.useState(false), 2);
  }
  if (activity.party != null) {
    class F {
      constructor() {
        tmp = closure_4(true);
        obj = closure_0(closure_2[21]);
        obj1 = { omitUserIds: null, inviteTargetType: null };
        set = new Set();
        obj1.omitUserIds = set;
        obj1.inviteTargetType = InviteTargetTypes.EMBEDDED_APPLICATION;
        inviteSuggestions = obj.loadInviteSuggestions(obj1);
        catchPromise = inviteSuggestions.catch(NOOP_NULL);
        cleanupPromise = catchPromise.finally(() => { ... });
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
  const tmp7 = dependencyMap2(noop.useState(null), 2);
}) : ((activity) => {
  activity = activity.activity;
  let analyticsLocations;
  dependencyMap = undefined;
  dependencyMap2 = undefined;
  noop = undefined;
  const tmp = closure_16();
  analyticsLocations = analyticsLocations(6664)(analyticsLocations(6688).ACTIVITY_INVITE_SHEET).analyticsLocations;
  const tmp2 = analyticsLocations;
  const tmp4 = analyticsLocations(6664);
  [tmp6, c2] = dependencyMap2(noop.useState(null), 2);
  const tmp7 = closure_7((arg0) => arg0);
  dependencyMap2 = tmp7;
  const items = [activity, tmp7];
  const items1 = [analyticsLocations];
  const callback = noop.useCallback((arg0) => {
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
  const callback1 = noop.useCallback((userId) => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    showUserProfileActionSheetDefault({ userId, sourceAnalyticsLocations: analyticsLocations });
  }, items1);
  const callback2 = noop.useCallback((item) => {
    if (null != item) {
      const party = tmp2.party;
      let id;
      if (party != null) {
        id = party.id;
      }
      if (null != id) {
        function markInviteSent() {
          if (null != id) {
            timestampProducer(tmp, item.item.id, constants.SENT);
          }
        }
        closure_1_6(id, item.item.id, constants2.SENDING);
        if (item.type === activity(_undefined[18]).RowTypes.CHANNEL) {
          try {
            const obj2 = { channelId: tmp12, type: constants.JOIN, activity: tmp2, location: analyticsLocations(_undefined[15]).ACTIVITY_INVITE_SHEET };
            const obj3 = analyticsLocations(_undefined[19]);
            const sendActivityInviteResult = analyticsLocations(_undefined[19]).sendActivityInvite(obj2);
            analyticsLocations(_undefined[19]).sendActivityInvite(obj2).then(markInviteSent).catch((error) => {
              _undefined(String(error));
            });
            const nextPromise = analyticsLocations(_undefined[19]).sendActivityInvite(obj2).then(markInviteSent);
          } catch (tmp16) {
            const _String2 = String;
            _undefined(String(tmp16));
          }
        } else if (item.type === activity(_undefined[18]).RowTypes.DM) {
          try {
            const obj4 = { userId: tmp4, type: constants.JOIN, activity: tmp2, location: analyticsLocations(_undefined[15]).ACTIVITY_INVITE_SHEET };
            const result = analyticsLocations(_undefined[19]).sendActivityInviteUser(obj4);
            const obj = analyticsLocations(_undefined[19]);
            result.then(markInviteSent).catch((error) => _undefined(String(error)));
            const nextPromise1 = result.then(markInviteSent);
          } catch (tmp8) {
            const _String = String;
            _undefined(String(tmp8));
          }
        }
      }
    }
  }, items2);
  const tmp5 = dependencyMap2(noop.useState(null), 2);
  const items3 = [InviteSuggestionsStore];
  const stateFromStores = activity(504).useStateFromStores(items3, () => inviteSuggestionRows.getInviteSuggestionRows());
  let obj = activity(504);
  [tmp13, c4] = dependencyMap2(noop.useState(false), 2);
  const effect = noop.useEffect(() => {
    _undefined2(true);
    const obj2 = { omitUserIds: null, inviteTargetType: null };
    const obj = InviteSuggestionsActionCreators;
    obj2.omitUserIds = new Set();
    obj2.inviteTargetType = constants2.EMBEDDED_APPLICATION;
    const inviteSuggestions = obj.loadInviteSuggestions(obj2);
    const set = new Set();
    inviteSuggestions.catch(NOOP_NULL).finally(() => {
      _undefined2(false);
    });
  }, []);
  let obj2 = { value: analyticsLocations, children: null };
  let tmp18 = null != tmp6;
  if (!tmp18) {
    tmp18 = !tmp15;
  }
  if (!tmp18) {
    tmp18 = !tmp16;
  }
  let obj3 = { showGradient: tmp18, scrollable: true, startExpanded: true, header: null, children: null };
  let obj4 = { title: null };
  const intl = tmp11(1126).intl;
  obj4.title = intl.string(activity(1126).t["OzOM/q"]);
  obj3.header = closure_13(activity(6651).BottomSheetTitleHeader, obj4);
  if (null != tmp6) {
    const obj5 = { style: tmp.emptyState, Illustration: tmp11(9523).AppCrash, title: tmp6 };
    let tmp19Result = closure_13(tmp11(1188).EmptyState, obj5);
  } else if (tmp15) {
    tmp19Result = closure_13(closure_17, {});
  } else {
    const obj6 = { children: null };
    const obj7 = { style: tmp.searchAndShareContainer, children: null };
    const obj8 = { size: "md", round: true, onChange: tmp11(9521).searchInviteSuggestions, placeholder: null };
    const intl2 = tmp11(1126).intl;
    obj8.placeholder = intl2.string(tmp11(1126).t.iI1gMg);
    obj7.children = closure_13(tmp11(6554).SearchField, obj8);
    obj6.children = closure_13(View, obj7);
    const items4 = [closure_13(View, obj6), ];
    if (tmp16) {
      const obj9 = { style: tmp.emptyState, title: null };
      const intl3 = tmp11(1126).intl;
      obj9.title = intl3.string(tmp11(1126).t.ojoWgX);
      let tmp17Result2 = closure_13(tmp11(1188).EmptyState, obj9);
    } else {
      const obj10 = { data: stateFromStores, error: tmp6, getSendState: callback, onInviteSent: callback2, onPressAvatar: callback1 };
      tmp17Result2 = closure_13(tmp2(17210), obj10);
    }
    const obj11 = { children: null };
    items4[1] = tmp17Result2;
    obj11.children = items4;
    tmp19Result = closure_15(closure_14, obj11);
  }
  obj3.children = tmp19Result;
  obj2.children = closure_13(activity(6652).BottomSheet, obj3);
  return closure_13(activity(6664).AnalyticsLocationProvider, obj2);
});