// discord_app/modules/activities/panel/native/ActivityInviteSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import UserPlaceholderRowDefault from "../../../main_tabs_v2/native/shared_components/user_list/UserPlaceholderRow.tsx";
import InviteSuggestionsActionCreators from "../../../../actions/InviteSuggestionsActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import InviteSuggestionsStore from "../../../../stores/InviteSuggestionsStore.tsx";

require = fn;
function Loading() {
  const tmp = closure_16();
  const items = [];
  let num = 0;
  do {
    let obj = { row: num };
    let arr = items.push(map1(UserPlaceholderRowDefault, obj, num));
    num = num + 1;
  } while (num < 10);
  const obj2 = { children: null };
  const items1 = [map1(View, { style: tmp.placeholderHeader }), map1(View, { style: tmp.placeholderLabel }), items];
  obj2.children = items1;
  return __initData(closure_1_14, obj2);
}
const View = fn(17).View;
const InstantInviteSendStateStore = fn(10026);
({ setSendState: metroRequire, useInstantInviteSendStates: closure_7 } = InstantInviteSendStateStore);
const ActivityActionTypes = fn(1074).ActivityActionTypes;
const Constants = fn(7841);
({ InviteSendStates: c10, InviteTargetTypes: closure_11 } = Constants);
const NOOP_NULL = fn(1085).NOOP_NULL;
const jsxProd = fn(21);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4639);
let obj2 = { placeholderHeader: null, placeholderLabel: null, emptyState: null, searchAndShareContainer: null };
let size = {
  height: 16,
  width: "80%",
  margin: 16,
  marginBottom: 8,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
obj2.placeholderHeader = size;
const size1 = {
  height: 16,
  width: "40%",
  margin: 16,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
obj2.placeholderLabel = size1;
obj2.emptyState = { backgroundColor: "transparent" };
obj2.searchAndShareContainer = {
  borderTopWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  marginTop: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
  flexDirection: "column",
  gap: nativeDefault.space.PX_12,
};
let closure_16 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/activities/panel/native/ActivityInviteSheet.tsx");

export default function ActivityInviteSheet(activity) {
  activity = activity.activity;
  let analyticsLocations;
  dependencyMap = undefined;
  noop = undefined;
  const tmp = closure_16();
  analyticsLocations = analyticsLocations(7269)(analyticsLocations(7289).ACTIVITY_INVITE_SHEET).analyticsLocations;
  const tmp2 = analyticsLocations;
  const tmp4 = analyticsLocations(7269);
  [tmp6, c2] = noop.useState(null);
  const tmp7 = closure_7((arg0) => arg0);
  _slicedToArray = tmp7;
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
        if (item.type === activity(_undefined[16]).RowTypes.CHANNEL) {
          try {
            const obj2 = {
              channelId: tmp12,
              type: constants.JOIN,
              activity: tmp2,
              location: analyticsLocations(_undefined[13]).ACTIVITY_INVITE_SHEET,
            };
            const obj3 = analyticsLocations(_undefined[17]);
            const sendActivityInviteResult = analyticsLocations(_undefined[17]).sendActivityInvite(obj2);
            analyticsLocations(_undefined[17])
              .sendActivityInvite(obj2)
              .then(markInviteSent)
              .catch((error) => {
                _undefined(String(error));
              });
            const nextPromise = analyticsLocations(_undefined[17]).sendActivityInvite(obj2).then(markInviteSent);
          } catch (tmp16) {
            const _String2 = String;
            _undefined(String(tmp16));
          }
        } else if (item.type === activity(_undefined[16]).RowTypes.DM) {
          try {
            const obj4 = {
              userId: tmp4,
              type: constants.JOIN,
              activity: tmp2,
              location: analyticsLocations(_undefined[13]).ACTIVITY_INVITE_SHEET,
            };
            const result = analyticsLocations(_undefined[17]).sendActivityInviteUser(obj4);
            const obj = analyticsLocations(_undefined[17]);
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
  const tmp5 = _slicedToArray(noop.useState(null), 2);
  const items3 = [InviteSuggestionsStore];
  const stateFromStores = activity(504).useStateFromStores(items3, () =>
    inviteSuggestionRows.getInviteSuggestionRows(),
  );
  let obj = activity(504);
  [tmp13, c4] = noop.useState(false);
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
  const intl = tmp11(1115).intl;
  obj4.title = intl.string(activity(1115).t["OzOM/q"]);
  obj3.header = closure_13(activity(7256).BottomSheetTitleHeader, obj4);
  if (null != tmp6) {
    const obj5 = { style: tmp.emptyState, Illustration: tmp11(9981).AppCrash, title: tmp6 };
    let tmp19Result = closure_13(tmp11(1177).EmptyState, obj5);
  } else if (tmp15) {
    tmp19Result = closure_13(Loading, {});
  } else {
    const obj6 = { children: null };
    const obj7 = { style: tmp.searchAndShareContainer, children: null };
    const obj8 = { size: "md", isRound: true, onChange: tmp11(9979).searchInviteSuggestions, placeholder: null };
    const intl2 = tmp11(1115).intl;
    obj8.placeholder = intl2.string(tmp11(1115).t.iI1gMg);
    obj7.children = closure_13(tmp11(7157).SearchField, obj8);
    obj6.children = closure_13(View, obj7);
    const items4 = [closure_13(View, obj6)];
    if (tmp16) {
      const obj9 = { style: tmp.emptyState, title: null };
      const intl3 = tmp11(1115).intl;
      obj9.title = intl3.string(tmp11(1115).t.ojoWgX);
      let tmp17Result2 = closure_13(tmp11(1177).EmptyState, obj9);
    } else {
      const obj10 = {
        data: stateFromStores,
        error: tmp6,
        getSendState: callback,
        onInviteSent: callback2,
        onPressAvatar: callback1,
      };
      tmp17Result2 = closure_13(tmp2(17177), obj10);
    }
    const obj11 = { children: null };
    items4[1] = tmp17Result2;
    obj11.children = items4;
    tmp19Result = closure_15(closure_14, obj11);
  }
  obj3.children = tmp19Result;
  obj2.children = closure_13(activity(7257).BottomSheet, obj3);
  return closure_13(activity(7269).AnalyticsLocationProvider, obj2);
}
