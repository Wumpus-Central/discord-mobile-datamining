// discord_app/modules/main_tabs_v2/native/friends/screens/SuggestedFriendsScreen.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import showUserProfileActionSheetDefault from "../../../../user_profile/native/showUserProfileActionSheet.tsx";
import ContactSuggestionRow from "../components/ContactSuggestionRow.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ AnalyticEvents: hasOwnProperty, AnalyticsSections: metroRequire } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5091);
const obj2 = { emptyContainer: { flex: 1, paddingTop: nativeDefault.space.PX_32 }, container: { flex: 1 } };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, paddingTop: nativeDefault.space.PX_32 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/SuggestedFriendsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SuggestedFriendsScreen() {
  const cResult = analyticsLocations(setAdded[7]).c(26);
  closure_9();
  const obj = analyticsLocations(setAdded[7]);
  const tmp5 = added;
  analyticsLocations = added(setAdded[8])(added(setAdded[9]).SUGGESTED_FRIENDS).analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      added(setAdded[10]).track(userRowWithSubLabelHeight1.FRIEND_ADD_VIEWED, { friend_add_type: constants.FRIENDS_SUGGESTED_FRIENDS_MODAL });
    };
    let items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp7 = fn;
    tmp8 = items;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const effect = friendSuggestions.useEffect(tmp7, tmp8);
  const tmp10 = tmp5(setAdded[11])();
  added = tmp10.added;
  setAdded = tmp10.setAdded;
  friendSuggestions = tmp10.friendSuggestions;
  const tmp6 = added(setAdded[8]);
  const userRowWithSubLabelHeight = analyticsLocations(setAdded[12]).useUserRowWithSubLabelHeight(1);
  const tmpResult = analyticsLocations(setAdded[12]);
  const userRowWithSubLabelHeight1 = analyticsLocations(setAdded[12]).useUserRowWithSubLabelHeight(2);
  if (cResult[2] !== analyticsLocations) {
    const fn2 = function h(id) {
      showUserProfileActionSheetDefault({ userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations });
    };
    cResult[2] = analyticsLocations;
    cResult[3] = fn2;
    let tmp13 = fn2;
  } else {
    tmp13 = cResult[3];
  }
  constants = tmp13;
  if (cResult[4] === added) {
    if (cResult[5] === friendSuggestions) {
      if (cResult[6] === tmp13) {
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          class A {
            constructor() {
              return;
            }
          }
          cResult[9] = A;
        } else {
          class A {
            constructor() {
              return;
            }
          }
        }
        if (cResult[10] === friendSuggestions) {
          class A {
            constructor() {
              return;
            }
          }
        }
        class M {
          constructor(arg0, arg1) {
            tmp = friendSuggestions[arg1];
            mutualFriendsCount = undefined;
            if (tmp != null) {
              mutualFriendsCount = tmp.mutualFriendsCount;
            }
            tmp3 = null != mutualFriendsCount;
            if (tmp3) {
              mutualFriendsCount1 = undefined;
              if (tmp != null) {
                mutualFriendsCount1 = tmp.mutualFriendsCount;
              }
              num = 0;
              tmp3 = mutualFriendsCount1 > 0;
            }
            return tmp3 ? closure_5 : closure_4;
          }
        }
        cResult[10] = friendSuggestions;
        cResult[11] = userRowWithSubLabelHeight;
        cResult[12] = userRowWithSubLabelHeight1;
        cResult[13] = M;
      }
    }
  }
  class I {
    constructor(arg0, arg1) {
      closure_0 = arg1;
      tmp = friendSuggestions[arg1];
      closure_1 = tmp;
      closure_2 = arg1 === friendSuggestions.length - 1;
      mutualFriendsCount = undefined;
      if (tmp != null) {
        mutualFriendsCount = tmp.mutualFriendsCount;
      }
      tmp3 = null != mutualFriendsCount;
      if (tmp3) {
        mutualFriendsCount1 = undefined;
        if (tmp != null) {
          mutualFriendsCount1 = tmp.mutualFriendsCount;
        }
        num = 0;
        tmp3 = mutualFriendsCount1 > 0;
      }
      str = "contactSuggestionNoMutualCount";
      if (tmp3) {
        str = "contactSuggestionMutualCount";
      }
      obj = {
        type: "custom",
        itemType: str,
        key: tmp.user.id,
        component() {
              return React5(ContactSuggestionRow.ContactSuggestionRow, { added: added.includes(suggestedFriend), suggestedFriend, start: 0 === closure_0, end, onPress, onAddSuggestion() { ... }, location: constants.FRIENDS_SUGGESTED_FRIENDS_MODAL });
            }
      };
      return obj;
    }
  }
  cResult[4] = added;
  cResult[5] = friendSuggestions;
  cResult[6] = tmp13;
  cResult[7] = setAdded;
  cResult[8] = I;
  const tmpResult2 = analyticsLocations(setAdded[12]);
}) : (function SuggestedFriendsScreen() {
  const tmp = closure_9();
  const analyticsLocations = added(setAdded[8])(added(setAdded[9]).SUGGESTED_FRIENDS).analyticsLocations;
  const effect = friendSuggestions.useEffect(() => {
    added(setAdded[10]).track(userRowWithSubLabelHeight1.FRIEND_ADD_VIEWED, { friend_add_type: callback.FRIENDS_SUGGESTED_FRIENDS_MODAL });
  }, []);
  const tmp6 = added(setAdded[11])();
  added = tmp6.added;
  setAdded = tmp6.setAdded;
  friendSuggestions = tmp6.friendSuggestions;
  const tmp2 = added;
  const tmp4 = added(setAdded[8]);
  const userRowWithSubLabelHeight = analyticsLocations(setAdded[12]).useUserRowWithSubLabelHeight(1);
  const obj = analyticsLocations(setAdded[12]);
  const userRowWithSubLabelHeight1 = analyticsLocations(setAdded[12]).useUserRowWithSubLabelHeight(2);
  let items = [analyticsLocations];
  const onPress = friendSuggestions.useCallback((id) => {
    showUserProfileActionSheetDefault({ userId: id.id, localUser: id, sourceAnalyticsLocations: analyticsLocations });
  }, items);
  const items1 = [added, friendSuggestions, onPress, setAdded];
  const callback1 = friendSuggestions.useCallback((arg0, arg1) => {
    closure_0 = arg1;
    const suggestedFriend = tmp;
    const end = arg1 === friendSuggestions.length - 1;
    let mutualFriendsCount;
    if (friendSuggestions[arg1] != null) {
      mutualFriendsCount = tmp.mutualFriendsCount;
    }
    let tmp3 = null != mutualFriendsCount;
    if (tmp3) {
      let mutualFriendsCount1;
      if (tmp != null) {
        mutualFriendsCount1 = tmp.mutualFriendsCount;
      }
      tmp3 = mutualFriendsCount1 > 0;
    }
    let str = "contactSuggestionNoMutualCount";
    if (tmp3) {
      str = "contactSuggestionMutualCount";
    }
    return {
      type: "custom",
      itemType: str,
      key: friendSuggestions[arg1].user.id,
      component() {
        return React5(ContactSuggestionRow.ContactSuggestionRow, {
          added: added.includes(suggestedFriend),
          suggestedFriend,
          start: 0 === closure_0,
          end,
          onPress,
          onAddSuggestion() {
            return closure_2((arg0) => {
              const items = [];
              items[HermesBuiltin.arraySpread(arg0, 0)] = closure_1_1;
              return items;
            });
          },
          location: constants.FRIENDS_SUGGESTED_FRIENDS_MODAL
        });
      }
    };
  }, items1);
  const items2 = [friendSuggestions, userRowWithSubLabelHeight, userRowWithSubLabelHeight1];
  const callback2 = friendSuggestions.useCallback(() => {

  }, []);
  const callback3 = friendSuggestions.useCallback((arg0, arg1) => {
    let mutualFriendsCount;
    if (friendSuggestions[arg1] != null) {
      mutualFriendsCount = tmp.mutualFriendsCount;
    }
    let tmp3 = null != mutualFriendsCount;
    if (tmp3) {
      let mutualFriendsCount1;
      if (tmp != null) {
        mutualFriendsCount1 = tmp.mutualFriendsCount;
      }
      tmp3 = mutualFriendsCount1 > 0;
    }
    return tmp3 ? userRowWithSubLabelHeight1 : userRowWithSubLabelHeight;
  }, items2);
  const obj3 = { value: analyticsLocations, children: null };
  const items3 = [closure_7(added(setAdded[15]), { absolute: true }), ];
  const obj4 = { style: tmp.container, children: null };
  if (0 !== friendSuggestions.length) {
    const obj5 = { sections: null, getItemProps: null, getSectionProps: null, getItemSize: null, insetStart: 8 };
    const items4 = [friendSuggestions.length];
    obj5.sections = items4;
    obj5.getItemProps = callback1;
    obj5.getSectionProps = callback2;
    obj5.getItemSize = callback3;
    let tmp15Result = closure_7(tmp7(tmp3[16]).UsersFastList, obj5);
  } else {
    const obj6 = { style: tmp.emptyContainer, children: null };
    const obj7 = { title: null, disableBackgroundOverlay: true };
    const intl = tmp7(tmp3[18]).intl;
    obj7.title = intl.string(tmp7(tmp3[18]).t.pxFW8V);
    obj6.children = closure_7(tmp2(tmp3[17]), obj7);
    tmp15Result = closure_7(tmp16, obj6);
    const tmp2Result = tmp2(tmp3[17]);
  }
  obj4.children = tmp15Result;
  items3[1] = closure_7(userRowWithSubLabelHeight, obj4);
  obj3.children = items3;
  return closure_8(analyticsLocations(setAdded[8]).AnalyticsLocationProvider, obj3);
});