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
  obj = { children: null };
  obj = { style: tmp.placeholderHeader };
  const items1 = [map1(View, obj), map1(View, { style: tmp.placeholderLabel }), items];
  obj.children = items1;
  return __initData(closure_1_14, obj);
}
const View = fn(17).View;
const InstantInviteSendStateStore = fn(9894);
({ setSendState: metroRequire, useInstantInviteSendStates: closure_7 } = InstantInviteSendStateStore);
const ActivityActionTypes = fn(1074).ActivityActionTypes;
const Constants = fn(7736);
({ InviteSendStates: c10, InviteTargetTypes: closure_11 } = Constants);
const NOOP_NULL = fn(1085).NOOP_NULL;
const jsxProd = fn(21);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
fn(4560);
let createStyles = { placeholderHeader: null, placeholderLabel: null, emptyState: null, searchAndShareContainer: null };
let size = {
  height: 16,
  width: "80%",
  margin: 16,
  marginBottom: 8,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
createStyles.placeholderHeader = size;
const size1 = {
  height: 16,
  width: "40%",
  margin: 16,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
createStyles.placeholderLabel = size1;
createStyles.emptyState = { backgroundColor: "transparent" };
createStyles = {
  borderTopWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  marginTop: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
  flexDirection: "column",
  gap: nativeDefault.space.PX_12,
};
createStyles.searchAndShareContainer = createStyles;
let closure_16 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/activities/panel/native/ActivityInviteSheet.tsx");

export default function ActivityInviteSheet(activity) {
  activity = activity.activity;
  let analyticsLocations;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  const tmp = closure_16();
  analyticsLocations = analyticsLocations(7162)(analyticsLocations(7182).ACTIVITY_INVITE_SHEET).analyticsLocations;
  const tmp2 = analyticsLocations;
  const tmp4 = analyticsLocations(7162);
  [tmp6, c2] = _slicedToArray(noop.useState(null), 2);
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
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    obj = { userId, sourceAnalyticsLocations: analyticsLocations };
    showUserProfileActionSheetDefault(obj);
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
            let obj = {
              channelId: tmp12,
              type: constants.JOIN,
              activity: tmp2,
              location: analyticsLocations(_undefined[13]).ACTIVITY_INVITE_SHEET,
            };
            const obj3 = analyticsLocations(_undefined[17]);
            const sendActivityInviteResult = analyticsLocations(_undefined[17]).sendActivityInvite(obj);
            analyticsLocations(_undefined[17])
              .sendActivityInvite(obj)
              .then(markInviteSent)
              .catch((error) => {
                _undefined(String(error));
              });
            const nextPromise = analyticsLocations(_undefined[17]).sendActivityInvite(obj).then(markInviteSent);
          } catch (tmp16) {
            const _String2 = String;
            _undefined(String(tmp16));
          }
        } else if (item.type === activity(_undefined[16]).RowTypes.DM) {
          try {
            obj = analyticsLocations(_undefined[17]);
            obj = {
              userId: tmp4,
              type: constants.JOIN,
              activity: tmp2,
              location: analyticsLocations(_undefined[13]).ACTIVITY_INVITE_SHEET,
            };
            const result = obj.sendActivityInviteUser(obj);
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
  let obj = activity(504);
  const items3 = [InviteSuggestionsStore];
  const stateFromStores = obj.useStateFromStores(items3, () => inviteSuggestionRows.getInviteSuggestionRows());
  const tmp5 = _slicedToArray(noop.useState(null), 2);
  [tmp13, c4] = _slicedToArray(noop.useState(false), 2);
  const effect = noop.useEffect(() => {
    _undefined2(true);
    const obj = { omitUserIds: new Set(), inviteTargetType: constants2.EMBEDDED_APPLICATION };
    const inviteSuggestions = obj.loadInviteSuggestions(obj);
    const set = new Set();
    inviteSuggestions.catch(NOOP_NULL).finally(() => {
      _undefined2(false);
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
  const intl = tmp11(1114).intl;
  obj1.title = intl.string(activity(1114).t["OzOM/q"]);
  obj.header = closure_13(activity(7149).BottomSheetTitleHeader, obj1);
  if (null != tmp6) {
    const obj2 = { style: tmp.emptyState, Illustration: tmp11(9849).AppCrash, title: tmp6 };
    let tmp19Result = closure_13(tmp11(1178).EmptyState, obj2);
  } else if (tmp15) {
    tmp19Result = closure_13(Loading, {});
  } else {
    let obj3 = { children: null };
    const obj4 = { style: tmp.searchAndShareContainer, children: null };
    const obj5 = { size: "md", isRound: true, onChange: tmp11(9847).searchInviteSuggestions, placeholder: null };
    const intl2 = tmp11(1114).intl;
    obj5.placeholder = intl2.string(tmp11(1114).t.iI1gMg);
    obj4.children = closure_13(tmp11(7050).SearchField, obj5);
    obj3.children = closure_13(View, obj4);
    const items4 = [closure_13(View, obj3)];
    if (tmp16) {
      const obj6 = { style: tmp.emptyState, title: null };
      const intl3 = tmp11(1114).intl;
      obj6.title = intl3.string(tmp11(1114).t.ojoWgX);
      let tmp17Result = closure_13(tmp11(1178).EmptyState, obj6);
    } else {
      const obj7 = {
        data: stateFromStores,
        error: tmp6,
        getSendState: callback,
        onInviteSent: callback2,
        onPressAvatar: callback1,
      };
      tmp17Result = closure_13(tmp2(17028), obj7);
    }
    const obj8 = { children: null };
    items4[1] = tmp17Result;
    obj8.children = items4;
    tmp19Result = closure_15(closure_14, obj8);
  }
  obj.children = tmp19Result;
  obj.children = closure_13(activity(7150).BottomSheet, obj);
  return closure_13(activity(7162).AnalyticsLocationProvider, obj);
}
