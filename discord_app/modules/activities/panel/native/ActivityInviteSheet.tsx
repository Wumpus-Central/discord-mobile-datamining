// discord_app/modules/activities/panel/native/ActivityInviteSheet.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef8928 from "../../../main_tabs_v2/native/shared_components/user_list/UserPlaceholderRow.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import setSendState from "../../../instant_invite/InstantInviteSendStateStore.tsx";
import _computeRows from "../../../../stores/InviteSuggestionsStore.tsx";
import { ActivityActionTypes } from "../../../../Constants.tsx";
import InviteSendStates from "../../../instant_invite/Constants.tsx";
import { NOOP_NULL } from "../../../../../discord_common/js/shared/Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
function Loading() {
  const tmp = callback5();
  const items = [];
  let num = 0;
  do {
    let obj = { row: null };
    obj[0] = num;
    let arr = items.push(callback3(_modDef8928, obj, num));
    num = num + 1;
  } while (num < 10);
  obj = { style: tmp.placeholderHeader };
  const items1 = [callback3(View, obj), callback3(View, { style: tmp.placeholderLabel }), items];
  obj[0] = items1;
  return callback4(closure_14, obj);
}
({ setSendState: closure_6, useInstantInviteSendStates: error } = setSendState);
({ InviteSendStates: c10, InviteTargetTypes: unpackModuleId } = InviteSendStates);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
const createCacheKey = { height: 16, width: "80%", margin: 16, marginBottom: 8, borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 16, width: "40%", margin: 16, borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
createCacheKey[2] = { backgroundColor: "transparent" };
createCacheKey[3] = { borderTopWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, marginTop: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_8, paddingHorizontal: ThemesDefault.space.PX_12, flexDirection: "column", gap: ThemesDefault.space.PX_12 };
let closure_16 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/activities/panel/native/ActivityInviteSheet.tsx");

export default function ActivityInviteSheet(activity) {
  activity = activity.activity;
  let analyticsLocations;
  dependencyMap = undefined;
  let callback;
  let React;
  const tmp = callback5();
  analyticsLocations = analyticsLocations(7139)(analyticsLocations(7159).ACTIVITY_INVITE_SHEET).analyticsLocations;
  const tmp2 = analyticsLocations;
  const tmp4 = analyticsLocations(7139);
  [tmp6, c2] = callback(React.useState(null), 2);
  const tmp7 = callback2((arg0) => arg0);
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
      if (table[id] != null) {
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
    closure_0 = item;
    if (null != closure_0) {
      const party = tmp2.party;
      let id;
      if (party != null) {
        id = party.id;
      }
      if (null != id) {
        function markInviteSent(result) {
          if (null != id) {
            closure_2_6(tmp, item.item.id, closure_2_10.SENT);
          }
        }
        closure_1_6(id, item.item.id, closure_1_10.SENDING);
        if (item.type === activity(_undefined[16]).RowTypes.CHANNEL) {
          try {
            let obj = { channelId: null, type: null, activity: null, location: null };
            obj[0] = tmp12;
            obj[1] = ActivityActionTypes.JOIN;
            obj[2] = tmp2;
            obj[3] = analyticsLocations(_undefined[13]).ACTIVITY_INVITE_SHEET;
            const obj3 = analyticsLocations(_undefined[17]);
            const sendActivityInviteResult = analyticsLocations(_undefined[17]).sendActivityInvite(obj);
            analyticsLocations(_undefined[17]).sendActivityInvite(obj).then(markInviteSent).catch((error) => {
              callback(String(error));
            });
            const nextPromise = analyticsLocations(_undefined[17]).sendActivityInvite(obj).then(markInviteSent);
          } catch (tmp16) {
            const _String2 = String;
            _undefined(String(tmp16));
          }
        } else if (item.type === activity(_undefined[16]).RowTypes.DM) {
          try {
            obj = analyticsLocations(_undefined[17]);
            obj = { userId: null, type: null, activity: null, location: null };
            obj[0] = tmp4;
            obj[1] = ActivityActionTypes.JOIN;
            obj[2] = tmp2;
            obj[3] = analyticsLocations(_undefined[13]).ACTIVITY_INVITE_SHEET;
            const result = obj.sendActivityInviteUser(obj);
            result.then(markInviteSent).catch((error) => callback(String(error)));
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
  const items3 = [closure_8];
  const stateFromStores = obj.useStateFromStores(items3, () => inviteSuggestionRows.getInviteSuggestionRows());
  const tmp5 = callback(React.useState(null), 2);
  [tmp13, c4] = callback(React.useState(false), 2);
  const effect = React.useEffect(() => {
    _undefined2(true);
    activity(_undefined[19]);
    const obj = { omitUserIds: new Set(), inviteTargetType: closure_1_11.EMBEDDED_APPLICATION };
    const inviteSuggestions = obj.loadInviteSuggestions(obj);
    const set = new Set();
    inviteSuggestions.catch(NOOP_NULL).finally(() => {
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
  obj1 = { title: null };
  const intl = tmp11(1236).intl;
  obj1[0] = intl.string(activity(1236).t["OzOM/q"]);
  obj[3] = callback(activity(6949).BottomSheetTitleHeader, obj1);
  if (null != tmp6) {
    const obj2 = { style: null, Illustration: null, title: null };
    obj2[0] = tmp.emptyState;
    obj2[1] = tmp11(12362).AppCrash;
    obj2[2] = tmp6;
    let tmp19Result = callback(tmp11(1297).EmptyState, obj2);
  } else if (tmp15) {
    tmp19Result = callback(Loading, {});
  } else {
    let obj3 = { children: null };
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.searchAndShareContainer;
    const obj5 = { size: "md", isRound: true, onChange: null, placeholder: null };
    obj5[2] = tmp11(11501).searchInviteSuggestions;
    const intl2 = tmp11(1236).intl;
    obj5[3] = intl2.string(tmp11(1236).t.iI1gMg);
    obj4[1] = callback(tmp11(7337).SearchField, obj5);
    obj3[0] = callback(View, obj4);
    const items4 = [callback(View, obj3), ];
    if (tmp16) {
      const obj6 = { style: null, title: null };
      obj6[0] = tmp.emptyState;
      const intl3 = tmp11(1236).intl;
      obj6[1] = intl3.string(tmp11(1236).t.ojoWgX);
      let tmp17Result = callback(tmp11(1297).EmptyState, obj6);
    } else {
      const obj7 = { data: null, error: null, getSendState: null, onInviteSent: null, onPressAvatar: null };
      obj7[0] = stateFromStores;
      obj7[1] = tmp6;
      obj7[2] = callback;
      obj7[3] = callback2;
      obj7[4] = callback1;
      tmp17Result = callback(tmp2(16247), obj7);
    }
    const obj8 = { children: null };
    items4[1] = tmp17Result;
    obj8[0] = items4;
    tmp19Result = callback2(closure_14, obj8);
  }
  obj[4] = tmp19Result;
  obj[1] = callback(activity(6950).BottomSheet, obj);
  return callback(activity(7139).AnalyticsLocationProvider, obj);
};