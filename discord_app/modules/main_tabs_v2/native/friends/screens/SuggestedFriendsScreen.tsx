// discord_app/modules/main_tabs_v2/native/friends/screens/SuggestedFriendsScreen.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import showUserProfileActionSheetDefault from "../../../../user_profile/native/showUserProfileActionSheet.tsx";
import ContactSuggestionRow from "../components/ContactSuggestionRow.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticEvents: hasOwnProperty, AnalyticsSections: metroRequire } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4836);
const obj2 = { emptyContainer: { flex: 1, paddingTop: nativeDefault.space.PX_32 }, container: { flex: 1 } };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/SuggestedFriendsScreen.tsx");

export default function SuggestedFriendsScreen() {
  const tmp = closure_9();
  const analyticsLocations = added(setAdded[6])(added(setAdded[7]).SUGGESTED_FRIENDS).analyticsLocations;
  const effect = friendSuggestions.useEffect(() => {
    added(setAdded[8]).track(userRowWithSubLabelHeight1.FRIEND_ADD_VIEWED, {
      friend_add_type: callback.FRIENDS_SUGGESTED_FRIENDS_MODAL,
    });
  }, []);
  const tmp6 = added(setAdded[9])();
  added = tmp6.added;
  setAdded = tmp6.setAdded;
  friendSuggestions = tmp6.friendSuggestions;
  const tmp2 = added;
  const tmp4 = added(setAdded[6]);
  const userRowWithSubLabelHeight = analyticsLocations(setAdded[10]).useUserRowWithSubLabelHeight(1);
  const obj = analyticsLocations(setAdded[10]);
  const userRowWithSubLabelHeight1 = analyticsLocations(setAdded[10]).useUserRowWithSubLabelHeight(2);
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
          location: constants.FRIENDS_SUGGESTED_FRIENDS_MODAL,
        });
      },
    };
  }, items1);
  const items2 = [friendSuggestions, userRowWithSubLabelHeight, userRowWithSubLabelHeight1];
  const callback2 = friendSuggestions.useCallback(() => {}, []);
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
  const items3 = [closure_7(added(setAdded[13]), { absolute: true })];
  const obj4 = { style: tmp.container, children: null };
  if (0 !== friendSuggestions.length) {
    const obj5 = { sections: null, getItemProps: null, getSectionProps: null, getItemSize: null, insetStart: 8 };
    const items4 = [friendSuggestions.length];
    obj5.sections = items4;
    obj5.getItemProps = callback1;
    obj5.getSectionProps = callback2;
    obj5.getItemSize = callback3;
    let tmp15Result = closure_7(tmp7(tmp3[14]).UsersFastList, obj5);
  } else {
    const obj6 = { style: tmp.emptyContainer, children: null };
    const obj7 = { title: null, disableBackgroundOverlay: true };
    const intl = tmp7(tmp3[16]).intl;
    obj7.title = intl.string(tmp7(tmp3[16]).t.pxFW8V);
    obj6.children = closure_7(tmp2(tmp3[15]), obj7);
    tmp15Result = closure_7(tmp16, obj6);
    const tmp2Result = tmp2(tmp3[15]);
  }
  obj4.children = tmp15Result;
  items3[1] = closure_7(userRowWithSubLabelHeight, obj4);
  obj3.children = items3;
  return closure_8(analyticsLocations(setAdded[6]).AnalyticsLocationProvider, obj3);
}
