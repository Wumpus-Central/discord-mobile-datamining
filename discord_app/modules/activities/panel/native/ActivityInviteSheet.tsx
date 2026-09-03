// discord_app/modules/activities/panel/native/ActivityInviteSheet.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef9944 from "../../../main_tabs_v2/native/shared_components/user_list/UserPlaceholderRow.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import setSendState from "../../../instant_invite/InstantInviteSendStateStore.tsx";
import closure_8 from "../../../../stores/InviteSuggestionsStore.tsx";
import { ActivityActionTypes } from "../../../../Constants.tsx";
import InviteSendStates from "../../../instant_invite/Constants.tsx";
import { NOOP_NULL } from "../../../../../discord_common/js/shared/Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function Loading() {
  let tmp2;
  const tmp = callback5();
  const items = [];
  let num = 0;
  do {
    tmp2 = callback3;
    let tmp3 = importDefault;
    let tmp4 = dependencyMap;
    let obj = { row: null };
    obj[0] = num;
    let arr = items.push(callback3(_modDef9944, obj, num));
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
createCacheKey = {
  height: 16,
  width: "80%",
  margin: 16,
  marginBottom: 8,
  borderRadius: ThemesDefault.radii.sm,
  backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED,
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = {
  height: 16,
  width: "40%",
  margin: 16,
  borderRadius: ThemesDefault.radii.sm,
  backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED,
};
createCacheKey[2] = { backgroundColor: "transparent" };
let obj1 = {
  height: 16,
  width: "40%",
  margin: 16,
  borderRadius: ThemesDefault.radii.sm,
  backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED,
};
createCacheKey[3] = {
  borderTopWidth: 1,
  borderColor: ThemesDefault.colors.BORDER_SUBTLE,
  marginTop: ThemesDefault.space.PX_8,
  paddingVertical: ThemesDefault.space.PX_8,
  paddingHorizontal: ThemesDefault.space.PX_12,
  flexDirection: "column",
  gap: ThemesDefault.space.PX_12,
};
let closure_16 = createCacheKey.createStyles(createCacheKey);
let obj2 = {
  borderTopWidth: 1,
  borderColor: ThemesDefault.colors.BORDER_SUBTLE,
  marginTop: ThemesDefault.space.PX_8,
  paddingVertical: ThemesDefault.space.PX_8,
  paddingHorizontal: ThemesDefault.space.PX_12,
  flexDirection: "column",
  gap: ThemesDefault.space.PX_12,
};
let result = require("set").fileFinishedImporting("modules/activities/panel/native/ActivityInviteSheet.tsx");

export default function ActivityInviteSheet(activity) {
  activity = activity.activity;
  let analyticsLocations;
  dependencyMap = undefined;
  let callback;
  let React;
  const tmp = callback5();
  analyticsLocations = analyticsLocations(5962)(analyticsLocations(5982).ACTIVITY_INVITE_SHEET).analyticsLocations;
  const tmp2 = analyticsLocations;
  const tmp4 = analyticsLocations(5962);
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
        function markInviteSent() {
          if (null != id) {
            closure_2_6(tmp, item.item.id, closure_2_10.SENT);
          }
        }
        closure_1_6(id, item.item.id, closure_1_10.SENDING);
        if (item.type === activity(_undefined[16]).RowTypes.CHANNEL) {
          try {
            let obj = { channelId: null, type: null, activity: null, location: null };
            obj[0] = tmp12;
            obj[1] = closure_1_9.JOIN;
            obj[2] = tmp2;
            obj[3] = analyticsLocations(tmp24[13]).ACTIVITY_INVITE_SHEET;
            const obj3 = analyticsLocations(tmp24[17]);
            const sendActivityInviteResult = analyticsLocations(tmp24[17]).sendActivityInvite(obj);
            analyticsLocations(tmp24[17])
              .sendActivityInvite(obj)
              .then(markInviteSent)
              .catch((arg0) => {
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
            obj[1] = closure_1_9.JOIN;
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
  let obj = activity(586);
  const items3 = [closure_8];
  const stateFromStores = obj.useStateFromStores(items3, () => inviteSuggestionRows.getInviteSuggestionRows());
  const tmp5 = callback(React.useState(null), 2);
  [tmp13, c4] = callback(React.useState(false), 2);
  const effect = React.useEffect(() => {
    _undefined2(true);
    let obj = activity(_undefined[19]);
    obj = { omitUserIds: new Set(), inviteTargetType: closure_1_11.EMBEDDED_APPLICATION };
    const inviteSuggestions = obj.loadInviteSuggestions(obj);
    const set = new Set();
    inviteSuggestions.catch(closure_1_12).finally(() => {
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
  const intl = tmp11(1233).intl;
  obj1[0] = intl.string(activity(1233).t["OzOM/q"]);
  obj[3] = closure_13(activity(5630).BottomSheetTitleHeader, obj1);
  if (null != tmp6) {
    const obj2 = { style: null, Illustration: null, title: null };
    obj2[0] = tmp.emptyState;
    obj2[1] = tmp11(9966).AppCrash;
    obj2[2] = tmp6;
    let tmp19Result = tmp17(tmp11(1296).EmptyState, obj2);
  } else if (tmp15) {
    tmp19Result = tmp17(Loading, {});
  } else {
    let obj3 = { children: null };
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.searchAndShareContainer;
    const obj5 = { size: "md", isRound: true, onChange: null, placeholder: null };
    obj5[2] = tmp11(9964).searchInviteSuggestions;
    const intl2 = tmp11(1233).intl;
    obj5[3] = intl2.string(tmp11(1233).t.iI1gMg);
    obj4[1] = tmp17(tmp11(6231).SearchField, obj5);
    obj3[0] = tmp17(View, obj4);
    const items4 = [tmp17(View, obj3)];
    if (tmp16) {
      const obj6 = { style: null, title: null };
      obj6[0] = tmp.emptyState;
      const intl3 = tmp11(1233).intl;
      obj6[1] = intl3.string(tmp11(1233).t.ojoWgX);
      let tmp17Result = tmp17(tmp11(1296).EmptyState, obj6);
    } else {
      const obj7 = { data: null, error: null, getSendState: null, onInviteSent: null, onPressAvatar: null };
      obj7[0] = stateFromStores;
      obj7[1] = tmp6;
      obj7[2] = callback;
      obj7[3] = callback2;
      obj7[4] = callback1;
      tmp17Result = tmp17(tmp2(16864), obj7);
    }
    const obj8 = { children: null };
    items4[1] = tmp17Result;
    obj8[0] = items4;
    tmp19Result = closure_15(closure_14, obj8);
    const tmp19 = closure_15;
    const tmp20 = closure_14;
  }
  obj[4] = tmp19Result;
  obj[1] = closure_13(activity(5631).BottomSheet, obj);
  return closure_13(activity(5962).AnalyticsLocationProvider, obj);
}
