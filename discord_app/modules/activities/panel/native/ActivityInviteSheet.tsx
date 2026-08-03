// === Module 15875: Loading ===

// Module 15875 (Loading)
import _slicedToArray from "_slicedToArray";
import loadInviteSuggestions from "loadInviteSuggestions";
import { View } from "module_10496";
import setSendState from "setSendState";
import _computeRows from "_computeRows";
import { ActivityActionTypes } from "ME";
import InviteSendStates from "InviteSendStates";
import { NOOP_NULL } from "sum";
import jsxProd from "RedesignBottomSheetTitleHeaderBase";
import createCacheKey from "createCacheKey";

let c10;
let closure_14;
let closure_15;
let closure_6;
let error;
let map1;
let unpackModuleId;
const require = arg1;
function Loading() {
  let tmp2;
  const tmp = createCacheKey();
  const items = [];
  let num = 0;
  do {
    tmp2 = callback3;
    let tmp3 = importDefault;
    let tmp4 = dependencyMap;
    let obj = { row: null };
    obj[0] = num;
    let arr = items.push(callback3(importDefault(8362), obj, num));
    num = num + 1;
  } while (num < 10);
  obj = { children: null };
  obj = { style: tmp.placeholderHeader };
  const items1 = [tmp2(View, obj), tmp2(View, { style: tmp.placeholderLabel }), items];
  obj[0] = items1;
  return callback4(closure_14, obj);
}
({ setSendState: closure_6, useInstantInviteSendStates: error } = setSendState);
({ InviteSendStates: c10, InviteTargetTypes: unpackModuleId } = InviteSendStates);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
createCacheKey = { placeholderHeader: null, placeholderLabel: null, emptyState: null, searchAndShareContainer: null };
createCacheKey = { height: 16, width: "80%", margin: 16, marginBottom: 8, borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 16, width: "40%", margin: 16, borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED };
createCacheKey[2] = { backgroundColor: "transparent" };
let obj1 = { height: 16, width: "40%", margin: 16, borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED };
createCacheKey[3] = { borderTopWidth: 1, borderColor: require("Themes").colors.BORDER_SUBTLE, marginTop: require("Themes").space.PX_8, paddingVertical: require("Themes").space.PX_8, paddingHorizontal: require("Themes").space.PX_12, flexDirection: "column", gap: require("Themes").space.PX_12 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { borderTopWidth: 1, borderColor: require("Themes").colors.BORDER_SUBTLE, marginTop: require("Themes").space.PX_8, paddingVertical: require("Themes").space.PX_8, paddingHorizontal: require("Themes").space.PX_12, flexDirection: "column", gap: require("Themes").space.PX_12 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/activities/panel/native/ActivityInviteSheet.tsx");

export default function ActivityInviteSheet(activity) {
  let c2;
  let c4;
  let tmp13;
  let tmp6;
  activity = activity.activity;
  let analyticsLocations;
  let dependencyMap;
  let callback;
  let React;
  const tmp = createCacheKey();
  analyticsLocations = analyticsLocations(5519)(analyticsLocations(5539).ACTIVITY_INVITE_SHEET).analyticsLocations;
  const tmp2 = analyticsLocations;
  const tmp4 = analyticsLocations(5519);
  [tmp6, c2] = callback(React.useState(null), 2);
  const tmp7 = callback2((arg0) => arg0);
  callback = tmp7;
  const items = [activity, tmp7];
  const items1 = [analyticsLocations];
  callback = React.useCallback((arg0) => {
    const party = activity.party;
    let id;
    if (party != null) {
      id = party.id;
    }
    let tmp3 = null;
    if (null != id) {
      let tmp6;
      if (_undefined2[id] != null) {
        tmp6 = tmp5[tmp2];
      }
      tmp3 = tmp6;
    }
    return tmp3;
  }, items);
  const items2 = [activity];
  const callback1 = React.useCallback((userId) => {
    let obj = analyticsLocations(_undefined[14]);
    obj.hideActionSheet();
    obj = { userId, sourceAnalyticsLocations: analyticsLocations };
    analyticsLocations(_undefined[15])(obj);
  }, items1);
  callback2 = React.useCallback((item) => {
    let closure_0 = item;
    if (null != closure_0) {
      const party = tmp2.party;
      let id;
      if (party != null) {
        id = party.id;
      }
      if (null != id) {
        function markInviteSent() {
          if (null != id) {
            outer2_6(tmp, item.item.id, outer2_10.SENT);
          }
        }
        outer1_6(id, item.item.id, outer1_10.SENDING);
        if (item.type === activity(_undefined[16]).RowTypes.CHANNEL) {
          try {
            let obj = { channelId: null, type: null, activity: null, location: null };
            obj[0] = tmp12;
            obj[1] = outer1_9.JOIN;
            obj[2] = tmp2;
            obj[3] = analyticsLocations(tmp24[13]).ACTIVITY_INVITE_SHEET;
            const obj3 = analyticsLocations(tmp24[17]);
            const sendActivityInviteResult = analyticsLocations(tmp24[17]).sendActivityInvite(obj);
            analyticsLocations(tmp24[17]).sendActivityInvite(obj).then(markInviteSent).catch((arg0) => {
              callback(String(arg0));
            });
            const nextPromise = analyticsLocations(tmp24[17]).sendActivityInvite(obj).then(markInviteSent);
          } catch (tmp16) {
            const _String2 = String;
            _undefined(String(tmp16));
          }
        } else if (item.type === tmp23(tmp24[16]).RowTypes.DM) {
          try {
            obj = analyticsLocations(tmp24[17]);
            obj = { userId: null, type: null, activity: null, location: null };
            obj[0] = tmp4;
            obj[1] = outer1_9.JOIN;
            obj[2] = tmp2;
            obj[3] = analyticsLocations(tmp24[13]).ACTIVITY_INVITE_SHEET;
            const result = obj.sendActivityInviteUser(obj);
            result.then(markInviteSent).catch((arg0) => callback(String(arg0)));
            const nextPromise1 = result.then(markInviteSent);
          } catch (tmp8) {
            const _String = String;
            _undefined(String(tmp8));
          }
        }
      }
    }
  }, items2);
  let obj = activity(589);
  const items3 = [_computeRows];
  const stateFromStores = obj.useStateFromStores(items3, () => inviteSuggestionRows.getInviteSuggestionRows());
  const tmp5 = callback(React.useState(null), 2);
  [tmp13, c4] = callback(React.useState(false), 2);
  const effect = React.useEffect(() => {
    _undefined3(true);
    let obj = activity(_undefined[19]);
    obj = { omitUserIds: null, inviteTargetType: null };
    obj[0] = new Set();
    obj[1] = outer1_11.EMBEDDED_APPLICATION;
    const inviteSuggestions = obj.loadInviteSuggestions(obj);
    const set = new Set();
    inviteSuggestions.catch(outer1_12).finally(() => {
      callback(false);
    });
  }, []);
  obj = { value: analyticsLocations, children: null };
  let tmp18 = null != tmp6;
  if (!tmp18) {
    tmp18 = !tmp15;
  }
  if (!tmp18) {
    tmp18 = !tmp16;
  }
  obj = { showGradient: tmp18, scrollable: true, startExpanded: true, header: null, children: null };
  const obj1 = { title: null };
  const intl = tmp11(1236).intl;
  obj1[0] = intl.string(activity(1236).t["OzOM/q"]);
  obj[3] = closure_13(activity(5246).BottomSheetTitleHeader, obj1);
  if (null != tmp6) {
    const obj2 = { style: null, Illustration: null, title: null };
    obj2[0] = tmp.emptyState;
    obj2[1] = tmp11(12250).AppCrash;
    obj2[2] = tmp6;
    let tmp19Result = tmp17(tmp11(1297).EmptyState, obj2);
  } else if (tmp15) {
    tmp19Result = tmp17(Loading, {});
  } else {
    let obj3 = { children: null };
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.searchAndShareContainer;
    const obj5 = { size: "md", isRound: true, onChange: null, placeholder: null };
    obj5[2] = tmp11(10099).searchInviteSuggestions;
    const intl2 = tmp11(1236).intl;
    obj5[3] = intl2.string(tmp11(1236).t.iI1gMg);
    obj4[1] = tmp17(tmp11(9248).SearchField, obj5);
    obj3[0] = tmp17(View, obj4);
    const items4 = [tmp17(View, obj3), ];
    if (tmp16) {
      const obj6 = { style: null, title: null };
      obj6[0] = tmp.emptyState;
      const intl3 = tmp11(1236).intl;
      obj6[1] = intl3.string(tmp11(1236).t.ojoWgX);
      let tmp17Result = tmp17(tmp11(1297).EmptyState, obj6);
    } else {
      const obj7 = { data: null, error: null, getSendState: null, onInviteSent: null, onPressAvatar: null };
      obj7[0] = stateFromStores;
      obj7[1] = tmp6;
      obj7[2] = callback;
      obj7[3] = callback2;
      obj7[4] = callback1;
      tmp17Result = tmp17(tmp2(15876), obj7);
    }
    const obj8 = { children: null };
    items4[1] = tmp17Result;
    obj8[0] = items4;
    tmp19Result = closure_15(closure_14, obj8);
    const tmp19 = closure_15;
    const tmp20 = closure_14;
  }
  obj[4] = tmp19Result;
  obj[1] = closure_13(activity(5247).BottomSheet, obj);
  return closure_13(activity(5519).AnalyticsLocationProvider, obj);
};